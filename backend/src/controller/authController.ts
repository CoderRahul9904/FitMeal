import { comparePass, handleHashPass } from "../services/hashService"
import User from "../models/User"
import jwt from "jsonwebtoken"
import { body } from "../util/emailUtil";
import sendEmail from "../services/emailService";
const cookie=require("cookie")

const JWT_SECRET = process.env.JWT_SECRET!
const REFRESH_SECRET = process.env.REFRESH_SECRET!

export const registration = async (req: any, res: any, next: any) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await handleHashPass(password)

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    const subject = 'Welcome to FitMeal! Your journey to a healthier lifestyle starts here!'
    const emailBoby = body(name)
    try {
      await sendEmail(email, subject, emailBoby)
    } catch (err) {
      console.log(err)
    }
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err: any) {
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      res.status(409).json({ message: 'Username already exists' });
    } else {
      res.status(500).json({ message: 'Error registering user' });
    }
  }
};

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await comparePass(password, user.password);
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Invalid credentials" });

    const accessToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' }); 
    const refreshToken = jwt.sign({ id: user._id }, REFRESH_SECRET, { expiresIn: '7d' }); 

    // const decoded = jwt.verify(refreshToken, REFRESH_SECRET!)
    // console.log(decoded)

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    });

    const cookies = cookie.parse(req.headers.cookie || '');
    const refreshToken1 = cookies.refreshToken;
    console.log("Refresh Token: ", refreshToken1)
    return res.status(200).json({ message: "User registered successfully",user } );
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}


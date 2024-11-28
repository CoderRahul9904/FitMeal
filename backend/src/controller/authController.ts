import { comparePass, handleHashPass} from "../services/hashService"
import User from "../models/User"
import jwt from "jsonwebtoken"
import { body } from "../util/emailUtil";
import sendEmail from "../services/emailService";




const JWT_SECRET=process.env.JWT_SECRET!

export const registration = async (req:any,res:any,next:any)=> {
    try {
      const { email, password, name } = req.body;
      const hashedPassword =await handleHashPass(password)
  
      const user = new User({
        name,
        email,
        password:hashedPassword,
      });
      await user.save();
      const subject='Welcome to FitMeal! Your journey to a healthier lifestyle starts here!'
      const emailBoby=body(name)
      try{
        await sendEmail(email,subject,emailBoby)
      }catch(err){
        console.log(err)
      }
      res.status(201).json({ message: "User registered successfully", user });
    } catch (err:any) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
            res.status(409).json({ message: 'Username already exists' });
        } else {
            res.status(500).json({ message: 'Error registering user' });
        }
    }
  };

export const login=async (req:any, res:any) => {
    const { email,password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        const passwordMatch = await comparePass(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: 'Incorrect password',
            });
        }
        const token=jwt.sign({username: email},JWT_SECRET,{expiresIn: '1h'})
        res.status(200).json({token})
    }catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
}

  
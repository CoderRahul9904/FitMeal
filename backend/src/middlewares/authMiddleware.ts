

import jwt, { JwtPayload } from 'jsonwebtoken';
const cookie=require("cookie")

const JWT_SECRET = process.env.JWT_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_SECRET; 


const verifyAccessToken = (req: any) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  console.log(cookies)
  const token = cookies.accessToken;

  if (!token) throw new Error('Authentication token not found');

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
    return decoded; 
  } catch (error) {
    throw new Error('Access token expired');
  }
};



const refreshAccessToken = (req: any,res:any) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  const refreshToken = cookies.refreshToken;

  if (!refreshToken) throw new Error('Refresh token not found');

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET!) as JwtPayload
    const newAccessToken = jwt.sign({ id: decoded.user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie(`accessToken`, newAccessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000, 
    });
    
    return decoded; 
  } catch (error) {
    throw new Error('Invalid refresh token');
  }
};


const authenticateUser = (req: any,res:any) => {
  try {
    return verifyAccessToken(req); 
  } catch (error:any) {
    if (error.message === 'Access token expired') {
      const newDecode = refreshAccessToken(req,res);
      return  newDecode ;
    } else {
      throw error; 
    }
  }
};



export default authenticateUser
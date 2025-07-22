import { GraphQLError } from 'graphql';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'rahul-jwt-sceret-key';
console.log("JWT_SECRET: ", JWT_SECRET)
const REFRESH_TOKEN_SECRET = process.env.REFRESH_SECRET; 


const verifyAccessToken = async(req: any) => {
  const token=req.headers.authorization.split(" ")[1]
  console.log("YAha toen Bhai: ", token)
  if (!token) throw new GraphQLError('Authentication token not found');
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
    console.log("Decoded token: ", decoded)
    return decoded; 
  } catch (error) {
    console.error("Token verification error:", error);
    throw new GraphQLError('Access token expired');
  }
};


// const refreshAccessToken = (req: any, res: any) => {
//   const refreshToken = req.body.refreshToken;
//   if (!refreshToken)  throw new GraphQLError("Please login again");
//   try {
    
//     const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET!) as JwtPayload;
    
//     // Generate new access token with extended expiration
//     const newAccessToken = jwt.sign({ id: decoded.user._id }, JWT_SECRET, { expiresIn: '1h' });
    
//     return decoded
//   } catch (error) {
//     return new GraphQLError('Invalid refresh token');
//   }
// };


const authenticateUser = async(req: any,res:any) => {
  try {
    return await verifyAccessToken(req); 
  } catch (error:any) {
    console.error("Authentication error:", error.message);
    // if (error.message === 'Access token expired') {
    //   return refreshAccessToken(req,res);
    // } else {
      throw new GraphQLError("User ko authorized Karo"); 
    // }
  }
};



export default authenticateUser
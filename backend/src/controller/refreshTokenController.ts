import jwt, { JwtPayload } from "jsonwebtoken"
import {jwtDecode} from "jwt-decode";
import isTokenExpired from "../util/tokenExpiry";

const REFRESH_TOKEN_SECRET = process.env.REFRESH_SECRET; 
const JWT_SECRET = process.env.JWT_SECRET!;

export const refreshAccessToken = (req: any, res: any) => {
    const refreshToken = req.body.refreshToken;
    console.log(refreshToken)
    if (!refreshToken) return res.status(401).json({ message: "Please login again" });
    try {
        const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET!) as JwtPayload;
        if (!isTokenExpired(refreshToken)) return res.status(401).json({ message: "Refresh token expired" });

        const newAccessToken = jwt.sign({ id: decoded.user._id }, JWT_SECRET, { expiresIn: '1h' });
        console.log(newAccessToken)

        return res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        return res.status(401).json({ message: "Invalid refresh token" });
    }
};

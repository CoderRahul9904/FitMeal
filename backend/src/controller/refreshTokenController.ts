import jwt, { JwtPayload } from "jsonwebtoken"
import isTokenExpired from "../util/tokenExpiry";

const REFRESH_TOKEN_SECRET = process.env.REFRESH_SECRET; 
const JWT_SECRET = process.env.JWT_SECRET!;

export const refreshAccessToken = async(req: any, res: any) => {
    const refreshToken = req.body.refreshToken;
    console.log("Here is refresh token",refreshToken)
    if (!refreshToken) return res.status(401).json({ message: "Please login again" });
    try {
        const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET!) as JwtPayload;
        console.log("ajjajjjajajajjajaj: ", decoded)
        if (isTokenExpired(refreshToken)) return res.status(401).json({ message: "Refresh token expired" });
        const newAccessToken =jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '1h' });
        console.log("New Token yaha hai",newAccessToken)

        return res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        return res.status(401).json({ message: "Invalid refresh token" });
    }
};

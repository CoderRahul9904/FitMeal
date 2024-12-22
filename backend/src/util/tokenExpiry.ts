import {jwtDecode} from "jwt-decode";

function isTokenExpired(token:any) {
  try {
    const decoded = jwtDecode(token); 
    const currentTime = Date.now() / 1000; 
    console.log(decoded!.exp! < currentTime);
    return decoded!.exp! < currentTime; 
  } catch (error) {
    console.error("Failed to decode token:", error);
    console.log("true")
    return true;
  }
}

export default isTokenExpired;

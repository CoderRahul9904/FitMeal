import bcrypt from "bcryptjs"

const Saltrounds=10
export const handleHashPass= async (password:string)=>{
    return await bcrypt.hash( password, Saltrounds) as string
}

export const comparePass= async ( password:string,Hashpassword:string)=>{
    return await bcrypt.compare(password, Hashpassword )
}


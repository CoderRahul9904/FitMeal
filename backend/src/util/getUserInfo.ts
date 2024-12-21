import User from "../models/User"


export const getUser=async(id:any)=>{
    return await User.findById('67478f7f79e975f8a3cfa37a')
}
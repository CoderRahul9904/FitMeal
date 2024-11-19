export interface IUser extends Document {
    name: string;
    email: string;
    password: string; 
    role: 'user' | 'admin';  
    createdAt: Date; 
    updatedAt: Date; 
  }
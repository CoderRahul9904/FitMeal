
require('dotenv').config({ path: '../config.env' });
import mail from "nodemailer"

const transporter=mail.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASS
    }
})

const sendEmail=async (to:any,subject:any,text:any)=>{
    try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to,
          subject,
          text,
        });
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Error sending email:', error);
      }
}

export default  sendEmail;
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', // or use 'smtp.gmail.com'
    auth: {
        user: process.env.GMAIL, // Your email
        pass: process.env.GMAIL_PASSWORD, // Your email app password (not the regular password)
    },
});

export default transporter;
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
class sendEmail {
    static sendVerification(to, subject, context) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const handlebarOptions = {
            viewEngine: {
                parttialsDir: path.resolve("./views/"),
                defaultLayout: false,
            },
            viewPath: path.resolve("./views/"),
        };
        transporter.use("compile", hbs(handlebarOptions));
        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            template: "email",
            context,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return "email not sent:", err;
            // return console.log('email sent', success);
        });
    }
    static sendWelcome(to, subject, context) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const handlebarOptions = {
            viewEngine: {
                parttialsDir: path.resolve("./views/"),
                defaultLayout: false,
            },
            viewPath: path.resolve("./views/"),
        };
        transporter.use("compile", hbs(handlebarOptions));
        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            template: "welcome.email",
            context,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return err;
            return success;
        });
    }

    static confirmPayment(to, subject, context) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const handlebarOptions = {
            viewEngine: {
                parttialsDir: path.resolve("./views/"),
                defaultLayout: false,
            },
            viewPath: path.resolve("./views/"),
        };
        transporter.use("compile", hbs(handlebarOptions));
        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            template: "payment",
            context,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return err;
            return success;
        });
    }

    static sendUpdatePassword(to, subject, text) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // transporter.use('compile', hbs(handlebarOptions));
        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            html: text,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return err;
            return success;
        });
    }

    static sendEmail(to, subject, context) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const handlebarOptions = {
            viewEngine: {
                parttialsDir: path.resolve("./views/"),
                defaultLayout: false,
            },
            viewPath: path.resolve("./views/"),
        };
        transporter.use("compile", hbs(handlebarOptions));

        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            template: "verifyotp",
            context,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return "email not sent:", err;
            // return console.log('email sent', success);
        });
    }

    static sendPromotion(to, subject, context) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const handlebarOptions = {
            viewEngine: {
                parttialsDir: path.resolve("./views/"),
                defaultLayout: false,
            },
            viewPath: path.resolve("./views/"),
        };
        transporter.use("compile", hbs(handlebarOptions));

        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            template: "promotion",
            context,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return "email not sent:", err;
            // return console.log('email sent', success);
        });
    }
    static sendEmailDisableEnable(to, subject, text) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            text,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return "email not sent:", err;
            return console.log("email sent", success);
        });
    }
    static sendEmailSubscriber(to, subject, context) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const handlebarOptions = {
            viewEngine: {
                parttialsDir: path.resolve("./views/"),
                defaultLayout: false,
            },
            viewPath: path.resolve("./views/"),
        };
        transporter.use("compile", hbs(handlebarOptions));
        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            template: "email",
            context,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return "email not sent:", err;
            // return console.log('email sent', success);
        });
    }
    static sendProductExpired(to, subject, text) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // transporter.use('compile', hbs(handlebarOptions));
        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            html: text,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return err;
            return success;
        });
    }


    static sendNotifications(to,subject, text) {
        const { USER_EMAIL, USER_PASS } = process.env;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // transporter.use('compile', hbs(handlebarOptions));
        const mailOptions = {
            from: USER_EMAIL,
            to,
            subject,
            html:text,
        };
        transporter.sendMail(mailOptions, (err, success) => {
            if (err) return err;
            return success;
        });
    }


}




export default sendEmail;

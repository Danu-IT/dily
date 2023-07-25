import nodemailer from "nodemailer";

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMRT_USER,
        pass: process.env.SMRT_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMRT_USER,
      to,
      subject: "Активация аккаунта в " + process.env.API_URL,
      text: "",
      html: `
        <div>
            <h1>Для активации перейдите по <a href="${link}">ссылке</a></h1>
        </div>
      `,
    });
  }
}

export default new MailService();

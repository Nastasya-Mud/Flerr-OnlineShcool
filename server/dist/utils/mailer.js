"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPasswordResetEmail = exports.createTransport = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const createTransport = () => {
    const transporter = nodemailer_1.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    return transporter;
};
exports.createTransport = createTransport;
const sendPasswordResetEmail = async (to, resetToken) => {
    const transporter = (0, exports.createTransport)();
    const resetUrl = `${process.env.CLIENT_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
    await transporter.sendMail({
        from: `Flerr School <${process.env.SMTP_USER}>`,
        to,
        subject: 'Восстановление пароля — Flerr School',
        html: `
      <p>Вы запросили восстановление пароля.</p>
      <p>Перейдите по ссылке для сброса пароля (ссылка действует 1 час):</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>Если вы не запрашивали восстановление, просто проигнорируйте это письмо.</p>
    `,
    });
};
exports.sendPasswordResetEmail = sendPasswordResetEmail;
//# sourceMappingURL=mailer.js.map
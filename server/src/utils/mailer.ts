import nodemailer from 'nodemailer';

export const createTransport = () => {
  const transporter = nodemailer.createTransport({
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

export const sendPasswordResetEmail = async (to: string, resetToken: string) => {
  const transporter = createTransport();
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



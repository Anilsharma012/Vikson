import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sharmaishwar970@gmail.com",
    pass: "fyoz xnmk cfcl agoc", // 2FA app password, not normal password
  },
});

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: "sharmaishwar970@gmail.com",
    subject: "New Contact Message",
    html: `
      <h3>Contact Form Submission</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/quote", async (req, res) => {
  const { name, email, phone, product, message } = req.body;

  const mailOptions = {
    from: email,
    to: "sharmaishwar970@gmail.com",
    subject: "New Quote Request",
    html: `
      <h3>Quote Request</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Product:</b> ${product}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Quote sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

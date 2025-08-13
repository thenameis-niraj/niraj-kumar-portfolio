// Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Config
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// Schema & Model
const contactSchema = new mongoose.Schema({
  from_email: String,
  from_name: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", contactSchema);

// Route - Handle Contact Form Submission
app.post("/submit-form", async (req, res) => {
  try {
    const { from_email, from_name, subject, message } = req.body;

    if (!from_email || !from_name || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to DB
    const newContact = new Contact({
      from_email,
      from_name,
      subject,
      message,
    });
    await newContact.save();

    res
      .status(200)
      .json({ success: true, message: "Form submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import { type Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          message: "All fields are required: name, email, subject, message",
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          message: "Please provide a valid email address",
        });
      }

      console.log("Contact form submission:", { name, email, subject, message });

      return res.status(200).json({
        message: "Message received successfully! We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        message: "An error occurred while processing your request. Please try again.",
      });
    }
  });

  // Health check endpoint for Vercel
  app.get("/api/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  const httpServer = createServer(app);
  return httpServer;
}

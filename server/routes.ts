import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required: name, email, subject, message" 
        });
      }
      
      // Email validation using simple regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address" 
        });
      }
      
      // In a real implementation, you would use nodemailer to send an email
      // For demo purposes, we'll just log the submission and return success
      console.log("Contact form submission:", { name, email, subject, message });
      
      return res.status(200).json({ 
        message: "Message received successfully! We'll get back to you soon." 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

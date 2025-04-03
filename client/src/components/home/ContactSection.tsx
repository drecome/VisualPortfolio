import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { SOCIAL_LINKS } from '@/lib/constants';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import useScrollReveal from '@/lib/hooks/useScrollReveal';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useScrollReveal<HTMLDivElement>({ once: true });
  const infoRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-primary-light">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          subtitle="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss potential collaboration? I'd love to hear from you."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            ref={formRef}
            className="bg-primary p-8 rounded-lg reveal"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-2xl font-serif font-bold text-white mb-6">Send a Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-primary-light border border-gray-700 rounded-md p-3 text-white focus:border-secondary focus:outline-none transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-primary-light border border-gray-700 rounded-md p-3 text-white focus:border-secondary focus:outline-none transition-colors" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-primary-light border border-gray-700 rounded-md p-3 text-white focus:border-secondary focus:outline-none transition-colors" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-primary-light border border-gray-700 rounded-md p-3 text-white focus:border-secondary focus:outline-none transition-colors resize-none" 
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-secondary hover:bg-secondary-light text-white font-accent py-3 px-8 rounded-md transition-colors inline-flex items-center gap-2"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={16} className={isSubmitting ? 'animate-pulse' : ''} />
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info & Map */}
          <motion.div 
            ref={infoRef}
            className="reveal"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h4>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Location</h5>
                  <p className="text-gray-300">123 Design Street, Creative District, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Email</h5>
                  <a href="mailto:hello@alexanderchen.com" className="text-gray-300 hover:text-secondary transition-colors">
                    hello@alexanderchen.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Phone</h5>
                  <a href="tel:+12345678901" className="text-gray-300 hover:text-secondary transition-colors">
                    +1 (234) 567-8901
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <h4 className="text-xl font-serif font-bold text-white mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-10">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-secondary hover:text-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            
            {/* Map */}
            <div className="h-64 rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <i className="fas fa-map-marked-alt text-4xl mb-4 block"></i>
                <span>Interactive Map</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { pageTransition, fadeIn } from '@/lib/animations';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import ConfettiEffect from '@/components/shared/ConfettiEffect';

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Trigger confetti celebration
    setShowConfetti(true);
    
    // Reset form
    form.reset();
    setIsSubmitting(false);
    
    // Reset confetti after a delay
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-primary-light min-h-screen"
    >
      <Helmet>
        <title>Contact | Alex Parker - Game Developer</title>
        <meta name="description" content="Get in touch with Alex Parker for game development projects, inquiries, or collaborations." />
      </Helmet>
      
      <div className="pt-40 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Get In Touch"
            title="Let's Discuss Your Game Project"
            description="Have a game idea or need a developer for your project? I'd love to hear from you and explore how we can create something amazing together."
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <motion.div 
              variants={fadeIn('right', 0.2)}
              className="bg-primary p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-md mr-4">
                    <Phone className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-md mr-4">
                    <Mail className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">alex@gamedev.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-md mr-4">
                    <MapPin className="text-secondary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <i className="fab fa-github text-white"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <i className="fab fa-twitch text-white"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              variants={fadeIn('left', 0.2)}
              className="lg:col-span-2 bg-primary p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="bg-gray-800 border-gray-700 text-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="bg-gray-800 border-gray-700 text-white" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Message subject" 
                            className="bg-gray-800 border-gray-700 text-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="bg-gray-800 border-gray-700 text-white min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-secondary hover:bg-secondary-light text-white font-accent px-8 py-6 h-auto"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
      <Toaster />
      
      {/* Celebration confetti effect */}
      <ConfettiEffect 
        run={showConfetti} 
        duration={5000}
        numberOfPieces={300}
      />
    </motion.div>
  );
};

export default ContactPage;
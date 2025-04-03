import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionHeading from '@/components/shared/SectionHeading';
import ContactSection from '@/components/home/ContactSection';
import { pageTransition } from '@/lib/animations';

const ContactPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Helmet>
        <title>Contact | Alexander Chen - Designer & Developer</title>
        <meta name="description" content="Get in touch with Alexander Chen to discuss your project needs or potential collaboration opportunities." />
      </Helmet>
      
      <div className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Contact Me"
            title="Let's Start a Conversation"
            description="Have a project in mind or want to learn more about my services? I'd love to hear from you."
          />
        </div>
      </div>
      
      <ContactSection />
    </motion.div>
  );
};

export default ContactPage;

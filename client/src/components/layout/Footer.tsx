import { Link } from 'wouter';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-primary-dark py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Social */}
          <div>
            <Link href="/" className="text-3xl font-serif font-bold text-white flex items-center mb-6">
              <span className="text-secondary mr-1">A</span>lexander
            </Link>
            <p className="text-gray-400 mb-6">
              Creating stunning digital experiences that blend aesthetics with functionality to deliver memorable user journeys.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-secondary transition-colors"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-400 hover:text-secondary transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-secondary transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-secondary transition-colors">Branding & Identity</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-secondary transition-colors">Mobile App Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-secondary transition-colors">E-commerce Solutions</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-secondary transition-colors">Content Strategy</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive the latest articles and updates.</p>
            <form className="flex" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow bg-primary border border-gray-700 rounded-l-md px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-secondary hover:bg-secondary-light text-white px-4 rounded-r-md transition-colors"
                aria-label="Subscribe"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Alexander Chen. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

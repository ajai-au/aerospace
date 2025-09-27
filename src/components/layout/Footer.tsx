import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black/90 dark:bg-black border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 h-8 w-8 bg-cyan-400/20 rounded-full blur-md"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AeroDyne
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading the future of unmanned aerial technology with cutting-edge drone solutions for commercial, industrial, and recreational applications.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                  >
                    <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Products', 'Services', 'Support', 'Careers'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Tech Avenue</li>
              <li>Silicon Valley, CA 94102</li>
              <li className="pt-2">
                <a href="tel:+1-555-0123" className="hover:text-cyan-400 transition-colors duration-200">
                  +1 (555) 012-3456
                </a>
              </li>
              <li>
                <a href="mailto:info@aerodyne.com" className="hover:text-cyan-400 transition-colors duration-200">
                  info@aerodyne.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AeroDyne Corporation. All rights reserved. | 
            <a href="#" className="hover:text-cyan-400 transition-colors duration-200 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-cyan-400 transition-colors duration-200 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
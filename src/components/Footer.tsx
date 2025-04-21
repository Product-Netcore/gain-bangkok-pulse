import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-netcore-darkBlue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2025 Netcore Cloud Pvt. Ltd. | Bangkok Edition</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-netcore-accent transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            
            <a href="#" className="hover:text-netcore-accent transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                className="lucide lucide-footer"
              >
                <path d="M22 8.5V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5.5"/>
                <path d="M2 12a10 10 0 0 1 20 0"/>
                <path d="M2 12v3a1 1 0 0 0 1 1h4.5"/>
                <path d="M18.5 16H20a1 1 0 0 0 1-1v-3"/>
                <circle cx="12" cy="16" r="1"/>
                <path d="M4 21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1Z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-400">
          <p>
            Designed with ❤️ by{' '}
            <a 
              href="https://udayandaschowdhury.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-netcore-accent hover:text-white transition-colors"
            >
              Udayan Das Chowdhury
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

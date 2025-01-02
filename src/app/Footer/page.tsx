// src/components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MFK & USA Industry</h3>
            <p className="text-sm">
              Your trusted partner in industrial solutions, construction excellence, and innovation. Serving the USA with cutting-edge technology and industry-leading expertise. Building a brighter future together.
            </p>
            <div className="mt-4">
              <p className="flex items-center">
                📧 <span className="ml-2">fiazanfiazankhan@gmail.com</span>
              </p>
              <p className="flex items-center">
                📞 <span className="ml-2">+92 (312) 1281966</span>
              </p>
              <p className="flex items-center">
                📍 <span className="ml-2">Korangi Industrail Area Bilal Colony Karachi</span>
              </p>
            </div>
          </div>
  
          {/* Explore Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Innovations
                </a>
              </li>
            </ul>
          </div>
  
          {/* Resources Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Brochures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Industry Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Partner with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
  
          {/* Connect With Us Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
            <p className="text-sm mb-4">
              Follow us on social media for the latest updates and industry insights.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                🌐
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                🐦
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                📘
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                📸
              </a>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-4 text-center text-sm">
          <p>
            © 2025 MFK & USA Industry. All rights reserved. <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
          <p className="mt-2">
            Made with ❤️ by <a href="#" className="text-green-400 hover:text-white">M.Faizan Asghar</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
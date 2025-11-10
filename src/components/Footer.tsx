import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#494433] text-white ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/sthapathylogo.png"
                alt="Logo"
                className="h-20 w-54 object-cover"
              />
            </div>
            <p className="text-[#d5c8b5] text-sm leading-relaxed py-2">
              &copy; 2015-2025 Sthapathya Veda Research Foundation, All Rights Reserved.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[#d5c8b5] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#d5c8b5] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/objectives"
                  className="text-[#d5c8b5] hover:text-white transition-colors"
                >
                  Objectives
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-[#d5c8b5] hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/publications"
                  className="text-[#d5c8b5] hover:text-white transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[#d5c8b5] hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="text-[#d5c8b5] hover:text-white transition-colors"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#d5c8b5] hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-[#d5c8b5]">
              <li>Chennai, Tamil Nadu</li>
              <li>India</li>
              <li>info@sthapathyaveda.org</li>
              <li>+91 44 1234 5678</li>
            </ul>
          </div>
        </div>
        {/* 
        <div className="border-t border-[#6a5a48] mt-8 pt-8 text-center text-sm text-[#d5c8b5]">
          <p>&copy; 2025 Sthapathya Veda Research Foundation. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

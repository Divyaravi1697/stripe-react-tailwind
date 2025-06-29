import { FC } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { PiXLogoBold, PiArrowRightThin } from "react-icons/pi";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-gray-300 font-sans text-sm footer-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Platform */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4 pb-4 border-b-1 border-white flex group ">
            <span> Platform</span>
            <PiArrowRightThin className="text-base font-bold mt-2 ml-4" />
          </h3>
          <h4 className="font-bold text-base mb-2 flex group ">
            <span>Agents </span>
            <PiArrowRightThin className="text-base font-bold mt-1 ml-4" />
          </h4>
          <ul className="space-y-2">
            <li>App Library</li>
            <li>AI Studio</li>
            <li>Integrations & Extensions</li>
            <li>API</li>
            <li>Jasper Browser Extensions</li>
          </ul>
          <h4 className="font-bold text-base mb-2 mt-4 flex group ">
            <span>Canvas </span>
            <PiArrowRightThin className="text-base font-bold mt-1 ml-4" />
          </h4>
          <ul className="space-y-2">
            <li>Marketing AI Editor</li>
            <li>Jasper Chat</li>
            <li>AI Image Suite</li>
          </ul>
        </div>

        {/* Column 2: Solutions */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4 pb-4 border-b-1 border-white flex group">
            <span>Solutions</span>
            <PiArrowRightThin className="text-base font-bold mt-2 ml-4" />
          </h3>
          <h4 className="font-bold text-base mb-2 flex group">
            <span> Solutions by Role</span>
            <PiArrowRightThin className="text-base font-bold mt-1 ml-4" />
          </h4>
          <ul className="space-y-2">
            <li>Product Marketing</li>
            <li>Content Marketing</li>
            <li>Performance Marketing</li>
            <li>Field & Events Marketing</li>
            <li>Brand Marketing</li>
            <li>PR & Communications</li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4 pb-4 border-b-1 border-white flex group">
            <span> Resources</span>
            <PiArrowRightThin className="text-base font-bold mt-2 ml-4" />
          </h3>
          <h4 className="font-bold text-base mb-2">Discover</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Customer Stories</li>
            <li>Events & Webinars</li>
            <li>Prompt Library</li>
            <li>The State of AI in Marketing Report</li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div className="flex flex-col">
          <h3 className="text-white text-xl font-bold mb-4 pb-4 border-b-1 border-white flex group">
            <span> Company</span>
            <PiArrowRightThin className="text-base font-bold mt-2 ml-4" />
          </h3>
          <h4 className="font-bold text-base mb-2">Information</h4>
          <ul className="space-y-2 mb-6">
            <li>About Jasper</li>
            <li>Newsroom</li>
            <li>Careers at Jasper</li>
            <li>Legal Information</li>
            <li>Company Logos</li>
          </ul>

          <div>
            <h4 className="font-bold mb-2 text-base"> Pricing →</h4>

            <h4 className="font-bold mb-4 text-base">Enterprise →</h4>
            <button className="w-full bg-red-600 text-white py-2 mb-2 rounded hover:bg-red-700 transition font-semibold">
              Get A Demo
            </button>
            <button className="w-full border border-white text-white py-2 rounded hover:bg-white hover:text-black transition font-semibold">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Footer Base */}
      <div className="mt-10 py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs">
        {/* Logo */}
        <div className="text-red-600 text-6xl font-bold mb-16 ">jasper</div>

        <div className="footer-left mb-16">
          <div className="flex space-x-4 text-lg justify-end">
            <PiXLogoBold className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
          {/* Legal links */}
          <div className="flex flex-wrap gap-4 text-sm mb-4 md:mb-0 text-white mt-4 bg-gray-800 p-1">
            <span>© 2025 Jasper AI, INC.</span>
            <a href="#" className="text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white">
              Terms of Service
            </a>
            <a href="#" className="text-white">
              Legal Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

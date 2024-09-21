import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  { icon: faFacebook, url: '#', hoverColor: 'hover:text-blue-500' },
  { icon: faTwitter, url: '#', hoverColor: 'hover:text-blue-400' },
  { icon: faInstagram, url: '#', hoverColor: 'hover:text-pink-500' },
  { icon: faYoutube, url: '#', hoverColor: 'hover:text-red-600' }
];

const quickLinks = [
  { label: 'Home', url: '#' },
  { label: 'About', url: '#' },
  { label: 'Services', url: '#' },
  { label: 'Contact', url: '#' }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">MagNox 365</h2>
            <p className="mt-4">
              A leading company providing excellent services, dedicated to making the world a better place. 
              Join us on our journey!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="hover:underline hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <ul className="mt-4 flex space-x-4">
              {socialMediaLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.url} className={social.hoverColor}>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} MagNox 365. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

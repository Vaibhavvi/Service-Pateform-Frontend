import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p>&copy; 2025 TechNova</p>
        <div className="d-flex justify-content-center mb-3">
          <a href="https://www.instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
          <a href="https://www.linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
        </div>
        <div>
          <a href="/privacy-policy" className="text-white mx-3">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white mx-3">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

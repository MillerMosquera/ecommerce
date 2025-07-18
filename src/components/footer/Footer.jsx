import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] text-black py-8 mt-10 text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6">

        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} E-commerce. Todos los derechos reservados.
        </p>

    
        <ul className="flex flex-wrap justify-center space-x-6 text-sm">
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">Política de privacidad</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">Términos de servicio</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">Contacto</a>
          </li>
        </ul>

   
        <div className="flex space-x-5 text-black">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            <Instagram size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Twitter size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="mailto:correo@ejemplo.com" className="hover:text-green-400 transition-colors">
            <Mail size={22} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

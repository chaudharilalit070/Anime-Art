
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          GhibliGen
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium hover:text-blue-500 transition">Home</Link>
          <Link to="/GenerateFromImage" className="font-medium hover:text-blue-500 transition">Image + Prompt</Link>
          <Link to="/GenerateFromText" className="font-medium hover:text-blue-500 transition">Text + Style</Link>
            <Link to="/pricing" className="font-medium hover:text-blue-500 transition">pricing</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-3 md:hidden text-center">
          <Link to="/" className="font-medium hover:text-blue-500" onClick={toggleMenu}>Home</Link>
          <Link to="/GenerateFromImage" className="font-medium hover:text-blue-500" onClick={toggleMenu}>Image + Prompt</Link>
          <Link to="/GenerateFromText" className="font-medium hover:text-blue-500" onClick={toggleMenu}>Text + Style</Link>
           <Link to="/pricing" className="font-medium hover:text-blue-500" onClick={toggleMenu}>Pricing</Link>
      
        </div>
      )}
    </nav>
  );
}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone, Search, Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/placeholder.svg" 
              alt="Public Health Solutions Logo" 
              className="h-10 w-auto"
            />
            <div className="ml-3 hidden md:block">
              <h1 className="text-xl font-bold text-primary-blue">Public Health Solutions</h1>
              <p className="text-xs text-gray-500">Healthcare for All New Yorkers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/services" className="font-medium hover:text-primary-blue transition-colors">
              Our Services
            </Link>
            <Link to="/resources" className="font-medium hover:text-primary-blue transition-colors">
              Resources
            </Link>
            <Link to="/about" className="font-medium hover:text-primary-blue transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="font-medium hover:text-primary-blue transition-colors">
              Contact
            </Link>
            <Link to="/donate" className="font-medium hover:text-primary-blue transition-colors">
              Donate
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <LanguageSelector />
            
            <Button variant="outline" size="icon" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
            
            <Button size="sm" asChild className="hidden md:flex items-center bg-primary-green hover:bg-primary-green/90">
              <Link to="/call-us">
                <Phone className="h-4 w-4 mr-2" />
                <span>Call Us</span>
              </Link>
            </Button>
            
            <Button size="sm" className="hidden md:inline-flex bg-primary-blue hover:bg-primary-blue/90">
              Find Help
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-6 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/services" className="font-medium hover:text-primary-blue transition-colors py-2">
              Our Services
            </Link>
            <Link to="/resources" className="font-medium hover:text-primary-blue transition-colors py-2">
              Resources
            </Link>
            <Link to="/about" className="font-medium hover:text-primary-blue transition-colors py-2">
              About Us
            </Link>
            <Link to="/contact" className="font-medium hover:text-primary-blue transition-colors py-2">
              Contact
            </Link>
            <Link to="/donate" className="font-medium hover:text-primary-blue transition-colors py-2">
              Donate
            </Link>
            <Link to="/call-us" className="font-medium hover:text-primary-blue transition-colors py-2">
              Call Us
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button className="w-full bg-primary-blue hover:bg-primary-blue/90">
                Find Help
              </Button>
              <Button asChild className="w-full bg-primary-green hover:bg-primary-green/90">
                <Link to="/call-us">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

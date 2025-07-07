
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">Leftover</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-green-700 hover:text-green-900 transition-colors">How It Works</a>
            <a href="#impact" className="text-green-700 hover:text-green-900 transition-colors">Impact</a>
            <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">About</a>
            <a href="#contact" className="text-green-700 hover:text-green-900 transition-colors">Contact</a>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-green-700">
                  Welcome, {user?.fullName || user?.email}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-green-700">
                      <User className="h-4 w-4 mr-2" />
                      Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border-green-200">
                    <DropdownMenuItem className="text-green-700">
                      Profile Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-green-700">
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={signOut}
                      className="text-red-600 focus:text-red-600"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="border-green-300 text-green-700 hover:bg-green-50"
                  asChild
                >
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-700"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-200 bg-white/95">
            <div className="flex flex-col space-y-3">
              <a href="#how-it-works" className="text-green-700 hover:text-green-900 px-2 py-1">How It Works</a>
              <a href="#impact" className="text-green-700 hover:text-green-900 px-2 py-1">Impact</a>
              <a href="#about" className="text-green-700 hover:text-green-900 px-2 py-1">About</a>
              <a href="#contact" className="text-green-700 hover:text-green-900 px-2 py-1">Contact</a>
              
              {isAuthenticated ? (
                <div className="flex flex-col space-y-2 pt-2">
                  <div className="px-2 py-1 text-sm text-green-700">
                    Welcome, {user?.fullName || user?.email}
                  </div>
                  <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                    Profile Settings
                  </Button>
                  <Button 
                    onClick={signOut}
                    variant="outline" 
                    className="border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-2">
                  <Button 
                    variant="outline" 
                    className="border-green-300 text-green-700 hover:bg-green-50"
                    asChild
                  >
                    <Link to="/signin">Sign In</Link>
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

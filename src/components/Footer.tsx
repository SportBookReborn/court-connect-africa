import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-2">SportBook</h3>
            <p className="text-primary-foreground/80 mb-6">
              Book Courts. Reserve Pitches. Play More.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Built for Africa's sports communities.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@sportbook.app" 
                  className="hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 SportBook. All rights reserved. Made with ❤️ in Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
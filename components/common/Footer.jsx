import Link from 'next/link';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-customShades-shade1 border-t border-customShades-shade8">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-customBiege">Company Name</h3>
            <p className="text-sm text-muted-foreground">
              Creating beautiful, functional websites and web applications
              tailored to your needs.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-customBiege">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-customBiege">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-design"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-customBiege">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <span className="block">123 Business Street</span>
                <span className="block">City, State 12345</span>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@company.com"
                  className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
                >
                  info@company.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-customShades-shade8 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Company Name. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-customBiege transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

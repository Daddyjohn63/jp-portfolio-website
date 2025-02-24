import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

export const CtaButton = ({ label, href = '/' }) => {
  if (!href) {
    console.warn('CtaButton: href prop is required');
    href = '/'; // Fallback to home page if href is not provided
  }
  return (
    <Link
      className="group w-fit flex items-center gap-2 bg-transparent rounded-3xl border border-muted-foreground/50 px-3 py-2  transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-[0_0_3px_rgba(167,139,250,0.3)]"
      href={href}
    >
      <MoveUpRight className="w-8 h-8 text-primary-foreground bg-accent rounded-full p-2  transition-transform duration-300 group-hover:rotate-45" />
      <p className="  z-100 pl-2 transition-colors duration-300 group-hover:text-accent">
        {label}
      </p>
    </Link>
  );
};

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wellness with Dr. Rani",
  description: "wellnesswithdrrani.fit - Modern wellness, nutrition, and self-care guidance by Dr. Rani.",
};

function Navbar() {
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-container">
          {/* Professional Brand */}
          <Link href="/" className="navbar-brand">
            <div className="brand-logo">
              <div className="brand-logo-icon">🌿</div>
            </div>
            <div className="brand-text">
              <div className="brand-name">Wellness with Dr. Rani</div>
              <div className="brand-tagline">Holistic Health & Wellness</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobile-menu">
        <nav className="mobile-menu-nav">
          <Link href="/" className="mobile-nav-link">Home</Link>
          <Link href="/about" className="mobile-nav-link">About</Link>
          <Link href="/blog" className="mobile-nav-link">Blog</Link>
          <Link href="/contact" className="mobile-nav-link">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu-overlay" id="mobile-menu-overlay"></div>

      {/* Mobile Menu Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
              const mobileMenu = document.getElementById('mobile-menu');
              const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
              const navbar = document.getElementById('navbar');
              
              // Mobile menu toggle
              function toggleMobileMenu() {
                const isActive = mobileMenuToggle.classList.contains('active');
                
                if (isActive) {
                  mobileMenuToggle.classList.remove('active');
                  mobileMenu.classList.remove('active');
                  mobileMenuOverlay.classList.remove('active');
                  document.body.style.overflow = '';
                } else {
                  mobileMenuToggle.classList.add('active');
                  mobileMenu.classList.add('active');
                  mobileMenuOverlay.classList.add('active');
                  document.body.style.overflow = 'hidden';
                }
              }
              
              // Event listeners
              mobileMenuToggle.addEventListener('click', toggleMobileMenu);
              mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
              
              // Close menu when clicking nav links
              const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
              mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                  setTimeout(toggleMobileMenu, 150);
                });
              });
              
              // Navbar scroll effect
              let lastScrollY = window.scrollY;
              
              function handleScroll() {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 50) {
                  navbar.classList.add('scrolled');
                } else {
                  navbar.classList.remove('scrolled');
                }
                
                lastScrollY = currentScrollY;
              }
              
              window.addEventListener('scroll', handleScroll, { passive: true });
              
              // Handle escape key
              document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                  toggleMobileMenu();
                }
              });
            });
          `,
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

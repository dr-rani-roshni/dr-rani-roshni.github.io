"use client";
import { useScrollFadeIn } from "./useScrollFadeIn";

export default function NotFound() {
  useScrollFadeIn();
  
  return (
    <>
      {/* Hero Section with Background */}
      <section className="animated-bg" style={{
        minHeight: 'calc(100vh - var(--navbar-height-mobile))',
        display: 'flex',
        alignItems: 'center',
        padding: '3rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Particles */}
        <div className="floating-particle" style={{ top: '20%', left: '8%', width: '16px', height: '16px', background: 'var(--wellness-mint)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '70%', right: '12%', width: '20px', height: '20px', background: 'var(--wellness-blue)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '45%', right: '8%', width: '14px', height: '14px', background: 'var(--wellness-sage)', borderRadius: '50%' }}></div>
        
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          {/* Large 404 Illustration */}
          <div className="fade-in-up" style={{
            width: 180,
            height: 180,
            background: 'linear-gradient(135deg, var(--wellness-green), var(--wellness-sage))',
            borderRadius: '50%',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 15px 50px rgba(127, 176, 105, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 3s ease-in-out infinite'
            }}></div>
            <div style={{ 
              fontSize: '4rem', 
              fontWeight: 800, 
              color: 'white',
              position: 'relative',
              zIndex: 1,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              404
            </div>
          </div>
          
          {/* Error Message */}
          <div className="hero-title">
            <h1 style={{ 
              color: 'var(--wellness-accent)', 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              <span>Oops! Page Not Found</span>
            </h1>
          </div>
          
          <p className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '1.1rem', 
            fontWeight: 500,
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            maxWidth: 500,
            margin: '0 auto 2.5rem'
          }}>
            The page you're looking for seems to have taken a detour on its wellness journey. Let's get you back on track!
          </p>
          
          {/* Action Buttons */}
          <div className="fade-in-up" style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem', 
            alignItems: 'center',
            width: '100%'
          }}>
            <a href="/" className="btn-primary" style={{ 
              fontSize: '1.1rem', 
              padding: '1rem 2.5rem',
              maxWidth: '280px',
              width: '100%'
            }}>
              Return Home 🏠
            </a>
            <a href="/contact" style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'var(--wellness-accent)',
              padding: '0.75rem 1.5rem',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: '1rem',
              border: '2px solid var(--wellness-accent)',
              transition: 'all 0.3s ease',
              width: '100%',
              maxWidth: '280px',
              textAlign: 'center'
            }}>
              Get Help 💬
            </a>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section style={{ padding: '3rem 1rem', background: 'var(--background)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="fade-in-up" style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            marginBottom: '2rem' 
          }}>
            Continue Your Wellness Journey
          </h2>
          
          <div className="mobile-grid" style={{ gap: '1.5rem' }}>
            <div className="wellness-card fade-in-up" style={{ 
              textAlign: 'center', 
              padding: '2rem 1.5rem',
              background: 'linear-gradient(135deg, var(--wellness-mint) 0%, rgba(212, 241, 212, 0.6) 100%)',
              border: '1px solid rgba(127, 176, 105, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-30%',
                right: '-30%',
                width: '60%',
                height: '60%',
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1))',
                borderRadius: '50%',
                opacity: 0.7
              }}></div>
              
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                👩‍⚕️
              </div>
              <h3 style={{ 
                color: 'var(--wellness-accent)', 
                fontWeight: 700, 
                marginBottom: '0.75rem',
                fontSize: '1.2rem',
                position: 'relative',
                zIndex: 1
              }}>
                About Dr. Rani
              </h3>
              <p style={{ 
                color: 'var(--text-light)', 
                fontSize: '0.95rem', 
                lineHeight: 1.6, 
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                Learn about my holistic approach to wellness
              </p>
              <a 
                href="/about" 
                style={{ 
                  color: 'var(--wellness-green)', 
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease'
                }}
              >
                Learn More →
              </a>
            </div>
            
            <div className="wellness-card fade-in-up" style={{ 
              textAlign: 'center', 
              padding: '2rem 1.5rem',
              background: 'linear-gradient(135deg, var(--wellness-secondary) 0%, rgba(240, 248, 255, 0.7) 100%)',
              border: '1px solid rgba(135, 206, 235, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-30%',
                left: '-30%',
                width: '60%',
                height: '60%',
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1))',
                borderRadius: '50%',
                opacity: 0.7
              }}></div>
              
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                📚
              </div>
              <h3 style={{ 
                color: 'var(--wellness-accent)', 
                fontWeight: 700, 
                marginBottom: '0.75rem',
                fontSize: '1.2rem',
                position: 'relative',
                zIndex: 1
              }}>
                Wellness Blog
              </h3>
              <p style={{ 
                color: 'var(--text-light)', 
                fontSize: '0.95rem', 
                lineHeight: 1.6, 
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                Evidence-based tips and insights
              </p>
              <a 
                href="/blog" 
                style={{ 
                  color: 'var(--wellness-green)', 
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease'
                }}
              >
                Read Articles →
              </a>
            </div>
            
            <div className="wellness-card fade-in-up" style={{ 
              textAlign: 'center', 
              padding: '2rem 1.5rem',
              background: 'linear-gradient(135deg, var(--wellness-cream) 0%, rgba(249, 247, 244, 0.8) 100%)',
              border: '1px solid rgba(168, 192, 154, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-30%',
                right: '-30%',
                width: '60%',
                height: '60%',
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1))',
                borderRadius: '50%',
                opacity: 0.7
              }}></div>
              
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                💬
              </div>
              <h3 style={{ 
                color: 'var(--wellness-accent)', 
                fontWeight: 700, 
                marginBottom: '0.75rem',
                fontSize: '1.2rem',
                position: 'relative',
                zIndex: 1
              }}>
                Get In Touch
              </h3>
              <p style={{ 
                color: 'var(--text-light)', 
                fontSize: '0.95rem', 
                lineHeight: 1.6, 
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                Start your transformation journey
              </p>
              <a 
                href="/contact" 
                style={{ 
                  color: 'var(--wellness-green)', 
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease'
                }}
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Encouraging Message */}
      <section style={{ 
        padding: '3rem 1rem', 
        background: 'linear-gradient(135deg, var(--wellness-green) 0%, var(--wellness-sage) 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <div className="fade-in-up" style={{ 
            fontSize: '3rem', 
            marginBottom: '1.5rem' 
          }}>
            🌱
          </div>
          <h3 className="fade-in-up" style={{ 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            marginBottom: '1rem',
            color: 'white',
            lineHeight: 1.3
          }}>
            Every Journey Has Detours
          </h3>
          <p className="fade-in-up" style={{ 
            fontSize: '1rem', 
            opacity: 0.95,
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            What matters is finding your way back to wellness. We're here to guide you every step of the way.
          </p>
          <div className="fade-in-up">
            <a href="/" style={{
              display: 'inline-block',
              background: 'white',
              color: 'var(--wellness-green)',
              padding: '0.875rem 2rem',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255,255,255,0.3)',
              width: '100%',
              maxWidth: '250px'
            }}>
              Start Fresh ✨
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 
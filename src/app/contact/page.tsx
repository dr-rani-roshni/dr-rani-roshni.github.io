"use client";
import { useScrollFadeIn } from "../useScrollFadeIn";

export default function ContactPage() {
  useScrollFadeIn();
  
  return (
    <>
      {/* Hero Section with Background */}
      <section className="animated-bg" style={{
        minHeight: 'calc(50vh - var(--navbar-height-mobile))',
        display: 'flex',
        alignItems: 'center',
        padding: '3rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Particles */}
        <div className="floating-particle" style={{ top: '20%', left: '8%', width: '14px', height: '14px', background: 'var(--wellness-mint)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '70%', right: '10%', width: '16px', height: '16px', background: 'var(--wellness-blue)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '45%', right: '12%', width: '12px', height: '12px', background: 'var(--wellness-sage)', borderRadius: '50%' }}></div>
        
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div className="fade-in-up" style={{
            width: 100,
            height: 100,
            background: 'linear-gradient(135deg, var(--wellness-green), var(--wellness-sage))',
            borderRadius: '50%',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(127, 176, 105, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)',
              transform: 'rotate(45deg)',
              animation: 'shimmer 4s ease-in-out infinite'
            }}></div>
            <span style={{ fontSize: '40px', position: 'relative', zIndex: 1 }}>💬</span>
          </div>
          
          <div className="hero-title">
            <h1 style={{ 
              color: 'var(--wellness-accent)', 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              <span>Let's Connect</span>
            </h1>
          </div>
          
          <p className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '1.1rem', 
            maxWidth: 500, 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Ready to begin your wellness transformation? I'd love to hear about your goals and how I can support your journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1rem' }}>
        <div className="wellness-card fade-in-up" style={{ 
          marginBottom: '3rem', 
          padding: '2.5rem 2rem',
          background: 'linear-gradient(135deg, var(--wellness-cream) 0%, rgba(249, 247, 244, 0.8) 100%)',
          border: '1px solid rgba(127, 176, 105, 0.1)'
        }}>
          <h3 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.4rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.3rem' }}>✉️</span>
            Send me a message
          </h3>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="fade-in-up">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Full Name" 
                required 
                style={{ 
                  width: '100%',
                  padding: '1.25rem 1.5rem', 
                  borderRadius: '12px', 
                  border: '2px solid var(--border-light)', 
                  fontSize: '1rem',
                  background: 'var(--background)',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  fontFamily: 'inherit'
                }} 
                onFocus={(e) => e.target.style.borderColor = 'var(--wellness-green)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
              />
            </div>
            
            <div className="fade-in-up">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email Address" 
                required 
                style={{ 
                  width: '100%',
                  padding: '1.25rem 1.5rem', 
                  borderRadius: '12px', 
                  border: '2px solid var(--border-light)', 
                  fontSize: '1rem',
                  background: 'var(--background)',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  fontFamily: 'inherit'
                }} 
                onFocus={(e) => e.target.style.borderColor = 'var(--wellness-green)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
              />
            </div>
            
            <div className="fade-in-up">
              <select
                name="interest"
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  border: '2px solid var(--border-light)',
                  fontSize: '1rem',
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--wellness-green)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
              >
                <option value="">What interests you most?</option>
                <option value="fitness">Functional Fitness Coaching</option>
                <option value="nutrition">Nutrition Guidance</option>
                <option value="wellness">Holistic Wellness Program</option>
                <option value="consultation">One-on-One Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="fade-in-up">
              <textarea 
                name="message" 
                placeholder="Tell me about your wellness goals and how I can help you..." 
                required 
                rows={6} 
                style={{ 
                  width: '100%',
                  padding: '1.25rem 1.5rem', 
                  borderRadius: '12px', 
                  border: '2px solid var(--border-light)', 
                  fontSize: '1rem', 
                  resize: 'vertical',
                  background: 'var(--background)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  minHeight: '120px'
                }} 
                onFocus={(e) => e.target.style.borderColor = 'var(--wellness-green)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
              />
            </div>
            
            <div className="fade-in-up" style={{ marginTop: '0.5rem' }}>
              <button type="submit" className="btn-primary" style={{ 
                fontSize: '1.1rem', 
                padding: '1rem 2.5rem',
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
                display: 'block'
              }}>
                Send Message ✨
              </button>
            </div>
          </form>
        </div>
        
        {/* Contact Information Cards */}
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
              📧
            </div>
            <h4 style={{ 
              color: 'var(--wellness-accent)', 
              fontWeight: 700, 
              marginBottom: '0.75rem',
              fontSize: '1.2rem',
              position: 'relative',
              zIndex: 1
            }}>
              Email
            </h4>
            <a 
              href="mailto:info@wellnesswithdrrani.fit" 
              style={{ 
                color: 'var(--wellness-green)', 
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--wellness-accent)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--wellness-green)'}
            >
              info@wellnesswithdrrani.fit
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
              📱
            </div>
            <h4 style={{ 
              color: 'var(--wellness-accent)', 
              fontWeight: 700, 
              marginBottom: '0.75rem',
              fontSize: '1.2rem',
              position: 'relative',
              zIndex: 1
            }}>
              Follow Along
            </h4>
            <a 
              href="#" 
              style={{ 
                color: 'var(--wellness-green)', 
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--wellness-accent)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--wellness-green)'}
            >
              @wellnesswithdrrani
            </a>
          </div>
        </div>
      </main>
    </>
  );
} 
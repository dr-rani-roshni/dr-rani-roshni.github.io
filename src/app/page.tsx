"use client";
import Image from "next/image";
import { useScrollFadeIn } from "./useScrollFadeIn";

export default function Home() {
  useScrollFadeIn();
  return (
    <>
      {/* Hero Banner Section - Mobile Optimized with Fixed Navbar */}
      <section className="animated-bg" style={{
        minHeight: 'calc(100vh - var(--navbar-height-mobile))',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Particles - Reduced for Mobile */}
        <div className="floating-particle" style={{ top: '15%', left: '5%', width: '16px', height: '16px', background: 'var(--wellness-mint)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '65%', right: '10%', width: '12px', height: '12px', background: 'var(--wellness-blue)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '40%', right: '5%', width: '20px', height: '20px', background: 'var(--wellness-sage)', borderRadius: '50%' }}></div>
        
        {/* Mobile-First Hero Layout */}
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem'
        }}>
          {/* Hero Content */}
          <div className="fade-in-up" style={{ zIndex: 2, maxWidth: '100%' }}>
            <div className="hero-illustration" style={{ 
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Image 
                src="/hero-wellness.svg" 
                alt="Wellness Illustration" 
                width={280} 
                height={210}
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
            
            <div className="hero-title">
              <h1 style={{ 
                color: 'var(--wellness-accent)', 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}>
                <span>Transform Your Life with</span>
                <span style={{ color: 'var(--wellness-green)', display: 'block' }}>
                  Holistic Wellness
                </span>
              </h1>
            </div>
            
            <p style={{ 
              color: 'var(--foreground)', 
              fontSize: '1.1rem', 
              marginBottom: '2rem',
              lineHeight: 1.6,
              opacity: 0.9,
              maxWidth: '500px',
              margin: '0 auto 2rem'
            }}>
              Join Dr. Rani on a transformative journey combining evidence-based nutrition, functional fitness, and mindfulness practices.
            </p>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '1rem', 
              alignItems: 'center',
              width: '100%'
            }}>
              <a href="/contact" className="btn-primary">
                Start Your Journey 🌟
              </a>
              <a href="/about" style={{
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
                Meet Dr. Rani
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Mobile Optimized */}
      <section style={{ padding: '3rem 1rem', background: 'var(--background)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="fade-in-up section-title" style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '2.2rem', 
            fontWeight: 700, 
            marginBottom: '1rem' 
          }}>
            Your Wellness Journey Awaits
          </h2>
          <p className="fade-in-up section-subtitle" style={{ 
            color: 'var(--text-light)', 
            fontSize: '1.1rem', 
            marginBottom: '3rem',
            maxWidth: 600,
            margin: '0 auto 3rem'
          }}>
            Discover personalized approaches to fitness, nutrition, and mindfulness that fit seamlessly into your lifestyle.
          </p>
          
          <div className="mobile-grid">
            <div className="wellness-card fade-in-up" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div className="service-icon">
                <Image src="/wellness-icon-1.svg" alt="Fitness" width={70} height={70} style={{ margin: '0 auto 1.5rem' }} />
              </div>
              <h3 style={{ color: 'var(--wellness-accent)', fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem' }}>
                Functional Fitness
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Movement patterns designed for real life. Build strength, mobility, and confidence through personalized fitness programs.
              </p>
            </div>
            
            <div className="wellness-card fade-in-up" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div className="service-icon">
                <Image src="/wellness-icon-2.svg" alt="Nutrition" width={70} height={70} style={{ margin: '0 auto 1.5rem' }} />
              </div>
              <h3 style={{ color: 'var(--wellness-accent)', fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem' }}>
                Mindful Nutrition
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Break free from diet culture. Learn intuitive eating principles and develop a healthy, sustainable relationship with food.
              </p>
            </div>
            
            <div className="wellness-card fade-in-up" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div className="service-icon">
                <Image src="/wellness-icon-3.svg" alt="Mindfulness" width={70} height={70} style={{ margin: '0 auto 1.5rem' }} />
              </div>
              <h3 style={{ color: 'var(--wellness-accent)', fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem' }}>
                Mind-Body Connection
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Reduce stress and find balance through proven mindfulness techniques that support your mental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Mobile Optimized */}
      <section style={{ 
        padding: '3rem 1rem', 
        background: 'linear-gradient(135deg, var(--wellness-mint) 0%, var(--wellness-secondary) 100%)' 
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="fade-in-up section-title" style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '2rem', 
            fontWeight: 700, 
            marginBottom: '2.5rem' 
          }}>
            Transforming Lives, One Journey at a Time
          </h2>
          
          <div className="mobile-stats-grid">
            <div className="stats-card fade-in-up pulse-on-hover">
              <div className="counter" data-count="5000" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: 'var(--wellness-green)'
              }}>
                0+
              </div>
              <p style={{ color: 'var(--wellness-accent)', fontWeight: 600, fontSize: '1rem' }}>
                Lives Transformed
              </p>
            </div>
            
            <div className="stats-card fade-in-up pulse-on-hover">
              <div className="counter" data-count="10" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: 'var(--wellness-green)'
              }}>
                0+
              </div>
              <p style={{ color: 'var(--wellness-accent)', fontWeight: 600, fontSize: '1rem' }}>
                Years Experience
              </p>
            </div>
            
            <div className="stats-card fade-in-up pulse-on-hover">
              <div className="counter" data-count="98" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: 'var(--wellness-green)'
              }}>
                0%
              </div>
              <p style={{ color: 'var(--wellness-accent)', fontWeight: 600, fontSize: '1rem' }}>
                Success Rate
              </p>
            </div>
            
            <div className="stats-card fade-in-up pulse-on-hover">
              <div className="counter" data-count="24" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: 'var(--wellness-green)'
              }}>
                0/7
              </div>
              <p style={{ color: 'var(--wellness-accent)', fontWeight: 600, fontSize: '1rem' }}>
                Support Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile Optimized */}
      <section style={{ padding: '3rem 1rem', background: 'var(--background)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="fade-in-up section-title" style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '2.2rem', 
            fontWeight: 700, 
            marginBottom: '2.5rem' 
          }}>
            What Our Community Says
          </h2>
          
          <div className="mobile-grid">
            <div className="wellness-card testimonial-card fade-in-up" style={{ padding: '1.5rem', textAlign: 'left' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &quot;Dr. Rani completely changed my relationship with fitness and food. Her holistic approach helped me find balance I never thought possible.&quot;
              </p>
              <div style={{ color: 'var(--wellness-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                — Sarah M., Marketing Executive
              </div>
            </div>
            
            <div className="wellness-card testimonial-card fade-in-up" style={{ padding: '1.5rem', textAlign: 'left' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &quot;The mindfulness techniques have been life-changing. I feel more centered and confident than ever before.&quot;
              </p>
              <div style={{ color: 'var(--wellness-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                — Michael R., Entrepreneur
              </div>
            </div>
            
            <div className="wellness-card testimonial-card fade-in-up" style={{ padding: '1.5rem', textAlign: 'left' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                &quot;Finally, a wellness approach that fits into my busy mom life. Practical, sustainable, and truly transformative.&quot;
              </p>
              <div style={{ color: 'var(--wellness-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                — Jessica L., Mother of Three
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Mobile Optimized */}
      <section style={{ 
        padding: '3rem 1rem', 
        background: 'linear-gradient(135deg, var(--wellness-green) 0%, var(--wellness-sage) 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 className="fade-in-up" style={{ 
            fontSize: '2.2rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            color: 'white',
            lineHeight: 1.3
          }}>
            Ready to Transform Your Life?
          </h2>
          <p className="fade-in-up" style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2rem',
            opacity: 0.95,
            lineHeight: 1.6
          }}>
            Take the first step towards a healthier, happier you. Book your consultation today and discover your personalized path to wellness.
          </p>
          <div className="fade-in-up">
            <a href="/contact" style={{
              display: 'inline-block',
              background: 'white',
              color: 'var(--wellness-green)',
              padding: '1rem 2.5rem',
              borderRadius: 50,
              fontWeight: 700,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255,255,255,0.3)',
              width: '100%',
              maxWidth: '320px'
            }}>
              Book Your Consultation ✨
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

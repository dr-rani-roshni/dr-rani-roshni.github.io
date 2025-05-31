"use client";
import { useScrollFadeIn } from "../useScrollFadeIn";

export default function AboutPage() {
  useScrollFadeIn();
  
  return (
    <>
      {/* Hero Section with Background */}
      <section className="animated-bg" style={{
        minHeight: 'calc(60vh - var(--navbar-height-mobile))',
        display: 'flex',
        alignItems: 'center',
        padding: '3rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Particles */}
        <div className="floating-particle" style={{ top: '20%', left: '8%', width: '14px', height: '14px', background: 'var(--wellness-mint)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '70%', right: '12%', width: '18px', height: '18px', background: 'var(--wellness-blue)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '45%', right: '8%', width: '16px', height: '16px', background: 'var(--wellness-sage)', borderRadius: '50%' }}></div>
        
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div className="fade-in-up" style={{
            width: 140,
            height: 140,
            background: 'linear-gradient(135deg, var(--wellness-green), var(--wellness-sage))',
            borderRadius: '50%',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 40px rgba(127, 176, 105, 0.3)',
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
            <span style={{ fontSize: '64px', position: 'relative', zIndex: 1 }}>👩‍⚕️</span>
          </div>
          
          <div className="hero-title">
            <h1 style={{ 
              color: 'var(--wellness-accent)', 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              <span>Meet Dr. Rani</span>
            </h1>
          </div>
          
          <p className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '1.1rem', 
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: 500,
            margin: '0 auto'
          }}>
            Certified Wellness Coach • Functional Fitness Expert • Holistic Health Practitioner
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 1rem' }}>
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem 1.5rem' }}>
          <h3 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.4rem', 
            fontWeight: 700, 
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🌱</span>
            My Philosophy
          </h3>
          <p style={{ 
            color: 'var(--foreground)', 
            fontSize: '1.05rem', 
            lineHeight: 1.8,
            margin: 0
          }}>
            I believe that true wellness encompasses more than just physical health. My approach integrates functional movement, mindful nutrition, stress management, and mental well-being to create sustainable lifestyle transformations. Every individual&apos;s journey is unique, and I&apos;m here to guide you toward discovering what works best for your body and life.
          </p>
        </div>
        
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem 1.5rem' }}>
          <h3 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.4rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🎯</span>
            My Expertise
          </h3>
          <div className="mobile-grid" style={{ gap: '1.25rem' }}>
            <div className="fade-in-up" style={{ 
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, var(--wellness-mint), rgba(212, 241, 212, 0.7))', 
              borderRadius: '16px',
              border: '1px solid rgba(127, 176, 105, 0.2)',
              transition: 'all 0.3s ease'
            }}>
              <h4 style={{ 
                color: 'var(--wellness-accent)', 
                fontWeight: 700, 
                marginBottom: '0.75rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🏃‍♀️</span>
                Functional Fitness
              </h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                Movement patterns that enhance daily life and prevent injury
              </p>
            </div>
            
            <div className="fade-in-up" style={{ 
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, var(--wellness-secondary), rgba(240, 248, 255, 0.8))', 
              borderRadius: '16px',
              border: '1px solid rgba(135, 206, 235, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              <h4 style={{ 
                color: 'var(--wellness-accent)', 
                fontWeight: 700, 
                marginBottom: '0.75rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🥑</span>
                Intuitive Nutrition
              </h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                Evidence-based nutrition without restrictive dieting
              </p>
            </div>
            
            <div className="fade-in-up" style={{ 
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, var(--wellness-cream), rgba(249, 247, 244, 0.9))', 
              borderRadius: '16px',
              border: '1px solid rgba(168, 192, 154, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              <h4 style={{ 
                color: 'var(--wellness-accent)', 
                fontWeight: 700, 
                marginBottom: '0.75rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🧘‍♀️</span>
                Mindfulness
              </h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                Stress reduction and mind-body connection practices
              </p>
            </div>
          </div>
        </div>
        
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem 1.5rem' }}>
          <h3 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.4rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🏆</span>
            Achievements & Impact
          </h3>
          <ul style={{ 
            color: 'var(--foreground)', 
            fontSize: '1.05rem', 
            paddingLeft: 20, 
            lineHeight: 1.8,
            margin: 0
          }}>
            <li style={{ marginBottom: '0.75rem' }}>Transformed over 5,000+ lives through personalized wellness coaching</li>
            <li style={{ marginBottom: '0.75rem' }}>Certified in Functional Movement Screening (FMS) and Corrective Exercise</li>
            <li style={{ marginBottom: '0.75rem' }}>Featured wellness expert on national health podcasts and conferences</li>
            <li style={{ marginBottom: '0.75rem' }}>Author of &quot;The Mindful Body&quot; - a holistic approach to health and fitness</li>
            <li>Doctorate in Sports Medicine with specialization in preventive care</li>
          </ul>
        </div>
        
        <div className="fade-in-up" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="/contact" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Start Your Transformation Today ✨
          </a>
        </div>
      </main>
    </>
  );
} 
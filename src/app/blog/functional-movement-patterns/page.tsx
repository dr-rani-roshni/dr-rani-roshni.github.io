"use client";
import Link from "next/link";
import { useScrollFadeIn } from "../../useScrollFadeIn";

export default function FunctionalMovementPatternsPage() {
  useScrollFadeIn();
  
  return (
    <>
      {/* Hero Section */}
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
        
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div className="fade-in-up" style={{
            width: 120,
            height: 120,
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
            <span style={{ fontSize: '48px', position: 'relative', zIndex: 1 }}>🏃‍♀️</span>
          </div>
          
          <div className="fade-in-up" style={{ marginBottom: '1rem' }}>
            <span style={{ 
              background: 'var(--wellness-green)',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(127, 176, 105, 0.2)'
            }}>
              Fitness
            </span>
          </div>
          
          <div className="hero-title">
            <h1 style={{ 
              color: 'var(--wellness-accent)', 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              <span>5 Functional Movement Patterns for Daily Life</span>
            </h1>
          </div>
          
          <p className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '1.1rem', 
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: 600,
            margin: '0 auto 1.5rem'
          }}>
            Master these essential movement patterns to improve strength, mobility, and prevent injury in everyday activities.
          </p>
          
          <div className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '0.95rem',
            fontWeight: 500
          }}>
            <time>June 15, 2024</time> • <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 1rem' }}>
        {/* Navigation */}
        <div className="fade-in-up" style={{ marginBottom: '2rem' }}>
          <Link href="/blog" style={{
            color: 'var(--wellness-green)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'color 0.3s ease'
          }}>
            ← Back to Blog
          </Link>
        </div>

        {/* Introduction */}
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem' }}>
          <p style={{ 
            color: 'var(--foreground)', 
            fontSize: '1.1rem', 
            lineHeight: 1.8,
            margin: 0,
            fontStyle: 'italic'
          }}>
            Our bodies are designed to move in specific patterns that support daily activities. Whether you&apos;re lifting groceries, climbing stairs, or playing with your children, these fundamental movement patterns form the foundation of all human motion. Let&apos;s explore the five essential patterns that will transform your strength, mobility, and overall quality of life.
          </p>
        </div>

        {/* Movement Pattern 1 */}
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem' }}>
          <h2 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.6rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ 
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, var(--wellness-green), var(--wellness-sage))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>1</span>
            The Squat Pattern
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The squat is the foundation of sitting, standing, and picking things up from the ground. This movement pattern engages your glutes, quadriceps, and core while promoting hip and ankle mobility.
          </p>
          
          <div style={{ 
            background: 'linear-gradient(135deg, var(--wellness-mint), rgba(212, 241, 212, 0.5))',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Daily Applications:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
              <li>Getting up from a chair</li>
              <li>Picking up objects from the floor</li>
              <li>Using the toilet</li>
              <li>Getting in and out of cars</li>
            </ul>
          </div>
          
          <div style={{ 
            background: 'var(--wellness-cream)',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Key Points:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
              <li>Keep your chest up and spine neutral</li>
              <li>Initiate the movement by pushing your hips back</li>
              <li>Distribute weight evenly across your feet</li>
              <li>Go only as deep as your mobility allows</li>
            </ul>
          </div>
        </div>

        {/* Movement Pattern 2 */}
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem' }}>
          <h2 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.6rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ 
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, var(--wellness-blue), var(--wellness-secondary))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>2</span>
            The Hinge Pattern
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The hip hinge is essential for bending forward safely while maintaining a strong, stable spine. This pattern primarily targets your posterior chain - glutes, hamstrings, and erector spinae.
          </p>
          
          <div style={{ 
            background: 'linear-gradient(135deg, var(--wellness-secondary), rgba(240, 248, 255, 0.5))',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Daily Applications:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
              <li>Lifting objects from the ground</li>
              <li>Loading the dishwasher</li>
              <li>Tying your shoes</li>
              <li>Gardening and yard work</li>
            </ul>
          </div>
        </div>

        {/* Movement Pattern 3 */}
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem' }}>
          <h2 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.6rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ 
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, var(--wellness-sage), var(--wellness-cream))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>3</span>
            The Lunge Pattern
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Lunging movements develop unilateral leg strength, improve balance, and enhance coordination. This asymmetrical pattern mirrors many daily activities that require stepping and reaching.
          </p>
          
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(168, 192, 154, 0.3), rgba(249, 247, 244, 0.5))',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Daily Applications:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
              <li>Climbing stairs</li>
              <li>Getting up from the floor</li>
              <li>Stepping over obstacles</li>
              <li>Walking on uneven terrain</li>
            </ul>
          </div>
        </div>

        {/* Movement Pattern 4 */}
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem' }}>
          <h2 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.6rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ 
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #ff6b6b, #feca57)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>4</span>
            The Push Pattern
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Pushing movements strengthen your chest, shoulders, and triceps while improving upper body functional strength. These patterns are essential for everyday tasks that require moving objects away from your body.
          </p>
          
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(254, 202, 87, 0.1))',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Daily Applications:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
              <li>Opening heavy doors</li>
              <li>Moving furniture</li>
              <li>Getting up from the ground</li>
              <li>Pushing a shopping cart</li>
            </ul>
          </div>
        </div>

        {/* Movement Pattern 5 */}
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem' }}>
          <h2 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.6rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ 
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #a8e6cf, #7fcdcd)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>5</span>
            The Pull Pattern
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Pulling movements balance out pushing patterns and strengthen your back, rear deltoids, and biceps. These movements are crucial for maintaining good posture and preventing upper body imbalances.
          </p>
          
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(168, 230, 207, 0.3), rgba(127, 205, 205, 0.3))',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Daily Applications:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
              <li>Opening doors and drawers</li>
              <li>Carrying groceries</li>
              <li>Pulling weeds in the garden</li>
              <li>Starting a lawnmower</li>
            </ul>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="wellness-card fade-in-up" style={{ marginBottom: '2rem', padding: '2rem' }}>
          <h2 style={{ 
            color: 'var(--wellness-accent)', 
            fontSize: '1.6rem', 
            fontWeight: 700, 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span style={{ fontSize: '1.8rem' }}>🚀</span>
            Getting Started with Functional Movement
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Begin with bodyweight versions of these movements, focusing on proper form rather than intensity. Practice these patterns 2-3 times per week, starting with 2 sets of 8-12 repetitions for each pattern.
          </p>
          
          <div style={{ 
            background: 'var(--wellness-primary)',
            padding: '1.5rem',
            borderRadius: '12px',
            borderLeft: '4px solid var(--wellness-green)'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>💡 Pro Tip:</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              Remember, quality always trumps quantity. Master the movement pattern with your bodyweight before adding external resistance. Your future self will thank you for building this strong foundation!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, var(--wellness-green) 0%, var(--wellness-sage) 100%)',
          borderRadius: '20px',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '40px',
            height: '40px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'floatMobile 6s ease-in-out infinite'
          }}></div>
          
          <div className="fade-in-up">
            <h3 style={{ 
              fontSize: '1.6rem', 
              fontWeight: 700, 
              marginBottom: '1rem',
              lineHeight: 1.3
            }}>
              Ready to Master Your Movement?
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '2rem',
              opacity: 0.95,
              lineHeight: 1.6,
              maxWidth: '400px',
              margin: '0 auto 2rem'
            }}>
              Get personalized movement coaching and take your functional fitness to the next level.
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: 'white',
              color: 'var(--wellness-green)',
              padding: '1rem 2rem',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
            }}>
              Work with Dr. Rani ✨
            </Link>
          </div>
        </div>
      </article>
    </>
  );
} 
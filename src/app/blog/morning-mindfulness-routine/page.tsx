"use client";
import Link from "next/link";
import { useScrollFadeIn } from "../../useScrollFadeIn";

export default function MorningMindfulnessRoutinePage() {
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
            background: 'linear-gradient(135deg, var(--wellness-blue), var(--wellness-secondary))',
            borderRadius: '50%',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 40px rgba(74, 144, 164, 0.3)',
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
            <span style={{ fontSize: '48px', position: 'relative', zIndex: 1 }}>🧘‍♀️</span>
          </div>
          
          <div className="fade-in-up" style={{ marginBottom: '1rem' }}>
            <span style={{ 
              background: 'var(--wellness-blue)',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(74, 144, 164, 0.2)'
            }}>
              Mindfulness
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
              <span>Morning Mindfulness Routine for Busy Professionals</span>
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
            Start your day with intention using this 10-minute mindfulness practice designed for busy schedules.
          </p>
          
          <div className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '0.95rem',
            fontWeight: 500
          }}>
            <time>June 5, 2024</time> • <span>10 min read</span>
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
            In our fast-paced world, mornings often feel like a race against time. But what if the first few minutes of your day could set a tone of calm, clarity, and purpose? This 10-minute morning mindfulness routine is specifically designed for busy professionals who want to start each day with intention, not overwhelm.
          </p>
        </div>

        {/* The Science of Morning Mindfulness */}
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
            <span style={{ fontSize: '1.8rem' }}>🧠</span>
            Why Morning Mindfulness Matters
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Research shows that morning mindfulness practices have profound effects on brain function, stress regulation, and overall well-being. When we start our day mindfully, we&apos;re literally rewiring our brains for greater resilience and focus.
          </p>
          
          <div style={{ 
            background: 'linear-gradient(135deg, var(--wellness-secondary), rgba(240, 248, 255, 0.5))',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Morning Mindfulness Benefits:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
              <li>Reduces cortisol levels and stress response</li>
              <li>Improves focus and cognitive performance</li>
              <li>Enhances emotional regulation throughout the day</li>
              <li>Increases self-awareness and decision-making clarity</li>
              <li>Boosts immune function and overall health</li>
            </ul>
          </div>
        </div>

        {/* The 10-Minute Routine */}
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
            <span style={{ fontSize: '1.8rem' }}>⏰</span>
            Your 10-Minute Morning Routine
          </h2>

          {/* Step 1 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: 'var(--wellness-blue)', 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                background: 'var(--wellness-blue)',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem'
              }}>1</span>
              Mindful Awakening (2 minutes)
            </h3>
            <div style={{ 
              background: 'var(--wellness-cream)',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Before reaching for your phone or jumping out of bed, take a moment to simply <em>be</em>.
              </p>
              <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
                <li>Notice how your body feels in bed</li>
                <li>Take three deep, conscious breaths</li>
                <li>Set an intention for your day</li>
                <li>Express gratitude for rest and the new day</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: 'var(--wellness-blue)', 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                background: 'var(--wellness-blue)',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem'
              }}>2</span>
              Gentle Movement (3 minutes)
            </h3>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--wellness-mint), rgba(212, 241, 212, 0.5))',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Awaken your body with gentle, mindful movement.
              </p>
              <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
                <li>Simple stretches in bed or standing</li>
                <li>Roll your shoulders and neck gently</li>
                <li>Twist your spine left and right</li>
                <li>Notice areas of tension and breathe into them</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: 'var(--wellness-blue)', 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                background: 'var(--wellness-blue)',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem'
              }}>3</span>
              Breath Awareness (3 minutes)
            </h3>
            <div style={{ 
              background: 'rgba(168, 230, 207, 0.3)',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Find a comfortable seated position and focus on your breath.
              </p>
              <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
                <li>Breathe naturally without forcing</li>
                <li>Count breaths: inhale (1), exhale (2), up to 10</li>
                <li>When mind wanders, gently return to counting</li>
                <li>End with three deeper breaths</li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: 'var(--wellness-blue)', 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                background: 'var(--wellness-blue)',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem'
              }}>4</span>
              Intention Setting (2 minutes)
            </h3>
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(254, 202, 87, 0.1))',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Connect with your deeper purpose and set positive intentions.
              </p>
              <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
                <li>Ask: &quot;How do I want to show up today?&quot;</li>
                <li>Choose one word to guide your day (calm, focused, kind)</li>
                <li>Visualize yourself embodying this quality</li>
                <li>Silently repeat your intention three times</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Making It Stick */}
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
            <span style={{ fontSize: '1.8rem' }}>🎯</span>
            Making Your Practice Sustainable
          </h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Start Small</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              If 10 minutes feels overwhelming, start with just 3-5 minutes. Consistency matters more than duration.
            </p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Create Triggers</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Link your practice to an existing habit: &quot;After I sit up in bed, I take three conscious breaths.&quot;
            </p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Prepare the Night Before</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Set out comfortable clothes, choose your intention, and keep your phone in another room to avoid distractions.
            </p>
          </div>
          
          <div style={{ 
            background: 'var(--wellness-primary)',
            padding: '1.5rem',
            borderRadius: '12px',
            borderLeft: '4px solid var(--wellness-blue)'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>💡 Pro Tip:</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              Track your practice for the first 30 days. Simply mark an X on a calendar when you complete your routine. Visual progress is incredibly motivating!
            </p>
          </div>
        </div>

        {/* Troubleshooting */}
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
            <span style={{ fontSize: '1.8rem' }}>🔧</span>
            Common Challenges & Solutions
          </h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '0.5rem' }}>&quot;I don&apos;t have time&quot;</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7 }}>
              Remember: You&apos;re not finding time, you&apos;re making time for what matters. Start with just 3 minutes.
            </p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '0.5rem' }}>&quot;My mind is too busy&quot;</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7 }}>
              A busy mind is exactly why you need this practice. Don&apos;t try to stop thoughts - just notice them and return to your breath.
            </p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '0.5rem' }}>&quot;I keep forgetting&quot;</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7 }}>
              Set a gentle alarm or leave yourself notes. It takes about 21 days to form a new habit, so be patient with yourself.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, var(--wellness-blue) 0%, var(--wellness-secondary) 100%)',
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
              Ready to Transform Your Mornings?
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '2rem',
              opacity: 0.95,
              lineHeight: 1.6,
              maxWidth: '400px',
              margin: '0 auto 2rem'
            }}>
              Get personalized mindfulness coaching and discover practices that fit your unique lifestyle.
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: 'white',
              color: 'var(--wellness-blue)',
              padding: '1rem 2rem',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
            }}>
              Start Your Practice ✨
            </Link>
          </div>
        </div>
      </article>
    </>
  );
} 
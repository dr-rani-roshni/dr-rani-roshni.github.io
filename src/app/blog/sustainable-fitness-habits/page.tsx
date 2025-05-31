"use client";
import Link from "next/link";
import { useScrollFadeIn } from "../../useScrollFadeIn";

export default function SustainableFitnessHabitsPage() {
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
            <span style={{ fontSize: '48px', position: 'relative', zIndex: 1 }}>💪</span>
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
              <span>Building Sustainable Fitness Habits That Stick</span>
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
            Discover the psychology behind lasting fitness habits and create a workout routine you&apos;ll actually enjoy.
          </p>
          
          <div className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '0.95rem',
            fontWeight: 500
          }}>
            <time>May 28, 2024</time> • <span>11 min read</span>
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
            January gym memberships. Forgotten running shoes. Dusty home workout equipment. Sound familiar? The fitness industry thrives on our good intentions, but lasting change requires more than motivation—it requires understanding the science of habit formation and designing systems that work with your psychology, not against it.
          </p>
        </div>

        {/* The Habit Loop */}
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
            <span style={{ fontSize: '1.8rem' }}>🔄</span>
            Understanding the Habit Loop
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Every habit follows a neurological loop consisting of three parts: cue, routine, and reward. Understanding this cycle is the key to creating fitness habits that stick long-term.
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>1. The Cue (Trigger)</h4>
            <div style={{ 
              background: 'var(--wellness-cream)',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                This is the trigger that initiates the behavior. For fitness, effective cues include:
              </p>
              <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, marginTop: '1rem', margin: 0 }}>
                <li>Time of day (6 AM workout)</li>
                <li>Location (gym bag by the door)</li>
                <li>Preceding event (after morning coffee)</li>
                <li>Emotional state (feeling stressed)</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>2. The Routine (Behavior)</h4>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--wellness-mint), rgba(212, 241, 212, 0.5))',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                The actual behavior you want to automate. Start small and stack progressively:
              </p>
              <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, marginTop: '1rem', margin: 0 }}>
                <li>Week 1: Put on workout clothes</li>
                <li>Week 2: 5-minute walk</li>
                <li>Week 3: 10-minute movement session</li>
                <li>Week 4+: Full workout routine</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>3. The Reward (Benefit)</h4>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--wellness-secondary), rgba(240, 248, 255, 0.5))',
              padding: '1.5rem',
              borderRadius: '12px'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                The positive feeling that reinforces the habit. Immediate rewards work better than distant ones:
              </p>
              <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, marginTop: '1rem', margin: 0 }}>
                <li>Endorphin rush from movement</li>
                <li>Sense of accomplishment</li>
                <li>Progress tracking satisfaction</li>
                <li>Social connection (workout buddy/class)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 4 Pillars */}
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
            <span style={{ fontSize: '1.8rem' }}>🏛️</span>
            The 4 Pillars of Sustainable Fitness
          </h2>

          {/* Pillar 1 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: 'var(--wellness-green)', 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '1rem'
            }}>
              Pillar 1: Start Ridiculously Small
            </h3>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              The biggest mistake people make is starting too big. Your brain resists dramatic changes, but it readily accepts tiny ones.
            </p>
            <div style={{ 
              background: 'var(--wellness-primary)',
              padding: '1.5rem',
              borderRadius: '12px',
              borderLeft: '4px solid var(--wellness-green)'
            }}>
              <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>✨ Example Micro-Habits:</h4>
              <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
                <li>Do 1 push-up after brushing teeth</li>
                <li>Walk to the end of your driveway</li>
                <li>Put on workout clothes (don&apos;t even exercise)</li>
                <li>Do 10 jumping jacks during TV commercials</li>
              </ul>
            </div>
          </div>

          {/* Pillar 2 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: 'var(--wellness-green)', 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '1rem'
            }}>
              Pillar 2: Stack Your Habits
            </h3>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Link new fitness habits to existing strong habits. This leverages the neural pathways you&apos;ve already built.
            </p>
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(254, 202, 87, 0.1))',
              padding: '1.5rem',
              borderRadius: '12px'
            }}>
              <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>📝 Habit Stacking Formula:</h4>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                &quot;After I [EXISTING HABIT], I will [NEW FITNESS HABIT].&quot;
              </p>
              <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, marginTop: '1rem', margin: 0 }}>
                <li>After I pour my morning coffee, I will do 10 squats</li>
                <li>After I sit down at my desk, I will do neck rolls</li>
                <li>After I eat lunch, I will take a 5-minute walk</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Psychology Hacks */}
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
            Psychology Hacks for Long-Term Success
          </h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>The 2-Day Rule</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Never allow yourself to go more than two days without some form of movement. This prevents the habit from completely breaking while allowing for flexibility.
            </p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Environment Design</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Make the right choice the easy choice by designing your environment for success:
            </p>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
              <li>Lay out workout clothes the night before</li>
              <li>Keep resistance bands visible in your living room</li>
              <li>Download workout apps on your phone</li>
              <li>Find a gym on your commute route</li>
            </ul>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Progress, Not Perfection</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Track your consistency, not your performance. Celebrate showing up, regardless of the quality of your workout.
            </p>
          </div>
        </div>

        {/* Your Action Plan */}
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
            Your 30-Day Action Plan
          </h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Week 1: Foundation Building</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <li>Choose 1 micro-habit (2 minutes max)</li>
              <li>Pick a consistent time and trigger</li>
              <li>Track completion with a simple checkmark</li>
              <li>Focus solely on showing up</li>
            </ul>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Week 2-3: Gradual Expansion</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <li>Increase duration by 2-3 minutes</li>
              <li>Add 1-2 simple exercises</li>
              <li>Continue consistent timing</li>
              <li>Notice how you feel after exercising</li>
            </ul>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Week 4: Habit Solidification</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
              <li>Your routine should feel automatic by now</li>
              <li>Experiment with different exercises</li>
              <li>Plan for obstacles and setbacks</li>
              <li>Consider adding a second micro-habit</li>
            </ul>
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
              Ready to Build Lasting Fitness Habits?
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '2rem',
              opacity: 0.95,
              lineHeight: 1.6,
              maxWidth: '400px',
              margin: '0 auto 2rem'
            }}>
              Get personalized habit coaching and create a sustainable fitness routine that fits your life.
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
              Start Building Habits ✨
            </Link>
          </div>
        </div>
      </article>
    </>
  );
} 
"use client";
import Link from "next/link";
import { useScrollFadeIn } from "../../useScrollFadeIn";

export default function IntuitiveEatingSciencePage() {
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
            background: 'linear-gradient(135deg, var(--wellness-sage), var(--wellness-cream))',
            borderRadius: '50%',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 40px rgba(168, 192, 154, 0.3)',
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
            <span style={{ fontSize: '48px', position: 'relative', zIndex: 1 }}>🥗</span>
          </div>
          
          <div className="fade-in-up" style={{ marginBottom: '1rem' }}>
            <span style={{ 
              background: 'var(--wellness-sage)',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(168, 192, 154, 0.2)'
            }}>
              Nutrition
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
              <span>The Science of Intuitive Eating: Beyond Diet Culture</span>
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
            Learn how to rebuild your relationship with food through evidence-based intuitive eating principles and mindful nutrition.
          </p>
          
          <div className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '0.95rem',
            fontWeight: 500
          }}>
            <time>June 10, 2024</time> • <span>12 min read</span>
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
            After decades of diet culture telling us what, when, and how much to eat, many of us have lost touch with our body&apos;s innate wisdom about food. Intuitive eating, backed by extensive research, offers a revolutionary approach that honors both physical and mental health while fostering a peaceful relationship with food.
          </p>
        </div>

        {/* What is Intuitive Eating */}
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
            <span style={{ fontSize: '1.8rem' }}>🧭</span>
            What is Intuitive Eating?
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Developed by registered dietitians Evelyn Tribole and Elyse Resch in 1995, intuitive eating is an evidence-based approach that encourages you to trust your body&apos;s natural hunger and satiety cues while rejecting the diet mentality.
          </p>
          
          <div style={{ 
            background: 'linear-gradient(135deg, var(--wellness-mint), rgba(212, 241, 212, 0.5))',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Research Shows:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
              <li>Improved psychological well-being and self-esteem</li>
              <li>Better cardiovascular health markers</li>
              <li>Reduced eating disorder risk</li>
              <li>More stable weight maintenance</li>
            </ul>
          </div>
        </div>

        {/* The 10 Principles */}
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
            <span style={{ fontSize: '1.8rem' }}>📋</span>
            The 10 Principles of Intuitive Eating
          </h2>

          {/* Principle 1 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: 'var(--wellness-green)', 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                background: 'var(--wellness-green)',
                color: 'white',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem'
              }}>1</span>
              Reject the Diet Mentality
            </h3>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7 }}>
              Throw out diet books, magazine articles, and advertisements that offer false hope of quick, easy weight loss. The diet mentality creates unrealistic expectations and sets you up for failure.
            </p>
          </div>

          {/* Principle 2 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: 'var(--wellness-green)', 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                background: 'var(--wellness-green)',
                color: 'white',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem'
              }}>2</span>
              Honor Your Hunger
            </h3>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7 }}>
              Keep your body fed with adequate energy and carbohydrates. Biological urges to overeat when overly hungry are natural and protective mechanisms.
            </p>
          </div>

          {/* Principle 3 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: 'var(--wellness-green)', 
              fontSize: '1.3rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                background: 'var(--wellness-green)',
                color: 'white',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem'
              }}>3</span>
              Make Peace with Food
            </h3>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7 }}>
              Call a truce and give yourself unconditional permission to eat. Denying certain foods can lead to intense cravings and binge eating.
            </p>
          </div>
        </div>

        {/* The Science Behind It */}
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
            <span style={{ fontSize: '1.8rem' }}>🔬</span>
            The Neuroscience of Intuitive Eating
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Research in neuroscience reveals fascinating insights into how intuitive eating works at the brain level. When we restrict foods or follow rigid rules, the brain&apos;s reward system becomes hyperactive, making &quot;forbidden&quot; foods even more appealing.
          </p>
          
          <div style={{ 
            background: 'var(--wellness-cream)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Key Hormones at Play:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
              <li><strong>Ghrelin:</strong> Your hunger hormone that signals when to eat</li>
              <li><strong>Leptin:</strong> Your satiety hormone that signals fullness</li>
              <li><strong>Cortisol:</strong> Stress hormone that can disrupt hunger cues</li>
              <li><strong>Dopamine:</strong> Reward neurotransmitter affected by food restriction</li>
            </ul>
          </div>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            When we learn to trust these natural signals instead of external rules, our eating becomes more balanced and our relationship with food improves dramatically.
          </p>
        </div>

        {/* Breaking Free from Diet Culture */}
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
            <span style={{ fontSize: '1.8rem' }}>⛓️‍💥</span>
            Breaking Free from Diet Culture
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Diet culture perpetuates the harmful belief that thinness equals health and moral virtue. This creates a cycle of restriction, guilt, and shame that damages both physical and mental health.
          </p>
          
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(254, 202, 87, 0.1))',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Signs of Diet Mentality:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
              <li>Labeling foods as &quot;good&quot; or &quot;bad&quot;</li>
              <li>Feeling guilty after eating certain foods</li>
              <li>Constantly thinking about food and weight</li>
              <li>Relying on external rules rather than internal cues</li>
            </ul>
          </div>
          
          <div style={{ 
            background: 'var(--wellness-primary)',
            padding: '1.5rem',
            borderRadius: '12px',
            borderLeft: '4px solid var(--wellness-green)'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>💡 Remember:</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              Your worth is not determined by what you eat or what you weigh. Food is meant to nourish your body and bring pleasure to your life.
            </p>
          </div>
        </div>

        {/* Practical Steps */}
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
            Getting Started: Practical Steps
          </h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Week 1-2: Awareness Building</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <li>Start a hunger/fullness journal</li>
              <li>Notice eating triggers (emotions, environment, stress)</li>
              <li>Practice eating without distractions</li>
            </ul>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Week 3-4: Gentle Nutrition</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <li>Include variety in your meals</li>
              <li>Focus on how foods make you feel</li>
              <li>Experiment with mindful eating practices</li>
            </ul>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Ongoing: Trust Building</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7 }}>
              <li>Challenge food rules as they arise</li>
              <li>Practice self-compassion</li>
              <li>Seek support from like-minded community</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, var(--wellness-sage) 0%, var(--wellness-cream) 100%)',
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
              lineHeight: 1.3,
              color: 'var(--wellness-accent)'
            }}>
              Ready to Transform Your Relationship with Food?
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '2rem',
              lineHeight: 1.6,
              maxWidth: '400px',
              margin: '0 auto 2rem',
              color: 'var(--wellness-accent)'
            }}>
              Learn personalized strategies for intuitive eating and gentle nutrition that work for your unique lifestyle.
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: 'var(--wellness-accent)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(74, 144, 164, 0.3)'
            }}>
              Start Your Journey ✨
            </Link>
          </div>
        </div>
      </article>
    </>
  );
} 
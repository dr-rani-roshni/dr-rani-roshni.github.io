"use client";
import { useScrollFadeIn } from "../useScrollFadeIn";

const posts = [
  {
    title: "5 Functional Movement Patterns for Daily Life",
    date: "2024-06-15",
    excerpt: "Master these essential movement patterns to improve strength, mobility, and prevent injury in everyday activities.",
    slug: "functional-movement-patterns",
    category: "Fitness",
    emoji: "🏃‍♀️"
  },
  {
    title: "The Science of Intuitive Eating: Beyond Diet Culture",
    date: "2024-06-10",
    excerpt: "Learn how to rebuild your relationship with food through evidence-based intuitive eating principles and mindful nutrition.",
    slug: "intuitive-eating-science",
    category: "Nutrition",
    emoji: "🥗"
  },
  {
    title: "Morning Mindfulness Routine for Busy Professionals",
    date: "2024-06-05",
    excerpt: "Start your day with intention using this 10-minute mindfulness practice designed for busy schedules.",
    slug: "morning-mindfulness-routine",
    category: "Mindfulness",
    emoji: "🧘‍♀️"
  },
  {
    title: "Building Sustainable Fitness Habits That Stick",
    date: "2024-05-28",
    excerpt: "Discover the psychology behind lasting fitness habits and create a workout routine you'll actually enjoy.",
    slug: "sustainable-fitness-habits",
    category: "Fitness",
    emoji: "💪"
  },
  {
    title: "Stress-Busting Foods: Nourishing Your Nervous System",
    date: "2024-05-20",
    excerpt: "Explore nutrient-dense foods that support stress management and promote mental clarity and emotional balance.",
    slug: "stress-busting-foods",
    category: "Nutrition",
    emoji: "🌿"
  }
];

const categoryColors = {
  "Fitness": "var(--wellness-green)",
  "Nutrition": "var(--wellness-sage)", 
  "Mindfulness": "var(--wellness-blue)"
};

export default function BlogPage() {
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
        <div className="floating-particle" style={{ top: '25%', left: '10%', width: '12px', height: '12px', background: 'var(--wellness-mint)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '65%', right: '15%', width: '16px', height: '16px', background: 'var(--wellness-blue)', borderRadius: '50%' }}></div>
        <div className="floating-particle" style={{ top: '40%', right: '8%', width: '14px', height: '14px', background: 'var(--wellness-sage)', borderRadius: '50%' }}></div>
        
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div className="hero-title">
            <h1 style={{ 
              color: 'var(--wellness-accent)', 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              <span>Wellness Insights</span>
            </h1>
          </div>
          
          <p className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '1.1rem', 
            maxWidth: 600, 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Evidence-based tips and guidance for your holistic wellness journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {posts.map((post) => (
            <article key={post.slug} className="wellness-card fade-in-up" style={{ 
              transition: 'all 0.3s ease',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <a href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="blog-post-content">
                  <div style={{ 
                    fontSize: '2.5rem', 
                    minWidth: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, var(--wellness-mint), rgba(212, 241, 212, 0.7))',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(127, 176, 105, 0.15)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transform: 'rotate(45deg)',
                      transition: 'transform 0.6s ease'
                    }}></div>
                    <span style={{ position: 'relative', zIndex: 1 }}>{post.emoji}</span>
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem', 
                      marginBottom: '0.75rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ 
                        background: categoryColors[post.category as keyof typeof categoryColors],
                        color: 'white',
                        padding: '0.375rem 1rem',
                        borderRadius: '25px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        boxShadow: '0 2px 8px rgba(127, 176, 105, 0.2)'
                      }}>
                        {post.category}
                      </span>
                      <time style={{ 
                        color: 'var(--text-light)', 
                        fontSize: '0.9rem',
                        fontWeight: 500
                      }}>
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    
                    <h2 style={{ 
                      color: 'var(--wellness-accent)', 
                      fontSize: '1.35rem', 
                      fontWeight: 700, 
                      marginBottom: '0.75rem',
                      lineHeight: 1.4
                    }}>
                      {post.title}
                    </h2>
                    
                    <p style={{ 
                      color: 'var(--foreground)', 
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <section style={{ 
          marginTop: '4rem',
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, var(--wellness-mint) 0%, var(--wellness-secondary) 100%)',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '50px',
            height: '50px',
            background: 'linear-gradient(45deg, var(--wellness-blue), var(--wellness-sage))',
            borderRadius: '50%',
            opacity: 0.3,
            animation: 'floatMobile 8s ease-in-out infinite'
          }}></div>
          
          <div className="fade-in-up">
            <h3 style={{ 
              color: 'var(--wellness-accent)', 
              fontSize: '1.8rem', 
              fontWeight: 700, 
              marginBottom: '1rem',
              lineHeight: 1.3
            }}>
              Want Personalized Wellness Guidance?
            </h3>
            <p style={{ 
              color: 'var(--text-light)', 
              marginBottom: '2rem',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: '500px',
              margin: '0 auto 2rem'
            }}>
              Get customized nutrition plans, fitness routines, and mindfulness practices tailored specifically for your goals.
            </p>
            <a href="/contact" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Work with Dr. Rani ✨
            </a>
          </div>
        </section>
      </main>
    </>
  );
} 
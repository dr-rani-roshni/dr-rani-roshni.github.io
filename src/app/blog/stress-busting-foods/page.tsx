"use client";
import Link from "next/link";
import { useScrollFadeIn } from "../../useScrollFadeIn";

export default function StressBustingFoodsPage() {
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
            <span style={{ fontSize: '48px', position: 'relative', zIndex: 1 }}>🌿</span>
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
              <span>Stress-Busting Foods: Nourishing Your Nervous System</span>
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
            Explore nutrient-dense foods that support stress management and promote mental clarity and emotional balance.
          </p>
          
          <div className="fade-in-up" style={{ 
            color: 'var(--text-light)', 
            fontSize: '0.95rem',
            fontWeight: 500
          }}>
            <time>May 20, 2024</time> • <span>14 min read</span>
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
            In our high-stress world, what we eat can either fuel our anxiety or become a powerful tool for building resilience. While no single food can eliminate stress, certain nutrients have been scientifically proven to support our nervous system, regulate cortisol levels, and promote a sense of calm and balance.
          </p>
        </div>

        {/* Understanding Stress & Nutrition */}
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
            How Stress Affects Your Nutritional Needs
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            When you&apos;re stressed, your body goes into survival mode, depleting key nutrients and creating increased demands for others. Chronic stress can lead to deficiencies in B vitamins, magnesium, vitamin C, and omega-3 fatty acids—all crucial for nervous system function.
          </p>
          
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(254, 202, 87, 0.1))',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>Stress-Induced Nutritional Changes:</h4>
            <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, margin: 0 }}>
              <li>Increased cortisol production depletes B vitamins and magnesium</li>
              <li>Chronic inflammation increases need for antioxidants</li>
              <li>Stress hormones can affect blood sugar regulation</li>
              <li>Digestive function may be impaired, affecting nutrient absorption</li>
            </ul>
          </div>
        </div>

        {/* Top Stress-Busting Foods */}
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
            <span style={{ fontSize: '1.8rem' }}>🥬</span>
            Top 10 Stress-Busting Foods
          </h2>

          {/* Food 1 */}
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
              <span style={{ fontSize: '1.5rem' }}>🐟</span>
              Fatty Fish (Salmon, Sardines, Mackerel)
            </h3>
            <div style={{ 
              background: 'var(--wellness-cream)',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Rich in omega-3 fatty acids EPA and DHA, which help regulate cortisol and reduce inflammation in the brain.
              </p>
              <p style={{ color: 'var(--wellness-green)', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>
                Aim for: 2-3 servings per week (3-4 oz each)
              </p>
            </div>
          </div>

          {/* Food 2 */}
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
              <span style={{ fontSize: '1.5rem' }}>🍫</span>
              Dark Chocolate (70%+ cacao)
            </h3>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--wellness-mint), rgba(212, 241, 212, 0.5))',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Contains flavonoids that improve brain function and reduce stress hormones. Also triggers endorphin release.
              </p>
              <p style={{ color: 'var(--wellness-green)', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>
                Aim for: 1-2 squares (about 1 oz) daily
              </p>
            </div>
          </div>

          {/* Food 3 */}
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
              <span style={{ fontSize: '1.5rem' }}>🥑</span>
              Avocados
            </h3>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--wellness-secondary), rgba(240, 248, 255, 0.5))',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                High in potassium, which helps regulate blood pressure, and B vitamins that support nervous system function.
              </p>
              <p style={{ color: 'var(--wellness-green)', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>
                Aim for: 1/2 to 1 avocado daily
              </p>
            </div>
          </div>

          {/* Food 4 */}
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
              <span style={{ fontSize: '1.5rem' }}>🍠</span>
              Sweet Potatoes
            </h3>
            <div style={{ 
              background: 'rgba(168, 230, 207, 0.3)',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Complex carbohydrates that help stabilize blood sugar and boost serotonin production for mood regulation.
              </p>
              <p style={{ color: 'var(--wellness-green)', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>
                Aim for: 1 medium sweet potato 3-4 times per week
              </p>
            </div>
          </div>
        </div>

        {/* Key Nutrients for Stress */}
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
            <span style={{ fontSize: '1.8rem' }}>⚡</span>
            Key Nutrients for Stress Management
          </h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Magnesium: The Relaxation Mineral</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Often called &quot;nature&apos;s chill pill,&quot; magnesium helps regulate the nervous system and promotes muscle relaxation.
            </p>
            <div style={{ 
              background: 'var(--wellness-cream)',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <h5 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '0.5rem' }}>Best Sources:</h5>
              <p style={{ color: 'var(--foreground)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                Leafy greens, pumpkin seeds, almonds, dark chocolate, quinoa, black beans
              </p>
            </div>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>B-Complex Vitamins: Nervous System Support</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Essential for neurotransmitter production and energy metabolism. Stress rapidly depletes these vitamins.
            </p>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--wellness-mint), rgba(212, 241, 212, 0.5))',
              padding: '1.5rem',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <h5 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '0.5rem' }}>Best Sources:</h5>
              <p style={{ color: 'var(--foreground)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                Whole grains, legumes, eggs, nutritional yeast, meat, fish, leafy greens
              </p>
            </div>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Vitamin C: Antioxidant Protection</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Helps combat oxidative stress and supports adrenal gland function during periods of high stress.
            </p>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--wellness-secondary), rgba(240, 248, 255, 0.5))',
              padding: '1.5rem',
              borderRadius: '12px'
            }}>
              <h5 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '0.5rem' }}>Best Sources:</h5>
              <p style={{ color: 'var(--foreground)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                Citrus fruits, berries, bell peppers, broccoli, kiwi, strawberries
              </p>
            </div>
          </div>
        </div>

        {/* Stress-Busting Meal Ideas */}
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
            <span style={{ fontSize: '1.8rem' }}>🍽️</span>
            Stress-Busting Meal Ideas
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Calming Breakfast Bowl</h4>
            <div style={{ 
              background: 'var(--wellness-primary)',
              padding: '1.5rem',
              borderRadius: '12px',
              borderLeft: '4px solid var(--wellness-green)'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                Oatmeal topped with sliced banana, almond butter, pumpkin seeds, and a sprinkle of cinnamon. Served with green tea.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Stress-Relief Lunch</h4>
            <div style={{ 
              background: 'var(--wellness-primary)',
              padding: '1.5rem',
              borderRadius: '12px',
              borderLeft: '4px solid var(--wellness-blue)'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                Quinoa bowl with roasted sweet potato, avocado, spinach, hemp seeds, and lemon-tahini dressing.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--wellness-green)', fontWeight: 600, marginBottom: '1rem' }}>Mood-Boosting Dinner</h4>
            <div style={{ 
              background: 'var(--wellness-primary)',
              padding: '1.5rem',
              borderRadius: '12px',
              borderLeft: '4px solid var(--wellness-sage)'
            }}>
              <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                Baked salmon with roasted Brussels sprouts and sweet potato. Side of sauerkraut for gut health.
              </p>
            </div>
          </div>
        </div>

        {/* Foods to Limit */}
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
            <span style={{ fontSize: '1.8rem' }}>⚠️</span>
            Foods That Can Increase Stress
          </h2>
          
          <p style={{ color: 'var(--foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            While adding stress-busting foods is important, it&apos;s equally crucial to minimize foods that can exacerbate stress and anxiety.
          </p>
          
          <ul style={{ color: 'var(--foreground)', paddingLeft: '1.5rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            <li><strong>Excess caffeine:</strong> Can increase cortisol and anxiety levels</li>
            <li><strong>Refined sugar:</strong> Causes blood sugar spikes and crashes</li>
            <li><strong>Processed foods:</strong> High in inflammatory ingredients</li>
            <li><strong>Excessive alcohol:</strong> Disrupts sleep and depletes B vitamins</li>
            <li><strong>Trans fats:</strong> Promote inflammation and affect brain function</li>
          </ul>
          
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(254, 202, 87, 0.1))',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h4 style={{ color: 'var(--wellness-accent)', fontWeight: 600, marginBottom: '1rem' }}>💡 Pro Tip:</h4>
            <p style={{ color: 'var(--foreground)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              Instead of complete elimination, focus on crowding out these foods by adding more nourishing options. This creates a sustainable approach without added stress about &quot;perfect&quot; eating.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, var(--wellness-sage) 0%, var(--wellness-cream) 100%)',
          borderRadius: '20px',
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
              Ready to Nourish Your Way to Calm?
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              marginBottom: '2rem',
              lineHeight: 1.6,
              maxWidth: '400px',
              margin: '0 auto 2rem',
              color: 'var(--wellness-accent)'
            }}>
              Get personalized nutrition guidance to create a stress-reducing eating plan that works for your lifestyle.
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
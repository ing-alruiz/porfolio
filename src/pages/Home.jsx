import React from "react";
import Hero from "../components/Hero.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Companies from "../components/Companies.jsx";

function Section({ id, bg = "var(--color-section-bg)", children, style }) {
  return (
    <section
      id={id}
      style={{
        background: bg,
        padding: "96px 0",
        ...style,
      }}
    >
      <div className="container">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* About */}
      <Section id="about" bg="var(--color-section-bg)">
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="John Doe"
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid var(--color-accent)",
              background: "var(--color-card)"
            }}
          />
          <div>
            <h2 style={{color: "var(--color-white)", marginBottom: 16, textTransform: "uppercase", letterSpacing: 2}}>Hello</h2>
            <p style={{color: "var(--color-text)", fontSize: "1.1rem", maxWidth: 500}}>
              I am John Doe, a passionate web developer with a love for clean code and modern design.
              I specialize in building responsive, user-friendly websites and applications.
              My goal is to deliver high-quality work and exceed client expectations.
            </p>
          </div>
        </div>
      </Section>

      {/* Service */}
      <Section id="service" bg="var(--color-section-bg-alt)" style={{position: "relative", padding: 0}}>
        <div style={{
          background: "url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%", opacity: 0.18, zIndex: 0
        }} />
        <div style={{
          position: "relative",
          zIndex: 1,
          padding: "96px 0"
        }}>
          <h2 style={{
            color: "var(--color-white)",
            textAlign: "center",
            fontSize: "2.2rem",
            marginBottom: 32,
            letterSpacing: 2,
            textTransform: "uppercase"
          }}>Service</h2>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 64,
            flexWrap: "wrap"
          }}>
            <div style={{textAlign: "center", minWidth: 140}}>
              <div style={{fontSize: 40, color: "var(--color-icon)"}}><i className="fa fa-desktop" /></div>
              <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>Web Design</div>
            </div>
            <div style={{textAlign: "center", minWidth: 140}}>
              <div style={{fontSize: 40, color: "var(--color-icon)"}}><i className="fa fa-mobile" /></div>
              <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>Responsive UI</div>
            </div>
            <div style={{textAlign: "center", minWidth: 140}}>
              <div style={{fontSize: 40, color: "var(--color-icon)"}}><i className="fa fa-paint-brush" /></div>
              <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>UX Design</div>
            </div>
            <div style={{textAlign: "center", minWidth: 140}}>
              <div style={{fontSize: 40, color: "var(--color-icon)"}}><i className="fa fa-camera" /></div>
              <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>Photography</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" bg="var(--color-section-bg)">
        <h2 style={{
          color: "var(--color-white)",
          textAlign: "center",
          fontSize: "2.2rem",
          marginBottom: 32,
          letterSpacing: 2,
          textTransform: "uppercase"
        }}>My Experience</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 48,
          flexWrap: "wrap"
        }}>
          <div style={{
            background: "var(--color-card)",
            borderRadius: 8,
            padding: 32,
            minWidth: 320,
            color: "var(--color-white)",
            fontFamily: "'Montserrat', Arial, sans-serif",
            boxShadow: "0 2px 16px rgba(44,62,80,0.10)"
          }}>
            <div style={{fontWeight: 700, fontSize: "1.1rem", marginBottom: 8, textTransform: "uppercase"}}>Education</div>
            <div style={{marginTop: 8, fontWeight: 500}}>BSc in Computer Science</div>
            <div style={{marginTop: 8, fontSize: "0.95rem", color: "var(--color-muted)"}}>University of Design, 2016-2020</div>
            <div style={{marginTop: 16, fontSize: "0.98rem", color: "var(--color-text)"}}>
              Learned full-stack web development, UI/UX, and project management.
            </div>
          </div>
          <div style={{
            background: "var(--color-card)",
            borderRadius: 8,
            padding: 32,
            minWidth: 320,
            color: "var(--color-white)",
            fontFamily: "'Montserrat', Arial, sans-serif",
            boxShadow: "0 2px 16px rgba(44,62,80,0.10)"
          }}>
            <div style={{fontWeight: 700, fontSize: "1.1rem", marginBottom: 8, textTransform: "uppercase"}}>Design History</div>
            <div style={{marginTop: 8, fontWeight: 500}}>Lead Designer</div>
            <div style={{marginTop: 8, fontSize: "0.95rem", color: "var(--color-muted)"}}>Creative Studio, 2020-2024</div>
            <div style={{marginTop: 16, fontSize: "0.98rem", color: "var(--color-text)"}}>
              Led a team of designers and developers to deliver high-impact projects.
            </div>
          </div>
        </div>
        <div style={{textAlign: "center", marginTop: 40}}>
          <a href="#resume" className="btn">Download My Resume</a>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" bg="var(--color-section-bg-alt)" style={{position: "relative", padding: 0}}>
        <div style={{
          background: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%", opacity: 0.18, zIndex: 0
        }} />
        <div style={{
          position: "relative",
          zIndex: 1,
          padding: "96px 0"
        }}>
          <div style={{textAlign: "center", marginBottom: 32}}>
            <div style={{color: "var(--color-white)", fontSize: "2.2rem", textTransform: "uppercase", letterSpacing: 2}}>Skills</div>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 40
          }}>
            <div>
              <div style={{color: "var(--color-accent)", fontWeight: 700, marginBottom: 8, textAlign: "center", textTransform: "uppercase"}}>Soft Skills</div>
              <div style={{display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap"}}>
                <div style={{textAlign: "center"}}>Communication</div>
                <div style={{textAlign: "center"}}>Work in Team</div>
                <div style={{textAlign: "center"}}>Speed</div>
                <div style={{textAlign: "center"}}>Creativity</div>
              </div>
            </div>
            <div style={{width: "100%", maxWidth: 600}}>
              <div style={{color: "var(--color-accent)", fontWeight: 700, marginBottom: 8, textTransform: "uppercase"}}>Technical Skills</div>
              <div style={{marginBottom: 12}}>HTML5</div>
              <input type="range" min="0" max="100" value="95" readOnly style={{width: "100%"}} />
              <div style={{margin: "12px 0"}}>JavaScript</div>
              <input type="range" min="0" max="100" value="90" readOnly style={{width: "100%"}} />
              <div style={{margin: "12px 0"}}>CSS3</div>
              <input type="range" min="0" max="100" value="85" readOnly style={{width: "100%"}} />
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio */}
      <Section id="portfolio" bg="var(--color-section-bg)">
        <h2 style={{
          color: "var(--color-white)",
          textAlign: "center",
          fontSize: "2.2rem",
          marginBottom: 32,
          letterSpacing: 2,
          textTransform: "uppercase"
        }}>My Work</h2>
        <Portfolio />
      </Section>

      {/* Facts */}
      <Section id="facts" bg="var(--color-section-bg-alt)" style={{position: "relative", padding: 0}}>
        <div style={{
          background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%", opacity: 0.18, zIndex: 0
        }} />
        <div style={{
          position: "relative",
          zIndex: 1,
          padding: "96px 0"
        }}>
          <h2 style={{
            color: "var(--color-white)",
            textAlign: "center",
            fontSize: "2.2rem",
            marginBottom: 32,
            letterSpacing: 2,
            textTransform: "uppercase"
          }}>Awesome Facts</h2>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap"
          }}>
            <div style={{textAlign: "center", minWidth: 140}}>
              <div style={{fontSize: 32, color: "var(--color-accent)"}}><i className="fa fa-folder-open" /></div>
              <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>120+ Projects</div>
            </div>
            <div style={{textAlign: "center", minWidth: 140}}>
              <div style={{fontSize: 32, color: "var(--color-accent)"}}><i className="fa fa-clock-o" /></div>
              <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>10,000+ Work Hours</div>
            </div>
            <div style={{textAlign: "center", minWidth: 140}}>
              <div style={{fontSize: 32, color: "var(--color-accent)"}}><i className="fa fa-comments" /></div>
              <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>24/7 Support</div>
            </div>
            <div style={{textAlign: "center", minWidth: 140}}>
              <div style={{fontSize: 32, color: "var(--color-accent)"}}><i className="fa fa-handshake-o" /></div>
              <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>50+ Happy Clients</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" bg="var(--color-section-bg)">
        <h2 style={{
          color: "var(--color-white)",
          textAlign: "center",
          fontSize: "2.2rem",
          marginBottom: 32,
          letterSpacing: 2,
          textTransform: "uppercase"
        }}>Testimonials</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          flexWrap: "wrap"
        }}>
          <div style={{
            background: "var(--color-card)",
            borderRadius: 16,
            padding: 32,
            minWidth: 260,
            color: "var(--color-white)",
            fontFamily: "'Montserrat', Arial, sans-serif",
            boxShadow: "0 2px 16px rgba(44,62,80,0.10)",
            textAlign: "center"
          }}>
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Client" style={{
              width: 64, height: 64, borderRadius: "50%", marginBottom: 12
            }}/>
            <div style={{fontWeight: 700}}>Jerry Brown</div>
            <div style={{fontSize: "0.95rem", color: "var(--color-muted)"}}>CEO, Company</div>
            <div style={{marginTop: 12, fontSize: "1rem", color: "var(--color-text)"}}>
              "John is a fantastic developer. Highly recommended!"
            </div>
          </div>
          <div style={{
            background: "var(--color-card)",
            borderRadius: 16,
            padding: 32,
            minWidth: 260,
            color: "var(--color-white)",
            fontFamily: "'Montserrat', Arial, sans-serif",
            boxShadow: "0 2px 16px rgba(44,62,80,0.10)",
            textAlign: "center"
          }}>
            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Client" style={{
              width: 64, height: 64, borderRadius: "50%", marginBottom: 12
            }}/>
            <div style={{fontWeight: 700}}>Saad Tarek</div>
            <div style={{fontSize: "0.95rem", color: "var(--color-muted)"}}>Manager, Studio</div>
            <div style={{marginTop: 12, fontSize: "1rem", color: "var(--color-text)"}}>
              "Delivered our project on time and exceeded expectations."
            </div>
          </div>
          <div style={{
            background: "var(--color-card)",
            borderRadius: 16,
            padding: 32,
            minWidth: 260,
            color: "var(--color-white)",
            fontFamily: "'Montserrat', Arial, sans-serif",
            boxShadow: "0 2px 16px rgba(44,62,80,0.10)",
            textAlign: "center"
          }}>
            <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Client" style={{
              width: 64, height: 64, borderRadius: "50%", marginBottom: 12
            }}/>
            <div style={{fontWeight: 700}}>Emily Carter</div>
            <div style={{fontSize: "0.95rem", color: "var(--color-muted)"}}>Designer</div>
            <div style={{marginTop: 12, fontSize: "1rem", color: "var(--color-text)"}}>
              "Great communication and creative solutions."
            </div>
          </div>
        </div>
        <div style={{textAlign: "center", marginTop: 32}}>
          {/* Dots for carousel, static for now */}
          <span style={{
            display: "inline-block",
            width: 12, height: 12, borderRadius: "50%",
            background: "var(--color-accent)", margin: "0 4px"
          }} />
          <span style={{
            display: "inline-block",
            width: 12, height: 12, borderRadius: "50%",
            background: "var(--color-divider)", margin: "0 4px"
          }} />
          <span style={{
            display: "inline-block",
            width: 12, height: 12, borderRadius: "50%",
            background: "var(--color-divider)", margin: "0 4px"
          }} />
        </div>
      </Section>

      <Companies />

      {/* Posts */}
      <Section id="posts" bg="var(--color-section-bg-alt)">
        <h2 style={{
          color: "var(--color-white)",
          textAlign: "center",
          fontSize: "2.2rem",
          marginBottom: 32,
          letterSpacing: 2,
          textTransform: "uppercase"
        }}>Last Posts</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          flexWrap: "wrap"
        }}>
          <div style={{
            background: "var(--color-card)",
            borderRadius: 16,
            padding: 24,
            minWidth: 320,
            color: "var(--color-white)",
            fontFamily: "'Montserrat', Arial, sans-serif",
            boxShadow: "0 2px 16px rgba(44,62,80,0.10)"
          }}>
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Post" style={{
              width: "100%", borderRadius: 12, marginBottom: 16
            }}/>
            <div style={{fontWeight: 700, fontSize: "1.1rem"}}>Normal Post Style</div>
            <div style={{marginTop: 8, fontSize: "0.98rem", color: "var(--color-text)"}}>
              A short description of the post goes here. This is a sample post for the portfolio.
            </div>
            <div style={{marginTop: 16, color: "var(--color-muted)", fontSize: "0.95rem"}}>1 comment</div>
          </div>
          <div style={{
            background: "var(--color-card)",
            borderRadius: 16,
            padding: 24,
            minWidth: 320,
            color: "var(--color-white)",
            fontFamily: "'Montserrat', Arial, sans-serif",
            boxShadow: "0 2px 16px rgba(44,62,80,0.10)"
          }}>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Post" style={{
              width: "100%", borderRadius: 12, marginBottom: 16
            }}/>
            <div style={{fontWeight: 700, fontSize: "1.1rem"}}>Normal Post Style</div>
            <div style={{marginTop: 8, fontSize: "0.98rem", color: "var(--color-text)"}}>
              Another post description. This is a sample post for the portfolio.
            </div>
            <div style={{marginTop: 16, color: "var(--color-muted)", fontSize: "0.95rem"}}>2 comments</div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" bg="var(--color-section-bg)">
        <h2 style={{
          color: "var(--color-white)",
          textAlign: "center",
          fontSize: "2.2rem",
          marginBottom: 32,
          letterSpacing: 2,
          textTransform: "uppercase"
        }}>Get In Touch</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 48,
          flexWrap: "wrap",
          marginBottom: 48
        }}>
          <div style={{textAlign: "center", minWidth: 140}}>
            <div style={{fontSize: 32, color: "var(--color-accent)"}}><i className="fa fa-map-marker" /></div>
            <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>Location</div>
            <div style={{color: "var(--color-muted)", fontSize: "0.95rem"}}>New York, USA</div>
          </div>
          <div style={{textAlign: "center", minWidth: 140}}>
            <div style={{fontSize: 32, color: "var(--color-accent)"}}><i className="fa fa-phone" /></div>
            <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>Phone</div>
            <div style={{color: "var(--color-muted)", fontSize: "0.95rem"}}>+1 234 567 890</div>
          </div>
          <div style={{textAlign: "center", minWidth: 140}}>
            <div style={{fontSize: 32, color: "var(--color-accent)"}}><i className="fa fa-envelope" /></div>
            <div style={{color: "var(--color-white)", fontWeight: 600, marginTop: 8}}>Email</div>
            <div style={{color: "var(--color-muted)", fontSize: "0.95rem"}}>john@example.com</div>
          </div>
        </div>
        <form style={{
          background: "var(--color-card)",
          borderRadius: 16,
          padding: 32,
          maxWidth: 500,
          margin: "0 auto",
          boxShadow: "0 2px 16px rgba(44,62,80,0.10)"
        }}>
          <div style={{display: "flex", gap: 16, marginBottom: 16}}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <textarea rows={4} placeholder="Your Message" required />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </Section>
    </>
  );
}

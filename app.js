// Initialize Dream's sand particles
function initDreamParticles() {
  particlesJS("dream-particles", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#FDB813", "#FEF08A", "#FFFFFF", "#60A5FA"] // Gold, sand, white, blue
      },
      "shape": {
        "type": ["circle", "triangle", "star"],
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FDB813", // Gold connections
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble" // Particles react to mouse
        },
        "onclick": {
          "enable": true,
          "mode": "push" // Click creates wave
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 200,
          "size": 6,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
}

function initDeathParticles() {
  particlesJS("death-particles", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#ec4899", "#fbcfe8", "#ffffff", "#831843"] // Pink/purple palette
      },
      "shape": {
        "type": "image",
        "image": {
          "src": "images/Ankh.png",
          "width": 20,
          "height": 20
        }
      },
      "opacity": {
        "value": 0.7,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 15,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#ec4899",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.2,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        }
      },
      "modes": {
        "bubble": {
          "distance": 100,
          "size": 8,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        }
      }
    },
    "retina_detect": true
  });
}


document.addEventListener('DOMContentLoaded', function() {
    initDreamParticles();
    initDeathParticles()
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const comicToggle = document.getElementById('comictoggle');
    const comics = document.getElementsByClassName('comic-panel')
    
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        mobileMenu.classList.toggle('hidden');
        this.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
    });
    
    // Close menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.classList.contains('hidden') && 
            !e.target.closest('#mobile-menu') && 
            !e.target.closest('#menu-toggle')) {
            mobileMenu.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Character-specific animations with alternating directions
    const sections = [
        { // Destiny (odd section - image on left)
            id: 'destiny',
            animation: (tl, section) => {
                tl.from(`#${section} .section-image`, {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                })
                .from(`#${section} .section-title`, {
                    x: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out"
                }, "-=0.5")
                .from(`#${section} .section-desc`, {
                    x: 30,
                    opacity: 0,
                    duration: 0.6
                }, "-=0.3")
                .from(`#${section} .tag`, {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5
                }, "-=0.2");
            }
        },
        { // Death (even section - image on right)
            id: 'death',
            animation: (tl, section) => {
                tl.from(`#${section} .section-image`, {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                })
                .from(`#${section} .section-title`, {
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out"
                }, "-=0.5")
                .from(`#${section} .section-desc`, {
                    x: -30,
                    opacity: 0,
                    duration: 0.6
                }, "-=0.3")
                .from(`#${section} .tag`, {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5
                }, "-=0.2");
            }
        },
        { // Dream (odd section - image on left)
            id: 'dream',
            animation: (tl, section) => {
                tl.from(`#${section} .section-image`, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                })
                .from(`#${section} .section-title`, {
                    y: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out"
                }, "-=0.5")
                .from(`#${section} .section-desc`, {
                    y: -30,
                    opacity: 0,
                    duration: 0.6
                }, "-=0.3")
                .from(`#${section} .tag`, {
                    scale: 0,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5
                }, "-=0.2");
            }
        },
        { // Destruction (even section - image on right)
            id: 'destruction',
            animation: (tl, section) => {
                tl.from(`#${section} .section-image`, {
                    rotation: 10,
                    x: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "back.out(1.7)"
                })
                .from(`#${section} .section-title`, {
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "bounce.out"
                }, "-=0.5")
                .from(`#${section} .section-desc`, {
                    x: -30,
                    opacity: 0,
                    duration: 0.6
                }, "-=0.3")
                .from(`#${section} .tag`, {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5
                }, "-=0.2");
            }
        },
        { // Desire (odd section - image on left)
            id: 'desire',
            animation: (tl, section) => {
                tl.from(`#${section} .section-image`, {
                    scale: 1.2,
                    opacity: 0,
                    duration: 1,
                    ease: "power1.out"
                })
                .from(`#${section} .section-title`, {
                    y: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out"
                }, "-=0.5")
                .from(`#${section} .section-desc`, {
                    y: -30,
                    opacity: 0,
                    duration: 0.6
                }, "-=0.3")
                .from(`#${section} .tag`, {
                    x: -20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5
                }, "-=0.2");
            }
        },
        { // Despair (even section - image on right)
            id: 'despair',
            animation: (tl, section) => {
                tl.from(`#${section} .section-image`, {
                    y: -100,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power4.out"
                })
                .from(`#${section} .section-title`, {
                    x: -50,
                    opacity: 0,
                    duration: 1,
                    ease: "slow(0.7, 0.7, false)"
                }, "-=0.8")
                .from(`#${section} .section-desc`, {
                    x: -30,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.5")
                .from(`#${section} .tag`, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.7
                }, "-=0.3");
            }
        },
        { // Delirium (odd section - image on left)
            id: 'delirium',
            animation: (tl, section) => {
                tl.from(`#${section} .section-image`, {
                    rotation: 360,
                    scale: 0,
                    opacity: 0,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.5)"
                })
                .from(`#${section} .section-title`, {
                    x: 50,
                    y: -50,
                    rotation: -10,
                    opacity: 0,
                    duration: 1,
                    ease: "back.out(4)"
                }, "-=0.7")
                .from(`#${section} .section-desc`, {
                    x: 30,
                    y: 30,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.5")
                .from(`#${section} .tag`, {
                    scale: 0,
                    rotation: 180,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.6
                }, "-=0.3");
            }
        }
    ];
    

    // Create animations for each section
    sections.forEach(section => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#${section.id}`,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none none",
                markers: false
            }
        });
        
        section.animation(tl, section.id);
        
        // Continuous floating animation for images
        gsap.to(`#${section.id} .section-image img`, {
            y: 15,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    // Barba.js initialization
    barba.init({
        transitions: [
            {
                name: 'default',
                leave(data) {
                    return gsap.to(data.current.container, {
                        opacity: 0,
                        duration: 0.5
                    });
                },
                enter(data) {
                    return gsap.from(data.next.container, {
                        opacity: 0,
                        duration: 0.5
                    });
                }
            }
        ]
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            }
        });
    });
});

particlesJS("particles-js", {
    particles: {
      number: {
        value: 1000,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.65,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.3 }
      },
      size: {
        value: 1.3,
        random: true
      },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.1,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false },
        onclick: { enable: false },
        resize: true
      }
    },
    retina_detect: true
  });
  
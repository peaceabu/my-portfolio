// particlesConfig.js
const particlesConfig = {
  autoPlay: true,
  background: {
    value: 'transparent'
  },
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: { enable: true, mode: 'push' },
      onHover: {
        enable: true,
        mode: 'grab',
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
      resize: {
        enable: true,
        delay: 0.5
      }
    },
    modes: {
      push: { quantity: 1 },
      grab: {
        distance: 150,
        links: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        duration: 0.5,
        opacity: 0.8,
        size: 40
      },
      repulse: {
        distance: 200,
        duration: 0.2,
        factor: 100,
        speed: 1,
        maxSpeed: 30,
        easing: 'ease-out-quad'
      }
    }
  },
  particles: {
    number: {
      value: 3,
      density: {
        enable: true,
        width: 1920,
        height: 1080
      }
    },
    color: { value: '#ffffff' },
    links: {
      enable: true,
      color: '#ffffff',
      distance: 150,
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      outModes: {
        default: 'out'
      }
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.3,
        sync: false,
        startValue: 'random'
      }
    },
    size: {
      value: { min: 1, max: 3 },
      animation: {
        enable: true,
        speed: 20,
        sync: false,
        startValue: 'random'
      }
    },
    shape: {
      type: 'circle'
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  zLayers: 100
};

export default particlesConfig;

import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // container has loaded
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.8,
                  color: "#00ff41",
                },
              },
            },
          },
          particles: {
            color: {
              value: "#00ff41",
            },
            links: {
              color: "#00ff41",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

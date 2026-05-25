import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesContainer = () => {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullscreen: { enable: false },
      background: { color: { value: "" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: { enable: true },
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 150,
            duration: 0.2,
          },
        },
      },
      particles: {
        color: {
          value: "#e68e2e",
        },
        links: {
          color: "#f5d393",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="tsparticles"
        className="w-full h-full absolute translate-z-0"
        options={options}
      />
    </ParticlesProvider>
  );
};

export default ParticlesContainer;

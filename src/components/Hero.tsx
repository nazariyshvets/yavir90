const Hero = () => (
  <section
    id="hero"
    className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-4 pb-20 sm:gap-10 sm:px-12 xl:gap-12 xl:px-24"
  >
    <img
      src="/building.webp"
      alt="building"
      className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
    />
    <div className="absolute left-0 top-0 -z-10 h-full w-full bg-deep-black bg-opacity-70"></div>

    <h1 className="text-center text-4xl font-bold sm:text-5xl xl:text-6xl">
      Втілюємо мрії, будуємо майбутнє
    </h1>
    <a
      href="#projects"
      className="border border-primary bg-deep-black px-4 py-2 font-medium text-primary sm:px-6 sm:text-lg xl:px-8 xl:py-3 xl:text-xl"
    >
      Наші проєкти
    </a>
  </section>
);

export default Hero;

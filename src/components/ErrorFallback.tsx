const ErrorFallback = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-12 px-4 sm:px-12 xl:px-24">
    <h1 className="text-center text-4xl font-bold sm:text-5xl xl:text-6xl">
      Отакої, щось пішло не за планом :(
    </h1>
    <button
      className="border border-primary px-4 py-2 font-medium text-primary transition-colors hover:border-white hover:text-white sm:px-6 sm:text-lg xl:px-8 xl:py-3 xl:text-xl"
      onClick={() => window.location.reload()}
    >
      Перезавантажити
    </button>
  </div>
);

export default ErrorFallback;

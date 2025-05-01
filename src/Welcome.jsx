export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 px-4 py-12 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
        Welcome to Our Store!
      </h1>
      <div className="text-base sm:text-lg md:text-xl text-white mb-4 text-center max-w-2xl">
        We're excited to have you here. Explore amazing products and deals just for you.
      </div>
      <div className="text-sm sm:text-base md:text-lg text-white text-center max-w-xl">
        <p>Enjoy your shopping experience! Let us know if you need assistance.</p>
      </div>
    </div>
  );
}

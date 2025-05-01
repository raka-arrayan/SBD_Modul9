import { Typewriter } from 'react-simple-typewriter';
import bg from './assets/bg.avif';

export default function Welcome() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4 py-12 md:px-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Konten di atas overlay */}
      <div className="relative z-10 flex flex-col items-center text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Welcome to Our Store!
        </h1>
        <div className="text-base sm:text-lg md:text-xl mb-4 max-w-2xl">
          <Typewriter
            words={[
              "We're excited to have you here. Explore amazing products and deals just for you.",
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="text-sm sm:text-base md:text-lg max-w-xl">
          <Typewriter
            words={[
              'Enjoy your shopping experience! Let us know if you need assistance.',
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </div>
  );
}

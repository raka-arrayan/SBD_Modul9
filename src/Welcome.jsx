import { Typewriter } from 'react-simple-typewriter';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 px-4 py-12 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
        Welcome to Our Store!
      </h1>
      <div className="text-base sm:text-lg md:text-xl text-white mb-4 text-center max-w-2xl">
        <Typewriter
          words={['We\'re excited to have you here. Explore amazing products and deals just for you.']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={80} 
          deleteSpeed={50} 
          delaySpeed={1000}
        />
      </div>
      <div className="text-sm sm:text-base md:text-lg text-white text-center max-w-xl">
        <Typewriter
          words={['Enjoy your shopping experience! Let us know if you need assistance.']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={80} 
          deleteSpeed={50} 
          delaySpeed={1000}
        />
      </div>
    </div>
  );
}

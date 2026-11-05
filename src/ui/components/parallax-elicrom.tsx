"use client"
import { useEffect, useRef } from 'react';
import { Button } from '~/ui/primitives/button';
import { ArrowDown, Star, Zap, Heart } from 'lucide-react';

interface ParallaxElicromProps {
  className?: string;
}

const ParallaxElicrom: React.FC<ParallaxElicromProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      
      document.documentElement.style.setProperty('--scroll', scrolled.toString());
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden ${className}`}
    >
      <div 
        className="parallax-bg-far absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800"
        style={{ '--speed': '0.1' } as React.CSSProperties}
      />
      
      <div 
        className="parallax-bg-slow absolute inset-0 opacity-70"
        style={{ '--speed': '0.3' } as React.CSSProperties}
      >
        <div className="absolute top-20 left-10 text-white text-xs animate-pulse">
          <Star className="w-2 h-2" />
        </div>
        <div className="absolute top-40 right-20 text-white text-xs animate-pulse delay-100">
          <Star className="w-1 h-1" />
        </div>
        <div className="absolute top-60 left-1/3 text-white text-xs animate-pulse delay-200">
          <Star className="w-3 h-3" />
        </div>
        <div className="absolute top-80 right-1/3 text-white text-xs animate-pulse delay-300">
          <Star className="w-1.5 h-1.5" />
        </div>
        <div className="absolute top-32 right-10 text-white text-xs animate-pulse delay-500">
          <Star className="w-2.5 h-2.5" />
        </div>
      </div>

      <div 
        className="parallax-bg-medium absolute inset-0 opacity-40"
        style={{ '--speed': '0.5' } as React.CSSProperties}
      >
        <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-black/30 to-transparent" />
        
        <div className="absolute top-1/4 left-20 text-cyan-300 opacity-60">
          <Zap className="w-8 h-8 animate-bounce" />
        </div>
        <div className="absolute top-1/2 right-32 text-pink-300 opacity-60">
          <Heart className="w-6 h-6 animate-pulse" />
        </div>
        <div className="absolute top-3/4 left-1/2 text-yellow-300 opacity-60">
          <Zap className="w-10 h-10 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>

      <div className="relative z-30 flex items-center justify-center min-h-screen px-6">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
              ELICROM
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 font-light tracking-wide">
              Experience the Future of Digital Innovation
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Dive into a world where technology meets imagination. Our cutting-edge solutions
              push the boundaries of what's possible in the digital realm.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div 
        className="parallax-bg-fast absolute inset-0 pointer-events-none opacity-30"
        style={{ '--speed': '0.8' } as React.CSSProperties}
      >
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-lg" />
        <div className="absolute bottom-60 left-1/3 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default ParallaxElicrom;
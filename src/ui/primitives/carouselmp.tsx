'use client';
import {
  Children,
  ReactNode,
  createContext,
  use,
  useEffect,
  useRef,
  useState,
  useMemo
} from 'react';
import { motion, Transition, useMotionValue } from 'motion/react';
import { cn } from '~/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselContextType {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
  autoplayLockedRef: React.RefObject<boolean>;
}

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

function useCarousel() {
  const context = use(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within an CarouselProvider');
  }
  return context;
}

export interface CarouselProviderProps {
  children: ReactNode;
  initialIndex?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
}

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);
  const autoplayLockedRef = useRef<boolean>(false);

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  const contextValue = useMemo(
    () => ({
      index,
      setIndex: handleSetIndex,
      itemsCount,
      setItemsCount,
      disableDrag,
      autoplayLockedRef,
    }),
    [index, handleSetIndex, itemsCount, disableDrag]
  );

  return (
    <CarouselContext 
      value={contextValue}>
      {children}
    </CarouselContext >
  );
}
function CarouselAutoplayOnView({
  interval = 4000,
  maxLoops = 3,
}: {
  interval?: number;
  maxLoops?: number;
}) {
  const { index, setIndex, itemsCount, autoplayLockedRef } = useCarousel();

  const ref = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const loopRef = useRef(0);
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (!ref.current || itemsCount === 0) return;

    const handleAutoplay = () => {
      const nextIndex = (indexRef.current + 1) % itemsCount;

      setIndex(nextIndex);
      indexRef.current = nextIndex;

      if (nextIndex === 0) {
        loopRef.current += 1;
        if (loopRef.current >= maxLoops) {
          clearInterval(autoplayRef.current!);
          autoplayRef.current = null;
          autoplayLockedRef.current = true;
        }
      }
    };

    const startAutoplay = () => {
      if (autoplayRef.current || autoplayLockedRef.current) return;
      autoplayRef.current = setInterval(handleAutoplay, interval);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      },
      { threshold: 0.5 }
    );

    observer.current.observe(ref.current);

    return () => {
      if (ref.current) observer.current?.unobserve(ref.current);
      stopAutoplay();
    };
  }, [itemsCount, interval, setIndex]);

  return (
    <div
      ref={ref}
      className="w-full h-20 absolute bottom-0 left-0 pointer-events-none"
    />
  );
}

export interface CarouselProps {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

function Carouselmp({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
  autoPlay = false,
  interval = 4000,

}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex);
  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
    >
      <div className={cn('group/hover relative', className)}>
        <div className='overflow-hidden'>
        
        {autoPlay && (
  
    
    <CarouselAutoplayOnView interval={interval} maxLoops={3} />
  
)}
        

        {children}
          
        </div>
      </div>
    </CarouselProvider>
  );
}

export interface CarouselNavigationProps {
  className?: string;
  classNameButton?: string;
  alwaysShow?: boolean;
}

function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
}: CarouselNavigationProps) {
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <div
      className={cn(
        'pointer-events-none absolute left-[-12.5%] top-1/2 flex w-[125%] -translate-y-1/2 justify-between px-2',
        className
      )}
    >
      <button
        type='button'
        aria-label='Previous slide'
        className={cn(
          'pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950',
          alwaysShow
            ? 'opacity-100'
            : 'opacity-0 group-hover/hover:opacity-100',
          alwaysShow
            ? 'disabled:opacity-40'
            : 'group-hover/hover:disabled:opacity-40',
          classNameButton
        )}
        disabled={index === 0}
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
      >
        <ChevronLeft
          className='stroke-zinc-600 dark:stroke-zinc-50'
          size={16}
        />
      </button>
      <button
        type='button'
        className={cn(
          'pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950',
          alwaysShow
            ? 'opacity-100'
            : 'opacity-0 group-hover/hover:opacity-100',
          alwaysShow
            ? 'disabled:opacity-40'
            : 'group-hover/hover:disabled:opacity-40',
          classNameButton
        )}
        aria-label='Next slide'
        disabled={index + 1 === itemsCount}
        onClick={() => {
          if (index < itemsCount - 1) {
            setIndex(index + 1);
          }
        }}
      >
        <ChevronRight
          className='stroke-zinc-600 dark:stroke-zinc-50'
          size={16}
        />
      </button>
    </div>
  );
}

export interface CarouselIndicatorProps {
  className?: string;
  classNameButton?: string;
}

function CarouselIndicator({
  className,
  classNameButton,
}: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex } = useCarousel();

  return (
    <div
      className={cn(
        'absolute bottom-4 z-10 flex w-full items-center justify-center',
        className
      )}
    >
      <div className='flex space-x-3'>
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type='button'
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              'h-2 w-2 rounded-full transition-opacity duration-300',
              index === i
                ? 'bg-red-950 dark:bg-zinc-50'
                : 'bg-red-900/50 dark:bg-zinc-100/50',
              classNameButton
            )}
          />
        ))}
      </div>
    </div>
  );
}

export interface CarouselContentProps {
  children: ReactNode;
  className?: string;
  transition?: Transition;
}

function CarouselContent({
  children,
  className,
  transition,
}: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag } = useCarousel();
  const [visibleItemsCount, setVisibleItemsCount] = useState(1);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsLength = children ? Children.toArray(children as ReactNode).length : 0;

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const options = {
      root: containerRef.current,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleCount = entries.filter(
        (entry) => entry.isIntersecting
      ).length;
      setVisibleItemsCount(visibleCount);
    }, options);

    const childNodes = containerRef.current.children;
    Array.from(childNodes).forEach((child) => observer.observe(child));

    

    return () => observer.disconnect();
    
  }, [children, setItemsCount]);

  useEffect(() => {
  if (!itemsLength) return;
  setItemsCount(itemsLength);
}, [itemsLength, setItemsCount]);

  const onDragEnd = (event: PointerEvent | MouseEvent | TouchEvent) => {
    const x = dragX.get();

    const containerWidth = containerRef.current?.offsetWidth || 1;
    const dragPercent = x / containerWidth;

    if (dragPercent <= -0.05 && index < itemsLength - 1) {
      setIndex(index + 1);
    } else if (dragPercent >= 0.05 && index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(index);
    }
  };

  return (
    <motion.div
      drag={disableDrag ? false : 'x'}
      dragConstraints={
        disableDrag
          ? undefined
          : {
              left: 0,
              right: 0,
            }
      }
      dragMomentum={disableDrag ? undefined : false}
      style={{
        x: disableDrag ? undefined : dragX,
      }}
      animate={{
        translateX: `-${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={
        transition || {
          damping: 18,
          stiffness: 90,
          type: 'spring',
          duration: 0.2,
        }
      }
      className={cn(
        'flex items-center',
        !disableDrag && 'cursor-grab active:cursor-grabbing',
        className
      )}
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
}

export interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <motion.div
      className={cn(
        'w-full min-w-0 shrink-0 grow-0 overflow-hidden',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export {
  Carouselmp,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
  CarouselAutoplayOnView
};

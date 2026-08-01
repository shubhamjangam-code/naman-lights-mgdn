import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  variant = 'fade-up', 
  delay = 0, 
  duration = 0.6, 
  threshold = 0.15,
  className = '',
  style = {} 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getInitialTransform = () => {
    switch (variant) {
      case 'fade-up':
        return 'translateY(32px)';
      case 'fade-down':
        return 'translateY(-32px)';
      case 'fade-left':
        return 'translateX(32px)';
      case 'fade-right':
        return 'translateX(-32px)';
      case 'zoom-in':
        return 'scale(0.92)';
      default:
        return 'translateY(32px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0) scale(1)' : getInitialTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
}

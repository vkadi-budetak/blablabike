"use client";

import React, { useState, useEffect } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";

export default function BikeImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

 
  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setScale((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  useEffect(() => {
    if (isOpen) {
      const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "unset";
        setScale(1);
      };
    }
  }, [isOpen]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) setScale((prev) => Math.min(prev + 0.2, 3));
    else setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  return (
    <>
  
      <div 
        className="relative w-full h-full overflow-hidden cursor-zoom-in group flex items-center justify-center p-6 bg-white"
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
      </div>

    
      {isOpen && (
        <div 
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 overflow-hidden"
          onWheel={handleWheel} 
          onClick={() => setIsOpen(false)}
        >
          
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/60 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-full text-white z-[1001]"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={handleZoomOut}
              className="hover:text-[#e6ff2a] transition-colors p-1"
            >
              <ZoomOut size={20} />
            </button>
            
            <span className="text-sm font-black tabular-nums min-w-[45px] text-center">
              {Math.round(scale * 100)}%
            </span>
            
            <button 
              onClick={handleZoomIn}
              className="hover:text-[#e6ff2a] transition-colors p-1"
            >
              <ZoomIn size={20} />
            </button>
          </div>

          <button className="absolute top-8 right-8 text-white/70 hover:text-white transition-all z-[1000]">
            <X size={32} />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <img
              src={src}
              alt={alt}
              style={{ transform: `scale(${scale})` }} 
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-200 ease-out pointer-events-auto"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </>
  );
}
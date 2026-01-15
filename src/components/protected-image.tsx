"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ProtectedImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const ProtectedImage = ({ src, width, height}: ProtectedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      setImageSrc(canvas.toDataURL("image/webp", 0.8));
    };
    img.src = src;
  }, [src]);

  if (!imageSrc) return <div className="w-[400px] h-[400px] bg-gray-200 animate-pulse rounded-2xl" />;

  return (
    <div className="relative" onContextMenu={(e) => e.preventDefault()}>
        <Image
          src={imageSrc}
          width={width}
          height={height}
          alt="Ankit"
          draggable={false}
          className="select-none rounded-2xl"
        />
      <div className="absolute inset-0 pointer-events-none select-none z-30 rounded-2xl overflow-hidden">
        <div className="absolute top-4 right-4 text-white/50 text-xs font-bold transform rotate-12 drop-shadow-lg">© ankitsinghmyself</div>
        <div className="absolute bottom-4 left-4 text-white/50 text-xs font-bold transform -rotate-12 drop-shadow-lg">© ankitsinghmyself</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/40 text-sm font-bold rotate-45 drop-shadow-lg">© ankitsinghmyself</div>
      </div>
    </div>
  );
};

export default ProtectedImage;
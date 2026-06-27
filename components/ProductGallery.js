"use client";
import { useState } from "react";

export default function ProductGallery({ images, alt }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="aspect-[4/5] bg-white border border-ink/10 flex items-center justify-center mb-3">
        <img src={images[active]} alt={alt} className="max-h-[90%]" />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-16 h-16 border ${
                active === i ? "border-leather" : "border-ink/10"
              } bg-white flex items-center justify-center`}
            >
              <img src={img} alt={`${alt} ${i + 1}`} className="max-h-full max-w-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

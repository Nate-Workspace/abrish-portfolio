import React, { useRef, useEffect } from "react";

export default function BrandCarousel({ images }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationId;
    let scrollLeft = 0;
    let frame = () => {
      scrollLeft += 1;
      if (scrollLeft >= track.scrollWidth / 2) {
        scrollLeft = 0;
      }
      track.scrollLeft = scrollLeft;
      animationId = requestAnimationFrame(frame);
    };
    animationId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate the images for seamless looping
  const allImages = [...images, ...images];

  return (
    <section className="brand-carousel-section">
      <div className="brand-carousel-outer">
        <div className="brand-carousel-track" ref={trackRef}>
          {allImages.map((img, i) => (
            <div className="brand-logo-wrapper" key={i}>
              <img
                src={`/brands/${img}`}
                alt="Brand logo"
                className="brand-logo"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

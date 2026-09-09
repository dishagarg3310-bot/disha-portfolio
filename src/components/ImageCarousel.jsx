import { useState } from "react";

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="project-image-placeholder">
        <span>Add project photos here</span>
      </div>
    );
  }

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="carousel">
      <div className="carousel-image-wrap">
        <img src={images[index]} alt={`Project photo ${index + 1}`} className="carousel-image" />

        {images.length > 1 && (
          <>
            <button className="carousel-arrow carousel-arrow-left" onClick={goPrev}>‹</button>
            <button className="carousel-arrow carousel-arrow-right" onClick={goNext}>›</button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`carousel-dot ${i === index ? "carousel-dot-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
import { useState, useEffect } from "react";
import "./App.css";

const images = [
  "https://picsum.photos/id/1015/800/500",
  "https://picsum.photos/id/1016/800/500",
  "https://picsum.photos/id/1025/800/500",
  "https://picsum.photos/id/1035/800/500",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, 3000);

  return () => clearInterval(timer);
}, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-page">
      <div className="carousel">
        <h1>Image Carousel</h1>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />

        <div className="controls">
          <button onClick={previousImage}>❮ Previous</button>

          <span>
            {currentIndex + 1} / {images.length}
          </span>

          <button onClick={nextImage}>Next ❯</button>
        </div>

        <div className="dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={currentIndex === index ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
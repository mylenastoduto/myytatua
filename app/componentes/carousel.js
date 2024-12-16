import { useState } from 'react';

export default function Carousel() {
  // Estado para controlar o índice da imagem visível
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de imagens para o carrossel
  const images = [
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/image3.jpeg',
  ];

  // Função para mover para a imagem anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Função para mover para a imagem seguinte
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container relative overflow-hidden w-[200px] h-[400px]">
      {/* Imagem visível */}
      <div className="carousel-images flex transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#60;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#62;
      </button>
    </div>
  );
}

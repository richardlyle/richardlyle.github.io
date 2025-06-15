
import React, { useRef, useState } from 'react';
import Masonry from 'react-masonry-css';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';

const hockeyImages = [
  { src: '/images/Hockey/Hockey1.JPG', title: 'Challenge Cup picture with Superintendent' },
  { src: '/images/Hockey/hockey2.jpg', title: 'Minnesoata State Championship game goal' },
  { src: '/images/Hockey/hockey3.jpg', title: 'Senior Year solo picture' },
  { src: '/images/Hockey/hockey4.jpg', title: 'Hoisting Challenge cup' },
  { src: '/images/Hockey/hockey5.jpg', title: 'Toldeo with Tom' },
  { src: '/images/Hockey/hockey6.jpg', title: 'Outdoor Tournament champions' }
];

const familyImages = [
  { src: '/images/Family/Family1.JPG', title: 'LTC Blaines Retirement' },
  { src: '/images/Family/Family2.jpg', title: 'Pining of Bars for Commisioning' },
  { src: '/images/Family/Family3.jpg', title: 'Simbaing Macy Lee' },
  { src: '/images/Family/Family4.jpg', title: 'Ring weekend on the Plain' },
  { src: '/images/Family/Family5.JPG', title: 'Graduation pictures hat throw' },
  { src: '/images/Family/Family6.jpg', title: 'Gav and I smoking a cagar' },
  { src: '/images/Family/Family7.jpg', title: 'Rodeo with Brother and McKenna' },
  { src: '/images/Family/Family8.jpg', title: 'Charles Bridge with the LTs' },
  { src: '/images/Family/Family9.jpg', title: 'Beach Lunch with LTs' },
];

const travelImages = [
  { src: '/images/Travel/Travel1.jpg', title: 'Garden of the Gods' },
  { src: '/images/Travel/Travel2.jpg', title: 'Heading to Europe on C17' },
  { src: '/images/Travel/Travel3.jpg', title: 'Bucharest Arch' },
  { src: '/images/Travel/Travel4.jpg', title: 'Constanta history district' },
  { src: '/images/Travel/Travel5.jpg', title: 'Bucharest River at Night' },
  { src: '/images/Travel/Travel6.jpg', title: 'Prague Museum' },
  { src: '/images/Travel/Travel7.jpg', title: 'Prauge Clock' },
  { src: '/images/Travel/Travel8.jpg', title: 'Prauge Theater' },
  { src: '/images/Travel/Travel9.jpg', title: 'Prague skyline' },
  { src: '/images/Travel/Travel10.jpg', title: 'Prauge Hanging man' },
  { src: '/images/Travel/Travel11.jpg', title: 'Farul Constanta soccer game' },
];

const allImages = [
  ...hockeyImages,
  ...familyImages,
  ...travelImages,
];

const GalleryPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);
  const sliderRef = useRef<Slider | null>(null);

  const handleCarouselClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const openLightbox = (images: { src: string }[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const renderMasonrySection = (title: string, images: { src: string; title: string }[]) => (
    <div className="masonry-section">
      <h2>{title}</h2>
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.title}
            title={img.title}
            onClick={() => openLightbox(images, index)}
            className="masonry-img"
          />
        ))}
      </Masonry>
    </div>
  );

  return (
    <div className="gallery-page">
      <h1>Photo Gallery</h1>

      <div className="carousel-wrapper">
        <Slider {...sliderSettings} ref={(slider) => { sliderRef.current = slider; }}>
          {allImages.map((img, i) => (
            <div key={i}>
              <img
                src={img.src}
                className="carousel-img"
                alt={img.title}
                title={img.title}
                onClick={handleCarouselClick}
              />
            </div>
          ))}
        </Slider>
      </div>

      {renderMasonrySection('Hockey', hockeyImages)}
      {renderMasonrySection('Friends & Family', familyImages)}
      {renderMasonrySection('Travel', travelImages)}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxImages}
      />
    </div>
  );
};

export default GalleryPage;
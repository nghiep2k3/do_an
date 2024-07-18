import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from './Laptop.module.css';
export default function Laptop() {
  const items = [
    { id: 1, name: 'Laptop 1', img: 'path_to_image_1' },
    { id: 2, name: 'Laptop 2', img: 'path_to_image_2' },
    { id: 3, name: 'Laptop 3', img: 'path_to_image_3' },
    { id: 4, name: 'Laptop 4', img: 'path_to_image_4' },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className={styles}></div>
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  )
}

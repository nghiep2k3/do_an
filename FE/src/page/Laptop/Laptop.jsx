import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from './Laptop.module.css';
export default function Laptop() {
  const items = [
    { id: 1, name: 'Laptop 1', img: 'https://laptop88.vn/media/product/8634_thi___t_k____ch__a_c___t__n__5_.jpg' },
    { id: 2, name: 'Laptop 2', img: 'https://laptop88.vn/media/product/120_8634_acer_nitro_5_led_______900x900_1.jpg' },
    { id: 3, name: 'Laptop 3', img: 'https://laptop88.vn/media/product/120_8634_acer_nitro_5_led_______900x900_1.jpg' },
    { id: 4, name: 'Laptop 4', img: 'https://laptop88.vn/media/product/120_8634_acer_nitro_5_led_______900x900_1.jpg' },
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
      <div className={styles.container}></div>
      <Slider {...settings}>
        {items.map(item => (
          <div className={styles.itemTT} key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <span className={styles.oldPrice}>899.000đ</span>
            <span>giảm 37%</span>
            <h3>478.000đ</h3>
          </div>
        ))}
      </Slider>
    </div>
  )
}

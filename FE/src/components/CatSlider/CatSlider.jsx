import React from 'react';
import Slider from 'react-slick';
import styles from './CatSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CatSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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
        <div className={styles.catSliderSection}>
            <div className={styles.gleeBlock}></div>
            <div className={styles.containerFluid}>
                <Slider {...settings} className={styles.cat_Slider_Main}>
                    <div className={styles.item}>
                        <h4>Category 1</h4>
                    </div>
                    <div className={styles.item}>
                        <h4>Category 2</h4>
                    </div>
                    <div className={styles.item}>
                        <h4>Category 3</h4>
                    </div>
                    <div className={styles.item}>
                        <h4>Category 4</h4>
                    </div>
                    <div className={styles.item}>
                        <h4>Category 5</h4>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

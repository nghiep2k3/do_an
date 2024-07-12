import React from 'react';
import './CatSlider.module.css';
import styles from './CatSlider.module.css';
import Slider from 'react-slick';
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: true,
    arrows: true
};
export default function CatSlider() {
    return (
        <div className={styles.catSliderSection}>
            <div className={styles.containerFluid}>
                <h2 className={styles.hd}>Categogies</h2>
                <Slider {...settings} className={styles.cat_Slider_Main}>
                    <div className={styles.item}>
                        <h4>Item</h4>
                    </div>
                    <div className={styles.item}>
                        <h4>Item</h4>
                    </div>
                    <div className={styles.item}>
                        <h4>Item</h4>

                    </div>
                    <div className={styles.item}>
                        <h4>Item</h4>

                    </div>
                    <div className={styles.item}>
                        <h4>Item</h4>

                    </div>
                </Slider>
            </div>
        </div>
    );
}
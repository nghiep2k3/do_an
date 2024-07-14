import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './CatSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../Card/Card';
import { Skeleton } from 'antd';
import axios from 'axios'

export default function CatSlider() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://trandai03.online/api/products?category_id=3");
                setData(response.data.data.products);
                // console.log(3333, response.data.data);
            } catch (error) {
                console.error('Có lỗi xảy ra:', error);
            }
        };

        fetchData();
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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
    if (!data) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
                <Skeleton active />
            </div>
        )
    }
    return (
        <div className={styles.catSliderSection}>
            <div className={styles.gleeBlock}></div>
            <div className={styles.containerFluid}>
                <Slider {...settings} className={styles.cat_Slider_Main}>
                    {data.map((x, index) => {
                        return (
                            <div className={`${styles.item} animate__animated animate__fadeInDownBig`} key={index}>
                                <Card product={x} />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
}
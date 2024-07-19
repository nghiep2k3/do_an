import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Pk.module.css';
import Card from '../../components/ProductCard/ProductCard';

export default function Pk() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.trandai03.online/api/products?category_id=3");
                setData(response.data.data.products);
            } catch (error) {
                console.error('Có lỗi xảy ra:', error);
            }
        };

        fetchData();
    }, []);


    if (!data) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
                Loading...
            </div>
        )
    }

    const sampleProducts = [
        {
            id: 1,
            product_images: [
                {
                    image_url: 'https://cdn.tgdd.vn/Products/Images/2162/302671/loa-bluetooth-monster-superstar-s320-190423-114312-600x600.jpg'
                }
            ],
            name: 'Loa Sony WH-1000XM4',
            price: 7000000,
            discount: 10
        },
        {
            id: 2,
            product_images: [
                {
                    image_url: 'https://cdn.tgdd.vn/Products/Images/2162/311100/loa-bluetooth-jbl-partybox-encore-2mic-thumb-5-600x600.jpg'
                }
            ],
            name: 'Loa Logitech MX Master 3',
            price: 2500000,
            discount: 15
        },
        {
            id: 3,
            product_images: [
                {
                    image_url: 'https://cdn.tgdd.vn/Products/Images/86/326726/chuot-khong-day-gaming-logitech-g-pro-x-superlight-trang-600x600.jpg'
                }
            ],
            name: 'Chuột không dây Corsair K95 RGB',
            price: 4000000,
            discount: 20
        },
        {
            id: 4,
            product_images: [
                {
                    image_url: 'https://cdn.tgdd.vn/Products/Images/86/234490/chuot-gaming-logitech-g102-gen2-lightsync-01-600x600.jpg'
                }
            ],
            name: 'Chuột không dây JBL Charge 4',
            price: 3000000,
            discount: 5
        },
        {
            id: 5,
            product_images: [
                {
                    image_url: 'https://cdn.tgdd.vn/Products/Images/86/326663/chuot-gaming-khong-day-asus-rog-strix-impact-iii-thumb-600x600.jpg'
                }
            ],
            name: 'Tai nghe không dây Apple AirPods Pro',
            price: 5500000,
            discount: 12
        },
        {
            id: 6,
            product_images: [
                {
                    image_url: 'https://cdn.tgdd.vn/Products/Images/86/326663/chuot-gaming-khong-day-asus-rog-strix-impact-iii-thumb-600x600.jpg'

                }
            ],
            name: 'Lót chuột SteelSeries QcK',
            price: 500000,
            discount: 18
        },
        {
            id: 7,
            product_images: [
                {
                    image_url: 'https://cdn.tgdd.vn/Products/Images/86/326663/chuot-gaming-khong-day-asus-rog-strix-impact-iii-thumb-600x600.jpg'

                }
            ],
            name: 'Màn hình LG UltraGear 27GN950',
            price: 15000000,
            discount: 25
        },
        {
            id: 8,
            product_images: [
                {
                    image_url: 'https://cdn.tgdd.vn/Products/Images/86/326663/chuot-gaming-khong-day-asus-rog-strix-impact-iii-thumb-600x600.jpg'

                }
            ],
            name: 'Webcam Logitech C922 Pro',
            price: 2200000,
            discount: 8
        }
    ];


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Phụ kiện</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '50px' }}>
                {sampleProducts.map((x, index) => {
                    return (
                        <div className={`${styles.item} animate__animated animate__backInLeft`} key={index}>
                            <Card product={x} />
                        </div>
                    )
                })}</div>
        </div>
    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Phone.module.css';
import Card from '../../components/ProductCardPhone/ProductCardPhone';

export default function Laptop() {
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

  const phoneProducts = [
    {
      id: 1,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/42/321895/oppo-reno11-f-purple-thumb-600x600.jpg'
        }
      ],
      name: 'Điện thoại OPPO Reno11',
      price: 12000000,
      discount: 10
    },
    {
      id: 2,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-green-thumbnew-600x600.jpg'
        }
      ],
      name: 'Samsung Galaxy S23 Ultra',
      price: 32000000,
      discount: 15
    },
    {
      id: 3,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/42/320722/samsung-galaxy-z-flip6-xanh-thumbn-600x600.jpg'
        }
      ],
      name: 'Samsung Galaxy Z Flip6',
      price: 28000000,
      discount: 20
    },
    {
      id: 4,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg'
        }
      ],
      name: 'iPhone 15 Pro Max',
      price: 40000000,
      discount: 5
    }
  ];
  
  
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Tất cả sản phẩm</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', margin: '50px 0' }}>
      {phoneProducts.map((x, index) => {
        return (
          <div className={`${styles.item} animate__animated animate__backInLeft`} key={index}>
            <Card product={x} />
          </div>
        )
      })}</div>
    </div>
  )
}

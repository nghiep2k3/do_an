import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Laptop.module.css';
import Card from '../../components/ProductCard/ProductCard';

export default function Laptop() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.trandai03.online/api/products?category_id=2");
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

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Tất cả sản phẩm</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '50px' }}>
        {data.map((x, index) => {
          return (
            <div className={`${styles.item} animate__animated animate__backInLeft`} key={index}>
              <Card product={x} />
            </div>
          )
        })}</div>
    </div>
  )
}

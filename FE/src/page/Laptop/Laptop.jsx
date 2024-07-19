import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Laptop.module.css';
import Card from '../../components/ProductCard/ProductCard';

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

  const sampleProducts = [
    {
      id: 1,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/313333/lenovo-ideapad-slim-3-15iah8-i5-83er00evn-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop Lenovo IdeaPad Slim 3',
      price: 20000000,
      discount: 10
    },
    {
      id: 2,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/311178/asus-vivobook-go-15-e1504fa-r5-nj776w-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop Asus Vivobook Go 15',
      price: 15000000,
      discount: 12
    },
    {
      id: 3,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/326050/hp-15-fd0303tu-i3-a2nl4pa-thumb-1-600x600.jpg'
        }
      ],
      name: 'Laptop HP 15',
      price: 18000000,
      discount: 15
    },
    {
      id: 4,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/320870/acer-aspire-lite-15-51m-5542-i5-nxks5sv001-thumb-2-600x600.jpg'
        }
      ],
      name: 'Laptop Acer Aspire Lite',
      price: 17000000,
      discount: 8
    },
    {
      id: 5,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/321436/acer-aspire-a315-44p-r9w8-r7-nxksjsv002-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop Acer Aspire A315',
      price: 16000000,
      discount: 5
    },
    {
      id: 6,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/326049/hp-245-g10-r5-a20tdpt-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop HP 245 G10',
      price: 14000000,
      discount: 18
    },
    {
      id: 7,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/309565/hp-pavilion-15-eg2081tu-i5-7c0q4pa-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop HP Pavilion 15',
      price: 22000000,
      discount: 25
    },
    {
      id: 8,
      product_images: [
        {
          image_url: 'https://cdn.tgdd.vn/Products/Images/44/310282/acer-aspire-3-a315-510p-32ef-i3-nxkdhsv001-thumb-600x600.jpg'
        }
      ],
      name: 'Laptop Acer Aspire 3',
      price: 13000000,
      discount: 20
    }
  ];
  
  
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Tất cả sản phẩm</h1>
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

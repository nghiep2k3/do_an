import React from 'react';
import styles from './Cart.module.css';
import { useCart } from 'react-use-cart';

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
};

export default function Card({ product }) {
  const { addItem } = useCart();

  const image = product?.product_images?.[0].image_url || 'chưa có data';
  const name = product?.name || 'chưa có data';
  const oldPrice = product?.price ? parseInt(product.price) : 0;
  const discount = product?.discount || 0;
  const newPrice = oldPrice - (oldPrice * discount / 100);

  const handleAddItem = () => {
    const productWithPrice = { ...product, price: newPrice };
    addItem(productWithPrice);
  };

  return (
    <div className={`${styles.Container_Cart} mt-2 shadow rounded py-3 px-3 rounded border border-2 border-secondary d-flex align-items-center justify-content-center`}>
      <div>
        <div className={styles.Image_Item}>
          <img className='w-100' src={image} alt={name} />
        </div>

        <div className={styles.Content}>
          <div className={`${styles.itemContent} Content_Item text-center fw-bold mt-3`}>{name}</div>
          <div className={`${styles.oldPrice} Price_Item_Old text-center m-1 text-decoration-line-through`}>Giá cũ: {formatPrice(oldPrice)}</div>
          <div className={`${styles.newPrice} Price_Item text-center m-1 text-danger fw-medium`}>Giá mới: {formatPrice(newPrice)}</div>
          <div className='text-center d-flex align-items-center justify-content-center'>
            <button onClick={handleAddItem} type="button" className="btn btn-primary">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

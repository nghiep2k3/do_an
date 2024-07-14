// Cart.jsx
import React from 'react';
import styles from './Cart.module.css';
import { message } from "antd";
import { useCart } from '../../CartContext';

export default function Cart({ product }) {
    // Kiểm tra nếu không có product
    const image = product?.image || 'chưa có data';
    const name = product?.name || 'chưa có data';
    const oldPrice = product?.oldPrice || 'chưa có data';
    const newPrice = product?.newPrice || 'chưa có data';

    const { addToCart } = useCart();

    return (
        <div className={`${styles.Container_Cart} mt-2 shadow rounded py-3 px-3 rounded border border-2 border-secondary d-flex align-items-center justify-content-center`}>
            <div>
                <div className={styles.Image_Item}>
                    <img className='w-100' src={image} alt={name} />
                </div>

                <div className={`${styles.itemContent} Content_Item text-center fw-bold mt-3`}>{name}</div>
                <div className={`${styles.oldPrice} Price_Item_Old text-center m-1 text-decoration-line-through`}>Giá cũ: {oldPrice}</div>
                <div className={`${styles.newPrice} Price_Item text-center m-1 text-danger fw-medium`}>Giá mới: {newPrice}</div>
                <div className='text-center d-flex align-items-center justify-content-center'><button onClick={() => addToCart(product)} type="button" className="btn btn-primary">Thêm vào giỏ hàng</button></div>
            </div>
        </div>
    );
}

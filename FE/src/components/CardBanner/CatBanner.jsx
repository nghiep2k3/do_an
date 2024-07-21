import React from 'react';
import styles from './CatBanner.module.css';
import { Link } from 'react-router-dom';

const CatBanner = () => {
    return (
        <div style={{ display: 'flex', marginTop: '50px' }}>
            <div className={styles.card}>
                <div className={styles.cardDetails}>
                </div>
                <Link to='laptop'>
                    <button className={styles.cardButton}>Laptop</button>
                </Link>
            </div>
            <div className={styles.card}>
                <div className={styles.cardDetails}>
                </div>
                <Link to='phone'>
                    <button className={styles.cardButton}>Điện thoại</button>
                </Link>
            </div>
            <div className={styles.card}>
                <div className={styles.cardDetails}>
                </div>
                <Link to='/accessories'>
                    <button className={styles.cardButton}>Phụ kiện</button>
                </Link>
            </div>
        </div>

    );
}

export default CatBanner;

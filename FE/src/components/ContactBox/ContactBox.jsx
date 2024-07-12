import React, { useState, useEffect } from 'react';
import styles from './ContactBox.module.css';

const ContactBox = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.ContactBoxBottom} ${isVisible ? styles.visible : ''}`}>
            <a className={`${styles.contactBoxWrapper} nutFacebook`} href="https://www.facebook.com/messages/t/100017524500472">
                <div className={styles.contactIconBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkPYkg-TFl2I2r0t0ijNldV9egg6TAokDpA&s" alt="" />
                </div>
                <div className={styles.contactInfo}>
                    <b>Chat Facebook</b> <br />
                    <span>(8h-24h)</span>
                </div>
            </a>
            <a className={`${styles.contactBoxWrapper} nutFacebook`} href="https://www.facebook.com/messages/t/100017524500472">
                <div className={styles.contactIconBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkPYkg-TFl2I2r0t0ijNldV9egg6TAokDpA&s" alt="" />
                </div>
                <div className={styles.contactInfo}>
                    <b>Chat Facebook</b> <br />
                    <span>(8h-24h)</span>
                </div>
            </a>
            <a className={`${styles.contactBoxWrapper} nutFacebook`} href="https://www.facebook.com/messages/t/100017524500472">
                <div className={styles.contactIconBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkPYkg-TFl2I2r0t0ijNldV9egg6TAokDpA&s" alt="" />
                </div>
                <div className={styles.contactInfo}>
                    <b>Chat Facebook</b> <br />
                    <span>(8h-24h)</span>
                </div>
            </a>
        </div>
    );
}

export default ContactBox;

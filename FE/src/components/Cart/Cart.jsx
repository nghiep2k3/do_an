import React from 'react'
import styles from './Cart.module.css'

export default function Cart() {
  return (
    <div className={`${styles.Container_Cart} mt-2 shadow rounded  py-3 px-3 rounded border border-2 border-secondary d-flex align-items-center justify-content-center`}>
      <div>
        <div className={styles.Image_Item}>
          <img className='w-100' src="https://img.lazcdn.com/g/p/cd92da7e165d756dcb3d7da99d079675.jpg_720x720q80.jpg" alt="" />
        </div>

        <div className='Content_Item text-center fw-bold mt-3'>Vsmart Live4 Rẻ Đẹp Chính Hãng</div>
        <div className='Price_Item_Old text-center m-1 text-decoration-line-through'>Giá cũ: 3.599.000đ</div>
        <div className='Price_Item text-center m-1 text-danger fw-medium'>Giá mới: 2.599.000đ</div>
        <div className='text-center d-flex align-items-center justify-content-center'><button type="button" className="btn btn-primary">Thêm vào giỏ hàng</button></div>
      </div>
    </div>
  )
}

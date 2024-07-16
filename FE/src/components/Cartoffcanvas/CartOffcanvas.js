import React from 'react';
import { useCart } from 'react-use-cart';

const CartOffcanvas = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  // Tính tổng giá trị giỏ hàng
  const totalPrice = items.reduce((total, item) => {
    const price = item.price; // Sử dụng item.price vì giá trị đã được lưu là số
    return total + (price * item.quantity);
  }, 0);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
  };

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasCartLabel">Giỏ hàng của bạn</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {isEmpty ? <p>Giỏ hàng đang trống</p> : (
          <ul className="list-group">
            {items.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {console.log(2222, item)}
                <div className="d-flex align-items-center">
                  <img src={item?.product_images?.[0].image_url} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                  <div>
                    <div>{item.name}</div>
                    <div>
                      {item.quantity} x {formatPrice(item.price)}
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-sm btn-primary me-1" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <button className="btn btn-sm btn-primary me-1" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>Xóa</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {!isEmpty && (
          <>
            <div className="mt-3">
              <h5 className="text-end">Tổng tiền: {totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
            </div>
            <button className="btn btn-danger mt-3" onClick={() => emptyCart()}>Xóa hết</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartOffcanvas;

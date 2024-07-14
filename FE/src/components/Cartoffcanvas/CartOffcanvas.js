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

  // Chuyển đổi giá trị giá thành số nguyên trước khi tính tổng
  const totalPrice = items.reduce((total, item) => {
    // Chuyển đổi giá trị giá thành số nguyên
    const price = parseFloat(item.newPrice.replace(/\./g, '').replace('đ', '').trim());
    return total + (price * item.quantity);
  }, 0);

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
                <div className="d-flex align-items-center">
                  <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                  <div>
                    <div>{item.name}</div>
                    <div>
                      {item.quantity} x {item.newPrice}
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

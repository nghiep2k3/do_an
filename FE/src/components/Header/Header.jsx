// Header.jsx
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { HeartOutlined, LockOutlined, PhoneOutlined, SearchOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from "antd";
import { Link } from 'react-router-dom';
import ButtonBs from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cookies from "universal-cookie";
import { useCart } from '../../CartContext';

const cookies = new Cookies();

export default function Header() {
  const data = [
    {
      "id": 1,
      "name": "Màn hình Dell P2719HC Type C - Cũ đẹp (Không vỏ hộp)",
      "price": "3.499.000 ₫",
      "image": {
        "src": "https://hanoicomputercdn.com/media/product/120_82071_man_hinh_dell_p2719hc_type_c_cu_dep_1.jpg",
        "alt": "Màn hình Dell P2719HC"
      }
    },
    {
      "id": 2,
      "name": "Apple MacBook Pro 16 inch",
      "price": "55.999.000 ₫",
      "image": {
        "src": "https://hanoicomputercdn.com/media/product/120_83616_super_si_cong_20w_kem_cap_type_c_to_lightning_1m__3_.jpg",
        "alt": "Apple MacBook Pro 16 inch"
      }
    },
    {
      "id": 3,
      "name": "Samsung Galaxy S21 Ultra",
      "price": "25.999.000 ₫",
      "image": {
        "src": "https://hanoicomputercdn.com/media/product/120_83616_super_si_cong_20w_kem_cap_type_c_to_lightning_1m__3_.jpg",
        "alt": "Samsung Galaxy S21 Ultra"
      }
    }
  ];
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token-nghiep"));
  const [sticky, setSticky] = useState(false);
  const value = localStorage.getItem('user') || '';
  const role = localStorage.getItem('role');
  const [showSubNav, setShowSubNav] = useState({ laptop: false, phone: false, accessories: false });
  const [show, setShow] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const toggleSubNav = (category, state) => {
    setShowSubNav((prevState) => ({
      ...prevState,
      [category]: state,
    }));
  };
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setIsSearching(term.trim() !== '');
  };
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handle = (term) => {
  };
  const handleScroll = () => {
    if (window.scrollY > 350) {
      setSticky(true);
    } else {
      if (window.scrollY === 0) {
        setSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    cookies.remove("auth-token-nghiep");
    localStorage.removeItem("user");
    window.location.reload();
    setIsAuth(false);
  };
  const totalNewPrice = cartItems.reduce((acc, item) => {
    // Xóa dấu chấm và "đ" từ chuỗi giá mới
    const priceWithoutDot = item.newPrice.replace(/[.đ]/g, '');
    // Chuyển đổi thành số và cộng vào tổng
    return acc + parseInt(priceWithoutDot);
  }, 0);

  const OffCanvas = ({ name, ...props }) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <ButtonBs variant="#color" style={{ padding: 0 }} onClick={handleShow}>
          {name}
        </ButtonBs>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {cartItems.length === 0 ? (
              <p>Giỏ hàng trống</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                    <div>
                      <p>Id: {item.id}</p>
                      <p className="m-0 fw-bold">{item.name}</p>
                      <p className="m-0 text-decoration-line-through">Giá cũ: {item.oldPrice}</p>
                      <p className="m-0 text-danger">Giá mới: {item.newPrice}</p>
                      <button onClick={() => removeFromCart(item.id)} type="button" className="btn btn-danger btn-sm mt-2">Xóa</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Offcanvas.Body>
          <div className="p-3">
            <p>Tổng giá mới: {totalNewPrice.toLocaleString()}đ</p>
            <ButtonBs variant="primary" onClick={() => alert('Thanh toán thành công!')}>Thanh toán</ButtonBs>
          </div>
        </Offcanvas>
      </>
    );
  };

  return (
    <div>
      <div className={`${styles.First_Navbar} animate__animated animate__fadeInDown`}>
        {role == "admin" ? (<Link to='/admin'> <div className={styles.Item}><UserOutlined />Quản lý</div></Link>) : ""}
        <div className={styles.Item}><UserOutlined />Tài khoản của tôi</div>
        <div className={styles.Item}><HeartOutlined />Danh sách yêu thích</div>
        <div className={styles.Item}><ShoppingOutlined />Thanh toán</div>
        {value ? (<div>{value} <button style={{ background: 'transparent', border: 'none' }} onClick={handleLogout}>Logout</button></div>) : (<div className={styles.Item}><LockOutlined /><Link to='/login'>Đăng nhập</Link></div>)}
      </div>
      <div className={sticky ? `${styles.sticky}` : `${styles.header}`}>
        <div className={styles.Mid_Navbar}>
          <div style={{ width: "25%" }} className='fw-bold fs-4'>
            TL ELECTRONIC
          </div>

          <div className={styles.search_container}>
            <input type="text" value={searchTerm} className={styles.search_input} placeholder="Tìm kiếm..." onChange={handleSearch} />
            <button className={styles.search_button} onClick={handle}><SearchOutlined /></button>
            {console.log(searchTerm)}
            {isSearching && (
              <div className={`${styles.productSearch} Header_productSearch`}>
                {filteredData.map(item => (
                  <div key={item.id}>
                    <a className='product' href="">
                      <img src={item.image.src} alt={item.image.alt} />
                      <span className={styles.inforSearch}>
                        <span className={styles.name}>{item.name}</span>
                        <span className={styles.price}> {item.price}   </span>
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: '25%' }}>
            <div className='text-dark'>
              <PhoneOutlined
                style={{
                  border: "2px solid black",
                  borderRadius: "50%",
                  padding: "10px",
                  background: "#91caff",
                  marginRight: "10px",
                }}
                className={styles.Reverse}
              />
              <span>HN: 076 922 0162 - SG: 1900 636 648</span>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  background: "red",
                  textAlign: "center",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  color: "white",
                  position: "absolute",
                  top: -14,
                  right: -8,
                }}
              >
                {cartItems.length}
              </div>
              <div>
                <OffCanvas backdrop={true} placement={"end"} name={<ShoppingCartOutlined className='fs-2' />} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Bottom_Navbar}>
          <div className={styles.nav_container}>
            <div className={styles.nav_item}><Link to='/'>Trang chủ</Link></div>
            <div
              className={styles.nav_item}
              onMouseEnter={() => toggleSubNav('laptop', true)}
              onMouseLeave={() => toggleSubNav('laptop', false)}
            >
              <Link to='/Laptop'>Laptop</Link>
              {showSubNav.laptop && (
                <div className={styles.sub_nav}>
                  <div className={styles.sub_nav_item}><Link to='/macbook'>MacBook</Link></div>
                  <div className={styles.sub_nav_item}><Link to='/dell'>Dell</Link></div>
                  <div className={styles.sub_nav_item}><Link to='/hp'>HP</Link></div>
                </div>
              )}
            </div>
            <div
              className={styles.nav_item}
              onMouseEnter={() => toggleSubNav('phone', true)}
              onMouseLeave={() => toggleSubNav('phone', false)}
            >
              <Link to='/phone'>Điện thoại</Link>
              {showSubNav.phone && (
                <div className={styles.sub_nav}>
                  <div className={styles.sub_nav_item}><Link to='/ip'>IPhone</Link></div>
                  <div className={styles.sub_nav_item}><Link to='/samsung'>Samsung</Link></div>
                  <div className={styles.sub_nav_item}><Link to='/xiaomi'>Xiaomi</Link></div>
                </div>
              )}
            </div>
            <div
              className={styles.nav_item}
              onMouseEnter={() => toggleSubNav('accessories', true)}
              onMouseLeave={() => toggleSubNav('accessories', false)}
            >
              <Link to='/accessories'>Phụ kiện</Link>
              {showSubNav.accessories && (
                <div className={styles.sub_nav}>
                  <div className={styles.sub_nav_item}><Link to='/headphone'>Tai nghe</Link></div>
                  <div className={styles.sub_nav_item}><Link to='/mouse'>Chuột</Link></div>
                  <div className={styles.sub_nav_item}><Link to='/keyboard'>Bàn phím</Link></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

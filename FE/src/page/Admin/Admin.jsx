import React, { useState } from 'react';
import styles from './Admin.module.css';
import { CheckSquareOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, EuroCircleOutlined, FilterOutlined, LogoutOutlined, MenuUnfoldOutlined, MessageOutlined, NotificationOutlined, PieChartOutlined, PlusOutlined, RightOutlined, SearchOutlined, SettingOutlined, ShoppingOutlined, SmileOutlined, TeamOutlined, UsergroupDeleteOutlined, WindowsOutlined } from '@ant-design/icons';

const Admin = () => {
    const [activeSection, setActiveSection] = useState('Dashboard');
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', date: '01-01-2024', status: 'Available' },
        { id: 2, name: 'Product 2', date: '02-01-2024', status: 'Out of Stock' },
        { id: 3, name: 'Product 3', date: '03-01-2024', status: 'Available' },
    ]);
    const [customers, setCustomers] = useState([])
    const handleMenuClick = (section) => {
        setActiveSection(section);
    };

    const handleAddProduct = () => {
        alert('Add Product');
    };

    const handleEditProduct = (id) => {
        alert(`Edit Product ${id}`);
    };

    const handleDeleteProduct = (id) => {
        alert(`Delete Product ${id}`);
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <section className={styles.sidebar}>
                <a href="#" className={styles.brand}>
                    <SmileOutlined />
                    <span className={styles.text}>AdminHub</span>
                </a>
                <ul className={styles.sideMenu}>
                    <li className={activeSection === 'Dashboard' ? styles.active : ''}>
                        <a href="#" onClick={() => handleMenuClick('Dashboard')}>
                            <WindowsOutlined />
                            <span className={styles.text}>Dashboard</span>
                        </a>
                    </li>
                    <li className={activeSection === 'MyStore' ? styles.active : ''}>
                        <a href="#" onClick={() => handleMenuClick('MyStore')}>
                            <ShoppingOutlined />
                            <span className={styles.text}>My Store</span>
                        </a>
                    </li>
                    <li className={activeSection === 'Statistic' ? styles.active : ''}>
                        <a href="#" onClick={() => handleMenuClick('Statistic')}>
                            <PieChartOutlined />
                            <span className={styles.text}>Thống kê</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <MessageOutlined />
                            <span className={styles.text}>Tin nhắn</span>
                        </a>
                    </li>
                </ul>
                <ul className={styles.sideMenu}>
                    <li>
                        <a href="#">
                            <SettingOutlined />
                            <span className={styles.text}>Cài đặt</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout">
                            <LogoutOutlined />
                            <span className={styles.text}>Đăng xuất</span>
                        </a>
                    </li>
                </ul>
            </section>
            <section className={styles.content}>
                <nav>
                    <MenuUnfoldOutlined />
                    <a href="#" className={styles.navLink}>Phân loại</a>
                    <form action="#">
                        <div className={styles.formInput}>
                            <input type="search" placeholder="Search..." />
                            <button type="submit" className={styles.searchBtn}><SearchOutlined /></button>
                        </div>
                    </form>
                    <input type="checkbox" className={styles.switchModeI} hidden />
                    <label htmlFor="switch-mode" className={styles.switchMode}></label>
                    <a href="#" className={styles.notification}>
                        <NotificationOutlined />
                        <span className={styles.num}>8</span>
                    </a>
                    <a href="#" className={styles.profile}>
                        <img src="img/people.png" />
                    </a>
                </nav>
                <main>
                    {activeSection === 'Dashboard' && (
                        <div>
                            <div className={styles.headTitle}>
                                <div className={styles.left}>
                                    <h1>Dashboard</h1>
                                    <ul className={styles.breadcrumb}>
                                        <li>
                                            <a href="#">Dashboard</a>
                                        </li>
                                        <li><RightOutlined /></li>
                                        <li>
                                            <a className={styles.active} href="#">Home</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className={styles.btnDownload}>
                                    <DownloadOutlined />
                                    <span className={styles.text}>Download PDF</span>
                                </a>
                            </div>
                            <ul className={styles.boxInfo}>
                                <li>
                                    <CheckSquareOutlined />
                                    <span className={styles.text}>
                                        <h3>1020</h3>
                                        <p>Đơn đặt hàng</p>
                                    </span>
                                </li>
                                <li>
                                    <UsergroupDeleteOutlined />
                                    <span className={styles.text}>
                                        <h3>2834</h3>
                                        <p>Khách hàng</p>
                                    </span>
                                </li>
                                <li>
                                    <EuroCircleOutlined />
                                    <span className={styles.text}>
                                        <h3>$2543</h3>
                                        <p>Tổng doanh thu</p>
                                    </span>
                                </li>
                            </ul>
                            <div className={styles.tableData}>
                                <div className={styles.order}>
                                    <div className={styles.head}>
                                        <h3>Khách hàng thường xuyên</h3>
                                        <SearchOutlined />
                                        <FilterOutlined />
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Tên</th>
                                                <th>Ngày đặt hàng</th>
                                                <th>Trạng thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ0m-9V9M6IUnPK1pQiAy0okaK5_bPh0HpA&s" />
                                                    <p>John Doe</p>
                                                </td>
                                                <td>01-01-2024</td>
                                                <td><span style={{ color: '#000' }} className={styles.status}>Completed</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ0m-9V9M6IUnPK1pQiAy0okaK5_bPh0HpA&s" />
                                                    <p>John Doe</p>
                                                </td>
                                                <td>01-01-2024</td>
                                                <td><span style={{ color: '#000' }} className={styles.status}>Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ0m-9V9M6IUnPK1pQiAy0okaK5_bPh0HpA&s" />
                                                    <p>John Doe</p>
                                                </td>
                                                <td>01-01-2024</td>
                                                <td><span style={{ color: '#000' }} className={styles.status}>Process</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ0m-9V9M6IUnPK1pQiAy0okaK5_bPh0HpA&s" />
                                                    <p>John Doe</p>
                                                </td>
                                                <td>01-01-2024</td>
                                                <td><span style={{ color: '#000' }} className={styles.status}>Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ0m-9V9M6IUnPK1pQiAy0okaK5_bPh0HpA&s" />
                                                    <p>John Doe</p>
                                                </td>
                                                <td>01-01-2024</td>
                                                <td><span style={{ color: '#000' }} className={styles.status}>Completed</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === 'MyStore' && (
                        <div>
                            <div className={styles.headTitle}>
                                <div className={styles.left}>
                                    <h1>My Store</h1>
                                    <ul className={styles.breadcrumb}>
                                        <li>
                                            <a href="#">My Store</a>
                                        </li>
                                        <li><RightOutlined /></li>
                                        <li>
                                            <a className={styles.active} href="#">Home</a>
                                        </li>
                                    </ul>
                                </div>
                                <button onClick={handleAddProduct} className={styles.btnDownload}>
                                    <PlusOutlined />
                                    <span className={styles.text}>Thêm sản phẩm</span>
                                </button>
                            </div>
                            <div className={styles.tableData}>
                                <div className={styles.order}>
                                    <div className={styles.head}>
                                        <h3>Danh sách sản phẩm</h3>
                                        <SearchOutlined />
                                        <FilterOutlined />
                                    </div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Tên sản phẩm</th>
                                                <th>Ngày phát hành</th>
                                                <th>Trạng thái</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map(product => (
                                                <tr key={product.id}>
                                                    <td>{product.name}</td>
                                                    <td>{product.date}</td>
                                                    <td><span style={{ color: '#000' }} className={styles.status}>{product.status}</span></td>
                                                    <td>
                                                        <button onClick={() => handleEditProduct(product.id)} className={styles.actionBtn}><EditOutlined /></button>
                                                        <button style={{ marginLeft: '10px' }} onClick={() => handleDeleteProduct(product.id)} className={styles.actionBtn}><DeleteOutlined /></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === 'Statistic' && (
                        <div>
                            <h1>statistic</h1>
                            <p>This is the My Store section.</p>
                        </div>
                    )}
                </main>
            </section>
        </div>
    );
}

export default Admin;

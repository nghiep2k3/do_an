import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';
import { Tabs } from 'antd';
import axios from 'axios';

import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    TreeSelect,
} from 'antd';
import { LogoutOutlined, SettingOutlined, ShoppingOutlined, WindowsOutlined } from '@ant-design/icons';
import { Divider, List, Typography } from 'antd';
const Profile = () => {
    const [activeSection, setActiveSection] = useState('Dashboard');
    const { RangePicker } = DatePicker;
    const [data2, setData] = useState(null);

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };
    const onChange = (key) => {
        console.log(key);
    };
    const data = [
        'Đã nhận'
    ];
    const data3 = [
        'Racing car sprays burning fuel into crowd.',
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.trandai03.online/api/auth/profile/8");
                setData(response.data.data);
                console.log(333, response.data.data);
            } catch (error) {
                console.error('Có lỗi xảy ra:', error);
            }
        };

        fetchData();
    }, []);
    if (!data2) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
                Loading
            </div>
        )
    }
    const items = [
        {
            key: '1',
            label: 'Tất cả',
            children: <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />,
        },
        {
            key: '2',
            label: 'Chờ xác nhận',
            children: <List
                size="small"
                bordered
                dataSource={data3}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />,
        },
        {
            key: '3',
            label: 'Chờ lấy hàng',
            children: <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />,
        },
        {
            key: '4',
            label: 'Đang giao',
            children: <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />,
        },
        {
            key: '5',
            label: 'Đã giao',
            children: <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />,
        },
        {
            key: '6',
            label: 'Đã hủy',
            children: <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />,
        },
    ];

    const handleMenuClick = (section) => {
        setActiveSection(section);
    };

    return (
        < div style={{ display: 'flex' }
        }>
            <section className={styles.sidebar}>
                <a href="#" className={styles.brand}>
                    <span className={styles.text}>Tài khoản của</span>
                </a>

                <ul className={styles.sideMenu}>
                    <li className={activeSection === 'Dashboard' ? styles.active : ''}>
                        <a href="#" onClick={() => handleMenuClick('Dashboard')}>
                            <WindowsOutlined />
                            <span className={styles.text}>Thông tin tài khoản</span>
                        </a>
                    </li>
                    <li className={activeSection === 'MyStore' ? styles.active : ''}>
                        <a href="#" onClick={() => handleMenuClick('MyStore')}>
                            <ShoppingOutlined />
                            <span className={styles.text}>Đơn hàng của tôi</span>
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
            <main style={{ overflow: "visible", width: '70%', marginTop: '20px' }}>
                {activeSection === 'Dashboard' && (
                    <Form {...formItemLayout} variant="filled">
                        <Form.Item label="Họ tên" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
                            <Input defaultValue={data2?.full_name || ''} />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="InputNumber"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <InputNumber style={{ width: '100%' }} defaultValue={data2?.telephone || ''} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="TextArea"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <Input.TextArea defaultValue={data2?.email || ''} />
                        </Form.Item>

                        <Form.Item
                            label="Giới tính"
                            name="Mentions"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <Mentions />
                        </Form.Item>

                        <Form.Item
                            label="Địa chỉ"
                            name="Cascader"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <Cascader defaultValue={data2?.address.addressLine || ''} />
                        </Form.Item>

                        <Form.Item
                            label="Tỉnh thành phố"
                            name="TreeSelect"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <TreeSelect defaultValue={data2?.address.city || ''} />
                        </Form.Item>

                        <Form.Item
                            label="Quận huyện"
                            name="TreeSelect"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <TreeSelect defaultValue={data2?.address.country || ''} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Cập nhật
                            </Button>
                        </Form.Item>
                    </Form>
                )}
                {activeSection === 'MyStore' && (
                    <div>
                        <h2>Đơn hàng của tôi</h2>
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </div>
                )}
            </main>
        </div >
    );
}

export default Profile;

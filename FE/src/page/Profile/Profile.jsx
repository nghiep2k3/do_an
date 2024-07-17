import React, { useState } from 'react';
import styles from './Profile.module.css';
import { Tabs } from 'antd';
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

const { RangePicker } = DatePicker;

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
const items = [
    {
        key: '1',
        label: 'Tất cả',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Chờ xác nhận',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Chờ lấy hàng',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'Đang giao',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '5',
        label: 'Đã giao',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '6',
        label: 'Đã hủy',
        children: 'Content of Tab Pane 3',
    },
];
const Profile = () => {
    const [activeSection, setActiveSection] = useState('Dashboard');

    const handleMenuClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div style={{ display: 'flex' }}>
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
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="InputNumber"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="TextArea"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <Input.TextArea />
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
                            <Cascader />
                        </Form.Item>

                        <Form.Item
                            label="Tỉnh thành phố"
                            name="TreeSelect"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <TreeSelect />
                        </Form.Item>

                        <Form.Item
                            label="Quận huyện"
                            name="TreeSelect"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <TreeSelect />
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
        </div>
    );
}

export default Profile;

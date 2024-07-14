import React from 'react';
import styles from './Profile.module.css';

import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';
import { LogoutOutlined, MessageOutlined, PieChartOutlined, SettingOutlined, ShoppingOutlined, SmileOutlined, WindowsOutlined } from '@ant-design/icons';

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
const Profile = () => {
    return (
        <div style={{ display: 'flex' }}>
            <section className={styles.sidebar}>
                <a href="#" className={styles.brand}>
                    <span className={styles.text}>Tài khoản của</span>
                </a>

                <ul className={styles.sideMenu}>
                    <li>
                        <a href="#">
                            <WindowsOutlined />
                            <span className={styles.text}>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <ShoppingOutlined />
                            <span className={styles.text}>My Store</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
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
            <Form {...formItemLayout} variant="filled" style={{ width: '70%', marginTop: '140px' }}>
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
        </div>
    );
}

export default Profile;

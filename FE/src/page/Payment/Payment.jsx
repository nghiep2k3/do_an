import React from 'react';
import axios from 'axios';
import { Form, Input, Button, DatePicker, InputNumber, Select, message } from 'antd';

const { Option } = Select;

const Payment = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const data = {
            ...values,
            user_id: 5,
            cart_items: [
                { product_id: 11, quantity: 2 },
                { product_id: 6, quantity: 1 },
            ],
            shipping_date: values.shipping_date.format('YYYY-MM-DD'), // Chuyển đổi date thành định dạng YYYY-MM-DD
        };

        console.log(9999, data);

        axios.post('https://trandai03.online/api/orders', data)
            .then(response => {
                message.success("Đặt hàng thành công");
                form.resetFields(); // Reset form sau khi thành công
                console.log('Order created:', response.data);
            })
            .catch(error => {
                console.error('There was an error creating the order!', error);
            });
    };

    return (
        <div className='d-flex justify-content-between'>
            <div className='w-50'>
                Hiển thị sản phẩm
            </div>
            <div className='w-50'>
                <Form
                    className='mx-5'
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        status: 'Wait',
                        shipping_method: 'Standard',
                        payment_method: 'Credit Card',
                    }}
                >
                    <Form.Item
                        label="Fullname"
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your fullname!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Telephone"
                        name="telephone"
                        rules={[{ required: true, message: 'Please input your telephone number!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input your address!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Note"
                        name="note"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Total Money"
                        name="total_money"
                        rules={[{ required: true, message: 'Please input the total money!' }]}
                    >
                        <InputNumber min={0} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        label="Shipping Method"
                        name="shipping_method"
                    >
                        <Select>
                            <Option value="Standard">Standard</Option>
                            <Option value="Express">Express</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Shipping Address"
                        name="shipping_address"
                        rules={[{ required: true, message: 'Please input your shipping address!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Shipping Date"
                        name="shipping_date"
                        rules={[{ required: true, message: 'Please select your shipping date!' }]}
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        label="Payment Method"
                        name="payment_method"
                    >
                        <Select>
                            <Option value="Credit Card">Credit Card</Option>
                            <Option value="PayPal">PayPal</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Payment;

import React, { useEffect, useState } from 'react';
import { Tag, Space, Modal, Image, Upload, Button, Form, Input, InputNumber, Select, message, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';

const { confirm } = Modal;

export default function Mystore() {
    const [items, setItems] = useState(null);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Create Item',
            dataIndex: 'created_at',
            key: 'created_at',
            align: 'center',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'center',
        },
        {
            title: 'Hãng',
            dataIndex: 'sku',
            key: 'sku',
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined onClick={() => handleEditProduct(record.id)} />
                    <DeleteOutlined onClick={() => showDeleteConfirm(record.id)} />
                </Space>
            ),
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.trandai03.online/api/products/all");
                setItems(response.data.data.products);
            } catch (error) {
                console.error('Có lỗi xảy ra:', error);
            }
        };

        fetchData();
    }, []);

    const handleEditProduct = (id) => {
        alert(`Edit Product ${id}`);
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`https://api.trandai03.online/api/products/${id}`);
            message.success("Xóa thành công");
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error('There was an error deleting the user!', error);
            message.error('Có lỗi xảy ra khi xóa!');
        }
    };

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Bạn có chắc chắn muốn xóa sản phẩm này không?',
            content: 'Hành động này không thể hoàn tác.',
            okText: 'Xóa',
            okType: 'danger',
            cancelText: 'Hủy',
            onOk() {
                handleDeleteProduct(id);
            },
            onCancel() {
                console.log('Hủy hành động xóa');
            },
        });
    };

    return (
        <div>
            <Table columns={columns} total={50} pagination={{ pageSize: 5 }} dataSource={items} />
        </div>
    );
}

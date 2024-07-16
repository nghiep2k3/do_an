import React, { useEffect, useState } from 'react'
import { Tag, Space, Modal, Image, Upload, Button, Form, Input, InputNumber, Select, message, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';


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
        // {
        //     title: 'Status',
        //     key: 'status',
        //     dataIndex: 'status',
        //     align: 'center',
        //     render: (status) => {
        //         let color = status === 'Available' ? 'green' : 'red';
        //         return (
        //             <Tag color={color} key={status}>
        //                 {status?.toUpperCase()}
        //             </Tag>
        //         );
        //     },
        // },
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
                    <DeleteOutlined onClick={() => handleDeleteProduct(record.id)} />
                    {/* <a>Invite {record.name}</a>
                    <a>Delete</a> */}
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Nguyễn Thiện Nghiệp',
            createId: "24-11-2003",
            age: 32,
            address: 'Duyên hải - Hưng hà - Thái bình',
            tags: ['nice', 'developer'],
            status: 'Available'
        },
        {
            key: '2',
            name: 'Mai Hoàng Kim Ngân',
            createId: "23-07-2003",
            age: 42,
            address: 'Bắc sơn - Hưng hà - Thái bình',
            tags: ['loser'],
            status: 'Out of Stock'
        },
        {
            key: '3',
            name: 'Joe Black',
            createId: "24-11-2003",
            age: 32,
            address: 'Duyên hải - Hưng hà - Thái bình',
            tags: ['cool', 'teacher'],
            status: 'Available'
        },
        {
            key: '4',
            name: 'Joe Black',
            createId: "24-11-2003",
            age: 32,
            address: 'Duyên hải - Hưng hà - Thái bình',
            tags: ['cool', 'teacher'],
            status: 'Available'
        },
        {
            key: '5',
            name: 'Joe Black',
            createId: "24-11-2003",
            age: 32,
            address: 'Duyên hải - Hưng hà - Thái bình',
            tags: ['cool', 'teacher'],
            status: 'Available'
        },
        {
            key: '6',
            name: 'Joe Black',
            createId: "24-11-2003",
            age: 32,
            address: 'Duyên hải - Hưng hà - Thái bình',
            tags: ['cool', 'teacher'],
            status: 'Available'
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://trandai03.online/api/products/all");
                setItems(response.data.data.products);
                // setLoad(false);
                // console.log(11111, response.data.data.products?.[0].name);
            } catch (error) {
                console.error('Có lỗi xảy ra:', error);
            }
        };

        fetchData();
    }, []);

    const handleEditProduct = (id) => {
        alert(`Edit Product ${id}`);
    };

    console.log(items);
    console.log(data);
    const handleDeleteProduct = (id) => {
        alert(`Delete Product ${id}`);
        // setProducts(products.filter(product => product.id !== id));
    };
    return (
        <div>
            <Table columns={columns} total={50} pagination={{ pageSize: 5 }} dataSource={items} />
        </div>
    )
}

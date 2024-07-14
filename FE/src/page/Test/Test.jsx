import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, Button, Form, Input, InputNumber, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

export default function Test() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('categoryId', values.categoryId);
    formData.append('sku', values.sku);
    formData.append('inventory', values.inventory);
    if (fileList.length > 0) {
      formData.append('files', fileList[0].originFileObj);
    }

    try {
      const response = await axios.post('https://trandai03.online/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Product added successfully!');
      setFileList([]);
    } catch (error) {
      message.error('Failed to add product.');
    }
  };

  const uploadButton = (
    <Button
      icon={<PlusOutlined />}
      style={{
        border: '1px dashed #d9d9d9',
        width: '104px',
        height: '104px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Upload
    </Button>
  );

  return (
    <div>
      <h1>Tải hình ảnh và thêm sản phẩm</h1>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="name" label="Product Name" rules={[{ required: true, message: 'Please input the product name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please input the price!' }]}>
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="categoryId" label="Category" rules={[{ required: true, message: 'Please select a category!' }]}>
          <Select placeholder="Select a category">
            <Option value="1">Category 1</Option>
            <Option value="2">Category 2</Option>
            <Option value="3">Category 3</Option>
          </Select>
        </Form.Item>
        <Form.Item name="sku" label="SKU" rules={[{ required: true, message: 'Please input the SKU!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="inventory" label="Inventory" rules={[{ required: true, message: 'Please input the inventory!' }]}>
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Upload Image">
          <Upload
            action={null}
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: 'none',
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

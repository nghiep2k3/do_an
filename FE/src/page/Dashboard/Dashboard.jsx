import React from 'react'
import styles from './Dashboard.module.css'
import { CheckSquareOutlined, DownloadOutlined, EuroCircleOutlined, FilterOutlined, RightOutlined, SearchOutlined, UsergroupDeleteOutlined } from '@ant-design/icons'
import { Space, Table, Tag } from 'antd';

export default function Dashboard() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
    return (
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
                    
                    <Table columns={columns} dataSource={data} />;
                </div>
            </div>
        </div>
    )
}

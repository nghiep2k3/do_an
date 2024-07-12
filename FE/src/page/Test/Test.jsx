import React from 'react';

const data = {
  status: "success",
  data: {
    users: [
      {
        id: 1,
        name: "Nguyễn Văn A",
        email: "nguyenvana@example.com",
        phone: "0123456789",
        address: {
          street: "123 Đường ABC",
          city: "Hà Nội",
          country: "Vietnam"
        }
      },
      {
        id: 2,
        name: "Trần Thị B",
        email: "tranthib@example.com",
        phone: "0987654321",
        address: {
          street: "456 Đường DEF",
          city: "Hồ Chí Minh",
          country: "Vietnam"
        }
      },
      {
        id: 3,
        name: "Lê Văn C",
        email: "levanc@example.com",
        phone: "0912345678",
        address: {
          street: "789 Đường GHI",
          city: "Đà Nẵng",
          country: "Vietnam"
        }
      }
    ]
  }
};

const UserList = () => {
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        {data.data.users.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address.street}, {user.address.city}, {user.address.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

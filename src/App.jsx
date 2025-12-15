import React, { useState } from 'react';
import './App.css';

// Import komponen-komponen
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';
import ProductList from './components/ProductList/ProductList';
import Button from './components/Button/Button';

const App = () => {
  // State untuk data user yang login
  const [currentUser, setCurrentUser] = useState({
    name: 'Admin',
    avatar: './admin.png',
  });

  // State untuk data users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Bush Henrydunan. S',
      email: 'johnbushsimarmata@gmail.com',
      role: 'Admin',
      avatar: './src/assets/foto formal.jpg',
      isActive: true,
    },
    {
      id: 2,
      name: 'Kasih Febrian Sirait',
      email: 'kasih@example.com',
      role: 'User',
      avatar: './src/assets/user1.jpg',
      isActive: true,
    },
    {
      id: 3,
      name: 'Rizky Wahyudi',
      email: 'Rizkyw123@example.com',
      role: 'Moderator',
      avatar: './src/assets/user2.jpg',
      isActive: false,
    },
  ]);

  // State untuk data products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Laptop ASUS VivoBook',
      price: 9500000,
      category: 'Electronics',
      image: './src/assets/asus.jpg',
      stock: 5,
    },
    {
      id: 2,
      name: 'Smartphone Samsung A54',
      price: 4350000,
      category: 'Electronics',
      image: './src/assets/a54.jpg',
      stock: 0,
    },
    {
      id: 3,
      name: 'Buku Pemrograman React',
      price: 159000,
      category: 'Books',
      image: './src/assets/bukur.jpg',
      stock: 10,
    },
    {
      id: 4,
      name: 'Mouse Wireless Logitech',
      price: 350000,
      category: 'Electronics',
      image: './src/assets/mousel.jpg',
      stock: 15,
    },
  ]);

  // Handler functions
  const handleEditUser = (userId) => {
    console.log(`Edit user dengan ID: ${userId}`);
    // Logika untuk mengedit user
  };

  const handleDeleteUser = (userId) => {
    console.log(`Delete user dengan ID: ${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleAddUser = () => {
    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
      role: 'User',
      avatar: './user.png',
      isActive: true,
    };
    setUsers([...users, newUser]);
  };

  const handleAddNewProduct = () => {
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: `Produk Baru ${products.length + 1}`,
      price: (Math.floor(Math.random() * 1000) + 1) * 10000, // Harga acak
      category: 'Other',
      image: './default.png',
      stock: Math.floor(Math.random() * 20), // Stok acak
    };
    setProducts([...products, newProduct]);
  };

  const handleAddToCart = (product) => {
    console.log(`Menambahkan produk: ${product.name} ke keranjang.`);
    // Logika untuk menambah ke keranjang
  };

  return (
    <div className="App">
      {/* Header Component dengan props */}
      <Header
        title="Demo Komponen React dengan Props"
        subtitle="Selamat datang di aplikasi simulasi e-commerce ini"
        user={currentUser}
      />

      <main className="app-main">
        {/* Section Users */}
        <section className="users-section">
          <div className="section-header">
            <h2>Manajemen Pengguna ({users.length} users)</h2>
            <Button onClick={handleAddUser}>
              + Tambah User
            </Button>
          </div>
          
          <div className="users-grid">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
              />
            ))}
          </div>
        </section>

        {/* Section Products */}
        <section className="products-section">
          <div className="section-header">
            <h2>Katalog Produk</h2>
            <Button onClick={handleAddNewProduct} variant="success">
              + Tambah Produk
            </Button>
          </div>
          
          <ProductList
            products={products}
            onAddToCart={handleAddToCart}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
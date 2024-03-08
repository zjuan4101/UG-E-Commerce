import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './NewOrderPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const [showOrderDetail, setShowOrderDetail] = useState(false); // State variable for toggling OrderDetail visibility
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getItems() {
      try {
        const { items, categories } = await itemsAPI.getAll();
        categoriesRef.current = categories;
        setMenuItems(items);
        setActiveCat(categories[0].name);
      } catch (error) {
        console.error('Error fetching items:', error.message);
      }
    }
    
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }

    getItems();
    getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className={styles.NewOrderPage}>
    <aside>
      <Logo />
      <div className={styles.CategoryListContainer}>
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
        />
      </div>
      <div className={styles.LinkContainer}>
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        {/* Button to show the cart */}
        <button onClick={() => setShowOrderDetail(true)} className={`button btn-sm toggleButton`}>Show Cart</button>
      </div>
      <div className={styles.UserLogOutContainer}>
        <UserLogOut user={user} setUser={setUser} />
      </div>
    </aside>
    <MenuList
      menuItems={menuItems.filter(item => item.category.find(cat => cat.name === activeCat))}
      handleAddToOrder={handleAddToOrder}
    />
    {/* Conditional rendering of OrderDetail */}
    {showOrderDetail && (
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
        hideCart={() => setShowOrderDetail(false)} // Pass the function to hide the cart
      />
    )}
  </main>  
  );
}
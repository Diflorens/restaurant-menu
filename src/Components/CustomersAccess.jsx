import { useEffect, useState } from "preact/hooks";
import LoginForm from "./Access/LoginForm";
import Header from "./Header";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import VisitPage from "./VisitPage";
import "./CustomersAccess.css";
import CartPage from "./CartPage";
import Footer from "./Footer";

const headerTabs = [
  {
    label: "HOME",
    id: 1,
  },
  {
    label: "MENU",
    id: 2,
  },
  {
    label: "VISIT US",
    id: 3,
  },
  {
    label: "Cart",
    id: 4,
  },
];

export default function CustomersAccess({ menu, setMenu, setAccess }) {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  useEffect(() => {
    const fromStorage = JSON.parse(localStorage.getItem("cart"));
    if (fromStorage.length) {
      setCartItems(fromStorage);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    // const calculatedOrders = cartItems.reduce((acc, item)=> acc+item.inCart, 0)
    // setNumberOfOrders(calculatedOrders);
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="customer-page-container">
      <Header
        activeTab={activeTab}
        cartItems={cartItems}
        setActiveTab={setActiveTab}
        headerTabs={headerTabs}
        numberOfOrders={numberOfOrders}
      />
      {activeTab === 0 && <HomePage />}
      {activeTab === 1 && (
        <MenuPage
          menu={menu}
          setMenu={setMenu}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
      {activeTab === 2 && <VisitPage setActiveTab={setActiveTab} />}
      {activeTab === 3 && (
        <CartPage cartItems={cartItems} setCartItems={setCartItems} />
      )}
      <div className="footer-main">
        <div className="footer">
          <LoginForm onAuthorisation={setAccess}></LoginForm>
          <Footer />
        </div>
      </div>
    </div>
  );
}

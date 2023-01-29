import SearchMenu from "./SearchMenu";
import CardItem from "./CardItem";
import "./MenuPage.css"
import CategoryBtns from "./CategoryBtns";

function MenuPage({ menu, setMenu, cartItems, setCartItems}) {
  return (
    <div className="menu-page"> 
      <div className="menu-body">
      <SearchMenu menu = {menu} setMenu = {setMenu}/>
      <CategoryBtns setMenu = {setMenu}/>
        {menu.map((productDetails, index) => (
          <CardItem 
          menu={menu}
          productDetails={productDetails} 
          index={index} 
          key={productDetails.id}  
          cartItems= {cartItems}
          setCartItems={setCartItems} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;

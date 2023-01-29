import { useState } from "preact/hooks";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ItemModalWindow from "./ItemModalWindow";
import ModalAddingItem from "./ModalAddingItem"
import "./CardItem.css";

export default function CardItem({ menu, setMenu, productDetails, cartItems, setCartItems, index }) {
  const { id, title, category, price, img, desc } = productDetails;
  const [isModalItem, setIsModalItem] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);


  function onClickHandler(i) {
    setOpenModalAdd(true)
    setTimeout(()=>setOpenModalAdd(false), 1500)
    if(cartItems.indexOf(menu[i]) === -1){
      menu[i].inCart = 1
      setCartItems([...cartItems, menu[i]]) 
    }else{
      menu[i].inCart +=1
      setCartItems([...cartItems])
    }
  }

  function modalCardCall(event){
    if(event.target.id) return
    setIsModalItem(true);
  }

  return (
    <>
      <Card className="CardItem" onClick={modalCardCall} >
        <div className="item-modal-container">
          {isModalItem && <ItemModalWindow productDetails={productDetails} addToCartFunc={onClickHandler} index={index} setIsModalItem={setIsModalItem} />}
        </div>
          {openModalAdd && <ModalAddingItem openModalAdd={openModalAdd} setOpenModalAdd={setOpenModalAdd} />}
        <CardMedia image={img} title={title} className="pictire-container" />
        <CardContent>
          <Typography
            className="card-item-name"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            className="card-item-description"
            variant="body2"
            color="text.secondary"
          >
            {desc}
          </Typography>
          <Typography
            className="card-item-name"
            variant="h6"
            color="text.secondary"
          >
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button id="addToCartButton" onClick={()=>onClickHandler(index)} size="small">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

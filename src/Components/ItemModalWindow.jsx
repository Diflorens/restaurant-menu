import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./ItemModalWindow.css";

export default function ItemModalWindow({
  productDetails,
  addToCartFunc,
  index,
  setIsModalItem,
}) {
  const { id, title, category, price, img, desc } = productDetails;

  function closeModalWindow(event) {
    if (event.target.id === "item-modal-window") setIsModalItem(false);
    console.log("close modal");
  }

  function addToCardFunction() {
    addToCartFunc(index);
  }

  return (
    <div
      id="item-modal-window"
      className="item-modal-window"
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClick={closeModalWindow}
    >
      <Card sx={{ maxWidth: 400, maxHeight:600 }}>
        <CardActionArea>
          <CardMedia component="img" image={img} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
            <Typography variant="body1" color="text.primry">
              {category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button id="addToCartButton-modal" onClick={addToCardFunction} size="small">
            Add To Card
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

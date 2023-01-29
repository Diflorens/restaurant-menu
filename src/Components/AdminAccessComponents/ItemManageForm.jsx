import React from "react";
import "./ItemManageForm.css";

export default function ItemManageForm({ itemDetails, setIsForm, onFormSubmit, dataIndex }) {
  const defaultFormitemPicture = "https://i.pinimg.com/564x/94/ee/2f/94ee2fda4931c26b3c55ed23d28e885e.jpg";
  const isNewItem = !itemDetails;
  itemDetails = isNewItem? {} : itemDetails;
  dataIndex = isNewItem? -1: dataIndex;
  const idInputColor = isNewItem? "" : "grey"

  function onSubmitHandler(event) {
    event.preventDefault();
    const collectedInfo = {
      id: +event.target.id.value,
      title: event.target.title.value,
      category: event.target.category.value,
      price: event.target.price.value,
      img: event.target.img.value,
      desc: event.target.desc.value,
    };
    if(onFormSubmit({collectedInfo, dataIndex}) === "ID error"){
      alert("ID already exists!")
      return
    };
    setIsForm(false)
}

function cancelHandler(){
      setIsForm(false)
  }
  const formHeader = isNewItem? "Add new item" : "Edit item"

  return (
    <div className="item-manage-container">
      <form className="item-manage-form" onSubmit={onSubmitHandler} >
        <h2>{formHeader}</h2>
        <div
          className="form-picture"
          style={{ backgroundImage: `url(${itemDetails.img || defaultFormitemPicture})`, backgroundPosition: 'center' }}
        ></div>
        <label id="id"> ID </label>
        <input type="text" id="id" value={itemDetails.id || ""} readOnly={!isNewItem} style={{color: idInputColor}} required />
        <label id="title"> Name </label>
        <input type="text" id="title" value={itemDetails.title || ""} required />
        <label id="category"> Category </label>
        <input type="text" id="category" value={itemDetails.category || ""} required />
        <label id="desc"> Description </label>
        <input type="text" id="desc" value={itemDetails.desc || ""} required />
        <label id="img"> Picture src </label>
        <input type="text" id="img" value={itemDetails.img || ""} required />
        <label id="price"> Price $ </label>
        <input
          type="number"
          id="price"
          step="0.01"
          value={itemDetails.price || ""}
          required
        />
        <input className = "submit-btn-modal" type="submit" />
        <button id= "cancel-btn-modal" type="button" onClick={cancelHandler}>Cancel</button>
      </form>
    </div>
  );
}

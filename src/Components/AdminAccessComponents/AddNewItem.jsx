import { useState } from "react";
import ItemManageForm from "./ItemManageForm";
import "./AddNewItem.css"

export default function AddNewItem({onFormSubmit}) {
  const [isForm, setIsForm] = useState(false);

  function addItemButtonHandler() {
    setIsForm(true);
  }

  return (
    <div className="add-item-container">
      <button onClick={addItemButtonHandler}>Add New Item</button>      
      {isForm && <ItemManageForm setIsForm={setIsForm} onFormSubmit={onFormSubmit} />}
    </div>
  );
}

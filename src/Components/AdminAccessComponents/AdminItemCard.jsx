import {useState} from "react";
import ItemManageForm from "./ItemManageForm";
import './AdminItemCard.css'

export default function AdminItemCard(props) {

  const {itemDetails, dataIndex, onFormSubmit, deleteElementFromData} = props

  // console.log(dataIndex)

  function editButtonHandler(){
    setIsForm(true)
  }

  function deleteItemHandler(){
    // console.log(event)
    deleteElementFromData(dataIndex)
  }

  const [isForm, setIsForm] = useState(false)
    const editModeClass = isForm? "item-manage-form-background admin-item-card" : "admin-item-card"
  return (
    <div className={editModeClass}>
      {!isForm || <ItemManageForm dataIndex={dataIndex} setIsForm={setIsForm} itemDetails={itemDetails} onFormSubmit={onFormSubmit} ></ItemManageForm>}
      {/* <ContentEditable className="aic-id admin-item-line-element" ContentEditable={isEditable} onChange={editValueHandler}> ID {itemDetails.id}</ContentEditable> */}
      <div className="aic-id admin-item-line-element" > ID {itemDetails.id}</div>
      {/* <div className="aic-picture" style={{ backgroundImage: `url(${itemDetails.img})`}}></div> */}
      <div className="aic-picture"><img  src={itemDetails.img} alt={itemDetails.title} /></div>
      
      <div className="aic-title admin-item-line-element" > {itemDetails.title}</div>
      <div className="aic-category admin-item-line-element" > {itemDetails.category}</div>
      <div className="aic-description admin-item-line-element" > {itemDetails.desc}</div>
      <div className="aic-img-url admin-item-line-element" > {itemDetails.img}</div>
      <div className="aic-price admin-item-line-element" > ${itemDetails.price}</div>
      <button className = "admin-btn-edit" onClick={editButtonHandler}>Edit</button>
      <button className = "admin-btn-delete" onClick={deleteItemHandler}>Delete</button>



      <div className="item-picture"></div>
    </div>
  );
}


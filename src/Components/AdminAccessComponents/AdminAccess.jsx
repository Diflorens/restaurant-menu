import AdminItemCard from './AdminItemCard';
import AddNewItem from './AddNewItem';
import "./AdminAccess.css"
import DarkModeSwitch from '../DarkModeSwitch';

export default function AdminAccess({menu, onAccessChange, onFormSubmit, deleteElementFromData, darkMode, setDarkMode}) {
  
  
  return (
    <div className='admin-page-container'>
      <div className={darkMode? "dark-mode-admin-page" : "admin-page-body"}>
        <div className='btns-wrapper'> 
          <h3>Welcome, Admin</h3>
          <button className = "btn-logout" onClick={onAccessChange}>Log out</button>
          <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
        <AddNewItem onFormSubmit={onFormSubmit} />
        {menu.map((item, index)=><AdminItemCard onFormSubmit={onFormSubmit} dataIndex={index} itemDetails={item} deleteElementFromData={deleteElementFromData} ></AdminItemCard> )}
        <button className = "btn-logout" onClick={onAccessChange}>Log out</button>
      </div>

    </div>
  );
}



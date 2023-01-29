import React from 'react'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import "./Header.css"


function Header({headerTabs,activeTab, cartItems, setActiveTab, numberOfOrders}) {
  return (
    <div className='header-main'>
        <div className='header'>
          {headerTabs.map((btn,index)=><button className={activeTab === index && "active"} onClick={()=> setActiveTab(index)}>
            {(btn.label !== "Cart")? btn.label : <LocalMallOutlinedIcon/>}
            {/* {index === 3 && numberOfOrders>0? numberOfOrders : ""}   */}
            {index === 3 && cartItems.reduce((acc, item)=> acc+item.inCart, 0)}
          </button>)}
        </div>
    </div>
  )
}

export default Header
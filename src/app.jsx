import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { data, udpadeData } from "./assets/data.js";
import AdminAccess from "./Components/AdminAccessComponents/AdminAccess";
import CustomersAccess from "./Components/CustomersAccess";
import LoadingGif from "./Components/LoadingGif";




export function App() {
  const [menu, setMenu] = useState(data);
  const [access, setAccess] = useState("customer");
  const [darkMode, setDarkMode] = useState(false);
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>setLoading(true),10)
    setTimeout(()=>setLoading(false),1000) 
  },[access])


  function logOutAdmin() {
    setAccess("customer");
  }

  function onFormSubmit({ collectedInfo, dataIndex }) {
    let tempData = [...data];
    if (dataIndex < 0) {      
      if(data.some(item=>item.id === +collectedInfo.id || item.id === collectedInfo.id)){
        return "ID error"
      }
      tempData[tempData.length] = collectedInfo;
      setMenu(tempData);
    } else {
      tempData[dataIndex] = collectedInfo;
      setMenu(tempData);
    }
    udpadeData(tempData);
    return "Success"
  }
  function deleteElementFromData(index) {
    const tempData = [...data];
    tempData.splice(index, 1);
    setMenu(tempData);
    udpadeData(tempData);
  }


  return (
    <div className={darkMode && "app-container"}>
      
      {loading ? 
      <LoadingGif/> 
      : 
      access === "admin" ? (
        <AdminAccess
          menu={menu}
          onAccessChange={logOutAdmin}
          onFormSubmit={onFormSubmit}
          deleteElementFromData={deleteElementFromData}
          darkMode={darkMode}
          setDarkMode ={setDarkMode}
        />
      ) : (
        <CustomersAccess menu={menu} setMenu={setMenu} setAccess={setAccess} />
      )
      }
      
    </div>
  );
}

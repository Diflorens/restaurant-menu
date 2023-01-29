import {useState} from 'react'
import Slideshow from './Slideshow'
import AboutUs from './AboutUs'
import { Button } from '@mui/material'
import ReserveModal from './ReserveModal';
import ModalMesRes from './ModalMesRes';
import './ReserveModal'



function HomePage() {
  const [openR, setOpenR] = useState(false);
  const [openMes,setOpenMes] = useState(false)

  const handleModalResBtn = ()=>{
    setOpenR(false)
    setOpenMes(true)
    setTimeout(()=>setOpenMes(false),2000)
  }
  return (
    <div>
      {openR && <ReserveModal openR = {openR} setOpenR = {setOpenR} handleModalResBtn={handleModalResBtn}/>}
      {openMes && <ModalMesRes openMes={openMes} setOpenMes={setOpenMes} />}
      <Slideshow />
     <Button
     id='main-reserve'
     onClick={()=>setOpenR(true)}
     >Reservation</Button>
     <br />
     <br />
      <AboutUs />
    </div>
  )
}

export default HomePage
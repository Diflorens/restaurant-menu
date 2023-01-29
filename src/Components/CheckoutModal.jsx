import { useState } from 'react'
import { Backdrop, Box, Modal, Fade, TextField, Select,InputLabel, MenuItem } from '@mui/material';
import "./CheckoutModal.css"

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CheckoutModal({openCheckout, setOpenCheckout, result, handleCheckoutBtn}) {
    const [payment, setpayment] = useState('Debit Card');
    const [delivery, setDelivery] = useState(4.99);
    const [tax, setTax] = useState(0.07);
    const [tips, setTips] = useState(0)

    const handlePayment = (event) => {
        setpayment(event.target.value);
    };
    const handleTips = (event) => {
        setTips(event.target.value);
    };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCheckout}
        onClose={()=>setOpenCheckout(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form className='container-checkout' onSubmit={(e)=>handleCheckoutBtn(e)}>
                
            <div className='order-info'>
                <h2>Your Order</h2>
                <p>Delivery: {delivery}</p>
                <p>Estimated Tax: {tax}</p>
                <div className='tips-info'>
                    <InputLabel >Tips:</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    value={tips}
                    label="tips"
                    onChange={handleTips}
                    >
                    <MenuItem value={0}>0%-Bad</MenuItem>
                    <MenuItem value={0.18}>18%-Good</MenuItem>
                    <MenuItem value={0.2}>20%-Excellent</MenuItem>
                    <MenuItem value={0.22}>22%-Perfect</MenuItem>
                    </Select>

                </div>
                <p className='total-payment'>Order Total: ${(result * tax + result + delivery + result * tips).toFixed(2)}</p>

            </div>
            <div className='payment-details'>

                <h2>Payment Details</h2>
                <InputLabel>Payment:</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                value={payment}
                label="payment"
                onChange={handlePayment}
                >
                <MenuItem value={"Debit Card"}>Debit Card</MenuItem>
                <MenuItem value={"Credit Card"}>Credit Card</MenuItem>
                <MenuItem value={"Cash"}>Cash</MenuItem>
                </Select>
                <TextField required placeholder='Name on Card'/>
                <TextField required type = "number" placeholder='Card Number'/>
            </div>
            <div className='delivery-details'>
                <h2>Delivery Details</h2>
                <InputLabel>Your Name:</InputLabel>
                <TextField required placeholder='type your name'/>
                <InputLabel>Delivery Address:</InputLabel>
                <TextField required placeholder='type your address'/>
                <InputLabel>Delivery Instruction(optional):</InputLabel>
                <TextField placeholder='delivery instruction'/>
            </div>
            <button className='btn-place-order'>Place Your Order</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
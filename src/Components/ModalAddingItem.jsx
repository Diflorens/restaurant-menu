import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  color: 'green',
  border: '2px solid #000',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

export default function ModalAddingItem({openModalAdd, setOpenModalAdd}) {
  return (
    <div>
      <Modal
        open={openModalAdd}
        onClose={()=>setOpenModalAdd(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <CheckCircleRoundedIcon/> Added to Cart
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
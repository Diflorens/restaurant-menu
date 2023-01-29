import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import './ReserveModal.css';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ReserveModal({ openR, setOpenR, handleModalResBtn}) {

  return (
    <div>
      <Modal
        open={openR}
        onClose={() => setOpenR(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Find your table for any occasion
          </Typography>

          <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2023-01-13"
        sx={{ width: 220 }}
        InputLabelProps={{
        shrink: true,
        }}
      />
      <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue="18:00"
        InputLabelProps={{
        shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
      />
    </Stack>

    <br />

    <TextField
          id="outlined-number"
          label="Number of people"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <br />
        <TextField type="text" placeholder='Full Name'/>
        <br />
        <br />
        <TextField type="number" placeholder='Phone Number'/>
        <br />
        <br />

      <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<SendIcon />} onClick={()=>handleModalResBtn()}>
          Let's go
        </Button>
      </Stack>

        </Box>
      </Modal>
    </div>
  );
}
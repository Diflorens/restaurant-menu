import * as React from 'react';
import { useEffect, useState } from "preact/hooks";
import { data } from "../assets/data";
import { TextField, Autocomplete } from '@mui/material';
import "./SearchMenu.css"


  // what is an idea:
  // this component should generate a string and insert it in function setSearchParam()
  // setSearchParam - is a reference to filter rerender. Once you call it, menu wil rerendered in accordance with your string



export default function SearchMenu({ setMenu, setSearchParam }) {

  const [autocompleteVal, setAutocompleteVal] = useState("");

  function filterByTitle(value) {
    const copyMenu = [...data];
    if (value) {
      const filteredMenu = copyMenu.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setMenu(filteredMenu);
    }else{
      setMenu(data)
    }
  }

  useEffect(() => {
    filterByTitle(autocompleteVal);
  }, [autocompleteVal]);

  

  return (
    <>
      <Autocomplete
      onChange = {(event, value)=> {
        if(value){
          setAutocompleteVal(value.title)
        }else{
          setAutocompleteVal("")
        }
      }}
      disablePortal
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="search..." />}
      className ="autocomplete-input-menupage"
    />
  
    </>
  );
}


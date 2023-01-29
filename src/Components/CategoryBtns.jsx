import React from 'react'
import { data } from '../assets/data'
import { Button } from '@mui/material'
import './CategoryBtns.css'
import { useState } from 'preact/hooks'

function CategoryBtns({ setMenu }) {
    const [activeBtn, setActiveBtn] = useState(0)

    const uniqueBtn = data.reduce((arr, item)=>{
        if(arr.indexOf(item.category) === -1){
            arr.push(item.category)
        }
        return arr
    },["All"])

    const btnFilter = (index)=>{
        setActiveBtn(index)
        const copyMenu = [...data]
        const category = uniqueBtn[index]
        const filteredMenu = copyMenu.filter((item)=>{
            return item.category.includes(category)
        })
        if(category !== "All" ){
            setMenu(filteredMenu)
        }else{
            setMenu(data)
        }
    }
  return (
    <div className='header-category-btn'>
        {uniqueBtn.map((btn, index)=>{
            return (
                <button className={activeBtn === index ? "active-btn-header" : "btn-header"} onClick = {()=>btnFilter(index)} key = { index }>{ btn }</button>
            )
        })}
    </div>
  )
}

export default CategoryBtns
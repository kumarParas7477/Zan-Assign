import React,{ FC, useEffect, useState } from "react";
import Card from "../Card";
import "./displayGrid.css"
import { IIteminterface } from "../../types";
import useApi from "../../hooks/useApi";



const DisplayGrid : FC = () =>{
  const [draggedItem,setDraggedItem] = useState<number|null>(null)
  const { cards, updateData, error } = useApi();
  const handleDragStart = (index:number) => {
    setDraggedItem(index);
  };

  const handleDropItem = (droppedOver:number) =>{
    if (draggedItem === null || !cards.length) return;

    const updatedData = [...cards];
    const [removed] = updatedData.splice(draggedItem, 1);
    updatedData.splice(droppedOver, 0, removed);
    const finalData = updatedData.map((item, index) => ({
      ...item,
      position: index,
    }));
    updateData(finalData);
  }
    return <div className="grid-container">
          {cards.map((item,index)=>{
            return <Card key={item.type} item={item} index={index} onDragStart={handleDragStart} onDropItem={handleDropItem}/>
          })}
    </div>

}

export default DisplayGrid;
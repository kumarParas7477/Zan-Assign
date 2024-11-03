import React, { FC, useCallback, useEffect, useState } from "react";
import "./card.css"
interface ICardProps {
  item: {
    type: string;
    title: string;
    position: number;
    imgSrc:string
  },
  index:number,
  onDragStart:(dragIndex:number) => void;
  onDropItem: (droppedOver:number) => void;
}
const Card: FC<ICardProps> = (props: ICardProps) => {
  const { onDropItem,onDragStart, item,index } = props;
  const [showOverlay,setShowOvelay] = useState(false);


  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowOvelay(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);


  const handleDragStart = (event:React.DragEvent) => {
    // event.preventDefault();
    event.stopPropagation();
    console.log("dragStart ",index);
    onDragStart(index);

  };
  const handleDrop = (event:React.DragEvent) =>{
    console.log({event})
    event.preventDefault();
    event.stopPropagation();
    onDropItem(index);
  }
  const handleDragOver = (event:React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }

  const handleOverlay = ()=>{
    setShowOvelay((val)=>!val)
  }


  return (
    <>
    <div
      className="document-card"
      draggable={true}
      onClick={handleOverlay}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>{item.title}</p>
      <img  src={item.imgSrc} />
    </div>
    {showOverlay && (
        <div className="overlay" onClick={()=>{}}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={item.imgSrc} alt="Overlay" />
          </div>
        </div>
      )}
      </>
  );
};

export default React.memo(Card)

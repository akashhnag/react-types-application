import React from "react";

const EventComponent = () => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  const handleDrag = (e: React.DragEvent<HTMLInputElement>) => {
    console.log("I am being dragged", e);
  };
  return (
    <div>
      <input onChange={handleInput} />
      <div draggable onDragStart={handleDrag}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;

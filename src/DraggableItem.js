import React from "react";

const DraggableItem = ({
  itemText,
  id,
  spaceNeeded = { vertical: 1, horizontal: 1 },
  width,
  height,
}) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.setData("spaceNeeded", JSON.stringify(spaceNeeded));
    document.querySelectorAll(`#accept-${id}`).forEach((el) => {
      el.classList.add("active-drop-container");
    });
  };

  const handleDragEnd = (e) => {
    document.querySelectorAll(`#accept-${id}`).forEach((el) => {
      el.classList.remove("active-drop-container");
    });
  };

  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      id={id}
      style={{
        width: width + "px",
        height: height + "px",
        backgroundColor: "#3498db",
        color: "white",
        textAlign: "center",
        cursor: "grab",
      }}
    >
      {itemText}
    </div>
  );
};

export default DraggableItem;

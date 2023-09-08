import React from "react";

const DroppableArea = ({ children, style, acceptedItem, withSpacing, id }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const gridItemStyle = {
    backgroundColor: "lightblue",
    border: "1px solid #000",
    marginBottom: withSpacing ? "110px" : 0,
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const spaceNeeded = JSON.parse(e.dataTransfer.getData("spaceNeeded"));
    const source = document.getElementById(data);
    if (data !== acceptedItem && acceptedItem !== "all") {
      return;
    }
    if (e.target.id !== "items-container") {
      source.style.position = "absolute";
      e.target.appendChild(source);
      return;
    }
    source.style.position = "relative";
    e.target.appendChild(source);
  };
  return (
    <div
      style={style ?? gridItemStyle}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      id={id ?? `accept-${acceptedItem}`}
    >
      {children}
    </div>
  );
};

export default DroppableArea;

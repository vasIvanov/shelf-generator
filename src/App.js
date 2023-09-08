import React, { useState } from "react";
import DroppableArea from "./DroppableArea";
import "./App.css";
import DraggableItems from "./DraggableItems";

function App() {
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(5);
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(500);

  const containerWidth = 1000;
  const containerHeight = 500;
  const roofWidth = containerWidth + 2 * 100 + 32;

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`, // equal-width columns
    gridTemplateRows: `repeat(${rows}, 1fr)`, // equal-height rows
    gap: "0.5px", // Gap between grid items
    width: containerWidth + "px", // fixed container width
    height: containerHeight + "px", // fixed container height
    background: "black",
    position: "relative",
    border: "1px solid black",
    backgroundColor: "lightblue",
  };

  // Generate grid items
  const gridItems = [];
  for (let i = 1; i <= rows * columns; i++) {
    gridItems.push(<DroppableArea key={i} acceptedItem="screen" />);
    // gridItems.push(
    //   <div key={i} style={{ border: "1px solid black" }}>
    //     {i}
    //   </div>
    // );
  }

  return (
    <div>
      <div style={{ display: "flex", paddingTop: "20px" }}>
        <div style={{ marginLeft: "32px", marginRight: "32px" }}>
          <DroppableArea
            acceptedItem="roof"
            style={{
              height: "20px",
              background: "darkblue",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <DroppableArea
              acceptedItem="light-left"
              style={{
                width: "100px",
                height: "50px",
                background: "blue",
                marginRight: "16px",
              }}
            />

            <div style={gridContainerStyle}>{gridItems}</div>
            {/* <DroppableArea style={gridContainerStyle} acceptedItem="screen">
              {gridItems}
            </DroppableArea> */}

            <DroppableArea
              acceptedItem="light-right"
              style={{
                width: "100px",
                height: "50px",
                background: "blue",
                marginLeft: "16px",
              }}
            />
            <p
              style={{
                position: "absolute",
                alignItems: "center",
                pointerEvents: "none",
                right: 0,
                top: "50%",
              }}
            >
              {height} cm
            </p>
          </div>
          <p style={{ textAlign: "center" }}>{width} cm</p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "150px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>Columns</label>
              <input
                value={columns}
                type="number"
                onChange={(e) => setColumns(e.target.value)}
                style={{
                  width: "60px",
                  borderRadius: "5px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  textAlign: "center",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>Rows</label>
              <input
                type="number"
                value={rows}
                onChange={(e) => setRows(e.target.value)}
                style={{
                  width: "60px",
                  borderRadius: "5px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  textAlign: "center",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>Width</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                style={{
                  width: "60px",
                  borderRadius: "5px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  textAlign: "center",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>Height</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                style={{
                  width: "60px",
                  borderRadius: "5px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  textAlign: "center",
                }}
              />
            </div>
          </div>
          <p style={{ marginLeft: "20px" }}>
            Box Size: {(width / columns).toFixed(2)} x{" "}
            {(height / rows).toFixed(2)} cm
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DraggableItems
          id="items-container"
          boxSize={{
            width: containerWidth / columns,
            height: containerHeight / rows,
          }}
          roofWidth={roofWidth}
        />
      </div>
    </div>
  );
}

export default App;

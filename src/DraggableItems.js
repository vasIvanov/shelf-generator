import DraggableItem from "./DraggableItem";
import DroppableArea from "./DroppableArea";

const DraggableItems = ({ id, boxSize, roofWidth }) => {
  const spaceNeeded = { vertical: 2, horizontal: 2 };
  return (
    <DroppableArea
      style={{
        display: "flex",
        minHeight: "1000px",
        minWidth: "200px",
        gap: "20px",
        padding: "24px",
        margin: "16px",
        border: "3px solid blue",
        borderRadius: "8px",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
      acceptedItem="all"
      id={id}
    >
      <DraggableItem
        itemText="Roof"
        position="top"
        id="roof"
        height={20}
        width={roofWidth}
      />
      <DraggableItem
        itemText="Screen"
        position="middle"
        id="screen"
        spaceNeeded={{ vertical: 2, horizontal: 2 }}
        width={boxSize.width * spaceNeeded.horizontal}
        height={boxSize.height * spaceNeeded.vertical}
      />

      <DraggableItem
        itemText="Light Left"
        position="side"
        id="light-left"
        width={100}
        height={50}
      />
      <DraggableItem
        itemText="Light Right"
        position="side"
        id="light-right"
        width={100}
        height={50}
      />
    </DroppableArea>
  );
};

export default DraggableItems;

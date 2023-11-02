import React from "react";

function Image({
  data,
  isSelected,
  isFeatureImage,
  onClick,
  onDelete,
  onReorder,
  onSetFeatureImage,
  index,
}) {
  const handleClick = () => {
    onClick(data.id);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData("text/plain");
    onReorder(Number(dragIndex), index);
  };

  const handleSetFeature = () => {
    onSetFeatureImage(data.id);
  };

  return (
    <div
      className={`image ${isSelected ? "selected" : ""} ${
        isFeatureImage ? "feature" : ""
      } `}
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <img className="w-[100px] md:w-full" src={data.url} alt={data.name} />
      {/* <button onClick={onDelete}>Delete</button> */}
      {/* <button onClick={handleSetFeature}>Set Feature</button> */}
    </div>
  );
}

export default Image;

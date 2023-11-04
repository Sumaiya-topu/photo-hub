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
    onSetFeatureImage(data);
  };

  return (
    <div
      className={`p-1 hover:translate-y-2 duration-300 flex items-center ${
        isFeatureImage
          ? "bg-blue-200 col-span-2 row-span-2 p-2" // Customize this class for the featured image
          : isSelected
          ? "bg-green-200" // Customize this class for selected images
          : "" // Customize this class for regular images
      }`}
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <img src={data.url} alt={data.name} className="w-full" />
      {/* <button onClick={onDelete}>Delete</button> */}
      {/* <button onClick={handleSetFeature}>Set Feature</button> */}
    </div>
  );
}

export default Image;

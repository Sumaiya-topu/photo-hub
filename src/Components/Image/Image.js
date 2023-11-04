import React from "react";

const Image = ({
  data,
  isSelected,
  isFeatureImage,
  onClick,
  onReorder,
  index,
}) => {
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

  return (
    <div
      className={`p-1 duration-300 flex items-center ${
        isFeatureImage
          ? " bg-orange-400 col-span-2 row-span-2 p-2 hover:transform hover:-translate-y-1 duration-200 hover:opacity-80" // for the featured image
          : isSelected
          ? "border-2 border-blue-200 hover:transform hover:scale-105 hover:opacity-80" //  for selected images
          : "hover:transform hover:scale-105 hover:opacity-80" //  for regular images
      }`}
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <img
        src={data.url}
        alt={data.name}
        className="w-full hover:brightness-5"
      />
    </div>
  );
};

export default Image;

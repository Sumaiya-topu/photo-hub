import React, { useEffect, useState } from "react";

import Image from "../Image/Image";
import initialImages from "../../assets/images";

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [selectedImages, setSelectedImages] = useState([]);
  const [featureImage, setFeatureImage] = useState(images[0]);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleImageClick = (imageId) => {
    // Toggle selection of an image
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }

    // Show the delete button when images are selected
    setShowDeleteButton(selectedImages.length > 0);
  };

  const handleImageDelete = () => {
    setImages(images.filter((image) => !selectedImages.includes(image.id)));
    setSelectedImages([]);
    // Hide the delete button after deletion
    setShowDeleteButton(false);
  };

  const handleImageReorder = (dragIndex, dropIndex) => {
    const reorderedImages = [...images];
    const [draggedImage] = reorderedImages.splice(dragIndex, 1);
    reorderedImages.splice(dropIndex, 0, draggedImage);
    setImages(reorderedImages);
  };

  const handleSetFeatureImage = (image) => {
    setFeatureImage(image);
  };

  useEffect(() => {
    // Automatically set the first image as the feature image when the images change
    if (images.length > 0) {
      setFeatureImage(images[0]);
    }
  }, [images]);

  return (
    <div>
      {showDeleteButton && (
        <div className="flex justify-between mb-1">
          <p>({selectedImages.length} selected)</p>
          <button
            className=" bg-red-500 text-white px-5 rounded"
            onClick={handleImageDelete}
          >
            Delete Selected
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Image
            key={image.id}
            data={image}
            isSelected={selectedImages.includes(image.id)}
            isFeatureImage={image.id === featureImage.id}
            onClick={handleImageClick}
            onDelete={handleImageDelete}
            onReorder={handleImageReorder}
            onSetFeatureImage={handleSetFeatureImage}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

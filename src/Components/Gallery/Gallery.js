import React, { useEffect, useState } from "react";

import Image from "../Image/Image";
import initialImages from "../../assets/images";

function Gallery() {
  // An array of image objects

  const [images, setImages] = useState(initialImages); // State for images
  const [selectedImages, setSelectedImages] = useState([]); // State for selected images
  const [featureImage, setFeatureImage] = useState(images[0]); // State for the featured image

  // Event handler to toggle selection of an image
  const handleImageClick = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  // Event handler to delete selected images
  const handleImageDelete = () => {
    setImages(images.filter((image) => !selectedImages.includes(image.id)));
    setSelectedImages([]);
  };

  // Event handler to implement drag-and-drop functionality for reordering
  const handleImageReorder = (dragIndex, dropIndex) => {
    const reorderedImages = [...images];
    const [draggedImage] = reorderedImages.splice(dragIndex, 1);
    reorderedImages.splice(dropIndex, 0, draggedImage);
    setImages(reorderedImages);
  };

  // Event handler to set a new feature image
  const handleSetFeatureImage = (imageId) => {
    setFeatureImage(imageId);
  };

  useEffect(() => {
    // Automatically set the first image as the feature image when the images change
    if (images.length > 0) {
      setFeatureImage(images[0]);
    }
  }, [images]);

  return (
    <div className=" grid grid-cols-5  lg:grid-cols-12">
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
  );
}

export default Gallery;

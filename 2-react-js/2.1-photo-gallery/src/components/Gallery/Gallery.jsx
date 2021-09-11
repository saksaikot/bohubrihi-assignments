import React, { useState } from "react";
import images from "../../services/photos/photos";
import Images from "./Images";
import Categories from "./Categories";
import "./gallery.css";
import ImageModal from "./ImageModal";
import { useAuth } from "../../contexts/AuthContext";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState(images.images);
  const [category, setCategory] = useState(images.category);
  const [selectedImage, setSelectedImage] = useState(false);
  const [show, setShow] = useState(false);
  const { logout, currentUser } = useAuth();

  const handleClose = () => setSelectedImage(false);
  const handleShow = (imageUrl) => {
    setSelectedImage(imageUrl);
    console.log(imageUrl);
  };

  return (
    <div>
      <Categories list={category} />
      <Images images={galleryImages} handleShow={handleShow} />
      <ImageModal
        {...{ handleClose, handleShow, currentUser }}
        show={selectedImage}
      />
    </div>
  );
}

"use client";
import { useRef, useState } from "react";
import modules from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  const [image, setImage] = useState(null);

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={modules.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={modules.controls}>
        <div className={modules.preview}>
          {image ? (
            <Image src={image} alt="Selected image" fill />
          ) : (
            <p>No image picked</p>
          )}
        </div>
        <input
          className={modules.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickClick}
          className={modules.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

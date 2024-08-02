import React from "react";
import { GlassMagnifier } from "react-image-magnifiers";
import "./MagnifyingGlass.css";

function MagnifyingGlass() {
  return (
    <div className="magnifying-container">
      <div className="image-container">
        <h2>Image 1</h2>
        <GlassMagnifier
          className="image-box"
          imageSrc="./image.png"
          imageAlt="Image 1"
        />
      </div>
      <div className="image-container">
        <h2>Image 2</h2>
        <GlassMagnifier
          className="image-box"
          imageSrc="./image2.png"
          imageAlt="Image 2"
        />
      </div>
      <div className="image-container">
        <h2>Image 3</h2>
        <GlassMagnifier
          className="image-box"
          imageSrc="./image3.png"
          imageAlt="Image 3"
        />
      </div>
      <div className="image-container">
        <h2>Image 4</h2>
        <GlassMagnifier
          className="image-box"
          imageSrc="./image4.png"
          imageAlt="Image 4"
        />
      </div>
    </div>
  );
}

export default MagnifyingGlass;

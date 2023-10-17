// ImageComponent.js
import React from 'react';
import Image from 'next/image';
import styles from '../styles/ImageComponent.module.css';

const ImageComponent = ({ src, alt = '', width = 2048, height = 1024 }) => {
  return (
    <div className={styles["image-container"]}>
      <Image src={src} alt={alt} className={styles["centered-image"]} width={width} height={height} />
    </div>
  );
}

export default ImageComponent;

import React from 'react';
import { useParams } from 'react-router-dom';

const ImageGallery = () => {
    const { name } = useParams(); // Get the name parameter from the URL

    const base_url = `../img/portfolio/${name}/`;

    // Create an array of image filenames
    const images = Array.from({ length: 6 }, (_, i) => `Digital ${i + 1}.jpg`);

    // Map the image filenames to an array of objects with id and image_url
    const imageData = images.map((image, index) => ({
        id: index + 1,
        image_url: base_url + image
    }));

    // Render the images
    return (
        <div>
            <h1>{name} Image Gallery</h1>
            <div>
                {imageData.map((img) => (
                    <div key={img.id}>
                        <img src={img.image_url} alt={`Image ${img.id}`} />
                        <p>Image ID: {img.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ImageGallery({ keyword }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "fd1mgZlkJFvTSgArprzvyeEfyQwQ6kvW0M70uJ2GqmF84A6GUBD5708S";

  useEffect(() => {
    if (!keyword) return;

    async function fetchImages() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        setImages(response.data.photos);
      } catch (err) {
        console.error("Failed to fetch images:", err);
        setError("Unable to load images. Please try again.");
        setImages([]);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [keyword]);

  if (loading) return <p className="text-center mt-3">Loading images...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;
  if (images.length === 0) return null;

  return (
    <div className="container text-center my-5">
      <h3 className="fw-bold mb-4">Related Images</h3>
      <div className="row justify-content-center">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 mb-4">
            <img
              src={image.src.medium}
              alt={image.alt || "Related visual"}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

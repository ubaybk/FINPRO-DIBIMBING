import axios from "axios";
import { useState, useEffect } from "react";

const PostCreate = () => {
  const [file, setFile] = useState(null);
  const [sendImage, setSendImage] = useState([]);
  const [preview, setPreview] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const data = e.target.files[0];
    if (data) {
      setFile(data);
      setPreview(URL.createObjectURL(data));
    }
  };

  const [formPostCreate, setFormPostCreate] = useState({
    imageUrl: sendImage,
    caption: "",
  });

  const handleChangePostCreate = (e) => {
    setFormPostCreate({
      ...formPostCreate,
      [e.target.name]: e.target.value,
    });
  };

  const handleCombinedUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    try {
      const data = new FormData();
      data.append("image", file);

      // Step 1: Upload the image
      const uploadResponse = await axios.post(
        "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        data,
        {
          headers: {
            apiKey: apiKey,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const imageUrl = uploadResponse.data.url;
      setSendImage(imageUrl);

      // Step 2: Create the post using the image URL
      const postResponse = await axios.post(
        "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/create-post",
        { ...formPostCreate, imageUrl: imageUrl },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            apiKey: apiKey,
          },
        }
      );

      console.log("Post created successfully:", postResponse.data);
    } catch (error) {
      console.error("Error during upload or post creation:", error);
    }
  };

  useEffect(() => {
    setFormPostCreate((prevState) => ({
      ...prevState,
      imageUrl: sendImage,
    }));
  }, [sendImage]);

  return (
    <>
      <div>
        <h1>POST CREATE</h1>
        <div>
          <input onChange={handleChange} type="file" />
          {preview && (
            <div>
              <p>Preview :</p>
              <img src={preview} alt="Preview" className="w-max" />
            </div>
          )}
        </div>
      </div>
      <input
        onChange={handleChangePostCreate}
        type="text"
        name="caption"
        placeholder="caption"
      />
      <button onClick={handleCombinedUpload}>Upload & Send</button>
    </>
  );
};

export default PostCreate;

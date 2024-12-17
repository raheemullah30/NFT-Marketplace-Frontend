import React, { useState } from "react";

function CreateNFT() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create an object URL for the image preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, description, price, image });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-lg mx-auto p-6 border  border-green-500 bg-gray-900 text-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-100 mb-6">Create Your NFT</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* NFT Name Input */}
          <div>
            <label htmlFor="name" className="text-lg text-gray-300">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-gray-100"
              placeholder="Enter your NFT name"
              required
            />
          </div>

          {/* NFT Description Input */}
          <div>
            <label htmlFor="description" className="text-lg text-gray-300">
              Description:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 mt-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-gray-100"
              placeholder="Enter your NFT description"
              required
            />
          </div>

          {/* NFT Price Input */}
          <div>
            <label htmlFor="price" className="text-lg text-gray-300">
              Price (ETH):
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 mt-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-gray-100"
              placeholder="Enter NFT price in ETH"
              required
            />
          </div>

          {/* Image Upload Input */}
          <div>
            <label htmlFor="image" className="text-lg text-gray-300">
              Upload Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full mt-2 file:border file:border-green-500 file:rounded-lg file:px-4 file:py-2 file:bg-gray-800 file:text-gray-100"
              onChange={handleImageChange}
            />
          </div>

          {/* Image Preview */}
          {image && (
            <div className="mt-4">
              <h3 className="text-lg text-gray-300">Preview:</h3>
              <img src={image} alt="NFT Preview" className="w-full h-auto mt-2 rounded-lg" />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNFT;

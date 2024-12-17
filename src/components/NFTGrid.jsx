import React from "react";

function NFTGrid() {
  const nftItems = [
    { id: 1, name: "Hid Man", price: "0.008 ETH", image: "https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png" },
    { id: 2, name: "Cute moon", price: "0.004 ETH", image: "https://cdn.pixabay.com/photo/2023/10/20/19/25/moon-8330104_1280.png" },
    { id: 3, name: "A girl", price: "0.98 ETH", image: "https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Af2a5af03-078e-4b32-a72b-db9afe4c3247?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1" },
    { id: 4, name: "CryptoMan", price: "0.1 ETH", image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*_uFWr9WvMZjJHsyR2uz-3g.jpeg" },
    { id: 5, name: "Crypto Monkey", price: "0.008 ETH", image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg" },
    { id: 6, name: "Cyber Monkey", price: "0.004 ETH", image: "https://coinstats.app/blog/wp-content/uploads/2023/06/The-Rise-of-NFTs-How-Will-AI-Impact-the-NFT-Art-Ecosystem-copy-1-1200x675.webp" },
    { id: 7, name: "A Horse", price: "0.98 ETH", image: "https://cdn.pixabay.com/photo/2019/10/19/11/35/wolf-4561204_960_720.png" },
    { id: 8, name: "CryptoMan", price: "0.1 ETH", image: "https://cdn.pixabay.com/photo/2017/11/20/02/00/fantasy-2964231_960_720.jpg" },
    { id: 9, name: "Girl with Space", price: "0.2345 ETH", image: "https://cdn.pixabay.com/photo/2017/09/01/03/47/fantasy-2702997_1280.jpg" },
    { id: 10, name: "Queen Art", price: "0.678 ETH", image: "https://cdn.pixabay.com/photo/2024/03/08/07/31/people-8620083_1280.jpg" },
    { id: 11, name: "Art", price: "0.045 ETH", image: "https://cdn.pixabay.com/photo/2018/03/24/08/56/colorful-3256055_1280.jpg" },
    { id: 12, name: "Sun water", price: "0.037 ETH", image: "https://cdn.pixabay.com/photo/2021/10/12/17/41/abstract-6704211_1280.jpg" },
  ];

  return (
    <section className="container mx-auto py-12 bg-gray-900">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Trending NFTs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nftItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden group transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-green-600 border-4 border-transparent"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover transition duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{item.name}</h3>
              <p className="text-gray-400">{item.price}</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NFTGrid;

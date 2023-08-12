import React, { useState } from 'react';
import BlueShow from '@/images/product/blue.png';
import RedShow from '@/images/product/red.png';
import GreenShow from '@/images/product/green.png';
import OrangeShow from '@/images/product/orange.png';
import BlackShow from '@/images/product/black.png';
import LogoNike from '@/images/product/logo-nike.png';
import Image from 'next/image';
import { Share, ShareIcon, ShoppingCart } from 'lucide-react';
import { Share1Icon } from '@radix-ui/react-icons';

const productData = {
  id: 1,
  name: 'Nike Zoom KD 12',
  tagline: "Men's Running Shoes",
  productInfo:
    'Ensure a comfortable running session by wearing this pair of cool running shoes from Nike.',
  colors: ['blue', 'green', 'red', 'black', 'orange'],
  sizes: [7, 8, 9, 10, 11],
  price: 149.99,
  brand: 'Nike',
  brandImage: LogoNike?.src,
  images: [
    {
      id: 1,
      src: BlueShow?.src,
      color: 'blue',
    },
    {
      id: 2,
      src: RedShow?.src,
      color: 'red',
    },
    {
      id: 3,
      src: GreenShow?.src,
      color: 'green',
    },
    {
      id: 4,
      src: OrangeShow?.src,
      color: 'orange',
    },
    {
      id: 5,
      src: BlackShow?.src,
      color: 'black',
    },
  ],
};

const ProductCard04 = () => {
  const [product, setProduct] = useState(productData);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState(9);

  const {
    name,
    tagline,
    productInfo,
    colors,
    sizes,
    price,
    images,
    brand,
    brandImage,
  } = product;

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen min-w-full bg-slate-500 text-black font-poppins">
      <div className=" min-h-[500px] w-[320px] bg-white group">
        {/* Image Section */}
        <div className="relative">
          <div
            className={`bg-${selectedColor} w-full group-hover:w-full h-[200px] transition-all duration-1000 `}
          ></div>
          <div className="absolute top-0 z-20">
            <Image
              className="origin-bottom -rotate-6 w-full  "
              width={360}
              height={400}
              src={images?.find((img) => img.color === selectedColor)?.src}
              alt="Blue Show"
            />
          </div>
          <div className="absolute top-6 bottom-0 right-0 left-4  text-[7rem] text-white uppercase font-bold opacity-30 z-10 ">
            {brand}
          </div>
          <div className="absolute top-4 left-4 with-auto h-auto">
            <Image width={100} height={80} src={brandImage} alt="Logo Nike" />
          </div>
          <div className="absolute top-4 right-4 z-30">
            <div className="rounded-full p-1  bg-white ">
              <Share1Icon className={`w-5 h-5 text-${selectedColor}`} />
            </div>
          </div>
        </div>
        <div className="divide-y p-1">
          <div>
            <div className="flex items-center gap-3 ">
              <h2 className=" p-3 text-xl font-bold">{name}</h2>
              <div>
                <span
                  className={`uppercase bg-${selectedColor} text-white px-2 py-1  rounded`}
                >
                  New
                </span>
              </div>
            </div>
            <p className="px-3 pb-1 text-base font-medium text-black">{`Men's Running Shoes`}</p>
          </div>
          <div className="text-black ">
            <div className=" ">
              <h3 className="px-3 py-1 text-[0.9rem] font-semibold text-black uppercase">
                Product Info
              </h3>
            </div>
            <p className="px-3 text-[0.8rem] text-black">{productInfo}</p>
          </div>
          <div className="text-black ">
            <div className=" ">
              <h3 className="px-3 py-1 text-[0.9rem] font-semibold text-black uppercase">
                Color
              </h3>
            </div>
            <div className="flex justify-between items-center gap-2 ">
              {colors.map((color, i) => {
                return (
                  <div key={i} className={`bg-${color} border h-9 w-9`}></div>
                );
              })}
            </div>
          </div>

          <div className="text-black ">
            <div className=" ">
              <h3 className="px-3 py-1 text-[0.9rem] font-semibold text-black uppercase">
                Size
              </h3>
            </div>
            <div className="flex  gap-4 px-6 my-2 uppercase font-medium">
              {sizes.map((size, sIndex) => {
                return (
                  <div
                    key={sIndex}
                    className={`w-7 h-7 rounded   text-center hover:bg-black hover:text-white p-[0.18rem] ${
                      selectedSize === size
                        ? `bg-${selectedColor} text-white`
                        : 'bg-gray-200 '
                    }`}
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between items-center gap-3 p-3">
            <button className="bg-blue hover:bg-black py-2 px-3 text-white text-lg font-medium uppercase flex gap-2 items-center">
              <span>
                <ShoppingCart width={25} />
              </span>
              <span> Add to Cart</span>
            </button>
            <span className="text-2xl font-semibold">$ {149.99}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard04;

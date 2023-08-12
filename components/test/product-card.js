import React, { useState } from 'react';
import product from '@/images/product/product-top-01.png';
import { EyeIcon } from 'lucide-react';
const ProductCard = () => {
  const [isQuickViewLabelShow, setIsQuickViewLabelShow] = useState(false);

  const handleQuickViewLabel = (condition) => {
    setIsQuickViewLabelShow(condition);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FF9529] text-[#263E4A]">
      <div className="min-h-[520px] w-[300px] bg-[#FAF5F8] relative">
        <div
          className="w-full h-[260px] relative"
          style={{
            backgroundImage: `url(${product.src})`,
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '235px',
          }}
        >
          <div
            className="absolute right-4 top-4"
            onMouseOver={() => {
              handleQuickViewLabel(true);
            }}
            onMouseLeave={() => {
              handleQuickViewLabel(false);
            }}
          >
            <EyeIcon />
          </div>
          <div
            hidden={!isQuickViewLabelShow}
            className="absolute right-4 top-10"
          >
            <p className="text-sm bg-white p-2 rounded-2xl shadow">
              Quick View
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 absolute w-full bottom-8">
            <div className="w-4 h-4 border-2 border-white rounded-full "></div>
            <div className="w-4 h-4 border-2 border-white rounded-full "></div>
            <div className="w-4 h-4 border-2 border-white rounded-full bg-[#263E4A] "></div>
          </div>
          <div className="absolute top-[14.6rem] w-full -mt-2 p-3">
            <div className="bg-white border rounded-xl h-[270px] shadow-xl">
              <div className="flex justify-center gap-3 my-4">
                <div className="w-6 h-6 rounded-full bg-[#FF7B63]"></div>
                <div className="w-6 h-6 rounded-full bg-[#59BEBE]"></div>
                <div className="w-6 h-6 rounded-full bg-[#FFB656]"></div>
                <div className="w-6 h-6 rounded-full bg-[#F93247]"></div>
              </div>
              <div className="text-center">
                <h2 className="uppercase font-medium text-xl tracking-wide">
                  Top with Neckline
                </h2>
                <p className="font-light text-2xl tracking-wide py-1">$132</p>
              </div>
              <div className="flex justify-center gap-3 my-1 uppercase font-medium">
                <div className="w-9 h-9 border-2 border-[#263E4A] rounded-full p-1 text-center hover:bg-[#263E4A] hover:text-white">
                  S
                </div>
                <div className="w-9 h-9 border-2 border-[#263E4A] rounded-full p-1 text-center bg-[#263E4A] text-white hover:bg-white hover:text-[#263E4A]">
                  M
                </div>
                <div className="w-9 h-9 border-2 border-[#263E4A] rounded-full p-1 text-center hover:bg-[#263E4A] hover:text-white">
                  L
                </div>
              </div>
              <ul className="text-sm text-center px-6">
                <li>Ebroidered cropper top.</li>
                <li>Short sleeves.</li>
              </ul>
              <div className="w-full pt-2 px-5">
                <button className="border-2 border-[#263E4A] text-center uppercase font-medium w-full py-1 hover:bg-[#263E4A] hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

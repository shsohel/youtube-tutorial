import React from 'react';
import product from '@/images/product/chilis.jpg';
import { ShoppingCart, Star } from 'lucide-react';
import { StarIcon } from '@heroicons/react/20/solid';

const ProductCard02 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0D1117]">
      <div className="min-h-[480px]  w-[300px] bg-white hover:shadow-xl hover:shadow-red-700  relative">
        <div
          className="w-full h-[260px] relative z-1"
          style={{
            backgroundImage: `url(${product?.src})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-full h-[100px] bg-[#fff] absolute -bottom-6 -skew-y-6 "></div>
          <div className="bg-info hover:bg-[#FB1135] border-2 w-14 h-14 bottom-16 right-6 absolute rounded-full p-3">
            <ShoppingCart className="w-7 h-7 animate-pulse " />
          </div>
        </div>
        <div className="text-[#0c0c0c] top-60 w-full absolute ">
          <div>
            <h2 className="text-[#FB1135] text-center font-black font-acme text-4xl my-2">
              CHILI PAPERS
            </h2>
            <p className="text-[#394612] text-[1.2em] text-center font-satisfy">
              Lorem ipsum dolor sit amet.
            </p>
            <div className="text-center  text-2xl font-black font-satisfy mt-5">
              <span className="text-[#FB1135] w-[2px] px-2">-</span>
              <span className="text-[#394612]"> $ 5.67 </span>
              <span className="text-[#FB1135] px-2">-</span>
            </div>
            <div className="text-center flex justify-center  gap-2 my-2 absolute w-full">
              <span>
                <StarIcon width={20} color="#FF9529" />
              </span>
              <span>
                <StarIcon width={20} color="#FF9529" />
              </span>
              <span>
                <StarIcon width={20} color="#FF9529" />
              </span>
            </div>
            <div className="text-center text-lg font-medium  mt-10 py-2 bg-[#FB1135] hover:bg-[#FF9529]  text-white absolute w-full  ">
              <button className="tracking-widest ">Quick View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard02;

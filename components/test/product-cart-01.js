import React from 'react';
import product01 from '@/images/product/product-01.png';
const ProductCart01 = () => {
  return (
    <div className="min-h-[500px] w-[350px] bg-[#FFF3DA] text-[#640000] shadow-xl shadow-black/20">
      <div
        className="w-full h-[290px] relative"
        style={{
          backgroundImage: `url(${product01?.src})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute  bottom-3 w-full">
          <div className="flex justify-center gap-2">
            <div className="w-5 h-5 rounded-full border-[0.2rem] bg-[#B17664] border-[#B17664]"></div>
            <div className="w-5 h-5 rounded-full border-[0.2rem] border-[#B17664]"></div>
            <div className="w-5 h-5 rounded-full border-[0.2rem] border-[#B17664]"></div>
          </div>
        </div>
      </div>
      <div className="  bg-white p-5">
        <div className="text-center px-8 p-11">
          <h2 className="text-lg font-semibold mb-1">Lorem Ipsum</h2>
          <p className="text-xs font-normal ">
            {` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. `}
          </p>
          <div className="flex justify-center gap-3 my-4">
            <div className="w-7 h-7 rounded-full bg-[#FF7B63]"></div>
            <div className="w-7 h-7 rounded-full bg-[#59BEBE]"></div>
            <div className="w-7 h-7 rounded-full bg-[#FFB656]"></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">
            <p>$ 450</p>
          </div>
          <div>
            <button className=" text-sm  rounded  py-2 px-4  border-2 border-[#640000]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart01;

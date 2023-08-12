import React from 'react';
import { Button } from '../ui/button';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

import { Card, CardContent, CardFooter } from '@/components/ui/card';

import grid01 from '@/images/properties-grid-18.jpg';
import {
  ArrowRightLeftIcon,
  BathIcon,
  BedDoubleIcon,
  Heart,
  ParkingCircleIcon,
  SquareAsterisk,
} from 'lucide-react';
import { CustomTooltip } from '../customs/tooltip';
import CustomSlider from '../customs/custom-slider';
const BestPropertiesForSale = () => {
  return (
    <div className="my-32 px-4">
      <div className="flex justify-between items-center text-dark mb-3">
        <div>
          <h2 className="text-3xl font-medium mb-3">
            Best Properties For Sale
          </h2>
          <div className="border-b-[3px] border-primary border-spacing-1 w-20"></div>
        </div>
        <div>
          <Button className=" whitespace-nowrap rounded bg-gray-200">
            See All Properties
            <ArrowLongRightIcon className="ml-3" width={25} />
          </Button>
        </div>
      </div>
      <p className="text-gray-400 text-sm font-medium">
        Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
        suscipit
      </p>
      <div className="grid grid-cols-4 my-4 gap-6">
        <div>
          <Card className="w-auto text-dark">
            <CardContent className="p-0">
              <div
                className="h-56"
                style={{
                  backgroundImage: `url(${grid01?.src})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div className="p-4">
                <h2 className="card-title fs-16 lh-2 mb-0">
                  <a
                    href="/single-property-1.html"
                    className="text-dark hover-primary"
                  >
                    Affordable Urban House
                  </a>
                </h2>
                <p className="text-sm font-medium text-gray-400 mb-2">
                  1421 San Pedro St, Los Angeles
                </p>
                <ul className=" flex mb-0 flex-wrap mr-n5">
                  <li className="text-gray-400 text-sm font-medium  flex items-center mr-5">
                    <span className="text-primary mr-2">
                      <BedDoubleIcon className="w-5" />
                    </span>
                    <span>3 Br</span>
                  </li>
                  <li className="text-gray-400 text-sm font-medium  flex items-center mr-5">
                    <span className="text-primary mr-2">
                      <BathIcon className="w-5" />
                    </span>
                    <span>3 Ba</span>
                  </li>
                  <li className="text-gray-400 text-sm font-medium  flex items-center mr-5">
                    <span className="text-primary mr-2">
                      <SquareAsterisk className="w-5" />
                    </span>
                    <span> 2300 Sq.Ft</span>
                  </li>
                  <li className="text-gray-400 text-sm font-medium  flex items-center mr-5">
                    <span className="text-primary mr-2">
                      <ParkingCircleIcon className="w-5" />
                    </span>

                    <span> 1 Gr</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-2">
              <p class="text-base font-bold text-dark mb-0">$1.250.000</p>
              <div className="flex gap-3">
                <CustomTooltip title="Wishlist">
                  <div className="rounded-full border p-2">
                    <Heart className="w-5 h-5 text-gray-500" />
                  </div>
                </CustomTooltip>
                <CustomTooltip title="Compare">
                  <div className="rounded-full border p-2">
                    <ArrowRightLeftIcon className="w-5 h-5  text-gray-500" />
                  </div>
                </CustomTooltip>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-4 my-4 gap-6">
        <div className="text-dark col-span-4 ">
          <CustomSlider />
        </div>
      </div>
    </div>
  );
};

export default BestPropertiesForSale;

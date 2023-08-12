// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card, CardContent, CardFooter } from '../ui/card';
import {
  ArrowRightLeftIcon,
  BathIcon,
  BedDoubleIcon,
  Heart,
  ParkingCircleIcon,
  SquareAsterisk,
} from 'lucide-react';
import { CustomTooltip } from './tooltip';
import grid01 from '@/images/properties-grid-18.jpg';

export default function CustomSlider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      // navigation
      pagination
      // scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="animate__animated animate__zoomIn">
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
              <p className="text-base font-bold text-dark mb-0">$1.250.000</p>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="animate__animated animate__zoomIn">
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
              <p className="text-base font-bold text-dark mb-0">$1.250.000</p>
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
      </SwiperSlide>
      <SwiperSlide>
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
              <p className="text-base font-bold text-dark mb-0">$1.250.000</p>
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
      </SwiperSlide>
      <SwiperSlide>
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
              <p className="text-base font-bold text-dark mb-0">$1.250.000</p>
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
      </SwiperSlide>
      <SwiperSlide>
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
              <p className="text-base font-bold text-dark mb-0">$1.250.000</p>
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
      </SwiperSlide>
      <SwiperSlide>
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
              <p className="text-base font-bold text-dark mb-0">$1.250.000</p>
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
      </SwiperSlide>
      <div className="h-10 mb-2"></div>
    </Swiper>
  );
}

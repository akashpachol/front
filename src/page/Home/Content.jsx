import { FaHeart, FaStar } from "react-icons/fa";
import image from '../../assets/Frame143.png'
import Accordion from "./Accordion";


const Content = () => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="w-full  flex  ">
      <div className="w-1/5  px-3 py-4 sticky top-4 h-screen overflow-y-auto">
        <Accordion />
      </div>

      <div className="w-4/5   p-5 ">
        <div className="grid grid-cols-3 gap-4 p-4">
          {a.map((value) => (
            <div
              key={value}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-end me-8 pt-5">
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
                  <FaHeart className="w-5 h-5" />
                </button>
              </div>
              <a href="#">
                <img
                  className="p-4 rounded-t-lg"
                  src={image}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <FaStar className="w-4 h-4 text-yellow" />
                    <FaStar className="w-4 h-4 text-yellow" />
                    <FaStar className="w-4 h-4 text-yellow" />
                    <FaStar className="w-4 h-4 text-yellow" />
                    <FaStar className="w-4 h-4 text-gray" />
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    $599
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;

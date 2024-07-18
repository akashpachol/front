
import { FaHeart  } from 'react-icons/fa';
import Navbar from '../Layout/Navbar';
import BreadCrums from '../Layout/BreadCrums';
import image from '../../assets/Frame143.png'
const ProductSection = () => {
  return (

    <div>
    <Navbar />
    <div className=" w-full px-10 py-6">

    <div className=" flex justify-between ">
        <BreadCrums />
     
    </div>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-4/5 mx-auto flex flex-wrap lg:flex-nowrap">
       <div className=''>
       <img
            alt="ecommerce"
            className=" w-full object-cover object-center rounded border border-gray-200"
            src={image}
          />
          <div className='flex justify-around gap-10 mt-4'>
          <img
            alt="ecommerce"
            className="object-cover object-center rounded border border-gray-200 h-36"
            src={image}
          />
              <img
            alt="ecommerce"
            className=" object-cover object-center rounded border border-gray-200 h-36"
            src={image}
          />
          </div>
       </div>
      
        
       

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
            <h1 className="text-gray-900 text-2xl title-font font-medium mb-3">HP AMD Ryzen 3</h1>
            <p className="title-font font-medium text-2xl text-gray-900 mb-5">$58.00</p>

            <p className="text-gray-900 text-lg title-font font-medium mb-5">
           Availability : <span className='text-green-700'>in stock</span>
            </p>
            <p className="text-gray-500 text-sm title-font font-normal mb-1">
            Hurry up! only 34 product left in stock!
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            </div>
            <div className='flex'>
                <p>Ram :</p>
                <div className='flex ms-3 gap-4'>
                  <button className='bg-gray-200 border-2 border-gray-500 px-4'>4 GB</button>
                  <button className='bg-gray-200 border-2 border-gray-500 px-4'>8 GB</button>
                  <button className='bg-gray-200 border-2 border-gray-500 px-4'>16 GB</button>

                </div>
            </div>
            <div className='flex mt-5'>
                <p>Quantity : </p>
                <div className='flex ms-3'>
                  <button className='bg-gray-200 border-2 border-gray-400 px-2'>-</button>
                  <button className='bg-gray-200 border-2 border-gray-400 px-5'>1</button>
                  <button className='bg-gray-200 border-2 border-gray-400 px-2'>+</button>

                </div>
            </div>
            <div className="flex mt-5 justify-between">
              <button className="action_button h-12 w-2/5">
              Edit product
              </button>
              <button className="action_button h-12  w-2/5">
              Buy it now
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
  <FaHeart className="w-5 h-5" />
</button>

            </div>
          </div>
        </div>
      </div>
    </section>
</div>
  
</div>
   
  );
};

export default ProductSection;

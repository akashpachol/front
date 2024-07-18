
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';

import image from '../../assets/Frame143.png'
import {  FaMinusCircle, FaStar } from 'react-icons/fa';

const WishList = ({isOpen,toggleDrawer}) => {
 

 



  return (
    <div>
      <button className='bg-red-500 mx-3' onClick={toggleDrawer(true)}>right</button>
      <Drawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <div
      className='w-[32rem]'
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
    <div  className="flex  mt-5 mx-3 gap-3">
      <div className='border-2 w-1/2'>
      <img className=" " src={image} alt="" />

      </div>
      <div className='mt-5'>
      <h1 className="text-gray-900 text-lg title-font font-medium mb-3">HP AMD Ryzen 3</h1>
      <p className="title-font font-medium text-lg text-gray-900 mb-5">$58.00</p>
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <FaStar className="w-4 h-4 text-yellow" />
                    <FaStar className="w-4 h-4 text-yellow" />
                    <FaStar className="w-4 h-4 text-yellow" />
                    <FaStar className="w-4 h-4 text-yellow" />
                    <FaStar className="w-4 h-4 text-gray" />
                  </div>
      </div>
      <div className='flex justify-center items-center'>
     
      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
  <FaMinusCircle className="w-5 h-5" />
</button>
     </div>
    
    </div>
    </div>
      </Drawer>
    </div>
  );
};
WishList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
export default WishList;

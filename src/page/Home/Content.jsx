import { FaHeart, FaStar } from "react-icons/fa";
import image from '../../assets/Frame143.png'
import TablePagination from '@mui/material/TablePagination';
import Accordion from "./Accordion";
import { getProduct } from "../../Service/user/apiMethod";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const rowsPerPageOptions = [5, 10, 25];

const Content = () => {


  const [productData, setProductData] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const navigate=useNavigate()
  const search = useSelector((state) => state.search);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
  
    try {
      const response = await getProduct();
      if (response.data) {
        setProductData(response.data);

        setFilteredRows(response.data);

      } else {
    console.log('something wrong');
    
      }
    } catch (error) {
     console.log(error);
     
    }
  };



  const handleChangePage = ( newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  useEffect(() => {
    const debounce = setTimeout(() => {
      const filtered = productData.filter((productValue) =>
        Object.values(productValue).some((value) =>
          value && value.toString().toLowerCase().includes(search.data.toLowerCase())
        )
      );
      setFilteredRows(filtered);
    }, 1000);

    return () => clearTimeout(debounce);
  }, [ productData,search]);



  return (
    <div className="w-full  flex  ">
      <div className="w-1/5  px-3 py-4 sticky top-4 h-screen overflow-y-auto">
        <Accordion />
      </div>

      <div className="w-4/5   p-5 ">
        <div className="grid grid-cols-3 gap-4 p-4">
          {filteredRows.map((value) => (
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
                  src={value.image[0]}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                   {value.name}
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
                  {value.variants.map((data,index)=>(
  <span key={index} className="text-3xl font-bold text-gray-900 dark:text-white">
                 {data.price}   
  </span>
                  ))}
                
                </div>
                <button className="action_button" onClick={()=>{navigate('/ProductSection',{state:value._id})}} >view</button>
              </div>
            </div>
          ))}
        </div>

        <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </div>
  );
};

export default Content;

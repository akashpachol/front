import {  useState } from "react";
import BreadCrums from "../Layout/BreadCrums";
import Navbar from "../Layout/Navbar";
import Category from "./Category";
import Content from "./Content";
import SubCategory from "./SubCategory";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()

  const toggleCategoryModal = () => {

    setIsModalOpen(!isModalOpen);
  };
  const toggleModal = () => {

    setIsOpen(!isOpen);
  };



  return (
    <div>
        <Navbar />
        <div className=" w-full px-10 py-6">

        <div className=" flex justify-between ">
            <BreadCrums />
            <div className="flex gap-4">
<button className="action_button" onClick={toggleCategoryModal}>Add category</button>
<button className="action_button" onClick={toggleModal}>Add sub category</button>

<button className="action_button"onClick={()=>navigate('/product')}>Add product</button>

            </div>
        </div>
<Content />
</div>
{isModalOpen&&(<Category toggleCategoryModal={toggleCategoryModal} isModalOpen={isModalOpen}/>)} 
{isOpen&&(<SubCategory toggleModal={toggleModal} isOpen={isOpen}  />)} 

    </div>
  );
}

export default Home;

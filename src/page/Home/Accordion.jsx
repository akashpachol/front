import { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { getCategory, getSubCategory } from "../../Service/user/apiMethod";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1); 
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState({});
  
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await getCategory();
      if (response.data) {
        setCategoryData(response.data);
      } else {
        console.log("something wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubCategory = async (categoryId) => {
    try {
      const response = await getSubCategory(categoryId);
      if (response.data) {
        setSubCategoryData((prevData) => ({
          ...prevData,
          [categoryId]: response.data,
        }));
      } else {
        console.log("something wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleAccordion = (index, categoryId) => {
    if (activeIndex === index) {
      setActiveIndex(-1); 
    } else {
      setActiveIndex(index);
      fetchSubCategory(categoryId); 
    }
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {categoryData.map((category, index) => (
        <div className="accordion-item" key={index}>
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              onClick={() => toggleAccordion(index, category._id)} 
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <span>{category.name}</span>
              {activeIndex === index ? (
                <FaChevronUp className="w-3 h-3 rotate-180" />
              ) : (
                <FaChevronDown className="w-3 h-3" />
              )}
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`transition-all duration-300 ${
              activeIndex === index ? "block" : "hidden"
            }`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              {activeIndex === index && subCategoryData[category._id] ? (
                subCategoryData[category._id].map((subCategory, subIndex) => (
                  <p key={subIndex}>{subCategory.name}</p>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">Loading...</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;

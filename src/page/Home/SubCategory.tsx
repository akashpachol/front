import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { getCategory, postSubCategory } from "../../Service/user/apiMethod";
import { Modal } from "@mui/material";

const initialValues = {
  name: "",
  subCategory: "",
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Vender Name is required"),

  subCategory: Yup.string().required("Vender Name is required"),
});
const SubCategory = ({ isOpen, toggleModal }) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
  
    try {
      const response:any = await getCategory();
      if (response.data) {
        setCategoryData(response.data);

   
      } else {
    console.log('something wrong');
    
      }
    } catch (error) {
     console.log(error);
     
    }
  };


  console.log(categoryData, "hjgfhj");


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit:async (values, { resetForm }) => {
      try {
        console.log(values,"ghfhdghfgh");
        
        const response:any = await postSubCategory(values);
        if (response.status === "success") {
          setIsOpen(!isOpen)
        } else {
          console.log('hai',response.message);
        }
      } catch (error) {
        const errorMessage = error.message
       console.log(errorMessage);
      }

      resetForm();
    },
  });

  return (
    

<Modal
open={isOpen}
onClose={toggleModal}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<div className=" bg-white rounded-lg shadow w-1/3 mx-auto mt-48">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add Category
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={toggleModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <select
                  id="name"
                  className="input"
                  {...formik.getFieldProps("name")}
                >
                  <option value="" disabled hidden>
                    Select category
                  </option>
                  {categoryData.map((value) => (
                    <option value={value._id} className="text-lg ">
                      {value.name}
                    </option>
                  ))}
                </select>
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="subCategory"
                  className="input"
                  id="subCategory"
                  {...formik.getFieldProps("subCategory")}
                />
                {formik.touched.subCategory && formik.errors.subCategory ? (
                  <div className="error">{formik.errors.subCategory}</div>
                ) : null}
              </div>

              <div className="flex justify-center gap-4">
                <button type="submit" className="action_button">
                  ADD
                </button>
                <button
                  type="submit"
                  className="bg-gray-200 text-white  font-medium rounded-2xl   lg:px-5 py-3 "
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModal()
                  }}
                >
                  DISCARD
                </button>
              </div>
            </form>
          </div>
        </div>
    
</Modal>
  );
};

export default SubCategory;

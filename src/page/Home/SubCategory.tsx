import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';


const initialValues = {
    name: '',
    subCategory:''

};
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Vender Name is required')
        .min(3, 'Vender Name must be at least 3 characters long'),
        subCategory: Yup.string()
        .required('Vender Name is required')
        .min(3, 'Vender Name must be at least 3 characters long'),
 
});
const SubCategory = ({ isOpen, setIsOpen }) => {




    

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
          console.log(values);
          

        
            resetForm();
        },
    });

  return (
    <div id="authentication-modal" className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50">
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add Category
                </h3>
                <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {     setIsOpen(!isOpen);
                    }}
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
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
    {...formik.getFieldProps('name')}
  >
    <option value="" disabled hidden>Select event</option>
    <option value="" >Select event</option>

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
                            {...formik.getFieldProps('subCategory')}
                        />
                        {formik.touched.subCategory && formik.errors.subCategory ? (
                            <div className="error">{formik.errors.subCategory}</div>
                        ) : null}
                    </div>
             
             <div className='flex justify-center gap-4'>
             <button type="submit" className="action_button">ADD</button>
             <button type="submit" className="bg-gray-200 text-white  font-medium rounded-2xl   lg:px-5 py-3 "  onClick={(e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }}>DISCARD</button>
             </div>
                  

                </form>
            </div>
        </div>
    </div>
</div>
  );
}

export default SubCategory;

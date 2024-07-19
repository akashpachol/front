import * as Yup from "yup";
import { useFormik } from "formik";
import { getCategory, getSubCategory, postProduct } from "../../Service/user/apiMethod";
import { useEffect, useState } from "react";

const initialValues = {
  name: "",
  category:'',
  subCategory: "",
  description:'',
  price:0,
  stock:0,
  ram:'',
  image:[]
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required("title is required"),
  category: Yup.string().required("category is required"),
  price: Yup.number()
  .required("price is required")
  .positive("price must be a positive number")
  .integer("price must be an integer"),
  stock: Yup.number()
  .required("stock is required")
  .positive("stock must be a positive number")
  .integer("stock must be an integer"),
  ram: Yup.number()
  .required("ram is required")
  .positive("ram be a positive number")
  .integer("ram must be an integer"),
  subCategory: Yup.string().required("subCategory is required"),
  description: Yup.string().required("description is required"),
  image: Yup.array()
  .min(1, 'At least one image file is required')
  .of(
    Yup.object().shape({
      url: Yup.string().required(),
      type: Yup.string().oneOf(['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp', 'image/tiff', 'image/svg+xml']).required(),
    }))

});

const Product = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [subCategoryData, setSubCategoryData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
  
    useEffect(() => {
      getDetails();
    }, []);
  
    useEffect(() => {
      if (selectedCategory) {
        fetchSubCategory(selectedCategory);
      }
    }, [selectedCategory]);
  
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
          setSubCategoryData(response.data);
        } else {
          console.log("something wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, { resetForm }) => {
    
          console.log(values, "ghfhdghfgh");
  
          try {
            const response = await postProduct(values);
            if (response.status === "success") {
                console.log(response.message);
            } else {
              console.log(response.message);
            }
          } catch (error) {
            const errorMessage = error.message
           console.log(errorMessage);
          }
  
        resetForm();
      },
    });
  
    const handleImageUpload = (event) => {
      const files = event.target.files;
      if (files) {
        const uploadedImages = formik.values.image.slice();
        Array.from(files).forEach((file) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "mycloud");
            formData.append("folder", "images");
  
            fetch("https://api.cloudinary.com/v1_1/dp4edf7uw/image/upload", {
              method: "POST",
              body: formData,
            })
              .then((response) => response.json())
              .then((data) => {
                const imageUrl = data.secure_url;
                const newImage = { url: imageUrl, type: file.type };
  
                uploadedImages.push(newImage);
                formik.setFieldValue("image", uploadedImages);
              })
              .catch((error) => {
                console.error("Error uploading image to Cloudinary:", error);
              });
          };
          reader.readAsDataURL(file);
        });
      }
    };
  
    const handleCategoryChange = (event) => {
      const value = event.target.value;
      setSelectedCategory(value);
      formik.setFieldValue("category", value);
    };
  return (
    <div>
      <div className="w-3/5  bg-white mx-auto overflow-auto ">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center pt-5">
          Add Product
        </h3>
        <div className="p-4 md:p-5">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4 flex mx-12">
              <div className="w-1/4">
                <label htmlFor="">Title :</label>
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input"
                  id="name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>
            </div>

            <div className="mb-4 flex mx-12">
              <div className="w-1/4">
                <label htmlFor="">Varient :</label>
              </div>
              <div className="w-3/4 flex gap-6">
                <div>
                  <label htmlFor="">Ram :</label>

                  <input
                    type="text"
                    placeholder="Type here"
                    className="input"
                    id="ram"
                    {...formik.getFieldProps("ram")}
                  />
                  {formik.touched.ram && formik.errors.ram ? (
                    <div className="error">{formik.errors.ram}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="">Price :</label>

                  <input
                    type="text"
                    placeholder="Type here"
                    className="input"
                    id="price"
                    {...formik.getFieldProps("price")}
                  />
                  {formik.touched.price && formik.errors.price ? (
                    <div className="error">{formik.errors.price}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="">Stock :</label>

                  <input
                    type="text"
                    placeholder="Type here"
                    className="input"
                    id="stock"
                    {...formik.getFieldProps("stock")}
                  />
                  {formik.touched.stock && formik.errors.stock ? (
                    <div className="error">{formik.errors.stock}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="mb-4 flex mx-12">
              <div className="w-1/4">
                <label htmlFor="">Category :</label>
              </div>
              <div className="w-3/4">
                <select
                  id="category"
                  className="input"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="" disabled hidden>
                    Select category
                  </option>
                  {categoryData.map((value, index) => (
                    <option value={value._id} key={index} className="text-lg ">
                      {value.name}
                    </option>
                  ))}
                </select>
                {formik.touched.category && formik.errors.category ? (
                  <div className="error">{formik.errors.category}</div>
                ) : null}
              </div>
            </div>

            <div className="mb-4 flex mx-12">
              <div className="w-1/4">
                <label htmlFor="">Sub Category :</label>
              </div>
              <div className="w-3/4">
                <select
                  id="subCategory"
                  className="input"
                  {...formik.getFieldProps("subCategory")}
                  
                >
                  <option value="" disabled hidden>
                    Select category
                  </option>
                  {subCategoryData.map((value, index) => (
                    <option value={value._id} key={index} className="text-lg ">
                      {value.name}
                    </option>
                  ))}
                </select>
                {formik.touched.subCategory && formik.errors.subCategory ? (
                  <div className="error">{formik.errors.subCategory}</div>
                ) : null}
              </div>
            </div>

            <div className="mb-4 flex mx-12">
              <div className="w-1/4">
                <label htmlFor="">description :</label>
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input"
                  id="name"
                  {...formik.getFieldProps("description")}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="error">{formik.errors.description}</div>
                ) : null}
              </div>
            </div>
            <div className="mb-4 flex mx-12">
              <div className="w-1/4">
                <label htmlFor="">upload Image :</label>
              </div>
              <div className="w-3/4">
              <div className="w-full  mb-4">
            <div className="bg-white p-6 rounded-lg shadow-md ">
            <div className="grid grid-cols-3 gap-4 max-h-80 ">

                {formik.values.image.length > 0 ? 
                    formik.values.image.map((img, index) => (
                      <div key={index} className="relative">
                        <img src={img.url} alt={`Uploaded ${index}`} className="w-full h-48 rounded" />
                      </div>
                    ))
                : (''
                )}
                    <div className='mt-5 border-2'>
                  <label
                    htmlFor='image'
                    className=" text-white rounded font-sm px-5 py-2  my-5"
                  >
                                    <img  src="https://t4.ftcdn.net/jpg/01/64/16/59/360_F_164165971_ELxPPwdwHYEhg4vZ3F4Ej7OmZVzqq4Ov.jpg" alt="Upload Icon" className="'w-24 h-24" />

                  </label>
                  <input
                    className="hidden"
                    id="image"
                    type="file"
                    multiple
                    onChange={handleImageUpload}
                  />
                </div>
                                  </div>

            
                {formik.errors.image && formik.touched.image && (
                  <div className="text-red-500 text-sm">{formik.errors.image}</div>
                )}
             
          
            </div>
          </div>
              </div>
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
                }}
              >
                DISCARD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Product;

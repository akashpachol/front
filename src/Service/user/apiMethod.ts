
import { apiCall } from "./apiCall";
import { userUrls } from "../endpoint";


export const postCategory = (
  booking
) => {
  return new Promise((resolve, reject) => {
    try {
      const url = `${userUrls.category}`;
    

      apiCall("post", url, booking)
        .then((response) => { 
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: "500", message: "Something wrong" });
    }
  });
};



export const getCategory = (

)=> {
  return new Promise((resolve, reject) => {
    try {
      const url = `${userUrls.category}`;

      apiCall("get", url, null)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: "500", message: "Something wrong" });
    }
  });
};



export const postSubCategory = (
  data
) => {
  return new Promise((resolve, reject) => {
    try {
      const url = `${userUrls.subCategory}`;
    const value={category:data.name,name:data.subCategory}

      apiCall("post", url, value)
        .then((response) => { 
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: "500", message: "Something wrong" });
    }
  });
};


export const getSubCategory = (
category
)=> {
  return new Promise((resolve, reject) => {
    try {
      const url = `${userUrls.subCategory}/${category}`;

      apiCall("get", url, null)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: "500", message: "Something wrong" });
    }
  });
};


export const postProduct = (
  product
) => {
  return new Promise((resolve, reject) => {
    try {
      const url = `${userUrls.product}`;
    

      apiCall("post", url, product)
        .then((response) => { 
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: "500", message: "Something wrong" });
    }
  });
};


export const getProduct = (

)=> {
  return new Promise((resolve, reject) => {
    try {
      const url = `${userUrls.product}`;

      apiCall("get", url, null)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: "500", message: "Something wrong" });
    }
  });
};

export const getProductDetails = (
id
)=> {
  return new Promise((resolve, reject) => {
    try {
      const url = `${userUrls.productDetails}/${id}`;

      apiCall("get", url, null)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      resolve({ status: "500", message: "Something wrong" });
    }
  });
};

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
      const url = `${userUrls.category}}`;

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
  booking
) => {
  return new Promise((resolve, reject) => {
    try {
      const url = `${userUrls.bookingEvent}`;
    

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


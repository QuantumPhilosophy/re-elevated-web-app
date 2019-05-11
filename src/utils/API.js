import axios from "axios";

const url = "http://localhost:3030";

export default {
  create: userObj => {},

  // one route for all signup
  createNewUser: userObj => {
    return axios.post(`${url}/auth/signup`, {
      name: userObj.name,
      email: userObj.email,
      password: userObj.password,
      location: userObj.address,
      dob: userObj.dob,
      account_type: userObj.account_type,
      img: userObj.img
    });
  },

  // if user wants to update image
  uploadImage: image => {
    return axios.post({});
  },
  merchantPostReview: commentGrower => {
    return axios.post(`${url}/growerreviews/add/{merchant_id}`, commentGrower);
  },
  getReviewOnMerchant: custyReview => {
    return axios.get(`${url}/merchantreviews/{merchant_id}`, custyReview);
  },
  // one route for all login

  login: user => {
    console.log("API.js login call triggered");
    return axios.post(`${url}/auth/login`, {
      username: user.username,
      password: user.password,
      type: user.account_type
    });
  },

  getUser: () => {
    return axios.get(`${url}/auth/user_data`)
  }

  // getSavedBooks: function() {
  //   return axios.get(url + "/api/strains");
  // },
  // deleteStrain: function(id) {
  //   return axios.delete(url + "api/strains/" + id);
  // },
  // saveStrain: function(strainData) {
  //   return axios.post("/api/strains", strainData);
  // }
};

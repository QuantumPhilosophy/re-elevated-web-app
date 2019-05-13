import axios from "axios";

const url = "http://localhost:3030";

export default {
  // =================
  // What is this part?
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
  // ====================
  getUser: (id) => {
    return axios.get(`${url}/users/${id}`)
  },

  getGrowers: () => {
    return axios.get(`${url}/growers/`);
  },

  getGrower: (id) => {
    return axios.get(`${url}/growers/${id}`);
  },

  getMerchantReviews: id => {
    return axios.get(`${url}/merchant/merchantreviews/${id}`);
  },

  getGrowerReviews: id => {
    return axios.get(`${url}/merchant/growerreviews/${id}`);
  },

  // one route for all signup
  createNewUser: userObj => {
    return axios.post(`${url}/auth/signup`, {
      // In here we must include all not null fields from all accounts table (user, merchant, grower)
      name: userObj.name,
      email: userObj.email,
      password: userObj.password,
      location: userObj.address,
      dob: userObj.dob,
      account_type: userObj.accountType,
      img: userObj.img
    });
  },

  // one route for all login
  login: user => {
    console.log("API.js login call triggered");
    return axios.post(`${url}/auth/login`, {
      username: user.username,
      password: user.password,
      type: user.accountType
    });
  }
};

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

  getMerchants: () => {
    return axios.get(`${url}/merchants`);
  },
  // ====================

  getGrowers: () => {
    return axios.get(`${url}/growers/`);
  },

  getMerchantReviews: id => {
    return axios.get(`${url}/merchant/merchantreviews/${id}`);
  },

  getGrowerReviews: id => {
    return axios.get(`${url}/merchant/growerreviews/${id}`);
  },
  getReviewsOnGrower: id => {
    return axios.get(`${url}/grower/growerreviews/${id}`);
  },
  getGrowerMenu: id => {
    return axios.get(`${url}/growermenu/${id}`);
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
      account_type: userObj.account_type,
      img: userObj.img
    });
  },

  // if user wants to update image
  uploadImage: image => {
    return axios.post({});
  },
  // Merchant adding growers review (post)
  merchantPostReview: data => {
    return axios.post(`${url}/growerreviews/add/${data.merchant_id}`, {
      merchant_id: data.merchant_id,
      grower_id: data.grower_id,
      grower_review: data.grower_review,
      grower_rating: data.grower_rating
    });
  },

  // one route for all login
  login: user => {
    // console.log("API.js login call triggered");
    return axios.post(`${url}/auth/login`, {
      username: user.username,
      password: user.password,
      type: user.account_type
    });
  }
};

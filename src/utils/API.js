import axios from "axios";

const url = "http://localhost:3030";

export default {
  getUsers: function() {
    return axios.get(url + "/users");
  },
  getGrowers: function() {
    return axios.get(url + "/grower");
  },
  getMerchant: function() {
    return axios.get(url + "/merchants");
  },

  createNewUser: userObj => {
    return axios.post(`${url}/auth/${userObj.account_type}/signup`, {
      name: userObj.name,
      email: userObj.email,
      password: userObj.password,
      address: userObj.address
    });
  },

  loginUser: userObj => {
    console.log("loginUser", userObj);
    return axios.post(`${url}/auth/${userObj.account_type}/login`, userObj);
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

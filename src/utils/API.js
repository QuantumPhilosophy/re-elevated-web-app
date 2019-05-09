import axios from "axios";

const url = "http://localhost:3030";

export default {
  getUsers: function() {
    return axios.get(url + "/users");
  },
  createNewUser: userObj => {
    return axios.post(`${url}/auth/signup`, {
      name: userObj.name,
      email: userObj.email,
      password: userObj.password,
      address: userObj.address
    });
  },
  
  login: user => {
    console.log("API.js login call triggered");
    return axios.post(`${url}/auth/login`, {
      username: user.username,
      password: user.password,
      type: user.type
    })
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

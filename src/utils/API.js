import axios from "axios";

export default {
  getStrains: function(q) {
    return axios.get("/api/government", { params: { q: "n:" + q } });
  },
  getSavedBooks: function() {
    return axios.get("/api/strains");
  },
  deleteStrain: function(id) {
    return axios.delete("api/strains/" + id);
  },
  saveStrain: function(strainData) {
    return axios.post("/api/strains", strainData);
  }
};

import axios from 'axios'

const getData = async () => {
  const response = await axios.get("https://thomasproductdev.prod.acquia-sites.com/en/outcomes/ppa/customer/leadershipstyle/cd");  
  const paras = response.data[0];  
  return paras;
}

const updatePara = async (obj) => {
  //debugger;
  const response = await axios.post("https://thomasproductdev.prod.acquia-sites.com/api/thomas-paragraphs", obj);
  return response;
}

export default {
  getData,
  updatePara
};

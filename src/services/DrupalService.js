import axios from 'axios'

const getData = async (outcome, audience, motivator) => {
  const response = await axios.get("https://thomasproductdev.prod.acquia-sites.com/en/outcomes/ppa/" + audience + " /" + outcome + "/" + motivator);  
  const paras = response.data[0];
  //debugger;  
  return paras ?? {paragraphs: []};
}

const updatePara = async (obj) => {
  //debugger;
  const response = await axios.patch("https://thomasproductdev.prod.acquia-sites.com/api/thomas-paragraphs", obj);
  return response;
}

export default {
  getData,
  updatePara
};

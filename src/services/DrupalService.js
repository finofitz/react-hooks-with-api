import axios from 'axios'

const getData = async () => {
  const response = await axios.get("https://thomasproductdev.prod.acquia-sites.com/en/outcomes/ppa/customer/leadershipstyle/cd")  
  const paras = response.data[0];
  //debugger;
  return paras;
}

export default {
  getData
};

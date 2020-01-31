const isAuthenticated = () => {

    if (localStorage.getItem("access_token") === null) {
      return false;
    }

    return true;
  }
  
  const ClearAccessToken = () => {
    localStorage.removeItem('access_token');
  }
  
  module.exports = { isAuthenticated, ClearAccessToken }
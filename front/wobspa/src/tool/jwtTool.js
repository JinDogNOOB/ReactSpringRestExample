const jwtTool = {};

const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };




  jwtTool.parseJwt = parseJwt;
  export default jwtTool;
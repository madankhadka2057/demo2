// FOR LOCAL ENVIRONMENT
module.exports = {
  HOST: "sql6.freesqldatabase.com",  
  USER: "sql6684274",       
  PASSWORD: "MkdlS7rLpd",       
  DB: "sql6684274",     
  dialect: "mysql",   
  pool: {
      max: 5,         
      min: 0,         
      acquire: 30000, 
      idle: 10000     
  }
};


// for production 
  // module.exports = {
  //   HOST: "containers-us-west-206.railway.app",
  //   USER: "root",
  //   PASSWORD: "qz3ncGhNgAyUlzqrvo8o",
  //   DB: "railway",
  //   dialect: "mysql",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000,
  //   },
  // };
const module = {
  Login: require("./login.test"),
  NodeImportExample: require("./faker.test"),
};

function initialization() {
  console.log(`[Oauth] initializing tests`);
  module.Login.default();
  module.NodeImportExample.default();
}

module.exports = {
  initializationOauth: initialization,
  module: module,
};

const modeleTests = {
  Login: require("./login.test"),
  FakerExampleTest: require("./faker.test"),
};

function initialization() {
  console.log(`[Oauth] initializing tests`);
  modeleTests.Login.default();
  modeleTests.FakerExampleTest.default();
}

module.exports = {
  initializationOauth: initialization,
  module: module,
};

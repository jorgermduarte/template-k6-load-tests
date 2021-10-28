
const module_tests = {
    Login : require('./login.test'),
    NodeImportExample : require('./faker.test'),
    Signup : require('./signup.test')
}

function tests_initialization(){
    console.log(`[Oauth] initializing tests`);
    module_tests.Login.default();
    module_tests.NodeImportExample.default();
    module_tests.Signup.default();
}

module.exports = {
    OauthInitializeTests : tests_initialization,
    Tests : module_tests
}
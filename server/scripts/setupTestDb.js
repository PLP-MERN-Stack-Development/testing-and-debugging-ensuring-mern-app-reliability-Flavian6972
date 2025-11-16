// Sets up env or local test DB config. For CI, you can skip or set MONGO_URI to test instance.
const fs = require('fs');
const path = require('path');


// Minimal: create a local .env.test file to be used by tests
const outPath = path.resolve(__dirname, '..', '.env.test');
const content = 'NODE_ENV=test\nMONGO_URI=mongodb://localhost:27017/mern_testing_test\n';
fs.writeFileSync(outPath, content);
console.log('Created .env.test at', outPath);
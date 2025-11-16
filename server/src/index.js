const express = require('express');
const app = express();
const router = require('./routes');
const { globalErrorHandler } = require('./middleware/errorHandler');


app.use(express.json());
app.use('/api', router);


// global error handler
app.use(globalErrorHandler);


if (require.main === module) {
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on ${port}`));
}


module.exports = app; // exported for tests
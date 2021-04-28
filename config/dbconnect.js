const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://user:1234@mongodb.hrc5s.mongodb.net/POKI?retryWrites=true&w=majority?authSource=admin",
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('db connected'))
  .catch(console.error);
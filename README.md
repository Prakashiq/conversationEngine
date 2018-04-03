# Express & ES6 voice conversation engine API 
[![Build Status](https://travis-ci.org/Prakashiq/conversationEngine.svg?branch=master)](https://travis-ci.org/Prakashiq/conversationEngine)
> Tested on Node v6 and above

## Features
- [x] ES6 for the latest & greatest javascript awesomeness
- [x] [MongoDB](https://www.mongodb.com/) w/ [Mongoose](http://mongoosejs.com/) for data layer
- [x] Testing via [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/)
- [x] Test coverage via [Isparta](https://github.com/douglasduteil/isparta)
- [x] Username/Email registration and authentication

## Getting Started
First, ensure you have node and mongo installed on your system.

```sh
# clone it
git clone git@github.com:Prakashiq/conversationEngine.git
cd conversationEngine

# Install dependencies
npm install

# Run it
npm start

# Try it!
curl -H "Content-Type: application/json" -X POST -d '{"username":"prakash", "email": "example@gmail.com", "password":"password1"}' http://localhost:4567/users
```

## Environment Variables
Place a `.env` file in the top level of the directory you've cloned. These variables will be automatically assigned to `process.env` when the application boots. It is gitignored by default as it's not good practice to store your environment variables in your remote repository.
Your `.env` file can look something like this:

```shell
MONGO_URI=mongodb://admin:admin@ds223509.mlab.com:23509/voiceconsole
SESSION_SECRET=voiceconsolesecretsessionid
```

Now we can access one of these variables with something like `process.env.MONGO_URI`!

## NPM Scripts

- **`npm start`** - Start live-reloading development server
- **`npm test`** - Run test suite
- **`npm run test:watch`** - Run test suite with auto-reloading
- **`npm run coverage`** - Generate test coverage
- **`npm run build`** - Generate production ready application in `./build`

## Todo
- [ ] Add OAuth Login Support (Facebook, Twitter, Google)
- [ ] Add support for MySql or PostgreSQL (Possibly with sequelize)
- [ ] Reset password functionality

## License
MIT

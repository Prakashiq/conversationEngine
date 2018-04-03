import BaseController from './base.controller';
import User from '../models/user';

class AuthController extends BaseController {
  login = async (req, res, next) => {
    const { username, password } = req.body.result.parameters;

    try {
      const user = await User.findOne({ username });

      if (!user || !user.authenticate(password)) {
        return res.json( {
          displayText : "Hello " + username + " Please verify your credentials", 
          speech : "Hello " + username + " Please verify your credentials",
          contextOut : [{name:'start_login', 'lifespan':0, 'parameters':{}}]
        } );
        // const err = new Error('Please verify your credentials.');
        // err.status = 401;
        // return next(err);
      }

      // const token = user.generateToken();
      
      return res.json( {
        displayText: "Hello " + username + " Your authentication was successful", 
        speech : "Hello " + username + " Your authentication was successful",
        contextIn : [{name:'start_login', 'lifespan':1, 'parameters':{}}]
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController();

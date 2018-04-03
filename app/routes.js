import { Router } from 'express';

import MetaController from './controllers/meta.controller';
import AuthController from './controllers/auth.controller';
import UsersController from './controllers/users.controller';
import Constants from './config/constants';
// import PostsController from './controllers/posts.controller';

import authenticate from './middleware/authenticate';
import accessControl from './middleware/access-control';
import errorHandler from './middleware/error-handler';

const routes = new Router();

routes.get('/', MetaController.index);

routes.post('/', function(req,res){
    const action = (req.body.result ===undefined) ? null: 
    (req.body.result.action === undefined)? null : req.body.result.action;

	  if ( action != null && action == 'auth'){
		res.redirect(307,'/auth/login');
      }
      else {
        let responseToUser = {
          displayText : "I didn't get that. Can you say it again?", 
          speech : "I didn't get that. Can you say it again?",
          outputContexts : [{name:'start_', 'lifespan':1, 'parameters':{}}]
        };
        
        res.json({ responseToUser });
      }
});

// Authentication
routes.post('/auth/login', AuthController.login);

// Users
routes.get('/users', UsersController.search);
routes.post('/users', UsersController.create);
routes.get('/users/me', authenticate, UsersController.fetch);
routes.put('/users/me', authenticate, UsersController.update);
routes.delete('/users/me', authenticate, UsersController.delete);
routes.get('/users/:username', UsersController._populate, UsersController.fetch);

// Post
// routes.get('/posts', PostsController.search);
// routes.post('/posts', authenticate, PostsController.create);
// routes.get('/posts/:id', PostsController._populate, PostsController.fetch);
// routes.delete('/posts/:id', authenticate, PostsController.delete);

// Admin
routes.get('/admin', accessControl('admin'), MetaController.index);

routes.use(errorHandler);

export default routes;

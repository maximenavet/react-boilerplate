import App from '../App';
import Home from '../../views/Home';
import Login from '../../views/Login';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: Home,
  },
  childRoutes: [
    {
      path: 'home',
      component: Home,
      onEnter: ({ params }, replace) => replace('/')
    },
    {
      path: 'login',
      component: Login,
    }
  ]
};

export default routes;

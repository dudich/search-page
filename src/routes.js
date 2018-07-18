import SearchPage from './containers/SearchPage';
import AuthPage from './containers/AuthPage';

export const routes = [
  { path: '/', component: SearchPage },
  { path: '/testCallBackUrl', component: AuthPage }
];
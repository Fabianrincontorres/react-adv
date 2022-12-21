import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,  
} from 'react-router-dom';
import { LazyLoad1 } from '../01-lazyload/pages';

import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {

  return (
    <Suspense fallback={<span>Loading</span>}>
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            {
              routes.map(route=>(
                <li key={route.name}>
                  <NavLink to={route.to} activeClassName="nav-active" exact>{route.name}</NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {routes.map(route=>(
             <Route key={route.path} path={route.path}>
              <route.Component/>
             </Route>
          ))}

          <Route path="/*">
            <LazyLoad1/>
          </Route>

        </Switch>
      </div>
    </Router>
    </Suspense>
  );
}
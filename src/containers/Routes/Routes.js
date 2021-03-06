import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorBoundary from '../Error/Error';
const Home = lazy(() => import('../../components/Home/Home'));
const Users = lazy(() => import('../../components/Users/Users'));
const Jobs = lazy(() => import('../../components/Jobs/Jobs'));
const Navbar = lazy(() => import('../../components/Navigation/Navbar'));
const Stats = lazy(() => import('../../components/Favs/Stats'));
const People = lazy(() => import('../../components/People/People'));

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <div>
            <Navbar className='col-3' />
          </div>
          <div className='container col-8'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/user/:username'>
                <Users />
              </Route>
              <Route exact path='/user'>
                <Users />
              </Route>
              <Route exact path='/users'>
                <People />
              </Route>
              <Route path='/jobs'>
                <Jobs />
              </Route>
              <Route path='/stats'>
                <Stats />
              </Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

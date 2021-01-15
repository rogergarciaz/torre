import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { UsersContext } from '../../helpers/Context';

function Navbar() {
  const { loved } = useContext(UsersContext);
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{backgroundColor: 'whitesmoke !important'}}>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>
                <i className='fa fa-home'></i>
                <span className='spacing'>Home</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/user'>
                <i className='fa fa-user mr-2'></i>
                <span className='spacing'>User</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/users'>
                <i className='fa fa-users' ></i>
                <span className='spacing'>Users</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/jobs'>
                <i className='fa fa-suitcase mr-5'></i>
                <span className='spacing'>Jobs</span>
              </Link>
            </li>
          </ul>
        </div>
        <form className='form-inline'>
          <Link className='nav-link active' aria-current='page' to='/stats'>
            <i className='fa fa-heart' style={{ fontSize: '1.1em', color: 'black' }}>
              <span className='spacing'>{loved.length}</span>
            </i>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;

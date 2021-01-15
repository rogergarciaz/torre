import { motion } from 'framer-motion';
import { Fragment, useContext, useEffect, useState } from 'react';
import { isArrayInArray } from '../../helpers/Constants';
import { fetchUsers } from '../../helpers/Requests';
import { UsersContext } from '../../helpers/Context';
import Loader from '../Loader/Loader';
import '../Users/Ripple.css';
import '../Gallery/Gallery.css';

export default function List() {
  const [state, setState] = useState(null);
  const [offset, setOffset] = useState(0);
  const { loved, setLoved } = useContext(UsersContext);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchUsers(offset);
      setState(response);
    };
    fetch();
  }, [offset]);

  return (
    <>
      <div className='container'>
      {offset===0? null : (
        <>
          <motion.i
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setOffset(offset - 10);
            }}
            type='button'
            className='fa fa-hand-o-left mb-4 '
            style={{ fontSize: '2em' }}
          >
            <span>
              {'  '}
              Previous 10 Users
            </span>
          </motion.i>
          <br />
        </>
      ) }
        <motion.i
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setOffset(offset + 10);
          }}
          type='button'
          className='fa fa-hand-o-right mb-4 '
          style={{ fontSize: '2em' }}
        >
          <span>
            {'  '}
            Next 10 Users
          </span>
        </motion.i>        

        <div className='gallery-wrap'>
          {state !== null ? (
            state.results.map((item, id) => {
              return (
                <Fragment key={id}>
                  <div
                    className='item'
                    style={{
                      backgroundImage: `url(${item.picture})`,
                    }}
                    data-bs-toggle='modal'
                    data-bs-target={`#${item.username}`}
                    type='button'
                  ></div>
                  <div className='modal fade' id={item.username} tabIndex='-1'>
                    <div className='modal-dialog'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h5 className='modal-title modal-colors'>
                            {item.username}
                          </h5>
                          <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                          ></button>
                        </div>
                        <div className='modal-body modal-colors'>
                          <strong>My Name:</strong>{' '}
                          {item.name}
                          <br/>
                          <strong>About me:</strong>{' '}
                          {item.professionalHeadline}, that lives in{' '}
                          {item.locationName}
                          <br />
                          <a
                            className='btn btn-outline-dark'
                            href={`https://bio.torre.co/${item.username}`}
                            target='_blank'
                            rel='noreferrer'
                          >
                            Let's see my genome
                          </a>                        
                        </div>
                        <div className='modal-footer'>
                          <button
                            type='button'
                            className='btn btn-secondary'
                            data-bs-dismiss='modal'
                          >
                            Close
                          </button>
                          {(!isArrayInArray(loved, item)) ? (
                            <button
                            type='button'
                            className='btn btn-warning'
                            data-bs-dismiss='modal'
                            onClick={() => {
                              setLoved([...loved, item]);
                              let sync = loved;
                              sync.push(item);
                              localStorage.setItem(
                                'users',
                                JSON.stringify(sync)
                              );
                            }}
                            >
                            <i className='fa fa-heart-o mr-5'></i>
                          </button>
                          ) : (
                            <button
                            type='button'
                            className='btn btn-warning'
                            data-bs-dismiss='modal'
                            onClick={() => {
                              setLoved(loved.filter(i => i.id !== item.id));
                              let sync = loved;
                              sync.pop(item);
                              localStorage.setItem(
                                'users',
                                JSON.stringify(sync)
                              );
                            }}
                          >
                            <i className='fa fa-heart mr-5'></i>
                          </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}

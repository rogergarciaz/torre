import { motion } from 'framer-motion';
import { Fragment, useContext, useEffect, useState } from 'react';
import { isArrayInArray } from '../../helpers/Constants';
import { fetchJobs } from '../../helpers/Requests';
import { UserContext } from '../../helpers/UserContext';
import Loader from '../Loader/Loader';
import '../Users/Ripple.css';
import './Gallery.css';

export default function Gallery() {
  const [state, setState] = useState(null);
  const [offset, setOffset] = useState(0);
  const { fav, setFav } = useContext(UserContext);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchJobs(offset);
      setState(response);
    };
    fetch();
  }, [offset]);

  return (
    <>
      <div className='container'>
        <motion.i
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setOffset(offset + 5);
          }}
          type='button'
          className='fa fa-plus mb-4 '
          style={{ fontSize: '2em' }}
        >
          <span>
            {'  '}
            Load More
          </span>
        </motion.i>

        <div className='gallery-wrap'>
          {state !== null ? (
            state.results.map(item => {
              return (
                <Fragment key={item.id}>
                  <div
                    className='item'
                    style={{
                      backgroundImage: `url(${item.organizations[0].picture})`,
                    }}
                    data-bs-toggle='modal'
                    data-bs-target={`#${item.id}`}
                    type='button'
                  ></div>

                  <div className='modal fade' id={item.id} tabIndex='-1'>
                    <div className='modal-dialog'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h5 className='modal-title modal-colors'>
                            {item.objective}
                          </h5>
                          <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                          ></button>
                        </div>
                        <div className='modal-body modal-colors'>
                          Status:{' '}
                          {item.status === 'open' ? (
                            <>
                              <i
                                className='fa fa-check'
                                style={{ color: 'green' }}
                              >
                                {' '}
                                Open
                              </i>
                              <br />
                            </>
                          ) : (
                            <>
                              <i
                                className='fa fa-times'
                                style={{ color: 'red' }}
                              >
                                {' '}
                                Closed
                              </i>
                              <br />
                            </>
                          )}
                          Type: {item.type} <br />
                          {item.compensation !== undefined &&
                          item.compensation !== null ? (
                            <>
                              Compensation:{' '}
                              {item.compensation.data !== undefined &&
                              item.compensation.data !== null
                                ? item.compensation.data.currency
                                : null}{' '}
                              {item.compensation.data !== undefined &&
                              item.compensation.data !== null
                                ? item.compensation.data.minAmount
                                : null}{' '}
                              -{' '}
                              {item.compensation.data !== undefined &&
                              item.compensation.data !== null
                                ? item.compensation.data.maxAmount
                                : null}{' '}
                              {item.compensation.data !== undefined &&
                              item.compensation.data !== null
                                ? item.compensation.data.periodicity
                                : null}
                              <br />
                            </>
                          ) : null}
                          Locations:{' '}
                          {item.locations.length > 0
                            ? item.locations.map(item => {
                                return item;
                              })
                            : 'Unknown'}{' '}
                          <br />
                          <a
                            className='link-primary'
                            href={`https://torre.co/jobs/${item.id}`}
                            target='_blank'
                            rel='noreferrer'
                          >
                            Take me to the offer!
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
                          <button
                            type='button'
                            className='btn btn-warning'
                            data-bs-dismiss='modal'
                            onClick={() => {
                              if (!isArrayInArray(fav, item)) {
                                setFav([...fav, item]);
                                let sync = fav;
                                sync.push(item);
                                localStorage.setItem(
                                  'favs',
                                  JSON.stringify(sync)
                                );
                              } else {
                                alert('Already on your favs');
                              }
                            }}
                          >
                            Send to favs
                          </button>
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

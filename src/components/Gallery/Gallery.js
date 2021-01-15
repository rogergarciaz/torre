import { motion } from 'framer-motion';
import { Fragment, useEffect, useState } from 'react';
import { fetchJobs } from '../../helpers/Requests';
import Loader from '../Loader/Loader';
import '../Users/Ripple.css';
import './Gallery.css';

export default function Gallery() {
  const [state, setState] = useState(null);
  const [offset, setOffset] = useState(0);

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
            Previous 10 Jobs
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
            Next 10 Jobs
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
                          <strong>Status:</strong>{' '}
                          {item.status}<br />
                          <strong>Type:</strong> {item.type} <br />
                          {item.compensation !== undefined &&
                          item.compensation !== null ? (
                            <>
                              <strong>Compensation:</strong>{' '}
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
                          <strong>Locations:</strong>{' '}
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
                            Let's go to the offer!
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

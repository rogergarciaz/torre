import {  useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchUsername } from '../../helpers/Requests';
import Pie from './Pie';

export default function Modal({item, show}) {
  const [info, setInfo] = useState(null);
  const history = useHistory();
  
  useEffect(() => {
    const fetch = async (item) => {
      setInfo(await fetchUsername(item.username));
    };
    fetch(item);
    return ''
    // eslint-disable-next-line
  }, []);


  return (
    <>
    <div className='text-center'>
    <div
      className='btn btn-outline-secondary'
      data-bs-toggle='modal'
      data-bs-target={`#${item.username}`}
      style={{display: show}}
      type='button'
    >
      More info!
    </div>
    </div>
    <div className='modal fade bd-example-modal-xl' id={item.username} tabIndex='-1'>
      <div className='modal-dialog modal-xl'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title modal-colors'>
              I'm {item.name} also know as {item.username}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <strong>Interested in:</strong>{' '}
            <ul className='list-group'>
              {item.openTo.map((text,i) =>{
                var textCapitalized = text.charAt(0).toUpperCase() + text.slice(1);
                return (<li style={{listStyleType:'none'}} key={i}>{textCapitalized}</li>)
              })}
            </ul>
            <br />
            <strong>My location:</strong> {' '}
            <br />
            {info !== null ? (<>{info.person.name} located in{' '}
            <strong>{info.person.location.name}</strong>, more precisely lat:{' '}
            {info.person.location.latitude} - long: {info.person.location.longitude}</>
            ) : null }
            <br /><br />
              <button
              className='btn btn-outline-dark'
              onClick={() => {
                history.push(`/user/${item.username}`);
              }}
              data-bs-dismiss='modal'
              >
                More detailed info
              </button>
            <br/>
            {info !== null ? (
              <Pie user={info} />
            ) : null }
            </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-outline-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
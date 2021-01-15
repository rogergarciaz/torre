import { Frame, Page } from 'framer';
import {  useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchUsername } from '../../helpers/Requests';
import Location from './Location';
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
      className='btn btn-secondary'
      data-bs-toggle='modal'
      data-bs-target={`#${item.username}`}
      style={{display: show}}
      type='button'
    >
      Locate!
    </div>
    </div>
    <div className='modal fade' id={item.username} tabIndex='-1'>
      <div className='modal-dialog'>
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
                return (<li style={{listStyleType:'none'}} key={i}>{text}</li>)
              })}
            </ul>
            <br />
            <strong>Come visit me</strong>{' '}
            {console.log(info)}
            {info > 0 ? (<>{info.person.name} located in {info.person.location.name}</>) : null }
            <br />
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
            {info > 0 ? (
            <div className='container-fluid d-flex justify-content-center mt-5'>
              <Page width={'80%'} height={'100%'} className='slider'>
                <Frame size={150} radius={30} background={'transparent'}>
                  <Pie user={info} />
                </Frame>
                <Frame size={150} radius={30} background={'transparent'}>
                  <Location location={info.person.location} />
                </Frame>
              </Page>
            </div>) : null }
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
    </>
  );
}
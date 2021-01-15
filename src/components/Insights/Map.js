import {  useEffect, useState } from 'react';
//import Location from './Location';

export default function Map({item, id}) {
  const [info, setInfo] = useState([]);
  const query = item.locationName.replaceAll(',','%2C').replaceAll(' ', '%20');
  const url = `http://api.positionstack.com/v1/forward?access_key=7d07d8c52f4021484fe4d379d67c5082&query=${query}&limit=1`
  const handleSearch = () => {
    fetch(url)
      .then(res=>res.json())
      .then(contents=>{
        (contents.data[0].latitude !==undefined) && (
        setInfo([contents.data[0]])
        )
      })
      .catch(()=>
        console.log('Can’t access ' + url + ' response.')
      );
  };

  useEffect(()=>{
    handleSearch();
    // eslint-disable-next-line
  },[]);


  return (
    <>
    <div
      className='btn btn-secondary'
      data-bs-toggle='modal'
      data-bs-target={`#${item.username}`}
      type='button'
    >
      Locate!
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
          <div className='modal-body modal-colors align-items-start'>
            <strong>Interested in:</strong>{' '}
            <ul className='list-group align-items-start'>
              {item.openTo.map((text,i) =>{
                return (<li style={{listStyleType:'none'}} key={i}>{text}</li>)
              })}
            </ul>
            <br />
            <strong>Come visit me</strong>{' '}
            {console.log(item)}
            {info.name} located in {info.continent}.
            <br />
              <a
                className='btn btn-outline-dark'
                href={`https://bio.torre.co/${item.username}`}
                target='_blank'
                rel='noreferrer'
              >
                More info in my genome
              </a> 
            <br/>
            {//<Location location={info} />
            }
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
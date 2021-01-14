import './Favs.css';

export default function Favs() {
  const fav = []
  return (
    <div className='container'>
      {fav.length > 0
        ? fav.map(item => {
            return (
              <div className='card-columns mt-2'>
                <div className='card'>
                  <a
                    href={`https://torre.co/jobs/${item.id}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='card-img-top'
                      src={`${item.organizations[0].picture}`}
                      alt='what'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.objective}</h5>
                      <p className='card-text'>
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
                            <i className='fa fa-times' style={{ color: 'red' }}>
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
                      </p>
                      <p className='card-text'>
                        <small className='text-muted'>
                          <i className='fas fa-eye'></i>
                          {item.id}
                          <i className='far fa-user'></i>
                          id<i className='fas fa-calendar-alt'></i>
                          {item.deadline}
                        </small>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })
        : 'Nothing yet, go search and select some of your favorites'}
    </div>
  );
}

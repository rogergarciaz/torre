import './Accordion.css';

export default function Accordion({ education, jobs, projects }) {
  return (
    <>
      <div className='general-div'>
        <svg>
          <symbol viewBox='0 0 24 24' id='expand-more'>
            <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </symbol>
          <symbol viewBox='0 0 24 24' id='close'>
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </symbol>
        </svg>
      </div>

      <details open>
        <summary>
          Education
          <svg
            className='control-icon control-icon-expand'
            width='24'
            height='24'
            role='presentation'
          >
            <use href='#expand-more' />
          </svg>
          <svg
            className='control-icon control-icon-close'
            width='24'
            height='24'
            role='presentation'
          >
            <use href='#close' />
          </svg>
        </summary>
        {education.length > 0 ? (
          education.map((item, key) => {
            return (
              <p key={key}>
                {item.name}
                {item.organizations.length > 0
                  ? ' - ' + item.organizations[0].name
                  : null}
                {item.organizations.length > 1 ? 'and others.' : null}
                <br />
              </p>
            );
          })
        ) : (
          <code>No info</code>
        )}
      </details>

      <details>
        <summary>
          Jobs
          <svg
            className='control-icon control-icon-expand'
            width='24'
            height='24'
            role='presentation'
          >
            <use href='#expand-more' />
          </svg>
          <svg
            className='control-icon control-icon-close'
            width='24'
            height='24'
            role='presentation'
          >
            <use href='#close' />
          </svg>
        </summary>
        {jobs.length > 0 ? (
          jobs.map((item, key) => {
            return (
              <p key={key}>
                {item.name}
                {item.organizations.length > 0
                  ? ' - ' + item.organizations[0].name
                  : null}
                {item.organizations.length > 1 ? 'and others.' : null}
                <br />
              </p>
            );
          })
        ) : (
          <code>No info</code>
        )}
      </details>

      <details>
        <summary>
          Projects
          <svg
            className='control-icon control-icon-expand'
            width='24'
            height='24'
            role='presentation'
          >
            <use href='#expand-more' />
          </svg>
          <svg
            className='control-icon control-icon-close'
            width='24'
            height='24'
            role='presentation'
          >
            <use href='#close' />
          </svg>
        </summary>
        {projects.length > 0 ? (
          projects.map((item, key) => {
            return (
              <p key={key}>
                {item.name}
                {item.organizations.length > 0
                  ? ' - ' + item.organizations[0].name
                  : null}
                {item.organizations.length > 1 ? 'and others.' : null}
                <br />
              </p>
            );
          })
        ) : (
          <code>No info</code>
        )}
      </details>
    </>
  );
}

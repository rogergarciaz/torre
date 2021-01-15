import './Card.css';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Accordion from '../Accordion/Accordion';

export default function Card(data) {
  const { education, person, jobs, projects } = data.info;

  return (
    data && (
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
            <div className='profile-card-2'>
              <img
                src={
                  person !== undefined && person.picture
                    ? person.picture
                    : 'https://picsum.photos/740/420/?random'
                }
                alt={person.publicId}
                className='img img-responsive'
              />
              <div className='profile-name'>
                {person.name !== null || person.name !== undefined
                  ? person.name
                  : 'Unknown, how bizarre...'}
              </div>
              <div className='profile-username'>@{person.publicId}</div>

              {person.links.length > 0 ? (
                <div className='profile-icons'>
                  {person.links.find(element => element.name === 'github') !==
                  undefined ? (
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='mr-5'
                      href={
                        person.links.find(element => element.name === 'github')
                          .address
                      }
                    >
                      <FaGithub className='fa' />
                    </a>
                  ) : null}
                  {person.links.find(element => element.name === 'twitter') !==
                  undefined ? (
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='mr-5'
                      href={
                        person.links.find(element => element.name === 'twitter')
                          .address
                      }
                    >
                      <FaTwitter className='fa' />
                    </a>
                  ) : null}
                  {person.links.find(element => element.name === 'linkedin') !==
                  undefined ? (
                    <a
                      rel='noreferrer'
                      target='_blank'
                      className='mr-5'
                      href={
                        person.links.find(
                          element => element.name === 'linkedin'
                        ).address
                      }
                    >
                      <FaLinkedinIn className='fa' />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
          <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
            <Accordion education={education} jobs={jobs} projects={projects} />
          </div>
        </div>
      </div>
    )
  );
}

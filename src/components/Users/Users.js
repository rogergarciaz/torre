import { Frame, Page } from 'framer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { container, variants } from '../../helpers/Constants';
import { fetchUsername } from '../../helpers/Requests';
import Card from '../Card/Card';
import Location from '../Insights/Location';
import Pie from '../Insights/Pie';
import Radar from '../Insights/Radar';
import Loader from '../Loader/Loader';
import './Ripple.css';


export default function Users() {
  const [delay, setDelay] = useState(1);
  const [render, setRender] = useState(false);
  const [search, setSearch] = useState(null);
  const [change, setChange] = useState(false);
  const [value, setValue] = useState('');

  const handleOnChange = event => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        setSearch(await fetchUsername(value));
        setChange(true);
      } catch (error) {
        setSearch(null);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [value]);

  useEffect(() => {
    const loaded = localStorage.getItem('loaded_users');
    if (JSON.parse(loaded)) {
      setDelay(0);
    }
    localStorage.setItem('loaded_users', true);
    setRender(true);
  }, []);

  return (
    render && (
      <div className='text-center mt-5'>
        {!change ? (
          <>
            <motion.h1
              className='mt-5'
              initial='hidden'
              animate='visible'
              variants={variants}
              transition={{ duration: 2 }}
            >
              Heyyy!,
            </motion.h1>
            <motion.h1
              initial='hidden'
              animate='visible'
              variants={variants}
              transition={{ delay: delay, duration: 2 }}
            >
              search for Torre's users
            </motion.h1>
            <motion.h1
              initial='hidden'
              animate='visible'
              variants={variants}
              transition={{ delay: delay * 2, duration: 2 }}
            >
              or don't I can't tell you what to do
            </motion.h1>
          </>
        ) : null}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: delay * 4, duration: 2 }}
          className='input-group mb-3 mt-4'
        >
          <input
            placeholder="Write a torre's username, like zroger"
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false'
            type='text'
            className={`form-control ${change ? 'mt-5' : null}`}
            onChange={e => {
              handleOnChange(e);
            }}
          />
        </motion.div>
        {search !== null ? (
          <>
            <motion.h1
              initial={{ scale: 2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              className='mt-4 mb-4'
            >
              {search.person.professionalHeadline !== undefined
                ? search.person.professionalHeadline
                : ''}
            </motion.h1>

            <Card info={search} />

            <motion.div
              variants={container}
              initial='hidden'
              animate='show' 
              transition={{ delay: delay * 8, duration: 3 }}
            >
              <h1  className='display-4'>Hey look below and don't forget scroll horizontally</h1>
            </motion.div>

            <div className='container-fluid d-flex justify-content-center mt-5'>
              <Page width={'80%'} height={'100%'} className='slider'>
                <Frame size={150} radius={30} background={'transparent'}>
                  <Pie user={search} />
                </Frame>
                <Frame size={150} radius={30} background={'transparent'}>
                  <Radar strengths={search} />
                </Frame>
                <Frame size={150} radius={30} background={'transparent'}>
                  <Location location={search.person.location} />
                </Frame>
              </Page>
            </div>
            

          </>
        ) : change ? (
          <>
            <Loader />
            <motion.div variants={container} initial='hidden' animate='show'>
              <h1  className='display-4'>Not found, check the username or try with a different user</h1>
            </motion.div>
          </>
        ) : null}
      </div>
    )
  );
}

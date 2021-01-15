import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Frame, Page } from 'framer';
import { motion } from 'framer-motion';
import { UsersContext } from '../../helpers/Context';
import { fetchUsername } from '../../helpers/Requests';
import { container } from '../../helpers/Constants';
import Map from '../Insights/Map';
import Radar from '../Insights/Radar';
//import Pie from '../Insights/Pie';
import './Favs.css';

export default function Stats() {
  const history = useHistory();
  const { loved } = useContext(UsersContext);
  const [data, setData] = useState(null);
  const [render, setRender] = useState(false);
  
  useEffect(() => {
    const fetch = async (item,id) => {
        let response = await fetchUsername(item.username);
        setData([response]);
        console.log(response); //don't fill data
    };
    // loved.map((item,i) => {
        fetch(loved[0],0);
        return ''
    //})
    // eslint-disable-next-line
  }, []);

  return (
        <div className='text-center mt-5'>
            <motion.div
                variants={container}
                initial='hidden'
                animate='show' 
                transition={{ delay: 0, duration: 1.5 }}
            >
                <>
                <h3 className='display-4'>
                    Here you can see stats from the users liked.
                </h3>
                <button
                type='button'
                className='btn btn-secondary'
                onClick={()=>{setRender(true);}}
                >
                    Show Stats!
                </button>
                <br />
                <br />
                <button
                type='button'
                className='btn btn-danger'
                onClick={()=>{history.push('/users');}}
                >
                    + or - users
                </button>
                </>
            </motion.div>
            {(data !== null && render) ?(
                <motion.div
                variants={container}
                initial='hidden'
                animate='show' 
                transition={{ delay: 0, duration: 0.5 }}
                >
                    <h1  className='display-6'>
                        Hey look below and don't forget scroll horizontally
                    </h1>
                </motion.div>
            ):null
            }
            <div className='container-fluid d-flex justify-content-center mt-5'>
            <Page width={'100%'} height={'100%'} className='slider'>
                {(data !== null && render )? (data.map((item,i )=> {
                    return (
                        <>
                        <Frame size={150} radius={30} background={'transparent'} key={i}>
                            <Radar strengths={item} />
                        </Frame>
                        </>
                    )}
                )):null
                }
            </Page>
            </div>
            <Map />
        </div>
  );
}

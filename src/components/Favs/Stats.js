import { useContext, useEffect, useState } from 'react';
import { Frame, Page } from 'framer';
import { motion } from 'framer-motion';
import { UsersContext } from '../../helpers/Context';
import { container } from '../../helpers/Constants';
import Modal from '../Insights/Modal';
import Radars from '../Insights/Radars';
import './Favs.css';

export default function Stats() {
  const { loved } = useContext(UsersContext);
  const [render, setRender] = useState(false);

  useEffect(() => {
    localStorage.getItem('loaded_stats');
    localStorage.setItem('loaded_stats', true);
    setRender(true);
  }, []);
  return (
      render &&(
        <div>
            {loved.length > 0 ? (
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
            ):
            null
            }
            {loved.length > 0 && (loved.map((item,id) => {
                return <Modal item={item} show='none' key={id} />
                }))
            }
            <div className='container-fluid d-flex justify-content-center mt-5'>
            <Page width={'80%'} height={'100%'} className='slider'>
                {loved.length > 0? (loved.map((item,id) => {
                    return (
                        <Frame size={150} radius={30} background={'transparent'} key={id}>
                            <Radars strengths={item} />
                            <Modal item={item} />
                        </Frame>
                    )}
                ))
                :
                <h3 className='display-4'>
                    Nothing yet, go search and select some of your favorites to compare
                </h3>
                }
            </Page>
            </div>
        </div>
      )
  );
}

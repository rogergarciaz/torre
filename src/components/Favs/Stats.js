import { useContext } from 'react';
import { Frame, Page } from 'framer';
import { motion } from 'framer-motion';
import { UsersContext } from '../../helpers/Context';
import { container } from '../../helpers/Constants';
import Map from '../Insights/Map';
import Radars from '../Insights/Radars';
import './Favs.css';

export default function Stats() {
  const { loved } = useContext(UsersContext);
  return (
        <div className='text-center mt-5'>
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
            <div className='container-fluid d-flex justify-content-center mt-5'>
            <Page width={'80%'} height={'100%'} className='slider'>
                {loved.length > 0? (loved.map((item,id) => {
                    return (
                        <Frame size={150} radius={30} background={'transparent'} key={id}>
                            <Radars strengths={item} />
                            <Map item={item} id={id} />
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
  );
}

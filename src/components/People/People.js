import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { variants } from '../../helpers/Constants';
import List from '../List/List';

export default function People() {
  const [delay, setDelay] = useState(1);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const loaded = localStorage.getItem('loaded_people');
    if (JSON.parse(loaded)) {
      setDelay(0);
    }
    localStorage.setItem('loaded_people', true);
    setRender(true);
  }, []);

  return (
    render && (
      <div className='text-center mt-5'>
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ duration: 2 }}
        >
          Let's see possibly signals!
        </motion.h1>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={variants}
          transition={{ delay: delay * 3, duration: 2 }}
          className='input-group mb-3 mt-4'
        >
          <List />
        </motion.div>
      </div>
    )
  );
}

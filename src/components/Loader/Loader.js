import { motion } from 'framer-motion';
import { variants } from '../../helpers/Constants';
import '../Users/Ripple.css';

export default function Loader() {
  return (
    <motion.div
      variants={variants}
      initial='show'
      animate='hidden'
      className='lds-ripple'
      transition={{ duration: 2 }}
    >
      <div></div>
      <div></div>
    </motion.div>
  );
}

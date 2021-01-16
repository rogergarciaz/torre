import { Radar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { getUsefulInfo } from '../../helpers/Constants';

export default function Rad({ strengths }) {
  return (
    <div>
      <motion.h1
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className='mt-4'
      >
        Strengths
      </motion.h1>
      {getUsefulInfo(strengths)[0].length > 0 ? (
        <Radar data={getUsefulInfo(strengths)[1]} />
      ) : (
        <h4 className='text-center'>Nothing to see yet</h4>
      )}
    </div>
  );
}

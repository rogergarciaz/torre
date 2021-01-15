import { Radar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { getUsefulData } from '../../helpers/Constants';

export default function Radars({ strengths }) {
  return (
    <div>
      <motion.h1
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className='mt-4'
      >
        {strengths !== null && strengths.name !== undefined
          ? strengths.name
          : 'My'} Strengths
      </motion.h1>
      {getUsefulData(strengths)[0].length > 0 ? (
        <Radar data={getUsefulData(strengths)[1]} />
      ) : (
        'Nothing to see yet'
      )}
    </div>
  );
}

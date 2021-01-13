import { Doughnut } from 'react-chartjs-2';
import { getRandomColor } from '../../helpers/Constants';
import { motion } from 'framer-motion';

export default function Pie({ user }) {
  const info = {
    labels: Object.keys(user.stats),
    datasets: [
      {
        data: Object.values(user.stats),
        backgroundColor: getRandomColor(Object.values(user.stats).length),
        hoverBackgroundColor: getRandomColor(Object.values(user.stats).length),
      },
    ],
  };
  return (
    <div>
      <motion.h1
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className='mt-4'
      >
        About{' '}
        {user !== null && user.person.name !== undefined
          ? user.person.name
          : 'me'}
      </motion.h1>
      {Object.values(user.stats).length > 0 ? (
        <Doughnut data={info} />
      ) : (
        'Nothing to see yet'
      )}
    </div>
  );
}

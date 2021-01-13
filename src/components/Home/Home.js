import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/ryuuk.png';

export default function Home() {
  const history = useHistory();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className='jumbotron jumbotron-fluid mt-5 text-center'
      onClick={() => history.push('/users')}
    >
      <div className='container'>
        <h1 className='display-4'>Hi, Wellcome to Torre's Test</h1>
        <p className='lead'>
          This web app is part a techical interview required for a software
          developer position in torre by RAGZ.
        </p>
        <img src={Logo} alt='Logo' />
      </div>
    </motion.div>
  );
}

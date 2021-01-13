import { useState, useEffect, useMemo } from 'react';
import { UserContext } from '../helpers/UserContext';
import Routes from './Routes/Routes';

function App() {
  const [fav, setFav] = useState([]);
  const value = useMemo(() => ({ fav, setFav }), [fav, setFav]);

  const onLoad = async () => {
    const favs = await JSON.parse(localStorage.getItem('favs'));
    if (favs === null) {
      setFav([]);
      return;
    }
    setFav(favs);
  };
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      {fav !== null ? (
        <>
          <UserContext.Provider value={value}>
            <Routes />{' '}
          </UserContext.Provider>
        </>
      ) : null}
    </>
  );
}

export default App;
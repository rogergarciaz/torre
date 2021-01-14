import { useState, useEffect, useMemo } from 'react';
import { UsersContext } from '../helpers/Context';
import Routes from './Routes/Routes';

function App() {
  const [loved, setLoved] = useState([]);
  const value = useMemo(() => ({ loved, setLoved }), [loved, setLoved]);

  const onLoad = async () => {
    const users = await JSON.parse(localStorage.getItem('users'));
    if (users === null) {
      setLoved([]);
      return;
    }
    setLoved(users)
  };
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      {loved !== null ? (
        <>
          <UsersContext.Provider value={value}>
            <Routes />{' '}
          </UsersContext.Provider>
        </>
      ) : null}
    </>
  );
}

export default App;
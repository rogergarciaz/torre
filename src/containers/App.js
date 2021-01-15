import { useState, useEffect, useMemo } from 'react';
import { UsersContext } from '../helpers/Context';
import Routes from './Routes/Routes';

function App() {
  const [loved, setLoved] = useState([]);
  const value = useMemo(() => ({ loved, setLoved }), [loved, setLoved]);

  const onLoad = async () => {
    const people = await JSON.parse(localStorage.getItem('users'));
    if (people === null) {
      setLoved([]);
      return;
    }
    setLoved(people)
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
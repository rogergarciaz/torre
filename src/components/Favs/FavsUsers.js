import { UsersContext } from '../../helpers/Context';
import { useContext } from 'react';
import Map from '../Insights/Map';
import Pie from '../Insights/Pie';
import Radar from '../Insights/Radar';
import './Favs.css';

export default function FavsUsers() {
  const { users } = useContext(UsersContext);
  return (
    <div className='container'>
        <div className='text-center mt-5'>
        <div className='container-fluid d-flex justify-content-center mt-5'>
            <Page width={'80%'} height={'100%'} className='slider'>
                {users.length > 0? (users.map(item => {
                    return (
                        <>
                        <Frame size={150} radius={30} background={'transparent'}>
                        <Pie user={users} />
                        </Frame>
                        <Frame size={150} radius={30} background={'transparent'}>
                        <Radar strengths={users} />
                        </Frame>
                        <Frame size={150} radius={30} background={'transparent'}>
                        <Map location={users.locationName} />
                        </Frame>
                        </>
                    )}
                ))
                :
                <h3 className='display-4'>
                    Nothing yet, go search and select some of your favorites
                </h3>
                }
            </Page>
        </div>
            <div className='container-fluid d-flex justify-content-center mt-5'>
                <h3 className='display-4'>Hey, don't forget scroll horizontally</h3>
            </div>
        </div>
    </div>
  );
}

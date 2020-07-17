import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import WarriorCats from './components/WarriorCats'

function App() {

  // const URL = 'https://run.mocky.io/v3/f27f02e9-14c7-4d4d-a08a-9d37d008ba42';

  // const [warriorList, setWarriorList] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = React.useState('');

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setWarriorList(data)
  //       console.log("data", data);
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       setError('fetch failed');
  //       console.log("err", e);
  //     });
  // }, []);

  return (
    <Provider store={store}>
      <WarriorCats />
    </Provider>
  );
}

export default App;

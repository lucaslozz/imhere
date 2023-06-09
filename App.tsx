import { useEffect } from 'react';
import Home from './src/screens/Home';
import { StatusBar } from 'react-native';

import LogRocket from '@logrocket/react-native';

export default function App() {
  useEffect(() => {
    LogRocket.init('l8ivti/moving-music-01');
  }, []);
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './srs/navigations/tab-navigations/BottomTabs';


const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;

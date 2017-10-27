import React from 'react';
import { View, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/index';
import { Header } from './src/components/common';
import LibraryList  from './src/components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex:1 }}>
        <Header headerText='TechStack' />
        <LibraryList />
      </View>
    </Provider>
  );
}
AppRegistry.registerComponent('techStack', () => App);
export default App;

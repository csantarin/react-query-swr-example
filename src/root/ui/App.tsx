import React from 'react';
import { Provider } from 'react-redux';
import store from 'core/store';
import './App.css';

const AppSkeleton = (props: React.PropsWithChildren) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Query + React SWR App</h1>
        <p>Kitchen sink use and study of React Query + React SWR.</p>
      </header>
      <section className="App-section">
        {props.children}
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppSkeleton>
      </AppSkeleton>
    </Provider>
  );
};

export default App;

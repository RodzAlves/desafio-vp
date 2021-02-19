import GlobalStyles from './styles/global';
import Routes from './routes/index';

import AppProvider from './hooks';

const App = () => {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyles />
    </>
  );
};

export default App;

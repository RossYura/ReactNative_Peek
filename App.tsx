import React from 'react';

import {ThemeProvider} from 'styled-components';

import Theme from './src/Theme';
import Navigator from './src/Navigation/Main';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';

// persistor.purge();

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={Theme}>
            <SafeAreaProvider>
              <ActionSheetProvider>
                <Navigator />
              </ActionSheetProvider>
            </SafeAreaProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

module.exports = App;

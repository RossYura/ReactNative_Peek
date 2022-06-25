import {DependencyList, useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';

export const useOnAppStateActive = (
  callback: () => void,
  deps: DependencyList,
) => {
  useEffect(() => {
    callback();
    const handleAppState = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        callback();
      }
    };
    AppState.addEventListener('change', handleAppState);
    return () => AppState.removeEventListener('change', handleAppState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

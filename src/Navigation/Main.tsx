import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {transitionSpec} from './transitions';
import {MainStackParams} from './types';
import SplashContainer from '../Containers/Splash';
import DashboardContainer from '../Containers/Dashboard';
import AmountContainer from '../Containers/Amount';
import EditFieldAutocompleteContainer from '../Containers/Edit-Field-Autocomplete';
import ActionApprovalContainer from '../Containers/Action-Approval';
import EntryListContainer from '../Containers/Entry-List';
import MenuContainer from '../Containers/Menu';
import SettingsContainer from '../Containers/Settings';
import SettingsCurrencyContainer from '../Containers/SettingsCurrency';
import EditEntryContainer from '../Containers/Edit-Entry';
import EditFieldContainer from '../Containers/Edit-Field';
import EditDateContainer from '../Containers/Edit-Date';
import FrequencyContainer from '../Containers/Frequency';
import RegularCashFlowNaming from '../Containers/RegularCashFlowNaming';
import AgreementsContainer from '../Containers/Agreements';
import FAQContainer from '../Containers/FAQ';
import FAQDetailsContainer from '../Containers/FAQDetails';
import {useDispatchActions} from '../Hooks/useDispatchActions';
import * as actions from '../Redux/actions';
import {useOnAppStateActive} from '../Hooks/useOnAppStateActive';
import {useSelector} from 'react-redux';
import {selectSplashVisited} from '../Redux/selectors';
import moment from 'moment';
import AccountSettingsContainer from '../Containers/AccountSettings';
import PBottomSheet from '../Components/PBottomSheet';
import AccountList from '../Components/AccountList';
import EditAccountContainer from '../Containers/EditAccount';

const MainStack = createStackNavigator<MainStackParams>();
const SplashStack = createStackNavigator();

const verticalOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  gestureDirection: 'vertical' as 'vertical',
};

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
  if (params) {
    navigationRef.current?.navigate(name, params);
  } else {
    navigationRef.current?.navigate(name);
  }
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute()?.name || '';
}

const Navigator = () => {
  const splashVisited = useSelector(selectSplashVisited);

  const copyPrevMonthRegularCashFlows = useDispatchActions(
    actions.copyPrevMonthRegularCashFlows,
  );

  useOnAppStateActive(() => {
    copyPrevMonthRegularCashFlows(moment());
  }, [copyPrevMonthRegularCashFlows]);

  return (
    <NavigationContainer ref={navigationRef}>
      {splashVisited ? (
        <>
          <MainStack.Navigator
            screenOptions={{
              headerShown: false,
              transitionSpec,
            }}>
            <MainStack.Screen name="Dashboard" component={DashboardContainer} />
            <MainStack.Screen name="Menu" component={MenuContainer} />
            <MainStack.Screen
              name="Amount"
              component={AmountContainer}
              options={({route}) => (route.params.type ? {} : verticalOptions)}
            />
            <MainStack.Screen
              name="Frequency"
              component={FrequencyContainer}
              options={({route}) => (route.params.type ? {} : verticalOptions)}
            />
            <MainStack.Screen
              name="EditFieldAutocomplete"
              component={EditFieldAutocompleteContainer}
            />
            <MainStack.Screen
              name="ActionApproval"
              component={ActionApprovalContainer}
            />
            <MainStack.Screen name="EntryList" component={EntryListContainer} />
            <MainStack.Screen name="Settings" component={SettingsContainer} />
            <MainStack.Screen
              name="SettingsCurrency"
              component={SettingsCurrencyContainer}
            />
            <MainStack.Screen name="EditEntry" component={EditEntryContainer} />
            <MainStack.Screen
              name="EditField"
              component={EditFieldContainer}
              options={verticalOptions}
            />
            <MainStack.Screen
              name="EditDate"
              component={EditDateContainer}
              options={verticalOptions}
            />
            <MainStack.Screen
              name="RegularCashFlowNaming"
              component={RegularCashFlowNaming}
            />
            <MainStack.Screen
              name="Agreements"
              component={AgreementsContainer}
            />
            <MainStack.Screen name="FAQ" component={FAQContainer} />
            <MainStack.Screen
              name="FAQDetails"
              component={FAQDetailsContainer}
            />
            <MainStack.Screen
              name="AccountSettings"
              component={AccountSettingsContainer}
            />
            <MainStack.Screen
              name="EditAccount"
              component={EditAccountContainer}
            />
          </MainStack.Navigator>
          <PBottomSheet>
            <AccountList />
          </PBottomSheet>
        </>
      ) : (
        <SplashStack.Navigator
          screenOptions={{
            headerShown: false,
            transitionSpec,
          }}>
          <SplashStack.Screen name="Splash" component={SplashContainer} />
        </SplashStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigator;

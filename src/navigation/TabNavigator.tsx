import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BooksListScreen, CharactersListScreen, HistoryScreen } from '../screens';
import { colors } from '../utils/theme';

type Route = RouteProp<Record<string, object | undefined>, string>;

const Tab = createBottomTabNavigator();

const getIconStyle = (routeName: string) => {
  let iconStyle = {
    iconName: 'help-outline',
    iconSize: 35,
  };
  switch (routeName) {
    case 'BooksList':
      iconStyle.iconName = 'menu-book';
      break;
    case 'CharactersList':
      iconStyle.iconName = 'badge';
      break;
    case 'History':
      iconStyle.iconName = 'history';
      iconStyle.iconSize = 37;
      break;
    default:
      break;
  }

  return iconStyle;
};

const navigatorScreenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => {
    const { iconName, iconSize: sizeIcon } = getIconStyle(route.name);
    const iconSize = focused ? sizeIcon * 1.15 : sizeIcon;
    return <MaterialIcon name={iconName} size={iconSize} color={color} />;
  },
  tabBarAllowFontScaling: false,
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.yellow,
  tabBarLabelStyle: {
    fontSize: 13,
  },
  tabBarStyle: {
    backgroundColor: colors.wine,
    height: 68,
    paddingBottom: 6,
    paddingTop: 6,
  },
  tabBarIconStyle: {
    padding: 0,
  },
  headerShown: false,
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen name="BooksList" component={BooksListScreen} options={{ title: 'Books' }} />
      <Tab.Screen
        name="CharactersList"
        component={CharactersListScreen}
        options={{ title: 'Characters' }}
      />
      <Tab.Screen name="History" component={HistoryScreen} options={{ title: 'History' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

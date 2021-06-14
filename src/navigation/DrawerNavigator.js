import { FontAwesome5 } from '@expo/vector-icons';
import { Main } from '../screens/Main';
import { Photos } from '../screens/Photos';
import { Diary } from './../screens/Diary';
import { Goals } from './../screens/Goals';
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {

  const getScreenOptions = (title, iconName) => {
    return {
      title: title,
      drawerIcon: ({size}) => (
        <FontAwesome5
           name={iconName}
           size={size}
           color={'#000'}
        />
     )
    }
  }

  return (
    <Drawer.Navigator initialRouteName="Main">

    <Drawer.Screen name="Main" component={Main} options={getScreenOptions('Main', 'home')}/>
    
    <Drawer.Screen name="Diary" component={Diary} options={getScreenOptions('Diary', 'calendar-plus')} />
    <Drawer.Screen name="Photos" component={Photos} options={getScreenOptions('Photos', 'image')} />
    <Drawer.Screen name="Fishing goals" component={Goals} options={getScreenOptions('Goals', 'bullseye')} />


  </Drawer.Navigator>
  )
}
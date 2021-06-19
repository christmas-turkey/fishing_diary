import { FontAwesome5 } from '@expo/vector-icons';
import { Main } from '../screens/Main';
import { Photos } from '../screens/Photos';
import { Diary } from './../screens/Diary';
import { Goals } from './../screens/Goals';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react';
import { AddGoal } from './../screens/AddGoal';
import { AddDiaryNote } from './../screens/AddDiaryNote';
import { DetailDiaryNote } from './../screens/DetailDiaryNote';

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
    <Drawer.Navigator
       initialRouteName="Main"
       drawerContent={props => {

        const hiddenRouteNames = ['Add diary note', 'Add goal', 'Detail diary note']
        
        const filteredProps = {
          ...props,
          state: {
            ...props.state,
            routeNames: props.state.routeNames.filter(routeName => {
              !hiddenRouteNames.includes(routeName);
            }),
            routes: props.state.routes.filter(route => !hiddenRouteNames.includes(route.name)),
          },
        };

        return (
          <DrawerContentScrollView {...filteredProps}>
            <DrawerItemList {...filteredProps} />
          </DrawerContentScrollView>
        );
      }}>

    <Drawer.Screen name="Main" component={Main} options={getScreenOptions('Main', 'home')}/>
    
    <Drawer.Screen name="Diary" component={Diary} options={getScreenOptions('Diary', 'calendar-plus')} />
    <Drawer.Screen name="Photos" component={Photos} options={getScreenOptions('Photos', 'image')} />
    <Drawer.Screen name="Fishing goals" component={Goals} options={getScreenOptions('Goals', 'bullseye')} />
    <Drawer.Screen name="Add diary note" component={AddDiaryNote} />
    <Drawer.Screen name="Add goal" component={AddGoal} />
    <Drawer.Screen name="Detail diary note" component={DetailDiaryNote} />

  </Drawer.Navigator>
  )
}
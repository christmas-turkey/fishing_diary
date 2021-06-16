import { DrawerActions } from '@react-navigation/routers'
import React from 'react'

export const navigationRef = React.createRef()

export function openDrawer() {
  navigationRef.current.dispatch(DrawerActions.toggleDrawer())
}

export function navigate(route) {
  navigationRef.current.navigate(route)
}
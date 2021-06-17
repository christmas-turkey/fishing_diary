import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';

export const CustomFlatList = ({refreshEvent, ...props}) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      refreshEvent()
      setRefreshing(false)
    }, 1000)
  }

  return (
    <FlatList refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      {...props} 
    />
  )
}
import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading } = useRepositories();
  
  if(loading){
    return <Text>loading...</Text>;
  }
  
  const repositoryNodes = data.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : [];
    
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      key={item => item.id}
      renderItem={({ item }) => (
        <RepositoryItem {...item} />
      )}
    />
  );
};

export default RepositoryList;

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../Text';
import NumberAndText from './NumberAndText';
import Tag from './Tag';


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  subContainer: {
    flexDirection: 'row',
    padding: 10
  },
  topSubContainer: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'space-between',
    alignItems: 'flex-start',
    paddingRight: 50
  },
  botSubContainer: {
    justifyContent: 'space-evenly'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15
  },
  text: {
    marginBottom: 6
  }

});

const RepositoryItem = (props) => (
  <View style={styles.container}>
    <View style={styles.subContainer}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      <View style={styles.topSubContainer}>
        <Text style={styles.text} fontWeight='bold' >{props.fullName}</Text>
        <Text style={styles.text} >{props.description}</Text>
        <Tag text={props.language}/>
      </View>
    </View>
    <View style={[styles.subContainer, styles.botSubContainer]}>
      <NumberAndText number={props.stargazersCount} text='Stars'/>
      <NumberAndText number={props.forksCount} text='Forks'/>
      <NumberAndText number={props.reviewCount} text='Reviews'/>
      <NumberAndText number={props.ratingAverage} text='Rating'/>
    </View>
  </View>
);

export default RepositoryItem;
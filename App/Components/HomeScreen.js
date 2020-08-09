import React,{useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';
import images from '../Imgaes/images';
import categories from '../Data/categories';
import TextStyle from '../Providers/Text'

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  return (

    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#343434'}/>

      <View style={styles.header}>
        <Text style={styles.text}>Hello {""}
          <Text style={styles.textName}>Jackie Nguyen</Text>
          {'\n'}
          <Text>Best game for today</Text>
        </Text>
        <Image source={images.logo} style={styles.logo}/>
      </View>

      <ScrollView style={styles.categories} horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <TouchableOpacity style={styles.category} key={index}>
              <Text style={styles.categoryName} selected={selectedCategory === category ? true : false}>{category}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16
  },
  text: {
    fontSize: 18,
    color: '#c6c1c1'
  },
  textName: {
    fontSize: 25,
    color: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  categories: {
    marginTop: 32,
    flexGrow: 0
  },
  category: {
    alignItems: 'center',
    margin: 16,
    height: 32
  },
  categoryName: {
  }
})

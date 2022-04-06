import React from 'react';

import {Text, Image, TouchableOpacity, View, StyleSheet} from 'react-native';

export default function ProductCard(props) {
  return (
    <>
      <TouchableOpacity style={style.card}>
        <View>
          <Image
            style={style.img}
            source={{
              uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
            }}
          />
        </View>
        <View style={style.resNrating}>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              {props.title}
            </Text>
            <Text>{props.dishTitle}</Text>
            <Text style={{color: 'orange'}}>{props.price}</Text>
          </View>
          <View style={style.rating}>
            <Text style={{color: '#FFFF'}}>{props.rating}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  img: {
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  card: {
    width: '88%',
    borderRadius: 20,
    backgroundColor: '#FFFF',
  },
  resNrating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  rating: {
    backgroundColor: 'green',
    width: 45,
    height: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginRight: 20,
  },
});

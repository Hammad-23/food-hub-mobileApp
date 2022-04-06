import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TouchableOpacityBase,
  FlatList,
} from 'react-native';
import Input from '../../components/input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductCard from '../../components/productCard';

export default function Home() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Beef Steak',
      price: '$200',
      dishTitle: 'Italian, Karachi',
      rating: '4.5',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      price: '$300',
      dishTitle: 'Italian, Karachi',
      rating: '4.5',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      price: '$250',
      dishTitle: 'Italian, Karachi',
      rating: '4.5',
    },
  ];

  const Item = ({title, price, dishTitle, rating}) => (
    <View style={style.content}>
      <ProductCard
        dishTitle={dishTitle}
        title={title}
        price={price}
        rating={rating}
      />
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      dishTitle={item.dishTitle}
      price={item.price}
      rating={item.rating}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={style.header}>
          <View style={style.headerBar}>
            <View style={{width: '77%', marginLeft: 10}}>
              <Input title="Search" />
            </View>
            <View style={{marginRight: 10}}>
              <TouchableOpacity style={style.searchBtn}>
                <AntDesign name="search1" color="black" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  bg: {
    resizeMode: 'contain',
    height: '100%',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#cd432f',
    height: 140,
    justifyContent: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  searchBtn: {
    backgroundColor: '#FFFF',
    height: 50,
    width: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  img: {
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  card: {
    width: '85%',
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

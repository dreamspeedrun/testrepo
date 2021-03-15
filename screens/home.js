import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, Button, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 




import Header from './headers';


export default function HomeScreen() {


    const {width, height} = Dimensions.get("window");
  
    const [cartItems, setcartItems] = useState([]);

    const addItem = (product) => {
        const exist = cartItems.find((x) => x.key === product.key);

        if (exist) {
            setcartItems(
                cartItems.map((x) => 
                    x.key === product.key ? { ...exist, qty: exist.qty + 1} : x
                )
            );

        } else {
            setcartItems([...cartItems, { ...product, qty: 1}]);
        }
    };
    

  
    // Dummy Data
    const [products] = useState([
      {
        'name':'Blue Cap',
        'cost': 10.99,
        'image': 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'rating': 4.2,
        'key': '1'
      },
  
      {
        'name':'Levi Jeans',
        'cost': 29.99,
        'image': 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1226&q=80',
        'rating': 4.1,
        'key': '2'
      },
  
      {
        'name':'Leather Jacket',
        'cost': 59.99,
        'image': 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
        'rating': 3.8,
        'key': '3'
      },
  
      {
        'name':'Skull Rose Hoodie',
        'cost': 29.99,
        'image': 'https://images.unsplash.com/photo-1609873814058-a8928924184a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'rating': 4.4,
        'key': '4'
      },
  
      {
        'name':'Vans Shoes',
        'cost': 49.99,
        'image': 'https://images.unsplash.com/photo-1496516260273-d1ee79af5278?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'rating': 4.8,
        'key': '5'
      }
  
  
    ]);
  
    return (
      
      <View style= {{flex: 1}}>
        <Header cartItems={cartItems}/> 
        <View style= {{flex: 1}}>
          <FlatList
            data = {products}
            renderItem ={({item}) => (
              <View style= {{flex: 1, padding:10}}>
                <Image
                source = {{uri: item.image}}
                resizeMode = 'cover'
                style = {{
                  width: '100%',
                  marginRight: 5,
                  height: 200,
                  borderRadius: 30
                }}
                />
              
                <View
                  style = {{
                    poistion: 'absolute',
                    bottom: 50,
                    height: 50,
                    right: 0,
                    width: width * 0.3,
                    backgroundColor: 'white',
                    borderTopRightRadius: 30,
                    borderBottomLeftRadius:30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...styles.shadow
                  }}
                
                >
                  <Text>{item.name}</Text>
                </View>
  
  
                <View style= {{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                bottom:25}}>    
                  <Button 
                  title ='Add To Cart' color= 'orange'
                  onPress = {() => Alert.alert('Successfully added ' + item.name + ' to your cart!', 'You can check your items by tapping the cart icon', [{text: 'Continue Shopping', onPress:addItem(item)}])}  
                  />
                  <AntDesign name="star" size={24} color="gold" />
                  <Text style = {{fontSize: 18, right: 10}}>{item.rating}</Text>
                  <MaterialIcons name="attach-money" size={24} color="green" />
                  <Text style = {{fontSize: 18, right: 20}}>{item.cost}</Text>
                </View>
                
              </View>

              
  
            )}
          />
        </View>
                    
      </View>
    
  
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dodgerblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });


import React, { Component, useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';


// import icons
import Icon from 'react-native-vector-icons/Ionicons';




export default function CartScreen({route}) {
    
    var { width } = Dimensions.get("window")

    let data = route.params;
    console.log(data.cartItems);

    let cleaned_data = data.cartItems;
    // //console.log(json);

    const [updateData, setupdateData] = useState(cleaned_data);  // this will be the final array used to add/remove items
    
    const addItem = (product) => {
        const exist = updateData.find((x) => x.key === product.key);

        if (exist) {
            setupdateData(
                updateData.map((x) => 
                    x.key === product.key ? { ...exist, qty: exist.qty + 1} : x
                )
            );

        } else {
            setupdateData([...updateData, { ...product, qty: 1}]);
            
        }
    };


    const removeItem = (product) => {
        const exist = updateData.find((x) => x.key === product.key);
        if (exist.qty === 1) {
          setupdateData(updateData.filter((x) => x.key !== product.key));
        } else {
          setupdateData(
            updateData.map((x) =>
              x.key === product.key ? { ...exist, qty: exist.qty - 1 } : x
            )
          );

        }
      };
    
    
    
    var totalItems = 0;  // keep track of total number of items
    var totalPrice = 0;  // final price at checkout

     for(var i = 0; i < updateData.length; i++) {
          var obj = updateData[i];
          totalItems += obj.qty;
          totalPrice += obj.qty * obj.cost
          console.log(obj);
     }

    

    return (
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
           <View style={{height:20}} />
           <Text style={{fontSize:28, color:"gray"}}> Total Number of Items : {totalItems}  </Text>
           <View style={{height:10}} />

           <FlatList
            data = {updateData}
            renderItem ={({item}) =>(
            <View style={{flex:1}}>
             <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
               <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: item.image}} />
               <View style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
                 <View>
                   <Text style={{fontWeight:"bold", fontSize:20}}>{item.name}</Text>
                   <Text>Description of Item </Text>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontWeight:'bold',color:"orange",fontSize:20}}>${item.cost}</Text>
                   <View style={{flexDirection:'row', alignItems:'center'}}>
                     <TouchableOpacity onPress = {() => removeItem(item)}>
                       <Icon name="ios-remove-circle" size={30} color={'orange'}/>
                     </TouchableOpacity>
                     <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>{item.qty}</Text>
                     <TouchableOpacity onPress = {() => addItem(item)}>
                       <Icon name="ios-add-circle" size={30} color={'orange'} />
                     </TouchableOpacity>
                   </View>
                 </View>
               </View>
             </View>
  
           </View>
            )}
           />
  
           <View style={{height:20}} />
  
         <TouchableOpacity style={{
             backgroundColor:"orange",
             width:width-40,
             alignItems:'center',
             padding:10,
             borderRadius:5
           }}>
           <Text style={{
               fontSize:24,
               fontWeight:"bold",
               color:'white'
             }}>
             CHECKOUT: {totalPrice}
           </Text>
         </TouchableOpacity>
  
         <View style={{height:20}} />
  
  
        </View>
      );

  }

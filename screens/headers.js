import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';   // importing shopping cart icon from vector-icons library

// Custom Header Component
import { useNavigation } from '@react-navigation/native';
import {updateData} from './cart';



export default function Header(props) {

    const navigation = useNavigation();
    const {cartItems} = props;

    var totalItems = 0;

     for(var i = 0; i < cartItems.length; i++) {
          var obj = cartItems[i];
          totalItems += obj.qty;
     }


    return (

        <ImageBackground source = {require('../assets/orangebg.jpg')} style= {styles.header}>
            <Text style= {styles.text}> My Shopping App </Text>
            
            <View style= {styles.shoppingicon}>

                <TouchableOpacity onPress= {() => navigation.push("My Cart", {cartItems})}>
                    <Feather name="shopping-cart" size={32} color="black"/>
                    <View style = {{
                        position: 'absolute',
                        height: 30,
                        width: 30, 
                        borderRadius: 15,
                        backgroundColor: 'rgba(255,255, 255, 0.6)',
                        right: 20,
                        bottom: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2000
                    }}>
                        <Text> {totalItems}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ImageBackground>

    )

}

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        height: 80,
        paddingTop: 40,
        justifyContent: 'center',
        backgroundColor: 'coral'
    },

    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        right: -20

    },

    shoppingicon: {
        right: -80
        
        
        
    }

})
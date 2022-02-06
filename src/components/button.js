import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CustomButton(props) {
  const [icon, setIcon] = useState(false);
  useEffect(() => {
    setIcon(props.show);
  }, []);
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: props.bgColor,
          borderRadius: props.radius,
          width: props.width,
          height: props.height,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {icon ? (
          <View
            style={{
              backgroundColor: '#FFFF',
              height: 25,
              width: 25,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              marginRight: 5,
            }}>
            <props.iconName
              name={props.iconTitle}
              size={15}
              color={props.iconColor}
            />
          </View>
        ) : (
          false
        )}

        <Text style={{color: props.txtColor, fontWeight: 'bold'}}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({});

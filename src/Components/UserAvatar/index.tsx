import React from 'react';
import {GestureResponderEvent, Pressable, Image} from 'react-native';
import Box from '../../Components/Box';
import User from '../../Icons/User';
import PlusCircle from '../../Icons/PlusCircle';

export interface UserAvatarProps {
  uri?: string;
  onAvatarPress(event: GestureResponderEvent): void;
}

const UserAvatar = ({uri, onAvatarPress}: UserAvatarProps) => {
  const imageStyle = {width: 100, height: 100, borderRadius: 72.5};
  return (
    <Pressable onPress={onAvatarPress}>
      <Box
        height="138px"
        width="138px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="8px">
        {uri && uri !== '' ? (
          <Image source={{uri}} style={imageStyle} />
        ) : (
          <User width="125px" height="125px" color={'#FFFFFFB2'} />
        )}
        <Box
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Box
            width="28px"
            height="28px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="14px"
            backgroundColor="#FFFFFF"
            marginTop="72px"
            marginLeft="60px">
            <PlusCircle width="25px" height="25px" />
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default UserAvatar;

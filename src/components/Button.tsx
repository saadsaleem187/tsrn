import React, {FunctionComponent} from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

enum Size {
  SMALL = 10,
  MEDIUM = 20,
  LARGE = 30,
}

type Props = {
  label?: string;
  onPress?: (e: GestureResponderEvent) => void;
  size?: Size;
  rounded?: boolean;
  btnStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const Button: FunctionComponent<Props> = ({
  label,
  onPress,
  size = Size.SMALL,
  rounded = false,
  btnStyle,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        btnStyle,
        {
          backgroundColor: 'orange',
          padding: size,
          borderRadius: rounded ? 10 : 0,
        },
      ]}>
      <Text style={[textStyle, {color: '#ffffff'}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

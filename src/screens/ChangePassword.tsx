import {RouteProp, useRoute} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../navigation';

type Props = Record<string, number>;

type ChangePasswordRouteProp = RouteProp<RootStackParamList, 'ChangePassword'>;

const ChangePassword: FunctionComponent<Props> = ({}: Props) => {
  const route = useRoute<ChangePasswordRouteProp>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>ChangePassword</Text>
    </View>
  );
};

export default ChangePassword;

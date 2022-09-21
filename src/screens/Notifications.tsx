import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';

type Props = Record<string, number>;

const Notifications: FunctionComponent<Props> = ({}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications</Text>
    </View>
  );
};

export default Notifications;

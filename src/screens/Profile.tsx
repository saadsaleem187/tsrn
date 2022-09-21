import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {Button} from '../components';
import {RootNavigationProp} from '../navigation';

type Props = Record<string, number>;

const Profile: FunctionComponent<Props> = ({}: Props) => {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        label="Change Password"
        onPress={() => navigation.navigate('ChangePassword', {userId: 123})}
      />
    </View>
  );
};

export default Profile;

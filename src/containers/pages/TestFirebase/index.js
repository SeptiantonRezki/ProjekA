import * as React from 'react';
import { Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const TestFirebase = () => {
  const user = auth().currentUser;

  return <Text>Welcome {user.email}</Text>;
}

export default TestFirebase;
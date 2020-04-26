import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Login from '../Login';
import Register from '../Register';



const App = () => (
  <NativeRouter>
    <View style={{flex : 1}}>
      
      <View style={{flex : 1, flexDirection: 'row'}}>
        <Route exact path="/" component={Login} />
        <Route path="/about" component={Register} />
      </View>
      
      <View style={{height:50,  flexDirection : 'row'}}>
          <Link to="/" style ={{flex : 1, justifyContent : 'center', alignItems :'center', backgroundColor : '#ababba'}}>
            <Text>Login</Text>
          </Link>
          <Link to="/about" style ={{flex : 1, justifyContent : 'center', alignItems :'center'}}>
            <Text>Register</Text>
          </Link>
      </View>

    </View>
  </NativeRouter>
);


export default App;

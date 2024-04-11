import React, { useState } from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './JediButtonSyles';
import { JediTextInput } from '../JediTextInput/JediTextInput';
import generatePassword from '../../services/passwordService';
 
import * as Clipboard from 'expo-clipboard';


export function JediButton() {
  
  const[password, setPassword] = useState<string>('');
  
  function handleGenerate(){
    let generateToken = generatePassword();
    setPassword(generateToken);
  }

  function handleCopy(){
    Clipboard.setStringAsync(password);
  }

  return (
    <>

      <JediTextInput password={password}/>

      <Pressable
        onPress={handleGenerate}
        style={styles.button}
      >
        <Text style={styles.text}>
          Generate
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={handleCopy}
      >
        <Text style={styles.text}>
          Copy Password
        </Text>
      </Pressable>
    </>
  );
}
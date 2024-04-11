import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './JediTextInputStyles';

interface JediTextInputProps{
  password: string;

}

export function JediTextInput(props : JediTextInputProps) {
  return (
    <TextInput
        style={styles.inputer}
        placeholder="Password!"
        value={props.password}
    />
  );
}
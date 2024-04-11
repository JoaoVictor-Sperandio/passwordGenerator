import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './JediLogoStyles';
import jediLogo from '../../../assets/images-jedi/jedi-order_1.png'

export function JediLogo() {
  return (
    <>
        <Text style={styles.title}>
            JEDI PASS GENERATOR
        </Text>
        <Image
            source={jediLogo}
            style={styles.logo}
        />
    </>
  );
}
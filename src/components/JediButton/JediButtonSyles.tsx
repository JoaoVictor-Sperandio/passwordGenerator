import { StyleSheet } from 'react-native';
/* 
  Color Palette:
  #3ED085 green
  #90F3B7 light green
  #244734 dark green
  #7C4E09 dark brown
  #998B71 light brown
  #C4AC8B lightest brown or beige
   */
export const styles = StyleSheet.create({
  button:{
    paddingVertical: 10,
    paddingHorizontal: 38,
    margin: 15,
    borderWidth: 1.5,
    backgroundColor: '#90F3B7',
    padding: 10,
    borderRadius: 25,
    elevation: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#244734',
  }
});
import { StyleSheet } from "react-native";
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
    appContainer: {
      flex: 1,
      backgroundColor: '#998b71',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 30,
      paddingTop: 30,
      backgroundColor: '#c4ac8b'
    },
    inputContainer: {
      width: '80%',
      flexDirection: 'column',
      alignItems: 'center',
    }
  });


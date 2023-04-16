import { ThemeType } from 'react-native-magnus'

//Phil's exporting works, you can see the object. The issue is in importation.

interface Theme extends ThemeType {}

export default {
  default: <Theme>{
    name: 'default',
    colors: {
			text100: "#0A0438",
			text200: "black",
			bg100: "#D0E7E0",
    },
    fontSize: {
      bigText100: 40,
    },

  },
  // other user types
}
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const ImageCarousel = (props) => {
  /*
  Issue:
  If you hardcode a URL directly into the Image component, it renders correctly.
  Also if you render from an object property (like the ProductPreview)
  that has been passed through props, it renders correctly. 
  If you try to render from an array of strings directly you get an error:

  Warning: Failed prop type: Invalid prop `source` supplied to 
  `Image`, expected one of type [string, number].

  1. Make ImageCarousel component and pass image list to it.

  */

  return (
    <>
      <Text></Text>
      <View>
        <FlatList
          data={props.product.images}
          renderItem={({ item }) => <Image source={{ uri: item }} />}
          style={styles.image}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageCarousel;

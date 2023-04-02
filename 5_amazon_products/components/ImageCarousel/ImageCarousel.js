import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

const ImageCarousel = (props) => {
  const windowWidth = useWindowDimensions().width;
  //Docs: useWindowDimensions hook automatically updates width and height values when viewport size changes.
  /* 
  Key lessons:
  Use props as a base level for passing objects
  Image components need to be given a height and a width
  
  Converting FlatList to ImageCarousel:
  1. Add horizontal attribute
  2. Configure the snap interval with useWindowDimensions to move at correct speed.
  3. Make dot indicator that matches with images (not implimented)
 */

  return (
    <>
      <View>
        <FlatList
          data={props.images}
          renderItem={({ item }) => (
            <Image
              //uses width of the window itself as a styles prop
              style={[styles.image, { width: windowWidth - 40 }]}
              source={{ uri: item }}
            />
          )}
          //Make the list horizontal like a carousel, includes scrollbar
          horizontal
          //Remove indicator
          showsHorizontalScrollIndicator={false}
          //Configure snap alignment for images, making them snap in position
          snapToInterval={windowWidth - 20}
          //Point to snap to on image
          snapToAlignment={"center"}
          //Make the movement clean and nice visually
          decelerationRate={"fast"}
        />

        {/* Proper Implementation:  https://github.com/Savinvadim1312/AmazonClone/blob/main/src/components/ImageCarousel/index.tsx 
        Principle: 
        1. Use the list of images indexes to create a current index indicator.
        2. Use the current index to change the style of current dot view
        */}

        <View style={styles.dots}>
          <View style={[styles.dot, styles.selectedDot]}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 10,
    height: 250,
    resizeMode: "contain",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
  },
  selectedDot: {
    borderColor: "#645F5F",
    backgroundColor: "#645F5F",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#c9c9c9",
    backgroundColor: "#c9c9c9",
    margin: 5,
  },
});

export default ImageCarousel;

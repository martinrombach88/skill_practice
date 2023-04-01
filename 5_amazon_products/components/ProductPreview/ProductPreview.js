import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProductPreview = (props) => {
  const product = props.product.item;
  return (
    <View style={styles.previewContainer}>
      <Image style={styles.previewImage} source={{ uri: product.image }} />

      <View style={styles.previewDetails}>
        <Pressable onPress={() => props.navigation.navigate("Product Page")}>
          <Text style={styles.previewTitle} numberOfLines={3}>
            {product.title}
          </Text>
          <View style={styles.previewRating}>
            <FontAwesome name="star" size={20} style={styles.previewStar} />
            <FontAwesome name="star" size={20} style={styles.previewStar} />
            <FontAwesome name="star" size={20} style={styles.previewStar} />
            <FontAwesome name="star" size={20} style={styles.previewStar} />
            <FontAwesome name="star-o" size={20} color="black" />
            <Text style={styles.previewRatingNumber}>{product.ratings}</Text>
          </View>
          <View style={styles.previewPrice}>
            <Text style={styles.previewPriceText}>from</Text>
            <Text style={styles.previewPriceNumber}>${product.price}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    flexDirection: "row",
    borderRadius: 8,
    borderColor: "#EBEBEB",
    borderWidth: 2,
    marginVertical: 2,
  },
  previewImage: {
    flex: 2,
    height: 150,
    resizeMode: "contain",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  previewDetails: {
    flex: 3,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  previewTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  previewRating: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  previewRatingNumber: {
    paddingHorizontal: 4,
    fontSize: 12,
    color: "grey",
  },
  previewStar: {
    color: "#E47911",
  },
  previewEmptyStar: {
    color: "black",
  },
  previewPrice: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  previewPriceText: {
    fontWeight: "bold",
  },
  previewPriceNumber: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 4,
  },
});

export default ProductPreview;

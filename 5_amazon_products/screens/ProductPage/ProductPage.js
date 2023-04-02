import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import product from "../../components/product.js";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

const ProductPage = ({ navigation }) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>{product.title}</Text>

      {/* Image Carousel */}
      <ImageCarousel product={product} />

      {/* Dot with current image */}
      {/* Option selector */}
      {/* Price */}
      {/* Arrival Date */}
      {/* Quantity */}
      {/* Buttons */}
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: 100,
    height: 100,
  },
});
export default ProductPage;

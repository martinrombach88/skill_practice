import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import product from "../../components/product.js";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { EvilIcons } from "@expo/vector-icons";

const ProductPage = ({ navigation }) => {
  return (
    <View style={styles.product}>
      <Header navigation={navigation} />
      <Text style={[styles.productText, styles.productTitle]}>
        {product.title}
      </Text>

      <ImageCarousel images={product.images} />
      {/* Option selector */}

      <View style={styles.productPrice}>
        <Text style={styles.productPriceDollar}>$</Text>
        <Text style={styles.productPriceNumber}>{product.price}</Text>
      </View>
      <View>
        <Text style={styles.productText}>{product.details}</Text>
      </View>
      <View
        style={[styles.productText, styles.productRow, styles.productArrival]}
      >
        <Text>Arrives: </Text>
        <Text style={styles.boldText}>{product.arrival}</Text>
      </View>
      <View style={styles.productRow}>
        <EvilIcons name="location" size={34} color="black" />
        <Text style={styles.blueText}>Deliver to {product.location}</Text>
      </View>
      {product.quantity < 10 && (
        <Text style={[styles.productQuantityText, styles.productText]}>
          Only {product.quantity} left in stock, order soon.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: "white",
  },
  productRow: {
    flexDirection: "row",
  },
  productArrival: {
    paddingTop: 30,
  },
  productText: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  boldText: {
    fontWeight: "bold",
  },
  productTitle: {
    fontSize: 16,
  },
  productPrice: {
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  productPriceDollar: {
    padding: 2,
    fontSize: 20,
  },
  productPriceNumber: {
    fontSize: 30,
  },
  blueText: {
    color: "#3F98E7",
  },
  productQuantityText: {
    fontWeight: "bold",
    color: "#C26F27",
    fontSize: 16,
  },
});
export default ProductPage;

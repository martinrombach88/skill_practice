import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header/Header";
import product from "../../components/product.js";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

const ProductPage = ({ navigation }) => {
  let quantity = 1;

  const add = () => {
    console.warn("Added to Cart");
  };

  const buy = () => {
    console.warn("Moving to Payment Screen");
  };

  return (
    <View style={styles.product}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text style={[styles.productText, styles.productTitle]}>
          {product.title}
        </Text>

        {/* Image Carousel, styling implemented. Later real code can be implemented in time */}
        <ImageCarousel images={product.images} />

        {/* Option selector - low priority, later if there's time*/}
        {/* <View>
        <LinearGradient
          style={styles.productType}
          colors={["#FFFFFF", "#B9B9B9"]}
        >
          <Text>Button </Text>
        </LinearGradient>
      </View> */}

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
        {product.stock < 10 && (
          <Text style={[styles.productStockText, styles.productText]}>
            Only {product.stock} left in stock, order soon.
          </Text>
        )}

        <Pressable>
          <View style={styles.productQuantity}>
            <Text style={styles.productQuantityText}>Qty: {quantity}</Text>
            <AntDesign name="down" size={16} color="black" />
          </View>
        </Pressable>

        <Pressable onPress={add}>
          <View>
            <LinearGradient
              style={styles.buyProduct}
              colors={["#F5D693", "#EDC151"]}
            >
              <Text>Add To Cart </Text>
            </LinearGradient>
          </View>
        </Pressable>

        <Pressable onPress={buy}>
          <View>
            <LinearGradient
              style={styles.buyProduct}
              colors={["#F5D2AA", "#EC9224"]}
            >
              <Text>Buy Now </Text>
            </LinearGradient>
          </View>
        </Pressable>

        <View style={styles.productDescription}>
          <Text  >{product.description}</Text>
        </View>
      </ScrollView>
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
    paddingTop: 25,
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
  productStockText: {
    fontWeight: "bold",
    color: "#C26F27",
    fontSize: 16,
  },
  productQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#CFCFD1",
    backgroundColor: "#F0F0F0",
    width: 75,
    padding: 4,
    marginHorizontal: 8,
    marginVertical: 12,
  },
  productQuantityText: {
    fontSize: 14,
  },
  buyProduct: {
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#CF9E63",
    borderRadius: 4,
    marginHorizontal: 8,
    marginVertical: 8,
  },
	productDescription: {
		paddingHorizontal: 8,
		paddingVertical: 8,
	}
});
export default ProductPage;

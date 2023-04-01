import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductPreview from "../../components/ProductPreview/ProductPreview.js";
import Header from "../../components/Header/Header.js";
import products from "../../components/products.js";

const SearchPage = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Header navigation={navigation} />
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>RESULTS</Text>
        <FlatList
          data={products}
          renderItem={(product) => (
            <ProductPreview product={product} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
  },
  //Search container has pixel height because
  //flex causes visual errors when search is triggered

  resultsContainer: {
    flex: 7,
    paddingHorizontal: 10,
  },
  resultsTitle: {
    paddingVertical: 6,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 2,
  },
});

export default SearchPage;

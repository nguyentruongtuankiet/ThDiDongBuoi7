import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function API_Screen_01() {
  const route = useRoute();
  const selectedDataCart = route.params ? route.params.selectedCart : [];
  const selectedDataObj = route.params ? route.params.selectedDataObj : [];
  const [data, setData] = useState(selectedDataObj);
  const [cart, setCart] = useState(selectedDataCart);

  const navigation = useNavigation();

  const combinedArray = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < cart.length; j++) {
      if (parseInt(data[i].id) === parseInt(cart[j].id)) {
        combinedArray.push({ ...data[i], quantity: cart[j].quantity });
      }
    }
  }
  console.log(combinedArray);
  const [datacart, setDatacart] = useState(combinedArray);

  const getTotalPriceForCart = () => {
    let totalPrice = 0;
    for (const cartItem of cart) {
      const product = data.find((item) => item.id === cartItem.id);
      if (product) {
        totalPrice +=
          parseInt(product.price.replace("$", "")) * cartItem.quantity;
      }
    }
    return totalPrice;
  };

  const handleDecreaseQuantity = (productId) => {
    setDatacart((datacart) => {
      return datacart.map((item) => {
        if (item.id === productId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const handleIncreaseQuantity = (productId) => {
    setDatacart((datacart) => {
      return datacart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 5,
          justifyContent: "space-between",
          height: 90,
          width: 347,
          backgroundColor: "#00BDD6",
          borderRadius: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginTop: 13,
            marginLeft: 9,
            height: 70,
            width: 140,
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            CAFE DELIVERY
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            Order #18
          </Text>
        </View>
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Inter",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 700,
            marginRight: 15,
          }}
        >
          $5
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          justifyContent: "space-between",
          height: 90,
          width: 347,
          backgroundColor: "#8353E2",
          borderRadius: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginTop: 13,
            marginLeft: 9,
            height: 70,
            width: 140,
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            CAFE
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            Order #18
          </Text>
        </View>
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Inter",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 700,
            marginRight: 15,
          }}
        >
          ${getTotalPriceForCart()}
        </Text>
      </View>
      <FlatList
        data={datacart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 5,
              marginBottom: 10,
              height: 55,
              width: 340,
              borderWidth: 1,
              borderColor: "#BCC1CA",
              justifyContent: "space-between",
              flexDirection: "row",
              borderRadius: 5,
            }}
          >
            <View style={{ height: 55, width: 155, flexDirection: "row" }}>
              <Image
                source={{ uri: item.image }}
                style={{ height: 53, width: 53 }}
              />
              <View
                style={{
                  height: 53,
                  width: 93,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    marginLeft: 10,
                    justifyContent: "center",
                    color: "#171A1F",
                    fontFamily: "Inter",
                    fontSize: 16,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: 26,
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    marginLeft: 5,
                    height: 16,
                    width: 53,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={require("../image/price.png")}
                    style={{ height: 14, width: 14 }}
                  />
                  <Text style={{ height: 14, width: 20, fontSize: 10 }}>
                    {item.price}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 53,
                width: 90,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginRight: 15,
              }}
            >
              <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
                <Image
                  style={{ height: 18, width: 18 }}
                  source={require("../image/tru.png")}
                />
              </TouchableOpacity>

              <Text>{item.quantity}</Text>

              <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
                <Image
                  style={{ height: 18, width: 18 }}
                  source={require("../image/cong.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
       <TouchableOpacity >
        <View
          style={{
            height: 35,
            width: 340,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EFB034",
            marginTop: 40,
            marginBottom: 20,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: 15,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: 26,
            }}
          >
            PAY NOW
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

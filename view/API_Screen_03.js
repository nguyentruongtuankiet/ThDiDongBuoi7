import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function API_Screen_03() {
  const route = useRoute();
  const selectedData = route.params ? route.params.selectedData : [];
  const [data, setData] = useState(selectedData);
  const navigation = useNavigation();
  const [quantities, setQuantities] = useState(data[0].drinks.map(() => 0));

  const [cart, setCart] = useState([]);

  const handleDecreaseQuantity = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] = quantities[index] - 1;
      setQuantities(newQuantities);

      // Cập nhật cart bằng cách loại bỏ phần tử khỏi cart nếu số lượng là 0
      if (newQuantities[index] === 0) {
        const updatedCart = cart.filter(
          (item) => item.id !== data[0].drinks[index].id
        );
        setCart(updatedCart);
      } else {
        const item = {
          id: data[0].drinks[index].id,
          quantity: newQuantities[index],
        };
        const updatedCart = cart.filter(
          (item) => item.id !== data[0].drinks[index].id
        );
        setCart([...updatedCart, item]);
      }
    }
  };
  console.log(cart);
  const handleIncreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = quantities[index] + 1;
    setQuantities(newQuantities);

    // Thêm phần tử vào cart nếu số lượng lớn hơn 0
    if (newQuantities[index] > 0) {
      const item = {
        id: data[0].drinks[index].id,
        quantity: newQuantities[index],
      };
      const updatedCart = cart.filter(
        (item) => item.id !== data[0].drinks[index].id
      );
      setCart([...updatedCart, item]);
    }
  };
  const handelScreen_04 = () => {
    navigation.navigate("API_Screen_04", {
      selectedCart: cart,
      selectedDataObj: data[0].drinks,
    });
  };

  return (
    <View style={styles.container}>
      {data[0].drinks.map((item, index) => (
        <View
          key={index}
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
              source={{ uri: item.image }} // Sử dụng uri để hiển thị hình ảnh từ đường dẫn
              style={{ height: 53, width: 53 }}
            />
            <View
              style={{ height: 53, width: 93, justifyContent: "space-between" }}
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
                  source={require("../image/price.png")} // Sử dụng uri để hiển thị hình ảnh từ đường dẫn
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
            <TouchableOpacity onPress={() => handleDecreaseQuantity(index)}>
              <Image
                style={{ height: 18, width: 18 }}
                source={require("../image/tru.png")}
              />
            </TouchableOpacity>

            <Text>{quantities[index]}</Text>

            <TouchableOpacity onPress={() => handleIncreaseQuantity(index)}>
              <Image
                style={{ height: 18, width: 18 }}
                source={require("../image/cong.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={handelScreen_04}>
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
            GO TO CART
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

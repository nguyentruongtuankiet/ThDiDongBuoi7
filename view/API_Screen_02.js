import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function API_Screen_02() {
  const route = useRoute();
  const selectedData = route.params ? route.params.selectedData : [];
  const [data, setData] = useState(selectedData);
  const navigation = useNavigation();
  const handelScreen_03 = () => {
    navigation.navigate("API_Screen_03", { selectedData: data });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handelScreen_03}>
            <View
              style={{
                width: 320,
                height: 163,
                backgroundColor: "#FFF",
                borderRadius: 6,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              <Image
                source={{
                  uri: item.image,
                }} // Sử dụng uri để hiển thị hình ảnh từ đường dẫn
                style={{ height: 90, width: 320, borderRadius: 6 }}
              />
              <View
                style={{
                  width: 310,
                  height: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 1,
                  marginLeft: 5,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#F3F4F6",
                    height: 19,
                    width: 149,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 18, width: 18 }}
                    source={
                      item.status === "1"
                        ? require("../image/close.png")
                        : require("../image/open.png")
                    }
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      marginLeft: 2,
                      fontSize: 13.5,
                      color: item.status === "1" ? "#DE3B40" : "#1DD75B",
                    }}
                  >
                    {item.status === "1"
                      ? "Accepting Orders"
                      : "Tempory Unavailable"}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#F3F4F6",
                    height: 19,
                    width: 135,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 18, width: 18 }}
                    source={require("../image/time.png")} // Thay đổi đường dẫn đến hình ảnh tương ứng
                    resizeMode="contain"
                  />
                  <Text style={{ fontSize: 13.5, color: "#DE3B40" }}>
                    {item.deliverytime}
                  </Text>
                </View>

                <Image
                  style={{ height: 18, width: 18, marginLeft: 2 }}
                  source={require("../image/maps.png")} // Thay đổi đường dẫn đến hình ảnh tương ứng
                  resizeMode="contain"
                />
              </View>
              <Text
                style={{
                  color: "#171A1F",
                  fontFamily: "Inter",
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: 26,
                  marginLeft: 5,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#171A1F",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: 22,
                  marginLeft: 5,
                }}
              >
                {item.address}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

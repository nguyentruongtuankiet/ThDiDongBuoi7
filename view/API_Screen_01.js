import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function API_Screen_01() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const handelScreen_02 = () => {
    navigation.navigate("API_Screen_02", { selectedData: data });
  };

  useEffect(() => {
    fetch("https://65095f6df6553137159b4c44.mockapi.io/1/Week7")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  console.log(data);

  if (data.length === 0) {
    // Dữ liệu chưa được tải xong, bạn có thể hiển thị một thông báo "Loading..."
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{ height: 36, width: 272, marginTop: 69, alignItems: "center" }}
      >
        <Text
          style={{
            color: "#171A1F",
            fontFamily: "Inter",
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: 36,
          }}
        >
          Welcome to Cafe world
        </Text>
      </View>
      <TouchableOpacity>
        <View
          style={{
            height: 62,
            width: 200,
            alignItems: "center",
            marginTop: 52,
          }}
        >
          <Image
            source={{ uri: data[0].image }} // Sử dụng uri để hiển thị hình ảnh từ đường dẫn
            style={{ height: 62, width: 200 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            height: 73,
            width: 200,
            alignItems: "center",
            marginTop: 62,
          }}
        >
          <Image
            source={{ uri: data[1].image }} // Sử dụng uri để hiển thị hình ảnh từ đường dẫn
            style={{ height: 73, width: 200 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            height: 73,
            width: 200,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 62,
          }}
        >
          <Image
            source={{ uri: data[2].image }} // Sử dụng uri để hiển thị hình ảnh từ đường dẫn
            style={{ height: 73, width: 200 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handelScreen_02}>
        <View
          style={{
            height: 50,
            width: 312,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 90,
            borderRadius: 6,
            backgroundColor: "#00BDD6",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: 22,
            }}
          >
            GET STARTED
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

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";

import { styles } from "./styles";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  // const { state } = route.params;
  console.log("route--->", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params.state]);
      console.log(route.params.state);
    }
  }, [route.params]);

  console.log("posts", posts);

  return (
    <View style={styles.container}>
      {posts.length > 0 && (
        <FlatList
          data={posts}
          keyExtractor={(post) => post.id}
          renderItem={({ item }) => {
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={{ uri: item.photo }} style={styles.postPhoto} />
            </View>;
          }}
        />
      )}
      <Button
        title="go to map"
        onPress={() => {
          navigation.navigate("Map");
        }}
      ></Button>
      <Button
        title="go to comments"
        onPress={() => {
          navigation.navigate("Comments");
        }}
      ></Button>
    </View>
  );
};

export default DefaultScreenPosts;

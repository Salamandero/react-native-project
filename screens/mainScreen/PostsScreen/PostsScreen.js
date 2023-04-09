import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultScreenPosts from "../../nestedScreen/DefaultScreenPosts/DefaultScreenPosts";
import CommentsScreen from "../../nestedScreen/CommentsScreen/CommentsScreen";
import MapScreen from "../../nestedScreen/MapScreen/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  <NestedScreen.Navigator>
    <NestedScreen.Screen name="DefaultScreen" component={DefaultScreenPosts} />
    <NestedScreen.Screen name="Comments" component={CommentsScreen} />{" "}
    <NestedScreen.Screen name="Map" component={MapScreen} />
  </NestedScreen.Navigator>;
};

export default PostsScreen;

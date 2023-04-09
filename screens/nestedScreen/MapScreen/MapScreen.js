import React from "react";
import MapView, { Marker } from "react-native-maps";

import { View, Text } from "react-native";
import { styles } from "./styles";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: "50.449491",
          longitude: "30.525455",
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ latitude: "50.449491", longitude: "30.525455" }}
          title="Monument of Independence"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

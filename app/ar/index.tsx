import {
  ViroARImageMarker,
  ViroARPlane,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroNode,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");
  const [position, setPosition] = useState();

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  ViroARTrackingTargets.createTargets({
    uspCard: {
      source: require("@/assets/usp.png"),
      orientation: "Up",
      physicalWidth: 0.85,
    },
  });

  return (
    <ViroARScene>
      <ViroARImageMarker target="uspCard">
        <ViroText
          text={text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, 0]}
          rotation={[-90, 0, 0]}
          style={styles.helloWorldTextStyle}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

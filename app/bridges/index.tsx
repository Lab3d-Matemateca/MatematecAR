import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARImageMarker,
  ViroARPlane,
  ViroARPlaneSelector,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const BridgesScene = () => {
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
      source: require("@/assets/bridge-plain.png"),
      orientation: "Up",
      physicalWidth: 0.104,
    },
  });

  ViroMaterials.createMaterials({
    default: {
      lightingModel: "PBR",
      diffuseTexture: require("@/assets/lambert4.png"),
      metalness: require("@/assets/metalnessMap1.png"),
      normalTexture: require("@/assets/normalMap1.png"),
    },
    redBox: {
      diffuseColor: "#ff0000",
    },
  });

  const xn = 3;
  const yn = 3;
  const zn = 3;

  const boxes = [];
  const spacing = 0.08;

  for (let x = 0; x < xn; x++) {
    for (let y = 0; y < yn; y++) {
      for (let z = 0; z < zn; z++) {
        boxes.push(
          <ViroBox
            key={`${x}-${y}-${z}`}
            opacity={0.8}
            position={[(x - 1) * spacing, (y - 1) * spacing, (z - 1) * spacing]}
            scale={[0.05, 0.05, 0.05]}
            materials={["redBox"]}
          />
        );
      }
    }
  }

  return (
    <ViroARScene>
      {/* <ViroARImageMarker
        target="uspCard"
        onAnchorFound={() => console.log("teste")}
      >
      </ViroARImageMarker> */}
      <ViroARPlane minHeight={0.3} minWidth={0.3} alignment="Horizontal">
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          scale={[0.01, 0.01, 0.01]}
          source={require("@/assets/island_bridges.obj")}
          type="OBJ"
        />
      </ViroARPlane>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: BridgesScene,
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

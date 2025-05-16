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
  ViroSphere,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

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
      diffuseColor: "#000000",
    },
    grayBox: {
      diffuseColor: "#fffccc",
    },
    blackSphere: {
      diffuseColor: "#1AE4E5",
    },
    whiteSphere: {
      diffuseColor: "#FF0100",
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
            key={`box-${x}-${y}-${z}`}
            opacity={0.8}
            position={[(x - 1) * spacing, (y - 1) * spacing, (z - 1) * spacing]}
            scale={[0.05, 0.05, 0.05]}
            materials={(z + y + x) % 2 == 0 ? ["redBox"] : ["grayBox"]}
          />,
          <ViroSphere
            key={`sphere-${x}-${y}-${z}`}
            radius={0.025}
            position={[(x - 1) * spacing, (y - 1) * spacing, (z - 1) * spacing]}
            materials={(z + y + x) % 2 == 0 ? ["whiteSphere"] : ["blackSphere"]}
            opacity={0}
          />
        );
      }
    }
  }

  return (
    <ViroARScene>
      <ViroARPlane minHeight={0.1} minWidth={0.1} alignment="Horizontal">
        <ViroNode
          dragType="FixedToWorld"
          onDrag={(dragToPos, source) => setPosition(dragToPos)}
          position={position}
        >
          {boxes}
        </ViroNode>
      </ViroARPlane>
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

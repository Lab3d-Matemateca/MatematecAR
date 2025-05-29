import {
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations,
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
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const BridgesScene = () => {
  const [animationName, setAnimationName] = useState("fadeToLow");

  const handleAnimationFinish = () => {
    setAnimationName((prev) =>
      prev === "fadeToLow" ? "fadeToHigh" : "fadeToLow"
    );
  };

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

  ViroAnimations.registerAnimations({
    fadeToLow: {
      properties: { opacity: 0.8, positionY: 0.12 },
      duration: 500,
    },
    fadeToHigh: {
      properties: { opacity: 1.0, positionY: 0.08 },
      easing: "Bounce",
      duration: 500,
    },
  });

  return (
    <ViroARScene>
      <ViroARPlane minHeight={0.1} minWidth={0.1} alignment="Horizontal">
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject
          scale={[0.05, 0.05, 0.05]}
          source={require("@/assets/pontes_de_konisgberg.glb")}
          type="GLB"
        />
        <Viro3DObject
          scale={[0.05, 0.05, 0.05]}
          source={require("@/assets/island_letters.glb")}
          type="GLB"
        />
        <ViroNode>
          <Viro3DObject
            animation={{
              name: animationName,
              run: true,
              onFinish: handleAnimationFinish,
            }}
            scale={[0.05, 0.05, 0.05]}
            opacity={1.0}
            position={[-0.4, 0.08, -0.3]}
            source={require("@/assets/ponte.glb")}
            type="GLB"
          />
          <Viro3DObject
            animation={{
              name: animationName,
              run: true,
              onFinish: handleAnimationFinish,
            }}
            scale={[0.05, 0.05, 0.05]}
            position={[-0.4, 0.08, 0.05]}
            source={require("@/assets/ponte.glb")}
            type="GLB"
          />
          <Viro3DObject
            animation={{
              name: animationName,
              run: true,
              onFinish: handleAnimationFinish,
            }}
            scale={[0.05, 0.05, 0.05]}
            position={[-0.18, 0.08, 0.05]}
            source={require("@/assets/ponte.glb")}
            type="GLB"
          />
          <Viro3DObject
            animation={{
              name: animationName,
              run: true,
              onFinish: handleAnimationFinish,
            }}
            scale={[0.05, 0.05, 0.05]}
            position={[-0.02, 0.08, 0.19]}
            rotation={[0, 90, 0]}
            source={require("@/assets/ponte.glb")}
            type="GLB"
          />
          <Viro3DObject
            animation={{
              name: animationName,
              run: true,
              onFinish: handleAnimationFinish,
            }}
            scale={[0.05, 0.05, 0.05]}
            position={[0.15, 0.08, -0.29]}
            source={require("@/assets/ponte.glb")}
            type="GLB"
          />
          <Viro3DObject
            animation={{
              name: animationName,
              run: true,
              onFinish: handleAnimationFinish,
            }}
            scale={[0.05, 0.05, 0.05]}
            position={[0.15, 0.08, 0.01]}
            source={require("@/assets/ponte.glb")}
            type="GLB"
          />
          <Viro3DObject
            animation={{
              name: animationName,
              run: true,
              onFinish: handleAnimationFinish,
            }}
            scale={[0.05, 0.05, 0.05]}
            position={[0.15, 0.08, 0.32]}
            source={require("@/assets/ponte.glb")}
            type="GLB"
          />
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

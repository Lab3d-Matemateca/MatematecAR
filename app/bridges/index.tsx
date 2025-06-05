import { Button } from "@/components/button";
import { animationControl } from "@/context/animationState";
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
import { StyleSheet, Text, View } from "react-native";

const BridgesScene = () => {
  const [animationName, setAnimationName] = useState("fadeToLow");
  const [runNoSolutionAnimation, setRunNoSolutionAnimation] = useState(false);

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

  useEffect(() => {
    animationControl.triggerUpdate = () => {
      animationControl.runAnimation = true;
      setRunNoSolutionAnimation(true);
    };
  }, []);

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
              run: runNoSolutionAnimation,
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
              run: runNoSolutionAnimation,
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
              run: runNoSolutionAnimation,
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
              run: runNoSolutionAnimation,
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
              run: runNoSolutionAnimation,
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
              run: runNoSolutionAnimation,
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
              run: runNoSolutionAnimation,
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
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: BridgesScene,
        }}
        style={styles.f1}
      />
      <View style={styles.floatingButton}>
        <Button
          style={[
            {
              backgroundColor: animationControl.runAnimation
                ? "#0079c2"
                : "#ffffff",
            },
          ]}
          onPress={() => animationControl.triggerUpdate()}
        >
          <Text className="text-black">Com solução</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  f1: {
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    zIndex: 1,
  },
});

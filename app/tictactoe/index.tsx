import { Button } from "@/components/button";
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
  ViroPolyline,
  ViroSphere,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { ReactNode, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const xn = 3;
const yn = 3;
const zn = 3;

const spacing = 0.08;
const radius = 0.025;
const thickness = 0.005;

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [objs, setObj] = useState<ReactNode[]>(renderGrid());

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
    black: {
      diffuseColor: "#000000",
    },
    red: {
      diffuseColor: "#E82017",
    },
    gray: {
      diffuseColor: "#ffffcc",
    },
    white: {
      diffuseColor: "#ffffff",
    },
  });

  return (
    <ViroARScene>
      <ViroARPlane minHeight={0.1} minWidth={0.1} alignment="Horizontal">
        <ViroNode
          dragType="FixedToWorld"
          onDrag={(dragToPos, source) => setPosition(dragToPos)}
          position={position}
        >
          {objs}
        </ViroNode>
      </ViroARPlane>
    </ViroARScene>
  );
};

export default () => {
  return (
    <View style={styles.f1}>
      <View style={styles.floatingButton}>
        <Button
          className="bg-white w-[150px]"
          onPress={() => tutorialAnimation()}
        >
          <Text className="text-black">Tutorial</Text>
        </Button>
      </View>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
      />
    </View>
  );
};

var styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 1,
  },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

const tutorialAnimation = () => {
  const objs: ReactNode[] = [];

  for (let x = 0; x < xn; x++) {
    for (let y = 0; y < yn; y++) {
      for (let z = 0; z < zn; z++) {
        // objs.push(
        //   // <ViroBox
        //   //   key={`box-${x}-${y}-${z}`}
        //   //   opacity={0.8}
        //   //   position={[(x - 1) * spacing, (y - 1) * spacing, (z - 1) * spacing]}
        //   //   scale={[0.05, 0.05, 0.05]}
        //   //   materials={(z + y + x) % 2 == 0 ? ["redBox"] : ["grayBox"]}
        //   // />,
        //   <ViroSphere
        //     key={`sphere-${x}-${y}-${z}`}
        //     radius={radius}
        //     position={[(x - 1) * spacing, (y - 1) * spacing, (z - 1) * spacing]}
        //     materials={(z + y + x) % 2 == 0 ? ["gray"] : ["red"]}
        //     opacity={0.8}
        //   />
        // );
      }
    }
  }

  return objs;
};

const renderGrid = () => {
  const objs: ReactNode[] = [];

  for (let x = 0; x < xn; x++) {
    for (let y = 0; y < yn; y++) {
      for (let z = 0; z < zn; z++) {
        if (x > 0 && y > 0) {
          objs.push(
            <ViroPolyline
              position={[
                (x - 1) * spacing - radius * 2,
                (y - 1) * spacing - radius * 2,
                (z - 1) * spacing,
              ]}
              points={[
                [0, 0, -1 * radius * 2],
                [0, 0, radius * 2],
              ]}
              thickness={thickness}
              materials={"white"}
              key={`line-xz-${x}-${y}-${z}`}
            />
          );
        }
        if (z > 0 && x > 0) {
          objs.push(
            <ViroPolyline
              position={[
                (x - 1) * spacing - radius * 2,
                (y - 1) * spacing,
                (z - 1) * spacing - radius * 2,
              ]}
              points={[
                [0, -1 * radius * 2, 0],
                [0, radius * 2, 0],
              ]}
              thickness={thickness}
              materials={"gray"}
              key={`line-xy-${x}-${y}-${z}`}
            />
          );
        }
        if (y > 0 && z > 0) {
          objs.push(
            <ViroPolyline
              position={[
                (x - 1) * spacing,
                (y - 1) * spacing - radius * 2,
                (z - 1) * spacing - radius * 2,
              ]}
              points={[
                [-1 * radius * 2, 0, 0],
                [radius * 2, 0, 0],
              ]}
              thickness={thickness}
              materials={"white"}
              key={`line-zy-${x}-${y}-${z}`}
            />
          );
        }
      }
    }
  }

  return objs;
};

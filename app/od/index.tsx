import { Button } from '@/components/button';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Camera, useCameraDevice, useCameraPermission, useFrameProcessor } from "react-native-vision-camera"

import { Label, Object, useImageLabeler, useObjectDetector } from "react-native-vision-camera-mlkit"


export default function App() {
  const device = useCameraDevice("back")
  const {hasPermission} = useCameraPermission()
  const { imageLabeler } = useImageLabeler()
  const { objectDetector } = useObjectDetector()

  const [labels, setLabels] = useState<Label[]>([]);
  const [objects, setObjects] = useState<Object[]>([]);

  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
    const labels = imageLabeler(frame)
    const objects = objectDetector(frame);
    console.log(objects)
  }, []);

  if (!hasPermission) {
    return <View />
  }

  if (!hasPermission) {
    return <View>
      <Text>We need permission</Text>
      <Button>Dar permissão</Button>
    </View>
  }

  if (device === null) {
    return <>error</>
  }

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
    />
  );
}
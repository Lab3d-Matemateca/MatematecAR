import { Button } from '@/components/button';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera"


export default function App() {
  const device = useCameraDevice("back")
  const {hasPermission} = useCameraPermission()

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
    >
      <Button>Identificar</Button>
    </Camera>
  );
}
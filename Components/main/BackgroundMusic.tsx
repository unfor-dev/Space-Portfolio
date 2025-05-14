"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const BackgroundMusic = ({ play }: { play: boolean }) => {
  const { camera } = useThree();
  const soundRef = useRef<THREE.Audio>();
  const listenerRef = useRef<THREE.AudioListener>();

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);
    listenerRef.current = listener;

    const sound = new THREE.Audio(listener);
    const loader = new THREE.AudioLoader();

    loader.load("/moon.mp3", (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.3);
      soundRef.current = sound;

      if (play) {
        sound.play();
      }
    });

    return () => {
      if (soundRef.current?.isPlaying) {
        soundRef.current.stop();
      }
      camera.remove(listener);
    };
  }, []);

  useEffect(() => {
    const sound = soundRef.current;

    if (!sound) return;

    if (play && !sound.isPlaying) {
      sound.play();
    } else if (!play && sound.isPlaying) {
      sound.pause();
    }
  }, [play]);

  return null;
};

export default BackgroundMusic;

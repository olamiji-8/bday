import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

import './BirthdayCard.css'; // Import the CSS file for styling

function Card({ isOpen, onClick }) {
  const [isCardOpen, setIsCardOpen] = useState(isOpen);

  const handleCardClick = () => {
    setIsCardOpen(!isCardOpen);
    onClick();
  };

  return (
    <>
      {/* Left side */}
      <mesh position={[-3, 0, 0]} onClick={handleCardClick}>
        <planeBufferGeometry args={[6, 8]} />
        <meshStandardMaterial color="#e91e63" side={isCardOpen ? THREE.FrontSide : THREE.BackSide} />
        {isCardOpen && (
          <Text
            position={[0, 0, 0.1]}
            color="#fff"
            fontSize={0.8}
            maxWidth={5}
            lineHeight={1}
            letterSpacing={-0.05}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
          >
            Happy Birthday!
          </Text>
        )}
      </mesh>

      {/* Right side */}
      <mesh position={[3, 0, 0]} onClick={handleCardClick}>
        <planeBufferGeometry args={[6, 8]} />
        <meshStandardMaterial color="#fff" side={isCardOpen ? THREE.FrontSide : THREE.BackSide} />
        {isCardOpen && (
          <Text
            position={[0, 0, 0.1]}
            color="#444"
            fontSize={0.8}
            maxWidth={5}
            lineHeight={1}
            letterSpacing={-0.05}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
          >
            Wishing you a fantastic day filled with joy and laughter!
          </Text>
        )}
      </mesh>
    </>
  );
}

function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Card isOpen={isOpen} onClick={handleCardClick} />
      </Canvas>
    </div>
  );
}

export default BirthdayCard;

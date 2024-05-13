import {
  CameraControls, 
  MeshPortalMaterial,
  RoundedBox,
  Text, 
  useGLTF,
  useTexture
   } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef } from "react";
import { useState } from "react";

import * as THREE from "three";



const Scene = () => {

  const model = useGLTF("./model/1.glb");

  // Usar um auxiliar chamado use Texture from Drei.
  const texture = useTexture("./texture/1.png");

  const [active, setActive] = useState(false)

  const doubleClickHandler = () => {
    setActive(!active);
  }

  const meshPortalMaterialRef = useRef();

  // Usarei a função easing, que terá vários métodos que podem animar um valor para têm uma transição suave com algum amortecimento ao passar de um valor para outro.
  useFrame((_, delta) => {
    easing.damp(meshPortalMaterialRef.current, "blend", active ? 1 : 0, 0.2, delta );

  });

  const cameraControlRef = useRef();

  useEffect(() => {
    if(active) {
      cameraControlRef.current.setLookAt(0, 0, 5, 0, 0, 0, true); // Três parâmetros, especificamos a nova localização da câmera. Quero mover a câmera para zero x, zero y e três Z. Nos próximos três parâmetros, decidimos para onde queremos que a câmera olhe. Queremos que a câmera olhe para o centro. Então escrevemos zero, zero e zero. Após isso true par que tenha uma transição
    }
  }, [active])


  return (
    <>
      <CameraControls 
      ref={cameraControlRef}
      />
      {/* // MeshPortalMaterial */}
      
      <Text 
      font="./font/bold.ttf" 
      position={[0, 1.5, 0.1]}
      fontSize={0.6}
      
      
      >
        Eggs
        <meshBasicMaterial toneMapped={false} />
      </Text>



      {/* A caixa arredondada é basicamente uma geometria de caixa, mas temos um recurso para modificar os cantos. */}
      <RoundedBox 
      args={[3, 4, 0.1]}
      radius={0.1}
      onDoubleClick={doubleClickHandler}
      >
        
         {/* Vamos adicionar o efeito ao clicar duas vezes, entramos no portal. Temos um atributo no material do portal mesh chamado Blend. */}
        <MeshPortalMaterial 
        
        ref={meshPortalMaterialRef}

        >

        <primitive object={model.scene} scale={0.6} position-y={0.6}  />


      {/* Criar uma esfera e depois adicionar a textura na parte interna da esfera. */}
      <mesh>
        <sphereGeometry 
        args={[5, 64, 64]} // Modificar o raio , largura e altura para remover linhas que havia na esfera.
        />
        <meshBasicMaterial 
        map={texture} // Percebemos que não podemos ver o modelo a menos que ampliemos o zoom dentro do esfera. Então, como dissemos antes, queremos adicionar uma textura à parte interna da esfera para que ela parece que adicionamos um mapa de ambiente à cena quando aumentamos o zoom na esfera. Então, para fazer isso, precisamos alterar o atributo side para backside.
        side={THREE.BackSide}
        
        />
      </mesh>

        </MeshPortalMaterial>

      </RoundedBox>




      


    </>
  );
};

export default Scene;

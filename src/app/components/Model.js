"use client";

const Model = () => {
  
  return (
    <div>

      {/* Chalk Painting */}
      <model-viewer
        src="/art.glb"
        ios-src="/art.usdz"
        poster="/art.jpg"
        alt="A 3D model of an astronaut"
        shadow-intensity="0"
        camera-controls
        ar
        ar-placement="wall"
        touch-action="pan-y"
        disable-pan
        skybox-image="/art.jpg"
        exposure="4"
        min-camera-orbit="-55deg 45deg auto"
        max-camera-orbit="55deg 120deg auto"
        tone-mapping="commerce"
      ></model-viewer>
  
      {/* Owl Painting */}
      <model-viewer
        src="/Owl.glb"
        ios-src="/OwlFramed.usdz"
        orientation="90deg 0deg 90deg"
        poster="/Owl.jpg"
        alt="A 3D model of an astronaut"
        shadow-intensity="0"
        camera-controls
        ar
        ar-placement="wall"
        disable-pan
        skybox-image="/Owl.jpg"
        exposure="4"
        touch-action="pan-y"
        min-camera-orbit="-55deg 45deg auto"
        max-camera-orbit="55deg 120deg auto"
        tone-mapping="commerce"
      ></model-viewer>

       {/* Barn Painting */}
       <model-viewer
        src="/Barn.glb"
        ios-src="/Barn.usdz"
        orientation="90deg 0deg 90deg"
        poster="/Barn.jpg"
        alt="A 3D model of an astronaut"
        shadow-intensity="0"
        camera-controls
        ar
        ar-placement="wall"
        disable-pan
        skybox-image="/Owl.jpg"
        exposure="4"
        touch-action="pan-y"
        min-camera-orbit="-55deg 45deg auto"
        max-camera-orbit="55deg 120deg auto"
        tone-mapping="commerce"
      ></model-viewer>
    </div>
   
  );
};

export default Model;

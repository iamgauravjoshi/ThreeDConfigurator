import {Suspense, useContext, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF} from '@react-three/drei';
import SubProductContext from "../context/SubproductContext";
import Hotspot, {HotspotProps} from "../hotspots/hotspots";
import DemoImages from "./DemoImages";


const SkidSteerHotspots: HotspotProps[] = [
    {id: 1, position: [0.2, 0.2, 0.4]},
    {id: 2, position: [0.9, -0.3, 0.3]},
    {id: 3, position: [0, -0.9, -1]},
    {id: 4, position: [-0.3, 1, 0.5]},
    {id: 5, position: [0, 0, 2]},
];

const SkidSteerModel = () => {
    const {scene} = useGLTF('/assets/skid_steer.glb');
    const {setSubproductView, hotspotId, setHotspotId} = useContext<any>(SubProductContext);
    const [position, setPosition] = useState([-3, 0, -2]);
    const [clicked, setClicked] = useState(false);

    console.log(position);

    const handleHotspotClick = (id: any, position: any) => {
        if (hotspotId === 0 || hotspotId !== id) {
            setHotspotId(id);
            setSubproductView((prev: boolean) => !prev);
        } else if (hotspotId === id) {
            setSubproductView((prev: boolean) => !prev);
            setHotspotId(0);
        }
        // setHotspotId(id);
        setPosition(position);
        setClicked(!clicked);
        // alert(`Clicked on Hotspot no. ${id}!!`)
    };

    return (
        <>
            <Canvas
                className='demo__product-canvas min-h-screen'
                camera={{position: [-3, 0.8, -1], fov: 80}}
                // camera={{position: [1, 0, 9], fov: 80}}
            >
                {/*<PerspectiveCamera makeDefault position={[-2, 1, -1.5]} fov={90}/>*/}
                <ambientLight intensity={2} color={'#ffffff'} castShadow={true}/>

                {/* ----- Skid Steer Model ----- */}
                <Suspense fallback={"Loading..."}>
                    <primitive object={scene} className={'min-h-screen'}>
                        {SkidSteerHotspots.map((hotspot, index) => (
                            <Hotspot
                                key={index}
                                position={hotspot.position}
                                onClick={() => handleHotspotClick(hotspot.id, hotspot.position)}
                            />
                        ))}
                    </primitive>
                </Suspense>

                {/*<CameraAnimation clicked={clicked} position={position} hotspotId={hotspotId}/>*/}
                <OrbitControls/>
                {/*<axesHelper args={[5]}/>*/}
            </Canvas>
            <DemoImages/>
        </>
    );
};

useGLTF.preload('/assets/skid_steer.glb');

export default SkidSteerModel;
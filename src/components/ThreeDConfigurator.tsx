import {Suspense, useContext, useState} from 'react';
import {OrbitControls, useGLTF} from '@react-three/drei';
import {Canvas} from "@react-three/fiber";
import Hotspot, {HotspotProps} from "../hotspots/hotspots";
import SubProductContext from "../context/SubproductContext";
import DemoImages from "./DemoImages";


const DumpTruckHotspots: HotspotProps[] = [
    {id: 1, position: [0, 1.25, 1.5]},
    {id: 2, position: [0.81, 1.3, 0.52]},
    {id: 3, position: [0.76, 0.45, 0]},
    {id: 4, position: [-0.9, 0.5, 0]},
    {id: 5, position: [0, 0.7, 2.62]},
    {id: 6, position: [0, 0.9, -1]},
    {id: 7, position: [-0.88, 1.2, -2]},
    {id: 8, position: [0.88, 1.2, -2]},
    {id: 9, position: [0, 1.2, -2.68]},
    {id: 10, position: [-0.3, 2.04, 0.7]},
];

const ThreeDConfigurator = () => {
    const {scene} = useGLTF('/assets/dump_truck.glb');
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
                // camera={{position: [0, 0, 0], fov: 90}}
                camera={{position: [4, 2, 3], fov: 70}}
            >
                {/*<PerspectiveCamera position={[4, 2, 3]} fov={70}/>*/}
                {/*<ambientLight intensity={5} color={'#ff6347'}/>*/}
                <directionalLight position={[10, 10, 5]} intensity={4} color={'#FFFFFF'}/>
                <directionalLight position={[-10, -10, -5]} intensity={4} color={'#FFFFFF'}/>
                <Suspense fallback={"Loading..."}>
                    <primitive metalness={0.2} object={scene} position={[0, -0.5, 0]}>
                        {DumpTruckHotspots.map((hotspot, index) => (
                            <Hotspot
                                key={index}
                                position={hotspot.position}
                                onClick={() => handleHotspotClick(hotspot.id, hotspot.position)}
                            />
                        ))}
                    </primitive>
                </Suspense>

                <OrbitControls/>
                {/*<axesHelper args={[5]}/>*/}
            </Canvas>
            <DemoImages/>
        </>
    );
};

useGLTF.preload('/assets/dump_truck.glb');

export default ThreeDConfigurator;
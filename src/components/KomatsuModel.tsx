import {Suspense, useContext, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useFBX, useProgress, Html} from '@react-three/drei';
import DemoImages from "./DemoImages";
import Hotspot, {HotspotProps} from "../hotspots/hotspots";
import SubProductContext from "../context/SubproductContext";

const KomatsuModelHotspots: HotspotProps[] = [
    {id: 1, position: [4.8, 1.8, -1.2]},
    {id: 2, position: [7.3, 0.3, 1.2]},
    {id: 3, position: [3, 0.9, 0.6]},
    {id: 4, position: [-1.15, 3, -0.9]},
    {id: 5, position: [5.9, 3, 0.5]},
    {id: 6, position: [7.8, 1.7, -2.3]},
    {id: 7, position: [-2.5, 1, -0.2]},
    {id: 8, position: [5.7, 0.3, -2.5]},
    {id: 9, position: [-1.18, 4.6, -0.6]},
    {id: 10, position: [7.3, 2.8, -0.5]},
];


const KomatsuModel = () => {
    let fbx = useFBX('/assets/model.fbx');
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
        setPosition(position);
        setClicked(!clicked);

        // alert(`Clicked on Hotspot no. ${id}!!`)
    };

    return (
        <>
            <Canvas
                className='demo__product-canvas min-h-screen'
                camera={{position: [-1, 4, 10], fov: 60}}
                // camera={{position: [0, 0, 0], fov: 80}}
            >
                <ambientLight intensity={2} color='#FFFFFF' />
                <Suspense fallback={<CanvasLoader/>}>
                    {/*<color attach="background" args={['#F1F1F1']} />*/}
                    <primitive object={fbx} position={[0, -1.25, 0]} rotation={[Math.PI / 2, 0, 0]}/>
                    {KomatsuModelHotspots.map((hotspot, index) => (
                        <Hotspot
                            key={index}
                            position={hotspot.position}
                            geometryArgs={[0.15, 32, 32]}
                            color="#FFFFFF"
                            onClick={() => handleHotspotClick(hotspot.id, hotspot.position)}
                        />
                    ))}
                </Suspense>

                <OrbitControls/>
                {/*<axesHelper args={[25]}/>*/}
            </Canvas>
            <DemoImages/>
        </>
    );
};

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className="canvas-load"/>
            <p
                style={{
                    fontSize: 30,
                    color: "#000000",
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(0)}%
            </p>
        </Html>
    );
};

export default KomatsuModel;
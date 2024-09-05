import {useEffect, useState} from 'react';

export interface HotspotProps {
    id: number;
    position: [number, number, number];
}

const Hotspot = ({position, onClick, geometryArgs=[0.06, 32, 32], color="#ef233c"}: any) => {
    const [hover, setHover] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hover ? "pointer" : "default";
    }, [hover]);

    return (
        <mesh
            position={position}
            onClick={onClick}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={hover ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        >
            <sphereGeometry args={geometryArgs}/>
            <meshStandardMaterial color={hover ? '#d90429' : color}/>
        </mesh>
    );
};

export default Hotspot;
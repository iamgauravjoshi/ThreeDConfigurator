import {useEffect, useState} from 'react';

export interface HotspotProps {
    id: number;
    position: [number, number, number];
}

const Hotspot = ({position, onClick}: any) => {
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
            <sphereGeometry args={[0.06, 32, 32]}/>
            <meshStandardMaterial color={hover ? '#d90429' : '#ef233c'}/>
        </mesh>
    );
};

export default Hotspot;
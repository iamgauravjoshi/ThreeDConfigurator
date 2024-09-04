import {useContext} from 'react'
import '../App.scss';
import SubProductContext from "../context/SubproductContext";
import {motion, AnimatePresence} from "framer-motion";


function DemoImages() {
    const {subproductView, setSubproductView, hotspotId, setHotspotId} = useContext<any>(SubProductContext);

    const handleClose = () => {
        setSubproductView((prev: boolean) => !prev);
        setHotspotId(0);
    }

    return (
        <AnimatePresence>
            {subproductView &&
            <div className={'demo__subproduct-canvas'}>

                <motion.div
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: 100}}
                    transition={{duration: 1.2}}
                >
                    {/*<X size={30} className={'demo__subproduct-close'} onClick={handleClose}/>*/}
                    <button className={'demo__subproduct-close'} onClick={handleClose}>X</button>
                    {
                        hotspotId === 1 &&
                        <>
                            <img src='/images/image-01.jpg' alt={'Image-01'}/>
                            <img src='/images/image-02.jpg' alt={'Image-02'}/>
                            <img src='/images/image-06.jpg' alt={'Image-06'}/>
                            <img src='/images/image-04.jpg' alt={'Image-04'}/>
                        </>
                    }
                    {
                        hotspotId === 2 &&
                        <>
                            <img src='/images/image-03.jpg' alt={'Image-01'}/>
                            <img src='/images/image-04.jpg' alt={'Image-02'}/>
                        </>
                    }
                    {
                        hotspotId === 3 &&
                        <>
                            <img src='/images/image-06.jpg' alt={'Image-06'}/>
                            <img src='/images/image-02.jpg' alt={'Image-02'}/>
                            <img src='/images/image-01.jpg' alt={'Image-01'}/>
                        </>
                    }
                    {
                        hotspotId === 4 &&
                        <>
                            <img src='/images/image-05.jpg' alt={'Image-05'}/>
                            <img src='/images/image-06.jpg' alt={'Image-06'}/>
                            <img src='/images/image-07.jpg' alt={'Image-07'}/>
                        </>
                    }
                    {
                        hotspotId === 5 &&
                        <>
                            <img src='/images/image-03.jpg' alt={'Image-01'}/>
                            <img src='/images/image-01.jpg' alt={'Image-02'}/>
                        </>
                    }
                    {
                        hotspotId === 6 &&
                        <>
                            <img src='/images/image-01.jpg' alt={'Image-01'}/>
                            <img src='/images/image-02.jpg' alt={'Image-02'}/>
                            <img src='/images/image-06.jpg' alt={'Image-06'}/>
                            <img src='/images/image-04.jpg' alt={'Image-04'}/>
                        </>
                    }
                    {
                        hotspotId === 7 &&
                        <>
                            <img src='/images/image-03.jpg' alt={'Image-01'}/>
                            <img src='/images/image-04.jpg' alt={'Image-02'}/>
                        </>
                    }
                    {
                        hotspotId === 8 &&
                        <>
                            <img src='/images/image-06.jpg' alt={'Image-06'}/>
                            <img src='/images/image-02.jpg' alt={'Image-02'}/>
                            <img src='/images/image-01.jpg' alt={'Image-01'}/>
                        </>
                    }
                    {
                        hotspotId === 9 &&
                        <>
                            <img src='/images/image-05.jpg' alt={'Image-05'}/>
                            <img src='/images/image-06.jpg' alt={'Image-06'}/>
                            <img src='/images/image-07.jpg' alt={'Image-07'}/>
                        </>
                    }

                </motion.div>
            </div>
            }
        </AnimatePresence>
    )
}

export default DemoImages;
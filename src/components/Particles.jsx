import Particles from "react-tsparticles"
import {loadSlim} from "tsparticles-slim"
//import {loadFull} from  "tsparticles"
import { useCallback, useMemo } from "react"

const ParticlesComponent = (props) => {
    const options = useMemo(()=>{
        return {
            name: "React Night Sky",
            fullScreen: {
                enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    push: {
                        quantity: 1,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FFF",
                },
            links: {
                blink: false,
                color: {
                    value: "#fff",
                },
                consent: false,
                distance: 100,
                enable: true,
                opacity: 0.02,
                shadow: {
                    blur: 5,
                    color: {
                        value: "lime",
                    },
                    enable: false,
                },
            width: 2,
        },
        move: {
            attract: {
                enable: false,
                rotate: {
                    x: 3000,
                    y: 3000,
                },
            },
            direction: "right",
            enable: true,
            outModes: "bounce",
            speed: 0.05,
        },
        collisions: {
            enable: true,
        },
        number: {
            density: {
                enable: true,
            },
            limit: -1,
            value: 190,
        },
        opacity: {
            animation: {
                enable: true,
                speed: 3,
                sync: false,
            },
            value: {
                min: 0.05,
                max: 0.5,
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            value: 1.5,
        },
    },
    pauseOnBlur: true,
    background: {
        color: "#0a0b0d",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
        }
    },[])
    const particlesInit = useCallback(async engine=> {
        await loadSlim(engine)
        //loadFull(engine)
    },[])

    return <Particles id={props.id}  init={particlesInit} options={options} />
}

export default ParticlesComponent;
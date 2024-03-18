import { useEffect, useState } from "react"

export const  Circle = ({x,y,c})=>{
    const [radius,setRadius] = useState(100);
    const [audio,setAudio] = useState();
    useEffect(()=>{
            const id = setInterval(()=>{
                radius>0 && setRadius(radius-1)
            },[10])
            return ()=>clearInterval(id)
    },[radius])
    useEffect(()=>{
        audio && audio.play();
    },[audio])
    useEffect(()=>{
        const audioId = Math.floor(Math.random()*10);
        console.log('asdasdasdasdaskjdaskjldjasld',audioId)
        setAudio(new Audio(`./sounds/${audioId}.mp3`))
    },[])
    return <circle cx={x} cy={y} r={radius} fill={c}/>
}
import { useEffect, useState } from "react"
import { Dimensions } from "react-native";

export default function useOrientation(){

    const [screenInfo , setScreenInfo] =useState(Dimensions.get("screen"));

    //We call it when Orientat change
    useEffect(()=>{

        const onChange = (result:any)=>{
            setScreenInfo(result);
        }

        Dimensions.addEventListener('change', onChange)
        //when componenet is unmounted we will remove the listener
        return ()=>Dimensions.removeEventListener("change",onChange);
    }
    )

    return {
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width
    }
}

// export default useOrientation;
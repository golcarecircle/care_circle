import React, { createContext, useState, useEffect, useReducer } from "react";
type Section={
    section:{
        Title: string;
        Description? :string;
        Content: string
    }[]
}
export type ResponseData = {
    readonly Id: string
    Title: string;
    ImageUrl: string;
    ImageAlt: string;
    Sections: Section
}
const TIPS: ResponseData[]=[]
export const HealthTipsContext = createContext({
    healthTips: TIPS,
    setHealthTips: (healthTips: ResponseData[])=>{},
    isLoading: false,
    setIsLoading: (isLoading: boolean)=>{},
    error: null,
    setError: (error: any)=>{}
})
type Props = {
    children: React.ReactNode
}

export const HealthTipsProvider = (({children}:Props)=>{
    const [healthTips, setHealthTips] = useState<ResponseData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    // useEffect(()=>{
    //     const getSortedData = async()=>{
    //         // let ResponseRetData: ResponseData[] = []
    //         const response = await fetch(`https://health.gov/myhealthfinder/api/v3/topicsearch.json`);
    //         const data =await response.json();
    //         const dataReturned: ResponseData[]  = data['Result'].Resources.Resource;
    //         let ResponseRetData = dataReturned.map(function(it) {
    //             return{
    //                 Id: it.Id,
    //                 ImageAlt: it.ImageAlt,
    //                 ImageUrl: it.ImageUrl,
    //                 Sections: it.Sections,
    //                 Title: it.Title
    //             }
    //         })
    //         console.log(ResponseRetData);
    //         if (ResponseRetData.length>0) {
    //             setHealthTips(ResponseRetData);
    //         }else{
    //             setHealthTips([])
    //         }
    //     }
    //     getSortedData()
    // },[])
    return(
        <HealthTipsContext.Provider value={{healthTips, setHealthTips,error, isLoading, setError, setIsLoading }}>
            {children}
        </HealthTipsContext.Provider>
    )
})
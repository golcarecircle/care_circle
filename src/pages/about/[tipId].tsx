import React from 'react';
import { AppState, makeStore } from '@/redux/store';
import Image from 'next/image';
import { GetStaticPropsContext } from 'next';
import { ResponseData } from '.';
type Props = {
    tip: ResponseData
}
function TipID({tip}:Props) {
    return (
        <div>
            <h1>{tip.Title}</h1> 
            <Image src={tip.ImageUrl} alt={tip.ImageAlt} width={20} height={20}/>
            <p>{tip.Sections[0].Content}</p>
        </div>
    );
}
export async function getStaticPaths() {
    //filter the room Ids from initial state in redux
    // get the state from redux
    const state = makeStore().getState() as AppState;
    const tipsId = state.data.data.map((tip)=>tip.Id);
    console.log(tipsId);
    return{
        fallback:false,
        paths: tipsId.map((tipId)=>({
            params: {tipId: tipId}
        }))
    }
}
export async function getStaticProps(context:GetStaticPropsContext) {
    const tipId = context.params?.tipId;
    console.log(tipId);
    const tip = makeStore().getState().data.data.find((tip)=>tip.Id === tipId);
    return{
        props: {
            tip
        }
    }
}
    
export default TipID;
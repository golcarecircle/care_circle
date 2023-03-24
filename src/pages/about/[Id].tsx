import React, { useContext } from 'react';
import Image from 'next/image';

import { GetStaticPropsContext } from 'next';
import { ResponseData } from '.';
import { HealthTipsContext } from '@/context/healthTips.context';
type Props = {
    tip: ResponseData
}
function TipID({tip}:Props) {
    return (
        <div>
            <h1>More Info Component</h1> 
        </div>
    );
}
export async function getStaticPaths() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { healthTips } = useContext(HealthTipsContext)
    return{
        fallback:false,
        paths: healthTips.map((tip)=>{
            return{
                params:{
                    Id: tip.Id.toString()
                }
            }
        })
    }
}
export async function getStaticProps(context: GetStaticPropsContext) {
    const id = context.params?.Id;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { healthTips } = useContext(HealthTipsContext)
    const tip = healthTips.find(function(tip){
        if (tip.Id ===id) {
            return tip
        }
        return {}
    })
    return{
        props: {
            tip
        }
    }
}  
export default TipID;
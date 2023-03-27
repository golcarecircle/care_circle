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

export async function getServerSideProps(context:GetStaticPropsContext){
    const { params } = context;
    const id = params?.id;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { healthTips } = useContext(HealthTipsContext);
    const tip = healthTips.find((it)=>it.Id === id);
    return{
        props: {
            tip
        }
    }
}
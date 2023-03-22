import React from 'react';
import { wrapper } from '@/redux/store'
import { AppState } from '@/redux/store';

function TipID() {
    return (
        <div>
             
        </div>
    );
}
export async function getStaticPaths() {
    //filter the room Ids from initial state in redux
    return{
        fallback:false,
        paths: []
    }
}
export const getStaticProps = wrapper.getStaticProps((
    (store)=>
    async()=>{
        return {
            props:{

            }
        }
    }
))
    
export default TipID;
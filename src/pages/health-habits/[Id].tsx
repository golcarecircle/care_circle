import React, { useContext } from 'react';
import { GetStaticPropsContext } from 'next';
import { HealthTipsContext} from '@/context/healthTips.context';
type Props = {
    tipId: string | number
}
function TipID({tipId}:Props) {
    console.log(tipId);
    const { healthTips, } = useContext(HealthTipsContext);
    const tip = healthTips.find((tip)=> tip.Id === tipId);
    console.log(tip?.Sections.section);
    if (!tip) return <p>Tip not found</p>

    return (
        <div>
            {
                tip.Sections.section.map((section, index)=>{
                    return(
                        <>
                            <div  key={index}>
                                <h1>{section.Title}</h1>
                            </div>
                            <p>{section.Description}</p>
                            <div style={{margin:'10px'}} dangerouslySetInnerHTML={{__html: section.Content}} />
                        </>
                    )
                })
            }  
        </div>
    );
}
export default TipID;
export async function getServerSideProps(context: GetStaticPropsContext){
    const { params } = context;
    const id = params?.Id;
    console.log('Id: ', id);
    return{
        props: {
            tipId: id
        }
    }
}
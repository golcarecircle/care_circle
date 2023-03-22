import Head from "next/head";

import ItemListComponent from "@/components/ItemsList/ItemList.component";
import PageInfoComponent from "@/components/PageInfo/PageInfo.component";
import { selectDataState, setDataState } from "@/redux/tipsSlice";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "@/redux/store";
import FooterComponent from "@/components/Footer/Footer.component";
type Section={
    Title: string;
    Description? :string;
    Content: string
}
type ResponseData = {
    readonly Id: string
    Title: string;
    ImageUrl: string;
    ImageAlt: string;
    Sections: Section[]
}
type InputProps = {
    allData: ResponseData[]
}

export default function About(){
    const dataState = useSelector(selectDataState);
    return(
        <>
            <Head>
                <title>About - CareCircle</title>
                <meta name="description" content="Care Circle About Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageInfoComponent path="about" title="About" />
            <p>Care Circle aims to give health tips and ideas to everyone in this community</p>
            <ItemListComponent data={dataState}/>
            <FooterComponent/>
        </>
    )
}
export async function getSortedData() {
    let ResponseRetData = {}
    const response = await fetch(`https://health.gov/myhealthfinder/api/v3/topicsearch.json`);
    const data =await response.json();
    const dataReturned: ResponseData[] = data['Result'].Resources.Resource;
    ResponseRetData = dataReturned.map(function(it) {
        return{
            Id: it.Id,
            ImageAlt: it.ImageAlt,
            ImageUrl: it.ImageUrl,
            Sections: it.Sections,
            Title: it.Title
        }
    })
    return ResponseRetData;
}
export const getStaticProps = wrapper.getStaticProps(
    (store)=>
    async()=>{
        const allData = await getSortedData();
        await store.dispatch(setDataState(allData));
        console.log("State on Server is: ",store.getState());
        return{
            props:{
                allData
            }
        }
    }
)
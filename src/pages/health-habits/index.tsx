import Head from "next/head";
import { useContext } from "react";
import PageInfoComponent from "@/components/PageInfo/PageInfo.component";
import FooterComponent from "@/components/Footer/Footer.component";
import { HealthTipsContext } from "@/context/healthTips.context";
import ItemListComponent from "@/components/ItemsList/ItemList.component";
import { HealthTipsProvider } from "@/context/healthTips.context";
type Section={
    Title: string;
    Description? :string;
    Content: string
}
export type ResponseData = {
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
    return(
        <HealthTipsProvider>
            <Head>
                <title>About - CareCircle</title>
                <meta name="description" content="Care Circle About Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageInfoComponent path="about" title="About" />
            <p>Care Circle aims to give health tips and ideas to everyone in this community</p>
            <ItemListComponent/>
            <FooterComponent/>
        </HealthTipsProvider>
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
export const getServerSideProps = async () => {
    const allData = await getSortedData();
    console.log(allData);
    return {
        props: {
            allData
        }
    }
}
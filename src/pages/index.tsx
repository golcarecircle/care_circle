import Head from "next/head";
import HomePageInfoComponent from "@/components/HomePageInfo/HomePageInfo.component";
export default function Home() {
    return(
        <>
            <Head>
                <title>Home</title>
            </Head>
            <HomePageInfoComponent/>
        </>
    )
}
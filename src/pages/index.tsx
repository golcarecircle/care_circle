import Head from "next/head";
import FooterComponent from "@/components/Footer/Footer.component";
import HomePageInfoComponent from "@/components/HomePageInfo/HomePageInfo.component";
export default function Home() {
    return(
        <>
            <Head>
                <title>Home</title>
            </Head>
            <HomePageInfoComponent/>
            <FooterComponent/>
        </>
    )
}
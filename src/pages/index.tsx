import Head from "next/head";
import FooterComponent from "@/components/Footer/Footer.component";
import HomePageInfoComponent from "@/components/HomePageInfo/HomePageInfo.component";
export default function Home() {
    return(
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Care Circle Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomePageInfoComponent/>
            <FooterComponent/>
        </>
    )
}
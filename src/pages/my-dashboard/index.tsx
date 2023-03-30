import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import {AiOutlineClockCircle} from 'react-icons/ai'
function UserDashboard({session}:any) {
    console.log(session);
    return(
        <>
            <Head>
                <title>Me - CareCircle</title>
                <meta name="description" content="Care Circle Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Welcome Oliver</h1>
            <section style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                <div style={{margin: '10px 20px'}}>
                    <h1>Current Medication (3) </h1>
                    <div style={{border: '1px solid #ccc', borderRadius: '10px'}}>
                        <div style={{borderBottom: '1px solid #ccc', padding: '10px', margin: '10px'}}>
                            <h5>Acebutomol 400mg</h5>
                            <p>2 pills daily</p>
                            <p>&#9;</p>
                        </div>
                        <div style={{borderBottom: '1px solid #ccc', padding: '10px'}}>
                            <h5>Aluminium hydroxide (OTC) 300mg</h5>
                            <p>1 pills daily</p>
                        </div>
                        <div style={{borderBottom: '1px solid #ccc', padding: '10px'}}>
                            <h5>Warfarin  400mg</h5>
                            <p>2 pills daily</p>
                        </div>
                    </div>
                    
                </div>
                <div style={{margin: '10px 20px'}}>
                    <h1>My Appointments</h1>
                    <div>
                        <div style={{borderBottom: '1px solid #ccc', padding: '10px'}}>
                            <h5>Thursday, 7th May 2022</h5>
                            <p style={{display: 'inline-block',background: 'green', color: 'white', padding: '5px'}}>Accepted </p>
                            <span><AiOutlineClockCircle/> 10:00am - 11:00am</span>
                            <div style={{display: 'flex'}}>
                                <Image src='/images/cart.webp' alt="image" style={{borderRadius:'50%', cursor:'pointer', margin:'0 10px'}} height={40} width={40}/>
                                <div>
                                    <h5>Dr. John Doe</h5>
                                    <p>Cardiologist</p>
                                </div>
                            </div>
                        </div>
                        <div style={{borderBottom: '1px solid #ccc', padding: '10px'}}>
                            <h5>Thursday, 7th May 2022</h5>
                            <p style={{display: 'inline-block',background: 'orange', color: 'white', padding: '5px'}}>Pending </p>
                            <span><AiOutlineClockCircle/> 10:00am - 11:00am</span>
                            <div style={{display: 'flex'}}>
                                <Image src='/images/cart.webp' alt="image" style={{borderRadius:'50%', cursor:'pointer', margin:'0 10px'}} height={40} width={40}/>
                                <div>
                                    <h5>Dr. John Doe</h5>
                                    <p>Cardiologist</p>
                                </div>
                            </div>
                        </div>
                        <button style={{color: 'blue',background: 'none', margin: '10px 20px', border: '1px solid #ccc', padding: '10px'}}>New Appoitment</button>
                    </div>
                </div>
            </section>
            <section style={{textAlign: 'center'}}>
                <div>
                    <h1>Medical History</h1>
                </div>
                <table style={{borderCollapse: 'collapse', width: '100%'}}>
                    <tr>
                        <th style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Details</th>
                        <th style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Date</th>
                        <th style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Cost</th>
                        <th style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Medication</th>
                        <th style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Discharge</th>
                    </tr>
                    <tr >
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Heart Attack</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>12/12/2021</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Ksh 10,000</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Warfarin 400mg</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>12/12/2021</td>
                    </tr>
                    <tr style={{backgroundColor: '#dddddd'}}>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Stomach Ulcers</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>12/12/2021</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Ksh 10,000</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Warfarin 400mg</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>12/12/2021</td>
                    </tr>
                    <tr >
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Heart Attack</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>12/12/2021</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Ksh 10,000</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Warfarin 400mg</td>
                        <td style={{border: '1px solid #dddddd',textAlign: 'left',padding: '8px'}}>12/12/2021</td>
                    </tr>
                </table>
            </section>
        </>
    )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getSession({req: context.req});
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }
    return {
        props: {
            session
        }
    }
}
export default UserDashboard;
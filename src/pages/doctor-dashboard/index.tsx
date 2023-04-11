import React from 'react';
import BackDrop from '@/components/Backdrop/Backdrop';
import Modal from '@/components/modal/Modal'; 
import modalStyles from '@/components/modal/Modal.module.css';
import Link from 'next/link';
import { wrapper } from '@/redux';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { getADoctor } from '../api/controllers/doctor.controller';
import { IAdmin } from '../api/models/doctor.model';
import { setAppointments } from '@/redux/doctorSlice';
function DoctorDashboard() {
    const [toogle, setToogle] = React.useState(false);
    const handleClick = () => {
        setToogle(!toogle);
    }
    return (
        <>
            <div style={{margin: '20px'}}>
                <h3>Your Appointments</h3>
                <div style={{width: '50%'}}>
                    <div style={{borderBottom:'1px solid #ccc',display: 'flex', padding: '10px', justifyContent: 'space-between', background:'#87CEFA'}}>
                        <div>
                            <h4>Jane Doe</h4>
                            <p>Appointment 1 Description</p>
                        </div>
                        <h4 style={{background:'orange', padding: '10px', color: 'white'}}>Ongoing</h4>
                    </div>
                    <div style={{borderBottom:'1px solid #ccc',display: 'flex', padding: '10px', justifyContent: 'space-between'}}>
                        <div>
                            <h4>John Doe</h4>
                            <p>Medical Checkup</p>
                        </div>
                        <h4 >12:00</h4>
                    </div>
                    <div style={{borderBottom:'1px solid #ccc',display: 'flex', padding: '10px', justifyContent: 'space-between'}}>
                        <div>
                            <h4>Lee Johnson</h4>
                            <p>Medical Checkup</p>
                        </div>
                        <h4 >14:00</h4>
                    </div>
                </div>
            </div>
            <div>
                <h3>Appointment Requests</h3>
                <div onClick={handleClick} style={{width: '50%', cursor: 'pointer'}}>
                    <div style={{border:'1px solid #ccc',display: 'flex', padding: '10px', justifyContent: 'space-between'}}>
                        <div>
                            <h4>Jane Doe</h4>
                            <h5>Medical CheckUp</h5>
                            <p>29, February 10:00am</p>
                        </div>
                        <div>
                            <button style={{background: 'green', cursor: 'pointer', color: 'white',borderRadius:'50%', padding: '5px', margin: '5px'}}>&#10004;</button>
                            <button style={{background: 'red', cursor: 'pointer', color: 'white', padding: '5px' ,borderRadius:'50%', margin: '5px'}}>X</button>
                        </div>
                    </div>
                </div>
                {
                    toogle && <BackDrop/>
                }
                {
                    toogle && <Modal>
                        <div className={modalStyles.modal__header}>
                            <h1>Oliver Kemei</h1>
                            <p onClick={handleClick} style={{fontSize: '20px', cursor: 'pointer'}}>X</p>
                        </div>
                        <div className={modalStyles.modal__content}>
                            <p>Appointment Date: 29, February 10:00am</p>
                            <p>Appointment Type: Medical Checkup</p>
                            <p>Symptoms</p>
                            <ul>
                                <li>Headache</li>
                                <li>Body Pain</li>
                                <li>Stomach Ache</li>
                            </ul>
                            <button style={{color: 'blue',background: 'none', margin: '10px 20px', border: '2px solid #ccc', padding: '10px'}}>
                                <Link href={{pathname:'doctor-dashboard/patientId'}} >View Medical History</Link>
                            </button>
                        </div>
                        <div className={modalStyles.modal__action}>
                            <button className={modalStyles.approve_btn}> Approve</button>
                            <button className={modalStyles.next_btn}> Solution</button>
                            <button className={modalStyles.btn}> Cancel</button>
                        </div>
                    </Modal>
                }
            </div>
        </>
    );
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store)=> async (context: GetServerSidePropsContext) => {
        const session= await getSession(context);
        if (!session && session?.user?.isAdmin !==true) {
            return{
                redirect:{
                    destination:'/auth',
                    permanent: false
                }
            }
        }
        const doctor:IAdmin = await getADoctor(session?.user?.id);
        console.log(doctor);
        store.dispatch(setAppointments(doctor.appointments));
        console.log('State from server is: ',store.getState());
        return{
            props:{
                doctor
            }
        }
    }
)
export default DoctorDashboard;
import React from 'react';
import styles from './Modal.module.css'
type Props = {
    children: React.ReactNode
}
const Modal = (props: Props)=>(
    <div className={styles['modal']}>
        {
            props.children
        }
    </div>
)
export default Modal;
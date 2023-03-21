import React from 'react';
type PageInfoDetails={
    title: string
    path: string
}
import pageInfoStyles from './PageInfo.module.css';
import Link from 'next/link';
function PageInfoComponent(props:PageInfoDetails) {
    return (
        <div className={pageInfoStyles.pageInfo}>
            <h2>{props.title}</h2>
            <p><Link href='/'>Home</Link> &nbsp;&nbsp;»&nbsp;&nbsp; {props.path} </p>
        </div>
    );
}

export default PageInfoComponent;
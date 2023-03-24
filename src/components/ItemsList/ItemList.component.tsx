import React from 'react';
import styles from './ItemList.module.css';
import Image from 'next/image';
import Link from 'next/link'
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
type ItemsProps={
    data: ResponseData[]
}
function ItemListComponent({data}:ItemsProps) {
    return (
        <section className={styles['container']}>
            {
                data.map((it)=>(
                    <div key={it.Id} className={styles.item}>
                        <Image src={it.ImageUrl} alt={it.ImageAlt} width={200} height={200} />
                        <h3>{it.Title}</h3>
                        <p style={{color: 'blue', position:'absolute',left:'5vw', bottom: '0'}} > 
                            <Link href={{pathname: `about/${it.Id}`}} >Full Info &rarr;</Link>{" "}
                        </p>
                    </div>
                ))
            }
        </section>
    );
}

export default ItemListComponent;
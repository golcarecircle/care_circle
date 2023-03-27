import React, {useContext} from 'react';
import { HealthTipsContext } from '@/context/healthTips.context';
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
function ItemListComponent() {
    const { healthTips } = useContext(HealthTipsContext);
    console.log(healthTips);
    return (
        <section className={styles['container']}>
            {
                healthTips.map((it)=>(
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
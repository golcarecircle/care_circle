import React, { useContext } from 'react';
import { HealthTipsContext } from '@/context/healthTips.context';
import styles from './ItemList.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useSwr from 'swr';
type Section = {
  section: {
    Title: string;
    Description?: string;
    Content: React.ReactNode;
  }[];
};
export type ResponseData = {
  readonly Id: string;
  Title: string;
  ImageUrl: string;
  ImageAlt: string;
  Sections: Section;
};
function ItemListComponent() {
  const { setHealthTips, setError } = useContext(HealthTipsContext);
  const { data, error } = useSwr(
    'https://health.gov/myhealthfinder/api/v3/topicsearch.json',
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const dataReturned = data['Result'].Resources.Resource;
      let ResponseRetData = dataReturned.map(function (it: ResponseData) {
        return {
          Id: it.Id,
          ImageAlt: it.ImageAlt,
          ImageUrl: it.ImageUrl,
          Sections: it.Sections,
          Title: it.Title,
        };
      });
      return ResponseRetData;
    },
    {
      // suspense: true,
      onError: (err) => setError(err),
    },
  );
  setHealthTips(data);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <section className={styles['container']}>
      {data.map((it: ResponseData) => (
        <div key={it.Id} className={styles.item}>
          <Image src={it.ImageUrl} alt={it.ImageAlt} width={200} height={200} />
          <h3>{it.Title}</h3>
          <p
            style={{
              color: 'blue',
              position: 'absolute',
              left: '5vw',
              bottom: '0',
            }}
          >
            <Link href={{ pathname: `health-habits/${it.Id}` }}>
              Full Info &rarr;
            </Link>{' '}
          </p>
        </div>
      ))}
    </section>
  );
}
export default ItemListComponent;

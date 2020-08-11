import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import SectionHeading from 'components/SectionHeading';
import firebase from 'components/Firebase';
import BlackSection from 'components/BlackSection';
import Book from './Book';

const Hondana = styled(Grid)`
  background: #151515 url('/images/hondana.png') repeat;
  background-size: 230px, auto;
`;

const Header = styled.div`
  height: 150px;
  text-align: center;
  color: white;
`;

type Books = {
  [key: string]: firebase.firestore.DocumentData;
};

type Tsumihon = {
  books: Books;
  bookOrder: firebase.firestore.DocumentData | undefined;
};

export default function Top() {
  const db = firebase.firestore();
  const [tsumihon, setTsumihon] = useState<Tsumihon>({
    books: {},
    bookOrder: [],
  });

  useEffect(() => {
    (async () => {
      const queryBooks = await db.collection('books').get();
      const queryOrder = await db.collection('orders').doc('book_order').get();
      const bs: Books = {};
      queryBooks.forEach((doc) => {
        bs[doc.id] = doc.data();
      });
      setTsumihon({
        books: bs,
        bookOrder: queryOrder.data()?.bookOrder,
      });
    })();
  }, [db, setTsumihon]);

  /*
  let books = [];
  if (tsumihon.bookOrder) {
    books = tsumihon.bookOrder.map((key: string) => {
      const { title, url } = tsumihon.books[key];
      return <Book key={key} title={title} url={url} />;
    });
  }
  */

  return (
    <BlackSection>
      <Header>
        <SectionHeading>積み本</SectionHeading>
      </Header>
      <Hondana container justify="center">
        <Book
          url="https://www.amazon.co.jp/gp/product/B0836CF21D/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B0836CF21D&linkCode=as2&tag=hamchance0215-22&linkId=aa1fec58053a774951acaadaade07605"
          title="チームジャーニー"
          imgSrc="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B0836CF21D&
          ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=hamchance0215-22"
          imgTagSrc="//ir-jp.amazon-adsystem.com/e/ir?t=hamchance0215-22&l=am2&o=9&a=B0836CF21D"
        />
      </Hondana>
    </BlackSection>
  );
}

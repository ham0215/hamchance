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
      const queryOrder = await db.collection('orders').doc('bookOrder').get();
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

  let books = [];
  if (tsumihon.bookOrder) {
    books = tsumihon.bookOrder.map((key: string) => {
      const { title, url, imgSrc, imgTagSrc } = tsumihon.books[key];
      return <Book key={key} title={title} url={url} imgSrc={imgSrc} imgTagSrc={imgTagSrc} />;
    });
  }

  return (
    <BlackSection>
      <Header>
        <SectionHeading>積み本</SectionHeading>
      </Header>
      <Hondana container justify="center">
        {books}
      </Hondana>
    </BlackSection>
  );
}

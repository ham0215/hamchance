import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import SectionHeading from 'components/SectionHeading';
import firebase from 'components/Firebase';
import Book from 'pages/Books/Top/Book';

const Contents = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background: #151515 url('/images/tundoku.png') no-repeat center;
  background-size: 200px;
  color: #fff;
  height: 250px;
  padding: 50px 0;
`;

const Books = styled.div`
  margin: 20px 0;
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
      const queryOrder = await db
        .collection('orders')
        .doc('book_order')
        .get();
      const bs: Books = {};
      queryBooks.forEach(doc => {
        bs[doc.id] = doc.data();
      });
      setTsumihon({
        books: bs,
        bookOrder: queryOrder.data()?.book_order,
      });
    })();
  }, [db, setTsumihon]);

  let books = [];
  if (tsumihon.bookOrder) {
    books = tsumihon.bookOrder.map((key: string) => {
      const { title, url } = tsumihon.books[key];
      return <Book key={key} title={title} url={url} />;
    });
  }

  return (
    <Contents>
      <Header>
        <SectionHeading>積み本</SectionHeading>
      </Header>
      <Books>
        <ul>{books}</ul>
      </Books>
    </Contents>
  );
}

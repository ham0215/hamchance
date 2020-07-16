import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import SectionHeading from 'components/SectionHeading';
import firebase from 'components/Firebase';
// import Book from 'pages/Books/Top/Book';

const Contents = styled.div`
  text-align: center;
`;

const Hondana = styled.div`
  background: #151515 url('/images/hondana.png') center;
  background-size: contain;
`;

const AmazonImg = styled.img`
  margin: 10px 10px 50px 10px;
`;

const AmazonImgTag = styled.img`
  margin: 0px !important;
  border: none !important;
`;

const Header = styled.div`
  background: #151515 url('/images/tundoku.png') center;
  background-size: contain;
  height: 150px;
  color: #fff;
  padding: 30px 0;
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
    <Contents>
      <Header>
        <SectionHeading>積み本</SectionHeading>
      </Header>
      <Hondana>
        <a
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          href="https://www.amazon.co.jp/gp/product/B0836CF21D/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B0836CF21D&linkCode=as2&tag=hamchance0215-22&linkId=aa1fec58053a774951acaadaade07605"
        >
          <AmazonImg
            alt="hoge"
            src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B0836CF21D&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=hamchance0215-22"
          />
        </a>
        <AmazonImgTag
          src="//ir-jp.amazon-adsystem.com/e/ir?t=hamchance0215-22&l=am2&o=9&a=B0836CF21D"
          width="1"
          height="1"
          alt=""
        />
      </Hondana>
    </Contents>
  );
}

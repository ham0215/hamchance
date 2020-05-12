import React from 'react';
import TopContents from 'components/TopContents';
import Header from 'pages/Top/Header';
import About from 'pages/Top/About';
import Contents from 'pages/Top/Contents';
import Interests from 'pages/Top/Interests';
import Profile from 'pages/Top/Profile';

export default function Top() {
  return (
    <TopContents>
      <Header />
      <About />
      <Contents />
      <Interests />
      <Profile />
    </TopContents>
  );
}

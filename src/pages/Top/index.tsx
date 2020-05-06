import React from 'react';
import TopContents from 'components/TopContents';
import Header from 'pages/Top/Header';
import About from 'pages/Top/About';
import Contents from 'pages/Top/Contents';
import Skills from 'pages/Top/Skills';
import Contact from 'pages/Top/Contact';

export default function Top() {
  return (
    <TopContents>
      <Header />
      <About />
      <Contents />
      <Skills />
      <Contact />
    </TopContents>
  );
}

import React from 'react';
import styled from 'styled-components/macro';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from 'pages/Top/Header';
import About from 'pages/Top/About';
import Contents from 'pages/Top/Contents';
import Interests from 'pages/Top/Interests';
import Profile from 'pages/Top/Profile';

const TopContents = styled.div`
  background: #151515 url('/images/yarigadake.jpg') no-repeat fixed center bottom;
  background-size: cover;
  color: #fff;
  text-align: center;
`;

export default function Top() {
  
  return (
    <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["orange", "purple", "green"]}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <h3>Section 1</h3>
              </div>
              <div className="section">
                <div className="slide">
                  <h3>Slide 2.1</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div>
              </div>
              <div className="section active">
                <h3>Section hjoge</h3>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      />
  );
}

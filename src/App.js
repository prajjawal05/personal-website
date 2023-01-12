import { useState } from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/InfoFooter';

import { TABS } from './config/tabs';

import './App.css';

function App() {
  const [tab, setTab] = useState(TABS.ABOUT_ME);

  return (
    <>
      <Header currTab={tab} onClick={setTab}/>
      <Body currTab={tab}/>
      <Footer />
    </>
  );
}

export default App;

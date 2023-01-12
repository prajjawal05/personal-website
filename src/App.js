import { useState } from 'react';

import { Layout } from 'antd';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/InfoFooter';

import { TABS } from './config/tabs';

import './App.css';

function App() {
  const [tab, setTab] = useState(TABS.HOME);

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header currTab={tab} onClick={setTab}/>
      <Body currTab={tab}/>
      <Footer />
    </Layout>
  );
}

export default App;

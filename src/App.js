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
      {/* <Layout style={{ backgroundColor: "#263249" }}> */}
      <Header currTab={tab} navigateTo={setTab} />
      <Body currTab={tab} navigateTo={setTab} />
      <Footer />
    </Layout>
  );
}

export default App;

/* Todos:
1. Make it mobile responsive?
2. dark mode?
3. change resume
*/
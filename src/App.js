import { useState, useEffect } from 'react';

import { Layout } from 'antd';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/InfoFooter';
import ResumePreview from './components/ResumePreview';

import { TABS } from './config/tabs';
import { ScreenContext } from './config/context';

import './App.css';

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return width;
}

function App() {
  const [tab, setTab] = useState(TABS.HOME);
  const width = useWidth();
  return (
    <ScreenContext.Provider value={width}>
      <Layout style={{ backgroundColor: "white" }}>
        <Header currTab={tab} navigateTo={setTab} />
        <Body currTab={tab} navigateTo={setTab} />
        {/* <ResumePreview /> */}
        <Footer />
      </Layout>
    </ScreenContext.Provider>
  );
}

export default App;

/* Todos:
1. Make it mobile responsive?
2. dark mode?
3. change resume
*/
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
      <Header currTab={tab} navigateTo={setTab} />
      <Body currTab={tab} navigateTo={setTab} />
      <Footer />
    </Layout>
  );
}

export default App;

/* Todos:
1. Make it mobile responsive?
2. highlight the current area on the header.
3. dark mode?
4. complete the details.
5. add padding.
6. look into more websites.
7. say something different about the skills (add a tooltip probably stating the familiarity)
*/
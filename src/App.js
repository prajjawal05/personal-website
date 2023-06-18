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
3. complete the details (like for mktx).
4. say something different about the skills (add a tooltip probably stating the familiarity).
5. change resume
6. modify about me.
7. add cookies popup and save them locally in cookies.
*/
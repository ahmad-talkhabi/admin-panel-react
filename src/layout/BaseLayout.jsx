import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ConfigProvider, Layout, theme } from 'antd';
import BaseSidebar from './BaseSidebar';
import BaseHeader from './BaseHeader';
import BaseFooter from './BaseFooter';
import styles from './styles.module.scss';

const { Header, Content, Footer, Sider } = Layout;
export default function BaseLayout() {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ConfigProvider
      theme={{
        token: {},
        algorithm: [darkMode ? darkAlgorithm : defaultAlgorithm],
      }}
    >
      <Layout hasSider className={`${styles.baseLayout} ${darkMode ? 'dark-mode' : ''}`}>
        <Sider className={`${styles.baseSider} base-layout-bg`} width={250} theme="light">
          <BaseSidebar />
        </Sider>
        <Layout className={styles.wrapper}>
          <Header className={`${styles.header} base-layout-bg`}>
            <BaseHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </Header>
          <Content className={`${styles.content} base-layout-bg`}>
            <Outlet />
          </Content>
          <Footer className={`${styles.footer} base-layout-bg`}>
            <BaseFooter />
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

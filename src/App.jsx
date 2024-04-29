import { useEffect, useState } from 'react';
import Splash from './Components/Splash/Splash';
import { Radio, Tabs, ConfigProvider } from 'antd';
import Fade from 'react-reveal/Zoom';
import './App.css';
import Profile from './Components/Profile/Profile';
import Works from './Components/Works/Works';
import GameCard from './Components/GameCard/GameCard';
import { UserOutlined, BulbOutlined, CodeOutlined, FileOutlined } from '@ant-design/icons'; // Import icons from Ant Design

function App() {
  const [splash, setSplash] = useState(true);
  const [cardStatus, setCardStatus] = useState(false); // State to track the card status

  const tabData = {
    Profile: { content: <Profile />, icon: <UserOutlined /> },
    Works: { content: <Works />, icon: <BulbOutlined /> },
    Languages: { content: 'Working on it', icon: <CodeOutlined /> },
    Resume: { content: 'Working on it', icon: <FileOutlined /> },
    // Add more tabs as needed
  };

  const [mode, setMode] = useState('left');

  const tabItems = Object.keys(tabData).map((key) => ({
    label: key,
    key: key,
    children: tabData[key].content,
    icon: tabData[key].icon,
  }));

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 500);
  }, []);

  // Function to handle tab change
  const handleTabChange = (activeKey) => {
    setCardStatus(activeKey === 'Works'); // Update card status based on the selected tab
  };

  return (
    <>
      {splash ? (
        <div className='splash-ctn'>
          <Splash />
        </div>
      ) : (
        <div className='main-ctn'>

          <div className='card-glass'>
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    itemColor: 'rgb(168, 168, 168)',
                  },
                },
                token: {
                  // Seed Token
                  colorPrimary: 'white',
                  borderRadius: 2,
                  itemColor: 'rgb(168, 168, 168)',
                  colorBgContainer: '#f6ffed',
                },
              }}
            >
              <Tabs
                defaultActiveKey='Profile'
                tabPosition={mode}
                size='large'
                className='tabs'
                style={{
                  height: '100%',
                }}
                onChange={handleTabChange} // Call handleTabChange when tab changes
              >
                {tabItems.map((tab) => (
                  <Tabs.TabPane tab={<span>{tab.icon} {tab.label}</span>} key={tab.key}>
                    {tab.children}
                  </Tabs.TabPane>
                ))}
              </Tabs>
            </ConfigProvider>
          </div>

          <div>
            {/* Conditionally render based on cardStatus */}
            {cardStatus ? <div className='card-game-glass fade-in-text'><GameCard /></div> : null}
          </div>
        </div>
      )}
    </>
  );
}

export default App;

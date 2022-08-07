import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {useState} from 'react';
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import {Layout} from 'antd';
import CurateLogo from './images/curate.png';
import { SearchOutlined, DownCircleOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';
import AudioPlayer from './components/AudioPlayer';


const { Sider, Content } = Layout;


const App = () => {

  const [nftAlbum, setNftAlbum] = useState()
  

  return(
    <Layout>
      <Layout>
        <Sider width={300} className="sideBar">
          <img src={CurateLogo} className="logo"/> <span style={{fontSize: "40px", margin: "10px"}}>CURATE</span>
          <div className='searchBar'> 
            <span> Search </span>
            <SearchOutlined style={{ fontSize: "30px"}}/>
          </div>
          <Link to="/">
            <p style={{color: "#1DB954"}}>Home</p>
          </Link>
          <p> All Crates </p>
          <p> Your Vinyls </p>

          <div className='recentPlayed'>
            <p className='recentTitle'>RECENTLY MINTED VINYLS</p>
            <div className='install'>
              <span>Submit Your Song</span>
              <DownCircleOutlined/>
            </div>
          </div>
        </Sider>
        <Content className="contentWindow">
          
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
        </Routes>
        </Content>
      </Layout>
      <Footer className='footer'>
        {nftAlbum &&
          <AudioPlayer nftAlbum={nftAlbum}/>
        }
      </Footer>
    </Layout>
    

    
  
  
    )
};

export default App;

import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from 'antd';
import { library, Library } from "../helpers/albumList";
import { useMoralis, useWeb3ExecuteFunction, useMoralisWeb3Api, useMoralisQuery } from "react-moralis";
import { ConnectButton } from '@web3uikit/web3';




const {TabPane} = Tabs;  

const Home = () => {

  
  const {Moralis, account, isAuthenticated} = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  const Web3API = useMoralisWeb3Api()


  const mint = async () => {
    alert("Still Need To Work On Mint Function");
  }

return(
  <>
  
    
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="FEATURED" key="1">
        <h1 className="featuredTitle">MINT THE CURRENT CRATE:</h1>
        <div className='albums'>
          {library.slice(0,1).map((e) => (
            <>
              <Link to="/album" state={e} className="albumSelection">
                <img src={e.image} alt="album" style={{width: "150px", marginBottom: "10px"}} />
                <p>{e.title}</p>
              </Link>
              
              <div className="playButton"  
              style={{maxHeight: "42px"}}
              onClick={() => (

                mint()
              )}>
                MINT
              </div>
            </>
            
            
          ))}
        </div>
        
        <br/><br/>
        <h1 className="featuredTitle">PREVIOUS CRATES:</h1>
        <div className='albums'>
          {library.slice(1,3).map((e) => (
            <Link to="/album" state={e} className="albumSelection">
              <img src={e.image} alt="album" style={{width: "150px", marginBottom: "10px"}} />
              <p>{e.title}</p>
            </Link>
            
          ))}
        </div>
      </TabPane>
      <TabPane tab="GENRES" key="2">
        <h1 className="featuredTitle">All Crates:</h1>
          <div className='albums'>
            {library.slice(0,3).map((e) => (
              <Link to="/album" state={e} className="albumSelection">
                <img src={e.image} alt="album" style={{width: "150px", marginBottom: "10px"}} />
                <p>{e.title}</p>
              </Link>
              
            ))}
          </div>
        <h1 className="featuredTitle">Accoustic Crates:</h1>
        <div className='albums'>
          {library.slice(0,1).map((e) => (
            <Link to="/album" state={e} className="albumSelection">
              <img src={e.image} alt="album" style={{width: "150px", marginBottom: "10px"}} />
              <p>{e.title}</p>
            </Link>
            
          ))}
        </div>
        <h1 className="featuredTitle">Electro Crates:</h1>
        <div className='albums'>
          {library.slice(1,2).map((e) => (
            <Link to="/album" state={e} className="albumSelection">
              <img src={e.image} alt="album" style={{width: "150px", marginBottom: "10px"}} />
              <p>{e.title}</p>
            </Link>
            
          ))}
        </div>
        <h1 className="featuredTitle">Pop Crates:</h1>
        <div className='albums'>
          {library.slice(2,3).map((e) => (
            <Link to="/album" state={e} className="albumSelection">
              <img src={e.image} alt="album" style={{width: "150px", marginBottom: "10px"}} />
              <p>{e.title}</p>
            </Link>
            
          ))}
        </div>
      </TabPane>
      <TabPane tab="ABOUT CURATE" key="3">
      <h1 className="featuredTitle">SUBMIT YOUR MUSIC AND GET IN THE NEXT CRATE:</h1>
      <p >We launch crates stocked with music from musicians at all levels of their web3 journey.</p>
      <p>That means that every artist has an equal oppertunity to have their song minted.</p>
      <p>Revolving & Limited supply of 100 songs per crate</p>
      <p>Get digging!</p>
      <p>All Drops are stored on NFT.Storage & made with Zora NFT Creator!</p>
      </TabPane>
    </Tabs>
  </>
)
}

export default Home;

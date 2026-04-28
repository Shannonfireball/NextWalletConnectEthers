"use client"

import { ethers } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import WalletConnectNav from "./WalletConnectNav";
import StoreValue from "./StoreValue";

export default function Layout() {
    const [hasMetamask, setHasMetamask] = useState(false);

    const [isConnected, setIsConnected] = useState(false);
    const [provider, setProvider] = useState();
    const [signer, setSigner]: any = useState();
  

    useEffect(()=>{
        if( typeof window?.ethereum !== "undefined" ){
            setHasMetamask(true);
        }
    },[])

    async function connect(){
      if( typeof window?.ethereum !== "undefined" ){
        try {
          await ethereum.request({ method: "eth_requestAccounts" });
  
          let connectedProvider = new ethers.BrowserProvider(window.ethereum);
          setSigner(await connectedProvider.getSigner());
          setIsConnected(true);
        } catch (error) {
          console.log("error",error)
        }
      } else {
        setIsConnected(false);
      }
    }

    async function execute() {
        try {
            
            // address
            const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
            // contract ABI
            const abi = [{"type":"function","name":"adPerson","inputs":[{"name":"_name","type":"string","internalType":"string"},{"name":"_magicNumber","type":"int256","internalType":"int256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"getFavoriteNumberUsingName","inputs":[{"name":"","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"int256","internalType":"int256"}],"stateMutability":"view"},{"type":"function","name":"janeDoe","inputs":[],"outputs":[{"name":"magicNumber","type":"int256","internalType":"int256"},{"name":"name","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"jhonDoe","inputs":[],"outputs":[{"name":"magicNumber","type":"int256","internalType":"int256"},{"name":"name","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"listOfPeople","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"magicNumber","type":"int256","internalType":"int256"},{"name":"name","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"magicNumber","inputs":[],"outputs":[{"name":"","type":"int256","internalType":"int256"}],"stateMutability":"view"},{"type":"function","name":"retrive","inputs":[],"outputs":[{"name":"","type":"int256","internalType":"int256"}],"stateMutability":"view"},{"type":"function","name":"store","inputs":[{"name":"_magicNumber","type":"int256","internalType":"int256"}],"outputs":[],"stateMutability":"nonpayable"}];
    
            const contract = new ethers.Contract(contractAddress, abi, signer);
            await contract.store(701);
        } catch (error) {
            console.log("error",error)
        }

    }  
  return (
    <div>
        <WalletConnectNav isConnected={isConnected} connect={connect} hasMetamask={hasMetamask} />
        { hasMetamask ? isConnected ? <StoreValue execute={execute} /> : "Connect" : "Install Metamask" } 
    </div>
  )
}

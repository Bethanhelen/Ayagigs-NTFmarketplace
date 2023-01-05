import Navbar from "./Navbar";
import hero from "../hero.jpg"
import NFTTile from "./NFTTile";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";

export default function Marketplace() {
const sampleData = [
    {
        "name": "NFT#1",
        "description": "Alchemy's First NFT",
        "website":"http://axieinfinity.io",
        "image":"https://gateway.pinata.cloud/ipfs/QmTsRJX7r5gyubjkdmzFrKQhHv74p5wT9LdeF1m3RTqrE5",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "NFT#2",
        "description": "Alchemy's Second NFT",
        "website":"http://axieinfinity.io",
        "image":"https://gateway.pinata.cloud/ipfs/QmdhoL9K8my2vi3fej97foiqGmJ389SMs55oC5EdkrxF2M",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "NFT#3",
        "description": "Alchemy's Third NFT",
        "website":"http://axieinfinity.io",
        "image":"https://gateway.pinata.cloud/ipfs/QmTsRJX7r5gyubjkdmzFrKQhHv74p5wT9LdeF1m3RTqrE5",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
];
const [data, updateData] = useState(sampleData);

return (
    <div>
        <Navbar></Navbar>
        <div className="flex justify-evenly items-center flex-wrap max-w-screen-xl mt-20">
            <div className="md:text-xl font-medium text-purple 200 ml-12">
                <h2 className="text-5xl text-purple-200 pb-5 w-7/12">Discover, Collect & Sell Popular Nfts</h2>
                <p className="text-purple-200 pb-12 w-5/12 opacity-80">The world biggest collection of crypto collectible & Non-fungible token</p>
                <a className="bg-blue-500 text-purple-900 font-bold py-2 px-4 rounded text-sm" href="#">Create Nfts</a>
            </div>
            <div className="mt-5 flex-wrap max-w-screen-xl">
                <img src={hero} alt="" width={420} height={420} className="inline-block -mt-2"/>
            </div>
        </div>       
        <div className="flex flex-col place-items-center mt-20 bg-slate-900">
            <div className="md:text-4xl font-bold text-purple-200 pt-8">
                Awesome NFTs Art Sell and Earn
            </div>
            <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
                {data.map((value, index) => {
                    return <NFTTile data={value} key={index}></NFTTile>;
                })}
            </div>
        </div>        
        <div className="flex justify-evenly items-center flex-wrap max-w-screen-xl mt-20">
            <div className="md:text-2xl text-purple-200 pt-8">
                <h2 className="text-4xl text-purple-200 pb-4 font-bold">Newsletters</h2>
                <p className="text-purple-200 pb-12 opacity-80 text-xl">Get the latest popular NFTs with minimum price</p>
            </div>
            <div className="mt-5 flex-wrap max-w-screen-xl">
                <input className="py-2 px-6 bg-transparent border-purple-200 border-2 text-purple-200" type="email" placeholder="Enter your email"/>
                <button className="bg-blue-500 text-purple-900 font-bold py-3 px-4 text-sm border-1 border-blue-500 rounded-r rounded-b" href="#">Subscribe</button>
            </div>
        </div>          
    </div>
);

}
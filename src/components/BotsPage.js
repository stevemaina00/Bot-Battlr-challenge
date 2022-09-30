import React, { useState , useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "http://localhost:8002/bots";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([]);
  
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(setBots)
  },[])

  function botList(bot){
    console.log(bot);
    setBots(bots.map(b => b.id === bot.id ? {...b, army:true} : b));
  }

  function removeBot(bot){
    console.log(bot);
    setBots(bots.map(b => b.id === bot.id ? {...b, army:false} : b));
  }

  function BotDelete(bot){
    // console.log("You're fired.")
    setBots(bots.filter(b => b.id !== bot.id))
  }
  return (
    <div>
      <YourBotArmy 
      bots={bots.filter(b => b.army)}
      removeBot ={removeBot}
      BotDelete={BotDelete}
      />

      <BotCollection 
      bots={bots}
      botList={botList}
      deleteBot={BotDelete}
      />
    </div>
  )
}

export default BotsPage;

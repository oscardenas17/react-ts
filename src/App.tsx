import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import {Sub} from './types.d'

const INITIAL_STATE = [
  {
    nick: "osdacaur",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Osdacaur is a streaming",
  },
  {
    nick: "yesido",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=yesido",
  },
];
// interface Sub {
//   nick: string;
//   avatar: string;
//   subMonths: number;
//   description?: string;
// }

interface AppState {
  subs:  Array<Sub>
  newSubsNumber: number
}

function App() {
  // const [subs, setsubs] = useState<Array<Sub>>([]);
  const [subs, setsubs] = useState<AppState['subs']>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0);
  // const [subs, setsubs] = useState([
  //  {
  //   nick: 'osdacaur',
  //   subMonths: 3,
  //   avatar: 'https://i.pravatar.cc/150?u=dapelu',
  //   description: 'Osdacaur is a streaming'
  // },
  // {
  //   nick: 'yesido',
  //   subMonths: 2,
  //   avatar: 'https://i.pravatar.cc/150?u=yesido',
  // }
  // ])

  useEffect(() => {
    setsubs(INITIAL_STATE);
  }, []);

  //props de formulario
  const handleNewSub = (newSub: Sub): void => {
    setsubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }

  return (
    <div className="App">
      <h1>Streaming Subs</h1>
      <List subs={subs}/>
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;

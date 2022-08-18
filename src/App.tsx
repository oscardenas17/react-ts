import React, { useEffect, useState } from "react";
import "./App.css";

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
interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

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

  return (
    <div className="App">
      <h1>Streaming Subs</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick} (<small>{sub.subMonths}</small>){" "}
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

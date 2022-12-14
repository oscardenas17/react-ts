import { render } from '@testing-library/react';
import {Sub} from '../types.d'
interface Props {
  subs: Array<Sub>;
}
// interface Props {
//   subs: Array<{
//     nick: string;
//     avatar: string;
//     subMonths: number;
//     description?: string;
//   }>;
// }


// const List: React.FC<Props> = ({ subs }) => {
    const List = ({ subs }: Props) => {

        //Renderlist
        const renderList = (): JSX.Element[]=> {
            return subs.map( sub => {
                return (
                  <li key={sub.nick}>
                    <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                    <h4>
                      {sub.nick} (<small>{sub.subMonths}</small>){" "}
                    </h4>
                    <p>{sub.description?.substring(0, 100)}</p>
                  </li>                );
              })
            }
        

  return (
    <ul>
        {renderList()}
      {/* {subs.map((sub) => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>
              {sub.nick} (<small>{sub.subMonths}</small>){" "}
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        );
      })} */}
    </ul>
  )
};

export default List;

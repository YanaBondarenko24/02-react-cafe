import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import { useState } from 'react'
import { type Votes} from '../../types/votes.ts'



export default function App() {
  const [votes, setVotes] = useState<Votes>({
	good: 0,
	neutral: 0,
	bad: 0
});
const [isResetVisible, setIsResetVisible] = useState<boolean>(false);

  const handleVote = ( type : keyof Votes )=> {
    setVotes({...votes,
      [type] : votes[type] + 1});
      setIsResetVisible(true);
    };
    
    
    
    const resetVotes = () => {
      
    setIsResetVisible(false);
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });

  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
      ? Math.round((votes.good / totalVotes) * 100)
      : 0;
  return (
   <div className={css.app}>
    <CafeInfo/>
    <VoteOptions onVote = {handleVote} onReset = {resetVotes} canReset = {isResetVisible}/>
    <VoteStats votes = {votes} totalVotes = {totalVotes} positiveRate = {positiveRate}/>
   </div>
  );
}

 
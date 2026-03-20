import css from './VoteStats.module.css'
import {type Votes} from '../../types/votes.ts'
import Notification from '../Notification/Notification.tsx';

export interface VoteStatsProps{
votes: Votes; 
totalVotes : number;
positiveRate : number;
}
export default function VoteStats({votes, totalVotes, positiveRate}: VoteStatsProps) {

    return(
        <>
  { totalVotes > 0 ? ( 
    <div className={css.container}>
  <p  className={css.stat}>Good: <strong > {votes.good}</strong></p>
  <p  className={css.stat}>Neutral: <strong> {votes.neutral}</strong></p>
  <p  className={css.stat}>Bad: <strong> {votes.bad}</strong></p>
  <p  className={css.stat}>Total: <strong> {totalVotes}</strong></p>
  <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
</div>) : (<Notification/>)}
</>
);
}
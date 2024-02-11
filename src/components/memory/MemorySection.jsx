import { Button } from '../atom/Button';
import { SectionWrapper } from '../atom/SectionWrapper';
import { Typography } from '../atom/Typography';
import { MemoryBoard } from './MemoryBoard';
import { MemoryContextProvider, useMemory } from './MemoryProvider';

export const MemorySection = () => {

  return (
    <SectionWrapper title="You're boring ? Let's play a game !">
      <MemoryContextProvider>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-2">
            <TriedCountsText/>
            <MemoryBoard />
            <ResetButton/>
          </div>
        </div>
      </MemoryContextProvider>
    </SectionWrapper>
  );
};

const ResetButton = () => {
  const {reset} = useMemory();
  return <Button onClick={reset}>Reset</Button>
}

const TriedCountsText = () => {
  const {tryCounts, finishedMemory} = useMemory();

  if(finishedMemory) {
    return <Typography>Congrats, you win in {tryCounts} times !</Typography>
  } else {
    return <Typography>You tried {tryCounts} times.</Typography>
  }
}
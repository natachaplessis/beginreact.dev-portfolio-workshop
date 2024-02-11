import { SectionWrapper } from '../atom/SectionWrapper';
import { Loader } from '../atom/Loader/Loader';
import { Project } from './Project';
import { GITHUB_USERNAME } from '../../lib/config'
import { getListOfUrlRepositoriesUrl } from '../../lib/api-url';
import { useFetch } from '../../hooks/useFetch';

export const ProjectSection = () => {

  const {
    status, 
    data : projects, 
    error
  } = useFetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME));

  if(status === 'pending' || status === 'idle') {
    return (
      <SectionWrapper title="Projects">
        <Loader />
      </SectionWrapper>
    );
  }

  if(error) {
    return (
      <SectionWrapper title="Projects">
        <p>Error !</p>  
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {projects?.map(repository =>{
          return <Project key={repository.name} {...repository} />})}
      </div>
    </SectionWrapper>
  );
};

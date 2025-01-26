import { useState, useEffect, useRef } from 'react';
import Form from './components/Form/Form';
import RepoList from './components/RepoList/RepoList';

function App() {

  const [currentUser, setCurrentUser] = useState('');
  const [repos, setRepos] = useState([]);
  const firstRender = useRef(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const resp = await fetch(`https://api.github.com/users/${currentUser}/repos`);
        const data = await resp.json();
  
        setRepos(data);
      } catch(e) {
        console.log(e);
      }
    }

    if(firstRender.current) {
      firstRender.current = false;
      return;
    }
  
    fetchRepos();
    
  }, [currentUser])

  return (
    <>
      <div>
        <Form setCurrentUser={setCurrentUser} />
        {repos.length > 0 ? <RepoList repos={repos}/> : <></>}
      </div>
    </>
  )
}

export default App

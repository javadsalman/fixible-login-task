import React from 'react';
import './App.css';
import LoginMain from './components/Login/LoginMain';
import LoginVerification from './components/Login/LoginVerification';
function App() {

  const [page, setPage] = React.useState('login');

  const currentPage = React.useMemo(() => {
    if(page === 'login') {
      return <LoginMain setPage={setPage}/>
    }
    else if(page === 'verification') {
      return <LoginVerification setPage={setPage}/>
    }
  }, [page])

  return (
    <div className="App">
      {currentPage}
    </div>
  );
}

export default App;

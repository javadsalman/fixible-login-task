import React from 'react';
import './App.css';
import LoginMain from './components/Login/LoginMain';
import LoginVerification from './components/Login/LoginVerification';
function App() {

    const [page, setPage] = React.useState<'verification'|'login'>('verification');
    const [email, setEmail] = React.useState<string>('');

    const currentPage = React.useMemo(() => {
        if (page === 'login') {
            return <LoginMain setPage={setPage} onChangeEmail={setEmail} />
        }
        else if (page === 'verification') {
            return <LoginVerification setPage={setPage} email={email} />
        }
    }, [page, email])

    return (
        <div className="App">
            <div className='flex items-center justify-center h-screen bg-custom-white'>
                <div className='h-[550px] w-[400px]'>
                    {currentPage}
                </div>
            </div>
        </div>
    );
}

export default App;

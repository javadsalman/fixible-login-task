import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';;


interface IProps  {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

const LoginMain = (props: IProps) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [btnLoading, setBtnLoading] = React.useState<boolean>(false);


    const emailRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)

    const submitHandler = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmail(emailRef.current?.value!);
        setPassword(passwordRef.current?.value!);
        setBtnLoading(true);
        setTimeout(() => {
            setBtnLoading(false);
            props.setPage('verification');
        }, 1000)
    }, []);


    return (
        <div className='flex items-center justify-center h-screen bg-custom-white'>
            <div className='py-4 px-7 flex gap-9 flex-col items-center bg-custom-white rounded-lg w-96 h-1/2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
                <div>logo</div>
                <div className='font-semibold text-green-500'>WELCOME</div>
                <form onSubmit={submitHandler} className='flex flex-col gap-6 items-center w-full'>
                    <input type="email" ref={emailRef} placeholder='Email' className='border-2 border-gray-500 rounded-lg px-2 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full' />
                    <input type="password" ref={passwordRef} placeholder='Password' className='border-2 border-gray-500 rounded-lg px-2 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full' />
                    {btnLoading ? <button className='bg-custom-green text-white rounded-lg px-2 py-3 font-bold w-full'>Loading...</button> : <button className='bg-custom-green text-white font-bold rounded-lg px-2 py-3 w-full'>SEND CODE</button>}
                </form>
                <div>
                    <p>Need assistance? <a href='#' className='text-blue-600'>Call us</a></p>
                </div>

                <div className='w-full flex flex-col gap-2 items-center'>
                <hr className='w-full '/>
                    <span className='font-bold text-xs text-gray-400'>FOLLOW US ON SOCIAL MEDIA</span>
                    <div className='flex justify-center gap-7'>
                        <FacebookIcon  color='disabled'/>
                        <InstagramIcon color='disabled'/>
                        <TwitterIcon color='disabled'/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginMain

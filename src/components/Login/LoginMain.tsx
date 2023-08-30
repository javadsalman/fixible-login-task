import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Slide from '@mui/material/Slide';
import TwitterIcon from '@mui/icons-material/Twitter';;


interface IProps {
    setPage: (page: 'verification'|'login') => void,
    onChangeEmail: (email: string) => void
}

const LoginMain = (props: IProps) => {
    const [btnLoading, setBtnLoading] = React.useState<boolean>(false);

    const containerRef = React.useRef<HTMLDivElement>(null);

    const emailRef = React.useRef<HTMLInputElement>(null)
    const passwordRef = React.useRef<HTMLInputElement>(null)

    const submitHandler = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = emailRef.current?.value!;
        const password = passwordRef.current?.value!;
        if (!email || !password) return alert('Please fill all the fields');
        setBtnLoading(true);
        props.onChangeEmail(emailRef.current?.value!);
        setTimeout(() => {
            setBtnLoading(false);
            props.setPage('verification');
        }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div ref={containerRef} className='overflow-hidden py-4 px-7 bg-custom-white rounded-lg w-96 h-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
            <Slide direction='right' timeout={1000} in={true} mountOnEnter unmountOnExit container={containerRef.current}>
                <div className='flex gap-9 flex-col items-center h-full w-full'>
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
                        <hr className='w-full ' />
                        <span className='font-bold text-xs text-gray-400'>FOLLOW US ON SOCIAL MEDIA</span>
                        <div className='flex justify-center gap-7'>
                            <FacebookIcon color='disabled' />
                            <InstagramIcon color='disabled' />
                            <TwitterIcon color='disabled' />

                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default LoginMain

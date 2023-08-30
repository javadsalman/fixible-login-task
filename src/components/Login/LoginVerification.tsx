import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface IProps  {
    setPage: React.Dispatch<React.SetStateAction<string>>
}

const LoginVerification = (props: IProps) => {

    const [btnLoading, setBtnLoading] = React.useState<boolean>(false);
    const [code1, setCode1] = React.useState<string>('');
    const [code2, setCode2] = React.useState<string>('');
    const [code3, setCode3] = React.useState<string>('');
    const [code4, setCode4] = React.useState<string>('');
    const [code5, setCode5] = React.useState<string>('');
    const [code6, setCode6] = React.useState<string>('');

    const validateNumberInput = React.useCallback((value: string) => {
        const codeRegex = /^\d{1}$/;
        if(value.length === 0 || codeRegex.test(value)) {
            setCode1(value);
            
        }
    }, [])

    return (
        <div className=' flex items-center justify-center h-screen bg-custom-white'>
            <div className=' relative py-4 px-7 flex gap-9 flex-col items-center bg-custom-white rounded-lg w-96 h-1/2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
                <div className='absolute left-0 top-0 pt-4 ps-2 flex'>
                {<ChevronLeftIcon/>} <button className='text-gray-400 font-semibold' onClick={() => {props.setPage('login')}}>Back</button>
                </div>
                <div>logo</div>
                <div className='font-semibold text-green-500'>WELCOME</div>
                <p className='font-semibold text-sm text-center'>Enter the one-time access code sent to the email you entered</p>
                <div className='flex items-center gap-2 sont font-semibold text-sm'>
                    <p className='font-bold text-sm'>fuadqasimov000@gmail.com </p>
                    <a className='text-blue-600' href="#">Change</a>
                </div>
                <form className=' w-full'>
                    <div className='grid grid-cols-6 gap-1'>
                    <input type="number" onChange={(e) => validateNumberInput(e.target.value)} value={code1} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' />
                    <input type="number" onChange={(e) => validateNumberInput(e.target.value)} value={code2} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' />
                    <input type="number" onChange={(e) => validateNumberInput(e.target.value)} value={code3} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' />
                    <input type="number" onChange={(e) => validateNumberInput(e.target.value)} value={code4} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' />
                    <input type="number" onChange={(e) => validateNumberInput(e.target.value)} value={code5} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' />
                    <input type="number" onChange={(e) => validateNumberInput(e.target.value)} value={code6} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' />
                    </div>
                    {btnLoading ? <button className='bg-custom-green text-white rounded-lg px-2 py-3 font-bold w-full mt-6'>Loading...</button> : <button className='bg-custom-green text-white font-bold rounded-lg px-2 py-3 w-full mt-6'>SEND CODE</button>}

                </form>
                <div>
                    <p>Need assistance? <a href='#' className='text-blue-600'>Call us</a></p>
                </div>
            </div>
        </div>
    )
}


export default LoginVerification
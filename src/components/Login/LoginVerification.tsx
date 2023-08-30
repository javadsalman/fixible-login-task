import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Slide from '@mui/material/Slide';

interface IProps {
    setPage: (page: 'verification'|'login') => void,
    email: string
}

const INPUT_COUNT = 6

const LoginVerification = (props: IProps) => {

    const [numberList, setNumberList] = React.useState<string[]>(new Array(INPUT_COUNT).fill(''));

    const containerRef = React.useRef<HTMLDivElement>(null);

    const inputWrapperRef = React.useRef<HTMLDivElement>(null);

    const numberInputChangeHandler = React.useCallback((value: string, index: number) => {
        let nextIndex;
        if (!value) {
            setNumberList(prev => {
                const newNumberList = [...prev];
                newNumberList[index] = value
                return newNumberList
            })
            nextIndex = index && index - 1;
        } else {
            const newValue = Array.from(value).slice(+!!numberList[index], INPUT_COUNT-index+1)
            setNumberList(prev => {
                const newNumberList = [...prev];
                newValue.forEach((char, i) => {
                    newNumberList[index + i] = char
                })
                return newNumberList
            })
            nextIndex = (index + newValue.length) % INPUT_COUNT;
        }
        const nextInput = inputWrapperRef.current!.children[nextIndex] as HTMLInputElement;
        nextInput.focus();
    }, [numberList])

    return (
        <div ref={containerRef} className='w-full relative overflow-hidden bg-custom-white h-full rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
            <Slide direction='left' timeout={1000} in={true} mountOnEnter unmountOnExit container={containerRef.current}>
                <div className='relative py-4 px-7 flex gap-9 flex-col items-center h-full w-full'>
                    <div className='absolute left-0 top-0 pt-4 ps-2 flex cursor-pointer' onClick={() => { props.setPage('login') }}>
                        {<ChevronLeftIcon />} <button className='text-gray-400 font-semibold'>Back</button>
                    </div>
                    <div className='text-center'>logo</div>
                    <div className='font-semibold text-green-500 text-center'>WELCOME</div>
                    <p className='font-semibold text-sm text-center'>Enter the one-time access code sent to the email you entered</p>
                    <div className='flex items-center gap-2 sont font-semibold text-sm justify-center'>
                        <p className='font-bold text-sm'>{props.email}</p>
                        <a className='text-blue-600' href="#">Change</a>
                    </div>
                    <div>
                        <div className='px-6'>
                            <div className='mb-2 font-semibold'>SMS Code</div>
                            <div className='grid grid-cols-6 gap-1' ref={inputWrapperRef}>
                                {numberList.map((numberString, index) => {
                                    return <input key={index} type="number" onChange={e => numberInputChangeHandler(e.target.value, index)} value={numberString} className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' />
                                })}
                            </div>
                        </div>
                        <button className='bg-custom-green text-white font-bold rounded-lg px-2 py-3 w-full mt-6'>SEND CODE</button>
                    </div>
                    <div>
                        <p className='text-center'>Need assistance? <a href='#' className='text-blue-600'>Call us</a></p>
                    </div>
                </div>
            </Slide>
        </div>
    )
}


export default LoginVerification

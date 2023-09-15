import React, { useEffect, useState } from 'react';
import jsondata from '../../src/assets/Questionaire.json';
import YesNoCheckbox from '../components/YesNoCheckbox';
import RatingInput from '../components/RatingInput';
import MCQInput from '../components/MCQInput';

export default function FeedbackForm() {
    const data = jsondata;
    const [current, setCurrent] = useState("");
    const [currentQuestions, setCurrentQuestions] = useState([])
    useEffect(() => {

    }, [])
    const handleCategoryChange = (item) => {
        setCurrent(Object.keys(item)[0].toString())
        setCurrentQuestions(item[Object.keys(item)[0]])
    }
    return (
        <>
            <div className='flex-col gap-4 items-center justify-center w-full h-full  bg-white'>

                <div className='bg-blue-500 min-h-[2.5rem] max-h-full w-full flex justify-center'>
                    <span className='text-2xl text-white p-4 font-bold'>CLEVEO FORM</span>
                </div>

                <div className='relative overflow-y-scroll'>
                    {current != "" ?
                        <div className='absolute z-10 w-full h-full bg-white'>
                            <span className='text-2xl text-bold font-sans ml-4'>{current}</span>

                            {/* Level Indicator */}
                            <div className="h-2 bg-white border-2 mt-2 w-[90%] ml-4 rounded-md">
                                <div
                                    className="h-full bg-blue-300 rounded-md"
                                    style={{
                                        width: `${(1 / currentQuestions.length) * 100}%`,
                                    }}></div>

                            </div>
                            {/** Form will be rendered here  */}
                            <div className='ml-4 '>
                                <form>
                                    {currentQuestions.map((question,index)=>{
                                        return(
                                            <div className='mt-1 border-b-2'>
                                            <label className='font-sans text-md font-bold' >{`${(index+1)}. ${question["Question"]}`}</label>
                                            {/* Conditions for Option will be handled here */}
                                            {question['Type']==="boolean"?<YesNoCheckbox/>:null}
                                            {question['Type']==="rating"?<RatingInput/>:null}
                                            {question['Type']==="mcq"?<MCQInput options={(question['Options'].split(','))}/>:null}
                                            {question['Sub-Question']!==""?<div className='mb-2'>
                                            <label className='font-sans text-md font-bold' >{`${question["Sub-Question"].split(",")[1]}`}</label>
                                            {question['subQuestionType']==="boolean"?<YesNoCheckbox/>:null}
                                            {question['subQuestionType']==="rating"?<RatingInput/>:null}
                                            {question['subQuestionType']==="mcq" ?<MCQInput options={(question['Suboptions'].split(','))}/>:null}
                                            </div>:null}
                                            </div>
                                        );
                                    })}
                                </form>
                            </div>
                        </div> : ""}
                    <div className='ml-4 mt-6'>
                        <span className='text-xl font-bold'>Please fill in the details:</span>
                    </div>
                    {data.map((item, index) => (
                        <div className='font-sans p-2 flex-col mt-2 ml-4' key={index}>
                            <div className='mb-2 text-xl text-bold' onClick={() => handleCategoryChange(item)}>{Object.keys(item)[0]}</div>
                            <div className='w-[96%] border-b-2 border-slate-300'></div>
                        </div>))}


                </div>

            </div>
            <div className='z-20 flex justify-end sticky bottom-0 bg-white h-12'>
                <button className=' bg-slate-400 text-white text-2xl w-[7rem] p-2 rounded-xl mr-4  font-sans' onClick={() => setCurrent("")}>SUBMIT</button>
            </div>
        </>
    );
}

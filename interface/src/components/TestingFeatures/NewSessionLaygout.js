import { Link } from "react-router-dom"
import React, { useState } from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import CreateOrUpdateSession from "../Features/Create&UpdateSession";
import CreateOrUpdateSection from "../Features/CreateOrUpdateSection";
import { baseUrl } from "../../Share";
import QuizAppInternal from "./QuizzAppInternalData";
import Exercise from "./Exercise";
export default function NewSessionLayout({sessionData, sectionsData, sessionID, exercisesData}){
    const [session, setSession] = useState(sessionData);
    const [sections, setSections] = useState(sectionsData);
    const [exercises, setExercises] = useState(exercisesData);
    console.log(exercises);
    
    function updateSession (newSession){
        setSession(newSession);
    }
    function addSection (newSection){
        setSections([ ...sections, newSection]);
    }
    const [deleting, setDeleting] = useState(false);
    function deleteSection(sectionID){
        if (deleting) return;
        console.log("Deleting");
        setDeleting(true);
        const url = baseUrl + 'api/section/' + sectionID;
        fetch(url, {
        method:'DELETE', 
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('access'),}
        }).then((response) => {
            console.log(response);
            setDeleting(false);
            if (response.ok){
                let newSections = [];

                for(let i=0; i< sections.length; i++)
                {
                    if(sections[i].id !== sectionID){
                        newSections.push(sections[i]);
                    }
                
                }
                setSections(newSections);
            }
        }).catch((error) => {
            console.error("Error deleting section:", error);
            setDeleting(false); // Reset deleting state on error
        });


        

       // if(error) console.log(data, loading, error);
    }
    function updateSection( newSection){
        let newSections = [];

        for(let i=0; i< sections.length; i++){
            if(sections[i].id === newSection.id){
                newSections.push(newSection);
            }
            else newSections.push(sections[i]);
        }
        setSections(newSections);

    }
    //sections = props.sections;
    const works = [
        {name: "Vocab review", bgCardUrl:"https://img.freepik.com/premium-photo/full-shot-girl-learning-math-school_23-2150470852.jpg?w=826" , role:"after", content:{}},
        {name: "Grammar Workshop", bgCardUrl:"https://img.freepik.com/free-photo/front-view-kids-cheating-school_23-2150256562.jpg?t=st=1708662637~exp=1708663237~hmac=97662325185a25662376590d356c1ba8631867e29dfb6e501d14b5d3e25044f9" , role:"after", content:{}},
        {name: "Listening Upskill", bgCardUrl:"https://img.freepik.com/free-photo/front-view-smiley-girl-near-board_23-2150256560.jpg?size=626&ext=jpg" , role:"in", content:{}},

    ];
    console.log(session,"session");
    function textToParagraphs(text){
        return <React.Fragment>
            {text.split('\n').map((paragraph, index) => (

             <p key={index}>{paragraph}</p>
          ))}
          </React.Fragment>
    }
    function textToListItems(text){
        return <React.Fragment>
            {text.split('\n').map((paragraph, index) => (

             <li key={index} className="flex flex-row mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>

                {paragraph}
                </li>
          ))}
          </React.Fragment>
    }
    const backgroundImageUrl = 'https://img.freepik.com/free-photo/top-view-photo-camera-indoors-still-life_23-2150630621.jpg?t=st=1708835782~exp=1708839382~hmac=2a0830b47f9d0e2cdaaf3576d004954cc3054d9a421b75971eaa375e4c89c7de&w=826';

    const containerStyle = {
        backgroundImage: `url('${backgroundImageUrl}')`,};
    
    

return(
    <>              <div className="grid grid-cols-4">
                        <div className="flex flex-col-reverse gap-2 py-2">
                            <div className=" bg-gray-800 rounded-lg w-full font-bold text-lg px-4 py-2 text-white">  Introduction</div>
                            <div className=" bg-gray-800 rounded-lg w-full font-bold text-lg px-4 py-2 text-white">  Content</div>
                            <div className=" bg-gray-800 rounded-lg w-full font-bold text-lg px-4 py-2 text-white">  Exercise</div>
                            
                        </div>

                        <div style={containerStyle} className={`m-2 col-span-3 relative rounded-lg bg-cover pt-8 pb-2 bg-${session.color}-400 bg-green-200 grid grid-cols-3 overflow-hidden`} >
                            <div className="col-span-2 px-8 z-30">
                                <p className="text-3xl font-extrabold text-white pt-3">{session.overview}</p>
                                <div className="flex flex-row">
                                        <Link to={session.PPTFileUrl} className="no-underline"> <button className="ml-2 my-2 p-2 text-md font-semibold text-black no-underline bg-white  rounded-lg"> Guideline for Student (PPT) </button> </Link>
                                </div>
                                <div className="flex flex-row">
                                        <Link to={session.CPTUrl} className="no-underline"> <button className="ml-2 my-2 p-2 text-md text-black font-semibold no-underline bg-white  rounded-lg"> Text Book (CPT)</button> </Link>
                                </div>
                            </div>
                            <div class=" z-20 absolute inset-0 bg-black opacity-40"></div>
                        </div>
                    </div>
                    <CreateOrUpdateSession addOrUpdateSession={updateSession} sessionID={sessionID} session={session}/>
                    <div className={`m-2 px-4 rounded-lg   p-4 `} >
                        <div className={`mx-auto w-full  rounded-xl   bg-gray-100 `}>
                            {sections.map((section) => {
                                console.log(sections);
                                return(
                                <Disclosure key={section.content} className="">
                                {({ open }) => (
                                    <>
                                    <Disclosure.Button  className="flex w-full px-5  bg-yellow-100 justify-between rounded-lg   py-3 text-left text-md font-medium text-purple-900 hover:bg-yellow-100">
                                        
                                        <span >{section.name}</span>  
                                        <ChevronUpIcon
                                        className={`${
                                            open ? 'rotate-90 transform transition-all duration-700' : ''
                                        } h-5 w-5 text-purple-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500 transition-all duration-700">
                                        
                                        {textToParagraphs(section.content)}
                                        <div className="flex flex-row gap-3"> 
                                        <button className="rounded-lg border-1 border-black text-black px-3 py-2 font-bold" onClick={() => deleteSection(section.id)}>Delete</button>
                                        <CreateOrUpdateSection addOrUpdateSection={updateSection} sectionID={section.id} section={section} />
                                        </div>
                                    </Disclosure.Panel>
                                    </>
                                )}
                                </Disclosure>

                            )})}
                            
                        </div>
                    </div>
                    <CreateOrUpdateSection sessionID={sessionID} addOrUpdateSection={addSection}  />
                    <div className="grid grid-cols-2 gap-3 px-8 py-3 mx-7">
                        {works.map((work, index) => {
                        return <div key={work.name} className="rounded-lg h-70 shadow-lg bg-white flex flex-col overflow-hidden">
                            <img className="h-4/5 w-full object-cover" src={work.bgCardUrl} alt="bg"/>
                            <div className="px-2 h-1/5 mt-1 flex justify-between items-center">
                                {/* <Exercise questionsData={exercises[0].questions}/> */}

                                <p className="font-base text-gray-700 text-sm pt-2"> {work.name}</p>

                            <p className="font-base text-gray-700 text-sm pt-2"> {work.role}class</p>
                            </div>

                        </div>


                        })}
                        



                    </div>
                    <div className="mt-10" >
                        <h2 className="text-black font-bold text-3xl capitalize"> Explore Your Knowledge </h2>
                        <p  className=" text-sm pr-4"> Take the next step on your creative journey. With these Skillshare classes, you can explore a range of topics, tools, and techniques, from photography and graphic design, to drawing and animation. Whether you’re looking for art classes for beginners or you’re an experienced professional, you can take your skills to the next level with online classes in software like Photoshop, Procreate and After Effects, or learning handmade techniques in painting, hand lettering, and illustration. Make a film, give your home a makeover, start a freelance business. There’s so much inspiration to explore on Skillshare, and you’ll get hands-on experience by completing and sharing your own projects.</p>
                    </div>
    </>
)}
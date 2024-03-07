
const studentInfo = {current : "active", expectedYearOfGraduation: "...", education: "High school", moreAboutMe: "My name is Deutsch" }

export default function StudentProfileCard()
{return(
                <div className="grid grid-cols-4 gap-3 mx-3 p-4 mt-3 rounded-md bg-color-vibrant bg-opacity-25">
                    <div className="col-span-1 relative " id="ABOUT INFO">
                        <div className="flex flex-col bg-slate-200 px-2 shadow-lg rounded-sm" id="CURRENT YEAR EDU MOREinfo">
                            <p className="text-black font-bold text-md"> About</p>
                            <div>
                                <p className="text-gray-400 text-sm mb-0">Current</p>
                                <p className="text-gray-900 font-semibold text-sm capitalize">{studentInfo.current}</p>                         
                            </div>
                            <div>
                                <p className="text-gray-400 mb-0 ">Expected year of Graduation</p>
                                <p className="text-gray-900 font-semibold text-sm  capitalize">{studentInfo.expectedYearOfGraduation}</p>                         
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm  mb-0">Education</p>
                                <p className="text-gray-900 font-semibold text-sm  capitalize">{studentInfo.education}</p>                         
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-0">More about me</p>
                                <p className="text-gray-900 font-semibold text-sm capitalize ">{studentInfo.moreAboutMe}</p>                         
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col gap-3" id="CERTI BADGE MY_COURSE MY_TEST">
                        <div className="flex flex-col bg-gray-100 rounded-md p-3 font-bold shadow-lg" id="CERTI">
                            <span className="flex flex-row"> 
                                
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16 4 12L7 8M21 12 18 8 21 4L14 9 18 14 21 19z" />
                                </svg>
                                    My certifications         
                            </span>
                            <div id="CERTI" className="flex flex-row gap-1">
                                <div className=" m-3 h-20 w-20 rounded-lg overflow-hidden border-black border-1">
                                    <img alt="JoJo certificate" className="p-1"/>
                                </div> 
                                <div className=" m-3 h-20 w-20 rounded-lg overflow-hidden border-black border-1">
                                    <img alt="JoJo certificate" className="p-1"/>
                                </div> 
                                <div className=" m-3 h-20 w-20 rounded-lg overflow-hidden border-black border-1">
                                    <img alt="JoJo certificate" className="p-1"/>
                                </div> 

                            </div>

                        </div>
                        <div className="flex flex-col bg-gray-100 rounded-md p-3 font-bold shadow-lg" id="BADGE">
                            <span className="flex flex-row">                                 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6M19 12h3M4 12h3M13 16L17 12L13 8" />
                                    </svg>
                                    My badges          
                            </span>
                            <div id="BARGES" className="flex flex-row gap-1">
                                <div className=" m-3 h-14 w-20 rounded-lg overflow-hidden border-black border-1">
                                    <img alt="JoJo badge" className="p-1"/>
                                </div> 
                                <div className=" m-3 h-14 w-20 rounded-lg overflow-hidden border-black border-1">
                                    <img alt="JoJo badge" className="p-1"/>
                                </div> 
                                <div className=" m-3 h-14 w-20 rounded-lg overflow-hidden border-black border-1">
                                    <img alt="JoJo badge" className="p-1"/>
                                </div> 
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-2 " id="COURSES and TEST">
                            <div className="bg-gray-100 rounded-md p-3 font-bold shadow-lg">
                                <span className="flex flex-row">                                 
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 8-7 8M5 19l7-8 7 8" />
                                </svg>
                                        My courses        
                                </span>
                                <div id="COURSES" className="flex flex-col gap-2 mt-2 ml-3">
                                    <div className="py-1 px-2   w-3/4 rounded-lg border-black border-1 bg-color-secondary items-center">
                                        German A1 Level                      
                                    </div>     
                                    <div className="py-1 px-2   w-3/4 rounded-lg border-black border-1 bg-color-secondary items-center">
                                        French A1 Level                      
                                    </div> 
                                    <div className="py-1 px-2   w-3/4 rounded-lg border-black border-1 bg-color-secondary items-center">
                                        Spanish A1 Level                      
                                    </div>         
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-md p-3 font-bold shadow-lg">
                                <span className="flex flex-row">                                 
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3H6 a 2 2 0 0 0-2 2v16l4-3m0 6l4-3m6 12H3 a 2 2 0 0 1-2-2v-16l4-3m0 6l4-3" />
                                        </svg>
                                        My Test        
                                </span>
                                <div id="COURSES" className="flex flex-col gap-2 mt-2 ml-3">
                                    <div className="py-1 px-2   w-3/4 rounded-lg border-black border-1 bg-color-primary-dark items-center">
                                        Spanish A1 Level                      
                                    </div>     
                                    <div className="py-1 px-2   w-3/4 rounded-lg border-black border-1 bg-color-primary-dark items-center">
                                        French A1 Level                      
                                    </div> 
                                    <div className="py-1 px-2   w-3/4 rounded-lg border-black border-1 bg-color-primary-dark items-center">
                                        German B1 Level                      
                                    </div>         
                                </div>
                            </div>
                            
                            

                        </div>
                        
                    </div>


                </div>
)}
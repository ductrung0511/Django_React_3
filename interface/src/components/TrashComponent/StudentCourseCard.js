
const courses = [{name: "Academic Writing", teacher: "Mr Zion"}, 
                {name: "Academic Speaking", teacher: "Mr Jame"}, 
                {name: "Academic Listening", teacher: "Ms Lotte"}, 
                {name: "Academic Reading", teacher: "Mr John"},  ]
export default function StudentCourseCard()
{return(
                <div className="grid grid-cols-3 gap-3 mx-3 p-4 mt-3 rounded-md bg-color-vibrant bg-opacity-25"> 
                    {courses.map((course) => {return( 

                        <div className="bg-yellow-100 h-[40vh] w-full rounded-lg shadow-lg  relative" >
                            <div className="bg-gray-300 rounded-lg flex mt-8 py-3 mx-3 justify-center "  id="COURSE NAME">
                                <span className="capitalize font-semibold text-xl "> {course.name}</span>
                            </div>
                            <div className="bg-gray-200 border-2 border-y-black rounded-lg flex w-1/2 justify-center absolute top-3 left-3" id="TEACHER NAME" >
                                <span className="capitalize font-semibold text-xl ">{course.teacher}</span>
                            </div>
                        </div>


                    )})}         
                    
                    
                </div>
)}
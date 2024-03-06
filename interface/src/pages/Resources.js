import { useParams,Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { baseUrl } from "../Share";
import { useLocation } from "react-router-dom";
import useFetch from "../components/hook/useFetch";
import Exercise from "../components/TestingFeatures/Exercise";
import CreateOrUpdateResourses from "../components/Features/createOrUpdateResources";
export default function Resources(){

    const [notFound, setNotFound] = useState(false);   
    const [resources, setResources] =useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const role = localStorage.getItem('role');
    
    const url = baseUrl + 'api/profile/';
    const {  data  , loading, error } =  useFetch(url, {
        method:'GET', 
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('access'),}
    });

    // const profile = useRef();
    // const loadingProfile = useRef(); 
    // const errorProfile = useRef(); 
    // const works = [
    //     {name: "IELTS Academic Writing E-Books - volumn 3", bgCardUrl:"https://img.freepik.com/free-photo/vibrant-portrait-person-bright-environment_23-2151078796.jpg?t=st=1709200466~exp=1709201066~hmac=4281526a3c9848a33e9e06221e4ed59286a702fb2d7346e3647c53db69544e342x.webp" , role:"Explorer", content:{}},
    //     {name: "IElTS Academic Reading E-Books - volumn 2/3", bgCardUrl:"https://img.freepik.com/free-photo/vibrant-portrait-person-bright-environment_23-2151078775.jpg" , role:"Starter", content:{}},
    //     {name: "Listening General E-Books - volumn 2", bgCardUrl:"https://mediablog.cdnpk.net/sites/9/2022/03/spring-pattern-collection.png?t=st=1709200466~exp=1709201066~hmac=f59cf8ee36d6b1a190966745b87d4991ad06faca819d734ec623a8a32db4bbb5" , role:"Flyer", content:{}},
    //     {name: "IELTS Academic Writing E-Books - volumn 3", bgCardUrl:"https://img.freepik.com/free-photo/vibrant-portrait-person-bright-environment_23-2151078796.jpg?t=st=1709200466~exp=1709201066~hmac=4281526a3c9848a33e9e06221e4ed59286a702fb2d7346e3647c53db69544e342x.webp" , role:"Explorer", content:{}},
    //     {name: "IElTS Academic Reading E-Books - volumn 2/3", bgCardUrl:"https://img.freepik.com/free-photo/vibrant-portrait-person-bright-environment_23-2151078775.jpg" , role:"Starter", content:{}},
    //     {name: "Listening General E-Books - volumn 2", bgCardUrl:"https://mediablog.cdnpk.net/sites/9/2022/03/spring-pattern-collection.png?t=st=1709200466~exp=1709201066~hmac=f59cf8ee36d6b1a190966745b87d4991ad06faca819d734ec623a8a32db4bbb5" , role:"Flyer", content:{}},

    // ];



    useEffect(() => {
        async function fetchData() {
            const url = baseUrl + "api/resources/";
          try {
            const response = await fetch(url, {
              headers:{
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + localStorage.getItem('access'),
          }
          });
            if(response.status === 404) setNotFound(true);
            if(response.status === 401) 
            {
              navigate("/login",{
              state:{ previousUrl : location.pathname,}
            });
          }
            else if (!response.ok) {
              console.error("Something went wrong");
              return;
            }
            const data = await response.json();  
            console.log(data ,"resources");
            setResources(data); 
    
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      
        fetchData();
        
         // Call the fetchData function when the component mounts
      }, []); // Empty dependency array to ensure it runs only once
    function addResource(newResource){
        setResources([...resources, newResource])
    }
    function updateRecourse( newResource){
        let newResources = [];
        for(let i=0; i< resources.length; i++){
            if(resources[i].id === newResource.id){
                newResources.push(newResource);
            }
            else newResources.push(resources[i]);
        }
        setResources(newResources);

    }
      
    
    if (notFound) {
        return <div>resources not found.</div>;
      }
    
    if (!data ) {
        return <div>Loading...</div>;
      }
    
    if(data.is_staff) return <div>

                    <div className="grid grid-cols-2 gap-3 px-8 py-3 mx-7 bg-transparent">
                        {resources.map((resource, index) => {
                        return <div key={index} className="rounded-lg h-44 shadow-lg bg-white flex flex-col overflow-hidden relative">
                            
                            <img className="h-4/5 w-full object-cover" src={resource.bgCardUrl} alt="bg"/>
                            <Link to={resource.url} className="no-underline pt-2">
                                <div className="px-2 h-1/5 mt-1 flex justify-between items-center">

                                    <p className="font-base text-gray-700 text-sm pt-2"> {resource.name}</p>
                                <p className="font-base text-gray-700 text-sm pt-2">Serial: {resource.serial} </p>
                                </div>
                            </Link>
                            <div className="absolute top-2 left-2">
                                
                              {role ===  'Administator' && <CreateOrUpdateResourses addOrUpdateResource={updateRecourse} resource={resource}/> }  
                            </div>
                        </div>


                        })}
                        



                    </div>
                    { role ===  'Administator' && <CreateOrUpdateResourses addOrUpdateResource={addResource} />  } 


    </div>;
    
    
}
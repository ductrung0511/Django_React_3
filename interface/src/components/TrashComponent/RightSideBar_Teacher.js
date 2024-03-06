
import ProgressBar from "./Progress"
export default function RightSideBar_Teacher(){

    return (

    <div class="flex-2 top-30 left-0 h-screen w-70 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">

        

        <div class="space-y-4 mt-4">
            <a href="#" className="flex items-center px-4 py-2 rounded-md border border-black-300 text-white no-underline hover:bg-gray-700 hover:text-gray-300">
                <span class="mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6M19 12h3M4 12h3M13 16L17 12L13 8" />
                </span>
            Profile
            </a>
             <ProgressBar/>

            <a href="#" class="flex items-center px-4 py-2 no-underline rounded-md border border-black-300 text-white hover:bg-gray-700 hover:text-gray-300">
            <span class="mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3H6 a 2 2 0 0 0-2 2v16l4-3m0 6l4-3m6 12H3 a 2 2 0 0 1-2-2v-16l4-3m0 6l4-3" />
            </span>
            Schedule 
            </a>
            <a href="#" class="flex items-center px-4 py-2 no-underline rounded-md border border-black-300 text-white hover:bg-gray-700 hover:text-gray-300">
            <span class="mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 8-7 8M5 19l7-8 7 8" />
            </span>
            Course
            </a>
            <a href="#" class="flex items-center px-4 py-2 no-underline rounded-md border border-black-300 text-white hover:bg-gray-700 hover:text-gray-300">
            <span class="mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16 4 12L7 8M21 12 18 8 21 4L14 9 18 14 21 19z" />
            </span>
            Task
            </a>
        </div>
    </div>
    )
}
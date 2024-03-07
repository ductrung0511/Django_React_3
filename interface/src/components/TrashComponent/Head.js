export default function Head(props) {
return(



<nav className="container flex justify-between items-center">
    <div className="py-5 text-colors-secondary font-bold  text-3xl">
        <a href="/home"> 
            <span className="text-white">NZ</span>EC.
            
        </a>
    </div>

    <div>
        <ul className=" hidden lg:flex items-center space-x-5">
            <li className="no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                <a href="/home">Home</a>
            </li>

            <li className="no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                <a href="/home">Features</a>
            </li>

            <li className="no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                <a href="/home">Rating</a>
            </li>

            <li className="no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                <a href="/home">Course</a>
            </li>

            <li className="no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                <a href="/blog">Blog</a>
            </li>

            <li className="no-underline px-3 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white">
                <a href="/blog">Contact</a>
            </li>

            <li>
                <button className="bg-colors-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 transition ease-in duration-500">
                    Free Trial
                </button>
            </li>
        </ul>
        <div className="lg:hidden cursor-pointer"> 
            <span className=" py-5 text-white font-bold uppercase text-3xl"> MENU </span>
        
        </div>


    </div>
</nav>













)}

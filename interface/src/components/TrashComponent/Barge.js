export default function Badge(props){
    

    return (


        <div className="h-1/3 w-1/2 bg-white shadow-md overflow-hidden md:max-w-2xl items-center">
      <div className="text-center p-6 bg-gray-700 text-white">
        <h2 className="text-s font-semibold">My Badge</h2>
      </div>
      <div className="p-6">
        <ul>
          {props.badges.map((badge, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-center">
                <img
                  src={badge.urlimg}
                  alt={badge.name}
                  className="w-3 h-3 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-s font-semibold">{badge.name}</h3>
                  <p className="text-gray-600">{badge.info}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}

const Card = ({data}) => {
    const { name, main, weather, sys } = data;
    return (
      <div className="w-[150px] h-[200px] bg-red-100 mx-auto mt-7 rounded-xl p-3">
        <h1 className="text-2xl">
            {name}
        </h1>
        <h3 className="text-xl text-center m-3">
            {sys.country}
        </h3>
        <p>
            {Math.round(main.temp)}
        </p>
        <p>
            {weather[0].description}
        </p>
      </div>
    )
  }
  
  export default Card
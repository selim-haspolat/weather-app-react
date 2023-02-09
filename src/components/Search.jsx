

const Search = ({setCity,setData}) => {
    const cityName = (e) => {
        setData('')
        e.preventDefault()
        let city = e.target.querySelector('input').value
        setCity(city)
        e.target.reset()
    }
  return (
    <div className="text-center mt-10">
        <form onSubmit={cityName} action="">
            <input type="text" className="px-3 py-1 border border-1 rounded-md mx-2 outline-0"/>
            <button className="px-3 py-1 rounded-md bg-blue-200 hover:bg-blue-500 hover:text-white transition-all">Search</button>
        </form>
    </div>
  )
}

export default Search
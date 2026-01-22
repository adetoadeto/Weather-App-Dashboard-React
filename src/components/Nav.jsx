const Nav = ({handleFetchData, handleUserInput})=> {
    return <nav>
        <h1>Weather Forecast</h1>
        <p>Welcome! Input a city name in the search box</p>
        <form>
            <input type="text" placeholder="Enter city name" onChange={()=> handleUserInput(event)}/>
            <button onClick={()=> handleFetchData(event)}><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>     
    </nav>
}

export default Nav;
class App extends React.Component {
    render() {
        return(
            <div>
                <Friend
                name="Elton"
                hobbies={["Piano", "Singing", "Dancing"]} 
                />
                      <Friend
                name="Tymonek"
                hobbies={["Kotki", "Grac", "Czytac"]} 
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
class App extends React.Component {
    render() {
        return (
            <div>
            <Hello 
            to="Ringo" 
            from="Paul" 
            bangs={4}
            img="https://assets.puzzlefactory.pl/puzzle/217/818/original.webp" 
            />
        
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                to="Ania"
                from="Tymonek"
                bangs={3}
                />

                <Hello 
                to="Nikodem"
                bangs={3}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
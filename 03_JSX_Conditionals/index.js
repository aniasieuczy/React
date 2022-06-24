// inluding if

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

// class NumPicker extends React.Component {
//     render() {
//         const num = getNum();
//             return (
//             <div>
//             <h1>Your number is {num} </h1>
//             <p>{num === 7 ? "Congrats!" : "Unlucky"} </p>
//             {
//             num === 7 
//             ? <img src="https://giphy.com/gifs/win-nXxOjZrbnbRxS" /> 
//             : null}
//             </div>
//             );
//     }
// }

class NumPicker extends React.Component {
        render() {
            const num = getNum();
            let msg;
            if(num === 7) {
                msg = 
                <div>
                    <h2>CONGRATS YOU WIN</h2>
                    <iframe src="https://giphy.com/embed/Q81NcsY6YxK7jxnr4v" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/moodman-Q81NcsY6YxK7jxnr4v">via GIPHY</a></p>
                </div>
            } else {
                msg =  <p> Sorry You Lose! </p>
            }
                return (
                <div>
                <h1>Your number is {num} </h1>
                { msg }    
                </div>
                );
        }
    }


ReactDOM.render(<NumPicker />, document.getElementById("root"));
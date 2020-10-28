"strict mode"
const Quotebox = document.getElementById('quote-box')
const Create = React.createElement

const QuoteGenerator = () => {
    const [Quote, setQuote] = React.useState({
    quote: 'Press button for a quote',
    author: 'Author Unknown'
    })
    const [Random, setRandom]= React.useState(Math.floor(Math.random()*(1600-0+1)+0)) 

const clickHandle = () => {
    setRandom(Math.floor(Math.random()*(1600-0+1)+0))
        fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => setQuote({quote: data[Random].text, author: data[Random].author}))
    .catch(err => {
        console.log(err);
    });
    }

    return (
<div>
    <q id="text">{Quote.quote}
    </q><br/>
    <p id="author">{Quote.author}
    </p>
    <button id="new-quote" onClick={clickHandle}>New Quote</button><br />
    <a id="tweet-quote" href={`http://twitter.com/intent/tweet?text="${Quote.quote}"%0D${Quote.author}`} target="_blank"><button>Tweet this</button></a>
</div>
)}

ReactDOM.render(Create(QuoteGenerator),Quotebox)
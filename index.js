const element1 = React.createElement(
    "h1",
    {
       id:"h1",
       style:{
        background:"red",
        color: "#fff"
       },
       className:"heading"
    },
    "hello"
)

const element2 = React.createElement(
    "h1",
    {
        id:"h2",
        style:{
            background:"red",
            color:"#fff"
        },
        className:"heading"
    },
    "Aditya Raj welcome to React confidence course.."
)

const container = React.createElement(
    "div",
    {},
    [element1, element2]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX =>
// createElement => Object => html(DOM)
const title = (
    <h1>Hey This is Cheeku</h1>
);

// React Components
// 1. Functional Component => First Letter Will be Capital
// 2. Class Bassed Component

const HeaderComponent2 = ()=> {
    return (
        <h1>Functional Component 2 Short</h1>
    );
}
const HeaderComponent = ()=>{
    return (
        <div>
            {title}
            <HeaderComponent2/>
            <h1>Functional Component</h1>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);

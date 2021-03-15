import React, { useState } from 'react';

const Tab = ({ header, content }) => {

    const tabs = [
        {
            header: "Tab 1",
            content: "Hello I am the first tab"
        },
        {
            header: "Tab 2",
            content: "And I am the second tab"
        },
        {
            header: "Tab 3",
            content: "And last but not least is the best tab, thats right im tab number three."
        }]
    const [state, setState] = useState({
        content: "",
        colo: "",
        id: ""
    });
    const onClickHandler = (e,idx) => {
        setState({
            content: tabs[idx].content,
            color: "blue",
            id: idx
        })
    }
    return (
        <div>
            {tabs.map((tab, i) =>
                <button
                    onClick={(e) => onClickHandler(e, i)}
                    key={i} {...tab}
                style={{color: "blue", backgroundColor:"peachpuff"}}>
                    {tab.header}
                </button>
            )}
            <p style={{ border: "solid 1px black" }}>{state.content}</p>
        </div>
    )};

export default Tab;
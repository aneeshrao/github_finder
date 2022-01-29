import React, {useState} from "react";


const Search = (props) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        console.log(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchName(text);
        setText('');    
    }

    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Search here" value={text} onChange={handleChange}/>
            <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
        { props.showClear && <input type="submit" value="clear" className="btn btn-light btn-block" onClick={props.clearUser}/> }
        </>
    )
}

export default Search;

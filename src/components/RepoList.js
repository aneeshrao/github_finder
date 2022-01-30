import React from "react"; 

const RepoList = (props) => {

    return (
        <div>
            {props.repos.map(repo => {
                return (
                    <div className="card">
                    <h3><a href={repo.html_url}>{repo.name}</a></h3>
                    </div>
                )
            })}     
        </div>
    )
}

export default RepoList;
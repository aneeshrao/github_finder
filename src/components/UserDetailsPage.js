import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import RepoList from "./RepoList";


const UserDetailsPage = (props) => {

    useEffect(() => {
        props.getUserDetail(props.match.params.anything)
        props.getRepo(props.match.params.anything)
    }, [])

    return (
        <>
            <Link to = "/" className= "btn btn-dark">Back to Search</Link>
            <strong>Open for Jobs </strong> : {props.user.hireable ? 
                (<i className="fa fa-check text-success"></i>) : (<i className="fa fa-times-circle text-danger"></i>)
            }
            <div className="card grid-2">
                <div className="all center">
                    <img src={props.user.avatar_url} className="round-img" style={{width: '150px'}} alt="" />
                    <h1>{props.user.name}</h1>
                    <p>Location : {props.user.location}</p>
                </div>
                <div>
                    {props.user.bio && (
                        <>
                         <h3>Bio</h3>
                         <p>{props.user.bio}</p>
                        </>
                    )}
                    <a href={props.user.html_url} className="btn btn-dark my-1">Visit Github profile</a>
                    <ul>
                        <li> {props.user.login && (
                            <>
                                <strong>Username: {props.user.login}</strong>
                            </>
                        )}
                        </li>
                        <li>{props.user.blog && (
                            <>
                                <strong>Blog: <a href={props.user.blog}>{props.user.blog}</a></strong>
                            </>
                        )}</li>
                        <li>{props.user.company && (
                            <>
                                <strong>Company: {props.user.company}</strong>
                            </>
                        )}</li> 
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers:{props.user.followers}</div>
                <div className="badge badge-success">Following:{props.user.following}</div>
                <div className="badge badge-danger">Public repos:{props.user.public_repos}</div>
                <div className="badge badge-dark">Public gists:{props.user.public_gists}</div>
            </div>
            <RepoList repos = {props.repo}/>
        </>
    )
}

export default UserDetailsPage;

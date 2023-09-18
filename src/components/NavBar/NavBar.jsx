import "./NavBar.css";
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

const NavBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) {
            return;
        }

        navigate(`/search?q=${search}`);
        setSearch("");
    };

    const handleShowInput = (e) => {
        
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie /> ReactMovies
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Busque um filme" 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button id="search" type="submit">
                    <BiSearchAlt2 />
                </button>
                <button id="show-input" onClick={handleShowInput}>
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default NavBar;
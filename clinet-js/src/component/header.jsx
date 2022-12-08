import { Fragment } from "react";


function Header() {




    const handleSearch = evt=>{
        evt.preventDefault();
        console.log(evt.key)
    }
    return (
        <Fragment>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">광주광역시에서 놀자!</span>
                    <form className="d-flex" role="search" onSubmit={evt=>evt.preventDefault()}>
                        <input className="form-control me-2" type="search" onKeyUp={handleSearch}  placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
                    </form>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;
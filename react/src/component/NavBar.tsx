import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../Store/store.ts";
import {logOut} from "../Store/slice/AuthSlice.ts";


export  function NavBar() {
    const naviagte = useNavigate();
    const isAuth = useSelector((state:RootState) => state.isAuth.isAuth)
    console.log("Isssssssssssssssssssssssssssssssssssss",isAuth)
    const dispatch = useDispatch();


    const handleLogin = () =>{
        console.log("login");
        naviagte("/login")
    }

    const handleLogout = () =>{
        dispatch(logOut())
        naviagte("/login")
    }
    const handleHome = () =>{
        naviagte("/Home")
    }
    const handleTask = () =>{
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {isAuth === false &&
                        <li className="nav-item">
                        <a onClick={handleLogin} className="nav-link active" aria-current="page" href="#">Login</a>
                    </li>
                    }

                    {isAuth === true &&
                        <li className="nav-item">
                            <a onClick={handleLogout} className="nav-link active" aria-current="page" href="#">logout</a>
                        </li>
                    }

                    {isAuth === true &&
                        <li className="nav-item">
                            <a onClick={handleHome} className="nav-link active" aria-current="page" href="#">home</a>
                        </li>
                    }

                    {isAuth === true &&
                        <li className="nav-item">
                            <a onClick={handleTask} className="nav-link active" aria-current="page" href="#">task</a>
                        </li>
                    }


                </ul>
            </div>
            </div>
        </nav>
    </>
  )
}

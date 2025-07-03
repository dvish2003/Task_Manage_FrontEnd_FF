import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../Store/store.ts";
import {log, logOut} from "../Store/slice/AuthSlice.ts";


export  function NavBar() {
    const naviagte = useNavigate();
    const isAuth = useSelector((state:RootState) => state.isAuth.isAuth)
    const isAuth_1 = localStorage.getItem("isAuth")
    console.log("isAuth_1", typeof isAuth_1)

    const isAuthBoolean = isAuth_1 === "true" ? true : false;
    console.log("isAuthBoolean", isAuthBoolean)


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
        naviagte("/task")
    }

  const handleUser = () =>{
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
                    {isAuthBoolean == false &&
                        <li className="nav-item">
                        <a onClick={handleLogin} className="nav-link active" aria-current="page" href="#">Login</a>
                    </li>
                    }

                    {isAuthBoolean == true &&
                        <li className="nav-item">
                            <a onClick={handleLogout} className="nav-link active" aria-current="page" href="#">logout</a>
                        </li>
                    }

                    {isAuthBoolean === true &&
                        <li className="nav-item">
                            <a onClick={handleHome} className="nav-link active" aria-current="page" href="#">home</a>
                        </li>
                    }

                    {isAuthBoolean === true &&
                        <li className="nav-item">
                            <a onClick={handleTask} className="nav-link active" aria-current="page" href="#">task</a>
                        </li>
                    }

                      {isAuthBoolean === true &&
                        <li className="nav-item">
                            <a onClick={handleUser} className="nav-link active" aria-current="page" href="#">user</a>
                        </li>
                    }



                </ul>
            </div>
            </div>
        </nav>
    </>
  )
}

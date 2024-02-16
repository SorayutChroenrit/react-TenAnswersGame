import { Outlet, Link , NavLink,  BrowserRouter,Routes,Route} from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <nav>
            <div className="title">
              <div className="title-text">Ten Answers</div>
            </div>
            <Link to="/Easy" className="Easy-Mode">
              <div  className="Easy-Mode-text">
                <a>Easy Mode</a>
              </div>
            </Link>
            <Link to="/Normal" className="Normal-Mode">
              <div  className="Normal-Mode-text">
                <a>Normal Mode</a>
              </div>
            </Link>
            <Link to="/Hard" className="Hard-Mode">
              <div  className="Hard-Mode-text">
                <a>Hard Mode</a>
              </div>
            </Link>
          </nav>
        <Outlet />
        </>
    )
}
export default Layout;

import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import BinanceIcon from "../../images/BinanceIcon";
import FG1 from "../../components/FG1";


function Layout() {
    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
    <Header>
      <Link to={'/'}>
        <BinanceIcon /> <span style={{fontSize: '15px', color: '#F0B90B', fontWeight: 'bold'}}>__AI</span>
      </Link>
      <FG1 />
      <Link to={'/Manual'}>Manual</Link>
      <Link to={'/AI'}>AI</Link>
    </Header>
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }


  export default Layout
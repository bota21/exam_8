import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import './Layout.css'

const Layout = props => {
  return <div>
    <Header />
    <div className="Layout">
      <div className="layout_wrapper">
        <NavLink to='/quotes/all'
          className='layout_link'
          activeClassName='active_layout'>
          All
     </NavLink>
        <NavLink to='/quotes/star-wars'
          className='layout_link'
          activeClassName='active_layout'>
          Star wars
    </NavLink>
        <NavLink to='/quotes/famous-people'
          className='layout_link'
          activeClassName='active_layout'>
          Famous people</NavLink>
        <NavLink to='/quotes/saying'
          className='layout_link' activeClassName='active_layout'>
          Saying
        </NavLink>
        <NavLink to='/quotes/humour'
          className='layout_link'
          activeClassName='active_layout'>
          Humour
     </NavLink>
        <NavLink to='/quotes/motivational'
          className='layout_link'
          activeClassName='active_layout'>
          Motivational
     </NavLink>
      </div>
      <div className="layout_wrapper_child">
        {props.children}
      </div>
    </div>
  </div>
}

export default Layout
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return <header>
    <div className='logo'>Quotes Central</div>
    <nav className="menu">
      <NavLink to='/quotes' className='menu_link' activeClassName='active_menu'>Quotes</NavLink>
      <NavLink to='/add_quote' className='menu_link' activeClassName='active_menu'>Submit new quote</NavLink>
    </nav>
  </header>
}

export default Header
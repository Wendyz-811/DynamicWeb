import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Panel from './Panel'

const Navbar = () => {
  /*
  V6+ of REact Router changed the way NavLink works. You used to have access to a var isActive
  Now we need to write an inline checker function
  Here is how to style NavLink weith Tailwind and the new version of React Router and Remix
  */

  // define our base class and our active class at js vars

  const baseClass = 'text-blue-500'
  const activeClass =
    'text-blue-500 border-l-4 border-blue-500 font-bold decoration-solid pl-4'
  return (
    <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
      <NavLink
        to="/"
        className={({isActive}) =>
          isActive ? activeClass : baseClass
        }
      >
        Button
      </NavLink>

      <NavLink
        to="/accordion"
        className={({isActive}) => (isActive ? activeClass : baseClass)}
      >
        Accordion
      </NavLink>

      <NavLink
        to="/dropdown"
        className={({isActive}) => (isActive ? activeClass : baseClass)}
      >
        Dropdown
      </NavLink>
    </Panel>
  )
}

export default Navbar
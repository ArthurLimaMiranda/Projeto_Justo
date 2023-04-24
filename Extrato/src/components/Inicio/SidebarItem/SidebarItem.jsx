import { AiOutlineRight } from "react-icons/ai";
import "./SidebarItem.css"

function SidebarItem({ href, itemName }) {
  return (
    <>
      <div onClick={href} id="sidebarContainer">
        <a href={href} id='sidebarItem'>
          {itemName}
          <AiOutlineRight/>
        </a>
      </div>
    </>
  )
}

export default SidebarItem

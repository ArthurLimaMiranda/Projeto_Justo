import { AiOutlineRight } from "react-icons/ai";
import sidebarItemStyle from "./SidebarItem.module.css"

function SidebarItem({ href, itemName }) {
  return (
    <>
      <div onClick={href} className={sidebarItemStyle.sidebarContainer}>
        <a href={href} className={sidebarItemStyle.sidebarItem}>
          {itemName}
          <AiOutlineRight/>
        </a>
      </div>
    </>
  )
}

export default SidebarItem

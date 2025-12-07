import { Menu, X } from "lucide-react";

const SidebarToggle = ({ open, setOpen }) => {
  return (
    <button
      className={`sidebar-toggle ${open ? "shifted" : ""}`}
      onClick={() => setOpen(!open)}
    >
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
};

export default SidebarToggle;

import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import MainNavigation from "./MainNavigation";
export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div >
      {showSidebar ? (
        <MobileNavigation setShowSidebar={setShowSidebar} />
      ) : (
        <MainNavigation setShowSidebar={setShowSidebar} />
      )}
    </div>
  );
}

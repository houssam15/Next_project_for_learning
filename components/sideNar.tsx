import Logo from "./logo";
import SideNavList from "./sideNavList";

export default function SideNar() {
    return (
      <div className="h-[150vh] bg-slate-100 grid col-span-1 rounded-lg grid-row-8 gap-4 ">
       <Logo/> 
       <SideNavList/>
      </div>
    );
}
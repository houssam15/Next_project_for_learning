import Main from "../components/main";
import SideBar from "../components/sideNar";

export default function Home() {
  return (
      <div className="w-full h-[155vh] bg-slate-50 grid grid-cols-5 gap-4 p-3 ">
      <SideBar/>
      <Main/>
      </div>
  );
}

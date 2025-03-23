import { MdSpaceDashboard } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";

function Home() {
  const userList = [
    "akhror work1",
    "Мохирбек Хусанов",
    "shoxa",
    "Hayotbek",
    "aziz. frontend",
    "Abror Ikromjonov",
    "Muhsinjon Foziljonov",
    "Hayitali Vahobjonov",
    "Shohjahon Alijonov",
    "Hadyatillo Tohirjonov",
    "Durdona",
    "Javohirboy Turg'unboyev",
  ];

  const [click, setClick] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", icon: <MdSpaceDashboard />, padding: "pr-20" },
    { label: "Create", icon: <CiCirclePlus />, padding: "pr-24" },
    { label: "Settings", icon: <IoMdSettings />, padding: "pr-20" },
  ];

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <aside className="w-50 bg-blue-100 text-gray-700 flex flex-col pt-2  shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src=""
            className="w-12 h-12 rounded-full mb-2 border-2 border-white"
          />
          <span className="text-lg font-semibold">Hello, Akhror Work1</span>
        </div>
        <nav className="mt-7">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`p-2 flex items-center gap-3 cursor-pointer rounded-l transition-all ${
                  click === item.label
                    ? "bg-white text-gray-700 font-semibold shadow-md"
                    : "hover:bg-gray-300"
                }`}
                onClick={() => setClick(item.label)}
              >
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main>
        <h2 className="text-black flex-1 p-10">main</h2>
      </main>
    </div>
  );
}

export default Home;

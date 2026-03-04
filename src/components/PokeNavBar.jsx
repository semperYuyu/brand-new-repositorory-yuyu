import { useNavigate } from "react-router";

export default function PokeNavBar() {
  let navigate = useNavigate();

  return (
    <>
      {/* --- PokeNavBar --- */}
      <div
        className={
          "bg-gray-500 h-25 flex flex-row justify-between items-center p-4 border-3 border-gray-600 bg-linear-to-r from-amber-500 to-gray-700"
        }
      >
        {/* - Title & Icon - */}
        <div className={"flex flex-row gap-2 items-center"}>
          <img src="/pikachu.png" alt="pikachu" height={75} width={75} />
          <h1 className={"text-3xl text-white font-bold"}>YAPPA</h1>
        </div>
        {/* - Title & Icon - */}

        {/* - Navigation Buttons */}
        <div
          className={
            "w-250 h-full flex items-center gap-5 font-bold text-white text-xl"
          }
        >
          <button
            className={
              "h-full rounded-md p-4 hover:scale-120 transition-all ease-in-out hover:bg-gray-700 cursor-pointer"
            }
            onClick={() => navigate("/")}
          >
            {" "}
            Home{" "}
          </button>
          <button
            className={
              "h-full p-4 rounded-md hover:scale-120 transition-all ease-in-out hover:bg-gray-700 cursor-pointer"
            }
            onClick={() => navigate("/info")}
          >
            {" "}
            Info{" "}
          </button>
        </div>
        {/* - Navigation Buttons */}

        {/* - Search Bar - */}
        <div className={"p-4"}>
          <input
            type="text"
            className={"bg-white rounded-md border-2 border-gray-700 h-9"}
            placeholder=" Search Pokemon..."
          />
        </div>
        {/* - Search Bar - */}
      </div>
      {/* --- PokeNavBar --- */}
    </>
  );
}

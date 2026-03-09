//components
import Advertisement from "./Advertisement";

export default function YAPPAInfo() {
  return (
    <div className={"flex justify-between"}>
      <Advertisement />
      <div
        className={
          "flex flex-col justify-center items-center mt-20 gap-5 text-white font-bold text-xl"
        }
      >
        <img src="pikachuInfo.png" alt="pikachu" width={250} />
        <p className={"text-4xl"}> YAPPA !!! </p>
        <p> 504 total pokemon to search through :D </p>

        <p> click turn (details page) to turn pokemon around in portrait </p>
        <p> click choose to add them to battle scene </p>
        <p> click clear selections to clear list </p>
        <p> click do battle to start the fight !!!</p>
      </div>
      <Advertisement />
    </div>
  );
}

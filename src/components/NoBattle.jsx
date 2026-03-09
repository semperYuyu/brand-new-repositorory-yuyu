export default function NoBattle() {
  return (
    <div className={"flex flex-col items-center gap-20"}>
      <img
        src="/surprisedPikachu.png"
        alt="contentGONE"
        className={"w-100 opacity-50"}
      />
      <p className={"font-bold text-white text-5xl"}> Unfortunately... </p>
      <p className={"font-bold text-white text-2xl"}> There is no battle D: </p>
      <p className={"font-bold text-white text-xl"}>
        {" "}
        I didn't have the time !
      </p>
    </div>
  );
}

export default function Loading() {
  return (
    <div className={"flex flex-col justify-center items-center p-4"}>
      <img src="/loadingSpinner.svg" height={75} width={75} />
      <h1 className={"text-2xl font-bold text-white"}> Loading... :D </h1>
    </div>
  );
}

import { FoundIssue, Quotes, Simulate } from "../components";

export const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row  items-center justify-between ">
        <Simulate />
        <Quotes />
      </div>
      <FoundIssue />
    </div>
  );
};

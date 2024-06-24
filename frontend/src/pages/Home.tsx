import { Simulate } from "../components/Simulate";
import { Quotes, FoundIssue } from "../components";

export function Home() {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row  items-center justify-between ">
        <Simulate />
        <Quotes />
      </div>
      <FoundIssue />
    </div>
  );
}

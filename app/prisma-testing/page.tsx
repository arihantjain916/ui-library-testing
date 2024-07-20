import { GetFeed } from "../api/prismaapi/route";
import { Feed } from "../../types/feed";
import { use } from "react";
import { UploadFeed } from "./feedpost";
// import TimeLine from "@/components/timeline";

export default function SecondPage() {
  const feed = use<Feed[] | string>(GetFeed());

  if (feed === null) {
    return <p>Loading...</p>;
  }

  if (typeof feed === "string") {
    console.log("Inside func: ", feed);
    return <p>{feed}</p>;
  }

  return (
    <>
      {/* {session?.user?.name} // Add session logic if needed */}
      {feed.map((con) => (
        <div
          key={con.id}
          className="border-2 border-black mb-2 p-2 dark:border-white"
        >
          <h1>{con.title}</h1>
          <p>{con.published ? "Published" : "Draft"}</p>
        </div>
      ))}

      <h2>Want to add Post??</h2>
      <UploadFeed />
    </>
  );
}

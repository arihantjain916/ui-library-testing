import axios from "axios";


export const postFeed = async (feed: any) => {
  try {
    const post = await axios.post("/api/prismaapi", feed, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return post;
  } catch (err: any) {
    console.log(err);
  }
};

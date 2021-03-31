import axios from "axios";

export const getListOfNews = async () => {
  try {
    const list = await axios.request(listOfNews);
    return list;
  } catch (err) {
    console.log("Getting the list of news has");
  }
};

const listOfNews = {
  method: "GET",
  url: "https://morning-star.p.rapidapi.com/news/list",
  params: { performanceId: "0P0000OQN8" },
  headers: {
    "x-rapidapi-key": "7d694db8f0mshcfd721e8947ef90p158c09jsn353165556014",
    "x-rapidapi-host": "morning-star.p.rapidapi.com"
  }
};

import { HEIGHT, WIDTH } from "@/constants";
import { RequestProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const gbtApiKey = process.env.NEXT_PUBLIC_GBT_API_KEY;
  const gbtUrl = "https://chatgpt-42.p.rapidapi.com/texttoimage";
};

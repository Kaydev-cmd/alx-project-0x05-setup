import { HEIGHT, WIDTH } from "@/constants";
import { RequestProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const gbtApiKey = process.env.NEXT_PUBLIC_GBT_API_KEY;
  const gbtUrl = "https://chatgpt-42.p.rapidapi.com/texttoimage";

  if (!gbtApiKey || !gbtUrl) {
    return response
      .status(500)
      .json({ error: "API key or URL is missing in environment variables" });
  }

  try {
    const { prompt }: RequestProps = request.body;

    const res = await fetch(gbtUrl, {
      method: "POST",
      body: JSON.stringify({
        text: prompt,
        width: WIDTH,
        height: HEIGHT,
      }),
      headers: {
        "x-rapidapi-key": gbtApiKey.trim(),
        "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch from DALLE");
    }

    const data = await res.json();

    return response.status(200).json({
      messsage:
        data?.generated_image ||
        "https://via.placeholder.com/600x400?text=Generated+Image",
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return response.status(500).json({
      error: "Internal server error",
    });
  }
};

export default handler;

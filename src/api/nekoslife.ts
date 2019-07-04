import fetch from "node-fetch";

type NekoslifeEndPoint = "neko"
  | "ngif"
  | "fox_girl"
  | "kiss"
  | "baka"
  | "hug"
  | "pat";

interface NekoslifeBody {
  url: string | undefined;
  msg: string | undefined;
}

export default class Nekoslife {
  public static async getBody(endpoint: NekoslifeEndPoint): Promise<NekoslifeBody> {
    const body: NekoslifeBody | null = await fetch(`https://nekos.life/api/v2/img/${endpoint}`)
      .then((res) => res.json())
      .catch(() => null);
    if (!body) throw new Error("Request failed.");

    return body;
  }
}

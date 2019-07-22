import fetch from 'node-fetch'

type ImgSfwEndpoint = 'neko'
  | 'kitsune'
  | 'holo'
  | 'no_tag_avatar'
  | 'neko_avatars_avatar'
  | 'wallpaper'
  | 'waifu'
  | 'cat'
  | 'lizard'
  | '8ball';

type GifSfwEndpoint = 'neko'
  | 'smug'
  | 'baka'
  | 'tickle'
  | 'poke'
  | 'kiss'
  | 'slap'
  | 'cuddle'
  | 'hug'
  | 'pat'
  | 'feed';

type ImgNsfwEndpoint = 'neko_lewd'
  | 'neko_ero'
  | 'ahegao_avatar'
  | 'femdom_lewd'
  | 'cosplay_lewd'
  | 'classic_lewd'
  | 'feet_lewd'
  | 'neko_ero'
  | 'tits_lewd'
  | 'pussy_lewd'
  | 'cum_lewd'
  | 'all_tags_ero'
  | 'all_tags_lewd'
  | 'solo_lewd'
  | 'blowjob_lewd'
  | 'yuri_lewd'
  | 'trap_lewd'
  | 'anal_lewd'
  | 'ero_wallpaper_ero'
  | 'wallpaper_lewd'
  | 'anus_lewd'
  | 'futanari_lewd'
  | 'bdsm_lewd'
  | 'yuri_ero'
  | 'feet_ero'
  | 'holo_avatar'
  | 'holo_ero'
  | 'kitsune_lewd'
  | 'kitsune_ero'
  | 'kemonomimi_lewd'
  | 'kemonomimi_ero'
  | 'pantyhose_lewd'
  | 'pantyhose_ero'
  | 'piersing_lewd'
  | 'piersing_ero'
  | 'peeing_lewd'
  | 'keta_lewd'
  | 'smallboobs_lewd'
  | 'keta_avatar'
  | 'yiff_lewd';

type GifNsfwEndpoint = 'neko'
  | 'classic'
  | 'feet'
  | 'kini'
  | 'tits'
  | 'pussy'
  | 'cum'
  | 'spank'
  | 'all_tags'
  | 'girls_solo'
  | 'blow_job'
  | 'yuri'
  | 'anal'
  | 'pussy_wank'
  | 'yiff';

interface NekoslifeV3Body {
  data: {
    response: {
      url?: string,
      categories?: string[],
      formats?: string[],
      types?: string[],
    },
    status: {
      code: number,
      message?: string | null,
      renderedIn: string,
      success: boolean,
    },
  };
}

export default class NekoslifeV3 {
  public async getSfwImg (endpoint: ImgSfwEndpoint): Promise<NekoslifeV3Body> {
    const body: NekoslifeV3Body | Error = await fetch(`https://api.nekos.dev/api/v3/images/sfw/img/${endpoint}`)
      .then((res) => res.json())
    if (body instanceof Error) throw body
    return body
  }

  public async getSfwGif (endpoint: GifSfwEndpoint): Promise<NekoslifeV3Body> {
    const body: NekoslifeV3Body | Error = await fetch(`https://api.nekos.dev/api/v3/images/sfw/gif/${endpoint}`)
      .then((res) => res.json())
    if (body instanceof Error) throw body
    return body
  }

  public async getNsfwImg (endpoint: ImgNsfwEndpoint): Promise<NekoslifeV3Body> {
    const body: NekoslifeV3Body | Error = await fetch(`https://api.nekos.dev/api/v3/images/nsfw/img/${endpoint}`)
      .then((res) => res.json())
    if (body instanceof Error) throw body
    return body
  }

  public async getNsfwGif (endpoint: GifNsfwEndpoint): Promise<NekoslifeV3Body> {
    const body: NekoslifeV3Body | Error = await fetch(`https://api.nekos.dev/api/v3/images/nsfw/gif/${endpoint}`)
      .then((res) => res.json())
    if (body instanceof Error) throw body
    return body
  }
}

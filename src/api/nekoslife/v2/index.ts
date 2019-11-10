import fetch from 'node-fetch'
import { window } from 'vscode'

type NekoslifeV2SfwEndPoint = 'neko'
| 'ngif'
| 'fox_girl'
| 'kiss'
| 'baka'
| 'hug'
| 'pat'
| 'smug'
| 'holo'
| 'avatar'
| 'wallpaper'
| 'waifu'
| 'meow'
| 'woof'
| 'lizard'
| 'poke'
| 'tickle'
| 'slap'
| 'cuddle'
| 'feed'

/**
 * lewd: nekogirl (???)
 * lewd-fox: lewdk (???)
 * lewd-nekogirl: eron (???)
 * lewd: ero (???)
 * blowjob-gif: bj (???)
 * boobs: tits (???)
 * yuri-gif: les (???)
 * pwank-gif: pwankg (???)
 * pussy-gif: pussy (???)
 * solo-gif: solog (???)
 * cum-gif: cum (???)
 * hentai-gif: Random_hentai_gif
 * feet-gif: feetg (???)
 *
 * gasm (???)
 * trap (???)
 * femdom (???)
 * classic (???)
 */
type NekoslifeV2NsfwEndPoint = 'lewd'
| 'nsfw_neko_gif'
| 'kuni'
| 'lewdk'
| 'hololewd'
| 'erofeet'
| 'eron'
| 'eroyuri'
| 'ero'
| 'pwankg'
| 'futanari'
| 'gasm'
| 'anal'
| 'trap'
| 'les'
| 'yuri'
| 'bj'
| 'blowjob'
| 'solog'
| 'solo'
| 'hentai'
| 'Random_hentai_gif'
| 'nsfw_avatar'
| 'spank'
| 'cum'
| 'cum_jpg'
| 'pussy'
| 'pussy_jpg'
| 'boobs'
| 'tits'
| 'feetg'
| 'feet'
| 'classic'
| 'femdom'

interface NekoslifeV2Body {
  url?: string,
  msg?: string
}

export default class NekoslifeV2 {
  /**
   * 未成年でも安心な画像を取得する関数
   * @param endpoint 取得する画像の種類
   */
  public async fetchSfwBody(endpoint: NekoslifeV2SfwEndPoint): Promise<NekoslifeV2Body> {
    const body: NekoslifeV2Body = await fetch(`https://nekos.life/api/v2/img/${endpoint}`)
      .then((res) => res.json())
      .catch((error) => window.showErrorMessage(error))

    return body
  }

  /**
   * ポルノ画像を取得する関数
   * @param endpoint 取得する画像の種類（不明なものが多いから気をつけること）
   */
  public async fetchNsfwBody(endpoint: NekoslifeV2NsfwEndPoint): Promise<NekoslifeV2Body> {
    const body: NekoslifeV2Body = await fetch(`https://nekos.life/api/v2/img/${endpoint}`)
      .then((res) => res.json())
      .catch((error) => window.showErrorMessage(error))

    return body
  }
}

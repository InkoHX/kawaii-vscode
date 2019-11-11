import Nekoslife from '../../../api/nekoslife/Nekoslife'
import PictureCommand from '../../PictureCommand'
import { window } from 'vscode'

export default class LewdCatgirl extends PictureCommand {
  constructor() {
    super('lewd-catgirl', { nsfw: true })
  }

  public async run(): Promise<void> {
    const API = new (this.getNekoslife())

    if (API instanceof Nekoslife.v2) {
      await API.fetchNsfwBody('lewd')
        .then((body) => {
          if (body.msg) window.showErrorMessage(body.msg)
          else this.createWebviewPanel(body.url)
        })
        .catch((error) => {
          window.showErrorMessage(error)
        })
    }

    if (API instanceof Nekoslife.v3) {
      const array = [
        API.fetchNsfwImg('neko_lewd'),
        API.fetchNsfwImg('neko_ero')
      ]
      const fetchImg = array[Math.floor(Math.random() * array.length)]

      await fetchImg
        .then((body) => {
          if (body.data.status.code !== 200) {
            window.showErrorMessage(`HTTPS CODE: ${body.data.status.code} : ${body.data.status.message ?? 'No Message'}`)
          } else this.createWebviewPanel(body.data.response.url)
        })
        .catch((error) => {
          window.showErrorMessage(error)
        })
    }
  }
}

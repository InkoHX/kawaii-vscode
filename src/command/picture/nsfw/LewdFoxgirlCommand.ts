import Nekoslife from '../../../api/nekoslife/Nekoslife'
import PictureCommand from '../../PictureCommand'
import { window } from 'vscode'

export default class LewdFoxgirl extends PictureCommand {
  constructor() {
    super('lewd-foxgirl', { nsfw: true })
  }

  public async run(): Promise<void> {
    const API = new (this.getNekoslife())

    if (API instanceof Nekoslife.v2) {
      await API.fetchNsfwBody('lewdk')
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
        API.fetchNsfwImg('kitsune_lewd'),
        API.fetchNsfwImg('kitsune_ero')
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

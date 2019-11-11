import Nekoslife from '../../api/nekoslife/Nekoslife'
import PictureCommand from '../PictureCommand'
import { window } from 'vscode'

export default class Foxgirl extends PictureCommand {
  constructor() {
    super('foxgirl')
  }

  public async run(): Promise<void> {
    const API = this.getNekoslife()

    if (API === Nekoslife.v2) {
      await new API().fetchSfwBody('fox_girl')
        .then((body) => {
          if (body.msg) window.showErrorMessage(body.msg)
          else this.createWebviewPanel(body.url)
        })
        .catch((error) => {
          window.showErrorMessage(error)
        })
    }

    if (API === Nekoslife.v3) {
      await new API().fetchSfwImg('kitsune')
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

import PictureCommand from '../base/PictureCommand'

export default class extends PictureCommand {
  public async run (): Promise<void> {
    if (this.getVersion() === 'v3') {
      const data = await this.v3.getSfwImg("waifu").then((res) => res.data)
      if (data.status.success === false) {
        const message = data.status.message ? data.status.message : 'Request failed.'
        this.window.showErrorMessage(`Code ${data.status.code}: ${message}`)
      } else if (!data.response.url) this.window.showErrorMessage('Image URL not found')
      else this.createWebviewPanel(data.response.url)
    } else {
      const data = await this.v2.getSfwBody('waifu')
      if (data.msg) this.window.showErrorMessage(data.msg === '404' ? 'API not found.' : data.msg)
      else if (!data.url) this.window.showErrorMessage('Image URL not found.')
      else this.createWebviewPanel(data.url)
    }
  }
}

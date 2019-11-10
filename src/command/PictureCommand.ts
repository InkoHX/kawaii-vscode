import { ViewColumn, Webview, window, workspace } from 'vscode'
import Command from './Command'
import Nekoslife from '../api/nekoslife/Nekoslife'

export default abstract class PictureCommand extends Command {
  public getNekoslife(): typeof Nekoslife.v2 | typeof Nekoslife.v3 {
    const config = workspace.getConfiguration().get('kawaii-vscode.config.version')
    if (config === 'v2') return Nekoslife.v2
    else return Nekoslife.v3
  }

  public createWebviewPanel(url?: string): void {
    if (!url) {
      window.showErrorMessage('URL is undefined.')

      return
    }

    const panel = window.createWebviewPanel('kawaii-vscode.webview', `Kawaii VS Code - ${this.name}`, { viewColumn: ViewColumn.One }, {
      retainContextWhenHidden: true
    })
    panel.webview.html = this.getHTMLContent(url, panel.webview)
  }

  private getHTMLContent(url: string, webview: Webview): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'none'; img-src ${webview.cspSource} https:;"
        />
      </head>
      <body>
        <img style="position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;" src="${url}" />
      </body>
      </html>`
  }
}

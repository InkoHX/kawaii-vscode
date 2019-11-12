import { ViewColumn, Webview, WebviewPanel, window, workspace } from 'vscode'
import Command from './Command'
import Nekoslife from '../api/nekoslife/Nekoslife'

export default abstract class PictureCommand extends Command {
  public getNekoslife(): typeof Nekoslife.v2 | typeof Nekoslife.v3 {
    const config = workspace.getConfiguration().get('kawaii-vscode.config.version')
    if (config === 'v2') return Nekoslife.v2
    else return Nekoslife.v3
  }

  public createWebviewPanel(url?: string): WebviewPanel {
    if (!url) throw new Error('URL is undefined.')

    const panel = window.createWebviewPanel('kawaii-vscode.webview', `Kawaii VS Code - ${this.name}`, { viewColumn: ViewColumn.One }, {
      retainContextWhenHidden: true
    })

    panel.webview.html = this.getHTMLContent(url, panel.webview)

    return panel
  }

  private getHTMLContent(url: string, webview: Webview): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'none'; img-src ${webview.cspSource} https:;"
        />
      </head>
      <body>
        <div align="center">
          <img src="${url}" />
        </div>
      </body>
      </html>`
  }
}

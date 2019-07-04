import { ViewColumn, WebviewPanel, window } from "vscode";

export default class Utils {

  public static getPanel(
    url: string,
    viewType: string = "kawaii.vscode.webview",
    title: string = "Kawaii VSCode - Nekogirl",
  ): void {
    const panel: WebviewPanel = window.createWebviewPanel(viewType, title, { viewColumn: ViewColumn.One });
    panel.webview.html = this.getHTMLContent(url);
  }

  private static getHTMLContent(url: string): string {
    return `<html>
    <body>
      <img style="position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;" src="${url}" />
    </body>
    </html>`;
  }
}

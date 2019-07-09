import { ExtensionContext, ViewColumn, WebviewPanel, window } from "vscode";
import NekoslifeV2 from "../../api/nekoslife/v2";
import Command, { CommandOptions } from "./Command";

export default abstract class PictureCommand extends Command {
  public v2: NekoslifeV2;

  constructor(context: ExtensionContext, name: string, options: CommandOptions = {}) {
    super(context, name, options);
    this.v2 = new NekoslifeV2();
  }

  protected createWebviewPanel(
    url: string,
    viewType: string = "kawaii-vscode.webview",
    title: string = `Kawaii VSCode - ${this.name}`,
  ): void {
    const panel: WebviewPanel = window.createWebviewPanel(viewType, title, { viewColumn: ViewColumn.One });
    panel.webview.html = this.getHTMLContent(url);
  }

  private getHTMLContent(url: string): string {
    return `<html>
    <body>
      <img style="position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;" src="${url}" />
    </body>
    </html>`;
  }
}

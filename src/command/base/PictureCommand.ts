import { ExtensionContext, ViewColumn, WebviewPanel, window } from "vscode";
import NekoslifeV2 from "../../api/nekoslife/v2";
import NekoslifeV3 from "../../api/nekoslife/v3";
import Command, { CommandOptions } from "./Command";

type Version = "v2" | "v3";

export default abstract class PictureCommand extends Command {
  public v2: NekoslifeV2;
  public v3: NekoslifeV3;

  constructor(context: ExtensionContext, name: string, options: CommandOptions = {}) {
    super(context, name, options);
    this.v2 = new NekoslifeV2();
    this.v3 = new NekoslifeV3();
  }

  public createWebviewPanel(
    url: string,
    title: string = `Kawaii VSCode - ${this.name}`,
    viewType: string = "kawaii-vscode.webview",
  ): void {
    const panel: WebviewPanel = window.createWebviewPanel(viewType, title, { viewColumn: ViewColumn.One });
    panel.webview.html = this.getHTMLContent(url);
  }

  public getVersion(): Version {
    const version = this.config.get("kawaii-vscode.config.version");
    if (version === "v3") return "v3";
    else if (version === "v2") return "v2";
    else return "v3";
  }

  private getHTMLContent(url: string): string {
    return `<html>
    <body>
      <img style="position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;" src="${url}" />
    </body>
    </html>`;
  }
}

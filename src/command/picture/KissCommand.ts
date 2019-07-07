import { window } from "vscode";
import PictureCommand from "../base/PictureCommand";

export default class extends PictureCommand {
  public async run(): Promise<void> {
    const data = await this.v2.getSfwBody("kiss");
    if (data.msg) window.showErrorMessage(data.msg === "404" ? "API not found." : data.msg);
    if (!data.url) window.showErrorMessage("Image URL not found.");
    else this.createWebviewPanel(data.url);
  }
}

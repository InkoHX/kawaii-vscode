import { commands, ExtensionContext, window } from "vscode";
import Nekoslife from "./api/nekoslife";
import Utils from "./util/utils";

export async function activate(context: ExtensionContext): Promise<void> {
  const nekogirl = commands.registerCommand("kawaii-vscode.nekogirl", async () => {
    const url = await Nekoslife.getBody("neko");
    if (typeof url.msg === "string") window.showErrorMessage(url.msg === "404" ? "API not found." : url.msg);
    if (typeof url.url === "string") Utils.getPanel(url.url);
    else window.showErrorMessage("画像が見つかりませんでした...");
  });

  const nekogirlgif = commands.registerCommand("kawaii-vscode.nekogirl-gif", async () => {
    const url = await Nekoslife.getBody("ngif");
    if (typeof url.msg === "string") window.showErrorMessage(url.msg === "404" ? "API not found." : url.msg);
    if (typeof url.url === "string") Utils.getPanel(url.url);
    else window.showErrorMessage("画像が見つかりませんでした...");
  });

  const foxgirl = commands.registerCommand("kawaii-vscode.foxgirl", async () => {
    const url = await Nekoslife.getBody("fox_girl");
    if (typeof url.msg === "string") window.showErrorMessage(url.msg === "404" ? "API not found." : url.msg);
    if (typeof url.url === "string") Utils.getPanel(url.url);
    else window.showErrorMessage("画像が見つかりませんでした...");
  });

  const kiss = commands.registerCommand("kawaii-vscode.kiss", async () => {
    const url = await Nekoslife.getBody("kiss");
    if (typeof url.msg === "string") window.showErrorMessage(url.msg === "404" ? "API not found." : url.msg);
    if (typeof url.url === "string") Utils.getPanel(url.url);
    else window.showErrorMessage("画像が見つかりませんでした...");
  });

  context.subscriptions.push(nekogirl, nekogirlgif, foxgirl, kiss);
}

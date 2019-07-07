import { commands, ExtensionContext } from "vscode";
import Command from "./command/base/Command";
import CatGirl from "./command/picture/CatgirlCommand";
import CatGirlGif from "./command/picture/gif/CatgirlGifCommand";

function getCommandList(context: ExtensionContext): Command[] {
  return [
    new CatGirl(context, "catgirl"),
    new CatGirlGif(context, "catgirl-gif"),
  ];
}

export function registerCommands(context: ExtensionContext): void {
  const commandList = getCommandList(context);
  for (const command of commandList) {
    context.subscriptions.push(commands.registerCommand(command.commandName, command._run, command));
  }
}

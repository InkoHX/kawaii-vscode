import { commands, ExtensionContext } from "vscode";
import Command from "./command/base/Command";
import CatgirlCommand from "./command/picture/CatgirlCommand";
import FoxgirlCommand from "./command/picture/FoxgirlCommand";
import CatGirlGifCommand from "./command/picture/gif/CatgirlGifCommand";
import KissCommand from "./command/picture/KissCommand";
import LewdCatgirlCommand from "./command/picture/nsfw/LewdCatgirlCommand";
import LewdFoxgirlCommand from "./command/picture/nsfw/LewdFoxgirlCommand";

function getCommandList(context: ExtensionContext): Command[] {
  return [
    new CatgirlCommand(context, "catgirl"),
    new CatGirlGifCommand(context, "catgirl-gif"),
    new FoxgirlCommand(context, "foxgirl"),
    new KissCommand(context, "kiss"),
    new LewdCatgirlCommand(context, "lewd-catgirl", { nsfw: true }),
    new LewdFoxgirlCommand(context, "lewd-foxgirl", { nsfw: true }),
  ];
}

export function registerCommands(context: ExtensionContext): void {
  const commandList = getCommandList(context);
  for (const command of commandList) {
    context.subscriptions.push(commands.registerCommand(command.commandName, command._run, command));
  }
}

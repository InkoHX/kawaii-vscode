import { commands, ExtensionContext } from "vscode";
import Command from "./command/base/Command";
import CatGirl from "./command/CatgirlCommand";

function getCommandList(context: ExtensionContext): Command[] {
  return [
    new CatGirl(context, "catgirl"),
  ];
}

export function registerCommands(context: ExtensionContext): void {
  const commandList = getCommandList(context);
  for (const command of commandList) {
    context.subscriptions.push(commands.registerCommand(command.commandName, command._run, command));
  }
}

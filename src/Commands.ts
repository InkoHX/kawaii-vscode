import { commands, ExtensionContext } from 'vscode'
import Command from './command/base/Command'
import CatgirlCommand from './command/picture/CatgirlCommand'
import FoxgirlCommand from './command/picture/FoxgirlCommand'
import CatGirlGifCommand from './command/picture/gif/CatgirlGifCommand'
import KissCommand from './command/picture/KissCommand'
import LewdCatgirlCommand from './command/picture/nsfw/LewdCatgirlCommand'
import LewdFoxgirlCommand from './command/picture/nsfw/LewdFoxgirlCommand'
import HugCommand from './command/picture/HugCommand'
import PatCommand from './command/picture/PatCommand'
import WaifuCommand from './command/picture/WaifuCommand'

function getCommandList (context: ExtensionContext): Command[] {
  return [
    new CatgirlCommand(context),
    new CatGirlGifCommand(context),
    new FoxgirlCommand(context),
    new HugCommand(context),
    new KissCommand(context),
    new PatCommand(context),
    new WaifuCommand(context),
    new LewdCatgirlCommand(context),
    new LewdFoxgirlCommand(context)
  ]
}

export function registerCommands (context: ExtensionContext): void {
  const commandList = getCommandList(context)
  for (const command of commandList) {
    context.subscriptions.push(commands.registerCommand(command.commandName, command._run, command))
  }
}

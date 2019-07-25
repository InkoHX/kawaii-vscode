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
import BakaCommand from './command/picture/BakaCommand'
import SmugCommand from './command/picture/SmugCommand'
import FeedCommand from './command/picture/FeedCommand'
import SlapCommand from './command/picture/SlapCommand'
import CuddleCommand from './command/picture/CuddleCommand'
import PokeCommand from './command/picture/PokeCommand'
import TickleCommand from './command/picture/TickleCommand'

function getCommandList (context: ExtensionContext): Command[] {
  return [
    new BakaCommand(context),
    new CatgirlCommand(context),
    new CatGirlGifCommand(context),
    new CuddleCommand(context),
    new FeedCommand(context),
    new FoxgirlCommand(context),
    new HugCommand(context),
    new KissCommand(context),
    new PatCommand(context),
    new PokeCommand(context),
    new SlapCommand(context),
    new SmugCommand(context),
    new TickleCommand(context),
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

import vscode, { ExtensionContext } from 'vscode'
import Catgirl from './command/webview/picture/CatgirlCommand'
import CatgirlGif from './command/webview/gif/CatgirlGifCommand'
import Foxgirl from './command/webview/picture/FoxgirlCommand'
import LewdCatgirl from './command/webview/picture/nsfw/LewdCatgirlCommand'
import LewdFoxgirl from './command/webview/picture/nsfw/LewdFoxgirlCommand'

const commands = [
  new Catgirl(),
  new Foxgirl(),
  new CatgirlGif(),
  new LewdCatgirl(),
  new LewdFoxgirl()
]

export default (context: ExtensionContext): void => {
  for (const command of commands) {
    context.subscriptions.push(vscode.commands.registerCommand(command.commandName, () => {
      const isNSFW: boolean = vscode.workspace.getConfiguration().get('kawaii-vscode.config.nsfw', false)
      if (command.nsfw && !isNSFW) {
        vscode.window.showInformationMessage('このコマンドを使用するには設定からNSFWコンテンツの表示を許可してください。')

        return
      }
      command.run().catch((error) => vscode.window.showErrorMessage(error))
    }))
  }
}

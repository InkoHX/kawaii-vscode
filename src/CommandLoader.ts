import vscode, { ExtensionContext } from 'vscode'
import Catgirl from './command/picture/CatgirlCommand'

const commands = [
  new Catgirl()
]

export default (context: ExtensionContext): void => {
  for (const command of commands) {
    context.subscriptions.push(vscode.commands.registerCommand(command.commandName, () => {
      const isNSFW = vscode.workspace.getConfiguration().get('kawaii-vscode.config.nsfw')
      if (command.nsfw && !isNSFW) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        vscode.window.showInformationMessage('このコマンドを使用するには設定からNSFWコンテンツの表示を許可してください。')

        return
      }
      command.run().catch((error) => vscode.window.showErrorMessage(error))
    }))
  }
}

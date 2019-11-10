import { ExtensionContext } from 'vscode'
import commandLoader from './CommandLoader'

export function activate(context: ExtensionContext): void {
  commandLoader(context)
}

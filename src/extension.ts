import { ExtensionContext } from "vscode";
import { registerCommands } from "./Commands";

export function activate(context: ExtensionContext): void {
  registerCommands(context);
}

import { ExtensionContext } from "vscode";
import { registerCommands } from "./Commands";

export async function activate(context: ExtensionContext): Promise<void> {
  registerCommands(context);
}

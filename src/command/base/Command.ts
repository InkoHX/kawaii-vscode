import { ExtensionContext, window, workspace, WorkspaceConfiguration } from "vscode";

export interface CommandOptions {
  nsfw?: boolean;
}

export default abstract class Command {
  public context: ExtensionContext;
  public commandName: string;
  public nsfw: boolean;
  public name: string;
  public window: typeof window;
  public config: WorkspaceConfiguration;

  public constructor(context: ExtensionContext, name: string, options: CommandOptions = {}) {
    this.context = context;
    this.nsfw = options.nsfw || false;
    this.name = name;
    this.commandName = `kawaii-vscode.command.${name}`;
    this.window = window;
    this.config = workspace.getConfiguration();
  }

  public async _run(): Promise<void> {
    const config = workspace.getConfiguration();
    if (this.nsfw && !config.get("kawaii-vscode.config.nsfw")) {
      window.showInformationMessage("このコマンドを使用するには設定からNSFWコンテンツの表示を許可してください。");
      return;
    }
    return this.run().catch((error) => {
      if (typeof error === "undefined") return;
      window.showErrorMessage(String(error));
    });
  }

  public getConfig(): WorkspaceConfiguration {
    return this.config;
  }

  public getWindow(): typeof window {
    return this.window;
  }

  public abstract async run(): Promise<void>;
}

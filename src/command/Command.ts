import Utils from '../utils/Utils'

export interface CommandOptions {
  nsfw?: boolean
}

const defaultCommandOptions: CommandOptions = {
  nsfw: false
}

export default abstract class Command {
  public readonly options: CommandOptions

  public readonly commandName: string

  public readonly name: string

  public readonly nsfw: boolean

  public constructor(commandName: string, options?: CommandOptions) {
    this.options = Utils.mergeObject(defaultCommandOptions, options || {})
    this.nsfw = this.options.nsfw || false
    this.name = commandName
    this.commandName = `kawaii-vscode.command.${commandName}`
  }

  public abstract async run(): Promise<void>
}

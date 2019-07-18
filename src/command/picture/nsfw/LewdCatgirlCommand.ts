import PictureCommand from "../../base/PictureCommand";

export default class extends PictureCommand {
  public async run(): Promise<void> {
    if (this.getVersion() === "v3") {
      const data = await this.v3.getNsfwImg("neko_lewd").then((res) => res.data);
      if (data.status.success === false) {
        const message = data.status.message ? data.status.message : "Request failed.";
        this.window.showErrorMessage(`Code ${data.status.code}: ${message}`);

        return;
      } else if (!data.response.url) this.window.showErrorMessage("Image URL not found");
      else this.createWebviewPanel(data.response.url);
    } else {
      const data = await this.v2.getNsfwBody("lewd");
      if (data.msg) this.window.showErrorMessage(data.msg === "404" ? "API not found." : data.msg);
      else if (!data.url) this.window.showErrorMessage("Image URL not found.");
      else this.createWebviewPanel(data.url);
    }
  }
}

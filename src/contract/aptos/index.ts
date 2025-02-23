import { AptosCompilerService } from "./compiler";
import { WorkspaceService } from "./workspace";
import { AptosDeployerService } from "./deployer";
import * as vscode from "vscode";
import { CompileArgs, DeployArgs } from "./types";

export class AptosService {
  private compiler: AptosCompilerService;
  private workspace: WorkspaceService;
  private deployer: AptosDeployerService;

  constructor(context: vscode.ExtensionContext) {
    this.workspace = new WorkspaceService(context);
    this.compiler = new AptosCompilerService();
    this.deployer = new AptosDeployerService();
  }

  async compile(webview: vscode.Webview, args: CompileArgs) {
    return this.compiler.compile(webview, args);
  }

  async deploy(webview: vscode.Webview, agrs: DeployArgs) {
    return this.deployer.deploy(webview, agrs);
  }

  async checkProfile(webview: vscode.Webview) {
    return this.deployer.checkProfile(webview);
  }
}

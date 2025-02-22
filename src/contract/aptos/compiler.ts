import * as vscode from "vscode";
import { exec } from "child_process";
import { promisify } from "util";
import { CompileSettings } from "./types";

const execAsync = promisify(exec);

export class AptosCompilerService {
  async compile(
    webview: vscode.Webview,
    saveMetadata: boolean,
    fetchDepsOnly: boolean,
    artifacts: "none" | "sparse" | "all",
    packageDir_compile: string,
    outputDir: string,
    namedAddresses_compile: string,
    overrideStd: string | null,
    devMode: boolean,
    skipGitDeps: boolean,
    skipAttributeChecks: boolean,
    checkTestCode: boolean,
    optimization: "none" | "default" | "extra"
  ) {
    const workspacePath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
    if (!workspacePath) {
      throw new Error("Workspace path not found");
    }

    let command = "aptos move compile";
    command += ` --named-addresses ${namedAddresses_compile}=default`;
    command += ` --included-artifacts ${artifacts}`;
    command += ` --optimize ${optimization}`;
    if (saveMetadata) {
      command += " --save-metadata";
    }
    if (devMode) {
      command += " --dev";
    }
    if (skipGitDeps) {
      command += " --skip-fetch-latest-git-deps";
    }
    if (skipAttributeChecks) {
      command += " --skip-attribute-checks";
    }
    if (checkTestCode) {
      command += " --check-test-code";
    }
    command += ` --package-dir ${packageDir_compile}`;
    command += ` --output-dir ${outputDir}`;
    if (fetchDepsOnly) {
      command += " --fetch-deps-only";
    }
    if (overrideStd) {
      command += ` --override-std ${overrideStd}`;
    }

    try {
      const { stdout, stderr } = await execAsync(command, {
        cwd: workspacePath,
      });
      webview.postMessage({
        type: "compileStatus",
        success: true,
        message: stderr + stdout,
      });
    } catch (error) {
      webview.postMessage({
        type: "compileStatus",
        success: false,
        message: (error as Error).message,
      });
    }
  }
}

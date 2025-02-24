import * as vscode from "vscode";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);
export default async function deploy(
  webview: vscode.Webview,
  saveMetadata: boolean,
  fetchDepsOnly: boolean,
  artifacts: "none" | "sparse" | "all"| ""= "",
  packageDir_compile: string,
  outputDir: string,
  named_addresses: string,
  overrideStd: string | null,
  devMode: boolean,
  skipGitDeps: boolean,
  skipAttributeChecks: boolean,
  checkTestCode: boolean,
  optimization: "none" | "default" | "extra"| ""= ""
) {
  const workspacePath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
  if (!workspacePath) {
    throw new Error("Workspace path not found");
  }

  let command = "aptos move publish";
  command += ` --named-addresses ${named_addresses}=default --max-gas 1000 --gas-unit-price 200`;

  // if (optimization !== "default" | ) {
  //   command += ` --optimize ${optimization}`;
  // }
  // if (artifacts !== "sparse") {
  //   command += ` --included-artifacts ${artifacts}`;
  // }
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
  if (packageDir_compile) {
    command += ` --package-dir ${packageDir_compile}`;
  }
  if (outputDir) {
    command += ` --output-dir ${outputDir}`;
  }
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
      type: "cliStatus",
      success: true,
      message: stderr + stdout,
    });
  } catch (error) {
    webview.postMessage({
      type: "cliStatus",
      success: false,
      message: (error as Error).message,
    });
  }
}


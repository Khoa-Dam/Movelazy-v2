
import * as vscode from 'vscode';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class AptosCompilerService {
    async compile(webview: vscode.Webview, packageDir: string, namedAddresses: string, moveVersion: string, optimizer: boolean, optimizerlevel: string, bytecodeHash: string) {
        const workspacePath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!workspacePath) {
            webview.postMessage({
                type: 'compileStatus',
                success: false,
                message: 'No workspace folder found.'
            });
            return;
        }

        try {
            // Check if Aptos CLI is installed
            await execAsync('aptos --version', { cwd: workspacePath });
            console.log("check>>>>>>>", packageDir, "   ", namedAddresses);
            let command = `aptos move compile --package-dir ${packageDir} --named-addresses ${namedAddresses} `;

            if (moveVersion === 'Move 2') {
                command += `--move-2`;
            } else {
                command += `${optimizer === true ? `--optimize ${optimizerlevel}` : ''} --bytecode-version ${bytecodeHash} `;
            }
            const { stdout, stderr } = await execAsync(command, { cwd: workspacePath });

            console.log("check>>> KQ", stdout, " checkeck", stderr);

            const isInformational = stdout.includes('"Result"');

            if (stderr && !isInformational) {
                webview.postMessage({
                    type: 'compileStatus',
                    success: false,
                    message: stderr
                });
                return;
            }

            webview.postMessage({
                type: 'compileStatus',
                success: true,
                message: stderr + stdout || 'Compilation and publishing successful!'
            });

        } catch (error) {
            webview.postMessage({
                type: 'compileStatus',
                success: false,
                message: (error as Error).message
            });
        }
    }

    async clean(webview: vscode.Webview) {
        const workspacePath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!workspacePath) {
            webview.postMessage({
                type: 'cleanStatus',
                success: false,
                message: 'No workspace folder found.'
            });
            return;
        }

        try {
            const { stdout, stderr } = await execAsync('npm aptos clean', { cwd: workspacePath });

            if (stderr) {
                webview.postMessage({
                    type: 'cleanStatus',
                    success: false,
                    message: stderr
                });
                return;
            }

            webview.postMessage({
                type: 'cleanStatus',
                success: true,
                message: stdout || 'Cleaned successfully!'
            });

        } catch (error) {
            webview.postMessage({
                type: 'cleanStatus',
                success: false,
                message: (error as Error).message
            });
        }
    }
}
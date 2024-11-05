import { CompilerConfig } from './settings';

export type CompilerMessage = {
    command: 'solidity.compile'
    | 'solidity.getSettings'
    | 'solidity.initWorkspace'
    | 'solidity.checkWorkspace'
    | 'solidity.clean'
    | 'solidity.getContractFiles'
    | 'solidity.startLocalNode'
    | 'solidity.stopLocalNode'
    | 'solidity.deploy'
    | 'solidity.getAccounts'
    | 'solidity.setAccount'
    | 'solidity.getAccountBalance'
    | 'solidity.getAccountPrivateKey'
    | 'solidity.getAccountNonce';
    settings?: CompilerConfig;
};

export type VSCodeMessage = {
    type: 'settings' | 'compileStatus' | 'workspaceStatus' | 'error';
    settings?: CompilerConfig;
    success?: boolean;
    message?: string;
    initialized?: boolean;
    loading?: boolean;
    error?: string;
};

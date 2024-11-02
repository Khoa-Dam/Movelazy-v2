import { CompilerSettings } from './settings';

export type CompilerMessage = {
    command: 'solidity.compile' | 'solidity.getSettings' | 'solidity.updateConfig' | 'solidity.initWorkspace' | 'solidity.checkWorkspace';
    settings?: CompilerSettings;
};

export type VSCodeMessage = {
    type: 'settings' | 'compileStatus' | 'workspaceStatus' | 'error';
    settings?: CompilerSettings;
    success?: boolean;
    message?: string;
    initialized?: boolean;
    loading?: boolean;
    error?: string;
};

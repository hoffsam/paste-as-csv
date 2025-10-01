import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('pasteAsCsv.pasteAndConvert', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const clipboard = await vscode.env.clipboard.readText();
    const converted = clipboard.replace(/\t/g, ',');
    
    editor.edit(editBuilder => {
      const position = editor.selection.active;
      editBuilder.insert(position, converted);
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
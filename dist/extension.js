"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
function activate(context) {
    const disposable = vscode.commands.registerCommand('pasteAsCsv.pasteAndConvert', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        const clipboard = await vscode.env.clipboard.readText();
        const converted = clipboard.replace(/\t/g, ',');
        editor.edit(editBuilder => {
            const position = editor.selection.active;
            editBuilder.insert(position, converted);
        });
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map
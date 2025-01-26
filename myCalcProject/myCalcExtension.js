const Scratch = require('scratch-vm');

// 定义扩展类
class MyCalcExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'myCalcExtension',
            name: 'My Calculator',
            blocks: [
                {
                    opcode: 'add',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[ADD1] + [ADD2]',
                    arguments: {
                        ADD1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        ADD2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                },
                {
                    opcode: 'subtract',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[SUBTRACT1] - [SUBTRACT2]',
                    arguments: {
                        SUBTRACT1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        SUBTRACT2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                }
            ]
        };
    }

    add(args) {
        return parseFloat(args.ADD1) + parseFloat(args.ADD2);
    }

    subtract(args) {
        return parseFloat(args.SUBTRACT1) - parseFloat(args.SUBTRACT2);
    }
}

// 模拟 scratch-vm 的 extension-manager.js
const ExtensionManager = require('scratch-vm/src/extension-support/extension-manager');

// 注册扩展
ExtensionManager.registerExtension('myCalcExtension', () => new MyCalcExtension());

// 模拟 scratch-gui 的加载过程
const VirtualMachine = require('scratch-vm');

const vm = new VirtualMachine();

// 加载扩展
vm.extensionManager.loadExtensionById('myCalcExtension').then(() => {
    console.log('My Calculator Extension loaded successfully');
}).catch(err => {
    console.error('Failed to load extension:', err);
});

// 创建一个简单的项目来测试扩展
const project = require('./myCalcProject.json');
vm.loadProject(project).then(() => {
    console.log('Project loaded successfully');
}).catch(err => {
    console.error('Failed to load project:', err);
});

// 运行虚拟机
vm.start();

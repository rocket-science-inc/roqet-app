import Icon from "./icon.template";

export { Icon }

// import FirstIcon from "./icon.template";
// import { Icon as SecondIcon } from "native-base";

// const applyMixins = (derivedCtor: any, baseCtors: any[]) => {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             Object.defineProperty(derivedCtor.prototype, name, <any>Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
//         });
//     });
// }

// class Icon {};

// applyMixins(Icon, [FirstIcon, SecondIcon]);

// export { Icon }

// // Disposable Mixin
// class Disposable {
//     isDisposed: boolean;
//     dispose() {
//         this.isDisposed = true;
//     }

// }

// // Activatable Mixin
// class Activatable {
//     isActive: boolean;
//     activate() {
//         this.isActive = true;
//     }
//     deactivate() {
//         this.isActive = false;
//     }
// }

// class SmartObject implements Disposable, Activatable {
//     constructor() {
//         setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
//     }

//     interact() {
//         this.activate();
//     }

//     // Disposable
//     isDisposed: boolean = false;
//     dispose: () => void;
//     // Activatable
//     isActive: boolean = false;
//     activate: () => void;
//     deactivate: () => void;
// }
// applyMixins(SmartObject, [Disposable, Activatable]);

// let smartObj = new SmartObject();
// setTimeout(() => smartObj.interact(), 1000);

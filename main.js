import { WebContainer } from "@webcontainer/api";

console.log("Booting WebContainer...");

const webcontainerInstance = await WebContainer.boot();

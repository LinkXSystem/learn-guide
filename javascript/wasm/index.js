"use strict";

const fs = require("fs");
const { WASI } = require("wasi");

const wasi = new WASI({
  env: {},
  args: [],
  preopens: { "/sandbox": process.cwd() },
});

const importObject = { wasi_snapshot_preview1: wasi.wasiImport };

(async () => {
  const wasm = await WebAssembly.compile(fs.readFileSync("./opencv.wasm"));
  const instance = await WebAssembly.instantiate(wasm, importObject);

  wasi.start(instance);
})();

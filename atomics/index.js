const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(`Adding 2 to uint8 index zero, Original value was: ${Atomics.add(uint8, 0, 2)}`);

console.log(`The value  at index zero is: ${Atomics.load(uint8, 0)}`);
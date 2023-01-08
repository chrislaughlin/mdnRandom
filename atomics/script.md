# Atomics

The **Atomics** object provides static unitlity operations for different Bufffer objects such as:

- SharedArrayBuffer
- ArrayBuffer
- Uint8Array

More menory efficant way to store data in arrays 


In this example we create a SharedArrayBuffer with 16 bytes of data, then create a Uint8Array from this buffer. Then using our Atomics methods we can add to an existing element in the buffer and load values from the buffer.  

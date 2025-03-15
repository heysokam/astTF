## astTF
Serializing slate elements's data is trivial.
Mapped into JSON-glTF-like objects.
- Caller generates the json
- slate reads/deserializes the json file into zig
- slate generates the nim/zig/whatever-else code
_Would also make it possible to rely on slate for TS-to-Shader codegen_

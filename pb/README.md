# Protocol buffers 

```
protoc -I pb/ pb/game.proto --go_out=plugins=grpc:pb --js_out=import_style=commonjs:pb --grpc-web_out=import_style=commonjs,mode=grpcwebtext:pb
```
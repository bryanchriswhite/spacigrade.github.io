# Protocol buffers 

`protoc -I pb/ pb/game.proto --go_out=plugins=grpc:pb --js_out=library=game,binary:pb `
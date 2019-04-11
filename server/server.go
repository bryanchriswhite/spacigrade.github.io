package main

import (
	"flag"
	"fmt"
	"net"
	"os"

	"google.golang.org/grpc"

	"game/pb"
)

var (
	port int
)

type Server struct {
	players       []*pb.Player
	height, width int
	objects       []*pb.Object
}

func initializeFlags() {
	flag.IntVar(&port, "port", 8080, "port")
	flag.Parse()
}

func (s *Server) Connection(stream pb.Game_ConnectionServer) error {
	// 	for {
	// 		res, err := stream.Recv()
	// 		if err != nil {
	// 			if err == io.EOF {
	// 				break
	// 			}
	// 			return err
	// 		}
	// 		fmt.Println("received", res.GetData())
	// 		err = stream.Send(&pb.SampleBidirectionalResponse{
	// 			Data: res.GetData(),
	// 		})
	// 		if err != nil {
	// 			if err == io.EOF {
	// 				break
	// 			}
	// 			return err
	// 		}
	// 	}
	return nil
}

func (s *Server) Join(req *pb.JoinRequest, stream pb.Game_JoinServer) error {
	return nil
}

func main() {
	initializeFlags()

	// start grpc server
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		fmt.Println("failed")
		os.Exit(1)
	}
	defer lis.Close()

	grpcServer := grpc.NewServer()

	var s Server
	pb.RegisterGameServer(grpcServer, &s)

	defer grpcServer.GracefulStop()
	err = grpcServer.Serve(lis)
	if err != nil {
		fmt.Println("failed")
		os.Exit(1)
	}
}

package main

import (
	"flag"
	"fmt"
	"io"
	"net"
	"os"

	"game/pb"

	"github.com/google/uuid"
	"google.golang.org/grpc"
)

var (
	port int
)

// AuthorizedPlayer is an authorized player
type AuthorizedPlayer struct {
	Authorization []byte
	Player        *pb.Player
}

// Server contains all variables relevant to game world state
type Server struct {
	maxPlayers    int
	players       map[string]*AuthorizedPlayer // key = player name
	height, width int
	objects       []*pb.Object
}

func initializeFlags() {
	flag.IntVar(&port, "port", 8080, "port")
	flag.Parse()
}

// Connection maintains a connection between client/server and handles bidirectional game state changes
func (s *Server) Connection(stream pb.Game_ConnectionServer) error {

	errCh := make(chan error)

	go func() {
		for {
			// Receive message from client
			_, err := stream.Recv()
			if err != nil {
				if err == io.EOF {
					errCh <- nil
				}

				errCh <- err
				return
			}

			// verify player and authorization

			// determine changes
		}
	}()

	go func() {
		// Send world update to client
		err := stream.Send(&pb.StatusUpdateResponse{})
		if err != nil {
			if err == io.EOF {
				errCh <- nil
			}

			errCh <- err
			return
		}
	}()

	return <-errCh
}

// Join the Game Server
func (s *Server) Join(req *pb.JoinRequest, stream pb.Game_JoinServer) error {

	playerIdentity := req.GetIdentity()

	// Check if player identity ius already online
	if _, ok := s.players[string(playerIdentity)]; ok {
		return stream.Send(&pb.JoinResponse{
			Player: Spectator(),
			Type:   pb.JoinResponse_REJECT,
		})
	}

	// Loop until there is an open spot
	for len(s.players) >= s.maxPlayers {
		if err := stream.Send(&pb.JoinResponse{
			Player: Spectator(),
			Type:   pb.JoinResponse_REJECT,
		}); err != nil {
			return err
		}
	}

	authorization := []byte(uuid.New().String())
	nap := s.newAuthorizedPlayer(playerIdentity, authorization)

	err := stream.Send(&pb.JoinResponse{
		Player:        nap.Player,
		Type:          pb.JoinResponse_ACCEPT,
		Authorization: authorization,
	})
	if err != nil {
		return err
	}

	s.players[string(playerIdentity)] = nap

	return nil
}

// Create a new authorized player
func (s *Server) newAuthorizedPlayer(identity, authorization []byte) *AuthorizedPlayer {
	// TODO: Determine x, y based on other players and objects

	return &AuthorizedPlayer{
		Authorization: authorization,
		Player: &pb.Player{
			Type:       pb.Player_ACTIVE,
			Identity:   identity,
			X:          0,
			Y:          0,
			R:          1,
			Health:     3,
			Experience: 0,
		},
	}
}

// Spectator creates a spectator
func Spectator() *pb.Player {
	return &pb.Player{
		Type: pb.Player_SPECTATOR,
	}
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

	s := &Server{
		maxPlayers: 5,
		height:     50,
		width:      50,
	}
	pb.RegisterGameServer(grpcServer, s)

	defer grpcServer.GracefulStop()
	err = grpcServer.Serve(lis)
	if err != nil {
		fmt.Println("failed")
		os.Exit(1)
	}
}

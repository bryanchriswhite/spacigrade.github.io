/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pb = require('./game_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.GameClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.GamePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.JoinRequest,
 *   !proto.pb.JoinResponse>}
 */
const methodInfo_Game_Join = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.JoinResponse,
  /** @param {!proto.pb.JoinRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.JoinResponse.deserializeBinary
);


/**
 * @param {!proto.pb.JoinRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.JoinResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.GameClient.prototype.join =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.Game/Join',
      request,
      metadata || {},
      methodInfo_Game_Join);
};


/**
 * @param {!proto.pb.JoinRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.JoinResponse>}
 *     The XHR Node Readable Stream
 */
proto.pb.GamePromiseClient.prototype.join =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.Game/Join',
      request,
      metadata || {},
      methodInfo_Game_Join);
};


module.exports = proto.pb;


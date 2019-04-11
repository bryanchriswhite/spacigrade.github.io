/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.pb.Action');
goog.provide('proto.pb.Action.Type');
goog.provide('proto.pb.JoinRequest');
goog.provide('proto.pb.JoinResponse');
goog.provide('proto.pb.JoinResponse.Type');
goog.provide('proto.pb.Player');
goog.provide('proto.pb.Player.Type');
goog.provide('proto.pb.StatusUpdateRequest');
goog.provide('proto.pb.StatusUpdateResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.Action.displayName = 'proto.pb.Action';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    damage: jspb.Message.getFieldWithDefault(msg, 2, 0),
    identity: msg.getIdentity_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.Action}
 */
proto.pb.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Action;
  return proto.pb.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Action}
 */
proto.pb.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.Action.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDamage(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDamage();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getIdentity_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.Action.Type = {
  MOVE: 0,
  ATTACK: 1,
  RECEIVE_HIT: 2
};

/**
 * optional Type type = 1;
 * @return {!proto.pb.Action.Type}
 */
proto.pb.Action.prototype.getType = function() {
  return /** @type {!proto.pb.Action.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.pb.Action.Type} value */
proto.pb.Action.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 damage = 2;
 * @return {number}
 */
proto.pb.Action.prototype.getDamage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.pb.Action.prototype.setDamage = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes identity = 3;
 * @return {!(string|Uint8Array)}
 */
proto.pb.Action.prototype.getIdentity = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes identity = 3;
 * This is a type-conversion wrapper around `getIdentity()`
 * @return {string}
 */
proto.pb.Action.prototype.getIdentity_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIdentity()));
};


/**
 * optional bytes identity = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIdentity()`
 * @return {!Uint8Array}
 */
proto.pb.Action.prototype.getIdentity_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIdentity()));
};


/** @param {!(string|Uint8Array)} value */
proto.pb.Action.prototype.setIdentity = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.JoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.JoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.JoinRequest.displayName = 'proto.pb.JoinRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.JoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.JoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.JoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.JoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identity: msg.getIdentity_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.JoinRequest}
 */
proto.pb.JoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.JoinRequest;
  return proto.pb.JoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.JoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.JoinRequest}
 */
proto.pb.JoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.JoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.JoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.JoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.JoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentity_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes identity = 1;
 * @return {!(string|Uint8Array)}
 */
proto.pb.JoinRequest.prototype.getIdentity = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes identity = 1;
 * This is a type-conversion wrapper around `getIdentity()`
 * @return {string}
 */
proto.pb.JoinRequest.prototype.getIdentity_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIdentity()));
};


/**
 * optional bytes identity = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIdentity()`
 * @return {!Uint8Array}
 */
proto.pb.JoinRequest.prototype.getIdentity_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIdentity()));
};


/** @param {!(string|Uint8Array)} value */
proto.pb.JoinRequest.prototype.setIdentity = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.JoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.JoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.JoinResponse.displayName = 'proto.pb.JoinResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.JoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.JoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.JoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.JoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    authorization: msg.getAuthorization_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.JoinResponse}
 */
proto.pb.JoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.JoinResponse;
  return proto.pb.JoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.JoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.JoinResponse}
 */
proto.pb.JoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pb.JoinResponse.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAuthorization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.JoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.JoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.JoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.JoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAuthorization_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.JoinResponse.Type = {
  ACCEPT: 0,
  REJECT: 1
};

/**
 * optional Type type = 1;
 * @return {!proto.pb.JoinResponse.Type}
 */
proto.pb.JoinResponse.prototype.getType = function() {
  return /** @type {!proto.pb.JoinResponse.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.pb.JoinResponse.Type} value */
proto.pb.JoinResponse.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes authorization = 2;
 * @return {!(string|Uint8Array)}
 */
proto.pb.JoinResponse.prototype.getAuthorization = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes authorization = 2;
 * This is a type-conversion wrapper around `getAuthorization()`
 * @return {string}
 */
proto.pb.JoinResponse.prototype.getAuthorization_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAuthorization()));
};


/**
 * optional bytes authorization = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuthorization()`
 * @return {!Uint8Array}
 */
proto.pb.JoinResponse.prototype.getAuthorization_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAuthorization()));
};


/** @param {!(string|Uint8Array)} value */
proto.pb.JoinResponse.prototype.setAuthorization = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.Player = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.Player, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.Player.displayName = 'proto.pb.Player';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.Player.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Player.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Player} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Player.toObject = function(includeInstance, msg) {
  var f, obj = {
    identity: msg.getIdentity_asB64(),
    x: jspb.Message.getFieldWithDefault(msg, 2, 0),
    y: jspb.Message.getFieldWithDefault(msg, 3, 0),
    health: jspb.Message.getFieldWithDefault(msg, 4, 0),
    experience: jspb.Message.getFieldWithDefault(msg, 5, 0),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.Player}
 */
proto.pb.Player.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Player;
  return proto.pb.Player.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Player} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Player}
 */
proto.pb.Player.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIdentity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setY(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHealth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExperience(value);
      break;
    case 6:
      var value = /** @type {!proto.pb.Player.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.Player.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Player.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Player} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Player.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentity_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getX();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHealth();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getExperience();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pb.Player.Type = {
  ACTIVE: 0,
  SPECTATOR: 1
};

/**
 * optional bytes identity = 1;
 * @return {!(string|Uint8Array)}
 */
proto.pb.Player.prototype.getIdentity = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes identity = 1;
 * This is a type-conversion wrapper around `getIdentity()`
 * @return {string}
 */
proto.pb.Player.prototype.getIdentity_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIdentity()));
};


/**
 * optional bytes identity = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIdentity()`
 * @return {!Uint8Array}
 */
proto.pb.Player.prototype.getIdentity_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIdentity()));
};


/** @param {!(string|Uint8Array)} value */
proto.pb.Player.prototype.setIdentity = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 x = 2;
 * @return {number}
 */
proto.pb.Player.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.pb.Player.prototype.setX = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 y = 3;
 * @return {number}
 */
proto.pb.Player.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.pb.Player.prototype.setY = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 health = 4;
 * @return {number}
 */
proto.pb.Player.prototype.getHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.pb.Player.prototype.setHealth = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 experience = 5;
 * @return {number}
 */
proto.pb.Player.prototype.getExperience = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.pb.Player.prototype.setExperience = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Type type = 6;
 * @return {!proto.pb.Player.Type}
 */
proto.pb.Player.prototype.getType = function() {
  return /** @type {!proto.pb.Player.Type} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.pb.Player.Type} value */
proto.pb.Player.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.StatusUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.StatusUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.StatusUpdateRequest.displayName = 'proto.pb.StatusUpdateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.StatusUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.StatusUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.StatusUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StatusUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: (f = msg.getPlayer()) && proto.pb.Player.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.pb.Action.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.StatusUpdateRequest}
 */
proto.pb.StatusUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.StatusUpdateRequest;
  return proto.pb.StatusUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.StatusUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.StatusUpdateRequest}
 */
proto.pb.StatusUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Player;
      reader.readMessage(value,proto.pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 2:
      var value = new proto.pb.Action;
      reader.readMessage(value,proto.pb.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.StatusUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.StatusUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.StatusUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StatusUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.Player.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pb.Action.serializeBinaryToWriter
    );
  }
};


/**
 * optional Player player = 1;
 * @return {?proto.pb.Player}
 */
proto.pb.StatusUpdateRequest.prototype.getPlayer = function() {
  return /** @type{?proto.pb.Player} */ (
    jspb.Message.getWrapperField(this, proto.pb.Player, 1));
};


/** @param {?proto.pb.Player|undefined} value */
proto.pb.StatusUpdateRequest.prototype.setPlayer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.pb.StatusUpdateRequest.prototype.clearPlayer = function() {
  this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pb.StatusUpdateRequest.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Action action = 2;
 * @return {?proto.pb.Action}
 */
proto.pb.StatusUpdateRequest.prototype.getAction = function() {
  return /** @type{?proto.pb.Action} */ (
    jspb.Message.getWrapperField(this, proto.pb.Action, 2));
};


/** @param {?proto.pb.Action|undefined} value */
proto.pb.StatusUpdateRequest.prototype.setAction = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.pb.StatusUpdateRequest.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pb.StatusUpdateRequest.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.StatusUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.StatusUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.StatusUpdateResponse.displayName = 'proto.pb.StatusUpdateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.StatusUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.StatusUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.StatusUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StatusUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    player: (f = msg.getPlayer()) && proto.pb.Player.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.StatusUpdateResponse}
 */
proto.pb.StatusUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.StatusUpdateResponse;
  return proto.pb.StatusUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.StatusUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.StatusUpdateResponse}
 */
proto.pb.StatusUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Player;
      reader.readMessage(value,proto.pb.Player.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.StatusUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.StatusUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.StatusUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StatusUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.Player.serializeBinaryToWriter
    );
  }
};


/**
 * optional Player player = 1;
 * @return {?proto.pb.Player}
 */
proto.pb.StatusUpdateResponse.prototype.getPlayer = function() {
  return /** @type{?proto.pb.Player} */ (
    jspb.Message.getWrapperField(this, proto.pb.Player, 1));
};


/** @param {?proto.pb.Player|undefined} value */
proto.pb.StatusUpdateResponse.prototype.setPlayer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.pb.StatusUpdateResponse.prototype.clearPlayer = function() {
  this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pb.StatusUpdateResponse.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 1) != null;
};



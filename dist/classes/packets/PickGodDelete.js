"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../UUID");
const MessageFlags_1 = require("../../enums/MessageFlags");
class PickGodDeletePacket {
    constructor() {
        this.name = 'PickGodDelete';
        this.flags = MessageFlags_1.MessageFlags.FrequencyLow;
        this.id = 4294901947;
    }
    getSize() {
        return 64;
    }
    writeToBuffer(buf, pos) {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.Data['PickID'].writeToBuffer(buf, pos);
        pos += 16;
        this.Data['QueryID'].writeToBuffer(buf, pos);
        pos += 16;
        return pos - startPos;
    }
    readFromBuffer(buf, pos) {
        const startPos = pos;
        const newObjAgentData = {
            AgentID: UUID_1.UUID.zero(),
            SessionID: UUID_1.UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjData = {
            PickID: UUID_1.UUID.zero(),
            QueryID: UUID_1.UUID.zero()
        };
        newObjData['PickID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjData['QueryID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        this.Data = newObjData;
        return pos - startPos;
    }
}
exports.PickGodDeletePacket = PickGodDeletePacket;
//# sourceMappingURL=PickGodDelete.js.map
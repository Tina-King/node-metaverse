"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../UUID");
const MessageFlags_1 = require("../../enums/MessageFlags");
class BuyObjectInventoryPacket {
    constructor() {
        this.name = 'BuyObjectInventory';
        this.flags = MessageFlags_1.MessageFlags.Zerocoded | MessageFlags_1.MessageFlags.FrequencyLow;
        this.id = 4294901863;
    }
    getSize() {
        return 80;
    }
    writeToBuffer(buf, pos) {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.Data['ObjectID'].writeToBuffer(buf, pos);
        pos += 16;
        this.Data['ItemID'].writeToBuffer(buf, pos);
        pos += 16;
        this.Data['FolderID'].writeToBuffer(buf, pos);
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
            ObjectID: UUID_1.UUID.zero(),
            ItemID: UUID_1.UUID.zero(),
            FolderID: UUID_1.UUID.zero()
        };
        newObjData['ObjectID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjData['ItemID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjData['FolderID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        this.Data = newObjData;
        return pos - startPos;
    }
}
exports.BuyObjectInventoryPacket = BuyObjectInventoryPacket;
//# sourceMappingURL=BuyObjectInventory.js.map
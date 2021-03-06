// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class PurgeInventoryDescendentsMessage implements MessageBase
{
    name = 'PurgeInventoryDescendents';
    messageFlags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.PurgeInventoryDescendents;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    InventoryData: {
        FolderID: UUID;
    };

    getSize(): number
    {
        return 48;
    }

    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.InventoryData['FolderID'].writeToBuffer(buf, pos);
        pos += 16;
        return pos - startPos;
    }

    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjAgentData: {
            AgentID: UUID,
            SessionID: UUID
        } = {
            AgentID: UUID.zero(),
            SessionID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjInventoryData: {
            FolderID: UUID
        } = {
            FolderID: UUID.zero()
        };
        newObjInventoryData['FolderID'] = new UUID(buf, pos);
        pos += 16;
        this.InventoryData = newObjInventoryData;
        return pos - startPos;
    }
}


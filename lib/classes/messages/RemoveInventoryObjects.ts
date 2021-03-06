// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class RemoveInventoryObjectsMessage implements MessageBase
{
    name = 'RemoveInventoryObjects';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.RemoveInventoryObjects;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    FolderData: {
        FolderID: UUID;
    }[];
    ItemData: {
        ItemID: UUID;
    }[];

    getSize(): number
    {
        return ((16) * this.FolderData.length) + ((16) * this.ItemData.length) + 34;
    }

    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        let count = this.FolderData.length;
        buf.writeUInt8(this.FolderData.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.FolderData[i]['FolderID'].writeToBuffer(buf, pos);
            pos += 16;
        }
        count = this.ItemData.length;
        buf.writeUInt8(this.ItemData.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.ItemData[i]['ItemID'].writeToBuffer(buf, pos);
            pos += 16;
        }
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
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        let count = buf.readUInt8(pos++);
        this.FolderData = [];
        for (let i = 0; i < count; i++)
        {
            const newObjFolderData: {
                FolderID: UUID
            } = {
                FolderID: UUID.zero()
            };
            newObjFolderData['FolderID'] = new UUID(buf, pos);
            pos += 16;
            this.FolderData.push(newObjFolderData);
        }
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        count = buf.readUInt8(pos++);
        this.ItemData = [];
        for (let i = 0; i < count; i++)
        {
            const newObjItemData: {
                ItemID: UUID
            } = {
                ItemID: UUID.zero()
            };
            newObjItemData['ItemID'] = new UUID(buf, pos);
            pos += 16;
            this.ItemData.push(newObjItemData);
        }
        return pos - startPos;
    }
}


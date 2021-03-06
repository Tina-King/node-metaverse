// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ParcelGodMarkAsContentMessage implements MessageBase
{
    name = 'ParcelGodMarkAsContent';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.ParcelGodMarkAsContent;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    ParcelData: {
        LocalID: number;
    };

    getSize(): number
    {
        return 36;
    }

    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeInt32LE(this.ParcelData['LocalID'], pos);
        pos += 4;
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
        const newObjParcelData: {
            LocalID: number
        } = {
            LocalID: 0
        };
        newObjParcelData['LocalID'] = buf.readInt32LE(pos);
        pos += 4;
        this.ParcelData = newObjParcelData;
        return pos - startPos;
    }
}


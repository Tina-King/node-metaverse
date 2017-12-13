// This file has been automatically generated by writeMessageClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {MessageBase} from '../MessageBase';
import {Message} from '../../enums/Message';

export class DerezContainerMessage implements MessageBase
{
    name = 'DerezContainer';
    messageFlags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.DerezContainer;

    Data: {
        ObjectID: UUID;
        Delete: boolean;
    };

    getSize(): number
    {
        return 17;
    }

    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.Data['ObjectID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.Data['Delete']) ? 1 : 0, pos++);
        return pos - startPos;
    }

    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjData: {
            ObjectID: UUID,
            Delete: boolean
        } = {
            ObjectID: UUID.zero(),
            Delete: false
        };
        newObjData['ObjectID'] = new UUID(buf, pos);
        pos += 16;
        newObjData['Delete'] = (buf.readUInt8(pos++) === 1);
        this.Data = newObjData;
        return pos - startPos;
    }
}

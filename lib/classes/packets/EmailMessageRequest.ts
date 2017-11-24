// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class EmailMessageRequestPacket implements Packet
{
    name = 'EmailMessageRequest';
    flags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = 4294902095;

    DataBlock: {
        ObjectID: UUID;
        FromAddress: string;
        Subject: string;
    };

    getSize(): number
    {
        return (this.DataBlock['FromAddress'].length + 1 + this.DataBlock['Subject'].length + 1) + 16;
    }

}
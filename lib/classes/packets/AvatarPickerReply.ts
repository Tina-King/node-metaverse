// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class AvatarPickerReplyPacket implements Packet
{
    name = 'AvatarPickerReply';
    flags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = 4294901788;

    AgentData: {
        AgentID: UUID;
        QueryID: UUID;
    };
    Data: {
        AvatarID: UUID;
        FirstName: string;
        LastName: string;
    }[];

    getSize(): number
    {
        return ((this.calculateVarVarSize(this.Data, 'FirstName', 1) + this.calculateVarVarSize(this.Data, 'LastName', 1) + 16) * this.Data.length) + 33;
    }

    calculateVarVarSize(block: object[], paramName: string, extraPerVar: number): number
    {
        let size = 0;
        block.forEach((bl: any) =>
        {
            size += bl[paramName].length + extraPerVar;
        });
        return size;
    }

}
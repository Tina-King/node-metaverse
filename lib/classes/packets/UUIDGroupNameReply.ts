// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class UUIDGroupNameReplyPacket implements Packet
{
    name = 'UUIDGroupNameReply';
    flags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = 4294901998;

    UUIDNameBlock: {
        ID: UUID;
        GroupName: string;
    }[];

    getSize(): number
    {
        return ((this.calculateVarVarSize(this.UUIDNameBlock, 'GroupName', 1) + 16) * this.UUIDNameBlock.length) + 1;
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
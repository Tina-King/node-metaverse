// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class RemoveInventoryItemPacket implements Packet
{
    name = 'RemoveInventoryItem';
    flags = MessageFlags.FrequencyLow;
    id = 4294902030;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    InventoryData: {
        ItemID: UUID;
    }[];

    getSize(): number
    {
        return ((16) * this.InventoryData.length) + 33;
    }

}
// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class GroupAccountSummaryReplyPacket implements Packet
{
    name = 'GroupAccountSummaryReply';
    flags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = 4294902114;

    AgentData: {
        AgentID: UUID;
        GroupID: UUID;
    };
    MoneyData: {
        RequestID: UUID;
        IntervalDays: number;
        CurrentInterval: number;
        StartDate: string;
        Balance: number;
        TotalCredits: number;
        TotalDebits: number;
        ObjectTaxCurrent: number;
        LightTaxCurrent: number;
        LandTaxCurrent: number;
        GroupTaxCurrent: number;
        ParcelDirFeeCurrent: number;
        ObjectTaxEstimate: number;
        LightTaxEstimate: number;
        LandTaxEstimate: number;
        GroupTaxEstimate: number;
        ParcelDirFeeEstimate: number;
        NonExemptMembers: number;
        LastTaxDate: string;
        TaxDate: string;
    };

    getSize(): number
    {
        return (this.MoneyData['StartDate'].length + 1 + this.MoneyData['LastTaxDate'].length + 1 + this.MoneyData['TaxDate'].length + 1) + 112;
    }

}
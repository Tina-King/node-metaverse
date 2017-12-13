/// <reference types="node" />
import { UUID } from '../UUID';
import { Packet } from '../Packet';
export declare class RegionPresenceRequestByRegionIDPacket implements Packet {
    name: string;
    flags: number;
    id: number;
    RegionData: {
        RegionID: UUID;
    }[];
    getSize(): number;
    writeToBuffer(buf: Buffer, pos: number): number;
    readFromBuffer(buf: Buffer, pos: number): number;
}
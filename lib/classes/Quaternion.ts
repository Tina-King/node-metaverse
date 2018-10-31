import {quat} from '../tsm/quat';
import {XMLElementOrXMLNode} from 'xmlbuilder';

export class Quaternion extends quat
{
    static getIdentity(): Quaternion
    {
        const q = new Quaternion();
        q.setIdentity();
        return q;
    }

    static getXML(doc: XMLElementOrXMLNode, v?: Quaternion)
    {
        if (v === undefined)
        {
            v = Quaternion.getIdentity();
        }
        doc.ele('X', v.x);
        doc.ele('Y', v.y);
        doc.ele('Z', v.z);
        doc.ele('W', v.w);
    }

    constructor(buf?: Buffer | number[] | Quaternion, pos?: number)
    {
        if (buf instanceof Quaternion)
        {
            super();
            this.x = buf.x;
            this.y = buf.y;
            this.z = buf.z;
            this.w = buf.w;
        }
        else
        {
            if (buf !== undefined && pos !== undefined && buf instanceof Buffer)
            {
                const x = buf.readFloatLE(pos);
                const y = buf.readFloatLE(pos + 4);
                const z = buf.readFloatLE(pos + 8);
                const xyzsum = 1.0 - x * x - y * y - z * z;
                const w = (xyzsum > 0.0) ? Math.sqrt(xyzsum) : 0;
                super([x, y, z, w]);
            }
            else if (buf !== undefined && Array.isArray(buf))
            {
                super(buf);
            }
            else
            {
                super();
            }
        }
    }
    writeToBuffer(buf: Buffer, pos: number)
    {
        const q: quat = this.normalize();
        buf.writeFloatLE(q.x, pos);
        buf.writeFloatLE(q.y, pos + 4);
        buf.writeFloatLE(q.z, pos + 8);
    }
    toString(): string
    {
        return '<' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + '>';
    }
}

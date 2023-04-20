/**
 * Internet store application
 * The Internet store API description
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class UpdateItemDto {
    'action': UpdateItemDtoActionEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "UpdateItemDtoActionEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateItemDto.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UpdateItemDtoActionEnum = "INC" | "DEC" ;


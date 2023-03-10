import { TemplateRef } from '@angular/core';
import { WheelItemBase } from '../../core/shared/wheel/wheel-item';
/** @hidden */
import * as ɵngcc0 from '@angular/core';
export declare class MbscWheelItem extends WheelItemBase {
    active: boolean;
    angle3d: number;
    data: any;
    disabled: boolean;
    height: number;
    is3d: boolean;
    isGroup: boolean;
    index: number;
    itemTemplate: TemplateRef<any>;
    multiple: boolean;
    offset: number;
    rows: number;
    scroll3d: boolean;
    selected: boolean;
    text: string;
    onClick: (args: any) => void;
    checkmark: boolean;
    protected _render(s: any, state: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscWheelItem, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscWheelItem, "mbsc-wheel-item", never, { "active": "active"; "angle3d": "angle3d"; "data": "data"; "disabled": "disabled"; "height": "height"; "is3d": "is3d"; "isGroup": "isGroup"; "index": "index"; "itemTemplate": "itemTemplate"; "multiple": "multiple"; "offset": "offset"; "rows": "rows"; "scroll3d": "scroll3d"; "selected": "selected"; "text": "text"; "onClick": "onClick"; "checkmark": "checkmark"; }, {}, never, never, false, never>;
}

//# sourceMappingURL=wheel-item.d.ts.map
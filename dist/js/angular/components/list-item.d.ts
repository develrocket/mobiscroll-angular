import { EventEmitter } from '@angular/core';
import { ListItemBase } from '../../core/components/list/list-item';
import * as ɵngcc0 from '@angular/core';
export declare class MbscListItem extends ListItemBase {
    actionable: boolean;
    cssClass: string;
    data: any;
    drag: boolean;
    onHoverIn: EventEmitter<any>;
    onHoverOut: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDragModeOff: EventEmitter<any>;
    onDragModeOn: EventEmitter<any>;
    onDragMove: EventEmitter<any>;
    onDragStart: EventEmitter<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscListItem, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscListItem, "mbsc-list-item", never, { "actionable": "actionable"; "cssClass": "cssClass"; "data": "data"; "drag": "drag"; }, { "onHoverIn": "onHoverIn"; "onHoverOut": "onHoverOut"; "onDragEnd": "onDragEnd"; "onDragModeOff": "onDragModeOff"; "onDragModeOn": "onDragModeOn"; "onDragMove": "onDragMove"; "onDragStart": "onDragStart"; }, never, ["*"], false, never>;
}

//# sourceMappingURL=list-item.d.ts.map
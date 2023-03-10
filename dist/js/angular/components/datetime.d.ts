import { EventEmitter } from '@angular/core';
import { DatetimeBase } from '../../core/components/datetime/datetime';
import { MbscScroller } from './scroller';
import * as ɵngcc0 from '@angular/core';
export declare class MbscDateBase extends DatetimeBase {
    vScroller: MbscScroller;
    onCancel: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscDateBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<MbscDateBase, "[mbsc-dtb-b]", never, {}, { "onCancel": "onCancel"; "onChange": "onChange"; "onClose": "onClose"; "onOpen": "onOpen"; }, never, never, false, never>;
}
export declare class MbscDate extends MbscDateBase {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscDate, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscDate, "mbsc-date", never, {}, {}, never, never, false, never>;
}
export declare class MbscDatetime extends MbscDateBase {
    protected _preset: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscDatetime, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscDatetime, "mbsc-datetime", never, {}, {}, never, never, false, never>;
}
export declare class MbscTime extends MbscDateBase {
    protected _preset: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscTime, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscTime, "mbsc-time", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=datetime.d.ts.map
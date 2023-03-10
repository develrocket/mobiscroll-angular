import { TemplateRef } from '@angular/core';
import { MbscPopupDisplay } from '../../core/components/popup/popup';
import { WheelBase } from '../../core/shared/wheel/wheel';
/** @hidden */
import * as ɵngcc0 from '@angular/core';
export declare class MbscWheel extends WheelBase {
    activeIndex: number;
    disabled: any[];
    display: MbscPopupDisplay;
    itemHeight: number;
    itemTemplate: TemplateRef<any>;
    maxIndex: number;
    maxWheelWidth: number | number[];
    minIndex: number;
    minWheelWidth: number | number[];
    multiple: boolean;
    rows: number;
    scroll3d: boolean;
    selectedIndex: number;
    selectedValues: any[];
    selectOnScroll: boolean;
    touchUi: boolean;
    wheel: any;
    wheelWidth: number | number[];
    onGestureEnd: (args: any) => void;
    onGestureStart: (args: any) => void;
    onIndexChange: (args: any) => void;
    onActiveChange: (args: any) => void;
    onSet: () => void;
    _getItemKey(index: number, item: {
        key: number;
    }): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscWheel, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscWheel, "mbsc-wheel", never, { "activeIndex": "activeIndex"; "disabled": "disabled"; "display": "display"; "itemHeight": "itemHeight"; "itemTemplate": "itemTemplate"; "maxIndex": "maxIndex"; "maxWheelWidth": "maxWheelWidth"; "minIndex": "minIndex"; "minWheelWidth": "minWheelWidth"; "multiple": "multiple"; "rows": "rows"; "scroll3d": "scroll3d"; "selectedIndex": "selectedIndex"; "selectedValues": "selectedValues"; "selectOnScroll": "selectOnScroll"; "touchUi": "touchUi"; "wheel": "wheel"; "wheelWidth": "wheelWidth"; "onGestureEnd": "onGestureEnd"; "onGestureStart": "onGestureStart"; "onIndexChange": "onIndexChange"; "onActiveChange": "onActiveChange"; "onSet": "onSet"; }, {}, never, never, false, never>;
}

//# sourceMappingURL=wheel.d.ts.map
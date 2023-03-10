import { ElementRef } from '@angular/core';
import { ScrollviewBase } from '../../core/shared/scroll-view/scroll-view';
/** @hidden */
import * as ɵngcc0 from '@angular/core';
export declare class MbscScrollviewBase extends ScrollviewBase {
    vEl: ElementRef;
    vEl3d: ElementRef;
    vInnerEl: ElementRef;
    vBarCont: ElementRef;
    vBar: ElementRef;
    axis: 'X' | 'Y';
    batchSize: number;
    batchSize3d: number;
    changeOnEnd: boolean;
    easing: string;
    innerClass: string;
    innerStyles: any;
    items: any[];
    itemSize: number;
    itemNr: number;
    selectedIndex: number;
    margin: boolean;
    maxIndex: number;
    minIndex: number;
    mouseSwipe: boolean;
    mousewheel: boolean;
    offset: number;
    prevAnim: boolean;
    scroll3d: boolean;
    scrollBar: boolean;
    snap: boolean;
    spaceAround: boolean;
    swipe: boolean;
    time: number;
    touchUi: boolean;
    visibleSize: number;
    onAnimationEnd: (args: any) => void;
    onGestureStart: (args: any) => void;
    onGestureEnd: (args: any) => void;
    onIndexChange: (args: any) => void;
    onStart: (args: any) => void;
    protected _mounted(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscScrollviewBase, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscScrollviewBase, "mbsc-scrollview-base", never, { "axis": "axis"; "batchSize": "batchSize"; "batchSize3d": "batchSize3d"; "changeOnEnd": "changeOnEnd"; "easing": "easing"; "innerClass": "innerClass"; "innerStyles": "innerStyles"; "items": "items"; "itemSize": "itemSize"; "itemNr": "itemNr"; "selectedIndex": "selectedIndex"; "margin": "margin"; "maxIndex": "maxIndex"; "minIndex": "minIndex"; "mouseSwipe": "mouseSwipe"; "mousewheel": "mousewheel"; "offset": "offset"; "prevAnim": "prevAnim"; "scroll3d": "scroll3d"; "scrollBar": "scrollBar"; "snap": "snap"; "spaceAround": "spaceAround"; "swipe": "swipe"; "time": "time"; "touchUi": "touchUi"; "visibleSize": "visibleSize"; "onAnimationEnd": "onAnimationEnd"; "onGestureStart": "onGestureStart"; "onGestureEnd": "onGestureEnd"; "onIndexChange": "onIndexChange"; "onStart": "onStart"; }, {}, never, ["*", "[content-3d]"], false, never>;
}

//# sourceMappingURL=scroll-view.d.ts.map
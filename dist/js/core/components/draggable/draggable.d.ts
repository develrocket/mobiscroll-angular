import { BaseComponent, IBaseProps } from '../../base';
import { MbscCalendarEvent } from '../eventcalendar/eventcalendar';
import * as ɵngcc0 from '@angular/core';
export interface MbscDraggableOptions extends IBaseProps {
    dragData?: MbscCalendarEvent | string;
    element?: HTMLElement | null;
}
export interface MbscDraggableState {
    hasHover?: boolean;
    hasFocus?: boolean;
}
export declare function subscribeExternalDrag(handler: (value: any) => void): number;
export declare function unsubscribeExternalDrag(key: number): void;
/** @hidden */
export declare class DraggableBase extends BaseComponent<MbscDraggableOptions, MbscDraggableState> {
    private _dragData;
    private _unlisten?;
    protected _render(s: MbscDraggableOptions): void;
    protected _updated(): void;
    protected _destroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DraggableBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<DraggableBase, "[mbsc-drag]", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=draggable.d.ts.map
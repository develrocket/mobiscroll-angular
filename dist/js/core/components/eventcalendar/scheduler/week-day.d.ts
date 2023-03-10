import { BaseComponent, IBaseProps } from '../../../base';
import { MbscCalendarDayData } from '../../../shared/calendar-view/calendar-day';
import { MbscCalendarEvent } from '../eventcalendar';
import * as ɵngcc0 from '@angular/core';
export interface MbscWeekDayOptions extends IBaseProps {
    day: number;
    dayNames: string[];
    events: MbscCalendarEvent[];
    isToday: boolean;
    label: string;
    largeNames: boolean;
    resource?: string | number;
    rtl: boolean;
    selectable: boolean;
    selected: boolean;
    theme: string;
    timestamp: number;
    onClick: any;
    dayTemplate?(args: MbscCalendarDayData): any;
    dayContentTemplate?(args: MbscCalendarDayData): any;
    renderDay?(args: MbscCalendarDayData): any;
    renderDayContent?(args: MbscCalendarDayData): any;
}
export interface MbscWeekDayState {
    hasHover: boolean;
}
/** @hidden */
export declare class WeekDayBase extends BaseComponent<MbscWeekDayOptions, MbscWeekDayState> {
    _cssClass: string;
    _data: MbscCalendarDayData;
    _day: number;
    private _unlisten;
    _onClick: () => void;
    protected _render(s: MbscWeekDayOptions, state: MbscWeekDayState): void;
    protected _mounted(): void;
    protected _destroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<WeekDayBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<WeekDayBase, "[mbsc-wd-b]", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=week-day.d.ts.map
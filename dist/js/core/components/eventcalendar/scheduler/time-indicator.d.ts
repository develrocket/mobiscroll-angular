import { BaseComponent } from '../../../base';
import { ITimezonePlugin } from '../../../util/datetime';
import { IScheduleTimezone } from '../eventcalendar.types';
import * as ɵngcc0 from '@angular/core';
export interface MbscTimeIndicatorOptions {
    amText?: string;
    displayedTime: number;
    displayedDays: number;
    endDay: number;
    showDayIndicator?: boolean;
    orientation: 'x' | 'y';
    pmText?: string;
    rtl?: boolean;
    theme?: string;
    firstDay: Date;
    startDay: number;
    startTime: number;
    timeFormat?: string;
    displayTimezone?: string;
    timezonePlugin?: ITimezonePlugin;
    timezones?: IScheduleTimezone[];
}
/** @hidden */
export declare class TimeIndicatorBase extends BaseComponent<MbscTimeIndicatorOptions, any> {
    _cssClass: string;
    _dayPos: any;
    _pos: any;
    _time: string;
    _times: string[];
    private _timer;
    protected _mounted(): void;
    protected _destroy(): void;
    protected _render(s: MbscTimeIndicatorOptions): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TimeIndicatorBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<TimeIndicatorBase, "[mbsc-ti-b]", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=time-indicator.d.ts.map
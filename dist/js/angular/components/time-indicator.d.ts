import { IScheduleTimezone } from '../../core/components/eventcalendar/eventcalendar';
import { TimeIndicatorBase } from '../../core/components/eventcalendar/scheduler/time-indicator';
import { ITimezonePlugin } from '../../core/util/datetime';
import * as ɵngcc0 from '@angular/core';
export declare class MbscTimeIndicator extends TimeIndicatorBase {
    amText: string;
    displayedTime: number;
    displayedDays: number;
    displayTimezone: string;
    endDay: number;
    firstDay: Date;
    orientation: 'x' | 'y';
    pmText: string;
    rtl: boolean;
    showDayIndicator: boolean;
    startDay: number;
    startTime: number;
    theme: string;
    timeFormat: string;
    timezones: IScheduleTimezone[];
    timezonePlugin: ITimezonePlugin;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscTimeIndicator, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscTimeIndicator, "mbsc-time-indicator", never, { "amText": "amText"; "displayedTime": "displayedTime"; "displayedDays": "displayedDays"; "displayTimezone": "displayTimezone"; "endDay": "endDay"; "firstDay": "firstDay"; "orientation": "orientation"; "pmText": "pmText"; "rtl": "rtl"; "showDayIndicator": "showDayIndicator"; "startDay": "startDay"; "startTime": "startTime"; "theme": "theme"; "timeFormat": "timeFormat"; "timezones": "timezones"; "timezonePlugin": "timezonePlugin"; }, {}, never, never, false, never>;
}

//# sourceMappingURL=time-indicator.d.ts.map
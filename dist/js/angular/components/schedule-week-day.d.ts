import { TemplateRef } from '@angular/core';
import { MbscCalendarEvent } from '../../core/components/eventcalendar/eventcalendar';
import { WeekDayBase } from '../../core/components/eventcalendar/scheduler/week-day';
import * as ɵngcc0 from '@angular/core';
export declare class MbscWeekDay extends WeekDayBase {
    day: string;
    dayNames: string[];
    dayTemplate: TemplateRef<any>;
    dayContentTemplate: TemplateRef<any>;
    events: MbscCalendarEvent[];
    isToday: boolean;
    label: string;
    largeNames: boolean;
    resource: number | string;
    rtl: boolean;
    selectable: boolean;
    selected: boolean;
    theme: string;
    timestamp: string;
    onClick: any;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscWeekDay, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscWeekDay, "mbsc-week-day", never, { "day": "day"; "dayNames": "dayNames"; "dayTemplate": "dayTemplate"; "dayContentTemplate": "dayContentTemplate"; "events": "events"; "isToday": "isToday"; "label": "label"; "largeNames": "largeNames"; "resource": "resource"; "rtl": "rtl"; "selectable": "selectable"; "selected": "selected"; "theme": "theme"; "timestamp": "timestamp"; "onClick": "onClick"; }, {}, never, never, false, never>;
}

//# sourceMappingURL=schedule-week-day.d.ts.map
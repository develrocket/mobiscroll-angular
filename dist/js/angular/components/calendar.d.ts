import { EventEmitter } from '@angular/core';
import { CalendarBase } from '../../core/components/calendar/calendar';
import { ICalendarViewHost } from '../../core/shared/calendar-view/calendar-view.types';
import { MbscInstanceService } from '../shared/instance.service';
/**
 * The Calendar component.
 *
 * Usage:
 *
 * ```
 * <mbsc-calendar></mbsc-calendar>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class MbscCalendar extends CalendarBase implements ICalendarViewHost {
    _hours: number[];
    vCal: any;
    onCancel: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    _instanceService: MbscInstanceService;
    protected _ctor(): void;
    protected _mounted(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscCalendar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscCalendar, "mbsc-calendar", never, {}, { "onCancel": "onCancel"; "onChange": "onChange"; "onClose": "onClose"; "onOpen": "onOpen"; }, never, never, false, never>;
}

//# sourceMappingURL=calendar.d.ts.map
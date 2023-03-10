import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CalendarViewBase } from '../../core/shared/calendar-view/calendar-view';
import { ICalendarViewHost } from '../../core/shared/calendar-view/calendar-view.types';
import { MbscInstanceService } from './instance.service';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarSubscriber implements OnDestroy {
    protected changeDetector: ChangeDetectorRef;
    _hostInst: ICalendarViewHost;
    _cssClass: string;
    readonly cssClass: string;
    inst: CalendarViewBase;
    instanceService: MbscInstanceService;
    calendar: ICalendarViewHost;
    private changeHandler;
    private readyHandler;
    constructor(instanceService: MbscInstanceService, changeDetector: ChangeDetectorRef);
    ngOnDestroy(): void;
    protected setupServices(serv: MbscInstanceService): void;
    protected cleanupService(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CalendarSubscriber, [{ optional: true; }, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<CalendarSubscriber, "mbsc-cal-s", never, { "_cssClass": "class"; "calendar": "calendar"; }, {}, never, never, false, never>;
}
export declare class MbscCalendarPrev extends CalendarSubscriber {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscCalendarPrev, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscCalendarPrev, "mbsc-calendar-prev", never, {}, {}, never, never, false, never>;
}
export declare class MbscCalendarNext extends CalendarSubscriber {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscCalendarNext, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscCalendarNext, "mbsc-calendar-next", never, {}, {}, never, never, false, never>;
}
export declare class MbscCalendarToday extends CalendarSubscriber {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscCalendarToday, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscCalendarToday, "mbsc-calendar-today", never, {}, {}, never, never, false, never>;
}
export declare class MbscCalendarNav extends CalendarSubscriber {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscCalendarNav, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscCalendarNav, "mbsc-calendar-nav", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=calendar-header.d.ts.map
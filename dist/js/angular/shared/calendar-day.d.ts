import { TemplateRef } from '@angular/core';
import { CalendarDayBase } from '../../core/shared/calendar-view/calendar-day';
import { ICalendarProcessedLabel, MbscCalendarEvent, MbscResource } from '../../core/shared/calendar-view/calendar-view.types';
import { ITimezonePlugin } from '../../core/util/datetime';
/** @hidden */
import * as ɵngcc0 from '@angular/core';
export declare class MbscCalendarDay extends CalendarDayBase {
    active: boolean;
    amText: string;
    clickToCreate: boolean | 'double' | 'single';
    colors: any;
    dataTimezone: string;
    date: number;
    day: string;
    dayTemplate: TemplateRef<any>;
    dayContentTemplate: TemplateRef<any>;
    disabled: boolean;
    display: boolean;
    displayTimezone: string;
    dragToCreate: boolean;
    dragToResize: boolean;
    dragToMove: boolean;
    eventText: string;
    eventsText: string;
    exclusiveEndDates: boolean;
    firstDay: number;
    hasMarks: boolean;
    hoverEnd: number;
    hoverStart: number;
    isActiveMonth: boolean;
    isPicker: boolean;
    labels: any;
    labelTemplate: TemplateRef<any>;
    labelContentTemplate: TemplateRef<any>;
    dragData?: {
        [key: number]: any[];
    };
    marks: any;
    month: string;
    monthShort: string;
    outer: boolean;
    pmText: string;
    rangeEnd: number;
    rangeStart: number;
    resourcesMap?: {
        [key: number]: MbscResource;
    };
    selected: boolean;
    selectedEventsMap?: {
        [key: number]: MbscCalendarEvent;
    };
    showEventTooltip: boolean;
    text: string;
    timeFormat: string;
    timezonePlugin: ITimezonePlugin;
    todayText: string;
    type: 'day' | 'month' | 'year';
    year: number;
    onDayClick: (args: any) => void;
    onDayDoubleClick: (args: any) => void;
    onDayRightClick: (args: any) => void;
    onHoverIn: (args: any) => void;
    onHoverOut: (args: any) => void;
    onLabelClick: (args: any) => void;
    onLabelDoubleClick: (args: any) => void;
    onLabelRightClick: (args: any) => void;
    onLabelHoverIn: (args: any) => void;
    onLabelHoverOut: (args: any) => void;
    onLabelDelete: (args: any) => void;
    onLabelUpdateStart: (args: any) => void;
    onLabelUpdateMove: (args: any) => void;
    onLabelUpdateEnd: (args: any) => void;
    onLabelUpdateModeOn: (args: any) => void;
    onLabelUpdateModeOff: (args: any) => void;
    _getLabelKey(index: number, label: ICalendarProcessedLabel): string | number;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscCalendarDay, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscCalendarDay, "mbsc-calendar-day", never, { "active": "active"; "amText": "amText"; "clickToCreate": "clickToCreate"; "colors": "colors"; "dataTimezone": "dataTimezone"; "date": "date"; "day": "day"; "dayTemplate": "dayTemplate"; "dayContentTemplate": "dayContentTemplate"; "disabled": "disabled"; "display": "display"; "displayTimezone": "displayTimezone"; "dragToCreate": "dragToCreate"; "dragToResize": "dragToResize"; "dragToMove": "dragToMove"; "eventText": "eventText"; "eventsText": "eventsText"; "exclusiveEndDates": "exclusiveEndDates"; "firstDay": "firstDay"; "hasMarks": "hasMarks"; "hoverEnd": "hoverEnd"; "hoverStart": "hoverStart"; "isActiveMonth": "isActiveMonth"; "isPicker": "isPicker"; "labels": "labels"; "labelTemplate": "labelTemplate"; "labelContentTemplate": "labelContentTemplate"; "dragData": "dragData"; "marks": "marks"; "month": "month"; "monthShort": "monthShort"; "outer": "outer"; "pmText": "pmText"; "rangeEnd": "rangeEnd"; "rangeStart": "rangeStart"; "resourcesMap": "resourcesMap"; "selected": "selected"; "selectedEventsMap": "selectedEventsMap"; "showEventTooltip": "showEventTooltip"; "text": "text"; "timeFormat": "timeFormat"; "timezonePlugin": "timezonePlugin"; "todayText": "todayText"; "type": "type"; "year": "year"; "onDayClick": "onDayClick"; "onDayDoubleClick": "onDayDoubleClick"; "onDayRightClick": "onDayRightClick"; "onHoverIn": "onHoverIn"; "onHoverOut": "onHoverOut"; "onLabelClick": "onLabelClick"; "onLabelDoubleClick": "onLabelDoubleClick"; "onLabelRightClick": "onLabelRightClick"; "onLabelHoverIn": "onLabelHoverIn"; "onLabelHoverOut": "onLabelHoverOut"; "onLabelDelete": "onLabelDelete"; "onLabelUpdateStart": "onLabelUpdateStart"; "onLabelUpdateMove": "onLabelUpdateMove"; "onLabelUpdateEnd": "onLabelUpdateEnd"; "onLabelUpdateModeOn": "onLabelUpdateModeOn"; "onLabelUpdateModeOff": "onLabelUpdateModeOff"; }, {}, never, never, false, never>;
}

//# sourceMappingURL=calendar-day.d.ts.map
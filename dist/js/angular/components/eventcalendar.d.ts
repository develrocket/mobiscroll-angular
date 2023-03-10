import { ElementRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { EventcalendarBase, MbscCalendarEvent, MbscCalendarEventData, MbscCalendarLabel, MbscCellClickEvent, MbscCellHoverEvent, MbscEventcalendarOptions, MbscEventcalendarState, MbscEventcalendarView, MbscEventClickEvent, MbscEventConnection, MbscEventCreatedEvent, MbscEventCreateEvent, MbscEventCreateFailedEvent, MbscEventDeletedEvent, MbscEventDeleteEvent, MbscEventDragEvent, MbscEventUpdatedEvent, MbscEventUpdateEvent, MbscEventUpdateFailedEvent, MbscLabelClickEvent, MbscNewEventData, MbscPageChangeEvent, MbscPageLoadedEvent, MbscPageLoadingEvent, MbscResource, MbscSelectedDateChangeEvent, MbscSelectedEventsChangeEvent, MbscSlot } from '../../core/components/eventcalendar/eventcalendar';
import { ICalendarViewHost, MbscCalendarColor, MbscCalendarMarked } from '../../core/shared/calendar-view/calendar-view.types';
import { DateType, ITimezonePlugin } from '../../core/util/datetime';
import { MbscCalendarView } from '../shared/calendar-view';
import { MbscInstanceService } from '../shared/instance.service';
import { MbscListItem } from './list-item';
import * as ɵngcc0 from '@angular/core';
export declare class MbscEventListService {
    days: any;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscEventListService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<MbscEventListService>;
}
export declare class MbscEventListDayDirective implements OnInit {
    private el;
    private els;
    timestamp: number;
    constructor(el: ElementRef, els: MbscEventListService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscEventListDayDirective, [null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<MbscEventListDayDirective, "[mbsc-event-list-day]", never, { "timestamp": "timestamp"; }, {}, never, never, false, never>;
}
export declare class MbscEventListItem extends MbscListItem {
    eventData: MbscCalendarEventData;
    selected: boolean;
    showColor: boolean;
    template: TemplateRef<any>;
    eventContentTemplate: TemplateRef<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscEventListItem, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscEventListItem, "mbsc-event-list-item", never, { "eventData": "eventData"; "selected": "selected"; "showColor": "showColor"; "template": "template"; "eventContentTemplate": "eventContentTemplate"; }, {}, never, never, false, never>;
}
/**
 * The Eventcalendar component.
 *
 * Usage:
 *
 * ```
 * <mbsc-eventcalendar></mbsc-eventcalendar>
 * ```
 */
export declare class MbscEventcalendar extends EventcalendarBase implements ICalendarViewHost {
    _hours: number[];
    _els: MbscEventListService;
    _instanceService: MbscInstanceService;
    vList: ElementRef;
    _calendarView: MbscCalendarView;
    actionableEvents: boolean;
    agendaTemplate: TemplateRef<any>;
    calendarSystem: any;
    clickToCreate: boolean | 'double' | 'single';
    colors: MbscCalendarColor[];
    connections: MbscEventConnection[];
    data: MbscCalendarEvent[];
    dayTemplate: TemplateRef<any>;
    dayContentTemplate: TemplateRef<any>;
    dataTimezone: string;
    displayTimezone: string;
    dragTimeStep: number;
    dragToCreate: boolean;
    dragToResize: boolean;
    dragToMove: boolean;
    eventContentTemplate: TemplateRef<any>;
    eventDelete: boolean;
    eventOrder: (event1: MbscCalendarEvent, event2: MbscCalendarEvent) => number;
    eventTemplate: TemplateRef<any>;
    exclusiveEndDates: boolean;
    extendDefaultEvent: (args: MbscNewEventData) => MbscCalendarEvent;
    externalDrop: boolean;
    groupBy: 'date' | 'resource';
    headerTemplate: TemplateRef<any>;
    height: number | string;
    invalid: any[];
    invalidateEvent: 'start-end' | 'strict';
    labelContentTemplate: TemplateRef<any>;
    labels: MbscCalendarLabel[];
    labelTemplate: TemplateRef<any>;
    marked: MbscCalendarMarked[];
    max: DateType;
    min: DateType;
    mousewheel: boolean;
    refDate: DateType;
    resources: MbscResource[] | null | undefined;
    resourceHeaderTemplate: TemplateRef<any>;
    resourceTemplate: TemplateRef<any>;
    slots: MbscSlot[] | null | undefined;
    slotTemplate: TemplateRef<any>;
    scheduleEventContentTemplate: TemplateRef<any>;
    scheduleEventTemplate: TemplateRef<any>;
    selectedDate: DateType;
    selectedDateChange: EventEmitter<DateType>;
    selectedEvents: MbscCalendarEvent[];
    selectedEventsChange: EventEmitter<MbscCalendarEvent[]>;
    selectMultipleEvents: boolean;
    showControls: boolean;
    showEventTooltip: boolean;
    valid: any[];
    view: MbscEventcalendarView;
    width: number | string;
    allDayText: string;
    amText: string;
    dateFormat: string;
    dateFormatLong: string;
    dayNames: string[];
    dayNamesMin: string[];
    dayNamesShort: string[];
    eventsText: string;
    eventText: string;
    firstDay: number;
    monthNames: string[];
    monthNamesShort: string[];
    moreEventsPluralText: string;
    moreEventsText: string;
    newEventText: string;
    nextPageText: string;
    noEventsText: string;
    pmText: string;
    prevPageText: string;
    timeFormat: string;
    timezonePlugin: ITimezonePlugin;
    onCellClick: EventEmitter<MbscCellClickEvent>;
    onCellDoubleClick: EventEmitter<MbscCellClickEvent>;
    onCellRightClick: EventEmitter<MbscCellClickEvent>;
    onCellHoverIn: EventEmitter<MbscCellHoverEvent>;
    onCellHoverOut: EventEmitter<MbscCellHoverEvent>;
    onEventClick: EventEmitter<MbscEventClickEvent>;
    onEventDoubleClick: EventEmitter<MbscEventClickEvent>;
    onEventRightClick: EventEmitter<MbscEventClickEvent>;
    onEventHoverIn: EventEmitter<MbscEventClickEvent>;
    onEventHoverOut: EventEmitter<MbscEventClickEvent>;
    onEventCreate: EventEmitter<MbscEventCreateEvent>;
    onEventCreated: EventEmitter<MbscEventCreatedEvent>;
    onEventDelete: EventEmitter<MbscEventDeleteEvent>;
    onEventDeleted: EventEmitter<MbscEventDeletedEvent>;
    onEventDragEnd: EventEmitter<MbscEventDragEvent>;
    onEventDragStart: EventEmitter<MbscEventDragEvent>;
    onEventUpdate: EventEmitter<MbscEventUpdateEvent>;
    onEventUpdated: EventEmitter<MbscEventUpdatedEvent>;
    onEventCreateFailed: EventEmitter<MbscEventCreateFailedEvent>;
    onEventUpdateFailed: EventEmitter<MbscEventUpdateFailedEvent>;
    onLabelClick: EventEmitter<MbscLabelClickEvent>;
    onSelectedEventsChange: EventEmitter<MbscSelectedEventsChangeEvent>;
    onPageChange: EventEmitter<MbscPageChangeEvent>;
    onPageLoaded: EventEmitter<MbscPageLoadedEvent>;
    onPageLoading: EventEmitter<MbscPageLoadingEvent>;
    onSelectedDateChange: EventEmitter<MbscSelectedDateChangeEvent>;
    _getEventArgs(eventList: any, $event: any, event: any): {
        date: any;
        domEvent: any;
        event: any;
        source: string;
    };
    _getPopoverEventArgs(state: any, $event: any, event: any): {
        date: any;
        domEvent: any;
        event: any;
        source: string;
    };
    protected _ctor(): void;
    protected _mounted(): void;
    protected _render(s: MbscEventcalendarOptions, state: MbscEventcalendarState): void;
    protected _updated(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscEventcalendar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscEventcalendar, "mbsc-eventcalendar", never, { "actionableEvents": "actionableEvents"; "agendaTemplate": "agendaTemplate"; "calendarSystem": "calendarSystem"; "clickToCreate": "clickToCreate"; "colors": "colors"; "connections": "connections"; "data": "data"; "dayTemplate": "dayTemplate"; "dayContentTemplate": "dayContentTemplate"; "dataTimezone": "dataTimezone"; "displayTimezone": "displayTimezone"; "dragTimeStep": "dragTimeStep"; "dragToCreate": "dragToCreate"; "dragToResize": "dragToResize"; "dragToMove": "dragToMove"; "eventContentTemplate": "eventContentTemplate"; "eventDelete": "eventDelete"; "eventOrder": "eventOrder"; "eventTemplate": "eventTemplate"; "exclusiveEndDates": "exclusiveEndDates"; "extendDefaultEvent": "extendDefaultEvent"; "externalDrop": "externalDrop"; "groupBy": "groupBy"; "headerTemplate": "headerTemplate"; "height": "height"; "invalid": "invalid"; "invalidateEvent": "invalidateEvent"; "labelContentTemplate": "labelContentTemplate"; "labels": "labels"; "labelTemplate": "labelTemplate"; "marked": "marked"; "max": "max"; "min": "min"; "mousewheel": "mousewheel"; "refDate": "refDate"; "resources": "resources"; "resourceHeaderTemplate": "resourceHeaderTemplate"; "resourceTemplate": "resourceTemplate"; "slots": "slots"; "slotTemplate": "slotTemplate"; "scheduleEventContentTemplate": "scheduleEventContentTemplate"; "scheduleEventTemplate": "scheduleEventTemplate"; "selectedDate": "selectedDate"; "selectedEvents": "selectedEvents"; "selectMultipleEvents": "selectMultipleEvents"; "showControls": "showControls"; "showEventTooltip": "showEventTooltip"; "valid": "valid"; "view": "view"; "width": "width"; "allDayText": "allDayText"; "amText": "amText"; "dateFormat": "dateFormat"; "dateFormatLong": "dateFormatLong"; "dayNames": "dayNames"; "dayNamesMin": "dayNamesMin"; "dayNamesShort": "dayNamesShort"; "eventsText": "eventsText"; "eventText": "eventText"; "firstDay": "firstDay"; "monthNames": "monthNames"; "monthNamesShort": "monthNamesShort"; "moreEventsPluralText": "moreEventsPluralText"; "moreEventsText": "moreEventsText"; "newEventText": "newEventText"; "nextPageText": "nextPageText"; "noEventsText": "noEventsText"; "pmText": "pmText"; "prevPageText": "prevPageText"; "timeFormat": "timeFormat"; "timezonePlugin": "timezonePlugin"; }, { "selectedDateChange": "selectedDateChange"; "selectedEventsChange": "selectedEventsChange"; "onCellClick": "onCellClick"; "onCellDoubleClick": "onCellDoubleClick"; "onCellRightClick": "onCellRightClick"; "onCellHoverIn": "onCellHoverIn"; "onCellHoverOut": "onCellHoverOut"; "onEventClick": "onEventClick"; "onEventDoubleClick": "onEventDoubleClick"; "onEventRightClick": "onEventRightClick"; "onEventHoverIn": "onEventHoverIn"; "onEventHoverOut": "onEventHoverOut"; "onEventCreate": "onEventCreate"; "onEventCreated": "onEventCreated"; "onEventDelete": "onEventDelete"; "onEventDeleted": "onEventDeleted"; "onEventDragEnd": "onEventDragEnd"; "onEventDragStart": "onEventDragStart"; "onEventUpdate": "onEventUpdate"; "onEventUpdated": "onEventUpdated"; "onEventCreateFailed": "onEventCreateFailed"; "onEventUpdateFailed": "onEventUpdateFailed"; "onLabelClick": "onLabelClick"; "onSelectedEventsChange": "onSelectedEventsChange"; "onPageChange": "onPageChange"; "onPageLoaded": "onPageLoaded"; "onPageLoading": "onPageLoading"; "onSelectedDateChange": "onSelectedDateChange"; }, never, never, false, never>;
}

//# sourceMappingURL=eventcalendar.d.ts.map
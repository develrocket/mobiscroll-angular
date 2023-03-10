import { EventEmitter, TemplateRef } from '@angular/core';
import { ScheduleEventBase } from '../../core/components/eventcalendar/scheduler/schedule-event';
import { ITimezonePlugin } from '../../core/util/datetime';
import * as ɵngcc0 from '@angular/core';
export declare class MbscScheduleEvent extends ScheduleEventBase {
    contentTemplate?: TemplateRef<any>;
    displayTimezone: string;
    drag: boolean;
    event: any;
    endDay: number;
    eventHeight: number;
    exclusiveEndDates: boolean;
    gridEndTime: number;
    gridStartTime: number;
    hidden: boolean;
    inactive: boolean;
    isDrag: boolean;
    isListing: boolean;
    isTimeline: boolean;
    lastDay: Date;
    resize: boolean;
    resource: number | string;
    rtl: boolean;
    selected: boolean;
    singleDay: boolean;
    slot: number | string;
    startDay: number;
    template?: TemplateRef<any>;
    theme: string;
    timezonePlugin: ITimezonePlugin;
    onClick: EventEmitter<any>;
    onDoubleClick: EventEmitter<any>;
    onRightClick: EventEmitter<any>;
    onHoverIn: EventEmitter<any>;
    onHoverOut: EventEmitter<any>;
    onDelete: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDragModeOff: EventEmitter<any>;
    onDragModeOn: EventEmitter<any>;
    onDragMove: EventEmitter<any>;
    onDragStart: EventEmitter<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscScheduleEvent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscScheduleEvent, "mbsc-schedule-event", never, { "contentTemplate": "contentTemplate"; "displayTimezone": "displayTimezone"; "drag": "drag"; "event": "event"; "endDay": "endDay"; "eventHeight": "eventHeight"; "exclusiveEndDates": "exclusiveEndDates"; "gridEndTime": "gridEndTime"; "gridStartTime": "gridStartTime"; "hidden": "hidden"; "inactive": "inactive"; "isDrag": "isDrag"; "isListing": "isListing"; "isTimeline": "isTimeline"; "lastDay": "lastDay"; "resize": "resize"; "resource": "resource"; "rtl": "rtl"; "selected": "selected"; "singleDay": "singleDay"; "slot": "slot"; "startDay": "startDay"; "template": "template"; "theme": "theme"; "timezonePlugin": "timezonePlugin"; }, { "onClick": "onClick"; "onDoubleClick": "onDoubleClick"; "onRightClick": "onRightClick"; "onHoverIn": "onHoverIn"; "onHoverOut": "onHoverOut"; "onDelete": "onDelete"; "onDragEnd": "onDragEnd"; "onDragModeOff": "onDragModeOff"; "onDragModeOn": "onDragModeOn"; "onDragMove": "onDragMove"; "onDragStart": "onDragStart"; }, never, never, false, never>;
}

//# sourceMappingURL=schedule-event.d.ts.map
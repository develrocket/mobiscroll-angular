import { TemplateRef } from '@angular/core';
import { CalendarLabelBase } from '../../core/shared/calendar-view/calendar-label';
import { MbscResource } from '../../core/shared/calendar-view/calendar-view.types';
import { ITimezonePlugin } from '../../core/util/datetime';
/** @hidden */
import * as ɵngcc0 from '@angular/core';
export declare class MbscCalendarLabel extends CalendarLabelBase {
    amText: string;
    contentTemplate: TemplateRef<any>;
    count: string;
    dataTimezone: string;
    date: number;
    displayTimezone: string;
    drag: boolean;
    hidden: boolean;
    firstDay: number;
    event: any;
    editMode: boolean;
    exclusiveEndDates: boolean;
    inactive: boolean;
    isActiveMonth: boolean;
    label: string;
    resize: boolean;
    hideLabel: boolean;
    id: any;
    isPicker: boolean;
    isUpdate: boolean;
    lastDay: Date;
    more: string;
    pmText: string;
    resourcesMap?: {
        [key: number]: MbscResource;
    };
    selected: boolean;
    showEventTooltip: boolean;
    showText: boolean;
    template: TemplateRef<any>;
    timeFormat: string;
    timezonePlugin: ITimezonePlugin;
    onClick: (args: any) => void;
    onDoubleClick: (args: any) => void;
    onRightClick: (args: any) => void;
    onHoverIn: (args: any) => void;
    onHoverOut: (args: any) => void;
    onDelete: (args: any) => void;
    onDragStart: (args: any) => void;
    onDragMove: (args: any) => void;
    onDragEnd: (args: any) => void;
    onDragModeOn: (args: any) => void;
    onDragModeOff: (args: any) => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscCalendarLabel, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscCalendarLabel, "mbsc-calendar-label", never, { "amText": "amText"; "contentTemplate": "contentTemplate"; "count": "count"; "dataTimezone": "dataTimezone"; "date": "date"; "displayTimezone": "displayTimezone"; "drag": "drag"; "hidden": "hidden"; "firstDay": "firstDay"; "event": "event"; "editMode": "editMode"; "exclusiveEndDates": "exclusiveEndDates"; "inactive": "inactive"; "isActiveMonth": "isActiveMonth"; "label": "label"; "resize": "resize"; "hideLabel": "hideLabel"; "id": "id"; "isPicker": "isPicker"; "isUpdate": "isUpdate"; "lastDay": "lastDay"; "more": "more"; "pmText": "pmText"; "resourcesMap": "resourcesMap"; "selected": "selected"; "showEventTooltip": "showEventTooltip"; "showText": "showText"; "template": "template"; "timeFormat": "timeFormat"; "timezonePlugin": "timezonePlugin"; "onClick": "onClick"; "onDoubleClick": "onDoubleClick"; "onRightClick": "onRightClick"; "onHoverIn": "onHoverIn"; "onHoverOut": "onHoverOut"; "onDelete": "onDelete"; "onDragStart": "onDragStart"; "onDragMove": "onDragMove"; "onDragEnd": "onDragEnd"; "onDragModeOn": "onDragModeOn"; "onDragModeOff": "onDragModeOff"; }, {}, never, never, false, never>;
}

//# sourceMappingURL=calendar-label.d.ts.map
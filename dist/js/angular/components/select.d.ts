import { AfterViewInit, ElementRef, EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { MbscPopupButton, MbscPopupDisplay } from '../../core/components/popup/popup';
import { MbscScrollerWheel } from '../../core/components/scroller/scroller';
import { MbscSelectOnFilterEvent, SelectBase } from '../../core/components/select/select';
import { MbscInput } from './input';
import { MbscScroller } from './scroller';
import * as ɵngcc0 from '@angular/core';
export declare class MbscSelectOptionDirective {
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscSelectOptionDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<MbscSelectOptionDirective, "[mbsc-select-option]", never, {}, {}, never, never, false, never>;
}
export declare class MbscSelectOptionComponent implements AfterViewInit {
    private host;
    value: any;
    group: string;
    disabled: boolean;
    text: string;
    constructor(host: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscSelectOptionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscSelectOptionComponent, "mbsc-select-option", never, { "value": "value"; "group": "group"; "disabled": "disabled"; }, {}, never, ["*"], false, never>;
}
export declare class MbscSelectBase extends SelectBase {
    vInput: MbscInput;
    circular: boolean | boolean[];
    clearIcon: string;
    data: any[];
    defaultSelection: any;
    filter: boolean;
    formatValue: (values: any[]) => string;
    getValue: (values: any[]) => any;
    invalid: any[];
    itemHeight: number;
    itemTemplate: TemplateRef<any>;
    maxWheelWidth: number | number[];
    minWheelWidth: number | number[];
    parseValue: (valueStr: string) => any[];
    rows: number;
    rtl: boolean;
    selectMultiple: boolean;
    showGroupWheel: boolean;
    showOnClick: boolean;
    showOnFocus: boolean;
    valueEquality: (v1: any, v2: any) => boolean;
    wheels: MbscScrollerWheel[][];
    wheelWidth: number | number[];
    disabled: boolean;
    dropdown: boolean;
    endIcon: string;
    endIconSrc: string;
    endIconSvg: string;
    error: boolean;
    errorMessage: string;
    inputStyle: 'underline' | 'outline' | 'box';
    label: string;
    labelStyle: 'floating' | 'stacked' | 'inline';
    name: string;
    placeholder: string;
    startIcon: string;
    startIconSrc: string;
    startIconSvg: string;
    tagInput: boolean;
    anchor: any;
    animation: 'pop' | 'slide-up' | 'slide-down' | boolean;
    buttons: Array<MbscPopupButton | string>;
    cancelText: string;
    clearText: string;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    closeText: string;
    context: any;
    display: MbscPopupDisplay;
    focusOnClose: boolean;
    focusTrap: boolean;
    headerText: string;
    height: number | string;
    setText: string;
    showArrow: boolean;
    showInput: boolean;
    showOverlay: boolean;
    width: number | string;
    filterEmptyText: string;
    filterPlaceholderText: string;
    onCancel: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onFilter: EventEmitter<MbscSelectOnFilterEvent>;
    onOpen: EventEmitter<any>;
    onTempChange: EventEmitter<any>;
    protected _onValueChange(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscSelectBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<MbscSelectBase, "[mbsc-sel-b]", never, { "circular": "circular"; "clearIcon": "clearIcon"; "data": "data"; "defaultSelection": "defaultSelection"; "filter": "filter"; "formatValue": "formatValue"; "getValue": "getValue"; "invalid": "invalid"; "itemHeight": "itemHeight"; "itemTemplate": "itemTemplate"; "maxWheelWidth": "maxWheelWidth"; "minWheelWidth": "minWheelWidth"; "parseValue": "parseValue"; "rows": "rows"; "rtl": "rtl"; "selectMultiple": "selectMultiple"; "showGroupWheel": "showGroupWheel"; "showOnClick": "showOnClick"; "showOnFocus": "showOnFocus"; "valueEquality": "valueEquality"; "wheels": "wheels"; "wheelWidth": "wheelWidth"; "disabled": "disabled"; "dropdown": "dropdown"; "endIcon": "endIcon"; "endIconSrc": "endIconSrc"; "endIconSvg": "endIconSvg"; "error": "error"; "errorMessage": "errorMessage"; "inputStyle": "inputStyle"; "label": "label"; "labelStyle": "labelStyle"; "name": "name"; "placeholder": "placeholder"; "startIcon": "startIcon"; "startIconSrc": "startIconSrc"; "startIconSvg": "startIconSvg"; "tagInput": "tagInput"; "anchor": "anchor"; "animation": "animation"; "buttons": "buttons"; "cancelText": "cancelText"; "clearText": "clearText"; "closeOnEsc": "closeOnEsc"; "closeOnOverlayClick": "closeOnOverlayClick"; "closeText": "closeText"; "context": "context"; "display": "display"; "focusOnClose": "focusOnClose"; "focusTrap": "focusTrap"; "headerText": "headerText"; "height": "height"; "setText": "setText"; "showArrow": "showArrow"; "showInput": "showInput"; "showOverlay": "showOverlay"; "width": "width"; "filterEmptyText": "filterEmptyText"; "filterPlaceholderText": "filterPlaceholderText"; }, { "onCancel": "onCancel"; "onChange": "onChange"; "onClose": "onClose"; "onFilter": "onFilter"; "onOpen": "onOpen"; "onTempChange": "onTempChange"; }, never, never, false, never>;
}
export declare class MbscSelect extends MbscSelectBase {
    vScroller: MbscScroller;
    optionComponents: QueryList<MbscSelectOptionComponent>;
    updateOptionlist(): void;
    _mounted(): void;
    valueSet(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscSelect, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscSelect, "mbsc-select", never, {}, {}, ["optionComponents"], never, false, never>;
}
export declare class MbscSelectDirective extends MbscSelectBase {
    optionElements: QueryList<any>;
    options: any;
    inputElement: any;
    private _cfr;
    private _ref;
    protected _ctor(): void;
    protected _init(): void;
    protected _destroy(): void;
    protected _render(s: any): void;
    protected _mounted(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscSelectDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<MbscSelectDirective, "[mbsc-select]", ["mobiscroll"], { "options": "mbscOptions"; "inputElement": "inputElement"; }, {}, ["optionElements"], never, false, never>;
}

//# sourceMappingURL=select.d.ts.map
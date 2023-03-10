import { EventEmitter, TemplateRef } from '@angular/core';
import { MbscPopupButton, MbscPopupDisplay } from '../../core/components/popup/popup';
import { IWheelMoveArgs, MbscScrollerWheel, ScrollerBase } from '../../core/components/scroller/scroller';
import { MbscInput } from './input';
import { MbscPopup } from './popup';
/**
 * The Scroller component.
 *
 * Usage:
 *
 * ```
 * <mbsc-scroller></mbsc-scroller>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class MbscScroller extends ScrollerBase {
    vInput: MbscInput;
    vPopup: MbscPopup;
    element: any;
    writeValue: (elm: HTMLElement, text: string, value: any) => boolean;
    circular: boolean | boolean[];
    data: any;
    displayStyle: MbscPopupDisplay;
    filter: boolean;
    formatValue: (values: any[]) => string;
    getValue: (values: any[]) => any;
    maxWheelWidth: number | number[];
    minWheelWidth: number | number[];
    inContentTemplate: any;
    itemHeight: number;
    itemTemplate: TemplateRef<any>;
    onWheelMove: (args: IWheelMoveArgs) => any;
    parseValue: (valueStr: string) => any[];
    preContentTemplate: any;
    preContentData: any;
    rows: number;
    selectMultiple: boolean;
    selectOnScroll: boolean;
    shouldValidate: (s: any, prevS: any) => boolean;
    showInput: boolean;
    showOnClick: boolean;
    showOnFocus: boolean;
    validate: (args: any) => any;
    valueEquality: (v1: any, v2: any) => boolean;
    valueMap: any;
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
    activeElm: HTMLElement | string;
    anchor: any;
    animation: 'pop' | 'slide-up' | 'slide-down' | boolean;
    buttons: Array<MbscPopupButton | string>;
    cancelText: string;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    closeText: string;
    context: any;
    display: MbscPopupDisplay;
    focusOnClose: boolean;
    focusTrap: boolean;
    headerText: string;
    height: number | string;
    maxHeight: number | string;
    maxWidth: number | string;
    setText: string;
    showArrow: boolean;
    showOverlay: boolean;
    width: number | string;
    clearText: string;
    onCancel: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    onTempChange: EventEmitter<any>;
    onResize: EventEmitter<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscScroller, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscScroller, "mbsc-scroller", never, { "element": "element"; "writeValue": "writeValue"; "circular": "circular"; "data": "data"; "displayStyle": "displayStyle"; "filter": "filter"; "formatValue": "formatValue"; "getValue": "getValue"; "maxWheelWidth": "maxWheelWidth"; "minWheelWidth": "minWheelWidth"; "inContentTemplate": "inContentTemplate"; "itemHeight": "itemHeight"; "itemTemplate": "itemTemplate"; "onWheelMove": "onWheelMove"; "parseValue": "parseValue"; "preContentTemplate": "preContentTemplate"; "preContentData": "preContentData"; "rows": "rows"; "selectMultiple": "selectMultiple"; "selectOnScroll": "selectOnScroll"; "shouldValidate": "shouldValidate"; "showInput": "showInput"; "showOnClick": "showOnClick"; "showOnFocus": "showOnFocus"; "validate": "validate"; "valueEquality": "valueEquality"; "valueMap": "valueMap"; "wheels": "wheels"; "wheelWidth": "wheelWidth"; "disabled": "disabled"; "dropdown": "dropdown"; "endIcon": "endIcon"; "endIconSrc": "endIconSrc"; "endIconSvg": "endIconSvg"; "error": "error"; "errorMessage": "errorMessage"; "inputStyle": "inputStyle"; "label": "label"; "labelStyle": "labelStyle"; "name": "name"; "placeholder": "placeholder"; "startIcon": "startIcon"; "startIconSrc": "startIconSrc"; "startIconSvg": "startIconSvg"; "activeElm": "activeElm"; "anchor": "anchor"; "animation": "animation"; "buttons": "buttons"; "cancelText": "cancelText"; "closeOnEsc": "closeOnEsc"; "closeOnOverlayClick": "closeOnOverlayClick"; "closeText": "closeText"; "context": "context"; "display": "display"; "focusOnClose": "focusOnClose"; "focusTrap": "focusTrap"; "headerText": "headerText"; "height": "height"; "maxHeight": "maxHeight"; "maxWidth": "maxWidth"; "setText": "setText"; "showArrow": "showArrow"; "showOverlay": "showOverlay"; "width": "width"; "clearText": "clearText"; }, { "onCancel": "onCancel"; "onChange": "onChange"; "onClose": "onClose"; "onOpen": "onOpen"; "onTempChange": "onTempChange"; "onResize": "onResize"; }, never, ["*"], false, never>;
}

//# sourceMappingURL=scroller.d.ts.map
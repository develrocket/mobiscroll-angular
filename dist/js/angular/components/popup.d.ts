import { ElementRef, EventEmitter } from '@angular/core';
import { MbscPopupButton, MbscPopupDisplay, PopupBase } from '../../core/components/popup/popup';
import * as ɵngcc0 from '@angular/core';
export declare class MbscPopup extends PopupBase {
    vActive: ElementRef;
    vContent: ElementRef;
    vLimit: ElementRef;
    vWrapper: ElementRef;
    vPopup: ElementRef;
    activeElm: any;
    anchor: any;
    anchorAlign: 'start' | 'end' | 'center';
    animation: 'pop' | 'slide-down' | 'slide-up' | boolean;
    buttons: Array<MbscPopupButton | 'ok' | 'close' | 'set' | 'cancel'>;
    buttonVariant: 'standard' | 'flat' | 'outline';
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    closeOnScroll: boolean;
    contentPadding: boolean;
    cssClass: string;
    disableLeftRight: boolean;
    display: MbscPopupDisplay;
    focusElm: any;
    focusOnClose: boolean;
    focusOnOpen: boolean;
    focusTrap: boolean;
    fullScreen: boolean;
    headerText: string;
    height: string | number;
    isOpen: boolean;
    maxHeight: string | number;
    maxWidth: string | number;
    scrollLock: boolean;
    showArrow: boolean;
    showOverlay: boolean;
    windowWidth: number;
    width: string | number;
    cancelText: string;
    closeText: string;
    okText: string;
    setText: string;
    onButtonClick: EventEmitter<any>;
    onOverlayClick: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onClosed: EventEmitter<any>;
    onKeyDown: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    onPosition: EventEmitter<any>;
    onResize: EventEmitter<any>;
    /** Placeholder comment node */
    private _ph;
    protected _updated(): void;
    protected _onClosed(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscPopup, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscPopup, "mbsc-popup", never, { "activeElm": "activeElm"; "anchor": "anchor"; "anchorAlign": "anchorAlign"; "animation": "animation"; "buttons": "buttons"; "buttonVariant": "buttonVariant"; "closeOnEsc": "closeOnEsc"; "closeOnOverlayClick": "closeOnOverlayClick"; "closeOnScroll": "closeOnScroll"; "contentPadding": "contentPadding"; "cssClass": "cssClass"; "disableLeftRight": "disableLeftRight"; "display": "display"; "focusElm": "focusElm"; "focusOnClose": "focusOnClose"; "focusOnOpen": "focusOnOpen"; "focusTrap": "focusTrap"; "fullScreen": "fullScreen"; "headerText": "headerText"; "height": "height"; "isOpen": "isOpen"; "maxHeight": "maxHeight"; "maxWidth": "maxWidth"; "scrollLock": "scrollLock"; "showArrow": "showArrow"; "showOverlay": "showOverlay"; "windowWidth": "windowWidth"; "width": "width"; "cancelText": "cancelText"; "closeText": "closeText"; "okText": "okText"; "setText": "setText"; }, { "onButtonClick": "onButtonClick"; "onOverlayClick": "onOverlayClick"; "onClose": "onClose"; "onClosed": "onClosed"; "onKeyDown": "onKeyDown"; "onOpen": "onOpen"; "onPosition": "onPosition"; "onResize": "onResize"; }, never, ["*"], false, never>;
}

//# sourceMappingURL=popup.d.ts.map
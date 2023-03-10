import { ElementRef, EventEmitter } from '@angular/core';
import { RadioBase } from '../../core/components/radio/radio';
import { MbscRadioService } from '../shared/radio-service';
import * as ɵngcc0 from '@angular/core';
export declare class MbscRadio extends RadioBase {
    _radioService: MbscRadioService;
    vInput: ElementRef;
    color: string;
    checked: any;
    description: string;
    disabled: boolean;
    label: string;
    name: string;
    position: 'start' | 'end';
    checkedChange: EventEmitter<any>;
    private _check;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    writeValue(val: any): void;
    _change(checked: boolean): void;
    protected _ctor(): void;
    protected _mounted(): void;
    protected _render(s: any, state: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscRadio, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscRadio, "mbsc-radio", never, { "checked": "checked"; "color": "color"; "description": "description"; "disabled": "disabled"; "label": "label"; "name": "name"; "position": "position"; }, { "checkedChange": "checkedChange"; }, never, ["*"], false, never>;
}

//# sourceMappingURL=radio.d.ts.map
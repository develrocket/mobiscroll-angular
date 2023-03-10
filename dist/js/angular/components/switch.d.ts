import { ElementRef } from '@angular/core';
import { SwitchBase } from '../../core/components/switch/switch';
import * as ɵngcc0 from '@angular/core';
export declare class MbscSwitch extends SwitchBase {
    vInput: ElementRef;
    vHandle: ElementRef;
    vHandleCont: ElementRef;
    checked: any;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    description: string;
    disabled: boolean;
    id: string;
    label: string;
    position: 'start' | 'end';
    readonly: boolean;
    _id: string;
    private _check;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    writeValue(val: any): void;
    _change(checked: boolean): void;
    protected _mounted(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscSwitch, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscSwitch, "mbsc-switch", never, { "checked": "checked"; "color": "color"; "description": "description"; "disabled": "disabled"; "id": "id"; "label": "label"; "position": "position"; "readonly": "readonly"; }, {}, never, ["*"], false, never>;
}

//# sourceMappingURL=switch.d.ts.map
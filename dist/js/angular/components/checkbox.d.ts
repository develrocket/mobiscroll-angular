import { ElementRef } from '@angular/core';
import { CheckboxBase } from '../../core/components/checkbox/checkbox';
import * as ɵngcc0 from '@angular/core';
export declare class MbscCheckbox extends CheckboxBase {
    vInput: ElementRef;
    checked: any;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    defaultChecked: boolean;
    description: string;
    disabled: string;
    inputStyle: 'underline' | 'box' | 'outline';
    label: string;
    name: string;
    position: 'start' | 'end';
    private _check;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    writeValue(val: any): void;
    _change(checked: boolean): void;
    protected _mounted(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscCheckbox, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscCheckbox, "mbsc-checkbox", never, { "checked": "checked"; "color": "color"; "defaultChecked": "defaultChecked"; "description": "description"; "disabled": "disabled"; "inputStyle": "inputStyle"; "label": "label"; "name": "name"; "position": "position"; }, {}, never, ["*"], false, never>;
}

//# sourceMappingURL=checkbox.d.ts.map
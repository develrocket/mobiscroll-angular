import { ElementRef, EventEmitter } from '@angular/core';
import { SegmentedBase } from '../../core/components/segmented/segmented-item';
import { MbscRadioService } from '../shared/radio-service';
import * as ɵngcc0 from '@angular/core';
export declare class MbscSegmented extends SegmentedBase {
    _radioService: MbscRadioService;
    vInput: ElementRef;
    vBox: ElementRef;
    ariaLabel: string;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    checked: any;
    disabled: boolean;
    endIcon: string;
    endIconSrc: string;
    endIconSvg: string;
    icon: string;
    iconSvg: string;
    iconSrc: string;
    name: string;
    ripple: boolean;
    startIcon: string;
    startIconSrc: string;
    startIconSvg: string;
    select: 'single' | 'multiple';
    checkedChange: EventEmitter<any>;
    private _check;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    writeValue(val: any): void;
    _change(checked: boolean): void;
    protected _ctor(): void;
    protected _render(s: any, state: any): void;
    protected _mounted(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscSegmented, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscSegmented, "mbsc-segmented", never, { "checked": "checked"; "ariaLabel": "ariaLabel"; "color": "color"; "disabled": "disabled"; "endIcon": "endIcon"; "endIconSrc": "endIconSrc"; "endIconSvg": "endIconSvg"; "icon": "icon"; "iconSvg": "iconSvg"; "iconSrc": "iconSrc"; "name": "name"; "ripple": "ripple"; "startIcon": "startIcon"; "startIconSrc": "startIconSrc"; "startIconSvg": "startIconSvg"; "select": "select"; }, { "checkedChange": "checkedChange"; }, never, ["*"], false, never>;
}

//# sourceMappingURL=segmented-item.d.ts.map
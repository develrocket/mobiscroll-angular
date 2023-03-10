import { BaseComponent, IBaseProps } from '../../base';
import * as ɵngcc0 from '@angular/core';
export interface MbscRadioGroupOptions extends IBaseProps {
    color?: string;
    disabled?: boolean;
    name?: string;
    value?: any;
    position?: 'start' | 'end';
    onChange?: any;
}
/** @hidden */
export declare class RadioGroupBase extends BaseComponent<MbscRadioGroupOptions, any> {
    static defaults: MbscRadioGroupOptions;
    _groupClass: string;
    _groupOpt: any;
    _name: string;
    private _id;
    _onChange: (ev: any, val: any) => void;
    protected _render(s: MbscRadioGroupOptions): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<RadioGroupBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<RadioGroupBase, "[mbsc-rg-b]", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=radio-group.d.ts.map
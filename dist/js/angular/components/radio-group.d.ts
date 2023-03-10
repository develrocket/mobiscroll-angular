import { RadioGroupBase } from '../../core/components/radio/radio-group';
import { MbscRadioService } from '../shared/radio-service';
import * as ɵngcc0 from '@angular/core';
export declare class MbscRadioGroup extends RadioGroupBase {
    _radioService: MbscRadioService;
    color: string;
    disabled: string;
    name: string;
    position: 'start' | 'end';
    protected _onValueChange(value: any): void;
    protected _ctor(): void;
    protected _render(s: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscRadioGroup, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscRadioGroup, "mbsc-radio-group", never, { "color": "color"; "disabled": "disabled"; "name": "name"; "position": "position"; }, {}, never, ["*"], false, never>;
}

//# sourceMappingURL=radio-group.d.ts.map
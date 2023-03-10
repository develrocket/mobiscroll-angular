import { MbscSegmentedGroupOptions, SegmentedGroupBase } from '../../core/components/segmented/segmented-group';
import { MbscRadioService } from '../shared/radio-service';
import * as ɵngcc0 from '@angular/core';
export declare class MbscSegmentedGroup extends SegmentedGroupBase {
    _radioService: MbscRadioService;
    color: string;
    disabled: string;
    name: string;
    select: 'single' | 'multiple';
    protected _onValueChange(value: any): void;
    protected _ctor(): void;
    protected _render(s: MbscSegmentedGroupOptions): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscSegmentedGroup, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscSegmentedGroup, "mbsc-segmented-group", never, { "color": "color"; "disabled": "disabled"; "name": "name"; "select": "select"; }, {}, never, ["*"], false, never>;
}

//# sourceMappingURL=segmented-group.d.ts.map
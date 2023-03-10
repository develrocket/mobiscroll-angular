import { OnChanges, SimpleChanges } from '@angular/core';
import { MbscOptions } from '../core/commons';
import { MbscOptionsService } from './options.service';
import * as ɵngcc0 from '@angular/core';
export declare class MbscOptionsProviderComponent implements OnChanges {
    private _opt;
    options: MbscOptions;
    constructor(_opt: MbscOptionsService);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscOptionsProviderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscOptionsProviderComponent, "mbsc-options-provider", never, { "options": "options"; }, {}, never, ["*"], false, never>;
}

//# sourceMappingURL=options.provider.d.ts.map
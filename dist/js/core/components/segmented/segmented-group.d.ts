import { BaseComponent, IBaseProps } from '../../base';
import * as ɵngcc0 from '@angular/core';
export interface MbscSegmentedGroupOptions extends IBaseProps {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    drag?: boolean;
    disabled?: boolean;
    name?: string;
    select?: 'single' | 'multiple';
    value?: any;
    onChange?: any;
}
/** @hidden */
export declare class SegmentedGroupBase extends BaseComponent<MbscSegmentedGroupOptions, any> {
    static defaults: MbscSegmentedGroupOptions;
    protected static _name: string;
    _groupClass: string;
    _groupOpt: any;
    _name: string;
    private _unlisten?;
    private _id;
    _onChange: (ev: any, val: any) => void;
    protected _setupDrag(): void;
    protected _cleanupDrag(): void;
    protected _render(s: MbscSegmentedGroupOptions): void;
    protected _updated(): void;
    protected _destroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SegmentedGroupBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<SegmentedGroupBase, "[mbsc-sgr-b]", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=segmented-group.d.ts.map
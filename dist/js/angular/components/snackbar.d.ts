import { MbscPopupOptions } from '../../core/components/popup/popup';
import { MbscPopup } from './popup';
import * as ɵngcc0 from '@angular/core';
export declare class MbscSnackbar {
    popup: MbscPopup;
    button?: {
        action?: () => void;
        icon?: string;
        text?: string;
    };
    message: string;
    props: MbscPopupOptions;
    onButtonClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscSnackbar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscSnackbar, "mbsc-snackbar", never, { "button": "button"; "message": "message"; "props": "props"; }, {}, never, never, false, never>;
}

//# sourceMappingURL=snackbar.d.ts.map
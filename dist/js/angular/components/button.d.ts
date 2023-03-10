import { ButtonBase } from '../../core/components/button/button';
import { MbscCustomEndIcon, MbscCustomIcon, MbscCustomStartIcon } from './icon';
import * as ɵngcc0 from '@angular/core';
export declare class MbscButton extends ButtonBase {
    _customIcon: MbscCustomIcon;
    _customStartIcon: MbscCustomStartIcon;
    _customEndIcon: MbscCustomEndIcon;
    ariaLabel: string;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    disabled: boolean;
    endIcon: string;
    endIconSrc: string;
    endIconSvg: string;
    icon: string;
    iconSvg: string;
    iconSrc: string;
    ripple: boolean;
    role: 'button' | 'none';
    startIcon: string;
    startIconSrc: string;
    startIconSvg: string;
    tabIndex: number;
    variant: 'standard' | 'flat' | 'outline';
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscButton, "mbsc-button", never, { "ariaLabel": "ariaLabel"; "color": "color"; "disabled": "disabled"; "endIcon": "endIcon"; "endIconSrc": "endIconSrc"; "endIconSvg": "endIconSvg"; "icon": "icon"; "iconSvg": "iconSvg"; "iconSrc": "iconSrc"; "ripple": "ripple"; "role": "role"; "startIcon": "startIcon"; "startIconSrc": "startIconSrc"; "startIconSvg": "startIconSvg"; "tabIndex": "tabIndex"; "variant": "variant"; }, {}, ["_customIcon", "_customStartIcon", "_customEndIcon"], ["[mbsc-icon]", "[mbsc-start-icon]", "*", "[mbsc-end-icon]"], false, never>;
}

//# sourceMappingURL=button.d.ts.map
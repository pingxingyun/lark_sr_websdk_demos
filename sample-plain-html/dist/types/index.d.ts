import 'core-js/stable/symbol';
import { LarkSR, LarkEventType, LarkSRClientEvent, AppliParams, LoadAppliParamsFromUrl, AppliParamsUtils, LoadAppliParamsStartAppInfo, EventBase, API, Operation, Capabilities, ScaleMode, CloudLark, FullScreen, LockPointer, ILarkSRConfig, PlayerModeType, UserType, LarkSREvent, GESTURE_TYPE } from "./larksr";
declare const _default: {
    LarkSR: typeof LarkSR;
    API: typeof API;
    AppliParams: typeof AppliParams;
    LoadAppliParamsFromUrl: typeof LoadAppliParamsFromUrl;
    AppliParamsUtils: typeof AppliParamsUtils;
    LoadAppliParamsStartAppInfo: typeof LoadAppliParamsStartAppInfo;
    EventBase: typeof EventBase;
    ScaleMode: typeof ScaleMode;
    Capabilities: typeof Capabilities;
    CloudLark: typeof CloudLark;
    FullScreen: typeof FullScreen;
    LockPointer: typeof LockPointer;
    Operation: typeof Operation;
    LarkSRClientEvent: typeof LarkSRClientEvent;
    LarkEventType: typeof LarkEventType;
    GESTURE_TYPE: typeof GESTURE_TYPE;
    KEYMAP: import("./operation/keymap").VritualKeyMapOptions;
};
export default _default;
export { ILarkSRConfig, PlayerModeType, UserType, LarkSREvent, };

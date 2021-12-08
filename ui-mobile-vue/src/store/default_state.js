import { defaultNotify } from './modules/notifybar';
import { defalutModalAlert } from './modules/modal_alert';
import { defaultControlBar } from './modules/controlbar';
import { defaultToast } from './modules/toast';
import { defaulSettingInfo } from './modules/setttinginfo_pannel';
import { defaulStateModal } from './modules/state_modal';
import { defalutModalConfirm } from './modules/modal_confirm';
import { defautlPlayerMode } from './modules/player_mode';
import { CursorType } from './interface';
import Capabilities from '../utils/capabilities';

// 默认连接状态
export const defaultAggregatedStats/*: AggregatedStats*/ = {
	timestamp: 0, bytesReceived: 0, framesDecoded: 0,
	packetsLost: 0, bytesReceivedStart: 0, framesDecodedStart: 0,
	timestampStart: 0, bitrate: 0, lowBitrate: 0, highBitrate: 0,
	avgBitrate: 0, framerate: 0, lowFramerate: 0, highFramerate: 0,
	avgframerate: 0, framesDropped: 0, framesReceived: 0, framesDroppedPercentage: 0,
	frameHeight: 0, frameWidth: 0, frameHeightStart: 0, frameWidthStart: 0, currentRoundTripTime: 0,
	packetsLostPerc: 0,
};

export const DefaultState/*: RootState*/ = {
    larksr: null,
    aggregatedStats: defaultAggregatedStats,
    isMobile: Capabilities.isMobile,
    mobilePixelUnit: 1920 / 100,
    cursorStyle: {
        // type: CursorType.CUSTOM,
        type: CursorType.DEFAULT,
        hotX: 0,
        hotY: 0,
        width: 0,
        height: 0,
        customBase64: "",
        // customBase64: "data:image/png;base64,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TUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS4xLjIiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjM0PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj41MDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6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",
    },
    vkeyboard: false,
    modalSetup: false,
    ui: {},
    menu: false,
    vmouseMode: 'pointer',
    // default show joystick;
    joystick: true,
    joystickAllKeys: false,
    flipMouseWheel: false,
    showControlBar: true,
    // iframe 控制
    // 是否显示移动端控制球
	enableMobileControlBall: true,
    //
    syncClipboardParseEvent: true,
    mobileControlBallPosition: { x: 0, y: 0},
    // moduls.
	notifyBar: { timeout: -1, notify: defaultNotify,},
	modalAlert: { modalAlert: defalutModalAlert },
	controlbar: defaultControlBar,
	toast: { timeout: -1, toast: defaultToast, toastLevel: 0 },
	settingInfoPannel: { settingInfo: defaulSettingInfo, },
	stateModal: { stateModal: defaulStateModal, },
	modalConfirm: { modalConfirm: defalutModalConfirm },
	playerMode: defautlPlayerMode,
}

export default DefaultState;
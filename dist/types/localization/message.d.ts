import LocalizationBase from './base';
export default class Message extends LocalizationBase {
    protected mType: string;
    private getLevel;
    private getMessage;
    get info(): string;
    get waring(): string;
    get error(): string;
    get connectWebRTC(): string;
    get iceFailed(): string;
    get iceSuccess(): string;
    get webRTCHangUp(): string;
    get connectWsErr(): string;
    get connectWsErr1(): string;
    get connectWsClose(): string;
    get appLoginErr1(): string;
    get appLoginErr2(): string;
    get connectAppErr(): string;
    get connectAppErr2(): string;
    get signalingAppTimeout(): string;
    get remoteAppFailed(): string;
    get remoteAppClose(): string;
    get refresh(): string;
    get courseOver(): string;
    get courseOuit(): string;
    get orientation(): string;
    get requestLockMouse(): string;
    get lockMouse(): string;
    get paramError(): string;
    get loadConfigFailed(): string;
    get tokenExpired(): string;
    get requestPlayVideo(): string;
    get loginSuccess(): string;
    get loginErrorCourseNotStart(): string;
    get loginErrorCourseNotexist(): string;
    get loginErrorCourseTimeout(): string;
    get loginErrorMediaNotReady(): string;
    get loginErrorSessionExist(): string;
    get loginErrorValiduser(): string;
    get loginErrorSafedogNotfound(): string;
    get loginErrorSafedogTimeout(): string;
    get loginErrorUnknown(): string;
    get loginErrorEmpty(): string;
    get appLoginTimeout(): string;
    get appLoginMessageErr(): string;
    get connectToAppServerTimeout(): string;
    get appStartStreamTimeout(): string;
    get noOperationTimeout(): string;
    get RENDER_SERVER_CONNECTED(): string;
    get RENDER_SERVER_FAILED(): string;
    get RENDER_SERVER_CLOSE(): string;
    get RENDER_SERVER_ERROR(): string;
    get PROXY_SERVER_CONNECTED(): string;
    get PROXY_SERVER_FAILED(): string;
    get PROXY_SERVER_CLOSE(): string;
    get PROXY_SERVER_ERROR(): string;
    get VERSION_CHECK_SUCCESS(): string;
    get VERSION_CHECK_FAILED(): string;
    get taskSuccess(): string;
    get taskError(): string;
    get taskNotFound(): string;
    get taskServerError(): string;
    get taskAppWrongParam(): string;
    get taskNoGpuResource(): string;
    get startSuccess(): string;
    get startFailed(): string;
    get startStreamProcessStartFailed(): string;
    get startStreamProcessStartTimeout(): string;
    get startStreamNotStreaming(): string;
    get startStreamEncodeError(): string;
    get connectToAdmin(): string;
    get RTC_EVENT_PEERCONNECTION_CONNECTED(): string;
    get RTC_EVENT_PEERCONNECTION_CLOSED(): string;
    get RTC_EVENT_PEERCONNECTION_ERROR(): string;
    get VIDEO_LOADED(): string;
    get RTC_RETRY_CONNECTION(): string;
    get LK_NOTIFY_CLIENT_LOGOUT_PLAYER_LOGOUT(): string;
    get LK_NOTIFY_CLIENT_LOGOUT_TASKOWNER_LOGOUT(): string;
    get LK_APP_PROCESS_NOTIFI_APP_QUIT(): string;
    get LK_LOADING_TIMEOUT(): string;
}

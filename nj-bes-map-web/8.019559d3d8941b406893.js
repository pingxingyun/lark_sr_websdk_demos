(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        DoWh: function (n, t, e) {
            "use strict";
            e.r(t);
            var l = e("CcnG"),
                o = e("F/XL"),
                i = e("vubp"),
                a = e("AytR"),
                r = e("t/Na"),
                u = function () {
                    function n(n) {
                        this.http = n
                    }
                    return n.prototype.stopVoiceInfo = function (n) {
                        return this.http.post(a.a.GATEWAYURL + "/besai_server/api/stop-voice-info/" + n, {})
                    }, n.prototype.getTextInfo = function (n, t) {
                        return this.http.post(a.a.GATEWAYURL + "/besai_server/api/get-text-info/" + n + "?content=" + t, {})
                    }, n.prototype.queryConcurrencyNum = function () {
                        return this.http.get(a.a.GATEWAYURL + "/besai_server/api/query-concurrency-num")
                    }, n.ngInjectableDef = l.Kb({
                        factory: function () {
                            return new n(l.Lb(r.c))
                        },
                        token: n,
                        providedIn: "root"
                    }), n
                }(),
                s = e("thVH"),
                c = function () {
                    function n(n, t, e, l) {
                        this.activatedRoute = n, this.webSocketService = t, this.titleServe = e, this.service = l, this.heartBeatIntervalId = null, this.DataChannelType = {
                            InitConfig: 0,
                            TextInput: 1,
                            CameraControl: 2,
                            ClientSize: 3,
                            Background: 4
                        }, this.savedCamera = {
                            align: 1,
                            zoom: 0,
                            angle: 0
                        }, this.mobSettingZoom = !1, this.angleIconShow = !0, this.isMobile = !0, this.textList = [], this.btnText = "按住说话", this.questionText = "", this.larksrConfig = {
                            appliId: "1158178264311431168",
                            authCode: "5d141ba7aa97436188a8634b929176b48",
                            productId: "278579207",
                            loadingBgUrl: "https://dm-platform-temp.oss-cn-shanghai.aliyuncs.com/dm2/dlshishi/other/16985584155611.jpg",
                            serverAddress: "http://digitalhuman.duiopen.com:8188",
                            isOrNo: !1,
                            key: "c6bc3a4c5fe4cc6b36cce22dcf3beeB",
                            url: "http://digiman.duiopen .com/wavur12bs?"
                        }, this.srSwitchover = !0, this.showYysrImg = !1, this.isOrNo = !1, this.showInitImg = !0, this.initStep = 0, this.receiveParams = this.activatedRoute.snapshot.queryParams, this.titleServe.setTitle("数智问答")
                    }
                    return n.prototype.ngOnInit = function () {
                        var n = this;
                        this.service.queryConcurrencyNum().subscribe((function (t) {
                            t.data.isOrNo ? (n.larksrConfig = t.data, console.log(n.larksrConfig), n.initWebsocket(), n.mobileORPc(), n.initLarkSR()) : n.isOrNo = !0
                        }))
                    }, n.prototype.initLarkSR = function () {
                        var n = this;
                        this.larksr = new larksr_websdk.LarkSR({
                            rootElement: document.getElementById("container"),
                            serverAddress: this.larksrConfig.serverAddress,
                            scaleMode: "contain",
                            fullScreenMode: 0,
                            loadingBgUrl: this.larksrConfig.loadingBgUrl,
                            mobileForceLandscape: !1,
                            authCode: this.larksrConfig.authCode,
                            frameRate: 20,
                            codeRate: 2e3
                        }), this.larksr.on("appstatechange", (function (n) {
                            console.log("appstatechange", n)
                        })), this.larksr.isEnableTouchPonit = !1, this.larksr.isEnableLoadingStateBar = !1, this.larksr.connect({
                            appliId: this.larksrConfig.appliId
                        }).then((function () {})).catch((function (n) {
                            console.log("load appli failed", n)
                        })), this.larksr.on("mediaplaysuccess", (function (n) {})), 

                        this.larksr.on("appstatechange", (function (t) {
                            console.log(5 === t.data), 1 === t.data ? n.initStep = 1 : 2 === t.data ? n.initStep = 2 : 3 === t.data ? n.initStep = 3 : 4 === t.data ? n.initStep = 4 : 5 === t.data ? setTimeout((function () {
                                6 !== n.initStep ? n.initStep = 5 : n.showInitImg = !1
                            }), 1500) : 6 === t.data && (n.initStep = 6)
                        })), 
                        
                        document.addEventListener("visibilitychange", (function () {
                            document.hidden ? (console.log("页面被挂起"), n.larksr.close()) : (console.log("页面呼出"), n.larksr.connect({
                                appliId: n.larksrConfig.appliId
                            }).catch((function (n) {
                                console.error("enter appli falied", n), alert(JSON.stringify(n))
                            })))
                        }))
                    }, n.prototype.playVideo = function () {
                        this.larksr.videoComponent.playVideo(), this.showInitImg = !1
                    }, n.prototype.sendData = function (n, t, e, l, o) {
                        var i = window.btoa(n),
                            a = this.larksrConfig.url + "uri=" + i + "&requestid=" + e + "&apikey=" + this.larksrConfig.key + "&productId=" + this.larksrConfig.productId + "&stream=true";
                        console.log("url 2 = ", a);
                        var r = JSON.stringify({
                            type: this.DataChannelType.TextInput,
                            data: {
                                url: a,
                                requestid: e,
                                stream: !0,
                                streamType: l,
                                streamidx: o
                            }
                        });
                        return t.sendTextToDataChannel(r), "start" === l && this.larksr.videoComponent.sountPlayout(), console.log("datachannel on ", r), a
                    }, n.prototype.mobileORPc = function () {
                        var n = navigator.userAgent.toLowerCase(),
                            t = "ipad" == n.match(/ipad/i),
                            e = "iphone os" == n.match(/iphone os/i),
                            l = "midp" == n.match(/midp/i),
                            o = "rv:1.2.3.4" == n.match(/rv:1.2.3.4/i),
                            i = "ucweb" == n.match(/ucweb/i),
                            a = "android" == n.match(/android/i),
                            r = "windows ce" == n.match(/windows ce/i),
                            u = "windows mobile" == n.match(/windows mobile/i);
                        this.isMobile = !!(t || e || l || o || i || a || r || u)
                    }, n.prototype.getTime = function () {
                        var n = new Date;
                        return (n.getHours() < 10 ? "0" + n.getHours() : n.getHours()) + ":" + (n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes()) + ":" + (n.getSeconds() < 10 ? "0" + n.getSeconds() : n.getSeconds())
                    }, n.prototype.initWebsocket = function () {
                        var n = this;
                        console.log(this.getTime(), "0.websocket初始化", this.receiveParams.sign), this.webSocketService.createObservableSocket("wss://aixcx.dabaoensi.com/wss", "echo-protocol", (function () {
                            console.log(n.getTime(), "2.websocket on open");
                            var t = {
                                event: "H5",
                                data: {
                                    event: "sign",
                                    data: {
                                        sign: n.receiveParams.sign
                                    }
                                }
                            };
                            console.log(n.getTime(), "3.websocket发送签名", t), n.webSocketService.sendMessage(t);
                            var e = {
                                event: "H5",
                                data: {
                                    event: "heartbeat"
                                }
                            };
                            n.heartBeatIntervalId && clearInterval(n.heartBeatIntervalId), n.heartBeatIntervalId = setInterval((function () {
                                n.webSocketService.sendMessage(e), console.log(n.getTime(), "00.发送心跳", e)
                            }), 59e3)
                        }), (function () {
                            Object(o.a)("1").pipe(Object(i.a)(1e3)).subscribe((function () {
                                console.log(n.getTime(), "5.1.websocket开始重新连接"), n.initWebsocket()
                            }))
                        })).subscribe((function (t) {
                            console.log(n.getTime(), "4.接收到服务器端发送的日志", JSON.parse(t));
                            var e = JSON.parse(t);
                            if ("asrH5" === e.data.h5MpaId && "send_exclude_DataV" === e.data.event) {
                                var l = e.data.data.list;
                                if ("audio" === e.data.data.type && "done" !== e.data.data.status) n.sendData(l, n.larksr, e.data.data.requestId, e.data.data.status, e.data.data.streamidx);
                                else if ("question" === e.data.data.type) n.textList.push({
                                    question: !0,
                                    text: l,
                                    questionId: e.data.data.questionId
                                }), (o = document.getElementById("text-container")).scrollTo(0, o.scrollHeight);
                                else if ("answer" === e.data.data.type && "done" !== e.data.data.status) {
                                    var o;
                                    "start" === e.data.data.status ? (n.textList.push({
                                        question: !1,
                                        text: l,
                                        questionId: e.data.data.questionId
                                    }), (o = document.getElementById("text-container")).scrollTo(0, o.scrollHeight)) : n.textList.forEach((function (n) {
                                        if (n.questionId === e.data.data.questionId && !n.question) {
                                            var t = document.getElementById("text-container");
                                            t.scrollTo(0, t.scrollHeight), n.text = n.text + l
                                        }
                                    }))
                                }
                            }
                        }), (function (t) {
                            console.log(n.getTime(), "5.websocket发生错误 ")
                        }))
                    }, n.prototype.startTalking = function () {
                        var n = this;
                        this.showYysrImg = !0, console.log(this.showYysrImg), this.btnText = "松开停止";
                        var t = {
                            event: "H5",
                            data: {
                                event: "send_exclude_DataV",
                                h5MpaId: "asrMp",
                                Talking: "start"
                            }
                        };
                        console.log(this.getTime(), "点开按钮websocket推送给小程序", t), this.webSocketService.sendMessage(t), this.service.stopVoiceInfo(this.receiveParams.sign).subscribe((function (t) {
                            var e = JSON.stringify({
                                type: 3,
                                data: {
                                    url: "",
                                    requestid: "xxxxfff",
                                    streamType: "start"
                                }
                            });
                            n.larksr.sendTextToDataChannel(e), console.log("按住发送", e)
                        })), this.larksr.videoComponent.playVideo()
                    }, n.prototype.endTalking = function () {
                        console.log("松开"), this.showYysrImg = !1, this.btnText = "按住说话";
                        var n = {
                            event: "H5",
                            data: {
                                event: "send_exclude_DataV",
                                h5MpaId: "asrMp",
                                Talking: "end"
                            }
                        };
                        console.log("触发数字人语音"), this.larksr.videoComponent.sountPlayout(), console.log(this.getTime(), "松开按钮websocket推送给小程序", n), this.webSocketService.sendMessage(n)
                    }, n.prototype.sendQuestionText = function () {
                        var n = this;
                        "" !== this.questionText && this.service.stopVoiceInfo(this.receiveParams.sign).subscribe((function (t) {
                            var e = JSON.stringify({
                                type: 3,
                                data: {
                                    url: "",
                                    requestid: "xxxxfff",
                                    streamType: "start"
                                }
                            });
                            n.larksr.sendTextToDataChannel(e), n.service.getTextInfo(n.receiveParams.sign, n.questionText).subscribe((function (t) {
                                n.questionText = ""
                            }))
                        }))
                    }, n.prototype.SwitchoverSr = function () {
                        this.srSwitchover = !this.srSwitchover, this.questionText = ""
                    }, n.prototype.goMapPage = function () {
                        this.webSocketService.sendMessage({
                            event: "H5",
                            data: {
                                event: "send_exclude_DataV",
                                h5MpaId: "goMapPage"
                            }
                        })
                    }, n
                }(),
                g = function () {
                    return function () {}
                }(),
                d = e("pMnS"),
                p = e("Ip0R"),
                b = e("gIcY"),
                h = e("ZYCi"),
                f = e("ZYjt"),
                m = l.pb({
                    encapsulation: 0,
                    styles: [
                        ["div[_ngcontent-%COMP%]{box-sizing:border-box}.asr-container[_ngcontent-%COMP%]{position:absolute!important;top:0;right:0;bottom:0;left:0;background-image:url(szrbg.f49e2cc738f663534ff7.png);background-size:100% 100%}.asr-container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{position:absolute;top:50%;bottom:100px;left:0;right:0;overflow:auto;padding:20px}.asr-container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .question-div[_ngcontent-%COMP%]{text-align:right;margin-bottom:20px}.asr-container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .question-div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-width:274px;display:inline-block;padding:10px 12px;background:rgba(58,137,100,.8);border-radius:6px 0 6px 6px;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:left;font-weight:400}.asr-container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .answer-div[_ngcontent-%COMP%]{margin-bottom:20px}.asr-container[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .answer-div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-width:274px;display:inline-block;padding:10px 12px;background:rgba(255,255,255,.8);border-radius:0 6px 6px;font-family:PingFangSC-Regular;font-size:14px;color:#444;text-align:left;font-weight:400}.asr-container[_ngcontent-%COMP%]   .luru-img[_ngcontent-%COMP%]{width:180px;height:60px;position:absolute;top:45%;bottom:0;left:50%;right:0;transform:translate(-50%,-50%);z-index:100}.asr-container[_ngcontent-%COMP%]   .go-map-btn[_ngcontent-%COMP%]{position:absolute;top:109px;right:12px;z-index:100;text-align:center;font-family:SourceHanSerifCN-Medium;font-size:14px;color:#333;font-weight:500}.asr-container[_ngcontent-%COMP%]   .go-map-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}.asr-container[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;height:80px;background:#fff;text-align:center;padding-top:10px;box-sizing:border-box;z-index:100}.asr-container[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .bottom-div-btn[_ngcontent-%COMP%]{width:80%;height:40px;font-family:PingFangSC-Medium;font-size:14px;color:#fff;text-align:center;font-weight:500;background:#baa38d;border-radius:20px;display:inline-block;padding-top:10px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:40%;right:3.1%;transform:translate(0,-50%)}.asr-container[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:#efeae5;border-radius:20px;border:none;outline:0;width:80%;height:40px;padding-left:20px;padding-right:60px;box-sizing:border-box;display:inline-block;position:absolute;top:40%;right:3.1%;font-size:15px;transform:translate(0,-50%)}.asr-container[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .send-div[_ngcontent-%COMP%]{width:56px;height:36px;position:absolute;right:3.1%;top:40%;transform:translate(0,-50%);z-index:10;background-image:url(send.2d7c66ed9495253ef0b7.png);background-size:100% 100%}.asr-container[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .yysr-btn[_ngcontent-%COMP%]{width:32px;height:32px;background-image:url(yysr.cd46e4264e0b73b26abf.png);background-size:100% 100%;position:absolute;left:3.1%;top:40%;transform:translate(0,-50%)}.asr-container[_ngcontent-%COMP%]   .bottom-div[_ngcontent-%COMP%]   .wzsr-btn[_ngcontent-%COMP%]{width:32px;height:32px;background-image:url(wzsr.a56bba4816efd0ac05b4.png);background-size:100% 100%;position:absolute;left:3.1%;top:40%;transform:translate(0,-50%)}.asr-container[_ngcontent-%COMP%]   .overcue-mask[_ngcontent-%COMP%]{position:absolute!important;top:0;right:0;bottom:0;left:0;z-index:999;background-color:rgba(0,0,0,.5)}.asr-container[_ngcontent-%COMP%]   .overcue-mask[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;bottom:102px;left:50%;width:300px;height:40px;line-height:40px;text-align:center;background:rgba(0,0,0,.3);border-radius:20px;font-family:PingFangSC-Regular;font-size:14px;color:#fff;font-weight:400;transform:translate(-50%,0)}.asr-container[_ngcontent-%COMP%]   .init-mask[_ngcontent-%COMP%]{position:absolute!important;top:0;right:0;bottom:0;left:0;z-index:1000;background-image:url(szrbg.f49e2cc738f663534ff7.png);background-size:100% 100%}.asr-container[_ngcontent-%COMP%]   .init-mask[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]{position:absolute!important;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.asr-container[_ngcontent-%COMP%]   .init-mask[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute!important;width:160px;height:160px;left:50%;top:50%;transform:translate(-50%,-55%);z-index:20}.asr-container[_ngcontent-%COMP%]   .init-mask[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]{position:absolute!important;left:50%;top:50%;transform:translate(-44%,-73%);z-index:40;color:#fdf9f1;font-size:28px}  #container .pxy-container{box-shadow:none!important}"]
                    ],
                    data: {}
                });

            function v(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 5, "div", [], null, null, null, null, null)), l.Db(512, null, p.t, p.u, [l.r, l.s, l.k, l.C]), l.qb(2, 278528, null, 0, p.h, [p.t], {
                    ngClass: [0, "ngClass"]
                }, null), l.Cb(3, {
                    "question-div": 0,
                    "answer-div": 1
                }), (n()(), l.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(), l.Fb(5, null, ["", ""]))], (function (n, t) {
                    var e = n(t, 3, 0, t.context.$implicit.question, !t.context.$implicit.question);
                    n(t, 2, 0, e)
                }), (function (n, t) {
                    n(t, 5, 0, t.context.$implicit.text)
                }))
            }

            function x(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 0, "img", [
                    ["class", "luru-img"],
                    ["src", "assets/images/luru.png"]
                ], null, null, null, null, null))], null, null)
            }

            function C(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 0, "div", [
                    ["class", "yysr-btn"]
                ], null, [
                    [null, "click"]
                ], (function (n, t, e) {
                    var l = !0;
                    return "click" === t && (l = !1 !== n.component.SwitchoverSr() && l), l
                }), null, null))], null, null)
            }

            function k(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 0, "div", [
                    ["class", "wzsr-btn"]
                ], null, [
                    [null, "click"]
                ], (function (n, t, e) {
                    var l = !0;
                    return "click" === t && (l = !1 !== n.component.SwitchoverSr() && l), l
                }), null, null))], null, null)
            }

            function O(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 5, "input", [
                    ["type", "text"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], (function (n, t, e) {
                    var o = !0,
                        i = n.component;
                    return "input" === t && (o = !1 !== l.Bb(n, 1)._handleInput(e.target.value) && o), "blur" === t && (o = !1 !== l.Bb(n, 1).onTouched() && o), "compositionstart" === t && (o = !1 !== l.Bb(n, 1)._compositionStart() && o), "compositionend" === t && (o = !1 !== l.Bb(n, 1)._compositionEnd(e.target.value) && o), "ngModelChange" === t && (o = !1 !== (i.questionText = e) && o), o
                }), null, null)), l.qb(1, 16384, null, 0, b.b, [l.C, l.k, [2, b.a]], null, null), l.Db(1024, null, b.d, (function (n) {
                    return [n]
                }), [b.b]), l.qb(3, 671744, null, 0, b.g, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, b.d]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), l.Db(2048, null, b.e, null, [b.g]), l.qb(5, 16384, null, 0, b.f, [
                    [4, b.e]
                ], null, null)], (function (n, t) {
                    n(t, 3, 0, t.component.questionText)
                }), (function (n, t) {
                    n(t, 0, 0, l.Bb(t, 5).ngClassUntouched, l.Bb(t, 5).ngClassTouched, l.Bb(t, 5).ngClassPristine, l.Bb(t, 5).ngClassDirty, l.Bb(t, 5).ngClassValid, l.Bb(t, 5).ngClassInvalid, l.Bb(t, 5).ngClassPending)
                }))
            }

            function w(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 0, "div", [
                    ["class", "send-div"]
                ], null, [
                    [null, "click"]
                ], (function (n, t, e) {
                    var l = !0;
                    return "click" === t && (l = !1 !== n.component.sendQuestionText() && l), l
                }), null, null))], null, null)
            }

            function I(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 1, "div", [
                    ["class", "bottom-div-btn"]
                ], null, [
                    [null, "touchstart"],
                    [null, "touchend"]
                ], (function (n, t, e) {
                    var l = !0,
                        o = n.component;
                    return "touchstart" === t && (l = !1 !== o.startTalking() && l), "touchend" === t && (l = !1 !== o.endTalking() && l), l
                }), null, null)), (n()(), l.Fb(1, null, ["", ""]))], null, (function (n, t) {
                    n(t, 1, 0, t.component.btnText)
                }))
            }

            function M(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 2, "div", [
                    ["class", "overcue-mask"]
                ], null, null, null, null, null)), (n()(), l.rb(1, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(), l.Fb(-1, null, ["当前人数较多，请稍后再试"]))], null, null)
            }

            function y(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 1, "div", [
                    ["class", "num"]
                ], null, null, null, null, null)), (n()(), l.Fb(1, null, ["", ""]))], null, (function (n, t) {
                    n(t, 1, 0, 20 * t.component.initStep + "%")
                }))
            }

            function P(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 1, "div", [
                    ["class", "num"]
                ], null, null, null, null, null)), (n()(), l.Fb(-1, null, ["99%"]))], null, null)
            }

            function S(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 0, "img", [
                    ["src", "assets/images/init.png"]
                ], null, null, null, null, null))], null, null)
            }

            function _(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 0, "img", [
                    ["src", "assets/images/init2.png"]
                ], null, [
                    [null, "click"]
                ], (function (n, t, e) {
                    var l = !0;
                    return "click" === t && (l = !1 !== n.component.playVideo() && l), l
                }), null, null))], null, null)
            }

            function T(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 9, "div", [
                    ["class", "init-mask"]
                ], null, null, null, null, null)), (n()(), l.rb(1, 0, null, null, 0, "div", [
                    ["class", "mask"]
                ], null, null, null, null, null)), (n()(), l.gb(16777216, null, null, 1, null, y)), l.qb(3, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, P)), l.qb(5, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, S)), l.qb(7, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, _)), l.qb(9, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null)], (function (n, t) {
                    var e = t.component;
                    n(t, 3, 0, 1 === e.initStep || 2 === e.initStep || 3 === e.initStep || 0 === e.initStep), n(t, 5, 0, 4 === e.initStep), n(t, 7, 0, 1 === e.initStep || 2 === e.initStep || 3 === e.initStep || 4 === e.initStep || 0 === e.initStep), n(t, 9, 0, 5 === e.initStep)
                }), null)
            }

            function q(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 25, "div", [
                    ["class", "asr-container"]
                ], null, null, null, null, null)), (n()(), l.rb(1, 0, null, null, 0, "div", [
                    ["id", "container"]
                ], null, null, null, null, null)), (n()(), l.rb(2, 0, null, null, 2, "div", [
                    ["class", "text-container"],
                    ["id", "text-container"]
                ], null, null, null, null, null)), (n()(), l.gb(16777216, null, null, 1, null, v)), l.qb(4, 278528, null, 0, p.i, [l.O, l.K, l.r], {
                    ngForOf: [0, "ngForOf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, x)), l.qb(6, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.rb(7, 0, null, null, 3, "div", [
                    ["class", "go-map-btn"]
                ], null, [
                    [null, "click"]
                ], (function (n, t, e) {
                    var l = !0;
                    return "click" === t && (l = !1 !== n.component.goMapPage() && l), l
                }), null, null)), (n()(), l.rb(8, 0, null, null, 0, "img", [
                    ["src", "assets/images/mapPage.png"]
                ], null, null, null, null, null)), (n()(), l.rb(9, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(), l.Fb(-1, null, ["地图导览"])), (n()(), l.rb(11, 0, null, null, 10, "div", [
                    ["class", "bottom-div"]
                ], null, null, null, null, null)), (n()(), l.gb(16777216, null, null, 1, null, C)), l.qb(13, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, k)), l.qb(15, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, O)), l.qb(17, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, w)), l.qb(19, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, I)), l.qb(21, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, M)), l.qb(23, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), l.gb(16777216, null, null, 1, null, T)), l.qb(25, 16384, null, 0, p.j, [l.O, l.K], {
                    ngIf: [0, "ngIf"]
                }, null)], (function (n, t) {
                    var e = t.component;
                    n(t, 4, 0, e.textList), n(t, 6, 0, e.showYysrImg), n(t, 13, 0, !e.srSwitchover), n(t, 15, 0, e.srSwitchover), n(t, 17, 0, !e.srSwitchover), n(t, 19, 0, !e.srSwitchover), n(t, 21, 0, e.srSwitchover), n(t, 23, 0, e.isOrNo), n(t, 25, 0, e.showInitImg)
                }), null)
            }

            function z(n) {
                return l.Gb(0, [(n()(), l.rb(0, 0, null, null, 1, "app-index", [], null, null, null, q, m)), l.qb(1, 114688, null, 0, c, [h.a, s.a, f.h, u], null, null)], (function (n, t) {
                    n(t, 1, 0)
                }), null)
            }
            var B = l.nb("app-index", c, z, {}, {}, []);
            e.d(t, "AsrModuleNgFactory", (function () {
                return A
            }));
            var A = l.ob(g, [], (function (n) {
                return l.zb([l.Ab(512, l.j, l.Z, [
                    [8, [d.a, B]],
                    [3, l.j], l.w
                ]), l.Ab(4608, p.l, p.k, [l.t, [2, p.y]]), l.Ab(4608, b.i, b.i, []), l.Ab(1073742336, p.b, p.b, []), l.Ab(1073742336, b.h, b.h, []), l.Ab(1073742336, b.c, b.c, []), l.Ab(1073742336, h.l, h.l, [
                    [2, h.q],
                    [2, h.k]
                ]), l.Ab(1073742336, g, g, []), l.Ab(1024, h.i, (function () {
                    return [
                        [{
                            path: "",
                            component: c
                        }]
                    ]
                }), [])])
            }))
        }
    }
]);
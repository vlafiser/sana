function hasScrolled() {
    var t = $(this).scrollTop();
    Math.abs(lastScrollTop - t) <= delta || (t > lastScrollTop && t > navbarHeight ? $nav.removeClass("nav-down").addClass("nav-up") : t + $(window).height() < $(document).height() && $nav.removeClass("nav-up").addClass("nav-down"), 
    lastScrollTop = t);
}

$(document).ready(function() {
    var t = 0;
    $("#nav-mob").swipe({
        tap: function(e, r) {
            1 == ++t ? ($(this).addClass("close"), $(this).parents(".top-bar").addClass("open"), 
            $(this).parents("body").css("overflow", "hidden")) : (t = 0, $(this).removeClass("close"), 
            $(this).parents(".top-bar").removeClass("open"), $(this).parents("body").css("overflow", "visible"));
        },
        threshold: 50
    }), $("#collapList").find("li").click(function() {
        $(this).hasClass("expanded") ? $(this).removeClass("expanded") : $(this).addClass("expanded");
    });
}), function(t) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define([ "jquery" ], t) : t(jQuery);
}(function(t) {
    function e(e) {
        return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = l), 
        void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), 
        this.each(function() {
            var i = t(this), s = i.data(M);
            s || (s = new r(this, e), i.data(M, s));
        });
    }
    function r(e, r) {
        function D(e) {
            if (!(lt() || t(e.target).closest(r.excludedElements, Wt).length > 0)) {
                var i, s = e.originalEvent ? e.originalEvent : e, a = s.touches, n = a ? a[0] : s;
                return Yt = E, a ? qt = a.length : e.preventDefault(), Bt = 0, Rt = null, Ht = null, 
                Nt = 0, Lt = 0, Ot = 0, Gt = 1, jt = 0, Xt = dt(), zt = gt(), ot(), !a || qt === r.fingers || r.fingers === v || z() ? (mt(0, n), 
                Ut = Ct(), 2 == qt && (mt(1, a[1]), Lt = Ot = Et(Xt[0].start, Xt[1].start)), (r.swipeStatus || r.pinchStatus) && (i = B(s, Yt))) : i = !1, 
                !1 === i ? (Yt = P, B(s, Yt), i) : (r.hold && (te = setTimeout(t.proxy(function() {
                    Wt.trigger("hold", [ s.target ]), r.hold && (i = r.hold.call(Wt, s, s.target));
                }, this), r.longTapThreshold)), pt(!0), null);
            }
        }
        function w(t) {
            var e = t.originalEvent ? t.originalEvent : t;
            if (Yt !== k && Yt !== P && !ht()) {
                var i, s = e.touches, a = ft(s ? s[0] : e);
                if ($t = Ct(), s && (qt = s.length), r.hold && clearTimeout(te), Yt = x, 2 == qt && (0 == Lt ? (mt(1, s[1]), 
                Lt = Ot = Et(Xt[0].start, Xt[1].start)) : (ft(s[1]), Ot = Et(Xt[0].end, Xt[1].end), 
                Ht = kt(Xt[0].end, Xt[1].end)), Gt = xt(Lt, Ot), jt = Math.abs(Lt - Ot)), qt === r.fingers || r.fingers === v || !s || z()) {
                    if (Rt = At(a.start, a.end), j(t, Rt), Bt = Pt(a.start, a.end), Nt = bt(), ut(Rt, Bt), 
                    (r.swipeStatus || r.pinchStatus) && (i = B(e, Yt)), !r.triggerOnTouchEnd || r.triggerOnTouchLeave) {
                        var n = !0;
                        if (r.triggerOnTouchLeave) {
                            var o = Mt(this);
                            n = Dt(a.end, o);
                        }
                        !r.triggerOnTouchEnd && n ? Yt = V(x) : r.triggerOnTouchLeave && !n && (Yt = V(k)), 
                        Yt != P && Yt != k || B(e, Yt);
                    }
                } else B(e, Yt = P);
                !1 === i && B(e, Yt = P);
            }
        }
        function _(t) {
            var e = t.originalEvent ? t.originalEvent : t, i = e.touches;
            return i && i.length ? (nt(), !0) : (ht() && (qt = Qt), $t = Ct(), Nt = bt(), L() || !N() ? B(e, Yt = P) : r.triggerOnTouchEnd || 0 == r.triggerOnTouchEnd && Yt === x ? (t.preventDefault(), 
            B(e, Yt = k)) : !r.triggerOnTouchEnd && Z() ? R(e, Yt = k, c) : Yt === x && B(e, Yt = P), 
            pt(!1), null);
        }
        function T() {
            qt = 0, $t = 0, Ut = 0, Lt = 0, Ot = 0, Gt = 1, ot(), pt(!1);
        }
        function F(t) {
            var e = t.originalEvent ? t.originalEvent : t;
            r.triggerOnTouchLeave && B(e, Yt = V(k));
        }
        function I() {
            Wt.unbind(_t, D), Wt.unbind(Vt, T), Wt.unbind(Tt, w), Wt.unbind(Ft, _), It && Wt.unbind(It, F), 
            pt(!1);
        }
        function V(t) {
            var e = t, i = G(), s = N(), a = L();
            return !i || a ? e = P : !s || t != x || r.triggerOnTouchEnd && !r.triggerOnTouchLeave ? !s && t == k && r.triggerOnTouchLeave && (e = P) : e = k, 
            e;
        }
        function B(t, e) {
            var r, i = t.touches;
            return X() || q() || W() || z() ? ((X() || q()) && (r = R(t, e, m)), (W() || z()) && !1 !== r && (r = R(t, e, f))) : st() && !1 !== r ? r = R(t, e, d) : at() && !1 !== r ? r = R(t, e, u) : it() && !1 !== r && (r = R(t, e, c)), 
            e === P && T(t), e === k && (i ? i.length || T(t) : T(t)), r;
        }
        function R(e, l, p) {
            var y;
            if (p == m) {
                if (Wt.trigger("swipeStatus", [ l, Rt || null, Bt || 0, Nt || 0, qt, Xt ]), r.swipeStatus && !1 === (y = r.swipeStatus.call(Wt, e, l, Rt || null, Bt || 0, Nt || 0, qt, Xt))) return !1;
                if (l == k && Y()) {
                    if (Wt.trigger("swipe", [ Rt, Bt, Nt, qt, Xt ]), r.swipe && !1 === (y = r.swipe.call(Wt, e, Rt, Bt, Nt, qt, Xt))) return !1;
                    switch (Rt) {
                      case i:
                        Wt.trigger("swipeLeft", [ Rt, Bt, Nt, qt, Xt ]), r.swipeLeft && (y = r.swipeLeft.call(Wt, e, Rt, Bt, Nt, qt, Xt));
                        break;

                      case s:
                        Wt.trigger("swipeRight", [ Rt, Bt, Nt, qt, Xt ]), r.swipeRight && (y = r.swipeRight.call(Wt, e, Rt, Bt, Nt, qt, Xt));
                        break;

                      case a:
                        Wt.trigger("swipeUp", [ Rt, Bt, Nt, qt, Xt ]), r.swipeUp && (y = r.swipeUp.call(Wt, e, Rt, Bt, Nt, qt, Xt));
                        break;

                      case n:
                        Wt.trigger("swipeDown", [ Rt, Bt, Nt, qt, Xt ]), r.swipeDown && (y = r.swipeDown.call(Wt, e, Rt, Bt, Nt, qt, Xt));
                    }
                }
            }
            if (p == f) {
                if (Wt.trigger("pinchStatus", [ l, Ht || null, jt || 0, Nt || 0, qt, Gt, Xt ]), 
                r.pinchStatus && !1 === (y = r.pinchStatus.call(Wt, e, l, Ht || null, jt || 0, Nt || 0, qt, Gt, Xt))) return !1;
                if (l == k && H()) switch (Ht) {
                  case o:
                    Wt.trigger("pinchIn", [ Ht || null, jt || 0, Nt || 0, qt, Gt, Xt ]), r.pinchIn && (y = r.pinchIn.call(Wt, e, Ht || null, jt || 0, Nt || 0, qt, Gt, Xt));
                    break;

                  case h:
                    Wt.trigger("pinchOut", [ Ht || null, jt || 0, Nt || 0, qt, Gt, Xt ]), r.pinchOut && (y = r.pinchOut.call(Wt, e, Ht || null, jt || 0, Nt || 0, qt, Gt, Xt));
                }
            }
            return p == c ? l !== P && l !== k || (clearTimeout(Kt), clearTimeout(te), Q() && !tt() ? (Jt = Ct(), 
            Kt = setTimeout(t.proxy(function() {
                Jt = null, Wt.trigger("tap", [ e.target ]), r.tap && (y = r.tap.call(Wt, e, e.target));
            }, this), r.doubleTapThreshold)) : (Jt = null, Wt.trigger("tap", [ e.target ]), 
            r.tap && (y = r.tap.call(Wt, e, e.target)))) : p == d ? l !== P && l !== k || (clearTimeout(Kt), 
            Jt = null, Wt.trigger("doubletap", [ e.target ]), r.doubleTap && (y = r.doubleTap.call(Wt, e, e.target))) : p == u && (l !== P && l !== k || (clearTimeout(Kt), 
            Jt = null, Wt.trigger("longtap", [ e.target ]), r.longTap && (y = r.longTap.call(Wt, e, e.target)))), 
            y;
        }
        function N() {
            var t = !0;
            return null !== r.threshold && (t = Bt >= r.threshold), t;
        }
        function L() {
            var t = !1;
            return null !== r.cancelThreshold && null !== Rt && (t = yt(Rt) - Bt >= r.cancelThreshold), 
            t;
        }
        function O() {
            return null === r.pinchThreshold || jt >= r.pinchThreshold;
        }
        function G() {
            return !r.maxTimeThreshold || !(Nt >= r.maxTimeThreshold);
        }
        function j(t, e) {
            if (!1 !== r.preventDefaultEvents) if (r.allowPageScroll === l) t.preventDefault(); else {
                var o = r.allowPageScroll === p;
                switch (e) {
                  case i:
                    (r.swipeLeft && o || !o && r.allowPageScroll != y) && t.preventDefault();
                    break;

                  case s:
                    (r.swipeRight && o || !o && r.allowPageScroll != y) && t.preventDefault();
                    break;

                  case a:
                    (r.swipeUp && o || !o && r.allowPageScroll != g) && t.preventDefault();
                    break;

                  case n:
                    (r.swipeDown && o || !o && r.allowPageScroll != g) && t.preventDefault();
                }
            }
        }
        function H() {
            var t = U(), e = $(), r = O();
            return t && e && r;
        }
        function z() {
            return !!(r.pinchStatus || r.pinchIn || r.pinchOut);
        }
        function W() {
            return !(!H() || !z());
        }
        function Y() {
            var t = G(), e = N(), r = U(), i = $();
            return !L() && i && r && e && t;
        }
        function q() {
            return !!(r.swipe || r.swipeStatus || r.swipeLeft || r.swipeRight || r.swipeUp || r.swipeDown);
        }
        function X() {
            return !(!Y() || !q());
        }
        function U() {
            return qt === r.fingers || r.fingers === v || !S;
        }
        function $() {
            return 0 !== Xt[0].end.x;
        }
        function Z() {
            return !!r.tap;
        }
        function Q() {
            return !!r.doubleTap;
        }
        function J() {
            return !!r.longTap;
        }
        function K() {
            if (null == Jt) return !1;
            var t = Ct();
            return Q() && t - Jt <= r.doubleTapThreshold;
        }
        function tt() {
            return K();
        }
        function et() {
            return (1 === qt || !S) && (isNaN(Bt) || Bt < r.threshold);
        }
        function rt() {
            return Nt > r.longTapThreshold && Bt < b;
        }
        function it() {
            return !(!et() || !Z());
        }
        function st() {
            return !(!K() || !Q());
        }
        function at() {
            return !(!rt() || !J());
        }
        function nt() {
            Zt = Ct(), Qt = event.touches.length + 1;
        }
        function ot() {
            Zt = 0, Qt = 0;
        }
        function ht() {
            var t = !1;
            return Zt && Ct() - Zt <= r.fingerReleaseThreshold && (t = !0), t;
        }
        function lt() {
            return !(!0 !== Wt.data(M + "_intouch"));
        }
        function pt(t) {
            !0 === t ? (Wt.bind(Tt, w), Wt.bind(Ft, _), It && Wt.bind(It, F)) : (Wt.unbind(Tt, w, !1), 
            Wt.unbind(Ft, _, !1), It && Wt.unbind(It, F, !1)), Wt.data(M + "_intouch", !0 === t);
        }
        function mt(t, e) {
            var r = void 0 !== e.identifier ? e.identifier : 0;
            return Xt[t].identifier = r, Xt[t].start.x = Xt[t].end.x = e.pageX || e.clientX, 
            Xt[t].start.y = Xt[t].end.y = e.pageY || e.clientY, Xt[t];
        }
        function ft(t) {
            var e = ct(void 0 !== t.identifier ? t.identifier : 0);
            return e.end.x = t.pageX || t.clientX, e.end.y = t.pageY || t.clientY, e;
        }
        function ct(t) {
            for (var e = 0; e < Xt.length; e++) if (Xt[e].identifier == t) return Xt[e];
        }
        function dt() {
            for (var t = [], e = 0; e <= 5; e++) t.push({
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                identifier: 0
            });
            return t;
        }
        function ut(t, e) {
            e = Math.max(e, yt(t)), zt[t].distance = e;
        }
        function yt(t) {
            if (zt[t]) return zt[t].distance;
        }
        function gt() {
            var t = {};
            return t[i] = vt(i), t[s] = vt(s), t[a] = vt(a), t[n] = vt(n), t;
        }
        function vt(t) {
            return {
                direction: t,
                distance: 0
            };
        }
        function bt() {
            return $t - Ut;
        }
        function Et(t, e) {
            var r = Math.abs(t.x - e.x), i = Math.abs(t.y - e.y);
            return Math.round(Math.sqrt(r * r + i * i));
        }
        function xt(t, e) {
            return (e / t * 1).toFixed(2);
        }
        function kt() {
            return Gt < 1 ? h : o;
        }
        function Pt(t, e) {
            return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)));
        }
        function St(t, e) {
            var r = t.x - e.x, i = e.y - t.y, s = Math.atan2(i, r), a = Math.round(180 * s / Math.PI);
            return a < 0 && (a = 360 - Math.abs(a)), a;
        }
        function At(t, e) {
            var r = St(t, e);
            return r <= 45 && r >= 0 ? i : r <= 360 && r >= 315 ? i : r >= 135 && r <= 225 ? s : r > 45 && r < 135 ? n : a;
        }
        function Ct() {
            return new Date().getTime();
        }
        function Mt(e) {
            var r = (e = t(e)).offset();
            return {
                left: r.left,
                right: r.left + e.outerWidth(),
                top: r.top,
                bottom: r.top + e.outerHeight()
            };
        }
        function Dt(t, e) {
            return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
        }
        var wt = S || C || !r.fallbackToMouseEvents, _t = wt ? C ? A ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", Tt = wt ? C ? A ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", Ft = wt ? C ? A ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", It = wt ? null : "mouseleave", Vt = C ? A ? "MSPointerCancel" : "pointercancel" : "touchcancel", Bt = 0, Rt = null, Nt = 0, Lt = 0, Ot = 0, Gt = 1, jt = 0, Ht = 0, zt = null, Wt = t(e), Yt = "start", qt = 0, Xt = null, Ut = 0, $t = 0, Zt = 0, Qt = 0, Jt = 0, Kt = null, te = null;
        try {
            Wt.bind(_t, D), Wt.bind(Vt, T);
        } catch (e) {
            t.error("events not supported " + _t + "," + Vt + " on jQuery.swipe");
        }
        this.enable = function() {
            return Wt.bind(_t, D), Wt.bind(Vt, T), Wt;
        }, this.disable = function() {
            return I(), Wt;
        }, this.destroy = function() {
            I(), Wt.data(M, null), Wt = null;
        }, this.option = function(e, i) {
            if (void 0 !== r[e]) {
                if (void 0 === i) return r[e];
                r[e] = i;
            } else t.error("Option " + e + " does not exist on jQuery.swipe.options");
            return null;
        };
    }
    var i = "left", s = "right", a = "up", n = "down", o = "in", h = "out", l = "none", p = "auto", m = "swipe", f = "pinch", c = "tap", d = "doubletap", u = "longtap", y = "horizontal", g = "vertical", v = "all", b = 10, E = "start", x = "move", k = "end", P = "cancel", S = "ontouchstart" in window, A = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, C = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, M = "TouchSwipe", D = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: !0
    };
    t.fn.swipe = function(r) {
        var i = t(this), s = i.data(M);
        if (s && "string" == typeof r) {
            if (s[r]) return s[r].apply(this, Array.prototype.slice.call(arguments, 1));
            t.error("Method " + r + " does not exist on jQuery.swipe");
        } else if (!(s || "object" != typeof r && r)) return e.apply(this, arguments);
        return i;
    }, t.fn.swipe.version = "1.6.9", t.fn.swipe.defaults = D, t.fn.swipe.phases = {
        PHASE_START: E,
        PHASE_MOVE: x,
        PHASE_END: k,
        PHASE_CANCEL: P
    }, t.fn.swipe.directions = {
        LEFT: i,
        RIGHT: s,
        UP: a,
        DOWN: n,
        IN: o,
        OUT: h
    }, t.fn.swipe.pageScroll = {
        NONE: l,
        HORIZONTAL: y,
        VERTICAL: g,
        AUTO: p
    }, t.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: v
    };
});

var $nav = $(".top-bar"), didScroll, lastScrollTop = 0, delta = 5, navbarHeight = $nav.outerHeight();

$(window).scroll(function(t) {
    didScroll = !0;
}), setInterval(function() {
    didScroll && (hasScrolled(), didScroll = !1);
}, 250), function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof module && module.exports ? module.exports = e() : t.bodymovin = e();
}(window, function() {
    function ProjectInterface() {
        return {};
    }
    function roundValues(t) {
        bm_rnd = t ? Math.round : function(t) {
            return t;
        };
    }
    function roundTo2Decimals(t) {
        return Math.round(1e4 * t) / 1e4;
    }
    function roundTo3Decimals(t) {
        return Math.round(100 * t) / 100;
    }
    function styleDiv(t) {
        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", 
        t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", 
        t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d";
    }
    function styleUnselectableDiv(t) {
        t.style.userSelect = "none", t.style.MozUserSelect = "none", t.style.webkitUserSelect = "none", 
        t.style.oUserSelect = "none";
    }
    function BMEnterFrameEvent(t, e, r, i) {
        this.type = t, this.currentTime = e, this.totalTime = r, this.direction = 0 > i ? -1 : 1;
    }
    function BMCompleteEvent(t, e) {
        this.type = t, this.direction = 0 > e ? -1 : 1;
    }
    function BMCompleteLoopEvent(t, e, r, i) {
        this.type = t, this.currentLoop = e, this.totalLoops = r, this.direction = 0 > i ? -1 : 1;
    }
    function BMSegmentStartEvent(t, e, r) {
        this.type = t, this.firstFrame = e, this.totalFrames = r;
    }
    function BMDestroyEvent(t, e) {
        this.type = t, this.target = e;
    }
    function _addEventListener(t, e) {
        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function() {
            this.removeEventListener(t, e);
        }.bind(this);
    }
    function _removeEventListener(t, e) {
        if (e) {
            if (this._cbs[t]) {
                for (var r = 0, i = this._cbs[t].length; i > r; ) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), 
                r -= 1, i -= 1), r += 1;
                this._cbs[t].length || (this._cbs[t] = null);
            }
        } else this._cbs[t] = null;
    }
    function _triggerEvent(t, e) {
        if (this._cbs[t]) for (var r = this._cbs[t].length, i = 0; r > i; i++) this._cbs[t][i](e);
    }
    function randomString(t, e) {
        void 0 === e && (e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
        var r, i = "";
        for (r = t; r > 0; --r) i += e[Math.round(Math.random() * (e.length - 1))];
        return i;
    }
    function HSVtoRGB(t, e, r) {
        var i, s, a, n, o, h, l, p;
        switch (1 === arguments.length && (e = t.s, r = t.v, t = t.h), n = Math.floor(6 * t), 
        o = 6 * t - n, h = r * (1 - e), l = r * (1 - o * e), p = r * (1 - (1 - o) * e), 
        n % 6) {
          case 0:
            i = r, s = p, a = h;
            break;

          case 1:
            i = l, s = r, a = h;
            break;

          case 2:
            i = h, s = r, a = p;
            break;

          case 3:
            i = h, s = l, a = r;
            break;

          case 4:
            i = p, s = h, a = r;
            break;

          case 5:
            i = r, s = h, a = l;
        }
        return [ i, s, a ];
    }
    function RGBtoHSV(t, e, r) {
        1 === arguments.length && (e = t.g, r = t.b, t = t.r);
        var i, s = Math.max(t, e, r), a = Math.min(t, e, r), n = s - a, o = 0 === s ? 0 : n / s, h = s / 255;
        switch (s) {
          case a:
            i = 0;
            break;

          case t:
            i = e - r + n * (r > e ? 6 : 0), i /= 6 * n;
            break;

          case e:
            i = r - t + 2 * n, i /= 6 * n;
            break;

          case r:
            i = t - e + 4 * n, i /= 6 * n;
        }
        return [ i, o, h ];
    }
    function addSaturationToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addBrightnessToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addHueToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
    }
    function componentToHex(t) {
        var e = t.toString(16);
        return 1 == e.length ? "0" + e : e;
    }
    function fillToRgba(t, e) {
        if (!cachedColors[t]) {
            var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            cachedColors[t] = parseInt(r[1], 16) + "," + parseInt(r[2], 16) + "," + parseInt(r[3], 16);
        }
        return "rgba(" + cachedColors[t] + "," + e + ")";
    }
    function RenderedFrame(t, e) {
        this.tr = t, this.o = e;
    }
    function LetterProps(t, e, r, i, s, a) {
        this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.props = a;
    }
    function iterateDynamicProperties(t) {
        var e, r = this.dynamicProperties;
        for (e = 0; r > e; e += 1) this.dynamicProperties[e].getValue(t);
    }
    function reversePath(t) {
        var e, r, i = [], s = [], a = [], n = {}, o = 0;
        t.c && (i[0] = t.o[0], s[0] = t.i[0], a[0] = t.v[0], o = 1);
        var h = (r = t.i.length) - 1;
        for (e = o; r > e; e += 1) i.push(t.o[h]), s.push(t.i[h]), a.push(t.v[h]), h -= 1;
        return n.i = i, n.o = s, n.v = a, n;
    }
    function Matrix() {}
    function matrixManagerFunction() {
        var t = new Matrix(), e = function(e, r, i, s, a) {
            return t.reset().translate(s, a).rotate(e).scale(r, i).toCSS();
        };
        return {
            getMatrix: function(t) {
                return e(t.tr.r[2], t.tr.s[0], t.tr.s[1], t.tr.p[0], t.tr.p[1]);
            }
        };
    }
    function createElement(t, e, r) {
        if (!e) {
            var i = Object.create(t.prototype, r), s = {};
            return i && "[object Function]" === s.toString.call(i.init) && i.init(), i;
        }
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.prototype._parent = t.prototype;
    }
    function extendPrototype(t, e) {
        for (var r in t.prototype) t.prototype.hasOwnProperty(r) && (e.prototype[r] = t.prototype[r]);
    }
    function bezFunction() {
        function t(t, e, r, i, s, a) {
            var n = t * i + e * s + r * a - s * i - a * t - r * e;
            return n > -1e-4 && 1e-4 > n;
        }
        function e(t, e, r, i, s, a, n, o, h) {
            var l, p = Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - e, 2) + Math.pow(a - r, 2)), m = Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - e, 2) + Math.pow(h - r, 2)), f = Math.sqrt(Math.pow(n - i, 2) + Math.pow(o - s, 2) + Math.pow(h - a, 2));
            return (l = p > m ? p > f ? p - m - f : f - m - p : f > m ? f - m - p : m - p - f) > -1e-4 && 1e-4 > l;
        }
        function r(t) {
            this.segmentLength = 0, this.points = new Array(t);
        }
        function i(t, e) {
            this.partialLength = t, this.point = e;
        }
        function s(t, e) {
            var r = e.segments, i = r.length, s = bm_floor((i - 1) * t), a = t * e.addedLength, n = 0;
            if (a == r[s].l) return r[s].p;
            for (var o = r[s].l > a ? -1 : 1, h = !0; h; ) r[s].l <= a && r[s + 1].l > a ? (n = (a - r[s].l) / (r[s + 1].l - r[s].l), 
            h = !1) : s += o, (0 > s || s >= i - 1) && (h = !1);
            return r[s].p + (r[s + 1].p - r[s].p) * n;
        }
        function a() {
            this.pt1 = new Array(2), this.pt2 = new Array(2), this.pt3 = new Array(2), this.pt4 = new Array(2);
        }
        function n(t, e, r, i, n, o, h) {
            var l, p = new a(), m = s(n = 0 > n ? 0 : n > 1 ? 1 : n, h), f = s(o = o > 1 ? 1 : o, h), c = t.length, d = 1 - m, u = 1 - f;
            for (l = 0; c > l; l += 1) p.pt1[l] = Math.round(1e3 * (d * d * d * t[l] + (m * d * d + d * m * d + d * d * m) * r[l] + (m * m * d + d * m * m + m * d * m) * i[l] + m * m * m * e[l])) / 1e3, 
            p.pt3[l] = Math.round(1e3 * (d * d * u * t[l] + (m * d * u + d * m * u + d * d * f) * r[l] + (m * m * u + d * m * f + m * d * f) * i[l] + m * m * f * e[l])) / 1e3, 
            p.pt4[l] = Math.round(1e3 * (d * u * u * t[l] + (m * u * u + d * f * u + d * u * f) * r[l] + (m * f * u + d * f * f + m * u * f) * i[l] + m * f * f * e[l])) / 1e3, 
            p.pt2[l] = Math.round(1e3 * (u * u * u * t[l] + (f * u * u + u * f * u + u * u * f) * r[l] + (f * f * u + u * f * f + f * u * f) * i[l] + f * f * f * e[l])) / 1e3;
            return p;
        }
        return {
            getBezierLength: (Math, function() {
                function t(t, e) {
                    this.l = t, this.p = e;
                }
                return function(e, r, i, s) {
                    var a, n, o, h, l, p, m = defaultCurveSegments, f = 0, c = [], d = [], u = {
                        addedLength: 0,
                        segments: []
                    };
                    for (o = i.length, a = 0; m > a; a += 1) {
                        for (l = a / (m - 1), p = 0, n = 0; o > n; n += 1) h = bm_pow(1 - l, 3) * e[n] + 3 * bm_pow(1 - l, 2) * l * i[n] + 3 * (1 - l) * bm_pow(l, 2) * s[n] + bm_pow(l, 3) * r[n], 
                        c[n] = h, null !== d[n] && (p += bm_pow(c[n] - d[n], 2)), d[n] = c[n];
                        p && (p = bm_sqrt(p), f += p), u.segments.push(new t(f, l));
                    }
                    return u.addedLength = f, u;
                };
            }()),
            getNewSegment: n,
            buildBezierData: function() {
                var e = {};
                return function(s) {
                    var a = s.s, n = s.e, o = s.to, h = s.ti, l = (a.join("_") + "_" + n.join("_") + "_" + o.join("_") + "_" + h.join("_")).replace(/\./g, "p");
                    if (e[l]) s.bezierData = e[l]; else {
                        var p, m, f, c, d, u, y, g = defaultCurveSegments, v = 0, b = null;
                        2 === a.length && (a[0] != n[0] || a[1] != n[1]) && t(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && t(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) && (g = 2);
                        var E = new r(g);
                        for (f = o.length, p = 0; g > p; p += 1) {
                            for (y = new Array(f), d = p / (g - 1), u = 0, m = 0; f > m; m += 1) c = bm_pow(1 - d, 3) * a[m] + 3 * bm_pow(1 - d, 2) * d * (a[m] + o[m]) + 3 * (1 - d) * bm_pow(d, 2) * (n[m] + h[m]) + bm_pow(d, 3) * n[m], 
                            y[m] = c, null !== b && (u += bm_pow(y[m] - b[m], 2));
                            v += u = bm_sqrt(u), E.points[p] = new i(u, y), b = y;
                        }
                        E.segmentLength = v, s.bezierData = E, e[l] = E;
                    }
                };
            }(),
            pointOnLine2D: t,
            pointOnLine3D: e
        };
    }
    function dataFunctionManager() {
        function t(s, a, o) {
            var h, l, p, m, f, c, d = s.length;
            for (l = 0; d > l; l += 1) if ("ks" in (h = s[l]) && !h.completed) {
                if (h.completed = !0, h.tt && (s[l - 1].td = h.tt), [], -1, h.hasMask) {
                    var u = h.masksProperties;
                    for (m = u.length, p = 0; m > p; p += 1) if (u[p].pt.k.i) i(u[p].pt.k); else for (c = u[p].pt.k.length, 
                    f = 0; c > f; f += 1) u[p].pt.k[f].s && i(u[p].pt.k[f].s[0]), u[p].pt.k[f].e && i(u[p].pt.k[f].e[0]);
                }
                0 === h.ty ? (h.layers = e(h.refId, a), t(h.layers, a, o)) : 4 === h.ty ? r(h.shapes) : 5 == h.ty && n(h, o);
            }
        }
        function e(t, e) {
            for (var r = 0, i = e.length; i > r; ) {
                if (e[r].id === t) return e[r].layers;
                r += 1;
            }
        }
        function r(t) {
            var e, s, a;
            for (e = t.length - 1; e >= 0; e -= 1) if ("sh" == t[e].ty) {
                if (t[e].ks.k.i) i(t[e].ks.k); else for (a = t[e].ks.k.length, s = 0; a > s; s += 1) t[e].ks.k[s].s && i(t[e].ks.k[s].s[0]), 
                t[e].ks.k[s].e && i(t[e].ks.k[s].e[0]);
                !0;
            } else "gr" == t[e].ty && r(t[e].it);
        }
        function i(t) {
            var e, r = t.i.length;
            for (e = 0; r > e; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], 
            t.o[e][1] += t.v[e][1];
        }
        function s(t, e) {
            var r = e ? e.split(".") : [ 100, 100, 100 ];
            return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && void 0));
        }
        function a(e, r) {
            e.__complete || (h(e), o(e), l(e), t(e.layers, e.assets, r), e.__complete = !0);
        }
        function n(t, e) {
            var r, i, s = t.t.d.k.length;
            for (i = 0; s > i; i += 1) {
                var a = t.t.d.k[i].s;
                r = [];
                var n, o, h, l, p, m, f, c = 0, d = t.t.m.g, u = 0, y = 0, g = 0, v = [], b = 0, E = 0, x = e.getFontByName(a.f), k = 0, P = x.fStyle.split(" "), S = "normal", A = "normal";
                for (o = P.length, n = 0; o > n; n += 1) "italic" === P[n].toLowerCase() ? A = "italic" : "bold" === P[n].toLowerCase() ? S = "700" : "black" === P[n].toLowerCase() ? S = "900" : "medium" === P[n].toLowerCase() ? S = "500" : "regular" === P[n].toLowerCase() || "normal" === P[n].toLowerCase() ? S = "400" : ("light" === P[n].toLowerCase() || "thin" === P[n].toLowerCase()) && (S = "200");
                if (a.fWeight = S, a.fStyle = A, o = a.t.length, a.sz) {
                    var C = a.sz[0], M = -1;
                    for (n = 0; o > n; n += 1) h = !1, " " === a.t.charAt(n) ? M = n : 13 === a.t.charCodeAt(n) && (b = 0, 
                    h = !0), e.chars ? (f = e.getCharData(a.t.charAt(n), x.fStyle, x.fFamily), k = h ? 0 : f.w * a.s / 100) : k = e.measureText(a.t.charAt(n), a.f, a.s), 
                    b + k > C ? (-1 === M ? (a.t = a.t.substr(0, n) + "\r" + a.t.substr(n), o += 1) : (n = M, 
                    a.t = a.t.substr(0, n) + "\r" + a.t.substr(n + 1)), M = -1, b = 0) : b += k;
                    o = a.t.length;
                }
                for (b = 0, k = 0, n = 0; o > n; n += 1) if (h = !1, " " === a.t.charAt(n) ? l = " " : 13 === a.t.charCodeAt(n) ? (v.push(b), 
                E = b > E ? b : E, b = 0, l = "", h = !0, g += 1) : l = a.t.charAt(n), e.chars ? (f = e.getCharData(a.t.charAt(n), x.fStyle, e.getFontByName(a.f).fFamily), 
                k = h ? 0 : f.w * a.s / 100) : k = e.measureText(l, a.f, a.s), b += k, r.push({
                    l: k,
                    an: k,
                    add: u,
                    n: h,
                    anIndexes: [],
                    val: l,
                    line: g
                }), 2 == d) {
                    if (u += k, "" == l || " " == l || n == o - 1) {
                        for (("" == l || " " == l) && (u -= k); n >= y; ) r[y].an = u, r[y].ind = c, r[y].extra = k, 
                        y += 1;
                        c += 1, u = 0;
                    }
                } else if (3 == d) {
                    if (u += k, "" == l || n == o - 1) {
                        for ("" == l && (u -= k); n >= y; ) r[y].an = u, r[y].ind = c, r[y].extra = k, y += 1;
                        u = 0, c += 1;
                    }
                } else r[c].ind = c, r[c].extra = 0, c += 1;
                if (a.l = r, E = b > E ? b : E, v.push(b), a.sz) a.boxWidth = a.sz[0], a.justifyOffset = 0; else switch (a.boxWidth = E, 
                a.j) {
                  case 1:
                    a.justifyOffset = -a.boxWidth;
                    break;

                  case 2:
                    a.justifyOffset = -a.boxWidth / 2;
                    break;

                  default:
                    a.justifyOffset = 0;
                }
                a.lineWidths = v;
                var D = t.t.a;
                m = D.length;
                var w, _, T = [];
                for (p = 0; m > p; p += 1) {
                    for (D[p].a.sc && (a.strokeColorAnim = !0), D[p].a.sw && (a.strokeWidthAnim = !0), 
                    (D[p].a.fc || D[p].a.fh || D[p].a.fs || D[p].a.fb) && (a.fillColorAnim = !0), _ = 0, 
                    w = D[p].s.b, n = 0; o > n; n += 1) r[n].anIndexes[p] = _, (1 == w && "" != r[n].val || 2 == w && "" != r[n].val && " " != r[n].val || 3 == w && (r[n].n || " " == r[n].val || n == o - 1) || 4 == w && (r[n].n || n == o - 1)) && (1 === D[p].s.rn && T.push(_), 
                    _ += 1);
                    t.t.a[p].s.totalChars = _;
                    var F, I = -1;
                    if (1 === D[p].s.rn) for (n = 0; o > n; n += 1) I != r[n].anIndexes[p] && (I = r[n].anIndexes[p], 
                    F = T.splice(Math.floor(Math.random() * T.length), 1)[0]), r[n].anIndexes[p] = F;
                }
                0 !== m || "m" in t.t.p || (t.singleShape = !0), a.yOffset = a.lh || 1.2 * a.s, 
                a.ls = a.ls || 0, a.ascent = x.ascent * a.s / 100;
            }
        }
        var o = function() {
            function t(t) {
                var e = t.t.d;
                t.t.d = {
                    k: [ {
                        s: e,
                        t: 0
                    } ]
                };
            }
            function e(e) {
                var r, i = e.length;
                for (r = 0; i > r; r += 1) 5 === e[r].ty && t(e[r]);
            }
            var r = [ 4, 4, 14 ];
            return function(t) {
                if (s(r, t.v) && (e(t.layers), t.assets)) {
                    var i, a = t.assets.length;
                    for (i = 0; a > i; i += 1) t.assets[i].layers && e(t.assets[i].layers);
                }
            };
        }(), h = function() {
            function t(e) {
                var r, i, s, a = e.length;
                for (r = 0; a > r; r += 1) if ("gr" === e[r].ty) t(e[r].it); else if ("fl" === e[r].ty || "st" === e[r].ty) if (e[r].c.k && e[r].c.k[0].i) for (s = e[r].c.k.length, 
                i = 0; s > i; i += 1) e[r].c.k[i].s && (e[r].c.k[i].s[0] /= 255, e[r].c.k[i].s[1] /= 255, 
                e[r].c.k[i].s[2] /= 255, e[r].c.k[i].s[3] /= 255), e[r].c.k[i].e && (e[r].c.k[i].e[0] /= 255, 
                e[r].c.k[i].e[1] /= 255, e[r].c.k[i].e[2] /= 255, e[r].c.k[i].e[3] /= 255); else e[r].c.k[0] /= 255, 
                e[r].c.k[1] /= 255, e[r].c.k[2] /= 255, e[r].c.k[3] /= 255;
            }
            function e(e) {
                var r, i = e.length;
                for (r = 0; i > r; r += 1) 4 === e[r].ty && t(e[r].shapes);
            }
            var r = [ 4, 1, 9 ];
            return function(t) {
                if (s(r, t.v) && (e(t.layers), t.assets)) {
                    var i, a = t.assets.length;
                    for (i = 0; a > i; i += 1) t.assets[i].layers && e(t.assets[i].layers);
                }
            };
        }(), l = function() {
            function t(e) {
                var r, i, s;
                for (r = e.length - 1; r >= 0; r -= 1) if ("sh" == e[r].ty) {
                    if (e[r].ks.k.i) e[r].ks.k.c = e[r].closed; else for (s = e[r].ks.k.length, i = 0; s > i; i += 1) e[r].ks.k[i].s && (e[r].ks.k[i].s[0].c = e[r].closed), 
                    e[r].ks.k[i].e && (e[r].ks.k[i].e[0].c = e[r].closed);
                    !0;
                } else "gr" == e[r].ty && t(e[r].it);
            }
            function e(e) {
                var r, i, s, a, n, o, h = e.length;
                for (i = 0; h > i; i += 1) {
                    if ((r = e[i]).hasMask) {
                        var l = r.masksProperties;
                        for (a = l.length, s = 0; a > s; s += 1) if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl; else for (o = l[s].pt.k.length, 
                        n = 0; o > n; n += 1) l[s].pt.k[n].s && (l[s].pt.k[n].s[0].c = l[s].cl), l[s].pt.k[n].e && (l[s].pt.k[n].e[0].c = l[s].cl);
                    }
                    4 === r.ty && t(r.shapes);
                }
            }
            var r = [ 4, 4, 18 ];
            return function(t) {
                if (s(r, t.v) && (e(t.layers), t.assets)) {
                    var i, a = t.assets.length;
                    for (i = 0; a > i; i += 1) t.assets[i].layers && e(t.assets[i].layers);
                }
            };
        }(), p = {};
        return p.completeData = a, p;
    }
    function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = Array.apply(null, {
            length: this._maxLength
        }), this.o = Array.apply(null, {
            length: this._maxLength
        }), this.i = Array.apply(null, {
            length: this._maxLength
        });
    }
    function ShapeModifier() {}
    function TrimModifier() {}
    function RoundCornersModifier() {}
    function RepeaterModifier() {}
    function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = Array.apply(null, {
            length: this._maxLength
        });
    }
    function BaseRenderer() {}
    function SVGRenderer(t, e) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            progressiveLoad: e && e.progressiveLoad || !1
        }, this.elements = [], this.pendingElements = [], this.destroyed = !1;
    }
    function MaskElement(t, e, r) {
        this.dynamicProperties = [], this.data = t, this.element = e, this.globalData = r, 
        this.paths = [], this.storedData = [], this.masksProperties = this.data.masksProperties, 
        this.viewData = new Array(this.masksProperties.length), this.maskElement = null, 
        this.firstFrame = !0;
        var i, s, a, n, o, h, l, p, m = this.globalData.defs, f = this.masksProperties.length, c = this.masksProperties, d = 0, u = [], y = randomString(10), g = "clipPath", v = "clip-path";
        for (i = 0; f > i; i++) if (("a" !== c[i].mode && "n" !== c[i].mode || c[i].inv || 100 !== c[i].o.k) && (g = "mask", 
        v = "mask"), "s" != c[i].mode && "i" != c[i].mode || 0 != d ? o = null : ((o = document.createElementNS(svgNS, "rect")).setAttribute("fill", "#ffffff"), 
        o.setAttribute("width", this.element.comp.data.w), o.setAttribute("height", this.element.comp.data.h), 
        u.push(o)), s = document.createElementNS(svgNS, "path"), "n" != c[i].mode) {
            if (d += 1, "s" == c[i].mode ? s.setAttribute("fill", "#000000") : s.setAttribute("fill", "#ffffff"), 
            s.setAttribute("clip-rule", "nonzero"), 0 !== c[i].x.k) {
                g = "mask", v = "mask", p = PropertyFactory.getProp(this.element, c[i].x, 0, null, this.dynamicProperties);
                var b = "fi_" + randomString(10);
                (h = document.createElementNS(svgNS, "filter")).setAttribute("id", b), (l = document.createElementNS(svgNS, "feMorphology")).setAttribute("operator", "dilate"), 
                l.setAttribute("in", "SourceGraphic"), l.setAttribute("radius", "0"), h.appendChild(l), 
                m.appendChild(h), "s" == c[i].mode ? s.setAttribute("stroke", "#000000") : s.setAttribute("stroke", "#ffffff");
            } else l = null, p = null;
            if (this.storedData[i] = {
                elem: s,
                x: p,
                expan: l,
                lastPath: "",
                lastOperator: "",
                filterId: b,
                lastRadius: 0
            }, "i" == c[i].mode) {
                n = u.length;
                var E = document.createElementNS(svgNS, "g");
                for (a = 0; n > a; a += 1) E.appendChild(u[a]);
                var x = document.createElementNS(svgNS, "mask");
                x.setAttribute("mask-type", "alpha"), x.setAttribute("id", y + "_" + d), x.appendChild(s), 
                m.appendChild(x), E.setAttribute("mask", "url(#" + y + "_" + d + ")"), u.length = 0, 
                u.push(E);
            } else u.push(s);
            c[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                elem: s,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.dynamicProperties),
                prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3, this.dynamicProperties, null)
            }, o && (this.viewData[i].invRect = o), this.viewData[i].prop.k || this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i]);
        } else this.viewData[i] = {
            op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.dynamicProperties),
            prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3, this.dynamicProperties, null),
            elem: s
        }, m.appendChild(s);
        for (this.maskElement = document.createElementNS(svgNS, g), f = u.length, i = 0; f > i; i += 1) this.maskElement.appendChild(u[i]);
        this.maskElement.setAttribute("id", y), d > 0 && this.element.maskedElement.setAttribute(v, "url(#" + y + ")"), 
        m.appendChild(this.maskElement);
    }
    function BaseElement() {}
    function SVGBaseElement(t, e, r, i, s) {
        this.globalData = r, this.comp = i, this.data = t, this.matteElement = null, this.transformedElement = null, 
        this.parentContainer = e, this.layerId = s ? s.layerId : "ly_" + randomString(10), 
        this.placeholder = s, this.init();
    }
    function ITextElement(t, e, r, i) {}
    function SVGTextElement(t, e, r, i, s) {
        this.textSpans = [], this.renderType = "svg", this._parent.constructor.call(this, t, e, r, i, s);
    }
    function SVGTintFilter(t, e) {
        this.filterManager = e;
        var r = document.createElementNS(svgNS, "feColorMatrix");
        if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), 
        r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), 
        r.setAttribute("result", "f1"), t.appendChild(r), (r = document.createElementNS(svgNS, "feColorMatrix")).setAttribute("type", "matrix"), 
        r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), 
        r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
            var i = document.createElementNS(svgNS, "feMerge");
            t.appendChild(i);
            var s;
            (s = document.createElementNS(svgNS, "feMergeNode")).setAttribute("in", "SourceGraphic"), 
            i.appendChild(s), (s = document.createElementNS(svgNS, "feMergeNode")).setAttribute("in", "f2"), 
            i.appendChild(s);
        }
    }
    function SVGFillFilter(t, e) {
        this.filterManager = e;
        var r = document.createElementNS(svgNS, "feColorMatrix");
        r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), 
        r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), 
        this.matrixFilter = r;
    }
    function SVGStrokeEffect(t, e) {
        this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = [];
    }
    function SVGTritoneFilter(t, e) {
        this.filterManager = e;
        var r = document.createElementNS(svgNS, "feColorMatrix");
        r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), 
        r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), 
        r.setAttribute("result", "f1"), t.appendChild(r);
        var i = document.createElementNS(svgNS, "feComponentTransfer");
        i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
        var s = document.createElementNS(svgNS, "feFuncR");
        s.setAttribute("type", "table"), i.appendChild(s), this.feFuncR = s;
        var a = document.createElementNS(svgNS, "feFuncG");
        a.setAttribute("type", "table"), i.appendChild(a), this.feFuncG = a;
        var n = document.createElementNS(svgNS, "feFuncB");
        n.setAttribute("type", "table"), i.appendChild(n), this.feFuncB = n;
    }
    function SVGProLevelsFilter(t, e) {
        this.filterManager = e;
        var r = this.filterManager.effectElements, i = document.createElementNS(svgNS, "feComponentTransfer");
        (r[9].p.k || 0 !== r[9].p.v || r[10].p.k || 1 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 0 !== r[12].p.v || r[13].p.k || 1 !== r[13].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), 
        (r[16].p.k || 0 !== r[16].p.v || r[17].p.k || 1 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 0 !== r[19].p.v || r[20].p.k || 1 !== r[20].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), 
        (r[23].p.k || 0 !== r[23].p.v || r[24].p.k || 1 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 0 !== r[26].p.v || r[27].p.k || 1 !== r[27].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), 
        (r[30].p.k || 0 !== r[30].p.v || r[31].p.k || 1 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 0 !== r[33].p.v || r[34].p.k || 1 !== r[34].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), 
        (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), 
        t.appendChild(i), i = document.createElementNS(svgNS, "feComponentTransfer")), (r[2].p.k || 0 !== r[2].p.v || r[3].p.k || 1 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 0 !== r[5].p.v || r[6].p.k || 1 !== r[6].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), 
        t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), 
        this.feFuncBComposed = this.createFeFunc("feFuncB", i));
    }
    function SVGDropShadowEffect(t, e) {
        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), 
        t.setAttribute("height", "400%"), this.filterManager = e;
        var r = document.createElementNS(svgNS, "feGaussianBlur");
        r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), 
        r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
        var i = document.createElementNS(svgNS, "feOffset");
        i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), 
        i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i);
        var s = document.createElementNS(svgNS, "feFlood");
        s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), 
        s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s);
        var a = document.createElementNS(svgNS, "feComposite");
        a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), 
        a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
        var n = document.createElementNS(svgNS, "feMerge");
        t.appendChild(n);
        var o;
        o = document.createElementNS(svgNS, "feMergeNode"), n.appendChild(o), (o = document.createElementNS(svgNS, "feMergeNode")).setAttribute("in", "SourceGraphic"), 
        this.feMergeNode = o, this.feMerge = n, this.originalNodeAdded = !1, n.appendChild(o);
    }
    function SVGEffects(t) {
        var e, r = t.data.ef.length, i = randomString(10), s = filtersFactory.createFilter(i), a = 0;
        this.filters = [];
        var n;
        for (e = 0; r > e; e += 1) 20 === t.data.ef[e].ty ? (a += 1, n = new SVGTintFilter(s, t.effects.effectElements[e]), 
        this.filters.push(n)) : 21 === t.data.ef[e].ty ? (a += 1, n = new SVGFillFilter(s, t.effects.effectElements[e]), 
        this.filters.push(n)) : 22 === t.data.ef[e].ty ? (n = new SVGStrokeEffect(t, t.effects.effectElements[e]), 
        this.filters.push(n)) : 23 === t.data.ef[e].ty ? (a += 1, n = new SVGTritoneFilter(s, t.effects.effectElements[e]), 
        this.filters.push(n)) : 24 === t.data.ef[e].ty ? (a += 1, n = new SVGProLevelsFilter(s, t.effects.effectElements[e]), 
        this.filters.push(n)) : 25 === t.data.ef[e].ty && (a += 1, n = new SVGDropShadowEffect(s, t.effects.effectElements[e]), 
        this.filters.push(n));
        a && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(#" + i + ")"));
    }
    function ICompElement(t, e, r, i, s) {
        this._parent.constructor.call(this, t, e, r, i, s), this.layers = t.layers, this.supports3d = !0, 
        this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? Array.apply(null, {
            length: this.layers.length
        }) : [], this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, r.frameRate, this.dynamicProperties)), 
        this.data.xt ? (this.layerElement = document.createElementNS(svgNS, "g"), this.buildAllItems()) : r.progressiveLoad || this.buildAllItems();
    }
    function IImageElement(t, e, r, i, s) {
        this.assetData = r.getAssetData(t.refId), this._parent.constructor.call(this, t, e, r, i, s);
    }
    function IShapeElement(t, e, r, i, s) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.viewData = [], 
        this.shapeModifiers = [], this._parent.constructor.call(this, t, e, r, i, s);
    }
    function ISolidElement(t, e, r, i, s) {
        this._parent.constructor.call(this, t, e, r, i, s);
    }
    function CanvasRenderer(t, e) {
        this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet"
        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), 
        this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.contextData = {
            saved: Array.apply(null, {
                length: 15
            }),
            savedOp: Array.apply(null, {
                length: 15
            }),
            cArrPos: 0,
            cTr: new Matrix(),
            cO: 1
        };
        var r;
        for (r = 0; 15 > r; r += 1) this.contextData.saved[r] = Array.apply(null, {
            length: 16
        });
        this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), 
        this.completeLayers = !1;
    }
    function HybridRenderer(t) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, 
        this.camera = null, this.supports3d = !0;
    }
    function CVBaseElement(t, e, r) {
        this.globalData = r, this.data = t, this.comp = e, this.canvasContext = r.canvasContext, 
        this.init();
    }
    function CVCompElement(t, e, r) {
        this._parent.constructor.call(this, t, e, r);
        var i = {};
        for (var s in r) r.hasOwnProperty(s) && (i[s] = r[s]);
        i.renderer = this, i.compHeight = this.data.h, i.compWidth = this.data.w, this.renderConfig = {
            clearCanvas: !0
        }, this.contextData = {
            saved: Array.apply(null, {
                length: 15
            }),
            savedOp: Array.apply(null, {
                length: 15
            }),
            cArrPos: 0,
            cTr: new Matrix(),
            cO: 1
        }, this.completeLayers = !1;
        var a;
        for (a = 0; 15 > a; a += 1) this.contextData.saved[a] = Array.apply(null, {
            length: 16
        });
        this.transformMat = new Matrix(), this.parentGlobalData = this.globalData;
        var n = document.createElement("canvas");
        i.canvasContext = n.getContext("2d"), this.canvasContext = i.canvasContext, n.width = this.data.w, 
        n.height = this.data.h, this.canvas = n, this.globalData = i, this.layers = t.layers, 
        this.pendingElements = [], this.elements = Array.apply(null, {
            length: this.layers.length
        }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, r.frameRate, this.dynamicProperties)), 
        (this.data.xt || !r.progressiveLoad) && this.buildAllItems();
    }
    function CVImageElement(t, e, r) {
        this.assetData = r.getAssetData(t.refId), this._parent.constructor.call(this, t, e, r), 
        this.globalData.addPendingElement();
    }
    function CVMaskElement(t, e) {
        this.data = t, this.element = e, this.dynamicProperties = [], this.masksProperties = this.data.masksProperties, 
        this.viewData = new Array(this.masksProperties.length);
        var r, i = this.masksProperties.length;
        for (r = 0; i > r; r++) this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3, this.dynamicProperties, null);
    }
    function CVShapeElement(t, e, r) {
        this.shapes = [], this.stylesList = [], this.viewData = [], this.shapeModifiers = [], 
        this.shapesData = t.shapes, this.firstFrame = !0, this._parent.constructor.call(this, t, e, r);
    }
    function CVSolidElement(t, e, r) {
        this._parent.constructor.call(this, t, e, r);
    }
    function CVTextElement(t, e, r) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, 
        this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, 
        this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
        }, this._parent.constructor.call(this, t, e, r);
    }
    function HBaseElement(t, e, r, i, s) {
        this.globalData = r, this.comp = i, this.data = t, this.matteElement = null, this.parentContainer = e, 
        this.layerId = s ? s.layerId : "ly_" + randomString(10), this.placeholder = s, this.init();
    }
    function HSolidElement(t, e, r, i, s) {
        this._parent.constructor.call(this, t, e, r, i, s);
    }
    function HCompElement(t, e, r, i, s) {
        this._parent.constructor.call(this, t, e, r, i, s), this.layers = t.layers, this.supports3d = !0, 
        this.completeLayers = !1, this.pendingElements = [], this.elements = Array.apply(null, {
            length: this.layers.length
        }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, r.frameRate, this.dynamicProperties)), 
        this.data.hasMask && (this.supports3d = !1), this.data.xt && (this.layerElement = document.createElement("div")), 
        this.buildAllItems();
    }
    function HShapeElement(t, e, r, i, s) {
        this.shapes = [], this.shapeModifiers = [], this.shapesData = t.shapes, this.stylesList = [], 
        this.viewData = [], this._parent.constructor.call(this, t, e, r, i, s), this.addedTransforms = {
            mdf: !1,
            mats: [ this.finalTransform.mat ]
        }, this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        };
    }
    function HTextElement(t, e, r, i, s) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }, this.renderType = "svg", this.isMasked = !1, this._parent.constructor.call(this, t, e, r, i, s);
    }
    function HImageElement(t, e, r, i, s) {
        this.assetData = r.getAssetData(t.refId), this._parent.constructor.call(this, t, e, r, i, s);
    }
    function HCameraElement(t, e, r, i, s) {
        if (this._parent.constructor.call(this, t, e, r, i, s), this.pe = PropertyFactory.getProp(this, t.pe, 0, 0, this.dynamicProperties), 
        t.ks.p.s ? (this.px = PropertyFactory.getProp(this, t.ks.p.x, 1, 0, this.dynamicProperties), 
        this.py = PropertyFactory.getProp(this, t.ks.p.y, 1, 0, this.dynamicProperties), 
        this.pz = PropertyFactory.getProp(this, t.ks.p.z, 1, 0, this.dynamicProperties)) : this.p = PropertyFactory.getProp(this, t.ks.p, 1, 0, this.dynamicProperties), 
        t.ks.a && (this.a = PropertyFactory.getProp(this, t.ks.a, 1, 0, this.dynamicProperties)), 
        t.ks.or.k.length && t.ks.or.k[0].to) {
            var a, n = t.ks.or.k.length;
            for (a = 0; n > a; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null;
        }
        this.or = PropertyFactory.getProp(this, t.ks.or, 1, degToRads, this.dynamicProperties), 
        this.or.sh = !0, this.rx = PropertyFactory.getProp(this, t.ks.rx, 0, degToRads, this.dynamicProperties), 
        this.ry = PropertyFactory.getProp(this, t.ks.ry, 0, degToRads, this.dynamicProperties), 
        this.rz = PropertyFactory.getProp(this, t.ks.rz, 0, degToRads, this.dynamicProperties), 
        this.mat = new Matrix();
    }
    function SliderEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function AngleEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function ColorEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function PointEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function LayerIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function MaskIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function CheckboxEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function NoValueEffect() {
        this.p = {};
    }
    function EffectsManager(t, e, r) {
        var i = t.ef;
        this.effectElements = [];
        var s, a, n = i.length;
        for (s = 0; n > s; s++) a = new GroupEffect(i[s], e, r), this.effectElements.push(a);
    }
    function GroupEffect(t, e, r) {
        this.dynamicProperties = [], this.init(t, e, this.dynamicProperties), this.dynamicProperties.length && r.push(this);
    }
    function play(t) {
        animationManager.play(t);
    }
    function pause(t) {
        animationManager.pause(t);
    }
    function togglePause(t) {
        animationManager.togglePause(t);
    }
    function setSpeed(t, e) {
        animationManager.setSpeed(t, e);
    }
    function setDirection(t, e) {
        animationManager.setDirection(t, e);
    }
    function stop(t) {
        animationManager.stop(t);
    }
    function moveFrame(t) {
        animationManager.moveFrame(t);
    }
    function searchAnimations() {
        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
    }
    function registerAnimation(t) {
        return animationManager.registerAnimation(t);
    }
    function resize() {
        animationManager.resize();
    }
    function start() {
        animationManager.start();
    }
    function goToAndStop(t, e, r) {
        animationManager.goToAndStop(t, e, r);
    }
    function setSubframeRendering(t) {
        subframeEnabled = t;
    }
    function loadAnimation(t) {
        return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
    }
    function destroy(t) {
        return animationManager.destroy(t);
    }
    function setQuality(t) {
        if ("string" == typeof t) switch (t) {
          case "high":
            defaultCurveSegments = 200;
            break;

          case "medium":
            defaultCurveSegments = 50;
            break;

          case "low":
            defaultCurveSegments = 10;
        } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
        roundValues(!(defaultCurveSegments >= 50));
    }
    function installPlugin(t, e) {
        "expressions" === t && (expressionsPlugin = e);
    }
    function getFactory(t) {
        switch (t) {
          case "propertyFactory":
            return PropertyFactory;

          case "shapePropertyFactory":
            return ShapePropertyFactory;

          case "matrix":
            return Matrix;
        }
    }
    function checkReady() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(t) {
        for (var e = queryString.split("&"), r = 0; r < e.length; r++) {
            var i = e[r].split("=");
            if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
        }
    }
    var svgNS = "http://www.w3.org/2000/svg", subframeEnabled = !0, expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bm_rounder = Math.round, bm_rnd, bm_pow = Math.pow, bm_sqrt = Math.sqrt, bm_abs = Math.abs, bm_floor = Math.floor, bm_max = Math.max, bm_min = Math.min, blitter = 10, BMMath = {};
    !function() {
        var t, e = Object.getOwnPropertyNames(Math), r = e.length;
        for (t = 0; r > t; t += 1) BMMath[e[t]] = Math[e[t]];
    }(), BMMath.random = Math.random, BMMath.abs = function(t) {
        if ("object" === typeof t && t.length) {
            var e, r = Array.apply(null, {
                length: t.length
            }), i = t.length;
            for (e = 0; i > e; e += 1) r[e] = Math.abs(t[e]);
            return r;
        }
        return Math.abs(t);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;
    roundValues(!1);
    var rgbToHex = function() {
        var t, e, r = [];
        for (t = 0; 256 > t; t += 1) e = t.toString(16), r[t] = 1 == e.length ? "0" + e : e;
        return function(t, e, i) {
            return 0 > t && (t = 0), 0 > e && (e = 0), 0 > i && (i = 0), "#" + r[t] + r[e] + r[i];
        };
    }(), fillColorToString = function() {
        var t = [];
        return function(e, r) {
            return void 0 !== r && (e[3] = r), t[e[0]] || (t[e[0]] = {}), t[e[0]][e[1]] || (t[e[0]][e[1]] = {}), 
            t[e[0]][e[1]][e[2]] || (t[e[0]][e[1]][e[2]] = {}), t[e[0]][e[1]][e[2]][e[3]] || (t[e[0]][e[1]][e[2]][e[3]] = "rgba(" + e.join(",") + ")"), 
            t[e[0]][e[1]][e[2]][e[3]];
        };
    }(), Matrix = function() {
        function t() {
            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, 
            this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, 
            this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, 
            this.props[14] = 0, this.props[15] = 1, this;
        }
        function e(t) {
            if (0 === t) return this;
            var e = Math.cos(t), r = Math.sin(t);
            return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function r(t) {
            if (0 === t) return this;
            var e = Math.cos(t), r = Math.sin(t);
            return this._t(1, 0, 0, 0, 0, e, -r, 0, 0, r, e, 0, 0, 0, 0, 1);
        }
        function i(t) {
            if (0 === t) return this;
            var e = Math.cos(t), r = Math.sin(t);
            return this._t(e, 0, r, 0, 0, 1, 0, 0, -r, 0, e, 0, 0, 0, 0, 1);
        }
        function s(t) {
            if (0 === t) return this;
            var e = Math.cos(t), r = Math.sin(t);
            return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function a(t, e) {
            return this._t(1, e, t, 1, 0, 0);
        }
        function n(t, e) {
            return this.shear(Math.tan(t), Math.tan(e));
        }
        function o(t, e) {
            var r = Math.cos(e), i = Math.sin(e);
            return this._t(r, i, 0, 0, -i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, Math.tan(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function h(t, e, r) {
            return r = isNaN(r) ? 1 : r, 1 == t && 1 == e && 1 == r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1);
        }
        function l(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
            return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, 
            this.props[4] = s, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, 
            this.props[9] = l, this.props[10] = p, this.props[11] = m, this.props[12] = f, this.props[13] = c, 
            this.props[14] = d, this.props[15] = u, this;
        }
        function p(t, e, r) {
            return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this;
        }
        function m(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
            if (1 === t && 0 === e && 0 === r && 0 === i && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m) return (0 !== f || 0 !== c || 0 !== d) && (this.props[12] = this.props[12] * t + this.props[13] * s + this.props[14] * h + this.props[15] * f, 
            this.props[13] = this.props[12] * e + this.props[13] * a + this.props[14] * l + this.props[15] * c, 
            this.props[14] = this.props[12] * r + this.props[13] * n + this.props[14] * p + this.props[15] * d, 
            this.props[15] = this.props[12] * i + this.props[13] * o + this.props[14] * m + this.props[15] * u), 
            this;
            var y = this.props[0], g = this.props[1], v = this.props[2], b = this.props[3], E = this.props[4], x = this.props[5], k = this.props[6], P = this.props[7], S = this.props[8], A = this.props[9], C = this.props[10], M = this.props[11], D = this.props[12], w = this.props[13], _ = this.props[14], T = this.props[15];
            return this.props[0] = y * t + g * s + v * h + b * f, this.props[1] = y * e + g * a + v * l + b * c, 
            this.props[2] = y * r + g * n + v * p + b * d, this.props[3] = y * i + g * o + v * m + b * u, 
            this.props[4] = E * t + x * s + k * h + P * f, this.props[5] = E * e + x * a + k * l + P * c, 
            this.props[6] = E * r + x * n + k * p + P * d, this.props[7] = E * i + x * o + k * m + P * u, 
            this.props[8] = S * t + A * s + C * h + M * f, this.props[9] = S * e + A * a + C * l + M * c, 
            this.props[10] = S * r + A * n + C * p + M * d, this.props[11] = S * i + A * o + C * m + M * u, 
            this.props[12] = D * t + w * s + _ * h + T * f, this.props[13] = D * e + w * a + _ * l + T * c, 
            this.props[14] = D * r + w * n + _ * p + T * d, this.props[15] = D * i + w * o + _ * m + T * u, 
            this;
        }
        function f(t) {
            var e;
            for (e = 0; 16 > e; e += 1) t.props[e] = this.props[e];
        }
        function c(t) {
            var e;
            for (e = 0; 16 > e; e += 1) this.props[e] = t[e];
        }
        function d(t, e, r) {
            return {
                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            };
        }
        function u(t, e, r) {
            return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12];
        }
        function y(t, e, r) {
            return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13];
        }
        function g(t, e, r) {
            return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14];
        }
        function v(t) {
            var e = this.props[0] * this.props[5] - this.props[1] * this.props[4], r = this.props[5] / e, i = -this.props[1] / e, s = -this.props[4] / e, a = this.props[0] / e, n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e, o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
            return [ t[0] * r + t[1] * s + n, t[0] * i + t[1] * a + o, 0 ];
        }
        function b(t) {
            var e, r = t.length, i = [];
            for (e = 0; r > e; e += 1) i[e] = v(t[e]);
            return i;
        }
        function E(t, e, r, i) {
            if (i && 2 === i) {
                var s = point_pool.newPoint();
                return s[0] = t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], 
                s[1] = t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], 
                s;
            }
            return [ t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14] ];
        }
        function x(t, e) {
            return bm_rnd(t * this.props[0] + e * this.props[4] + this.props[12]) + "," + bm_rnd(t * this.props[1] + e * this.props[5] + this.props[13]);
        }
        function k() {
            return [ this.props[0], this.props[1], this.props[2], this.props[3], this.props[4], this.props[5], this.props[6], this.props[7], this.props[8], this.props[9], this.props[10], this.props[11], this.props[12], this.props[13], this.props[14], this.props[15] ];
        }
        function P() {
            return isSafari ? "matrix3d(" + roundTo2Decimals(this.props[0]) + "," + roundTo2Decimals(this.props[1]) + "," + roundTo2Decimals(this.props[2]) + "," + roundTo2Decimals(this.props[3]) + "," + roundTo2Decimals(this.props[4]) + "," + roundTo2Decimals(this.props[5]) + "," + roundTo2Decimals(this.props[6]) + "," + roundTo2Decimals(this.props[7]) + "," + roundTo2Decimals(this.props[8]) + "," + roundTo2Decimals(this.props[9]) + "," + roundTo2Decimals(this.props[10]) + "," + roundTo2Decimals(this.props[11]) + "," + roundTo2Decimals(this.props[12]) + "," + roundTo2Decimals(this.props[13]) + "," + roundTo2Decimals(this.props[14]) + "," + roundTo2Decimals(this.props[15]) + ")" : (this.cssParts[1] = this.props.join(","), 
            this.cssParts.join(""));
        }
        function S() {
            return "matrix(" + this.props[0] + "," + this.props[1] + "," + this.props[4] + "," + this.props[5] + "," + this.props[12] + "," + this.props[13] + ")";
        }
        function A() {
            return "" + this.toArray();
        }
        return function() {
            this.reset = t, this.rotate = e, this.rotateX = r, this.rotateY = i, this.rotateZ = s, 
            this.skew = n, this.skewFromAxis = o, this.shear = a, this.scale = h, this.setTransform = l, 
            this.translate = p, this.transform = m, this.applyToPoint = d, this.applyToX = u, 
            this.applyToY = y, this.applyToZ = g, this.applyToPointArray = E, this.applyToPointStringified = x, 
            this.toArray = k, this.toCSS = P, this.to2dCSS = S, this.toString = A, this.clone = f, 
            this.cloneFromProps = c, this.inversePoints = b, this.inversePoint = v, this._t = this.transform, 
            this.props = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ], this.cssParts = [ "matrix3d(", "", ")" ];
        };
    }();
    !function(t, e) {
        function r(r, l, p) {
            var g = [], v = n(a((l = 1 == l ? {
                entropy: !0
            } : l || {}).entropy ? [ r, h(t) ] : null == r ? o() : r, 3), g), b = new i(g), E = function() {
                for (var t = b.g(f), e = d, r = 0; u > t; ) t = (t + r) * m, e *= m, r = b.g(1);
                for (;t >= y; ) t /= 2, e /= 2, r >>>= 1;
                return (t + r) / e;
            };
            return E.int32 = function() {
                return 0 | b.g(4);
            }, E.quick = function() {
                return b.g(4) / 4294967296;
            }, E.double = E, n(h(b.S), t), (l.pass || p || function(t, r, i, a) {
                return a && (a.S && s(a, b), t.state = function() {
                    return s(b, {});
                }), i ? (e[c] = t, r) : t;
            })(E, v, "global" in l ? l.global : this == e, l.state);
        }
        function i(t) {
            var e, r = t.length, i = this, s = 0, a = i.i = i.j = 0, n = i.S = [];
            for (r || (t = [ r++ ]); m > s; ) n[s] = s++;
            for (s = 0; m > s; s++) n[s] = n[a = g & a + t[s % r] + (e = n[s])], n[a] = e;
            (i.g = function(t) {
                for (var e, r = 0, s = i.i, a = i.j, n = i.S; t--; ) e = n[s = g & s + 1], r = r * m + n[g & (n[s] = n[a = g & a + e]) + (n[a] = e)];
                return i.i = s, i.j = a, r;
            })(m);
        }
        function s(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e;
        }
        function a(t, e) {
            var r, i = [], s = typeof t;
            if (e && "object" == s) for (r in t) try {
                i.push(a(t[r], e - 1));
            } catch (t) {}
            return i.length ? i : "string" == s ? t : t + "\0";
        }
        function n(t, e) {
            for (var r, i = t + "", s = 0; s < i.length; ) e[g & s] = g & (r ^= 19 * e[g & s]) + i.charCodeAt(s++);
            return h(e);
        }
        function o() {
            try {
                if (l) return h(l.randomBytes(m));
                var e = new Uint8Array(m);
                return (p.crypto || p.msCrypto).getRandomValues(e), h(e);
            } catch (e) {
                var r = p.navigator, i = r && r.plugins;
                return [ +new Date(), p, i, p.screen, h(t) ];
            }
        }
        function h(t) {
            return String.fromCharCode.apply(0, t);
        }
        var l, p = this, m = 256, f = 6, c = "random", d = e.pow(m, f), u = e.pow(2, 52), y = 2 * u, g = m - 1;
        e["seed" + c] = r, n(e.random(), t);
    }([], BMMath);
    var BezierFactory = function() {
        function t(t, e, r, i, s) {
            var a = s || ("bez_" + t + "_" + e + "_" + r + "_" + i).replace(/\./g, "p");
            if (p[a]) return p[a];
            var n = new h([ t, e, r, i ]);
            return p[a] = n, n;
        }
        function e(t, e) {
            return 1 - 3 * e + 3 * t;
        }
        function r(t, e) {
            return 3 * e - 6 * t;
        }
        function i(t) {
            return 3 * t;
        }
        function s(t, s, a) {
            return ((e(s, a) * t + r(s, a)) * t + i(s)) * t;
        }
        function a(t, s, a) {
            return 3 * e(s, a) * t * t + 2 * r(s, a) * t + i(s);
        }
        function n(t, e, r, i, a) {
            var n, o, h = 0;
            do {
                o = e + (r - e) / 2, n = s(o, i, a) - t, n > 0 ? r = o : e = o;
            } while (Math.abs(n) > f && ++h < c);
            return o;
        }
        function o(t, e, r, i) {
            for (var n = 0; m > n; ++n) {
                var o = a(e, r, i);
                if (0 === o) return e;
                e -= (s(e, r, i) - t) / o;
            }
            return e;
        }
        function h(t) {
            this._p = t, this._mSampleValues = y ? new Float32Array(d) : new Array(d), this._precomputed = !1, 
            this.get = this.get.bind(this);
        }
        var l = {};
        l.getBezierEasing = t;
        var p = {}, m = 4, f = 1e-7, c = 10, d = 11, u = 1 / (d - 1), y = "function" == typeof Float32Array;
        return h.prototype = {
            get: function(t) {
                var e = this._p[0], r = this._p[1], i = this._p[2], a = this._p[3];
                return this._precomputed || this._precompute(), e === r && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : s(this._getTForX(t), r, a);
            },
            _precompute: function() {
                var t = this._p[0], e = this._p[1], r = this._p[2], i = this._p[3];
                this._precomputed = !0, (t !== e || r !== i) && this._calcSampleValues();
            },
            _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], r = 0; d > r; ++r) this._mSampleValues[r] = s(r * u, t, e);
            },
            _getTForX: function(t) {
                for (var e = this._p[0], r = this._p[2], i = this._mSampleValues, s = 0, h = 1, l = d - 1; h !== l && i[h] <= t; ++h) s += u;
                var p = s + (t - i[--h]) / (i[h + 1] - i[h]) * u, m = a(p, e, r);
                return m >= .001 ? o(t, p, e, r) : 0 === m ? p : n(t, s, s + u, e, r);
            }
        }, l;
    }(), MatrixManager = matrixManagerFunction;
    !function() {
        for (var t = 0, e = [ "ms", "moz", "webkit", "o" ], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"], 
        window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, r) {
            var i = new Date().getTime(), s = Math.max(0, 16 - (i - t)), a = window.setTimeout(function() {
                e(i + s);
            }, s);
            return t = i + s, a;
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t);
        });
    }();
    var bez = bezFunction(), dataManager = dataFunctionManager(), FontManager = function() {
        function t(t, e) {
            var r = document.createElement("span");
            r.style.fontFamily = e;
            var i = document.createElement("span");
            i.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", 
            r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", 
            r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", 
            r.appendChild(i), document.body.appendChild(r);
            var s = i.offsetWidth;
            return i.style.fontFamily = t + ", " + e, {
                node: i,
                w: s,
                parent: r
            };
        }
        function e() {
            var t, r, i, s = this.fonts.length, a = s;
            for (t = 0; s > t; t += 1) if (this.fonts[t].loaded) a -= 1; else if ("t" === this.fonts[t].fOrigin) {
                if (window.Typekit && window.Typekit.load && 0 === this.typekitLoaded) {
                    this.typekitLoaded = 1;
                    try {
                        window.Typekit.load({
                            async: !0,
                            active: function() {
                                this.typekitLoaded = 2;
                            }.bind(this)
                        });
                    } catch (t) {}
                }
                2 === this.typekitLoaded && (this.fonts[t].loaded = !0);
            } else "n" === this.fonts[t].fOrigin ? this.fonts[t].loaded = !0 : (r = this.fonts[t].monoCase.node, 
            i = this.fonts[t].monoCase.w, r.offsetWidth !== i ? (a -= 1, this.fonts[t].loaded = !0) : (r = this.fonts[t].sansCase.node, 
            i = this.fonts[t].sansCase.w, r.offsetWidth !== i && (a -= 1, this.fonts[t].loaded = !0)), 
            this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), 
            this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
            0 !== a && Date.now() - this.initTime < h ? setTimeout(e.bind(this), 20) : setTimeout(function() {
                this.loaded = !0;
            }.bind(this), 0);
        }
        function r(t, e) {
            var r = document.createElementNS(svgNS, "text");
            r.style.fontSize = "100px", r.style.fontFamily = e.fFamily, r.textContent = "1", 
            e.fClass ? (r.style.fontFamily = "inherit", r.className = e.fClass) : r.style.fontFamily = e.fFamily, 
            t.appendChild(r);
            var i = document.createElement("canvas").getContext("2d");
            return i.font = "100px " + e.fFamily, i;
        }
        function i(i, s) {
            if (i) {
                if (this.chars) return this.loaded = !0, void (this.fonts = i.list);
                var a, n = i.list, o = n.length;
                for (a = 0; o > a; a += 1) {
                    if (n[a].loaded = !1, n[a].monoCase = t(n[a].fFamily, "monospace"), n[a].sansCase = t(n[a].fFamily, "sans-serif"), 
                    n[a].fPath) {
                        if ("p" === n[a].fOrigin) {
                            var h = document.createElement("style");
                            h.type = "text/css", h.innerHTML = "@font-face {font-family: " + n[a].fFamily + "; font-style: normal; src: url('" + n[a].fPath + "');}", 
                            s.appendChild(h);
                        } else if ("g" === n[a].fOrigin) {
                            var l = document.createElement("link");
                            l.type = "text/css", l.rel = "stylesheet", l.href = n[a].fPath, s.appendChild(l);
                        } else if ("t" === n[a].fOrigin) {
                            var p = document.createElement("script");
                            p.setAttribute("src", n[a].fPath), s.appendChild(p);
                        }
                    } else n[a].loaded = !0;
                    n[a].helper = r(s, n[a]), this.fonts.push(n[a]);
                }
                e.bind(this)();
            } else this.loaded = !0;
        }
        function s(t) {
            if (t) {
                this.chars || (this.chars = []);
                var e, r, i, s = t.length, a = this.chars.length;
                for (e = 0; s > e; e += 1) {
                    for (r = 0, i = !1; a > r; ) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), 
                    r += 1;
                    i || (this.chars.push(t[e]), a += 1);
                }
            }
        }
        function a(t, e, r) {
            for (var i = 0, s = this.chars.length; s > i; ) {
                if (this.chars[i].ch === t && this.chars[i].style === e && this.chars[i].fFamily === r) return this.chars[i];
                i += 1;
            }
        }
        function n(t, e, r) {
            return this.getFontByName(e).helper.measureText(t).width * r / 100;
        }
        function o(t) {
            for (var e = 0, r = this.fonts.length; r > e; ) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1;
            }
            return "sans-serif";
        }
        var h = 5e3, l = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.loaded = !1, this.initTime = Date.now();
        };
        return l.prototype.addChars = s, l.prototype.addFonts = i, l.prototype.getCharData = a, 
        l.prototype.getFontByName = o, l.prototype.measureText = n, l;
    }(), PropertyFactory = function() {
        function t() {
            if (this.elem.globalData.frameId !== this.frameId) {
                this.mdf = !1;
                var t = this.comp.renderedFrame - this.offsetTime;
                if (!(t === this.lastFrame || this.lastFrame !== l && (this.lastFrame >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime || this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime))) {
                    for (var e, r, i = this.lastFrame < t ? this._lastIndex : 0, s = this.keyframes.length - 1, a = !0; a; ) {
                        if (e = this.keyframes[i], r = this.keyframes[i + 1], i == s - 1 && t >= r.t - this.offsetTime) {
                            e.h && (e = r);
                            break;
                        }
                        if (r.t - this.offsetTime > t) break;
                        s - 1 > i ? i += 1 : a = !1;
                    }
                    this._lastIndex = i;
                    var n, o, h, p, m, f;
                    if (e.to) {
                        e.bezierData || bez.buildBezierData(e);
                        var c = e.bezierData;
                        if (t >= r.t - this.offsetTime || t < e.t - this.offsetTime) {
                            var d = t >= r.t - this.offsetTime ? c.points.length - 1 : 0;
                            for (o = c.points[d].point.length, n = 0; o > n; n += 1) this.pv[n] = c.points[d].point[n], 
                            this.v[n] = this.mult ? this.pv[n] * this.mult : this.pv[n], this.lastPValue[n] !== this.pv[n] && (this.mdf = !0, 
                            this.lastPValue[n] = this.pv[n]);
                            this._lastBezierData = null;
                        } else {
                            e.__fnct ? f = e.__fnct : (f = BezierFactory.getBezierEasing(e.o.x, e.o.y, e.i.x, e.i.y, e.n).get, 
                            e.__fnct = f), h = f((t - (e.t - this.offsetTime)) / (r.t - this.offsetTime - (e.t - this.offsetTime)));
                            var u, y = c.segmentLength * h, g = this.lastFrame < t && this._lastBezierData === c ? this._lastAddedLength : 0;
                            for (m = this.lastFrame < t && this._lastBezierData === c ? this._lastPoint : 0, 
                            a = !0, p = c.points.length; a; ) {
                                if (g += c.points[m].partialLength, 0 === y || 0 === h || m == c.points.length - 1) {
                                    for (o = c.points[m].point.length, n = 0; o > n; n += 1) this.pv[n] = c.points[m].point[n], 
                                    this.v[n] = this.mult ? this.pv[n] * this.mult : this.pv[n], this.lastPValue[n] !== this.pv[n] && (this.mdf = !0, 
                                    this.lastPValue[n] = this.pv[n]);
                                    break;
                                }
                                if (y >= g && y < g + c.points[m + 1].partialLength) {
                                    for (u = (y - g) / c.points[m + 1].partialLength, o = c.points[m].point.length, 
                                    n = 0; o > n; n += 1) this.pv[n] = c.points[m].point[n] + (c.points[m + 1].point[n] - c.points[m].point[n]) * u, 
                                    this.v[n] = this.mult ? this.pv[n] * this.mult : this.pv[n], this.lastPValue[n] !== this.pv[n] && (this.mdf = !0, 
                                    this.lastPValue[n] = this.pv[n]);
                                    break;
                                }
                                p - 1 > m ? m += 1 : a = !1;
                            }
                            this._lastPoint = m, this._lastAddedLength = g - c.points[m].partialLength, this._lastBezierData = c;
                        }
                    } else {
                        var v, b, E, x, k;
                        for (s = e.s.length, i = 0; s > i; i += 1) {
                            if (1 !== e.h && (t >= r.t - this.offsetTime ? h = 1 : t < e.t - this.offsetTime ? h = 0 : (e.o.x instanceof Array ? (e.__fnct || (e.__fnct = []), 
                            e.__fnct[i] ? f = e.__fnct[i] : (v = e.o.x[i] || e.o.x[0], b = e.o.y[i] || e.o.y[0], 
                            E = e.i.x[i] || e.i.x[0], x = e.i.y[i] || e.i.y[0], f = BezierFactory.getBezierEasing(v, b, E, x).get, 
                            e.__fnct[i] = f)) : e.__fnct ? f = e.__fnct : (v = e.o.x, b = e.o.y, E = e.i.x, 
                            x = e.i.y, f = BezierFactory.getBezierEasing(v, b, E, x).get, e.__fnct = f), h = f((t - (e.t - this.offsetTime)) / (r.t - this.offsetTime - (e.t - this.offsetTime))))), 
                            this.sh && 1 !== e.h) {
                                var P = e.s[i], S = e.e[i];
                                -180 > P - S ? P += 360 : P - S > 180 && (P -= 360), k = P + (S - P) * h;
                            } else k = 1 === e.h ? e.s[i] : e.s[i] + (e.e[i] - e.s[i]) * h;
                            1 === s ? (this.v = this.mult ? k * this.mult : k, this.pv = k, this.lastPValue != this.pv && (this.mdf = !0, 
                            this.lastPValue = this.pv)) : (this.v[i] = this.mult ? k * this.mult : k, this.pv[i] = k, 
                            this.lastPValue[i] !== this.pv[i] && (this.mdf = !0, this.lastPValue[i] = this.pv[i]));
                        }
                    }
                }
                this.lastFrame = t, this.frameId = this.elem.globalData.frameId;
            }
        }
        function e() {}
        function r(t, r, i) {
            this.mult = i, this.v = i ? r.k * i : r.k, this.pv = r.k, this.mdf = !1, this.comp = t.comp, 
            this.k = !1, this.kf = !1, this.vel = 0, this.getValue = e;
        }
        function i(t, r, i) {
            this.mult = i, this.data = r, this.mdf = !1, this.comp = t.comp, this.k = !1, this.kf = !1, 
            this.frameId = -1, this.v = Array.apply(null, {
                length: r.k.length
            }), this.pv = Array.apply(null, {
                length: r.k.length
            }), this.lastValue = Array.apply(null, {
                length: r.k.length
            });
            var s = Array.apply(null, {
                length: r.k.length
            });
            this.vel = s.map(function() {
                return 0;
            });
            var a, n = r.k.length;
            for (a = 0; n > a; a += 1) this.v[a] = i ? r.k[a] * i : r.k[a], this.pv[a] = r.k[a];
            this.getValue = e;
        }
        function s(e, r, i) {
            this.keyframes = r.k, this.offsetTime = e.data.st, this.lastValue = -99999, this.lastPValue = -99999, 
            this.frameId = -1, this._lastIndex = 0, this.k = !0, this.kf = !0, this.data = r, 
            this.mult = i, this.elem = e, this.comp = e.comp, this.lastFrame = l, this.v = i ? r.k[0].s[0] * i : r.k[0].s[0], 
            this.pv = r.k[0].s[0], this.getValue = t;
        }
        function a(e, r, i) {
            var s, a, n, o, h, p = r.k.length;
            for (s = 0; p - 1 > s; s += 1) r.k[s].to && r.k[s].s && r.k[s].e && (a = r.k[s].s, 
            n = r.k[s].e, o = r.k[s].to, h = r.k[s].ti, (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (r.k[s].to = null, 
            r.k[s].ti = null));
            this.keyframes = r.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this.mult = i, 
            this.elem = e, this.comp = e.comp, this.getValue = t, this.frameId = -1, this._lastIndex = 0, 
            this.v = Array.apply(null, {
                length: r.k[0].s.length
            }), this.pv = Array.apply(null, {
                length: r.k[0].s.length
            }), this.lastValue = Array.apply(null, {
                length: r.k[0].s.length
            }), this.lastPValue = Array.apply(null, {
                length: r.k[0].s.length
            }), this.lastFrame = l;
        }
        function n(t, e, n, o, h) {
            var l;
            if (2 === n) l = new p(t, e, h); else if (0 === e.a) l = 0 === n ? new r(t, e, o) : new i(t, e, o); else if (1 === e.a) l = 0 === n ? new s(t, e, o) : new a(t, e, o); else if (e.k.length) if ("number" == typeof e.k[0]) l = new i(t, e, o); else switch (n) {
              case 0:
                l = new s(t, e, o);
                break;

              case 1:
                l = new a(t, e, o);
            } else l = new r(t, e, o);
            return l.k && h.push(l), l;
        }
        function o(t, e, r, i) {
            return new f(t, e, r, i);
        }
        function h(t, e, r) {
            return new c(t, e, r);
        }
        var l = -999999, p = function() {
            function t() {
                return ExpressionValue(this.p);
            }
            function e() {
                return ExpressionValue(this.px);
            }
            function r() {
                return ExpressionValue(this.py);
            }
            function i() {
                return ExpressionValue(this.a);
            }
            function s() {
                return ExpressionValue(this.or);
            }
            function a() {
                return ExpressionValue(this.r, 1 / degToRads);
            }
            function n() {
                return ExpressionValue(this.s, 100);
            }
            function o() {
                return ExpressionValue(this.o, 100);
            }
            function h() {
                return ExpressionValue(this.sk);
            }
            function l() {
                return ExpressionValue(this.sa);
            }
            function p(t) {
                var e, r = this.dynamicProperties.length;
                for (e = 0; r > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
                this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), 
                this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), 
                this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function m() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    this.mdf = !1;
                    var t, e = this.dynamicProperties.length;
                    for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                    if (this.mdf) {
                        if (this.v.reset(), this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), 
                        this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), 
                        this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), 
                        this.autoOriented && this.p.keyframes && this.p.getValueAtTime) {
                            var r, i;
                            this.p.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / this.elem.globalData.frameRate, 0), 
                            i = this.p.getValueAtTime(this.p.keyframes[0].t / this.elem.globalData.frameRate, 0)) : this.p.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / this.elem.globalData.frameRate, 0), 
                            i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / this.elem.globalData.frameRate, 0)) : (r = this.p.pv, 
                            i = this.p.getValueAtTime((this.p.lastFrame + this.p.offsetTime - .01) / this.elem.globalData.frameRate, this.p.offsetTime)), 
                            this.v.rotate(-Math.atan2(r[1] - i[1], r[0] - i[0]));
                        }
                        this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                }
            }
            function f() {
                this.inverted = !0, this.iv = new Matrix(), this.k || (this.data.p.s ? this.iv.translate(this.px.v, this.py.v, -this.pz.v) : this.iv.translate(this.p.v[0], this.p.v[1], -this.p.v[2]), 
                this.r ? this.iv.rotate(-this.r.v) : this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), 
                this.s && this.iv.scale(this.s.v[0], this.s.v[1], 1), this.a && this.iv.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]));
            }
            function c() {}
            return function(d, u, y) {
                this.elem = d, this.frameId = -1, this.type = "transform", this.dynamicProperties = [], 
                this.mdf = !1, this.data = u, this.getValue = m, this.applyToMatrix = p, this.setInverted = f, 
                this.autoOrient = c, this.v = new Matrix(), u.p.s ? (this.px = PropertyFactory.getProp(d, u.p.x, 0, 0, this.dynamicProperties), 
                this.py = PropertyFactory.getProp(d, u.p.y, 0, 0, this.dynamicProperties), u.p.z && (this.pz = PropertyFactory.getProp(d, u.p.z, 0, 0, this.dynamicProperties))) : this.p = PropertyFactory.getProp(d, u.p, 1, 0, this.dynamicProperties), 
                u.r ? this.r = PropertyFactory.getProp(d, u.r, 0, degToRads, this.dynamicProperties) : u.rx && (this.rx = PropertyFactory.getProp(d, u.rx, 0, degToRads, this.dynamicProperties), 
                this.ry = PropertyFactory.getProp(d, u.ry, 0, degToRads, this.dynamicProperties), 
                this.rz = PropertyFactory.getProp(d, u.rz, 0, degToRads, this.dynamicProperties), 
                this.or = PropertyFactory.getProp(d, u.or, 1, degToRads, this.dynamicProperties)), 
                u.sk && (this.sk = PropertyFactory.getProp(d, u.sk, 0, degToRads, this.dynamicProperties), 
                this.sa = PropertyFactory.getProp(d, u.sa, 0, degToRads, this.dynamicProperties)), 
                u.a && (this.a = PropertyFactory.getProp(d, u.a, 1, 0, this.dynamicProperties)), 
                u.s && (this.s = PropertyFactory.getProp(d, u.s, 1, .01, this.dynamicProperties)), 
                this.o = u.o ? PropertyFactory.getProp(d, u.o, 0, .01, y) : {
                    mdf: !1,
                    v: 1
                }, this.dynamicProperties.length ? y.push(this) : (this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), 
                this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), 
                this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), 
                this.data.p.s ? u.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), 
                Object.defineProperty(this, "position", {
                    get: t
                }), Object.defineProperty(this, "xPosition", {
                    get: e
                }), Object.defineProperty(this, "yPosition", {
                    get: r
                }), Object.defineProperty(this, "orientation", {
                    get: s
                }), Object.defineProperty(this, "anchorPoint", {
                    get: i
                }), Object.defineProperty(this, "rotation", {
                    get: a
                }), Object.defineProperty(this, "scale", {
                    get: n
                }), Object.defineProperty(this, "opacity", {
                    get: o
                }), Object.defineProperty(this, "skew", {
                    get: h
                }), Object.defineProperty(this, "skewAxis", {
                    get: l
                });
            };
        }(), m = function() {
            function t(t) {
                if (this.prop.getValue(), this.cmdf = !1, this.omdf = !1, this.prop.mdf || t) {
                    var e, r, i, s = 4 * this.data.p;
                    for (e = 0; s > e; e += 1) r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), 
                    this.c[e] !== i && (this.c[e] = i, this.cmdf = !0);
                    if (this.o.length) for (s = this.prop.v.length, e = 4 * this.data.p; s > e; e += 1) r = e % 2 == 0 ? 100 : 1, 
                    i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, 
                    this.omdf = !0);
                }
            }
            function e(e, r, i) {
                this.prop = n(e, r.k, 1, null, []), this.data = r, this.k = this.prop.k, this.c = Array.apply(null, {
                    length: 4 * r.p
                });
                var s = r.k.k[0].s ? r.k.k[0].s.length - 4 * r.p : r.k.k.length - 4 * r.p;
                this.o = Array.apply(null, {
                    length: s
                }), this.cmdf = !1, this.omdf = !1, this.getValue = t, this.prop.k && i.push(this), 
                this.getValue(!0);
            }
            return function(t, r, i) {
                return new e(t, r, i);
            };
        }(), f = function() {
            function t(t) {
                var e = 0, r = this.dataProps.length;
                if (this.elem.globalData.frameId !== this.frameId || t) {
                    for (this.mdf = !1, this.frameId = this.elem.globalData.frameId; r > e; ) {
                        if (this.dataProps[e].p.mdf) {
                            this.mdf = !0;
                            break;
                        }
                        e += 1;
                    }
                    if (this.mdf || t) for ("svg" === this.renderer && (this.dasharray = ""), e = 0; r > e; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dasharray += " " + this.dataProps[e].p.v : this.dasharray[e] = this.dataProps[e].p.v : this.dashoffset = this.dataProps[e].p.v;
                }
            }
            return function(e, r, i, s) {
                this.elem = e, this.frameId = -1, this.dataProps = new Array(r.length), this.renderer = i, 
                this.mdf = !1, this.k = !1, this.dasharray = "svg" === this.renderer ? "" : new Array(r.length - 1), 
                this.dashoffset = 0;
                var a, n, o = r.length;
                for (a = 0; o > a; a += 1) n = PropertyFactory.getProp(e, r[a].v, 0, 0, s), this.k = !!n.k || this.k, 
                this.dataProps[a] = {
                    n: r[a].n,
                    p: n
                };
                this.getValue = t, this.k ? s.push(this) : this.getValue(!0);
            };
        }(), c = function() {
            function t() {
                if (this.dynamicProperties.length) {
                    var t, e = this.dynamicProperties.length;
                    for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                }
                var r = this.data.totalChars, i = 2 === this.data.r ? 1 : 100 / r, s = this.o.v / i, a = this.s.v / i + s, n = this.e.v / i + s;
                if (a > n) {
                    var o = a;
                    a = n, n = o;
                }
                this.finalS = a, this.finalE = n;
            }
            function e(t) {
                var e = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get, a = 0, n = this.finalS, o = this.finalE, h = this.data.sh;
                if (2 == h) a = o === n ? t >= o ? 1 : 0 : r(0, i(.5 / (o - n) + (t - n) / (o - n), 1)), 
                a = e(a); else if (3 == h) a = o === n ? t >= o ? 0 : 1 : 1 - r(0, i(.5 / (o - n) + (t - n) / (o - n), 1)), 
                a = e(a); else if (4 == h) o === n ? a = 0 : (a = r(0, i(.5 / (o - n) + (t - n) / (o - n), 1)), 
                .5 > a ? a *= 2 : a = 1 - 2 * (a - .5)), a = e(a); else if (5 == h) {
                    if (o === n) a = 0; else {
                        var l = o - n, p = -l / 2 + (t = i(r(0, t + .5 - n), o - n)), m = l / 2;
                        a = Math.sqrt(1 - p * p / (m * m));
                    }
                    a = e(a);
                } else 6 == h ? (o === n ? a = 0 : (t = i(r(0, t + .5 - n), o - n), a = (1 + Math.cos(Math.PI + 2 * Math.PI * t / (o - n))) / 2), 
                a = e(a)) : (t >= s(n) && (a = 0 > t - n ? 1 - (n - t) : r(0, i(o - t, 1))), a = e(a));
                return a * this.a.v;
            }
            var r = Math.max, i = Math.min, s = Math.floor;
            return function(r, i, s) {
                this.mdf = !1, this.k = !1, this.data = i, this.dynamicProperties = [], this.getValue = t, 
                this.getMult = e, this.comp = r.comp, this.finalS = 0, this.finalE = 0, this.s = PropertyFactory.getProp(r, i.s || {
                    k: 0
                }, 0, 0, this.dynamicProperties), this.e = "e" in i ? PropertyFactory.getProp(r, i.e, 0, 0, this.dynamicProperties) : {
                    v: 2 === i.r ? i.totalChars : 100
                }, this.o = PropertyFactory.getProp(r, i.o || {
                    k: 0
                }, 0, 0, this.dynamicProperties), this.xe = PropertyFactory.getProp(r, i.xe || {
                    k: 0
                }, 0, 0, this.dynamicProperties), this.ne = PropertyFactory.getProp(r, i.ne || {
                    k: 0
                }, 0, 0, this.dynamicProperties), this.a = PropertyFactory.getProp(r, i.a, 0, .01, this.dynamicProperties), 
                this.dynamicProperties.length ? s.push(this) : this.getValue();
            };
        }(), d = {};
        return d.getProp = n, d.getDashProp = o, d.getTextSelectorProp = h, d.getGradientProp = m, 
        d;
    }();
    ShapePath.prototype.setPathData = function(t, e) {
        for (this.c = t; e > this._maxLength; ) this.doubleArrayLength();
        for (var r = 0; e > r; ) this.v[r] = point_pool.newPoint(), this.o[r] = point_pool.newPoint(), 
        this.i[r] = point_pool.newPoint(), r += 1;
        this._length = e;
    }, ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(Array.apply(null, {
            length: this._maxLength
        })), this.i = this.i.concat(Array.apply(null, {
            length: this._maxLength
        })), this.o = this.o.concat(Array.apply(null, {
            length: this._maxLength
        })), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
        var a;
        switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), 
        r) {
          case "v":
            a = this.v;
            break;

          case "i":
            a = this.i;
            break;

          case "o":
            a = this.o;
        }
        (!a[i] || a[i] && !s) && (a[i] = point_pool.newPoint()), a[i][0] = t, a[i][1] = e;
    }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, o) {
        this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(s, a, "i", n, o);
    };
    var ShapePropertyFactory = function() {
        function t() {
            if (this.elem.globalData.frameId !== this.frameId) {
                this.mdf = !1;
                var t = this.comp.renderedFrame - this.offsetTime;
                if (this.lastFrame === n || !(this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime || this.lastFrame > this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t > this.keyframes[this.keyframes.length - 1].t - this.offsetTime)) {
                    var e, r, i;
                    if (t < this.keyframes[0].t - this.offsetTime) e = this.keyframes[0].s[0], i = !0, 
                    this._lastIndex = 0; else if (t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime) e = 1 === this.keyframes[this.keyframes.length - 2].h ? this.keyframes[this.keyframes.length - 1].s[0] : this.keyframes[this.keyframes.length - 2].e[0], 
                    i = !0; else {
                        for (var s, a, o, h, l, p, m = this.lastFrame < n ? this._lastIndex : 0, f = this.keyframes.length - 1, c = !0; c && (s = this.keyframes[m], 
                        !((a = this.keyframes[m + 1]).t - this.offsetTime > t)); ) f - 1 > m ? m += 1 : c = !1;
                        i = 1 === s.h, this._lastIndex = m;
                        var d;
                        if (!i) {
                            if (t >= a.t - this.offsetTime) d = 1; else if (t < s.t - this.offsetTime) d = 0; else {
                                var u;
                                s.__fnct ? u = s.__fnct : (u = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y).get, 
                                s.__fnct = u), d = u((t - (s.t - this.offsetTime)) / (a.t - this.offsetTime - (s.t - this.offsetTime)));
                            }
                            r = s.e[0];
                        }
                        e = s.s[0];
                    }
                    h = this.v._length, p = e.i[0].length;
                    var y, g = !1;
                    for (o = 0; h > o; o += 1) for (l = 0; p > l; l += 1) i ? (y = e.i[o][l], this.v.i[o][l] !== y && (this.v.i[o][l] = y, 
                    this.pv.i[o][l] = y, g = !0), y = e.o[o][l], this.v.o[o][l] !== y && (this.v.o[o][l] = y, 
                    this.pv.o[o][l] = y, g = !0), y = e.v[o][l], this.v.v[o][l] !== y && (this.v.v[o][l] = y, 
                    this.pv.v[o][l] = y, g = !0)) : (y = e.i[o][l] + (r.i[o][l] - e.i[o][l]) * d, this.v.i[o][l] !== y && (this.v.i[o][l] = y, 
                    this.pv.i[o][l] = y, g = !0), y = e.o[o][l] + (r.o[o][l] - e.o[o][l]) * d, this.v.o[o][l] !== y && (this.v.o[o][l] = y, 
                    this.pv.o[o][l] = y, g = !0), y = e.v[o][l] + (r.v[o][l] - e.v[o][l]) * d, this.v.v[o][l] !== y && (this.v.v[o][l] = y, 
                    this.pv.v[o][l] = y, g = !0));
                    this.mdf = g, this.v.c = e.c, this.paths = this.localShapeCollection;
                }
                this.lastFrame = t, this.frameId = this.elem.globalData.frameId;
            }
        }
        function e() {
            return this.v;
        }
        function r() {
            this.paths = this.localShapeCollection, this.k || (this.mdf = !1);
        }
        function i(t, i, s) {
            this.comp = t.comp, this.k = !1, this.mdf = !1, this.v = shape_pool.newShape();
            var a = 3 === s ? i.pt.k : i.ks.k;
            this.v.v = a.v, this.v.i = a.i, this.v.o = a.o, this.v.c = a.c, this.v._length = this.v.v.length, 
            this.getValue = e, this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), 
            this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r;
        }
        function s(e, i, s) {
            this.comp = e.comp, this.elem = e, this.offsetTime = e.data.st, this._lastIndex = 0, 
            this.getValue = t, this.keyframes = 3 === s ? i.pt.k : i.ks.k, this.k = !0, this.kf = !0;
            var a = this.keyframes[0].s[0].i.length;
            this.keyframes[0].s[0].i[0].length, this.v = shape_pool.newShape(), this.v.setPathData(this.keyframes[0].s[0].c, a), 
            this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), 
            this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = n, 
            this.reset = r;
        }
        function a(t, e, r, a) {
            var n;
            if (3 === r || 4 === r) {
                var p = 3 === r ? e.pt : e.ks, m = p.k;
                n = 1 === p.a || m.length ? new s(t, e, r) : new i(t, e, r);
            } else 5 === r ? n = new l(t, e) : 6 === r ? n = new o(t, e) : 7 === r && (n = new h(t, e));
            return n.k && a.push(n), n;
        }
        var n = -999999, o = function() {
            function t() {
                var t = this.p.v[0], e = this.p.v[1], r = this.s.v[0] / 2, s = this.s.v[1] / 2;
                3 !== this.d ? (this.v.v[0][0] = t, this.v.v[0][1] = e - s, this.v.v[1][0] = t + r, 
                this.v.v[1][1] = e, this.v.v[2][0] = t, this.v.v[2][1] = e + s, this.v.v[3][0] = t - r, 
                this.v.v[3][1] = e, this.v.i[0][0] = t - r * i, this.v.i[0][1] = e - s, this.v.i[1][0] = t + r, 
                this.v.i[1][1] = e - s * i, this.v.i[2][0] = t + r * i, this.v.i[2][1] = e + s, 
                this.v.i[3][0] = t - r, this.v.i[3][1] = e + s * i, this.v.o[0][0] = t + r * i, 
                this.v.o[0][1] = e - s, this.v.o[1][0] = t + r, this.v.o[1][1] = e + s * i, this.v.o[2][0] = t - r * i, 
                this.v.o[2][1] = e + s, this.v.o[3][0] = t - r, this.v.o[3][1] = e - s * i) : (this.v.v[0][0] = t, 
                this.v.v[0][1] = e - s, this.v.v[1][0] = t - r, this.v.v[1][1] = e, this.v.v[2][0] = t, 
                this.v.v[2][1] = e + s, this.v.v[3][0] = t + r, this.v.v[3][1] = e, this.v.i[0][0] = t + r * i, 
                this.v.i[0][1] = e - s, this.v.i[1][0] = t - r, this.v.i[1][1] = e - s * i, this.v.i[2][0] = t - r * i, 
                this.v.i[2][1] = e + s, this.v.i[3][0] = t + r, this.v.i[3][1] = e + s * i, this.v.o[0][0] = t - r * i, 
                this.v.o[0][1] = e - s, this.v.o[1][0] = t - r, this.v.o[1][1] = e + s * i, this.v.o[2][0] = t + r * i, 
                this.v.o[2][1] = e + s, this.v.o[3][0] = t + r, this.v.o[3][1] = e - s * i);
            }
            function e(t) {
                var e, r = this.dynamicProperties.length;
                if (this.elem.globalData.frameId !== this.frameId) {
                    for (this.mdf = !1, this.frameId = this.elem.globalData.frameId, e = 0; r > e; e += 1) this.dynamicProperties[e].getValue(t), 
                    this.dynamicProperties[e].mdf && (this.mdf = !0);
                    this.mdf && this.convertEllToPath();
                }
            }
            var i = roundCorner;
            return function(i, s) {
                this.v = shape_pool.newShape(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), 
                this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), 
                this.d = s.d, this.dynamicProperties = [], this.elem = i, this.comp = i.comp, this.frameId = -1, 
                this.mdf = !1, this.getValue = e, this.convertEllToPath = t, this.reset = r, this.p = PropertyFactory.getProp(i, s.p, 1, 0, this.dynamicProperties), 
                this.s = PropertyFactory.getProp(i, s.s, 1, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertEllToPath();
            };
        }(), h = function() {
            function t() {
                var t, e = Math.floor(this.pt.v), r = 2 * Math.PI / e, i = this.or.v, s = this.os.v, a = 2 * Math.PI * i / (4 * e), n = -Math.PI / 2, o = 3 === this.data.d ? -1 : 1;
                for (n += this.r.v, this.v._length = 0, t = 0; e > t; t += 1) {
                    var h = i * Math.cos(n), l = i * Math.sin(n), p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l), m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                    h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * s * o, l - m * a * s * o, h + p * a * s * o, l + m * a * s * o, t, !0), 
                    n += r * o;
                }
                this.paths.length = 0, this.paths[0] = this.v;
            }
            function e() {
                var t, e, r, i, s = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / s, n = !0, o = this.or.v, h = this.ir.v, l = this.os.v, p = this.is.v, m = 2 * Math.PI * o / (2 * s), f = 2 * Math.PI * h / (2 * s), c = -Math.PI / 2;
                c += this.r.v;
                var d = 3 === this.data.d ? -1 : 1;
                for (this.v._length = 0, t = 0; s > t; t += 1) {
                    e = n ? o : h, r = n ? l : p, i = n ? m : f;
                    var u = e * Math.cos(c), y = e * Math.sin(c), g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y), v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                    u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * i * r * d, y - v * i * r * d, u + g * i * r * d, y + v * i * r * d, t, !0), 
                    n = !n, c += a * d;
                }
            }
            function i() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                    var t, e = this.dynamicProperties.length;
                    for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                    this.mdf && this.convertToPath();
                }
            }
            return function(s, a) {
                this.v = shape_pool.newShape(), this.v.setPathData(!0, 0), this.elem = s, this.comp = s.comp, 
                this.data = a, this.frameId = -1, this.d = a.d, this.dynamicProperties = [], this.mdf = !1, 
                this.getValue = i, this.reset = r, 1 === a.sy ? (this.ir = PropertyFactory.getProp(s, a.ir, 0, 0, this.dynamicProperties), 
                this.is = PropertyFactory.getProp(s, a.is, 0, .01, this.dynamicProperties), this.convertToPath = e) : this.convertToPath = t, 
                this.pt = PropertyFactory.getProp(s, a.pt, 0, 0, this.dynamicProperties), this.p = PropertyFactory.getProp(s, a.p, 1, 0, this.dynamicProperties), 
                this.r = PropertyFactory.getProp(s, a.r, 0, degToRads, this.dynamicProperties), 
                this.or = PropertyFactory.getProp(s, a.or, 0, 0, this.dynamicProperties), this.os = PropertyFactory.getProp(s, a.os, 0, .01, this.dynamicProperties), 
                this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), 
                this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : this.convertToPath();
            };
        }(), l = function() {
            function t(t) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                    var e, r = this.dynamicProperties.length;
                    for (e = 0; r > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
                    this.mdf && this.convertRectToPath();
                }
            }
            function e() {
                var t = this.p.v[0], e = this.p.v[1], r = this.s.v[0] / 2, i = this.s.v[1] / 2, s = bm_min(r, i, this.r.v), a = s * (1 - roundCorner);
                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + s, t + r, e - i + a, 0, !0), 
                this.v.setTripleAt(t + r, e + i - s, t + r, e + i - a, t + r, e + i - s, 1, !0), 
                0 !== s ? (this.v.setTripleAt(t + r - s, e + i, t + r - s, e + i, t + r - a, e + i, 2, !0), 
                this.v.setTripleAt(t - r + s, e + i, t - r + a, e + i, t - r + s, e + i, 3, !0), 
                this.v.setTripleAt(t - r, e + i - s, t - r, e + i - s, t - r, e + i - a, 4, !0), 
                this.v.setTripleAt(t - r, e - i + s, t - r, e - i + a, t - r, e - i + s, 5, !0), 
                this.v.setTripleAt(t - r + s, e - i, t - r + s, e - i, t - r + a, e - i, 6, !0), 
                this.v.setTripleAt(t + r - s, e - i, t + r - a, e - i, t + r - s, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2), 
                this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + a, t + r, e - i + s, 0, !0), 
                0 !== s ? (this.v.setTripleAt(t + r - s, e - i, t + r - s, e - i, t + r - a, e - i, 1, !0), 
                this.v.setTripleAt(t - r + s, e - i, t - r + a, e - i, t - r + s, e - i, 2, !0), 
                this.v.setTripleAt(t - r, e - i + s, t - r, e - i + s, t - r, e - i + a, 3, !0), 
                this.v.setTripleAt(t - r, e + i - s, t - r, e + i - a, t - r, e + i - s, 4, !0), 
                this.v.setTripleAt(t - r + s, e + i, t - r + s, e + i, t - r + a, e + i, 5, !0), 
                this.v.setTripleAt(t + r - s, e + i, t + r - a, e + i, t + r - s, e + i, 6, !0), 
                this.v.setTripleAt(t + r, e + i - s, t + r, e + i - s, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0), 
                this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0)));
            }
            return function(i, s) {
                this.v = shape_pool.newShape(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), 
                this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, 
                this.elem = i, this.comp = i.comp, this.frameId = -1, this.d = s.d, this.dynamicProperties = [], 
                this.mdf = !1, this.getValue = t, this.convertRectToPath = e, this.reset = r, this.p = PropertyFactory.getProp(i, s.p, 1, 0, this.dynamicProperties), 
                this.s = PropertyFactory.getProp(i, s.s, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(i, s.r, 0, 0, this.dynamicProperties), 
                this.dynamicProperties.length ? this.k = !0 : this.convertRectToPath();
            };
        }(), p = {};
        return p.getShapeProp = a, p;
    }(), ShapeModifiers = function() {
        function t(t, e) {
            i[t] || (i[t] = e);
        }
        function e(t, e, r, s) {
            return new i[t](e, r, s);
        }
        var r = {}, i = {};
        return r.registerModifier = t, r.getModifier = e, r;
    }();
    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, 
    ShapeModifier.prototype.addShape = function(t) {
        this.closed || (this.shapes.push({
            shape: t.sh,
            data: t,
            localShapeCollection: shapeCollection_pool.newShapeCollection()
        }), this.addShapeToModifier(t.sh));
    }, ShapeModifier.prototype.init = function(t, e, r) {
        this.elem = t, this.frameId = -1, this.shapes = [], this.dynamicProperties = [], 
        this.mdf = !1, this.closed = !1, this.k = !1, this.isTrimming = !1, this.comp = t.comp, 
        this.initModifierProperties(t, e), this.dynamicProperties.length ? (this.k = !0, 
        r.push(this)) : this.getValue(!0);
    }, extendPrototype(ShapeModifier, TrimModifier), TrimModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = !!t, this.frameId = this.elem.globalData.frameId;
            var e, r = this.dynamicProperties.length;
            for (e = 0; r > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
            if (this.mdf || t) {
                var i = this.o.v % 360 / 360;
                0 > i && (i += 1);
                var s = this.s.v + i, a = this.e.v + i;
                if (s > a) {
                    var n = s;
                    s = a, a = n;
                }
                this.sValue = s, this.eValue = a, this.oValue = i;
            }
        }
    }, TrimModifier.prototype.initModifierProperties = function(t, e) {
        this.sValue = 0, this.eValue = 0, this.oValue = 0, this.getValue = this.processKeys, 
        this.s = PropertyFactory.getProp(t, e.s, 0, .01, this.dynamicProperties), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this.dynamicProperties), 
        this.o = PropertyFactory.getProp(t, e.o, 0, 0, this.dynamicProperties), this.m = e.m, 
        this.dynamicProperties.length || this.getValue(!0);
    }, TrimModifier.prototype.getSegmentsLength = function(t) {
        var e, r = t.c, i = t.v, s = t.o, a = t.i, n = t._length, o = [], h = 0;
        for (e = 0; n - 1 > e; e += 1) o[e] = bez.getBezierLength(i[e], i[e + 1], s[e], a[e + 1]), 
        h += o[e].addedLength;
        return r && (o[e] = bez.getBezierLength(i[e], i[0], s[e], a[0]), h += o[e].addedLength), 
        {
            lengths: o,
            totalLength: h
        };
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
        var a = [];
        1 >= e ? a.push({
            s: t,
            e: e
        }) : t >= 1 ? a.push({
            s: t - 1,
            e: e - 1
        }) : (a.push({
            s: t,
            e: 1
        }), a.push({
            s: 0,
            e: e - 1
        }));
        var n, o, h = [], l = a.length;
        for (n = 0; l > n; n += 1) if ((o = a[n]).e * s < i || o.s * s > i + r) ; else {
            var p, m;
            p = o.s * s <= i ? 0 : (o.s * s - i) / r, m = o.e * s >= i + r ? 1 : (o.e * s - i) / r, 
            h.push([ p, m ]);
        }
        return h.length || h.push([ 0, 0 ]), h;
    }, TrimModifier.prototype.processShapes = function(t) {
        var e, r, i, s, a, n = this.shapes.length, o = this.sValue, h = this.eValue, l = 0;
        if (h === o) for (r = 0; n > r; r += 1) this.shapes[r].localShapeCollection.releaseShapes(), 
        this.shapes[r].shape.mdf = !0, this.shapes[r].shape.paths = this.shapes[r].localShapeCollection; else if (1 === h && 0 === o || 0 === h && 1 === o) {
            if (this.mdf) for (r = 0; n > r; r += 1) this.shapes[r].shape.mdf = !0;
        } else {
            var p, m, f = [];
            for (r = 0; n > r; r += 1) if ((p = this.shapes[r]).shape.mdf || this.mdf || t || 2 === this.m) {
                if (e = p.shape.paths, d = e._length, a = 0, !p.shape.mdf && p.pathsData) a = p.totalShapeLength; else {
                    for (i = [], c = 0; d > c; c += 1) s = this.getSegmentsLength(e.shapes[c]), i.push(s), 
                    a += s.totalLength;
                    p.totalShapeLength = a, p.pathsData = i;
                }
                l += a, p.shape.mdf = !0;
            } else p.shape.paths = p.localShapeCollection;
            var c, d, u = o, y = h, g = 0;
            for (r = n - 1; r >= 0; r -= 1) if ((p = this.shapes[r]).shape.mdf) {
                if ((m = p.localShapeCollection).releaseShapes(), 2 === this.m && n > 1) {
                    var v = this.calculateShapeEdges(o, h, p.totalShapeLength, g, l);
                    g += p.totalShapeLength;
                } else v = [ [ u, y ] ];
                for (d = v.length, c = 0; d > c; c += 1) {
                    u = v[c][0], y = v[c][1], f.length = 0, 1 >= y ? f.push({
                        s: p.totalShapeLength * u,
                        e: p.totalShapeLength * y
                    }) : u >= 1 ? f.push({
                        s: p.totalShapeLength * (u - 1),
                        e: p.totalShapeLength * (y - 1)
                    }) : (f.push({
                        s: p.totalShapeLength * u,
                        e: p.totalShapeLength
                    }), f.push({
                        s: 0,
                        e: p.totalShapeLength * (y - 1)
                    }));
                    var b = this.addShapes(p, f[0]);
                    if (f[0].s !== f[0].e) {
                        if (f.length > 1) if (p.shape.v.c) {
                            var E = b.pop();
                            this.addPaths(b, m), b = this.addShapes(p, f[1], E);
                        } else this.addPaths(b, m), b = this.addShapes(p, f[1]);
                        this.addPaths(b, m);
                    }
                }
                p.shape.paths = m;
            }
        }
        this.dynamicProperties.length || (this.mdf = !1);
    }, TrimModifier.prototype.addPaths = function(t, e) {
        var r, i = t.length;
        for (r = 0; i > r; r += 1) e.addShape(t[r]);
    }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
        s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), 
        s.setXYAt(i[0], i[1], "v", a + 1);
    }, TrimModifier.prototype.addShapes = function(t, e, r) {
        var i, s, a, n, o, h, l, p, m = t.pathsData, f = t.shape.paths.shapes, c = t.shape.paths._length, d = 0, u = [], y = !0;
        for (r ? (o = r._length, p = r._length) : (r = shape_pool.newShape(), o = 0, p = 0), 
        u.push(r), i = 0; c > i; i += 1) {
            for (h = m[i].lengths, r.c = f[i].c, a = f[i].c ? h.length : h.length + 1, s = 1; a > s; s += 1) if (n = h[s - 1], 
            d + n.addedLength < e.s) d += n.addedLength, r.c = !1; else {
                if (d > e.e) {
                    r.c = !1;
                    break;
                }
                e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[s], f[i].v[s], r, o, y), 
                y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[s], f[i].o[s - 1], f[i].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), 
                this.addSegment(l.pt1, l.pt3, l.pt4, l.pt2, r, o, y), y = !1, r.c = !1), d += n.addedLength, 
                o += 1;
            }
            if (f[i].c) {
                if (n = h[s - 1], d <= e.e) {
                    var g = h[s - 1].addedLength;
                    e.s <= d && e.e >= d + g ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[0], f[i].v[0], r, o, y), 
                    y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[0], f[i].o[s - 1], f[i].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]), 
                    this.addSegment(l.pt1, l.pt3, l.pt4, l.pt2, r, o, y), y = !1, r.c = !1);
                } else r.c = !1;
                d += n.addedLength, o += 1;
            }
            if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), 
            d > e.e) break;
            c - 1 > i && (r = shape_pool.newShape(), y = !0, u.push(r), o = 0);
        }
        return u;
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype(ShapeModifier, RoundCornersModifier), 
    RoundCornersModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = !!t, this.frameId = this.elem.globalData.frameId;
            var e, r = this.dynamicProperties.length;
            for (e = 0; r > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
        }
    }, RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this.dynamicProperties), 
        this.dynamicProperties.length || this.getValue(!0);
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
        var r = shape_pool.newShape();
        r.c = t.c;
        var i, s, a, n, o, h, l, p, m, f, c, d, u, y = t._length, g = 0;
        for (i = 0; y > i; i += 1) s = t.v[i], n = t.o[i], a = t.i[i], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], 
        h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)), l = h ? Math.min(h / 2, e) / h : 0, 
        p = d = s[0] + (o[0] - s[0]) * l, m = u = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, 
        c = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], 
        h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)), l = h ? Math.min(h / 2, e) / h : 0, 
        p = f = s[0] + (o[0] - s[0]) * l, m = c = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, 
        u = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g), g += 1) : (r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g), 
        g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), 
        g += 1);
        return r;
    }, RoundCornersModifier.prototype.processShapes = function(t) {
        var e, r, i, s, a = this.shapes.length, n = this.rd.v;
        if (0 !== n) {
            var o, h;
            for (r = 0; a > r; r += 1) {
                if (o = this.shapes[r], o.shape.paths, h = o.localShapeCollection, o.shape.mdf || this.mdf || t) for (h.releaseShapes(), 
                o.shape.mdf = !0, e = o.shape.paths.shapes, s = o.shape.paths._length, i = 0; s > i; i += 1) h.addShape(this.processPath(e[i], n));
                o.shape.paths = o.localShapeCollection;
            }
        }
        this.dynamicProperties.length || (this.mdf = !1);
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype(ShapeModifier, RepeaterModifier), 
    RepeaterModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = !!t, this.frameId = this.elem.globalData.frameId;
            var e, r = this.dynamicProperties.length;
            for (e = 0; r > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
        }
    }, RepeaterModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this.dynamicProperties), 
        this.o = PropertyFactory.getProp(t, e.o, 0, null, this.dynamicProperties), this.tr = PropertyFactory.getProp(t, e.tr, 2, null, this.dynamicProperties), 
        this.dynamicProperties.length || this.getValue(!0), this.pMatrix = new Matrix(), 
        this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), 
        this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
        var n = a ? -1 : 1, o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
        t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), 
        e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), 
        r.scale(a ? 1 / o : o, a ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
    }, RepeaterModifier.prototype.processShapes = function(t) {
        this.dynamicProperties.length || (this.mdf = !1);
        var e, r, i, s, a, n, o, h, l, p, m, f, c, d, u = this.shapes.length, y = Math.ceil(this.c.v), g = this.o.v, v = g % 1, b = g > 0 ? Math.floor(g) : Math.ceil(g), E = (this.tr.v.props, 
        this.pMatrix.props), x = this.rMatrix.props, k = this.sMatrix.props, P = 0;
        for (e = 0; u > e; e += 1) {
            if (s = this.shapes[e], a = s.localShapeCollection, s.shape.mdf || this.mdf || t) {
                if (a.releaseShapes(), s.shape.mdf = !0, h = s.shape.paths, l = h.shapes, i = h._length, 
                P = 0, this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), 
                this.matrix.reset(), g > 0) {
                    for (;b > P; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), 
                    P += 1;
                    v && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, v, !1), 
                    P += v);
                } else if (0 > b) {
                    for (;P > b; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), 
                    P -= 1;
                    v && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -v, !0), 
                    P -= v);
                }
                for (r = 0; i > r; r += 1) for (n = l[r], o = 0; y > o; o += 1) {
                    if (0 !== o && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), 
                    s.data.transformers) {
                        for (s.data.lvl = 0, d = 0, m = s.data.elements.length, p = 0; m > p; p += 1) d = Math.max(d, s.data.elements[p].st.lvl);
                        for (p = (m = (c = s.data.transformers).length) - 1; p >= d; p -= 1) f = c[p].mProps.v.props, 
                        this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]);
                    }
                    0 !== P && (this.matrix.transform(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], x[12], x[13], x[14], x[15]), 
                    this.matrix.transform(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7], k[8], k[9], k[10], k[11], k[12], k[13], k[14], k[15]), 
                    this.matrix.transform(E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11], E[12], E[13], E[14], E[15])), 
                    a.addShape(this.processPath(n, this.matrix)), this.matrix.reset(), P += 1;
                }
            }
            s.shape.paths = a;
        }
    }, RepeaterModifier.prototype.processPath = function(t, e) {
        return shape_pool.clone(t, e);
    }, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(Array.apply(null, {
            length: this._maxLength
        })), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
        var t;
        for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
        this._length = 0;
    };
    var ImagePreloader = function() {
        function t() {
            this.loadedAssets += 1, this.loadedAssets, this.totalImages;
        }
        function e(t) {
            var e = "";
            if (this.assetsPath) {
                var r = t.p;
                -1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r;
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e;
        }
        function r(e) {
            var r = document.createElement("img");
            r.addEventListener("load", t.bind(this), !1), r.addEventListener("error", t.bind(this), !1), 
            r.src = e;
        }
        function i(t) {
            this.totalAssets = t.length;
            var i;
            for (i = 0; i < this.totalAssets; i += 1) t[i].layers || (r.bind(this)(e.bind(this)(t[i])), 
            this.totalImages += 1);
        }
        function s(t) {
            this.path = t || "";
        }
        function a(t) {
            this.assetsPath = t || "";
        }
        return function() {
            this.loadAssets = i, this.setAssetsPath = a, this.setPath = s, this.assetsPath = "", 
            this.path = "", this.totalAssets = 0, this.totalImages = 0, this.loadedAssets = 0;
        };
    }(), featureSupport = function() {
        var t = {
            maskType: !0
        };
        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), 
        t;
    }(), filtersFactory = function() {
        function t(t) {
            var e = document.createElementNS(svgNS, "filter");
            return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), 
            e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), 
            e.setAttribute("height", "100%"), e;
        }
        function e() {
            var t = document.createElementNS(svgNS, "feColorMatrix");
            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), 
            t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 0 1"), t;
        }
        var r = {};
        return r.createFilter = t, r.createAlphaToLuminanceFilter = e, r;
    }(), pooling = function() {
        function t(t) {
            return t.concat(Array.apply(null, {
                length: t.length
            }));
        }
        return {
            double: t
        };
    }(), point_pool = function() {
        function t() {
            var t;
            return i ? (i -= 1, t = a[i]) : t = [ .1, .1 ], t;
        }
        function e(t) {
            i === s && (a = pooling.double(a), s *= 2), a[i] = t, i += 1;
        }
        var r = {
            newPoint: t,
            release: e
        }, i = 0, s = 8, a = Array.apply(null, {
            length: s
        });
        return r;
    }(), shape_pool = function() {
        function t() {
            var t;
            return a ? (a -= 1, t = o[a]) : t = new ShapePath(), t;
        }
        function e(t) {
            a === n && (o = pooling.double(o), n *= 2);
            var e, r = t._length;
            for (e = 0; r > e; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), 
            point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1, o[a] = t, a += 1;
        }
        function r(t, r) {
            for (;r--; ) e(t[r]);
        }
        function i(e, r) {
            var i, s = e._length, a = t();
            a._length = e._length, a.c = e.c;
            var n;
            for (i = 0; s > i; i += 1) r ? (n = r.applyToPointArray(e.v[i][0], e.v[i][1], 0, 2), 
            a.setXYAt(n[0], n[1], "v", i), point_pool.release(n), n = r.applyToPointArray(e.o[i][0], e.o[i][1], 0, 2), 
            a.setXYAt(n[0], n[1], "o", i), point_pool.release(n), n = r.applyToPointArray(e.i[i][0], e.i[i][1], 0, 2), 
            a.setXYAt(n[0], n[1], "i", i), point_pool.release(n)) : a.setTripleAt(e.v[i][0], e.v[i][1], e.o[i][0], e.o[i][1], e.i[i][0], e.i[i][1], i);
            return a;
        }
        var s = {
            clone: i,
            newShape: t,
            release: e,
            releaseArray: r
        }, a = 0, n = 4, o = Array.apply(null, {
            length: n
        });
        return s;
    }(), shapeCollection_pool = function() {
        function t() {
            var t;
            return s ? (s -= 1, t = n[s]) : t = new ShapeCollection(), t;
        }
        function e(t) {
            var e, r = t._length;
            for (e = 0; r > e; e += 1) shape_pool.release(t.shapes[e]);
            t._length = 0, s === a && (n = pooling.double(n), a *= 2), n[s] = t, s += 1;
        }
        function r(t, r) {
            e(t), s === a && (n = pooling.double(n), a *= 2), n[s] = t, s += 1;
        }
        var i = {
            newShapeCollection: t,
            release: e,
            clone: r
        }, s = 0, a = 4, n = Array.apply(null, {
            length: a
        });
        return i;
    }();
    BaseRenderer.prototype.checkLayers = function(t) {
        var e, r, i = this.layers.length;
        for (this.completeLayers = !0, e = i - 1; e >= 0; e--) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), 
        this.completeLayers = !!this.elements[e] && this.completeLayers;
        this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(t) {
        switch (t.ty) {
          case 2:
            return this.createImage(t);

          case 0:
            return this.createComp(t);

          case 1:
            return this.createSolid(t);

          case 4:
            return this.createShape(t);

          case 5:
            return this.createText(t);

          case 13:
            return this.createCamera(t);

          case 99:
            return null;
        }
        return this.createBase(t);
    }, BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.buildAllItems = function() {
        var t, e = this.layers.length;
        for (t = 0; e > t; t += 1) this.buildItem(t);
        this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(t) {
        this.completeLayers = !1;
        var e, r, i = t.length, s = this.layers.length;
        for (e = 0; i > e; e += 1) for (r = 0; s > r; ) {
            if (this.layers[r].id == t[e].id) {
                this.layers[r] = t[e];
                break;
            }
            r += 1;
        }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
        this.globalData.projectInterface = t;
    }, BaseRenderer.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
        r = r || [];
        for (var i = this.elements, s = this.layers, a = 0, n = s.length; n > a; ) s[a].ind == e && (i[a] && !0 !== i[a] ? void 0 !== s[a].parent ? (r.push(i[a]), 
        i[a]._isParent = !0, this.buildElementParenting(t, s[a].parent, r)) : (r.push(i[a]), 
        i[a]._isParent = !0, t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), 
        a += 1;
    }, BaseRenderer.prototype.addPendingElement = function(t) {
        this.pendingElements.push(t);
    }, extendPrototype(BaseRenderer, SVGRenderer), SVGRenderer.prototype.createBase = function(t) {
        return new SVGBaseElement(t, this.layerElement, this.globalData, this);
    }, SVGRenderer.prototype.createShape = function(t) {
        return new IShapeElement(t, this.layerElement, this.globalData, this);
    }, SVGRenderer.prototype.createText = function(t) {
        return new SVGTextElement(t, this.layerElement, this.globalData, this);
    }, SVGRenderer.prototype.createImage = function(t) {
        return new IImageElement(t, this.layerElement, this.globalData, this);
    }, SVGRenderer.prototype.createComp = function(t) {
        return new ICompElement(t, this.layerElement, this.globalData, this);
    }, SVGRenderer.prototype.createSolid = function(t) {
        return new ISolidElement(t, this.layerElement, this.globalData, this);
    }, SVGRenderer.prototype.configAnimation = function(t) {
        this.layerElement = document.createElementNS(svgNS, "svg"), this.layerElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), 
        this.layerElement.setAttribute("width", t.w), this.layerElement.setAttribute("height", t.h), 
        this.layerElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.layerElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), 
        this.layerElement.style.width = "100%", this.layerElement.style.height = "100%", 
        this.animationItem.wrapper.appendChild(this.layerElement);
        var e = document.createElementNS(svgNS, "defs");
        this.globalData.defs = e, this.layerElement.appendChild(e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), 
        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), 
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.frameId = 0, 
        this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
        }, this.data = t, this.globalData.frameRate = t.fr;
        var r = document.createElementNS(svgNS, "clipPath"), i = document.createElementNS(svgNS, "rect");
        i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), 
        i.setAttribute("y", 0);
        var s = "animationMask_" + randomString(10);
        r.setAttribute("id", s), r.appendChild(i);
        var a = document.createElementNS(svgNS, "g");
        a.setAttribute("clip-path", "url(#" + s + ")"), this.layerElement.appendChild(a), 
        e.appendChild(r), this.layerElement = a, this.layers = t.layers, this.globalData.fontManager = new FontManager(), 
        this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), 
        this.elements = Array.apply(null, {
            length: t.layers.length
        });
    }, SVGRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; e > t; t++) this.elements[t] && this.elements[t].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            e[t] = !0;
            var r = this.createItem(this.layers[t]);
            e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), 
            r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), 
            this.addPendingElement(r)));
        }
    }, SVGRenderer.prototype.checkPendingElements = function() {
        for (;this.pendingElements.length; ) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt) for (var e = 0, r = this.elements.length; r > e; ) {
                if (this.elements[e] === t) {
                    t.setMatte(this.elements[e - 1].layerId);
                    break;
                }
                e += 1;
            }
        }
    }, SVGRenderer.prototype.renderFrame = function(t) {
        if (this.renderedFrame != t && !this.destroyed) {
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, 
            this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t;
            var e, r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e--) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            for (e = r - 1; e >= 0; e--) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
        }
    }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
        var r = t.getBaseElement();
        if (r) {
            for (var i, s = 0; e > s; ) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()), 
            s += 1;
            i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r);
        }
    }, SVGRenderer.prototype.hide = function() {
        this.layerElement.style.display = "none";
    }, SVGRenderer.prototype.show = function() {
        this.layerElement.style.display = "block";
    }, SVGRenderer.prototype.searchExtraCompositions = function(t) {
        var e, r = t.length, i = document.createElementNS(svgNS, "g");
        for (e = 0; r > e; e += 1) if (t[e].xt) {
            var s = this.createComp(t[e], i, this.globalData.comp, null);
            s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
        }
    }, MaskElement.prototype.getMaskProperty = function(t) {
        return this.viewData[t].prop;
    }, MaskElement.prototype.prepareFrame = function() {
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue();
    }, MaskElement.prototype.renderFrame = function(t) {
        var e, r = this.masksProperties.length;
        for (e = 0; r > e; e++) if ((this.viewData[e].prop.mdf || this.firstFrame) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), 
        (this.viewData[e].op.mdf || this.firstFrame) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), 
        "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp.mdf || this.firstFrame) && (this.viewData[e].invRect.setAttribute("x", -t.props[12]), 
        this.viewData[e].invRect.setAttribute("y", -t.props[13])), this.storedData[e].x && (this.storedData[e].x.mdf || this.firstFrame))) {
            var i = this.storedData[e].expan;
            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", 
            this.storedData[e].elem.setAttribute("filter", "url(#" + this.storedData[e].filterId + ")")), 
            i.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", 
            this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
        }
        this.firstFrame = !1;
    }, MaskElement.prototype.getMaskelement = function() {
        return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
        var t = "M0,0 ";
        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, 
        t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
    }, MaskElement.prototype.drawPath = function(t, e, r) {
        var i, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
        for (s = e._length, i = 1; s > i; i += 1) a += " C" + bm_rnd(e.o[i - 1][0]) + "," + bm_rnd(e.o[i - 1][1]) + " " + bm_rnd(e.i[i][0]) + "," + bm_rnd(e.i[i][1]) + " " + bm_rnd(e.v[i][0]) + "," + bm_rnd(e.v[i][1]);
        e.c && s > 1 && (a += " C" + bm_rnd(e.o[i - 1][0]) + "," + bm_rnd(e.o[i - 1][1]) + " " + bm_rnd(e.i[0][0]) + "," + bm_rnd(e.i[0][1]) + " " + bm_rnd(e.v[0][0]) + "," + bm_rnd(e.v[0][1])), 
        r.lastPath !== a && (r.elem && (e.c ? t.inv ? r.elem.setAttribute("d", this.solidPath + a) : r.elem.setAttribute("d", a) : r.elem.setAttribute("d", "")), 
        r.lastPath = a);
    }, MaskElement.prototype.getMask = function(t) {
        for (var e = 0, r = this.masksProperties.length; r > e; ) {
            if (this.masksProperties[e].nm === t) return {
                maskPath: this.viewData[e].prop.pv
            };
            e += 1;
        }
    }, MaskElement.prototype.destroy = function() {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, 
        this.paths = null, this.masksProperties = null;
    }, BaseElement.prototype.checkMasks = function() {
        if (!this.data.hasMask) return !1;
        for (var t = 0, e = this.data.masksProperties.length; e > t; ) {
            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
            t += 1;
        }
        return !1;
    }, BaseElement.prototype.checkParenting = function() {
        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent);
    }, BaseElement.prototype.prepareFrame = function(t) {
        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isVisible && (this.elemMdf = !0, 
        this.globalData.mdf = !0, this.isVisible = !0, this.firstFrame = !0, this.data.hasMask && (this.maskManager.firstFrame = !0)) : !1 !== this.isVisible && (this.elemMdf = !0, 
        this.globalData.mdf = !0, this.isVisible = !1);
        var e, r = this.dynamicProperties.length;
        for (e = 0; r > e; e += 1) (this.isVisible || this._isParent && "transform" === this.dynamicProperties[e].type) && (this.dynamicProperties[e].getValue(), 
        this.dynamicProperties[e].mdf && (this.elemMdf = !0, this.globalData.mdf = !0));
        return this.data.hasMask && this.isVisible && this.maskManager.prepareFrame(t * this.data.sr), 
        this.currentFrameNum = t * this.data.sr, this.isVisible;
    }, BaseElement.prototype.globalToLocal = function(t) {
        var e = [];
        e.push(this.finalTransform);
        for (var r = !0, i = this.comp; r; ) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), 
        i = i.comp) : r = !1;
        var s, a, n = e.length;
        for (s = 0; n > s; s += 1) a = e[s].mat.applyToPointArray(0, 0, 0), t = [ t[0] - a[0], t[1] - a[1], 0 ];
        return t;
    }, BaseElement.prototype.initExpressions = function() {
        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.layerInterface.registerMaskInterface(this.maskManager);
        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? this.layerInterface.shapeInterface = ShapeExpressionInterface.createShapeInterface(this.shapesData, this.viewData, this.layerInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this));
    }, BaseElement.prototype.setBlendMode = function() {
        var t = "";
        switch (this.data.bm) {
          case 1:
            t = "multiply";
            break;

          case 2:
            t = "screen";
            break;

          case 3:
            t = "overlay";
            break;

          case 4:
            t = "darken";
            break;

          case 5:
            t = "lighten";
            break;

          case 6:
            t = "color-dodge";
            break;

          case 7:
            t = "color-burn";
            break;

          case 8:
            t = "hard-light";
            break;

          case 9:
            t = "soft-light";
            break;

          case 10:
            t = "difference";
            break;

          case 11:
            t = "exclusion";
            break;

          case 12:
            t = "hue";
            break;

          case 13:
            t = "saturation";
            break;

          case 14:
            t = "color";
            break;

          case 15:
            t = "luminosity";
        }
        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
    }, BaseElement.prototype.init = function() {
        this.data.sr || (this.data.sr = 1), this.dynamicProperties = [], this.data.ef && (this.effects = new EffectsManager(this.data, this, this.dynamicProperties)), 
        this.hidden = !1, this.firstFrame = !0, this.isVisible = !1, this._isParent = !1, 
        this.currentFrameNum = -99999, this.lastNum = -99999, this.data.ks && (this.finalTransform = {
            mProp: PropertyFactory.getProp(this, this.data.ks, 2, null, this.dynamicProperties),
            matMdf: !1,
            opMdf: !1,
            mat: new Matrix(),
            opacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.finalTransform.op = this.finalTransform.mProp.o, 
        this.transform = this.finalTransform.mProp, 11 !== this.data.ty && this.createElements(), 
        this.data.hasMask && this.addMasks(this.data)), this.elemMdf = !1;
    }, BaseElement.prototype.getType = function() {
        return this.type;
    }, BaseElement.prototype.resetHierarchy = function() {
        this.hierarchy ? this.hierarchy.length = 0 : this.hierarchy = [];
    }, BaseElement.prototype.getHierarchy = function() {
        return this.hierarchy || (this.hierarchy = []), this.hierarchy;
    }, BaseElement.prototype.setHierarchy = function(t) {
        this.hierarchy = t;
    }, BaseElement.prototype.getLayerSize = function() {
        return 5 === this.data.ty ? {
            w: this.data.textData.width,
            h: this.data.textData.height
        } : {
            w: this.data.width,
            h: this.data.height
        };
    }, BaseElement.prototype.hide = function() {}, BaseElement.prototype.mHelper = new Matrix(), 
    createElement(BaseElement, SVGBaseElement), SVGBaseElement.prototype.createElements = function() {
        this.layerElement = document.createElementNS(svgNS, "g"), this.transformedElement = this.layerElement, 
        this.data.hasMask && (this.maskedElement = this.layerElement);
        var t = null;
        if (this.data.td) {
            if (3 == this.data.td || 1 == this.data.td) {
                var e = document.createElementNS(svgNS, "mask");
                if (e.setAttribute("id", this.layerId), e.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), 
                e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e), !featureSupport.maskType && 1 == this.data.td) {
                    e.setAttribute("mask-type", "luminance");
                    var r = randomString(10), i = filtersFactory.createFilter(r);
                    this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), 
                    (h = document.createElementNS(svgNS, "g")).appendChild(this.layerElement), t = h, 
                    e.appendChild(h), h.setAttribute("filter", "url(#" + r + ")");
                }
            } else if (2 == this.data.td) {
                var s = document.createElementNS(svgNS, "mask");
                s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
                var a = document.createElementNS(svgNS, "g");
                s.appendChild(a);
                var r = randomString(10), i = filtersFactory.createFilter(r), n = document.createElementNS(svgNS, "feColorMatrix");
                n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), 
                n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"), i.appendChild(n), 
                this.globalData.defs.appendChild(i);
                var o = document.createElementNS(svgNS, "rect");
                if (o.setAttribute("width", this.comp.data.w), o.setAttribute("height", this.comp.data.h), 
                o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("fill", "#ffffff"), 
                o.setAttribute("opacity", "0"), a.setAttribute("filter", "url(#" + r + ")"), a.appendChild(o), 
                a.appendChild(this.layerElement), t = a, !featureSupport.maskType) {
                    s.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    var h = document.createElementNS(svgNS, "g");
                    a.appendChild(o), h.appendChild(this.layerElement), t = h, a.appendChild(h);
                }
                this.globalData.defs.appendChild(s);
            }
        } else (this.data.hasMask || this.data.tt) && this.data.tt ? (this.matteElement = document.createElementNS(svgNS, "g"), 
        this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (!this.data.ln && !this.data.cl || 4 !== this.data.ty && 0 !== this.data.ty || (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), 
        this.data.cl && this.layerElement.setAttribute("class", this.data.cl)), 0 === this.data.ty) {
            var l = document.createElementNS(svgNS, "clipPath"), p = document.createElementNS(svgNS, "path");
            p.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var m = "cp_" + randomString(8);
            if (l.setAttribute("id", m), l.appendChild(p), this.globalData.defs.appendChild(l), 
            this.checkMasks()) {
                var f = document.createElementNS(svgNS, "g");
                f.setAttribute("clip-path", "url(#" + m + ")"), f.appendChild(this.layerElement), 
                this.transformedElement = f, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
            } else this.layerElement.setAttribute("clip-path", "url(#" + m + ")");
        }
        0 !== this.data.bm && this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null), 
        this.data.ef && (this.effectsManager = new SVGEffects(this)), this.checkParenting();
    }, SVGBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, SVGBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty || this.data.hd || !this.isVisible) return !1;
        this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.firstFrame || this.finalTransform.op.mdf, 
        this.finalTransform.matMdf = this.firstFrame || this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v;
        var e, r = this.finalTransform.mat;
        if (this.hierarchy) {
            var i = 0, s = this.hierarchy.length;
            if (!this.finalTransform.matMdf) for (;s > i; ) {
                if (this.hierarchy[i].finalTransform.mProp.mdf) {
                    this.finalTransform.matMdf = !0;
                    break;
                }
                i += 1;
            }
            if (this.finalTransform.matMdf) for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), 
            i = 0; s > i; i += 1) e = this.hierarchy[i].finalTransform.mProp.v.props, r.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
        } else this.isVisible && (r = this.finalTransform.mProp.v);
        return this.finalTransform.matMdf && this.layerElement && this.transformedElement.setAttribute("transform", r.to2dCSS()), 
        this.finalTransform.opMdf && this.layerElement && this.transformedElement.setAttribute("opacity", this.finalTransform.op.v), 
        this.data.hasMask && this.maskManager.renderFrame(r), this.effectsManager && this.effectsManager.renderFrame(this.firstFrame), 
        this.isVisible;
    }, SVGBaseElement.prototype.destroy = function() {
        this.layerElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), 
        this.maskManager && this.maskManager.destroy();
    }, SVGBaseElement.prototype.getBaseElement = function() {
        return this.baseElement;
    }, SVGBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new MaskElement(t, this, this.globalData);
    }, SVGBaseElement.prototype.setMatte = function(t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(#" + t + ")");
    }, SVGBaseElement.prototype.setMatte = function(t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(#" + t + ")");
    }, SVGBaseElement.prototype.hide = function() {}, ITextElement.prototype.init = function() {
        this._parent.init.call(this), this.lettersChangedFlag = !1, this.currentTextDocumentData = {};
        var t = this.data;
        this.viewData = {
            m: {
                a: PropertyFactory.getProp(this, t.t.m.a, 1, 0, this.dynamicProperties)
            }
        };
        var e = this.data.t;
        if (e.a.length) {
            this.viewData.a = Array.apply(null, {
                length: e.a.length
            });
            var r, i, s, a = e.a.length;
            for (r = 0; a > r; r += 1) s = e.a[r], i = {
                a: {},
                s: {}
            }, "r" in s.a && (i.a.r = PropertyFactory.getProp(this, s.a.r, 0, degToRads, this.dynamicProperties)), 
            "rx" in s.a && (i.a.rx = PropertyFactory.getProp(this, s.a.rx, 0, degToRads, this.dynamicProperties)), 
            "ry" in s.a && (i.a.ry = PropertyFactory.getProp(this, s.a.ry, 0, degToRads, this.dynamicProperties)), 
            "sk" in s.a && (i.a.sk = PropertyFactory.getProp(this, s.a.sk, 0, degToRads, this.dynamicProperties)), 
            "sa" in s.a && (i.a.sa = PropertyFactory.getProp(this, s.a.sa, 0, degToRads, this.dynamicProperties)), 
            "s" in s.a && (i.a.s = PropertyFactory.getProp(this, s.a.s, 1, .01, this.dynamicProperties)), 
            "a" in s.a && (i.a.a = PropertyFactory.getProp(this, s.a.a, 1, 0, this.dynamicProperties)), 
            "o" in s.a && (i.a.o = PropertyFactory.getProp(this, s.a.o, 0, .01, this.dynamicProperties)), 
            "p" in s.a && (i.a.p = PropertyFactory.getProp(this, s.a.p, 1, 0, this.dynamicProperties)), 
            "sw" in s.a && (i.a.sw = PropertyFactory.getProp(this, s.a.sw, 0, 0, this.dynamicProperties)), 
            "sc" in s.a && (i.a.sc = PropertyFactory.getProp(this, s.a.sc, 1, 0, this.dynamicProperties)), 
            "fc" in s.a && (i.a.fc = PropertyFactory.getProp(this, s.a.fc, 1, 0, this.dynamicProperties)), 
            "fh" in s.a && (i.a.fh = PropertyFactory.getProp(this, s.a.fh, 0, 0, this.dynamicProperties)), 
            "fs" in s.a && (i.a.fs = PropertyFactory.getProp(this, s.a.fs, 0, .01, this.dynamicProperties)), 
            "fb" in s.a && (i.a.fb = PropertyFactory.getProp(this, s.a.fb, 0, .01, this.dynamicProperties)), 
            "t" in s.a && (i.a.t = PropertyFactory.getProp(this, s.a.t, 0, 0, this.dynamicProperties)), 
            i.s = PropertyFactory.getTextSelectorProp(this, s.s, this.dynamicProperties), i.s.t = s.s.t, 
            this.viewData.a[r] = i;
        } else this.viewData.a = [];
        e.p && "m" in e.p ? (this.viewData.p = {
            f: PropertyFactory.getProp(this, e.p.f, 0, 0, this.dynamicProperties),
            l: PropertyFactory.getProp(this, e.p.l, 0, 0, this.dynamicProperties),
            r: e.p.r,
            m: this.maskManager.getMaskProperty(e.p.m)
        }, this.maskPath = !0) : this.maskPath = !1;
    }, ITextElement.prototype.prepareFrame = function(t) {
        var e = 0, r = this.data.t.d.k.length, i = this.data.t.d.k[e].s;
        for (e += 1; r > e && !(this.data.t.d.k[e].t > t); ) i = this.data.t.d.k[e].s, e += 1;
        this.lettersChangedFlag = !1, i !== this.currentTextDocumentData && (this.currentTextDocumentData = i, 
        this.lettersChangedFlag = !0, this.buildNewText()), this._parent.prepareFrame.call(this, t);
    }, ITextElement.prototype.createPathShape = function(t, e) {
        var r, i, s, a, n = e.length, o = "";
        for (r = 0; n > r; r += 1) {
            for (s = e[r].ks.k.i.length, a = e[r].ks.k, i = 1; s > i; i += 1) 1 == i && (o += " M" + t.applyToPointStringified(a.v[0][0], a.v[0][1])), 
            o += " C" + t.applyToPointStringified(a.o[i - 1][0], a.o[i - 1][1]) + " " + t.applyToPointStringified(a.i[i][0], a.i[i][1]) + " " + t.applyToPointStringified(a.v[i][0], a.v[i][1]);
            o += " C" + t.applyToPointStringified(a.o[i - 1][0], a.o[i - 1][1]) + " " + t.applyToPointStringified(a.i[0][0], a.i[0][1]) + " " + t.applyToPointStringified(a.v[0][0], a.v[0][1]), 
            o += "z";
        }
        return o;
    }, ITextElement.prototype.getMeasures = function() {
        var t, e, r, i, s = this.mHelper, a = this.renderType, n = this.data, o = this.currentTextDocumentData, h = o.l;
        if (this.maskPath) {
            var l = this.viewData.p.m;
            if (!this.viewData.p.n || this.viewData.p.mdf) {
                var p = l.v;
                this.viewData.p.r && (p = reversePath(p));
                y = {
                    tLength: 0,
                    segments: []
                };
                i = p.v.length - 1;
                var m, f = 0;
                for (r = 0; i > r; r += 1) m = {
                    s: p.v[r],
                    e: p.v[r + 1],
                    to: [ p.o[r][0] - p.v[r][0], p.o[r][1] - p.v[r][1] ],
                    ti: [ p.i[r + 1][0] - p.v[r + 1][0], p.i[r + 1][1] - p.v[r + 1][1] ]
                }, bez.buildBezierData(m), y.tLength += m.bezierData.segmentLength, y.segments.push(m), 
                f += m.bezierData.segmentLength;
                r = i, l.v.c && (m = {
                    s: p.v[r],
                    e: p.v[0],
                    to: [ p.o[r][0] - p.v[r][0], p.o[r][1] - p.v[r][1] ],
                    ti: [ p.i[0][0] - p.v[0][0], p.i[0][1] - p.v[0][1] ]
                }, bez.buildBezierData(m), y.tLength += m.bezierData.segmentLength, y.segments.push(m), 
                f += m.bezierData.segmentLength), this.viewData.p.pi = y;
            }
            var c, d, u, y = this.viewData.p.pi, g = this.viewData.p.f.v, v = 0, b = 1, E = 0, x = !0, k = y.segments;
            if (0 > g && l.v.c) for (y.tLength < Math.abs(g) && (g = -Math.abs(g) % y.tLength), 
            v = k.length - 1, u = k[v].bezierData.points, b = u.length - 1; 0 > g; ) g += u[b].partialLength, 
            0 > (b -= 1) && (v -= 1, u = k[v].bezierData.points, b = u.length - 1);
            d = (u = k[v].bezierData.points)[b - 1];
            var P, S, A = (c = u[b]).partialLength;
        }
        i = h.length, t = 0, e = 0;
        var C, M, D, w, _, T = 1.2 * o.s * .714, F = !0, I = this.viewData, V = Array.apply(null, {
            length: i
        });
        w = I.a.length;
        var B, R, N, L, O, G, j, H, z, W, Y, q, X, U, $, Z, Q = -1, J = g, K = v, tt = b, et = -1, rt = 0;
        for (r = 0; i > r; r += 1) if (s.reset(), G = 1, h[r].n) t = 0, e += o.yOffset, 
        e += F ? 1 : 0, g = J, F = !1, rt = 0, this.maskPath && (v = K, b = tt, u = k[v].bezierData.points, 
        d = u[b - 1], c = u[b], A = c.partialLength, E = 0), V[r] = this.emptyProp; else {
            if (this.maskPath) {
                if (et !== h[r].line) {
                    switch (o.j) {
                      case 1:
                        g += f - o.lineWidths[h[r].line];
                        break;

                      case 2:
                        g += (f - o.lineWidths[h[r].line]) / 2;
                    }
                    et = h[r].line;
                }
                Q !== h[r].ind && (h[Q] && (g += h[Q].extra), g += h[r].an / 2, Q = h[r].ind), g += I.m.a.v[0] * h[r].an / 200;
                var it = 0;
                for (D = 0; w > D; D += 1) "p" in (C = I.a[D].a) && (M = I.a[D].s, R = M.getMult(h[r].anIndexes[D], n.t.a[D].s.totalChars), 
                it += R.length ? C.p.v[0] * R[0] : C.p.v[0] * R), "a" in C && (M = I.a[D].s, R = M.getMult(h[r].anIndexes[D], n.t.a[D].s.totalChars), 
                it += R.length ? C.a.v[0] * R[0] : C.a.v[0] * R);
                for (x = !0; x; ) E + A >= g + it || !u ? (P = (g + it - E) / c.partialLength, L = d.point[0] + (c.point[0] - d.point[0]) * P, 
                O = d.point[1] + (c.point[1] - d.point[1]) * P, s.translate(-I.m.a.v[0] * h[r].an / 200, -I.m.a.v[1] * T / 100), 
                x = !1) : u && (E += c.partialLength, (b += 1) >= u.length && (b = 0, v += 1, k[v] ? u = k[v].bezierData.points : l.v.c ? (b = 0, 
                v = 0, u = k[v].bezierData.points) : (E -= c.partialLength, u = null)), u && (d = c, 
                c = u[b], A = c.partialLength));
                N = h[r].an / 2 - h[r].add, s.translate(-N, 0, 0);
            } else N = h[r].an / 2 - h[r].add, s.translate(-N, 0, 0), s.translate(-I.m.a.v[0] * h[r].an / 200, -I.m.a.v[1] * T / 100, 0);
            for (rt += h[r].l / 2, D = 0; w > D; D += 1) "t" in (C = I.a[D].a) && (M = I.a[D].s, 
            R = M.getMult(h[r].anIndexes[D], n.t.a[D].s.totalChars), this.maskPath ? g += R.length ? C.t * R[0] : C.t * R : t += R.length ? C.t.v * R[0] : C.t.v * R);
            for (rt += h[r].l / 2, o.strokeWidthAnim && (H = o.sw || 0), o.strokeColorAnim && (j = o.sc ? [ o.sc[0], o.sc[1], o.sc[2] ] : [ 0, 0, 0 ]), 
            o.fillColorAnim && (z = [ o.fc[0], o.fc[1], o.fc[2] ]), D = 0; w > D; D += 1) "a" in (C = I.a[D].a) && (M = I.a[D].s, 
            R = M.getMult(h[r].anIndexes[D], n.t.a[D].s.totalChars), R.length ? s.translate(-C.a.v[0] * R[0], -C.a.v[1] * R[1], C.a.v[2] * R[2]) : s.translate(-C.a.v[0] * R, -C.a.v[1] * R, C.a.v[2] * R));
            for (D = 0; w > D; D += 1) "s" in (C = I.a[D].a) && (M = I.a[D].s, R = M.getMult(h[r].anIndexes[D], n.t.a[D].s.totalChars), 
            R.length ? s.scale(1 + (C.s.v[0] - 1) * R[0], 1 + (C.s.v[1] - 1) * R[1], 1) : s.scale(1 + (C.s.v[0] - 1) * R, 1 + (C.s.v[1] - 1) * R, 1));
            for (D = 0; w > D; D += 1) {
                if (C = I.a[D].a, M = I.a[D].s, R = M.getMult(h[r].anIndexes[D], n.t.a[D].s.totalChars), 
                "sk" in C && (R.length ? s.skewFromAxis(-C.sk.v * R[0], C.sa.v * R[1]) : s.skewFromAxis(-C.sk.v * R, C.sa.v * R)), 
                "r" in C && s.rotateZ(R.length ? -C.r.v * R[2] : -C.r.v * R), "ry" in C && s.rotateY(R.length ? C.ry.v * R[1] : C.ry.v * R), 
                "rx" in C && s.rotateX(R.length ? C.rx.v * R[0] : C.rx.v * R), "o" in C && (G += R.length ? (C.o.v * R[0] - G) * R[0] : (C.o.v * R - G) * R), 
                o.strokeWidthAnim && "sw" in C && (H += R.length ? C.sw.v * R[0] : C.sw.v * R), 
                o.strokeColorAnim && "sc" in C) for (W = 0; 3 > W; W += 1) j[W] = Math.round(R.length ? 255 * (j[W] + (C.sc.v[W] - j[W]) * R[0]) : 255 * (j[W] + (C.sc.v[W] - j[W]) * R));
                if (o.fillColorAnim) {
                    if ("fc" in C) for (W = 0; 3 > W; W += 1) z[W] = R.length ? z[W] + (C.fc.v[W] - z[W]) * R[0] : z[W] + (C.fc.v[W] - z[W]) * R;
                    "fh" in C && (z = R.length ? addHueToRGB(z, C.fh.v * R[0]) : addHueToRGB(z, C.fh.v * R)), 
                    "fs" in C && (z = R.length ? addSaturationToRGB(z, C.fs.v * R[0]) : addSaturationToRGB(z, C.fs.v * R)), 
                    "fb" in C && (z = R.length ? addBrightnessToRGB(z, C.fb.v * R[0]) : addBrightnessToRGB(z, C.fb.v * R));
                }
            }
            for (D = 0; w > D; D += 1) "p" in (C = I.a[D].a) && (M = I.a[D].s, R = M.getMult(h[r].anIndexes[D], n.t.a[D].s.totalChars), 
            this.maskPath ? R.length ? s.translate(0, C.p.v[1] * R[0], -C.p.v[2] * R[1]) : s.translate(0, C.p.v[1] * R, -C.p.v[2] * R) : R.length ? s.translate(C.p.v[0] * R[0], C.p.v[1] * R[1], -C.p.v[2] * R[2]) : s.translate(C.p.v[0] * R, C.p.v[1] * R, -C.p.v[2] * R));
            if (o.strokeWidthAnim && (Y = 0 > H ? 0 : H), o.strokeColorAnim && (q = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), 
            o.fillColorAnim && (X = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), 
            this.maskPath) {
                if (s.translate(0, -o.ls), s.translate(0, I.m.a.v[1] * T / 100 + e, 0), n.t.p.p) {
                    S = (c.point[1] - d.point[1]) / (c.point[0] - d.point[0]);
                    var st = 180 * Math.atan(S) / Math.PI;
                    c.point[0] < d.point[0] && (st += 180), s.rotate(-st * Math.PI / 180);
                }
                s.translate(L, O, 0), g -= I.m.a.v[0] * h[r].an / 200, h[r + 1] && Q !== h[r + 1].ind && (g += h[r].an / 2, 
                g += o.tr / 1e3 * o.s);
            } else {
                switch (s.translate(t, e, 0), o.ps && s.translate(o.ps[0], o.ps[1] + o.ascent, 0), 
                o.j) {
                  case 1:
                    s.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[h[r].line]), 0, 0);
                    break;

                  case 2:
                    s.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[h[r].line]) / 2, 0, 0);
                }
                s.translate(0, -o.ls), s.translate(N, 0, 0), s.translate(I.m.a.v[0] * h[r].an / 200, I.m.a.v[1] * T / 100, 0), 
                t += h[r].l + o.tr / 1e3 * o.s;
            }
            "html" === a ? U = s.toCSS() : "svg" === a ? U = s.to2dCSS() : $ = [ s.props[0], s.props[1], s.props[2], s.props[3], s.props[4], s.props[5], s.props[6], s.props[7], s.props[8], s.props[9], s.props[10], s.props[11], s.props[12], s.props[13], s.props[14], s.props[15] ], 
            Z = G, !(B = this.renderedLetters[r]) || B.o === Z && B.sw === Y && B.sc === q && B.fc === X ? "svg" !== a && "html" !== a || B && B.m === U ? "canvas" !== a || B && B.props[0] === $[0] && B.props[1] === $[1] && B.props[4] === $[4] && B.props[5] === $[5] && B.props[12] === $[12] && B.props[13] === $[13] ? _ = B : (this.lettersChangedFlag = !0, 
            _ = new LetterProps(Z, Y, q, X, null, $)) : (this.lettersChangedFlag = !0, _ = new LetterProps(Z, Y, q, X, U)) : (this.lettersChangedFlag = !0, 
            _ = new LetterProps(Z, Y, q, X, U, $)), this.renderedLetters[r] = _;
        }
    }, ITextElement.prototype.emptyProp = new LetterProps(), createElement(SVGBaseElement, SVGTextElement), 
    SVGTextElement.prototype.init = ITextElement.prototype.init, SVGTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape, 
    SVGTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, SVGTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame, 
    SVGTextElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), 
        this.data.cl && this.layerElement.setAttribute("class", this.data.cl);
    }, SVGTextElement.prototype.buildNewText = function() {
        var t, e, r = this.currentTextDocumentData;
        this.renderedLetters = Array.apply(null, {
            length: this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0
        }), r.fc ? this.layerElement.setAttribute("fill", "rgb(" + Math.round(255 * r.fc[0]) + "," + Math.round(255 * r.fc[1]) + "," + Math.round(255 * r.fc[2]) + ")") : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), 
        r.sc && (this.layerElement.setAttribute("stroke", "rgb(" + Math.round(255 * r.sc[0]) + "," + Math.round(255 * r.sc[1]) + "," + Math.round(255 * r.sc[2]) + ")"), 
        this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.s);
        var i = this.globalData.fontManager.getFontByName(r.f);
        if (i.fClass) this.layerElement.setAttribute("class", i.fClass); else {
            this.layerElement.setAttribute("font-family", i.fFamily);
            var s = r.fWeight, a = r.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
        }
        var n = r.l || [];
        if (e = n.length) {
            var o, h, l = this.mHelper, p = "", m = this.data.singleShape;
            if (m) var f = 0, c = 0, d = r.lineWidths, u = r.boxWidth, y = !0;
            var g = 0;
            for (t = 0; e > t; t += 1) {
                if (this.globalData.fontManager.chars ? m && 0 !== t || (o = this.textSpans[g] ? this.textSpans[g] : document.createElementNS(svgNS, "path")) : o = this.textSpans[g] ? this.textSpans[g] : document.createElementNS(svgNS, "text"), 
                o.style.display = "inherit", o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), 
                o.setAttribute("stroke-miterlimit", "4"), m && n[t].n && (f = 0, c += r.yOffset, 
                c += y ? 1 : 0, y = !1), l.reset(), this.globalData.fontManager.chars && l.scale(r.s / 100, r.s / 100), 
                m) {
                    switch (r.ps && l.translate(r.ps[0], r.ps[1] + r.ascent, 0), l.translate(0, -r.ls, 0), 
                    r.j) {
                      case 1:
                        l.translate(r.justifyOffset + (u - d[n[t].line]), 0, 0);
                        break;

                      case 2:
                        l.translate(r.justifyOffset + (u - d[n[t].line]) / 2, 0, 0);
                    }
                    l.translate(f, c, 0);
                }
                if (this.globalData.fontManager.chars) {
                    var v, b = this.globalData.fontManager.getCharData(r.t.charAt(t), i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
                    (v = b ? b.data : null) && v.shapes && (h = v.shapes[0].it, m || (p = ""), p += this.createPathShape(l, h), 
                    m || o.setAttribute("d", p)), m || this.layerElement.appendChild(o);
                } else o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), 
                this.layerElement.appendChild(o), m && o.setAttribute("transform", l.to2dCSS());
                m && (f += n[t].l, f += r.tr / 1e3 * r.s), this.textSpans[g] = o, g += 1;
            }
            if (!m) for (;g < this.textSpans.length; ) this.textSpans[g].style.display = "none", 
            g += 1;
            m && this.globalData.fontManager.chars && (o.setAttribute("d", p), this.layerElement.appendChild(o));
        }
    }, SVGTextElement.prototype.hide = function() {
        this.hidden || (this.layerElement.style.display = "none", this.hidden = !0);
    }, SVGTextElement.prototype.renderFrame = function(t) {
        if (!1 !== this._parent.renderFrame.call(this, t)) {
            if (this.hidden && (this.hidden = !1, this.layerElement.style.display = "block"), 
            !this.data.singleShape && (this.getMeasures(), this.lettersChangedFlag)) {
                var e, r, i = this.renderedLetters, s = this.currentTextDocumentData.l;
                r = s.length;
                var a;
                for (e = 0; r > e; e += 1) s[e].n || (a = i[e], this.textSpans[e].setAttribute("transform", a.m), 
                this.textSpans[e].setAttribute("opacity", a.o), a.sw && this.textSpans[e].setAttribute("stroke-width", a.sw), 
                a.sc && this.textSpans[e].setAttribute("stroke", a.sc), a.fc && this.textSpans[e].setAttribute("fill", a.fc));
                this.firstFrame && (this.firstFrame = !1);
            }
        } else this.hide();
    }, SVGTextElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent);
    }, SVGTintFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
            this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
        }
    }, SVGFillFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
        }
    }, SVGStrokeEffect.prototype.initialize = function() {
        var t, e, r, i, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, 
        r = 0) : (r = this.filterManager.effectElements[0].p.v - 1, i = r + 1), (e = document.createElementNS(svgNS, "g")).setAttribute("fill", "none"), 
        e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1), 
        r; i > r; r += 1) t = document.createElementNS(svgNS, "path"), e.appendChild(t), 
        this.paths.push({
            p: t,
            m: r
        });
        if (3 === this.filterManager.effectElements[10].p.v) {
            var a = document.createElementNS(svgNS, "mask"), n = "stms_" + randomString(10);
            a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), 
            this.elem.globalData.defs.appendChild(a);
            var o = document.createElementNS(svgNS, "g");
            o.setAttribute("mask", "url(#" + n + ")"), s[0] && o.appendChild(s[0]), this.elem.layerElement.appendChild(o), 
            this.masker = a, e.setAttribute("stroke", "#fff");
        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v) for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length; ) this.elem.layerElement.removeChild(s[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), 
            e.setAttribute("stroke", "#fff");
        }
        this.initialized = !0, this.pathMasker = e;
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
        this.initialized || this.initialize();
        var e, r, i, s = this.paths.length;
        for (e = 0; s > e; e += 1) if (r = this.elem.maskManager.viewData[this.paths[e].m], 
        i = this.paths[e].p, (t || this.filterManager.mdf || r.prop.mdf) && i.setAttribute("d", r.lastPath), 
        t || this.filterManager.effectElements[9].p.mdf || this.filterManager.effectElements[4].p.mdf || this.filterManager.effectElements[7].p.mdf || this.filterManager.effectElements[8].p.mdf || r.prop.mdf) {
            var a;
            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100, o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100, h = i.getTotalLength();
                a = "0 0 0 " + h * n + " ";
                var l, p = h * (o - n), m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100, f = Math.floor(p / m);
                for (l = 0; f > l; l += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                a += "0 " + 10 * h + " 0 0";
            } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
            i.setAttribute("stroke-dasharray", a);
        }
        if ((t || this.filterManager.effectElements[4].p.mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), 
        (t || this.filterManager.effectElements[6].p.mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), 
        (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p.mdf)) {
            var c = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * c[0]) + "," + bm_floor(255 * c[1]) + "," + bm_floor(255 * c[2]) + ")");
        }
    }, SVGTritoneFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r[0] + " " + e[0], a = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), 
            this.feFuncB.setAttribute("tableValues", n);
        }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
        var r = document.createElementNS(svgNS, t);
        return r.setAttribute("type", "table"), e.appendChild(r), r;
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
        for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
            length: 256
        }), m = 0, f = s - i, c = e - t; 256 >= o; ) a = o / 256, n = h >= a ? 0 > c ? s : i : a >= l ? 0 > c ? i : s : i + f * Math.pow((a - t) / c, 1 / r), 
        p[m++] = n, o += 256 / 255;
        return p.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e, r = this.filterManager.effectElements;
            this.feFuncRComposed && (t || r[2].p.mdf || r[3].p.mdf || r[4].p.mdf || r[5].p.mdf || r[6].p.mdf) && (e = this.getTableValue(r[2].p.v, r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v), 
            this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), 
            this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[9].p.mdf || r[10].p.mdf || r[11].p.mdf || r[12].p.mdf || r[13].p.mdf) && (e = this.getTableValue(r[9].p.v, r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v), 
            this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[16].p.mdf || r[17].p.mdf || r[18].p.mdf || r[19].p.mdf || r[20].p.mdf) && (e = this.getTableValue(r[16].p.v, r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v), 
            this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[23].p.mdf || r[24].p.mdf || r[25].p.mdf || r[26].p.mdf || r[27].p.mdf) && (e = this.getTableValue(r[23].p.v, r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v), 
            this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[30].p.mdf || r[31].p.mdf || r[32].p.mdf || r[33].p.mdf || r[34].p.mdf) && (e = this.getTableValue(r[30].p.v, r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v), 
            this.feFuncA.setAttribute("tableValues", e));
        }
    }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            if ((t || this.filterManager.effectElements[4].p.mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), 
            t || this.filterManager.effectElements[0].p.mdf) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
            }
            if ((t || this.filterManager.effectElements[1].p.mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), 
            t || this.filterManager.effectElements[2].p.mdf || this.filterManager.effectElements[3].p.mdf) {
                var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r * Math.cos(i), a = r * Math.sin(i);
                this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
            }
        }
    }, SVGEffects.prototype.renderFrame = function(t) {
        var e, r = this.filters.length;
        for (e = 0; r > e; e += 1) this.filters[e].renderFrame(t);
    }, createElement(SVGBaseElement, ICompElement), ICompElement.prototype.hide = function() {
        if (!this.hidden) {
            var t, e = this.elements.length;
            for (t = 0; e > t; t += 1) this.elements[t] && this.elements[t].hide();
            this.hidden = !0;
        }
    }, ICompElement.prototype.prepareFrame = function(t) {
        if (this._parent.prepareFrame.call(this, t), !1 !== this.isVisible || this.data.xt) {
            if (this.tm) {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
            } else this.renderedFrame = t / this.data.sr;
            var r, i = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), r = 0; i > r; r += 1) (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st);
        }
    }, ICompElement.prototype.renderFrame = function(t) {
        var e, r = this._parent.renderFrame.call(this, t), i = this.layers.length;
        if (!1 !== r) {
            for (this.hidden = !1, e = 0; i > e; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            this.firstFrame && (this.firstFrame = !1);
        } else this.hide();
    }, ICompElement.prototype.setElements = function(t) {
        this.elements = t;
    }, ICompElement.prototype.getElements = function() {
        return this.elements;
    }, ICompElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent);
        var t, e = this.layers.length;
        for (t = 0; e > t; t += 1) this.elements[t] && this.elements[t].destroy();
    }, ICompElement.prototype.checkLayers = SVGRenderer.prototype.checkLayers, ICompElement.prototype.buildItem = SVGRenderer.prototype.buildItem, 
    ICompElement.prototype.buildAllItems = SVGRenderer.prototype.buildAllItems, ICompElement.prototype.buildElementParenting = SVGRenderer.prototype.buildElementParenting, 
    ICompElement.prototype.createItem = SVGRenderer.prototype.createItem, ICompElement.prototype.createImage = SVGRenderer.prototype.createImage, 
    ICompElement.prototype.createComp = SVGRenderer.prototype.createComp, ICompElement.prototype.createSolid = SVGRenderer.prototype.createSolid, 
    ICompElement.prototype.createShape = SVGRenderer.prototype.createShape, ICompElement.prototype.createText = SVGRenderer.prototype.createText, 
    ICompElement.prototype.createBase = SVGRenderer.prototype.createBase, ICompElement.prototype.appendElementInPos = SVGRenderer.prototype.appendElementInPos, 
    ICompElement.prototype.checkPendingElements = SVGRenderer.prototype.checkPendingElements, 
    ICompElement.prototype.addPendingElement = SVGRenderer.prototype.addPendingElement, 
    createElement(SVGBaseElement, IImageElement), IImageElement.prototype.createElements = function() {
        var t = this.globalData.getAssetsPath(this.assetData);
        this._parent.createElements.call(this), this.innerElem = document.createElementNS(svgNS, "image"), 
        this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), 
        this.innerElem.setAttribute("preserveAspectRatio", "xMidYMid slice"), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), 
        this.maskedElement = this.innerElem, this.layerElement.appendChild(this.innerElem), 
        this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl);
    }, IImageElement.prototype.hide = function() {
        this.hidden || (this.layerElement.style.display = "none", this.hidden = !0);
    }, IImageElement.prototype.renderFrame = function(t) {
        return !1 === this._parent.renderFrame.call(this, t) ? void this.hide() : (this.hidden && (this.hidden = !1, 
        this.layerElement.style.display = "block"), void (this.firstFrame && (this.firstFrame = !1)));
    }, IImageElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent), this.innerElem = null;
    }, createElement(SVGBaseElement, IShapeElement), IShapeElement.prototype.lcEnum = {
        1: "butt",
        2: "round",
        3: "butt"
    }, IShapeElement.prototype.ljEnum = {
        1: "miter",
        2: "round",
        3: "butt"
    }, IShapeElement.prototype.buildExpressionInterface = function() {}, IShapeElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.viewData, this.layerElement, this.dynamicProperties, 0), 
        (!this.data.hd || this.data.td) && styleUnselectableDiv(this.layerElement);
    }, IShapeElement.prototype.setGradientData = function(t, e, r) {
        var i, s = "gr_" + randomString(10);
        (i = 1 === e.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient")).setAttribute("id", s), 
        i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
        var a, n, o, h = [];
        for (o = 4 * e.g.p, n = 0; o > n; n += 4) a = document.createElementNS(svgNS, "stop"), 
        i.appendChild(a), h.push(a);
        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(#" + s + ")"), this.globalData.defs.appendChild(i), 
        r.gf = i, r.cst = h;
    }, IShapeElement.prototype.setGradientOpacity = function(t, e, r) {
        if (t.g.k.k[0].s && t.g.k.k[0].s.length > 4 * t.g.p || t.g.k.k.length > 4 * t.g.p) {
            var i, s, a, n, o = document.createElementNS(svgNS, "mask"), h = document.createElementNS(svgNS, "path");
            o.appendChild(h);
            var l = "op_" + randomString(10), p = "mk_" + randomString(10);
            o.setAttribute("id", p), (i = 1 === t.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient")).setAttribute("id", l), 
            i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse"), 
            n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var m = [];
            for (a = 4 * t.g.p; n > a; a += 2) (s = document.createElementNS(svgNS, "stop")).setAttribute("stop-color", "rgb(255,255,255)"), 
            i.appendChild(s), m.push(s);
            return h.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(#" + l + ")"), this.globalData.defs.appendChild(i), 
            this.globalData.defs.appendChild(o), e.of = i, e.ost = m, r.msElem = h, p;
        }
    }, IShapeElement.prototype.searchShapes = function(t, e, r, i, s, a) {
        a = a || [];
        var n, o, h, l, p, m = [].concat(a), f = t.length - 1, c = [], d = [];
        for (n = f; n >= 0; n -= 1) if ("fl" == t[n].ty || "st" == t[n].ty || "gf" == t[n].ty || "gs" == t[n].ty) {
            e[n] = {}, l = {
                type: t[n].ty,
                d: "",
                ld: "",
                lvl: s,
                mdf: !1
            };
            var u = document.createElementNS(svgNS, "path");
            if (e[n].o = PropertyFactory.getProp(this, t[n].o, 0, .01, i), ("st" == t[n].ty || "gs" == t[n].ty) && (u.setAttribute("stroke-linecap", this.lcEnum[t[n].lc] || "round"), 
            u.setAttribute("stroke-linejoin", this.ljEnum[t[n].lj] || "round"), u.setAttribute("fill-opacity", "0"), 
            1 == t[n].lj && u.setAttribute("stroke-miterlimit", t[n].ml), e[n].w = PropertyFactory.getProp(this, t[n].w, 0, null, i), 
            t[n].d)) {
                var y = PropertyFactory.getDashProp(this, t[n].d, "svg", i);
                y.k || (u.setAttribute("stroke-dasharray", y.dasharray), u.setAttribute("stroke-dashoffset", y.dashoffset)), 
                e[n].d = y;
            }
            if ("fl" == t[n].ty || "st" == t[n].ty) e[n].c = PropertyFactory.getProp(this, t[n].c, 1, 255, i), 
            r.appendChild(u); else {
                e[n].g = PropertyFactory.getGradientProp(this, t[n].g, i), 2 == t[n].t && (e[n].h = PropertyFactory.getProp(this, t[n].h, 1, .01, i), 
                e[n].a = PropertyFactory.getProp(this, t[n].a, 1, degToRads, i)), e[n].s = PropertyFactory.getProp(this, t[n].s, 1, null, i), 
                e[n].e = PropertyFactory.getProp(this, t[n].e, 1, null, i), this.setGradientData(u, t[n], e[n], l);
                var g = this.setGradientOpacity(t[n], e[n], l);
                g && u.setAttribute("mask", "url(#" + g + ")"), e[n].elem = u, r.appendChild(u);
            }
            2 === t[n].r && u.setAttribute("fill-rule", "evenodd"), t[n].ln && u.setAttribute("id", t[n].ln), 
            t[n].cl && u.setAttribute("class", t[n].cl), l.pElem = u, this.stylesList.push(l), 
            e[n].style = l, c.push(l);
        } else if ("gr" == t[n].ty) {
            e[n] = {
                it: []
            };
            var v = document.createElementNS(svgNS, "g");
            r.appendChild(v), e[n].gr = v, this.searchShapes(t[n].it, e[n].it, v, i, s + 1, m);
        } else if ("tr" == t[n].ty) e[n] = {
            transform: {
                op: PropertyFactory.getProp(this, t[n].o, 0, .01, i),
                mProps: PropertyFactory.getProp(this, t[n], 2, null, i)
            },
            elements: []
        }, p = e[n].transform, m.push(p); else if ("sh" == t[n].ty || "rc" == t[n].ty || "el" == t[n].ty || "sr" == t[n].ty) {
            e[n] = {
                elements: [],
                caches: [],
                styles: [],
                transformers: m,
                lStr: ""
            };
            var b = 4;
            for ("rc" == t[n].ty ? b = 5 : "el" == t[n].ty ? b = 6 : "sr" == t[n].ty && (b = 7), 
            e[n].sh = ShapePropertyFactory.getShapeProp(this, t[n], b, i), e[n].lvl = s, this.shapes.push(e[n].sh), 
            this.addShapeToModifiers(e[n]), h = this.stylesList.length, o = 0; h > o; o += 1) this.stylesList[o].closed || e[n].elements.push({
                ty: this.stylesList[o].type,
                st: this.stylesList[o]
            });
        } else if ("tm" == t[n].ty || "rd" == t[n].ty || "ms" == t[n].ty || "rp" == t[n].ty) {
            var E = ShapeModifiers.getModifier(t[n].ty);
            E.init(this, t[n], i), this.shapeModifiers.push(E), d.push(E), e[n] = E;
        }
        for (f = c.length, n = 0; f > n; n += 1) c[n].closed = !0;
        for (f = d.length, n = 0; f > n; n += 1) d[n].closed = !0;
    }, IShapeElement.prototype.addShapeToModifiers = function(t) {
        var e, r = this.shapeModifiers.length;
        for (e = 0; r > e; e += 1) this.shapeModifiers[e].addShape(t);
    }, IShapeElement.prototype.renderModifiers = function() {
        if (this.shapeModifiers.length) {
            var t, e = this.shapes.length;
            for (t = 0; e > t; t += 1) this.shapes[t].reset();
            for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this.firstFrame);
        }
    }, IShapeElement.prototype.renderFrame = function(t) {
        return !1 === this._parent.renderFrame.call(this, t) ? void this.hide() : (this.globalToLocal([ 0, 0, 0 ]), 
        this.hidden && (this.layerElement.style.display = "block", this.hidden = !1), this.renderModifiers(), 
        void this.renderShape(null, null, !0, null));
    }, IShapeElement.prototype.hide = function() {
        if (!this.hidden) {
            this.layerElement.style.display = "none";
            var t;
            for (t = this.stylesList.length - 1; t >= 0; t -= 1) "0" !== this.stylesList[t].ld && (this.stylesList[t].ld = "0", 
            this.stylesList[t].pElem.style.display = "none", this.stylesList[t].pElem.parentNode && (this.stylesList[t].parent = this.stylesList[t].pElem.parentNode));
            this.hidden = !0;
        }
    }, IShapeElement.prototype.renderShape = function(t, e, r, i) {
        var s, a;
        if (!t) for (t = this.shapesData, a = this.stylesList.length, s = 0; a > s; s += 1) this.stylesList[s].d = "", 
        this.stylesList[s].mdf = !1;
        e || (e = this.viewData);
        var n;
        for (s = a = t.length - 1; s >= 0; s -= 1) n = t[s].ty, "tr" == n ? ((this.firstFrame || e[s].transform.op.mdf && i) && i.setAttribute("opacity", e[s].transform.op.v), 
        (this.firstFrame || e[s].transform.mProps.mdf && i) && i.setAttribute("transform", e[s].transform.mProps.v.to2dCSS())) : "sh" == n || "el" == n || "rc" == n || "sr" == n ? this.renderPath(t[s], e[s]) : "fl" == n ? this.renderFill(t[s], e[s]) : "gf" == n ? this.renderGradient(t[s], e[s]) : "gs" == n ? (this.renderGradient(t[s], e[s]), 
        this.renderStroke(t[s], e[s])) : "st" == n ? this.renderStroke(t[s], e[s]) : "gr" == n && this.renderShape(t[s].it, e[s].it, !1, e[s].gr);
        if (r) {
            for (a = this.stylesList.length, s = 0; a > s; s += 1) "0" === this.stylesList[s].ld && (this.stylesList[s].ld = "1", 
            this.stylesList[s].pElem.style.display = "block"), (this.stylesList[s].mdf || this.firstFrame) && (this.stylesList[s].pElem.setAttribute("d", this.stylesList[s].d), 
            this.stylesList[s].msElem && this.stylesList[s].msElem.setAttribute("d", this.stylesList[s].d));
            this.firstFrame && (this.firstFrame = !1);
        }
    }, IShapeElement.prototype.renderPath = function(t, e) {
        var r, i, s, a, n, o, h, l, p = e.elements.length, m = e.lvl;
        for (l = 0; p > l; l += 1) {
            o = e.sh.mdf || this.firstFrame, n = "M0 0";
            var f = e.sh.paths;
            if (a = f._length, e.elements[l].st.lvl < m) {
                for (var c, d = this.mHelper.reset(), u = m - e.elements[l].st.lvl, y = e.transformers.length - 1; u > 0; ) o = e.transformers[y].mProps.mdf || o, 
                c = e.transformers[y].mProps.v.props, d.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), 
                u--, y--;
                if (o) {
                    for (s = 0; a > s; s += 1) if ((h = f.shapes[s]) && h._length) {
                        for (r = h._length, i = 1; r > i; i += 1) 1 == i && (n += " M" + d.applyToPointStringified(h.v[0][0], h.v[0][1])), 
                        n += " C" + d.applyToPointStringified(h.o[i - 1][0], h.o[i - 1][1]) + " " + d.applyToPointStringified(h.i[i][0], h.i[i][1]) + " " + d.applyToPointStringified(h.v[i][0], h.v[i][1]);
                        1 == r && (n += " M" + d.applyToPointStringified(h.v[0][0], h.v[0][1])), h.c && (n += " C" + d.applyToPointStringified(h.o[i - 1][0], h.o[i - 1][1]) + " " + d.applyToPointStringified(h.i[0][0], h.i[0][1]) + " " + d.applyToPointStringified(h.v[0][0], h.v[0][1]), 
                        n += "z");
                    }
                    e.caches[l] = n;
                } else n = e.caches[l];
            } else if (o) {
                for (s = 0; a > s; s += 1) if ((h = f.shapes[s]) && h._length) {
                    for (r = h._length, i = 1; r > i; i += 1) 1 == i && (n += " M" + h.v[0].join(",")), 
                    n += " C" + h.o[i - 1].join(",") + " " + h.i[i].join(",") + " " + h.v[i].join(",");
                    1 == r && (n += " M" + h.v[0].join(",")), h.c && r && (n += " C" + h.o[i - 1].join(",") + " " + h.i[0].join(",") + " " + h.v[0].join(","), 
                    n += "z");
                }
                e.caches[l] = n;
            } else n = e.caches[l];
            e.elements[l].st.d += n, e.elements[l].st.mdf = o || e.elements[l].st.mdf;
        }
    }, IShapeElement.prototype.renderFill = function(t, e) {
        var r = e.style;
        (e.c.mdf || this.firstFrame) && r.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), 
        (e.o.mdf || this.firstFrame) && r.pElem.setAttribute("fill-opacity", e.o.v);
    }, IShapeElement.prototype.renderGradient = function(t, e) {
        var r = e.gf, i = e.of, s = e.s.v, a = e.e.v;
        if (e.o.mdf || this.firstFrame) {
            var n = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
            e.elem.setAttribute(n, e.o.v);
        }
        if (e.s.mdf || this.firstFrame) {
            var o = 1 === t.t ? "x1" : "cx", h = "x1" === o ? "y1" : "cy";
            r.setAttribute(o, s[0]), r.setAttribute(h, s[1]), i && (i.setAttribute(o, s[0]), 
            i.setAttribute(h, s[1]));
        }
        var l, p, m, f;
        if (e.g.cmdf || this.firstFrame) {
            l = e.cst;
            var c = e.g.c;
            for (m = l.length, p = 0; m > p; p += 1) (f = l[p]).setAttribute("offset", c[4 * p] + "%"), 
            f.setAttribute("stop-color", "rgb(" + c[4 * p + 1] + "," + c[4 * p + 2] + "," + c[4 * p + 3] + ")");
        }
        if (i && (e.g.omdf || this.firstFrame)) {
            l = e.ost;
            var d = e.g.o;
            for (m = l.length, p = 0; m > p; p += 1) (f = l[p]).setAttribute("offset", d[2 * p] + "%"), 
            f.setAttribute("stop-opacity", d[2 * p + 1]);
        }
        if (1 === t.t) (e.e.mdf || this.firstFrame) && (r.setAttribute("x2", a[0]), r.setAttribute("y2", a[1]), 
        i && (i.setAttribute("x2", a[0]), i.setAttribute("y2", a[1]))); else {
            var u;
            if ((e.s.mdf || e.e.mdf || this.firstFrame) && (u = Math.sqrt(Math.pow(s[0] - a[0], 2) + Math.pow(s[1] - a[1], 2)), 
            r.setAttribute("r", u), i && i.setAttribute("r", u)), e.e.mdf || e.h.mdf || e.a.mdf || this.firstFrame) {
                u || (u = Math.sqrt(Math.pow(s[0] - a[0], 2) + Math.pow(s[1] - a[1], 2)));
                var y = Math.atan2(a[1] - s[1], a[0] - s[0]), g = u * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v), v = Math.cos(y + e.a.v) * g + s[0], b = Math.sin(y + e.a.v) * g + s[1];
                r.setAttribute("fx", v), r.setAttribute("fy", b), i && (i.setAttribute("fx", v), 
                i.setAttribute("fy", b));
            }
        }
    }, IShapeElement.prototype.renderStroke = function(t, e) {
        var r = e.style, i = e.d;
        i && i.k && (i.mdf || this.firstFrame) && (r.pElem.setAttribute("stroke-dasharray", i.dasharray), 
        r.pElem.setAttribute("stroke-dashoffset", i.dashoffset)), e.c && (e.c.mdf || this.firstFrame) && r.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), 
        (e.o.mdf || this.firstFrame) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w.mdf || this.firstFrame) && (r.pElem.setAttribute("stroke-width", e.w.v), 
        r.msElem && r.msElem.setAttribute("stroke-width", e.w.v));
    }, IShapeElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent), this.shapeData = null, this.viewData = null, 
        this.parentContainer = null, this.placeholder = null;
    }, createElement(SVGBaseElement, ISolidElement), ISolidElement.prototype.createElements = function() {
        this._parent.createElements.call(this);
        var t = document.createElementNS(svgNS, "rect");
        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), 
        this.layerElement.appendChild(t), this.innerElem = t, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), 
        this.data.cl && this.layerElement.setAttribute("class", this.data.cl);
    }, ISolidElement.prototype.hide = IImageElement.prototype.hide, ISolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, 
    ISolidElement.prototype.destroy = IImageElement.prototype.destroy;
    var animationManager = function() {
        function t(t) {
            for (var e = 0, r = t.target; S > e; ) k[e].animation === r && (k.splice(e, 1), 
            e -= 1, S -= 1, r.isPaused || i()), e += 1;
        }
        function e(t, e) {
            if (!t) return null;
            for (var r = 0; S > r; ) {
                if (k[r].elem == t && null !== k[r].elem) return k[r].animation;
                r += 1;
            }
            var i = new AnimationItem();
            return s(i, t), i.setData(t, e), i;
        }
        function r() {
            C += 1, E();
        }
        function i() {
            0 === (C -= 1) && (A = !0);
        }
        function s(e, s) {
            e.addEventListener("destroy", t), e.addEventListener("_active", r), e.addEventListener("_idle", i), 
            k.push({
                elem: s,
                animation: e
            }), S += 1;
        }
        function a(t) {
            var e = new AnimationItem();
            return s(e, null), e.setParams(t), e;
        }
        function n(t, e) {
            var r;
            for (r = 0; S > r; r += 1) k[r].animation.setSpeed(t, e);
        }
        function o(t, e) {
            var r;
            for (r = 0; S > r; r += 1) k[r].animation.setDirection(t, e);
        }
        function h(t) {
            var e;
            for (e = 0; S > e; e += 1) k[e].animation.play(t);
        }
        function l(t, e) {
            P = Date.now();
            var r;
            for (r = 0; S > r; r += 1) k[r].animation.moveFrame(t, e);
        }
        function p(t) {
            var e, r = t - P;
            for (e = 0; S > e; e += 1) k[e].animation.advanceTime(r);
            P = t, A || requestAnimationFrame(p);
        }
        function m(t) {
            P = t, requestAnimationFrame(p);
        }
        function f(t) {
            var e;
            for (e = 0; S > e; e += 1) k[e].animation.pause(t);
        }
        function c(t, e, r) {
            var i;
            for (i = 0; S > i; i += 1) k[i].animation.goToAndStop(t, e, r);
        }
        function d(t) {
            var e;
            for (e = 0; S > e; e += 1) k[e].animation.stop(t);
        }
        function u(t) {
            var e;
            for (e = 0; S > e; e += 1) k[e].animation.togglePause(t);
        }
        function y(t) {
            var e;
            for (e = S - 1; e >= 0; e -= 1) k[e].animation.destroy(t);
        }
        function g(t, r, i) {
            var s, a = document.getElementsByClassName("bodymovin"), n = a.length;
            for (s = 0; n > s; s += 1) i && a[s].setAttribute("data-bm-type", i), e(a[s], t);
            if (r && 0 === n) {
                i || (i = "svg");
                var o = document.getElementsByTagName("body")[0];
                o.innerHTML = "";
                var h = document.createElement("div");
                h.style.width = "100%", h.style.height = "100%", h.setAttribute("data-bm-type", i), 
                o.appendChild(h), e(h, t);
            }
        }
        function v() {
            var t;
            for (t = 0; S > t; t += 1) k[t].animation.resize();
        }
        function b() {
            requestAnimationFrame(m);
        }
        function E() {
            A && (A = !1, requestAnimationFrame(m));
        }
        var x = {}, k = [], P = 0, S = 0, A = !0, C = 0;
        return setTimeout(b, 0), x.registerAnimation = e, x.loadAnimation = a, x.setSpeed = n, 
        x.setDirection = o, x.play = h, x.moveFrame = l, x.pause = f, x.stop = d, x.togglePause = u, 
        x.searchAnimations = g, x.resize = v, x.start = b, x.goToAndStop = c, x.destroy = y, 
        x;
    }(), AnimationItem = function() {
        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, 
        this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, 
        this.playSpeed = 1, this.playDirection = 1, this.pendingElements = 0, this.playCount = 0, 
        this.prerenderFramesFlag = !0, this.animationData = {}, this.layers = [], this.assets = [], 
        this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = randomString(10), 
        this.scaleMode = "fit", this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, 
        this.subframeEnabled = subframeEnabled, this.segments = [], this.pendingSegment = !1, 
        this._idle = !0, this.projectInterface = ProjectInterface();
    };
    AnimationItem.prototype.setParams = function(t) {
        var e = this;
        t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
        var r = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
        switch (r) {
          case "canvas":
            this.renderer = new CanvasRenderer(this, t.rendererSettings);
            break;

          case "svg":
            this.renderer = new SVGRenderer(this, t.rendererSettings);
            break;

          case "hybrid":
          case "html":
          default:
            this.renderer = new HybridRenderer(this, t.rendererSettings);
        }
        if (this.renderer.setProjectInterface(this.projectInterface), this.animType = r, 
        "" === t.loop || null === t.loop || (this.loop = !1 !== t.loop && (!0 === t.loop || parseInt(t.loop))), 
        this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", 
        this.prerenderFramesFlag = !("prerender" in t) || t.prerender, this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, 
        t.animationData) e.configAnimation(t.animationData); else if (t.path) {
            "json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), 
            t.path += "data.json");
            var i = new XMLHttpRequest();
            this.path = -1 != t.path.lastIndexOf("\\") ? t.path.substr(0, t.path.lastIndexOf("\\") + 1) : t.path.substr(0, t.path.lastIndexOf("/") + 1), 
            this.assetsPath = t.assetsPath, this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), 
            this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), i.open("GET", t.path, !0), 
            i.send(), i.onreadystatechange = function() {
                if (4 == i.readyState) if (200 == i.status) e.configAnimation(JSON.parse(i.responseText)); else try {
                    var t = JSON.parse(i.responseText);
                    e.configAnimation(t);
                } catch (t) {}
            };
        }
    }, AnimationItem.prototype.setData = function(t, e) {
        var r = {
            wrapper: t,
            animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
        }, i = t.attributes;
        r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", 
        r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
        var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
        "" === s || (r.loop = "false" !== s && ("true" === s || parseInt(s)));
        var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
        r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", 
        "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), 
        this.setParams(r);
    }, AnimationItem.prototype.includeLayers = function(t) {
        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip), 
        this.animationData.tf = this.totalFrames);
        var e, r, i = this.animationData.layers, s = i.length, a = t.layers, n = a.length;
        for (r = 0; n > r; r += 1) for (e = 0; s > e; ) {
            if (i[e].id == a[r].id) {
                i[e] = a[r];
                break;
            }
            e += 1;
        }
        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), 
        this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), 
        t.assets) for (s = t.assets.length, e = 0; s > e; e += 1) this.animationData.assets.push(t.assets[e]);
        this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), 
        this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), 
        this.renderer.renderFrame(null), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
        var t = this.animationData.segments;
        if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), 
        void (this.timeCompleted = this.animationData.tf);
        var e = t.shift();
        this.timeCompleted = e.time * this.frameRate;
        var r = new XMLHttpRequest(), i = this, s = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, r.open("GET", s, !0), r.send(), r.onreadystatechange = function() {
            if (4 == r.readyState) if (200 == r.status) i.includeLayers(JSON.parse(r.responseText)); else try {
                var t = JSON.parse(r.responseText);
                i.includeLayers(t);
            } catch (t) {}
        };
    }, AnimationItem.prototype.loadSegments = function() {
        this.animationData.segments || (this.timeCompleted = this.animationData.tf), this.loadNextSegment();
    }, AnimationItem.prototype.configAnimation = function(t) {
        this.renderer && this.renderer.destroyed || (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), 
        this.animationData.tf = this.totalFrames, this.renderer.configAnimation(t), t.assets || (t.assets = []), 
        t.comps && (t.assets = t.assets.concat(t.comps), t.comps = null), this.renderer.searchExtraCompositions(t.assets), 
        this.layers = this.animationData.layers, this.assets = this.animationData.assets, 
        this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), 
        this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.imagePreloader = new ImagePreloader(), 
        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), 
        this.imagePreloader.loadAssets(t.assets), this.loadSegments(), this.updaFrameModifier(), 
        this.renderer.globalData.fontManager ? this.waitForFontsLoaded() : (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), 
        this.checkLoaded()));
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
        function t() {
            this.renderer.globalData.fontManager.loaded ? (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), 
            this.checkLoaded()) : setTimeout(t.bind(this), 20);
        }
        return function() {
            t.bind(this)();
        };
    }(), AnimationItem.prototype.addPendingElement = function() {
        this.pendingElements += 1;
    }, AnimationItem.prototype.elementLoaded = function() {
        this.pendingElements--, this.checkLoaded();
    }, AnimationItem.prototype.checkLoaded = function() {
        0 === this.pendingElements && (expressionsPlugin && expressionsPlugin.initExpressions(this), 
        this.renderer.initItems(), setTimeout(function() {
            this.trigger("DOMLoaded");
        }.bind(this), 0), this.isLoaded = !0, this.gotoFrame(), this.autoplay && this.play());
    }, AnimationItem.prototype.resize = function() {
        this.renderer.updateContainerSize();
    }, AnimationItem.prototype.setSubframe = function(t) {
        this.subframeEnabled = !!t;
    }, AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.subframeEnabled ? this.currentRawFrame : Math.floor(this.currentRawFrame), 
        this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), 
        this.trigger("enterFrame"), this.renderFrame();
    }, AnimationItem.prototype.renderFrame = function() {
        !1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame);
    }, AnimationItem.prototype.play = function(t) {
        t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, 
        this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(t) {
        t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this.pendingSegment || (this._idle = !0, 
        this.trigger("_idle")));
    }, AnimationItem.prototype.togglePause = function(t) {
        t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(t) {
        t && this.name != t || (this.pause(), this.currentFrame = this.currentRawFrame = 0, 
        this.playCount = 0, this.gotoFrame());
    }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
        r && this.name != r || (this.setCurrentRawFrameValue(e ? t : t * this.frameModifier), 
        this.pause());
    }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
        this.goToAndStop(t, e, r), this.play();
    }, AnimationItem.prototype.advanceTime = function(t) {
        return this.pendingSegment ? (this.pendingSegment = !1, this.adjustSegment(this.segments.shift()), 
        void (this.isPaused && this.play())) : void (!0 !== this.isPaused && !1 !== this.isLoaded && this.setCurrentRawFrameValue(this.currentRawFrame + t * this.frameModifier));
    }, AnimationItem.prototype.updateAnimation = function(t) {
        this.setCurrentRawFrameValue(this.totalFrames * t);
    }, AnimationItem.prototype.moveFrame = function(t, e) {
        e && this.name != e || this.setCurrentRawFrameValue(this.currentRawFrame + t);
    }, AnimationItem.prototype.adjustSegment = function(t) {
        this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), 
        this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .01)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), 
        this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(0)), 
        this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(t, e) {
        var r = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t - .01)), 
        this.firstFrame = t, this.totalFrames = e - t, -1 !== r && this.goToAndStop(r, !0);
    }, AnimationItem.prototype.playSegments = function(t, e) {
        if ("object" == typeof t[0]) {
            var r, i = t.length;
            for (r = 0; i > r; r += 1) this.segments.push(t[r]);
        } else this.segments.push(t);
        e && this.adjustSegment(this.segments.shift()), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(t) {
        this.segments.length = 0, this.segments.push([ this.animationData.ip * this.frameRate, Math.floor(this.animationData.op - this.animationData.ip + this.animationData.ip * this.frameRate) ]), 
        t && this.adjustSegment(this.segments.shift());
    }, AnimationItem.prototype.checkSegments = function() {
        this.segments.length && (this.pendingSegment = !0);
    }, AnimationItem.prototype.remove = function(t) {
        t && this.name != t || this.renderer.destroy();
    }, AnimationItem.prototype.destroy = function(t) {
        t && this.name != t || this.renderer && this.renderer.destroyed || (this.renderer.destroy(), 
        this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
        if (this.currentRawFrame = t, this.currentRawFrame >= this.totalFrames) {
            if (this.checkSegments(), !1 === this.loop) return this.currentRawFrame = this.totalFrames - .01, 
            this.gotoFrame(), this.pause(), void this.trigger("complete");
            if (this.trigger("loopComplete"), this.playCount += 1, !0 !== this.loop && this.playCount == this.loop || this.pendingSegment) return this.currentRawFrame = this.totalFrames - .01, 
            this.gotoFrame(), this.pause(), void this.trigger("complete");
            this.currentRawFrame = this.currentRawFrame % this.totalFrames;
        } else if (this.currentRawFrame < 0) return this.checkSegments(), this.playCount -= 1, 
        this.playCount < 0 && (this.playCount = 0), !1 === this.loop || this.pendingSegment ? (this.currentRawFrame = 0, 
        this.gotoFrame(), this.pause(), void this.trigger("complete")) : (this.trigger("loopComplete"), 
        this.currentRawFrame = (this.totalFrames + this.currentRawFrame) % this.totalFrames, 
        void this.gotoFrame());
        this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(t) {
        this.playSpeed = t, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(t) {
        this.playDirection = 0 > t ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
    }, AnimationItem.prototype.getPath = function() {
        return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(t) {
        var e = "";
        if (this.assetsPath) {
            var r = t.p;
            -1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r;
        } else e = this.path, e += t.u ? t.u : "", e += t.p;
        return e;
    }, AnimationItem.prototype.getAssetData = function(t) {
        for (var e = 0, r = this.assets.length; r > e; ) {
            if (t == this.assets[e].id) return this.assets[e];
            e += 1;
        }
    }, AnimationItem.prototype.hide = function() {
        this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
        this.renderer.show();
    }, AnimationItem.prototype.getAssets = function() {
        return this.assets;
    }, AnimationItem.prototype.trigger = function(t) {
        if (this._cbs && this._cbs[t]) switch (t) {
          case "enterFrame":
            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult));
            break;

          case "loopComplete":
            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
            break;

          case "complete":
            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
            break;

          case "segmentStart":
            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
            break;

          case "destroy":
            this.triggerEvent(t, new BMDestroyEvent(t, this));
            break;

          default:
            this.triggerEvent(t);
        }
        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), 
        "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), 
        "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), 
        "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), 
        "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
    }, AnimationItem.prototype.addEventListener = _addEventListener, AnimationItem.prototype.removeEventListener = _removeEventListener, 
    AnimationItem.prototype.triggerEvent = _triggerEvent, extendPrototype(BaseRenderer, CanvasRenderer), 
    CanvasRenderer.prototype.createBase = function(t) {
        return new CVBaseElement(t, this, this.globalData);
    }, CanvasRenderer.prototype.createShape = function(t) {
        return new CVShapeElement(t, this, this.globalData);
    }, CanvasRenderer.prototype.createText = function(t) {
        return new CVTextElement(t, this, this.globalData);
    }, CanvasRenderer.prototype.createImage = function(t) {
        return new CVImageElement(t, this, this.globalData);
    }, CanvasRenderer.prototype.createComp = function(t) {
        return new CVCompElement(t, this, this.globalData);
    }, CanvasRenderer.prototype.createSolid = function(t) {
        return new CVSolidElement(t, this, this.globalData);
    }, CanvasRenderer.prototype.ctxTransform = function(t) {
        if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) {
            if (!this.renderConfig.clearCanvas) return void this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
            this.transformMat.cloneFromProps(t), this.transformMat.transform(this.contextData.cTr.props[0], this.contextData.cTr.props[1], this.contextData.cTr.props[2], this.contextData.cTr.props[3], this.contextData.cTr.props[4], this.contextData.cTr.props[5], this.contextData.cTr.props[6], this.contextData.cTr.props[7], this.contextData.cTr.props[8], this.contextData.cTr.props[9], this.contextData.cTr.props[10], this.contextData.cTr.props[11], this.contextData.cTr.props[12], this.contextData.cTr.props[13], this.contextData.cTr.props[14], this.contextData.cTr.props[15]), 
            this.contextData.cTr.cloneFromProps(this.transformMat.props);
            var e = this.contextData.cTr.props;
            this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
        }
    }, CanvasRenderer.prototype.ctxOpacity = function(t) {
        if (1 !== t) {
            if (!this.renderConfig.clearCanvas) return void (this.canvasContext.globalAlpha *= 0 > t ? 0 : t);
            this.contextData.cO *= 0 > t ? 0 : t, this.canvasContext.globalAlpha = this.contextData.cO;
        }
    }, CanvasRenderer.prototype.reset = function() {
        return this.renderConfig.clearCanvas ? (this.contextData.cArrPos = 0, this.contextData.cTr.reset(), 
        void (this.contextData.cO = 1)) : void this.canvasContext.restore();
    }, CanvasRenderer.prototype.save = function(t) {
        if (this.renderConfig.clearCanvas) {
            t && this.canvasContext.save();
            var e = this.contextData.cTr.props;
            (null === this.contextData.saved[this.contextData.cArrPos] || void 0 === this.contextData.saved[this.contextData.cArrPos]) && (this.contextData.saved[this.contextData.cArrPos] = new Array(16));
            var r, i = this.contextData.saved[this.contextData.cArrPos];
            for (r = 0; 16 > r; r += 1) i[r] = e[r];
            this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;
        } else this.canvasContext.save();
    }, CanvasRenderer.prototype.restore = function(t) {
        if (this.renderConfig.clearCanvas) {
            t && this.canvasContext.restore(), this.contextData.cArrPos -= 1;
            var e, r = this.contextData.saved[this.contextData.cArrPos], i = this.contextData.cTr.props;
            for (e = 0; 16 > e; e += 1) i[e] = r[e];
            this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], 
            this.contextData.cO = r, this.canvasContext.globalAlpha = r;
        } else this.canvasContext.restore();
    }, CanvasRenderer.prototype.configAnimation = function(t) {
        this.animationItem.wrapper ? (this.animationItem.container = document.createElement("canvas"), 
        this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", 
        this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", 
        this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d")) : this.canvasContext = this.renderConfig.context, 
        this.data = t, this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, 
        this.globalData.isDashed = !1, this.globalData.totalFrames = Math.floor(t.tf), this.globalData.compWidth = t.w, 
        this.globalData.compHeight = t.h, this.globalData.frameRate = t.fr, this.globalData.frameId = 0, 
        this.globalData.compSize = {
            w: t.w,
            h: t.h
        }, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.layers = t.layers, 
        this.transformCanvas = {}, this.transformCanvas.w = t.w, this.transformCanvas.h = t.h, 
        this.globalData.fontManager = new FontManager(), this.globalData.fontManager.addChars(t.chars), 
        this.globalData.fontManager.addFonts(t.fonts, document.body), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), 
        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), 
        this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), 
        this.globalData.addPendingElement = this.animationItem.addPendingElement.bind(this.animationItem), 
        this.globalData.transformCanvas = this.transformCanvas, this.elements = Array.apply(null, {
            length: t.layers.length
        }), this.updateContainerSize();
    }, CanvasRenderer.prototype.updateContainerSize = function() {
        var t, e;
        this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, 
        e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), 
        this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, 
        e = this.canvasContext.canvas.height * this.renderConfig.dpr);
        var r, i;
        if (-1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s = this.renderConfig.preserveAspectRatio.split(" "), a = s[1] || "meet", n = s[0] || "xMidYMid", o = n.substr(0, 4), h = n.substr(4);
            r = t / e, (i = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === a || r > i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), 
            this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), 
            this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), 
            this.transformCanvas.tx = "xMid" === o && (r > i && "meet" === a || i > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r > i && "meet" === a || i > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, 
            this.transformCanvas.ty = "YMid" === h && (i > r && "meet" === a || r > i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (i > r && "meet" === a || r > i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
        } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), 
        this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), 
        this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, 
        this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
        this.transformCanvas.props = [ this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1 ];
        var l, p = this.elements.length;
        for (l = 0; p > l; l += 1) this.elements[l] && 0 === this.elements[l].data.ty && this.elements[l].resize(this.globalData.transformCanvas);
    }, CanvasRenderer.prototype.destroy = function() {
        this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = "");
        var t;
        for (t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t].destroy();
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, 
        this.destroyed = !0;
    }, CanvasRenderer.prototype.renderFrame = function(t) {
        if (!(this.renderedFrame == t && !0 === this.renderConfig.clearCanvas || this.destroyed || null === t)) {
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem.firstFrame, 
            this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, 
            !0 === this.renderConfig.clearCanvas ? (this.reset(), this.canvasContext.save(), 
            this.canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)) : this.save(), 
            this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), 
            this.canvasContext.closePath(), this.canvasContext.clip();
            var e, r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = 0; r > e; e++) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            for (e = r - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            !0 !== this.renderConfig.clearCanvas ? this.restore() : this.canvasContext.restore();
        }
    }, CanvasRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            var r = this.createItem(this.layers[t], this, this.globalData);
            e[t] = r, r.initExpressions(), 0 === this.layers[t].ty && r.resize(this.globalData.transformCanvas);
        }
    }, CanvasRenderer.prototype.checkPendingElements = function() {
        for (;this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
    }, CanvasRenderer.prototype.hide = function() {
        this.animationItem.container.style.display = "none";
    }, CanvasRenderer.prototype.show = function() {
        this.animationItem.container.style.display = "block";
    }, CanvasRenderer.prototype.searchExtraCompositions = function(t) {
        var e, r = t.length;
        for (document.createElementNS(svgNS, "g"), e = 0; r > e; e += 1) if (t[e].xt) {
            var i = this.createComp(t[e], this.globalData.comp, this.globalData);
            i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
        }
    }, extendPrototype(BaseRenderer, HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, 
    HybridRenderer.prototype.checkPendingElements = function() {
        for (;this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
    }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
        var r = t.getBaseElement();
        if (r) {
            var i = this.layers[e];
            if (i.ddd && this.supports3d) this.addTo3dContainer(r, e); else {
                for (var s, a = 0; e > a; ) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), 
                a += 1;
                s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r);
            }
        }
    }, HybridRenderer.prototype.createBase = function(t) {
        return new SVGBaseElement(t, this.layerElement, this.globalData, this);
    }, HybridRenderer.prototype.createShape = function(t) {
        return this.supports3d ? new HShapeElement(t, this.layerElement, this.globalData, this) : new IShapeElement(t, this.layerElement, this.globalData, this);
    }, HybridRenderer.prototype.createText = function(t) {
        return this.supports3d ? new HTextElement(t, this.layerElement, this.globalData, this) : new SVGTextElement(t, this.layerElement, this.globalData, this);
    }, HybridRenderer.prototype.createCamera = function(t) {
        return this.camera = new HCameraElement(t, this.layerElement, this.globalData, this), 
        this.camera;
    }, HybridRenderer.prototype.createImage = function(t) {
        return this.supports3d ? new HImageElement(t, this.layerElement, this.globalData, this) : new IImageElement(t, this.layerElement, this.globalData, this);
    }, HybridRenderer.prototype.createComp = function(t) {
        return this.supports3d ? new HCompElement(t, this.layerElement, this.globalData, this) : new ICompElement(t, this.layerElement, this.globalData, this);
    }, HybridRenderer.prototype.createSolid = function(t) {
        return this.supports3d ? new HSolidElement(t, this.layerElement, this.globalData, this) : new ISolidElement(t, this.layerElement, this.globalData, this);
    }, HybridRenderer.prototype.getThreeDContainer = function(t) {
        var e = document.createElement("div");
        styleDiv(e), e.style.width = this.globalData.compSize.w + "px", e.style.height = this.globalData.compSize.h + "px", 
        e.style.transformOrigin = e.style.mozTransformOrigin = e.style.webkitTransformOrigin = "50% 50%";
        var r = document.createElement("div");
        styleDiv(r), r.style.transform = r.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", 
        e.appendChild(r), this.resizerElem.appendChild(e);
        var i = {
            container: r,
            perspectiveElem: e,
            startPos: t,
            endPos: t
        };
        return this.threeDElements.push(i), i;
    }, HybridRenderer.prototype.build3dContainers = function() {
        var t, e, r = this.layers.length;
        for (t = 0; r > t; t += 1) this.layers[t].ddd ? (e || (e = this.getThreeDContainer(t)), 
        e.endPos = Math.max(e.endPos, t)) : e = null;
    }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
        for (var r = 0, i = this.threeDElements.length; i > r; ) {
            if (e <= this.threeDElements[r].endPos) {
                for (var s, a = this.threeDElements[r].startPos; e > a; ) this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), 
                a += 1;
                s ? this.threeDElements[r].container.insertBefore(t, s) : this.threeDElements[r].container.appendChild(t);
                break;
            }
            r += 1;
        }
    }, HybridRenderer.prototype.configAnimation = function(t) {
        var e = document.createElement("div"), r = this.animationItem.wrapper;
        e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), 
        e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", 
        r.appendChild(e), e.style.overflow = "hidden";
        var i = document.createElementNS(svgNS, "svg");
        i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
        var s = document.createElementNS(svgNS, "defs");
        i.appendChild(s), this.globalData.defs = s, this.data = t, this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), 
        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), 
        this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), 
        this.globalData.frameId = 0, this.globalData.compSize = {
            w: t.w,
            h: t.h
        }, this.globalData.frameRate = t.fr, this.layers = t.layers, this.globalData.fontManager = new FontManager(), 
        this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, i), 
        this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, 
        this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; e > t; t++) this.elements[t].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, HybridRenderer.prototype.updateContainerSize = function() {
        var t, e, r, i, s = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight, n = s / a;
        this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = s / this.globalData.compSize.w, 
        e = s / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, 
        e = a / this.globalData.compSize.h, r = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, 
        i = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)";
    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
        this.resizerElem.style.display = "none";
    }, HybridRenderer.prototype.show = function() {
        this.resizerElem.style.display = "block";
    }, HybridRenderer.prototype.initItems = function() {
        if (this.buildAllItems(), this.camera) this.camera.setup(); else {
            var t, e = this.globalData.compSize.w, r = this.globalData.compSize.h, i = this.threeDElements.length;
            for (t = 0; i > t; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px";
        }
    }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
        var e, r = t.length, i = document.createElement("div");
        for (e = 0; r > e; e += 1) if (t[e].xt) {
            var s = this.createComp(t[e], i, this.globalData.comp, null);
            s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
        }
    }, createElement(BaseElement, CVBaseElement), CVBaseElement.prototype.createElements = function() {
        this.checkParenting();
    }, CVBaseElement.prototype.checkBlendMode = function(t) {
        if (t.blendMode !== this.data.bm) {
            t.blendMode = this.data.bm;
            var e = "";
            switch (this.data.bm) {
              case 0:
                e = "normal";
                break;

              case 1:
                e = "multiply";
                break;

              case 2:
                e = "screen";
                break;

              case 3:
                e = "overlay";
                break;

              case 4:
                e = "darken";
                break;

              case 5:
                e = "lighten";
                break;

              case 6:
                e = "color-dodge";
                break;

              case 7:
                e = "color-burn";
                break;

              case 8:
                e = "hard-light";
                break;

              case 9:
                e = "soft-light";
                break;

              case 10:
                e = "difference";
                break;

              case 11:
                e = "exclusion";
                break;

              case 12:
                e = "hue";
                break;

              case 13:
                e = "saturation";
                break;

              case 14:
                e = "color";
                break;

              case 15:
                e = "luminosity";
            }
            t.canvasContext.globalCompositeOperation = e;
        }
    }, CVBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty) return !1;
        if (this.checkBlendMode(0 === this.data.ty ? this.parentGlobalData : this.globalData), 
        !this.isVisible) return this.isVisible;
        this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, 
        this.finalTransform.opacity = this.finalTransform.op.v;
        var e, r = this.finalTransform.mat;
        if (this.hierarchy) {
            var i, s = this.hierarchy.length;
            for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; s > i; i += 1) this.finalTransform.matMdf = !!this.hierarchy[i].finalTransform.mProp.mdf || this.finalTransform.matMdf, 
            e = this.hierarchy[i].finalTransform.mProp.v.props, r.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
        } else t ? (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e)) : r.cloneFromProps(this.finalTransform.mProp.v.props);
        return t && (e = t.mat.props, r.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), 
        this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = !!t.opMdf || this.finalTransform.opMdf, 
        this.finalTransform.matMdf = !!t.matMdf || this.finalTransform.matMdf), this.data.hasMask && (this.globalData.renderer.save(!0), 
        this.maskManager.renderFrame(0 === this.data.ty ? null : r)), this.data.hd && (this.isVisible = !1), 
        this.isVisible;
    }, CVBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new CVMaskElement(t, this, this.globalData);
    }, CVBaseElement.prototype.destroy = function() {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager && this.maskManager.destroy();
    }, CVBaseElement.prototype.mHelper = new Matrix(), createElement(CVBaseElement, CVCompElement), 
    CVCompElement.prototype.ctxTransform = CanvasRenderer.prototype.ctxTransform, CVCompElement.prototype.ctxOpacity = CanvasRenderer.prototype.ctxOpacity, 
    CVCompElement.prototype.save = CanvasRenderer.prototype.save, CVCompElement.prototype.restore = CanvasRenderer.prototype.restore, 
    CVCompElement.prototype.reset = function() {
        this.contextData.cArrPos = 0, this.contextData.cTr.reset(), this.contextData.cO = 1;
    }, CVCompElement.prototype.resize = function(t) {
        var e = Math.max(t.sx, t.sy);
        this.canvas.width = this.data.w * e, this.canvas.height = this.data.h * e, this.transformCanvas = {
            sc: e,
            w: this.data.w * e,
            h: this.data.h * e,
            props: [ e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]
        };
        var r, i = this.elements.length;
        for (r = 0; i > r; r += 1) this.elements[r] && 0 === this.elements[r].data.ty && this.elements[r].resize(t);
    }, CVCompElement.prototype.prepareFrame = function(t) {
        if (this.globalData.frameId = this.parentGlobalData.frameId, this.globalData.mdf = !1, 
        this._parent.prepareFrame.call(this, t), !1 !== this.isVisible || this.data.xt) {
            var e = t;
            this.tm && (e = this.tm.v) === this.data.op && (e = this.data.op - 1), this.renderedFrame = e / this.data.sr;
            var r, i = this.elements.length;
            for (this.completeLayers || this.checkLayers(t), r = 0; i > r; r += 1) (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(e / this.data.sr - this.layers[r].st), 
            0 === this.elements[r].data.ty && this.elements[r].globalData.mdf && (this.globalData.mdf = !0));
            this.globalData.mdf && !this.data.xt && (this.canvasContext.clearRect(0, 0, this.data.w, this.data.h), 
            this.ctxTransform(this.transformCanvas.props));
        }
    }, CVCompElement.prototype.renderFrame = function(t) {
        if (!1 !== this._parent.renderFrame.call(this, t)) {
            if (this.globalData.mdf) {
                var e;
                for (e = this.layers.length - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }
            this.data.hasMask && this.globalData.renderer.restore(!0), this.firstFrame && (this.firstFrame = !1), 
            this.parentGlobalData.renderer.save(), this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props), 
            this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity), this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas, 0, 0, this.data.w, this.data.h), 
            this.parentGlobalData.renderer.restore(), this.globalData.mdf && this.reset();
        }
    }, CVCompElement.prototype.setElements = function(t) {
        this.elements = t;
    }, CVCompElement.prototype.getElements = function() {
        return this.elements;
    }, CVCompElement.prototype.destroy = function() {
        var t;
        for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t].destroy();
        this.layers = null, this.elements = null, this._parent.destroy.call(this._parent);
    }, CVCompElement.prototype.checkLayers = CanvasRenderer.prototype.checkLayers, CVCompElement.prototype.buildItem = CanvasRenderer.prototype.buildItem, 
    CVCompElement.prototype.checkPendingElements = CanvasRenderer.prototype.checkPendingElements, 
    CVCompElement.prototype.addPendingElement = CanvasRenderer.prototype.addPendingElement, 
    CVCompElement.prototype.buildAllItems = CanvasRenderer.prototype.buildAllItems, 
    CVCompElement.prototype.createItem = CanvasRenderer.prototype.createItem, CVCompElement.prototype.createImage = CanvasRenderer.prototype.createImage, 
    CVCompElement.prototype.createComp = CanvasRenderer.prototype.createComp, CVCompElement.prototype.createSolid = CanvasRenderer.prototype.createSolid, 
    CVCompElement.prototype.createShape = CanvasRenderer.prototype.createShape, CVCompElement.prototype.createText = CanvasRenderer.prototype.createText, 
    CVCompElement.prototype.createBase = CanvasRenderer.prototype.createBase, CVCompElement.prototype.buildElementParenting = CanvasRenderer.prototype.buildElementParenting, 
    createElement(CVBaseElement, CVImageElement), CVImageElement.prototype.createElements = function() {
        var t = function() {
            if (this.globalData.elementLoaded(), this.assetData.w !== this.img.width || this.assetData.h !== this.img.height) {
                var t = document.createElement("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e, r, i = t.getContext("2d"), s = this.img.width, a = this.img.height, n = s / a, o = this.assetData.w / this.assetData.h;
                n > o ? (r = a, e = r * o) : (e = s, r = e / o), i.drawImage(this.img, (s - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), 
                this.img = t;
            }
        }.bind(this), e = function() {
            this.failed = !0, this.globalData.elementLoaded();
        }.bind(this);
        this.img = new Image(), this.img.addEventListener("load", t, !1), this.img.addEventListener("error", e, !1);
        var r = this.globalData.getAssetsPath(this.assetData);
        this.img.src = r, this._parent.createElements.call(this);
    }, CVImageElement.prototype.renderFrame = function(t) {
        if (!this.failed && !1 !== this._parent.renderFrame.call(this, t)) {
            var e = this.canvasContext;
            this.globalData.renderer.save();
            var r = this.finalTransform.mat.props;
            this.globalData.renderer.ctxTransform(r), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), 
            e.drawImage(this.img, 0, 0), this.globalData.renderer.restore(this.data.hasMask), 
            this.firstFrame && (this.firstFrame = !1);
        }
    }, CVImageElement.prototype.destroy = function() {
        this.img = null, this._parent.destroy.call(this._parent);
    }, CVMaskElement.prototype.getMaskProperty = function(t) {
        return this.viewData[t];
    }, CVMaskElement.prototype.prepareFrame = function(t) {
        var e, r = this.dynamicProperties.length;
        for (e = 0; r > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.element.globalData.mdf = !0);
    }, CVMaskElement.prototype.renderFrame = function(t) {
        var e, r, i, s, a, n = this.element.canvasContext, o = this.data.masksProperties.length, h = !1;
        for (e = 0; o > e; e++) if ("n" !== this.masksProperties[e].mode) {
            !1 === h && (n.beginPath(), h = !0), this.masksProperties[e].inv && (n.moveTo(0, 0), 
            n.lineTo(this.element.globalData.compWidth, 0), n.lineTo(this.element.globalData.compWidth, this.element.globalData.compHeight), 
            n.lineTo(0, this.element.globalData.compHeight), n.lineTo(0, 0)), a = this.viewData[e].v, 
            r = t ? t.applyToPointArray(a.v[0][0], a.v[0][1], 0) : a.v[0], n.moveTo(r[0], r[1]);
            var l, p = a._length;
            for (l = 1; p > l; l++) r = t ? t.applyToPointArray(a.o[l - 1][0], a.o[l - 1][1], 0) : a.o[l - 1], 
            i = t ? t.applyToPointArray(a.i[l][0], a.i[l][1], 0) : a.i[l], s = t ? t.applyToPointArray(a.v[l][0], a.v[l][1], 0) : a.v[l], 
            n.bezierCurveTo(r[0], r[1], i[0], i[1], s[0], s[1]);
            r = t ? t.applyToPointArray(a.o[l - 1][0], a.o[l - 1][1], 0) : a.o[l - 1], i = t ? t.applyToPointArray(a.i[0][0], a.i[0][1], 0) : a.i[0], 
            s = t ? t.applyToPointArray(a.v[0][0], a.v[0][1], 0) : a.v[0], n.bezierCurveTo(r[0], r[1], i[0], i[1], s[0], s[1]);
        }
        h && n.clip();
    }, CVMaskElement.prototype.getMask = function(t) {
        for (var e = 0, r = this.masksProperties.length; r > e; ) {
            if (this.masksProperties[e].nm === t) return {
                maskPath: this.viewData[e].pv
            };
            e += 1;
        }
    }, CVMaskElement.prototype.destroy = function() {
        this.element = null;
    }, createElement(CVBaseElement, CVShapeElement), CVShapeElement.prototype.lcEnum = {
        1: "butt",
        2: "round",
        3: "butt"
    }, CVShapeElement.prototype.ljEnum = {
        1: "miter",
        2: "round",
        3: "butt"
    }, CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        mat: new Matrix(),
        matMdf: !1,
        opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.viewData, this.dynamicProperties);
    }, CVShapeElement.prototype.searchShapes = function(t, e, r) {
        var i, s, a, n, o = t.length - 1, h = [], l = [];
        for (i = o; i >= 0; i -= 1) if ("fl" == t[i].ty || "st" == t[i].ty) {
            if (n = {
                type: t[i].ty,
                elements: []
            }, e[i] = {}, ("fl" == t[i].ty || "st" == t[i].ty) && (e[i].c = PropertyFactory.getProp(this, t[i].c, 1, 255, r), 
            e[i].c.k || (n.co = "rgb(" + bm_floor(e[i].c.v[0]) + "," + bm_floor(e[i].c.v[1]) + "," + bm_floor(e[i].c.v[2]) + ")")), 
            e[i].o = PropertyFactory.getProp(this, t[i].o, 0, .01, r), "st" == t[i].ty) {
                if (n.lc = this.lcEnum[t[i].lc] || "round", n.lj = this.ljEnum[t[i].lj] || "round", 
                1 == t[i].lj && (n.ml = t[i].ml), e[i].w = PropertyFactory.getProp(this, t[i].w, 0, null, r), 
                e[i].w.k || (n.wi = e[i].w.v), t[i].d) {
                    var p = PropertyFactory.getDashProp(this, t[i].d, "canvas", r);
                    e[i].d = p, e[i].d.k || (n.da = e[i].d.dasharray, n.do = e[i].d.dashoffset);
                }
            } else n.r = 2 === t[i].r ? "evenodd" : "nonzero";
            this.stylesList.push(n), e[i].style = n, h.push(e[i].style);
        } else if ("gr" == t[i].ty) e[i] = {
            it: []
        }, this.searchShapes(t[i].it, e[i].it, r); else if ("tr" == t[i].ty) e[i] = {
            transform: {
                mat: new Matrix(),
                opacity: 1,
                matMdf: !1,
                opMdf: !1,
                op: PropertyFactory.getProp(this, t[i].o, 0, .01, r),
                mProps: PropertyFactory.getProp(this, t[i], 2, null, r)
            },
            elements: []
        }; else if ("sh" == t[i].ty || "rc" == t[i].ty || "el" == t[i].ty || "sr" == t[i].ty) {
            e[i] = {
                nodes: [],
                trNodes: [],
                tr: [ 0, 0, 0, 0, 0, 0 ]
            };
            var m = 4;
            "rc" == t[i].ty ? m = 5 : "el" == t[i].ty ? m = 6 : "sr" == t[i].ty && (m = 7), 
            e[i].sh = ShapePropertyFactory.getShapeProp(this, t[i], m, r), this.shapes.push(e[i].sh), 
            this.addShapeToModifiers(e[i]), a = this.stylesList.length;
            var f = !1, c = !1;
            for (s = 0; a > s; s += 1) this.stylesList[s].closed || (this.stylesList[s].elements.push(e[i]), 
            "st" === this.stylesList[s].type ? f = !0 : c = !0);
            e[i].st = f, e[i].fl = c;
        } else if ("tm" == t[i].ty || "rd" == t[i].ty || "rp" == t[i].ty) {
            var d = ShapeModifiers.getModifier(t[i].ty);
            d.init(this, t[i], r), this.shapeModifiers.push(d), l.push(d), e[i] = d;
        }
        for (o = h.length, i = 0; o > i; i += 1) h[i].closed = !0;
        for (o = l.length, i = 0; o > i; i += 1) l[i].closed = !0;
    }, CVShapeElement.prototype.addShapeToModifiers = IShapeElement.prototype.addShapeToModifiers, 
    CVShapeElement.prototype.renderModifiers = IShapeElement.prototype.renderModifiers, 
    CVShapeElement.prototype.renderFrame = function(t) {
        !1 !== this._parent.renderFrame.call(this, t) && (this.transformHelper.mat.reset(), 
        this.transformHelper.opacity = this.finalTransform.opacity, this.transformHelper.matMdf = !1, 
        this.transformHelper.opMdf = this.finalTransform.opMdf, this.renderModifiers(), 
        this.renderShape(this.transformHelper, null, null, !0), this.data.hasMask && this.globalData.renderer.restore(!0));
    }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
        var s, a;
        if (!e) for (e = this.shapesData, a = this.stylesList.length, s = 0; a > s; s += 1) this.stylesList[s].d = "", 
        this.stylesList[s].mdf = !1;
        r || (r = this.viewData);
        var n, o;
        for (n = t, s = a = e.length - 1; s >= 0; s -= 1) if ("tr" == e[s].ty) {
            n = r[s].transform;
            var h = r[s].transform.mProps.v.props;
            if (n.matMdf = n.mProps.mdf, n.opMdf = n.op.mdf, (o = n.mat).cloneFromProps(h), 
            t) {
                var l = t.mat.props;
                n.opacity = t.opacity, n.opacity *= r[s].transform.op.v, n.matMdf = !!t.matMdf || n.matMdf, 
                n.opMdf = !!t.opMdf || n.opMdf, o.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], l[12], l[13], l[14], l[15]);
            } else n.opacity = n.op.o;
        } else "sh" == e[s].ty || "el" == e[s].ty || "rc" == e[s].ty || "sr" == e[s].ty ? this.renderPath(e[s], r[s], n) : "fl" == e[s].ty ? this.renderFill(e[s], r[s], n) : "st" == e[s].ty ? this.renderStroke(e[s], r[s], n) : "gr" == e[s].ty ? this.renderShape(n, e[s].it, r[s].it) : e[s].ty;
        if (i) {
            a = this.stylesList.length;
            var p, m, f, c, d, u, y, g = this.globalData.renderer, v = this.globalData.canvasContext;
            for (g.save(), g.ctxTransform(this.finalTransform.mat.props), s = 0; a > s; s += 1) if ("st" !== (y = this.stylesList[s].type) || 0 !== this.stylesList[s].wi) {
                for (g.save(), d = this.stylesList[s].elements, "st" === y ? (v.strokeStyle = this.stylesList[s].co, 
                v.lineWidth = this.stylesList[s].wi, v.lineCap = this.stylesList[s].lc, v.lineJoin = this.stylesList[s].lj, 
                v.miterLimit = this.stylesList[s].ml || 0) : v.fillStyle = this.stylesList[s].co, 
                g.ctxOpacity(this.stylesList[s].coOp), "st" !== y && v.beginPath(), m = d.length, 
                p = 0; m > p; p += 1) {
                    for ("st" === y && (v.beginPath(), this.stylesList[s].da ? (v.setLineDash(this.stylesList[s].da), 
                    v.lineDashOffset = this.stylesList[s].do, this.globalData.isDashed = !0) : this.globalData.isDashed && (v.setLineDash(this.dashResetter), 
                    this.globalData.isDashed = !1)), c = (u = d[p].trNodes).length, f = 0; c > f; f += 1) "m" == u[f].t ? v.moveTo(u[f].p[0], u[f].p[1]) : "c" == u[f].t ? v.bezierCurveTo(u[f].p1[0], u[f].p1[1], u[f].p2[0], u[f].p2[1], u[f].p3[0], u[f].p3[1]) : v.closePath();
                    "st" === y && v.stroke();
                }
                "st" !== y && v.fill(this.stylesList[s].r), g.restore();
            }
            g.restore(), this.firstFrame && (this.firstFrame = !1);
        }
    }, CVShapeElement.prototype.renderPath = function(t, e, r) {
        var i, s, a, n;
        if (r.matMdf || e.sh.mdf || this.firstFrame) {
            var o = e.sh.paths;
            n = o._length;
            var h = e.trNodes;
            for (h.length = 0, a = 0; n > a; a += 1) {
                var l = o.shapes[a];
                if (l && l.v) {
                    for (i = l._length, s = 1; i > s; s += 1) 1 == s && h.push({
                        t: "m",
                        p: r.mat.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                    }), h.push({
                        t: "c",
                        p1: r.mat.applyToPointArray(l.o[s - 1][0], l.o[s - 1][1], 0),
                        p2: r.mat.applyToPointArray(l.i[s][0], l.i[s][1], 0),
                        p3: r.mat.applyToPointArray(l.v[s][0], l.v[s][1], 0)
                    });
                    1 == i && h.push({
                        t: "m",
                        p: r.mat.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                    }), l.c && i && (h.push({
                        t: "c",
                        p1: r.mat.applyToPointArray(l.o[s - 1][0], l.o[s - 1][1], 0),
                        p2: r.mat.applyToPointArray(l.i[0][0], l.i[0][1], 0),
                        p3: r.mat.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                    }), h.push({
                        t: "z"
                    })), e.lStr = h;
                }
            }
            if (e.st) for (s = 0; 16 > s; s += 1) e.tr[s] = r.mat.props[s];
            e.trNodes = h;
        }
    }, CVShapeElement.prototype.renderFill = function(t, e, r) {
        var i = e.style;
        (e.c.mdf || this.firstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), 
        (e.o.mdf || r.opMdf || this.firstFrame) && (i.coOp = e.o.v * r.opacity);
    }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
        var i = e.style, s = e.d;
        s && (s.mdf || this.firstFrame) && (i.da = s.dasharray, i.do = s.dashoffset), (e.c.mdf || this.firstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), 
        (e.o.mdf || r.opMdf || this.firstFrame) && (i.coOp = e.o.v * r.opacity), (e.w.mdf || this.firstFrame) && (i.wi = e.w.v);
    }, CVShapeElement.prototype.destroy = function() {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, 
        this.viewData.length = 0, this._parent.destroy.call(this._parent);
    }, createElement(CVBaseElement, CVSolidElement), CVSolidElement.prototype.renderFrame = function(t) {
        if (!1 !== this._parent.renderFrame.call(this, t)) {
            var e = this.canvasContext;
            this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), 
            this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.fillStyle = this.data.sc, 
            e.fillRect(0, 0, this.data.sw, this.data.sh), this.globalData.renderer.restore(this.data.hasMask), 
            this.firstFrame && (this.firstFrame = !1);
        }
    }, createElement(CVBaseElement, CVTextElement), CVTextElement.prototype.init = ITextElement.prototype.init, 
    CVTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, CVTextElement.prototype.getMult = ITextElement.prototype.getMult, 
    CVTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame, CVTextElement.prototype.tHelper = document.createElement("canvas").getContext("2d"), 
    CVTextElement.prototype.createElements = function() {
        this._parent.createElements.call(this);
    }, CVTextElement.prototype.buildNewText = function() {
        var t = this.currentTextDocumentData;
        this.renderedLetters = Array.apply(null, {
            length: this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0
        });
        var e = !1;
        t.fc ? (e = !0, this.values.fill = "rgb(" + Math.round(255 * t.fc[0]) + "," + Math.round(255 * t.fc[1]) + "," + Math.round(255 * t.fc[2]) + ")") : this.values.fill = "rgba(0,0,0,0)", 
        this.fill = e;
        var r = !1;
        t.sc && (r = !0, this.values.stroke = "rgb(" + Math.round(255 * t.sc[0]) + "," + Math.round(255 * t.sc[1]) + "," + Math.round(255 * t.sc[2]) + ")", 
        this.values.sWidth = t.sw);
        var i, s, a = this.globalData.fontManager.getFontByName(t.f), n = t.l, o = this.mHelper;
        this.stroke = r, this.values.fValue = t.s + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, 
        s = t.t.length, this.tHelper.font = this.values.fValue;
        var h, l, p, m, f, c, d, u, y, g = this.data.singleShape;
        if (g) var v = 0, b = 0, E = t.lineWidths, x = t.boxWidth, k = !0;
        var P = 0;
        for (i = 0; s > i; i += 1) {
            var S;
            if (S = (h = this.globalData.fontManager.getCharData(t.t.charAt(i), a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) ? h.data : null, 
            o.reset(), g && n[i].n && (v = 0, b += t.yOffset, b += k ? 1 : 0, k = !1), S && S.shapes) {
                if (m = S.shapes[0].it, c = m.length, o.scale(t.s / 100, t.s / 100), g) {
                    switch (t.ps && o.translate(t.ps[0], t.ps[1] + t.ascent, 0), o.translate(0, -t.ls, 0), 
                    t.j) {
                      case 1:
                        o.translate(t.justifyOffset + (x - E[n[i].line]), 0, 0);
                        break;

                      case 2:
                        o.translate(t.justifyOffset + (x - E[n[i].line]) / 2, 0, 0);
                    }
                    o.translate(v, b, 0);
                }
                for (u = new Array(c), f = 0; c > f; f += 1) {
                    for (p = m[f].ks.k.i.length, d = m[f].ks.k, y = [], l = 1; p > l; l += 1) 1 == l && y.push(o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)), 
                    y.push(o.applyToX(d.o[l - 1][0], d.o[l - 1][1], 0), o.applyToY(d.o[l - 1][0], d.o[l - 1][1], 0), o.applyToX(d.i[l][0], d.i[l][1], 0), o.applyToY(d.i[l][0], d.i[l][1], 0), o.applyToX(d.v[l][0], d.v[l][1], 0), o.applyToY(d.v[l][0], d.v[l][1], 0));
                    y.push(o.applyToX(d.o[l - 1][0], d.o[l - 1][1], 0), o.applyToY(d.o[l - 1][0], d.o[l - 1][1], 0), o.applyToX(d.i[0][0], d.i[0][1], 0), o.applyToY(d.i[0][0], d.i[0][1], 0), o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)), 
                    u[f] = y;
                }
            } else u = [];
            g && (v += n[i].l), this.textSpans[P] ? this.textSpans[P].elem = u : this.textSpans[P] = {
                elem: u
            }, P += 1;
        }
    }, CVTextElement.prototype.renderFrame = function(t) {
        if (!1 !== this._parent.renderFrame.call(this, t)) {
            var e = this.canvasContext, r = this.finalTransform.mat.props;
            this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(r), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), 
            e.font = this.values.fValue, e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4, 
            this.data.singleShape || this.getMeasures();
            var i, s, a, n, o, h, l = this.renderedLetters, p = this.currentTextDocumentData.l;
            s = p.length;
            var m, f, c, d = null, u = null, y = null;
            for (i = 0; s > i; i += 1) if (!p[i].n) {
                if ((m = l[i]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(m.props), 
                this.globalData.renderer.ctxOpacity(m.o)), this.fill) {
                    for (m && m.fc ? d !== m.fc && (d = m.fc, e.fillStyle = m.fc) : d !== this.values.fill && (d = this.values.fill, 
                    e.fillStyle = this.values.fill), n = (f = this.textSpans[i].elem).length, this.globalData.canvasContext.beginPath(), 
                    a = 0; n > a; a += 1) for (c = f[a], h = c.length, this.globalData.canvasContext.moveTo(c[0], c[1]), 
                    o = 2; h > o; o += 6) this.globalData.canvasContext.bezierCurveTo(c[o], c[o + 1], c[o + 2], c[o + 3], c[o + 4], c[o + 5]);
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
                }
                if (this.stroke) {
                    for (m && m.sw ? y !== m.sw && (y = m.sw, e.lineWidth = m.sw) : y !== this.values.sWidth && (y = this.values.sWidth, 
                    e.lineWidth = this.values.sWidth), m && m.sc ? u !== m.sc && (u = m.sc, e.strokeStyle = m.sc) : u !== this.values.stroke && (u = this.values.stroke, 
                    e.strokeStyle = this.values.stroke), n = (f = this.textSpans[i].elem).length, this.globalData.canvasContext.beginPath(), 
                    a = 0; n > a; a += 1) for (c = f[a], h = c.length, this.globalData.canvasContext.moveTo(c[0], c[1]), 
                    o = 2; h > o; o += 6) this.globalData.canvasContext.bezierCurveTo(c[o], c[o + 1], c[o + 2], c[o + 3], c[o + 4], c[o + 5]);
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
                }
                m && this.globalData.renderer.restore();
            }
            this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1);
        }
    }, createElement(BaseElement, HBaseElement), HBaseElement.prototype.checkBlendMode = function() {}, 
    HBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, HBaseElement.prototype.getBaseElement = function() {
        return this.baseElement;
    }, HBaseElement.prototype.createElements = function() {
        this.data.hasMask ? (this.layerElement = document.createElementNS(svgNS, "svg"), 
        styleDiv(this.layerElement), this.baseElement = this.layerElement, this.maskedElement = this.layerElement) : this.layerElement = this.parentContainer, 
        this.transformedElement = this.layerElement, !this.data.ln || 4 !== this.data.ty && 0 !== this.data.ty || (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(svgNS, "g"), 
        this.baseElement = this.layerElement), this.layerElement.setAttribute("id", this.data.ln)), 
        this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null), 
        this.checkParenting();
    }, HBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty) return !1;
        if (this.currentFrameNum === this.lastNum || !this.isVisible) return this.isVisible;
        this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.finalTransform.op.mdf, 
        this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v, 
        this.firstFrame && (this.finalTransform.opMdf = !0, this.finalTransform.matMdf = !0);
        var e, r = this.finalTransform.mat;
        if (this.hierarchy) {
            var i, s = this.hierarchy.length;
            for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; s > i; i += 1) this.finalTransform.matMdf = !!this.hierarchy[i].finalTransform.mProp.mdf || this.finalTransform.matMdf, 
            e = this.hierarchy[i].finalTransform.mProp.v.props, r.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
        } else this.isVisible && this.finalTransform.matMdf && (t ? (e = this.finalTransform.mProp.v.props, 
        r.cloneFromProps(e)) : r.cloneFromProps(this.finalTransform.mProp.v.props));
        return this.data.hasMask && this.maskManager.renderFrame(r), t && (e = t.mat.props, 
        r.cloneFromProps(e), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = !!t.opMdf || this.finalTransform.opMdf, 
        this.finalTransform.matMdf = !!t.matMdf || this.finalTransform.matMdf), this.finalTransform.matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = r.toCSS(), 
        this.finalMat = r), this.finalTransform.opMdf && (this.transformedElement.style.opacity = this.finalTransform.opacity), 
        this.isVisible;
    }, HBaseElement.prototype.destroy = function() {
        this.layerElement = null, this.transformedElement = null, this.parentContainer = null, 
        this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), 
        this.maskManager = null);
    }, HBaseElement.prototype.getDomElement = function() {
        return this.layerElement;
    }, HBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new MaskElement(t, this, this.globalData);
    }, HBaseElement.prototype.hide = function() {}, HBaseElement.prototype.setMatte = function() {}, 
    HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, 
    createElement(HBaseElement, HSolidElement), HSolidElement.prototype.createElements = function() {
        var t = document.createElement("div");
        styleDiv(t);
        var e = document.createElementNS(svgNS, "svg");
        styleDiv(e), e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), 
        t.appendChild(e), this.layerElement = t, this.transformedElement = t, this.baseElement = t, 
        this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), 
        0 !== this.data.bm && this.setBlendMode();
        var r = document.createElementNS(svgNS, "rect");
        r.setAttribute("width", this.data.sw), r.setAttribute("height", this.data.sh), r.setAttribute("fill", this.data.sc), 
        e.appendChild(r), this.data.hasMask && (this.maskedElement = r), this.checkParenting();
    }, HSolidElement.prototype.hide = IImageElement.prototype.hide, HSolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, 
    HSolidElement.prototype.destroy = IImageElement.prototype.destroy, createElement(HBaseElement, HCompElement), 
    HCompElement.prototype.createElements = function() {
        var t = document.createElement("div");
        if (styleDiv(t), this.data.ln && t.setAttribute("id", this.data.ln), t.style.clip = "rect(0px, " + this.data.w + "px, " + this.data.h + "px, 0px)", 
        this.data.hasMask) {
            var e = document.createElementNS(svgNS, "svg");
            styleDiv(e), e.setAttribute("width", this.data.w), e.setAttribute("height", this.data.h);
            var r = document.createElementNS(svgNS, "g");
            e.appendChild(r), t.appendChild(e), this.maskedElement = r, this.baseElement = t, 
            this.layerElement = r, this.transformedElement = t;
        } else this.layerElement = t, this.baseElement = this.layerElement, this.transformedElement = t;
        this.checkParenting();
    }, HCompElement.prototype.hide = ICompElement.prototype.hide, HCompElement.prototype.prepareFrame = ICompElement.prototype.prepareFrame, 
    HCompElement.prototype.setElements = ICompElement.prototype.setElements, HCompElement.prototype.getElements = ICompElement.prototype.getElements, 
    HCompElement.prototype.destroy = ICompElement.prototype.destroy, HCompElement.prototype.renderFrame = function(t) {
        var e, r = this._parent.renderFrame.call(this, t), i = this.layers.length;
        if (!1 !== r) {
            for (this.hidden = !1, e = 0; i > e; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            this.firstFrame && (this.firstFrame = !1);
        } else this.hide();
    }, HCompElement.prototype.checkLayers = BaseRenderer.prototype.checkLayers, HCompElement.prototype.buildItem = HybridRenderer.prototype.buildItem, 
    HCompElement.prototype.checkPendingElements = HybridRenderer.prototype.checkPendingElements, 
    HCompElement.prototype.addPendingElement = HybridRenderer.prototype.addPendingElement, 
    HCompElement.prototype.buildAllItems = BaseRenderer.prototype.buildAllItems, HCompElement.prototype.createItem = HybridRenderer.prototype.createItem, 
    HCompElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, 
    HCompElement.prototype.createImage = HybridRenderer.prototype.createImage, HCompElement.prototype.createComp = HybridRenderer.prototype.createComp, 
    HCompElement.prototype.createSolid = HybridRenderer.prototype.createSolid, HCompElement.prototype.createShape = HybridRenderer.prototype.createShape, 
    HCompElement.prototype.createText = HybridRenderer.prototype.createText, HCompElement.prototype.createBase = HybridRenderer.prototype.createBase, 
    HCompElement.prototype.appendElementInPos = HybridRenderer.prototype.appendElementInPos, 
    createElement(HBaseElement, HShapeElement);
    var parent = HShapeElement.prototype._parent;
    extendPrototype(IShapeElement, HShapeElement), HShapeElement.prototype._parent = parent, 
    HShapeElement.prototype.createElements = function() {
        var t = document.createElement("div");
        styleDiv(t);
        var e = document.createElementNS(svgNS, "svg");
        styleDiv(e);
        var r = this.comp.data ? this.comp.data : this.globalData.compSize;
        if (e.setAttribute("width", r.w), e.setAttribute("height", r.h), this.data.hasMask) {
            var i = document.createElementNS(svgNS, "g");
            t.appendChild(e), e.appendChild(i), this.maskedElement = i, this.layerElement = i, 
            this.shapesContainer = i;
        } else t.appendChild(e), this.layerElement = e, this.shapesContainer = document.createElementNS(svgNS, "g"), 
        this.layerElement.appendChild(this.shapesContainer);
        this.data.hd || (this.baseElement = t), this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), 
        this.searchShapes(this.shapesData, this.viewData, this.layerElement, this.dynamicProperties, 0), 
        this.buildExpressionInterface(), this.layerElement = t, this.transformedElement = t, 
        this.shapeCont = e, 0 !== this.data.bm && this.setBlendMode(), this.checkParenting();
    }, HShapeElement.prototype.renderFrame = function(t) {
        if (!1 !== this._parent.renderFrame.call(this, t)) {
            if (this.hidden && (this.layerElement.style.display = "block", this.hidden = !1), 
            this.renderModifiers(), this.addedTransforms.mdf = this.finalTransform.matMdf, this.addedTransforms.mats.length = 1, 
            this.addedTransforms.mats[0] = this.finalTransform.mat, this.renderShape(null, null, !0, null), 
            this.isVisible && (this.elemMdf || this.firstFrame)) {
                var e = this.shapeCont.getBBox(), r = !1;
                this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), 
                r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), 
                r = !0), (r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) && (this.currentBBox.w = e.width, 
                this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, 
                this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), 
                this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)");
            }
        } else this.hide();
    }, createElement(HBaseElement, HTextElement), HTextElement.prototype.init = ITextElement.prototype.init, 
    HTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, HTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape, 
    HTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame, HTextElement.prototype.createElements = function() {
        this.isMasked = this.checkMasks();
        var t = document.createElement("div");
        if (styleDiv(t), this.layerElement = t, this.transformedElement = t, this.isMasked) {
            this.renderType = "svg";
            var e = document.createElementNS(svgNS, "svg");
            styleDiv(e), this.cont = e, this.compW = this.comp.data.w, this.compH = this.comp.data.h, 
            e.setAttribute("width", this.compW), e.setAttribute("height", this.compH);
            var r = document.createElementNS(svgNS, "g");
            e.appendChild(r), t.appendChild(e), this.maskedElement = r, this.innerElem = r;
        } else this.renderType = "html", this.innerElem = t;
        this.baseElement = t, this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
        var t = this.currentTextDocumentData;
        this.renderedLetters = Array.apply(null, {
            length: this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0
        }), this.innerElem.style.color = this.innerElem.style.fill = t.fc ? "rgb(" + Math.round(255 * t.fc[0]) + "," + Math.round(255 * t.fc[1]) + "," + Math.round(255 * t.fc[2]) + ")" : "rgba(0,0,0,0)", 
        t.sc && (this.innerElem.style.stroke = "rgb(" + Math.round(255 * t.sc[0]) + "," + Math.round(255 * t.sc[1]) + "," + Math.round(255 * t.sc[2]) + ")", 
        this.innerElem.style.strokeWidth = t.sw + "px");
        var e = this.globalData.fontManager.getFontByName(t.f);
        if (!this.globalData.fontManager.chars) if (this.innerElem.style.fontSize = t.s + "px", 
        this.innerElem.style.lineHeight = t.s + "px", e.fClass) this.innerElem.className = e.fClass; else {
            this.innerElem.style.fontFamily = e.fFamily;
            var r = t.fWeight, i = t.fStyle;
            this.innerElem.style.fontStyle = i, this.innerElem.style.fontWeight = r;
        }
        var s, a, n = t.l;
        a = n.length;
        var o, h, l, p, m = this.mHelper, f = "", c = 0;
        for (s = 0; a > s; s += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[c] ? o = this.textPaths[c] : ((o = document.createElementNS(svgNS, "path")).setAttribute("stroke-linecap", "butt"), 
            o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), 
            this.isMasked || (this.textSpans[c] ? (h = this.textSpans[c], l = h.children[0]) : (h = document.createElement("div"), 
            (l = document.createElementNS(svgNS, "svg")).appendChild(o), styleDiv(h)))) : this.isMasked ? o = this.textPaths[c] ? this.textPaths[c] : document.createElementNS(svgNS, "text") : this.textSpans[c] ? (h = this.textSpans[c], 
            o = this.textPaths[c]) : (h = document.createElement("span"), styleDiv(h), o = document.createElement("span"), 
            styleDiv(o), h.appendChild(o)), this.globalData.fontManager.chars) {
                var d, u = this.globalData.fontManager.getCharData(t.t.charAt(s), e.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                if (d = u ? u.data : null, m.reset(), d && d.shapes && (p = d.shapes[0].it, m.scale(t.s / 100, t.s / 100), 
                f = this.createPathShape(m, p), o.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(o); else if (this.innerElem.appendChild(h), 
                d && d.shapes) {
                    document.body.appendChild(l);
                    var y = l.getBBox();
                    l.setAttribute("width", y.width), l.setAttribute("height", y.height), l.setAttribute("viewBox", y.x + " " + y.y + " " + y.width + " " + y.height), 
                    l.style.transform = l.style.webkitTransform = "translate(" + y.x + "px," + y.y + "px)", 
                    n[s].yOffset = y.y, h.appendChild(l);
                } else l.setAttribute("width", 1), l.setAttribute("height", 1);
            } else o.textContent = n[s].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), 
            this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h), 
            o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.s / 1.2 + "px,0)");
            this.textSpans[c] = this.isMasked ? o : h, this.textSpans[c].style.display = "block", 
            this.textPaths[c] = o, c += 1;
        }
        for (;c < this.textSpans.length; ) this.textSpans[c].style.display = "none", c += 1;
    }, HTextElement.prototype.hide = SVGTextElement.prototype.hide, HTextElement.prototype.renderFrame = function(t) {
        if (!1 !== this._parent.renderFrame.call(this, t)) {
            if (this.hidden && (this.hidden = !1, this.innerElem.style.display = "block", this.layerElement.style.display = "block"), 
            this.data.singleShape) {
                if (!this.firstFrame && !this.lettersChangedFlag) return;
                this.isMasked && this.finalTransform.matMdf && (this.cont.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), 
                this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)");
            }
            if (this.getMeasures(), this.lettersChangedFlag) {
                var e, r, i = this.renderedLetters, s = this.currentTextDocumentData.l;
                r = s.length;
                var a;
                for (e = 0; r > e; e += 1) s[e].n || (a = i[e], this.isMasked ? this.textSpans[e].setAttribute("transform", a.m) : this.textSpans[e].style.transform = this.textSpans[e].style.webkitTransform = a.m, 
                this.textSpans[e].style.opacity = a.o, a.sw && this.textPaths[e].setAttribute("stroke-width", a.sw), 
                a.sc && this.textPaths[e].setAttribute("stroke", a.sc), a.fc && (this.textPaths[e].setAttribute("fill", a.fc), 
                this.textPaths[e].style.color = a.fc));
                if (this.isVisible && (this.elemMdf || this.firstFrame) && this.innerElem.getBBox) {
                    var n = this.innerElem.getBBox();
                    this.currentBBox.w !== n.width && (this.currentBBox.w = n.width, this.cont.setAttribute("width", n.width)), 
                    this.currentBBox.h !== n.height && (this.currentBBox.h = n.height, this.cont.setAttribute("height", n.height)), 
                    (this.currentBBox.w !== n.width || this.currentBBox.h !== n.height || this.currentBBox.x !== n.x || this.currentBBox.y !== n.y) && (this.currentBBox.w = n.width, 
                    this.currentBBox.h = n.height, this.currentBBox.x = n.x, this.currentBBox.y = n.y, 
                    this.cont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), 
                    this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)");
                }
                this.firstFrame && (this.firstFrame = !1);
            }
        } else this.hide();
    }, HTextElement.prototype.destroy = SVGTextElement.prototype.destroy, createElement(HBaseElement, HImageElement), 
    HImageElement.prototype.createElements = function() {
        var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
        if (this.data.hasMask) {
            var r = document.createElement("div");
            styleDiv(r);
            var i = document.createElementNS(svgNS, "svg");
            styleDiv(i), i.setAttribute("width", this.assetData.w), i.setAttribute("height", this.assetData.h), 
            r.appendChild(i), this.imageElem = document.createElementNS(svgNS, "image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), 
            this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), 
            i.appendChild(this.imageElem), this.layerElement = r, this.transformedElement = r, 
            this.baseElement = r, this.innerElem = r, this.maskedElement = this.imageElem;
        } else styleDiv(e), this.layerElement = e, this.baseElement = e, this.innerElem = e, 
        this.transformedElement = e;
        e.src = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.checkParenting();
    }, HImageElement.prototype.hide = HSolidElement.prototype.hide, HImageElement.prototype.renderFrame = HSolidElement.prototype.renderFrame, 
    HImageElement.prototype.destroy = HSolidElement.prototype.destroy, createElement(HBaseElement, HCameraElement), 
    HCameraElement.prototype.setup = function() {
        var t, e, r = this.comp.threeDElements.length;
        for (t = 0; r > t; t += 1) e = this.comp.threeDElements[t], e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", 
        e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", 
        e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, 
    HCameraElement.prototype.renderFrame = function() {
        var t, e, r = this.firstFrame;
        if (this.hierarchy) for (e = this.hierarchy.length, t = 0; e > t; t += 1) r = !!this.hierarchy[t].finalTransform.mProp.mdf || r;
        if (r || this.p && this.p.mdf || this.px && (this.px.mdf || this.py.mdf || this.pz.mdf) || this.rx.mdf || this.ry.mdf || this.rz.mdf || this.or.mdf || this.a && this.a.mdf) {
            if (this.mat.reset(), this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), 
            this.a) {
                var i = [ this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2] ], s = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)), a = [ i[0] / s, i[1] / s, i[2] / s ], n = Math.sqrt(a[2] * a[2] + a[0] * a[0]), o = Math.atan2(a[1], n), h = Math.atan2(a[0], -a[2]);
                this.mat.rotateY(h).rotateX(-o);
            }
            if (this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), 
            this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), 
            this.mat.translate(0, 0, this.pe.v), this.hierarchy) {
                var l;
                for (e = this.hierarchy.length, t = 0; e > t; t += 1) l = this.hierarchy[t].finalTransform.mProp.iv.props, 
                this.mat.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], -l[12], -l[13], l[14], l[15]);
            }
            e = this.comp.threeDElements.length;
            var p;
            for (t = 0; e > t; t += 1) p = this.comp.threeDElements[t], p.container.style.transform = p.container.style.webkitTransform = this.mat.toCSS();
        }
        this.firstFrame = !1;
    }, HCameraElement.prototype.destroy = function() {};
    var Expressions = function() {
        function t(t) {
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer);
        }
        var e = {};
        return e.initExpressions = t, e;
    }();
    expressionsPlugin = Expressions, function() {
        function t() {
            return this.pv;
        }
        function e(t, e) {
            t *= this.elem.globalData.frameRate;
            var r, i, s = 0, a = this.keyframes.length - 1, n = 1, o = !0;
            e = void 0 === e ? this.offsetTime : 0;
            for (var h = "object" == typeof this.pv ? [ this.pv.length ] : 0; o; ) {
                if (r = this.keyframes[s], i = this.keyframes[s + 1], s == a - 1 && t >= i.t - e) {
                    r.h && (r = i);
                    break;
                }
                if (i.t - e > t) break;
                a - 1 > s ? s += n : o = !1;
            }
            var l, p, m, f, c, d = 0;
            if (r.to) {
                r.bezierData || bez.buildBezierData(r);
                var u = r.bezierData;
                if (t >= i.t - e || t < r.t - e) {
                    var y = t >= i.t - e ? u.points.length - 1 : 0;
                    for (p = u.points[y].point.length, l = 0; p > l; l += 1) h[l] = u.points[y].point[l];
                } else {
                    r.__fnct ? c = r.__fnct : (c = BezierFactory.getBezierEasing(r.o.x, r.o.y, r.i.x, r.i.y, r.n).get, 
                    r.__fnct = c), m = c((t - (r.t - e)) / (i.t - e - (r.t - e)));
                    var g, v = u.segmentLength * m, b = 0;
                    for (n = 1, o = !0, f = u.points.length; o; ) {
                        if (b += u.points[d].partialLength * n, 0 === v || 0 === m || d == u.points.length - 1) {
                            for (p = u.points[d].point.length, l = 0; p > l; l += 1) h[l] = u.points[d].point[l];
                            break;
                        }
                        if (v >= b && v < b + u.points[d + 1].partialLength) {
                            for (g = (v - b) / u.points[d + 1].partialLength, p = u.points[d].point.length, 
                            l = 0; p > l; l += 1) h[l] = u.points[d].point[l] + (u.points[d + 1].point[l] - u.points[d].point[l]) * g;
                            break;
                        }
                        f - 1 > d && 1 == n || d > 0 && -1 == n ? d += n : o = !1;
                    }
                }
            } else {
                var E, x, k, P, S, A = !1;
                for (a = r.s.length, s = 0; a > s; s += 1) {
                    if (1 !== r.h && (r.o.x instanceof Array ? (A = !0, r.__fnct || (r.__fnct = []), 
                    r.__fnct[s] || (E = r.o.x[s] || r.o.x[0], x = r.o.y[s] || r.o.y[0], k = r.i.x[s] || r.i.x[0], 
                    P = r.i.y[s] || r.i.y[0])) : (A = !1, r.__fnct || (E = r.o.x, x = r.o.y, k = r.i.x, 
                    P = r.i.y)), A ? r.__fnct[s] ? c = r.__fnct[s] : (c = BezierFactory.getBezierEasing(E, x, k, P).get, 
                    r.__fnct[s] = c) : r.__fnct ? c = r.__fnct : (c = BezierFactory.getBezierEasing(E, x, k, P).get, 
                    r.__fnct = c), m = t >= i.t - e ? 1 : t < r.t - e ? 0 : c((t - (r.t - e)) / (i.t - e - (r.t - e)))), 
                    this.sh && 1 !== r.h) {
                        var C = r.s[s], M = r.e[s];
                        -180 > C - M ? C += 360 : C - M > 180 && (C -= 360), S = C + (M - C) * m;
                    } else S = 1 === r.h ? r.s[s] : r.s[s] + (r.e[s] - r.s[s]) * m;
                    1 === a ? h = S : h[s] = S;
                }
            }
            return h;
        }
        function r(t) {
            if (void 0 !== this.vel) return this.vel;
            var e, r = -.01, i = this.getValueAtTime(t, 0), s = this.getValueAtTime(t + r, 0);
            if (i.length) {
                e = Array.apply(null, {
                    length: i.length
                });
                var a;
                for (a = 0; a < i.length; a += 1) e[a] = (s[a] - i[a]) / r;
            } else e = (s - i) / r;
            return e;
        }
        function i(t) {
            this.propertyGroup = t;
        }
        function s(t, e, r) {
            e.x && (r.k = !0, r.x = !0, r.getValue && (r.getPreValue = r.getValue), r.getValue = ExpressionManager.initiateExpression.bind(r)(t, e, r));
        }
        var a = function() {
            function a(t, e) {
                return this.textIndex = t + 1, this.textTotal = e, this.getValue(), this.v;
            }
            return function(n, o) {
                this.pv = 1, this.comp = n.comp, this.elem = n, this.mult = .01, this.type = "textSelector", 
                this.textTotal = o.totalChars, this.selectorValue = 100, this.lastValue = [ 1, 1, 1 ], 
                s.bind(this)(n, o, this), this.getMult = a, this.getVelocityAtTime = r, this.getValueAtTime = this.kf ? e.bind(this) : t.bind(this), 
                this.setGroupProperty = i;
            };
        }(), n = PropertyFactory.getProp;
        PropertyFactory.getProp = function(a, o, h, l, p) {
            var m = n(a, o, h, l, p);
            m.getVelocityAtTime = r, m.getValueAtTime = m.kf ? e.bind(m) : t.bind(m), m.setGroupProperty = i;
            var f = m.k;
            return void 0 !== o.ix && Object.defineProperty(m, "propertyIndex", {
                get: function() {
                    return o.ix;
                }
            }), s(a, o, m), !f && m.x && p.push(m), m;
        };
        var o = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function(r, a, n, h, l) {
            var p = o(r, a, n, h, l);
            p.setGroupProperty = i, p.getValueAtTime = p.kf ? e : t;
            var m = p.k;
            return void 0 !== a.ix && Object.defineProperty(p, "propertyIndex", {
                get: function() {
                    return a.ix;
                }
            }), 3 === n ? s(r, a.pt, p) : 4 === n && s(r, a.ks, p), !m && p.x && h.push(p), 
            p;
        };
        var h = PropertyFactory.getTextSelectorProp;
        PropertyFactory.getTextSelectorProp = function(t, e, r) {
            return 1 === e.t ? new a(t, e, r) : h(t, e, r);
        };
    }();
    var ExpressionManager = function() {
        function duplicatePropertyValue(t, e) {
            if (e = e || 1, "number" == typeof t || t instanceof Number) return t * e;
            if (t.i) return JSON.parse(JSON.stringify(t));
            var r, i = Array.apply(null, {
                length: t.length
            }), s = t.length;
            for (r = 0; s > r; r += 1) i[r] = t[r] * e;
            return i;
        }
        function shapesEqual(t, e) {
            if (t._length !== e._length || t.c !== e.c) return !1;
            var r, i = t._length;
            for (r = 0; i > r; r += 1) if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
            return !0;
        }
        function $bm_neg(t) {
            var e = typeof t;
            if ("number" === e || "boolean" === e || t instanceof Number) return -t;
            if (t.constructor === Array) {
                var r, i = t.length, s = [];
                for (r = 0; i > r; r += 1) s[r] = -t[r];
                return s;
            }
        }
        function sum(t, e) {
            var r = typeof t, i = typeof e;
            if ("string" === r || "string" === i) return t + e;
            if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return t + e;
            if (t.constructor === Array && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return t[0] = t[0] + e, 
            t;
            if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && e.constructor === Array) return e[0] = t + e[0], 
            e;
            if (t.constructor === Array && e.constructor === Array) {
                for (var s = 0, a = t.length, n = e.length, o = []; a > s || n > s; ) o[s] = "number" == typeof t[s] && "number" == typeof e[s] ? t[s] + e[s] : void 0 == e[s] ? t[s] : t[s] || e[s], 
                s += 1;
                return o;
            }
            return 0;
        }
        function sub(t, e) {
            var r = typeof t, i = typeof e;
            if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return t - e;
            if (t.constructor === Array && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return t[0] = t[0] - e, 
            t;
            if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && e.constructor === Array) return e[0] = t - e[0], 
            e;
            if (t.constructor === Array && e.constructor === Array) {
                for (var s = 0, a = t.length, n = e.length, o = []; a > s || n > s; ) o[s] = "number" == typeof t[s] && "number" == typeof e[s] ? t[s] - e[s] : void 0 == e[s] ? t[s] : t[s] || e[s], 
                s += 1;
                return o;
            }
            return 0;
        }
        function mul(t, e) {
            var r, i = typeof t, s = typeof e;
            if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && ("number" === s || "boolean" === s || "string" === s || e instanceof Number)) return t * e;
            var a, n;
            if (t.constructor === Array && ("number" === s || "boolean" === s || "string" === s || e instanceof Number)) {
                for (n = t.length, r = Array.apply(null, {
                    length: n
                }), a = 0; n > a; a += 1) r[a] = t[a] * e;
                return r;
            }
            if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && e.constructor === Array) {
                for (n = e.length, r = Array.apply(null, {
                    length: n
                }), a = 0; n > a; a += 1) r[a] = t * e[a];
                return r;
            }
            return 0;
        }
        function div(t, e) {
            var r, i = typeof t, s = typeof e;
            if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && ("number" === s || "boolean" === s || "string" === s || e instanceof Number)) return t / e;
            var a, n;
            if (t.constructor === Array && ("number" === s || "boolean" === s || "string" === s || e instanceof Number)) {
                for (n = t.length, r = Array.apply(null, {
                    length: n
                }), a = 0; n > a; a += 1) r[a] = t[a] / e;
                return r;
            }
            if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && e.constructor === Array) {
                for (n = e.length, r = Array.apply(null, {
                    length: n
                }), a = 0; n > a; a += 1) r[a] = t / e[a];
                return r;
            }
            return 0;
        }
        function clamp(t, e, r) {
            if (e > r) {
                var i = r;
                r = e, e = i;
            }
            return Math.min(Math.max(t, e), r);
        }
        function radiansToDegrees(t) {
            return t / degToRads;
        }
        function degreesToRadians(t) {
            return t * degToRads;
        }
        function length(t, e) {
            if ("number" == typeof t) return e = e || 0, Math.abs(t - e);
            e || (e = helperLengthArray);
            var r, i = Math.min(t.length, e.length), s = 0;
            for (r = 0; i > r; r += 1) s += Math.pow(e[r] - t[r], 2);
            return Math.sqrt(s);
        }
        function normalize(t) {
            return div(t, length(t));
        }
        function rgbToHsl(t) {
            var e, r, i = t[0], s = t[1], a = t[2], n = Math.max(i, s, a), o = Math.min(i, s, a), h = (n + o) / 2;
            if (n == o) e = r = 0; else {
                var l = n - o;
                switch (r = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
                  case i:
                    e = (s - a) / l + (a > s ? 6 : 0);
                    break;

                  case s:
                    e = (a - i) / l + 2;
                    break;

                  case a:
                    e = (i - s) / l + 4;
                }
                e /= 6;
            }
            return [ e, r, h, t[3] ];
        }
        function hslToRgb(t) {
            function e(t, e, r) {
                return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? t + 6 * (e - t) * r : .5 > r ? e : 2 / 3 > r ? t + (e - t) * (2 / 3 - r) * 6 : t;
            }
            var r, i, s, a = t[0], n = t[1], o = t[2];
            if (0 == n) r = i = s = o; else {
                var h = .5 > o ? o * (1 + n) : o + n - o * n, l = 2 * o - h;
                r = e(l, h, a + 1 / 3), i = e(l, h, a), s = e(l, h, a - 1 / 3);
            }
            return [ r, i, s, t[3] ];
        }
        function linear(t, e, r, i, s) {
            if (void 0 === i || void 0 === s) return linear(t, 0, 1, e, r);
            if (e >= t) return i;
            if (t >= r) return s;
            var a = r === e ? 0 : (t - e) / (r - e);
            if (!i.length) return i + (s - i) * a;
            var n, o = i.length, h = Array.apply(null, {
                length: o
            });
            for (n = 0; o > n; n += 1) h[n] = i[n] + (s[n] - i[n]) * a;
            return h;
        }
        function random(t, e) {
            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var r, i = e.length;
                t || (t = Array.apply(null, {
                    length: i
                }));
                var s = Array.apply(null, {
                    length: i
                }), a = BMMath.random();
                for (r = 0; i > r; r += 1) s[r] = t[r] + a * (e[r] - t[r]);
                return s;
            }
            return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
        }
        function initiateExpression(elem, data, property) {
            function lookAt(t, e) {
                var r = [ e[0] - t[0], e[1] - t[1], e[2] - t[2] ], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [ -Math.atan2(r[1], r[2]) / degToRads, i, 0 ];
            }
            function easeOut(t, e, r) {
                return -(r - e) * t * (t - 2) + e;
            }
            function nearestKey(t) {
                var e, r, i, s = data.k.length;
                if (data.k.length && "number" != typeof data.k[0]) if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, 
                i = data.k[0].t; else {
                    for (e = 0; s - 1 > e; e += 1) {
                        if (t === data.k[e].t) {
                            r = e + 1, i = data.k[e].t;
                            break;
                        }
                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                            t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, 
                            i = data.k[e].t);
                            break;
                        }
                    }
                    -1 === r && (r = e + 1, i = data.k[e].t);
                } else r = 0, i = 0;
                var a = {};
                return a.index = r, a.time = i / elem.comp.globalData.frameRate, a;
            }
            function key(t) {
                if (!data.k.length || "number" == typeof data.k[0]) return {
                    time: 0
                };
                t -= 1;
                var e, r, i = {
                    time: data.k[t].t / elem.comp.globalData.frameRate
                }, s = (e = t !== data.k.length - 1 || data.k[t].h ? data.k[t].s : data.k[t - 1].e).length;
                for (r = 0; s > r; r += 1) i[r] = e[r];
                return i;
            }
            function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e;
            }
            function timeToFrames(t, e) {
                return t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
            }
            function toWorld(t) {
                if (toworldMatrix.reset(), elem.finalTransform.mProp.applyToMatrix(toworldMatrix), 
                elem.hierarchy && elem.hierarchy.length) {
                    var e, r = elem.hierarchy.length;
                    for (e = 0; r > e; e += 1) elem.hierarchy[e].finalTransform.mProp.applyToMatrix(toworldMatrix);
                    return toworldMatrix.applyToPointArray(t[0], t[1], t[2] || 0);
                }
                return toworldMatrix.applyToPointArray(t[0], t[1], t[2] || 0);
            }
            function fromWorld(t) {
                fromworldMatrix.reset();
                var e = [];
                if (e.push(t), elem.finalTransform.mProp.applyToMatrix(fromworldMatrix), elem.hierarchy && elem.hierarchy.length) {
                    var r, i = elem.hierarchy.length;
                    for (r = 0; i > r; r += 1) elem.hierarchy[r].finalTransform.mProp.applyToMatrix(fromworldMatrix);
                    return fromworldMatrix.inversePoints(e)[0];
                }
                return fromworldMatrix.inversePoints(e)[0];
            }
            function seedRandom(t) {
                BMMath.seedrandom(randSeed + t);
            }
            function execute() {
                if (_needsRandom && seedRandom(randSeed), this.frameExpressionId !== elem.globalData.frameId || "textSelector" === this.type) {
                    if (this.lock) return this.v = duplicatePropertyValue(this.pv, this.mult), !0;
                    "textSelector" === this.type && (textIndex = this.textIndex, textTotal = this.textTotal, 
                    selectorValue = this.selectorValue), thisLayer || (thisLayer = elem.layerInterface, 
                    thisComp = elem.comp.compInterface), transform || (transform = elem.layerInterface("ADBE Transform Group")), 
                    4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), 
                    (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), 
                    this.lock = !0, this.getPreValue && this.getPreValue(), value = this.pv, time = this.comp.renderedFrame / this.comp.globalData.frameRate, 
                    needsVelocity && (velocity = velocityAtTime(time)), bindedFn(), this.frameExpressionId = elem.globalData.frameId;
                    var t, e;
                    if (this.mult) if ("number" == typeof this.v || this.v instanceof Number || "string" == typeof this.v) this.v *= this.mult; else if (1 === this.v.length) this.v = this.v[0] * this.mult; else for (e = this.v.length, 
                    value === this.v && (this.v = 2 === e ? [ value[0], value[1] ] : [ value[0], value[1], value[2] ]), 
                    t = 0; e > t; t += 1) this.v[t] *= this.mult;
                    if (1 === this.v.length && (this.v = this.v[0]), "number" == typeof this.v || this.v instanceof Number || "string" == typeof this.v) this.lastValue !== this.v && (this.lastValue = this.v, 
                    this.mdf = !0); else if (this.v._length) shapesEqual(this.v, this.localShapeCollection.shapes[0]) || (this.mdf = !0, 
                    this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(shape_pool.clone(this.v))); else for (e = this.v.length, 
                    t = 0; e > t; t += 1) this.v[t] !== this.lastValue[t] && (this.lastValue[t] = this.v[t], 
                    this.mdf = !0);
                    this.lock = !1;
                }
            }
            var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, content, effect, thisComp = elem.comp, thisProperty = property;
            elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, thisLayer, thisComp, fn = new Function(), fn = eval("[function(){" + val + ";this.v = $bm_rt;}]")[0], bindedFn = fn.bind(this), numKeys = property.kf ? data.k.length : 0, wiggle = function(t, e) {
                var r, i, s = this.pv.length ? this.pv.length : 1, a = Array.apply(null, {
                    len: s
                });
                for (i = 0; s > i; i += 1) a[i] = 0;
                t = 5;
                var n = Math.floor(time * t);
                for (r = 0, i = 0; n > r; ) {
                    for (i = 0; s > i; i += 1) a[i] += -e + 2 * e * BMMath.random();
                    r += 1;
                }
                var o = time * t, h = o - Math.floor(o), l = Array.apply({
                    length: s
                });
                if (s > 1) {
                    for (i = 0; s > i; i += 1) l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                    return l;
                }
                return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
            }.bind(this), loopIn = function(t, e, r) {
                if (!this.k) return this.pv;
                var i = time * elem.comp.globalData.frameRate, s = this.keyframes, a = s[0].t;
                if (i >= a) return this.pv;
                var n, o;
                r ? (n = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - a), 
                o = a + n) : ((!e || e > s.length - 1) && (e = s.length - 1), o = s[e].t, n = o - a);
                var h, l, p;
                if ("pingpong" === t) {
                    if (Math.floor((a - i) / n) % 2 == 0) return this.getValueAtTime(((a - i) % n + a) / this.comp.globalData.frameRate, 0);
                } else {
                    if ("offset" === t) {
                        var m = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(o / this.comp.globalData.frameRate, 0), c = this.getValueAtTime((n - (a - i) % n + a) / this.comp.globalData.frameRate, 0), d = Math.floor((a - i) / n) + 1;
                        if (this.pv.length) {
                            for (l = (p = new Array(m.length)).length, h = 0; l > h; h += 1) p[h] = c[h] - (f[h] - m[h]) * d;
                            return p;
                        }
                        return c - (f - m) * d;
                    }
                    if ("continue" === t) {
                        var u = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((a + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (l = (p = new Array(u.length)).length, h = 0; l > h; h += 1) p[h] = u[h] + (u[h] - y[h]) * (a - i) / .001;
                            return p;
                        }
                        return u + (u - y) * (a - i) / .001;
                    }
                }
                return this.getValueAtTime((n - (a - i) % n + a) / this.comp.globalData.frameRate, 0);
            }.bind(this), loopInDuration = function(t, e) {
                return loopIn(t, e, !0);
            }.bind(this), loopOut = function(t, e, r) {
                if (!this.k || !this.keyframes) return this.pv;
                var i = time * elem.comp.globalData.frameRate, s = this.keyframes, a = s[s.length - 1].t;
                if (a >= i) return this.pv;
                var n, o;
                r ? (n = e ? Math.abs(a - elem.comp.globalData.frameRate * e) : Math.max(0, a - this.elem.data.ip), 
                o = a - n) : ((!e || e > s.length - 1) && (e = s.length - 1), o = s[s.length - 1 - e].t, 
                n = a - o);
                var h, l, p;
                if ("pingpong" === t) {
                    if (Math.floor((i - o) / n) % 2 != 0) return this.getValueAtTime((n - (i - o) % n + o) / this.comp.globalData.frameRate, 0);
                } else {
                    if ("offset" === t) {
                        var m = this.getValueAtTime(o / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), c = this.getValueAtTime(((i - o) % n + o) / this.comp.globalData.frameRate, 0), d = Math.floor((i - o) / n);
                        if (this.pv.length) {
                            for (l = (p = new Array(m.length)).length, h = 0; l > h; h += 1) p[h] = (f[h] - m[h]) * d + c[h];
                            return p;
                        }
                        return (f - m) * d + c;
                    }
                    if ("continue" === t) {
                        var u = this.getValueAtTime(a / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((a - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (l = (p = new Array(u.length)).length, h = 0; l > h; h += 1) p[h] = u[h] + (u[h] - y[h]) * ((i - a) / this.comp.globalData.frameRate) / 5e-4;
                            return p;
                        }
                        return u + (i - a) / .001 * (u - y);
                    }
                }
                return this.getValueAtTime(((i - o) % n + o) / this.comp.globalData.frameRate, 0);
            }.bind(this), loop_out = loopOut, loopOutDuration = function(t, e) {
                return loopOut(t, e, !0);
            }.bind(this), valueAtTime = function(t) {
                return this.getValueAtTime(t, 0);
            }.bind(this), velocityAtTime = function(t) {
                return this.getVelocityAtTime(t);
            }.bind(this), comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), toworldMatrix = new Matrix(), fromworldMatrix = new Matrix(), time, velocity, value, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random());
            return execute;
        }
        var ob = {}, Math = BMMath, window = null, document = null, add = sum, radians_to_degrees = radiansToDegrees, degrees_to_radians = radiansToDegrees, helperLengthArray = [ 0, 0, 0, 0, 0, 0 ];
        return ob.initiateExpression = initiateExpression, ob;
    }(), ShapeExpressionInterface = function() {
        function t(t, e, r) {
            return d(t, e, r);
        }
        function e(t, e, r) {
            return y(t, e, r);
        }
        function r(t, e, r) {
            return g(t, e, r);
        }
        function i(t, e, r) {
            return v(t, e, r);
        }
        function s(t, e, r) {
            return b(t, e, r);
        }
        function a(t, e, r) {
            return E(t, e, r);
        }
        function n(t, e, r) {
            return x(t, e, r);
        }
        function o(t, e, r) {
            return k(t, e, r);
        }
        function h(t, e, r) {
            return P(t, e, r);
        }
        function l(t, e, r) {
            return S(t, e, r);
        }
        function p(t, e, r) {
            return A(t, e, r);
        }
        function m(t, e, r) {
            return C(t, e, r);
        }
        function f(t, e, r) {
            var i, s = [], a = t ? t.length : 0;
            for (i = 0; a > i; i += 1) "gr" == t[i].ty ? s.push(ShapeExpressionInterface.createGroupInterface(t[i], e[i], r)) : "fl" == t[i].ty ? s.push(ShapeExpressionInterface.createFillInterface(t[i], e[i], r)) : "st" == t[i].ty ? s.push(ShapeExpressionInterface.createStrokeInterface(t[i], e[i], r)) : "tm" == t[i].ty ? s.push(ShapeExpressionInterface.createTrimInterface(t[i], e[i], r)) : "tr" == t[i].ty || ("el" == t[i].ty ? s.push(ShapeExpressionInterface.createEllipseInterface(t[i], e[i], r)) : "sr" == t[i].ty ? s.push(ShapeExpressionInterface.createStarInterface(t[i], e[i], r)) : "sh" == t[i].ty ? s.push(ShapeExpressionInterface.createPathInterface(t[i], e[i], r)) : "rc" == t[i].ty ? s.push(ShapeExpressionInterface.createRectInterface(t[i], e[i], r)) : "rd" == t[i].ty ? s.push(ShapeExpressionInterface.createRoundedInterface(t[i], e[i], r)) : "rp" == t[i].ty && s.push(ShapeExpressionInterface.createRepatearInterface(t[i], e[i], r)));
            return s;
        }
        var c = {
            createShapeInterface: t,
            createGroupInterface: e,
            createTrimInterface: s,
            createStrokeInterface: i,
            createTransformInterface: a,
            createEllipseInterface: n,
            createStarInterface: o,
            createRectInterface: h,
            createRoundedInterface: l,
            createRepatearInterface: p,
            createPathInterface: m,
            createFillInterface: r
        }, d = function() {
            return function(t, e, r) {
                function i(t) {
                    if ("number" == typeof t) return s[t - 1];
                    for (var e = 0, r = s.length; r > e; ) {
                        if (s[e]._name === t) return s[e];
                        e += 1;
                    }
                }
                var s;
                return i.propertyGroup = r, s = f(t, e, i), i;
            };
        }(), u = function() {
            return function(t, e, r) {
                var i, s = function(t) {
                    for (var e = 0, r = i.length; r > e; ) {
                        if (i[e]._name === t || i[e].mn === t || i[e].propertyIndex === t || i[e].ix === t || i[e].ind === t) return i[e];
                        e += 1;
                    }
                    return "number" == typeof t ? i[t - 1] : void 0;
                };
                return s.propertyGroup = function(t) {
                    return 1 === t ? s : r(t - 1);
                }, i = f(t.it, e.it, s.propertyGroup), s.numProperties = i.length, s.propertyIndex = t.cix, 
                s;
            };
        }(), y = function() {
            return function(t, e, r) {
                var i = function(t) {
                    switch (t) {
                      case "ADBE Vectors Group":
                      case "Contents":
                      case 2:
                        return i.content;

                      case "ADBE Vector Transform Group":
                      case 3:
                      default:
                        return i.transform;
                    }
                };
                i.propertyGroup = function(t) {
                    return 1 === t ? i : r(t - 1);
                };
                var s = u(t, e, i.propertyGroup), a = ShapeExpressionInterface.createTransformInterface(t.it[t.it.length - 1], e.it[e.it.length - 1], i.propertyGroup);
                return i.content = s, i.transform = a, Object.defineProperty(i, "_name", {
                    get: function() {
                        return t.nm;
                    }
                }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i;
            };
        }(), g = function() {
            return function(t, e, r) {
                function i(t) {
                    return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : void 0;
                }
                return Object.defineProperty(i, "color", {
                    get: function() {
                        return ExpressionValue(e.c, 1 / e.c.mult, "color");
                    }
                }), Object.defineProperty(i, "opacity", {
                    get: function() {
                        return ExpressionValue(e.o, 100);
                    }
                }), Object.defineProperty(i, "_name", {
                    value: t.nm
                }), Object.defineProperty(i, "mn", {
                    value: t.mn
                }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), i;
            };
        }(), v = function() {
            return function(t, e, r) {
                function i(t) {
                    return 1 === t ? c : r(t - 1);
                }
                function s(t) {
                    return 1 === t ? h : i(t - 1);
                }
                function a(t) {
                    return "Color" === t || "color" === t ? a.color : "Opacity" === t || "opacity" === t ? a.opacity : "Stroke Width" === t || "stroke width" === t ? a.strokeWidth : void 0;
                }
                var n, o = t.d ? t.d.length : 0, h = {};
                for (n = 0; o > n; n += 1) (function(r) {
                    Object.defineProperty(h, t.d[r].nm, {
                        get: function() {
                            return ExpressionValue(e.d.dataProps[r].p);
                        }
                    });
                })(n), e.d.dataProps[n].p.setGroupProperty(s);
                return Object.defineProperty(a, "color", {
                    get: function() {
                        return ExpressionValue(e.c, 1 / e.c.mult, "color");
                    }
                }), Object.defineProperty(a, "opacity", {
                    get: function() {
                        return ExpressionValue(e.o, 100);
                    }
                }), Object.defineProperty(a, "strokeWidth", {
                    get: function() {
                        return ExpressionValue(e.w);
                    }
                }), Object.defineProperty(a, "dash", {
                    get: function() {
                        return h;
                    }
                }), Object.defineProperty(a, "_name", {
                    value: t.nm
                }), Object.defineProperty(a, "mn", {
                    value: t.mn
                }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), e.w.setGroupProperty(i), a;
            };
        }(), b = function() {
            return function(t, e, r) {
                function i(t) {
                    return 1 == t ? s : r(--t);
                }
                function s(e) {
                    return e === t.e.ix || "End" === e || "end" === e ? s.end : e === t.s.ix ? s.start : e === t.o.ix ? s.offset : void 0;
                }
                return s.propertyIndex = t.ix, e.s.setGroupProperty(i), e.e.setGroupProperty(i), 
                e.o.setGroupProperty(i), s.propertyIndex = t.ix, Object.defineProperty(s, "start", {
                    get: function() {
                        return ExpressionValue(e.s, 1 / e.s.mult);
                    }
                }), Object.defineProperty(s, "end", {
                    get: function() {
                        return ExpressionValue(e.e, 1 / e.e.mult);
                    }
                }), Object.defineProperty(s, "offset", {
                    get: function() {
                        return ExpressionValue(e.o);
                    }
                }), Object.defineProperty(s, "_name", {
                    get: function() {
                        return t.nm;
                    }
                }), s.mn = t.mn, s;
            };
        }(), E = function() {
            return function(t, e, r) {
                function i(t) {
                    return 1 == t ? s : r(--t);
                }
                function s(e) {
                    return t.a.ix === e ? s.anchorPoint : t.o.ix === e ? s.opacity : t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.s.ix === e ? s.scale : t.sk && t.sk.ix === e ? s.skew : t.sa && t.sa.ix === e ? s.skewAxis : "Opacity" === e ? s.opacity : "Position" === e ? s.position : "Anchor Point" === e ? s.anchorPoint : "Scale" === e ? s.scale : "Rotation" === e || "ADBE Vector Rotation" === e ? s.rotation : "Skew" === e ? s.skew : "Skew Axis" === e ? s.skewAxis : void 0;
                }
                return e.transform.mProps.o.setGroupProperty(i), e.transform.mProps.p.setGroupProperty(i), 
                e.transform.mProps.a.setGroupProperty(i), e.transform.mProps.s.setGroupProperty(i), 
                e.transform.mProps.r.setGroupProperty(i), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(i), 
                e.transform.mProps.sa.setGroupProperty(i)), e.transform.op.setGroupProperty(i), 
                Object.defineProperty(s, "opacity", {
                    get: function() {
                        return ExpressionValue(e.transform.mProps.o, 1 / e.transform.mProps.o.mult);
                    }
                }), Object.defineProperty(s, "position", {
                    get: function() {
                        return ExpressionValue(e.transform.mProps.p);
                    }
                }), Object.defineProperty(s, "anchorPoint", {
                    get: function() {
                        return ExpressionValue(e.transform.mProps.a);
                    }
                }), Object.defineProperty(s, "scale", {
                    get: function() {
                        return ExpressionValue(e.transform.mProps.s, 1 / e.transform.mProps.s.mult);
                    }
                }), Object.defineProperty(s, "rotation", {
                    get: function() {
                        return ExpressionValue(e.transform.mProps.r, 1 / e.transform.mProps.r.mult);
                    }
                }), Object.defineProperty(s, "skew", {
                    get: function() {
                        return ExpressionValue(e.transform.mProps.sk);
                    }
                }), Object.defineProperty(s, "skewAxis", {
                    get: function() {
                        return ExpressionValue(e.transform.mProps.sa);
                    }
                }), Object.defineProperty(s, "_name", {
                    get: function() {
                        return t.nm;
                    }
                }), s.ty = "tr", s.mn = t.mn, s;
            };
        }(), x = function() {
            return function(t, e, r) {
                function i(t) {
                    return 1 == t ? s : r(--t);
                }
                function s(e) {
                    return t.p.ix === e ? s.position : t.s.ix === e ? s.size : void 0;
                }
                s.propertyIndex = t.ix;
                var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return a.s.setGroupProperty(i), a.p.setGroupProperty(i), Object.defineProperty(s, "size", {
                    get: function() {
                        return ExpressionValue(a.s);
                    }
                }), Object.defineProperty(s, "position", {
                    get: function() {
                        return ExpressionValue(a.p);
                    }
                }), Object.defineProperty(s, "_name", {
                    get: function() {
                        return t.nm;
                    }
                }), s.mn = t.mn, s;
            };
        }(), k = function() {
            return function(t, e, r) {
                function i(t) {
                    return 1 == t ? s : r(--t);
                }
                function s(e) {
                    return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? s.innerRoundness : void 0 : s.innerRadius;
                }
                var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return s.propertyIndex = t.ix, a.or.setGroupProperty(i), a.os.setGroupProperty(i), 
                a.pt.setGroupProperty(i), a.p.setGroupProperty(i), a.r.setGroupProperty(i), t.ir && (a.ir.setGroupProperty(i), 
                a.is.setGroupProperty(i)), Object.defineProperty(s, "position", {
                    get: function() {
                        return ExpressionValue(a.p);
                    }
                }), Object.defineProperty(s, "rotation", {
                    get: function() {
                        return ExpressionValue(a.r, 1 / a.r.mult);
                    }
                }), Object.defineProperty(s, "points", {
                    get: function() {
                        return ExpressionValue(a.pt);
                    }
                }), Object.defineProperty(s, "outerRadius", {
                    get: function() {
                        return ExpressionValue(a.or);
                    }
                }), Object.defineProperty(s, "outerRoundness", {
                    get: function() {
                        return ExpressionValue(a.os);
                    }
                }), Object.defineProperty(s, "innerRadius", {
                    get: function() {
                        return a.ir ? ExpressionValue(a.ir) : 0;
                    }
                }), Object.defineProperty(s, "innerRoundness", {
                    get: function() {
                        return a.is ? ExpressionValue(a.is, 1 / a.is.mult) : 0;
                    }
                }), Object.defineProperty(s, "_name", {
                    get: function() {
                        return t.nm;
                    }
                }), s.mn = t.mn, s;
            };
        }(), P = function() {
            return function(t, e, r) {
                function i(t) {
                    return 1 == t ? s : r(--t);
                }
                function s(e) {
                    return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? s.innerRoundness : void 0 : s.innerRadius;
                }
                var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return s.propertyIndex = t.ix, a.p.setGroupProperty(i), a.s.setGroupProperty(i), 
                a.r.setGroupProperty(i), Object.defineProperty(s, "position", {
                    get: function() {
                        return ExpressionValue(a.p);
                    }
                }), Object.defineProperty(s, "roundness", {
                    get: function() {
                        return ExpressionValue(a.r);
                    }
                }), Object.defineProperty(s, "size", {
                    get: function() {
                        return ExpressionValue(a.s);
                    }
                }), Object.defineProperty(s, "_name", {
                    get: function() {
                        return t.nm;
                    }
                }), s.mn = t.mn, s;
            };
        }(), S = function() {
            return function(t, e, r) {
                function i(t) {
                    return 1 == t ? s : r(--t);
                }
                function s(e) {
                    return t.r.ix === e || "Round Corners 1" === e ? s.radius : void 0;
                }
                var a = e;
                return s.propertyIndex = t.ix, a.rd.setGroupProperty(i), Object.defineProperty(s, "radius", {
                    get: function() {
                        return ExpressionValue(a.rd);
                    }
                }), Object.defineProperty(s, "_name", {
                    get: function() {
                        return t.nm;
                    }
                }), s.mn = t.mn, s;
            };
        }(), A = function() {
            return function(t, e, r) {
                function i(t) {
                    return 1 == t ? s : r(--t);
                }
                function s(e) {
                    return t.c.ix === e || "Copies" === e ? s.copies : t.o.ix === e || "Offset" === e ? s.offset : void 0;
                }
                var a = e;
                return s.propertyIndex = t.ix, a.c.setGroupProperty(i), a.o.setGroupProperty(i), 
                Object.defineProperty(s, "copies", {
                    get: function() {
                        return ExpressionValue(a.c);
                    }
                }), Object.defineProperty(s, "offset", {
                    get: function() {
                        return ExpressionValue(a.o);
                    }
                }), Object.defineProperty(s, "_name", {
                    get: function() {
                        return t.nm;
                    }
                }), s.mn = t.mn, s;
            };
        }(), C = function() {
            return function(t, e, r) {
                function i(t) {
                    return 1 == t ? s : r(--t);
                }
                function s(t) {
                    return "Shape" === t || "shape" === t || "Path" === t || "path" === t ? s.path : void 0;
                }
                var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                return a.setGroupProperty(i), Object.defineProperty(s, "path", {
                    get: function() {
                        return a.k && a.getValue(), a.v;
                    }
                }), Object.defineProperty(s, "shape", {
                    get: function() {
                        return a.k && a.getValue(), a.v;
                    }
                }), Object.defineProperty(s, "_name", {
                    value: t.nm
                }), Object.defineProperty(s, "ix", {
                    value: t.ix
                }), Object.defineProperty(s, "mn", {
                    value: t.mn
                }), s;
            };
        }();
        return c;
    }(), TextExpressionInterface = function() {
        return function(t) {
            function e() {}
            return Object.defineProperty(e, "sourceText", {
                get: function() {
                    return t.currentTextDocumentData.t ? t.currentTextDocumentData.t : "";
                }
            }), e;
        };
    }(), LayerExpressionInterface = function() {
        function t(t) {
            var e = new Matrix();
            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; i > r; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.applyToPointArray(t[0], t[1], t[2] || 0);
            }
            return e.applyToPointArray(t[0], t[1], t[2] || 0);
        }
        function e(t) {
            var e = new Matrix();
            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; i > r; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t);
            }
            return e.inversePoint(t);
        }
        return function(r) {
            function i(t) {
                a.mask = t.getMask.bind(t);
            }
            function s(t) {
                a.effect = t;
            }
            function a(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return a.shapeInterface;

                  case 1:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return n;

                  case 4:
                  case "ADBE Effect Parade":
                    return a.effect;
                }
            }
            var n = TransformExpressionInterface(r.transform);
            return a.toWorld = t, a.toComp = t, a.fromComp = e, a._elem = r, Object.defineProperty(a, "hasParent", {
                get: function() {
                    return !!r.hierarchy;
                }
            }), Object.defineProperty(a, "parent", {
                get: function() {
                    return r.hierarchy[0].layerInterface;
                }
            }), Object.defineProperty(a, "rotation", {
                get: function() {
                    return n.rotation;
                }
            }), Object.defineProperty(a, "scale", {
                get: function() {
                    return n.scale;
                }
            }), Object.defineProperty(a, "position", {
                get: function() {
                    return n.position;
                }
            }), Object.defineProperty(a, "anchorPoint", {
                get: function() {
                    return n.anchorPoint;
                }
            }), Object.defineProperty(a, "transform", {
                get: function() {
                    return n;
                }
            }), Object.defineProperty(a, "width", {
                get: function() {
                    return 0 === r.data.ty ? r.data.w : 100;
                }
            }), Object.defineProperty(a, "height", {
                get: function() {
                    return 0 === r.data.ty ? r.data.h : 100;
                }
            }), Object.defineProperty(a, "source", {
                get: function() {
                    return r.data.refId;
                }
            }), Object.defineProperty(a, "_name", {
                value: r.data.nm
            }), Object.defineProperty(a, "content", {
                get: function() {
                    return a.shapeInterface;
                }
            }), Object.defineProperty(a, "active", {
                get: function() {
                    return r.isVisible;
                }
            }), Object.defineProperty(a, "text", {
                get: function() {
                    return a.textInterface;
                }
            }), a.registerMaskInterface = i, a.registerEffectsInterface = s, a;
        };
    }(), CompExpressionInterface = function() {
        return function(t) {
            function e(e) {
                for (var r = 0, i = t.layers.length; i > r; ) {
                    if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                    r += 1;
                }
                return {
                    active: !1
                };
            }
            return Object.defineProperty(e, "_name", {
                value: t.data.nm
            }), e.layer = e, e.pixelAspect = 1, e.height = t.globalData.compSize.h, e.width = t.globalData.compSize.w, 
            e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e;
        };
    }(), TransformExpressionInterface = function() {
        return function(t) {
            function e(r) {
                switch (r) {
                  case "scale":
                  case "Scale":
                  case "ADBE Scale":
                    return e.scale;

                  case "rotation":
                  case "Rotation":
                  case "ADBE Rotation":
                  case "ADBE Rotate Z":
                    return e.rotation;

                  case "position":
                  case "Position":
                  case "ADBE Position":
                    return t.position;

                  case "anchorPoint":
                  case "AnchorPoint":
                  case "Anchor Point":
                  case "ADBE AnchorPoint":
                    return e.anchorPoint;

                  case "opacity":
                  case "Opacity":
                    return e.opacity;
                }
            }
            return Object.defineProperty(e, "rotation", {
                get: function() {
                    return t.rotation;
                }
            }), Object.defineProperty(e, "scale", {
                get: function() {
                    return t.scale;
                }
            }), Object.defineProperty(e, "position", {
                get: function() {
                    return t.position;
                }
            }), Object.defineProperty(e, "xPosition", {
                get: function() {
                    return t.xPosition;
                }
            }), Object.defineProperty(e, "yPosition", {
                get: function() {
                    return t.yPosition;
                }
            }), Object.defineProperty(e, "anchorPoint", {
                get: function() {
                    return t.anchorPoint;
                }
            }), Object.defineProperty(e, "opacity", {
                get: function() {
                    return t.opacity;
                }
            }), Object.defineProperty(e, "skew", {
                get: function() {
                    return t.skew;
                }
            }), Object.defineProperty(e, "skewAxis", {
                get: function() {
                    return t.skewAxis;
                }
            }), e;
        };
    }(), ProjectInterface = function() {
        function t(t) {
            this.compositions.push(t);
        }
        return function() {
            function e(t) {
                for (var e = 0, r = this.compositions.length; r > e; ) {
                    if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame(this.currentFrame), 
                    this.compositions[e].compInterface;
                    e += 1;
                }
            }
            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
        };
    }(), EffectsExpressionInterface = function() {
        function t(t, r) {
            if (t.effects) {
                var i, s = [], a = t.data.ef, n = t.effects.effectElements.length;
                for (i = 0; n > i; i += 1) s.push(e(a[i], t.effects.effectElements[i], r, t));
                return function(e) {
                    for (var r = t.data.ef, i = 0, a = r.length; a > i; ) {
                        if (e === r[i].nm || e === r[i].mn || e === r[i].ix) return s[i];
                        i += 1;
                    }
                };
            }
        }
        function e(t, i, s, a) {
            var n, o = [], h = t.ef.length;
            for (n = 0; h > n; n += 1) o.push(5 === t.ef[n].ty ? e(t.ef[n], i.effectElements[n], s, a) : r(i.effectElements[n], t.ef[n].ty, a));
            var l = function(e) {
                for (var r = t.ef, i = 0, s = r.length; s > i; ) {
                    if (e === r[i].nm || e === r[i].mn || e === r[i].ix) return 5 === r[i].ty ? o[i] : o[i]();
                    i += 1;
                }
                return o[0]();
            };
            return "ADBE Color Control" === t.mn && Object.defineProperty(l, "color", {
                get: function() {
                    return o[0]();
                }
            }), l.active = 0 !== t.en, l;
        }
        function r(t, e, r) {
            return function() {
                return 10 === e ? r.comp.compInterface(t.p.v) : ExpressionValue(t.p);
            };
        }
        return {
            createEffectsInterface: t
        };
    }(), ExpressionValue = function() {
        return function(t, e, r) {
            var i;
            t.k && t.getValue();
            var s, a, n;
            if (r) {
                if ("color" === r) {
                    for (a = 4, i = Array.apply(null, {
                        length: a
                    }), n = Array.apply(null, {
                        length: a
                    }), s = 0; a > s; s += 1) i[s] = n[s] = e && 3 > s ? t.v[s] * e : 1;
                    i.value = n;
                }
            } else if ("number" == typeof t.v || t.v instanceof Number) i = new Number(e ? t.v * e : t.v), 
            i.value = e ? t.v * e : t.v; else {
                for (a = t.v.length, i = Array.apply(null, {
                    length: a
                }), n = Array.apply(null, {
                    length: a
                }), s = 0; a > s; s += 1) i[s] = n[s] = e ? t.v[s] * e : t.v[s];
                i.value = n;
            }
            return i.numKeys = t.keyframes ? t.keyframes.length : 0, i.key = function(e) {
                return i.numKeys ? t.keyframes[e - 1].t : 0;
            }, i.valueAtTime = t.getValueAtTime, i.propertyGroup = t.propertyGroup, i;
        };
    }();
    GroupEffect.prototype.getValue = function() {
        this.mdf = !1;
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.mdf = !!this.dynamicProperties[t].mdf || this.mdf;
    }, GroupEffect.prototype.init = function(t, e, r) {
        this.data = t, this.mdf = !1, this.effectElements = [];
        var i, s, a = this.data.ef.length, n = this.data.ef;
        for (i = 0; a > i; i += 1) switch (n[i].ty) {
          case 0:
            s = new SliderEffect(n[i], e, r), this.effectElements.push(s);
            break;

          case 1:
            s = new AngleEffect(n[i], e, r), this.effectElements.push(s);
            break;

          case 2:
            s = new ColorEffect(n[i], e, r), this.effectElements.push(s);
            break;

          case 3:
            s = new PointEffect(n[i], e, r), this.effectElements.push(s);
            break;

          case 4:
          case 7:
            s = new CheckboxEffect(n[i], e, r), this.effectElements.push(s);
            break;

          case 10:
            s = new LayerIndexEffect(n[i], e, r), this.effectElements.push(s);
            break;

          case 11:
            s = new MaskIndexEffect(n[i], e, r), this.effectElements.push(s);
            break;

          case 5:
            s = new EffectsManager(n[i], e, r), this.effectElements.push(s);
            break;

          case 6:
            s = new NoValueEffect(n[i], e, r), this.effectElements.push(s);
        }
    };
    var bodymovinjs = {};
    bodymovinjs.play = play, bodymovinjs.pause = pause, bodymovinjs.togglePause = togglePause, 
    bodymovinjs.setSpeed = setSpeed, bodymovinjs.setDirection = setDirection, bodymovinjs.stop = stop, 
    bodymovinjs.moveFrame = moveFrame, bodymovinjs.searchAnimations = searchAnimations, 
    bodymovinjs.registerAnimation = registerAnimation, bodymovinjs.loadAnimation = loadAnimation, 
    bodymovinjs.setSubframeRendering = setSubframeRendering, bodymovinjs.resize = resize, 
    bodymovinjs.start = start, bodymovinjs.goToAndStop = goToAndStop, bodymovinjs.destroy = destroy, 
    bodymovinjs.setQuality = setQuality, bodymovinjs.installPlugin = installPlugin, 
    bodymovinjs.__getFactory = getFactory, bodymovinjs.version = "4.6.10";
    var standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "";
    if (standalone) {
        var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
            src: ""
        }, queryString = myScript.src.replace(/^[^\?]+\??/, "");
        renderer = getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return bodymovinjs;
});

var animationData = {
    v: "4.6.10",
    fr: 60,
    ip: 48,
    op: 467,
    w: 1920,
    h: 1080,
    nm: "Comp 12",
    ddd: 0,
    assets: [],
    layers: [ {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Shape Layer 50",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 1,
                k: [ {
                    i: {
                        x: .843,
                        y: .822
                    },
                    o: {
                        x: .659,
                        y: .276
                    },
                    n: "0p843_0p822_0p659_0p276",
                    t: 50,
                    s: [ 960, -264, 0 ],
                    e: [ 960, 444, 0 ],
                    to: [ 0, 118, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .397,
                        y: 1
                    },
                    o: {
                        x: .169,
                        y: .768
                    },
                    n: "0p397_1_0p169_0p768",
                    t: 70,
                    s: [ 960, 444, 0 ],
                    e: [ 960, 216, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, -19.0833339691162, 0 ]
                }, {
                    i: {
                        x: .843,
                        y: .587
                    },
                    o: {
                        x: .652,
                        y: 0
                    },
                    n: "0p843_0p587_0p652_0",
                    t: 96,
                    s: [ 960, 216, 0 ],
                    e: [ 960, 558.5, 0 ],
                    to: [ 0, 19.0833339691162, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .502,
                        y: 1
                    },
                    o: {
                        x: .169,
                        y: .607
                    },
                    n: "0p502_1_0p169_0p607",
                    t: 120,
                    s: [ 960, 558.5, 0 ],
                    e: [ 960, 336, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, -37.8333320617676, 0 ]
                }, {
                    i: {
                        x: .876,
                        y: .644
                    },
                    o: {
                        x: .704,
                        y: 0
                    },
                    n: "0p876_0p644_0p704_0",
                    t: 142,
                    s: [ 960, 336, 0 ],
                    e: [ 960, 785.5, 0 ],
                    to: [ 0, 37.8333320617676, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .307,
                        y: 1
                    },
                    o: {
                        x: .169,
                        y: .671
                    },
                    n: "0p307_1_0p169_0p671",
                    t: 165,
                    s: [ 960, 785.5, 0 ],
                    e: [ 960, 476, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .843,
                        y: .513
                    },
                    o: {
                        x: .699,
                        y: 0
                    },
                    n: "0p843_0p513_0p699_0",
                    t: 187,
                    s: [ 960, 476, 0 ],
                    e: [ 960, 785.5, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .459,
                        y: 1
                    },
                    o: {
                        x: .169,
                        y: .858
                    },
                    n: "0p459_1_0p169_0p858",
                    t: 206,
                    s: [ 960, 785.5, 0 ],
                    e: [ 960, 616, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .674,
                        y: 0
                    },
                    o: {
                        x: .351,
                        y: 0
                    },
                    n: "0p674_0_0p351_0",
                    t: 223,
                    s: [ 960, 616, 0 ],
                    e: [ 960, 785.5, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .569,
                        y: 1
                    },
                    o: {
                        x: .295,
                        y: 1
                    },
                    n: "0p569_1_0p295_1",
                    t: 240,
                    s: [ 960, 785.5, 0 ],
                    e: [ 960, 686, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .843,
                        y: .569
                    },
                    o: {
                        x: .677,
                        y: 0
                    },
                    n: "0p843_0p569_0p677_0",
                    t: 251,
                    s: [ 960, 686, 0 ],
                    e: [ 960, 785.5, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .436,
                        y: 1
                    },
                    o: {
                        x: .285,
                        y: 1
                    },
                    n: "0p436_1_0p285_1",
                    t: 262,
                    s: [ 960, 785.5, 0 ],
                    e: [ 962, 743, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .643,
                        y: 0
                    },
                    o: {
                        x: .334,
                        y: 0
                    },
                    n: "0p643_0_0p334_0",
                    t: 268,
                    s: [ 962, 743, 0 ],
                    e: [ 960, 785.75, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .885,
                        y: 1
                    },
                    o: {
                        x: .25,
                        y: 1
                    },
                    n: "0p885_1_0p25_1",
                    t: 275,
                    s: [ 960, 785.75, 0 ],
                    e: [ 960, 760, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .75,
                        y: 0
                    },
                    o: {
                        x: .14,
                        y: 0
                    },
                    n: "0p75_0_0p14_0",
                    t: 281,
                    s: [ 960, 760, 0 ],
                    e: [ 960, 785.75, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .252,
                        y: 1
                    },
                    o: {
                        x: .07,
                        y: 1
                    },
                    n: "0p252_1_0p07_1",
                    t: 287,
                    s: [ 960, 785.75, 0 ],
                    e: [ 960, 779.747, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .012,
                        y: 1
                    },
                    o: {
                        x: 1,
                        y: 0
                    },
                    n: "0p012_1_1_0",
                    t: 292,
                    s: [ 960, 779.747, 0 ],
                    e: [ 960, 785.886, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: 1,
                        y: 1
                    },
                    o: {
                        x: .636,
                        y: 0
                    },
                    n: "1_1_0p636_0",
                    t: 296,
                    s: [ 960, 785.886, 0 ],
                    e: [ 960, 785.5, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .359,
                        y: 1
                    },
                    o: {
                        x: 0,
                        y: 0
                    },
                    n: "0p359_1_0_0",
                    t: 318,
                    s: [ 960, 785.5, 0 ],
                    e: [ 960, 892.499, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .336,
                        y: 1
                    },
                    o: {
                        x: 0,
                        y: 0
                    },
                    n: "0p336_1_0_0",
                    t: 322,
                    s: [ 960, 892.499, 0 ],
                    e: [ 960, 316, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .843,
                        y: .621
                    },
                    o: {
                        x: .693,
                        y: 0
                    },
                    n: "0p843_0p621_0p693_0",
                    t: 341,
                    s: [ 960, 316, 0 ],
                    e: [ 960, 784, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .342,
                        y: 1
                    },
                    o: {
                        x: .169,
                        y: .625
                    },
                    n: "0p342_1_0p169_0p625",
                    t: 363,
                    s: [ 960, 784, 0 ],
                    e: [ 960, 480, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, -18.8333339691162, 0 ]
                }, {
                    i: {
                        x: .843,
                        y: .538
                    },
                    o: {
                        x: .691,
                        y: 0
                    },
                    n: "0p843_0p538_0p691_0",
                    t: 385,
                    s: [ 960, 480, 0 ],
                    e: [ 960, 897, 0 ],
                    to: [ 0, 18.8333339691162, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    i: {
                        x: .301,
                        y: 1
                    },
                    o: {
                        x: .169,
                        y: .548
                    },
                    n: "0p301_1_0p169_0p548",
                    t: 410,
                    s: [ 960, 897, 0 ],
                    e: [ 960, 540, 0 ],
                    to: [ 0, 0, 0 ],
                    ti: [ 0, -43.3333320617676, 0 ]
                }, {
                    i: {
                        x: .843,
                        y: .516
                    },
                    o: {
                        x: .697,
                        y: 0
                    },
                    n: "0p843_0p516_0p697_0",
                    t: 434,
                    s: [ 960, 540, 0 ],
                    e: [ 960, 1157, 0 ],
                    to: [ 0, 43.3333320617676, 0 ],
                    ti: [ 0, 0, 0 ]
                }, {
                    t: 462
                } ]
            },
            a: {
                a: 0,
                k: [ 0, 0, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 100, 100 ]
            }
        },
        ao: 0,
        shapes: [ {
            ty: "gr",
            it: [ {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [ [ 37.743, 0 ], [ 0, -37.743 ], [ -37.743, 0 ], [ 0, 37.743 ] ],
                        o: [ [ -37.743, 0 ], [ 0, 37.743 ], [ 37.743, 0 ], [ 0, -37.743 ] ],
                        v: [ [ 0, -68.34 ], [ -68.34, 0 ], [ 0, 68.34 ], [ 68.34, 0 ] ],
                        c: !0
                    }
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group"
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [ .1137255, 0, .7137255, 1 ]
                },
                o: {
                    a: 0,
                    k: 100
                },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill"
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [ 100, 100 ],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            } ],
            nm: "Ellipse 1",
            np: 2,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group"
        } ],
        ip: 0,
        op: 3600,
        st: 0,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Shape Layer 51",
        parent: 1,
        ks: {
            o: {
                a: 1,
                k: [ {
                    i: {
                        x: [ .491 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .351 ],
                        y: [ 0 ]
                    },
                    n: [ "0p491_1_0p351_0" ],
                    t: 69,
                    s: [ 0 ],
                    e: [ 15 ]
                }, {
                    i: {
                        x: [ 0 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .333 ],
                        y: [ 0 ]
                    },
                    n: [ "0_1_0p333_0" ],
                    t: 73,
                    s: [ 15 ],
                    e: [ 0 ]
                }, {
                    i: {
                        x: [ .833 ],
                        y: [ .833 ]
                    },
                    o: {
                        x: [ .167 ],
                        y: [ .167 ]
                    },
                    n: [ "0p833_0p833_0p167_0p167" ],
                    t: 106,
                    s: [ 0 ],
                    e: [ 0 ]
                }, {
                    i: {
                        x: [ .491 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .351 ],
                        y: [ 0 ]
                    },
                    n: [ "0p491_1_0p351_0" ],
                    t: 119,
                    s: [ 0 ],
                    e: [ 15 ]
                }, {
                    i: {
                        x: [ 0 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .333 ],
                        y: [ 0 ]
                    },
                    n: [ "0_1_0p333_0" ],
                    t: 123,
                    s: [ 15 ],
                    e: [ 0 ]
                }, {
                    i: {
                        x: [ .833 ],
                        y: [ .833 ]
                    },
                    o: {
                        x: [ .167 ],
                        y: [ .167 ]
                    },
                    n: [ "0p833_0p833_0p167_0p167" ],
                    t: 156,
                    s: [ 0 ],
                    e: [ 0 ]
                }, {
                    i: {
                        x: [ .491 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .351 ],
                        y: [ 0 ]
                    },
                    n: [ "0p491_1_0p351_0" ],
                    t: 164,
                    s: [ 0 ],
                    e: [ 20 ]
                }, {
                    i: {
                        x: [ 0 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .333 ],
                        y: [ 0 ]
                    },
                    n: [ "0_1_0p333_0" ],
                    t: 168,
                    s: [ 20 ],
                    e: [ 0 ]
                }, {
                    i: {
                        x: [ .833 ],
                        y: [ .833 ]
                    },
                    o: {
                        x: [ .167 ],
                        y: [ .167 ]
                    },
                    n: [ "0p833_0p833_0p167_0p167" ],
                    t: 201,
                    s: [ 0 ],
                    e: [ 0 ]
                }, {
                    i: {
                        x: [ .491 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .351 ],
                        y: [ 0 ]
                    },
                    n: [ "0p491_1_0p351_0" ],
                    t: 362,
                    s: [ 0 ],
                    e: [ 15 ]
                }, {
                    i: {
                        x: [ 0 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .333 ],
                        y: [ 0 ]
                    },
                    n: [ "0_1_0p333_0" ],
                    t: 366,
                    s: [ 15 ],
                    e: [ 0 ]
                }, {
                    i: {
                        x: [ .833 ],
                        y: [ .833 ]
                    },
                    o: {
                        x: [ .167 ],
                        y: [ .167 ]
                    },
                    n: [ "0p833_0p833_0p167_0p167" ],
                    t: 399,
                    s: [ 0 ],
                    e: [ 0 ]
                }, {
                    i: {
                        x: [ .491 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .351 ],
                        y: [ 0 ]
                    },
                    n: [ "0p491_1_0p351_0" ],
                    t: 409,
                    s: [ 0 ],
                    e: [ 15 ]
                }, {
                    i: {
                        x: [ 0 ],
                        y: [ 1 ]
                    },
                    o: {
                        x: [ .333 ],
                        y: [ 0 ]
                    },
                    n: [ "0_1_0p333_0" ],
                    t: 413,
                    s: [ 15 ],
                    e: [ 0 ]
                }, {
                    t: 446
                } ]
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 0, -.075, 0 ]
            },
            a: {
                a: 0,
                k: [ 0, 0, 0 ]
            },
            s: {
                a: 1,
                k: [ {
                    i: {
                        x: [ .601, .601, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .333, .333, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p601_1_0p333_0", "0p601_1_0p333_0", "0p667_0p667_0p333_0p333" ],
                    t: 69,
                    s: [ 80, 80, 100 ],
                    e: [ 250, 250, 100 ]
                }, {
                    i: {
                        x: [ .201, .201, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .07, .07, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p201_1_0p07_0", "0p201_1_0p07_0", "0p667_0p667_0p333_0p333" ],
                    t: 73,
                    s: [ 250, 250, 100 ],
                    e: [ 100, 100, 100 ]
                }, {
                    i: {
                        x: [ .833, .833, .833 ],
                        y: [ 1, 1, .833 ]
                    },
                    o: {
                        x: [ .179, .179, .167 ],
                        y: [ 0, 0, .167 ]
                    },
                    n: [ "0p833_1_0p179_0", "0p833_1_0p179_0", "0p833_0p833_0p167_0p167" ],
                    t: 106,
                    s: [ 100, 100, 100 ],
                    e: [ 80, 80, 100 ]
                }, {
                    i: {
                        x: [ .601, .601, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .333, .333, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p601_1_0p333_0", "0p601_1_0p333_0", "0p667_0p667_0p333_0p333" ],
                    t: 119,
                    s: [ 80, 80, 100 ],
                    e: [ 250, 250, 100 ]
                }, {
                    i: {
                        x: [ .201, .201, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .07, .07, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p201_1_0p07_0", "0p201_1_0p07_0", "0p667_0p667_0p333_0p333" ],
                    t: 123,
                    s: [ 250, 250, 100 ],
                    e: [ 100, 100, 100 ]
                }, {
                    i: {
                        x: [ .833, .833, .833 ],
                        y: [ 1, 1, .833 ]
                    },
                    o: {
                        x: [ .179, .179, .167 ],
                        y: [ 0, 0, .167 ]
                    },
                    n: [ "0p833_1_0p179_0", "0p833_1_0p179_0", "0p833_0p833_0p167_0p167" ],
                    t: 156,
                    s: [ 100, 100, 100 ],
                    e: [ 80, 80, 100 ]
                }, {
                    i: {
                        x: [ .601, .601, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .333, .333, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p601_1_0p333_0", "0p601_1_0p333_0", "0p667_0p667_0p333_0p333" ],
                    t: 164,
                    s: [ 80, 80, 100 ],
                    e: [ 250, 250, 100 ]
                }, {
                    i: {
                        x: [ .201, .201, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .07, .07, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p201_1_0p07_0", "0p201_1_0p07_0", "0p667_0p667_0p333_0p333" ],
                    t: 168,
                    s: [ 250, 250, 100 ],
                    e: [ 100, 100, 100 ]
                }, {
                    i: {
                        x: [ .833, .833, .833 ],
                        y: [ 1, 1, .833 ]
                    },
                    o: {
                        x: [ .179, .179, .167 ],
                        y: [ 0, 0, .167 ]
                    },
                    n: [ "0p833_1_0p179_0", "0p833_1_0p179_0", "0p833_0p833_0p167_0p167" ],
                    t: 201,
                    s: [ 100, 100, 100 ],
                    e: [ 80, 80, 100 ]
                }, {
                    i: {
                        x: [ .601, .601, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .333, .333, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p601_1_0p333_0", "0p601_1_0p333_0", "0p667_0p667_0p333_0p333" ],
                    t: 362,
                    s: [ 80, 80, 100 ],
                    e: [ 250, 250, 100 ]
                }, {
                    i: {
                        x: [ .201, .201, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .07, .07, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p201_1_0p07_0", "0p201_1_0p07_0", "0p667_0p667_0p333_0p333" ],
                    t: 366,
                    s: [ 250, 250, 100 ],
                    e: [ 100, 100, 100 ]
                }, {
                    i: {
                        x: [ .833, .833, .833 ],
                        y: [ 1, 1, .833 ]
                    },
                    o: {
                        x: [ .179, .179, .167 ],
                        y: [ 0, 0, .167 ]
                    },
                    n: [ "0p833_1_0p179_0", "0p833_1_0p179_0", "0p833_0p833_0p167_0p167" ],
                    t: 399,
                    s: [ 100, 100, 100 ],
                    e: [ 80, 80, 100 ]
                }, {
                    i: {
                        x: [ .601, .601, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .333, .333, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p601_1_0p333_0", "0p601_1_0p333_0", "0p667_0p667_0p333_0p333" ],
                    t: 409,
                    s: [ 80, 80, 100 ],
                    e: [ 250, 250, 100 ]
                }, {
                    i: {
                        x: [ .201, .201, .667 ],
                        y: [ 1, 1, .667 ]
                    },
                    o: {
                        x: [ .07, .07, .333 ],
                        y: [ 0, 0, .333 ]
                    },
                    n: [ "0p201_1_0p07_0", "0p201_1_0p07_0", "0p667_0p667_0p333_0p333" ],
                    t: 413,
                    s: [ 250, 250, 100 ],
                    e: [ 100, 100, 100 ]
                }, {
                    t: 446
                } ]
            }
        },
        ao: 0,
        shapes: [ {
            ty: "gr",
            it: [ {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 0,
                    k: {
                        i: [ [ 37.743, 0 ], [ 0, -37.743 ], [ -37.743, 0 ], [ 0, 37.743 ] ],
                        o: [ [ -37.743, 0 ], [ 0, 37.743 ], [ 37.743, 0 ], [ 0, -37.743 ] ],
                        v: [ [ 0, -68.34 ], [ -68.34, 0 ], [ 0, 68.34 ], [ 68.34, 0 ] ],
                        c: !0
                    }
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group"
            }, {
                ty: "fl",
                c: {
                    a: 1,
                    k: [ {
                        i: {
                            x: [ .833 ],
                            y: [ .833 ]
                        },
                        o: {
                            x: [ .167 ],
                            y: [ .167 ]
                        },
                        n: [ "0p833_0p833_0p167_0p167" ],
                        t: 157,
                        s: [ .1137255, 0, .7137255, 1 ],
                        e: [ 1, 0, .4313726, 1 ]
                    }, {
                        i: {
                            x: [ .833 ],
                            y: [ .833 ]
                        },
                        o: {
                            x: [ .167 ],
                            y: [ .167 ]
                        },
                        n: [ "0p833_0p833_0p167_0p167" ],
                        t: 158,
                        s: [ 1, 0, .4313726, 1 ],
                        e: [ 1, 0, .4313726, 1 ]
                    }, {
                        i: {
                            x: [ .833 ],
                            y: [ .833 ]
                        },
                        o: {
                            x: [ .167 ],
                            y: [ .167 ]
                        },
                        n: [ "0p833_0p833_0p167_0p167" ],
                        t: 319,
                        s: [ 1, 0, .4313726, 1 ],
                        e: [ .1137255, 0, .7137255, 1 ]
                    }, {
                        t: 325
                    } ]
                },
                o: {
                    a: 0,
                    k: 100
                },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill"
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [ 100, 100 ],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            } ],
            nm: "Ellipse 1",
            np: 2,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group"
        } ],
        ip: 0,
        op: 3600,
        st: 0,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 3,
        ty: 3,
        nm: "Null 1",
        ks: {
            o: {
                a: 0,
                k: 0
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 1,
                k: [ {
                    i: {
                        x: .413,
                        y: 1
                    },
                    o: {
                        x: .585,
                        y: 0
                    },
                    n: "0p413_1_0p585_0",
                    t: 326,
                    s: [ 1010, 134, 0 ],
                    e: [ 1010, 20, 0 ],
                    to: [ 0, -19, 0 ],
                    ti: [ 0, 19, 0 ]
                }, {
                    t: 338
                } ]
            },
            a: {
                a: 0,
                k: [ 50, 50, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 100, 100 ]
            }
        },
        ao: 0,
        ip: 0,
        op: 3600,
        st: 0,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "Shape Layer 25",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960.024, 599.938, 0 ]
            },
            a: {
                a: 0,
                k: [ 0, 0, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 50, 100 ]
            }
        },
        ao: 0,
        ef: [ {
            ty: 21,
            nm: "Fill",
            mn: "ADBE Fill",
            ix: 1,
            en: 1,
            ef: [ {
                ty: 10,
                nm: "Fill Mask",
                mn: "ADBE Fill-0001",
                ix: 1,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 7,
                nm: "All Masks",
                mn: "ADBE Fill-0007",
                ix: 2,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 2,
                nm: "Color",
                mn: "ADBE Fill-0002",
                ix: 3,
                v: {
                    a: 0,
                    k: [ .1960784, .1960784, .5176471, 1 ]
                }
            }, {
                ty: 7,
                nm: "Invert",
                mn: "ADBE Fill-0006",
                ix: 4,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Horizontal Feather",
                mn: "ADBE Fill-0003",
                ix: 5,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Vertical Feather",
                mn: "ADBE Fill-0004",
                ix: 6,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Opacity",
                mn: "ADBE Fill-0005",
                ix: 7,
                v: {
                    a: 0,
                    k: 1
                }
            } ]
        }, {
            ty: 21,
            nm: "Fill 2",
            mn: "ADBE Fill",
            ix: 2,
            en: 1,
            ef: [ {
                ty: 10,
                nm: "Fill Mask",
                mn: "ADBE Fill-0001",
                ix: 1,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 7,
                nm: "All Masks",
                mn: "ADBE Fill-0007",
                ix: 2,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 2,
                nm: "Color",
                mn: "ADBE Fill-0002",
                ix: 3,
                v: {
                    a: 1,
                    k: [ {
                        i: {
                            x: [ .833 ],
                            y: [ .833 ]
                        },
                        o: {
                            x: [ .167 ],
                            y: [ .167 ]
                        },
                        n: [ "0p833_0p833_0p167_0p167" ],
                        t: 69,
                        s: [ .9137255, .9215686, .9333333, 1 ],
                        e: [ 0, .9019608, .5607843, 1 ]
                    }, {
                        t: 70
                    } ]
                }
            }, {
                ty: 7,
                nm: "Invert",
                mn: "ADBE Fill-0006",
                ix: 4,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Horizontal Feather",
                mn: "ADBE Fill-0003",
                ix: 5,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Vertical Feather",
                mn: "ADBE Fill-0004",
                ix: 6,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Opacity",
                mn: "ADBE Fill-0005",
                ix: 7,
                v: {
                    a: 0,
                    k: 1
                }
            } ]
        } ],
        shapes: [ {
            ty: "gr",
            it: [ {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 1,
                    k: [ {
                        i: {
                            x: .263,
                            y: 1
                        },
                        o: {
                            x: .728,
                            y: 0
                        },
                        n: "0p263_1_0p728_0",
                        t: 70,
                        s: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 959.875, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ 960.031, 54.531 ] ],
                            c: !0
                        } ],
                        e: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ -968.112, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ -967.956, 54.531 ] ],
                            c: !0
                        } ]
                    }, {
                        t: 100
                    } ]
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group"
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [ 1, 0, 0, 1 ]
                },
                o: {
                    a: 0,
                    k: 100
                },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill"
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [ .039, 0 ],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [ 100.001, 100.045 ],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            } ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group"
        } ],
        ip: 0,
        op: 100,
        st: 0,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "Shape Layer 27",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 713.562, 0 ]
            },
            a: {
                a: 0,
                k: [ 0, 0, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 50, 100 ]
            }
        },
        ao: 0,
        ef: [ {
            ty: 21,
            nm: "Fill",
            mn: "ADBE Fill",
            ix: 1,
            en: 1,
            ef: [ {
                ty: 10,
                nm: "Fill Mask",
                mn: "ADBE Fill-0001",
                ix: 1,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 7,
                nm: "All Masks",
                mn: "ADBE Fill-0007",
                ix: 2,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 2,
                nm: "Color",
                mn: "ADBE Fill-0002",
                ix: 3,
                v: {
                    a: 1,
                    k: [ {
                        i: {
                            x: [ .833 ],
                            y: [ .833 ]
                        },
                        o: {
                            x: [ .167 ],
                            y: [ .167 ]
                        },
                        n: [ "0p833_0p833_0p167_0p167" ],
                        t: 119,
                        s: [ .9294118, .9372549, .9490196, 1 ],
                        e: [ .4784314, .9882353, .7686275, 1 ]
                    }, {
                        t: 120
                    } ]
                }
            }, {
                ty: 7,
                nm: "Invert",
                mn: "ADBE Fill-0006",
                ix: 4,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Horizontal Feather",
                mn: "ADBE Fill-0003",
                ix: 5,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Vertical Feather",
                mn: "ADBE Fill-0004",
                ix: 6,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Opacity",
                mn: "ADBE Fill-0005",
                ix: 7,
                v: {
                    a: 0,
                    k: 1
                }
            } ]
        } ],
        shapes: [ {
            ty: "gr",
            it: [ {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 1,
                    k: [ {
                        i: {
                            x: .263,
                            y: 1
                        },
                        o: {
                            x: .728,
                            y: 0
                        },
                        n: "0p263_1_0p728_0",
                        t: 120,
                        s: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 959.875, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ 960.031, 54.531 ] ],
                            c: !0
                        } ],
                        e: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ -968.112, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ -967.956, 54.531 ] ],
                            c: !0
                        } ]
                    }, {
                        t: 150
                    } ]
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group"
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [ 1, 0, 0, 1 ]
                },
                o: {
                    a: 0,
                    k: 100
                },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill"
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [ .039, 0 ],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [ 100.001, 100.045 ],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            } ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group"
        } ],
        ip: 0,
        op: 150,
        st: 0,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "Shape Layer 28",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 827.062, 0 ]
            },
            a: {
                a: 0,
                k: [ 0, 0, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 50, 100 ]
            }
        },
        ao: 0,
        shapes: [ {
            ty: "gr",
            it: [ {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 1,
                    k: [ {
                        i: {
                            x: .263,
                            y: 1
                        },
                        o: {
                            x: .728,
                            y: 0
                        },
                        n: "0p263_1_0p728_0",
                        t: 120,
                        s: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 959.875, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ 960.031, 54.531 ] ],
                            c: !0
                        } ],
                        e: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 960.367, -172.899 ], [ 965.83, -173.008 ], [ 965.987, 54.422 ], [ 960.523, 54.531 ] ],
                            c: !0
                        } ]
                    }, {
                        t: 150
                    } ]
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group"
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [ .9490196, .9568627, .9686275, 1 ]
                },
                o: {
                    a: 0,
                    k: 100
                },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill"
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [ .039, 0 ],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [ 100.001, 100.045 ],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            } ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group"
        } ],
        ip: 0,
        op: 150,
        st: 0,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 7,
        ty: 4,
        nm: "Shape Layer 29",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 940.438, 0 ]
            },
            a: {
                a: 0,
                k: [ 0, 0, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 50, 100 ]
            }
        },
        ao: 0,
        ef: [ {
            ty: 21,
            nm: "Fill",
            mn: "ADBE Fill",
            ix: 1,
            en: 1,
            ef: [ {
                ty: 10,
                nm: "Fill Mask",
                mn: "ADBE Fill-0001",
                ix: 1,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 7,
                nm: "All Masks",
                mn: "ADBE Fill-0007",
                ix: 2,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 2,
                nm: "Color",
                mn: "ADBE Fill-0002",
                ix: 3,
                v: {
                    a: 0,
                    k: [ .3882353, .3921569, .6313726, 1 ]
                }
            }, {
                ty: 7,
                nm: "Invert",
                mn: "ADBE Fill-0006",
                ix: 4,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Horizontal Feather",
                mn: "ADBE Fill-0003",
                ix: 5,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Vertical Feather",
                mn: "ADBE Fill-0004",
                ix: 6,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Opacity",
                mn: "ADBE Fill-0005",
                ix: 7,
                v: {
                    a: 0,
                    k: 1
                }
            } ]
        }, {
            ty: 21,
            nm: "Fill 2",
            mn: "ADBE Fill",
            ix: 2,
            en: 1,
            ef: [ {
                ty: 10,
                nm: "Fill Mask",
                mn: "ADBE Fill-0001",
                ix: 1,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 7,
                nm: "All Masks",
                mn: "ADBE Fill-0007",
                ix: 2,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 2,
                nm: "Color",
                mn: "ADBE Fill-0002",
                ix: 3,
                v: {
                    a: 1,
                    k: [ {
                        i: {
                            x: [ .833 ],
                            y: [ .833 ]
                        },
                        o: {
                            x: [ .167 ],
                            y: [ .167 ]
                        },
                        n: [ "0p833_0p833_0p167_0p167" ],
                        t: 164,
                        s: [ .9647059, .972549, .9803922, 1 ],
                        e: [ 1, 0, .4313726, 1 ]
                    }, {
                        t: 165
                    } ]
                }
            }, {
                ty: 7,
                nm: "Invert",
                mn: "ADBE Fill-0006",
                ix: 4,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Horizontal Feather",
                mn: "ADBE Fill-0003",
                ix: 5,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Vertical Feather",
                mn: "ADBE Fill-0004",
                ix: 6,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Opacity",
                mn: "ADBE Fill-0005",
                ix: 7,
                v: {
                    a: 0,
                    k: 1
                }
            } ]
        } ],
        shapes: [ {
            ty: "gr",
            it: [ {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 1,
                    k: [ {
                        i: {
                            x: .263,
                            y: 1
                        },
                        o: {
                            x: .728,
                            y: 0
                        },
                        n: "0p263_1_0p728_0",
                        t: 299,
                        s: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 959.875, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ 960.031, 54.531 ] ],
                            c: !0
                        } ],
                        e: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ -968.112, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ -967.956, 54.531 ] ],
                            c: !0
                        } ]
                    }, {
                        t: 330
                    } ]
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group"
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [ 1, 0, 0, 1 ]
                },
                o: {
                    a: 0,
                    k: 100
                },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill"
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [ .039, 0 ],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [ 100.001, 100.045 ],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            } ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group"
        } ],
        ip: 0,
        op: 330,
        st: 0,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 8,
        ty: 4,
        nm: "Shape Layer 30",
        parent: 3,
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 0, 969.562, 0 ]
            },
            a: {
                a: 0,
                k: [ 0, 0, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 50, 100 ]
            }
        },
        ao: 0,
        ef: [ {
            ty: 21,
            nm: "Fill",
            mn: "ADBE Fill",
            ix: 1,
            en: 1,
            ef: [ {
                ty: 10,
                nm: "Fill Mask",
                mn: "ADBE Fill-0001",
                ix: 1,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 7,
                nm: "All Masks",
                mn: "ADBE Fill-0007",
                ix: 2,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 2,
                nm: "Color",
                mn: "ADBE Fill-0002",
                ix: 3,
                v: {
                    a: 1,
                    k: [ {
                        i: {
                            x: [ .833 ],
                            y: [ .833 ]
                        },
                        o: {
                            x: [ .167 ],
                            y: [ .167 ]
                        },
                        n: [ "0p833_0p833_0p167_0p167" ],
                        t: 362,
                        s: [ .9843137, .9882353, .9921569, 1 ],
                        e: [ 0, .9019608, .5607843, 1 ]
                    }, {
                        t: 363
                    } ]
                }
            }, {
                ty: 7,
                nm: "Invert",
                mn: "ADBE Fill-0006",
                ix: 4,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Horizontal Feather",
                mn: "ADBE Fill-0003",
                ix: 5,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Vertical Feather",
                mn: "ADBE Fill-0004",
                ix: 6,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Opacity",
                mn: "ADBE Fill-0005",
                ix: 7,
                v: {
                    a: 0,
                    k: 1
                }
            } ]
        } ],
        shapes: [ {
            ty: "gr",
            it: [ {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 1,
                    k: [ {
                        i: {
                            x: .263,
                            y: 1
                        },
                        o: {
                            x: .728,
                            y: 0
                        },
                        n: "0p263_1_0p728_0",
                        t: 364,
                        s: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 959.875, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ 960.031, 54.531 ] ],
                            c: !0
                        } ],
                        e: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ -968.112, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ -967.956, 54.531 ] ],
                            c: !0
                        } ]
                    }, {
                        t: 394
                    } ]
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group"
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [ 1, 0, 0, 1 ]
                },
                o: {
                    a: 0,
                    k: 100
                },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill"
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [ .039, 0 ],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [ 100.001, 100.045 ],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            } ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group"
        } ],
        ip: 0,
        op: 395,
        st: 0,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 9,
        ty: 4,
        nm: "Shape Layer 5",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 1052.938, 0 ]
            },
            a: {
                a: 0,
                k: [ 0, 0, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 50, 100 ]
            }
        },
        ao: 0,
        ef: [ {
            ty: 21,
            nm: "Fill",
            mn: "ADBE Fill",
            ix: 1,
            en: 1,
            ef: [ {
                ty: 10,
                nm: "Fill Mask",
                mn: "ADBE Fill-0001",
                ix: 1,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 7,
                nm: "All Masks",
                mn: "ADBE Fill-0007",
                ix: 2,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 2,
                nm: "Color",
                mn: "ADBE Fill-0002",
                ix: 3,
                v: {
                    a: 1,
                    k: [ {
                        i: {
                            x: [ .833 ],
                            y: [ .833 ]
                        },
                        o: {
                            x: [ .167 ],
                            y: [ .167 ]
                        },
                        n: [ "0p833_0p833_0p167_0p167" ],
                        t: 409,
                        s: [ 1, 0, .4313726, 1 ],
                        e: [ .4784314, .9882353, .7686275, 1 ]
                    }, {
                        t: 410
                    } ]
                }
            }, {
                ty: 7,
                nm: "Invert",
                mn: "ADBE Fill-0006",
                ix: 4,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Horizontal Feather",
                mn: "ADBE Fill-0003",
                ix: 5,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Vertical Feather",
                mn: "ADBE Fill-0004",
                ix: 6,
                v: {
                    a: 0,
                    k: 0
                }
            }, {
                ty: 0,
                nm: "Opacity",
                mn: "ADBE Fill-0005",
                ix: 7,
                v: {
                    a: 0,
                    k: 1
                }
            } ]
        } ],
        shapes: [ {
            ty: "gr",
            it: [ {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                    a: 1,
                    k: [ {
                        i: {
                            x: .833,
                            y: 1
                        },
                        o: {
                            x: .333,
                            y: 0
                        },
                        n: "0p833_1_0p333_0",
                        t: 329,
                        s: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ -968.112, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ -967.956, 54.531 ] ],
                            c: !0
                        } ],
                        e: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 959.875, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ 960.031, 54.531 ] ],
                            c: !0
                        } ]
                    }, {
                        i: {
                            x: .667,
                            y: 1
                        },
                        o: {
                            x: .167,
                            y: 0
                        },
                        n: "0p667_1_0p167_0",
                        t: 359,
                        s: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 959.875, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ 960.031, 54.531 ] ],
                            c: !0
                        } ],
                        e: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 959.875, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ 960.031, 54.531 ] ],
                            c: !0
                        } ]
                    }, {
                        i: {
                            x: .263,
                            y: 1
                        },
                        o: {
                            x: .728,
                            y: 0
                        },
                        n: "0p263_1_0p728_0",
                        t: 411,
                        s: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ 959.875, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ 960.031, 54.531 ] ],
                            c: !0
                        } ],
                        e: [ {
                            i: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            o: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
                            v: [ [ -968.112, -172.899 ], [ -962.156, -173.008 ], [ -962, 54.422 ], [ -967.956, 54.531 ] ],
                            c: !0
                        } ]
                    }, {
                        t: 441
                    } ]
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group"
            }, {
                ty: "fl",
                c: {
                    a: 0,
                    k: [ 1, .3215686, .3215686, 1 ]
                },
                o: {
                    a: 0,
                    k: 100
                },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill"
            }, {
                ty: "tr",
                p: {
                    a: 0,
                    k: [ .039, 0 ],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [ 0, 0 ],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [ 100.001, 100.045 ],
                    ix: 3
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 6
                },
                o: {
                    a: 0,
                    k: 100,
                    ix: 7
                },
                sk: {
                    a: 0,
                    k: 0,
                    ix: 4
                },
                sa: {
                    a: 0,
                    k: 0,
                    ix: 5
                },
                nm: "Transform"
            } ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group"
        } ],
        ip: 0,
        op: 442,
        st: 0,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 10,
        ty: 1,
        nm: "Pale Magenta-Red Solid 1",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            a: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 100, 100 ]
            }
        },
        ao: 0,
        sw: 1920,
        sh: 1080,
        sc: "#ffcce2",
        ip: 165,
        op: 363,
        st: 45,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 11,
        ty: 1,
        nm: "Pale Royal Blue Solid 3",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            a: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 100, 100 ]
            }
        },
        ao: 0,
        sw: 1920,
        sh: 1080,
        sc: "#fbfcfd",
        ip: 410,
        op: 570,
        st: 395,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 12,
        ty: 1,
        nm: "Medium Turquoise Solid 6",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            a: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 100, 100 ]
            }
        },
        ao: 0,
        sw: 1920,
        sh: 1080,
        sc: "#7afcc4",
        ip: 363,
        op: 410,
        st: 395,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 13,
        ty: 1,
        nm: "Turquoise Solid 1",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            a: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 100, 100 ]
            }
        },
        ao: 0,
        sw: 1920,
        sh: 1080,
        sc: "#00e68f",
        ip: 120,
        op: 165,
        st: 20,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 14,
        ty: 1,
        nm: "Cyan Solid 1",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            a: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 100, 100 ]
            }
        },
        ao: 0,
        sw: 1920,
        sh: 1080,
        sc: "#7afcc4",
        ip: 70,
        op: 120,
        st: 20,
        bm: 0,
        sr: 1
    }, {
        ddd: 0,
        ind: 15,
        ty: 1,
        nm: "Pale Royal Blue Solid 2",
        ks: {
            o: {
                a: 0,
                k: 100
            },
            r: {
                a: 0,
                k: 0
            },
            p: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            a: {
                a: 0,
                k: [ 960, 540, 0 ]
            },
            s: {
                a: 0,
                k: [ 100, 100, 100 ]
            }
        },
        ao: 0,
        sw: 1920,
        sh: 1080,
        sc: "#fbfcfd",
        ip: 48,
        op: 70,
        st: 20,
        bm: 0,
        sr: 1
    } ]
}, params = {
    container: document.getElementById("bodymovin"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    animationData: animationData
}, anim;

anim = bodymovin.loadAnimation(params);
//# sourceMappingURL=init-min.js.map
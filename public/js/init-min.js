function hasScrolled() {
    var n = $(this).scrollTop();
    Math.abs(lastScrollTop - n) <= delta || (n > lastScrollTop && n > navbarHeight ? $nav.removeClass("nav-down").addClass("nav-up") : n + $(window).height() < $(document).height() && $nav.removeClass("nav-up").addClass("nav-down"), 
    lastScrollTop = n);
}

$(document).ready(function() {
    var n = 0;
    $("#nav-mob").swipe({
        tap: function(t, e) {
            1 == ++n ? ($(this).addClass("close"), $(this).parents(".top-bar").addClass("open"), 
            $(this).parents("body").css("overflow", "hidden")) : (n = 0, $(this).removeClass("close"), 
            $(this).parents(".top-bar").removeClass("open"), $(this).parents("body").css("overflow", "visible"));
        },
        threshold: 50
    }), $("#collapList").find("li").click(function() {
        $(this).hasClass("expanded") ? $(this).removeClass("expanded") : $(this).addClass("expanded");
    });
}), function(n) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define([ "jquery" ], n) : n(jQuery);
}(function(n) {
    function t(t) {
        return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = s), 
        void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = n.extend({}, n.fn.swipe.defaults, t), 
        this.each(function() {
            var i = n(this), r = i.data(P);
            r || (r = new e(this, t), i.data(P, r));
        });
    }
    function e(t, e) {
        function $(t) {
            if (!(cn() || n(t.target).closest(e.excludedElements, qn).length > 0)) {
                var i, r = t.originalEvent ? t.originalEvent : t, o = r.touches, a = o ? o[0] : r;
                return Wn = b, o ? Fn = o.length : t.preventDefault(), Rn = 0, Hn = null, Xn = null, 
                Nn = 0, Un = 0, _n = 0, Bn = 1, Qn = 0, Vn = gn(), Yn = mn(), un(), !o || Fn === e.fingers || e.fingers === m || X() ? (pn(0, a), 
                zn = Pn(), 2 == Fn && (pn(1, o[1]), Un = _n = yn(Vn[0].start, Vn[1].start)), (e.swipeStatus || e.pinchStatus) && (i = k(r, Wn))) : i = !1, 
                !1 === i ? (Wn = E, k(r, Wn), i) : (e.hold && (tt = setTimeout(n.proxy(function() {
                    qn.trigger("hold", [ r.target ]), e.hold && (i = e.hold.call(qn, r, r.target));
                }, this), e.longTapThreshold)), dn(!0), null);
            }
        }
        function L(n) {
            var t = n.originalEvent ? n.originalEvent : n;
            if (Wn !== S && Wn !== E && !sn()) {
                var i, r = t.touches, o = hn(r ? r[0] : t);
                if (Gn = Pn(), r && (Fn = r.length), e.hold && clearTimeout(tt), Wn = y, 2 == Fn && (0 == Un ? (pn(1, r[1]), 
                Un = _n = yn(Vn[0].start, Vn[1].start)) : (hn(r[1]), _n = yn(Vn[0].end, Vn[1].end), 
                Xn = En(Vn[0].end, Vn[1].end)), Bn = Sn(Un, _n), Qn = Math.abs(Un - _n)), Fn === e.fingers || e.fingers === m || !r || X()) {
                    if (Hn = Mn(o.start, o.end), B(n, Hn), Rn = xn(o.start, o.end), Nn = bn(), vn(Hn, Rn), 
                    (e.swipeStatus || e.pinchStatus) && (i = k(t, Wn)), !e.triggerOnTouchEnd || e.triggerOnTouchLeave) {
                        var a = !0;
                        if (e.triggerOnTouchLeave) {
                            var l = $n(this);
                            a = Ln(o.end, l);
                        }
                        !e.triggerOnTouchEnd && a ? Wn = C(y) : e.triggerOnTouchLeave && !a && (Wn = C(S)), 
                        Wn != E && Wn != S || k(t, Wn);
                    }
                } else k(t, Wn = E);
                !1 === i && k(t, Wn = E);
            }
        }
        function D(n) {
            var t = n.originalEvent ? n.originalEvent : n, i = t.touches;
            return i && i.length ? (ln(), !0) : (sn() && (Fn = Jn), Gn = Pn(), Nn = bn(), N() || !H() ? k(t, Wn = E) : e.triggerOnTouchEnd || 0 == e.triggerOnTouchEnd && Wn === y ? (n.preventDefault(), 
            k(t, Wn = S)) : !e.triggerOnTouchEnd && G() ? R(t, Wn = S, h) : Wn === y && k(t, Wn = E), 
            dn(!1), null);
        }
        function j() {
            Fn = 0, Gn = 0, zn = 0, Un = 0, _n = 0, Bn = 1, un(), dn(!1);
        }
        function A(n) {
            var t = n.originalEvent ? n.originalEvent : n;
            e.triggerOnTouchLeave && k(t, Wn = C(S));
        }
        function I() {
            qn.unbind(jn, $), qn.unbind(kn, j), qn.unbind(An, L), qn.unbind(In, D), Cn && qn.unbind(Cn, A), 
            dn(!1);
        }
        function C(n) {
            var t = n, i = _(), r = H(), o = N();
            return !i || o ? t = E : !r || n != y || e.triggerOnTouchEnd && !e.triggerOnTouchLeave ? !r && n == S && e.triggerOnTouchLeave && (t = E) : t = S, 
            t;
        }
        function k(n, t) {
            var e, i = n.touches;
            return F() || W() || Y() || X() ? ((F() || W()) && (e = R(n, t, d)), (Y() || X()) && !1 !== e && (e = R(n, t, p))) : on() && !1 !== e ? e = R(n, t, f) : an() && !1 !== e ? e = R(n, t, g) : rn() && !1 !== e && (e = R(n, t, h)), 
            t === E && j(n), t === S && (i ? i.length || j(n) : j(n)), e;
        }
        function R(t, s, c) {
            var v;
            if (c == d) {
                if (qn.trigger("swipeStatus", [ s, Hn || null, Rn || 0, Nn || 0, Fn, Vn ]), e.swipeStatus && !1 === (v = e.swipeStatus.call(qn, t, s, Hn || null, Rn || 0, Nn || 0, Fn, Vn))) return !1;
                if (s == S && q()) {
                    if (qn.trigger("swipe", [ Hn, Rn, Nn, Fn, Vn ]), e.swipe && !1 === (v = e.swipe.call(qn, t, Hn, Rn, Nn, Fn, Vn))) return !1;
                    switch (Hn) {
                      case i:
                        qn.trigger("swipeLeft", [ Hn, Rn, Nn, Fn, Vn ]), e.swipeLeft && (v = e.swipeLeft.call(qn, t, Hn, Rn, Nn, Fn, Vn));
                        break;

                      case r:
                        qn.trigger("swipeRight", [ Hn, Rn, Nn, Fn, Vn ]), e.swipeRight && (v = e.swipeRight.call(qn, t, Hn, Rn, Nn, Fn, Vn));
                        break;

                      case o:
                        qn.trigger("swipeUp", [ Hn, Rn, Nn, Fn, Vn ]), e.swipeUp && (v = e.swipeUp.call(qn, t, Hn, Rn, Nn, Fn, Vn));
                        break;

                      case a:
                        qn.trigger("swipeDown", [ Hn, Rn, Nn, Fn, Vn ]), e.swipeDown && (v = e.swipeDown.call(qn, t, Hn, Rn, Nn, Fn, Vn));
                    }
                }
            }
            if (c == p) {
                if (qn.trigger("pinchStatus", [ s, Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn ]), 
                e.pinchStatus && !1 === (v = e.pinchStatus.call(qn, t, s, Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn))) return !1;
                if (s == S && Q()) switch (Xn) {
                  case l:
                    qn.trigger("pinchIn", [ Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn ]), e.pinchIn && (v = e.pinchIn.call(qn, t, Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn));
                    break;

                  case u:
                    qn.trigger("pinchOut", [ Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn ]), e.pinchOut && (v = e.pinchOut.call(qn, t, Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn));
                }
            }
            return c == h ? s !== E && s !== S || (clearTimeout(nt), clearTimeout(tt), Z() && !nn() ? (Kn = Pn(), 
            nt = setTimeout(n.proxy(function() {
                Kn = null, qn.trigger("tap", [ t.target ]), e.tap && (v = e.tap.call(qn, t, t.target));
            }, this), e.doubleTapThreshold)) : (Kn = null, qn.trigger("tap", [ t.target ]), 
            e.tap && (v = e.tap.call(qn, t, t.target)))) : c == f ? s !== E && s !== S || (clearTimeout(nt), 
            Kn = null, qn.trigger("doubletap", [ t.target ]), e.doubleTap && (v = e.doubleTap.call(qn, t, t.target))) : c == g && (s !== E && s !== S || (clearTimeout(nt), 
            Kn = null, qn.trigger("longtap", [ t.target ]), e.longTap && (v = e.longTap.call(qn, t, t.target)))), 
            v;
        }
        function H() {
            var n = !0;
            return null !== e.threshold && (n = Rn >= e.threshold), n;
        }
        function N() {
            var n = !1;
            return null !== e.cancelThreshold && null !== Hn && (n = wn(Hn) - Rn >= e.cancelThreshold), 
            n;
        }
        function U() {
            return null === e.pinchThreshold || Qn >= e.pinchThreshold;
        }
        function _() {
            return !e.maxTimeThreshold || !(Nn >= e.maxTimeThreshold);
        }
        function B(n, t) {
            if (!1 !== e.preventDefaultEvents) if (e.allowPageScroll === s) n.preventDefault(); else {
                var l = e.allowPageScroll === c;
                switch (t) {
                  case i:
                    (e.swipeLeft && l || !l && e.allowPageScroll != v) && n.preventDefault();
                    break;

                  case r:
                    (e.swipeRight && l || !l && e.allowPageScroll != v) && n.preventDefault();
                    break;

                  case o:
                    (e.swipeUp && l || !l && e.allowPageScroll != w) && n.preventDefault();
                    break;

                  case a:
                    (e.swipeDown && l || !l && e.allowPageScroll != w) && n.preventDefault();
                }
            }
        }
        function Q() {
            var n = V(), t = z(), e = U();
            return n && t && e;
        }
        function X() {
            return !!(e.pinchStatus || e.pinchIn || e.pinchOut);
        }
        function Y() {
            return !(!Q() || !X());
        }
        function q() {
            var n = _(), t = H(), e = V(), i = z();
            return !N() && i && e && t && n;
        }
        function W() {
            return !!(e.swipe || e.swipeStatus || e.swipeLeft || e.swipeRight || e.swipeUp || e.swipeDown);
        }
        function F() {
            return !(!q() || !W());
        }
        function V() {
            return Fn === e.fingers || e.fingers === m || !x;
        }
        function z() {
            return 0 !== Vn[0].end.x;
        }
        function G() {
            return !!e.tap;
        }
        function Z() {
            return !!e.doubleTap;
        }
        function J() {
            return !!e.longTap;
        }
        function K() {
            if (null == Kn) return !1;
            var n = Pn();
            return Z() && n - Kn <= e.doubleTapThreshold;
        }
        function nn() {
            return K();
        }
        function tn() {
            return (1 === Fn || !x) && (isNaN(Rn) || Rn < e.threshold);
        }
        function en() {
            return Nn > e.longTapThreshold && Rn < T;
        }
        function rn() {
            return !(!tn() || !G());
        }
        function on() {
            return !(!K() || !Z());
        }
        function an() {
            return !(!en() || !J());
        }
        function ln() {
            Zn = Pn(), Jn = event.touches.length + 1;
        }
        function un() {
            Zn = 0, Jn = 0;
        }
        function sn() {
            var n = !1;
            return Zn && Pn() - Zn <= e.fingerReleaseThreshold && (n = !0), n;
        }
        function cn() {
            return !(!0 !== qn.data(P + "_intouch"));
        }
        function dn(n) {
            !0 === n ? (qn.bind(An, L), qn.bind(In, D), Cn && qn.bind(Cn, A)) : (qn.unbind(An, L, !1), 
            qn.unbind(In, D, !1), Cn && qn.unbind(Cn, A, !1)), qn.data(P + "_intouch", !0 === n);
        }
        function pn(n, t) {
            var e = void 0 !== t.identifier ? t.identifier : 0;
            return Vn[n].identifier = e, Vn[n].start.x = Vn[n].end.x = t.pageX || t.clientX, 
            Vn[n].start.y = Vn[n].end.y = t.pageY || t.clientY, Vn[n];
        }
        function hn(n) {
            var t = fn(void 0 !== n.identifier ? n.identifier : 0);
            return t.end.x = n.pageX || n.clientX, t.end.y = n.pageY || n.clientY, t;
        }
        function fn(n) {
            for (var t = 0; t < Vn.length; t++) if (Vn[t].identifier == n) return Vn[t];
        }
        function gn() {
            for (var n = [], t = 0; t <= 5; t++) n.push({
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
            return n;
        }
        function vn(n, t) {
            t = Math.max(t, wn(n)), Yn[n].distance = t;
        }
        function wn(n) {
            if (Yn[n]) return Yn[n].distance;
        }
        function mn() {
            var n = {};
            return n[i] = Tn(i), n[r] = Tn(r), n[o] = Tn(o), n[a] = Tn(a), n;
        }
        function Tn(n) {
            return {
                direction: n,
                distance: 0
            };
        }
        function bn() {
            return Gn - zn;
        }
        function yn(n, t) {
            var e = Math.abs(n.x - t.x), i = Math.abs(n.y - t.y);
            return Math.round(Math.sqrt(e * e + i * i));
        }
        function Sn(n, t) {
            return (t / n * 1).toFixed(2);
        }
        function En() {
            return Bn < 1 ? u : l;
        }
        function xn(n, t) {
            return Math.round(Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)));
        }
        function On(n, t) {
            var e = n.x - t.x, i = t.y - n.y, r = Math.atan2(i, e), o = Math.round(180 * r / Math.PI);
            return o < 0 && (o = 360 - Math.abs(o)), o;
        }
        function Mn(n, t) {
            var e = On(n, t);
            return e <= 45 && e >= 0 ? i : e <= 360 && e >= 315 ? i : e >= 135 && e <= 225 ? r : e > 45 && e < 135 ? a : o;
        }
        function Pn() {
            return new Date().getTime();
        }
        function $n(t) {
            var e = (t = n(t)).offset();
            return {
                left: e.left,
                right: e.left + t.outerWidth(),
                top: e.top,
                bottom: e.top + t.outerHeight()
            };
        }
        function Ln(n, t) {
            return n.x > t.left && n.x < t.right && n.y > t.top && n.y < t.bottom;
        }
        var Dn = x || M || !e.fallbackToMouseEvents, jn = Dn ? M ? O ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", An = Dn ? M ? O ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", In = Dn ? M ? O ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", Cn = Dn ? null : "mouseleave", kn = M ? O ? "MSPointerCancel" : "pointercancel" : "touchcancel", Rn = 0, Hn = null, Nn = 0, Un = 0, _n = 0, Bn = 1, Qn = 0, Xn = 0, Yn = null, qn = n(t), Wn = "start", Fn = 0, Vn = null, zn = 0, Gn = 0, Zn = 0, Jn = 0, Kn = 0, nt = null, tt = null;
        try {
            qn.bind(jn, $), qn.bind(kn, j);
        } catch (t) {
            n.error("events not supported " + jn + "," + kn + " on jQuery.swipe");
        }
        this.enable = function() {
            return qn.bind(jn, $), qn.bind(kn, j), qn;
        }, this.disable = function() {
            return I(), qn;
        }, this.destroy = function() {
            I(), qn.data(P, null), qn = null;
        }, this.option = function(t, i) {
            if (void 0 !== e[t]) {
                if (void 0 === i) return e[t];
                e[t] = i;
            } else n.error("Option " + t + " does not exist on jQuery.swipe.options");
            return null;
        };
    }
    var i = "left", r = "right", o = "up", a = "down", l = "in", u = "out", s = "none", c = "auto", d = "swipe", p = "pinch", h = "tap", f = "doubletap", g = "longtap", v = "horizontal", w = "vertical", m = "all", T = 10, b = "start", y = "move", S = "end", E = "cancel", x = "ontouchstart" in window, O = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, M = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, P = "TouchSwipe", $ = {
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
    n.fn.swipe = function(e) {
        var i = n(this), r = i.data(P);
        if (r && "string" == typeof e) {
            if (r[e]) return r[e].apply(this, Array.prototype.slice.call(arguments, 1));
            n.error("Method " + e + " does not exist on jQuery.swipe");
        } else if (!(r || "object" != typeof e && e)) return t.apply(this, arguments);
        return i;
    }, n.fn.swipe.version = "1.6.9", n.fn.swipe.defaults = $, n.fn.swipe.phases = {
        PHASE_START: b,
        PHASE_MOVE: y,
        PHASE_END: S,
        PHASE_CANCEL: E
    }, n.fn.swipe.directions = {
        LEFT: i,
        RIGHT: r,
        UP: o,
        DOWN: a,
        IN: l,
        OUT: u
    }, n.fn.swipe.pageScroll = {
        NONE: s,
        HORIZONTAL: v,
        VERTICAL: w,
        AUTO: c
    }, n.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: m
    };
});

var $nav = $(".top-bar"), didScroll, lastScrollTop = 0, delta = 5, navbarHeight = $nav.outerHeight();

$(window).scroll(function(n) {
    didScroll = !0;
}), setInterval(function() {
    didScroll && (hasScrolled(), didScroll = !1);
}, 250), bodymovin.loadAnimation({
    container: document.getElementById("animation-01"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    path: "./public/js/animations/animation-01/data.json"
}), bodymovin.loadAnimation({
    container: document.getElementById("animation-02"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    path: "./public/js/animations/animation-02/data.json"
}), bodymovin.loadAnimation({
    container: document.getElementById("animation-03"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    path: "./public/js/animations/animation-03/data.json"
}), bodymovin.loadAnimation({
    container: document.getElementById("animation-04"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    path: "./public/js/animations/animation-04/data.json"
}), bodymovin.loadAnimation({
    container: document.getElementById("animation-05"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    path: "./public/js/animations/animation-05/data.json"
});
//# sourceMappingURL=init-min.js.map
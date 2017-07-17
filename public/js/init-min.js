function hasScrolled() {
    var n = $(this).scrollTop();
    Math.abs(lastScrollTop - n) <= delta || (n > lastScrollTop && n > navbarHeight ? $nav.removeClass("nav-down").addClass("nav-up") : n + $(window).height() < $(document).height() && $nav.removeClass("nav-up").addClass("nav-down"), 
    lastScrollTop = n);
}

$(document).ready(function() {
    var n = 0;
    $("#nav-mob").swipe({
        tap: function(e, t) {
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
    function e(e) {
        return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = s), 
        void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = n.extend({}, n.fn.swipe.defaults, e), 
        this.each(function() {
            var i = n(this), r = i.data(P);
            r || (r = new t(this, e), i.data(P, r));
        });
    }
    function t(e, t) {
        function $(e) {
            if (!(cn() || n(e.target).closest(t.excludedElements, qn).length > 0)) {
                var i, r = e.originalEvent ? e.originalEvent : e, o = r.touches, a = o ? o[0] : r;
                return Wn = b, o ? Fn = o.length : e.preventDefault(), Rn = 0, Hn = null, Xn = null, 
                Nn = 0, Un = 0, _n = 0, Bn = 1, Qn = 0, Vn = gn(), Yn = mn(), un(), !o || Fn === t.fingers || t.fingers === m || X() ? (pn(0, a), 
                zn = Pn(), 2 == Fn && (pn(1, o[1]), Un = _n = yn(Vn[0].start, Vn[1].start)), (t.swipeStatus || t.pinchStatus) && (i = k(r, Wn))) : i = !1, 
                !1 === i ? (Wn = E, k(r, Wn), i) : (t.hold && (ee = setTimeout(n.proxy(function() {
                    qn.trigger("hold", [ r.target ]), t.hold && (i = t.hold.call(qn, r, r.target));
                }, this), t.longTapThreshold)), dn(!0), null);
            }
        }
        function L(n) {
            var e = n.originalEvent ? n.originalEvent : n;
            if (Wn !== S && Wn !== E && !sn()) {
                var i, r = e.touches, o = hn(r ? r[0] : e);
                if (Gn = Pn(), r && (Fn = r.length), t.hold && clearTimeout(ee), Wn = y, 2 == Fn && (0 == Un ? (pn(1, r[1]), 
                Un = _n = yn(Vn[0].start, Vn[1].start)) : (hn(r[1]), _n = yn(Vn[0].end, Vn[1].end), 
                Xn = En(Vn[0].end, Vn[1].end)), Bn = Sn(Un, _n), Qn = Math.abs(Un - _n)), Fn === t.fingers || t.fingers === m || !r || X()) {
                    if (Hn = Mn(o.start, o.end), B(n, Hn), Rn = xn(o.start, o.end), Nn = bn(), vn(Hn, Rn), 
                    (t.swipeStatus || t.pinchStatus) && (i = k(e, Wn)), !t.triggerOnTouchEnd || t.triggerOnTouchLeave) {
                        var a = !0;
                        if (t.triggerOnTouchLeave) {
                            var l = $n(this);
                            a = Ln(o.end, l);
                        }
                        !t.triggerOnTouchEnd && a ? Wn = C(y) : t.triggerOnTouchLeave && !a && (Wn = C(S)), 
                        Wn != E && Wn != S || k(e, Wn);
                    }
                } else k(e, Wn = E);
                !1 === i && k(e, Wn = E);
            }
        }
        function D(n) {
            var e = n.originalEvent ? n.originalEvent : n, i = e.touches;
            return i && i.length ? (ln(), !0) : (sn() && (Fn = Jn), Gn = Pn(), Nn = bn(), N() || !H() ? k(e, Wn = E) : t.triggerOnTouchEnd || 0 == t.triggerOnTouchEnd && Wn === y ? (n.preventDefault(), 
            k(e, Wn = S)) : !t.triggerOnTouchEnd && G() ? R(e, Wn = S, h) : Wn === y && k(e, Wn = E), 
            dn(!1), null);
        }
        function j() {
            Fn = 0, Gn = 0, zn = 0, Un = 0, _n = 0, Bn = 1, un(), dn(!1);
        }
        function A(n) {
            var e = n.originalEvent ? n.originalEvent : n;
            t.triggerOnTouchLeave && k(e, Wn = C(S));
        }
        function I() {
            qn.unbind(jn, $), qn.unbind(kn, j), qn.unbind(An, L), qn.unbind(In, D), Cn && qn.unbind(Cn, A), 
            dn(!1);
        }
        function C(n) {
            var e = n, i = _(), r = H(), o = N();
            return !i || o ? e = E : !r || n != y || t.triggerOnTouchEnd && !t.triggerOnTouchLeave ? !r && n == S && t.triggerOnTouchLeave && (e = E) : e = S, 
            e;
        }
        function k(n, e) {
            var t, i = n.touches;
            return F() || W() || Y() || X() ? ((F() || W()) && (t = R(n, e, d)), (Y() || X()) && !1 !== t && (t = R(n, e, p))) : on() && !1 !== t ? t = R(n, e, f) : an() && !1 !== t ? t = R(n, e, g) : rn() && !1 !== t && (t = R(n, e, h)), 
            e === E && j(n), e === S && (i ? i.length || j(n) : j(n)), t;
        }
        function R(e, s, c) {
            var v;
            if (c == d) {
                if (qn.trigger("swipeStatus", [ s, Hn || null, Rn || 0, Nn || 0, Fn, Vn ]), t.swipeStatus && !1 === (v = t.swipeStatus.call(qn, e, s, Hn || null, Rn || 0, Nn || 0, Fn, Vn))) return !1;
                if (s == S && q()) {
                    if (qn.trigger("swipe", [ Hn, Rn, Nn, Fn, Vn ]), t.swipe && !1 === (v = t.swipe.call(qn, e, Hn, Rn, Nn, Fn, Vn))) return !1;
                    switch (Hn) {
                      case i:
                        qn.trigger("swipeLeft", [ Hn, Rn, Nn, Fn, Vn ]), t.swipeLeft && (v = t.swipeLeft.call(qn, e, Hn, Rn, Nn, Fn, Vn));
                        break;

                      case r:
                        qn.trigger("swipeRight", [ Hn, Rn, Nn, Fn, Vn ]), t.swipeRight && (v = t.swipeRight.call(qn, e, Hn, Rn, Nn, Fn, Vn));
                        break;

                      case o:
                        qn.trigger("swipeUp", [ Hn, Rn, Nn, Fn, Vn ]), t.swipeUp && (v = t.swipeUp.call(qn, e, Hn, Rn, Nn, Fn, Vn));
                        break;

                      case a:
                        qn.trigger("swipeDown", [ Hn, Rn, Nn, Fn, Vn ]), t.swipeDown && (v = t.swipeDown.call(qn, e, Hn, Rn, Nn, Fn, Vn));
                    }
                }
            }
            if (c == p) {
                if (qn.trigger("pinchStatus", [ s, Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn ]), 
                t.pinchStatus && !1 === (v = t.pinchStatus.call(qn, e, s, Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn))) return !1;
                if (s == S && Q()) switch (Xn) {
                  case l:
                    qn.trigger("pinchIn", [ Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn ]), t.pinchIn && (v = t.pinchIn.call(qn, e, Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn));
                    break;

                  case u:
                    qn.trigger("pinchOut", [ Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn ]), t.pinchOut && (v = t.pinchOut.call(qn, e, Xn || null, Qn || 0, Nn || 0, Fn, Bn, Vn));
                }
            }
            return c == h ? s !== E && s !== S || (clearTimeout(ne), clearTimeout(ee), Z() && !nn() ? (Kn = Pn(), 
            ne = setTimeout(n.proxy(function() {
                Kn = null, qn.trigger("tap", [ e.target ]), t.tap && (v = t.tap.call(qn, e, e.target));
            }, this), t.doubleTapThreshold)) : (Kn = null, qn.trigger("tap", [ e.target ]), 
            t.tap && (v = t.tap.call(qn, e, e.target)))) : c == f ? s !== E && s !== S || (clearTimeout(ne), 
            Kn = null, qn.trigger("doubletap", [ e.target ]), t.doubleTap && (v = t.doubleTap.call(qn, e, e.target))) : c == g && (s !== E && s !== S || (clearTimeout(ne), 
            Kn = null, qn.trigger("longtap", [ e.target ]), t.longTap && (v = t.longTap.call(qn, e, e.target)))), 
            v;
        }
        function H() {
            var n = !0;
            return null !== t.threshold && (n = Rn >= t.threshold), n;
        }
        function N() {
            var n = !1;
            return null !== t.cancelThreshold && null !== Hn && (n = wn(Hn) - Rn >= t.cancelThreshold), 
            n;
        }
        function U() {
            return null === t.pinchThreshold || Qn >= t.pinchThreshold;
        }
        function _() {
            return !t.maxTimeThreshold || !(Nn >= t.maxTimeThreshold);
        }
        function B(n, e) {
            if (!1 !== t.preventDefaultEvents) if (t.allowPageScroll === s) n.preventDefault(); else {
                var l = t.allowPageScroll === c;
                switch (e) {
                  case i:
                    (t.swipeLeft && l || !l && t.allowPageScroll != v) && n.preventDefault();
                    break;

                  case r:
                    (t.swipeRight && l || !l && t.allowPageScroll != v) && n.preventDefault();
                    break;

                  case o:
                    (t.swipeUp && l || !l && t.allowPageScroll != w) && n.preventDefault();
                    break;

                  case a:
                    (t.swipeDown && l || !l && t.allowPageScroll != w) && n.preventDefault();
                }
            }
        }
        function Q() {
            var n = V(), e = z(), t = U();
            return n && e && t;
        }
        function X() {
            return !!(t.pinchStatus || t.pinchIn || t.pinchOut);
        }
        function Y() {
            return !(!Q() || !X());
        }
        function q() {
            var n = _(), e = H(), t = V(), i = z();
            return !N() && i && t && e && n;
        }
        function W() {
            return !!(t.swipe || t.swipeStatus || t.swipeLeft || t.swipeRight || t.swipeUp || t.swipeDown);
        }
        function F() {
            return !(!q() || !W());
        }
        function V() {
            return Fn === t.fingers || t.fingers === m || !x;
        }
        function z() {
            return 0 !== Vn[0].end.x;
        }
        function G() {
            return !!t.tap;
        }
        function Z() {
            return !!t.doubleTap;
        }
        function J() {
            return !!t.longTap;
        }
        function K() {
            if (null == Kn) return !1;
            var n = Pn();
            return Z() && n - Kn <= t.doubleTapThreshold;
        }
        function nn() {
            return K();
        }
        function en() {
            return (1 === Fn || !x) && (isNaN(Rn) || Rn < t.threshold);
        }
        function tn() {
            return Nn > t.longTapThreshold && Rn < T;
        }
        function rn() {
            return !(!en() || !G());
        }
        function on() {
            return !(!K() || !Z());
        }
        function an() {
            return !(!tn() || !J());
        }
        function ln() {
            Zn = Pn(), Jn = event.touches.length + 1;
        }
        function un() {
            Zn = 0, Jn = 0;
        }
        function sn() {
            var n = !1;
            return Zn && Pn() - Zn <= t.fingerReleaseThreshold && (n = !0), n;
        }
        function cn() {
            return !(!0 !== qn.data(P + "_intouch"));
        }
        function dn(n) {
            !0 === n ? (qn.bind(An, L), qn.bind(In, D), Cn && qn.bind(Cn, A)) : (qn.unbind(An, L, !1), 
            qn.unbind(In, D, !1), Cn && qn.unbind(Cn, A, !1)), qn.data(P + "_intouch", !0 === n);
        }
        function pn(n, e) {
            var t = void 0 !== e.identifier ? e.identifier : 0;
            return Vn[n].identifier = t, Vn[n].start.x = Vn[n].end.x = e.pageX || e.clientX, 
            Vn[n].start.y = Vn[n].end.y = e.pageY || e.clientY, Vn[n];
        }
        function hn(n) {
            var e = fn(void 0 !== n.identifier ? n.identifier : 0);
            return e.end.x = n.pageX || n.clientX, e.end.y = n.pageY || n.clientY, e;
        }
        function fn(n) {
            for (var e = 0; e < Vn.length; e++) if (Vn[e].identifier == n) return Vn[e];
        }
        function gn() {
            for (var n = [], e = 0; e <= 5; e++) n.push({
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
        function vn(n, e) {
            e = Math.max(e, wn(n)), Yn[n].distance = e;
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
        function yn(n, e) {
            var t = Math.abs(n.x - e.x), i = Math.abs(n.y - e.y);
            return Math.round(Math.sqrt(t * t + i * i));
        }
        function Sn(n, e) {
            return (e / n * 1).toFixed(2);
        }
        function En() {
            return Bn < 1 ? u : l;
        }
        function xn(n, e) {
            return Math.round(Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2)));
        }
        function On(n, e) {
            var t = n.x - e.x, i = e.y - n.y, r = Math.atan2(i, t), o = Math.round(180 * r / Math.PI);
            return o < 0 && (o = 360 - Math.abs(o)), o;
        }
        function Mn(n, e) {
            var t = On(n, e);
            return t <= 45 && t >= 0 ? i : t <= 360 && t >= 315 ? i : t >= 135 && t <= 225 ? r : t > 45 && t < 135 ? a : o;
        }
        function Pn() {
            return new Date().getTime();
        }
        function $n(e) {
            var t = (e = n(e)).offset();
            return {
                left: t.left,
                right: t.left + e.outerWidth(),
                top: t.top,
                bottom: t.top + e.outerHeight()
            };
        }
        function Ln(n, e) {
            return n.x > e.left && n.x < e.right && n.y > e.top && n.y < e.bottom;
        }
        var Dn = x || M || !t.fallbackToMouseEvents, jn = Dn ? M ? O ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", An = Dn ? M ? O ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", In = Dn ? M ? O ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", Cn = Dn ? null : "mouseleave", kn = M ? O ? "MSPointerCancel" : "pointercancel" : "touchcancel", Rn = 0, Hn = null, Nn = 0, Un = 0, _n = 0, Bn = 1, Qn = 0, Xn = 0, Yn = null, qn = n(e), Wn = "start", Fn = 0, Vn = null, zn = 0, Gn = 0, Zn = 0, Jn = 0, Kn = 0, ne = null, ee = null;
        try {
            qn.bind(jn, $), qn.bind(kn, j);
        } catch (e) {
            n.error("events not supported " + jn + "," + kn + " on jQuery.swipe");
        }
        this.enable = function() {
            return qn.bind(jn, $), qn.bind(kn, j), qn;
        }, this.disable = function() {
            return I(), qn;
        }, this.destroy = function() {
            I(), qn.data(P, null), qn = null;
        }, this.option = function(e, i) {
            if (void 0 !== t[e]) {
                if (void 0 === i) return t[e];
                t[e] = i;
            } else n.error("Option " + e + " does not exist on jQuery.swipe.options");
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
    n.fn.swipe = function(t) {
        var i = n(this), r = i.data(P);
        if (r && "string" == typeof t) {
            if (r[t]) return r[t].apply(this, Array.prototype.slice.call(arguments, 1));
            n.error("Method " + t + " does not exist on jQuery.swipe");
        } else if (!(r || "object" != typeof t && t)) return e.apply(this, arguments);
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
    container: document.getElementById("animation-header"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    path: "./public/js/animations/animation-home-header/data.json"
});
//# sourceMappingURL=init-min.js.map
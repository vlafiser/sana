"use strict";

function hasScrolled() {
    var n = $(this).scrollTop();
    Math.abs(lastScrollTop - n) <= delta || (n > lastScrollTop && n > navbarHeight ? $nav.removeClass("nav-down").addClass("nav-up") : n + $(window).height() < $(document).height() && $nav.removeClass("nav-up").addClass("nav-down"), 
    lastScrollTop = n);
}

var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
}, _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(n) {
    return void 0 === n ? "undefined" : _typeof2(n);
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : void 0 === n ? "undefined" : _typeof2(n);
};

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
            if (!(cn() || n(t.target).closest(e.excludedElements, Wn).length > 0)) {
                var i, r = t.originalEvent ? t.originalEvent : t, o = r.touches, l = o ? o[0] : r;
                return Fn = y, o ? Vn = o.length : t.preventDefault(), _n = 0, Hn = null, Yn = null, 
                Nn = 0, Un = 0, jn = 0, Qn = 1, Xn = 0, zn = gn(), qn = bn(), un(), !o || Vn === e.fingers || e.fingers === b || Y() ? (dn(0, l), 
                Bn = Pn(), 2 == Vn && (dn(1, o[1]), Un = jn = mn(zn[0].start, zn[1].start)), (e.swipeStatus || e.pinchStatus) && (i = I(r, Fn))) : i = !1, 
                !1 === i ? (Fn = E, I(r, Fn), i) : (e.hold && (tt = setTimeout(n.proxy(function() {
                    Wn.trigger("hold", [ r.target ]), e.hold && (i = e.hold.call(Wn, r, r.target));
                }, this), e.longTapThreshold)), pn(!0), null);
            }
        }
        function L(n) {
            var t = n.originalEvent ? n.originalEvent : n;
            if (Fn !== S && Fn !== E && !sn()) {
                var i, r = t.touches, o = fn(r ? r[0] : t);
                if (Gn = Pn(), r && (Vn = r.length), e.hold && clearTimeout(tt), Fn = m, 2 == Vn && (0 == Un ? (dn(1, r[1]), 
                Un = jn = mn(zn[0].start, zn[1].start)) : (fn(r[1]), jn = mn(zn[0].end, zn[1].end), 
                Yn = En(zn[0].end, zn[1].end)), Qn = Sn(Un, jn), Xn = Math.abs(Un - jn)), Vn === e.fingers || e.fingers === b || !r || Y()) {
                    if (Hn = Mn(o.start, o.end), Q(n, Hn), _n = xn(o.start, o.end), Nn = yn(), vn(Hn, _n), 
                    (e.swipeStatus || e.pinchStatus) && (i = I(t, Fn)), !e.triggerOnTouchEnd || e.triggerOnTouchLeave) {
                        var l = !0;
                        if (e.triggerOnTouchLeave) {
                            var a = $n(this);
                            l = Ln(o.end, a);
                        }
                        !e.triggerOnTouchEnd && l ? Fn = A(m) : e.triggerOnTouchLeave && !l && (Fn = A(S)), 
                        Fn != E && Fn != S || I(t, Fn);
                    }
                } else I(t, Fn = E);
                !1 === i && I(t, Fn = E);
            }
        }
        function D(n) {
            var t = n.originalEvent ? n.originalEvent : n, i = t.touches;
            return i && i.length ? (an(), !0) : (sn() && (Vn = Jn), Gn = Pn(), Nn = yn(), N() || !H() ? I(t, Fn = E) : e.triggerOnTouchEnd || 0 == e.triggerOnTouchEnd && Fn === m ? (n.preventDefault(), 
            I(t, Fn = S)) : !e.triggerOnTouchEnd && G() ? _(t, Fn = S, f) : Fn === m && I(t, Fn = E), 
            pn(!1), null);
        }
        function C() {
            Vn = 0, Gn = 0, Bn = 0, Un = 0, jn = 0, Qn = 1, un(), pn(!1);
        }
        function k(n) {
            var t = n.originalEvent ? n.originalEvent : n;
            e.triggerOnTouchLeave && I(t, Fn = A(S));
        }
        function R() {
            Wn.unbind(Cn, $), Wn.unbind(In, C), Wn.unbind(kn, L), Wn.unbind(Rn, D), An && Wn.unbind(An, k), 
            pn(!1);
        }
        function A(n) {
            var t = n, i = j(), r = H(), o = N();
            return !i || o ? t = E : !r || n != m || e.triggerOnTouchEnd && !e.triggerOnTouchLeave ? !r && n == S && e.triggerOnTouchLeave && (t = E) : t = S, 
            t;
        }
        function I(n, t) {
            var e, i = n.touches;
            return V() || F() || q() || Y() ? ((V() || F()) && (e = _(n, t, p)), (q() || Y()) && !1 !== e && (e = _(n, t, d))) : on() && !1 !== e ? e = _(n, t, h) : ln() && !1 !== e ? e = _(n, t, g) : rn() && !1 !== e && (e = _(n, t, f)), 
            t === E && C(n), t === S && (i ? i.length || C(n) : C(n)), e;
        }
        function _(t, s, c) {
            var v;
            if (c == p) {
                if (Wn.trigger("swipeStatus", [ s, Hn || null, _n || 0, Nn || 0, Vn, zn ]), e.swipeStatus && !1 === (v = e.swipeStatus.call(Wn, t, s, Hn || null, _n || 0, Nn || 0, Vn, zn))) return !1;
                if (s == S && W()) {
                    if (Wn.trigger("swipe", [ Hn, _n, Nn, Vn, zn ]), e.swipe && !1 === (v = e.swipe.call(Wn, t, Hn, _n, Nn, Vn, zn))) return !1;
                    switch (Hn) {
                      case i:
                        Wn.trigger("swipeLeft", [ Hn, _n, Nn, Vn, zn ]), e.swipeLeft && (v = e.swipeLeft.call(Wn, t, Hn, _n, Nn, Vn, zn));
                        break;

                      case r:
                        Wn.trigger("swipeRight", [ Hn, _n, Nn, Vn, zn ]), e.swipeRight && (v = e.swipeRight.call(Wn, t, Hn, _n, Nn, Vn, zn));
                        break;

                      case o:
                        Wn.trigger("swipeUp", [ Hn, _n, Nn, Vn, zn ]), e.swipeUp && (v = e.swipeUp.call(Wn, t, Hn, _n, Nn, Vn, zn));
                        break;

                      case l:
                        Wn.trigger("swipeDown", [ Hn, _n, Nn, Vn, zn ]), e.swipeDown && (v = e.swipeDown.call(Wn, t, Hn, _n, Nn, Vn, zn));
                    }
                }
            }
            if (c == d) {
                if (Wn.trigger("pinchStatus", [ s, Yn || null, Xn || 0, Nn || 0, Vn, Qn, zn ]), 
                e.pinchStatus && !1 === (v = e.pinchStatus.call(Wn, t, s, Yn || null, Xn || 0, Nn || 0, Vn, Qn, zn))) return !1;
                if (s == S && X()) switch (Yn) {
                  case a:
                    Wn.trigger("pinchIn", [ Yn || null, Xn || 0, Nn || 0, Vn, Qn, zn ]), e.pinchIn && (v = e.pinchIn.call(Wn, t, Yn || null, Xn || 0, Nn || 0, Vn, Qn, zn));
                    break;

                  case u:
                    Wn.trigger("pinchOut", [ Yn || null, Xn || 0, Nn || 0, Vn, Qn, zn ]), e.pinchOut && (v = e.pinchOut.call(Wn, t, Yn || null, Xn || 0, Nn || 0, Vn, Qn, zn));
                }
            }
            return c == f ? s !== E && s !== S || (clearTimeout(nt), clearTimeout(tt), Z() && !nn() ? (Kn = Pn(), 
            nt = setTimeout(n.proxy(function() {
                Kn = null, Wn.trigger("tap", [ t.target ]), e.tap && (v = e.tap.call(Wn, t, t.target));
            }, this), e.doubleTapThreshold)) : (Kn = null, Wn.trigger("tap", [ t.target ]), 
            e.tap && (v = e.tap.call(Wn, t, t.target)))) : c == h ? s !== E && s !== S || (clearTimeout(nt), 
            Kn = null, Wn.trigger("doubletap", [ t.target ]), e.doubleTap && (v = e.doubleTap.call(Wn, t, t.target))) : c == g && (s !== E && s !== S || (clearTimeout(nt), 
            Kn = null, Wn.trigger("longtap", [ t.target ]), e.longTap && (v = e.longTap.call(Wn, t, t.target)))), 
            v;
        }
        function H() {
            var n = !0;
            return null !== e.threshold && (n = _n >= e.threshold), n;
        }
        function N() {
            var n = !1;
            return null !== e.cancelThreshold && null !== Hn && (n = wn(Hn) - _n >= e.cancelThreshold), 
            n;
        }
        function U() {
            return null === e.pinchThreshold || Xn >= e.pinchThreshold;
        }
        function j() {
            return !(e.maxTimeThreshold && Nn >= e.maxTimeThreshold);
        }
        function Q(n, t) {
            if (!1 !== e.preventDefaultEvents) if (e.allowPageScroll === s) n.preventDefault(); else {
                var a = e.allowPageScroll === c;
                switch (t) {
                  case i:
                    (e.swipeLeft && a || !a && e.allowPageScroll != v) && n.preventDefault();
                    break;

                  case r:
                    (e.swipeRight && a || !a && e.allowPageScroll != v) && n.preventDefault();
                    break;

                  case o:
                    (e.swipeUp && a || !a && e.allowPageScroll != w) && n.preventDefault();
                    break;

                  case l:
                    (e.swipeDown && a || !a && e.allowPageScroll != w) && n.preventDefault();
                }
            }
        }
        function X() {
            var n = z(), t = B(), e = U();
            return n && t && e;
        }
        function Y() {
            return !!(e.pinchStatus || e.pinchIn || e.pinchOut);
        }
        function q() {
            return !(!X() || !Y());
        }
        function W() {
            var n = j(), t = H(), e = z(), i = B();
            return !N() && i && e && t && n;
        }
        function F() {
            return !!(e.swipe || e.swipeStatus || e.swipeLeft || e.swipeRight || e.swipeUp || e.swipeDown);
        }
        function V() {
            return !(!W() || !F());
        }
        function z() {
            return Vn === e.fingers || e.fingers === b || !x;
        }
        function B() {
            return 0 !== zn[0].end.x;
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
            return (1 === Vn || !x) && (isNaN(_n) || _n < e.threshold);
        }
        function en() {
            return Nn > e.longTapThreshold && _n < T;
        }
        function rn() {
            return !(!tn() || !G());
        }
        function on() {
            return !(!K() || !Z());
        }
        function ln() {
            return !(!en() || !J());
        }
        function an() {
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
            return !(!0 !== Wn.data(P + "_intouch"));
        }
        function pn(n) {
            !0 === n ? (Wn.bind(kn, L), Wn.bind(Rn, D), An && Wn.bind(An, k)) : (Wn.unbind(kn, L, !1), 
            Wn.unbind(Rn, D, !1), An && Wn.unbind(An, k, !1)), Wn.data(P + "_intouch", !0 === n);
        }
        function dn(n, t) {
            var e = void 0 !== t.identifier ? t.identifier : 0;
            return zn[n].identifier = e, zn[n].start.x = zn[n].end.x = t.pageX || t.clientX, 
            zn[n].start.y = zn[n].end.y = t.pageY || t.clientY, zn[n];
        }
        function fn(n) {
            var t = hn(void 0 !== n.identifier ? n.identifier : 0);
            return t.end.x = n.pageX || n.clientX, t.end.y = n.pageY || n.clientY, t;
        }
        function hn(n) {
            for (var t = 0; t < zn.length; t++) if (zn[t].identifier == n) return zn[t];
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
            t = Math.max(t, wn(n)), qn[n].distance = t;
        }
        function wn(n) {
            if (qn[n]) return qn[n].distance;
        }
        function bn() {
            var n = {};
            return n[i] = Tn(i), n[r] = Tn(r), n[o] = Tn(o), n[l] = Tn(l), n;
        }
        function Tn(n) {
            return {
                direction: n,
                distance: 0
            };
        }
        function yn() {
            return Gn - Bn;
        }
        function mn(n, t) {
            var e = Math.abs(n.x - t.x), i = Math.abs(n.y - t.y);
            return Math.round(Math.sqrt(e * e + i * i));
        }
        function Sn(n, t) {
            return (t / n * 1).toFixed(2);
        }
        function En() {
            return Qn < 1 ? u : a;
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
            return e <= 45 && e >= 0 ? i : e <= 360 && e >= 315 ? i : e >= 135 && e <= 225 ? r : e > 45 && e < 135 ? l : o;
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
        var Dn = x || M || !e.fallbackToMouseEvents, Cn = Dn ? M ? O ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", kn = Dn ? M ? O ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", Rn = Dn ? M ? O ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", An = Dn ? null : "mouseleave", In = M ? O ? "MSPointerCancel" : "pointercancel" : "touchcancel", _n = 0, Hn = null, Nn = 0, Un = 0, jn = 0, Qn = 1, Xn = 0, Yn = 0, qn = null, Wn = n(t), Fn = "start", Vn = 0, zn = null, Bn = 0, Gn = 0, Zn = 0, Jn = 0, Kn = 0, nt = null, tt = null;
        try {
            Wn.bind(Cn, $), Wn.bind(In, C);
        } catch (t) {
            n.error("events not supported " + Cn + "," + In + " on jQuery.swipe");
        }
        this.enable = function() {
            return Wn.bind(Cn, $), Wn.bind(In, C), Wn;
        }, this.disable = function() {
            return R(), Wn;
        }, this.destroy = function() {
            R(), Wn.data(P, null), Wn = null;
        }, this.option = function(t, i) {
            if (void 0 !== e[t]) {
                if (void 0 === i) return e[t];
                e[t] = i;
            } else n.error("Option " + t + " does not exist on jQuery.swipe.options");
            return null;
        };
    }
    var i = "left", r = "right", o = "up", l = "down", a = "in", u = "out", s = "none", c = "auto", p = "swipe", d = "pinch", f = "tap", h = "doubletap", g = "longtap", v = "horizontal", w = "vertical", b = "all", T = 10, y = "start", m = "move", S = "end", E = "cancel", x = "ontouchstart" in window, O = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, M = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, P = "TouchSwipe", $ = {
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
        } else if (!(r || "object" !== (void 0 === e ? "undefined" : _typeof(e)) && e)) return t.apply(this, arguments);
        return i;
    }, n.fn.swipe.version = "1.6.9", n.fn.swipe.defaults = $, n.fn.swipe.phases = {
        PHASE_START: y,
        PHASE_MOVE: m,
        PHASE_END: S,
        PHASE_CANCEL: E
    }, n.fn.swipe.directions = {
        LEFT: i,
        RIGHT: r,
        UP: o,
        DOWN: l,
        IN: a,
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
        ALL: b
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
});
//# sourceMappingURL=init-min-dist.js.map
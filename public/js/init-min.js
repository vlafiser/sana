function hasScrolled() {
    var n = $(this).scrollTop();
    Math.abs(lastScrollTop - n) <= delta || (n > lastScrollTop && n > navbarHeight ? $nav.removeClass("nav-down").addClass("nav-up") : n + $(window).height() < $(document).height() && $nav.removeClass("nav-up").addClass("nav-down"), 
    lastScrollTop = n);
}

var ani;

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
    }), $("body").hasClass("home") && (bodymovin.loadAnimation({
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
        container: document.getElementById("animation-05"),
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        path: "./public/js/animations/animation-05/data.json"
    })), $("body").hasClass("technology") && (bodymovin.loadAnimation({
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
    })), ani = bodymovin.loadAnimation({
        container: document.getElementById("animation-price-01"),
        renderer: "svg",
        loop: !1,
        autoplay: !0,
        path: "./public/js/animations/animation-price-01/highest/data.json"
    });
}), function(n) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define([ "jquery" ], n) : n(jQuery);
}(function(n) {
    function t(t) {
        return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = s), 
        void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = n.extend({}, n.fn.swipe.defaults, t), 
        this.each(function() {
            var i = n(this), a = i.data($);
            a || (a = new e(this, t), i.data($, a));
        });
    }
    function e(t, e) {
        function M(t) {
            if (!(cn() || n(t.target).closest(e.excludedElements, qn).length > 0)) {
                var i, a = t.originalEvent ? t.originalEvent : t, o = a.touches, r = o ? o[0] : a;
                return Wn = T, o ? zn = o.length : t.preventDefault(), Rn = 0, Hn = null, Xn = null, 
                Bn = 0, Nn = 0, Un = 0, _n = 1, Qn = 0, Fn = gn(), Yn = wn(), un(), !o || zn === e.fingers || e.fingers === w || X() ? (pn(0, r), 
                Vn = $n(), 2 == zn && (pn(1, o[1]), Nn = Un = yn(Fn[0].start, Fn[1].start)), (e.swipeStatus || e.pinchStatus) && (i = k(a, Wn))) : i = !1, 
                !1 === i ? (Wn = S, k(a, Wn), i) : (e.hold && (tt = setTimeout(n.proxy(function() {
                    qn.trigger("hold", [ a.target ]), e.hold && (i = e.hold.call(qn, a, a.target));
                }, this), e.longTapThreshold)), dn(!0), null);
            }
        }
        function A(n) {
            var t = n.originalEvent ? n.originalEvent : n;
            if (Wn !== E && Wn !== S && !sn()) {
                var i, a = t.touches, o = hn(a ? a[0] : t);
                if (Gn = $n(), a && (zn = a.length), e.hold && clearTimeout(tt), Wn = y, 2 == zn && (0 == Nn ? (pn(1, a[1]), 
                Nn = Un = yn(Fn[0].start, Fn[1].start)) : (hn(a[1]), Un = yn(Fn[0].end, Fn[1].end), 
                Xn = Sn(Fn[0].end, Fn[1].end)), _n = En(Nn, Un), Qn = Math.abs(Nn - Un)), zn === e.fingers || e.fingers === w || !a || X()) {
                    if (Hn = jn(o.start, o.end), _(n, Hn), Rn = xn(o.start, o.end), Bn = Tn(), vn(Hn, Rn), 
                    (e.swipeStatus || e.pinchStatus) && (i = k(t, Wn)), !e.triggerOnTouchEnd || e.triggerOnTouchLeave) {
                        var r = !0;
                        if (e.triggerOnTouchLeave) {
                            var l = Mn(this);
                            r = An(o.end, l);
                        }
                        !e.triggerOnTouchEnd && r ? Wn = C(y) : e.triggerOnTouchLeave && !r && (Wn = C(E)), 
                        Wn != S && Wn != E || k(t, Wn);
                    }
                } else k(t, Wn = S);
                !1 === i && k(t, Wn = S);
            }
        }
        function I(n) {
            var t = n.originalEvent ? n.originalEvent : n, i = t.touches;
            return i && i.length ? (ln(), !0) : (sn() && (zn = Jn), Gn = $n(), Bn = Tn(), B() || !H() ? k(t, Wn = S) : e.triggerOnTouchEnd || 0 == e.triggerOnTouchEnd && Wn === y ? (n.preventDefault(), 
            k(t, Wn = E)) : !e.triggerOnTouchEnd && G() ? R(t, Wn = E, h) : Wn === y && k(t, Wn = S), 
            dn(!1), null);
        }
        function P() {
            zn = 0, Gn = 0, Vn = 0, Nn = 0, Un = 0, _n = 1, un(), dn(!1);
        }
        function L(n) {
            var t = n.originalEvent ? n.originalEvent : n;
            e.triggerOnTouchLeave && k(t, Wn = C(E));
        }
        function D() {
            qn.unbind(Pn, M), qn.unbind(kn, P), qn.unbind(Ln, A), qn.unbind(Dn, I), Cn && qn.unbind(Cn, L), 
            dn(!1);
        }
        function C(n) {
            var t = n, i = U(), a = H(), o = B();
            return !i || o ? t = S : !a || n != y || e.triggerOnTouchEnd && !e.triggerOnTouchLeave ? !a && n == E && e.triggerOnTouchLeave && (t = S) : t = E, 
            t;
        }
        function k(n, t) {
            var e, i = n.touches;
            return z() || W() || Y() || X() ? ((z() || W()) && (e = R(n, t, d)), (Y() || X()) && !1 !== e && (e = R(n, t, p))) : on() && !1 !== e ? e = R(n, t, f) : rn() && !1 !== e ? e = R(n, t, g) : an() && !1 !== e && (e = R(n, t, h)), 
            t === S && P(n), t === E && (i ? i.length || P(n) : P(n)), e;
        }
        function R(t, s, c) {
            var v;
            if (c == d) {
                if (qn.trigger("swipeStatus", [ s, Hn || null, Rn || 0, Bn || 0, zn, Fn ]), e.swipeStatus && !1 === (v = e.swipeStatus.call(qn, t, s, Hn || null, Rn || 0, Bn || 0, zn, Fn))) return !1;
                if (s == E && q()) {
                    if (qn.trigger("swipe", [ Hn, Rn, Bn, zn, Fn ]), e.swipe && !1 === (v = e.swipe.call(qn, t, Hn, Rn, Bn, zn, Fn))) return !1;
                    switch (Hn) {
                      case i:
                        qn.trigger("swipeLeft", [ Hn, Rn, Bn, zn, Fn ]), e.swipeLeft && (v = e.swipeLeft.call(qn, t, Hn, Rn, Bn, zn, Fn));
                        break;

                      case a:
                        qn.trigger("swipeRight", [ Hn, Rn, Bn, zn, Fn ]), e.swipeRight && (v = e.swipeRight.call(qn, t, Hn, Rn, Bn, zn, Fn));
                        break;

                      case o:
                        qn.trigger("swipeUp", [ Hn, Rn, Bn, zn, Fn ]), e.swipeUp && (v = e.swipeUp.call(qn, t, Hn, Rn, Bn, zn, Fn));
                        break;

                      case r:
                        qn.trigger("swipeDown", [ Hn, Rn, Bn, zn, Fn ]), e.swipeDown && (v = e.swipeDown.call(qn, t, Hn, Rn, Bn, zn, Fn));
                    }
                }
            }
            if (c == p) {
                if (qn.trigger("pinchStatus", [ s, Xn || null, Qn || 0, Bn || 0, zn, _n, Fn ]), 
                e.pinchStatus && !1 === (v = e.pinchStatus.call(qn, t, s, Xn || null, Qn || 0, Bn || 0, zn, _n, Fn))) return !1;
                if (s == E && Q()) switch (Xn) {
                  case l:
                    qn.trigger("pinchIn", [ Xn || null, Qn || 0, Bn || 0, zn, _n, Fn ]), e.pinchIn && (v = e.pinchIn.call(qn, t, Xn || null, Qn || 0, Bn || 0, zn, _n, Fn));
                    break;

                  case u:
                    qn.trigger("pinchOut", [ Xn || null, Qn || 0, Bn || 0, zn, _n, Fn ]), e.pinchOut && (v = e.pinchOut.call(qn, t, Xn || null, Qn || 0, Bn || 0, zn, _n, Fn));
                }
            }
            return c == h ? s !== S && s !== E || (clearTimeout(nt), clearTimeout(tt), Z() && !nn() ? (Kn = $n(), 
            nt = setTimeout(n.proxy(function() {
                Kn = null, qn.trigger("tap", [ t.target ]), e.tap && (v = e.tap.call(qn, t, t.target));
            }, this), e.doubleTapThreshold)) : (Kn = null, qn.trigger("tap", [ t.target ]), 
            e.tap && (v = e.tap.call(qn, t, t.target)))) : c == f ? s !== S && s !== E || (clearTimeout(nt), 
            Kn = null, qn.trigger("doubletap", [ t.target ]), e.doubleTap && (v = e.doubleTap.call(qn, t, t.target))) : c == g && (s !== S && s !== E || (clearTimeout(nt), 
            Kn = null, qn.trigger("longtap", [ t.target ]), e.longTap && (v = e.longTap.call(qn, t, t.target)))), 
            v;
        }
        function H() {
            var n = !0;
            return null !== e.threshold && (n = Rn >= e.threshold), n;
        }
        function B() {
            var n = !1;
            return null !== e.cancelThreshold && null !== Hn && (n = mn(Hn) - Rn >= e.cancelThreshold), 
            n;
        }
        function N() {
            return null === e.pinchThreshold || Qn >= e.pinchThreshold;
        }
        function U() {
            return !e.maxTimeThreshold || !(Bn >= e.maxTimeThreshold);
        }
        function _(n, t) {
            if (!1 !== e.preventDefaultEvents) if (e.allowPageScroll === s) n.preventDefault(); else {
                var l = e.allowPageScroll === c;
                switch (t) {
                  case i:
                    (e.swipeLeft && l || !l && e.allowPageScroll != v) && n.preventDefault();
                    break;

                  case a:
                    (e.swipeRight && l || !l && e.allowPageScroll != v) && n.preventDefault();
                    break;

                  case o:
                    (e.swipeUp && l || !l && e.allowPageScroll != m) && n.preventDefault();
                    break;

                  case r:
                    (e.swipeDown && l || !l && e.allowPageScroll != m) && n.preventDefault();
                }
            }
        }
        function Q() {
            var n = F(), t = V(), e = N();
            return n && t && e;
        }
        function X() {
            return !!(e.pinchStatus || e.pinchIn || e.pinchOut);
        }
        function Y() {
            return !(!Q() || !X());
        }
        function q() {
            var n = U(), t = H(), e = F(), i = V();
            return !B() && i && e && t && n;
        }
        function W() {
            return !!(e.swipe || e.swipeStatus || e.swipeLeft || e.swipeRight || e.swipeUp || e.swipeDown);
        }
        function z() {
            return !(!q() || !W());
        }
        function F() {
            return zn === e.fingers || e.fingers === w || !x;
        }
        function V() {
            return 0 !== Fn[0].end.x;
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
            var n = $n();
            return Z() && n - Kn <= e.doubleTapThreshold;
        }
        function nn() {
            return K();
        }
        function tn() {
            return (1 === zn || !x) && (isNaN(Rn) || Rn < e.threshold);
        }
        function en() {
            return Bn > e.longTapThreshold && Rn < b;
        }
        function an() {
            return !(!tn() || !G());
        }
        function on() {
            return !(!K() || !Z());
        }
        function rn() {
            return !(!en() || !J());
        }
        function ln() {
            Zn = $n(), Jn = event.touches.length + 1;
        }
        function un() {
            Zn = 0, Jn = 0;
        }
        function sn() {
            var n = !1;
            return Zn && $n() - Zn <= e.fingerReleaseThreshold && (n = !0), n;
        }
        function cn() {
            return !(!0 !== qn.data($ + "_intouch"));
        }
        function dn(n) {
            !0 === n ? (qn.bind(Ln, A), qn.bind(Dn, I), Cn && qn.bind(Cn, L)) : (qn.unbind(Ln, A, !1), 
            qn.unbind(Dn, I, !1), Cn && qn.unbind(Cn, L, !1)), qn.data($ + "_intouch", !0 === n);
        }
        function pn(n, t) {
            var e = void 0 !== t.identifier ? t.identifier : 0;
            return Fn[n].identifier = e, Fn[n].start.x = Fn[n].end.x = t.pageX || t.clientX, 
            Fn[n].start.y = Fn[n].end.y = t.pageY || t.clientY, Fn[n];
        }
        function hn(n) {
            var t = fn(void 0 !== n.identifier ? n.identifier : 0);
            return t.end.x = n.pageX || n.clientX, t.end.y = n.pageY || n.clientY, t;
        }
        function fn(n) {
            for (var t = 0; t < Fn.length; t++) if (Fn[t].identifier == n) return Fn[t];
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
            t = Math.max(t, mn(n)), Yn[n].distance = t;
        }
        function mn(n) {
            if (Yn[n]) return Yn[n].distance;
        }
        function wn() {
            var n = {};
            return n[i] = bn(i), n[a] = bn(a), n[o] = bn(o), n[r] = bn(r), n;
        }
        function bn(n) {
            return {
                direction: n,
                distance: 0
            };
        }
        function Tn() {
            return Gn - Vn;
        }
        function yn(n, t) {
            var e = Math.abs(n.x - t.x), i = Math.abs(n.y - t.y);
            return Math.round(Math.sqrt(e * e + i * i));
        }
        function En(n, t) {
            return (t / n * 1).toFixed(2);
        }
        function Sn() {
            return _n < 1 ? u : l;
        }
        function xn(n, t) {
            return Math.round(Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)));
        }
        function On(n, t) {
            var e = n.x - t.x, i = t.y - n.y, a = Math.atan2(i, e), o = Math.round(180 * a / Math.PI);
            return o < 0 && (o = 360 - Math.abs(o)), o;
        }
        function jn(n, t) {
            var e = On(n, t);
            return e <= 45 && e >= 0 ? i : e <= 360 && e >= 315 ? i : e >= 135 && e <= 225 ? a : e > 45 && e < 135 ? r : o;
        }
        function $n() {
            return new Date().getTime();
        }
        function Mn(t) {
            var e = (t = n(t)).offset();
            return {
                left: e.left,
                right: e.left + t.outerWidth(),
                top: e.top,
                bottom: e.top + t.outerHeight()
            };
        }
        function An(n, t) {
            return n.x > t.left && n.x < t.right && n.y > t.top && n.y < t.bottom;
        }
        var In = x || j || !e.fallbackToMouseEvents, Pn = In ? j ? O ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", Ln = In ? j ? O ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", Dn = In ? j ? O ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", Cn = In ? null : "mouseleave", kn = j ? O ? "MSPointerCancel" : "pointercancel" : "touchcancel", Rn = 0, Hn = null, Bn = 0, Nn = 0, Un = 0, _n = 1, Qn = 0, Xn = 0, Yn = null, qn = n(t), Wn = "start", zn = 0, Fn = null, Vn = 0, Gn = 0, Zn = 0, Jn = 0, Kn = 0, nt = null, tt = null;
        try {
            qn.bind(Pn, M), qn.bind(kn, P);
        } catch (t) {
            n.error("events not supported " + Pn + "," + kn + " on jQuery.swipe");
        }
        this.enable = function() {
            return qn.bind(Pn, M), qn.bind(kn, P), qn;
        }, this.disable = function() {
            return D(), qn;
        }, this.destroy = function() {
            D(), qn.data($, null), qn = null;
        }, this.option = function(t, i) {
            if (void 0 !== e[t]) {
                if (void 0 === i) return e[t];
                e[t] = i;
            } else n.error("Option " + t + " does not exist on jQuery.swipe.options");
            return null;
        };
    }
    var i = "left", a = "right", o = "up", r = "down", l = "in", u = "out", s = "none", c = "auto", d = "swipe", p = "pinch", h = "tap", f = "doubletap", g = "longtap", v = "horizontal", m = "vertical", w = "all", b = 10, T = "start", y = "move", E = "end", S = "cancel", x = "ontouchstart" in window, O = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, j = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, $ = "TouchSwipe", M = {
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
        var i = n(this), a = i.data($);
        if (a && "string" == typeof e) {
            if (a[e]) return a[e].apply(this, Array.prototype.slice.call(arguments, 1));
            n.error("Method " + e + " does not exist on jQuery.swipe");
        } else if (!(a || "object" != typeof e && e)) return t.apply(this, arguments);
        return i;
    }, n.fn.swipe.version = "1.6.9", n.fn.swipe.defaults = M, n.fn.swipe.phases = {
        PHASE_START: T,
        PHASE_MOVE: y,
        PHASE_END: E,
        PHASE_CANCEL: S
    }, n.fn.swipe.directions = {
        LEFT: i,
        RIGHT: a,
        UP: o,
        DOWN: r,
        IN: l,
        OUT: u
    }, n.fn.swipe.pageScroll = {
        NONE: s,
        HORIZONTAL: v,
        VERTICAL: m,
        AUTO: c
    }, n.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: w
    };
});

var $nav = $(".top-bar"), didScroll, lastScrollTop = 0, delta = 5, navbarHeight = $nav.outerHeight();

$(window).scroll(function(n) {
    didScroll = !0;
}), setInterval(function() {
    didScroll && (hasScrolled(), didScroll = !1);
}, 250), $(window).resize(function() {
    var n = $(window).width();
    n < 736 ? (ani.destroy(), ani = bodymovin.loadAnimation({
        container: document.getElementById("animation-price-01"),
        renderer: "svg",
        loop: !1,
        autoplay: !0,
        path: "./public/js/animations/animation-price-01/735/data.json"
    })) : n >= 736 && n < 1024 ? (ani.destroy(), ani = bodymovin.loadAnimation({
        container: document.getElementById("animation-price-01"),
        renderer: "svg",
        loop: !1,
        autoplay: !0,
        path: "./public/js/animations/animation-price-01/1023/data.json"
    })) : n >= 1024 && n < 1068 ? (ani.destroy(), ani = bodymovin.loadAnimation({
        container: document.getElementById("animation-price-01"),
        renderer: "svg",
        loop: !1,
        autoplay: !0,
        path: "./public/js/animations/animation-price-01/1068/data.json"
    })) : n >= 1068 && (ani.destroy(), ani = bodymovin.loadAnimation({
        container: document.getElementById("animation-price-01"),
        renderer: "svg",
        loop: !1,
        autoplay: !0,
        path: "./public/js/animations/animation-price-01/highest/data.json"
    }));
});
//# sourceMappingURL=init-min.js.map
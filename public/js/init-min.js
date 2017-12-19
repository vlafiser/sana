function hasScrolled() {
    var n = $(this).scrollTop();
    Math.abs(lastScrollTop - n) <= delta || (n > lastScrollTop && n > navbarHeight ? $nav.removeClass("nav-down").addClass("nav-up") : n + $(window).height() < $(document).height() && $nav.removeClass("nav-up").addClass("nav-down"), 
    lastScrollTop = n);
}

function pricingAnimation(n) {
    n < 1068 ? (null != ani && ani.destroy(), ani = bodymovin.loadAnimation({
        container: document.getElementById("animation-price-01"),
        renderer: "svg",
        loop: !1,
        autoplay: !0,
        path: "./public/js/animations/animation-price-01/1068/data.json"
    })) : (null != ani && ani.destroy(), ani = bodymovin.loadAnimation({
        container: document.getElementById("animation-price-01"),
        renderer: "svg",
        loop: !1,
        autoplay: !0,
        path: "./public/js/animations/animation-price-01/highest/data.json"
    }));
}

var ani, w = 0;

$(window).load(function() {
    w = $(window).width();
}), $(window).resize(function() {
    var n = $(window).width();
    w != n && (pricingAnimation(n), w = $(window).width(), delete w);
}), $(document).ready(function() {
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
    }), $("body").hasClass("pricing") && pricingAnimation(w), $("body").hasClass("home") && (bodymovin.loadAnimation({
        container: document.getElementById("animation-01"),
        renderer: "svg",
        loop: !1,
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
    }));
}), function(n) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define([ "jquery" ], n) : n(jQuery);
}(function(n) {
    function t(t) {
        return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = s), 
        void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = n.extend({}, n.fn.swipe.defaults, t), 
        this.each(function() {
            var i = n(this), o = i.data(M);
            o || (o = new e(this, t), i.data(M, o));
        });
    }
    function e(t, e) {
        function j(t) {
            if (!(cn() || n(t.target).closest(e.excludedElements, qn).length > 0)) {
                var i, o = t.originalEvent ? t.originalEvent : t, a = o.touches, r = a ? a[0] : o;
                return Wn = T, a ? zn = a.length : t.preventDefault(), Rn = 0, Hn = null, Xn = null, 
                Nn = 0, Un = 0, Bn = 0, _n = 1, Qn = 0, Fn = gn(), Yn = mn(), un(), !a || zn === e.fingers || e.fingers === m || X() ? (pn(0, r), 
                Vn = Mn(), 2 == zn && (pn(1, a[1]), Un = Bn = yn(Fn[0].start, Fn[1].start)), (e.swipeStatus || e.pinchStatus) && (i = k(o, Wn))) : i = !1, 
                !1 === i ? (Wn = E, k(o, Wn), i) : (e.hold && (tt = setTimeout(n.proxy(function() {
                    qn.trigger("hold", [ o.target ]), e.hold && (i = e.hold.call(qn, o, o.target));
                }, this), e.longTapThreshold)), dn(!0), null);
            }
        }
        function A(n) {
            var t = n.originalEvent ? n.originalEvent : n;
            if (Wn !== S && Wn !== E && !sn()) {
                var i, o = t.touches, a = hn(o ? o[0] : t);
                if (Gn = Mn(), o && (zn = o.length), e.hold && clearTimeout(tt), Wn = y, 2 == zn && (0 == Un ? (pn(1, o[1]), 
                Un = Bn = yn(Fn[0].start, Fn[1].start)) : (hn(o[1]), Bn = yn(Fn[0].end, Fn[1].end), 
                Xn = En(Fn[0].end, Fn[1].end)), _n = Sn(Un, Bn), Qn = Math.abs(Un - Bn)), zn === e.fingers || e.fingers === m || !o || X()) {
                    if (Hn = $n(a.start, a.end), _(n, Hn), Rn = xn(a.start, a.end), Nn = Tn(), vn(Hn, Rn), 
                    (e.swipeStatus || e.pinchStatus) && (i = k(t, Wn)), !e.triggerOnTouchEnd || e.triggerOnTouchLeave) {
                        var r = !0;
                        if (e.triggerOnTouchLeave) {
                            var l = jn(this);
                            r = An(a.end, l);
                        }
                        !e.triggerOnTouchEnd && r ? Wn = I(y) : e.triggerOnTouchLeave && !r && (Wn = I(S)), 
                        Wn != E && Wn != S || k(t, Wn);
                    }
                } else k(t, Wn = E);
                !1 === i && k(t, Wn = E);
            }
        }
        function P(n) {
            var t = n.originalEvent ? n.originalEvent : n, i = t.touches;
            return i && i.length ? (ln(), !0) : (sn() && (zn = Jn), Gn = Mn(), Nn = Tn(), N() || !H() ? k(t, Wn = E) : e.triggerOnTouchEnd || 0 == e.triggerOnTouchEnd && Wn === y ? (n.preventDefault(), 
            k(t, Wn = S)) : !e.triggerOnTouchEnd && G() ? R(t, Wn = S, h) : Wn === y && k(t, Wn = E), 
            dn(!1), null);
        }
        function L() {
            zn = 0, Gn = 0, Vn = 0, Un = 0, Bn = 0, _n = 1, un(), dn(!1);
        }
        function D(n) {
            var t = n.originalEvent ? n.originalEvent : n;
            e.triggerOnTouchLeave && k(t, Wn = I(S));
        }
        function C() {
            qn.unbind(Ln, j), qn.unbind(kn, L), qn.unbind(Dn, A), qn.unbind(Cn, P), In && qn.unbind(In, D), 
            dn(!1);
        }
        function I(n) {
            var t = n, i = B(), o = H(), a = N();
            return !i || a ? t = E : !o || n != y || e.triggerOnTouchEnd && !e.triggerOnTouchLeave ? !o && n == S && e.triggerOnTouchLeave && (t = E) : t = S, 
            t;
        }
        function k(n, t) {
            var e, i = n.touches;
            return z() || W() || Y() || X() ? ((z() || W()) && (e = R(n, t, d)), (Y() || X()) && !1 !== e && (e = R(n, t, p))) : an() && !1 !== e ? e = R(n, t, f) : rn() && !1 !== e ? e = R(n, t, g) : on() && !1 !== e && (e = R(n, t, h)), 
            t === E && L(n), t === S && (i ? i.length || L(n) : L(n)), e;
        }
        function R(t, s, c) {
            var v;
            if (c == d) {
                if (qn.trigger("swipeStatus", [ s, Hn || null, Rn || 0, Nn || 0, zn, Fn ]), e.swipeStatus && !1 === (v = e.swipeStatus.call(qn, t, s, Hn || null, Rn || 0, Nn || 0, zn, Fn))) return !1;
                if (s == S && q()) {
                    if (qn.trigger("swipe", [ Hn, Rn, Nn, zn, Fn ]), e.swipe && !1 === (v = e.swipe.call(qn, t, Hn, Rn, Nn, zn, Fn))) return !1;
                    switch (Hn) {
                      case i:
                        qn.trigger("swipeLeft", [ Hn, Rn, Nn, zn, Fn ]), e.swipeLeft && (v = e.swipeLeft.call(qn, t, Hn, Rn, Nn, zn, Fn));
                        break;

                      case o:
                        qn.trigger("swipeRight", [ Hn, Rn, Nn, zn, Fn ]), e.swipeRight && (v = e.swipeRight.call(qn, t, Hn, Rn, Nn, zn, Fn));
                        break;

                      case a:
                        qn.trigger("swipeUp", [ Hn, Rn, Nn, zn, Fn ]), e.swipeUp && (v = e.swipeUp.call(qn, t, Hn, Rn, Nn, zn, Fn));
                        break;

                      case r:
                        qn.trigger("swipeDown", [ Hn, Rn, Nn, zn, Fn ]), e.swipeDown && (v = e.swipeDown.call(qn, t, Hn, Rn, Nn, zn, Fn));
                    }
                }
            }
            if (c == p) {
                if (qn.trigger("pinchStatus", [ s, Xn || null, Qn || 0, Nn || 0, zn, _n, Fn ]), 
                e.pinchStatus && !1 === (v = e.pinchStatus.call(qn, t, s, Xn || null, Qn || 0, Nn || 0, zn, _n, Fn))) return !1;
                if (s == S && Q()) switch (Xn) {
                  case l:
                    qn.trigger("pinchIn", [ Xn || null, Qn || 0, Nn || 0, zn, _n, Fn ]), e.pinchIn && (v = e.pinchIn.call(qn, t, Xn || null, Qn || 0, Nn || 0, zn, _n, Fn));
                    break;

                  case u:
                    qn.trigger("pinchOut", [ Xn || null, Qn || 0, Nn || 0, zn, _n, Fn ]), e.pinchOut && (v = e.pinchOut.call(qn, t, Xn || null, Qn || 0, Nn || 0, zn, _n, Fn));
                }
            }
            return c == h ? s !== E && s !== S || (clearTimeout(nt), clearTimeout(tt), Z() && !nn() ? (Kn = Mn(), 
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
        function B() {
            return !e.maxTimeThreshold || !(Nn >= e.maxTimeThreshold);
        }
        function _(n, t) {
            if (!1 !== e.preventDefaultEvents) if (e.allowPageScroll === s) n.preventDefault(); else {
                var l = e.allowPageScroll === c;
                switch (t) {
                  case i:
                    (e.swipeLeft && l || !l && e.allowPageScroll != v) && n.preventDefault();
                    break;

                  case o:
                    (e.swipeRight && l || !l && e.allowPageScroll != v) && n.preventDefault();
                    break;

                  case a:
                    (e.swipeUp && l || !l && e.allowPageScroll != w) && n.preventDefault();
                    break;

                  case r:
                    (e.swipeDown && l || !l && e.allowPageScroll != w) && n.preventDefault();
                }
            }
        }
        function Q() {
            var n = F(), t = V(), e = U();
            return n && t && e;
        }
        function X() {
            return !!(e.pinchStatus || e.pinchIn || e.pinchOut);
        }
        function Y() {
            return !(!Q() || !X());
        }
        function q() {
            var n = B(), t = H(), e = F(), i = V();
            return !N() && i && e && t && n;
        }
        function W() {
            return !!(e.swipe || e.swipeStatus || e.swipeLeft || e.swipeRight || e.swipeUp || e.swipeDown);
        }
        function z() {
            return !(!q() || !W());
        }
        function F() {
            return zn === e.fingers || e.fingers === m || !x;
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
            var n = Mn();
            return Z() && n - Kn <= e.doubleTapThreshold;
        }
        function nn() {
            return K();
        }
        function tn() {
            return (1 === zn || !x) && (isNaN(Rn) || Rn < e.threshold);
        }
        function en() {
            return Nn > e.longTapThreshold && Rn < b;
        }
        function on() {
            return !(!tn() || !G());
        }
        function an() {
            return !(!K() || !Z());
        }
        function rn() {
            return !(!en() || !J());
        }
        function ln() {
            Zn = Mn(), Jn = event.touches.length + 1;
        }
        function un() {
            Zn = 0, Jn = 0;
        }
        function sn() {
            var n = !1;
            return Zn && Mn() - Zn <= e.fingerReleaseThreshold && (n = !0), n;
        }
        function cn() {
            return !(!0 !== qn.data(M + "_intouch"));
        }
        function dn(n) {
            !0 === n ? (qn.bind(Dn, A), qn.bind(Cn, P), In && qn.bind(In, D)) : (qn.unbind(Dn, A, !1), 
            qn.unbind(Cn, P, !1), In && qn.unbind(In, D, !1)), qn.data(M + "_intouch", !0 === n);
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
            t = Math.max(t, wn(n)), Yn[n].distance = t;
        }
        function wn(n) {
            if (Yn[n]) return Yn[n].distance;
        }
        function mn() {
            var n = {};
            return n[i] = bn(i), n[o] = bn(o), n[a] = bn(a), n[r] = bn(r), n;
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
        function Sn(n, t) {
            return (t / n * 1).toFixed(2);
        }
        function En() {
            return _n < 1 ? u : l;
        }
        function xn(n, t) {
            return Math.round(Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)));
        }
        function On(n, t) {
            var e = n.x - t.x, i = t.y - n.y, o = Math.atan2(i, e), a = Math.round(180 * o / Math.PI);
            return a < 0 && (a = 360 - Math.abs(a)), a;
        }
        function $n(n, t) {
            var e = On(n, t);
            return e <= 45 && e >= 0 ? i : e <= 360 && e >= 315 ? i : e >= 135 && e <= 225 ? o : e > 45 && e < 135 ? r : a;
        }
        function Mn() {
            return new Date().getTime();
        }
        function jn(t) {
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
        var Pn = x || $ || !e.fallbackToMouseEvents, Ln = Pn ? $ ? O ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", Dn = Pn ? $ ? O ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", Cn = Pn ? $ ? O ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", In = Pn ? null : "mouseleave", kn = $ ? O ? "MSPointerCancel" : "pointercancel" : "touchcancel", Rn = 0, Hn = null, Nn = 0, Un = 0, Bn = 0, _n = 1, Qn = 0, Xn = 0, Yn = null, qn = n(t), Wn = "start", zn = 0, Fn = null, Vn = 0, Gn = 0, Zn = 0, Jn = 0, Kn = 0, nt = null, tt = null;
        try {
            qn.bind(Ln, j), qn.bind(kn, L);
        } catch (t) {
            n.error("events not supported " + Ln + "," + kn + " on jQuery.swipe");
        }
        this.enable = function() {
            return qn.bind(Ln, j), qn.bind(kn, L), qn;
        }, this.disable = function() {
            return C(), qn;
        }, this.destroy = function() {
            C(), qn.data(M, null), qn = null;
        }, this.option = function(t, i) {
            if (void 0 !== e[t]) {
                if (void 0 === i) return e[t];
                e[t] = i;
            } else n.error("Option " + t + " does not exist on jQuery.swipe.options");
            return null;
        };
    }
    var i = "left", o = "right", a = "up", r = "down", l = "in", u = "out", s = "none", c = "auto", d = "swipe", p = "pinch", h = "tap", f = "doubletap", g = "longtap", v = "horizontal", w = "vertical", m = "all", b = 10, T = "start", y = "move", S = "end", E = "cancel", x = "ontouchstart" in window, O = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, $ = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, M = "TouchSwipe", j = {
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
        var i = n(this), o = i.data(M);
        if (o && "string" == typeof e) {
            if (o[e]) return o[e].apply(this, Array.prototype.slice.call(arguments, 1));
            n.error("Method " + e + " does not exist on jQuery.swipe");
        } else if (!(o || "object" != typeof e && e)) return t.apply(this, arguments);
        return i;
    }, n.fn.swipe.version = "1.6.9", n.fn.swipe.defaults = j, n.fn.swipe.phases = {
        PHASE_START: T,
        PHASE_MOVE: y,
        PHASE_END: S,
        PHASE_CANCEL: E
    }, n.fn.swipe.directions = {
        LEFT: i,
        RIGHT: o,
        UP: a,
        DOWN: r,
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
}, 250);
//# sourceMappingURL=init-min.js.map
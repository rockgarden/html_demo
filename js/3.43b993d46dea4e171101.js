webpackJsonp([3, 1, 8, 12, 30, 137, 141], [, , function(t, e, n) {
    var i,
        r;
    !function(e, n) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function(o, s) {
        function a(t) {
            var e = t.length,
                n = ut.type(t);
            return "function" !== n && !ut.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        function c(t, e, n) {
            if (ut.isFunction(e))
                return ut.grep(t, function(t, i) {
                    return !!e.call(t, i, t) !== n
                });
            if (e.nodeType)
                return ut.grep(t, function(t) {
                    return t === e !== n
                });
            if ("string" == typeof e) {
                if (vt.test(e))
                    return ut.filter(e, t, n);
                e = ut.filter(e, t)
            }
            return ut.grep(t, function(t) {
                return ut.inArray(t, e) >= 0 !== n
            })
        }
        function u(t, e) {
            do t = t[e];
            while (t && 1 !== t.nodeType);
            return t
        }
        function l(t) {
            var e = Ct[t] = {};
            return ut.each(t.match(Tt) || [], function(t, n) {
                e[n] = !0
            }), e
        }
        function d() {
            wt.addEventListener ? (wt.removeEventListener("DOMContentLoaded", h, !1), o.removeEventListener("load", h, !1)) : (wt.detachEvent("onreadystatechange", h), o.detachEvent("onload", h))
        }
        function h() {
            (wt.addEventListener || "load" === event.type || "complete" === wt.readyState) && (d(), ut.ready())
        }
        function f(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Et, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : $t.test(n) ? ut.parseJSON(n) : n)
                    } catch (r) {}
                    ut.data(t, e, n)
                } else
                    n = void 0
            }
            return n
        }
        function p(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ut.isEmptyObject(t[e])) && "toJSON" !== e)
                    return !1;
            return !0
        }
        function m(t, e, n, i) {
            if (ut.acceptData(t)) {
                var r,
                    o,
                    s = ut.expando,
                    a = t.nodeType,
                    c = a ? ut.cache : t,
                    u = a ? t[s] : t[s] && s;
                if (u && c[u] && (i || c[u].data) || void 0 !== n || "string" != typeof e)
                    return u || (u = a ? t[s] = Q.pop() || ut.guid++ : s), c[u] || (c[u] = a ? {} : {
                        toJSON: ut.noop
                    }), ("object" == typeof e || "function" == typeof e) && (i ? c[u] = ut.extend(c[u], e) : c[u].data = ut.extend(c[u].data, e)), o = c[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ut.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[ut.camelCase(e)])) : r = o, r
            }
        }
        function g(t, e, n) {
            if (ut.acceptData(t)) {
                var i,
                    r,
                    o = t.nodeType,
                    s = o ? ut.cache : t,
                    a = o ? t[ut.expando] : ut.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        ut.isArray(e) ? e = e.concat(ut.map(e, ut.camelCase)) : e in i ? e = [e] : (e = ut.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                        for (; r--;)
                            delete i[e[r]];
                        if (n ? !p(i) : !ut.isEmptyObject(i))
                            return
                    }
                    (n || (delete s[a].data, p(s[a]))) && (o ? ut.cleanData([t], !0) : at.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                }
            }
        }
        function v() {
            return !0
        }
        function y() {
            return !1
        }
        function w() {
            try {
                return wt.activeElement
            } catch (t) {}
        }
        function b(t) {
            var e = Yt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;)
                    n.createElement(e.pop());
            return n
        }
        function _(t, e) {
            var n,
                i,
                r = 0,
                o = typeof t.getElementsByTagName !== Dt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Dt ? t.querySelectorAll(e || "*") : void 0;
            if (!o)
                for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)
                    !e || ut.nodeName(i, e) ? o.push(i) : ut.merge(o, _(i, e));
            return void 0 === e || e && ut.nodeName(t, e) ? ut.merge([t], o) : o
        }
        function x(t) {
            Bt.test(t.type) && (t.defaultChecked = t.checked)
        }
        function k(t, e) {
            return ut.nodeName(t, "table") && ut.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }
        function T(t) {
            return t.type = (null !== ut.find.attr(t, "type")) + "/" + t.type, t
        }
        function C(t) {
            var e = Kt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }
        function M(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++)
                ut._data(n, "globalEval", !e || ut._data(e[i], "globalEval"))
        }
        function S(t, e) {
            if (1 === e.nodeType && ut.hasData(t)) {
                var n,
                    i,
                    r,
                    o = ut._data(t),
                    s = ut._data(e, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; r > i; i++)
                            ut.event.add(e, n, a[n][i])
                }
                s.data && (s.data = ut.extend({}, s.data))
            }
        }
        function D(t, e) {
            var n,
                i,
                r;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !at.noCloneEvent && e[ut.expando]) {
                    r = ut._data(e);
                    for (i in r.events)
                        ut.removeEvent(e, i, r.handle);
                    e.removeAttribute(ut.expando)
                }
                "script" === n && e.text !== t.text ? (T(e).text = t.text, C(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), at.html5Clone && t.innerHTML && !ut.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Bt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }
        function $(t, e) {
            var n,
                i = ut(e.createElement(t)).appendTo(e.body),
                r = o.getDefaultComputedStyle && (n = o.getDefaultComputedStyle(i[0])) ? n.display : ut.css(i[0], "display");
            return i.detach(), r
        }
        function E(t) {
            var e = wt,
                n = re[t];
            return n || (n = $(t, e), "none" !== n && n || (ie = (ie || ut("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (ie[0].contentWindow || ie[0].contentDocument).document, e.write(), e.close(), n = $(t, e), ie.detach()), re[t] = n), n
        }
        function N(t, e) {
            return {
                get: function() {
                    var n = t();
                    if (null != n)
                        return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }
        function A(t, e) {
            if (e in t)
                return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = ve.length; r--;)
                if (e = ve[r] + n, e in t)
                    return e;
            return i
        }
        function j(t, e) {
            for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)
                i = t[s], i.style && (o[s] = ut._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && jt(i) && (o[s] = ut._data(i, "olddisplay", E(i.nodeName)))) : (r = jt(i), (n && "none" !== n || !r) && ut._data(i, "olddisplay", r ? n : ut.css(i, "display"))));
            for (s = 0; a > s; s++)
                i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
            return t
        }
        function O(t, e, n) {
            var i = fe.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }
        function B(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
                "margin" === n && (s += ut.css(t, n + At[o], !0, r)), i ? ("content" === n && (s -= ut.css(t, "padding" + At[o], !0, r)), "margin" !== n && (s -= ut.css(t, "border" + At[o] + "Width", !0, r))) : (s += ut.css(t, "padding" + At[o], !0, r), "padding" !== n && (s += ut.css(t, "border" + At[o] + "Width", !0, r)));
            return s
        }
        function P(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = oe(t),
                s = at.boxSizing && "border-box" === ut.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = se(t, e, o), (0 > r || null == r) && (r = t.style[e]), ce.test(r))
                    return r;
                i = s && (at.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + B(t, e, n || (s ? "border" : "content"), i, o) + "px"
        }
        function I(t, e, n, i, r) {
            return new I.prototype.init(t, e, n, i, r)
        }
        function L() {
            return setTimeout(function() {
                ye = void 0
            }), ye = ut.now()
        }
        function H(t, e) {
            var n,
                i = {
                    height: t
                },
                r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e)
                n = At[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }
        function F(t, e, n) {
            for (var i, r = (Te[e] || []).concat(Te["*"]), o = 0, s = r.length; s > o; o++)
                if (i = r[o].call(n, e, t))
                    return i
        }
        function Y(t, e, n) {
            var i,
                r,
                o,
                s,
                a,
                c,
                u,
                l,
                d = this,
                h = {},
                f = t.style,
                p = t.nodeType && jt(t),
                m = ut._data(t, "fxshow");
            n.queue || (a = ut._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, c = a.empty.fire, a.empty.fire = function() {
                a.unqueued || c()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, ut.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ut.css(t, "display"), l = "none" === u ? ut._data(t, "olddisplay") || E(t.nodeName) : u, "inline" === l && "none" === ut.css(t, "float") && (at.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", at.shrinkWrapBlocks() || d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], be.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        p = !0
                    }
                    h[i] = m && m[i] || ut.style(t, i)
                } else
                    u = void 0;
            if (ut.isEmptyObject(h))
                "inline" === ("none" === u ? E(t.nodeName) : u) && (f.display = u);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = ut._data(t, "fxshow", {}), o && (m.hidden = !p), p ? ut(t).show() : d.done(function() {
                    ut(t).hide()
                }), d.done(function() {
                    var e;
                    ut._removeData(t, "fxshow");
                    for (e in h)
                        ut.style(t, e, h[e])
                });
                for (i in h)
                    s = F(p ? m[i] : 0, i, d), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
        function z(t, e) {
            var n,
                i,
                r,
                o,
                s;
            for (n in t)
                if (i = ut.camelCase(n), r = e[i], o = t[n], ut.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ut.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete t[i];
                    for (n in o)
                        n in t || (t[n] = o[n], e[n] = r)
                } else
                    e[i] = r
        }
        function U(t, e, n) {
            var i,
                r,
                o = 0,
                s = ke.length,
                a = ut.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (r)
                        return !1;
                    for (var e = ye || L(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, c = u.tweens.length; c > s; s++)
                        u.tweens[s].run(o);
                    return a.notifyWith(t, [u, o, n]), 1 > o && c ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: ut.extend({}, e),
                    opts: ut.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ye || L(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ut.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r)
                            return this;
                        for (r = !0; i > n; n++)
                            u.tweens[n].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                l = u.props;
            for (z(l, u.opts.specialEasing); s > o; o++)
                if (i = ke[o].call(u, t, l, u.opts))
                    return i;
            return ut.map(l, F, u), ut.isFunction(u.opts.start) && u.opts.start.call(t, u), ut.fx.timer(ut.extend(c, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        function R(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i,
                    r = 0,
                    o = e.toLowerCase().match(Tt) || [];
                if (ut.isFunction(n))
                    for (; i = o[r++];)
                        "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }
        function q(t, e, n, i) {
            function r(a) {
                var c;
                return o[a] = !0, ut.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || o[u] ? s ? !(c = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                }), c
            }
            var o = {},
                s = t === Xe;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }
        function W(t, e) {
            var n,
                i,
                r = ut.ajaxSettings.flatOptions || {};
            for (i in e)
                void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ut.extend(!0, t, n), t
        }
        function G(t, e, n) {
            for (var i, r, o, s, a = t.contents, c = t.dataTypes; "*" === c[0];)
                c.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
                for (s in a)
                    if (a[s] && a[s].test(r)) {
                        c.unshift(s);
                        break
                    }
            if (c[0] in n)
                o = c[0];
            else {
                for (s in n) {
                    if (!c[0] || t.converters[s + " " + c[0]]) {
                        o = s;
                        break
                    }
                    i || (i = s)
                }
                o = o || i
            }
            return o ? (o !== c[0] && c.unshift(o), n[o]) : void 0
        }
        function X(t, e, n, i) {
            var r,
                o,
                s,
                a,
                c,
                u = {},
                l = t.dataTypes.slice();
            if (l[1])
                for (s in t.converters)
                    u[s.toLowerCase()] = t.converters[s];
            for (o = l.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !c && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = o, o = l.shift())
                    if ("*" === o)
                        o = c;
                    else if ("*" !== c && c !== o) {
                        if (s = u[c + " " + o] || u["* " + o], !s)
                            for (r in u)
                                if (a = r.split(" "), a[1] === o && (s = u[c + " " + a[0]] || u["* " + a[0]])) {
                                    s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], l.unshift(a[1]));
                                    break
                                }
                        if (s !== !0)
                            if (s && t["throws"])
                                e = s(e);
                            else
                                try {
                                    e = s(e)
                                } catch (d) {
                                    return {
                                        state: "parsererror",
                                        error: s ? d : "No conversion from " + c + " to " + o
                                    }
                                }
                    }
            return {
                state: "success",
                data: e
            }
        }
        function V(t, e, n, i) {
            var r;
            if (ut.isArray(e))
                ut.each(e, function(e, r) {
                    n || Ke.test(t) ? i(t, r) : V(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
                });
            else if (n || "object" !== ut.type(e))
                i(t, e);
            else
                for (r in e)
                    V(t + "[" + r + "]", e[r], n, i)
        }
        function Z() {
            try {
                return new o.XMLHttpRequest
            } catch (t) {}
        }
        function J() {
            try {
                return new o.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }
        function K(t) {
            return ut.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var Q = [],
            tt = Q.slice,
            et = Q.concat,
            nt = Q.push,
            it = Q.indexOf,
            rt = {},
            ot = rt.toString,
            st = rt.hasOwnProperty,
            at = {},
            ct = "1.11.1",
            ut = function(t, e) {
                return new ut.fn.init(t, e)
            },
            lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            dt = /^-ms-/,
            ht = /-([\da-z])/gi,
            ft = function(t, e) {
                return e.toUpperCase()
            };
        ut.fn = ut.prototype = {
            jquery: ct,
            constructor: ut,
            selector: "",
            length: 0,
            toArray: function() {
                return tt.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : tt.call(this)
            },
            pushStack: function(t) {
                var e = ut.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return ut.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(ut.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(tt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: nt,
            sort: Q.sort,
            splice: Q.splice
        }, ut.extend = ut.fn.extend = function() {
            var t,
                e,
                n,
                i,
                r,
                o,
                s = arguments[0] || {},
                a = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ut.isFunction(s) || (s = {}), a === c && (s = this, a--); c > a; a++)
                if (null != (r = arguments[a]))
                    for (i in r)
                        t = s[i], n = r[i], s !== n && (u && n && (ut.isPlainObject(n) || (e = ut.isArray(n))) ? (e ? (e = !1, o = t && ut.isArray(t) ? t : []) : o = t && ut.isPlainObject(t) ? t : {}, s[i] = ut.extend(u, o, n)) : void 0 !== n && (s[i] = n));
            return s
        }, ut.extend({
            expando: "jQuery" + (ct + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ut.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === ut.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !ut.isArray(t) && t - parseFloat(t) >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== ut.type(t) || t.nodeType || ut.isWindow(t))
                    return !1;
                try {
                    if (t.constructor && !st.call(t, "constructor") && !st.call(t.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                if (at.ownLast)
                    for (e in t)
                        return st.call(t, e);
                for (e in t)
                    ;
                return void 0 === e || st.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? rt[ot.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                t && ut.trim(t) && (o.execScript || function(t) {
                    o.eval.call(o, t)
                })(t)
            },
            camelCase: function(t) {
                return t.replace(dt, "ms-").replace(ht, ft)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var i,
                    r = 0,
                    o = t.length,
                    s = a(t);
                if (n) {
                    if (s)
                        for (; o > r && (i = e.apply(t[r], n), i !== !1); r++)
                            ;
                    else
                        for (r in t)
                            if (i = e.apply(t[r], n), i === !1)
                                break
                } else if (s)
                    for (; o > r && (i = e.call(t[r], r, t[r]), i !== !1); r++)
                        ;
                else
                    for (r in t)
                        if (i = e.call(t[r], r, t[r]), i === !1)
                            break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(lt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (a(Object(t)) ? ut.merge(n, "string" == typeof t ? [t] : t) : nt.call(n, t)), n
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (it)
                        return it.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t)
                            return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; n > i;)
                    t[r++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];)
                        t[r++] = e[i++];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++)
                    i = !e(t[o], o), i !== a && r.push(t[o]);
                return r
            },
            map: function(t, e, n) {
                var i,
                    r = 0,
                    o = t.length,
                    s = a(t),
                    c = [];
                if (s)
                    for (; o > r; r++)
                        i = e(t[r], r, n), null != i && c.push(i);
                else
                    for (r in t)
                        i = e(t[r], r, n), null != i && c.push(i);
                return et.apply([], c)
            },
            guid: 1,
            proxy: function(t, e) {
                var n,
                    i,
                    r;
                return "string" == typeof e && (r = t[e], e = t, t = r), ut.isFunction(t) ? (n = tt.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(tt.call(arguments)))
                }, i.guid = t.guid = t.guid || ut.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: at
        }), ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            rt["[object " + e + "]"] = e.toLowerCase()
        });
        var pt = function(t) {
            function e(t, e, n, i) {
                var r,
                    o,
                    s,
                    a,
                    c,
                    u,
                    d,
                    f,
                    p,
                    m;
                if ((e ? e.ownerDocument || e : F) !== A && N(e), e = e || A, n = n || [], !t || "string" != typeof t)
                    return n;
                if (1 !== (a = e.nodeType) && 9 !== a)
                    return [];
                if (O && !i) {
                    if (r = yt.exec(t))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(s), !o || !o.parentNode)
                                    return n;
                                if (o.id === s)
                                    return n.push(o), n
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && L(e, o) && o.id === s)
                                return n.push(o), n
                        } else {
                            if (r[2])
                                return Q.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = r[3]) && _.getElementsByClassName && e.getElementsByClassName)
                                return Q.apply(n, e.getElementsByClassName(s)), n
                        }
                    if (_.qsa && (!B || !B.test(t))) {
                        if (f = d = H, p = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = C(t), (d = e.getAttribute("id")) ? f = d.replace(bt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", c = u.length; c--;)
                                u[c] = f + h(u[c]);
                            p = wt.test(t) && l(e.parentNode) || e, m = u.join(",")
                        }
                        if (m)
                            try {
                                return Q.apply(n, p.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                d || e.removeAttribute("id")
                            }
                    }
                }
                return S(t.replace(ct, "$1"), e, n, i)
            }
            function n() {
                function t(n, i) {
                    return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }
            function i(t) {
                return t[H] = !0, t
            }
            function r(t) {
                var e = A.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }
            function o(t, e) {
                for (var n = t.split("|"), i = t.length; i--;)
                    x.attrHandle[n[i]] = e
            }
            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e)
                            return -1;
                return t ? 1 : -1
            }
            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }
            function c(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }
            function u(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--;)
                            n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }
            function l(t) {
                return t && typeof t.getElementsByTagName !== G && t
            }
            function d() {}
            function h(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++)
                    i += t[e].value;
                return i
            }
            function f(t, e, n) {
                var i = e.dir,
                    r = n && "parentNode" === i,
                    o = z++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r)
                            return t(e, n, o)
                } : function(e, n, s) {
                    var a,
                        c,
                        u = [Y, o];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, s))
                                return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) {
                                if (c = e[H] || (e[H] = {}), (a = c[i]) && a[0] === Y && a[1] === o)
                                    return u[2] = a[2];
                                if (c[i] = u, u[2] = t(e, n, s))
                                    return !0
                            }
                }
            }
            function p(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i))
                            return !1;
                    return !0
                } : t[0]
            }
            function m(t, n, i) {
                for (var r = 0, o = n.length; o > r; r++)
                    e(t, n[r], i);
                return i
            }
            function g(t, e, n, i, r) {
                for (var o, s = [], a = 0, c = t.length, u = null != e; c > a; a++)
                    (o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
                return s
            }
            function v(t, e, n, r, o, s) {
                return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, s)), i(function(i, s, a, c) {
                    var u,
                        l,
                        d,
                        h = [],
                        f = [],
                        p = s.length,
                        v = i || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : g(v, h, t, a, c),
                        w = n ? o || (i ? t : p || r) ? [] : s : y;
                    if (n && n(y, w, a, c), r)
                        for (u = g(w, f), r(u, [], a, c), l = u.length; l--;)
                            (d = u[l]) && (w[f[l]] = !(y[f[l]] = d));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (u = [], l = w.length; l--;)
                                    (d = w[l]) && u.push(y[l] = d);
                                o(null, w = [], u, c)
                            }
                            for (l = w.length; l--;)
                                (d = w[l]) && (u = o ? et.call(i, d) : h[l]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else
                        w = g(w === s ? w.splice(p, w.length) : w), o ? o(null, s, w, c) : Q.apply(s, w)
                })
            }
            function y(t) {
                for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, c = f(function(t) {
                        return t === e
                    }, s, !0), u = f(function(t) {
                        return et.call(e, t) > -1
                    }, s, !0), l = [function(t, n, i) {
                        return !o && (i || n !== D) || ((e = n).nodeType ? c(t, n, i) : u(t, n, i))
                    }]; r > a; a++)
                    if (n = x.relative[t[a].type])
                        l = [f(p(l), n)];
                    else {
                        if (n = x.filter[t[a].type].apply(null, t[a].matches), n[H]) {
                            for (i = ++a; r > i && !x.relative[t[i].type]; i++)
                                ;
                            return v(a > 1 && p(l), a > 1 && h(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(ct, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && h(t))
                        }
                        l.push(n)
                    }
                return p(l)
            }
            function w(t, n) {
                var r = n.length > 0,
                    o = t.length > 0,
                    s = function(i, s, a, c, u) {
                        var l,
                            d,
                            h,
                            f = 0,
                            p = "0",
                            m = i && [],
                            v = [],
                            y = D,
                            w = i || o && x.find.TAG("*", u),
                            b = Y += null == y ? 1 : Math.random() || .1,
                            _ = w.length;
                        for (u && (D = s !== A && s); p !== _ && null != (l = w[p]); p++) {
                            if (o && l) {
                                for (d = 0; h = t[d++];)
                                    if (h(l, s, a)) {
                                        c.push(l);
                                        break
                                    }
                                u && (Y = b)
                            }
                            r && ((l = !h && l) && f--, i && m.push(l))
                        }
                        if (f += p, r && p !== f) {
                            for (d = 0; h = n[d++];)
                                h(m, v, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; p--;)
                                        m[p] || v[p] || (v[p] = J.call(c));
                                v = g(v)
                            }
                            Q.apply(c, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(c)
                        }
                        return u && (Y = b, D = y), m
                    };
                return r ? i(s) : s
            }
            var b,
                _,
                x,
                k,
                T,
                C,
                M,
                S,
                D,
                $,
                E,
                N,
                A,
                j,
                O,
                B,
                P,
                I,
                L,
                H = "sizzle" + -new Date,
                F = t.document,
                Y = 0,
                z = 0,
                U = n(),
                R = n(),
                q = n(),
                W = function(t, e) {
                    return t === e && (E = !0), 0
                },
                G = "undefined",
                X = 1 << 31,
                V = {}.hasOwnProperty,
                Z = [],
                J = Z.pop,
                K = Z.push,
                Q = Z.push,
                tt = Z.slice,
                et = Z.indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] === t)
                            return e;
                    return -1
                },
                nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = rt.replace("w", "w#"),
                st = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
                at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                ct = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ut = new RegExp("^" + it + "*," + it + "*"),
                lt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ht = new RegExp(at),
                ft = new RegExp("^" + ot + "$"),
                pt = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + st),
                    PSEUDO: new RegExp("^" + at),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + nt + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                wt = /[+~]/,
                bt = /'|\\/g,
                _t = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                xt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                Q.apply(Z = tt.call(F.childNodes), F.childNodes), Z[F.childNodes.length].nodeType
            } catch (kt) {
                Q = {
                    apply: Z.length ? function(t, e) {
                        K.apply(t, tt.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];)
                            ;
                        t.length = n - 1
                    }
                }
            }
            _ = e.support = {}, T = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, N = e.setDocument = function(t) {
                var e,
                    n = t ? t.ownerDocument || t : F,
                    i = n.defaultView;
                return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, j = n.documentElement, O = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    N()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    N()
                })), _.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), _.getElementsByTagName = r(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), _.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), _.getById = r(function(t) {
                    return j.appendChild(t).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                }), _.getById ? (x.find.ID = function(t, e) {
                    if (typeof e.getElementById !== G && O) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(_t, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var e = t.replace(_t, xt);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== G && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), x.find.TAG = _.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== G ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var n,
                        i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];)
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, x.find.CLASS = _.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== G && O ? e.getElementsByClassName(t) : void 0
                }, P = [], B = [], (_.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && B.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || B.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || B.push(":checked")
                }), r(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && B.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), B.push(",.*:")
                })), (_.matchesSelector = vt.test(I = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(t) {
                    _.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), P.push("!=", at)
                }), B = B.length && new RegExp(B.join("|")), P = P.length && new RegExp(P.join("|")), e = vt.test(j.compareDocumentPosition), L = e || vt.test(j.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t)
                                return !0;
                    return !1
                }, W = e ? function(t, e) {
                    if (t === e)
                        return E = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !_.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && L(F, t) ? -1 : e === n || e.ownerDocument === F && L(F, e) ? 1 : $ ? et.call($, t) - et.call($, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e)
                        return E = !0, 0;
                    var i,
                        r = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        c = [t],
                        u = [e];
                    if (!o || !a)
                        return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : $ ? et.call($, t) - et.call($, e) : 0;
                    if (o === a)
                        return s(t, e);
                    for (i = t; i = i.parentNode;)
                        c.unshift(i);
                    for (i = e; i = i.parentNode;)
                        u.unshift(i);
                    for (; c[r] === u[r];)
                        r++;
                    return r ? s(c[r], u[r]) : c[r] === F ? -1 : u[r] === F ? 1 : 0
                }, n) : A
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== A && N(t), n = n.replace(dt, "='$1']"), !(!_.matchesSelector || !O || P && P.test(n) || B && B.test(n)))
                    try {
                        var i = I.call(t, n);
                        if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return i
                    } catch (r) {}
                return e(n, A, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== A && N(t), L(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== A && N(t);
                var n = x.attrHandle[e.toLowerCase()],
                    i = n && V.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
                return void 0 !== i ? i : _.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e,
                    n = [],
                    i = 0,
                    r = 0;
                if (E = !_.detectDuplicates, $ = !_.sortStable && t.slice(0), t.sort(W), E) {
                    for (; e = t[r++];)
                        e === t[r] && (i = n.push(r));
                    for (; i--;)
                        t.splice(n[i], 1)
                }
                return $ = null, t
            }, k = e.getText = function(t) {
                var e,
                    n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            n += k(t)
                    } else if (3 === r || 4 === r)
                        return t.nodeValue
                } else
                    for (; e = t[i++];)
                        n += k(e);
                return n
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(_t, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e,
                            n = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(_t, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = U[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && U(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== G && t.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(t, n, i) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, c) {
                            var u,
                                l,
                                d,
                                h,
                                f,
                                p,
                                m = o !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !c && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (l = g[H] || (g[H] = {}), u = l[t] || [], f = u[0] === Y && u[1], h = u[0] === Y && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (h = f = 0) || p.pop();)
                                        if (1 === d.nodeType && ++h && d === e) {
                                            l[t] = [Y, f, h];
                                            break
                                        }
                                } else if (y && (u = (e[H] || (e[H] = {}))[t]) && u[0] === Y)
                                    h = u[1];
                                else
                                    for (; (d = ++f && d && d[m] || (h = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[H] || (d[H] = {}))[t] = [Y, h]), d !== e));)
                                        ;
                                return h -= r, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var r,
                            o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[H] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, r = o(t, n), s = r.length; s--;)
                                i = et.call(t, r[s]), t[i] = !(e[i] = r[s])
                        }) : function(t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            r = M(t.replace(ct, "$1"));
                        return r[H] ? i(function(t, e, n, i) {
                            for (var o, s = r(t, null, i, []), a = t.length; a--;)
                                (o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, i, o) {
                            return e[0] = t, r(e, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                    }),
                    lang: i(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_t, xt).toLowerCase(), function(e) {
                            var n;
                            do if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === j
                    },
                    focus: function(t) {
                        return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; e > n; n += 2)
                            t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; e > n; n += 2)
                            t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;)
                            t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;)
                            t.push(i);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                x.pseudos[b] = a(b);
            for (b in {
                submit: !0,
                reset: !0
            })
                x.pseudos[b] = c(b);
            return d.prototype = x.filters = x.pseudos, x.setFilters = new d, C = e.tokenize = function(t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    c,
                    u,
                    l = R[t + " "];
                if (l)
                    return n ? 0 : l.slice(0);
                for (a = t, c = [], u = x.preFilter; a;) {
                    (!i || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), c.push(o = [])), i = !1, (r = lt.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ct, " ")
                    }), a = a.slice(i.length));
                    for (s in x.filter)
                        !(r = pt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(),
                        o.push({
                            value: i,
                            type: s,
                            matches: r
                        }), a = a.slice(i.length));
                    if (!i)
                        break
                }
                return n ? a.length : a ? e.error(t) : R(t, c).slice(0)
            }, M = e.compile = function(t, e) {
                var n,
                    i = [],
                    r = [],
                    o = q[t + " "];
                if (!o) {
                    for (e || (e = C(t)), n = e.length; n--;)
                        o = y(e[n]), o[H] ? i.push(o) : r.push(o);
                    o = q(t, w(r, i)), o.selector = t
                }
                return o
            }, S = e.select = function(t, e, n, i) {
                var r,
                    o,
                    s,
                    a,
                    c,
                    u = "function" == typeof t && t,
                    d = !i && C(t = u.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === e.nodeType && O && x.relative[o[1].type]) {
                        if (e = (x.find.ID(s.matches[0].replace(_t, xt), e) || [])[0], !e)
                            return n;
                        u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                        if ((c = x.find[a]) && (i = c(s.matches[0].replace(_t, xt), wt.test(o[0].type) && l(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = i.length && h(o), !t)
                                return Q.apply(n, i), n;
                            break
                        }
                }
                return (u || M(t, d))(i, e, !O, n, wt.test(t) && l(e.parentNode) || e), n
            }, _.sortStable = H.split("").sort(W).join("") === H, _.detectDuplicates = !!E, N(), _.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(A.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), _.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(nt, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(o);
        ut.find = pt, ut.expr = pt.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = pt.uniqueSort, ut.text = pt.getText, ut.isXMLDoc = pt.isXML, ut.contains = pt.contains;
        var mt = ut.expr.match.needsContext,
            gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            vt = /^.[^:#\[\.,]*$/;
        ut.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ut.find.matchesSelector(i, t) ? [i] : [] : ut.find.matches(t, ut.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ut.fn.extend({
            find: function(t) {
                var e,
                    n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof t)
                    return this.pushStack(ut(t).filter(function() {
                        for (e = 0; r > e; e++)
                            if (ut.contains(i[e], this))
                                return !0
                    }));
                for (e = 0; r > e; e++)
                    ut.find(t, i[e], n);
                return n = this.pushStack(r > 1 ? ut.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(c(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(c(this, t || [], !0))
            },
            is: function(t) {
                return !!c(this, "string" == typeof t && mt.test(t) ? ut(t) : t || [], !1).length
            }
        });
        var yt,
            wt = o.document,
            bt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            _t = ut.fn.init = function(t, e) {
                var n,
                    i;
                if (!t)
                    return this;
                if ("string" == typeof t) {
                    if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : bt.exec(t), !n || !n[1] && e)
                        return !e || e.jquery ? (e || yt).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof ut ? e[0] : e, ut.merge(this, ut.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : wt, !0)), gt.test(n[1]) && ut.isPlainObject(e))
                            for (n in e)
                                ut.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if (i = wt.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2])
                            return yt.find(t);
                        this.length = 1, this[0] = i
                    }
                    return this.context = wt, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ut.isFunction(t) ? "undefined" != typeof yt.ready ? yt.ready(t) : t(ut) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ut.makeArray(t, this))
            };
        _t.prototype = ut.fn, yt = ut(wt);
        var xt = /^(?:parents|prev(?:Until|All))/,
            kt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ut.extend({
            dir: function(t, e, n) {
                for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !ut(r).is(n));)
                    1 === r.nodeType && i.push(r), r = r[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling)
                    1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), ut.fn.extend({
            has: function(t) {
                var e,
                    n = ut(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (ut.contains(this, n[e]))
                            return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, o = [], s = mt.test(t) || "string" != typeof t ? ut(t, e || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ut.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ut.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ut.inArray(this[0], ut(t)) : ut.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ut.unique(ut.merge(this.get(), ut(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ut.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ut.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return ut.dir(t, "parentNode", n)
            },
            next: function(t) {
                return u(t, "nextSibling")
            },
            prev: function(t) {
                return u(t, "previousSibling")
            },
            nextAll: function(t) {
                return ut.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return ut.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return ut.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return ut.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return ut.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ut.sibling(t.firstChild)
            },
            contents: function(t) {
                return ut.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ut.merge([], t.childNodes)
            }
        }, function(t, e) {
            ut.fn[t] = function(n, i) {
                var r = ut.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ut.filter(i, r)), this.length > 1 && (kt[t] || (r = ut.unique(r)), xt.test(t) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var Tt = /\S+/g,
            Ct = {};
        ut.Callbacks = function(t) {
            t = "string" == typeof t ? Ct[t] || l(t) : ut.extend({}, t);
            var e,
                n,
                i,
                r,
                o,
                s,
                a = [],
                c = !t.once && [],
                u = function(l) {
                    for (n = t.memory && l, i = !0, o = s || 0, s = 0, r = a.length, e = !0; a && r > o; o++)
                        if (a[o].apply(l[0], l[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    e = !1, a && (c ? c.length && u(c.shift()) : n ? a = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (a) {
                            var i = a.length;
                            !function o(e) {
                                ut.each(e, function(e, n) {
                                    var i = ut.type(n);
                                    "function" === i ? t.unique && d.has(n) || a.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), e ? r = a.length : n && (s = i, u(n))
                        }
                        return this
                    },
                    remove: function() {
                        return a && ut.each(arguments, function(t, n) {
                            for (var i; (i = ut.inArray(n, a, i)) > -1;)
                                a.splice(i, 1), e && (r >= i && r--, o >= i && o--)
                        }), this
                    },
                    has: function(t) {
                        return t ? ut.inArray(t, a) > -1 : !(!a || !a.length)
                    },
                    empty: function() {
                        return a = [], r = 0, this
                    },
                    disable: function() {
                        return a = c = n = void 0, this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return c = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, n) {
                        return !a || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, ut.extend({
            Deferred: function(t) {
                var e = [["resolve", "done", ut.Callbacks("once memory"), "resolved"], ["reject", "fail", ut.Callbacks("once memory"), "rejected"], ["notify", "progress", ut.Callbacks("memory")]],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ut.Deferred(function(n) {
                                ut.each(e, function(e, o) {
                                    var s = ut.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && ut.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ut.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ut.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e,
                    n,
                    i,
                    r = 0,
                    o = tt.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && ut.isFunction(t.promise) ? s : 0,
                    c = 1 === a ? t : ut.Deferred(),
                    u = function(t, n, i) {
                        return function(r) {
                            n[t] = this, i[t] = arguments.length > 1 ? tt.call(arguments) : r, i === e ? c.notifyWith(n, i) : --a || c.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)
                        o[r] && ut.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(c.reject).progress(u(r, n, e)) : --a;
                return a || c.resolveWith(i, o), c.promise()
            }
        });
        var Mt;
        ut.fn.ready = function(t) {
            return ut.ready.promise().done(t), this
        }, ut.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ut.readyWait++ : ut.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--ut.readyWait : !ut.isReady) {
                    if (!wt.body)
                        return setTimeout(ut.ready);
                    ut.isReady = !0, t !== !0 && --ut.readyWait > 0 || (Mt.resolveWith(wt, [ut]), ut.fn.triggerHandler && (ut(wt).triggerHandler("ready"), ut(wt).off("ready")))
                }
            }
        }), ut.ready.promise = function(t) {
            if (!Mt)
                if (Mt = ut.Deferred(), "complete" === wt.readyState)
                    setTimeout(ut.ready);
                else if (wt.addEventListener)
                    wt.addEventListener("DOMContentLoaded", h, !1), o.addEventListener("load", h, !1);
                else {
                    wt.attachEvent("onreadystatechange", h), o.attachEvent("onload", h);
                    var e = !1;
                    try {
                        e = null == o.frameElement && wt.documentElement
                    } catch (n) {}
                    e && e.doScroll && !function i() {
                        if (!ut.isReady) {
                            try {
                                e.doScroll("left")
                            } catch (t) {
                                return setTimeout(i, 50)
                            }
                            d(), ut.ready()
                        }
                    }()
                }
            return Mt.promise(t)
        };
        var St,
            Dt = "undefined";
        for (St in ut(at))
            break;
        at.ownLast = "0" !== St, at.inlineBlockNeedsLayout = !1, ut(function() {
            var t,
                e,
                n,
                i;
            n = wt.getElementsByTagName("body")[0], n && n.style && (e = wt.createElement("div"), i = wt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Dt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", at.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }), function() {
            var t = wt.createElement("div");
            if (null == at.deleteExpando) {
                at.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    at.deleteExpando = !1
                }
            }
            t = null
        }(), ut.acceptData = function(t) {
            var e = ut.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
        };
        var $t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Et = /([A-Z])/g;
        ut.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ut.cache[t[ut.expando]] : t[ut.expando], !!t && !p(t)
            },
            data: function(t, e, n) {
                return m(t, e, n)
            },
            removeData: function(t, e) {
                return g(t, e)
            },
            _data: function(t, e, n) {
                return m(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return g(t, e, !0)
            }
        }), ut.fn.extend({
            data: function(t, e) {
                var n,
                    i,
                    r,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = ut.data(o), 1 === o.nodeType && !ut._data(o, "parsedAttrs"))) {
                        for (n = s.length; n--;)
                            s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ut.camelCase(i.slice(5)), f(o, i, r[i])));
                        ut._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    ut.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ut.data(this, t, e)
                }) : o ? f(o, t, ut.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    ut.removeData(this, t)
                })
            }
        }), ut.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = ut._data(t, e), n && (!i || ut.isArray(n) ? i = ut._data(t, e, ut.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ut.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = ut._queueHooks(t, e),
                    s = function() {
                        ut.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return ut._data(t, n) || ut._data(t, n, {
                        empty: ut.Callbacks("once memory").add(function() {
                            ut._removeData(t, e + "queue"), ut._removeData(t, n)
                        })
                    })
            }
        }), ut.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ut.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ut.queue(this, t, e);
                    ut._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ut.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ut.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n,
                    i = 1,
                    r = ut.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)
                    n = ut._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            At = ["Top", "Right", "Bottom", "Left"],
            jt = function(t, e) {
                return t = e || t, "none" === ut.css(t, "display") || !ut.contains(t.ownerDocument, t)
            },
            Ot = ut.access = function(t, e, n, i, r, o, s) {
                var a = 0,
                    c = t.length,
                    u = null == n;
                if ("object" === ut.type(n)) {
                    r = !0;
                    for (a in n)
                        ut.access(t, e, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0, ut.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(ut(t), n)
                })), e))
                    for (; c > a; a++)
                        e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : u ? e.call(t) : c ? e(t[0], n) : o
            },
            Bt = /^(?:checkbox|radio)$/i;
        !function() {
            var t = wt.createElement("input"),
                e = wt.createElement("div"),
                n = wt.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", at.leadingWhitespace = 3 === e.firstChild.nodeType, at.tbody = !e.getElementsByTagName("tbody").length, at.htmlSerialize = !!e.getElementsByTagName("link").length, at.html5Clone = "<:nav></:nav>" !== wt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), at.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", at.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", at.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, at.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                at.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == at.deleteExpando) {
                at.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    at.deleteExpando = !1
                }
            }
        }(), function() {
            var t,
                e,
                n = wt.createElement("div");
            for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                e = "on" + t, (at[t + "Bubbles"] = e in o) || (n.setAttribute(e, "t"), at[t + "Bubbles"] = n.attributes[e].expando === !1);
            n = null
        }();
        var Pt = /^(?:input|select|textarea)$/i,
            It = /^key/,
            Lt = /^(?:mouse|pointer|contextmenu)|click/,
            Ht = /^(?:focusinfocus|focusoutblur)$/,
            Ft = /^([^.]*)(?:\.(.+)|)$/;
        ut.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d,
                    h,
                    f,
                    p,
                    m,
                    g = ut._data(t);
                if (g) {
                    for (n.handler && (c = n, n = c.handler, r = c.selector), n.guid || (n.guid = ut.guid++), (s = g.events) || (s = g.events = {}), (l = g.handle) || (l = g.handle = function(t) {
                        return typeof ut === Dt || t && ut.event.triggered === t.type ? void 0 : ut.event.dispatch.apply(l.elem, arguments)
                    }, l.elem = t), e = (e || "").match(Tt) || [""], a = e.length; a--;)
                        o = Ft.exec(e[a]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (u = ut.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = ut.event.special[f] || {}, d = ut.extend({
                            type: f,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && ut.expr.match.needsContext.test(r),
                            namespace: p.join(".")
                        }, c), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, u.setup && u.setup.call(t, i, p, l) !== !1 || (t.addEventListener ? t.addEventListener(f, l, !1) : t.attachEvent && t.attachEvent("on" + f, l))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), ut.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, r) {
                var o,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d,
                    h,
                    f,
                    p,
                    m,
                    g = ut.hasData(t) && ut._data(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(Tt) || [""], u = e.length; u--;)
                        if (a = Ft.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (d = ut.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = o = h.length; o--;)
                                s = h[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                            c && !h.length && (d.teardown && d.teardown.call(t, p, g.handle) !== !1 || ut.removeEvent(t, f, g.handle), delete l[f])
                        } else
                            for (f in l)
                                ut.event.remove(t, f + e[u], n, i, !0);
                    ut.isEmptyObject(l) && (delete g.handle, ut._removeData(t, "events"))
                }
            },
            trigger: function(t, e, n, i) {
                var r,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d,
                    h = [n || wt],
                    f = st.call(t, "type") ? t.type : t,
                    p = st.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = l = n = n || wt, 3 !== n.nodeType && 8 !== n.nodeType && !Ht.test(f + ut.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[ut.expando] ? t : new ut.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : ut.makeArray(e, [t]), u = ut.event.special[f] || {}, i || !u.trigger || u.trigger.apply(n, e) !== !1)) {
                    if (!i && !u.noBubble && !ut.isWindow(n)) {
                        for (c = u.delegateType || f, Ht.test(c + f) || (a = a.parentNode); a; a = a.parentNode)
                            h.push(a), l = a;
                        l === (n.ownerDocument || wt) && h.push(l.defaultView || l.parentWindow || o)
                    }
                    for (d = 0; (a = h[d++]) && !t.isPropagationStopped();)
                        t.type = d > 1 ? c : u.bindType || f, r = (ut._data(a, "events") || {})[t.type] && ut._data(a, "handle"), r && r.apply(a, e), r = s && a[s], r && r.apply && ut.acceptData(a) && (t.result = r.apply(a, e), t.result === !1 && t.preventDefault());
                    if (t.type = f, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), e) === !1) && ut.acceptData(n) && s && n[f] && !ut.isWindow(n)) {
                        l = n[s], l && (n[s] = null), ut.event.triggered = f;
                        try {
                            n[f]()
                        } catch (m) {}
                        ut.event.triggered = void 0, l && (n[s] = l)
                    }
                    return t.result
                }
            },
            dispatch: function(t) {
                t = ut.event.fix(t);
                var e,
                    n,
                    i,
                    r,
                    o,
                    s = [],
                    a = tt.call(arguments),
                    c = (ut._data(this, "events") || {})[t.type] || [],
                    u = ut.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (s = ut.event.handlers.call(this, t, c), e = 0; (r = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !t.isImmediatePropagationStopped();)
                            (!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n,
                    i,
                    r,
                    o,
                    s = [],
                    a = e.delegateCount,
                    c = t.target;
                if (a && c.nodeType && (!t.button || "click" !== t.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== t.type)) {
                            for (r = [], o = 0; a > o; o++)
                                i = e[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? ut(n, this).index(c) >= 0 : ut.find(n, this, null, [c]).length), r[n] && r.push(i);
                            r.length && s.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            fix: function(t) {
                if (t[ut.expando])
                    return t;
                var e,
                    n,
                    i,
                    r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Lt.test(r) ? this.mouseHooks : It.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ut.Event(o), e = i.length; e--;)
                    n = i[e], t[n] = o[n];
                return t.target || (t.target = o.srcElement || wt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n,
                        i,
                        r,
                        o = e.button,
                        s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || wt, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== w() && this.focus)
                            try {
                                return this.focus(), !1
                            } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === w() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return ut.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var r = ut.extend(new ut.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ut.event.trigger(r, null, e) : ut.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ut.removeEvent = wt.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Dt && (t[i] = null), t.detachEvent(i, n))
        }, ut.Event = function(t, e) {
            return this instanceof ut.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? v : y) : this.type = t, e && ut.extend(this, e), this.timeStamp = t && t.timeStamp || ut.now(), void (this[ut.expando] = !0)) : new ut.Event(t, e)
        }, ut.Event.prototype = {
            isDefaultPrevented: y,
            isPropagationStopped: y,
            isImmediatePropagationStopped: y,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = v, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = v, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = v, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ut.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ut.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n,
                        i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return (!r || r !== i && !ut.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), at.submitBubbles || (ut.event.special.submit = {
            setup: function() {
                return !ut.nodeName(this, "form") && void ut.event.add(this, "click._submit keypress._submit", function(t) {
                        var e = t.target,
                            n = ut.nodeName(e, "input") || ut.nodeName(e, "button") ? e.form : void 0;
                        n && !ut._data(n, "submitBubbles") && (ut.event.add(n, "submit._submit", function(t) {
                            t._submit_bubble = !0
                        }), ut._data(n, "submitBubbles", !0))
                    })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ut.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return !ut.nodeName(this, "form") && void ut.event.remove(this, "._submit")
            }
        }), at.changeBubbles || (ut.event.special.change = {
            setup: function() {
                return Pt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ut.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, t, !0)
                })), !1) : void ut.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Pt.test(e.nodeName) && !ut._data(e, "changeBubbles") && (ut.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ut.event.simulate("change", this.parentNode, t, !0)
                    }), ut._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ut.event.remove(this, "._change"), !Pt.test(this.nodeName)
            }
        }), at.focusinBubbles || ut.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                ut.event.simulate(e, t.target, ut.event.fix(t), !0)
            };
            ut.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = ut._data(i, e);
                    r || i.addEventListener(t, n, !0), ut._data(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = ut._data(i, e) - 1;
                    r ? ut._data(i, e, r) : (i.removeEventListener(t, n, !0), ut._removeData(i, e))
                }
            }
        }), ut.fn.extend({
            on: function(t, e, n, i, r) {
                var o,
                    s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (o in t)
                        this.on(o, e, n, t[o], r);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)
                    i = y;
                else if (!i)
                    return this;
                return 1 === r && (s = i, i = function(t) {
                    return ut().off(t), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function() {
                    ut.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i,
                    r;
                if (t && t.preventDefault && t.handleObj)
                    return i = t.handleObj, ut(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t)
                        this.off(r, e, t[r]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = y), this.each(function() {
                    ut.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    ut.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? ut.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Yt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            zt = / jQuery\d+="(?:null|\d+)"/g,
            Ut = new RegExp("<(?:" + Yt + ")[\\s/>]", "i"),
            Rt = /^\s+/,
            qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Wt = /<([\w:]+)/,
            Gt = /<tbody/i,
            Xt = /<|&#?\w+;/,
            Vt = /<(?:script|style|link)/i,
            Zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Jt = /^$|\/(?:java|ecma)script/i,
            Kt = /^true\/(.*)/,
            Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            te = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: at.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ee = b(wt),
            ne = ee.appendChild(wt.createElement("div"));
        te.optgroup = te.option, te.tbody = te.tfoot = te.colgroup = te.caption = te.thead, te.th = te.td, ut.extend({
            clone: function(t, e, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    c = ut.contains(t.ownerDocument, t);
                if (at.html5Clone || ut.isXMLDoc(t) || !Ut.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ne.innerHTML = t.outerHTML, ne.removeChild(o = ne.firstChild)), !(at.noCloneEvent && at.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ut.isXMLDoc(t)))
                    for (i = _(o), a = _(t), s = 0; null != (r = a[s]); ++s)
                        i[s] && D(r, i[s]);
                if (e)
                    if (n)
                        for (a = a || _(t), i = i || _(o), s = 0; null != (r = a[s]); s++)
                            S(r, i[s]);
                    else
                        S(t, o);
                return i = _(o, "script"), i.length > 0 && M(i, !c && _(t, "script")), i = a = r = null, o
            },
            buildFragment: function(t, e, n, i) {
                for (var r, o, s, a, c, u, l, d = t.length, h = b(e), f = [], p = 0; d > p; p++)
                    if (o = t[p], o || 0 === o)
                        if ("object" === ut.type(o))
                            ut.merge(f, o.nodeType ? [o] : o);
                        else if (Xt.test(o)) {
                            for (a = a || h.appendChild(e.createElement("div")), c = (Wt.exec(o) || ["", ""])[1].toLowerCase(), l = te[c] || te._default, a.innerHTML = l[1] + o.replace(qt, "<$1></$2>") + l[2], r = l[0]; r--;)
                                a = a.lastChild;
                            if (!at.leadingWhitespace && Rt.test(o) && f.push(e.createTextNode(Rt.exec(o)[0])), !at.tbody)
                                for (o = "table" !== c || Gt.test(o) ? "<table>" !== l[1] || Gt.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;)
                                    ut.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                            for (ut.merge(f, a.childNodes), a.textContent = ""; a.firstChild;)
                                a.removeChild(a.firstChild);
                            a = h.lastChild
                        } else
                            f.push(e.createTextNode(o));
                for (a && h.removeChild(a), at.appendChecked || ut.grep(_(f, "input"), x), p = 0; o = f[p++];)
                    if ((!i || -1 === ut.inArray(o, i)) && (s = ut.contains(o.ownerDocument, o), a = _(h.appendChild(o), "script"), s && M(a), n))
                        for (r = 0; o = a[r++];)
                            Jt.test(o.type || "") && n.push(o);
                return a = null, h
            },
            cleanData: function(t, e) {
                for (var n, i, r, o, s = 0, a = ut.expando, c = ut.cache, u = at.deleteExpando, l = ut.event.special; null != (n = t[s]); s++)
                    if ((e || ut.acceptData(n)) && (r = n[a], o = r && c[r])) {
                        if (o.events)
                            for (i in o.events)
                                l[i] ? ut.event.remove(n, i) : ut.removeEvent(n, i, o.handle);
                        c[r] && (delete c[r], u ? delete n[a] : typeof n.removeAttribute !== Dt ? n.removeAttribute(a) : n[a] = null, Q.push(r))
                    }
            }
        }), ut.fn.extend({
            text: function(t) {
                return Ot(this, function(t) {
                    return void 0 === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || wt).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = k(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = k(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? ut.filter(t, this) : this, r = 0; null != (n = i[r]); r++)
                    e || 1 !== n.nodeType || ut.cleanData(_(n)), n.parentNode && (e && ut.contains(n.ownerDocument, n) && M(_(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ut.cleanData(_(t, !1)); t.firstChild;)
                        t.removeChild(t.firstChild);
                    t.options && ut.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ut.clone(this, t, e)
                })
            },
            html: function(t) {
                return Ot(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t)
                        return 1 === e.nodeType ? e.innerHTML.replace(zt, "") : void 0;
                    if (!("string" != typeof t || Vt.test(t) || !at.htmlSerialize && Ut.test(t) || !at.leadingWhitespace && Rt.test(t) || te[(Wt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(qt, "<$1></$2>");
                        try {
                            for (; i > n; n++)
                                e = this[n] || {}, 1 === e.nodeType && (ut.cleanData(_(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, ut.cleanData(_(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = et.apply([], t);
                var n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    c = 0,
                    u = this.length,
                    l = this,
                    d = u - 1,
                    h = t[0],
                    f = ut.isFunction(h);
                if (f || u > 1 && "string" == typeof h && !at.checkClone && Zt.test(h))
                    return this.each(function(n) {
                        var i = l.eq(n);
                        f && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
                    });
                if (u && (a = ut.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                    for (o = ut.map(_(a, "script"), T), r = o.length; u > c; c++)
                        i = a, c !== d && (i = ut.clone(i, !0, !0), r && ut.merge(o, _(i, "script"))), e.call(this[c], i, c);
                    if (r)
                        for (s = o[o.length - 1].ownerDocument, ut.map(o, C), c = 0; r > c; c++)
                            i = o[c], Jt.test(i.type || "") && !ut._data(i, "globalEval") && ut.contains(s, i) && (i.src ? ut._evalUrl && ut._evalUrl(i.src) : ut.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qt, "")));
                    a = n = null
                }
                return this
            }
        }), ut.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ut.fn[t] = function(t) {
                for (var n, i = 0, r = [], o = ut(t), s = o.length - 1; s >= i; i++)
                    n = i === s ? this : this.clone(!0), ut(o[i])[e](n), nt.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ie,
            re = {};
        !function() {
            var t;
            at.shrinkWrapBlocks = function() {
                if (null != t)
                    return t;
                t = !1;
                var e,
                    n,
                    i;
                return n = wt.getElementsByTagName("body")[0], n && n.style ? (e = wt.createElement("div"), i = wt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Dt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(wt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var oe,
            se,
            ae = /^margin/,
            ce = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
            ue = /^(top|right|bottom|left)$/;
        o.getComputedStyle ? (oe = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, se = function(t, e, n) {
            var i,
                r,
                o,
                s,
                a = t.style;
            return n = n || oe(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || ut.contains(t.ownerDocument, t) || (s = ut.style(t, e)), ce.test(s) && ae.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width,
            a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
        }) : wt.documentElement.currentStyle && (oe = function(t) {
            return t.currentStyle
        }, se = function(t, e, n) {
            var i,
                r,
                o,
                s,
                a = t.style;
            return n = n || oe(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), ce.test(s) && !ue.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
        }), !function() {
            function t() {
                var t,
                    e,
                    n,
                    i;
                e = wt.getElementsByTagName("body")[0], e && e.style && (t = wt.createElement("div"), n = wt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, c = !0, o.getComputedStyle && (r = "1%" !== (o.getComputedStyle(t, null) || {}).top, s = "4px" === (o.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, i = t.appendChild(wt.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", c = !parseFloat((o.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === i[0].offsetHeight, a && (i[0].style.display = "", i[1].style.display = "none", a = 0 === i[0].offsetHeight), e.removeChild(n))
            }
            var e,
                n,
                i,
                r,
                s,
                a,
                c;
            e = wt.createElement("div"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], (n = i && i.style) && (n.cssText = "float:left;opacity:.5", at.opacity = "0.5" === n.opacity, at.cssFloat = !!n.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", at.clearCloneStyle = "content-box" === e.style.backgroundClip, at.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, ut.extend(at, {
                reliableHiddenOffsets: function() {
                    return null == a && t(), a
                },
                boxSizingReliable: function() {
                    return null == s && t(), s
                },
                pixelPosition: function() {
                    return null == r && t(), r
                },
                reliableMarginRight: function() {
                    return null == c && t(), c
                }
            }))
        }(), ut.swap = function(t, e, n, i) {
            var r,
                o,
                s = {};
            for (o in e)
                s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e)
                t.style[o] = s[o];
            return r
        };
        var le = /alpha\([^)]*\)/i,
            de = /opacity\s*=\s*([^)]*)/,
            he = /^(none|table(?!-c[ea]).+)/,
            fe = new RegExp("^(" + Nt + ")(.*)$", "i"),
            pe = new RegExp("^([+-])=(" + Nt + ")", "i"),
            me = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ge = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ve = ["Webkit", "O", "Moz", "ms"];
        ut.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = se(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": at.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r,
                        o,
                        s,
                        a = ut.camelCase(e),
                        c = t.style;
                    if (e = ut.cssProps[a] || (ut.cssProps[a] = A(c, a)), s = ut.cssHooks[e] || ut.cssHooks[a], void 0 === n)
                        return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                    if (o = typeof n, "string" === o && (r = pe.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ut.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || ut.cssNumber[a] || (n += "px"), at.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i)))))
                        try {
                            c[e] = n
                        } catch (u) {}
                }
            },
            css: function(t, e, n, i) {
                var r,
                    o,
                    s,
                    a = ut.camelCase(e);
                return e = ut.cssProps[a] || (ut.cssProps[a] = A(t.style, a)), s = ut.cssHooks[e] || ut.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = se(t, e, i)), "normal" === o && e in ge && (o = ge[e]), "" === n || n ? (r = parseFloat(o), n === !0 || ut.isNumeric(r) ? r || 0 : o) : o
            }
        }), ut.each(["height", "width"], function(t, e) {
            ut.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? he.test(ut.css(t, "display")) && 0 === t.offsetWidth ? ut.swap(t, me, function() {
                        return P(t, e, i)
                    }) : P(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var r = i && oe(t);
                    return O(t, n, i ? B(t, e, i, at.boxSizing && "border-box" === ut.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), at.opacity || (ut.cssHooks.opacity = {
            get: function(t, e) {
                return de.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    r = ut.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ut.trim(o.replace(le, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = le.test(o) ? o.replace(le, r) : o + " " + r)
            }
        }), ut.cssHooks.marginRight = N(at.reliableMarginRight, function(t, e) {
            return e ? ut.swap(t, {
                display: "inline-block"
            }, se, [t, "marginRight"]) : void 0
        }), ut.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ut.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                        r[t + At[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, ae.test(t) || (ut.cssHooks[t + e].set = O)
        }), ut.fn.extend({
            css: function(t, e) {
                return Ot(this, function(t, e, n) {
                    var i,
                        r,
                        o = {},
                        s = 0;
                    if (ut.isArray(e)) {
                        for (i = oe(t), r = e.length; r > s; s++)
                            o[e[s]] = ut.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? ut.style(t, e, n) : ut.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return j(this, !0)
            },
            hide: function() {
                return j(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    jt(this) ? ut(this).show() : ut(this).hide()
                })
            }
        }), ut.Tween = I, I.prototype = {
            constructor: I,
            init: function(t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ut.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = I.propHooks[this.prop];
                return t && t.get ? t.get(this) : I.propHooks._default.get(this)
            },
            run: function(t) {
                var e,
                    n = I.propHooks[this.prop];
                return this.pos = e = this.options.duration ? ut.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
            }
        }, I.prototype.init.prototype = I.prototype, I.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ut.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    ut.fx.step[t.prop] ? ut.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ut.cssProps[t.prop]] || ut.cssHooks[t.prop]) ? ut.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ut.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ut.fx = I.prototype.init, ut.fx.step = {};
        var ye,
            we,
            be = /^(?:toggle|show|hide)$/,
            _e = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
            xe = /queueHooks$/,
            ke = [Y],
            Te = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        r = _e.exec(e),
                        o = r && r[3] || (ut.cssNumber[t] ? "" : "px"),
                        s = (ut.cssNumber[t] || "px" !== o && +i) && _e.exec(ut.css(n.elem, t)),
                        a = 1,
                        c = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +i || 1;
                        do a = a || ".5", s /= a, ut.style(n.elem, t, s + o);
                        while (a !== (a = n.cur() / i) && 1 !== a && --c)
                    }
                    return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        ut.Animation = ut.extend(U, {
            tweener: function(t, e) {
                ut.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++)
                    n = t[i], Te[n] = Te[n] || [], Te[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ke.unshift(t) : ke.push(t)
            }
        }), ut.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ut.extend({}, t) : {
                complete: n || !n && e || ut.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ut.isFunction(e) && e
            };
            return i.duration = ut.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ut.fx.speeds ? ut.fx.speeds[i.duration] : ut.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ut.isFunction(i.old) && i.old.call(this), i.queue && ut.dequeue(this, i.queue)
            }, i
        }, ut.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(jt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = ut.isEmptyObject(t),
                    o = ut.speed(e, n, i),
                    s = function() {
                        var e = U(this, ut.extend({}, t), o);
                        (r || ut._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = ut.timers,
                        s = ut._data(this);
                    if (r)
                        s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s)
                            s[r] && s[r].stop && xe.test(r) && i(s[r]);
                    for (r = o.length; r--;)
                        o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && ut.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e,
                        n = ut._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = ut.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ut.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)
                        o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++)
                        i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ut.each(["toggle", "show", "hide"], function(t, e) {
            var n = ut.fn[e];
            ut.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, r)
            }
        }), ut.each({
            slideDown: H("show"),
            slideUp: H("hide"),
            slideToggle: H("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ut.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ut.timers = [], ut.fx.tick = function() {
            var t,
                e = ut.timers,
                n = 0;
            for (ye = ut.now(); n < e.length; n++)
                t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || ut.fx.stop(), ye = void 0
        }, ut.fx.timer = function(t) {
            ut.timers.push(t), t() ? ut.fx.start() : ut.timers.pop()
        }, ut.fx.interval = 13, ut.fx.start = function() {
            we || (we = setInterval(ut.fx.tick, ut.fx.interval))
        }, ut.fx.stop = function() {
            clearInterval(we), we = null
        }, ut.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ut.fn.delay = function(t, e) {
            return t = ut.fx ? ut.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        }, function() {
            var t,
                e,
                n,
                i,
                r;
            e = wt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = wt.createElement("select"), r = n.appendChild(wt.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", at.getSetAttribute = "t" !== e.className, at.style = /top/.test(i.getAttribute("style")), at.hrefNormalized = "/a" === i.getAttribute("href"), at.checkOn = !!t.value, at.optSelected = r.selected, at.enctype = !!wt.createElement("form").enctype, n.disabled = !0, at.optDisabled = !r.disabled, t = wt.createElement("input"), t.setAttribute("value", ""), at.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), at.radioValue = "t" === t.value
        }();
        var Ce = /\r/g;
        ut.fn.extend({
            val: function(t) {
                var e,
                    n,
                    i,
                    r = this[0];
                return arguments.length ? (i = ut.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, ut(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ut.isArray(r) && (r = ut.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = ut.valHooks[r.type] || ut.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ce, "") : null == n ? "" : n)) : void 0
            }
        }), ut.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ut.find.attr(t, "value");
                        return null != e ? e : ut.trim(ut.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, c = 0 > r ? a : o ? r : 0; a > c; c++)
                            if (n = i[c], !(!n.selected && c !== r || (at.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ut(n).val(), o)
                                    return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = ut.makeArray(e), s = r.length; s--;)
                            if (i = r[s], ut.inArray(ut.valHooks.option.get(i), o) >= 0)
                                try {
                                    i.selected = n = !0
                                } catch (a) {
                                    i.scrollHeight
                                }
                            else
                                i.selected = !1;
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), ut.each(["radio", "checkbox"], function() {
            ut.valHooks[this] = {
                set: function(t, e) {
                    return ut.isArray(e) ? t.checked = ut.inArray(ut(t).val(), e) >= 0 : void 0
                }
            }, at.checkOn || (ut.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Me,
            Se,
            De = ut.expr.attrHandle,
            $e = /^(?:checked|selected)$/i,
            Ee = at.getSetAttribute,
            Ne = at.input;
        ut.fn.extend({
            attr: function(t, e) {
                return Ot(this, ut.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ut.removeAttr(this, t)
                })
            }
        }), ut.extend({
            attr: function(t, e, n) {
                var i,
                    r,
                    o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o)
                    return typeof t.getAttribute === Dt ? ut.prop(t, e, n) : (1 === o && ut.isXMLDoc(t) || (e = e.toLowerCase(), i = ut.attrHooks[e] || (ut.expr.match.bool.test(e) ? Se : Me)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = ut.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void ut.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n,
                    i,
                    r = 0,
                    o = e && e.match(Tt);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++];)
                        i = ut.propFix[n] || n, ut.expr.match.bool.test(n) ? Ne && Ee || !$e.test(n) ? t[i] = !1 : t[ut.camelCase("default-" + n)] = t[i] = !1 : ut.attr(t, n, ""), t.removeAttribute(Ee ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!at.radioValue && "radio" === e && ut.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), Se = {
            set: function(t, e, n) {
                return e === !1 ? ut.removeAttr(t, n) : Ne && Ee || !$e.test(n) ? t.setAttribute(!Ee && ut.propFix[n] || n, n) : t[ut.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ut.each(ut.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = De[e] || ut.find.attr;
            De[e] = Ne && Ee || !$e.test(e) ? function(t, e, i) {
                var r,
                    o;
                return i || (o = De[e], De[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, De[e] = o), r
            } : function(t, e, n) {
                return n ? void 0 : t[ut.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Ne && Ee || (ut.attrHooks.value = {
            set: function(t, e, n) {
                return ut.nodeName(t, "input") ? void (t.defaultValue = e) : Me && Me.set(t, e, n)
            }
        }), Ee || (Me = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, De.id = De.name = De.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, ut.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: Me.set
        }, ut.attrHooks.contenteditable = {
            set: function(t, e, n) {
                Me.set(t, "" !== e && e, n)
            }
        }, ut.each(["width", "height"], function(t, e) {
            ut.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), at.style || (ut.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Ae = /^(?:input|select|textarea|button|object)$/i,
            je = /^(?:a|area)$/i;
        ut.fn.extend({
            prop: function(t, e) {
                return Ot(this, ut.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = ut.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), ut.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var i,
                    r,
                    o,
                    s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s)
                    return o = 1 !== s || !ut.isXMLDoc(t), o && (e = ut.propFix[e] || e, r = ut.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ut.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ae.test(t.nodeName) || je.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), at.hrefNormalized || ut.each(["href", "src"], function(t, e) {
            ut.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), at.optSelected || (ut.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ut.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ut.propFix[this.toLowerCase()] = this
        }), at.enctype || (ut.propFix.enctype = "encoding");
        var Oe = /[\t\r\n\f]/g;
        ut.fn.extend({
            addClass: function(t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a = 0,
                    c = this.length,
                    u = "string" == typeof t && t;
                if (ut.isFunction(t))
                    return this.each(function(e) {
                        ut(this).addClass(t.call(this, e, this.className))
                    });
                if (u)
                    for (e = (t || "").match(Tt) || []; c > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Oe, " ") : " ")) {
                            for (o = 0; r = e[o++];)
                                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = ut.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a = 0,
                    c = this.length,
                    u = 0 === arguments.length || "string" == typeof t && t;
                if (ut.isFunction(t))
                    return this.each(function(e) {
                        ut(this).removeClass(t.call(this, e, this.className))
                    });
                if (u)
                    for (e = (t || "").match(Tt) || []; c > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Oe, " ") : "")) {
                            for (o = 0; r = e[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;)
                                    i = i.replace(" " + r + " ", " ");
                            s = t ? ut.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(ut.isFunction(t) ? function(n) {
                    ut(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function() {
                    if ("string" === n)
                        for (var e, i = 0, r = ut(this), o = t.match(Tt) || []; e = o[i++];)
                            r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else
                        (n === Dt || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ut._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Oe, " ").indexOf(e) >= 0)
                        return !0;
                return !1
            }
        }), ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ut.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ut.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Be = ut.now(),
            Pe = /\?/,
            Ie = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ut.parseJSON = function(t) {
            if (o.JSON && o.JSON.parse)
                return o.JSON.parse(t + "");
            var e,
                n = null,
                i = ut.trim(t + "");
            return i && !ut.trim(i.replace(Ie, function(t, i, r, o) {
                return e && i && (n = 0), 0 === n ? t : (e = r || i, n += !o - !r, "")
            })) ? Function("return " + i)() : ut.error("Invalid JSON: " + t)
        }, ut.parseXML = function(t) {
            var e,
                n;
            if (!t || "string" != typeof t)
                return null;
            try {
                o.DOMParser ? (n = new DOMParser, e = n.parseFromString(t, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t))
            } catch (i) {
                e = void 0
            }
            return e && e.documentElement && !e.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + t), e
        };
        var Le,
            He,
            Fe = /#.*$/,
            Ye = /([?&])_=[^&]*/,
            ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ue = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Re = /^(?:GET|HEAD)$/,
            qe = /^\/\//,
            We = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ge = {},
            Xe = {},
            Ve = "*/".concat("*");
        try {
            He = location.href
        } catch (Ze) {
            He = wt.createElement("a"), He.href = "", He = He.href
        }
        Le = We.exec(He.toLowerCase()) || [], ut.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: He,
                type: "GET",
                isLocal: Ue.test(Le[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ve,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ut.parseJSON,
                    "text xml": ut.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? W(W(t, ut.ajaxSettings), e) : W(ut.ajaxSettings, t)
            },
            ajaxPrefilter: R(Ge),
            ajaxTransport: R(Xe),
            ajax: function(t, e) {
                function n(t, e, n, i) {
                    var r,
                        l,
                        v,
                        y,
                        b,
                        x = e;
                    2 !== w && (w = 2, a && clearTimeout(a), u = void 0, s = i || "", _.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = G(d, _, n)), y = X(d, y, _, r), r ? (d.ifModified && (b = _.getResponseHeader("Last-Modified"), b && (ut.lastModified[o] = b), b = _.getResponseHeader("etag"), b && (ut.etag[o] = b)), 204 === t || "HEAD" === d.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, l = y.data, v = y.error, r = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (e || x) + "", r ? p.resolveWith(h, [l, x, _]) : p.rejectWith(h, [_, x, v]), _.statusCode(g), g = void 0, c && f.trigger(r ? "ajaxSuccess" : "ajaxError", [_, d, r ? l : v]), m.fireWith(h, [_, x]), c && (f.trigger("ajaxComplete", [_, d]), --ut.active || ut.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i,
                    r,
                    o,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d = ut.ajaxSetup({}, e),
                    h = d.context || d,
                    f = d.context && (h.nodeType || h.jquery) ? ut(h) : ut.event,
                    p = ut.Deferred(),
                    m = ut.Callbacks("once memory"),
                    g = d.statusCode || {},
                    v = {},
                    y = {},
                    w = 0,
                    b = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!l)
                                    for (l = {}; e = ze.exec(s);)
                                        l[e[1].toLowerCase()] = e[2];
                                e = l[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return w || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t)
                                        g[e] = [g[e], t[e]];
                                else
                                    _.always(t[_.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || b;
                            return u && u.abort(e), n(0, e), this
                        }
                    };
                if (p.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((t || d.url || He) + "").replace(Fe, "").replace(qe, Le[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = ut.trim(d.dataType || "*").toLowerCase().match(Tt) || [""], null == d.crossDomain && (i = We.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Le[1] && i[2] === Le[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Le[3] || ("http:" === Le[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ut.param(d.data, d.traditional)), q(Ge, d, e, _), 2 === w)
                    return _;
                c = d.global, c && 0 === ut.active++ && ut.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Re.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Pe.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ye.test(o) ? o.replace(Ye, "$1_=" + Be++) : o + (Pe.test(o) ? "&" : "?") + "_=" + Be++)), d.ifModified && (ut.lastModified[o] && _.setRequestHeader("If-Modified-Since", ut.lastModified[o]), ut.etag[o] && _.setRequestHeader("If-None-Match", ut.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ve + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers)
                    _.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(h, _, d) === !1 || 2 === w))
                    return _.abort();
                b = "abort";
                for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    _[r](d[r]);
                if (u = q(Xe, d, e, _)) {
                    _.readyState = 1, c && f.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                        _.abort("timeout")
                    }, d.timeout));
                    try {
                        w = 1, u.send(v, n)
                    } catch (x) {
                        if (!(2 > w))
                            throw x;
                        n(-1, x)
                    }
                } else
                    n(-1, "No Transport");
                return _
            },
            getJSON: function(t, e, n) {
                return ut.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return ut.get(t, void 0, e, "script")
            }
        }), ut.each(["get", "post"], function(t, e) {
            ut[e] = function(t, n, i, r) {
                return ut.isFunction(n) && (r = r || i, i = n, n = void 0), ut.ajax({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ut.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ut._evalUrl = function(t) {
            return ut.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ut.fn.extend({
            wrapAll: function(t) {
                if (ut.isFunction(t))
                    return this.each(function(e) {
                        ut(this).wrapAll(t.call(this, e))
                    });
                if (this[0]) {
                    var e = ut(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)
                            t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(ut.isFunction(t) ? function(e) {
                    ut(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = ut(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ut.isFunction(t);
                return this.each(function(n) {
                    ut(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ut.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !at.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ut.css(t, "display"))
        }, ut.expr.filters.visible = function(t) {
            return !ut.expr.filters.hidden(t)
        };
        var Je = /%20/g,
            Ke = /\[\]$/,
            Qe = /\r?\n/g,
            tn = /^(?:submit|button|image|reset|file)$/i,
            en = /^(?:input|select|textarea|keygen)/i;
        ut.param = function(t, e) {
            var n,
                i = [],
                r = function(t, e) {
                    e = ut.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(t) || t.jquery && !ut.isPlainObject(t))
                ut.each(t, function() {
                    r(this.name, this.value)
                });
            else
                for (n in t)
                    V(n, t[n], e, r);
            return i.join("&").replace(Je, "+")
        }, ut.fn.extend({
            serialize: function() {
                return ut.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ut.prop(this, "elements");
                    return t ? ut.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ut(this).is(":disabled") && en.test(this.nodeName) && !tn.test(t) && (this.checked || !Bt.test(t))
                }).map(function(t, e) {
                    var n = ut(this).val();
                    return null == n ? null : ut.isArray(n) ? ut.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Qe, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Qe, "\r\n")
                    }
                }).get()
            }
        }), ut.ajaxSettings.xhr = void 0 !== o.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || J()
        } : Z;
        var nn = 0,
            rn = {},
            on = ut.ajaxSettings.xhr();
        o.ActiveXObject && ut(o).on("unload", function() {
            for (var t in rn)
                rn[t](void 0, !0)
        }), at.cors = !!on && "withCredentials" in on, on = at.ajax = !!on, on && ut.ajaxTransport(function(t) {
            if (!t.crossDomain || at.cors) {
                var e;
                return {
                    send: function(n, i) {
                        var r,
                            o = t.xhr(),
                            s = ++nn;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (r in t.xhrFields)
                                o[r] = t.xhrFields[r];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n)
                            void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(t.hasContent && t.data || null), e = function(n, r) {
                            var a,
                                c,
                                u;
                            if (e && (r || 4 === o.readyState))
                                if (delete rn[s], e = void 0, o.onreadystatechange = ut.noop, r)
                                    4 !== o.readyState && o.abort();
                                else {
                                    u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                    try {
                                        c = o.statusText
                                    } catch (l) {
                                        c = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                }
                            u && i(a, c, u, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = rn[s] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            }
        }), ut.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return ut.globalEval(t), t
                }
            }
        }), ut.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ut.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e,
                    n = wt.head || ut("head")[0] || wt.documentElement;
                return {
                    send: function(i, r) {
                        e = wt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var sn = [],
            an = /(=)\?(?=&|$)|\?\?/;
        ut.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = sn.pop() || ut.expando + "_" + Be++;
                return this[t] = !0, t
            }
        }), ut.ajaxPrefilter("json jsonp", function(t, e, n) {
            var i,
                r,
                s,
                a = t.jsonp !== !1 && (an.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ut.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(an, "$1" + i) : t.jsonp !== !1 && (t.url += (Pe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return s || ut.error(i + " was not called"), s[0]
            }, t.dataTypes[0] = "json", r = o[i], o[i] = function() {
                s = arguments
            }, n.always(function() {
                o[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, sn.push(i)), s && ut.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), ut.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t)
                return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || wt;
            var i = gt.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = ut.buildFragment([t], e, r), r && r.length && ut(r).remove(), ut.merge([], i.childNodes))
        };
        var cn = ut.fn.load;
        ut.fn.load = function(t, e, n) {
            if ("string" != typeof t && cn)
                return cn.apply(this, arguments);
            var i,
                r,
                o,
                s = this,
                a = t.indexOf(" ");
            return a >= 0 && (i = ut.trim(t.slice(a, t.length)), t = t.slice(0, a)), ut.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && ut.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                s.each(n, r || [t.responseText, e, t])
            }), this
        }, ut.expr.filters.animated = function(t) {
            return ut.grep(ut.timers, function(e) {
                return t === e.elem
            }).length
        };
        var un = o.document.documentElement;
        ut.offset = {
            setOffset: function(t, e, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    c,
                    u,
                    l = ut.css(t, "position"),
                    d = ut(t),
                    h = {};
                "static" === l && (t.style.position = "relative"), a = d.offset(), o = ut.css(t, "top"), c = ut.css(t, "left"), u = ("absolute" === l || "fixed" === l) && ut.inArray("auto", [o, c]) > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(c) || 0), ut.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : d.css(h)
            }
        }, ut.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        ut.offset.setOffset(this, t, e)
                    });
                var e,
                    n,
                    i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                return o ? (e = o.documentElement, ut.contains(e, r) ? (typeof r.getBoundingClientRect !== Dt && (i = r.getBoundingClientRect()), n = K(o), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t,
                        e,
                        n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ut.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ut.nodeName(t[0], "html") || (n = t.offset()), n.top += ut.css(t[0], "borderTopWidth", !0), n.left += ut.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ut.css(i, "marginTop", !0),
                        left: e.left - n.left - ut.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || un; t && !ut.nodeName(t, "html") && "static" === ut.css(t, "position");)
                        t = t.offsetParent;
                    return t || un
                })
            }
        }), ut.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            ut.fn[t] = function(i) {
                return Ot(this, function(t, i, r) {
                    var o = K(t);
                    return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void (o ? o.scrollTo(n ? ut(o).scrollLeft() : r, n ? r : ut(o).scrollTop()) : t[i] = r)
                }, t, i, arguments.length, null)
            }
        }), ut.each(["top", "left"], function(t, e) {
            ut.cssHooks[e] = N(at.pixelPosition, function(t, n) {
                return n ? (n = se(t, e), ce.test(n) ? ut(t).position()[e] + "px" : n) : void 0
            })
        }), ut.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ut.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                ut.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Ot(this, function(e, n, i) {
                        var r;
                        return ut.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement,
                        Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ut.css(e, n, s) : ut.style(e, n, i, s)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), ut.fn.size = function() {
            return this.length
        }, ut.fn.andSelf = ut.fn.addBack, n(3) && (i = [], r = function() {
            return ut
        }.apply(e, i), !(void 0 !== r && (t.exports = r)));
        var ln = o.jQuery,
            dn = o.$;
        return ut.noConflict = function(t) {
            return o.$ === ut && (o.$ = dn), t && o.jQuery === ut && (o.jQuery = ln), ut
        }, typeof s === Dt && (o.jQuery = o.$ = ut), ut
    })
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(e, {
        $: !0,
        jQuery: !0
    })
}, function(t, e, n) {
    var i,
        r;
    i = [n(2)], r = function(t) {
        return function(e, n, i) {
            var r,
                o = t.extend({
                    type: "GET",
                    dataType: "json",
                    cache: !1
                }, e);
            return e.popError && (i = i || function(t) {}), r = t.ajax(o), r.then(function(t) {
                +t.code ? i && i(t) : n && n(t)
            }, function(t, e) {
                "abort" !== e && "parsererror" !== e && i && i({
                    message: "网络异常，请稍后再试"
                })
            }), r
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(7), n(59), n(8), n(9), n(10), n(11), n(12), n(17), n(53), n(57), n(18), n(2), n(6), n(60), n(14), n(58), n(52), n(48), n(61), n(47), n(62), n(65), n(66)], r = function(t, e, n, i, r, o, s, a, c, u, l, d, h, f, p, m, g, v, y, w, b, _) {
        if (!window.dedog) {
            var x = new e({
                monitorId: "442956"
            });
            x.listen()
        }
        window.underscore = window._ = h;
        var k = window.__SettingDfd = d.Deferred();
        w.isGuest ? k.resolve({
            color: 0
        }) : _.getBasicSetting().done(function(t) {
            1 == t.color && d("head").append('<link href="/css-build/config.css" rel="stylesheet" type="text/css" />'), k.resolve(t)
        }).fail(function(t) {
            k.resolve({
                color: 0
            })
        }), d('.ui-upload-trigger[data-auto="true"]').each(function() {
            new n({
                $trigger: this
            })
        }), d(".ui-tabs-wrapper").each(function() {
            new i({
                $wrapper: this
            })
        }), d(".ui-selectbox-wrapper").each(function() {
            new r({
                $wrapper: this
            })
        }), d(".roll-ui-selectbox-wrapper").each(function() {
            new o({
                $wrapper: this
            })
        }), d(".ui-numberinput").each(function() {
            new s({
                $input: this
            })
        }), d(".ui-login-link").each(function() {
            new u({
                node: this
            })
        }), d(document).on("focus", "input[type=text], .js-inputText", function() {
            d(this).addClass("inputTxtFocus")
        }).on("blur", "input[type=text], .js-inputText", function() {
            d(this).removeClass("inputTxtFocus")
        }), f.locale("zh-cn"), p.fn.formatChinese = function() {
            var t = this._value,
                e = parseFloat(t) / 1e4;
            return e > 1 && e < 1e4 ? p(t / 1e4).format("0.00") + "万" : e >= 1e4 ? p(e / 1e4).format("0.00") + "亿" : p(t).format("0.00")
        }, d(".ui-login").on("click", function() {
            window.location.href = "/site/login?ref=" + encodeURIComponent(window.location.href)
        }), d(".ui-register").on("click", function() {
            window.location.href = "/site/signup?ref=" + encodeURIComponent(window.location.href)
        }), v.subscribe("popLogin", function(t) {
            setTimeout(function() {
                new c, t && t.remove()
            }, 10)
        }), v.subscribe("popSignup", function(t) {
            setTimeout(function() {
                new a, t && t.remove()
            }, 10)
        }), d.fn.placeholder && d("input,textarea").placeholder({
            customClass: "gray01"
        }), d.fn.serializeObject = function() {
            var t = {},
                e = this.serializeArray();
            return d.each(e, function() {
                t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]), t[this.name].push(this.value || "")) : t[this.name] = this.value || ""
            }), t
        }, function() {
            var t = d(".heightFull").eq(0);
            t.length && d(window).resize(function() {
                setTimeout(function() {
                    t.css({
                        "min-height": d(window).height() - d("body").height() + t.height()
                    })
                }, 0)
            }).trigger("resize")
        }(), /isNew=[\w\d]+:[\w\d]+:"1"/.test(decodeURIComponent(document.cookie)) && g.show(), function() {
            var t,
                e = [/^\/(?:site\/index)?$/, /^\/(?:quote)(?:\/|\b)/, /^\/(?:news|calendar)(?:\/|\b)/, /^\/(?:download)(?:\/|\b)/, /^\/(?:nnq|account\/nnq|account\/home)(?:\/|\b)/, /^\/(?:activity|trade|match|act|newstock|about|about\/disclamer)(?:\/|\b)/, /^\/(?:activity|trade|match|act|newstock)(?:\/|\b)/, /^\/(?:message\/index|store|store|account\/setting|account|invite|prize|account\/watchlist|account\/credits-task|account\/home)(?:\/|\b)/, /^\/none$/],
                n = location.pathname;
            window.location.href;
            e.forEach(function(e, i) {
                e.test(n) && (t = i)
            }), d(".js-mainNav .a01:eq(" + t + ")").addClass("current")
        }(), function() {
            var t = d("#topStockSearch");
            new y(t)
        }(), w.isGuest || b(), v.onLoginReload(function() {
            b()
        }), function() {
            var t = d(window),
                e = d(".goTop"),
                n = !1,
                i = t.height();
            e.on("click", function() {
                return n = !0, e.addClass("moving"), d("body, html").animate({
                    scrollTop: "0"
                }, 600, function() {
                    e.removeClass("moving"), n = !1
                }), !1
            }), t.scrollTop() > i && e.fadeIn(200), t.on("scroll", h.throttle(function(r) {
                n || (t.scrollTop() > i ? e.fadeIn(200) : e.fadeOut(200))
            }, 100))
        }();
        var T = d("#signBox"),
            C = T.attr("uid"),
            M = new t;
        C && T.on("click", "#signIn", function() {
            d.ajax({
                url: "/site/sign-in",
                dataType: "json",
                type: "GET",
                success: function(t) {
                    "0" === t.code ? (T.find("#signIn").hide(), T.find("#signed").css({
                        display: "inline-block"
                    }), T.find("#tomorrow").show(), T.find("#tomorrowScore").text(t.data.tomorrowScore), T.find("#repeatDays").text(t.data.signInDays), M.uploadServer({
                        client_time: Date.now() / 1e3 >> "0",
                        client_ver: "0",
                        report_id: "4",
                        event_id: "400146",
                        uid: C,
                        ext2: "签到成功"
                    }, function(t, e) {})) : (new l({
                        messageTitle: "提示",
                        messageBody: t.message,
                        showCancel: !1,
                        onBtnClick: function() {
                            window.location.reload()
                        }
                    }), M.uploadServer({
                        client_time: Date.now() / 1e3 >> "0",
                        client_ver: "0",
                        report_id: "4",
                        event_id: "400146",
                        uid: C,
                        ext2: "签到失败"
                    }, function(t, e) {}))
                },
                error: function(t) {
                    new l({
                        messageTitle: "提示",
                        messageBody: "网络异常，请稍候再试",
                        showCancel: !1,
                        onBtnClick: function() {
                            window.location.reload()
                        }
                    }), M.uploadServer({
                        client_time: Date.now() / 1e3 >> "0",
                        client_ver: "0",
                        report_id: "4",
                        event_id: "400146",
                        uid: C,
                        ext2: "签到失败"
                    }, function(t, e) {})
                }
            })
        })
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    (function() {
        var o = this,
            s = o._,
            a = Array.prototype,
            c = Object.prototype,
            u = Function.prototype,
            l = a.push,
            d = a.slice,
            h = a.concat,
            f = c.toString,
            p = c.hasOwnProperty,
            m = Array.isArray,
            g = Object.keys,
            v = u.bind,
            y = function(t) {
                return t instanceof y ? t : this instanceof y ? void (this._wrapped = t) : new y(t)
            };
        "undefined" != typeof t && t.exports && (e = t.exports = y), e._ = y, y.VERSION = "1.7.0";
        var w = function(t, e, n) {
            if (void 0 === e)
                return t;
            switch (null == n ? 3 : n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r)
                };
            case 4:
                return function(n, i, r, o) {
                    return t.call(e, n, i, r, o)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        };
        y.iteratee = function(t, e, n) {
            return null == t ? y.identity : y.isFunction(t) ? w(t, e, n) : y.isObject(t) ? y.matches(t) : y.property(t)
        }, y.each = y.forEach = function(t, e, n) {
            if (null == t)
                return t;
            e = w(e, n);
            var i,
                r = t.length;
            if (r === +r)
                for (i = 0; r > i; i++)
                    e(t[i], i, t);
            else {
                var o = y.keys(t);
                for (i = 0, r = o.length; r > i; i++)
                    e(t[o[i]], o[i], t)
            }
            return t
        }, y.map = y.collect = function(t, e, n) {
            if (null == t)
                return [];
            e = y.iteratee(e, n);
            for (var i, r = t.length !== +t.length && y.keys(t), o = (r || t).length, s = Array(o), a = 0; o > a; a++)
                i = r ? r[a] : a, s[a] = e(t[i], i, t);
            return s
        };
        var b = "Reduce of empty array with no initial value";
        y.reduce = y.foldl = y.inject = function(t, e, n, i) {
            null == t && (t = []), e = w(e, i, 4);
            var r,
                o = t.length !== +t.length && y.keys(t),
                s = (o || t).length,
                a = 0;
            if (arguments.length < 3) {
                if (!s)
                    throw new TypeError(b);
                n = t[o ? o[a++] : a++]
            }
            for (; s > a; a++)
                r = o ? o[a] : a, n = e(n, t[r], r, t);
            return n
        }, y.reduceRight = y.foldr = function(t, e, n, i) {
            null == t && (t = []), e = w(e, i, 4);
            var r,
                o = t.length !== +t.length && y.keys(t),
                s = (o || t).length;
            if (arguments.length < 3) {
                if (!s)
                    throw new TypeError(b);
                n = t[o ? o[--s] : --s]
            }
            for (; s--;)
                r = o ? o[s] : s, n = e(n, t[r], r, t);
            return n
        }, y.find = y.detect = function(t, e, n) {
            var i;
            return e = y.iteratee(e, n), y.some(t, function(t, n, r) {
                return e(t, n, r) ? (i = t, !0) : void 0
            }), i
        }, y.filter = y.select = function(t, e, n) {
            var i = [];
            return null == t ? i : (e = y.iteratee(e, n), y.each(t, function(t, n, r) {
                e(t, n, r) && i.push(t)
            }), i)
        }, y.reject = function(t, e, n) {
            return y.filter(t, y.negate(y.iteratee(e)), n)
        }, y.every = y.all = function(t, e, n) {
            if (null == t)
                return !0;
            e = y.iteratee(e, n);
            var i,
                r,
                o = t.length !== +t.length && y.keys(t),
                s = (o || t).length;
            for (i = 0; s > i; i++)
                if (r = o ? o[i] : i, !e(t[r], r, t))
                    return !1;
            return !0
        }, y.some = y.any = function(t, e, n) {
            if (null == t)
                return !1;
            e = y.iteratee(e, n);
            var i,
                r,
                o = t.length !== +t.length && y.keys(t),
                s = (o || t).length;
            for (i = 0; s > i; i++)
                if (r = o ? o[i] : i, e(t[r], r, t))
                    return !0;
            return !1
        }, y.contains = y.include = function(t, e) {
            return null != t && (t.length !== +t.length && (t = y.values(t)), y.indexOf(t, e) >= 0)
        }, y.invoke = function(t, e) {
            var n = d.call(arguments, 2),
                i = y.isFunction(e);
            return y.map(t, function(t) {
                return (i ? e : t[e]).apply(t, n)
            })
        }, y.pluck = function(t, e) {
            return y.map(t, y.property(e))
        }, y.where = function(t, e) {
            return y.filter(t, y.matches(e))
        }, y.findWhere = function(t, e) {
            return y.find(t, y.matches(e))
        }, y.max = function(t, e, n) {
            var i,
                r,
                o = -1 / 0,
                s = -1 / 0;
            if (null == e && null != t) {
                t = t.length === +t.length ? t : y.values(t);
                for (var a = 0, c = t.length; c > a; a++)
                    i = t[a], i > o && (o = i)
            } else
                e = y.iteratee(e, n), y.each(t, function(t, n, i) {
                    r = e(t, n, i), (r > s || r === -1 / 0 && o === -1 / 0) && (o = t, s = r)
                });
            return o
        }, y.min = function(t, e, n) {
            var i,
                r,
                o = 1 / 0,
                s = 1 / 0;
            if (null == e && null != t) {
                t = t.length === +t.length ? t : y.values(t);
                for (var a = 0, c = t.length; c > a; a++)
                    i = t[a], o > i && (o = i)
            } else
                e = y.iteratee(e, n), y.each(t, function(t, n, i) {
                    r = e(t, n, i), (s > r || 1 / 0 === r && 1 / 0 === o) && (o = t, s = r)
                });
            return o
        }, y.shuffle = function(t) {
            for (var e, n = t && t.length === +t.length ? t : y.values(t), i = n.length, r = Array(i), o = 0; i > o; o++)
                e = y.random(0, o), e !== o && (r[o] = r[e]), r[e] = n[o];
            return r
        }, y.sample = function(t, e, n) {
            return null == e || n ? (t.length !== +t.length && (t = y.values(t)), t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e))
        }, y.sortBy = function(t, e, n) {
            return e = y.iteratee(e, n), y.pluck(y.map(t, function(t, n, i) {
                return {
                    value: t,
                    index: n,
                    criteria: e(t, n, i)
                }
            }).sort(function(t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n)
                        return 1;
                    if (i > n || void 0 === i)
                        return -1
                }
                return t.index - e.index
            }), "value")
        };
        var _ = function(t) {
            return function(e, n, i) {
                var r = {};
                return n = y.iteratee(n, i), y.each(e, function(i, o) {
                    var s = n(i, o, e);
                    t(r, i, s)
                }), r
            }
        };
        y.groupBy = _(function(t, e, n) {
            y.has(t, n) ? t[n].push(e) : t[n] = [e]
        }), y.indexBy = _(function(t, e, n) {
            t[n] = e
        }), y.countBy = _(function(t, e, n) {
            y.has(t, n) ? t[n]++ : t[n] = 1
        }), y.sortedIndex = function(t, e, n, i) {
            n = y.iteratee(n, i, 1);
            for (var r = n(e), o = 0, s = t.length; s > o;) {
                var a = o + s >>> 1;
                n(t[a]) < r ? o = a + 1 : s = a
            }
            return o
        }, y.toArray = function(t) {
            return t ? y.isArray(t) ? d.call(t) : t.length === +t.length ? y.map(t, y.identity) : y.values(t) : []
        }, y.size = function(t) {
            return null == t ? 0 : t.length === +t.length ? t.length : y.keys(t).length
        }, y.partition = function(t, e, n) {
            e = y.iteratee(e, n);
            var i = [],
                r = [];
            return y.each(t, function(t, n, o) {
                (e(t, n, o) ? i : r).push(t)
            }), [i, r]
        }, y.first = y.head = y.take = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : d.call(t, 0, e)
        }, y.initial = function(t, e, n) {
            return d.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
        }, y.last = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : d.call(t, Math.max(t.length - e, 0))
        }, y.rest = y.tail = y.drop = function(t, e, n) {
            return d.call(t, null == e || n ? 1 : e)
        }, y.compact = function(t) {
            return y.filter(t, y.identity)
        };
        var x = function(t, e, n, i) {
            if (e && y.every(t, y.isArray))
                return h.apply(i, t);
            for (var r = 0, o = t.length; o > r; r++) {
                var s = t[r];
                y.isArray(s) || y.isArguments(s) ? e ? l.apply(i, s) : x(s, e, n, i) : n || i.push(s)
            }
            return i
        };
        y.flatten = function(t, e) {
            return x(t, e, !1, [])
        }, y.without = function(t) {
            return y.difference(t, d.call(arguments, 1))
        }, y.uniq = y.unique = function(t, e, n, i) {
            if (null == t)
                return [];
            y.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = y.iteratee(n, i));
            for (var r = [], o = [], s = 0, a = t.length; a > s; s++) {
                var c = t[s];
                if (e)
                    s && o === c || r.push(c), o = c;
                else if (n) {
                    var u = n(c, s, t);
                    y.indexOf(o, u) < 0 && (o.push(u), r.push(c))
                } else
                    y.indexOf(r, c) < 0 && r.push(c)
            }
            return r
        }, y.union = function() {
            return y.uniq(x(arguments, !0, !0, []))
        }, y.intersection = function(t) {
            if (null == t)
                return [];
            for (var e = [], n = arguments.length, i = 0, r = t.length; r > i; i++) {
                var o = t[i];
                if (!y.contains(e, o)) {
                    for (var s = 1; n > s && y.contains(arguments[s], o); s++)
                        ;
                    s === n && e.push(o)
                }
            }
            return e
        }, y.difference = function(t) {
            var e = x(d.call(arguments, 1), !0, !0, []);
            return y.filter(t, function(t) {
                return !y.contains(e, t)
            })
        }, y.zip = function(t) {
            if (null == t)
                return [];
            for (var e = y.max(arguments, "length").length, n = Array(e), i = 0; e > i; i++)
                n[i] = y.pluck(arguments, i);
            return n
        }, y.object = function(t, e) {
            if (null == t)
                return {};
            for (var n = {}, i = 0, r = t.length; r > i; i++)
                e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        }, y.indexOf = function(t, e, n) {
            if (null == t)
                return -1;
            var i = 0,
                r = t.length;
            if (n) {
                if ("number" != typeof n)
                    return i = y.sortedIndex(t, e), t[i] === e ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            for (; r > i; i++)
                if (t[i] === e)
                    return i;
            return -1
        }, y.lastIndexOf = function(t, e, n) {
            if (null == t)
                return -1;
            var i = t.length;
            for ("number" == typeof n && (i = 0 > n ? i + n + 1 : Math.min(i, n + 1)); --i >= 0;)
                if (t[i] === e)
                    return i;
            return -1
        }, y.range = function(t, e, n) {
            arguments.length <= 1 && (e = t || 0, t = 0), n = n || 1;
            for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; i > o; o++, t += n)
                r[o] = t;
            return r
        };
        var k = function() {};
        y.bind = function(t, e) {
            var n,
                i;
            if (v && t.bind === v)
                return v.apply(t, d.call(arguments, 1));
            if (!y.isFunction(t))
                throw new TypeError("Bind must be called on a function");
            return n = d.call(arguments, 2), i = function() {
                if (!(this instanceof i))
                    return t.apply(e, n.concat(d.call(arguments)));
                k.prototype = t.prototype;
                var r = new k;
                k.prototype = null;
                var o = t.apply(r, n.concat(d.call(arguments)));
                return y.isObject(o) ? o : r
            }
        }, y.partial = function(t) {
            var e = d.call(arguments, 1);
            return function() {
                for (var n = 0, i = e.slice(), r = 0, o = i.length; o > r; r++)
                    i[r] === y && (i[r] = arguments[n++]);
                for (; n < arguments.length;)
                    i.push(arguments[n++]);
                return t.apply(this, i)
            }
        }, y.bindAll = function(t) {
            var e,
                n,
                i = arguments.length;
            if (1 >= i)
                throw new Error("bindAll must be passed function names");
            for (e = 1; i > e; e++)
                n = arguments[e], t[n] = y.bind(t[n], t);
            return t
        }, y.memoize = function(t, e) {
            var n = function(i) {
                var r = n.cache,
                    o = e ? e.apply(this, arguments) : i;
                return y.has(r, o) || (r[o] = t.apply(this, arguments)), r[o]
            };
            return n.cache = {}, n
        }, y.delay = function(t, e) {
            var n = d.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, y.defer = function(t) {
            return y.delay.apply(y, [t, 1].concat(d.call(arguments, 1)))
        }, y.throttle = function(t, e, n) {
            var i,
                r,
                o,
                s = null,
                a = 0;
            n || (n = {});
            var c = function() {
                a = n.leading === !1 ? 0 : y.now(), s = null, o = t.apply(i, r), s || (i = r = null)
            };
            return function() {
                var u = y.now();
                a || n.leading !== !1 || (a = u);
                var l = e - (u - a);
                return i = this, r = arguments, 0 >= l || l > e ? (clearTimeout(s), s = null, a = u, o = t.apply(i, r), s || (i = r = null)) : s || n.trailing === !1 || (s = setTimeout(c, l)), o
            }
        }, y.debounce = function(t, e, n) {
            var i,
                r,
                o,
                s,
                a,
                c = function() {
                    var u = y.now() - s;
                    e > u && u > 0 ? i = setTimeout(c, e - u) : (i = null, n || (a = t.apply(o, r), i || (o = r = null)))
                };
            return function() {
                o = this, r = arguments, s = y.now();
                var u = n && !i;
                return i || (i = setTimeout(c, e)), u && (a = t.apply(o, r), o = r = null), a
            }
        }, y.wrap = function(t, e) {
            return y.partial(e, t)
        }, y.negate = function(t) {
            return function() {
                return !t.apply(this, arguments)
            }
        }, y.compose = function() {
            var t = arguments,
                e = t.length - 1;
            return function() {
                for (var n = e, i = t[e].apply(this, arguments); n--;)
                    i = t[n].call(this, i);
                return i
            }
        }, y.after = function(t, e) {
            return function() {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, y.before = function(t, e) {
            var n;
            return function() {
                return --t > 0 ? n = e.apply(this, arguments) : e = null, n
            }
        }, y.once = y.partial(y.before, 2), y.keys = function(t) {
            if (!y.isObject(t))
                return [];
            if (g)
                return g(t);
            var e = [];
            for (var n in t)
                y.has(t, n) && e.push(n);
            return e
        }, y.values = function(t) {
            for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++)
                i[r] = t[e[r]];
            return i
        }, y.pairs = function(t) {
            for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; n > r; r++)
                i[r] = [e[r], t[e[r]]];
            return i
        }, y.invert = function(t) {
            for (var e = {}, n = y.keys(t), i = 0, r = n.length; r > i; i++)
                e[t[n[i]]] = n[i];
            return e
        }, y.functions = y.methods = function(t) {
            var e = [];
            for (var n in t)
                y.isFunction(t[n]) && e.push(n);
            return e.sort()
        }, y.extend = function(t) {
            if (!y.isObject(t))
                return t;
            for (var e, n, i = 1, r = arguments.length; r > i; i++) {
                e = arguments[i];
                for (n in e)
                    p.call(e, n) && (t[n] = e[n])
            }
            return t
        }, y.pick = function(t, e, n) {
            var i,
                r = {};
            if (null == t)
                return r;
            if (y.isFunction(e)) {
                e = w(e, n);
                for (i in t) {
                    var o = t[i];
                    e(o, i, t) && (r[i] = o)
                }
            } else {
                var s = h.apply([], d.call(arguments, 1));
                t = new Object(t);
                for (var a = 0, c = s.length; c > a; a++)
                    i = s[a], i in t && (r[i] = t[i])
            }
            return r
        }, y.omit = function(t, e, n) {
            if (y.isFunction(e))
                e = y.negate(e);
            else {
                var i = y.map(h.apply([], d.call(arguments, 1)), String);
                e = function(t, e) {
                    return !y.contains(i, e)
                }
            }
            return y.pick(t, e, n)
        }, y.defaults = function(t) {
            if (!y.isObject(t))
                return t;
            for (var e = 1, n = arguments.length; n > e; e++) {
                var i = arguments[e];
                for (var r in i)
                    void 0 === t[r] && (t[r] = i[r])
            }
            return t
        }, y.clone = function(t) {
            return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({}, t) : t
        }, y.tap = function(t, e) {
            return e(t), t
        };
        var T = function(t, e, n, i) {
            if (t === e)
                return 0 !== t || 1 / t === 1 / e;
            if (null == t || null == e)
                return t === e;
            t instanceof y && (t = t._wrapped), e instanceof y && (e = e._wrapped);
            var r = f.call(t);
            if (r !== f.call(e))
                return !1;
            switch (r) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
            }
            if ("object" != typeof t || "object" != typeof e)
                return !1;
            for (var o = n.length; o--;)
                if (n[o] === t)
                    return i[o] === e;
            var s = t.constructor,
                a = e.constructor;
            if (s !== a && "constructor" in t && "constructor" in e && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a))
                return !1;
            n.push(t), i.push(e);
            var c,
                u;
            if ("[object Array]" === r) {
                if (c = t.length, u = c === e.length)
                    for (; c-- && (u = T(t[c], e[c], n, i));)
                        ;
            } else {
                var l,
                    d = y.keys(t);
                if (c = d.length, u = y.keys(e).length === c)
                    for (; c-- && (l = d[c], u = y.has(e, l) && T(t[l], e[l], n, i));)
                        ;
            }
            return n.pop(), i.pop(), u
        };
        y.isEqual = function(t, e) {
            return T(t, e, [], [])
        }, y.isEmpty = function(t) {
            if (null == t)
                return !0;
            if (y.isArray(t) || y.isString(t) || y.isArguments(t))
                return 0 === t.length;
            for (var e in t)
                if (y.has(t, e))
                    return !1;
            return !0
        }, y.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }, y.isArray = m || function(t) {
            return "[object Array]" === f.call(t)
        }, y.isObject = function(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
            y["is" + t] = function(e) {
                return f.call(e) === "[object " + t + "]"
            }
        }), y.isArguments(arguments) || (y.isArguments = function(t) {
            return y.has(t, "callee")
        }), "function" != typeof /./ && (y.isFunction = function(t) {
            return "function" == typeof t || !1
        }), y.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, y.isNaN = function(t) {
            return y.isNumber(t) && t !== +t
        }, y.isBoolean = function(t) {
            return t === !0 || t === !1 || "[object Boolean]" === f.call(t)
        }, y.isNull = function(t) {
            return null === t
        }, y.isUndefined = function(t) {
            return void 0 === t
        }, y.has = function(t, e) {
            return null != t && p.call(t, e)
        }, y.noConflict = function() {
            return o._ = s, this
        }, y.identity = function(t) {
            return t
        }, y.constant = function(t) {
            return function() {
                return t
            }
        }, y.noop = function() {}, y.property = function(t) {
            return function(e) {
                return e[t]
            }
        }, y.matches = function(t) {
            var e = y.pairs(t),
                n = e.length;
            return function(t) {
                if (null == t)
                    return !n;
                t = new Object(t);
                for (var i = 0; n > i; i++) {
                    var r = e[i],
                        o = r[0];
                    if (r[1] !== t[o] || !(o in t))
                        return !1
                }
                return !0
            }
        }, y.times = function(t, e, n) {
            var i = Array(Math.max(0, t));
            e = w(e, n, 1);
            for (var r = 0; t > r; r++)
                i[r] = e(r);
            return i
        }, y.random = function(t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        }, y.now = Date.now || function() {
            return (new Date).getTime()
        };
        var C = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            M = y.invert(C),
            S = function(t) {
                var e = function(e) {
                        return t[e]
                    },
                    n = "(?:" + y.keys(t).join("|") + ")",
                    i = RegExp(n),
                    r = RegExp(n, "g");
                return function(t) {
                    return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
                }
            };
        y.escape = S(C), y.unescape = S(M), y.result = function(t, e) {
            if (null != t) {
                var n = t[e];
                return y.isFunction(n) ? t[e]() : n
            }
        };
        var D = 0;
        y.uniqueId = function(t) {
            var e = ++D + "";
            return t ? t + e : e
        }, y.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var $ = /(.)^/,
            E = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            N = /\\|'|\r|\n|\u2028|\u2029/g,
            A = function(t) {
                return "\\" + E[t]
            };
        y.template = function(t, e, n) {
            !e && n && (e = n), e = y.defaults({}, e, y.templateSettings);
            var i = RegExp([(e.escape || $).source, (e.interpolate || $).source, (e.evaluate || $).source].join("|") + "|$", "g"),
                r = 0,
                o = "__p+='";
            t.replace(i, function(e, n, i, s, a) {
                return o += t.slice(r, a).replace(N, A), r = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
            }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var s = new Function(e.variable || "obj", "_", o)
            } catch (a) {
                throw a.source = o, a
            }
            var c = function(t) {
                    return s.call(this, t, y)
                },
                u = e.variable || "obj";
            return c.source = "function(" + u + "){\n" + o + "}", c
        }, y.chain = function(t) {
            var e = y(t);
            return e._chain = !0, e
        };
        var j = function(t) {
            return this._chain ? y(t).chain() : t
        };
        y.mixin = function(t) {
            y.each(y.functions(t), function(e) {
                var n = y[e] = t[e];
                y.prototype[e] = function() {
                    var t = [this._wrapped];
                    return l.apply(t, arguments), j.call(this, n.apply(y, t))
                }
            })
        }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var e = a[t];
            y.prototype[t] = function() {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], j.call(this, n)
            }
        }), y.each(["concat", "join", "slice"], function(t) {
            var e = a[t];
            y.prototype[t] = function() {
                return j.call(this, e.apply(this._wrapped, arguments))
            }
        }), y.prototype.value = function() {
            return this._wrapped
        }, n(3) && (i = [], r = function() {
            return y
        }.apply(e, i), !(void 0 !== r && (t.exports = r)))
    }).call(this)
}, function(t, e, n) {
    !function(e, n) {
        t.exports = n()
    }(this, function() {
        return function(t) {
            function e(i) {
                if (n[i])
                    return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function(t, e, n) {
            "use strict";
            var i = function(t) {
                t || (t = {}), this._cnzz = !1, this._ga = !1, this._serverUrl = "https://report.futu5.com/client_report", "undefined" != typeof t.cnzz && (this._cnzz = t.cnzz), "undefined" != typeof t.ga && (this._ga = t.ga), t.serverUrl && (this._serverUrl = t.serverUrl), this._sampleRate = t.sampleRate || .01, this._init()
            };
            i.prototype._init = function() {
                var t = this,
                    e = function(t, e, n) {
                        "load" === e && "complete" === document.readyState && n && n(), window.addEventListener ? t.addEventListener(e, n, !1) : window.attachEvent && t.attachEvent("on" + e, n)
                    };
                if ((this._cnzz || this._ga) && (document._write = document.write, document.write = function(t) {}), this._cnzz) {
                    var n = function() {
                        var e = document.getElementsByTagName("script")[0],
                            n = document.createElement("script");
                        n.async = !0, n.src = "//v1.cnzz.com/z_stat.php?id=" + t._cnzz, e.parentNode.insertBefore(n, e)
                    };
                    e(window, "load", n)
                }
                this._ga && !function(t, n, i, r, o) {
                    t[r] = t[r] || [], t[r].push({
                        "gtm.start": (new Date).getTime(),
                        event: "gtm.js"
                    });
                    var s = function() {
                        var t = n.getElementsByTagName(i)[0],
                            e = n.createElement(i),
                            s = "dataLayer" != r ? "&dataLayer=" + r : "";
                        e.async = !0, e.src = "//www.googletagmanager.com/gtm.js?id=" + o + s, t.parentNode.insertBefore(e, t)
                    };
                    e(t, "load", s)
                }(window, document, "script", "dataLayer", this._ga);
                var i = document.cookie,
                    r = /FUTU_TOOL_STAT_UNIQUE_ID=([\d\w]+)/,
                    o = i.match(r);
                o && o.length >= 2 ? this._uniqueId = o[1] : this._uniqueId = (new Date).getTime() + "" + (1e4 * Math.random() | 0);
                var s = 31536e4;
                document.cookie = "FUTU_TOOL_STAT_UNIQUE_ID=" + this._uniqueId + ";path=/;max-age=" + s
            }, i.prototype._uploadPerformance = function() {
                if (this._cnzz) {
                    var t = window._czc || [];
                    "undefined" != typeof jQuery && jQuery(window).bind("load", function() {
                        window.performance && (Math.random() > this._sampleRate || setTimeout(function() {
                            var e = window.performance.timing,
                                n = e.domainLookupEnd - e.navigationStart,
                                i = e.responseEnd - e.navigationStart,
                                r = e.domContentLoadedEventEnd - e.navigationStart,
                                o = e.domComplete - e.navigationStart,
                                s = e.loadEventEnd - e.navigationStart;
                            t.push(["_trackEvent", "Performance", "DNS", location.href, n]), t.push(["_trackEvent", "Performance", "ResponseEnd", location.href, i]), t.push(["_trackEvent", "Performance", "DomReady", location.href, r]), t.push(["_trackEvent", "Performance", "DomComplete", location.href, o]), t.push(["_trackEvent", "Performance", "Load", location.href, s])
                        }, 1e3))
                    })
                }
            }, i.prototype.uploadServer = function(t, e) {
                Array.isArray(t) || (t = [t]);
                var i = n(1),
                    r = i(navigator.userAgent),
                    o = r.device.model && r.device.vendor + " " + r.device.model || r.device.vendor || r.device.type || r.os.name,
                    s = {
                        iOS: 12,
                        Android: 13,
                        "Mac OS X": 11,
                        Windows: 10
                    },
                    a = 15;
                /futunn/i.test(navigator.userAgent) && (a = s[r.os.name]);
                var c = {
                        now: (new Date).getTime() / 1e3 >> 0,
                        gzip: "off",
                        dev_type: o,
                        os_type: r.os.name + " " + r.os.version,
                        clt_type: a,
                        unique_id: this._uniqueId,
                        data: t
                    },
                    u = n(2),
                    l = n(8);
                u.post(this._serverUrl).use(l).set("Content-Type", "application/json").send(c).end(function(t, n) {
                    e(t ? t : n.ok ? 0 === +n.body.futu_result ? null : new Error("upload failed:" + n.body.futu_message) : new Error("upload failed."))
                })
            }, t.exports = i
        }, function(t, e) {
            !function(e, n) {
                "use strict";
                var i = "",
                    r = "?",
                    o = "function",
                    s = "undefined",
                    a = "object",
                    c = "major",
                    u = "model",
                    l = "name",
                    d = "type",
                    h = "vendor",
                    f = "version",
                    p = "architecture",
                    m = "console",
                    g = "mobile",
                    v = "tablet",
                    y = {
                        has: function(t, e) {
                            return e.toLowerCase().indexOf(t.toLowerCase()) !== -1
                        },
                        lowerize: function(t) {
                            return t.toLowerCase()
                        }
                    },
                    w = {
                        rgx: function() {
                            for (var t, e, i, r, c, u, l, d = 0, h = arguments; d < h.length; d += 2) {
                                var f = h[d],
                                    p = h[d + 1];
                                if (typeof t === s) {
                                    t = {};
                                    for (r in p)
                                        c = p[r], typeof c === a ? t[c[0]] = n : t[c] = n
                                }
                                for (e = i = 0; e < f.length; e++)
                                    if (u = f[e].exec(this.getUA())) {
                                        for (r in p)
                                            l = u[++i], c = p[r], typeof c === a && c.length > 0 ? 2 == c.length ? typeof c[1] == o ? t[c[0]] = c[1].call(this, l) : t[c[0]] = c[1] : 3 == c.length ? typeof c[1] !== o || c[1].exec && c[1].test ? t[c[0]] = l ? l.replace(c[1], c[2]) : n : t[c[0]] = l ? c[1].call(this, l, c[2]) : n : 4 == c.length && (t[c[0]] = l ? c[3].call(this, l.replace(c[1], c[2])) : n) : t[c] = l ? l : n;
                                        break
                                    }
                                if (u)
                                    break
                            }
                            return t
                        },
                        str: function(t, e) {
                            for (var i in e)
                                if (typeof e[i] === a && e[i].length > 0) {
                                    for (var o in e[i])
                                        if (y.has(e[i][o], t))
                                            return i === r ? n : i
                                } else if (y.has(e[i], t))
                                    return i === r ? n : i;
                            return t
                        }
                    },
                    b = {
                        browser: {
                            oldsafari: {
                                major: {
                                    1: ["/8", "/1", "/3"],
                                    2: "/4",
                                    "?": "/"
                                },
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    _ = {
                        browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [l, f, c], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[l, "Opera"], f, c], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt)\/((\d+)?[\w\.-]+)/i], [l, f, c], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[l, "Yandex"], f, c], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[l, /_/g, " "], f, c], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i], [l, f, c], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[l, "Dolphin"], f, c], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[l, "Chrome"], f, c], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [f, c, [l, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [f, c, l], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [l, [c, w.str, b.browser.oldsafari.major], [f, w.str, b.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [l, f, c], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[l, "Netscape"], f, c], [/(swiftfox)/i, /(iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [l, f, c]],
                        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[p, "amd64"]], [/((?:i[346]|x)86)[;\)]/i], [[p, "ia32"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[p, /ower/, "", y.lowerize]], [/(sun4\w)[;\)]/i], [[p, "sparc"]], [/(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [p, y.lowerize]],
                        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [u, h, [d, v]], [/(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [h, u, [d, v]], [/\((ip[honed]+);.+(apple)/i], [u, h, [d, g]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [h, u, [d, g]], [/\((bb10);\s(\w+)/i], [[h, "BlackBerry"], u, [d, g]], [/android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i], [[h, "Asus"], u, [d, v]], [/(sony)\s(tablet\s[ps])/i], [h, u, [d, v]], [/(nintendo)\s([wids3u]+)/i], [h, u, [d, m]], [/((playstation)\s[3portablevi]+)/i], [[h, "Sony"], u, [d, m]], [/(sprint\s(\w+))/i], [[h, w.str, b.device.sprint.vendor], [u, w.str, b.device.sprint.model], [d, g]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [h, [u, /_/g, " "], [d, g]], [/\s((milestone|droid[2x]?))[globa\s]*\sbuild\//i, /(mot)[\s-]?(\w+)*/i], [[h, "Motorola"], u, [d, g]], [/android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i], [[h, "Motorola"], u, [d, v]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i], [[h, "Samsung"], u, [d, v]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[h, "Samsung"], u, [d, g]], [/(sie)-(\w+)*/i], [[h, "Siemens"], u, [d, g]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[h, "Nokia"], u, [d, g]], [/android\s3\.[\s\w-;]{10}((a\d{3}))/i], [[h, "Acer"], u, [d, v]], [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i], [[h, "LG"], u, [d, v]], [/((nexus\s4))/i, /(lg)[e;\s-\/]+(\w+)*/i], [[h, "LG"], u, [d, g]], [/(mobile|tablet);.+rv\:.+gecko\//i], [d, h, u]],
                        engine: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [l, f], [/rv\:([\w\.]+).*(gecko)/i], [f, l]],
                        os: [[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [l, [f, w.str, b.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[l, "Windows"], [f, w.str, b.os.windows.version]], [/\((bb)(10);/i], [[l, "BlackBerry"], f], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i], [l, f], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[l, "Symbian"], f], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[l, "Firefox OS"], f], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [l, f], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[l, "Chromium OS"], f], [/(sunos)\s?([\w\.]+\d)*/i], [[l, "Solaris"], f], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [l, f], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[l, "iOS"], [f, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i], [l, [f, /_/g, "."]], [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i], [l, f]]
                    },
                    x = function k(t) {
                        if (!(this instanceof k))
                            return new k(t).getResult();
                        var n = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : i);
                        return this instanceof k ? (this.getBrowser = function() {
                            return w.rgx.apply(this, _.browser)
                        }, this.getCPU = function() {
                            return w.rgx.apply(this, _.cpu)
                        }, this.getDevice = function() {
                            return w.rgx.apply(this, _.device)
                        }, this.getEngine = function() {
                            return w.rgx.apply(this, _.engine)
                        }, this.getOS = function() {
                            return w.rgx.apply(this, _.os)
                        }, this.getResult = function() {
                            return {
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(t) {
                            return n = t, this
                        }, void this.setUA(n)) : new k(t).getResult()
                    };
                t.exports = x
            }(this)
        }, function(t, e, n) {
            function i() {}
            function r(t) {
                var e = {}.toString.call(t);
                switch (e) {
                case "[object File]":
                case "[object Blob]":
                case "[object FormData]":
                    return !0;
                default:
                    return !1
                }
            }
            function o(t) {
                if (!w(t))
                    return t;
                var e = [];
                for (var n in t)
                    null != t[n] && s(e, n, t[n]);
                return e.join("&")
            }
            function s(t, e, n) {
                return Array.isArray(n) ? n.forEach(function(n) {
                    s(t, e, n)
                }) : void t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
            }
            function a(t) {
                for (var e, n, i = {}, r = t.split("&"), o = 0, s = r.length; o < s; ++o)
                    n = r[o], e = n.split("="), i[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
                return i
            }
            function c(t) {
                var e,
                    n,
                    i,
                    r,
                    o = t.split(/\r?\n/),
                    s = {};
                o.pop();
                for (var a = 0, c = o.length; a < c; ++a)
                    n = o[a], e = n.indexOf(":"), i = n.slice(0, e).toLowerCase(), r = _(n.slice(e + 1)), s[i] = r;
                return s
            }
            function u(t) {
                return /[\/+]json\b/.test(t)
            }
            function l(t) {
                return t.split(/ *; */).shift()
            }
            function d(t) {
                return v(t.split(/ *; */), function(t, e) {
                    var n = e.split(/ *= */),
                        i = n.shift(),
                        r = n.shift();
                    return i && r && (t[i] = r), t
                }, {})
            }
            function h(t, e) {
                e = e || {}, this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText, this.setStatusProperties(this.xhr.status), this.header = this.headers = c(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this.setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this.parseBody(this.text ? this.text : this.xhr.response) : null
            }
            function f(t, e) {
                var n = this;
                this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function() {
                    var t = null,
                        e = null;
                    try {
                        e = new h(n)
                    } catch (i) {
                        return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = i, t.rawResponse = n.xhr && n.xhr.responseText ? n.xhr.responseText : null, t.statusCode = n.xhr && n.xhr.status ? n.xhr.status : null, n.callback(t)
                    }
                    if (n.emit("response", e), t)
                        return n.callback(t, e);
                    if (e.status >= 200 && e.status < 300)
                        return n.callback(t, e);
                    var r = new Error(e.statusText || "Unsuccessful HTTP response");
                    r.original = t, r.response = e, r.status = e.status, n.callback(r, e)
                })
            }
            function p(t, e) {
                var n = b("DELETE", t);
                return e && n.end(e), n
            }
            var m,
                g = n(3),
                v = n(4),
                y = n(5),
                w = n(6);
            m = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this;
            var b = t.exports = n(7).bind(null, f);
            b.getXHR = function() {
                if (!(!m.XMLHttpRequest || m.location && "file:" == m.location.protocol && m.ActiveXObject))
                    return new XMLHttpRequest;
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch (t) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (t) {}
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (t) {}
                return !1
            };
            var _ = "".trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/(^\s*|\s*$)/g, "")
            };
            b.serializeObject = o, b.parseString = a, b.types = {
                html: "text/html",
                json: "application/json",
                xml: "application/xml",
                urlencoded: "application/x-www-form-urlencoded",
                form: "application/x-www-form-urlencoded",
                "form-data": "application/x-www-form-urlencoded"
            }, b.serialize = {
                "application/x-www-form-urlencoded": o,
                "application/json": JSON.stringify
            }, b.parse = {
                "application/x-www-form-urlencoded": a,
                "application/json": JSON.parse
            }, h.prototype.get = function(t) {
                return this.header[t.toLowerCase()]
            }, h.prototype.setHeaderProperties = function(t) {
                var e = this.header["content-type"] || "";
                this.type = l(e);
                var n = d(e);
                for (var i in n)
                    this[i] = n[i]
            }, h.prototype.parseBody = function(t) {
                var e = b.parse[this.type];
                return !e && u(this.type) && (e = b.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null
            }, h.prototype.setStatusProperties = function(t) {
                1223 === t && (t = 204);
                var e = t / 100 | 0;
                this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.notFound = 404 == t, this.forbidden = 403 == t
            }, h.prototype.toError = function() {
                var t = this.req,
                    e = t.method,
                    n = t.url,
                    i = "cannot " + e + " " + n + " (" + this.status + ")",
                    r = new Error(i);
                return r.status = this.status, r.method = e, r.url = n, r
            }, b.Response = h, g(f.prototype);
            for (var x in y)
                f.prototype[x] = y[x];
            f.prototype.abort = function() {
                if (!this.aborted)
                    return this.aborted = !0, this.xhr.abort(), this.clearTimeout(), this.emit("abort"), this
            }, f.prototype.type = function(t) {
                return this.set("Content-Type", b.types[t] || t), this
            }, f.prototype.responseType = function(t) {
                return this._responseType = t, this
            }, f.prototype.accept = function(t) {
                return this.set("Accept", b.types[t] || t), this
            }, f.prototype.auth = function(t, e, n) {
                switch (n || (n = {
                    type: "basic"
                }), n.type) {
                case "basic":
                    var i = btoa(t + ":" + e);
                    this.set("Authorization", "Basic " + i);
                    break;
                case "auto":
                    this.username = t, this.password = e
                }
                return this
            }, f.prototype.query = function(t) {
                return "string" != typeof t && (t = o(t)), t && this._query.push(t), this
            }, f.prototype.attach = function(t, e, n) {
                return this._getFormData().append(t, e, n || e.name), this
            }, f.prototype._getFormData = function() {
                return this._formData || (this._formData = new m.FormData), this._formData
            }, f.prototype.send = function(t) {
                var e = w(t),
                    n = this._header["content-type"];
                if (e && w(this._data))
                    for (var i in t)
                        this._data[i] = t[i];
                else
                    "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + t : t : this._data = (this._data || "") + t) : this._data = t;
                return !e || r(t) ? this : (n || this.type("json"), this)
            }, h.prototype.parse = function(t) {
                return m.console, this.serialize(t), this
            }, h.prototype.serialize = function(t) {
                return this._parser = t, this
            }, f.prototype.callback = function(t, e) {
                var n = this._callback;
                this.clearTimeout(), n(t, e)
            }, f.prototype.crossDomainError = function() {
                var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
                t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
            }, f.prototype.timeoutError = function() {
                var t = this._timeout,
                    e = new Error("timeout of " + t + "ms exceeded");
                e.timeout = t, this.callback(e)
            }, f.prototype.withCredentials = function() {
                return this._withCredentials = !0, this
            }, f.prototype.end = function(t) {
                var e = this,
                    n = this.xhr = b.getXHR(),
                    o = this._query.join("&"),
                    s = this._timeout,
                    a = this._formData || this._data;
                this._callback = t || i, n.onreadystatechange = function() {
                    if (4 == n.readyState) {
                        var t;
                        try {
                            t = n.status
                        } catch (i) {
                            t = 0
                        }
                        if (0 == t) {
                            if (e.timedout)
                                return e.timeoutError();
                            if (e.aborted)
                                return;
                            return e.crossDomainError()
                        }
                        e.emit("end")
                    }
                };
                var c = function(t) {
                    t.total > 0 && (t.percent = t.loaded / t.total * 100), t.direction = "download", e.emit("progress", t)
                };
                this.hasListeners("progress") && (n.onprogress = c);
                try {
                    n.upload && this.hasListeners("progress") && (n.upload.onprogress = c)
                } catch (l) {}
                if (s && !this._timer && (this._timer = setTimeout(function() {
                    e.timedout = !0, e.abort()
                }, s)), o && (o = b.serializeObject(o), this.url += ~this.url.indexOf("?") ? "&" + o : "?" + o), this.username && this.password ? n.open(this.method, this.url, !0, this.username, this.password) : n.open(this.method, this.url, !0), this._withCredentials && (n.withCredentials = !0), "GET" != this.method && "HEAD" != this.method && "string" != typeof a && !r(a)) {
                    var d = this._header["content-type"],
                        h = this._parser || b.serialize[d ? d.split(";")[0] : ""];
                    !h && u(d) && (h = b.serialize["application/json"]), h && (a = h(a))
                }
                for (var f in this.header)
                    null != this.header[f] && n.setRequestHeader(f, this.header[f]);
                return this._responseType && (n.responseType = this._responseType), this.emit("request", this), n.send("undefined" != typeof a ? a : null), this
            }, b.Request = f, b.get = function(t, e, n) {
                var i = b("GET", t);
                return "function" == typeof e && (n = e, e = null), e && i.query(e), n && i.end(n), i
            }, b.head = function(t, e, n) {
                var i = b("HEAD", t);
                return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i
            }, b.del = p, b["delete"] = p, b.patch = function(t, e, n) {
                var i = b("PATCH", t);
                return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i
            }, b.post = function(t, e, n) {
                var i = b("POST", t);
                return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i
            }, b.put = function(t, e, n) {
                var i = b("PUT", t);
                return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i
            }
        }, function(t, e, n) {
            function i(t) {
                if (t)
                    return r(t)
            }
            function r(t) {
                for (var e in i.prototype)
                    t[e] = i.prototype[e];
                return t
            }
            t.exports = i, i.prototype.on = i.prototype.addEventListener = function(t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
            }, i.prototype.once = function(t, e) {
                function n() {
                    this.off(t, n), e.apply(this, arguments)
                }
                return n.fn = e, this.on(t, n), this
            }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
                    return this._callbacks = {}, this;
                var n = this._callbacks["$" + t];
                if (!n)
                    return this;
                if (1 == arguments.length)
                    return delete this._callbacks["$" + t], this;
                for (var i, r = 0; r < n.length; r++)
                    if (i = n[r], i === e || i.fn === e) {
                        n.splice(r, 1);
                        break
                    }
                return this
            }, i.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    n = this._callbacks["$" + t];
                if (n) {
                    n = n.slice(0);
                    for (var i = 0, r = n.length; i < r; ++i)
                        n[i].apply(this, e)
                }
                return this
            }, i.prototype.listeners = function(t) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
            }, i.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length
            }
        }, function(t, e) {
            t.exports = function(t, e, n) {
                for (var i = 0, r = t.length, o = 3 == arguments.length ? n : t[i++]; i < r;)
                    o = e.call(null, o, t[i], ++i, t);
                return o
            }
        }, function(t, e, n) {
            var i = n(6);
            e.clearTimeout = function() {
                return this._timeout = 0, clearTimeout(this._timer), this
            }, e.parse = function(t) {
                return this._parser = t, this
            }, e.timeout = function(t) {
                return this._timeout = t, this
            }, e.then = function(t, e) {
                return this.end(function(n, i) {
                    n ? e(n) : t(i)
                })
            }, e.use = function(t) {
                return t(this), this
            }, e.get = function(t) {
                return this._header[t.toLowerCase()]
            }, e.getHeader = e.get, e.set = function(t, e) {
                if (i(t)) {
                    for (var n in t)
                        this.set(n, t[n]);
                    return this
                }
                return this._header[t.toLowerCase()] = e, this.header[t] = e, this
            }, e.unset = function(t) {
                return delete this._header[t.toLowerCase()], delete this.header[t], this
            }, e.field = function(t, e) {
                return this._getFormData().append(t, e), this
            }
        }, function(t, e) {
            function n(t) {
                return null != t && "object" == typeof t
            }
            t.exports = n
        }, function(t, e) {
            function n(t, e, n) {
                return "function" == typeof n ? new t("GET", e).end(n) : 2 == arguments.length ? new t("GET", e) : new t(e, n)
            }
            t.exports = n
        }, function(t, e) {
            var n = function(t) {
                function e(t) {
                    var e = document.createElement("a");
                    return e.href = t, {
                        hostname: e.hostname,
                        protocol: e.protocol,
                        pathname: e.pathname,
                        queryString: e.search
                    }
                }
                function n(t) {
                    if (t !== Object(t))
                        return t;
                    var e = [];
                    for (var n in t)
                        null != t[n] && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                    return e.join("&")
                }
                var i = function(t) {
                        var e = this,
                            i = this.xhr = new XDomainRequest;
                        i.getAllResponseHeaders = function() {
                            return ""
                        }, i.getResponseHeader = function(t) {
                            if ("content-type" == t)
                                return "application/json"
                        };
                        var r = this._query.join("&"),
                            o = this._formData || this._data;
                        if (this._callback = t || function() {}, i.onload = function() {
                            i.status = 200, e.emit("end")
                        }, i.onerror = function() {
                            return i.status = 400, e.aborted ? e.timeoutError() : e.crossDomainError()
                        }, i.onprogress = function() {
                            e.emit("progress", 50)
                        }, i.ontimeout = function() {
                            return i.status = 408, e.timeoutError()
                        }, r && (r = n(r), this.url += ~this.url.indexOf("?") ? "&" + r : "?" + r), "GET" != this.method && "POST" != this.method)
                            throw "Only Get and Post methods are supported by XDomainRequest object.";
                        return i.open(this.method, this.url, !0), "POST" == this.method && "string" != typeof o && (o = n(o)), this.emit("request", this), i.send(o), this
                    },
                    r = e(t.url);
                r.hostname != window.location.hostname && "undefined" != typeof XDomainRequest && (t.end = i)
            };
            t.exports = n
        }])
    })
}, function(t, e, n) {
    var i,
        r;
    i = [n(2)], r = function(t) {
        var e = '<form style="position: absolute;right: 0;top: 0;background: red;opacity:0;filter:alpha(opacity=0);" target="{%iframeId%}" action="{%url%}" method="post" enctype="multipart/form-data"><input style="font-size:32px;cursor:pointer;" class="ui-upload-input" type="file" accept="{%accept%}" title="{%title%}" value="" name="{%field%}" autocomplete="off"></form>',
            n = '<div style="display:none;" name="iconUploading" class="btnBox001"><span class="loading"></span><span class="qxBar001 ui-upload-cancel">上传中... <a href="#">[取消]</a></span></div>',
            i = '<iframe id="{%iframeId%}" name="{%iframeId%}" src="about:blank" style="display:none"></iframe>',
            r = function(t) {
                if (t || (t = {}), !t.$trigger)
                    throw new Error("Please specify the upload trigger element by '$input' param.");
                this.initData(t).initUi().bindEvents()
            };
        return r.prototype.initData = function(e) {
            return this.$trigger = t(e.$trigger), this.url = e.url || this.$trigger.data("url") || "/file/icon-upload", this.field = e.field || this.$trigger.data("field") || "file", this.accept = e.accept || this.$trigger.data("accept") || "image/*", this.title = "选择文件", this.onUpload = e.onUpload || this.$trigger.data("onupload") || t.noop, this.onError = e.onError || this.$trigger.data("onerror") || t.noop, this
        }, r.prototype.initUi = function() {
            var r = this;
            return this.iframeId = "ui-upload-iframe-" + Math.random(), this.$iframe = t(i.replace(/{%(\w+)%}/g, function(t, e) {
                return r[e]
            })).appendTo(document.body), this.$form = t(e.replace(/{%(\w+)%}/g, function(t, e) {
                return r[e]
            })).appendTo(this.$trigger), this.$loading = t(n), this.$trigger.after(this.$loading).css("overflow", "hidden"), this
        }, r.prototype.bindEvents = function() {
            var e = this,
                n = e.$form.find("input.ui-upload-input"),
                i = !1,
                r = !0;
            n.on("change", function() {
                e.$form.get(0).submit(), e.$trigger.hide(), e.$loading.show(), i = !0, r = !0
            }), this.$loading.find(".ui-upload-cancel a").on("click", function() {
                return r = !1, e.$iframe.attr("src", "about:blank"), e.$trigger.show(), e.$loading.hide(), !1
            }), this.$iframe.on("load", function() {
                if (e.$trigger.show(), e.$loading.hide(), n.val(""), ["onUpload", "onError"].forEach(function(n) {
                    if ("string" == typeof e[n]) {
                        var i = e[n].split(".");
                        e[n] = window, i.forEach(function(t) {
                            e[n] = e[n] && e[n][t]
                        }), e[n] || (e[n] = t.noop)
                    }
                }), i && r) {
                    i = !1;
                    var o = e.$iframe.get(0).contentDocument || e.$iframe.get(0).contentWindow.document,
                        s = o.body.innerHTML;
                    if (s)
                        try {
                            var a = JSON.parse(s);
                            0 === +a.code ? (e.onUpload.call(window, a.data), setTimeout(function() {
                                e.$trigger.trigger("upload", [a.data])
                            }, 0)) : (e.onError.call(window, "上传失败：" + a.message), setTimeout(function() {
                                e.$trigger.trigger("error", "上传失败：" + a.message)
                            }, 0))
                        } catch (c) {
                            e.onError.call(window, "上传失败：服务器返回错误"), e.$trigger.trigger("error", "上传失败：服务器返回错误")
                        }
                    else
                        e.onError.call(window, "上传失败：网络通信错误"), e.$trigger.trigger("error", "上传失败：网络通信错误");
                    e.$iframe.attr("src", "about:blank")
                }
            }).on("error", function() {
                e.onError.call(window, "上传失败：网络通信错误"), e.$trigger.trigger("error", "上传失败：网络通信错误")
            })
        }, r
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2)], r = function(t) {
        var e = function(t) {
            if (t || (t = {}), !t.$wrapper)
                throw new Error("Please specify the wrapper of tabs.");
            this.initData(t).initUi().bindEvents()
        };
        return e.prototype.initData = function(e) {
            return this.$wrapper = t(e.$wrapper), this.$triggers = this.$wrapper.find(".ui-tabs-trigger"), this.$panels = this.$wrapper.find(".ui-tabs-panel"), this.activeClass = e.activeClass || "current", this.hashed = !!this.$wrapper.data("hashed"), this
        }, e.prototype.initUi = function() {
            var e = this,
                n = location.hash.substring(1);
            return this.hashed ? (n.length && this.switchTabByHash(n), "onhashchange" in window && ("undefined" == typeof document.documentMode || 8 == document.documentMode) ? t(window).on("hashchange", function() {
                e.switchTabByHash(location.hash.substring(1))
            }) : setInterval(function() {
                var t = location.hash.substring(1);
                t !== n && (e.switchTabByHash(t), n = t)
            }, 100)) : this.switchTab(), this
        }, e.prototype.bindEvents = function() {
            var e = this;
            this.$triggers.on("click", function() {
                var n = t(this),
                    i = n.data("target"),
                    r = e.$panels.filter("[data-id=" + i + "]");
                return e.switchTab(n, r), e.hashed && (location.hash = i), !1
            })
        }, e.prototype.switchTab = function(t, e) {
            if (!t || !e) {
                t = this.$triggers.eq(0);
                var n = t.data("target");
                e = this.$panels.filter("[data-id=" + n + "]")
            }
            this.$triggers.removeClass(this.activeClass), this.$panels.hide(), t.addClass(this.activeClass), e.show()
        }, e.prototype.switchTabByHash = function(t) {
            this.switchTab(this.$triggers.filter("[data-target=" + t + "]"), this.$panels.filter("[data-id=" + t + "]"))
        }, e
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2)], r = function(t) {
        var e,
            n = '<span class="row01 ui-selectbox-dropdownTrigger"><i class="iconfont">&#xe600;</i></span>',
            i = '<div class="selectFloatBox ui-selectbox-dropdownArea" style="display:none;"></div>',
            r = '<span class="ui-selectbox-clearInput row01" title="清除"><i class="iconfont">&#xe605;</i></span>',
            o = '<a data-value="{%value%}" href="#">{%text%}</a>',
            s = 0,
            a = function(t) {
                if (t || (t = {}), !t.$wrapper)
                    throw new Error("Please specify the selectbox wrapper element by '$wrapper' param.");
                this.initData(t).initUi().bindEvents()
            };
        return a.prototype.initData = function(e) {
            return this.$wrapper = t(e.$wrapper), this.wrapperZindex = this.$wrapper.css("z-index"), this.$input = this.$wrapper.find(".ui-selectbox-input"), this.$select = this.$wrapper.find(".ui-selectbox-select"), this.$input.data("instance", this), this.$select.data("instance", this), this.uid = s++, this.type = e.type || this.$wrapper.data("type") || "selectbox", this.hideDoropdown = e.hideDoropdown || this.$wrapper.data("hidedoropdown") || !1, "selectbox" === this.type && this.$input.prop("readonly", !0), this
        }, a.prototype.initUi = function() {
            return this.$input.after(t(i)), this.hideDoropdown ? this.$input.after(t(r)) : this.$input.after(t(n)), this.$dropdownTrigger = this.$wrapper.find(".ui-selectbox-dropdownTrigger"), this.$clearInput = this.$wrapper.find(".ui-selectbox-clearInput").hide(), this.$dropdownArea = this.$wrapper.find(".ui-selectbox-dropdownArea"), this.syncData(), this
        }, a.prototype.syncData = function() {
            var e = 0;
            this.options = this.$select.find("option").map(function(n) {
                var i = t(this);
                return i.prop("selected") && (e = n), {
                    value: i.val(),
                    text: i.text()
                }
            }).get();
            var n = this.options.map(function(t) {
                    return o.replace(/\{%(\w+)%\}/g, function(e, n) {
                        return t[n]
                    })
                }).join(""),
                i = t(n),
                r = i.eq(e);
            return r.addClass("ahover"), "selectbox" === this.type && this.$input.val(r.text()), this.$dropdownArea.html(i), this.$options = i, this.selectedIndex = e, this
        }, a.prototype.show = function() {
            return this.$wrapper.css("z-index", 99), this.$dropdownArea.slideDown(200), this
        }, a.prototype.hide = function() {
            var t = this;
            return this.$dropdownArea.slideUp(200, function() {
                t.$wrapper.css("z-index", t.wrapperZindex)
            }), this
        }, a.prototype.bindEvents = function() {
            var n = this,
                i = null;
            return this.hideDoropdown && this.$input.on("focus", function() {
                n.$clearInput.show()
            }).on("blur", function() {
                i && clearTimeout(i), i = setTimeout(function() {
                    n.$clearInput.hide()
                }, 100)
            }), this.$dropdownTrigger.on("click", function(t) {
                return n.$dropdownArea.is(":animated") || (e ? e.uid !== n.uid && (e.hide(), e = n) : e = n, n.$dropdownArea.is(":visible") ? n.hide() : n.show()), !1
            }), this.$clearInput.on("click", function(t) {
                n.$input.val(""), n.hide()
            }), this.$dropdownArea.on("click", "a", function(e) {
                var i = t(this);
                return n.switchHighlightOption(n.$options.index(i), n.selectedIndex), n.selected(i), !1
            }), t(window).on("click", function() {
                n.hide()
            }), this.$input.on("keydown", function(t) {
                var e = n.selectedIndex,
                    i = n.selectedIndex;
                27 === t.keyCode ? n.hide() : 13 === t.keyCode ? (n.selected(n.$options.eq(n.selectedIndex)), n.hide()) : 38 === t.keyCode ? n.$dropdownArea.is(":visible") && (i = e < 1 ? n.options.length - 1 : e - 1, n.switchHighlightOption(i, e), t.preventDefault()) : 40 === t.keyCode && n.$dropdownArea.is(":visible") && (i = (e + 1) % n.options.length, n.switchHighlightOption(i, e), t.preventDefault())
            }), this.$select.on("update", function() {
                n.syncData()
            }), this
        }, a.prototype.selected = function(t) {
            var e,
                n = this,
                i = t.data("value");
            return n.$select.val(t.data("value")), "selectbox" === n.type ? (e = n.$select.val(), n.$input.val(t.data("text")), e !== i && (n.$input.val(t.text()), n.$select.val(i), n.$select.trigger("change"))) : "combobox" === n.type && (e = n.$input.val(), e !== i && (n.$input.val(i), n.$select.val(i), n.$input.trigger("change"), n.$select.trigger("change"))), n.hide(), this
        }, a.prototype.switchHighlightOption = function(t, e) {
            var n = this;
            return n.selectedIndex = t, n.$options.eq(e).removeClass("ahover").end().eq(t).addClass("ahover"), this
        }, a
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2)], r = function(t) {
        var e = '<span class="row01 ui-selectbox-dropdownTrigger"><i class="iconfont">&#xe600;</i></span>',
            n = '<div class="selectFloatBox ui-selectbox-dropdownArea" style="display:none;z-index:99;"></div>',
            i = '<span class="ui-selectbox-clearInput row01" title="清除"><i class="iconfont">&#xe605;</i></span>',
            r = '<a data-value="{%value%}" href="{%value%}">{%text%}</a>',
            o = function(t) {
                if (t || (t = {}), !t.$wrapper)
                    throw new Error("Please specify the selectbox wrapper element by '$wrapper' param.");
                this.initData(t).initUi().bindEvents()
            };
        return o.prototype.initData = function(e) {
            return this.$wrapper = t(e.$wrapper), this.$input = this.$wrapper.find(".ui-selectbox-input"), this.$select = this.$wrapper.find(".ui-selectbox-select"), this.$input.data("instance", this), this.$select.data("instance", this), this.type = e.type || this.$wrapper.data("type") || "selectbox", this.hideDoropdown = e.hideDoropdown || this.$wrapper.data("hidedoropdown") || !1, "selectbox" === this.type && this.$input.prop("disabled", !0), this
        }, o.prototype.initUi = function() {
            return this.$input.after(t(n)), this.hideDoropdown ? this.$input.after(t(i)) : this.$input.after(t(e)), this.$dropdownTrigger = this.$wrapper.find(".ui-selectbox-dropdownTrigger"), this.$clearInput = this.$wrapper.find(".ui-selectbox-clearInput").hide(), this.$dropdownArea = this.$wrapper.find(".ui-selectbox-dropdownArea"), this.syncData(), this
        }, o.prototype.syncData = function() {
            var e = 0;
            this.options = this.$select.find("option").map(function(n) {
                var i = t(this);
                return i.prop("selected") && (e = n), {
                    value: i.val(),
                    text: i.text()
                }
            }).get();
            var n = this.options.map(function(t) {
                return r.replace(/\{%(\w+)%\}/g, function(e, n) {
                    return t[n]
                })
            }).join("");
            this.options.length >= 10 && (n += ' <a href="javascript:;" class="roll_search_all_result" id="moreResult">查看所有搜索结果</a>');
            var i = t(n),
                o = i.eq(e);
            return o.addClass("ahover"), "selectbox" === this.type && this.$input.val(o.text()), this.$dropdownArea.html(i), this.$options = i, this.selectedIndex = e, this
        }, o.prototype.show = function() {
            return this.$dropdownArea.slideDown(200), this
        }, o.prototype.hide = function() {
            return this.$dropdownArea.slideUp(200), this
        }, o.prototype.bindEvents = function() {
            var e = this,
                n = null;
            return this.hideDoropdown && this.$input.on("focus", function() {
                e.$clearInput.show()
            }).on("blur", function() {
                n && clearTimeout(n), n = setTimeout(function() {
                    e.$clearInput.hide()
                }, 100)
            }), this.$dropdownTrigger.on("click", function(t) {
                return e.$dropdownArea.slideToggle(200), !1
            }), this.$clearInput.on("click", function(t) {
                e.$input.val(""), e.$dropdownArea.slideUp(200)
            }), this.$dropdownArea.on("click", "a", function(n) {
                var i = t(this);
                return e.switchHighlightOption(e.$options.index(i), e.selectedIndex), e.selected(i), !1
            }), t(window).on("click", function() {
                e.$dropdownArea.slideUp(200)
            }), this.$input.on("keydown", function(t) {
                var n = e.selectedIndex,
                    i = e.selectedIndex;
                27 === t.keyCode ? e.$dropdownArea.slideUp(200) : 13 === t.keyCode ? (e.selected(e.$options.eq(e.selectedIndex)), e.$dropdownArea.slideUp(200)) : 38 === t.keyCode ? e.$dropdownArea.is(":visible") && (i = n < 1 ? e.options.length - 1 : n - 1, e.switchHighlightOption(i, n), t.preventDefault()) : 40 === t.keyCode && e.$dropdownArea.is(":visible") && (i = (n + 1) % e.options.length, e.switchHighlightOption(i, n), t.preventDefault())
            }), this.$select.on("update", function() {
                e.syncData()
            }), this
        }, o.prototype.selected = function(t) {
            var e,
                n = this,
                i = t.data("value");
            return n.$select.val(t.data("value")), "selectbox" === n.type ? (e = n.$select.val(), n.$input.val(t.data("text")), e !== i && (n.$input.val(t.text()), n.$select.val(i), n.$select.trigger("change"))) : "combobox" === n.type && (e = n.$input.val(), e !== i && (n.$input.val(i), n.$select.val(i), n.$input.trigger("change"), n.$select.trigger("change"))), n.hide(), this
        }, o.prototype.switchHighlightOption = function(t, e) {
            var n = this;
            return n.selectedIndex = t, n.$options.eq(e).removeClass("ahover").end().eq(t).addClass("ahover"), this
        }, o
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(13)], r = function(t, e) {
        var n = function(t) {
            if (t || (t = {}), !t.$input)
                throw new Error("Please specify the number input element by '$input' param.");
            this.init(t).bindEvents()
        };
        return n.prototype.init = function(e) {
            this.$input = t(e.$input);
            var n = this.$input.parent();
            return this.$increase = n.find(".ui-numberinput-increase"), this.$decrease = n.find(".ui-numberinput-decrease"), this.step = this.$input.attr("step") || 1, this.forbidNegative = e.forbidNegative || !!this.$input.attr("data-forbid-negative"), this
        }, n.prototype.bindEvents = function() {
            var e = this;
            this.$increase.on("click", function() {
                return e.clickHandler("increase"), !1
            }), this.$decrease.on("click", function() {
                return e.clickHandler("decrease"), !1
            }), this.$input.on("change", function() {
                e.onInputChange(t(this).val())
            })
        }, n.prototype.clickHandler = function(t) {
            this.step = this.$input.attr("step") || 1;
            var n = +this.$input.val(),
                i = "increase" === t ? 1 : -1;
            !isNaN(n) && n || (n = 0);
            var r = n + this.step * i;
            if (r < 0 && this.forbidNegative)
                r = 0;
            else {
                var o = e.stock.getFloatLen(n);
                r = this.recheckValue(r, o)
            }
            return this.$input.val(r), r
        }, n.prototype.recheckValue = function(t, n) {
            var i = e.stock.getFloatLen(this.step);
            return +t.toFixed(i > n ? i : n)
        }, n.prototype.onInputChange = function(t) {
            return (t < 0 && this.forbidNegative || isNaN(t)) && (t = 0, this.$input.val(0)), t
        }, n
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(14), n(15), n(16)], r = function(t, e, n, i) {
        var r = {};
        return r.uri = {}, r.uri.parseQueryString = function(t) {
            t || (t = location.search), t = t.replace(/^\?/, "");
            var e = {};
            return t.split("&").forEach(function(t) {
                var n = t.split("=", 2);
                n[0] && (n[1] ? e[n[0]] = n[1] : e[n[0]] = !0)
            }), e
        }, r.getasrf = function() {
            var e = t("[name=csrf-param]").attr("content"),
                n = t("[name=csrf-token]").attr("content"),
                i = {};
            return i[e] = n, i
        }, r.action = {}, r.action.action2Code = function(t) {
            var e = {
                sell: "A",
                buy: "B"
            };
            return e[t]
        }, r.action.code2Action = function(t) {
            var e = {
                    A: "sell",
                    B: "buy"
                },
                n = {
                    65: "sell",
                    66: "buy"
                };
            return isNaN(t) ? e[t] : n[t]
        }, r.stock = n, r.sprd = {}, r.sprd.getPriceStep = function(t, e, n) {
            var r;
            if (e) {
                var o = i.filter(function(t) {
                    return +t.c === +e
                })[0];
                o && (r = o.list)
            } else
                r = [];
            if (3 == t)
                return .01;
            if (1 == t) {
                if (!r.length)
                    return .01;
                if (isNaN(n) || n < 0)
                    return +(r[0].s / 1e3).toFixed(3);
                n *= 1e3;
                for (var s = r.length; s--;) {
                    var a = r[s];
                    if (n >= a.f)
                        return +(a.s / 1e3).toFixed(3)
                }
                return +(this.spreadList[0].s / 1e3).toFixed(3)
            }
            return 0
        }, r.sprd.getPriceStepList = function(t, e, n) {
            var r;
            if (e) {
                var o = i.filter(function(t) {
                    return +t.c === +e
                })[0];
                o && (r = o.list)
            } else
                r = [];
            if (3 == t)
                return .01;
            if (1 == t) {
                if (!r.length)
                    return .01;
                if (isNaN(n) || n < 0)
                    return +(r[0].s / 1e3).toFixed(3);
                n *= 1e3;
                for (var s = [], a = r.length, c = 0; c < a; ++c) {
                    var u = r[c];
                    if ((n > u.f && n <= u.t || n == u.f) && s.push(+(u.s / 1e3).toFixed(3)), s.length >= 2)
                        return s
                }
                return 1 == s.length ? s[0] : +(r[a - 1].s / 1e3).toFixed(3)
            }
            return 0
        }, r.parseTime = function(t) {
            var e = Math.floor(t / 86400);
            t %= 86400;
            var n = Math.floor(t / 3600);
            t %= 3600;
            var i = Math.floor(t / 60),
                r = t % 60;
            return {
                days: e < 10 ? "0" + e : e,
                hours: n < 10 ? "0" + n : n,
                minutes: i < 10 ? "0" + i : i,
                seconds: r < 10 ? "0" + r : r
            }
        }, r.formatTime = function(t, e) {
            var n = new Date(t),
                i = n.getMonth() + 1,
                r = n.getDate();
            i < 10 && (i = "0" + i), r < 10 && (r = "0" + r);
            var o = [n.getFullYear(), i, r];
            return void 0 !== e ? o.join(e) : o
        }, r
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    (function() {
        function o(t) {
            this._value = t
        }
        function s(t, e, n, i) {
            var r,
                o,
                s = Math.pow(10, e);
            return o = (n(t * s) / s).toFixed(e), i && (r = new RegExp("0{1," + i + "}$"), o = o.replace(r, "")), o
        }
        function a(t, e, n) {
            var i;
            return i = e.indexOf("$") > -1 ? u(t, e, n) : e.indexOf("%") > -1 ? l(t, e, n) : e.indexOf(":") > -1 ? d(t, e) : f(t._value, e, n)
        }
        function c(t, e) {
            var n,
                i,
                r,
                o,
                s,
                a = e,
                c = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                u = !1;
            if (e.indexOf(":") > -1)
                t._value = h(e);
            else if (e === _)
                t._value = 0;
            else {
                for ("." !== w[b].delimiters.decimal && (e = e.replace(/\./g, "").replace(w[b].delimiters.decimal, ".")), n = new RegExp("[^a-zA-Z]" + w[b].abbreviations.thousand + "(?:\\)|(\\" + w[b].currency.symbol + ")?(?:\\))?)?$"), i = new RegExp("[^a-zA-Z]" + w[b].abbreviations.million + "(?:\\)|(\\" + w[b].currency.symbol + ")?(?:\\))?)?$"), r = new RegExp("[^a-zA-Z]" + w[b].abbreviations.billion + "(?:\\)|(\\" + w[b].currency.symbol + ")?(?:\\))?)?$"), o = new RegExp("[^a-zA-Z]" + w[b].abbreviations.trillion + "(?:\\)|(\\" + w[b].currency.symbol + ")?(?:\\))?)?$"), s = 0; s <= c.length && !(u = e.indexOf(c[s]) > -1 && Math.pow(1024, s + 1)); s++)
                    ;
                t._value = (u ? u : 1) * (a.match(n) ? Math.pow(10, 3) : 1) * (a.match(i) ? Math.pow(10, 6) : 1) * (a.match(r) ? Math.pow(10, 9) : 1) * (a.match(o) ? Math.pow(10, 12) : 1) * (e.indexOf("%") > -1 ? .01 : 1) * ((e.split("-").length + Math.min(e.split("(").length - 1, e.split(")").length - 1)) % 2 ? 1 : -1) * Number(e.replace(/[^0-9\.]+/g, "")), t._value = u ? Math.ceil(t._value) : t._value
            }
            return t._value
        }
        function u(t, e, n) {
            var i,
                r,
                o = e.indexOf("$"),
                s = e.indexOf("("),
                a = e.indexOf("-"),
                c = "";
            return e.indexOf(" $") > -1 ? (c = " ", e = e.replace(" $", "")) : e.indexOf("$ ") > -1 ? (c = " ", e = e.replace("$ ", "")) : e = e.replace("$", ""), r = f(t._value, e, n), 1 >= o ? r.indexOf("(") > -1 || r.indexOf("-") > -1 ? (r = r.split(""), i = 1, (s > o || a > o) && (i = 0), r.splice(i, 0, w[b].currency.symbol + c), r = r.join("")) : r = w[b].currency.symbol + c + r : r.indexOf(")") > -1 ? (r = r.split(""), r.splice(-1, 0, c + w[b].currency.symbol), r = r.join("")) : r = r + c + w[b].currency.symbol, r
        }
        function l(t, e, n) {
            var i,
                r = "",
                o = 100 * t._value;
            return e.indexOf(" %") > -1 ? (r = " ", e = e.replace(" %", "")) : e = e.replace("%", ""), i = f(o, e, n), i.indexOf(")") > -1 ? (i = i.split(""), i.splice(-1, 0, r + "%"), i = i.join("")) : i = i + r + "%", i
        }
        function d(t) {
            var e = Math.floor(t._value / 60 / 60),
                n = Math.floor((t._value - 60 * e * 60) / 60),
                i = Math.round(t._value - 60 * e * 60 - 60 * n);
            return e + ":" + (10 > n ? "0" + n : n) + ":" + (10 > i ? "0" + i : i)
        }
        function h(t) {
            var e = t.split(":"),
                n = 0;
            return 3 === e.length ? (n += 60 * Number(e[0]) * 60, n += 60 * Number(e[1]), n += Number(e[2])) : 2 === e.length && (n += 60 * Number(e[0]), n += Number(e[1])), Number(n)
        }
        function f(t, e, n) {
            var i,
                r,
                o,
                a,
                c,
                u,
                l = !1,
                d = !1,
                h = !1,
                f = "",
                p = !1,
                m = !1,
                g = !1,
                v = !1,
                y = !1,
                x = "",
                k = "",
                T = Math.abs(t),
                C = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                M = "",
                S = !1;
            if (0 === t && null !== _)
                return _;
            if (e.indexOf("(") > -1 ? (l = !0, e = e.slice(1, -1)) : e.indexOf("+") > -1 && (d = !0, e = e.replace(/\+/g, "")), e.indexOf("a") > -1 && (p = e.indexOf("aK") >= 0, m = e.indexOf("aM") >= 0, g = e.indexOf("aB") >= 0, v = e.indexOf("aT") >= 0, y = p || m || g || v, e.indexOf(" a") > -1 ? (f = " ", e = e.replace(" a", "")) : e = e.replace("a", ""), T >= Math.pow(10, 12) && !y || v ? (f += w[b].abbreviations.trillion, t /= Math.pow(10, 12)) : T < Math.pow(10, 12) && T >= Math.pow(10, 9) && !y || g ? (f += w[b].abbreviations.billion, t /= Math.pow(10, 9)) : T < Math.pow(10, 9) && T >= Math.pow(10, 6) && !y || m ? (f += w[b].abbreviations.million, t /= Math.pow(10, 6)) : (T < Math.pow(10, 6) && T >= Math.pow(10, 3) && !y || p) && (f += w[b].abbreviations.thousand, t /= Math.pow(10, 3))), e.indexOf("b") > -1)
                for (e.indexOf(" b") > -1 ? (x = " ", e = e.replace(" b", "")) : e = e.replace("b", ""), o = 0; o <= C.length; o++)
                    if (i = Math.pow(1024, o), r = Math.pow(1024, o + 1), t >= i && r > t) {
                        x += C[o], i > 0 && (t /= i);
                        break
                    }
            return e.indexOf("o") > -1 && (e.indexOf(" o") > -1 ? (k = " ", e = e.replace(" o", "")) : e = e.replace("o", ""), k += w[b].ordinal(t)), e.indexOf("[.]") > -1 && (h = !0, e = e.replace("[.]", ".")), a = t.toString().split(".")[0], c = e.split(".")[1], u = e.indexOf(","), c ? (c.indexOf("[") > -1 ? (c = c.replace("]", ""), c = c.split("["), M = s(t, c[0].length + c[1].length, n, c[1].length)) : M = s(t, c.length, n), a = M.split(".")[0], M = M.split(".")[1].length ? w[b].delimiters.decimal + M.split(".")[1] : "", h && 0 === Number(M.slice(1)) && (M = "")) : a = s(t, null, n), a.indexOf("-") > -1 && (a = a.slice(1), S = !0), u > -1 && (a = a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + w[b].delimiters.thousands)), 0 === e.indexOf(".") && (a = ""), (l && S ? "(" : "") + (!l && S ? "-" : "") + (!S && d ? "+" : "") + a + M + (k ? k : "") + (f ? f : "") + (x ? x : "") + (l && S ? ")" : "")
        }
        function p(t, e) {
            w[t] = e
        }
        function m(t) {
            var e = t.toString().split(".");
            return e.length < 2 ? 1 : Math.pow(10, e[1].length)
        }
        function g() {
            var t = Array.prototype.slice.call(arguments);
            return t.reduce(function(t, e) {
                var n = m(t),
                    i = m(e);
                return n > i ? n : i
            }, -(1 / 0))
        }
        var v,
            y = "1.5.3",
            w = {},
            b = "en",
            _ = null,
            x = "0,0",
            k = "undefined" != typeof t && t.exports;
        v = function(t) {
            return v.isNumeral(t) ? t = t.value() : 0 === t || "undefined" == typeof t ? t = 0 : Number(t) || (t = v.fn.unformat(t)), new o(Number(t))
        }, v.version = y, v.isNumeral = function(t) {
            return t instanceof o
        }, v.language = function(t, e) {
            if (!t)
                return b;
            if (t && !e) {
                if (!w[t])
                    throw new Error("Unknown language : " + t);
                b = t
            }
            return (e || !w[t]) && p(t, e), v
        }, v.languageData = function(t) {
            if (!t)
                return w[b];
            if (!w[t])
                throw new Error("Unknown language : " + t);
            return w[t]
        }, v.language("en", {
            delimiters: {
                thousands: ",",
                decimal: "."
            },
            abbreviations: {
                thousand: "k",
                million: "m",
                billion: "b",
                trillion: "t"
            },
            ordinal: function(t) {
                var e = t % 10;
                return 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th"
            },
            currency: {
                symbol: "$"
            }
        }), v.zeroFormat = function(t) {
            _ = "string" == typeof t ? t : null
        }, v.defaultFormat = function(t) {
            x = "string" == typeof t ? t : "0.0"
        }, "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(t, e) {
            "use strict";
            if (null === this || "undefined" == typeof this)
                throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof t)
                throw new TypeError(t + " is not a function");
            var n,
                i,
                r = this.length >>> 0,
                o = !1;
            for (1 < arguments.length && (i = e, o = !0), n = 0; r > n; ++n)
                this.hasOwnProperty(n) && (o ? i = t(i, this[n], n, this) : (i = this[n], o = !0));
            if (!o)
                throw new TypeError("Reduce of empty array with no initial value");
            return i
        }), v.fn = o.prototype = {
            clone: function() {
                return v(this)
            },
            format: function(t, e) {
                return a(this, t ? t : x, void 0 !== e ? e : Math.round)
            },
            unformat: function(t) {
                return "[object Number]" === Object.prototype.toString.call(t) ? t : c(this, t ? t : x)
            },
            value: function() {
                return this._value
            },
            valueOf: function() {
                return this._value
            },
            set: function(t) {
                return this._value = Number(t), this
            },
            add: function(t) {
                function e(t, e, i, r) {
                    return t + n * e
                }
                var n = g.call(null, this._value, t);
                return this._value = [this._value, t].reduce(e, 0) / n, this
            },
            subtract: function(t) {
                function e(t, e, i, r) {
                    return t - n * e
                }
                var n = g.call(null, this._value, t);
                return this._value = [t].reduce(e, this._value * n) / n, this
            },
            multiply: function(t) {
                function e(t, e, n, i) {
                    var r = g(t, e);
                    return t * r * e * r / (r * r)
                }
                return this._value = [this._value, t].reduce(e, 1), this
            },
            divide: function(t) {
                function e(t, e, n, i) {
                    var r = g(t, e);
                    return t * r / (e * r)
                }
                return this._value = [this._value, t].reduce(e), this
            },
            difference: function(t) {
                return Math.abs(v(this._value).subtract(t).value())
            }
        }, v.language("zh-cn", {
            delimiters: {
                thousands: ",",
                decimal: "."
            },
            abbreviations: {
                thousand: "千",
                million: "百万",
                billion: "十亿",
                trillion: "兆"
            },
            ordinal: function(t) {
                return "."
            },
            currency: {
                symbol: "¥"
            }
        }), k && (t.exports = v), "undefined" == typeof ender && (this.numeral = v), n(3) && (i = [], r = function() {
            return v
        }.apply(e, i), !(void 0 !== r && (t.exports = r)))
    }).call(this)
}, function(t, e, n) {
    var i,
        r;
    i = [n(14)], r = function(t) {
        var e = {};
        return e.getMarketType = function(t, e) {
            if (isNaN(t) && "string" == typeof t)
                return t.toUpperCase();
            if (t = +t, !e) {
                var n = {
                    1: "HK",
                    2: "US",
                    3: "CN"
                };
                return n[t]
            }
            return t >= 1 && t <= 5 ? "HK" : t >= 10 && t <= 29 ? "US" : 30 == t ? "SH" : 31 == t ? "SZ" : "UNKNOWN"
        }, e.getFullStockCode = function(t, e, n) {
            var i = this.getMarketType(e);
            if (t += "", "HK" === i)
                for (; t.length < 5;)
                    t = "0" + t;
            return n && (t += "." + i), t
        }, e.getDirectByChange = function(t) {
            return t = +t, t > 0 ? "up" : t < 0 ? "down" : "flat"
        }, e.formatAvePrice = function(e) {
            return isNaN(e) ? "--" : t(e).format("0.00[000]")
        }, e.formatPrice = function(e, n, i) {
            var r = this.getMarketType(n, i),
                o = "US" == r ? "0.00[000]" : "0.00[0]";
            return isNaN(e) ? "--" : t(e).format(o)
        }, e.formatQuotePrice = function(e, n) {
            return isNaN(e) ? "--" : t(e).format("0.000")
        }, e.formatMoney = function(e, n, i) {
            var r = this.getMarketType(n, i),
                o = "US" == r ? "0,0.00[000]" : "0,0.00[0]";
            return isNaN(e) ? "--" : t(e).format(o)
        }, e.formatMoneyChange = function(e, n, i) {
            var r = this.getMarketType(n, i),
                o = "US" == r ? "+0,0.00[000]" : "+0,0.00[0]";
            return isNaN(e) ? "--" : t(e).format(o)
        }, e.formatKM = function(e) {
            return isNaN(e) ? "--" : e < 0 ? e : t(e).format("0.[000]a").toUpperCase()
        }, e.getFloatLen = function(t) {
            return "" === t ? t : isNaN(t) ? 0 : /\.(\d+)$/.test(t) ? RegExp.$1.length : 0
        }, e.formatRatio = function(e) {
            return isNaN(e) ? "--" : t(e).format("+0.00%")
        }, e.getCurrency = function(t) {
            var e = this.getMarketType(t);
            switch (e) {
            case "HK":
                return "HKD";
            case "US":
                return "USD";
            case "CN":
                return "CNY"
            }
            return ""
        }, e
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e) {
    var n = [{
        c: 1,
        list: [{
            f: 0,
            t: 100,
            s: 1
        }, {
            f: 100,
            t: 200,
            s: 1
        }, {
            f: 200,
            t: 250,
            s: 1
        }, {
            f: 250,
            t: 400,
            s: 5
        }, {
            f: 400,
            t: 500,
            s: 5
        }, {
            f: 500,
            t: 750,
            s: 10
        }, {
            f: 750,
            t: 1e3,
            s: 10
        }, {
            f: 1e3,
            t: 1250,
            s: 10
        }, {
            f: 1250,
            t: 1500,
            s: 10
        }, {
            f: 1500,
            t: 1750,
            s: 10
        }, {
            f: 1750,
            t: 2e3,
            s: 10
        }, {
            f: 2e3,
            t: 2500,
            s: 10
        }, {
            f: 2500,
            t: 3e3,
            s: 10
        }, {
            f: 3e3,
            t: 3500,
            s: 10
        }, {
            f: 3500,
            t: 4e3,
            s: 10
        }, {
            f: 4e3,
            t: 4500,
            s: 10
        }, {
            f: 4500,
            t: 5e3,
            s: 10
        }, {
            f: 5e3,
            t: 1e4,
            s: 10
        }, {
            f: 1e4,
            t: 15e3,
            s: 20
        }, {
            f: 15e3,
            t: 2e4,
            s: 20
        }, {
            f: 2e4,
            t: 25e3,
            s: 50
        }, {
            f: 25e3,
            t: 3e4,
            s: 50
        }, {
            f: 3e4,
            t: 35e3,
            s: 50
        }, {
            f: 35e3,
            t: 4e4,
            s: 50
        }, {
            f: 4e4,
            t: 45e3,
            s: 50
        }, {
            f: 45e3,
            t: 5e4,
            s: 50
        }, {
            f: 5e4,
            t: 55e3,
            s: 50
        }, {
            f: 55e3,
            t: 6e4,
            s: 50
        }, {
            f: 6e4,
            t: 65e3,
            s: 50
        }, {
            f: 65e3,
            t: 7e4,
            s: 50
        }, {
            f: 7e4,
            t: 75e3,
            s: 50
        }, {
            f: 75e3,
            t: 8e4,
            s: 50
        }, {
            f: 8e4,
            t: 85e3,
            s: 50
        }, {
            f: 85e3,
            t: 9e4,
            s: 50
        }, {
            f: 9e4,
            t: 95e3,
            s: 50
        }, {
            f: 95e3,
            t: 1e5,
            s: 50
        }, {
            f: 1e5,
            t: 15e4,
            s: 100
        }, {
            f: 15e4,
            t: 2e5,
            s: 100
        }, {
            f: 2e5,
            t: 3e5,
            s: 200
        }, {
            f: 3e5,
            t: 4e5,
            s: 200
        }, {
            f: 4e5,
            t: 5e5,
            s: 200
        }, {
            f: 5e5,
            t: 75e4,
            s: 500
        }, {
            f: 75e4,
            t: 1e6,
            s: 500
        }, {
            f: 1e6,
            t: 15e5,
            s: 1e3
        }, {
            f: 15e5,
            t: 2e6,
            s: 1e3
        }, {
            f: 2e6,
            t: 3e6,
            s: 2e3
        }, {
            f: 3e6,
            t: 4e6,
            s: 2e3
        }, {
            f: 4e6,
            t: 5e6,
            s: 2e3
        }, {
            f: 5e6,
            t: 75e5,
            s: 5e3
        }, {
            f: 75e5,
            t: 9995e3,
            s: 5e3
        }]
    }, {
        c: 2,
        list: [{
            f: 0,
            t: 2e4,
            s: 125
        }, {
            f: 2e4,
            t: 3e4,
            s: 125
        }, {
            f: 3e4,
            t: 4e4,
            s: 125
        }, {
            f: 4e4,
            t: 5e4,
            s: 125
        }, {
            f: 5e4,
            t: 6e4,
            s: 125
        }, {
            f: 6e4,
            t: 65e3,
            s: 125
        }, {
            f: 65e3,
            t: 7e4,
            s: 125
        }, {
            f: 7e4,
            t: 75e3,
            s: 125
        }, {
            f: 75e3,
            t: 8e4,
            s: 125
        }, {
            f: 8e4,
            t: 85e3,
            s: 125
        }, {
            f: 85e3,
            t: 9e4,
            s: 125
        }, {
            f: 9e4,
            t: 91e3,
            s: 125
        }, {
            f: 91e3,
            t: 92e3,
            s: 125
        }, {
            f: 92e3,
            t: 93e3,
            s: 125
        }, {
            f: 93e3,
            t: 94e3,
            s: 125
        }, {
            f: 94e3,
            t: 95e3,
            s: 125
        }, {
            f: 95e3,
            t: 96e3,
            s: 125
        }, {
            f: 96e3,
            t: 97e3,
            s: 125
        }, {
            f: 97e3,
            t: 98e3,
            s: 125
        }, {
            f: 98e3,
            t: 99e3,
            s: 125
        }, {
            f: 99e3,
            t: 1e5,
            s: 125
        }, {
            f: 1e5,
            t: 101e3,
            s: 125
        }, {
            f: 101e3,
            t: 102e3,
            s: 125
        }, {
            f: 102e3,
            t: 103e3,
            s: 125
        }, {
            f: 103e3,
            t: 104e3,
            s: 125
        }, {
            f: 104e3,
            t: 105e3,
            s: 125
        }, {
            f: 105e3,
            t: 107500,
            s: 125
        }, {
            f: 107500,
            t: 11e4,
            s: 125
        }, {
            f: 11e4,
            t: 112500,
            s: 125
        }, {
            f: 112500,
            t: 115e3,
            s: 125
        }, {
            f: 115e3,
            t: 12e4,
            s: 125
        }, {
            f: 12e4,
            t: 125e3,
            s: 125
        }, {
            f: 125e3,
            t: 13e4,
            s: 125
        }, {
            f: 13e4,
            t: 14e4,
            s: 125
        }, {
            f: 14e4,
            t: 15e4,
            s: 125
        }, {
            f: 15e4,
            t: 2e5,
            s: 125
        }, {
            f: 2e5,
            t: 3e5,
            s: 125
        }, {
            f: 3e5,
            t: 4e5,
            s: 125
        }, {
            f: 4e5,
            t: 5e5,
            s: 125
        }, {
            f: 5e5,
            t: 1e6,
            s: 125
        }, {
            f: 1e6,
            t: 2e6,
            s: 125
        }, {
            f: 2e6,
            t: 3e6,
            s: 125
        }, {
            f: 3e6,
            t: 4e6,
            s: 125
        }, {
            f: 4e6,
            t: 5e6,
            s: 125
        }, {
            f: 5e6,
            t: 6e6,
            s: 125
        }, {
            f: 6e6,
            t: 7e6,
            s: 125
        }, {
            f: 7e6,
            t: 8e6,
            s: 125
        }, {
            f: 8e6,
            t: 9e6,
            s: 125
        }, {
            f: 9e6,
            t: 9999875,
            s: 125
        }]
    }, {
        c: 3,
        list: []
    }];
    t.exports = n
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(18), n(19), n(20), n(52), n(48), n(4)], r = function(t, e, n, i, r, o, s) {
        var a = function(i) {
            i || (i = {}), i = t.extend({
                withMask: !0,
                $wrapper: t(n).appendTo("body"),
                elementMap: {
                    closeBtn: ".ui-dialog-closeBtn"
                },
                dialogTitle: "注册",
                icon: "iconfont"
            }, i), this.$wrapper = i.$wrapper, this.dialog = new e(i), this.init()
        };
        return a.prototype.init = function() {
            var e = this;
            this.registerForm = new i({
                $wrapper: this.$wrapper,
                isDynamic: !0,
                cb: function(t, i) {
                    e.dialog.remove(), r.show(i.nick, t.id), n(i, t)
                }
            }), this.$wrapper.find(".ui-login-link").on("click", function(t) {
                t.preventDefault(), e.$wrapper.animate({
                    left: "100%"
                }, "normal", null, function() {
                    o.publish("popLogin", e.dialog)
                })
            });
            var n = function(e, n) {
                var i = t("#newUserDialog");
                n.qrcode && i.find("img.qrcode").attr("src", n.qrcode);
                var r = 0,
                    o = !0,
                    a = function() {
                        r++ >= 119 && (o = !1, t("#refresh").show(), clearInterval(c)), s({
                            url: "/site/check-wechat",
                            type: "POST"
                        }, function(e) {
                            1 === e.data.related ? (t("#success").show(), clearInterval(c)) : e.data.qrcode && i.find("img.qrcode").attr("src", e.data.qrcode)
                        }, function(t) {
                            clearInterval(c)
                        })
                    },
                    c = setInterval(a, 5e3);
                i.on("click", "#refresh", function() {
                    return !o && (t(this).hide(), o = !0, r = 0, a(), c = setInterval(a, 5e3), void 0)
                })
            }
        }, a
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2)], r = function(t) {
        var e = '<div class="ui-dialog-wrapper"><div class="ui-dialog-dialogTitle">   <button class="ui-dialog-closeBtn iconfont" data-ui-dialog-event="close">&#xe605;</button>   <h3></h3></div><div class="ui-dialog-dialogBody ui-dialog-hasIcon">   <em class="warning iconfont"><font class="warning-font">&#xe624;</font><font class="ok-font">&#xe623;</font></em>   <p class="ui-dialog-messageTitle"></p>   <p class="ui-dialog-messageBody"></p></div><div class="ui-dialog-dialogFooter">   <button type="submit" class="button btn01 submitBtn" data-ui-dialog-event="submit">确定</button>   <button type="button" class="button btn02 cancelBtn" data-ui-dialog-event="cancel">取消</button></div></div>',
            n = t("#ui-dialog-mask");
        n.length || (n = t('<div id="ui-dialog-mask"></div>').appendTo(document.body));
        var i = 0,
            r = function(t) {
                t || (t = {}), this.initData(t).initUi().bindEvents()
            };
        return r.prototype.initData = function(n) {
            this.dialogTitle = "undefined" != typeof n.dialogTitle ? n.dialogTitle : "提示", this.messageTitle = "undefined" != typeof n.messageTitle ? n.messageTitle : "提示", this.messageBody = n.messageBody, this.showDialogTitle = "undefined" == typeof n.showDialogTitle || n.showClose, this.showClose = "undefined" == typeof n.showClose || n.showClose, this.showCancel = "undefined" == typeof n.showCancel || n.showCancel, this.showSubmit = "undefined" == typeof n.showSubmit || n.showSubmit, this.showMessageTitle = "undefined" == typeof n.showMessageTitle || n.showMessageTitle, this.withMask = "undefined" == typeof n.withMask || n.withMask, this.showFooter = "undefined" == typeof n.showFooter || n.showFooter, this.submitBtnText = n.submitBtnText, this.cancelBtnText = n.cancelBtnText, this.onBtnClick = n.onBtnClick || t.noop, this.icon = "undefined" != typeof n.icon ? n.icon : "warning", n.elementMap || (n.elementMap = {}), this.elementMap = {
                dialogTitle: n.elementMap.dialogTitle || ".ui-dialog-dialogTitle h3",
                closeBtn: n.elementMap.closeBtn || ".ui-dialog-dialogTitle .ui-dialog-closeBtn",
                messageTitle: n.elementMap.messageTitle || ".ui-dialog-dialogBody .ui-dialog-messageTitle",
                messageBody: n.elementMap.messageBody || ".ui-dialog-dialogBody .ui-dialog-messageBody",
                submitBtn: n.elementMap.submitBtn || ".ui-dialog-dialogFooter button[type=submit]",
                cancelBtn: n.elementMap.cancelBtn || ".ui-dialog-dialogFooter button[type=button]"
            }, this.$wrapper = n.$wrapper || t(e).appendTo("body"), this.$footer = this.$wrapper.find(".ui-dialog-dialogFooter"), this.$body = this.$wrapper.find(".ui-dialog-dialogBody"), this.$icon = this.$body.find("em");
            for (var i in this.elementMap)
                this["$" + i] = this.$wrapper.find(this.elementMap[i]);
            return this.buttons = [this.$submitBtn, this.$cancelBtn, this.$closeBtn], n.buttons && ("undefined" == typeof n.keepDefault || n.keepDefault ? this.buttons = this.buttons.concat(n.buttons) : (this.$submitBtn.remove(), this.$cancelBtn.remove(), this.buttons = n.buttons)), this.onRemove = n.onRemove || t.noop, this._isShow = "undefined" == typeof n.show || n.show, this._isFocus = !1, this
        }, r.prototype.initUi = function() {
            return this.dialogTitle ? this.$dialogTitle.html(this.dialogTitle) : this.$dialogTitle.parent().remove(), this.messageTitle ? this.$messageTitle.html(this.messageTitle) : this.$messageTitle.remove(), this.$messageBody.html(this.messageBody), this.$submitBtn && this.submitBtnText && this.$submitBtn.text(this.submitBtnText), this.$cancelBtn && this.cancelBtnText && this.$cancelBtn.text(this.cancelBtnText), this.showFooter ? (this.showSubmit || this.$submitBtn.remove(), this.showCancel || this.$cancelBtn.remove()) : this.$footer.remove(), this.showClose || this.$closeBtn.remove(), this.showMessageTitle || this.$messageTitle.remove(), this._isShow && this.show(), this.icon ? this.$icon.remove("warning ok").addClass(this.icon) : (this.$icon.remove(), this.$body.removeClass("ui-dialog-hasIcon"), ("提示" !== this.messageTitle || this.messageBody) && this.$body.addClass("ui-dialog-noIcon")), this
        }, r.prototype.bindEvents = function() {
            var e = this;
            t.each(this.buttons, function() {
                var n = t(this, e.$wrapper),
                    i = n.data("ui-dialog-event");
                n.on("click", function() {
                    var t = e.onBtnClick(i);
                    ("undefined" == typeof t || t) && e.remove()
                })
            })
        }, r.prototype.show = function() {
            this.$wrapper.show(), this._isShow = !0, this.withMask && (n.show(), i++)
        }, r.prototype.hide = function() {
            this.$wrapper.hide(), this._isShow = !1, this.withMask && (i--, i <= 0 && (n.hide(), i = 0))
        }, r.prototype.remove = function() {
            this.hide(), this.$wrapper.remove(), this.onRemove()
        }, r
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e) {
    t.exports = '<div class="ui-dialog-wrapper ui-dialog-wrapper-03" style="margin-top:-250px;">\n    <div class="ui-dialog-dialogTitle ui-dialog-dialogTitle-3">\n        <button data-ui-dialog-event="close" class="ui-dialog-closeBtn iconfont">&#xe605;</button>\n        <h3>注册</h3>\n    </div>\n    <div class="ui-dialog-dialogBody">\n        <div class="floatLoginBox01">\n            <form>\n                <input type="password" style="display: none;" name="hack">\n                <div class="c001">\n                    <ul>\n                        <li class="li01 js-error-wrapper" style="display: none;">\n                            <div class="floatMsgBar01"><i></i><em>&#xe626;</em><span class="js-error-msg"></span></div>\n                        </li>\n                        <li class="li01 js-input-wrapper">\n                            <span class="iconfont row">&#xe610;</span>\n                            <input type="text" placeholder="注册邮箱" class="inputTxt01" name="email">\n                            <a href="javascript:void(0)" class="fr01 orange ui-login-link" tabindex="-1">登录</a>\n                            <div class="msgTxt js-form-input-msg" style="display: none;"></div>\n                        </li>\n                        <li class="li01 js-input-wrapper">\n                            <span class="iconfont row">&#xe60f;</span>\n                            <input type="password" placeholder="登录密码" class="inputTxt01" name="password">\n                            <div class="msgTxt js-form-input-msg" style="display: none;"></div>\n                        </li>\n                        <li class="li01 js-input-wrapper">\n                            <span class="iconfont row">&#xe60e;</span>\n                            <input type="text" placeholder="昵称" class="inputTxt01" name="nick">\n                            <div class="msgTxt js-form-input-msg" style="display: none;"></div>\n                        </li>\n                        <li class="li02 js-input-wrapper">\n                            <div class="clearBox">\n                                <span class="iconfont row">&#xe611;</span>\n                                <input type="text" class="inputTxt01" name="captcha" placeholder="验证码">\n                                <span class="yzmSpan" name="imgWrapper"></span>\n                                <span class="yzmSpan"><a href="javascript:void(0)" class="ui-refresh-captcha">换一个</a></span>\n                            </div>\n                            <div class="msgTxt js-form-input-msg" style="display: none;"></div>\n                        </li>\n                        <!--\n                        <li class="li01 ui-submit"><button class="button button100 btn01" type="submit">注册</button></li>\n                        <li class="li01 ui-submitting" style="display: none;"><a class="button button100 btn01 btnDis01" href="javascript:void(0)"><span class="loading"></span><span>提交中...</span></a></li>\n                        -->\n                        <li class="li04 js-input-wrapper">\n                            <span class="fl"><label><input type="checkbox" checked="checked" value="1" name="agreement"><u>同意并遵守<a target="_blank" href="http://www.futu5.com/privacy">隐私声明</a>和<a target="_blank" href="http://www.futu5.com/condition">服务条款</a></u></label></span>\n                        </li>\n                        <li class="li06">\n                            <a href="//www.futunn.com/download/index" target="_blank" class="button btn01 fl">快速了解牛牛</a>\n                            <button class="button btn02 fr ui-submit" type="submit">注 册</button>\n                            <a class="button button100 btn01 btnDis01 fr ui-submitting" style="display: none;" href="javascript:void(0)"><span class="loading"></span><span>提交中...</span></a>\n                        </li>\n                    </ul>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n'
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(6), n(25), n(22), n(23), n(21), n(44), n(45), n(46), n(51)], r = function(t, e, n, i, r, o, s, a, c) {
        return i([o], {
            inputNames: ["email", "password", "nick", "captcha", "agreement"],
            validateNames: ["email", "password", "nick", "captcha", "agreement"],
            errorMsgClassName: "msgError",
            successClassName: "msgOk",
            validator: s,
            validationConfigs: {
                email: {
                    type: "r"
                },
                password: {
                    type: "l"
                },
                nick: {
                    type: "r"
                },
                captcha: {
                    type: "r"
                },
                agreement: {
                    events: "click",
                    type: "l"
                }
            },
            tipConfigs: {
                email: {
                    tip: "输入常用邮箱作为登录帐号"
                },
                nick: {
                    tip: "2-20个字符，限中英文，数字，下划线，减号"
                },
                captcha: {
                    tip: "不区分大小写"
                }
            },
            submitUrl: "/site/signup-request",
            initInputs: function() {
                this.inherited(arguments), this._initCaptcha()
            },
            _initCaptcha: function() {
                this.$imgWrapper = this.$form.find("[name=imgWrapper]");
                var t = this;
                a.getCaptchaUrl().done(function(e) {
                    t.$imgWrapper.html('<img src="' + e + '">')
                }).fail(function() {
                    t.$imgWrapper.html('<img src="">')
                }).always(function() {
                    t.$captchaImg = t.$imgWrapper.children()
                }), this.$wrapper.find(".ui-refresh-captcha").on("click", function() {
                    t.refreshCaptcha()
                })
            },
            refreshCaptcha: function() {
                if (!this.refreshing) {
                    this.refreshing = !0;
                    var t = this;
                    a.getCaptchaUrl().done(function(e) {
                        t.$captchaImg.attr("src", e)
                    }).always(function() {
                        t.refreshing = !1
                    })
                }
            },
            validEmail: function(t) {
                this._validR(t, "email");
                var e = this;
                this.dfdArray.email.done(function() {
                    e._extractNick(t)
                })
            },
            _extractNick: function(t) {
                if ("" === this.$nickInput.val() && t.indexOf("@") > 0) {
                    var e = t.split("@")[0];
                    this.$nickInput.val(e), this.validNick(e)
                }
            },
            onPasswordFocus: function(t, e) {
                this._displayTip("password", s.getPwdTip(e))
            },
            onPasswordInput: function(t, e) {
                this._displayTip("password", s.getPwdTip(e))
            },
            getRemoteValidRet: function(t, e) {
                var n = {};
                return n[t] = e, a.checkRegInfo(n)
            },
            _displayMsg: function(t, e, n, i) {
                "agreement" === t ? this.$agreementInput.is(":checked") ? (this.$errorWrapper.hide(), n && n.resolve()) : (this.$errorMsg.text(e.message || e), this.$errorWrapper.show(), n && n.reject()) : this.inherited(arguments)
            },
            submit: function(i) {
                var r = t.Deferred();
                return a.reg(i, this.submitUrl).done(function(o) {
                    t.cookie("last_login_user", i.email, {
                        expires: 365,
                        path: "/"
                    }), c(o), "https://www.futunn.com/" === window.location.href && n.getSignIn().done(function(n) {
                        if ("0" === n.code) {
                            var i = e.template(t("#creditsSignBoxTemplate").html()),
                                r = t("#creditsSignBox");
                            r.find("div.sign-text").html(i(n.data)), r.show()
                        }
                    }, function(t) {}), r.resolve(o)
                }).fail(function(t) {
                    r.reject(t)
                }), r
            }
        })
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(22), n(23), n(24)], r = function(t, e, n, i) {
        return e([i], {
            grayClassName: "gray01",
            focusClassName: "inputTxtFocus",
            errorMsgClassName: "",
            successClassName: "",
            tipMsgClassName: "",
            dfdArray: {},
            noRemoteValidWhenEmpty: !0,
            validationConfigs: null,
            initDynamicForm: function() {
                t("body").placeholder && this.$wrapper.find("input,textarea").placeholder({
                    customClass: this.grayClassName
                }), this.initStaticForm()
            },
            initStaticForm: function() {
                var e = this;
                this.$wrapper.find("input").focus(function() {
                    t(this).addClass(e.focusClassName)
                }).blur(function() {
                    t(this).removeClass(e.focusClassName)
                })
            },
            initNodes: function() {
                this.$form = this.$wrapper.find("form"), this.$errorMsg = this.$wrapper.find(".js-error-msg"), this.$errorWrapper = this.$errorMsg.closest(".js-error-wrapper"), this.$submitWrapper = this.$form.find(".ui-submit"), this.$submittingWrapper = this.$form.find(".ui-submitting")
            },
            initInputs: function() {
                for (var t = this.inputNames || [], e = 0, n = t.length; e < n; ++e) {
                    var i = t[e],
                        r = this["$" + i + "Input"] = this.$form.find("input[name=" + i + "]"),
                        o = this["$" + i + "Wrapper"] = r.closest(".js-input-wrapper");
                    this["$" + i + "Msg"] = o.find(".js-form-input-msg"), this["$" + i + "Ok"] = o.find(".js-form-input-ok"), this._initInputsExt(i, r, o)
                }
            },
            _initInputsExt: t.noop,
            initDefaultValidations: function() {
                var t = this,
                    e = this.validationConfigs || [];
                for (var n in e) {
                    var i = n.substring(0, 1).toUpperCase() + n.substr(1),
                        r = e[n],
                        o = r.events || [];
                    "string" == typeof o && (o = [o]), o.length || (o = ["blur"]), this["valid" + i] || (this["valid" + i] = function(e, n) {
                        var i = "_valid";
                        return "r" !== n && "remote" !== n || (i = "_validR"), function(n) {
                            t[i](n, e)
                        }
                    }(n, r.type));
                    for (var s = 0, a = o.length; s < a; ++s) {
                        var c = o[s];
                        "input" === c || "focus" === c || "blur" === c || "click" === c ? this["on" + i + c.substring(0, 1).toUpperCase() + c.substr(1)] = function(e) {
                            return function(n, i) {
                                t["valid" + e](i)
                            }
                        }(i) : this["$" + n + "Input"].on(c, function(e, n) {
                            return function() {
                                t["valid" + e](t.getValue(n))
                            }
                        }(i, n))
                    }
                }
            },
            initDefaultTips: function() {
                var t = this,
                    e = this.tipConfigs || [];
                for (var n in e) {
                    var i = e[n];
                    if (i.tip) {
                        var r = n.substring(0, 1).toUpperCase() + n.substr(1),
                            o = i.events || [];
                        "string" == typeof o && (o = [o]), o.length || (o = ["focus"]);
                        for (var s = 0, a = o.length; s < a; ++s) {
                            var c = o[s];
                            "input" === c || "focus" === c || "blur" === c || "click" === c ? this["on" + r + c.substring(0, 1).toUpperCase() + c.substr(1)] = function(e, n) {
                                return function(i, r) {
                                    t._displayTip(e, n)
                                }
                            }(n, i.tip) : this["$" + n + "Input"].on(c, function(e, n) {
                                return function() {
                                    t._displayTip(e, n)
                                }
                            }(n, i.tip))
                        }
                    }
                }
            },
            bindInputEvents: function() {
                for (var t = this.inputNames || [], e = 0, n = t.length; e < n; ++e) {
                    var i = t[e],
                        r = i.substring(0, 1).toUpperCase() + i.substr(1),
                        o = this["$" + i + "Input"];
                    this._bindOnFocus(o, i, r), this._bindOnInput(o, i, r), this._bindOnBlur(o, i, r), this._bindOnClick(o, i, r), this._bindOnOther(o, i, r)
                }
            },
            _bindOnFocus: function(t, e, n) {
                var i = this,
                    r = "on" + n + "Focus";
                this[r] && t.on("focus", function() {
                    i[r](t, i.getValue(e))
                })
            },
            _bindOnInput: function(t, e, i) {
                var r = this,
                    o = "on" + i + "Input",
                    s = n.getIEVersion(),
                    a = !0;
                !("oninput" in document.body) || s && 10 == s ? t[0].onpropertychange = function() {
                    document.activeElement == this && "value" == event.propertyName.toLowerCase() && (r["inputting" + i] = !0, r[o] && r[o](t, r.getValue(e)))
                } : t.on("input", function() {
                    r["inputting" + i] = !0, s && a && 11 == s ? a = !1 : r[o] && r[o](t, r.getValue(e))
                })
            },
            _bindOnBlur: function(t, e, n) {
                var i = this,
                    r = "on" + n + "Blur";
                this[r] && t.on("blur", function() {
                    i[r](t, i.getValue(e))
                })
            },
            _bindOnClick: function(t, e, n) {
                var i = this,
                    r = "on" + n + "Click";
                this[r] && t.on("click", function() {
                    i[r](t, i.getValue(e))
                })
            },
            _bindOnOther: t.noop,
            _valid: function(e, n) {
                var i = n.substring(0, 1).toUpperCase() + n.substr(1);
                this["inputting" + i] = !1;
                var r = this.validator["valid" + i](e),
                    o = t.Deferred();
                this.dfdArray[n] = o, r.result ? this._displayMsg(n, "", o) : this._displayMsg(n, r.message, o)
            },
            _validR: function(e, n) {
                var i = this,
                    r = n.substring(0, 1).toUpperCase() + n.substr(1);
                this["inputting" + r] = !1;
                var o = this.validator["valid" + r](e),
                    s = t.Deferred();
                if (this.dfdArray[n] = s, o.result) {
                    if ("" === e && this.noRemoteValidWhenEmpty)
                        return void this._displayMsg(n, "", s, o);
                    this.getRemoteValidRet(n, e).done(function(t) {
                        i._displayMsg(n, "", s, t)
                    }).fail(function(t) {
                        i._displayMsg(n, t, s)
                    })
                } else
                    this._displayMsg(n, o.message, s)
            },
            getRemoteValidRet: function(t, e) {},
            _displayMsg: function(t, e, n, i) {
                e ? (this["$" + t + "Wrapper"].addClass(this.errorMsgClassName).removeClass(this.successClassName), this["$" + t + "Msg"].text(e.message || e).show(), this["$" + t + "Ok"].hide(), n && n.reject()) : (this["$" + t + "Wrapper"].addClass(this.successClassName).removeClass(this.errorMsgClassName), this["$" + t + "Msg"].text("").hide(), this["$" + t + "Ok"].show(), n && n.resolve())
            },
            _displayTip: function(t, e) {
                e ? (this["$" + t + "Wrapper"].removeClass(this.errorMsgClassName).removeClass(this.successClassName).addClass(this.tipMsgClassName), this["$" + t + "Msg"].text(e).show()) : this["$" + t + "Msg"].hide()
            },
            _displayError: function(t) {
                t ? (this.$errorMsg.text(t.message || t.ret_msg || t), this.$errorWrapper.show()) : (this.$errorMsg.text(""), this.$errorWrapper.hide())
            },
            _displaySubmitting: function(t) {
                this.submitting = t, t ? (this.$submitWrapper.hide(), this.$submittingWrapper.show()) : (this.$submitWrapper.show(), this.$submittingWrapper.hide())
            },
            _checkBeforeSubmit: function() {
                for (var t = this.validateNames || [], e = 0, n = t.length; e < n; ++e) {
                    var i = t[e],
                        r = i.substring(0, 1).toUpperCase() + i.substr(1);
                    this.dfdArray[i] && !this["inputting" + r] || this["valid" + r](this.getValue(i))
                }
            },
            getValue: function(t) {
                var e = this["$" + t + "Input"];
                return "checkbox" === e.prop("type") ? e.is(":checked") ? e.val() : "" : e.val()
            },
            onSubmit: function() {
                if (!this.submitting) {
                    this._displayError(""), this._checkBeforeSubmit();
                    for (var e = this, n = [], i = this.validateNames || [], r = 0, o = i.length; r < o; ++r)
                        n.push(this.dfdArray[i[r]]);
                    t.when.apply(t, n).done(function() {
                        var t = e.$form.serializeObject();
                        e._displaySubmitting(!0), e.submit(t).done(function(n) {
                            e.cb(n, t)
                        }).fail(function(t) {
                            e._displayError(t)
                        }).always(function() {
                            e._displaySubmitting(!1)
                        })
                    })
                }
            },
            submit: function(t) {},
            cb: t.noop
        })
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i;
    i = function() {
        function t(t, e) {
            throw new Error("declare" + (e ? " " + e : "") + ": " + t)
        }
        function e(e, n) {
            for (var i, r, o, s, a, c, u, l, d = [], h = [{
                    cls: 0,
                    refs: []
                }], f = {}, p = 1, m = e.length, g = 0; g < m; ++g) {
                for (o = e[g], o ? "[object Function]" != v.call(o) && t("mixin #" + g + " is not a callable constructor.", n) : t("mixin #" + g + " is unknown. Did you use require to pull it in?", n), r = o._meta ? o._meta.bases : [o], s = 0, i = r.length - 1; i >= 0; --i)
                    a = r[i].prototype, a.hasOwnProperty("declaredClass") || (a.declaredClass = "uniqName_" + w++), u = a.declaredClass, f.hasOwnProperty(u) || (f[u] = {
                        count: 0,
                        refs: [],
                        cls: r[i]
                    }, ++p), c = f[u], s && s !== c && (c.refs.push(s), ++s.count), s = c;
                ++s.count, h[0].refs.push(s)
            }
            for (; h.length;) {
                for (s = h.pop(), d.push(s.cls), --p; l = s.refs, 1 == l.length;) {
                    if (s = l[0], !s || --s.count) {
                        s = 0;
                        break
                    }
                    d.push(s.cls), --p
                }
                if (s)
                    for (g = 0, m = l.length; g < m; ++g)
                        s = l[g], --s.count || h.push(s)
            }
            return p && t("can't build consistent linearization", n), o = e[0], d[0] = o ? o._meta && o === d[d.length - o._meta.bases.length] ? o._meta.bases.length : 1 : 0, d
        }
        function n(n, r, l) {
            "string" != typeof n && (l = r, r = n, n = ""), l = l || [];
            var f,
                y,
                w,
                _,
                x,
                k,
                T,
                C = 1,
                M = r;
            if ("[object Array]" == v.call(r) ? (k = e(r, n), w = k[0], C = k.length - w, r = k[C]) : (k = [0], r ? "[object Function]" == v.call(r) ? (w = r._meta, k = k.concat(w ? w.bases : r)) : t("base class is not a callable constructor.", n) : null !== r && t("unknown base class. Did you use require to pull it in?", n)), r)
                for (y = C - 1; f = i(r), y; --y)
                    w = k[y], (w._meta ? d : u)(f, w.prototype), _ = new Function, _.superclass = r, _.prototype = f, r = f.constructor = _;
            else
                f = {};
            for (c(f, l), w = l.constructor, w !== g.constructor && (w.nom = b, f.constructor = w), y = C - 1; y; --y)
                w = k[y]._meta, w && w.chains && (T = u(T || {}, w.chains));
            if (f["-chains-"] && (T = u(T || {}, f["-chains-"])), w = !T || !T.hasOwnProperty(b), k[0] = _ = T && "manual" === T.constructor ? a(k) : 1 == k.length ? o(l.constructor, w) : s(k, w), _._meta = {
                bases: k,
                hidden: l,
                chains: T,
                parents: M,
                ctor: l.constructor
            }, _.superclass = r && r.prototype, _.extend = h, _.prototype = f, f.constructor = _, f.inherited = m, n && (f.delcaredClass = n), T)
                for (x in T)
                    f[x] && "string" == typeof T[x] && x != b && (w = f[x] = p(x, k, "after" === T[x]), w.nom = x);
            return _
        }
        function i(t) {
            y.prototype = t.prototype;
            var e = new y;
            return y.prototype = null, e
        }
        function r(t) {
            var e = t.callee,
                n = i(e);
            return e.apply(n, t), n
        }
        function o(t, e) {
            return function() {
                var n,
                    i = arguments,
                    o = i,
                    s = i[0];
                return this instanceof i.callee ? (e && (s && (n = s.preamble, n && (o = n.apply(this, o) || o)), n = this.preamble, n && n.apply(this, o)), t && t.apply(this, i), n = this.postscript, void (n && n.apply(this, i))) : r(i)
            }
        }
        function s(t, e) {
            return function() {
                var n,
                    i,
                    o,
                    s,
                    a = arguments,
                    c = a,
                    u = a[0],
                    l = t.length;
                if (!(this instanceof a.callee))
                    return r(a);
                if (e && (u && u.preamble || this.preamble))
                    for (s = new Array(t.length), s[0] = a, i = 0; u = a[0], u && (n = u.preamble, n && (a = n.apply(this, a) || a)), n = t[i].prototype, n = n.hasOwnProperty("preamble") && n.preamble, n && (a = n.apply(this, a) || a), ++i != l;)
                        s[i] = a;
                for (i = l - 1; i >= 0; --i)
                    n = t[i], o = n._meta, n = o ? o.ctor : n, n && n.apply(this, s ? s[i] : a);
                n = this.postscript, n && n.apply(this, c)
            }
        }
        function a(t) {
            return function() {
                var e,
                    n,
                    i = arguments,
                    o = 0;
                if (!(this instanceof i.callee))
                    return r(i);
                for (; e = t[o]; ++o)
                    if (n = e._meta, e = n ? n.ctor : e) {
                        e.apply(this, i);
                        break
                    }
                e = this.postscript, e && e.apply(this, i)
            }
        }
        function c(t, e) {
            var n,
                i;
            for (n in e)
                i = e[n], i === g[n] && n in g || n == b || ("[object Function]" == v.call(i) && (i.nom = n), t[n] = i);
            if (f())
                for (var r = x; r;)
                    n = _[--r], i = e[n], i === g[n] && n in g || n == b || ("[object Function]" == v.call(i) && (i.nom = n), t[n] = i);
            return t
        }
        function u(t, e) {
            t = t || {};
            for (var n = 1, i = arguments.length; n < i; ++n)
                l(t, arguments[n]);
            return t
        }
        function l(t, e) {
            var n,
                i,
                r,
                o = {};
            for (n in e)
                i = e[n], n in t && (t[n] === i || n in o && o[n] === i) || (t[n] = i);
            if (f() && e)
                for (r = 0; r < x; ++r)
                    n = _[r], i = e[n], n in t && (t[n] === i || n in o && o[n] === i) || (t[n] = i);
            return t
        }
        function d(t, e) {
            for (var n in e)
                n != b && e.hasOwnProperty(n) && (t[n] = e[n]);
            if (f())
                for (var i = x; i;)
                    n = _[--i], n != b && e.hasOwnProperty(n) && (t[n] = e[n])
        }
        function h(t) {
            return n.safeMixin(this.prototype, t), this
        }
        function f() {
            for (var t in {
                toString: 1
            })
                return 0;
            return 1
        }
        function p(t, e, n) {
            return function() {
                var i,
                    r,
                    o,
                    s = 0,
                    a = 1;
                for (n && (s = e.length - 1, a = -1); i = e[s]; s += a)
                    r = i._meta, o = (r ? r.hidden : i.prototype)[t], o && o.apply(this, arguments)
            }
        }
        function m(e, n, i) {
            var r,
                o,
                s,
                a,
                c,
                u,
                l,
                d,
                h,
                f = this._inherited = this._inherited || {};
            if ("string" == typeof e && (r = e, e = n, n = i), i = 0, a = e.callee, r = r || a.nom, r || t("can't deduce a name to call inherited()", this.declaredClass), c = this.constructor._meta, s = c.bases, h = f.p, r != b) {
                if (f.c !== a && (h = 0, u = s[0], c = u._meta, c.hidden[r] !== a)) {
                    o = c.chains, o && "string" == typeof o[r] && t("calling chained method with inherited: " + r, this.declaredClass);
                    do if (c = u._meta, l = u.prototype, c && (l[r] === a && l.hasOwnProperty(r) || c.hidden[r] === a))
                        break;
                    while (u = s[++h]);
                    h = u ? h : -1
                }
                if (u = s[++h])
                    if (l = u.prototype, u._meta && l.hasOwnProperty(r))
                        i = l[r];
                    else {
                        d = g[r];
                        do if (l = u.prototype, i = l[r], i && (u._meta ? l.hasOwnProperty(r) : i !== d))
                            break;
                        while (u = s[++h])
                    }
                i = u && i || g[r]
            } else {
                if (f.c !== a && (h = 0, c = s[0]._meta, c && c.ctor !== a)) {
                    for (o = c.chains, o && "manual" === o.constructor || t("calling chained constructor with inherited", this.declaredClass); (u = s[++h]) && (c = u._meta, !c || c.ctor !== a);)
                        ;
                    h = u ? h : -1
                }
                for (; (u = s[++h]) && (c = u._meta, !(i = c ? c.ctor : u));)
                    ;
                i = u && i
            }
            if (f.c = i, f.p = h, i)
                return n === !0 ? i : i.apply(this, n || e)
        }
        var g = Object.prototype,
            v = g.toString,
            y = new Function,
            w = 0,
            b = "constructor",
            _ = "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."),
            x = _.length;
        return n.safeMixin = c, n.mixin = u, n
    }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
}, function(t, e, n) {
    var i,
        r;
    i = [], r = function() {
        var t = function(t, e, n) {
                return (n || []).concat(Array.prototype.slice.call(t, e || 0))
            },
            e = {
                hitch: function(t, n) {
                    if (arguments.length > 2)
                        return e._hitchArgs.apply(this, arguments);
                    if (n || (n = t, t = null), e.isString(n)) {
                        if (t = t || window, !t[n])
                            throw ['lang.hitch: scope["', n, '"] is null (scope="', t, '")'].join("");
                        return function() {
                            return t[n].apply(t, arguments || [])
                        }
                    }
                    return t ? function() {
                        return n.apply(t, arguments || [])
                    } : n
                },
                _hitchArgs: function(t, n) {
                    var i = e._toArray(arguments, 2),
                        r = e.isString(n);
                    return function() {
                        var o = e._toArray(arguments),
                            s = r ? (t || window)[n] : n;
                        return s && s.apply(t || this, i.concat(o))
                    }
                },
                _toArray: /msie/.test(navigator.userAgent.toLowerCase()) ? function() {
                    function e(t, e, n) {
                        for (var i = n || [], r = e || 0; r < t.length; r++)
                            i.push(t[r]);
                        return i
                    }
                    return function(n) {
                        return (n.item ? e : t).apply(this, arguments)
                    }
                }() : t,
                isIE: function() {
                    return /msie/.test(navigator.userAgent.toLowerCase()) || this.isAfterIE11()
                },
                isAfterIE11: function() {
                    return Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject
                },
                getIEVersion: function() {
                    if (this.isIE()) {
                        var t = null;
                        if ("Microsoft Internet Explorer" == navigator.appName) {
                            var e = navigator.userAgent,
                                n = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                            null != n.exec(e) && (t = parseFloat(RegExp.$1))
                        } else if ("Netscape" == navigator.appName) {
                            var e = navigator.userAgent,
                                n = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
                            null != n.exec(e) && (t = parseFloat(RegExp.$1))
                        }
                        return t
                    }
                    return null
                },
                isString: function(t) {
                    return "string" == typeof t || t instanceof String
                }
            };
        return e
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(22)], r = function(t, e) {
        var n = function(t) {
            this.initOptions(t), this.init()
        };
        return n.prototype.initOptions = function(t) {
            return e.mixin(this, t), this
        }, n.prototype.init = function() {
            this.isDynamic ? this.initDynamicForm() : this.initStaticForm(), this.initNodes(), this.initInputs(), this.initDefaultValidations(), this.initDefaultTips(), this.bindInputEvents();
            var t = this;
            this.$form.submit(function() {
                return t.onSubmit(), !1
            })
        }, n.prototype.initDynamicForm = t.noop, n.prototype.initStaticForm = t.noop, n.prototype.initNodes = t.noop, n.prototype.initInputs = t.noop, n.prototype.initDefaultValidations = t.noop, n.prototype.initDefaultTips = t.noop, n.prototype.bindEvents = t.noop, n.prototype.onSubmit = t.noop, n
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(4), n(26), n(32)], r = function(t, e, n, i) {
        return {
            getSignIn: function() {
                var n = t.Deferred();
                return e({
                    url: "/site/get-sign-in"
                }, function(t) {
                    n.resolve(t)
                }, function(t) {
                    n.reject(t)
                }), n
            },
            getSalt: function(i) {
                var r = t.Deferred();
                return e({
                    url: "/site/login-salt",
                    data: {
                        device_id: n.get(),
                        account: i
                    }
                }, function(t) {
                    r.resolve(t.data)
                }, function(t) {
                    t && 99 === +t.code && (t.message = t.data && t.data.error_msg || t.message), r.reject(t)
                }), r
            },
            postLogin: function(r, o, s) {
                var a = t.Deferred(),
                    c = o.tgtgt_params;
                c.salt = o.svr_result.salt;
                var u = {
                    username: r.username,
                    device_id: n.get(),
                    tgtgt: i.get(r.password, c),
                    rememberMe: r.rememberMe
                };
                return r.captcha && (u.captcha = r.captcha), r.token_type && (u.token_type = r.token_type), r.openid && (u.openid = r.openid), r.access_token && (u.access_token = r.access_token), r.unionid && (u.unionid = r.unionid), r.refresh_token && (u.refresh_token = r.refresh_token), e({
                    url: s || "/site/login-request",
                    type: "POST",
                    data: u
                }, function(t) {
                    a.resolve(t.data)
                }, function(t) {
                    a.reject(t)
                }), a
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(27), n(28), n(30), n(31)], r = function(t, e, n, i) {
        return {
            _num: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            get: function() {
                var e = t.getItem("cipher_device_id");
                if (!e) {
                    e = (+new Date + "").substring(0, 10);
                    var n = Math.floor(1e5 * (Math.random() + this._num[Math.floor(100 * Math.random() % 9)]));
                    e += n, e.length > 16 && (e = e.substring(0, 16)), t.setItem("cipher_device_id", e, 1 / 0, "/")
                }
                return e
            },
            getBuffer: function() {
                for (var t = this.get(), e = "", r = 0, o = t.length; r < o; ++r)
                    e += n("c", i(t[r]));
                return e
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i;
    i = function() {
        return {
            getItem: function(t) {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
            },
            setItem: function(t, e, n, i, r, o) {
                if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t))
                    return !1;
                var s = "";
                if (n)
                    switch (n.constructor) {
                    case Number:
                        s = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                        break;
                    case String:
                        s = "; expires=" + n;
                        break;
                    case Date:
                        s = "; expires=" + n.toUTCString()
                    }
                return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + s + (r ? "; domain=" + r : "") + (i ? "; path=" + i : "") + (o ? "; secure" : ""), !0
            },
            removeItem: function(t, e, n) {
                return !(!t || !this.hasItem(t)) && (document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (e ? "; path=" + e : ""), !0)
            },
            hasItem: function(t) {
                return new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
            },
            keys: function() {
                for (var t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), e = 0; e < t.length; e++)
                    t[e] = decodeURIComponent(t[e]);
                return t
            }
        }
    }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(29))
    }(this, function(t) {
        return function(e) {
            function n(t, e, n, i, r, o, s) {
                var a = t + (e & n | ~e & i) + r + s;
                return (a << o | a >>> 32 - o) + e
            }
            function i(t, e, n, i, r, o, s) {
                var a = t + (e & i | n & ~i) + r + s;
                return (a << o | a >>> 32 - o) + e
            }
            function r(t, e, n, i, r, o, s) {
                var a = t + (e ^ n ^ i) + r + s;
                return (a << o | a >>> 32 - o) + e
            }
            function o(t, e, n, i, r, o, s) {
                var a = t + (n ^ (e | ~i)) + r + s;
                return (a << o | a >>> 32 - o) + e
            }
            var s = t,
                a = s.lib,
                c = a.WordArray,
                u = a.Hasher,
                l = s.algo,
                d = [];
            !function() {
                for (var t = 0; t < 64; t++)
                    d[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
            }();
            var h = l.MD5 = u.extend({
                _doReset: function() {
                    this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(t, e) {
                    for (var s = 0; s < 16; s++) {
                        var a = e + s,
                            c = t[a];
                        t[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                    }
                    var u = this._hash.words,
                        l = t[e + 0],
                        h = t[e + 1],
                        f = t[e + 2],
                        p = t[e + 3],
                        m = t[e + 4],
                        g = t[e + 5],
                        v = t[e + 6],
                        y = t[e + 7],
                        w = t[e + 8],
                        b = t[e + 9],
                        _ = t[e + 10],
                        x = t[e + 11],
                        k = t[e + 12],
                        T = t[e + 13],
                        C = t[e + 14],
                        M = t[e + 15],
                        S = u[0],
                        D = u[1],
                        $ = u[2],
                        E = u[3];
                    S = n(S, D, $, E, l, 7, d[0]), E = n(E, S, D, $, h, 12, d[1]), $ = n($, E, S, D, f, 17, d[2]), D = n(D, $, E, S, p, 22, d[3]), S = n(S, D, $, E, m, 7, d[4]), E = n(E, S, D, $, g, 12, d[5]), $ = n($, E, S, D, v, 17, d[6]), D = n(D, $, E, S, y, 22, d[7]), S = n(S, D, $, E, w, 7, d[8]), E = n(E, S, D, $, b, 12, d[9]), $ = n($, E, S, D, _, 17, d[10]), D = n(D, $, E, S, x, 22, d[11]), S = n(S, D, $, E, k, 7, d[12]), E = n(E, S, D, $, T, 12, d[13]), $ = n($, E, S, D, C, 17, d[14]), D = n(D, $, E, S, M, 22, d[15]), S = i(S, D, $, E, h, 5, d[16]), E = i(E, S, D, $, v, 9, d[17]), $ = i($, E, S, D, x, 14, d[18]), D = i(D, $, E, S, l, 20, d[19]), S = i(S, D, $, E, g, 5, d[20]), E = i(E, S, D, $, _, 9, d[21]), $ = i($, E, S, D, M, 14, d[22]), D = i(D, $, E, S, m, 20, d[23]), S = i(S, D, $, E, b, 5, d[24]), E = i(E, S, D, $, C, 9, d[25]), $ = i($, E, S, D, p, 14, d[26]), D = i(D, $, E, S, w, 20, d[27]), S = i(S, D, $, E, T, 5, d[28]), E = i(E, S, D, $, f, 9, d[29]), $ = i($, E, S, D, y, 14, d[30]), D = i(D, $, E, S, k, 20, d[31]), S = r(S, D, $, E, g, 4, d[32]), E = r(E, S, D, $, w, 11, d[33]), $ = r($, E, S, D, x, 16, d[34]), D = r(D, $, E, S, C, 23, d[35]), S = r(S, D, $, E, h, 4, d[36]), E = r(E, S, D, $, m, 11, d[37]), $ = r($, E, S, D, y, 16, d[38]), D = r(D, $, E, S, _, 23, d[39]), S = r(S, D, $, E, T, 4, d[40]), E = r(E, S, D, $, l, 11, d[41]), $ = r($, E, S, D, p, 16, d[42]), D = r(D, $, E, S, v, 23, d[43]), S = r(S, D, $, E, b, 4, d[44]), E = r(E, S, D, $, k, 11, d[45]), $ = r($, E, S, D, M, 16, d[46]), D = r(D, $, E, S, f, 23, d[47]), S = o(S, D, $, E, l, 6, d[48]), E = o(E, S, D, $, y, 10, d[49]), $ = o($, E, S, D, C, 15, d[50]), D = o(D, $, E, S, g, 21, d[51]), S = o(S, D, $, E, k, 6, d[52]), E = o(E, S, D, $, p, 10, d[53]), $ = o($, E, S, D, _, 15, d[54]), D = o(D, $, E, S, h, 21, d[55]), S = o(S, D, $, E, w, 6, d[56]), E = o(E, S, D, $, M, 10, d[57]), $ = o($, E, S, D, v, 15, d[58]), D = o(D, $, E, S, T, 21, d[59]), S = o(S, D, $, E, m, 6, d[60]), E = o(E, S, D, $, x, 10, d[61]), $ = o($, E, S, D, f, 15, d[62]), D = o(D, $, E, S, b, 21, d[63]), u[0] = u[0] + S | 0, u[1] = u[1] + D | 0, u[2] = u[2] + $ | 0, u[3] = u[3] + E | 0
                },
                _doFinalize: function() {
                    var t = this._data,
                        n = t.words,
                        i = 8 * this._nDataBytes,
                        r = 8 * t.sigBytes;
                    n[r >>> 5] |= 128 << 24 - r % 32;
                    var o = e.floor(i / 4294967296),
                        s = i;
                    n[(r + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[(r + 64 >>> 9 << 4) + 14] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
                    for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
                        var l = c[u];
                        c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                    }
                    return a
                },
                clone: function() {
                    var t = u.clone.call(this);
                    return t._hash = this._hash.clone(), t
                }
            });
            s.MD5 = u._createHelper(h), s.HmacMD5 = u._createHmacHelper(h)
        }(Math), t.MD5
    })
}, function(t, e, n) {
    !function(n, i) {
        t.exports = e = i()
    }(this, function() {
        var t = t || function(t, e) {
            var n = {},
                i = n.lib = {},
                r = i.Base = function() {
                    function t() {}
                    return {
                        extend: function(e) {
                            t.prototype = this;
                            var n = new t;
                            return e && n.mixIn(e), n.hasOwnProperty("init") || (n.init = function() {
                                n.$super.init.apply(this, arguments)
                            }), n.init.prototype = n, n.$super = this, n
                        },
                        create: function() {
                            var t = this.extend();
                            return t.init.apply(t, arguments), t
                        },
                        init: function() {},
                        mixIn: function(t) {
                            for (var e in t)
                                t.hasOwnProperty(e) && (this[e] = t[e]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                }(),
                o = i.WordArray = r.extend({
                    init: function(t, n) {
                        t = this.words = t || [], n != e ? this.sigBytes = n : this.sigBytes = 4 * t.length
                    },
                    toString: function(t) {
                        return (t || a).stringify(this)
                    },
                    concat: function(t) {
                        var e = this.words,
                            n = t.words,
                            i = this.sigBytes,
                            r = t.sigBytes;
                        if (this.clamp(), i % 4)
                            for (var o = 0; o < r; o++) {
                                var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                e[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8
                            }
                        else
                            for (var o = 0; o < r; o += 4)
                                e[i + o >>> 2] = n[o >>> 2];
                        return this.sigBytes += r, this
                    },
                    clamp: function() {
                        var e = this.words,
                            n = this.sigBytes;
                        e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4)
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t.words = this.words.slice(0), t
                    },
                    random: function(e) {
                        for (var n, i = [], r = function(e) {
                                var e = e,
                                    n = 987654321,
                                    i = 4294967295;
                                return function() {
                                    n = 36969 * (65535 & n) + (n >> 16) & i, e = 18e3 * (65535 & e) + (e >> 16) & i;
                                    var r = (n << 16) + e & i;
                                    return r /= 4294967296, r += .5, r * (t.random() > .5 ? 1 : -1)
                                }
                            }, s = 0; s < e; s += 4) {
                            var a = r(4294967296 * (n || t.random()));
                            n = 987654071 * a(), i.push(4294967296 * a() | 0)
                        }
                        return new o.init(i, e)
                    }
                }),
                s = n.enc = {},
                a = s.Hex = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                            var o = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
                        }
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], i = 0; i < e; i += 2)
                            n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                        return new o.init(n, e / 2)
                    }
                },
                c = s.Latin1 = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                            var o = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            i.push(String.fromCharCode(o))
                        }
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], i = 0; i < e; i++)
                            n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                        return new o.init(n, e)
                    }
                },
                u = s.Utf8 = {
                    stringify: function(t) {
                        try {
                            return decodeURIComponent(escape(c.stringify(t)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(t) {
                        return c.parse(unescape(encodeURIComponent(t)))
                    }
                },
                l = i.BufferedBlockAlgorithm = r.extend({
                    reset: function() {
                        this._data = new o.init, this._nDataBytes = 0
                    },
                    _append: function(t) {
                        "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                    },
                    _process: function(e) {
                        var n = this._data,
                            i = n.words,
                            r = n.sigBytes,
                            s = this.blockSize,
                            a = 4 * s,
                            c = r / a;
                        c = e ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0);
                        var u = c * s,
                            l = t.min(4 * u, r);
                        if (u) {
                            for (var d = 0; d < u; d += s)
                                this._doProcessBlock(i, d);
                            var h = i.splice(0, u);
                            n.sigBytes -= l
                        }
                        return new o.init(h, l)
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t._data = this._data.clone(), t
                    },
                    _minBufferSize: 0
                }),
                d = (i.Hasher = l.extend({
                    cfg: r.extend(),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t), this.reset()
                    },
                    reset: function() {
                        l.reset.call(this), this._doReset()
                    },
                    update: function(t) {
                        return this._append(t), this._process(), this
                    },
                    finalize: function(t) {
                        t && this._append(t);
                        var e = this._doFinalize();
                        return e
                    },
                    blockSize: 16,
                    _createHelper: function(t) {
                        return function(e, n) {
                            return new t.init(n).finalize(e)
                        }
                    },
                    _createHmacHelper: function(t) {
                        return function(e, n) {
                            return new d.HMAC.init(t, n).finalize(e)
                        }
                    }
                }), n.algo = {});
            return n
        }(Math);
        return t
    })
}, function(t, e, n) {
    var i;
    i = function() {
        return function(t) {
            for (var e, n, i, r, o, s, a, c, u, l, d, h, f, p, m, g, v, y, w, b, _, x, k, T = 0, C = 1, M = "", S = "", D = 0, $ = []; T < t.length;) {
                for (e = t.charAt(T), n = "", T++; T < t.length && null !== t.charAt(T).match(/[\d\*]/);)
                    n += t.charAt(T), T++;
                switch ("" === n && (n = "1"), e) {
                case "a":
                case "A":
                    if ("undefined" == typeof arguments[C])
                        throw new Error("Warning:  pack() Type " + e + ": not enough arguments");
                    for (S = String(arguments[C]), "*" === n && (n = S.length), D = 0; D < n; D++)
                        M += "undefined" == typeof S[D] ? "a" === e ? String.fromCharCode(0) : " " : S[D];
                    C++;
                    break;
                case "h":
                case "H":
                    if ("undefined" == typeof arguments[C])
                        throw new Error("Warning: pack() Type " + e + ": not enough arguments");
                    if (S = arguments[C], "*" === n && (n = S.length), n > S.length)
                        throw new Error("Warning: pack() Type " + e + ": not enough characters in string");
                    for (D = 0; D < n; D += 2)
                        i = S[D], i += D + 1 >= n || "undefined" == typeof S[D + 1] ? "0" : S[D + 1], "h" === e && (i = i[1] + i[0]), M += String.fromCharCode(parseInt(i, 16));
                    C++;
                    break;
                case "c":
                case "C":
                    if ("*" === n && (n = arguments.length - C), n > arguments.length - C)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (D = 0; D < n; D++)
                        M += String.fromCharCode(arguments[C]), C++;
                    break;
                case "s":
                case "S":
                case "v":
                    if ("*" === n && (n = arguments.length - C), n > arguments.length - C)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (D = 0; D < n; D++)
                        M += String.fromCharCode(255 & arguments[C]), M += String.fromCharCode(arguments[C] >> 8 & 255), C++;
                    break;
                case "n":
                    if ("*" === n && (n = arguments.length - C), n > arguments.length - C)
                        throw new Error("Warning: pack() Type " + e + ": too few arguments");
                    for (D = 0; D < n; D++)
                        M += String.fromCharCode(255 & arguments[C]), C++;
                    break;
                case "i":
                case "I":
                case "l":
                case "L":
                case "V":
                    if ("*" === n && (n = arguments.length - C), n > arguments.length - C)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (D = 0; D < n; D++)
                        M += String.fromCharCode(255 & arguments[C]), M += String.fromCharCode(arguments[C] >> 8 & 255), M += String.fromCharCode(arguments[C] >> 16 & 255), M += String.fromCharCode(arguments[C] >> 24 & 255), C++;
                    break;
                case "N":
                    if ("*" === n && (n = arguments.length - C), n > arguments.length - C)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (D = 0; D < n; D++)
                        M += String.fromCharCode(arguments[C] >> 24 & 255), M += String.fromCharCode(arguments[C] >> 16 & 255), M += String.fromCharCode(arguments[C] >> 8 & 255), M += String.fromCharCode(255 & arguments[C]), C++;
                    break;
                case "f":
                case "d":
                    if (r = 23, o = 8, "d" === e && (r = 52, o = 11), "*" === n && (n = arguments.length - C), n > arguments.length - C)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (D = 0; D < n; D++) {
                        for (S = arguments[C], a = Math.pow(2, o - 1) - 1, c = -a + 1, u = a, l = c - r, d = isNaN(g = parseFloat(S)) || g === -(1 / 0) || g === +(1 / 0) ? g : 0, h = 0, f = 2 * a + 1 + r + 3, p = new Array(f), m = (g = 0 !== d ? 0 : g) < 0, g = Math.abs(g), v = Math.floor(g), y = g - v, x = f; x;)
                            p[--x] = 0;
                        for (x = a + 2; v && x;)
                            p[--x] = v % 2, v = Math.floor(v / 2);
                        for (x = a + 1; y > 0 && x; --y)
                            p[++x] = ((y *= 2) >= 1) - 0;
                        for (x = -1; ++x < f && !p[x];)
                            ;
                        if (p[(w = r - 1 + (x = (h = a + 1 - x) >= c && h <= u ? x + 1 : a + 1 - (h = c - 1))) + 1]) {
                            if (!(b = p[w]))
                                for (_ = w + 2; !b && _ < f; b = p[_++])
                                    ;
                            for (_ = w + 1; b && --_ >= 0; (p[_] = !p[_] - 0) && (b = 0))
                                ;
                        }
                        for (x = x - 2 < 0 ? -1 : x - 3; ++x < f && !p[x];)
                            ;
                        for ((h = a + 1 - x) >= c && h <= u ? ++x : h < c && (x = a + 1 - (h = c - 1)), (v || 0 !== d) && (h = u + 1, x = a + 2, d === -(1 / 0) ? m = 1 : isNaN(d) && (p[x] = 1)), g = Math.abs(h + a), k = "", _ = o + 1; --_;)
                            k = g % 2 + k, g = g >>= 1;
                        for (g = 0, _ = 0, x = (k = (m ? "1" : "0") + k + p.slice(x, x + r).join("")).length, $ = []; x;)
                            g += (1 << _) * k.charAt(--x), 7 === _ && ($[$.length] = String.fromCharCode(g), g = 0), _ = (_ + 1) % 8;
                        $[$.length] = g ? String.fromCharCode(g) : "", M += $.join(""), C++
                    }
                    break;
                case "x":
                    if ("*" === n)
                        throw new Error("Warning: pack(): Type x: '*' ignored");
                    for (D = 0; D < n; D++)
                        M += String.fromCharCode(0);
                    break;
                case "X":
                    if ("*" === n)
                        throw new Error("Warning: pack(): Type X: '*' ignored");
                    for (D = 0; D < n; D++) {
                        if (0 === M.length)
                            throw new Error("Warning: pack(): Type X: outside of string");
                        M = M.substring(0, M.length - 1)
                    }
                    break;
                case "@":
                    if ("*" === n)
                        throw new Error("Warning: pack(): Type X: '*' ignored");
                    if (n > M.length)
                        for (s = n - M.length, D = 0; D < s; D++)
                            M += String.fromCharCode(0);
                    n < M.length && (M = M.substring(0, n));
                    break;
                default:
                    throw new Error("Warning:  pack() Type " + e + ": unknown format code")
                }
            }
            if (C < arguments.length)
                throw new Error("Warning: pack(): " + (arguments.length - C) + " arguments unused");
            return M
        }
    }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
}, function(t, e, n) {
    var i;
    i = function() {
        return function(t) {
            var e = t + "",
                n = e.charCodeAt(0);
            if (55296 <= n && n <= 56319) {
                var i = n;
                if (1 === e.length)
                    return n;
                var r = e.charCodeAt(1);
                return 1024 * (i - 55296) + (r - 56320) + 65536
            }
            return 56320 <= n && n <= 57343 ? n : n
        }
    }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
}, function(t, e, n) {
    var i,
        r;
    i = [n(28), n(39), n(34), n(35), n(36), n(38), n(33), n(43), n(30), n(31), n(26)], r = function(t, e, n, i, r, o, s, a, c, u, l) {
        return {
            get: function(e, n, i) {
                return !i && n.salt && (i = t(t(e).toString() + n.salt).toString(a)), this.aesEncryptCbcMd5Base64(this.buildPlain(e, n), i)
            },
            buildPlain: function(e, n) {
                var i = c("N", n.init_time),
                    r = c("N", n.invalid_time),
                    o = [c("C", n.ver), c("N", n.uid), t(e).toString(a), this.getRandomKey(), i, i, r, l.getBuffer(), c("C", n.os_type), c("N", n.seq), c("C", n.signed_len), ""],
                    s = o.join("");
                return s
            },
            aesEncryptCbcMd5: function(s, c) {
                var u = n.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0");
                c = a.parse(c), s += "";
                var l = s.length % 16;
                if (l) {
                    for (var d = [], h = 16 - l; h;)
                        d.push("0"), --h;
                    s += d.join("")
                }
                s = a.parse(s);
                var f = e.encrypt(s, c, {
                        iv: u,
                        padding: r
                    }),
                    p = e.encrypt(this.getPadding(l, u), c, {
                        iv: u,
                        padding: r,
                        mode: o
                    }),
                    m = f.ciphertext.toString() + p.ciphertext.toString() + t(s).toString();
                return i.parse(m)
            },
            aesEncryptCbcMd5Base64: function(t, e) {
                return s.stringify(this.aesEncryptCbcMd5(t, e))
            },
            getPadding: function(o, s) {
                var a = window.crypto || window.msCrypto,
                    c = "";
                if (a) {
                    var u = new Uint8Array(15);
                    a.getRandomValues(u);
                    for (var l = 0, d = u.length; l < d; ++l) {
                        var h = u[l].toString(16);
                        1 == h.length && (h = "0" + h), c += h
                    }
                    c += "0" + (+o).toString(16)
                } else {
                    s = s || n.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0");
                    var f = e.encrypt(t(Math.random() + "").toString(), n.parse(Math.random() + ""), {
                        iv: s,
                        padding: r
                    });
                    f = f.ciphertext.toString(), c = f.substr(0, 30) + "0" + (+o).toString(16)
                }
                return i.parse(c)
            },
            getRandomKey: function(i) {
                var o = window.crypto || window.msCrypto,
                    s = "";
                if (o && window.Uint8Array) {
                    var a = new Uint8Array(16);
                    o.getRandomValues(a);
                    for (var l = 0, d = a.length; l < d; ++l)
                        s += c("C", u(a[l]))
                } else {
                    i = i || n.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0");
                    var h = e.encrypt(t(Math.random() + "").toString(), n.parse(Math.random() + ""), {
                        iv: i,
                        padding: r
                    });
                    h = h.ciphertext.toString();
                    for (var l = 0; l < 32; l += 2)
                        s += c("C", u(parseInt(h.substring(l, 2), 16)))
                }
                return s
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(29))
    }(this, function(t) {
        return function() {
            var e = t,
                n = e.lib,
                i = n.WordArray,
                r = e.enc;
            r.Base64 = {
                stringify: function(t) {
                    var e = t.words,
                        n = t.sigBytes,
                        i = this._map;
                    t.clamp();
                    for (var r = [], o = 0; o < n; o += 3)
                        for (var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, c = e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, u = s << 16 | a << 8 | c, l = 0; l < 4 && o + .75 * l < n; l++)
                            r.push(i.charAt(u >>> 6 * (3 - l) & 63));
                    var d = i.charAt(64);
                    if (d)
                        for (; r.length % 4;)
                            r.push(d);
                    return r.join("")
                },
                parse: function(t) {
                    var e = t.length,
                        n = this._map,
                        r = n.charAt(64);
                    if (r) {
                        var o = t.indexOf(r);
                        o != -1 && (e = o)
                    }
                    for (var s = [], a = 0, c = 0; c < e; c++)
                        if (c % 4) {
                            var u = n.indexOf(t.charAt(c - 1)) << c % 4 * 2,
                                l = n.indexOf(t.charAt(c)) >>> 6 - c % 4 * 2;
                            s[a >>> 2] |= (u | l) << 24 - a % 4 * 8, a++
                        }
                    return i.create(s, a)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }(), t.enc.Base64
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(29))
    }(this, function(t) {
        return t.enc.Utf8
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(29))
    }(this, function(t) {
        return t.enc.Hex
    })
}, function(t, e, n) {
    !function(i, r, o) {
        t.exports = e = r(n(29), n(37))
    }(this, function(t) {
        return t.pad.ZeroPadding = {
            pad: function(t, e) {
                var n = 4 * e;
                t.clamp(), t.sigBytes += n - (t.sigBytes % n || n)
            },
            unpad: function(t) {
                for (var e = t.words, n = t.sigBytes - 1; !(e[n >>> 2] >>> 24 - n % 4 * 8 & 255);)
                    n--;
                t.sigBytes = n + 1
            }
        }, t.pad.ZeroPadding
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(29))
    }(this, function(t) {
        t.lib.Cipher || function(e) {
            var n = t,
                i = n.lib,
                r = i.Base,
                o = i.WordArray,
                s = i.BufferedBlockAlgorithm,
                a = n.enc,
                c = (a.Utf8, a.Base64),
                u = n.algo,
                l = u.EvpKDF,
                d = i.Cipher = s.extend({
                    cfg: r.extend(),
                    createEncryptor: function(t, e) {
                        return this.create(this._ENC_XFORM_MODE, t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.create(this._DEC_XFORM_MODE, t, e)
                    },
                    init: function(t, e, n) {
                        this.cfg = this.cfg.extend(n), this._xformMode = t, this._key = e, this.reset()
                    },
                    reset: function() {
                        s.reset.call(this), this._doReset()
                    },
                    process: function(t) {
                        return this._append(t), this._process()
                    },
                    finalize: function(t) {
                        t && this._append(t);
                        var e = this._doFinalize();
                        return e
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function() {
                        function t(t) {
                            return "string" == typeof t ? k : b
                        }
                        return function(e) {
                            return {
                                encrypt: function(n, i, r) {
                                    return t(i).encrypt(e, n, i, r)
                                },
                                decrypt: function(n, i, r) {
                                    return t(i).decrypt(e, n, i, r)
                                }
                            }
                        }
                    }()
                }),
                h = (i.StreamCipher = d.extend({
                    _doFinalize: function() {
                        var t = this._process(!0);
                        return t
                    },
                    blockSize: 1
                }), n.mode = {}),
                f = i.BlockCipherMode = r.extend({
                    createEncryptor: function(t, e) {
                        return this.Encryptor.create(t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.Decryptor.create(t, e)
                    },
                    init: function(t, e) {
                        this._cipher = t, this._iv = e
                    }
                }),
                p = h.CBC = function() {
                    function t(t, n, i) {
                        var r = this._iv;
                        if (r) {
                            var o = r;
                            this._iv = e
                        } else
                            var o = this._prevBlock;
                        for (var s = 0; s < i; s++)
                            t[n + s] ^= o[s]
                    }
                    var n = f.extend();
                    return n.Encryptor = n.extend({
                        processBlock: function(e, n) {
                            var i = this._cipher,
                                r = i.blockSize;
                            t.call(this, e, n, r), i.encryptBlock(e, n), this._prevBlock = e.slice(n, n + r)
                        }
                    }), n.Decryptor = n.extend({
                        processBlock: function(e, n) {
                            var i = this._cipher,
                                r = i.blockSize,
                                o = e.slice(n, n + r);
                            i.decryptBlock(e, n), t.call(this, e, n, r), this._prevBlock = o
                        }
                    }), n
                }(),
                m = n.pad = {},
                g = m.Pkcs7 = {
                    pad: function(t, e) {
                        for (var n = 4 * e, i = n - t.sigBytes % n, r = i << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4)
                            s.push(r);
                        var c = o.create(s, i);
                        t.concat(c)
                    },
                    unpad: function(t) {
                        var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                        t.sigBytes -= e
                    }
                },
                v = (i.BlockCipher = d.extend({
                    cfg: d.cfg.extend({
                        mode: p,
                        padding: g
                    }),
                    reset: function() {
                        d.reset.call(this);
                        var t = this.cfg,
                            e = t.iv,
                            n = t.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE)
                            var i = n.createEncryptor;
                        else {
                            var i = n.createDecryptor;
                            this._minBufferSize = 1
                        }
                        this._mode = i.call(n, this, e && e.words)
                    },
                    _doProcessBlock: function(t, e) {
                        this._mode.processBlock(t, e)
                    },
                    _doFinalize: function() {
                        var t = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            t.pad(this._data, this.blockSize);
                            var e = this._process(!0)
                        } else {
                            var e = this._process(!0);
                            t.unpad(e)
                        }
                        return e
                    },
                    blockSize: 4
                }), i.CipherParams = r.extend({
                    init: function(t) {
                        this.mixIn(t)
                    },
                    toString: function(t) {
                        return (t || this.formatter).stringify(this)
                    }
                })),
                y = n.format = {},
                w = y.OpenSSL = {
                    stringify: function(t) {
                        var e = t.ciphertext,
                            n = t.salt;
                        if (n)
                            var i = o.create([1398893684, 1701076831]).concat(n).concat(e);
                        else
                            var i = e;
                        return i.toString(c)
                    },
                    parse: function(t) {
                        var e = c.parse(t),
                            n = e.words;
                        if (1398893684 == n[0] && 1701076831 == n[1]) {
                            var i = o.create(n.slice(2, 4));
                            n.splice(0, 4), e.sigBytes -= 16
                        }
                        return v.create({
                            ciphertext: e,
                            salt: i
                        })
                    }
                },
                b = i.SerializableCipher = r.extend({
                    cfg: r.extend({
                        format: w
                    }),
                    encrypt: function(t, e, n, i) {
                        i = this.cfg.extend(i);
                        var r = t.createEncryptor(n, i),
                            o = r.finalize(e),
                            s = r.cfg;
                        return v.create({
                            ciphertext: o,
                            key: n,
                            iv: s.iv,
                            algorithm: t,
                            mode: s.mode,
                            padding: s.padding,
                            blockSize: t.blockSize,
                            formatter: i.format
                        })
                    },
                    decrypt: function(t, e, n, i) {
                        i = this.cfg.extend(i), e = this._parse(e, i.format);
                        var r = t.createDecryptor(n, i).finalize(e.ciphertext);
                        return r
                    },
                    _parse: function(t, e) {
                        return "string" == typeof t ? e.parse(t, this) : t
                    }
                }),
                _ = n.kdf = {},
                x = _.OpenSSL = {
                    execute: function(t, e, n, i) {
                        i || (i = o.random(8));
                        var r = l.create({
                                keySize: e + n
                            }).compute(t, i),
                            s = o.create(r.words.slice(e), 4 * n);
                        return r.sigBytes = 4 * e, v.create({
                            key: r,
                            iv: s,
                            salt: i
                        })
                    }
                },
                k = i.PasswordBasedCipher = b.extend({
                    cfg: b.cfg.extend({
                        kdf: x
                    }),
                    encrypt: function(t, e, n, i) {
                        i = this.cfg.extend(i);
                        var r = i.kdf.execute(n, t.keySize, t.ivSize);
                        i.iv = r.iv;
                        var o = b.encrypt.call(this, t, e, r.key, i);
                        return o.mixIn(r), o
                    },
                    decrypt: function(t, e, n, i) {
                        i = this.cfg.extend(i), e = this._parse(e, i.format);
                        var r = i.kdf.execute(n, t.keySize, t.ivSize, e.salt);
                        i.iv = r.iv;
                        var o = b.decrypt.call(this, t, e, r.key, i);
                        return o
                    }
                })
        }()
    })
}, function(t, e, n) {
    !function(i, r, o) {
        t.exports = e = r(n(29), n(37))
    }(this, function(t) {
        return t.mode.ECB = function() {
            var e = t.lib.BlockCipherMode.extend();
            return e.Encryptor = e.extend({
                processBlock: function(t, e) {
                    this._cipher.encryptBlock(t, e)
                }
            }), e.Decryptor = e.extend({
                processBlock: function(t, e) {
                    this._cipher.decryptBlock(t, e)
                }
            }), e
        }(), t.mode.ECB
    })
}, function(t, e, n) {
    !function(i, r, o) {
        t.exports = e = r(n(29), n(33), n(28), n(40), n(37))
    }(this, function(t) {
        return function() {
            var e = t,
                n = e.lib,
                i = n.BlockCipher,
                r = e.algo,
                o = [],
                s = [],
                a = [],
                c = [],
                u = [],
                l = [],
                d = [],
                h = [],
                f = [],
                p = [];
            !function() {
                for (var t = [], e = 0; e < 256; e++)
                    e < 128 ? t[e] = e << 1 : t[e] = e << 1 ^ 283;
                for (var n = 0, i = 0, e = 0; e < 256; e++) {
                    var r = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
                    r = r >>> 8 ^ 255 & r ^ 99, o[n] = r, s[r] = n;
                    var m = t[n],
                        g = t[m],
                        v = t[g],
                        y = 257 * t[r] ^ 16843008 * r;
                    a[n] = y << 24 | y >>> 8, c[n] = y << 16 | y >>> 16, u[n] = y << 8 | y >>> 24, l[n] = y;
                    var y = 16843009 * v ^ 65537 * g ^ 257 * m ^ 16843008 * n;
                    d[r] = y << 24 | y >>> 8, h[r] = y << 16 | y >>> 16, f[r] = y << 8 | y >>> 24, p[r] = y, n ? (n = m ^ t[t[t[v ^ m]]], i ^= t[t[i]]) : n = i = 1
                }
            }();
            var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                g = r.AES = i.extend({
                    _doReset: function() {
                        for (var t = this._key, e = t.words, n = t.sigBytes / 4, i = this._nRounds = n + 6, r = 4 * (i + 1), s = this._keySchedule = [], a = 0; a < r; a++)
                            if (a < n)
                                s[a] = e[a];
                            else {
                                var c = s[a - 1];
                                a % n ? n > 6 && a % n == 4 && (c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c]) : (c = c << 8 | c >>> 24, c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c], c ^= m[a / n | 0] << 24), s[a] = s[a - n] ^ c
                            }
                        for (var u = this._invKeySchedule = [], l = 0; l < r; l++) {
                            var a = r - l;
                            if (l % 4)
                                var c = s[a];
                            else
                                var c = s[a - 4];
                            l < 4 || a <= 4 ? u[l] = c : u[l] = d[o[c >>> 24]] ^ h[o[c >>> 16 & 255]] ^ f[o[c >>> 8 & 255]] ^ p[o[255 & c]]
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, a, c, u, l, o)
                    },
                    decryptBlock: function(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, d, h, f, p, s);
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n
                    },
                    _doCryptBlock: function(t, e, n, i, r, o, s, a) {
                        for (var c = this._nRounds, u = t[e] ^ n[0], l = t[e + 1] ^ n[1], d = t[e + 2] ^ n[2], h = t[e + 3] ^ n[3], f = 4, p = 1; p < c; p++) {
                            var m = i[u >>> 24] ^ r[l >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[255 & h] ^ n[f++],
                                g = i[l >>> 24] ^ r[d >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & u] ^ n[f++],
                                v = i[d >>> 24] ^ r[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & l] ^ n[f++],
                                y = i[h >>> 24] ^ r[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & d] ^ n[f++];
                            u = m, l = g, d = v, h = y
                        }
                        var m = (a[u >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & h]) ^ n[f++],
                            g = (a[l >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & u]) ^ n[f++],
                            v = (a[d >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & l]) ^ n[f++],
                            y = (a[h >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & d]) ^ n[f++];
                        t[e] = m, t[e + 1] = g, t[e + 2] = v, t[e + 3] = y
                    },
                    keySize: 8
                });
            e.AES = i._createHelper(g)
        }(), t.AES
    })
}, function(t, e, n) {
    !function(i, r, o) {
        t.exports = e = r(n(29), n(41), n(42))
    }(this, function(t) {
        return function() {
            var e = t,
                n = e.lib,
                i = n.Base,
                r = n.WordArray,
                o = e.algo,
                s = o.MD5,
                a = o.EvpKDF = i.extend({
                    cfg: i.extend({
                        keySize: 4,
                        hasher: s,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        for (var n = this.cfg, i = n.hasher.create(), o = r.create(), s = o.words, a = n.keySize, c = n.iterations; s.length < a;) {
                            u && i.update(u);
                            var u = i.update(t).finalize(e);
                            i.reset();
                            for (var l = 1; l < c; l++)
                                u = i.finalize(u), i.reset();
                            o.concat(u)
                        }
                        return o.sigBytes = 4 * a, o
                    }
                });
            e.EvpKDF = function(t, e, n) {
                return a.create(n).compute(t, e)
            }
        }(), t.EvpKDF
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(29))
    }(this, function(t) {
        return function() {
            var e = t,
                n = e.lib,
                i = n.WordArray,
                r = n.Hasher,
                o = e.algo,
                s = [],
                a = o.SHA1 = r.extend({
                    _doReset: function() {
                        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, i = n[0], r = n[1], o = n[2], a = n[3], c = n[4], u = 0; u < 80; u++) {
                            if (u < 16)
                                s[u] = 0 | t[e + u];
                            else {
                                var l = s[u - 3] ^ s[u - 8] ^ s[u - 14] ^ s[u - 16];
                                s[u] = l << 1 | l >>> 31
                            }
                            var d = (i << 5 | i >>> 27) + c + s[u];
                            d += u < 20 ? (r & o | ~r & a) + 1518500249 : u < 40 ? (r ^ o ^ a) + 1859775393 : u < 60 ? (r & o | r & a | o & a) - 1894007588 : (r ^ o ^ a) - 899497514, c = a, a = o, o = r << 30 | r >>> 2, r = i, i = d
                        }
                        n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + o | 0, n[3] = n[3] + a | 0, n[4] = n[4] + c | 0
                    },
                    _doFinalize: function() {
                        var t = this._data,
                            e = t.words,
                            n = 8 * this._nDataBytes,
                            i = 8 * t.sigBytes;
                        return e[i >>> 5] |= 128 << 24 - i % 32, e[(i + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), e[(i + 64 >>> 9 << 4) + 15] = n, t.sigBytes = 4 * e.length, this._process(), this._hash
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    }
                });
            e.SHA1 = r._createHelper(a), e.HmacSHA1 = r._createHmacHelper(a)
        }(), t.SHA1
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(29))
    }(this, function(t) {
        !function() {
            var e = t,
                n = e.lib,
                i = n.Base,
                r = e.enc,
                o = r.Utf8,
                s = e.algo;
            s.HMAC = i.extend({
                init: function(t, e) {
                    t = this._hasher = new t.init, "string" == typeof e && (e = o.parse(e));
                    var n = t.blockSize,
                        i = 4 * n;
                    e.sigBytes > i && (e = t.finalize(e)), e.clamp();
                    for (var r = this._oKey = e.clone(), s = this._iKey = e.clone(), a = r.words, c = s.words, u = 0; u < n; u++)
                        a[u] ^= 1549556828, c[u] ^= 909522486;
                    r.sigBytes = s.sigBytes = i, this.reset()
                },
                reset: function() {
                    var t = this._hasher;
                    t.reset(), t.update(this._iKey)
                },
                update: function(t) {
                    return this._hasher.update(t), this
                },
                finalize: function(t) {
                    var e = this._hasher,
                        n = e.finalize(t);
                    e.reset();
                    var i = e.finalize(this._oKey.clone().concat(n));
                    return i
                }
            })
        }()
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(29))
    }(this, function(t) {
        return t.enc.Latin1
    })
}, function(t, e, n) {
    var i;
    i = function() {
        var t = {};
        return t.validEmail = function(t) {
            var e = "";
            return t ? /^((?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+)@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i.test(t) || (e = "请输入正确的邮箱地址，如tom@qq.com") : e = "请输入登录邮箱", {
                result: !e,
                message: e
            }
        }, t.validEmailV2 = function(t) {
            var e = "";
            return /^((?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+)@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i.test(t) || (e = "请输入正确的邮箱地址，如tom@qq.com"), {
                result: !e,
                message: e,
                nick: RegExp.$1
            }
        }, t.getPwdTip = function(e) {
            var n = t.getPwdScore(e),
                i = "";
            return i = n < 2 ? "6-20位字符，大写字母、小写字母、数字和标点符号至少包含2种" : 2 == n ? "弱：试试数字、大小写字母、符号混搭" : 3 == n ? "中：试试数字、大小写字母、符号混搭" : "强：请牢记此密码"
        }, t.validPassword = function(e) {
            var n = "";
            return e ? e.length < 6 ? n = "你输入的密码过短，至少6位" : e.length > 20 ? n = "你输入的密码过长，不要多于20位" : t.getPwdScore(e) < 2 && (n = "密码格式错误") : n = "请输入登录密码", {
                result: !n,
                message: n
            }
        }, t.validNick = function(t) {
            var e = "";
            return t ? /^[a-zA-Z0-9-_\u4e00-\u9fa5]{2,20}$/i.test(t) || (e = "2-20个字符，仅支持中英文，数字，下划线_，减号-") : e = "请输入昵称", {
                result: !e,
                message: e
            }
        }, t.getPwdScore = function(t) {
            var e = 0;
            return t.length > 0 && t.length < 21 && (t.match(/[a-z]/) && (e += 1), t.match(/[A-Z]/) && (e += 1), t.match(/[0-9]/) && (e += 1), t.match(/[^a-zA-Z0-9]/) && (e += 1)), e
        }, t.validCaptcha = function(t) {
            var e = "";
            return t || (e = "请输入验证码"), {
                result: !e,
                message: e
            }
        }, t.validInviteNo = function(t) {
            var e = "";
            return t += "", t && !/^\d{6,7}$/.test(t) && (e = "请输入正确的6或7位牛牛号"), {
                result: !e,
                message: e
            }
        }, t.validAgreement = function(t) {
            var e = "";
            return t || (e = "请同意遵守富途隐私声明和服务条款"), {
                result: !e,
                message: e
            }
        }, t
    }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(4), n(26), n(28)], r = function(t, e, n, i) {
        return {
            checkRegInfo: function(n) {
                var i = t.Deferred();
                return e({
                    url: "/site/check-signup",
                    type: "POST",
                    data: n
                }, function(t) {
                    i.resolve(t.data)
                }, function(t) {
                    i.reject(t.message)
                }), i
            },
            getCaptchaUrl: function() {
                var n = t.Deferred();
                return e({
                    url: "/site/captcha?refresh"
                }, function(t) {
                    n.resolve(t.url)
                }, function(t) {
                    n.reject(t)
                }), n
            },
            getSalt: function() {
                var i = t.Deferred();
                return e({
                    url: "/site/regist-salt",
                    data: {
                        device_id: n.get()
                    }
                }, function(t) {
                    i.resolve(t.data)
                }, function(t) {
                    if (99 === +t.code) {
                        var e = t.data || {};
                        i.reject({
                            message: e.error_code + "-" + e.error_msg
                        })
                    } else
                        i.reject(t)
                }), i
            },
            reg: function(n, r) {
                var o = t.Deferred();
                return this.getSalt().done(function(t) {
                    n.password = i(n.password).toString(), n.password_s2 = i(n.password + t.new_salt).toString(), n.reg_sig = t.reg_sig, e({
                        url: r || "/site/signup-request",
                        type: "POST",
                        data: n
                    }, function(t) {
                        o.resolve(t.data)
                    }, function(t) {
                        o.reject(t)
                    })
                }).fail(function(t) {
                    o.reject(t)
                }), o
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(6), n(47), n(48), n(50)], r = function(t, e, n, i, r) {
        return function(o) {
            n.isGuest = "", t("#accountHeader").html(e.template(r)({
                user: o
            })), i.loginReload()
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [], r = function() {
        return window._params
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(49), n(6)], r = function(t, e) {
        function n(t) {
            t = t || [];
            for (var e = 0, n = t.length; e < n; ++e) {
                var r = t[e];
                !function(t) {
                    i[t.pub] = function(e) {
                        i.publish(t.name, e)
                    }, i[t.sub] = function(e, n) {
                        i.subscribe(t.name, e, n)
                    }
                }(r)
            }
        }
        var i = {};
        e.extend(i, t.Events);
        var r = "login_reload_event",
            o = "refresh_quote_event",
            s = "enable_real_time_quote_event",
            a = "hk_quote_kicked_event";
        return i.publish = i.trigger, i.subscribe = i.on, n([{
            name: r,
            pub: "loginReload",
            sub: "onLoginReload"
        }, {
            name: o,
            pub: "refreshBMP",
            sub: "onRefreshBMP"
        }, {
            name: s,
            pub: "enableRealTimeQuote",
            sub: "onEnableRealTimeQuote"
        }, {
            name: a,
            pub: "hkQuoteKicked",
            sub: "onHkQuoteKicked"
        }]), i
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    !function(o, s) {
        i = [n(6), n(2), e], r = function(t, e, n) {
            o.Backbone = s(o, n, t, e)
        }.apply(e, i), !(void 0 !== r && (t.exports = r))
    }(this, function(t, e, n, i) {
        var r = t.Backbone,
            o = [],
            s = (o.push, o.slice);
        o.splice;
        e.VERSION = "1.1.2", e.$ = i, e.noConflict = function() {
            return t.Backbone = r, this
        }, e.emulateHTTP = !1, e.emulateJSON = !1;
        var a = e.Events = {
                on: function(t, e, n) {
                    if (!u(this, "on", t, [e, n]) || !e)
                        return this;
                    this._events || (this._events = {});
                    var i = this._events[t] || (this._events[t] = []);
                    return i.push({
                        callback: e,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(t, e, i) {
                    if (!u(this, "once", t, [e, i]) || !e)
                        return this;
                    var r = this,
                        o = n.once(function() {
                            r.off(t, o), e.apply(this, arguments)
                        });
                    return o._callback = e, this.on(t, o, i)
                },
                off: function(t, e, i) {
                    var r,
                        o,
                        s,
                        a,
                        c,
                        l,
                        d,
                        h;
                    if (!this._events || !u(this, "off", t, [e, i]))
                        return this;
                    if (!t && !e && !i)
                        return this._events = void 0, this;
                    for (a = t ? [t] : n.keys(this._events), c = 0, l = a.length; c < l; c++)
                        if (t = a[c], s = this._events[t]) {
                            if (this._events[t] = r = [], e || i)
                                for (d = 0, h = s.length; d < h; d++)
                                    o = s[d], (e && e !== o.callback && e !== o.callback._callback || i && i !== o.context) && r.push(o);
                            r.length || delete this._events[t]
                        }
                    return this
                },
                trigger: function(t) {
                    if (!this._events)
                        return this;
                    var e = s.call(arguments, 1);
                    if (!u(this, "trigger", t, e))
                        return this;
                    var n = this._events[t],
                        i = this._events.all;
                    return n && l(n, e), i && l(i, arguments), this
                },
                stopListening: function(t, e, i) {
                    var r = this._listeningTo;
                    if (!r)
                        return this;
                    var o = !e && !i;
                    i || "object" != typeof e || (i = this), t && ((r = {})[t._listenId] = t);
                    for (var s in r)
                        t = r[s], t.off(e, i, this), (o || n.isEmpty(t._events)) && delete this._listeningTo[s];
                    return this
                }
            },
            c = /\s+/,
            u = function(t, e, n, i) {
                if (!n)
                    return !0;
                if ("object" == typeof n) {
                    for (var r in n)
                        t[e].apply(t, [r, n[r]].concat(i));
                    return !1
                }
                if (c.test(n)) {
                    for (var o = n.split(c), s = 0, a = o.length; s < a; s++)
                        t[e].apply(t, [o[s]].concat(i));
                    return !1
                }
                return !0
            },
            l = function(t, e) {
                var n,
                    i = -1,
                    r = t.length,
                    o = e[0],
                    s = e[1],
                    a = e[2];
                switch (e.length) {
                case 0:
                    for (; ++i < r;)
                        (n = t[i]).callback.call(n.ctx);
                    return;
                case 1:
                    for (; ++i < r;)
                        (n = t[i]).callback.call(n.ctx, o);
                    return;
                case 2:
                    for (; ++i < r;)
                        (n = t[i]).callback.call(n.ctx, o, s);
                    return;
                case 3:
                    for (; ++i < r;)
                        (n = t[i]).callback.call(n.ctx, o, s, a);
                    return;
                default:
                    for (; ++i < r;)
                        (n = t[i]).callback.apply(n.ctx, e);
                    return
                }
            },
            d = {
                listenTo: "on",
                listenToOnce: "once"
            };
        n.each(d, function(t, e) {
            a[e] = function(e, i, r) {
                var o = this._listeningTo || (this._listeningTo = {}),
                    s = e._listenId || (e._listenId = n.uniqueId("l"));
                return o[s] = e, r || "object" != typeof i || (r = this), e[t](i, r, this), this
            }
        }), a.bind = a.on, a.unbind = a.off, n.extend(e, a);
        var h = e.Model = function(t, e) {
            var i = t || {};
            e || (e = {}), this.cid = n.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(h.prototype, a, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(t) {
                return n.clone(this.attributes)
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            get: function(t) {
                return this.attributes[t]
            },
            escape: function(t) {
                return n.escape(this.get(t))
            },
            has: function(t) {
                return null != this.get(t)
            },
            set: function(t, e, i) {
                var r,
                    o,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d;
                if (null == t)
                    return this;
                if ("object" == typeof t ? (o = t, i = e) : (o = {})[t] = e, i || (i = {}), !this._validate(o, i))
                    return !1;
                s = i.unset, c = i.silent, a = [], u = this._changing, this._changing = !0, u || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), d = this.attributes, l = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                for (r in o)
                    e = o[r], n.isEqual(d[r], e) || a.push(r), n.isEqual(l[r], e) ? delete this.changed[r] : this.changed[r] = e, s ? delete d[r] : d[r] = e;
                if (!c) {
                    a.length && (this._pending = i);
                    for (var h = 0, f = a.length; h < f; h++)
                        this.trigger("change:" + a[h], this, d[a[h]], i)
                }
                if (u)
                    return this;
                if (!c)
                    for (; this._pending;)
                        i = this._pending, this._pending = !1, this.trigger("change", this, i);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(t, e) {
                return this.set(t, void 0, n.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function(t) {
                var e = {};
                for (var i in this.attributes)
                    e[i] = void 0;
                return this.set(e, n.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function(t) {
                return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
            },
            changedAttributes: function(t) {
                if (!t)
                    return !!this.hasChanged() && n.clone(this.changed);
                var e,
                    i = !1,
                    r = this._changing ? this._previousAttributes : this.attributes;
                for (var o in t)
                    n.isEqual(r[o], e = t[o]) || ((i || (i = {}))[o] = e);
                return i
            },
            previous: function(t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(t) {
                t = t ? n.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = this,
                    i = t.success;
                return t.success = function(n) {
                    return !!e.set(e.parse(n, t), t) && (i && i(e, n, t), void e.trigger("sync", e, n, t))
                }, I(this, t), this.sync("read", this, t)
            },
            save: function(t, e, i) {
                var r,
                    o,
                    s,
                    a = this.attributes;
                if (null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i = n.extend({
                    validate: !0
                }, i), r && !i.wait) {
                    if (!this.set(r, i))
                        return !1
                } else if (!this._validate(r, i))
                    return !1;
                r && i.wait && (this.attributes = n.extend({}, a, r)), void 0 === i.parse && (i.parse = !0);
                var c = this,
                    u = i.success;
                return i.success = function(t) {
                    c.attributes = a;
                    var e = c.parse(t, i);
                    return i.wait && (e = n.extend(r || {}, e)), !(n.isObject(e) && !c.set(e, i)) && (u && u(c, t, i), void c.trigger("sync", c, t, i))
                }, I(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = r), s = this.sync(o, this, i), r && i.wait && (this.attributes = a), s
            },
            destroy: function(t) {
                t = t ? n.clone(t) : {};
                var e = this,
                    i = t.success,
                    r = function() {
                        e.trigger("destroy", e, e.collection, t)
                    };
                if (t.success = function(n) {
                    (t.wait || e.isNew()) && r(), i && i(e, n, t), e.isNew() || e.trigger("sync", e, n, t)
                }, this.isNew())
                    return t.success(), !1;
                I(this, t);
                var o = this.sync("delete", this, t);
                return t.wait || r(), o
            },
            url: function() {
                var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || P();
                return this.isNew() ? t : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(t, e) {
                return t
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(t) {
                return this._validate({}, n.extend(t || {}, {
                    validate: !0
                }))
            },
            _validate: function(t, e) {
                if (!e.validate || !this.validate)
                    return !0;
                t = n.extend({}, this.attributes, t);
                var i = this.validationError = this.validate(t, e) || null;
                return !i || (this.trigger("invalid", this, i, n.extend(e, {
                        validationError: i
                    })), !1)
            }
        });
        var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(f, function(t) {
            h.prototype[t] = function() {
                var e = s.call(arguments);
                return e.unshift(this.attributes), n[t].apply(n, e)
            }
        });
        var p = e.Collection = function(t, e) {
                e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({
                    silent: !0
                }, e))
            },
            m = {
                add: !0,
                remove: !0,
                merge: !0
            },
            g = {
                add: !0,
                remove: !1
            };
        n.extend(p.prototype, a, {
            model: h,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            add: function(t, e) {
                return this.set(t, n.extend({
                    merge: !1
                }, e, g))
            },
            remove: function(t, e) {
                var i = !n.isArray(t);
                t = i ? [t] : n.clone(t), e || (e = {});
                var r,
                    o,
                    s,
                    a;
                for (r = 0, o = t.length; r < o; r++)
                    a = t[r] = this.get(t[r]), a && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, e.silent || (e.index = s, a.trigger("remove", a, this, e)), this._removeReference(a, e));
                return i ? t[0] : t
            },
            set: function(t, e) {
                e = n.defaults({}, e, m), e.parse && (t = this.parse(t, e));
                var i = !n.isArray(t);
                t = i ? t ? [t] : [] : n.clone(t);
                var r,
                    o,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d = e.at,
                    f = this.model,
                    p = this.comparator && null == d && e.sort !== !1,
                    g = n.isString(this.comparator) ? this.comparator : null,
                    v = [],
                    y = [],
                    w = {},
                    b = e.add,
                    _ = e.merge,
                    x = e.remove,
                    k = !(p || !b || !x) && [];
                for (r = 0, o = t.length; r < o; r++) {
                    if (c = t[r] || {}, s = c instanceof h ? a = c : c[f.prototype.idAttribute || "id"], u = this.get(s))
                        x && (w[u.cid] = !0), _ && (c = c === a ? a.attributes : c, e.parse && (c = u.parse(c, e)), u.set(c, e), p && !l && u.hasChanged(g) && (l = !0)), t[r] = u;
                    else if (b) {
                        if (a = t[r] = this._prepareModel(c, e), !a)
                            continue;
                        v.push(a), this._addReference(a, e)
                    }
                    a = u || a, !k || !a.isNew() && w[a.id] || k.push(a), w[a.id] = !0
                }
                if (x) {
                    for (r = 0, o = this.length; r < o; ++r)
                        w[(a = this.models[r]).cid] || y.push(a);
                    y.length && this.remove(y, e)
                }
                if (v.length || k && k.length)
                    if (p && (l = !0), this.length += v.length, null != d)
                        for (r = 0, o = v.length; r < o; r++)
                            this.models.splice(d + r, 0, v[r]);
                    else {
                        k && (this.models.length = 0);
                        var T = k || v;
                        for (r = 0, o = T.length; r < o; r++)
                            this.models.push(T[r])
                    }
                if (l && this.sort({
                    silent: !0
                }), !e.silent) {
                    for (r = 0, o = v.length; r < o; r++)
                        (a = v[r]).trigger("add", a, this, e);
                    (l || k && k.length) && this.trigger("sort", this, e)
                }
                return i ? t[0] : t
            },
            reset: function(t, e) {
                e || (e = {});
                for (var i = 0, r = this.models.length; i < r; i++)
                    this._removeReference(this.models[i], e);
                return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), t
            },
            push: function(t, e) {
                return this.add(t, n.extend({
                    at: this.length
                }, e))
            },
            pop: function(t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t), e
            },
            unshift: function(t, e) {
                return this.add(t, n.extend({
                    at: 0
                }, e))
            },
            shift: function(t) {
                var e = this.at(0);
                return this.remove(e, t), e
            },
            slice: function() {
                return s.apply(this.models, arguments)
            },
            get: function(t) {
                if (null != t)
                    return this._byId[t] || this._byId[t.id] || this._byId[t.cid]
            },
            at: function(t) {
                return this.models[t]
            },
            where: function(t, e) {
                return n.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                    for (var n in t)
                        if (t[n] !== e.get(n))
                            return !1;
                    return !0
                })
            },
            findWhere: function(t) {
                return this.where(t, !0)
            },
            sort: function(t) {
                if (!this.comparator)
                    throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
            },
            pluck: function(t) {
                return n.invoke(this.models, "get", t)
            },
            fetch: function(t) {
                t = t ? n.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = t.success,
                    i = this;
                return t.success = function(n) {
                    var r = t.reset ? "reset" : "set";
                    i[r](n, t), e && e(i, n, t), i.trigger("sync", i, n, t)
                }, I(this, t), this.sync("read", this, t)
            },
            create: function(t, e) {
                if (e = e ? n.clone(e) : {}, !(t = this._prepareModel(t, e)))
                    return !1;
                e.wait || this.add(t, e);
                var i = this,
                    r = e.success;
                return e.success = function(t, n) {
                    e.wait && i.add(t, e), r && r(t, n, e)
                }, t.save(null, e), t
            },
            parse: function(t, e) {
                return t
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(t, e) {
                if (t instanceof h)
                    return t;
                e = e ? n.clone(e) : {}, e.collection = this;
                var i = new this.model(t, e);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
            },
            _addReference: function(t, e) {
                this._byId[t.cid] = t, null != t.id && (this._byId[t.id] = t), t.collection || (t.collection = this), t.on("all", this._onModelEvent, this)
            },
            _removeReference: function(t, e) {
                this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(t, e, n, i) {
                ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
            }
        });
        var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(v, function(t) {
            p.prototype[t] = function() {
                var e = s.call(arguments);
                return e.unshift(this.models), n[t].apply(n, e)
            }
        });
        var y = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(y, function(t) {
            p.prototype[t] = function(e, i) {
                var r = n.isFunction(e) ? e : function(t) {
                    return t.get(e)
                };
                return n[t](this.models, r, i)
            }
        });
        var w = e.View = function(t) {
                this.cid = n.uniqueId("view"), t || (t = {}), n.extend(this, n.pick(t, _)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            b = /^(\S+)\s*(.*)$/,
            _ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(w.prototype, a, {
            tagName: "div",
            $: function(t) {
                return this.$el.find(t)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(t, n) {
                return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(t) {
                if (!t && !(t = n.result(this, "events")))
                    return this;
                this.undelegateEvents();
                for (var e in t) {
                    var i = t[e];
                    if (n.isFunction(i) || (i = this[t[e]]), i) {
                        var r = e.match(b),
                            o = r[1],
                            s = r[2];
                        i = n.bind(i, this), o += ".delegateEvents" + this.cid, "" === s ? this.$el.on(o, i) : this.$el.on(o, s, i)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el)
                    this.setElement(n.result(this, "el"), !1);
                else {
                    var t = n.extend({}, n.result(this, "attributes"));
                    this.id && (t.id = n.result(this, "id")), this.className && (t["class"] = n.result(this, "className"));
                    var i = e.$("<" + n.result(this, "tagName") + ">").attr(t);
                    this.setElement(i, !1)
                }
            }
        }), e.sync = function(t, i, r) {
            var o = k[t];
            n.defaults(r || (r = {}), {
                emulateHTTP: e.emulateHTTP,
                emulateJSON: e.emulateJSON
            });
            var s = {
                type: o,
                dataType: "json"
            };
            if (r.url || (s.url = n.result(i, "url") || P()), null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                model: s.data
            } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                s.type = "POST", r.emulateJSON && (s.data._method = o);
                var a = r.beforeSend;
                r.beforeSend = function(t) {
                    if (t.setRequestHeader("X-HTTP-Method-Override", o), a)
                        return a.apply(this, arguments)
                }
            }
            "GET" === s.type || r.emulateJSON || (s.processData = !1), "PATCH" === s.type && x && (s.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var c = r.xhr = e.ajax(n.extend(s, r));
            return i.trigger("request", i, c, r), c
        };
        var x = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            k = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        e.ajax = function() {
            return e.$.ajax.apply(e.$, arguments)
        };
        var T = e.Router = function(t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            C = /\((.*?)\)/g,
            M = /(\(\?)?:\w+/g,
            S = /\*\w+/g,
            D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(T.prototype, a, {
            initialize: function() {},
            route: function(t, i, r) {
                n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
                var o = this;
                return e.history.route(t, function(n) {
                    var s = o._extractParameters(t, n);
                    o.execute(r, s), o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), e.history.trigger("route", o, i, s)
                }), this
            },
            execute: function(t, e) {
                t && t.apply(this, e)
            },
            navigate: function(t, n) {
                return e.history.navigate(t, n), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var t, e = n.keys(this.routes); null != (t = e.pop());)
                        this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function(t) {
                return t = t.replace(D, "\\$&").replace(C, "(?:$1)?").replace(M, function(t, e) {
                    return e ? t : "([^/?]+)"
                }).replace(S, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(t, e) {
                var i = t.exec(e).slice(1);
                return n.map(i, function(t, e) {
                    return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                })
            }
        });
        var $ = e.History = function() {
                this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            E = /^[#\/]|\s+$/g,
            N = /^\/+|\/+$/g,
            A = /msie [\w.]+/,
            j = /\/$/,
            O = /#.*$/;
        $.started = !1, n.extend($.prototype, a, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getFragment: function(t, e) {
                if (null == t)
                    if (this._hasPushState || !this._wantsHashChange || e) {
                        t = decodeURI(this.location.pathname + this.location.search);
                        var n = this.root.replace(j, "");
                        t.indexOf(n) || (t = t.slice(n.length))
                    } else
                        t = this.getHash();
                return t.replace(E, "")
            },
            start: function(t) {
                if ($.started)
                    throw new Error("Backbone.history has already been started");
                $.started = !0, this.options = n.extend({
                    root: "/"
                }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var i = this.getFragment(),
                    r = document.documentMode,
                    o = A.exec(navigator.userAgent.toLowerCase()) && (!r || r <= 7);
                if (this.root = ("/" + this.root + "/").replace(N, "/"), o && this._wantsHashChange) {
                    var s = e.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = s.hide().appendTo("body")[0].contentWindow, this.navigate(i)
                }
                this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                var a = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot())
                        return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(E, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                if (!this.options.silent)
                    return this.loadUrl()
            },
            stop: function() {
                e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), $.started = !1
            },
            route: function(t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function(t) {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e !== this.fragment && (this.iframe && this.navigate(e), void this.loadUrl())
            },
            loadUrl: function(t) {
                return t = this.fragment = this.getFragment(t), n.any(this.handlers, function(e) {
                    if (e.route.test(t))
                        return e.callback(t), !0
                })
            },
            navigate: function(t, e) {
                if (!$.started)
                    return !1;
                e && e !== !0 || (e = {
                    trigger: !!e
                });
                var n = this.root + (t = this.getFragment(t || ""));
                if (t = t.replace(O, ""), this.fragment !== t) {
                    if (this.fragment = t, "" === t && "/" !== n && (n = n.slice(0, -1)), this._hasPushState)
                        this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange)
                            return this.location.assign(n);
                        this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                    }
                    return e.trigger ? this.loadUrl(t) : void 0
                }
            },
            _updateHash: function(t, e, n) {
                if (n) {
                    var i = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(i + "#" + e)
                } else
                    t.hash = "#" + e
            }
        }), e.history = new $;
        var B = function(t, e) {
            var i,
                r = this;
            i = t && n.has(t, "constructor") ? t.constructor : function() {
                return r.apply(this, arguments)
            }, n.extend(i, r, e);
            var o = function() {
                this.constructor = i
            };
            return o.prototype = r.prototype, i.prototype = new o, t && n.extend(i.prototype, t), i.__super__ = r.prototype, i
        };
        h.extend = p.extend = T.extend = w.extend = $.extend = B;
        var P = function() {
                throw new Error('A "url" property or function must be specified')
            },
            I = function(t, e) {
                var n = e.error;
                e.error = function(i) {
                    n && n(t, i, e), t.trigger("error", t, i, e)
                }
            };
        return e
    })
}, function(t, e) {
    t.exports = '<div class="floatSpan01" onmouseover="this.className=\'floatSpan01 floatSpan01Onmouse\'" onmouseout="this.className=\'floatSpan01\'">\n    <div class="imgBox"><a href="/account/home"><img src="<%=user.avatar%>" width="24" height="24" /></a></div>\n    <div class="xlBar01"><i></i></div>\n    <div class="xlBox01 floatBox02">\n        <div class="alpha001"></div>\n        <i class="i01"></i>\n        <a href="/account/home">账户首页</a>\n        <a href="/account/">模拟账户</a>\n        <a href="/account/setting">账户设置</a>\n        <a href="/site/logout" data-method="post">退出</a>\n    </div>\n</div>\n\n<div class="floatSpan01">\n    <a class="js-msgTrigger newsSpan01" href="/message/index"><i class="iconfont">&#xe63f;</i><span class="js-dot"></span></a>\n\n    <div class="xlNoticeBox01 floatBox02 js-msgPanel">\n        <div class="alpha001"></div>\n        <i class="i01"></i>\n        <div class="tab001 js-msgTab">\n            <a href="#" class="a01 current" type="sns"><em></em>社交消息<span class="hide js-count" type="sns"></span></a>\n            <a href="#" class="a02" type="sys"><em></em>系统消息<span class="hide js-count" type="sys"></span></a>\n        </div>\n        <div class="c001">\n            <ul class="js-msgContainer"></ul>\n            <a class="loadMore js-loadMore" href="#" style="display: none;">查看更多</a>\n        </div>\n        <div class="footer js-msgFooter" style="display: none;"><a href="/message/index" class="fr">查看全部&gt;</a></div>\n    </div>\n</div>\n'
}, function(t, e, n) {
    var i,
        r,
        o;
    !function(s) {
        r = [n(2)], i = s, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(function(t) {
        function e(t) {
            return a.raw ? t : encodeURIComponent(t)
        }
        function n(t) {
            return a.raw ? t : decodeURIComponent(t)
        }
        function i(t) {
            return e(a.json ? JSON.stringify(t) : String(t))
        }
        function r(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(s, " ")), a.json ? JSON.parse(t) : t
            } catch (e) {}
        }
        function o(e, n) {
            var i = a.raw ? e : r(e);
            return t.isFunction(n) ? n(i) : i
        }
        var s = /\+/g,
            a = t.cookie = function(r, s, c) {
                if (void 0 !== s && !t.isFunction(s)) {
                    if (c = t.extend({}, a.defaults, c), "number" == typeof c.expires) {
                        var u = c.expires,
                            l = c.expires = new Date;
                        l.setTime(+l + 864e5 * u)
                    }
                    return document.cookie = [e(r), "=", i(s), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
                }
                for (var d = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], f = 0, p = h.length; f < p; f++) {
                    var m = h[f].split("="),
                        g = n(m.shift()),
                        v = m.join("=");
                    if (r && r === g) {
                        d = o(v, s);
                        break
                    }
                    r || void 0 === (v = o(v)) || (d[g] = v)
                }
                return d
            };
        a.defaults = {}, t.removeCookie = function(e, n) {
            return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, n, {
                    expires: -1
                })), !t.cookie(e))
        }
    })
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(27)], r = function(t, e) {
        var n = {};
        return n.show = function(n, i, r) {
            var o = t("#newUserDialog"),
                s = t("#newUserDialogMask");
            n && o.find(".ui-welcome-nick").text(n), i && o.find(".nnNum001").text(i), s.show(), o.show().find(".ui-dialog-closeBtn,.submitBtn").click(function() {
                o.remove(), s.remove(), r && r()
            }), e.removeItem("isNew"), e.removeItem("isNew")
        }, n
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(18), n(54), n(55), n(48)], r = function(t, e, n, i, r) {
        var o = function(i) {
            i || (i = {}), i = t.extend({
                withMask: !0,
                $wrapper: t(n).appendTo("body"),
                elementMap: {
                    closeBtn: ".ui-dialog-closeBtn"
                },
                dialogTitle: "登录",
                icon: "iconfont"
            }, i), this.$wrapper = i.$wrapper, this.loginCb = i.loginCb || t.noop, this.dialog = new e(i), this.init()
        };
        return o.prototype.init = function() {
            var t = this;
            this.loginForm = new i({
                $wrapper: this.$wrapper,
                isDynamic: !0,
                cb: function(e) {
                    t.dialog.remove(), t.loginCb(e)
                }
            }), this.$wrapper.find(".ui-reg-link").on("click", function(e) {
                e.preventDefault(), t.$wrapper.animate({
                    left: "100%"
                }, "normal", null, function() {
                    r.publish("popSignup", t.dialog)
                })
            }), this.initOauthHref()
        }, o.prototype.initOauthHref = function() {
            var e = window.location.href,
                n = e.split("//"),
                i = "/";
            if (n[1]) {
                var r = n[1].indexOf("/");
                r > -1 && (i = n[1].substr(r))
            }
            this.$wrapper.find(".openBar02>a").each(function() {
                var e = t(this).attr("href");
                e += "&ref=" + encodeURIComponent(i), t(this).attr("href", e)
            })
        }, o
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e) {
    t.exports = '<div class="ui-dialog-wrapper ui-dialog-wrapper-03" style=" margin-top:-250px;display:block;">\n    <div class="ui-dialog-dialogTitle ui-dialog-dialogTitle-3">\n        <button data-ui-dialog-event="close" class="ui-dialog-closeBtn iconfont">&#xe605;</button>\n        <h3>登录</h3>\n    </div>\n    <div class="ui-dialog-dialogBody">\n        <div class="floatLoginBox01">\n            <form>\n                <div class="c001">\n                    <ul>\n                        <li class="li01 js-error-wrapper" style="display: none;">\n                            <div class="floatMsgBar01"><i></i><em>&#xe626;</em><span class="js-error-msg"></span></div>\n                        </li>\n                        <li class="li01 js-input-wrapper">\n                            <span class="iconfont row">&#xe60e;</span>\n                            <input type="text" placeholder="牛牛号/邮箱" name="username" class="inputTxt01">\n                            <a href="javascript:void(0)" class="fr01 orange ui-reg-link" tabindex="-1">注册</a>\n                            <div class="msgTxt js-form-input-msg" style="display: none;"></div>\n                        </li>\n                        <li class="li01 js-input-wrapper">\n                            <span class="iconfont row">&#xe60f;</span>\n                            <input type="password" placeholder="密码" name="password" class="inputTxt01">\n                            <a href="javascript:void(0)" class="fr01 ui-forget-pwd-link" tabindex="-1">忘了</a>\n                            <div class="msgTxt js-form-input-msg" style="display: none;"></div>\n                        </li>\n                        <li class="li02 js-input-wrapper js-captcha-node" style="display: none;">\n                            <div class="clearBox">\n                                <span class="iconfont row">&#xe611;</span>\n                                <input type="text" class="inputTxt01" name="captcha" placeholder="验证码">\n                                <span class="yzmSpan" name="imgWrapper"><img class="ui-refresh-captcha js-captcha-img" src="#"></span>\n                                <span class="yzmSpan"><a href="javascript:void(0)" class="ui-refresh-captcha" tabindex="-1">换一个</a></span>\n                            </div>\n                            <div class="msgTxt js-form-input-msg" style="display: none;"></div>\n                        </li>\n                        <li class="li04">\n                            <span class="fl"><label><input type="checkbox" checked="checked" value="1" name="rememberMe"><u>两周内自动登录</u></label></span>\n                        </li>\n                        <li class="li06">\n                            <a href="//www.futunn.com/download/index" target="_blank" class="button btn01 fl">快速了解牛牛</a>\n                            <button class="button btn02 fr ui-submit" type="submit">登 录</button>\n                            <a class="button button100 btn01 btnDis01 fr ui-submitting" style="display: none;" href="javascript:void(0)"><span class="loading"></span><span>登录中...</span></a>\n                        </li>\n                        <!--<li class="li01 ui-submit"><button class="button button100 btn01" type="submit">登录</button></li>\n                        <li class="li01 ui-submitting" style="display: none;"><a class="button button100 btn01 btnDis01" href="javascript:void(0)"><span class="loading"></span><span>登录中...</span></a></li>-->\n                    </ul>\n                </div>\n            </form>\n            <div class="t001" style="margin-top:30px;"><span>或用第三方登录</span></div>\n            <div class="openBar02">\n                <a class="qq" href="http://www.futu5.com/oauth/qq-login?portal=futu8"><em class="iconfont">&#xe63c;</em></a>\n                <a class="weixin" href="http://www.futu5.com/oauth/wc-connect?portal=futu8"><em class="iconfont">&#xe639;</em></a>\n                <a class="sina" href="http://www.futu5.com/oauth/sina-login?portal=futu8"><em class="iconfont">&#xe63b;</em></a>\n                <!--<a class="xueqiu" href="http://www.futu5.com/oauth/xueqiu-login?portal=futu8"><em></em></a>-->\n            </div>\n        </div>\n    </div>\n</div>\n'
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(6), n(22), n(21), n(56), n(18), n(25), n(46), n(26), n(51)], r = function(t, e, n, i, r, o, s, a, c) {
        return n([i], {
            inputNames: ["username", "password", "captcha"],
            validateNames: ["username", "password"],
            errorMsgClassName: "msgError",
            successClassName: "",
            validator: r,
            init: function() {
                this.inherited(arguments), this._initOther()
            },
            _initOther: function() {
                this._initCaptcha(), this._initForgetPwdDialog()
            },
            _initCaptcha: function() {
                this.$captchaNodes = this.$form.find(".js-captcha-node"), this.$captchaImg = this.$form.find("img.js-captcha-img");
                var t = this;
                this.$form.find(".ui-refresh-captcha").on("click", function(e) {
                    t.refreshCaptcha()
                })
            },
            _initForgetPwdDialog: function() {
                this.$forgetPwdLink = this.$wrapper.find(".ui-forget-pwd-link"), this.$forgetPwdLink.on("click", function() {
                    var t = new o({
                        messageTitle: null,
                        messageBody: "你需要前往富途网进行密码管理，找回密码后欢迎再次返回富途牛牛。",
                        icon: null,
                        showCancel: !1,
                        submitBtnText: "前往富途网",
                        show: !1,
                        onBtnClick: function(t) {
                            "submit" == t && (window.location.href = "https://www.futu5.com/account/forgetpsw")
                        }
                    });
                    t.$messageTitle.remove(), t.show()
                })
            },
            initInputs: function() {
                this.inherited(arguments);
                var e = t.cookie("last_login_user");
                this.isDynamic && (e ? (this.$usernameInput.val(e), this.$passwordInput.focus()) : this.$usernameInput.focus())
            },
            bindInputEvents: function() {
                this.inherited(arguments);
                var t = this;
                this.$usernameInput.on("change", function() {
                    var e = t.$usernameInput.val();
                    t.getCaptchaInfo(e)
                }), this.$usernameInput.on("keypress", function(e) {
                    13 == e.which && (e.preventDefault(), t.$passwordInput.focus())
                })
            },
            onUsernameInput: function(t, e) {
                this.$passwordInput.val("")
            },
            getCaptchaInfo: function(e) {
                var n = this,
                    i = t.Deferred();
                return this.saltRet && this.currentAccount === e ? i.resolve(this.saltRet) : this.validator.validUsername(e).result ? s.getSalt(e).done(function(t) {
                    n.saltRet = t, n.currentAccount = e;
                    var r = n.currentUid;
                    n.currentUid = t.uid, t.svr_result.require_verify_code && "false" !== t.svr_result.require_verify_code ? (n.validateNames = ["username", "password", "captcha"], n.$captchaNodes.show(), r !== t.uid && n.refreshCaptcha()) : (n.validateNames = ["username", "password"], n.$captchaNodes.hide(), n.$captchaMsg.text("")), i.resolve(t)
                }).fail(function(t) {
                    i.reject(t)
                }) : i.reject(), i
            },
            refreshCaptcha: function() {
                this.currentUid && this.$captchaImg.attr("src", "/site/captcha-v2?uid=" + this.currentUid + "&device_id=" + c.get() + "&v=" + +new Date)
            },
            validUsername: function(t) {
                this._valid(t, "username")
            },
            validPassword: function(t) {
                this._valid(t, "password")
            },
            validCaptcha: function(t) {
                this._valid(t, "captcha")
            },
            _checkBeforeSubmit: function() {
                this.dfdArray = {}, this.inherited(arguments)
            },
            submit: function(n) {
                var i = t.Deferred(),
                    r = this;
                return this.getCaptchaInfo(n.username).done(function() {
                    s.postLogin(n, r.saltRet).done(function(r) {
                        t.cookie("last_login_user", n.username, {
                            expires: 365,
                            path: "/"
                        }), a(r), i.resolve(r), "https://www.futunn.com/" === window.location.href && s.getSignIn().done(function(n) {
                            if ("0" === n.code) {
                                var i = e.template(t("#creditsSignBoxTemplate").html()),
                                    r = t("#creditsSignBox");
                                r.find("div.sign-content").html(i(n.data)), r.show()
                            }
                        }, function(t) {})
                    }).fail(function(e) {
                        e.data && e.data.need_verify ? (r.validateNames = ["username", "password", "captcha"], r.$captchaNodes.show(), r.currentUid = e.data.user_id, r.refreshCaptcha()) : t(r.$captchaNodes[0]).is(":visible") && r.refreshCaptcha(), i.reject(e)
                    })
                }).fail(function(t) {
                    i.reject(t)
                }), i
            }
        })
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i;
    i = function() {
        function t(t, e) {
            var n = "";
            t || (n = e);
            var i = {
                result: !n,
                message: n
            };
            return i
        }
        return {
            validUsername: function(t) {
                var e = "";
                return "" === t ? e = "请输入牛牛号/注册邮箱" : /^\d{6,7}$/.test(t) || /^((?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+)@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i.test(t) || (e = "非法的牛牛号或邮箱"), {
                    result: !e,
                    message: e
                }
            },
            validPassword: function(e) {
                return t(e, "请输入密码")
            },
            validCaptcha: function(e) {
                return t(e, "请输入验证码")
            }
        }
    }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(58)], r = function(t, e) {
        var n = function(e) {
            e || (e = {}), t.extend(this, e), this.init()
        };
        return n.prototype.init = function() {
            this.$node = t(this.node);
            var n = this.href || this.$node.attr("href");
            this.$node.on("click", function(t) {
                t.preventDefault(), e(function() {
                    window.location.href = n
                })
            })
        }, n
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(47)], r = function(t) {
        return function(e) {
            t.isGuest ? window.location.href = "https://passport.futu5.com?target=" + encodeURIComponent(window.location.href) : e && e()
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    !function(e, n) {
        t.exports = n()
    }(this, function() {
        return function(t) {
            function e(i) {
                if (n[i])
                    return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function(t, e, n) {
            var i = function(t) {
                    !t || !t.monitorId, this._monitorId = t.monitorId, this._serverUrl = "//dedog-report.futunn.com"
                },
                r = function(t, e, n) {
                    return "load" === e && "complete" === document.readyState ? void n() : void (window.addEventListener ? t.addEventListener(e, n, !1) : window.attachEvent && t.attachEvent("on" + e, n))
                };
            i.prototype.listen = function(t) {
                function e() {
                    function t(t) {
                        var e = [];
                        for (var n in t)
                            e.push(n + "=" + t[n]);
                        return e.join("&")
                    }
                    var e = "__toolDedogBeaconImg",
                        n = document.getElementById(e);
                    n || (n = new Image, n.id = e, n.style.display = "none", document.body.appendChild(n)), n.src = c + "?" + t(a)
                }
                var i = n(1),
                    o = i(navigator.userAgent),
                    s = o.device.model && o.device.vendor + " " + o.device.model || o.device.vendor || o.device.type || o.os.name,
                    a = {
                        ua: navigator.userAgent,
                        dev_type: s,
                        os_type: o.os.name + " " + o.os.version,
                        monitorId: this._monitorId
                    };
                r(window, "error", function(t) {
                    a.url = location.href, a.msg = t.message, a.filename = t.filename, a.line = t.lineno, a.col = t.colno, a.stack = t.error.stack;
                    var n = new Date;
                    a.time = new Date(n.getTime() - 60 * n.getTimezoneOffset() * 1e3).toISOString().replace(/T/g, " ").replace(/\.\d+Z$/, ""), r(window, "load", e)
                });
                var c = this._serverUrl
            }, t.exports = i
        }, function(t, e) {
            !function(e, n) {
                "use strict";
                var i = "",
                    r = "?",
                    o = "function",
                    s = "undefined",
                    a = "object",
                    c = "major",
                    u = "model",
                    l = "name",
                    d = "type",
                    h = "vendor",
                    f = "version",
                    p = "architecture",
                    m = "console",
                    g = "mobile",
                    v = "tablet",
                    y = {
                        has: function(t, e) {
                            return e.toLowerCase().indexOf(t.toLowerCase()) !== -1
                        },
                        lowerize: function(t) {
                            return t.toLowerCase()
                        }
                    },
                    w = {
                        rgx: function() {
                            for (var t, e, i, r, c, u, l, d = 0, h = arguments; d < h.length; d += 2) {
                                var f = h[d],
                                    p = h[d + 1];
                                if (typeof t === s) {
                                    t = {};
                                    for (r in p)
                                        c = p[r], typeof c === a ? t[c[0]] = n : t[c] = n
                                }
                                for (e = i = 0; e < f.length; e++)
                                    if (u = f[e].exec(this.getUA())) {
                                        for (r in p)
                                            l = u[++i], c = p[r], typeof c === a && c.length > 0 ? 2 == c.length ? typeof c[1] == o ? t[c[0]] = c[1].call(this, l) : t[c[0]] = c[1] : 3 == c.length ? typeof c[1] !== o || c[1].exec && c[1].test ? t[c[0]] = l ? l.replace(c[1], c[2]) : n : t[c[0]] = l ? c[1].call(this, l, c[2]) : n : 4 == c.length && (t[c[0]] = l ? c[3].call(this, l.replace(c[1], c[2])) : n) : t[c] = l ? l : n;
                                        break
                                    }
                                if (u)
                                    break
                            }
                            return t
                        },
                        str: function(t, e) {
                            for (var i in e)
                                if (typeof e[i] === a && e[i].length > 0) {
                                    for (var o in e[i])
                                        if (y.has(e[i][o], t))
                                            return i === r ? n : i
                                } else if (y.has(e[i], t))
                                    return i === r ? n : i;
                            return t
                        }
                    },
                    b = {
                        browser: {
                            oldsafari: {
                                major: {
                                    1: ["/8", "/1", "/3"],
                                    2: "/4",
                                    "?": "/"
                                },
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    _ = {
                        browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [l, f, c], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[l, "Opera"], f, c], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt)\/((\d+)?[\w\.-]+)/i], [l, f, c], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[l, "Yandex"], f, c], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[l, /_/g, " "], f, c], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i], [l, f, c], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[l, "Dolphin"], f, c], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[l, "Chrome"], f, c], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [f, c, [l, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [f, c, l], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [l, [c, w.str, b.browser.oldsafari.major], [f, w.str, b.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [l, f, c], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[l, "Netscape"], f, c], [/(swiftfox)/i, /(iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [l, f, c]],
                        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[p, "amd64"]], [/((?:i[346]|x)86)[;\)]/i], [[p, "ia32"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[p, /ower/, "", y.lowerize]], [/(sun4\w)[;\)]/i], [[p, "sparc"]], [/(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [p, y.lowerize]],
                        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [u, h, [d, v]], [/(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [h, u, [d, v]], [/\((ip[honed]+);.+(apple)/i], [u, h, [d, g]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [h, u, [d, g]], [/\((bb10);\s(\w+)/i], [[h, "BlackBerry"], u, [d, g]], [/android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i], [[h, "Asus"], u, [d, v]], [/(sony)\s(tablet\s[ps])/i], [h, u, [d, v]], [/(nintendo)\s([wids3u]+)/i], [h, u, [d, m]], [/((playstation)\s[3portablevi]+)/i], [[h, "Sony"], u, [d, m]], [/(sprint\s(\w+))/i], [[h, w.str, b.device.sprint.vendor], [u, w.str, b.device.sprint.model], [d, g]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [h, [u, /_/g, " "], [d, g]], [/\s((milestone|droid[2x]?))[globa\s]*\sbuild\//i, /(mot)[\s-]?(\w+)*/i], [[h, "Motorola"], u, [d, g]], [/android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i], [[h, "Motorola"], u, [d, v]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i], [[h, "Samsung"], u, [d, v]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[h, "Samsung"], u, [d, g]], [/(sie)-(\w+)*/i], [[h, "Siemens"], u, [d, g]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[h, "Nokia"], u, [d, g]], [/android\s3\.[\s\w-;]{10}((a\d{3}))/i], [[h, "Acer"], u, [d, v]], [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i], [[h, "LG"], u, [d, v]], [/((nexus\s4))/i, /(lg)[e;\s-\/]+(\w+)*/i], [[h, "LG"], u, [d, g]], [/(mobile|tablet);.+rv\:.+gecko\//i], [d, h, u]],
                        engine: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [l, f], [/rv\:([\w\.]+).*(gecko)/i], [f, l]],
                        os: [[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [l, [f, w.str, b.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[l, "Windows"], [f, w.str, b.os.windows.version]], [/\((bb)(10);/i], [[l, "BlackBerry"], f], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i], [l, f], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[l, "Symbian"], f], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[l, "Firefox OS"], f], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [l, f], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[l, "Chromium OS"], f], [/(sunos)\s?([\w\.]+\d)*/i], [[l, "Solaris"], f], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [l, f], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[l, "iOS"], [f, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i], [l, [f, /_/g, "."]], [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i], [l, f]]
                    },
                    x = function k(t) {
                        if (!(this instanceof k))
                            return new k(t).getResult();
                        var n = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : i);
                        return this instanceof k ? (this.getBrowser = function() {
                            return w.rgx.apply(this, _.browser)
                        }, this.getCPU = function() {
                            return w.rgx.apply(this, _.cpu)
                        }, this.getDevice = function() {
                            return w.rgx.apply(this, _.device)
                        }, this.getEngine = function() {
                            return w.rgx.apply(this, _.engine)
                        }, this.getOS = function() {
                            return w.rgx.apply(this, _.os)
                        }, this.getResult = function() {
                            return {
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(t) {
                            return n = t, this
                        }, void this.setUA(n)) : new k(t).getResult()
                    };
                t.exports = x
            }(this)
        }])
    })
}, function(t, e) {
    (function(e) {
        function n(t, e, n) {
            switch (arguments.length) {
            case 2:
                return null != t ? t : e;
            case 3:
                return null != t ? t : null != e ? e : n;
            default:
                throw new Error("Implement me")
            }
        }
        function i() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }
        function r(t) {
            yt.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && void 0
        }
        function o(t, e) {
            var n = !0;
            return h(function() {
                return n && (r(t), n = !1), e.apply(this, arguments)
            }, e)
        }
        function s(t, e) {
            pe[t] || (r(e), pe[t] = !0)
        }
        function a(t, e) {
            return function(n) {
                return m(t.call(this, n), e)
            }
        }
        function c(t, e) {
            return function(n) {
                return this.localeData().ordinal(t.call(this, n), e)
            }
        }
        function u() {}
        function l(t, e) {
            e !== !1 && N(t), f(this, t), this._d = new Date((+t._d))
        }
        function d(t) {
            var e = T(t),
                n = e.year || 0,
                i = e.quarter || 0,
                r = e.month || 0,
                o = e.week || 0,
                s = e.day || 0,
                a = e.hour || 0,
                c = e.minute || 0,
                u = e.second || 0,
                l = e.millisecond || 0;
            this._milliseconds = +l + 1e3 * u + 6e4 * c + 36e5 * a, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = yt.localeData(), this._bubble()
        }
        function h(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]);
            return e.hasOwnProperty("toString") && (t.toString = e.toString), e.hasOwnProperty("valueOf") && (t.valueOf = e.valueOf), t
        }
        function f(t, e) {
            var n,
                i,
                r;
            if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = e._pf), "undefined" != typeof e._locale && (t._locale = e._locale), At.length > 0)
                for (n in At)
                    i = At[n], r = e[i], "undefined" != typeof r && (t[i] = r);
            return t
        }
        function p(t) {
            return 0 > t ? Math.ceil(t) : Math.floor(t)
        }
        function m(t, e, n) {
            for (var i = "" + Math.abs(t), r = t >= 0; i.length < e;)
                i = "0" + i;
            return (r ? n ? "+" : "" : "-") + i
        }
        function g(t, e) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
        }
        function v(t, e) {
            var n;
            return e = P(e, t), t.isBefore(e) ? n = g(t, e) : (n = g(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n
        }
        function y(t, e) {
            return function(n, i) {
                var r,
                    o;
                return null === i || isNaN(+i) || (s(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = yt.duration(n, i), w(this, r, t), this
            }
        }
        function w(t, e, n, i) {
            var r = e._milliseconds,
                o = e._days,
                s = e._months;
            i = null == i || i, r && t._d.setTime(+t._d + r * n), o && ht(t, "Date", dt(t, "Date") + o * n), s && lt(t, dt(t, "Month") + s * n), i && yt.updateOffset(t, o || s)
        }
        function b(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        function _(t) {
            return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
        }
        function x(t, e, n) {
            var i,
                r = Math.min(t.length, e.length),
                o = Math.abs(t.length - e.length),
                s = 0;
            for (i = 0; r > i; i++)
                (n && t[i] !== e[i] || !n && M(t[i]) !== M(e[i])) && s++;
            return s + o
        }
        function k(t) {
            if (t) {
                var e = t.toLowerCase().replace(/(.)s$/, "$1");
                t = ae[t] || ce[e] || e
            }
            return t
        }
        function T(t) {
            var e,
                n,
                i = {};
            for (n in t)
                t.hasOwnProperty(n) && (e = k(n), e && (i[e] = t[n]));
            return i
        }
        function C(t) {
            var n,
                i;
            if (0 === t.indexOf("week"))
                n = 7, i = "day";
            else {
                if (0 !== t.indexOf("month"))
                    return;
                n = 12, i = "month"
            }
            yt[t] = function(r, o) {
                var s,
                    a,
                    c = yt._locale[t],
                    u = [];
                if ("number" == typeof r && (o = r, r = e), a = function(t) {
                    var e = yt().utc().set(i, t);
                    return c.call(yt._locale, e, r || "")
                }, null != o)
                    return a(o);
                for (s = 0; n > s; s++)
                    u.push(a(s));
                return u
            }
        }
        function M(t) {
            var e = +t,
                n = 0;
            return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
        }
        function S(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
        }
        function D(t, e, n) {
            return st(yt([t, 11, 31 + e - n]), e, n).week
        }
        function $(t) {
            return E(t) ? 366 : 365
        }
        function E(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        }
        function N(t) {
            var e;
            t._a && -2 === t._pf.overflow && (e = t._a[Ct] < 0 || t._a[Ct] > 11 ? Ct : t._a[Mt] < 1 || t._a[Mt] > S(t._a[Tt], t._a[Ct]) ? Mt : t._a[St] < 0 || t._a[St] > 23 ? St : t._a[Dt] < 0 || t._a[Dt] > 59 ? Dt : t._a[$t] < 0 || t._a[$t] > 59 ? $t : t._a[Et] < 0 || t._a[Et] > 999 ? Et : -1, t._pf._overflowDayOfYear && (Tt > e || e > Mt) && (e = Mt), t._pf.overflow = e)
        }
        function A(t) {
            return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length)), t._isValid
        }
        function j(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }
        function O(t) {
            for (var e, n, i, r, o = 0; o < t.length;) {
                for (r = j(t[o]).split("-"), e = r.length, n = j(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                    if (i = B(r.slice(0, e).join("-")))
                        return i;
                    if (n && n.length >= e && x(r, n, !0) >= e - 1)
                        break;
                    e--
                }
                o++
            }
            return null
        }
        function B(t) {
            var e = null;
            if (!Nt[t] && jt)
                try {
                    e = yt.locale(), require("./locale/" + t), yt.locale(e)
                } catch (n) {}
            return Nt[t]
        }
        function P(t, e) {
            return e._isUTC ? yt(t).zone(e._offset || 0) : yt(t).local()
        }
        function I(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }
        function L(t) {
            var e,
                n,
                i = t.match(It);
            for (e = 0, n = i.length; n > e; e++)
                i[e] = fe[i[e]] ? fe[i[e]] : I(i[e]);
            return function(r) {
                var o = "";
                for (e = 0; n > e; e++)
                    o += i[e] instanceof Function ? i[e].call(r, t) : i[e];
                return o
            }
        }
        function H(t, e) {
            return t.isValid() ? (e = F(e, t.localeData()), ue[e] || (ue[e] = L(e)), ue[e](t)) : t.localeData().invalidDate()
        }
        function F(t, e) {
            function n(t) {
                return e.longDateFormat(t) || t
            }
            var i = 5;
            for (Lt.lastIndex = 0; i >= 0 && Lt.test(t);)
                t = t.replace(Lt, n), Lt.lastIndex = 0, i -= 1;
            return t
        }
        function Y(t, e) {
            var n,
                i = e._strict;
            switch (t) {
            case "Q":
                return Vt;
            case "DDDD":
                return Jt;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return i ? Kt : Yt;
            case "Y":
            case "G":
            case "g":
                return te;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return i ? Qt : zt;
            case "S":
                if (i)
                    return Vt;
            case "SS":
                if (i)
                    return Zt;
            case "SSS":
                if (i)
                    return Jt;
            case "DDD":
                return Ft;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Rt;
            case "a":
            case "A":
                return e._locale._meridiemParse;
            case "X":
                return Gt;
            case "Z":
            case "ZZ":
                return qt;
            case "T":
                return Wt;
            case "SSSS":
                return Ut;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return i ? Zt : Ht;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Ht;
            case "Do":
                return Xt;
            default:
                return n = new RegExp(Z(V(t.replace("\\", "")), "i"))
            }
        }
        function z(t) {
            t = t || "";
            var e = t.match(qt) || [],
                n = e[e.length - 1] || [],
                i = (n + "").match(oe) || ["-", 0, 0],
                r = +(60 * i[1]) + M(i[2]);
            return "+" === i[0] ? -r : r
        }
        function U(t, e, n) {
            var i,
                r = n._a;
            switch (t) {
            case "Q":
                null != e && (r[Ct] = 3 * (M(e) - 1));
                break;
            case "M":
            case "MM":
                null != e && (r[Ct] = M(e) - 1);
                break;
            case "MMM":
            case "MMMM":
                i = n._locale.monthsParse(e), null != i ? r[Ct] = i : n._pf.invalidMonth = e;
                break;
            case "D":
            case "DD":
                null != e && (r[Mt] = M(e));
                break;
            case "Do":
                null != e && (r[Mt] = M(parseInt(e, 10)));
                break;
            case "DDD":
            case "DDDD":
                null != e && (n._dayOfYear = M(e));
                break;
            case "YY":
                r[Tt] = yt.parseTwoDigitYear(e);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                r[Tt] = M(e);
                break;
            case "a":
            case "A":
                n._isPm = n._locale.isPM(e);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                r[St] = M(e);
                break;
            case "m":
            case "mm":
                r[Dt] = M(e);
                break;
            case "s":
            case "ss":
                r[$t] = M(e);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                r[Et] = M(1e3 * ("0." + e));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(e));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = z(e);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                i = n._locale.weekdaysParse(e), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = e;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                t = t.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = M(e));
                break;
            case "gg":
            case "GG":
                n._w = n._w || {}, n._w[t] = yt.parseTwoDigitYear(e)
            }
        }
        function R(t) {
            var e,
                i,
                r,
                o,
                s,
                a,
                c;
            e = t._w, null != e.GG || null != e.W || null != e.E ? (s = 1, a = 4, i = n(e.GG, t._a[Tt], st(yt(), 1, 4).year), r = n(e.W, 1), o = n(e.E, 1)) : (s = t._locale._week.dow, a = t._locale._week.doy, i = n(e.gg, t._a[Tt], st(yt(), s, a).year), r = n(e.w, 1), null != e.d ? (o = e.d, s > o && ++r) : o = null != e.e ? e.e + s : s), c = at(i, r, o, a, s), t._a[Tt] = c.year, t._dayOfYear = c.dayOfYear
        }
        function q(t) {
            var e,
                i,
                r,
                o,
                s = [];
            if (!t._d) {
                for (r = G(t), t._w && null == t._a[Mt] && null == t._a[Ct] && R(t), t._dayOfYear && (o = n(t._a[Tt], r[Tt]), t._dayOfYear > $(o) && (t._pf._overflowDayOfYear = !0), i = nt(o, 0, t._dayOfYear), t._a[Ct] = i.getUTCMonth(), t._a[Mt] = i.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e)
                    t._a[e] = s[e] = r[e];
                for (; 7 > e; e++)
                    t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                t._d = (t._useUTC ? nt : et).apply(null, s), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() + t._tzm)
            }
        }
        function W(t) {
            var e;
            t._d || (e = T(t._i), t._a = [e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond], q(t))
        }
        function G(t) {
            var e = new Date;
            return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
        }
        function X(t) {
            if (t._f === yt.ISO_8601)
                return void K(t);
            t._a = [], t._pf.empty = !0;
            var e,
                n,
                i,
                r,
                o,
                s = "" + t._i,
                a = s.length,
                c = 0;
            for (i = F(t._f, t._locale).match(It) || [], e = 0; e < i.length; e++)
                r = i[e], n = (s.match(Y(r, t)) || [])[0], n && (o = s.substr(0, s.indexOf(n)), o.length > 0 && t._pf.unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), c += n.length), fe[r] ? (n ? t._pf.empty = !1 : t._pf.unusedTokens.push(r), U(r, n, t)) : t._strict && !n && t._pf.unusedTokens.push(r);
            t._pf.charsLeftOver = a - c, s.length > 0 && t._pf.unusedInput.push(s), t._isPm && t._a[St] < 12 && (t._a[St] += 12), t._isPm === !1 && 12 === t._a[St] && (t._a[St] = 0), q(t), N(t)
        }
        function V(t) {
            return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
                return e || n || i || r
            })
        }
        function Z(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        function J(t) {
            var e,
                n,
                r,
                o,
                s;
            if (0 === t._f.length)
                return t._pf.invalidFormat = !0, void (t._d = new Date(NaN));
            for (o = 0; o < t._f.length; o++)
                s = 0, e = f({}, t), e._pf = i(), e._f = t._f[o], X(e), A(e) && (s += e._pf.charsLeftOver, s += 10 * e._pf.unusedTokens.length, e._pf.score = s, (null == r || r > s) && (r = s, n = e));
            h(t, n || e)
        }
        function K(t) {
            var e,
                n,
                i = t._i,
                r = ee.exec(i);
            if (r) {
                for (t._pf.iso = !0, e = 0, n = ie.length; n > e; e++)
                    if (ie[e][1].exec(i)) {
                        t._f = ie[e][0] + (r[6] || " ");
                        break
                    }
                for (e = 0, n = re.length; n > e; e++)
                    if (re[e][1].exec(i)) {
                        t._f += re[e][0];
                        break
                    }
                i.match(qt) && (t._f += "Z"), X(t)
            } else
                t._isValid = !1
        }
        function Q(t) {
            K(t), t._isValid === !1 && (delete t._isValid, yt.createFromInputFallback(t))
        }
        function tt(t) {
            var n,
                i = t._i;
            i === e ? t._d = new Date : _(i) ? t._d = new Date((+i)) : null !== (n = Ot.exec(i)) ? t._d = new Date((+n[1])) : "string" == typeof i ? Q(t) : b(i) ? (t._a = i.slice(0), q(t)) : "object" == typeof i ? W(t) : "number" == typeof i ? t._d = new Date(i) : yt.createFromInputFallback(t)
        }
        function et(t, e, n, i, r, o, s) {
            var a = new Date(t, e, n, i, r, o, s);
            return 1970 > t && a.setFullYear(t), a
        }
        function nt(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return 1970 > t && e.setUTCFullYear(t), e
        }
        function it(t, e) {
            if ("string" == typeof t)
                if (isNaN(t)) {
                    if (t = e.weekdaysParse(t), "number" != typeof t)
                        return null
                } else
                    t = parseInt(t, 10);
            return t
        }
        function rt(t, e, n, i, r) {
            return r.relativeTime(e || 1, !!n, t, i)
        }
        function ot(t, e, n) {
            var i = yt.duration(t).abs(),
                r = kt(i.as("s")),
                o = kt(i.as("m")),
                s = kt(i.as("h")),
                a = kt(i.as("d")),
                c = kt(i.as("M")),
                u = kt(i.as("y")),
                l = r < le.s && ["s", r] || 1 === o && ["m"] || o < le.m && ["mm", o] || 1 === s && ["h"] || s < le.h && ["hh", s] || 1 === a && ["d"] || a < le.d && ["dd", a] || 1 === c && ["M"] || c < le.M && ["MM", c] || 1 === u && ["y"] || ["yy", u];
            return l[2] = e, l[3] = +t > 0, l[4] = n, rt.apply({}, l)
        }
        function st(t, e, n) {
            var i,
                r = n - e,
                o = n - t.day();
            return o > r && (o -= 7), r - 7 > o && (o += 7), i = yt(t).add(o, "d"), {
                week: Math.ceil(i.dayOfYear() / 7),
                year: i.year()
            }
        }
        function at(t, e, n, i, r) {
            var o,
                s,
                a = nt(t, 0, 1).getUTCDay();
            return a = 0 === a ? 7 : a, n = null != n ? n : r, o = r - a + (a > i ? 7 : 0) - (r > a ? 7 : 0), s = 7 * (e - 1) + (n - r) + o + 1, {
                year: s > 0 ? t : t - 1,
                dayOfYear: s > 0 ? s : $(t - 1) + s
            }
        }
        function ct(t) {
            var n = t._i,
                i = t._f;
            return t._locale = t._locale || yt.localeData(t._l), null === n || i === e && "" === n ? yt.invalid({
                nullInput: !0
            }) : ("string" == typeof n && (t._i = n = t._locale.preparse(n)), yt.isMoment(n) ? new l(n, (!0)) : (i ? b(i) ? J(t) : X(t) : tt(t), new l(t)))
        }
        function ut(t, e) {
            var n,
                i;
            if (1 === e.length && b(e[0]) && (e = e[0]), !e.length)
                return yt();
            for (n = e[0], i = 1; i < e.length; ++i)
                e[i][t](n) && (n = e[i]);
            return n
        }
        function lt(t, e) {
            var n;
            return "string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), S(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
        }
        function dt(t, e) {
            return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
        }
        function ht(t, e, n) {
            return "Month" === e ? lt(t, n) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
        }
        function ft(t, e) {
            return function(n) {
                return null != n ? (ht(this, t, n), yt.updateOffset(this, e), this) : dt(this, t)
            }
        }
        function pt(t) {
            return 400 * t / 146097
        }
        function mt(t) {
            return 146097 * t / 400
        }
        function gt(t) {
            yt.duration.fn[t] = function() {
                return this._data[t]
            }
        }
        function vt(t) {
            "undefined" == typeof ender && (wt = xt.moment, xt.moment = t ? o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", yt) : yt)
        }
        for (var yt, wt, bt, _t = "2.8.1", xt = "undefined" != typeof global ? global : this, kt = Math.round, Tt = 0, Ct = 1, Mt = 2, St = 3, Dt = 4, $t = 5, Et = 6, Nt = {}, At = [], jt = "undefined" != typeof t && t.exports, Ot = /^\/?Date\((\-?\d+)/i, Bt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Pt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, It = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Lt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Ht = /\d\d?/, Ft = /\d{1,3}/, Yt = /\d{1,4}/, zt = /[+\-]?\d{1,6}/, Ut = /\d+/, Rt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, qt = /Z|[\+\-]\d\d:?\d\d/gi, Wt = /T/i, Gt = /[\+\-]?\d+(\.\d{1,3})?/, Xt = /\d{1,2}/, Vt = /\d/, Zt = /\d\d/, Jt = /\d{3}/, Kt = /\d{4}/, Qt = /[+-]?\d{6}/, te = /[+-]?\d+/, ee = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ne = "YYYY-MM-DDTHH:mm:ssZ", ie = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], re = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], oe = /([\+\-]|\d\d)/gi, se = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }), ae = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                Q: "quarter",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, ce = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, ue = {}, le = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, de = "DDD w W M D d".split(" "), he = "M D H h m s w W".split(" "), fe = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(t) {
                    return this.localeData().monthsShort(this, t)
                },
                MMMM: function(t) {
                    return this.localeData().months(this, t)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(t) {
                    return this.localeData().weekdaysMin(this, t)
                },
                ddd: function(t) {
                    return this.localeData().weekdaysShort(this, t)
                },
                dddd: function(t) {
                    return this.localeData().weekdays(this, t)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return m(this.year() % 100, 2)
                },
                YYYY: function() {
                    return m(this.year(), 4)
                },
                YYYYY: function() {
                    return m(this.year(), 5)
                },
                YYYYYY: function() {
                    var t = this.year(),
                        e = t >= 0 ? "+" : "-";
                    return e + m(Math.abs(t), 6)
                },
                gg: function() {
                    return m(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return m(this.weekYear(), 4)
                },
                ggggg: function() {
                    return m(this.weekYear(), 5)
                },
                GG: function() {
                    return m(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return m(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return m(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return M(this.milliseconds() / 100)
                },
                SS: function() {
                    return m(M(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return m(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return m(this.milliseconds(), 3)
                },
                Z: function() {
                    var t = -this.zone(),
                        e = "+";
                    return 0 > t && (t = -t, e = "-"), e + m(M(t / 60), 2) + ":" + m(M(t) % 60, 2)
                },
                ZZ: function() {
                    var t = -this.zone(),
                        e = "+";
                    return 0 > t && (t = -t, e = "-"), e + m(M(t / 60), 2) + m(M(t) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, pe = {}, me = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; de.length;)
            bt = de.pop(), fe[bt + "o"] = c(fe[bt], bt);
        for (; he.length;)
            bt = he.pop(), fe[bt + bt] = a(fe[bt], 2);
        fe.DDDD = a(fe.DDD, 3), h(u.prototype, {
            set: function(t) {
                var e,
                    n;
                for (n in t)
                    e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(t) {
                return this._months[t.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(t) {
                return this._monthsShort[t.month()]
            },
            monthsParse: function(t) {
                var e,
                    n,
                    i;
                for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
                    if (this._monthsParse[e] || (n = yt.utc([2e3, e]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[e].test(t))
                        return e
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(t) {
                return this._weekdays[t.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(t) {
                return this._weekdaysShort[t.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(t) {
                return this._weekdaysMin[t.day()]
            },
            weekdaysParse: function(t) {
                var e,
                    n,
                    i;
                for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
                    if (this._weekdaysParse[e] || (n = yt([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t))
                        return e
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            longDateFormat: function(t) {
                var e = this._longDateFormat[t];
                return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t] = e), e
            },
            isPM: function(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(t, e) {
                var n = this._calendar[t];
                return "function" == typeof n ? n.apply(e) : n
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(t, e, n, i) {
                var r = this._relativeTime[n];
                return "function" == typeof r ? r(t, e, n, i) : r.replace(/%d/i, t)
            },
            pastFuture: function(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
            },
            ordinal: function(t) {
                return this._ordinal.replace("%d", t)
            },
            _ordinal: "%d",
            preparse: function(t) {
                return t
            },
            postformat: function(t) {
                return t
            },
            week: function(t) {
                return st(t, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            _invalidDate: "Invalid date",
            invalidDate: function() {
                return this._invalidDate
            }
        }), yt = function(t, n, r, o) {
            var s;
            return "boolean" == typeof r && (o = r, r = e), s = {}, s._isAMomentObject = !0, s._i = t, s._f = n, s._l = r, s._strict = o, s._isUTC = !1, s._pf = i(), ct(s)
        }, yt.suppressDeprecationWarnings = !1, yt.createFromInputFallback = o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
            t._d = new Date(t._i)
        }), yt.min = function() {
            var t = [].slice.call(arguments, 0);
            return ut("isBefore", t)
        }, yt.max = function() {
            var t = [].slice.call(arguments, 0);
            return ut("isAfter", t)
        }, yt.utc = function(t, n, r, o) {
            var s;
            return "boolean" == typeof r && (o = r, r = e), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = r, s._i = t, s._f = n, s._strict = o, s._pf = i(), ct(s).utc()
        }, yt.unix = function(t) {
            return yt(1e3 * t)
        }, yt.duration = function(t, e) {
            var n,
                i,
                r,
                o,
                s = t,
                a = null;
            return yt.isDuration(t) ? s = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : "number" == typeof t ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (a = Bt.exec(t)) ? (n = "-" === a[1] ? -1 : 1, s = {
                y: 0,
                d: M(a[Mt]) * n,
                h: M(a[St]) * n,
                m: M(a[Dt]) * n,
                s: M(a[$t]) * n,
                ms: M(a[Et]) * n
            }) : (a = Pt.exec(t)) ? (n = "-" === a[1] ? -1 : 1, r = function(t) {
                var e = t && parseFloat(t.replace(",", "."));
                return (isNaN(e) ? 0 : e) * n
            }, s = {
                y: r(a[2]),
                M: r(a[3]),
                d: r(a[4]),
                h: r(a[5]),
                m: r(a[6]),
                s: r(a[7]),
                w: r(a[8])
            }) : "object" == typeof s && ("from" in s || "to" in s) && (o = v(yt(s.from), yt(s.to)), s = {}, s.ms = o.milliseconds, s.M = o.months), i = new d(s), yt.isDuration(t) && t.hasOwnProperty("_locale") && (i._locale = t._locale), i
        }, yt.version = _t, yt.defaultFormat = ne, yt.ISO_8601 = function() {}, yt.momentProperties = At, yt.updateOffset = function() {}, yt.relativeTimeThreshold = function(t, n) {
            return le[t] !== e && (n === e ? le[t] : (le[t] = n, !0))
        }, yt.lang = o("moment.lang is deprecated. Use moment.locale instead.", function(t, e) {
            return yt.locale(t, e)
        }), yt.locale = function(t, e) {
            var n;
            return t && (n = "undefined" != typeof e ? yt.defineLocale(t, e) : yt.localeData(t), n && (yt.duration._locale = yt._locale = n)), yt._locale._abbr
        }, yt.defineLocale = function(t, e) {
            return null !== e ? (e.abbr = t, Nt[t] || (Nt[t] = new u), Nt[t].set(e), yt.locale(t), Nt[t]) : (delete Nt[t], null)
        }, yt.langData = o("moment.langData is deprecated. Use moment.localeData instead.", function(t) {
            return yt.localeData(t)
        }), yt.localeData = function(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
                return yt._locale;
            if (!b(t)) {
                if (e = B(t))
                    return e;
                t = [t]
            }
            return O(t)
        }, yt.isMoment = function(t) {
            return t instanceof l || null != t && t.hasOwnProperty("_isAMomentObject")
        }, yt.isDuration = function(t) {
            return t instanceof d
        };
        for (bt = me.length - 1; bt >= 0; --bt)
            C(me[bt]);
        yt.normalizeUnits = function(t) {
            return k(t)
        }, yt.invalid = function(t) {
            var e = yt.utc(NaN);
            return null != t ? h(e._pf, t) : e._pf.userInvalidated = !0, e
        }, yt.parseZone = function() {
            return yt.apply(null, arguments).parseZone()
        }, yt.parseTwoDigitYear = function(t) {
            return M(t) + (M(t) > 68 ? 1900 : 2e3)
        }, h(yt.fn = l.prototype, {
            clone: function() {
                return yt(this)
            },
            valueOf: function() {
                return +this._d + 6e4 * (this._offset || 0)
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date((+this)) : this._d
            },
            toISOString: function() {
                var t = yt(this).utc();
                return 0 < t.year() && t.year() <= 9999 ? H(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : H(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
            },
            isValid: function() {
                return A(this)
            },
            isDSTShifted: function() {
                return !!this._a && (this.isValid() && x(this._a, (this._isUTC ? yt.utc(this._a) : yt(this._a)).toArray()) > 0)
            },
            parsingFlags: function() {
                return h({}, this._pf)
            },
            invalidAt: function() {
                return this._pf.overflow
            },
            utc: function(t) {
                return this.zone(0, t)
            },
            local: function(t) {
                return this._isUTC && (this.zone(0, t), this._isUTC = !1, t && this.add(this._d.getTimezoneOffset(), "m")), this
            },
            format: function(t) {
                var e = H(this, t || yt.defaultFormat);
                return this.localeData().postformat(e)
            },
            add: y(1, "add"),
            subtract: y(-1, "subtract"),
            diff: function(t, e, n) {
                var i,
                    r,
                    o = P(t, this),
                    s = 6e4 * (this.zone() - o.zone());
                return e = k(e), "year" === e || "month" === e ? (i = 432e5 * (this.daysInMonth() + o.daysInMonth()), r = 12 * (this.year() - o.year()) + (this.month() - o.month()), r += (this - yt(this).startOf("month") - (o - yt(o).startOf("month"))) / i, r -= 6e4 * (this.zone() - yt(this).startOf("month").zone() - (o.zone() - yt(o).startOf("month").zone())) / i, "year" === e && (r /= 12)) : (i = this - o, r = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - s) / 864e5 : "week" === e ? (i - s) / 6048e5 : i), n ? r : p(r)
            },
            from: function(t, e) {
                return yt.duration({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e)
            },
            fromNow: function(t) {
                return this.from(yt(), t)
            },
            calendar: function(t) {
                var e = t || yt(),
                    n = P(e, this).startOf("day"),
                    i = this.diff(n, "days", !0),
                    r = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(r, this))
            },
            isLeapYear: function() {
                return E(this.year())
            },
            isDST: function() {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function(t) {
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = it(t, this.localeData()), this.add(t - e, "d")) : e
            },
            month: ft("Month", !0),
            startOf: function(t) {
                switch (t = k(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
                }
                return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            },
            endOf: function(t) {
                return t = k(t), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
            },
            isAfter: function(t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +yt(t).startOf(e)
            },
            isBefore: function(t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +yt(t).startOf(e)
            },
            isSame: function(t, e) {
                return e = e || "ms", +this.clone().startOf(e) === +P(t, this).startOf(e)
            },
            min: o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(t) {
                return t = yt.apply(null, arguments), this > t ? this : t
            }),
            max: o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(t) {
                return t = yt.apply(null, arguments), t > this ? this : t
            }),
            zone: function(t, e) {
                var n,
                    i = this._offset || 0;
                return null == t ? this._isUTC ? i : this._d.getTimezoneOffset() : ("string" == typeof t && (t = z(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && e && (n = this._d.getTimezoneOffset()), this._offset = t, this._isUTC = !0, null != n && this.subtract(n, "m"), i !== t && (!e || this._changeInProgress ? w(this, yt.duration(i - t, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, yt.updateOffset(this, !0), this._changeInProgress = null)), this)
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function() {
                return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
            },
            hasAlignedHourOffset: function(t) {
                return t = t ? yt(t).zone() : 0, (this.zone() - t) % 60 === 0
            },
            daysInMonth: function() {
                return S(this.year(), this.month())
            },
            dayOfYear: function(t) {
                var e = kt((yt(this).startOf("day") - yt(this).startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            },
            quarter: function(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            },
            weekYear: function(t) {
                var e = st(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == t ? e : this.add(t - e, "y")
            },
            isoWeekYear: function(t) {
                var e = st(this, 1, 4).year;
                return null == t ? e : this.add(t - e, "y")
            },
            week: function(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            },
            isoWeek: function(t) {
                var e = st(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            },
            weekday: function(t) {
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            },
            isoWeekday: function(t) {
                return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
            },
            isoWeeksInYear: function() {
                return D(this.year(), 1, 4)
            },
            weeksInYear: function() {
                var t = this.localeData()._week;
                return D(this.year(), t.dow, t.doy)
            },
            get: function(t) {
                return t = k(t), this[t]()
            },
            set: function(t, e) {
                return t = k(t), "function" == typeof this[t] && this[t](e), this
            },
            locale: function(t) {
                return t === e ? this._locale._abbr : (this._locale = yt.localeData(t), this)
            },
            lang: o("moment().lang() is deprecated. Use moment().localeData() instead.", function(t) {
                return t === e ? this.localeData() : (this._locale = yt.localeData(t), this)
            }),
            localeData: function() {
                return this._locale
            }
        }), yt.fn.millisecond = yt.fn.milliseconds = ft("Milliseconds", !1), yt.fn.second = yt.fn.seconds = ft("Seconds", !1), yt.fn.minute = yt.fn.minutes = ft("Minutes", !1), yt.fn.hour = yt.fn.hours = ft("Hours", !0), yt.fn.date = ft("Date", !0), yt.fn.dates = o("dates accessor is deprecated. Use date instead.", ft("Date", !0)),
        yt.fn.year = ft("FullYear", !0), yt.fn.years = o("years accessor is deprecated. Use year instead.", ft("FullYear", !0)), yt.fn.days = yt.fn.day, yt.fn.months = yt.fn.month, yt.fn.weeks = yt.fn.week, yt.fn.isoWeeks = yt.fn.isoWeek, yt.fn.quarters = yt.fn.quarter, yt.fn.toJSON = yt.fn.toISOString, h(yt.duration.fn = d.prototype, {
            _bubble: function() {
                var t,
                    e,
                    n,
                    i = this._milliseconds,
                    r = this._days,
                    o = this._months,
                    s = this._data,
                    a = 0;
                s.milliseconds = i % 1e3, t = p(i / 1e3), s.seconds = t % 60, e = p(t / 60), s.minutes = e % 60, n = p(e / 60), s.hours = n % 24, r += p(n / 24), a = p(pt(r)), r -= p(mt(a)), o += p(r / 30), r %= 30, a += p(o / 12), o %= 12, s.days = r, s.months = o, s.years = a
            },
            abs: function() {
                return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
            },
            weeks: function() {
                return p(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12)
            },
            humanize: function(t) {
                var e = ot(this, !t, this.localeData());
                return t && (e = this.localeData().pastFuture(+this, e)), this.localeData().postformat(e)
            },
            add: function(t, e) {
                var n = yt.duration(t, e);
                return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
            },
            subtract: function(t, e) {
                var n = yt.duration(t, e);
                return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
            },
            get: function(t) {
                return t = k(t), this[t.toLowerCase() + "s"]()
            },
            as: function(t) {
                var e,
                    n;
                if (t = k(t), e = this._days + this._milliseconds / 864e5, "month" === t || "year" === t)
                    return n = this._months + 12 * pt(e), "month" === t ? n : n / 12;
                switch (e += mt(this._months / 12), t) {
                case "week":
                    return e / 7;
                case "day":
                    return e;
                case "hour":
                    return 24 * e;
                case "minute":
                    return 24 * e * 60;
                case "second":
                    return 24 * e * 60 * 60;
                case "millisecond":
                    return 24 * e * 60 * 60 * 1e3;
                default:
                    throw new Error("Unknown unit " + t)
                }
            },
            lang: yt.fn.lang,
            locale: yt.fn.locale,
            toIsoString: o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                return this.toISOString()
            }),
            toISOString: function() {
                var t = Math.abs(this.years()),
                    e = Math.abs(this.months()),
                    n = Math.abs(this.days()),
                    i = Math.abs(this.hours()),
                    r = Math.abs(this.minutes()),
                    o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (i || r || o ? "T" : "") + (i ? i + "H" : "") + (r ? r + "M" : "") + (o ? o + "S" : "") : "P0D"
            },
            localeData: function() {
                return this._locale
            }
        });
        for (bt in se)
            se.hasOwnProperty(bt) && gt(bt.toLowerCase());
        yt.duration.fn.asMilliseconds = function() {
            return this.as("ms")
        }, yt.duration.fn.asSeconds = function() {
            return this.as("s")
        }, yt.duration.fn.asMinutes = function() {
            return this.as("m")
        }, yt.duration.fn.asHours = function() {
            return this.as("h")
        }, yt.duration.fn.asDays = function() {
            return this.as("d")
        }, yt.duration.fn.asWeeks = function() {
            return this.as("weeks")
        }, yt.duration.fn.asMonths = function() {
            return this.as("M")
        }, yt.duration.fn.asYears = function() {
            return this.as("y")
        }, function(t) {
            t(yt)
        }(function(t) {
            return t.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah点mm",
                    L: "YYYY-MM-DD",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日LT",
                    LLLL: "YYYY年MMMD日ddddLT",
                    l: "YYYY-MM-DD",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日LT",
                    llll: "YYYY年MMMD日ddddLT"
                },
                meridiem: function(t, e, n) {
                    var i = 100 * t + e;
                    return 600 > i ? "凌晨" : 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: function() {
                        return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                    },
                    nextDay: function() {
                        return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                    },
                    lastDay: function() {
                        return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                    },
                    nextWeek: function() {
                        var e,
                            n;
                        return e = t().startOf("week"), n = this.unix() - e.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                    },
                    lastWeek: function() {
                        var e,
                            n;
                        return e = t().startOf("week"), n = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                    },
                    sameElse: "LL"
                },
                ordinal: function(t, e) {
                    switch (e) {
                    case "d":
                    case "D":
                    case "DDD":
                        return t + "日";
                    case "M":
                        return t + "月";
                    case "w":
                    case "W":
                        return t + "周";
                    default:
                        return t
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    m: "1分钟",
                    mm: "%d分钟",
                    h: "1小时",
                    hh: "%d小时",
                    d: "1天",
                    dd: "%d天",
                    M: "1个月",
                    MM: "%d个月",
                    y: "1年",
                    yy: "%d年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }), function(t) {
            t(yt)
        }(function(t) {
            return t.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah點mm",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日LT",
                    LLLL: "YYYY年MMMD日ddddLT",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日LT",
                    llll: "YYYY年MMMD日ddddLT"
                },
                meridiem: function(t, e, n) {
                    var i = 100 * t + e;
                    return 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                ordinal: function(t, e) {
                    switch (e) {
                    case "d":
                    case "D":
                    case "DDD":
                        return t + "日";
                    case "M":
                        return t + "月";
                    case "w":
                    case "W":
                        return t + "週";
                    default:
                        return t
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "一分鐘",
                    mm: "%d分鐘",
                    h: "一小時",
                    hh: "%d小時",
                    d: "一天",
                    dd: "%d天",
                    M: "一個月",
                    MM: "%d個月",
                    y: "一年",
                    yy: "%d年"
                }
            })
        }), yt.locale("en", {
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === M(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            }
        }), jt ? t.exports = yt : "function" == typeof define && define.amd ? (define("moment", function(t, e, n) {
            return n.config && n.config() && n.config().noGlobal === !0 && (xt.moment = wt), yt
        }), vt(!0)) : vt()
    }).call(this)
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(6)], r = function(t, e) {
        var n = function(t) {
            t.length && this.init(t)
        };
        return n.prototype.init = function(t) {
            this.timer = null, this.ajax = null, this.$input = t, this.$selectBox = t.data("instance"), this.bindEvents()
        }, n.prototype.bindEvents = function() {
            var n = this,
                i = n.$input,
                r = i.val();
            this.$selectBox.$select.on("change", function() {
                n.$input.val("");
                var e = t(this).val();
                e && (location.href = "/quote/stock?security_id=" + e)
            }), i.on("focus", function() {
                var t = e.debounce(function(t) {
                    n.doSearch(t)
                }, 500);
                n.timer && clearInterval(n.timer), n.timer = setInterval(function() {
                    var e = n.$input.val();
                    r !== e && (t(e), r = e)
                }, 100)
            }), i.on("blur", function() {
                clearInterval(n.timer)
            })
        }, n.prototype.doSearch = function(e) {
            var n = this,
                i = n.ajax;
            return i && i.abort(), e ? void (n.ajax = t.getJSON("/trade/search", {
                k: e
            }).done(function(t) {
                0 === +t.code && t.data && t.data.length ? (n.$selectBox.$select.html(t.data.map(function(t) {
                    return '<option value="' + t.security_id + '">' + t.code_name + " " + t.sc_name + "</option>"
                })), n.$selectBox.syncData().show()) : n.$selectBox.hide()
            })) : void n.$selectBox.hide()
        }, n
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(6), n(4), n(63)], r = function(t, e, n, i) {
        return function() {
            function r() {
                var n = u.find(".js-msgFooter");
                c.on("click", function(t) {
                    t.preventDefault(), u.toggle(), !m.hasUnread && g.hasUnread ? l.find("a").filter("[type=sys]").trigger("click") : l.find("a").filter("[type=sns]").trigger("click")
                }), l.on("click", "a", function(e) {
                    var i = t(this),
                        r = i.attr("type");
                    e.preventDefault(), i.addClass("current").siblings().removeClass("current"), f = r, i.find(".js-count").hide(), o(), "sns" === r ? (n.hide(), m.msgMark = 0, m.hasUnread ? (m.type = 2, m.getData(p)) : (m.type = 0, m.getData())) : (n.show(), g.page = 0, g.hasUnread ? (g.type = 0, g.getData(p)) : (g.type = 1, g.getData()))
                }), c.parent().on("click", function(t) {
                    t.stopPropagation()
                }), t(document).on("click", function() {
                    u.hide()
                }), u.find(".js-msgContainerWrapper").on("scroll", e.throttle(function() {
                    var t = "sns" === f ? m : g;
                    !t.hasMore || t.isLoading || h.position().top >= 360 || t.getData()
                }, 100))
            }
            function o() {
                d.html('<li class="tips loadingBar">加载中...</li>')
            }
            function s() {
                a && clearInterval(a), a = setInterval(function() {
                    p()
                }, 6e4), p()
            }
            var a,
                c = t("#header").find(".js-msgTrigger"),
                u = c.siblings(".js-msgPanel"),
                l = u.find(".js-msgTab"),
                d = u.find(".js-msgContainer"),
                h = u.find(".js-loadMore"),
                f = "sns";
            if (c.length) {
                var p = function() {
                        var e = c.find(".js-dot"),
                            i = l.find(".js-count"),
                            r = {};
                        return t.each(i, function(e, n) {
                            var i = t(n);
                            r[i.attr("type")] = i
                        }), function() {
                            n({
                                url: "/message/un-read-msg"
                            }, function(t) {
                                var n = t.data,
                                    i = +n.sys,
                                    o = +n.nnq;
                                m.hasUnread = o, g.hasUnread = i, e[i || o ? "show" : "hide"](), i ? r.sys.html("<i>" + i + "</i>").show() : r.sys.hide(), o ? r.sns.html("<i>" + o + "</i>").show() : r.sns.hide()
                            })
                        }
                    }(),
                    m = {
                        hasUnread: !1,
                        hasMore: !1,
                        isLoading: !1,
                        type: 0,
                        msgMark: 0,
                        msgCompile: e.template(t("#msgNoticeTpl").html()),
                        getData: function(t) {
                            var e = m.msgMark;
                            m.isLoading = !0, n({
                                url: "/nnq/list-msg",
                                data: {
                                    req_type: m.type,
                                    msg_mark: e
                                }
                            }, function(n) {
                                var i = n.data;
                                i.msg && i.msg.length ? d[e ? "append" : "html"](m.msgCompile(m.parseMsg(i.msg))) : d.html('<li class="tips">暂无最新消息！</li>'), i.common && (m.msgMark = i.common.msg_mark, m.hasMore = i.common.has_more, i.common.has_more && d.css("min-height", "330px")), t && t()
                            }).always(function() {
                                m.isLoading = !1
                            })
                        },
                        parseMsg: function(e) {
                            var n = [],
                                r = {
                                    1: "评论了我",
                                    2: "回复了我",
                                    3: "赞了我",
                                    4: "@了我"
                                };
                            return t.each(e, function(t, e) {
                                n.push({
                                    id: e.id,
                                    type: e.type,
                                    action: r[e.type],
                                    actionContent: i.parseFeedContent({
                                        data: e.replay.content,
                                        limit: 100,
                                        picture: 1,
                                        returnDataType: 1
                                    }),
                                    actionAuthor: e.replay.author,
                                    actionTime: e.replay.time,
                                    sourceContent: i.parseFeedContent({
                                        data: e.source.content.rich_text,
                                        limit: 100,
                                        picture: 1
                                    }),
                                    sourceId: e.source.id
                                })
                            }), n
                        },
                        bindEvents: function() {
                            d.on("click", ".js-source", function() {
                                window.open("/nnq/detail?id=" + t(this).attr("id"))
                            }).on("click", ".js-source a", function(t) {
                                t.stopPropagation()
                            })
                        }
                    },
                    g = {
                        hasUnRead: !1,
                        hasMore: !1,
                        isLoading: !1,
                        type: 1,
                        page: 0,
                        getData: function(e) {
                            var i = g.page;
                            g.isLoading = !0, n({
                                url: "/message/list-msg",
                                data: {
                                    type: g.type,
                                    page: i
                                }
                            }, function(n) {
                                var r = n.data,
                                    o = r.list,
                                    s = "";
                                t.isArray(o) && o.length ? (t.each(o, function(t, e) {
                                    s += '<li><div class="imgBox01"><img width="30" height="30" alt="富途小秘" src="/images/global/futuxiaomi.png"></div><p>' + e.content + "</p></li>"
                                }), d[i ? "append" : "html"](s)) : d.html('<li class="tips">暂无最新消息！</li>'), r.pageInfo && r.pageInfo.page < r.pageInfo.pageCount - 1 ? (g.hasMore = !0, g.page = r.pageInfo.page + 1) : g.hasMore = !1, e && e()
                            }).always(function() {
                                g.isLoading = !1
                            })
                        }
                    };
                h.show(), r(), m.bindEvents(), s()
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(6), n(64), n(47)], r = function(t, e, n, i) {
        function r(e, n) {
            var i = 0,
                r = 0,
                o = [];
            return t.each(e.split("<br/>"), function(t, e) {
                var s = c.code2string(e);
                if (i += s.length, i <= n ? o.push(e) : o.push(c.string2code(s.slice(0, n - r))), r = i, i >= n)
                    return !1
            }), o.join("<br/>")
        }
        function o(e) {
            var n = new Date(1e3 * e),
                i = [n.getFullYear(), n.getMonth() + 1, n.getDate(), n.getHours(), n.getMinutes()];
            return i = t.map(i, function(t) {
                return t < 10 ? "0" + t : t
            }), i.splice(0, 3).join("-") + " " + i.join(":")
        }
        function s(t) {
            var e = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&amp;|-|#|\:)+(com|cn|gov|net|org|biz|\/\w*\.?-*\w*|\?\w*=\w*|&amp;|-|#\w+|\:\w+|\w+=\w+)+)/g,
                n = t || "";
            return n = n.replace(e, "<a href='$&'>$&</a>")
        }
        function a() {
            var t = new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0)),
                e = t.getTimezoneOffset(),
                n = new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0)),
                i = n.getTimezoneOffset(),
                r = "chinese";
            return r = 240 === e && 300 === i ? "us" : i === -480 ? "chinese" : "other"
        }
        var c = {},
            u = t("#commentBoxTpl").html(),
            l = i.isGuest;
        return c.parseFeedContent = function(t) {
            var i = t.data,
                o = t.limit || 300,
                a = "",
                u = "",
                l = !1,
                d = 0,
                h = 0;
            return i && e.each(i, function(e) {
                var i,
                    f,
                    p = "";
                switch (e.type) {
                case 0:
                    p = e.text, d += c.code2string(p.replace(/<br\/>/g, "").replace(/<span class\="emoji-outer emoji-sizer"><span class\="emoji-inner emoji\w+"><\/span><\/span>/g, " ")).length, p = s(e.text);
                    break;
                case 1:
                    i = (i = e.emotion + 1) < 10 ? "0" + i : i, p = '<img class="nnemotion" src="/images/emotions/nn/' + i + '.png" nnemotionId="' + e.emotion + '" alt="' + n.data[e.emotion] + '"/>', t.emotionText && (p += '<span class="hide">[' + n.data[e.emotion] + "]</span>"), d += 2;
                    break;
                case 2:
                    p = '<a target="_blank" class="remainsb" href="/account/home?uid=' + e.user_id + '">@' + e.nick_name + "</a>", e.nick_name && (d += e.nick_name.length + 1);
                    break;
                case 3:
                    f = "$" + e.stock_name + "(" + (e.stock_id ? e.stock_id.toUpperCase() : "") + "." + (e.market_id ? e.market_id.toUpperCase() : "") + ")$", p = '<a target="_blank" class="quote" href="/quote/stock?m=' + e.market_id + "&code=" + e.stock_id + '">' + f + "</a>", d += f.length;
                    break;
                case 4:
                    if (!t.picture)
                        return !0;
                    if (p = "[图片]", d += p.length, 2 === +t.picture) {
                        var m = e.pic,
                            g = m.org_pic.url;
                        p = '<img src="' + g + '" name="' + (m.org_pic.name || "nnq") + '" alt="' + [m.org_pic && m.org_pic.width, m.org_pic && m.org_pic.height, m.big_pic && m.big_pic.width, m.big_pic && m.big_pic.height, m.thumb_pic && m.thumb_pic.width, m.thumb_pic && m.thumb_pic.height].join("_") + '">'
                    }
                    break;
                case 6:
                    p = '<img class="nn-big-emotion" src="https://face.futunn.com/big/' + e.group_id + "/" + e.emoticon_id + '.png" nnemotionId="' + e.emoticon_id + '" alt="' + e.text + '"/>', t.emotionText && (p += '<span class="hide">[' + e.text + "]</span>"), d += 2
                }
                l || (d > o ? (0 === e.type && (u += r(p, o - h)), t.emotionText || (u += "..."), l = !0) : (u += p, d === o && (l = !0))), a += p, h = d
            }), t.returnDataType ? 2 === t.returnDataType ? {
                content: a,
                shortContent: u,
                count: d
            } : u : a
        }, c.transFeedData = function(n, i, r, s) {
            var a = [];
            return e.each(n, function(n) {
                var d,
                    h,
                    f,
                    p,
                    m,
                    g,
                    v,
                    y,
                    w,
                    b,
                    _ = "",
                    x = null,
                    k = !0,
                    T = !1;
                if (p = n.common.access, m = n.comment.comment_items || n.comment.hot.comment_items, v = n.summary ? n.summary.picture_items : [], i && n.html)
                    d = n.html.title || "", h = "string" == typeof n.html.longText ? n.html.longText : c.parseFeedContent({
                        data: n.html.longText,
                        picture: 2
                    });
                else {
                    if (!i && n.summary) {
                        var C = n.common.type;
                        if (C <= 2) {
                            var M = c.parseFeedContent({
                                    data: n.summary.rich_text,
                                    emotionText: !r,
                                    returnDataType: 2
                                }),
                                S = n.summary.picture_items;
                            d = n.summary.title || "", h = M.content, !S && n.summary.rich_text && t.each(n.summary.rich_text, function(t, e) {
                                if (4 === +e.type)
                                    return S = [e.pic], !1
                            }), S && S.length && (f = [], t.each(S, function(t, e) {
                                var n = e.big_pic && e.big_pic.url ? e.big_pic : e.org_pic,
                                    i = e.thumb_pic && e.thumb_pic.url ? e.thumb_pic : n;
                                f.push({
                                    thumb_pic: i,
                                    big_pic: n
                                })
                            }))
                        } else if (C > 2) {
                            var M = c.parseFeedContent({
                                data: n.summary.rich_text,
                                emotionText: !r,
                                returnDataType: 2
                            });
                            b = n.summary.is_complete, h = M.content, M = c.parseModuleTxt(n.summary.module_content, i), h += M.content, g = M.original, k = M.canEdit, f = n.summary.picture_items, d = n.summary.title, M.shortContent = h
                        }
                    } else if (n.module_feed) {
                        d = n.module_feed.feed_title;
                        var M = c.parseModuleTxt(n.module_feed.module_content, i);
                        h = M.content, f = M.figure, g = M.original, v = f, k = M.canEdit, T = M.isLive, T && (y = M.liveState, w = M.liveData)
                    }
                    i || (M && M.count > 300 && M.count <= 500 ? (_ = h, h = M.shortContent + '...<br/> <a href="javascript:void(0)" class="js-toggle-content">全文</a>', _ += '<br/> <a href="javascript:void(0)" class="js-toggle-content">收起</a>') : (b === !1 || M && M.count > 500) && (h = M.shortContent + '...<br/> <a target="_blank" href="/nnq/detail?id=' + n.common.feed_id + '">查看详情</a>'))
                }
                if (m && m.length && e.each(m, function(t) {
                    t.content = c.parseFeedContent({
                        data: t.rich_text_items
                    }), t.time = t.timeLine, t.feed_id = n.common.feed_id, t.content && t.content.length > 480 && (t.hasMore = !0)
                }), 1 == n.common.type) {
                    var D = n.original.pic;
                    g = n.original, g.pic = D && "(null)" !== D ? D : "/images/mobile/nn06.png"
                }
                n.user_info.user_id == s && (x = n.common.permission), a.push({
                    feed_id: n.common.feed_id,
                    feed_type: n.common.type,
                    feed_status: n.common.status,
                    feed_is_popular: n.common.popular,
                    feed_is_essence: n.common.essence,
                    feed_is_follow: n.common.is_follow,
                    feed_is_friend: n.common.is_friend,
                    feed_is_stock: n.common.is_stock,
                    feed_permission: x,
                    browse_num: n.browse_num,
                    comment_num_total: n.common.comment_num_total,
                    time: n.common.timeLine,
                    iso_time: o(n.common.timestamp),
                    user_id: n.user_info.user_id,
                    nick_name: n.user_info.nick_name,
                    avator_url: n.user_info.avator_url,
                    title: d,
                    content: h,
                    long_content: _,
                    figure: f,
                    access: p,
                    original: g,
                    comment_list: m,
                    comment_num: n.comment.comment_num,
                    comment_has_more: n.comment.has_more,
                    praised_list: n.like.liked_user,
                    praised: n.like.already_liked,
                    praised_num: n.like.liked_num,
                    comment_box: u,
                    is_detail_page: i,
                    isGuest: l,
                    picture_items: v,
                    topic_list: n.topic_list,
                    canEdit: k,
                    isLive: T,
                    liveState: y,
                    liveData: w,
                    hasGapPoint: null != x || n.common.popular || n.common.essence || n.common.is_follow || n.common.is_friend || n.common.is_stock
                })
            }), a
        }, c.string2code = function(t, e) {
            return t ? t.replace(e || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(t, e) {
                return e ? t : {
                    "<": "&lt;",
                    "&": "&amp;",
                    '"': "&quot;",
                    ">": "&gt;",
                    "'": "&#39;"
                }[t]
            }) : ""
        }, c.code2string = function(t, e) {
            return t ? t.replace(e || /&(lt|gt|amp|quot|#39|nbsp);/g, function(t) {
                return {
                    "&lt;": "<",
                    "&gt;": ">",
                    "&amp;": "&",
                    "&quot;": '"',
                    "&#39;": "'",
                    "&nbsp;": " "
                }[t]
            }) : ""
        }, c.getStringLength = function(t) {
            return Math.ceil(t.replace(/[^\x00-\xff]/g, "nn").length / 2)
        }, c.drawTimeline = function(e, n) {
            function i(t) {
                var e = window.devicePixelRatio || 1,
                    n = !!navigator.userAgent.match(/Android/i);
                return e = n ? 1 : e
            }
            function r(t) {
                return Math.max.apply(Math, t)
            }
            function o(t) {
                return "function" == typeof t.filter && (t = t.filter(function(t) {
                    return 0 !== t
                })), Math.min.apply(Math, t)
            }
            var s,
                a;
            "function" == typeof e.map ? (s = e.map(function(t) {
                return parseInt(t)
            }), a = n.map(function(t) {
                return parseInt(t)
            })) : (s = e, a = n);
            var c = document.createElement("canvas"),
                u = i(c),
                l = 100 * u,
                d = e.length;
            l = d > 100 ? d * u : l;
            var h = 170 * u;
            c.width = l, c.height = h;
            var f = 1 * u,
                p = 100,
                m = r(s) / p,
                g = o(s) / p,
                v = m - g,
                y = 0,
                w = 138;
            w = u > 1 ? 168 : w, w = u >= 3 ? 150 : w;
            var b,
                _,
                x;
            $canvas = t(c), $canvas.addClass("timeCanvas");
            var k = c.getContext("2d");
            k.save(), k.strokeStyle = "#3378DD", k.lineWidth = 3 * u, k.beginPath();
            for (var T = 0; T < s.length && (_ = s[T], 0 !== _); T++)
                _ /= p, b = v ? w / v * (m - _) * u : w, b = parseInt(b), 0 === T ? k.moveTo(y, b) : (y += f, k.lineTo(y, b));
            k.stroke(), k.restore(), k.save(), k.strokeStyle = "#FFAD26", k.lineWidth = 3 * u, k.beginPath(), y = 0;
            for (var T = 0; T < a.length && (x = a[T] / p, 0 !== x); T++)
                b = v ? w / v * (m - x) * u : w, b = parseInt(b), b = Math.max(b, 0), 0 === T ? k.moveTo(y, b) : (y += f, k.lineTo(y, b));
            return k.stroke(), k.restore(), c
        }, c.parseModuleTxt = function(n, i) {
            var r,
                o = {
                    1: "hk",
                    2: "us",
                    3: "sh",
                    4: "sz"
                },
                s = {
                    US: "美东时间",
                    HK: "香港时间",
                    SZ: "北京时间",
                    SH: "北京时间"
                },
                c = {
                    US: "美東時間",
                    HK: "香港時間",
                    SZ: "北京時間",
                    SH: "北京時間"
                },
                u = "",
                l = "",
                d = {},
                h = [],
                f = !0,
                p = {},
                m = !1,
                g = e.template('<div class="stockCard" hash="<%= hash %>"><div class="stockInfo"><span class="market <%= market_type %>"><%= market_type %></span><span class="scode"><%= stock_code %></span><span class="sname"> <%= stock_name %></span><span class="timeInfo"><span class="stockState"><%= market_status %></span><span class="stockTime"><%= time %>  <% if (zone) { %><% } %><%= zone %></span></span></div><div class="stockMain"><div class="stockPrice <%= color %>"><span class="sprice"><%= current_price %><i class="iconfont"><% if (state == "up") { %><span class="font up-font">&#xe646;</span><% } %><% if (state == "down") { %><span class="font down-font">&#xe647;</span><% } %></i></span><span class="sratio"><% if (state !== "down") { %>+<% } %><%= current_percent %>%</span></div><% if (market_type == "US" && pre_or_post_flag !== null) { %><div class="stockInfo info"><span><%= pop_current_price %></span><span> <% if (popState === "up") { %>+<% } %><%= pop_current_percent %>%</span><span class="<%= preFlag %>"><%= pre_or_post_flag %></span></div><% } %></div><div class="canvasBox" chartdata="<%= normal_prices %>"  averdata="<%= average_prices %>"></div></div>');
            e.each(n, function(t) {
                switch (t.type) {
                case 0:
                    var e = t.content;
                    e = e.replace(/[\n\r]/g, ""), l = e.replace(/<nnat([^<>]+)nnid="([0-9]+)"([^<>]*)>\@([^<>]+)<\/?nnat>/g, '<a class="remainsb" href="https://www.futunn.com/account/home?uid=$2" $1nnid="$2"$3>@$4</a>'), l = l.replace(/<nnface\s+faceid="([0-9]+)"\s*\/>/g, function() {
                        var t = arguments,
                            e = 1 + +t[1];
                        return '<img class="nnemotion" src="/images/emotions/nn/' + e + '.png" nnemotionId="' + t[1] + '"/>'
                    }), l = l.replace(/<nnstock([^<>]+)>(\$[^<>]+\$)<\/?nnstock>/g, function() {
                        var t = arguments,
                            e = t[2],
                            n = t[0],
                            i = t[1],
                            r = n.match(/markettype="([0-9])"/);
                        r = r ? r[1] : 1;
                        var s = n.match(/stockcode="([a-zA-Z0-9\.]+)"/);
                        return s = s ? s[1] : s, '<a class="quote" href="https://www.futunn.com/quote/stock?m=' + o[r] + "&code=" + s + '"' + i + ">" + e + "</a>"
                    }), l = l.replace(/<blockbold>(.+?)<\/blockbold>/g, '<div class="boldBlock">$1</div>');
                    break;
                case 1:
                    var n = t.picture_items;
                    if (n) {
                        var d = n.org_pic && n.org_pic.url,
                            v = n.big_pic && n.big_pic.url ? n.big_pic : n.org_pic,
                            y = n.thumb_pic && n.thumb_pic.url ? n.thumb_pic : v,
                            w = (v.url, n.org_pic),
                            b = d ? ' org="' + d + '"' : "";
                        l = i ? '<img src="' + v.url + '" name="nnq"' + b + ' big="' + v.url + '" thumb="' + y.url + '" bigw="' + v.width + '" bigh="' + v.height + '" thumbw="' + y.width + '" thumbh="' + y.height + '" alt="' + [n.org_pic && n.org_pic.width, n.org_pic && n.org_pic.height, n.big_pic && n.big_pic.width, n.big_pic && n.big_pic.height, n.thumb_pic && n.thumb_pic.width, n.thumb_pic && n.thumb_pic.height].join("_") + '">' : "", h.push({
                            thumb_pic: y,
                            big_pic: v,
                            org_pic: w
                        })
                    }
                    break;
                case 2:
                    var _ = t.original,
                        x = _.type,
                        k = _.pic;
                    if (f = !1, 1 == x) {
                        var T = _.text ? "" : " title2";
                        k = k ? k : "https://www.futunn.com/images/mobile/topic-icon.png", l = '<a class="topicLink" href="' + _.url + '" target="_blank" scheme="' + _.scheme + '"><img class="pic001" src="' + k + '"><span class="title' + T + '">' + _.title + '</span><span class="txt">' + _.text + "</span></a>"
                    } else
                        k = k ? k : "https://www.futunn.com/images/mobile/nn06.png", l = '<a class="orgLink" href="' + _.url + '" target="_blank"><img class="pic001" src="' + k + '"><span class="title">' + _.text + "</span></a>";
                    break;
                case 4:
                    var C = t.snap_data,
                        M = t.user_setting,
                        S = C.market_type;
                    C.hash = t.hash;
                    var D;
                    C.time = C.produce_time;
                    var $ = C.current_percent;
                    C.state = $ > 0 ? "up" : "down", C.color = $ > 0 && 1 === M || $ < 0 && 0 === M ? "red" : "green", 0 == $ && (C.state = "flat", C.color = "");
                    var E = C.pop_current_percent;
                    C.popState = E >= 0 ? "up" : "down";
                    var N = "",
                        A = C.pre_or_post_flag;
                    A && (N = A.match("前") ? "before" : "after", C.preFlag = N);
                    var j = a(),
                        O = C.is_sc_language === !1 ? c : s;
                    "us" === j ? "US" !== S && (D = O[S]) : D = "chinese" === j ? "US" === S ? O[S] : "" : O[S], C.zone = D;
                    var B = g(C);
                    l = B;
                    break;
                case 5:
                    f = !1, m = !0, r = t.live_data.live_status, p.anchorUid = t.live_data.anchor_uid, p.studioId = t.live_data.av_studio_id;
                    break;
                case 6:
                    f = !1;
                    var P = t.record_data,
                        I = P.picture_items ? P.picture_items.big_pic.url || P.picture_items.org_pic.url : null,
                        L = I ? I : "https://www.futunn.com/images/global/live" + P.screen_mode + ".png",
                        H = Math.floor(1e3 * Math.random()),
                        F = '<div class="video" id="video' + H + '" src="' + P.video_url.join(",") + '"" pic="' + I + '" cover="' + L + '" mode="' + P.screen_mode + '"></div>';
                    l = F
                }
                l = '<div class="module">' + l + "</div>", u += l
            });
            var v = t("<div></div>");
            if (v.html(u), d.count = v.text().length, d.content = u, d.count > 300)
                if (v.find(".stockCard").length) {
                    var y = v.find(".stockCard");
                    v.find(".stockCard").remove(), d.shortContent = v.text().substring(0, 299) + y.eq(0).prop("outerHTML")
                } else
                    d.shortContent = v.text().substring(0, 299);
            else
                d.shortContent = u;
            return d.figure = h.length > 0 ? h : null, d.original = null, d.canEdit = f, d.isLive = m, m && (d.liveState = r, d.liveData = p), d
        }, c
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    !(t.exports = {
        display: ["微笑", "撇嘴", "色", "发呆", "得意", "大哭", "害羞", "闭嘴", "睡觉", "流泪", "尴尬", "发怒", "调皮", "嬉笑", "惊讶", "难过", "囧", "抓狂", "恶心", "偷笑", "可爱", "白眼", "傲慢", "犯困", "惊恐", "流汗", "憨笑", "大兵", "奋斗", "咒骂", "疑问", "嘘", "晕菜", "倒霉", "骷髅头", "打你", "再见", "擦汗", "抠鼻", "恭喜", "坏笑", "左哼哼", "右哼哼", "哈欠", "鄙视", "委屈", "快哭了", "阴险", "亲亲", "可怜", "菜刀", "西瓜", "啤酒", "咖啡", "猪", "鲜花", "凋谢", "红唇", "爱心", "心碎", "蛋糕", "炸弹", "便便", "月亮", "太阳", "拥抱", "点赞", "弱", "握手", "yeah", "抱拳", "勾引", "握拳", "OK", "跳跳", "发抖", "怄火", "转圈", "笑脸", "生病", "破涕为笑", "悠闲", "懵懂", "恐惧", "失望", "无语", "嘿哈", "捂脸", "奸笑", "机智", "皱眉", "耶", "酷", "鬼魂", "合十", "强壮", "礼花", "礼物", "红包", "鸡", "伤心", "饥饿", "飞吻", "哭泣", "思考", "累", "刺瞎", "心虚", "韭菜", "美元", "美元飞走了", "话筒", "蜡烛", "加油", "气球"],
        data: ["微笑", "撇嘴", "发呆", "流泪", "大哭", "尴尬", "发怒", "调皮", "嬉笑", "惊讶", "难过", "偷笑", "可爱", "惊恐", "流汗", "憨笑", "疑问", "晕菜", "打你", "再见", "抠鼻", "坏笑", "左哼哼", "右哼哼", "鄙视", "伤心", "阴险", "亲亲", "可怜", "色", "害羞", "抓狂", "大兵", "倒霉", "恭喜", "委屈", "咒骂", "犯困", "得意", "闭嘴", "睡觉", "酷", "恶心", "饥饿", "奋斗", "哈欠", "点赞", "鲜花", "握手", "OK", "凋谢", "爱心", "心碎", "便便", "破涕为笑", "嘿哈", "捂脸", "奸笑", "机智", "皱眉", "耶", "囧", "白眼", "傲慢", "骷髅头", "擦汗", "快哭了", "菜刀", "西瓜", "啤酒", "咖啡", "猪", "红唇", "蛋糕", "炸弹", "月亮", "太阳", "弱", "拥抱", "yeah", "抱拳", "勾引", "握拳", "跳跳", "发抖", "怄火", "转圈", "笑脸", "生病", "悠闲", "懵懂", "恐惧", "失望", "无语", "鬼魂", "合十", "强壮", "礼花", "礼物", "红包", "鸡", "韭菜", "飞吻", "哭泣", "思考", "嘘", "累", "刺瞎", "心虚", "美元", "美元飞走了", "话筒", "蜡烛", "加油", "气球"]
    })
}, function(t, e, n) {
    var i,
        r;
    i = [n(2), n(4)], r = function(t, e) {
        return {
            getBasicSetting: function() {
                var n = t.Deferred();
                return e({
                    url: "/account/basic-setting"
                }, function(t) {
                    n.resolve(t.data)
                }, function(t) {
                    n.reject(t)
                }), n
            },
            modifyColorSetting: function(n) {
                var i = t.Deferred();
                return e({
                    url: "/account/color-setting",
                    type: "POST",
                    data: {
                        color: n
                    }
                }, function(t) {
                    i.resolve(t.data)
                }, function(t) {
                    i.reject(t)
                }), i
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r,
        o;
    !function(s) {
        r = [n(2)], i = s, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(function(t) {
        function e(e) {
            var n = {},
                i = /^jQuery\d+$/;
            return t.each(e.attributes, function(t, e) {
                e.specified && !i.test(e.name) && (n[e.name] = e.value)
            }), n
        }
        function n(e, n) {
            var i = this,
                o = t(i);
            if (i.value == o.attr("placeholder") && o.hasClass(h.customClass))
                if (o.data("placeholder-password")) {
                    if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), e === !0)
                        return o[0].value = n;
                    o.focus()
                } else
                    i.value = "", o.removeClass(h.customClass), i == r() && i.select()
        }
        function i() {
            var i,
                r = this,
                o = t(r),
                s = this.id;
            if ("" === r.value) {
                if ("password" === r.type) {
                    if (!o.data("placeholder-textinput")) {
                        try {
                            i = o.clone().prop({
                                type: "text"
                            })
                        } catch (a) {
                            i = t("<input>").attr(t.extend(e(this), {
                                type: "text"
                            }))
                        }
                        i.removeAttr("name").data({
                            "placeholder-password": o,
                            "placeholder-id": s
                        }).bind("focus.placeholder", n), o.data({
                            "placeholder-textinput": i,
                            "placeholder-id": s
                        }).before(i)
                    }
                    o = o.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", s).show()
                }
                o.addClass(h.customClass), o[0].value = o.attr("placeholder")
            } else
                o.removeClass(h.customClass)
        }
        function r() {
            try {
                return document.activeElement
            } catch (t) {}
        }
        var o,
            s,
            a = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
            c = "placeholder" in document.createElement("input") && !a,
            u = "placeholder" in document.createElement("textarea") && !a,
            l = t.valHooks,
            d = t.propHooks;
        if (c && u)
            s = t.fn.placeholder = function() {
                return this
            }, s.input = s.textarea = !0;
        else {
            var h = {};
            s = t.fn.placeholder = function(e) {
                var r = {
                    customClass: "placeholder"
                };
                h = t.extend({}, r, e);
                var o = this;
                return o.filter((c ? "textarea" : ":input") + "[placeholder]").not("." + h.customClass).bind({
                    "focus.placeholder": n,
                    "blur.placeholder": i
                }).data("placeholder-enabled", !0).trigger("blur.placeholder"), o
            }, s.input = c, s.textarea = u, o = {
                get: function(e) {
                    var n = t(e),
                        i = n.data("placeholder-password");
                    return i ? i[0].value : n.data("placeholder-enabled") && n.hasClass(h.customClass) ? "" : e.value
                },
                set: function(e, o) {
                    var s = t(e),
                        a = s.data("placeholder-password");
                    return a ? a[0].value = o : s.data("placeholder-enabled") ? ("" === o ? (e.value = o, e != r() && i.call(e)) : s.hasClass(h.customClass) ? n.call(e, !0, o) || (e.value = o) : e.value = o, s) : e.value = o
                }
            }, c || (l.input = o, d.value = o), u || (l.textarea = o, d.value = o), t(function() {
                t(document).delegate("form", "submit.placeholder", function() {
                    var e = t("." + h.customClass, this).each(n);
                    setTimeout(function() {
                        e.each(i)
                    }, 10)
                })
            }), t(window).bind("beforeunload.placeholder", function() {
                t("." + h.customClass).each(function() {
                    this.value = ""
                })
            })
        }
    })
}, , function(t, e, n) {
    var i,
        r;
    i = [n(2), n(18), n(69), n(4)], r = function(t, e, n, i) {
        var r = {},
            o = function(e) {
                var n = t.Deferred();
                return e ? (i({
                    method: "post",
                    url: "/account/reset",
                    data: {
                        market_type: e
                    }
                }, function(t) {
                    n.resolve(t.data.reset_id)
                }, function(t) {
                    n.reject(t.message)
                }), n) : (setTimeout(function() {
                    n.reject("market is required.")
                }, 0), n)
            },
            s = function(e) {
                var n = t.Deferred();
                return e ? (i({
                    url: "/account/exist-activities",
                    data: {
                        market_type: e
                    }
                }, function(t) {
                    n.resolve(t.data && t.data.existActivities)
                }, function(t) {
                    n.reject(t.message)
                }), n) : (setTimeout(function() {
                    n.reject("market is required.")
                }, 0), n)
            },
            a = function(e) {
                var n = t.Deferred(),
                    r = 0,
                    o = function(t) {
                        i({
                            url: "/account/query-reset-status",
                            data: {
                                reset_id: t
                            }
                        }, function(e) {
                            2 === +e.data.status ? n.resolve() : (r++, r >= 3 ? n.reject("后台服务重置失败") : setTimeout(function() {
                                o(t)
                            }, 5e3))
                        }, function(t) {
                            r++, n.reject(t)
                        })
                    };
                return o(e), n
            };
        return r.reset = function(i) {
            var r = t.Deferred();
            return i && (n.show(), s(i).done(function(t) {
                var s = "重置资产后，你的所有模拟持仓及收益率都将清零，相应市场的虚拟资产恢复为100,000。确定选择重置？";
                t && (s = "在比赛期间进行资产重置，你的比赛资格将会被取消。确定选择重置并退赛？"), new e({
                    messageTitle: "确认要重置资产吗？",
                    messageBody: s,
                    submitBtnText: "100积分重置",
                    onBtnClick: function(t) {
                        if ("submit" === t) {
                            var s = this;
                            return n.show(), o(i).done(function(t) {
                                n.show(), s.$messageTitle.text("正在重置"), s.$messageBody.text("重置账户大约需要30秒，请耐心等待……"), s.$submitBtn.addClass("btnDis01"), s.$cancelBtn.addClass("btnDis01"), a(t).done(function() {
                                    new e({
                                        icon: "ok",
                                        messageTitle: "重置完成",
                                        showCancel: !1,
                                        onBtnClick: function() {
                                            r.resolve()
                                        }
                                    })
                                }).fail(function(t) {
                                    new e({
                                        messageTitle: "重置失败",
                                        messageBody: t,
                                        showCancel: !1,
                                        onBtnClick: function() {
                                            r.reject(t)
                                        }
                                    })
                                }).always(function() {
                                    s.remove(), n.hide()
                                })
                            }).fail(function(t) {
                                new e({
                                    messageTitle: "重置失败",
                                    messageBody: t,
                                    showCancel: !1,
                                    onBtnClick: function() {
                                        r.reject(t)
                                    }
                                })
                            }).always(function() {
                                n.hide()
                            }), !1
                        }
                        r.reject("用户取消了操作")
                    }
                })
            }).fail(function(t) {
                r.reject(t)
            }).always(function() {
                n.hide()
            })), r
        }, r
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r;
    i = [n(2)], r = function(t) {
        var e,
            n,
            i = {},
            r = 0;
        return i.show = function(i, o) {
            var s = null != o ? o : 3e3;
            i || (i = "加载中..."), e && e.length || (e = t('<div id="ui-loading" style="display:none"></div>').css({
                position: "fixed",
                top: 0,
                left: "50%",
                "margin-left": "-250px",
                width: "500px",
                height: "24px",
                "z-index": "9999",
                background: "#1587FA",
                color: "white",
                "text-align": "center",
                "line-height": "22px"
            }).appendTo(document.body)), r++, e.text(i), n = setTimeout(function() {
                r && e.slideDown(200)
            }, s)
        }, i.hide = function(t) {
            r--, t && (r = 0), r < 0 && (r = 0), r || (clearTimeout(n), e && setTimeout(function() {
                e.slideUp(200)
            }, 200))
        }, i
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r,
        o;
    !function(s, a) {
        "use strict";
        r = [n(71)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(this, function(t) {
        "use strict";
        return {
            Dialog: t
        }
    })
}, function(t, e, n) {
    var i,
        r,
        o;
    (function(s) {
        var a;
        a = "undefined" != typeof window ? window : s, function(s, a) {
            r = [n(72), n(2), n(73), n(75)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
        }(this, function(t, e, n, i) {
            return "undefined" == typeof a.maskCount && (a.maskCount = 0, a.dialogCount = 0), "undefined" == typeof a.$mask && (a.$mask = null), t("Dialog", [n], {
                rawNode: e("<div></div>"),
                showClose: !0,
                showHeader: !0,
                showFooter: !0,
                content: "",
                title: "",
                confirmText: "",
                cancelText: "",
                btnSelector: "button",
                withMask: !0,
                forbidScroll: !1,
                forbidScrollClassName: "",
                maskClassName: "",
                _isShow: !1,
                destroyMode: !1,
                defaultNodeMap: {
                    $header: ".ui-modal-header",
                    $content: ".ui-modal-content",
                    $footer: ".ui-modal-footer",
                    $title: ".ui-modal-title",
                    $close: ".ui-modal-close"
                },
                insertTemplate: function() {
                    this.$wrapper = e(this.template), e(document.body).append(this.$wrapper), this.wrapper = this.$wrapper[0]
                },
                createUi: function() {
                    this.inherited(arguments), this._completeUi()
                },
                _completeUi: function() {
                    !this.showClose && this.$close.length && this.$close.remove(), !this.showHeader && this.$header.length && this.$header.remove(), !this.showFooter && this.$footer.length && this.$footer.remove(), this.title && this.$title.text(this.title), this.content ? this.$content.html(this.content) : this.content = this.$content.html()
                },
                bindEvents: function() {
                    this.$close.on("click", e.proxy(this.close, this));
                    var t = this;
                    this.$footer.on("click", this.btnSelector, function() {
                        t.onBtnClick(e(this))
                    })
                },
                unbindEvents: function() {
                    this.$close.off(), this.$footer.off()
                },
                destroy: function() {
                    this.isShow() && this.hide(), this.inherited(arguments)
                },
                onBtnClick: function(t) {
                    var e = t.data("event");
                    if (e) {
                        var n = e.charAt(0).toUpperCase() + e.substr(1),
                            i = "onModalBtn" + n;
                        this[i] && this[i](t)
                    }
                },
                close: function() {
                    this.hide()
                },
                show: function() {
                    this.isShow() || (this.$wrapper.show(), this._isShow = !0, ++a.dialogCount, this.withMask && (++a.maskCount, this.showMask()), this.forbidScroll && (this.forbidScrollClassName ? e(document.body).addClass(this.forbidScrollClassName) : e(document.body).css("overflow", "hidden")))
                },
                hide: function() {
                    this.isShow() && (this.$wrapper.hide(), this._isShow = !1, --a.dialogCount, this.withMask && !--a.maskCount && a.$mask.hide(), this.forbidScroll && !a.dialogCount && (this.forbidScrollClassName ? e(document.body).removeClass(this.forbidScrollClassName) : e(document.body).css("overflow", "")), this.destroyMode && this.destroy())
                },
                showMask: function() {
                    a.$mask || (a.$mask = e('<div class="' + this.maskClassName + '"  style="display:none;"></div>'), e(document.body).append(a.$mask)), a.$mask.show()
                },
                isShow: function() {
                    return this._isShow
                },
                _setTitleAttr: function(t) {
                    this.title = t, this.$title.text(t)
                },
                _setContentAttr: function(t) {
                    this.content = t, this.$content.find("[data-ui-id]").each(function() {
                        var t = e(this).data("uiId"),
                            n = i.getOne(t);
                        n && n.destroy()
                    }), this.$content.html(t)
                }
            })
        })
    }).call(e, function() {
        return this
    }());
}, function(t, e, n) {
    var i,
        r;
    (function(o) {
        var s;
        s = "undefined" != typeof window ? window : o, function(o, s) {
            i = s, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
        }(this, function() {
            function t(t, e) {
                throw new Error("declare" + (e ? " " + e : "") + ": " + t)
            }
            function e(e, n) {
                for (var i, r, o, s, a, c, u, l, d = [], h = [{
                        cls: 0,
                        refs: []
                    }], f = {}, p = 1, m = e.length, g = 0; g < m; ++g) {
                    for (o = e[g], o ? "[object Function]" != y.call(o) && t("mixin #" + g + " is not a callable constructor.", n) : t("mixin #" + g + " is unknown. Did you use require to pull it in?", n), r = o._meta ? o._meta.bases : [o], s = 0, i = r.length - 1; i >= 0; --i)
                        a = r[i].prototype, a.hasOwnProperty("declaredClass") || (a.declaredClass = "uniqName_" + b++), u = a.declaredClass, f.hasOwnProperty(u) || (f[u] = {
                            count: 0,
                            refs: [],
                            cls: r[i]
                        }, ++p), c = f[u], s && s !== c && (c.refs.push(s), ++s.count), s = c;
                    ++s.count, h[0].refs.push(s)
                }
                for (; h.length;) {
                    for (s = h.pop(), d.push(s.cls), --p; l = s.refs, 1 == l.length;) {
                        if (s = l[0], !s || --s.count) {
                            s = 0;
                            break
                        }
                        d.push(s.cls), --p
                    }
                    if (s)
                        for (g = 0, m = l.length; g < m; ++g)
                            s = l[g], --s.count || h.push(s)
                }
                return p && t("can't build consistent linearization", n), o = e[0], d[0] = o ? o._meta && o === d[d.length - o._meta.bases.length] ? o._meta.bases.length : 1 : 0, d
            }
            function n(n, r, s) {
                "string" != typeof n && (s = r, r = n, n = ""), s = s || [];
                var d,
                    p,
                    w,
                    b,
                    x,
                    k,
                    T,
                    C = 1,
                    M = r;
                if ("[object Array]" == y.call(r) ? (k = e(r, n), w = k[0], C = k.length - w, r = k[C]) : (k = [0], r ? "[object Function]" == y.call(r) ? (w = r._meta, k = k.concat(w ? w.bases : r)) : t("base class is not a callable constructor.", n) : null !== r && t("unknown base class. Did you use require to pull it in?", n)), r)
                    for (p = C - 1; d = i(r), p; --p)
                        w = k[p], (w._meta ? h : l)(d, w.prototype), b = new Function, b.superclass = r, b.prototype = d, r = d.constructor = b;
                else
                    d = {};
                for (u(d, s), w = s.constructor, w !== v.constructor && (w.nom = _, d.constructor = w), p = C - 1; p; --p)
                    w = k[p]._meta, w && w.chains && (T = l(T || {}, w.chains));
                if (d["-chains-"] && (T = l(T || {}, d["-chains-"])), w = !T || !T.hasOwnProperty(_), k[0] = b = T && "manual" === T.constructor ? c(k) : 1 == k.length ? o(s.constructor, w) : a(k, w), b._meta = {
                    bases: k,
                    hidden: s,
                    chains: T,
                    parents: M,
                    ctor: s.constructor
                }, b.superclass = r && r.prototype, b.extend = f, b.prototype = d, d.constructor = b, d.inherited = g, n && (d.delcaredClass = n), T)
                    for (x in T)
                        d[x] && "string" == typeof T[x] && x != _ && (w = d[x] = m(x, k, "after" === T[x]), w.nom = x);
                return b
            }
            function i(t) {
                w.prototype = t.prototype;
                var e = new w;
                return w.prototype = null, e
            }
            function r(t) {
                var e = t.callee,
                    n = i(e);
                return e.apply(n, t), n
            }
            function o(t, e) {
                return function() {
                    var n,
                        i = arguments,
                        o = i,
                        s = i[0];
                    return this instanceof i.callee ? (e && (s && (n = s.preamble, n && (o = n.apply(this, o) || o)), n = this.preamble, n && n.apply(this, o)), t && t.apply(this, i), n = this.postscript, void (n && n.apply(this, i))) : r(i)
                }
            }
            function a(t, e) {
                return function() {
                    var n,
                        i,
                        o,
                        s,
                        a = arguments,
                        c = a,
                        u = a[0],
                        l = t.length;
                    if (!(this instanceof a.callee))
                        return r(a);
                    if (e && (u && u.preamble || this.preamble))
                        for (s = new Array(t.length), s[0] = a, i = 0; u = a[0], u && (n = u.preamble, n && (a = n.apply(this, a) || a)), n = t[i].prototype, n = n.hasOwnProperty("preamble") && n.preamble, n && (a = n.apply(this, a) || a), ++i != l;)
                            s[i] = a;
                    for (i = l - 1; i >= 0; --i)
                        n = t[i], o = n._meta, n = o ? o.ctor : n, n && n.apply(this, s ? s[i] : a);
                    n = this.postscript, n && n.apply(this, c)
                }
            }
            function c(t) {
                return function() {
                    var e,
                        n,
                        i = arguments,
                        o = 0;
                    if (!(this instanceof i.callee))
                        return r(i);
                    for (; e = t[o]; ++o)
                        if (n = e._meta, e = n ? n.ctor : e) {
                            e.apply(this, i);
                            break
                        }
                    e = this.postscript, e && e.apply(this, i)
                }
            }
            function u(t, e) {
                var n,
                    i;
                for (n in e)
                    i = e[n], i === v[n] && n in v || n == _ || ("[object Function]" == y.call(i) && (i.nom = n), t[n] = i);
                if (p())
                    for (var r = k; r;)
                        n = x[--r], i = e[n], i === v[n] && n in v || n == _ || ("[object Function]" == y.call(i) && (i.nom = n), t[n] = i);
                return t
            }
            function l(t, e) {
                t = t || {};
                for (var n = 1, i = arguments.length; n < i; ++n)
                    d(t, arguments[n]);
                return t
            }
            function d(t, e) {
                var n,
                    i,
                    r,
                    o = {};
                for (n in e)
                    i = e[n], n in t && (t[n] === i || n in o && o[n] === i) || (t[n] = i);
                if (p() && e)
                    for (r = 0; r < k; ++r)
                        n = x[r], i = e[n], n in t && (t[n] === i || n in o && o[n] === i) || (t[n] = i);
                return t
            }
            function h(t, e) {
                for (var n in e)
                    n != _ && e.hasOwnProperty(n) && (t[n] = e[n]);
                if (p())
                    for (var i = k; i;)
                        n = x[--i], n != _ && e.hasOwnProperty(n) && (t[n] = e[n])
            }
            function f(t) {
                return n.safeMixin(this.prototype, t), this
            }
            function p() {
                for (var t in {
                    toString: 1
                })
                    return 0;
                return 1
            }
            function m(t, e, n) {
                return function() {
                    var i,
                        r,
                        o,
                        s = 0,
                        a = 1;
                    for (n && (s = e.length - 1, a = -1); i = e[s]; s += a)
                        r = i._meta, o = (r ? r.hidden : i.prototype)[t], o && o.apply(this, arguments)
                }
            }
            function g(e, n, i) {
                var r,
                    o,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d,
                    h,
                    f = this._inherited = this._inherited || {};
                if ("string" == typeof e && (r = e, e = n, n = i), i = 0, a = e.callee, r = r || a.nom, r || t("can't deduce a name to call inherited()", this.declaredClass), c = this.constructor._meta, s = c.bases, h = f.p, r != _) {
                    if (f.c !== a && (h = 0, u = s[0], c = u._meta, c.hidden[r] !== a)) {
                        o = c.chains, o && "string" == typeof o[r] && t("calling chained method with inherited: " + r, this.declaredClass);
                        do if (c = u._meta, l = u.prototype, c && (l[r] === a && l.hasOwnProperty(r) || c.hidden[r] === a))
                            break;
                        while (u = s[++h]);
                        h = u ? h : -1
                    }
                    if (u = s[++h])
                        if (l = u.prototype, u._meta && l.hasOwnProperty(r))
                            i = l[r];
                        else {
                            d = v[r];
                            do if (l = u.prototype, i = l[r], i && (u._meta ? l.hasOwnProperty(r) : i !== d))
                                break;
                            while (u = s[++h])
                        }
                    i = u && i || v[r]
                } else {
                    if (f.c !== a && (h = 0, c = s[0]._meta, c && c.ctor !== a)) {
                        for (o = c.chains, o && "manual" === o.constructor || t("calling chained constructor with inherited", this.declaredClass); (u = s[++h]) && (c = u._meta, !c || c.ctor !== a);)
                            ;
                        h = u ? h : -1
                    }
                    for (; (u = s[++h]) && (c = u._meta, !(i = c ? c.ctor : u));)
                        ;
                    i = u && i
                }
                if (f.c = i, f.p = h, i)
                    return n === !0 ? i : i.apply(this, n || e)
            }
            if (s.__webpackage_declare)
                return s.__webpackage_declare;
            var v = Object.prototype,
                y = v.toString,
                w = new Function,
                b = 0,
                _ = "constructor",
                x = "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."),
                k = x.length;
            return n.safeMixin = u, n.mixin = l, s.__webpackage_declare = n, n
        })
    }).call(e, function() {
        return this
    }())
}, function(t, e, n) {
    var i,
        r,
        o;
    !function(s, a) {
        "use strict";
        r = [n(72), n(2), n(74)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(this, function(t, e, n) {
        "use strict";
        return t([n], {
            $searchRoot: null,
            insertTemplate: function() {
                var t = this.template;
                "function" == typeof this.template && (t = this.template(this)), this.$wrapper = e(t), e(this.rawNode).replaceWith(this.$wrapper), this.wrapper = this.$wrapper[0]
            },
            mapNodes: function() {
                this.wrapper || (this.wrapper = this.rawNode, this.$wrapper = e(this.wrapper));
                var t = e.extend({}, this.defaultNodeMap, this.nodeMap);
                for (var n in t) {
                    var i = t[n];
                    if (this[n] = i, "string" == typeof i) {
                        var r = this.$searchRoot || this.$wrapper;
                        this[n] = r.find(i)
                    } else
                        "function" == typeof i && (this[n] = i(this))
                }
                this.$wrapper.attr("data-ui-id", this._id)
            },
            remove: function() {
                this.$wrapper && this.$wrapper.remove()
            }
        })
    })
}, function(t, e, n) {
    var i,
        r,
        o;
    !function(s, a) {
        "use strict";
        r = [n(72), n(75)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(this, function(t, e) {
        "use strict";
        return t(null, {
            constructor: function(t) {
                if (t = t || {}, this.processRawProps(t), this.preMixinProps(t), this.mixinProps(t), ("object" == typeof Node ? this.rawNode instanceof Node : this.rawNode && "object" == typeof this.rawNode && "number" == typeof this.rawNode.nodeType && "string" == typeof this.rawNode.nodeName) || (this.rawNode = this.rawNode[0]), this.rawNode && this.rawNode.getAttribute("data-ui-id"))
                    throw Error("不能在同一元素上重复应用组件");
                this._id = e.addOne(this), this.postMixinProps(), this.preCreateUi(), this.createUi(), this.postCreateUi(), this.preBindEvents(), this.bindEvents(), this.postBindEvents()
            },
            template: null,
            rawNode: null,
            defaultNodeMap: null,
            nodeMap: null,
            processRawProps: function(t) {},
            preMixinProps: function(t) {},
            mixinProps: function(e) {
                e && e.defaultNodeMap && delete e.defaultNodeMap, t.mixin(this, e), this.wrapper = null
            },
            postMixinProps: function() {},
            preCreateUi: function() {},
            createUi: function() {
                this.template && this.insertTemplate(), this.modifyHtml(this.wrapper || this.rawNode), this.mapNodes()
            },
            insertTemplate: function() {},
            modifyHtml: function(t) {},
            mapNodes: function() {},
            postCreateUi: function() {},
            preBindEvents: function() {},
            bindEvents: function() {},
            postBindEvents: function() {},
            unbindEvents: function() {},
            remove: function() {},
            destroy: function() {
                this.unbindEvents(), this.preRemove(), this.remove(), this.postRemove(), e.removeOne(this._id)
            },
            preRemove: function() {},
            postRemove: function() {},
            set: function(t, e, n) {
                var i = t.charAt(0).toUpperCase() + t.substr(1),
                    r = "_set" + i + "Attr";
                return this[r] ? this[r](e, n) : this[t] = e, this
            },
            get: function(t, e) {
                var n = t.charAt(0).toUpperCase() + t.substr(1),
                    i = "_get" + n + "Attr";
                return this[i] ? this[i](e) : this[t]
            }
        })
    })
}, function(t, e, n) {
    var i,
        r;
    (function(o) {
        var s;
        s = "undefined" != typeof window ? window : o, function(o, s) {
            i = s, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
        }(this, function() {
            if (s.__webpack_ui_mng)
                return s.__webpack_ui_mng;
            var t = 0,
                e = [],
                n = 0;
            return s.__webpack_ui_mng = {
                addOne: function(i) {
                    var r = t;
                    return e[t++] = i, ++n, r
                },
                removeOne: function(t) {
                    e[t] && delete e[t], e[t] = null, --n
                },
                getOne: function(t) {
                    return e[t]
                }
            }, s.__webpack_ui_mng
        })
    }).call(e, function() {
        return this
    }())
}, function(t, e, n) {
    var i,
        r,
        o;
    !function(s, a) {
        r = [n(72), n(2), n(77)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(this, function(t, e, n) {
        return t("Pagination", [n], {
            data: null,
            createTotalHtml: null,
            createStartPageHtml: null,
            createPageHtml: null,
            createMaxPageHtml: null,
            createPrevPageHtml: null,
            createNextPageHtml: null,
            createFirstPageHtml: null,
            createLastPageHtml: null,
            nodeOrder: ["total", "startPage", "pages", "maxPage", "first", "prev", "next", "last"],
            onClick: e.noop,
            clickableSelector: "a",
            defaultNodeMap: {
                $contentWrapper: "ul"
            },
            convertData: function(t) {
                if (!t)
                    return null;
                var e = t.page,
                    n = t.pageCount,
                    i = t.total,
                    r = {
                        page: e,
                        maxPage: n,
                        prev: e > 1 ? e - 1 : 0,
                        next: e < n ? e + 1 : 0,
                        total: i
                    },
                    o = 5,
                    s = Math.floor(.3 * o),
                    a = Math.max(e - s + 1, 1);
                s = e - a + 1;
                var c = o - s + 1,
                    u = Math.min(e + c - 1, n);
                c = u - e, u - a + 1 < o && (a = Math.max(e - (o - c) + 1, 1), s = e - a + 1);
                for (var l = [], d = a; d <= u; ++d)
                    l.push(d);
                return r.startPage = a, r.endPage = u, r.pages = l, r
            },
            createUi: function() {
                this.inherited(arguments), this.set("data", this.data)
            },
            bindEvents: function() {
                var t = this;
                this.$wrapper.on("click", this.clickableSelector, function(n) {
                    n.preventDefault(), t.onClick(e(this))
                })
            },
            unbindEvents: function() {
                this.$wrapper.off()
            },
            _constructPagination: function() {
                var t = this.data;
                if (!t)
                    return this.$contentWrapper.html(""), null;
                var e = {},
                    n = t.maxPage,
                    i = null == t.total ? "--" : t.total;
                if (this.createTotalHtml && (e.total = this.createTotalHtml(i, t)), n > 1) {
                    t.startPage > 1 && this.createStartPageHtml && (e.startPage = this.createStartPageHtml(t));
                    for (var r = t.pages, o = t.page, s = [], a = 0, c = r.length; a < c; ++a) {
                        var u = r[a];
                        s.push(this.createPageHtml(u, o === u, t))
                    }
                    e.pages = s.join("");
                    var l = t.endPage;
                    l < n && this.createMaxPageHtml && (e.maxPage = this.createMaxPageHtml(n, t)), e.prev = this.createPrevPageHtml && this.createPrevPageHtml(t.prev, !t.prev, t), e.next = this.createNextPageHtml && this.createNextPageHtml(t.next, !t.next, t), e.first = this.createFirstPageHtml && this.createFirstPageHtml(1 === o, t), e.last = this.createLastPageHtml && this.createLastPageHtml(n, o === n, t)
                }
                for (var d = "", a = 0, c = this.nodeOrder.length; a < c; ++a) {
                    var h = this.nodeOrder[a];
                    d += e[h] || ""
                }
                this.$contentWrapper.html(d)
            },
            _setDataAttr: function(t) {
                this.data = this.convertData(t), this._constructPagination()
            }
        })
    })
}, function(t, e, n) {
    var i,
        r,
        o;
    !function(s, a) {
        "use strict";
        r = [n(78), n(2), n(79)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(this, function(t, e, n) {
        "use strict";
        return t([n], {
            insertTemplate: function() {
                this.$wrapper = e(this.template), e(this.rawNode).replaceWith(this.$wrapper), this.wrapper = this.$wrapper[0]
            },
            mapNodes: function() {
                this.wrapper || (this.wrapper = this.rawNode, this.$wrapper = e(this.wrapper));
                var t = e.extend({}, this.defaultNodeMap, this.nodeMap);
                for (var n in t) {
                    var i = t[n];
                    this[n] = i, "string" == typeof i ? this[n] = this.$wrapper.find(i) : "function" == typeof i && (this[n] = i(this.$wrapper))
                }
                this.$wrapper.attr("data-ui-id", this._id)
            },
            remove: function() {
                this.$wrapper && this.$wrapper.remove()
            }
        })
    })
}, function(t, e, n) {
    var i,
        r;
    (function(o) {
        var s;
        s = "undefined" != typeof window ? window : o, function(o, s) {
            i = s, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
        }(this, function() {
            function t(t, e) {
                throw new Error("declare" + (e ? " " + e : "") + ": " + t)
            }
            function e(e, n) {
                for (var i, r, o, s, a, c, u, l, d = [], h = [{
                        cls: 0,
                        refs: []
                    }], f = {}, p = 1, m = e.length, g = 0; g < m; ++g) {
                    for (o = e[g], o ? "[object Function]" != y.call(o) && t("mixin #" + g + " is not a callable constructor.", n) : t("mixin #" + g + " is unknown. Did you use require to pull it in?", n), r = o._meta ? o._meta.bases : [o], s = 0, i = r.length - 1; i >= 0; --i)
                        a = r[i].prototype, a.hasOwnProperty("declaredClass") || (a.declaredClass = "uniqName_" + b++), u = a.declaredClass, f.hasOwnProperty(u) || (f[u] = {
                            count: 0,
                            refs: [],
                            cls: r[i]
                        }, ++p), c = f[u], s && s !== c && (c.refs.push(s), ++s.count), s = c;
                    ++s.count, h[0].refs.push(s)
                }
                for (; h.length;) {
                    for (s = h.pop(), d.push(s.cls), --p; l = s.refs, 1 == l.length;) {
                        if (s = l[0], !s || --s.count) {
                            s = 0;
                            break
                        }
                        d.push(s.cls), --p
                    }
                    if (s)
                        for (g = 0, m = l.length; g < m; ++g)
                            s = l[g], --s.count || h.push(s)
                }
                return p && t("can't build consistent linearization", n), o = e[0], d[0] = o ? o._meta && o === d[d.length - o._meta.bases.length] ? o._meta.bases.length : 1 : 0, d
            }
            function n(n, r, s) {
                "string" != typeof n && (s = r, r = n, n = ""), s = s || [];
                var d,
                    p,
                    w,
                    b,
                    x,
                    k,
                    T,
                    C = 1,
                    M = r;
                if ("[object Array]" == y.call(r) ? (k = e(r, n), w = k[0], C = k.length - w, r = k[C]) : (k = [0], r ? "[object Function]" == y.call(r) ? (w = r._meta, k = k.concat(w ? w.bases : r)) : t("base class is not a callable constructor.", n) : null !== r && t("unknown base class. Did you use require to pull it in?", n)), r)
                    for (p = C - 1; d = i(r), p; --p)
                        w = k[p], (w._meta ? h : l)(d, w.prototype), b = new Function, b.superclass = r, b.prototype = d, r = d.constructor = b;
                else
                    d = {};
                for (u(d, s), w = s.constructor, w !== v.constructor && (w.nom = _, d.constructor = w), p = C - 1; p; --p)
                    w = k[p]._meta, w && w.chains && (T = l(T || {}, w.chains));
                if (d["-chains-"] && (T = l(T || {}, d["-chains-"])), w = !T || !T.hasOwnProperty(_), k[0] = b = T && "manual" === T.constructor ? c(k) : 1 == k.length ? o(s.constructor, w) : a(k, w), b._meta = {
                    bases: k,
                    hidden: s,
                    chains: T,
                    parents: M,
                    ctor: s.constructor
                }, b.superclass = r && r.prototype, b.extend = f, b.prototype = d, d.constructor = b, d.inherited = g, n && (d.delcaredClass = n), T)
                    for (x in T)
                        d[x] && "string" == typeof T[x] && x != _ && (w = d[x] = m(x, k, "after" === T[x]), w.nom = x);
                return b
            }
            function i(t) {
                w.prototype = t.prototype;
                var e = new w;
                return w.prototype = null, e
            }
            function r(t) {
                var e = t.callee,
                    n = i(e);
                return e.apply(n, t), n
            }
            function o(t, e) {
                return function() {
                    var n,
                        i = arguments,
                        o = i,
                        s = i[0];
                    return this instanceof i.callee ? (e && (s && (n = s.preamble, n && (o = n.apply(this, o) || o)), n = this.preamble, n && n.apply(this, o)), t && t.apply(this, i), n = this.postscript, void (n && n.apply(this, i))) : r(i)
                }
            }
            function a(t, e) {
                return function() {
                    var n,
                        i,
                        o,
                        s,
                        a = arguments,
                        c = a,
                        u = a[0],
                        l = t.length;
                    if (!(this instanceof a.callee))
                        return r(a);
                    if (e && (u && u.preamble || this.preamble))
                        for (s = new Array(t.length), s[0] = a, i = 0; u = a[0], u && (n = u.preamble, n && (a = n.apply(this, a) || a)), n = t[i].prototype, n = n.hasOwnProperty("preamble") && n.preamble, n && (a = n.apply(this, a) || a), ++i != l;)
                            s[i] = a;
                    for (i = l - 1; i >= 0; --i)
                        n = t[i], o = n._meta, n = o ? o.ctor : n, n && n.apply(this, s ? s[i] : a);
                    n = this.postscript, n && n.apply(this, c)
                }
            }
            function c(t) {
                return function() {
                    var e,
                        n,
                        i = arguments,
                        o = 0;
                    if (!(this instanceof i.callee))
                        return r(i);
                    for (; e = t[o]; ++o)
                        if (n = e._meta, e = n ? n.ctor : e) {
                            e.apply(this, i);
                            break
                        }
                    e = this.postscript, e && e.apply(this, i)
                }
            }
            function u(t, e) {
                var n,
                    i;
                for (n in e)
                    i = e[n], i === v[n] && n in v || n == _ || ("[object Function]" == y.call(i) && (i.nom = n), t[n] = i);
                if (p())
                    for (var r = k; r;)
                        n = x[--r], i = e[n], i === v[n] && n in v || n == _ || ("[object Function]" == y.call(i) && (i.nom = n), t[n] = i);
                return t
            }
            function l(t, e) {
                t = t || {};
                for (var n = 1, i = arguments.length; n < i; ++n)
                    d(t, arguments[n]);
                return t
            }
            function d(t, e) {
                var n,
                    i,
                    r,
                    o = {};
                for (n in e)
                    i = e[n], n in t && (t[n] === i || n in o && o[n] === i) || (t[n] = i);
                if (p() && e)
                    for (r = 0; r < k; ++r)
                        n = x[r], i = e[n], n in t && (t[n] === i || n in o && o[n] === i) || (t[n] = i);
                return t
            }
            function h(t, e) {
                for (var n in e)
                    n != _ && e.hasOwnProperty(n) && (t[n] = e[n]);
                if (p())
                    for (var i = k; i;)
                        n = x[--i], n != _ && e.hasOwnProperty(n) && (t[n] = e[n])
            }
            function f(t) {
                return n.safeMixin(this.prototype, t), this
            }
            function p() {
                for (var t in {
                    toString: 1
                })
                    return 0;
                return 1
            }
            function m(t, e, n) {
                return function() {
                    var i,
                        r,
                        o,
                        s = 0,
                        a = 1;
                    for (n && (s = e.length - 1, a = -1); i = e[s]; s += a)
                        r = i._meta, o = (r ? r.hidden : i.prototype)[t], o && o.apply(this, arguments)
                }
            }
            function g(e, n, i) {
                var r,
                    o,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d,
                    h,
                    f = this._inherited = this._inherited || {};
                if ("string" == typeof e && (r = e, e = n, n = i), i = 0, a = e.callee, r = r || a.nom, r || t("can't deduce a name to call inherited()", this.declaredClass), c = this.constructor._meta, s = c.bases, h = f.p, r != _) {
                    if (f.c !== a && (h = 0, u = s[0], c = u._meta, c.hidden[r] !== a)) {
                        o = c.chains, o && "string" == typeof o[r] && t("calling chained method with inherited: " + r, this.declaredClass);
                        do if (c = u._meta, l = u.prototype, c && (l[r] === a && l.hasOwnProperty(r) || c.hidden[r] === a))
                            break;
                        while (u = s[++h]);
                        h = u ? h : -1
                    }
                    if (u = s[++h])
                        if (l = u.prototype, u._meta && l.hasOwnProperty(r))
                            i = l[r];
                        else {
                            d = v[r];
                            do if (l = u.prototype, i = l[r], i && (u._meta ? l.hasOwnProperty(r) : i !== d))
                                break;
                            while (u = s[++h])
                        }
                    i = u && i || v[r]
                } else {
                    if (f.c !== a && (h = 0, c = s[0]._meta, c && c.ctor !== a)) {
                        for (o = c.chains, o && "manual" === o.constructor || t("calling chained constructor with inherited", this.declaredClass); (u = s[++h]) && (c = u._meta, !c || c.ctor !== a);)
                            ;
                        h = u ? h : -1
                    }
                    for (; (u = s[++h]) && (c = u._meta, !(i = c ? c.ctor : u));)
                        ;
                    i = u && i
                }
                if (f.c = i, f.p = h, i)
                    return n === !0 ? i : i.apply(this, n || e)
            }
            if (s.__webpackage_declare)
                return s.__webpackage_declare;
            var v = Object.prototype,
                y = v.toString,
                w = new Function,
                b = 0,
                _ = "constructor",
                x = "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."),
                k = x.length;
            return n.safeMixin = u, n.mixin = l, s.__webpackage_declare = n, n
        })
    }).call(e, function() {
        return this
    }())
}, function(t, e, n) {
    var i,
        r,
        o;
    !function(s, a) {
        "use strict";
        r = [n(78), n(80)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(this, function(t, e) {
        "use strict";
        return t(null, {
            constructor: function(t) {
                t = t || {}, this.processRawProps(t), this.preMixinProps(t), this.mixinProps(t), this._id = e.addOne(this), this.postMixinProps(), this.preCreateUi(), this.createUi(), this.postCreateUi(), this.preBindEvents(), this.bindEvents(), this.postBindEvents()
            },
            template: null,
            rawNode: null,
            defaultNodeMap: null,
            nodeMap: null,
            processRawProps: function(t) {},
            preMixinProps: function(t) {},
            mixinProps: function(e) {
                e && e.defaultNodeMap && delete e.defaultNodeMap, t.mixin(this, e)
            },
            postMixinProps: function() {},
            preCreateUi: function() {},
            createUi: function() {
                this.template && this.insertTemplate(), this.mapNodes()
            },
            insertTemplate: function() {},
            mapNodes: function() {},
            postCreateUi: function() {},
            preBindEvents: function() {},
            bindEvents: function() {},
            postBindEvents: function() {},
            unbindEvents: function() {},
            remove: function() {},
            destroy: function() {
                this.unbindEvents(), this.remove(), e.removeOne(this._id)
            },
            set: function(t, e, n) {
                var i = t.charAt(0).toUpperCase() + t.substr(1),
                    r = "_set" + i + "Attr";
                return this[r] ? this[r](e, n) : this[t] = e, this
            },
            get: function(t, e) {
                var n = t.charAt(0).toUpperCase() + t.substr(1),
                    i = "_get" + n + "Attr";
                return this[i] ? this[i](e) : this[t]
            }
        })
    })
}, function(t, e, n) {
    var i,
        r;
    (function(o) {
        var s;
        s = "undefined" != typeof window ? window : o, function(o, s) {
            i = s, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
        }(this, function() {
            if (s.__webpack_ui_mng)
                return s.__webpack_ui_mng;
            var t = 0,
                e = [],
                n = 0;
            return s.__webpack_ui_mng = {
                addOne: function(i) {
                    var r = t;
                    return e[t++] = i, ++n, r
                },
                removeOne: function(t) {
                    e[t] && delete e[t], e[t] = null, --n
                },
                getOne: function(t) {
                    return e[t]
                }
            }, s.__webpack_ui_mng
        })
    }).call(e, function() {
        return this
    }())
}, function(t, e, n) {
    var i,
        r,
        o;
    !function(s, a) {
        r = [n(72), n(2), n(73), n(75)], i = a, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(this, function(t, e, n, i) {
        return t("DatePicker", [n], {
            $searchRoot: e("body"),
            templateType: "default",
            positionType: "default",
            startYear: (new Date).getFullYear(),
            startMonth: (new Date).getMonth() + 1,
            elementNum: 1,
            resultIndex: 0,
            dateNum: 1,
            isRejectOthers: !0,
            autoHide: !0,
            format: "yyyy-MM-dd",
            filterConfig: [{
                name: "format",
                type: "callback",
                runable: !0,
                filterFunc: function(t, e) {
                    var n = t.resultIndex;
                    0 === n ? n = t.dateNum - 1 : n--;
                    var i = t.result[n];
                    return i.formatStr = t.dateFormat(i.date, t.format), !0
                }
            }, {
                name: "showCurrent",
                type: "initDays",
                runable: !0,
                filterFunc: function(t) {
                    var e = new Date,
                        n = e.getDate(),
                        i = e.getMonth() + 1;
                    i < 10 && (i = "0" + i);
                    var r = e.getFullYear(),
                        o = t.$self.find("div.udpd-element[udpdYear=" + r + "][udpdMonth=" + i + "] div.udpd-days span[udpdDate=" + n + "]");
                    o.addClass("udpd-current")
                }
            }],
            buttonConfig: [{
                name: "increareMonth",
                text: ">",
                runable: !0,
                type: "element",
                className: "udpd-increase-month",
                clickFunc: function(t, e) {
                    var n = e.parent(),
                        i = t.$element.index(n),
                        r = t.$yearMonth.eq(i),
                        o = r.find("span.udpd-year"),
                        s = r.find("span.udpd-month"),
                        a = r.find("input.udpd-year"),
                        c = r.find("input.udpd-month"),
                        u = parseInt(o.html()),
                        l = parseInt(s.html());
                    l++, l > 12 && (l = 1, u += 1), l < 10 && (l = "0" + l), n.attr("udpdYear", u), n.attr("udpdMonth", l), o.html(u), a.val(u), s.html(l), c.val(l), t.initDays()
                }
            }, {
                name: "decreaseMonth",
                text: "<",
                runable: !0,
                type: "element",
                className: "udpd-decrease-month",
                clickFunc: function(t, e) {
                    var n = e.parent(),
                        i = t.$element.index(n),
                        r = t.$yearMonth.eq(i),
                        o = r.find("span.udpd-year"),
                        s = r.find("span.udpd-month"),
                        a = r.find("input.udpd-year"),
                        c = r.find("input.udpd-month"),
                        u = parseInt(o.html()),
                        l = parseInt(s.html());
                    l--, l < 1 && (l = 12, u -= 1), l < 10 && (l = "0" + l), n.attr("udpdYear", u), n.attr("udpdMonth", l), o.html(u), a.val(u), s.html(l), c.val(l), t.initDays()
                }
            }],
            formatWeekNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dateFormat: function(t, e) {
                var n = e,
                    i = this.formatWeekNames;
                n = n.replace(/yyyy|YYYY/, t.getFullYear()), n = n.replace(/yy|YY/, t.getYear() % 100 > 9 ? (t.getYear() % 100).toString() : "0" + t.getYear() % 100);
                var r = t.getMonth() + 1;
                return n = n.replace(/MM/, r > 9 ? r.toString() : "0" + r), n = n.replace(/M/g, r), n = n.replace(/w|W/g, i[t.getDay()]), n = n.replace(/dd|DD/, t.getDate() > 9 ? t.getDate().toString() : "0" + t.getDate()), n = n.replace(/d|D/g, t.getDate()), n = n.replace(/hh|HH/, t.getHours() > 9 ? t.getHours().toString() : "0" + t.getHours()), n = n.replace(/h|H/g, t.getHours()), n = n.replace(/mm/, t.getMinutes() > 9 ? t.getMinutes().toString() : "0" + t.getMinutes()), n = n.replace(/m/g, t.getMinutes()), n = n.replace(/ss|SS/, t.getSeconds() > 9 ? t.getSeconds().toString() : "0" + t.getSeconds()), n = n.replace(/s|S/g, t.getSeconds())
            },
            position: function() {
                if ("default" === this.positionType) {
                    var t = this.$trigger.offset(),
                        e = parseFloat(this.$trigger.outerHeight());
                    this.$self.css({
                        position: "absolute",
                        left: t.left + "px",
                        top: t.top + e + 1 + "px"
                    })
                }
            },
            initDays: function() {
                for (var t = 0; t < this.$element.length; t++) {
                    var e = this.$element.eq(t),
                        n = e.find("span.udpd-year").html(),
                        i = parseInt(e.find("span.udpd-month").html()),
                        r = i;
                    r < 10 && (r = "0" + r);
                    var o = new Date(n + "/" + r + "/01"),
                        s = o.getDay();
                    0 === s && (s = 7);
                    var a = this.getDays(n, i),
                        c = "";
                    c += '<div class="udpd-line">';
                    for (var u = 1; u < s; u++)
                        c += "<span>&nbsp;</span>";
                    for (u = s; u < 8; u++)
                        c += '<span udpdDate="' + (1 + u - s) + '">' + (1 + u - s) + "</span>";
                    c += "</div>";
                    var l = 9 - s,
                        d = l,
                        h = parseInt((a - l + 1) / 7);
                    for ((a - l + 1) % 7 !== 0 && h++, u = 0; u < h; u++) {
                        c += '<div class="udpd-line">';
                        for (var f = 0; f < 7; f++)
                            c += d > a ? "<span>&nbsp</span>" : '<span udpdDate="' + d + '">' + d + "</span>", d++;
                        c += "</div>"
                    }
                    e.find("div.udpd-days").html(c)
                }
                for (var u = 0; u < this.filterConfig.length; u++) {
                    var p = this.filterConfig[u];
                    p.runable && "initDays" === p.type && p.filterFunc(this)
                }
            },
            getDays: function(t, e) {
                t = parseInt(t), e = parseInt(e);
                var n;
                switch (e) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    n = 31;
                    break;
                case 2:
                    n = this.isLeapYear(t) ? 29 : 28;
                    break;
                default:
                    n = 30
                }
                return n
            },
            isLeapYear: function(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            },
            dealDefault: function() {
                if (this.result = new Array, this.defaultValue) {
                    for (var t = 0; t < this.defaultValue.length; t++) {
                        var e = new Date(parseInt(this.defaultValue[t])),
                            n = e.getDate(),
                            i = e.getMonth() + 1;
                        i < 10 && (i = "0" + i);
                        var r = e.getFullYear(),
                            o = this.$self.find("div.udpd-element[udpdYear=" + r + "][udpdMonth=" + i + "] div.udpd-days span[udpdDate=" + n + "]"),
                            s = this.dateFormat(e, this.format);
                        this.result.push({
                            date: e,
                            target: o,
                            formatStr: s
                        }), o.addClass("udpd-choosed")
                    }
                    this.callback()
                }
            },
            setValue: function(t) {
                this.defaultValue = t, this.dealDefault()
            },
            defaultNodeMap: {
                $self: function(t) {
                    return t.$searchRoot.find("div.ui-datepicker-default[datePicker=" + t._id + "]")
                },
                $trigger: function(t) {
                    return e(t.rawNode)
                },
                $element: function(t) {
                    return t.$self.find("div.udpd-element")
                },
                $yearMonth: function(t) {
                    return t.$self.find("div.udpd-year-month")
                },
                $week: function(t) {
                    return t.$self.find("div.udpd-week")
                },
                $days: function(t) {
                    return t.$self.find("div.udpd-days")
                }
            },
            modifyHtml: function() {
                var t,
                    n = "";
                if ("default" === this.templateType) {
                    n += '<div class="ui-datepicker-default" datePicker="' + this._id + '" style="z-index:' + this.zIndex + ';">';
                    for (var i = 0; i < this.elementNum; i++) {
                        var r = this.startYear,
                            o = this.startMonth + i;
                        o > 12 && (r++, o -= 12), o < 10 && (o = "0" + o), n += '<div class="udpd-element" udpdYear="' + r + '" udpdMonth="' + o + '">', n += '<div class="udpd-year-month">', n += '<div name="udpd-detail"><span class="udpd-year">' + r + '</span>-<span class="udpd-month">' + o + "</span></div>", n += '<div class="udpd-edit"><input class="udpd-year" maxlength="4" type="text" value="' + r + '">-<input class="udpd-month" maxlength="2" type="text" value="' + o + '"><input class="udpd-btn" type="button" value="确定"></div>', n += "</div>", n += '<div class="udpd-week">', n += "<span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>七</span>", n += "</div>", n += '<div class="udpd-days">', n += "</div>";
                        for (var s = 0; s < this.buttonConfig.length; s++)
                            t = this.buttonConfig[s], "element" === t.type && t.runable && (n += '<div name="' + t.name + '" class="' + t.className + '">' + t.text + "</div>");
                        n += "</div>"
                    }
                    for (i = 0; i < this.buttonConfig.length; i++)
                        t = this.buttonConfig[i], "component" === t.type && t.runable && (n += '<div name="' + t.name + '" class="' + t.className + '">' + t.text + "</div>");
                    n += "</div>"
                }
                this.$searchRoot.append(e(n))
            },
            postCreateUi: function() {
                this.initDays(), this.dealDefault()
            },
            destroy: function() {
                this.$trigger.off("click.datePicker." + this._id), this.$searchRoot.off("click.datePicker." + this._id), this.$self.remove(), i.removeOne(this._id)
            },
            showComponent: function() {
                this.$self.show(), this.position(), this.isRejectOthers && "default" === this.templateType && this.$searchRoot.find("div.ui-datepicker-default[datepicker!=" + this._id + "]").hide()
            },
            bindEvents: function() {
                var t = this;
                t.$self.on("click", function(t) {
                    t.stopPropagation()
                }), t.$trigger.on("click.datePicker" + t._id, function(e) {
                    t.showComponent(), e.stopPropagation()
                }), t.$searchRoot.on("click.datePicker" + t._id, function() {
                    t.$self.hide()
                }), t.$yearMonth.on("click", "div[name=udpd-detail]>span", function() {
                    e(this).parent().hide(), e(this).parent().next().show()
                }), t.$yearMonth.on("click", "input.udpd-btn", function() {
                    var n = e(this).parents("div.udpd-element"),
                        i = t.$element.index(n),
                        r = t.$yearMonth.eq(i),
                        o = r.find("span.udpd-year"),
                        s = r.find("span.udpd-month"),
                        a = r.find("input.udpd-year"),
                        c = r.find("input.udpd-month"),
                        u = Math.abs(parseInt(a.val())),
                        l = Math.abs(parseInt(c.val()));
                    u > 0 && l > 0 && l <= 12 && (o.html(u), l < 10 && (l = "0" + l), s.html(l), n.attr("udpdYear", u), n.attr("udpdMonth", l), t.initDays(), e(this).parent().hide(), e(this).parent().prev().show())
                }), t.$element.on("click", "div.udpd-days>div.udpd-line>span[class!=udpd-disabled]", function() {
                    var n = e(this),
                        i = parseInt(n.html());
                    if (i >= 1 && i <= 31) {
                        var r = n.parents("div.udpd-element"),
                            o = t.$element.index(r),
                            s = t.$yearMonth.eq(o),
                            a = s.find("span.udpd-year"),
                            c = s.find("span.udpd-month"),
                            u = parseInt(a.html()),
                            l = parseInt(c.html());
                        i < 10 && (i = "0" + i), t.result[t.resultIndex] && t.result[t.resultIndex].target.removeClass("udpd-choosed"), n.addClass("udpd-choosed"), t.result[t.resultIndex] = {
                            date: new Date(u + "/" + l + "/" + i),
                            target: n,
                            formatStr: ""
                        }, t.resultIndex++, t.resultIndex >= t.dateNum && (t.resultIndex = 0, t.autoHide && t.$self.hide());
                        for (var d = 0; d < t.filterConfig.length; d++) {
                            var h = t.filterConfig[d];
                            h.runable && "callback" === h.type && h.filterFunc(t, n)
                        }
                        t.callback()
                    }
                });
                for (var n = 0; n < t.buttonConfig.length; n++) {
                    var i = t.buttonConfig[n];
                    i.runable && !function(n) {
                        t.$self.on("click", "[name=" + n.name + "]", function() {
                            n.clickFunc(t, e(this))
                        })
                    }(i)
                }
            }
        })
    })
}]);


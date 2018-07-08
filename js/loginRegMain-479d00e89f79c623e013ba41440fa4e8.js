!function(t) {
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
    t.exports = n(111)
}, , 
function(t, e) {
    t.exports = jQuery
}, , 
function(t, e, n) {
    var i,
        r;
    (function(a) {
        var o;
        o = "undefined" != typeof window ? window : a, function(a, o) {
            i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
        }(this, function() {
            function t(t, e) {
                throw new Error("declare" + (e ? " " + e : "") + ": " + t)
            }
            function e(e, n) {
                for (var i, r, a, o, s, u, l, c, p = [], h = [{
                        cls: 0,
                        refs: []
                    }], f = {}, v = 1, d = e.length, x = 0; x < d; ++x) {
                    for (a = e[x], a ? "[object Function]" != y.call(a) && t("mixin #" + x + " is not a callable constructor.", n) : t("mixin #" + x + " is unknown. Did you use require to pull it in?", n), r = a._meta ? a._meta.bases : [a], o = 0, i = r.length - 1; i >= 0; --i)
                        s = r[i].prototype, s.hasOwnProperty("declaredClass") || (s.declaredClass = "uniqName_" + w++), l = s.declaredClass, f.hasOwnProperty(l) || (f[l] = {
                            count: 0,
                            refs: [],
                            cls: r[i]
                        }, ++v), u = f[l], o && o !== u && (u.refs.push(o), ++o.count), o = u;
                    ++o.count, h[0].refs.push(o)
                }
                for (; h.length;) {
                    for (o = h.pop(), p.push(o.cls), --v; c = o.refs, 1 == c.length;) {
                        if (o = c[0], !o || --o.count) {
                            o = 0;
                            break
                        }
                        p.push(o.cls), --v
                    }
                    if (o)
                        for (x = 0, d = c.length; x < d; ++x)
                            o = c[x], --o.count || h.push(o)
                }
                return v && t("can't build consistent linearization", n), a = e[0], p[0] = a ? a._meta && a === p[p.length - a._meta.bases.length] ? a._meta.bases.length : 1 : 0, p
            }
            function n(n, r, o) {
                "string" != typeof n && (o = r, r = n, n = ""), o = o || [];
                var p,
                    v,
                    g,
                    w,
                    b,
                    C,
                    k,
                    S = 1,
                    N = r;
                if ("[object Array]" == y.call(r) ? (C = e(r, n), g = C[0], S = C.length - g, r = C[S]) : (C = [0], r ? "[object Function]" == y.call(r) ? (g = r._meta, C = C.concat(g ? g.bases : r)) : t("base class is not a callable constructor.", n) : null !== r && t("unknown base class. Did you use require to pull it in?", n)), r)
                    for (v = S - 1; p = i(r), v; --v)
                        g = C[v], (g._meta ? h : c)(p, g.prototype), w = new Function, w.superclass = r, w.prototype = p, r = p.constructor = w;
                else
                    p = {};
                for (l(p, o), g = o.constructor, g !== m.constructor && (g.nom = _, p.constructor = g), v = S - 1; v; --v)
                    g = C[v]._meta, g && g.chains && (k = c(k || {}, g.chains));
                if (p["-chains-"] && (k = c(k || {}, p["-chains-"])), g = !k || !k.hasOwnProperty(_), C[0] = w = k && "manual" === k.constructor ? u(C) : 1 == C.length ? a(o.constructor, g) : s(C, g), w._meta = {
                    bases: C,
                    hidden: o,
                    chains: k,
                    parents: N,
                    ctor: o.constructor
                }, w.superclass = r && r.prototype, w.extend = f, w.prototype = p, p.constructor = w, p.inherited = x, n && (p.delcaredClass = n), k)
                    for (b in k)
                        p[b] && "string" == typeof k[b] && b != _ && (g = p[b] = d(b, C, "after" === k[b]), g.nom = b);
                return w
            }
            function i(t) {
                g.prototype = t.prototype;
                var e = new g;
                return g.prototype = null, e
            }
            function r(t) {
                var e = t.callee,
                    n = i(e);
                return e.apply(n, t), n
            }
            function a(t, e) {
                return function() {
                    var n,
                        i = arguments,
                        a = i,
                        o = i[0];
                    return this instanceof i.callee ? (e && (o && (n = o.preamble, n && (a = n.apply(this, a) || a)), n = this.preamble, n && n.apply(this, a)), t && t.apply(this, i), n = this.postscript, void (n && n.apply(this, i))) : r(i)
                }
            }
            function s(t, e) {
                return function() {
                    var n,
                        i,
                        a,
                        o,
                        s = arguments,
                        u = s,
                        l = s[0],
                        c = t.length;
                    if (!(this instanceof s.callee))
                        return r(s);
                    if (e && (l && l.preamble || this.preamble))
                        for (o = new Array(t.length), o[0] = s, i = 0; l = s[0], l && (n = l.preamble, n && (s = n.apply(this, s) || s)), n = t[i].prototype, n = n.hasOwnProperty("preamble") && n.preamble, n && (s = n.apply(this, s) || s), ++i != c;)
                            o[i] = s;
                    for (i = c - 1; i >= 0; --i)
                        n = t[i], a = n._meta, n = a ? a.ctor : n, n && n.apply(this, o ? o[i] : s);
                    n = this.postscript, n && n.apply(this, u)
                }
            }
            function u(t) {
                return function() {
                    var e,
                        n,
                        i = arguments,
                        a = 0;
                    if (!(this instanceof i.callee))
                        return r(i);
                    for (; e = t[a]; ++a)
                        if (n = e._meta, e = n ? n.ctor : e) {
                            e.apply(this, i);
                            break
                        }
                    e = this.postscript, e && e.apply(this, i)
                }
            }
            function l(t, e) {
                var n,
                    i;
                for (n in e)
                    i = e[n], i === m[n] && n in m || n == _ || ("[object Function]" == y.call(i) && (i.nom = n), t[n] = i);
                if (v())
                    for (var r = C; r;)
                        n = b[--r], i = e[n], i === m[n] && n in m || n == _ || ("[object Function]" == y.call(i) && (i.nom = n), t[n] = i);
                return t
            }
            function c(t, e) {
                t = t || {};
                for (var n = 1, i = arguments.length; n < i; ++n)
                    p(t, arguments[n]);
                return t
            }
            function p(t, e) {
                var n,
                    i,
                    r,
                    a = {};
                for (n in e)
                    i = e[n], n in t && (t[n] === i || n in a && a[n] === i) || (t[n] = i);
                if (v() && e)
                    for (r = 0; r < C; ++r)
                        n = b[r], i = e[n], n in t && (t[n] === i || n in a && a[n] === i) || (t[n] = i);
                return t
            }
            function h(t, e) {
                for (var n in e)
                    n != _ && e.hasOwnProperty(n) && (t[n] = e[n]);
                if (v())
                    for (var i = C; i;)
                        n = b[--i], n != _ && e.hasOwnProperty(n) && (t[n] = e[n])
            }
            function f(t) {
                return n.safeMixin(this.prototype, t), this
            }
            function v() {
                for (var t in {
                    toString: 1
                })
                    return 0;
                return 1
            }
            function d(t, e, n) {
                return function() {
                    var i,
                        r,
                        a,
                        o = 0,
                        s = 1;
                    for (n && (o = e.length - 1, s = -1); i = e[o]; o += s)
                        r = i._meta, a = (r ? r.hidden : i.prototype)[t], a && a.apply(this, arguments)
                }
            }
            function x(e, n, i) {
                var r,
                    a,
                    o,
                    s,
                    u,
                    l,
                    c,
                    p,
                    h,
                    f = this._inherited = this._inherited || {};
                if ("string" == typeof e && (r = e, e = n, n = i), i = 0, s = e.callee, r = r || s.nom, r || t("can't deduce a name to call inherited()", this.declaredClass), u = this.constructor._meta, o = u.bases, h = f.p, r != _) {
                    if (f.c !== s && (h = 0, l = o[0], u = l._meta, u.hidden[r] !== s)) {
                        a = u.chains, a && "string" == typeof a[r] && t("calling chained method with inherited: " + r, this.declaredClass);
                        do if (u = l._meta, c = l.prototype, u && (c[r] === s && c.hasOwnProperty(r) || u.hidden[r] === s))
                            break;
                        while (l = o[++h]);
                        h = l ? h : -1
                    }
                    if (l = o[++h])
                        if (c = l.prototype, l._meta && c.hasOwnProperty(r))
                            i = c[r];
                        else {
                            p = m[r];
                            do if (c = l.prototype, i = c[r], i && (l._meta ? c.hasOwnProperty(r) : i !== p))
                                break;
                            while (l = o[++h])
                        }
                    i = l && i || m[r]
                } else {
                    if (f.c !== s && (h = 0, u = o[0]._meta, u && u.ctor !== s)) {
                        for (a = u.chains, a && "manual" === a.constructor || t("calling chained constructor with inherited", this.declaredClass); (l = o[++h]) && (u = l._meta, !u || u.ctor !== s);)
                            ;
                        h = l ? h : -1
                    }
                    for (; (l = o[++h]) && (u = l._meta, !(i = u ? u.ctor : l));)
                        ;
                    i = l && i
                }
                if (f.c = i, f.p = h, i)
                    return n === !0 ? i : i.apply(this, n || e)
            }
            if (o.__webpackage_declare)
                return o.__webpackage_declare;
            var m = Object.prototype,
                y = m.toString,
                g = new Function,
                w = 0,
                _ = "constructor",
                b = "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."),
                C = b.length;
            return n.safeMixin = l, n.mixin = c, o.__webpackage_declare = n, n
        })
    }).call(e, function() {
        return this
    }())
}, , , , 
function(t, e, n) {
    var i,
        r;
    i = [], r = function() {
        var t = function() {
                return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            e = function() {
                var t = navigator.userAgent;
                return /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(t) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(t)
            },
            n = function(n) {
                if (t() && e() || !("onhashchange" in window.document.body)) {
                    var i = window.location,
                        r = i.href,
                        a = i.hash;
                    setInterval(function() {
                        var t = i.href,
                            e = i.hash;
                        e != a && "function" == typeof window.onhashchange && (n({
                            type: "hashchange",
                            oldURL: r,
                            newURL: t
                        }), r = t, a = e)
                    }, 100)
                } else
                    window.onhashchange = n
            };
        return n
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, , 
function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(4), n(2), n(11), n(14), n(13)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t, e, n, i, r) {
        return e.fn.serializeObject || (e.fn.serializeObject = function() {
            var t = {},
                n = this.serializeArray();
            return e.each(n, function() {
                t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]), t[this.name].push(this.value || "")) : t[this.name] = this.value || ""
            }), t
        }), t("Form", [n], {
            validModeWhenEmpty: 0,
            inputNames: [],
            validateNames: [],
            errorMsgClassName: "",
            tipMsgClassName: "",
            inputErrorClassName: "",
            dfdArray: {},
            noRemoteValidWhenEmpty: !0,
            validator: {},
            validMode: "real",
            defaultNodeMap: {
                $form: "form",
                $errorMsg: ".ui-error-msg",
                $errorWrapper: ".ui-error-wrapper",
                $submitBtn: ".ui-form-submit",
                $submittingBtn: ".ui-form-submitting"
            },
            inputWrapperSelector: ".ui-input-wrapper",
            inputMsgSelector: ".ui-input-msg",
            inputOkSelector: ".ui-input-ok",
            tipTpl: null,
            msgTpl: null,
            _hasTriggerSubmit: !1,
            clearTipsFlag: !1,
            mixinProps: function(t) {
                this.inherited(arguments), "function" == typeof this.validator && (this.validator = this.validator())
            },
            createUi: function() {
                this.inherited(arguments), this.initInputs()
            },
            bindEvents: function() {
                "real" === this.validMode && this.initDefaultValidations(), this.initDefaultTips(), this._bindInputEvents();
                var t = this;
                this.$form.submit(function() {
                    return t.onSubmit(), !1
                })
            },
            remove: function() {
                this.$wrapper.find("[data-ui-id]").each(function() {
                    var t = e(this).data("uiId"),
                        n = r.getOne(t);
                    n && n.destroy()
                }), this.inherited(arguments)
            },
            initInputs: function() {
                for (var t = this.inputNames || [], n = 0, i = t.length; n < i; ++n) {
                    var r = t[n],
                        a = this["$" + r + "Input"] = this.$form.find("[name=" + r + "]");
                    if (!a || 0 === a.length)
                        throw new Error('the field "' + r + '" is not exist in form');
                    var o = this["$" + r + "Wrapper"] = a.closest(this.inputWrapperSelector),
                        s = o.find(this.inputMsgSelector);
                    s.length > 1 ? this["$" + r + "Msg"] = e(s.filter("[data-target=" + r + "]")[0]) : this["$" + r + "Msg"] = s, this["$" + r + "Ok"] = o.find(this.inputOkSelector), this._initInputsExt(r, a, o)
                }
                var u = this;
                this.validateNames.forEach(function(t) {
                    var e = u["$" + t + "Input"] || u.$form.find("[name=" + t + "]");
                    if (!e || 0 === e.length)
                        throw new Error('the field "' + t + '" is not exist in form')
                })
            },
            _initInputsExt: e.noop,
            initDefaultValidations: function() {
                var t = this,
                    e = this.validationConfigs || [];
                for (var n in e) {
                    var i = n.substring(0, 1).toUpperCase() + n.substr(1),
                        r = e[n],
                        a = r.events || [];
                    "string" == typeof a && (a = [a]), a.length || (a = ["blur"]), this["valid" + i] || (this["valid" + i] = function(e, n) {
                        var i = "_valid";
                        return "r" !== n && "remote" !== n || (i = "_validR"), function(n) {
                            t[i](n, e)
                        }
                    }(n, r.type), !r.validRequired || this.validator && this.validator["valid" + i] || (this.validator["valid" + i] = function(t) {
                        return function(e) {
                            var n = "";
                            return e || (n = t || "该项必须填写"), {
                                result: !n,
                                message: n
                            }
                        }
                    }(r.requiredMsg)));
                    for (var o = 0, s = a.length; o < s; ++o) {
                        var u = a[o];
                        "input" === u ? this["on" + i + u.substring(0, 1).toUpperCase() + u.substr(1)] = function(e) {
                            return function(n, i) {
                                t["valid" + e](i)
                            }
                        }(i) : this["$" + n + "Input"].on(u, function(e, n) {
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
                            a = i.events || [];
                        "string" == typeof a && (a = [a]), a.length || (a = ["focus"]);
                        for (var o = 0, s = a.length; o < s; ++o) {
                            var u = a[o];
                            "input" === u ? this["on" + r + u.substring(0, 1).toUpperCase() + u.substr(1)] = function(e, n) {
                                return function(i, r) {
                                    t.displayTip(e, n)
                                }
                            }(n, i.tip) : this["$" + n + "Input"].on(u, function(e, n) {
                                return function() {
                                    t.displayTip(e, n)
                                }
                            }(n, i.tip))
                        }
                    }
                }
            },
            _bindInputEvents: function() {
                for (var t = this.inputNames || [], e = 0, n = t.length; e < n; ++e) {
                    var i = t[e],
                        r = i.substring(0, 1).toUpperCase() + i.substr(1),
                        a = this["$" + i + "Input"];
                    this._bindOnInput(a, i, r), this._bindOnBlur(a, i, r), this["bind" + r + "Events"] && this["bind" + r + "Events"]()
                }
            },
            _bindOnInput: function(t, e, n) {
                var r = this,
                    a = "on" + n + "Input",
                    o = i.getIEVersion(),
                    s = !0;
                !("oninput" in document.body) || o && 10 == o ? t[0].onpropertychange = function() {
                    document.activeElement == this && "value" == event.propertyName.toLowerCase() && (r["inputting" + n] = !0, r[a] && r[a](t, r.getValue(e)))
                } : t.on("input", function() {
                    r["inputting" + n] = !0, o && s && 11 == o ? s = !1 : r[a] && r[a](t, r.getValue(e))
                })
            },
            _bindOnBlur: function(t, e, n) {
                var i = this,
                    r = "on" + n + "Blur";
                this[r] && t.on("blur", function() {
                    i[r](t, i.getValue(e))
                })
            },
            _valid: function(t, n) {
                var i = n.substring(0, 1).toUpperCase() + n.substr(1);
                this["inputting" + i] = !1;
                var r = this.validator["valid" + i](t);
                "string" == typeof r && (r = {
                    result: !r,
                    message: r
                });
                var a = e.Deferred();
                this.dfdArray[n] = a, r.result ? this.displayMsg(n, "", a) : t || 1 === this.validModeWhenEmpty ? this.displayMsg(n, r.message, a) : this["$" + n + "Input"].removeClass(this.tipMsgClassName)
            },
            _validR: function(t, n) {
                var i = this,
                    r = n.substring(0, 1).toUpperCase() + n.substr(1);
                this["inputting" + r] = !1;
                var a = this.validator["valid" + r](t);
                "string" == typeof a && (a = {
                    result: !a,
                    message: a
                });
                var o = e.Deferred();
                if (this.dfdArray[n] = o, a.result) {
                    if ("" === t && this.noRemoteValidWhenEmpty)
                        return void this.displayMsg(n, "", o, a);
                    this.getRemoteValidRet(n, t).done(function(t) {
                        i.displayMsg(n, "", o, t)
                    }).fail(function(t) {
                        i.displayMsg(n, t, o)
                    })
                } else
                    t || 1 === this.validModeWhenEmpty ? this.displayMsg(n, a.message, o) : this["$" + n + "Input"].removeClass(this.tipMsgClassName)
            },
            getRemoteValidRet: function(t, e) {},
            displayMsg: function(t, e, n, i) {
                if (this._displayMsg)
                    return this._displayMsg(t, e, n, i);
                if (e) {
                    var r = this._createMsgHtml(t, e);
                    this["$" + t + "Msg"].addClass(this.errorMsgClassName).html(r).show(), this["$" + t + "Ok"].hide(), this.inputErrorClassName && this["$" + t + "Input"].addClass(this.inputErrorClassName), n && n.reject()
                } else
                    this["$" + t + "Msg"].removeClass(this.errorMsgClassName).html("").hide(), this["$" + t + "Ok"].show(), this.inputErrorClassName && this["$" + t + "Input"].removeClass(this.inputErrorClassName), n && n.resolve()
            },
            _createMsgHtml: function(t, e) {
                var n = e.message || e.ret_msg || e;
                if (this.msgTpl)
                    if ("string" == typeof this.msgTpl) {
                        var i = this.msgTpl;
                        n = i.replace(/\{\$msg\$\}/g, n)
                    } else
                        "function" == typeof this.msgTpl && (n = this.msgTpl(t, n));
                return n
            },
            displayTip: function(t, e) {
                if (this._displayTip)
                    return this._displayTip(t, e);
                var n = this._createTipHtml(t, e);
                n ? this["$" + t + "Msg"].removeClass(this.errorMsgClassName).addClass(this.tipMsgClassName).html(n).show() : this["$" + t + "Msg"].hide()
            },
            _createTipHtml: function(t, e) {
                var n = e;
                if ("function" == typeof e && (n = e(this.getValue(t))), !n)
                    return "";
                if (this.tipTpl)
                    if ("string" == typeof this.tipTpl) {
                        var i = this.tipTpl;
                        n = i.replace(/\{\$msg\$\}/g, n)
                    } else
                        "function" == typeof i && (n = this.tipTpl(t, n));
                return n
            },
            displayError: function(t) {
                if (this._displayError)
                    return this._displayError(t);
                if (t) {
                    var e = t.message || t.ret_msg || t;
                    "object" == typeof e && (e = "statusText" in e && "timeout" === e.statusText ? "请求超时" : "未知错误"), this.$errorMsg.text(e), this.$errorWrapper.show()
                } else
                    this.$errorMsg.text(""), this.$errorWrapper.hide()
            },
            _displaySubmitting: function(t) {
                this.submitting = t, t ? (this.$submitBtn.hide(), this.$submittingBtn.show()) : (this.$submitBtn.show(), this.$submittingBtn.hide())
            },
            _checkBeforeSubmit: function() {
                for (var t = this.validateNames || [], e = 0, n = t.length; e < n; ++e) {
                    var i = t[e],
                        r = i.substring(0, 1).toUpperCase() + i.substr(1);
                    this["valid" + r](this.getValue(i))
                }
            },
            getValue: function(t) {
                var n = this["$" + t + "Input"],
                    i = n.length;
                if (i > 0) {
                    var r = n.prop("type");
                    if ("radio" === r) {
                        var a = n.filter(":checked");
                        return a.length ? a.val() : ""
                    }
                    if ("checkbox" === r) {
                        var o = [];
                        return n.filter(":checked").each(function() {
                            o.push(e(this).val())
                        }), o.length ? o : ""
                    }
                }
                return "checkbox" === n.prop("type") ? n.is(":checked") ? n.val() : "" : n.val()
            },
            removeValidates: function(t) {
                if (!t || !this.validateNames)
                    return this;
                "string" == typeof t && (t = [t]);
                for (var e = 0, n = t.length; e < n; ++e) {
                    var i = t[e],
                        r = this.validateNames.indexOf(i);
                    r >= 0 && (this.validateNames.splice(r, 1), this.displayMsg(i, ""), this.dfdArray[i] = null)
                }
                return this
            },
            addValidates: function(t, e) {
                if (!t)
                    return this;
                this.validateNames || (this.validateNames = []), "string" == typeof t && (t = [t]);
                for (var n = 0, i = t.length; n < i; ++n) {
                    var r = t[n],
                        a = this.validateNames.indexOf(r);
                    if (a === -1 && (this.validateNames.push(r), e)) {
                        var o = r.substring(0, 1).toUpperCase() + r.substr(1);
                        this["valid" + o](this.getValue(r))
                    }
                }
                return this
            },
            _clearTipsMsg: function(t) {
                var e = t || this.validateNames || [];
                for (var n in e)
                    this["$" + e[n] + "Msg"].hide()
            },
            onSubmit: function() {
                if (!this.submitting) {
                    this.displayError(!1), this.clearTipsFlag && this._clearTipsMsg(), "afterSubmit" !== this.validMode || this._hasTriggerSubmit || (this.initDefaultValidations(), this._hasTriggerSubmit = !0), this.validModeWhenEmpty = 1, this._checkBeforeSubmit(), this.validModeWhenEmpty = 0;
                    for (var t = this, n = [], i = this.validateNames || [], r = 0, a = i.length; r < a; ++r)
                        n.push(this.dfdArray[i[r]]);
                    e.when.apply(e, n).done(function() {
                        var e = t.$form.serializeObject();
                        t._displaySubmitting(!0), t.submit(e).done(function(n) {
                            t.cb(n, e)
                        }).fail(function(e) {
                            t.displayError(e)
                        }).always(function() {
                            t._displaySubmitting(!1)
                        })
                    })
                }
            },
            submit: function(t) {},
            cb: e.noop
        })
    })
}, 
function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        "use strict";
        r = [n(4), n(2), n(12)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
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
                        "function" == typeof i && (this[n] = i(this.$searchRoot || this.$wrapper))
                }
                this.$wrapper.attr("data-ui-id", this._id)
            },
            remove: function() {
                this.$wrapper && this.$wrapper.remove()
            }
        })
    })
}, 
function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        "use strict";
        r = [n(4), n(13)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t, e) {
        "use strict";
        return t(null, {
            constructor: function(t) {
                if (t = t || {}, this.processRawProps(t), this.preMixinProps(t), this.mixinProps(t), this.rawNode && this.rawNode.getAttribute("data-ui-id"))
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
}, 
function(t, e, n) {
    var i,
        r;
    (function(a) {
        var o;
        o = "undefined" != typeof window ? window : a, function(a, o) {
            i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
        }(this, function() {
            if (o.__webpack_ui_mng)
                return o.__webpack_ui_mng;
            var t = 0,
                e = [],
                n = 0;
            return o.__webpack_ui_mng = {
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
            }, o.__webpack_ui_mng
        })
    }).call(e, function() {
        return this
    }())
}, 
function(t, e, n) {
    var i,
        r;
    !function(a, o) {
        i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(this, function() {
        return {
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
            isAndroid: function() {
                return !!navigator.userAgent.match(/Android/i)
            },
            isBlackBerry: function() {
                return !!navigator.userAgent.match(/BlackBerry/i)
            },
            isIOS: function() {
                return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            isWindows: function() {
                return navigator.platform.match(/win/i) && !this.isAndroid() && !this.isIOS()
            },
            isMac: function() {
                return navigator.platform.match(/mac/i) && !this.isAndroid() && !this.isIOS()
            },
            isWx: function() {
                return !!navigator.userAgent.match(/micromessenger/i)
            },
            isMobileQQ: function() {
                var t = navigator.userAgent;
                return /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(t) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(t)
            },
            isSafari: function() {
                return !!navigator.userAgent.match(/safari/i)
            },
            isNN: function() {
                return this.isMobileNN()
            },
            isMobileNN: function() {
                return !(!navigator.userAgent.match(/futunn/i) || !navigator.userAgent.match(/Android|iPhone|iPad|iPod/i))
            },
            isMacNN: function() {
                return !!navigator.userAgent.match(/futunn_mac/i)
            },
            isPCNN: function() {
                return !!navigator.userAgent.match(/futunn_pc/i)
            },
            isDesktopNN: function() {
                return !(!navigator.userAgent.match(/futunn/i) || navigator.userAgent.match(/Android|iPhone|iPad|iPod/i))
            },
            isNnPlatform: function() {
                return !!navigator.userAgent.match(/futunn/i)
            },
            isMobileUA: function() {
                return !!navigator.userAgent.match(/(blackberry|configuration\/cldc|hp |hp-|htc |htc_|htc-|iemobile|kindle|midp|mmp|motorola|mobile|nokia|opera mini|opera |Googlebot-Mobile|YahooSeeker\/M1A1-R2D2|android|iphone|ipod|mobi|palm|palmos|pocket|portalmmm|ppc;|smartphone|sonyericsson|sqh|spv|symbian|treo|up.browser|up.link|vodafone|windows ce|xda |xda_)/i)
            }
        }
    })
}, 
function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(16), n(17)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t, e) {
        return {
            validEmail: function(n) {
                n = t(n);
                var i = "";
                return /^((?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+)@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i.test(n) || (i = e.errorEmail), {
                    result: !i,
                    message: i,
                    nick: RegExp.$1
                }
            },
            validPassword: function(n) {
                n = t(n);
                var i = "";
                if (n)
                    if (n.length < 6)
                        i = e.passwdTooShort;
                    else if (n.length > 20)
                        i = e.passwdTooLong;
                    else if (/^(.)\1+$/.test(n))
                        i = e.invalidPasswd;
                    else {
                        var r = 0;
                        n.length > 0 && n.length < 21 && (n.match(/[a-z]/) && (r += 1), n.match(/[A-Z]/) && (r += 1), n.match(/[0-9]/) && (r += 1), n.match(/[^a-zA-Z0-9]/) && (r += 1)), r < 2 && (i = e.passwdCombination)
                    }
                else
                    i = e.passwdTooShort;
                return {
                    result: !i,
                    message: i
                }
            },
            validAgainPassword: function(t, n) {
                var i = "";
                return n !== t && (i = e.pwdNotSame), {
                    result: !i,
                    message: i
                }
            },
            getPwdTip: function(n) {
                n = t(n);
                var i = 0;
                n.length >= 1 && (n.match(/[a-zA-Z]/) && (i += 1), n.match(/[0-9]/) && (i += 1), n.match(/[~!@#$%^&*()]/) && (i += 1));
                var r = "";
                return r = 0 == i ? e.pwdTip1 : 1 == i ? e.pwdTip2 : 2 == i ? e.pwdTip3 : e.pwdTip4
            },
            getPwdMessage: function(t) {
                var n = "";
                if (t.length >= 6 && t.length <= 20) {
                    var i = 0;
                    t.length > 0 && t.length < 21 && (t.match(/[a-z]/) && (i += 1), t.match(/[A-Z]/) && (i += 1), t.match(/[0-9]/) && (i += 1), t.match(/[^a-zA-Z0-9]/) && (i += 1)), 2 === i ? n = e.pwdTip2 : 3 === i ? n = e.pwdTip3 : 4 === i && (n = e.pwdTip4)
                }
                return {
                    result: !n,
                    message: n
                }
            },
            validCaptcha: function(n) {
                n = t(n);
                var i = "";
                return /^[\da-zA-Z]{4}$/.test(n) || (i = e.errorCaptcha), {
                    result: !i,
                    message: i
                }
            },
            validInviteNo: function(n) {
                n = t(n);
                var i = "";
                return n += "", n && !/^\d{6,7}$/.test(n) && (i = e.errorInviteNo), {
                    result: !i,
                    message: i
                }
            },
            validPhone: function(n, i, r) {
                n = t(n);
                var a = n.length,
                    o = /^\d+$/,
                    s = "";
                return i = +i, a ? o.test(n) ? 86 === i && 11 !== a ? s = e.errorPhoneFormat : 886 === i && 9 !== a ? s = e.errorPhoneFormat : 852 !== i && 853 !== i || 8 === a ? 86 === i || 886 === i || 852 === i || 853 === i || r || (s = e.errorPhoneFormat) : s = e.errorPhoneFormat : s = e.invalidPhone : s = e.inputPhone, {
                    result: !s,
                    message: s
                }
            },
            validMsgCode: function(n) {
                n = t(n);
                var i = "";
                return n || (i = e.inputMsgCode), /^[\d]{6}$/.test(n) || (i = e.errorMsgcode), {
                    result: !i,
                    message: i
                }
            },
            validNick: function(n) {
                n = t(n);
                var i = "";
                return n ? /^[a-zA-Z0-9-_\u4e00-\u9fa5]{2,20}$/i.test(n) || (i = e.errorNick) : i = e.errorNick, {
                    result: !i,
                    message: i
                }
            },
            validAgreement: function(t) {
                var n = "";
                return t || (n = e.mustAgree), {
                    result: !n,
                    message: n
                }
            }
        }
    })
}, 
function(t, e, n) {
    var i,
        r;
    !function(a, o) {
        i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(this, function() {
        return function(t) {
            return t += "", t ? t.replace(/(^\s*)|(\s*$)/g, "") : ""
        }
    })
}, 
function(t, e) {
    var n = {
        __root: {
            errorEmail: "邮箱格式不正确，请重新输入",
            emailHasReg: "当前email已经被注册",
            errorNick: "昵称需2-20个字符，支持中英文，数字，下划线_，减号-",
            errorNickAlreadyUsed: "该昵称已被占用，请您修改后再提交",
            invalidNick: "当前昵称包含敏感内容",
            errorInviteNo: "请输入正确的牛牛号，如121618",
            inviteNoNotExist: "邀请人牛牛号不存在",
            passwdTooShort: "请输入至少6位的密码",
            passwdTooLong: "密码不要超过20个字符",
            invalidPasswd: "密码不能全为相同字符",
            passwdCombination: "6-20位字符，大写字母、小写字母、数字和符号至少包含2种",
            emailTip: "输入常用邮箱作为登录帐号",
            pwdTip1: "6-20位字符，可以是字母、数字、符号",
            pwdTip2: '<b style="color:#fe5f05;font-weight:normal">弱</b>',
            pwdTip3: '<b style="color:#ffc000;font-weight:normal">中</b>',
            pwdTip4: '<b style="color:#22ac38;font-weight:normal">强</b>',
            captchaTip: "4位字符，不区分大小写",
            errorCaptcha: "请输入正确的图形验证码",
            errorMsgcode: "请输入正确的短信验证码",
            changeBrowser: "提示：建议您更改浏览器设置",
            nickTip: "2-20个字符，支持中英文，数字，下划线_，减号-",
            mustAgree: "您需要同意遵守富途隐私声明和服务条款",
            emailTip2: "请输入您的常用邮箱，注册成功后您可以使用它登录账号",
            inviteNoTip: "选填，牛牛号为6-7位数字，开户后不可更改",
            regFail: "注册失败,请稍后再试",
            viewHowToSet: "查看如何设置",
            inputPhone: "请输入手机号码",
            invalidPhone: "手机号码不能含有非法字符",
            errorPhoneFormat: "手机格式错误",
            inputMsgCode: "请输入短信验证码",
            msgCodeStatus1: "发送验证码",
            msgCodeStatus2: "获取验证码",
            regAndBind: "注册并绑定",
            phoneRegistered: '当前手机号已经被注册,请直接<a href="/login" style="padding-left:5px;">登录</a>',
            againSend: "重新发送",
            pwdNotSame: "密码不一致",
            mustSendSms: "请先发送验证码验证手机号"
        },
        "__zh-hk": {
            errorEmail: "郵箱格式不正確，請重新輸入",
            emailHasReg: "當前email已經被註冊",
            errorNick: "暱稱需2-20個字符，支持中英文，數字，下劃線_，減號-",
            errorNickAlreadyUsed: "該昵稱已被占用，請您修改後再提交",
            invalidNick: "當前暱稱包含敏感內容",
            errorInviteNo: "請輸入正確的牛牛號，如121618",
            inviteNoNotExist: "邀請人牛牛號不存在",
            passwdTooShort: "請輸入至少6位的密碼",
            passwdTooLong: "密碼不要超過20個字符",
            invalidPasswd: "密碼不能全為相同字符",
            passwdCombination: "6-20位字符，大寫字母、小寫字母、數字和符號至少包含2種",
            emailTip: "輸入常用電郵作為登入賬號",
            pwdTip1: "6-20位字符，可以是字母、數字、符號",
            pwdTip2: '<b style="color:#fe5f05;font-weight:normal">弱</b>',
            pwdTip3: '<b style="color:#ffc000;font-weight:normal">中</b>',
            pwdTip4: '<b style="color:#22ac38;font-weight:normal">強</b>',
            captchaTip: "4位字符，不區分大小寫",
            errorCaptcha: "請輸入正確的圖形驗證碼",
            errorMsgcode: "請輸入正確的短信驗證碼",
            changeBrowser: "提示：建議您更改瀏覽器設置",
            nickTip: "2-20個字符，支持中英文，數字，下劃線_，減號-",
            mustAgree: "您需要同意遵守富途私隱聲明和服務條款",
            emailTip2: "請輸入您的常用電郵，註冊成功后您可以使用它登入帳號",
            inviteNoTip: "選填，牛牛號為6-7位數字，開戶后不可更改",
            viewHowToSet: "查看如何設置",
            inputPhone: "請輸入手提電話號碼",
            invalidPhone: "手提電話號碼不能含有非法字符",
            errorPhoneFormat: "手提電話號碼格式錯誤",
            inputMsgCode: "請輸入短信驗證碼",
            msgCodeStatus1: "發送驗證碼",
            msgCodeStatus2: "獲取驗證碼",
            regAndBind: "註冊並綁定",
            phoneRegistered: '當前手機號已經被註冊,請直接<a href="/login" style="padding-left:5px;">登錄</a>',
            againSend: "重新發送",
            pwdNotSame: "密碼不一致",
            mustSendSms: "請先發送驗證碼驗證手機號"
        }
    };
    n.init = function(t) {
        if (t || (t = window._i18n && window._i18n.locale ? window._i18n.locale : "root"), Object.assign)
            Object.assign(this, this.__root, this["__" + t]);
        else {
            var e = this["__" + t] || this.__root;
            if (e)
                for (var n in e)
                    this[n] = e[n]
        }
    }, n.init(), t.exports = n
}, , 
function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(2)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t) {
        return {
            codeName: "code",
            msgName: "message",
            dataName: "",
            defaultErrorMsg: "网络异常，请稍后再试",
            send: function(e, n, i, r, a) {
                var o = t.Deferred();
                return n = n || this.codeName, i = i || this.msgName, a = a || this.dataName, r = r || this.defaultErrorMsg, t.ajax(t.extend({
                    type: "GET",
                    dataType: "json",
                    cache: !1
                }, e)).then(function(t) {
                    n && +t[n] ? o.reject(t) : o.resolve(a && t[a] || t)
                }, function() {
                    var t = {};
                    t[i] = r, o.reject(t)
                }), o
            },
            get: function(e, n, i, r, a) {
                return this.send(t.extend({}, e, {
                    type: "GET"
                }), n, i, r, a)
            },
            post: function(e, n, i, r, a) {
                return this.send(t.extend({}, e, {
                    type: "POST"
                }), n, i, r, a)
            }
        }
    })
}, , 
function(t, e, n) {
    var i,
        r;
    i = [n(2)], r = function(t) {
        return {
            parseUrl: function(e) {
                var n = {},
                    i = e.substr(1).split("&");
                return t.each(i, function() {
                    var t = decodeURIComponent(this.split("=")[0]),
                        e = decodeURIComponent(this.split("=")[1]);
                    n[t] = e
                }), n
            },
            transformRequest: function(t) {
                var e = [];
                for (var n in t)
                    e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e.join("&")
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, 
function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(23), n(24), n(26), n(27)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t, e, n, i) {
        return {
            _num: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            get: function() {
                var e = t.getItem("cipher_device_id");
                if (!e) {
                    e = (+new Date + "").substring(0, 10);
                    var n = Math.floor(1e5 * (Math.random() + this._num[Math.floor(100 * Math.random() % 9)]));
                    e += n, e.length > 16 && (e = e.substring(0, 16));
                    var i = this._getRootDomain() || "";
                    t.setItem("cipher_device_id", e, 1 / 0, "/", i)
                }
                return e
            },
            getBuffer: function() {
                for (var t = this.get(), e = "", r = 0, a = t.length; r < a; ++r)
                    e += n("c", i(t[r]));
                return e
            },
            _getRootDomain: function() {
                var t = document.domain || window.location.hostname,
                    e = t.split(".");
                return e.slice(-2).join(".")
            }
        }
    })
}, 
function(t, e, n) {
    var i,
        r;
    !function(a, o) {
        i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(this, function() {
        "use strict";
        return {
            getItem: function(t) {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
            },
            setItem: function(t, e, n, i, r, a) {
                if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t))
                    return !1;
                var o = "";
                if (n)
                    switch (n.constructor) {
                    case Number:
                        o = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                        break;
                    case String:
                        o = "; expires=" + n;
                        break;
                    case Date:
                        o = "; expires=" + n.toUTCString()
                    }
                return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + o + (r ? "; domain=" + r : "") + (i ? "; path=" + i : "") + (a ? "; secure" : ""), !0
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
    })
}, 
function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(25))
    }(this, function(t) {
        return function(e) {
            function n(t, e, n, i, r, a, o) {
                var s = t + (e & n | ~e & i) + r + o;
                return (s << a | s >>> 32 - a) + e
            }
            function i(t, e, n, i, r, a, o) {
                var s = t + (e & i | n & ~i) + r + o;
                return (s << a | s >>> 32 - a) + e
            }
            function r(t, e, n, i, r, a, o) {
                var s = t + (e ^ n ^ i) + r + o;
                return (s << a | s >>> 32 - a) + e
            }
            function a(t, e, n, i, r, a, o) {
                var s = t + (n ^ (e | ~i)) + r + o;
                return (s << a | s >>> 32 - a) + e
            }
            var o = t,
                s = o.lib,
                u = s.WordArray,
                l = s.Hasher,
                c = o.algo,
                p = [];
            !function() {
                for (var t = 0; t < 64; t++)
                    p[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
            }();
            var h = c.MD5 = l.extend({
                _doReset: function() {
                    this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(t, e) {
                    for (var o = 0; o < 16; o++) {
                        var s = e + o,
                            u = t[s];
                        t[s] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                    }
                    var l = this._hash.words,
                        c = t[e + 0],
                        h = t[e + 1],
                        f = t[e + 2],
                        v = t[e + 3],
                        d = t[e + 4],
                        x = t[e + 5],
                        m = t[e + 6],
                        y = t[e + 7],
                        g = t[e + 8],
                        w = t[e + 9],
                        _ = t[e + 10],
                        b = t[e + 11],
                        C = t[e + 12],
                        k = t[e + 13],
                        S = t[e + 14],
                        N = t[e + 15],
                        $ = l[0],
                        M = l[1],
                        T = l[2],
                        E = l[3];
                    $ = n($, M, T, E, c, 7, p[0]), E = n(E, $, M, T, h, 12, p[1]), T = n(T, E, $, M, f, 17, p[2]), M = n(M, T, E, $, v, 22, p[3]), $ = n($, M, T, E, d, 7, p[4]), E = n(E, $, M, T, x, 12, p[5]), T = n(T, E, $, M, m, 17, p[6]), M = n(M, T, E, $, y, 22, p[7]), $ = n($, M, T, E, g, 7, p[8]), E = n(E, $, M, T, w, 12, p[9]), T = n(T, E, $, M, _, 17, p[10]), M = n(M, T, E, $, b, 22, p[11]), $ = n($, M, T, E, C, 7, p[12]), E = n(E, $, M, T, k, 12, p[13]), T = n(T, E, $, M, S, 17, p[14]), M = n(M, T, E, $, N, 22, p[15]), $ = i($, M, T, E, h, 5, p[16]), E = i(E, $, M, T, m, 9, p[17]), T = i(T, E, $, M, b, 14, p[18]), M = i(M, T, E, $, c, 20, p[19]), $ = i($, M, T, E, x, 5, p[20]), E = i(E, $, M, T, _, 9, p[21]), T = i(T, E, $, M, N, 14, p[22]), M = i(M, T, E, $, d, 20, p[23]), $ = i($, M, T, E, w, 5, p[24]), E = i(E, $, M, T, S, 9, p[25]), T = i(T, E, $, M, v, 14, p[26]), M = i(M, T, E, $, g, 20, p[27]), $ = i($, M, T, E, k, 5, p[28]), E = i(E, $, M, T, f, 9, p[29]), T = i(T, E, $, M, y, 14, p[30]), M = i(M, T, E, $, C, 20, p[31]), $ = r($, M, T, E, x, 4, p[32]), E = r(E, $, M, T, g, 11, p[33]), T = r(T, E, $, M, b, 16, p[34]), M = r(M, T, E, $, S, 23, p[35]), $ = r($, M, T, E, h, 4, p[36]), E = r(E, $, M, T, d, 11, p[37]), T = r(T, E, $, M, y, 16, p[38]), M = r(M, T, E, $, _, 23, p[39]), $ = r($, M, T, E, k, 4, p[40]), E = r(E, $, M, T, c, 11, p[41]), T = r(T, E, $, M, v, 16, p[42]), M = r(M, T, E, $, m, 23, p[43]), $ = r($, M, T, E, w, 4, p[44]), E = r(E, $, M, T, C, 11, p[45]), T = r(T, E, $, M, N, 16, p[46]), M = r(M, T, E, $, f, 23, p[47]), $ = a($, M, T, E, c, 6, p[48]), E = a(E, $, M, T, y, 10, p[49]), T = a(T, E, $, M, S, 15, p[50]), M = a(M, T, E, $, x, 21, p[51]), $ = a($, M, T, E, C, 6, p[52]), E = a(E, $, M, T, v, 10, p[53]), T = a(T, E, $, M, _, 15, p[54]), M = a(M, T, E, $, h, 21, p[55]), $ = a($, M, T, E, g, 6, p[56]), E = a(E, $, M, T, N, 10, p[57]), T = a(T, E, $, M, m, 15, p[58]), M = a(M, T, E, $, k, 21, p[59]), $ = a($, M, T, E, d, 6, p[60]), E = a(E, $, M, T, b, 10, p[61]), T = a(T, E, $, M, f, 15, p[62]), M = a(M, T, E, $, w, 21, p[63]), l[0] = l[0] + $ | 0, l[1] = l[1] + M | 0, l[2] = l[2] + T | 0, l[3] = l[3] + E | 0
                },
                _doFinalize: function() {
                    var t = this._data,
                        n = t.words,
                        i = 8 * this._nDataBytes,
                        r = 8 * t.sigBytes;
                    n[r >>> 5] |= 128 << 24 - r % 32;
                    var a = e.floor(i / 4294967296),
                        o = i;
                    n[(r + 64 >>> 9 << 4) + 15] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n[(r + 64 >>> 9 << 4) + 14] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
                    for (var s = this._hash, u = s.words, l = 0; l < 4; l++) {
                        var c = u[l];
                        u[l] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                    }
                    return s
                },
                clone: function() {
                    var t = l.clone.call(this);
                    return t._hash = this._hash.clone(), t
                }
            });
            o.MD5 = l._createHelper(h), o.HmacMD5 = l._createHmacHelper(h)
        }(Math), t.MD5
    })
}, 
function(t, e, n) {
    !function(n, i) {
        t.exports = e = i()
    }(this, function() {
        var t = t || function(t, e) {
            var n = Object.create || function() {
                    function t() {}
                    return function(e) {
                        var n;
                        return t.prototype = e, n = new t, t.prototype = null, n
                    }
                }(),
                i = {},
                r = i.lib = {},
                a = r.Base = function() {
                    return {
                        extend: function(t) {
                            var e = n(this);
                            return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                                e.$super.init.apply(this, arguments)
                            }), e.init.prototype = e, e.$super = this, e
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
                o = r.WordArray = a.extend({
                    init: function(t, n) {
                        t = this.words = t || [], n != e ? this.sigBytes = n : this.sigBytes = 4 * t.length
                    },
                    toString: function(t) {
                        return (t || u).stringify(this)
                    },
                    concat: function(t) {
                        var e = this.words,
                            n = t.words,
                            i = this.sigBytes,
                            r = t.sigBytes;
                        if (this.clamp(), i % 4)
                            for (var a = 0; a < r; a++) {
                                var o = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                                e[i + a >>> 2] |= o << 24 - (i + a) % 4 * 8
                            }
                        else
                            for (var a = 0; a < r; a += 4)
                                e[i + a >>> 2] = n[a >>> 2];
                        return this.sigBytes += r, this
                    },
                    clamp: function() {
                        var e = this.words,
                            n = this.sigBytes;
                        e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4)
                    },
                    clone: function() {
                        var t = a.clone.call(this);
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
                            }, a = 0; a < e; a += 4) {
                            var s = r(4294967296 * (n || t.random()));
                            n = 987654071 * s(), i.push(4294967296 * s() | 0)
                        }
                        return new o.init(i, e)
                    }
                }),
                s = i.enc = {},
                u = s.Hex = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                            var a = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            i.push((a >>> 4).toString(16)), i.push((15 & a).toString(16))
                        }
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], i = 0; i < e; i += 2)
                            n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                        return new o.init(n, e / 2)
                    }
                },
                l = s.Latin1 = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, i = [], r = 0; r < n; r++) {
                            var a = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            i.push(String.fromCharCode(a))
                        }
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], i = 0; i < e; i++)
                            n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                        return new o.init(n, e)
                    }
                },
                c = s.Utf8 = {
                    stringify: function(t) {
                        try {
                            return decodeURIComponent(escape(l.stringify(t)))
                        } catch (t) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(t) {
                        return l.parse(unescape(encodeURIComponent(t)))
                    }
                },
                p = r.BufferedBlockAlgorithm = a.extend({
                    reset: function() {
                        this._data = new o.init, this._nDataBytes = 0
                    },
                    _append: function(t) {
                        "string" == typeof t && (t = c.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                    },
                    _process: function(e) {
                        var n = this._data,
                            i = n.words,
                            r = n.sigBytes,
                            a = this.blockSize,
                            s = 4 * a,
                            u = r / s;
                        u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0);
                        var l = u * a,
                            c = t.min(4 * l, r);
                        if (l) {
                            for (var p = 0; p < l; p += a)
                                this._doProcessBlock(i, p);
                            var h = i.splice(0, l);
                            n.sigBytes -= c
                        }
                        return new o.init(h, c)
                    },
                    clone: function() {
                        var t = a.clone.call(this);
                        return t._data = this._data.clone(), t
                    },
                    _minBufferSize: 0
                }),
                h = (r.Hasher = p.extend({
                    cfg: a.extend(),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t), this.reset()
                    },
                    reset: function() {
                        p.reset.call(this), this._doReset()
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
                            return new h.HMAC.init(t, n).finalize(e)
                        }
                    }
                }), i.algo = {});
            return i
        }(Math);
        return t
    })
}, 
function(t, e, n) {
    var i,
        r;
    !function(a, o) {
        i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(this, function() {
        return function(t) {
            for (var e, n, i, r, a, o, s, u, l, c, p, h, f, v, d, x, m, y, g, w, _, b, C, k = 0, S = 1, N = "", $ = "", M = 0, T = []; k < t.length;) {
                for (e = t.charAt(k), n = "", k++; k < t.length && null !== t.charAt(k).match(/[\d\*]/);)
                    n += t.charAt(k), k++;
                switch ("" === n && (n = "1"), e) {
                case "a":
                case "A":
                    if ("undefined" == typeof arguments[S])
                        throw new Error("Warning:  pack() Type " + e + ": not enough arguments");
                    for ($ = String(arguments[S]), "*" === n && (n = $.length), M = 0; M < n; M++)
                        N += "undefined" == typeof $[M] ? "a" === e ? String.fromCharCode(0) : " " : $[M];
                    S++;
                    break;
                case "h":
                case "H":
                    if ("undefined" == typeof arguments[S])
                        throw new Error("Warning: pack() Type " + e + ": not enough arguments");
                    if ($ = arguments[S], "*" === n && (n = $.length), n > $.length)
                        throw new Error("Warning: pack() Type " + e + ": not enough characters in string");
                    for (M = 0; M < n; M += 2)
                        i = $[M], i += M + 1 >= n || "undefined" == typeof $[M + 1] ? "0" : $[M + 1], "h" === e && (i = i[1] + i[0]), N += String.fromCharCode(parseInt(i, 16));
                    S++;
                    break;
                case "c":
                case "C":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(arguments[S]), S++;
                    break;
                case "s":
                case "S":
                case "v":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(255 & arguments[S]), N += String.fromCharCode(arguments[S] >> 8 & 255), S++;
                    break;
                case "n":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning: pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(255 & arguments[S]), S++;
                    break;
                case "i":
                case "I":
                case "l":
                case "L":
                case "V":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(255 & arguments[S]), N += String.fromCharCode(arguments[S] >> 8 & 255), N += String.fromCharCode(arguments[S] >> 16 & 255), N += String.fromCharCode(arguments[S] >> 24 & 255), S++;
                    break;
                case "N":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(arguments[S] >> 24 & 255), N += String.fromCharCode(arguments[S] >> 16 & 255), N += String.fromCharCode(arguments[S] >> 8 & 255), N += String.fromCharCode(255 & arguments[S]), S++;
                    break;
                case "f":
                case "d":
                    if (r = 23, a = 8, "d" === e && (r = 52, a = 11), "*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++) {
                        for ($ = arguments[S], s = Math.pow(2, a - 1) - 1, u = -s + 1, l = s, c = u - r, p = isNaN(x = parseFloat($)) || x === -(1 / 0) || x === +(1 / 0) ? x : 0, h = 0, f = 2 * s + 1 + r + 3, v = new Array(f), d = (x = 0 !== p ? 0 : x) < 0, x = Math.abs(x), m = Math.floor(x), y = x - m, b = f; b;)
                            v[--b] = 0;
                        for (b = s + 2; m && b;)
                            v[--b] = m % 2, m = Math.floor(m / 2);
                        for (b = s + 1; y > 0 && b; --y)
                            v[++b] = ((y *= 2) >= 1) - 0;
                        for (b = -1; ++b < f && !v[b];)
                            ;
                        if (v[(g = r - 1 + (b = (h = s + 1 - b) >= u && h <= l ? b + 1 : s + 1 - (h = u - 1))) + 1]) {
                            if (!(w = v[g]))
                                for (_ = g + 2; !w && _ < f; w = v[_++])
                                    ;
                            for (_ = g + 1; w && --_ >= 0; (v[_] = !v[_] - 0) && (w = 0))
                                ;
                        }
                        for (b = b - 2 < 0 ? -1 : b - 3; ++b < f && !v[b];)
                            ;
                        for ((h = s + 1 - b) >= u && h <= l ? ++b : h < u && (b = s + 1 - (h = u - 1)), (m || 0 !== p) && (h = l + 1, b = s + 2, p === -(1 / 0) ? d = 1 : isNaN(p) && (v[b] = 1)), x = Math.abs(h + s), C = "", _ = a + 1; --_;)
                            C = x % 2 + C, x = x >>= 1;
                        for (x = 0, _ = 0, b = (C = (d ? "1" : "0") + C + v.slice(b, b + r).join("")).length, T = []; b;)
                            x += (1 << _) * C.charAt(--b), 7 === _ && (T[T.length] = String.fromCharCode(x), x = 0), _ = (_ + 1) % 8;
                        T[T.length] = x ? String.fromCharCode(x) : "", N += T.join(""), S++
                    }
                    break;
                case "x":
                    if ("*" === n)
                        throw new Error("Warning: pack(): Type x: '*' ignored");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(0);
                    break;
                case "X":
                    if ("*" === n)
                        throw new Error("Warning: pack(): Type X: '*' ignored");
                    for (M = 0; M < n; M++) {
                        if (0 === N.length)
                            throw new Error("Warning: pack(): Type X: outside of string");
                        N = N.substring(0, N.length - 1)
                    }
                    break;
                case "@":
                    if ("*" === n)
                        throw new Error("Warning: pack(): Type X: '*' ignored");
                    if (n > N.length)
                        for (o = n - N.length, M = 0; M < o; M++)
                            N += String.fromCharCode(0);
                    n < N.length && (N = N.substring(0, n));
                    break;
                default:
                    throw new Error("Warning:  pack() Type " + e + ": unknown format code")
                }
            }
            if (S < arguments.length)
                throw new Error("Warning: pack(): " + (arguments.length - S) + " arguments unused");
            return N
        }
    })
}, 
function(t, e, n) {
    var i,
        r;
    !function(a, o) {
        i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(this, function() {
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
    })
}, 
function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var r = n(29),
        a = i(r),
        o = n(96);
    window.pvuvConfig && "object" === (0, a.default)(window.pvuvConfig) || (window.pvuvConfig = {
        serverUrl: "https://report.futunn.com/client_report",
        data: {
            uid: 0,
            open_id: 0
        }
    }), (0, o.reportPvuv)(window.pvuvConfig, function(t) {
        t && console.log(t)
    })
}, 
function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var r = n(30),
        a = i(r),
        o = n(81),
        s = i(o),
        u = "function" == typeof s.default && "symbol" == typeof a.default ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : typeof t
        };
    e.default = "function" == typeof s.default && "symbol" === u(a.default) ? function(t) {
        return "undefined" == typeof t ? "undefined" : u(t)
    } : function(t) {
        return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : u(t)
    }
}, 
function(t, e, n) {
    t.exports = {
        default: n(31),
        __esModule: !0
    }
}, 
function(t, e, n) {
    n(32), n(76), t.exports = n(80).f("iterator")
}, 
function(t, e, n) {
    "use strict";
    var i = n(33)(!0);
    n(36)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, 
    function() {
        var t,
            e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, 
function(t, e, n) {
    var i = n(34),
        r = n(35);
    t.exports = function(t) {
        return function(e, n) {
            var a,
                o,
                s = String(r(e)),
                u = i(n),
                l = s.length;
            return u < 0 || u >= l ? t ? "" : void 0 : (a = s.charCodeAt(u), a < 55296 || a > 56319 || u + 1 === l || (o = s.charCodeAt(u + 1)) < 56320 || o > 57343 ? t ? s.charAt(u) : a : t ? s.slice(u, u + 2) : (a - 55296 << 10) + (o - 56320) + 65536)
        }
    }
}, 
function(t, e) {
    var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, 
function(t, e) {
    t.exports = function(t) {
        if (void 0 == t)
            throw TypeError("Can't call method on  " + t);
        return t
    }
}, 
function(t, e, n) {
    "use strict";
    var i = n(37),
        r = n(38),
        a = n(54),
        o = n(43),
        s = n(55),
        u = n(56),
        l = n(72),
        c = n(74),
        p = n(73)("iterator"),
        h = !([].keys && "next" in [].keys()),
        f = "@@iterator",
        v = "keys",
        d = "values",
        x = function() {
            return this
        };
    t.exports = function(t, e, n, m, y, g, w) {
        u(n, e, m);
        var _,
            b,
            C,
            k = function(t) {
                if (!h && t in M)
                    return M[t];
                switch (t) {
                case v:
                    return function() {
                        return new n(this, t)
                    };
                case d:
                    return function() {
                        return new n(this, t)
                    }
                }
                return function() {
                    return new n(this, t)
                }
            },
            S = e + " Iterator",
            N = y == d,
            $ = !1,
            M = t.prototype,
            T = M[p] || M[f] || y && M[y],
            E = T || k(y),
            I = y ? N ? k("entries") : E : void 0,
            P = "Array" == e ? M.entries || T : T;
        if (P && (C = c(P.call(new t)), C !== Object.prototype && C.next && (l(C, S, !0), i || "function" == typeof C[p] || o(C, p, x))), N && T && T.name !== d && ($ = !0, E = function() {
            return T.call(this)
        }), i && !w || !h && !$ && M[p] || o(M, p, E), s[e] = E, s[S] = x, y)
            if (_ = {
                values: N ? E : k(d),
                keys: g ? E : k(v),
                entries: I
            }, w)
                for (b in _)
                    b in M || a(M, b, _[b]);
            else
                r(r.P + r.F * (h || $), e, _);
        return _
    }
}, 
function(t, e) {
    t.exports = !0
}, 
function(t, e, n) {
    var i = n(39),
        r = n(40),
        a = n(41),
        o = n(43),
        s = n(53),
        u = "prototype",
        l = function(t, e, n) {
            var c,
                p,
                h,
                f = t & l.F,
                v = t & l.G,
                d = t & l.S,
                x = t & l.P,
                m = t & l.B,
                y = t & l.W,
                g = v ? r : r[e] || (r[e] = {}),
                w = g[u],
                _ = v ? i : d ? i[e] : (i[e] || {})[u];
            v && (n = e);
            for (c in n)
                p = !f && _ && void 0 !== _[c], p && s(g, c) || (h = p ? _[c] : n[c], g[c] = v && "function" != typeof _[c] ? n[c] : m && p ? a(h, i) : y && _[c] == h ? function(t) {
                    var e = function(e, n, i) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                            }
                            return new t(e, n, i)
                        }
                        return t.apply(this, arguments)
                    };
                    return e[u] = t[u], e
                }(h) : x && "function" == typeof h ? a(Function.call, h) : h, x && ((g.virtual || (g.virtual = {}))[c] = h, t & l.R && w && !w[c] && o(w, c, h)))
        };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
}, 
function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, 
function(t, e) {
    var n = t.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = n)
}, 
function(t, e, n) {
    var i = n(42);
    t.exports = function(t, e, n) {
        if (i(t), void 0 === e)
            return t;
        switch (n) {
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
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, 
function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
        return t
    }
}, 
function(t, e, n) {
    var i = n(44),
        r = n(52);
    t.exports = n(48) ? function(t, e, n) {
        return i.f(t, e, r(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, 
function(t, e, n) {
    var i = n(45),
        r = n(47),
        a = n(51),
        o = Object.defineProperty;
    e.f = n(48) ? Object.defineProperty : function(t, e, n) {
        if (i(t), e = a(e, !0), i(n), r)
            try {
                return o(t, e, n)
            } catch (t) {}
        if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, 
function(t, e, n) {
    var i = n(46);
    t.exports = function(t) {
        if (!i(t))
            throw TypeError(t + " is not an object!");
        return t
    }
}, 
function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, 
function(t, e, n) {
    t.exports = !n(48) && !n(49)(function() {
        return 7 != Object.defineProperty(n(50)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, 
function(t, e, n) {
    t.exports = !n(49)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, 
function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, 
function(t, e, n) {
    var i = n(46),
        r = n(39).document,
        a = i(r) && i(r.createElement);
    t.exports = function(t) {
        return a ? r.createElement(t) : {}
    }
}, 
function(t, e, n) {
    var i = n(46);
    t.exports = function(t, e) {
        if (!i(t))
            return t;
        var n,
            r;
        if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t)))
            return r;
        if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t)))
            return r;
        if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, 
function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, 
function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, 
function(t, e, n) {
    t.exports = n(43)
}, 
function(t, e) {
    t.exports = {}
}, 
function(t, e, n) {
    "use strict";
    var i = n(57),
        r = n(52),
        a = n(72),
        o = {};
    n(43)(o, n(73)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = i(o, {
            next: r(1, n)
        }), a(t, e + " Iterator")
    }
}, 
function(t, e, n) {
    var i = n(45),
        r = n(58),
        a = n(70),
        o = n(67)("IE_PROTO"),
        s = function() {},
        u = "prototype",
        l = function() {
            var t,
                e = n(50)("iframe"),
                i = a.length,
                r = "<",
                o = ">";
            for (e.style.display = "none", n(71).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(r + "script" + o + "document.F=Object" + r + "/script" + o), t.close(), l = t.F; i--;)
                delete l[u][a[i]];
            return l()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (s[u] = i(t), n = new s, s[u] = null, n[o] = t) : n = l(), void 0 === e ? n : r(n, e)
    }
}, 
function(t, e, n) {
    var i = n(44),
        r = n(45),
        a = n(59);
    t.exports = n(48) ? Object.defineProperties : function(t, e) {
        r(t);
        for (var n, o = a(e), s = o.length, u = 0; s > u;)
            i.f(t, n = o[u++], e[n]);
        return t
    }
}, 
function(t, e, n) {
    var i = n(60),
        r = n(70);
    t.exports = Object.keys || function(t) {
        return i(t, r)
    }
}, 
function(t, e, n) {
    var i = n(53),
        r = n(61),
        a = n(64)(!1),
        o = n(67)("IE_PROTO");
    t.exports = function(t, e) {
        var n,
            s = r(t),
            u = 0,
            l = [];
        for (n in s)
            n != o && i(s, n) && l.push(n);
        for (; e.length > u;)
            i(s, n = e[u++]) && (~a(l, n) || l.push(n));
        return l
    }
}, 
function(t, e, n) {
    var i = n(62),
        r = n(35);
    t.exports = function(t) {
        return i(r(t))
    }
}, 
function(t, e, n) {
    var i = n(63);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var i = n(61),
        r = n(65),
        a = n(66);
    t.exports = function(t) {
        return function(e, n, o) {
            var s,
                u = i(e),
                l = r(u.length),
                c = a(o, l);
            if (t && n != n) {
                for (; l > c;)
                    if (s = u[c++], s != s)
                        return !0
            } else
                for (; l > c; c++)
                    if ((t || c in u) && u[c] === n)
                        return t || c || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    var i = n(34),
        r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var i = n(34),
        r = Math.max,
        a = Math.min;
    t.exports = function(t, e) {
        return t = i(t), t < 0 ? r(t + e, 0) : a(t, e)
    }
}, function(t, e, n) {
    var i = n(68)("keys"),
        r = n(69);
    t.exports = function(t) {
        return i[t] || (i[t] = r(t))
    }
}, function(t, e, n) {
    var i = n(40),
        r = n(39),
        a = "__core-js_shared__",
        o = r[a] || (r[a] = {});
    (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: i.version,
        mode: n(37) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    var n = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var i = n(39).document;
    t.exports = i && i.documentElement
}, function(t, e, n) {
    var i = n(44).f,
        r = n(53),
        a = n(73)("toStringTag");
    t.exports = function(t, e, n) {
        t && !r(t = n ? t : t.prototype, a) && i(t, a, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var i = n(68)("wks"),
        r = n(69),
        a = n(39).Symbol,
        o = "function" == typeof a,
        s = t.exports = function(t) {
            return i[t] || (i[t] = o && a[t] || (o ? a : r)("Symbol." + t))
        };
    s.store = i
}, function(t, e, n) {
    var i = n(53),
        r = n(75),
        a = n(67)("IE_PROTO"),
        o = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = r(t), i(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
    }
}, function(t, e, n) {
    var i = n(35);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, e, n) {
    n(77);
    for (var i = n(39), r = n(43), a = n(55), o = n(73)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
        var l = s[u],
            c = i[l],
            p = c && c.prototype;
        p && !p[o] && r(p, o, l), a[l] = a.Array
    }
}, function(t, e, n) {
    "use strict";
    var i = n(78),
        r = n(79),
        a = n(55),
        o = n(61);
    t.exports = n(36)(Array, "Array", function(t, e) {
        this._t = o(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) : r(0, [n, t[n]])
    }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
}, function(t, e) {
    t.exports = function() {}
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    e.f = n(73)
}, function(t, e, n) {
    t.exports = {
        default: n(82),
        __esModule: !0
    }
}, function(t, e, n) {
    n(83), n(93), n(94), n(95), t.exports = n(40).Symbol
}, function(t, e, n) {
    "use strict";
    var i = n(39),
        r = n(53),
        a = n(48),
        o = n(38),
        s = n(54),
        u = n(84).KEY,
        l = n(49),
        c = n(68),
        p = n(72),
        h = n(69),
        f = n(73),
        v = n(80),
        d = n(85),
        x = n(86),
        m = n(89),
        y = n(45),
        g = n(46),
        w = n(61),
        _ = n(51),
        b = n(52),
        C = n(57),
        k = n(90),
        S = n(92),
        N = n(44),
        $ = n(59),
        M = S.f,
        T = N.f,
        E = k.f,
        I = i.Symbol,
        P = i.JSON,
        O = P && P.stringify,
        A = "prototype",
        R = f("_hidden"),
        j = f("toPrimitive"),
        B = {}.propertyIsEnumerable,
        W = c("symbol-registry"),
        D = c("symbols"),
        U = c("op-symbols"),
        F = Object[A],
        z = "function" == typeof I,
        H = i.QObject,
        L = !H || !H[A] || !H[A].findChild,
        q = a && l(function() {
            return 7 != C(T({}, "a", {
                get: function() {
                    return T(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var i = M(F, e);
            i && delete F[e], T(t, e, n), i && t !== F && T(F, e, i)
        } : T,
        V = function(t) {
            var e = D[t] = C(I[A]);
            return e._k = t, e
        },
        X = z && "symbol" == typeof I.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof I
        },
        G = function(t, e, n) {
            return t === F && G(U, e, n), y(t), e = _(e, !0), y(n), r(D, e) ? (n.enumerable ? (r(t, R) && t[R][e] && (t[R][e] = !1), n = C(n, {
                enumerable: b(0, !1)
            })) : (r(t, R) || T(t, R, b(1, {})), t[R][e] = !0), q(t, e, n)) : T(t, e, n)
        },
        K = function(t, e) {
            y(t);
            for (var n, i = x(e = w(e)), r = 0, a = i.length; a > r;)
                G(t, n = i[r++], e[n]);
            return t
        },
        Q = function(t, e) {
            return void 0 === e ? C(t) : K(C(t), e)
        },
        J = function(t) {
            var e = B.call(this, t = _(t, !0));
            return !(this === F && r(D, t) && !r(U, t)) && (!(e || !r(this, t) || !r(D, t) || r(this, R) && this[R][t]) || e)
        },
        Z = function(t, e) {
            if (t = w(t), e = _(e, !0), t !== F || !r(D, e) || r(U, e)) {
                var n = M(t, e);
                return !n || !r(D, e) || r(t, R) && t[R][e] || (n.enumerable = !0), n
            }
        },
        Y = function(t) {
            for (var e, n = E(w(t)), i = [], a = 0; n.length > a;)
                r(D, e = n[a++]) || e == R || e == u || i.push(e);
            return i
        },
        tt = function(t) {
            for (var e, n = t === F, i = E(n ? U : w(t)), a = [], o = 0; i.length > o;)
                !r(D, e = i[o++]) || n && !r(F, e) || a.push(D[e]);
            return a
        };
    z || (I = function() {
        if (this instanceof I)
            throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === F && e.call(U, n), r(this, R) && r(this[R], t) && (this[R][t] = !1), q(this, t, b(1, n))
            };
        return a && L && q(F, t, {
            configurable: !0,
            set: e
        }), V(t)
    }, s(I[A], "toString", function() {
        return this._k
    }), S.f = Z, N.f = G, n(91).f = k.f = Y, n(88).f = J, n(87).f = tt, a && !n(37) && s(F, "propertyIsEnumerable", J, !0), v.f = function(t) {
        return V(f(t))
    }), o(o.G + o.W + o.F * !z, {
        Symbol: I
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;)
        f(et[nt++]);
    for (var it = $(f.store), rt = 0; it.length > rt;)
        d(it[rt++]);
    o(o.S + o.F * !z, "Symbol", {
        for: function(t) {
            return r(W, t += "") ? W[t] : W[t] = I(t)
        },
        keyFor: function(t) {
            if (!X(t))
                throw TypeError(t + " is not a symbol!");
            for (var e in W)
                if (W[e] === t)
                    return e
        },
        useSetter: function() {
            L = !0
        },
        useSimple: function() {
            L = !1
        }
    }), o(o.S + o.F * !z, "Object", {
        create: Q,
        defineProperty: G,
        defineProperties: K,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: Y,
        getOwnPropertySymbols: tt
    }), P && o(o.S + o.F * (!z || l(function() {
        var t = I();
        return "[null]" != O([t]) || "{}" != O({
                a: t
            }) || "{}" != O(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, i = [t], r = 1; arguments.length > r;)
                i.push(arguments[r++]);
            if (n = e = i[1], (g(e) || void 0 !== t) && !X(t))
                return m(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !X(e))
                        return e
                }), i[1] = e, O.apply(P, i)
        }
    }), I[A][j] || n(43)(I[A], j, I[A].valueOf), p(I, "Symbol"), p(Math, "Math", !0), p(i.JSON, "JSON", !0)
}, function(t, e, n) {
    var i = n(69)("meta"),
        r = n(46),
        a = n(53),
        o = n(44).f,
        s = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        l = !n(49)(function() {
            return u(Object.preventExtensions({}))
        }),
        c = function(t) {
            o(t, i, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        p = function(t, e) {
            if (!r(t))
                return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!a(t, i)) {
                if (!u(t))
                    return "F";
                if (!e)
                    return "E";
                c(t)
            }
            return t[i].i
        },
        h = function(t, e) {
            if (!a(t, i)) {
                if (!u(t))
                    return !0;
                if (!e)
                    return !1;
                c(t)
            }
            return t[i].w
        },
        f = function(t) {
            return l && v.NEED && u(t) && !a(t, i) && c(t), t
        },
        v = t.exports = {
            KEY: i,
            NEED: !1,
            fastKey: p,
            getWeak: h,
            onFreeze: f
        }
}, function(t, e, n) {
    var i = n(39),
        r = n(40),
        a = n(37),
        o = n(80),
        s = n(44).f;
    t.exports = function(t) {
        var e = r.Symbol || (r.Symbol = a ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: o.f(t)
        })
    }
}, function(t, e, n) {
    var i = n(59),
        r = n(87),
        a = n(88);
    t.exports = function(t) {
        var e = i(t),
            n = r.f;
        if (n)
            for (var o, s = n(t), u = a.f, l = 0; s.length > l;)
                u.call(t, o = s[l++]) && e.push(o);
        return e
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var i = n(63);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}, function(t, e, n) {
    var i = n(61),
        r = n(91).f,
        a = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function(t) {
            try {
                return r(t)
            } catch (t) {
                return o.slice()
            }
        };
    t.exports.f = function(t) {
        return o && "[object Window]" == a.call(t) ? s(t) : r(i(t))
    }
}, function(t, e, n) {
    var i = n(60),
        r = n(70).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return i(t, r)
    }
}, function(t, e, n) {
    var i = n(88),
        r = n(52),
        a = n(61),
        o = n(51),
        s = n(53),
        u = n(47),
        l = Object.getOwnPropertyDescriptor;
    e.f = n(48) ? l : function(t, e) {
        if (t = a(t), e = o(e, !0), u)
            try {
                return l(t, e)
            } catch (t) {}
        if (s(t, e))
            return r(!i.f.call(t, e), t[e])
    }
}, function(t, e) {}, function(t, e, n) {
    n(85)("asyncIterator")
}, function(t, e, n) {
    n(85)("observable")
}, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function r(t, e) {
        var n = "15",
            i = window.location.href,
            r = i.split("?")[0],
            a = window.document.title,
            s = t.data,
            c = t.serverUrl || h.serverUrl;
        /^https\:\/\/report\.futu5\.com/gi.test(c) && (c = c.replace(/^https\:\/\/report\.futu5\.com/gi, h.serverDomain)), Array.isArray(s) || (s = [s]), s.forEach(function(t) {
            t.page_location = t.page_location || i, t.page_location_nopara = t.page_location_nopara || r, t.title = t.title || a, t.report_id = n, t.client_time = f.now, t.build_ver = "temp_ver", t.client_ver = "temp_ver"
        }), e = "function" == typeof e ? e : function() {};
        var p = {
            now: f.now,
            gzip: f.gzip,
            dev_type: f.deviceType,
            os_type: f.osType,
            clt_type: f.cltType,
            unique_id: f.uniqueId,
            data: s
        };
        u.post(c).use(l).set("Content-Type", "application/json").send((0, o.default)(p)).end(function(t, n) {
            e(t ? t : n.ok ? 0 === +n.body.futu_result ? null : new Error("upload failed:" + n.body.futu_message) : new Error("upload failed."))
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.reportPvuv = void 0;
    var a = n(97),
        o = i(a),
        s = n(99),
        u = n(100),
        l = n(106),
        c = n(107),
        p = s(navigator.userAgent),
        h = {
            serverDomain: "https://report.futunn.com",
            serverUrl: "https://report.futunn.com/client_report",
            getCltType: function() {
                var t = {
                        iOS: 12,
                        Android: 13,
                        "Mac OS X": 11,
                        Windows: 10
                    },
                    e = 15;
                return /futunn/i.test(navigator.userAgent) && (e = t[p.os.name]), e
            }
        },
        f = {
            now: (new Date).getTime() / 1e3 >> 0,
            deviceType: p.device.model && p.device.vendor + " " + p.device.model || p.device.vendor || p.device.type || p.os.name,
            cltType: h.getCltType(),
            osType: p.os.name + " " + p.os.version,
            uniqueId: c.get(),
            gzip: "off"
        };
    e.reportPvuv = r
}, function(t, e, n) {
    t.exports = {
        default: n(98),
        __esModule: !0
    }
}, function(t, e, n) {
    var i = n(40),
        r = i.JSON || (i.JSON = {
            stringify: JSON.stringify
        });
    t.exports = function(t) {
        return r.stringify.apply(r, arguments)
    }
}, function(t, e) {
    !function(e, n) {
        "use strict";
        var i = "",
            r = "?",
            a = "function",
            o = "undefined",
            s = "object",
            u = "major",
            l = "model",
            c = "name",
            p = "type",
            h = "vendor",
            f = "version",
            v = "architecture",
            d = "console",
            x = "mobile",
            m = "tablet",
            y = {
                has: function(t, e) {
                    return e.toLowerCase().indexOf(t.toLowerCase()) !== -1
                },
                lowerize: function(t) {
                    return t.toLowerCase()
                }
            },
            g = {
                rgx: function() {
                    for (var t, e, i, r, u, l, c, p = 0, h = arguments; p < h.length; p += 2) {
                        var f = h[p],
                            v = h[p + 1];
                        if (typeof t === o) {
                            t = {};
                            for (r in v)
                                u = v[r], typeof u === s ? t[u[0]] = n : t[u] = n
                        }
                        for (e = i = 0; e < f.length; e++)
                            if (l = f[e].exec(this.getUA())) {
                                for (r in v)
                                    c = l[++i], u = v[r], typeof u === s && u.length > 0 ? 2 == u.length ? typeof u[1] == a ? t[u[0]] = u[1].call(this, c) : t[u[0]] = u[1] : 3 == u.length ? typeof u[1] !== a || u[1].exec && u[1].test ? t[u[0]] = c ? c.replace(u[1], u[2]) : n : t[u[0]] = c ? u[1].call(this, c, u[2]) : n : 4 == u.length && (t[u[0]] = c ? u[3].call(this, c.replace(u[1], u[2])) : n) : t[u] = c ? c : n;
                                break
                            }
                        if (l)
                            break
                    }
                    return t
                },
                str: function(t, e) {
                    for (var i in e)
                        if (typeof e[i] === s && e[i].length > 0) {
                            for (var a in e[i])
                                if (y.has(e[i][a], t))
                                    return i === r ? n : i
                        } else if (y.has(e[i], t))
                            return i === r ? n : i;
                    return t
                }
            },
            w = {
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
                            2000: "NT 5.0",
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
                browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [c, f, u], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[c, "Opera"], f, u], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt)\/((\d+)?[\w\.-]+)/i], [c, f, u], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[c, "Yandex"], f, u], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[c, /_/g, " "], f, u], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i], [c, f, u], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[c, "Dolphin"], f, u], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[c, "Chrome"], f, u], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [f, u, [c, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [f, u, c], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [c, [u, g.str, w.browser.oldsafari.major], [f, g.str, w.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [c, f, u], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[c, "Netscape"], f, u], [/(swiftfox)/i, /(iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [c, f, u]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[v, "amd64"]], [/((?:i[346]|x)86)[;\)]/i], [[v, "ia32"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[v, /ower/, "", y.lowerize]], [/(sun4\w)[;\)]/i], [[v, "sparc"]], [/(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [v, y.lowerize]],
                device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [l, h, [p, m]], [/(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [h, l, [p, m]], [/\((ip[honed]+);.+(apple)/i], [l, h, [p, x]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [h, l, [p, x]], [/\((bb10);\s(\w+)/i], [[h, "BlackBerry"], l, [p, x]], [/android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i], [[h, "Asus"], l, [p, m]], [/(sony)\s(tablet\s[ps])/i], [h, l, [p, m]], [/(nintendo)\s([wids3u]+)/i], [h, l, [p, d]], [/((playstation)\s[3portablevi]+)/i], [[h, "Sony"], l, [p, d]], [/(sprint\s(\w+))/i], [[h, g.str, w.device.sprint.vendor], [l, g.str, w.device.sprint.model], [p, x]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [h, [l, /_/g, " "], [p, x]], [/\s((milestone|droid[2x]?))[globa\s]*\sbuild\//i, /(mot)[\s-]?(\w+)*/i], [[h, "Motorola"], l, [p, x]], [/android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i], [[h, "Motorola"], l, [p, m]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i], [[h, "Samsung"], l, [p, m]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[h, "Samsung"], l, [p, x]], [/(sie)-(\w+)*/i], [[h, "Siemens"], l, [p, x]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[h, "Nokia"], l, [p, x]], [/android\s3\.[\s\w-;]{10}((a\d{3}))/i], [[h, "Acer"], l, [p, m]], [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i], [[h, "LG"], l, [p, m]], [/((nexus\s4))/i, /(lg)[e;\s-\/]+(\w+)*/i], [[h, "LG"], l, [p, x]], [/(mobile|tablet);.+rv\:.+gecko\//i], [p, h, l]],
                engine: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [c, f], [/rv\:([\w\.]+).*(gecko)/i], [f, c]],
                os: [[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [c, [f, g.str, w.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[c, "Windows"], [f, g.str, w.os.windows.version]], [/\((bb)(10);/i], [[c, "BlackBerry"], f], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)\/([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i], [c, f], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[c, "Symbian"], f], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[c, "Firefox OS"], f], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [c, f], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[c, "Chromium OS"], f], [/(sunos)\s?([\w\.]+\d)*/i], [[c, "Solaris"], f], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [c, f], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[c, "iOS"], [f, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i], [c, [f, /_/g, "."]], [/(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i, /(unix)\s?([\w\.]+)*/i], [c, f]]
            },
            b = function t(n) {
                if (!(this instanceof t))
                    return new t(n).getResult();
                var r = n || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : i);
                return this instanceof t ? (this.getBrowser = function() {
                    return g.rgx.apply(this, _.browser)
                }, this.getCPU = function() {
                    return g.rgx.apply(this, _.cpu)
                }, this.getDevice = function() {
                    return g.rgx.apply(this, _.device)
                }, this.getEngine = function() {
                    return g.rgx.apply(this, _.engine)
                }, this.getOS = function() {
                    return g.rgx.apply(this, _.os)
                }, this.getResult = function() {
                    return {
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return r
                }, this.setUA = function(t) {
                    return r = t, this
                }, void this.setUA(r)) : new t(n).getResult()
            };
        t.exports = b
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
    function a(t) {
        if (!g(t))
            return t;
        var e = [];
        for (var n in t)
            null != t[n] && o(e, n, t[n]);
        return e.join("&")
    }
    function o(t, e, n) {
        return Array.isArray(n) ? n.forEach(function(n) {
            o(t, e, n)
        }) : void t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
    }
    function s(t) {
        for (var e, n, i = {}, r = t.split("&"), a = 0, o = r.length; a < o; ++a)
            n = r[a], e = n.split("="), i[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
        return i
    }
    function u(t) {
        var e,
            n,
            i,
            r,
            a = t.split(/\r?\n/),
            o = {};
        a.pop();
        for (var s = 0, u = a.length; s < u; ++s)
            n = a[s], e = n.indexOf(":"), i = n.slice(0, e).toLowerCase(), r = _(n.slice(e + 1)), o[i] = r;
        return o
    }
    function l(t) {
        return /[\/+]json\b/.test(t)
    }
    function c(t) {
        return t.split(/ *; */).shift()
    }
    function p(t) {
        return m(t.split(/ *; */), function(t, e) {
            var n = e.split(/ *= */),
                i = n.shift(),
                r = n.shift();
            return i && r && (t[i] = r), t
        }, {})
    }
    function h(t, e) {
        e = e || {}, this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText, this.setStatusProperties(this.xhr.status), this.header = this.headers = u(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this.setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this.parseBody(this.text ? this.text : this.xhr.response) : null
    }
    function f(t, e) {
        var n = this;
        this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function() {
            var t = null,
                e = null;
            try {
                e = new h(n)
            } catch (e) {
                return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, t.rawResponse = n.xhr && n.xhr.responseText ? n.xhr.responseText : null, t.statusCode = n.xhr && n.xhr.status ? n.xhr.status : null, n.callback(t)
            }
            if (n.emit("response", e), t)
                return n.callback(t, e);
            if (e.status >= 200 && e.status < 300)
                return n.callback(t, e);
            var i = new Error(e.statusText || "Unsuccessful HTTP response");
            i.original = t, i.response = e, i.status = e.status, n.callback(i, e)
        })
    }
    function v(t, e) {
        var n = w("DELETE", t);
        return e && n.end(e), n
    }
    var d,
        x = n(101),
        m = n(102),
        y = n(103),
        g = n(104);
    d = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this;
    var w = t.exports = n(105).bind(null, f);
    w.getXHR = function() {
        if (!(!d.XMLHttpRequest || d.location && "file:" == d.location.protocol && d.ActiveXObject))
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
    w.serializeObject = a, w.parseString = s, w.types = {
        html: "text/html",
        json: "application/json",
        xml: "application/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
    }, w.serialize = {
        "application/x-www-form-urlencoded": a,
        "application/json": JSON.stringify
    }, w.parse = {
        "application/x-www-form-urlencoded": s,
        "application/json": JSON.parse
    }, h.prototype.get = function(t) {
        return this.header[t.toLowerCase()]
    }, h.prototype.setHeaderProperties = function(t) {
        var e = this.header["content-type"] || "";
        this.type = c(e);
        var n = p(e);
        for (var i in n)
            this[i] = n[i]
    }, h.prototype.parseBody = function(t) {
        var e = w.parse[this.type];
        return !e && l(this.type) && (e = w.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null
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
    }, w.Response = h, x(f.prototype);
    for (var b in y)
        f.prototype[b] = y[b];
    f.prototype.abort = function() {
        if (!this.aborted)
            return this.aborted = !0, this.xhr && this.xhr.abort(), this.clearTimeout(), this.emit("abort"), this
    }, f.prototype.type = function(t) {
        return this.set("Content-Type", w.types[t] || t), this
    }, f.prototype.responseType = function(t) {
        return this._responseType = t, this
    }, f.prototype.accept = function(t) {
        return this.set("Accept", w.types[t] || t), this
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
        return "string" != typeof t && (t = a(t)), t && this._query.push(t), this
    }, f.prototype.attach = function(t, e, n) {
        return this._getFormData().append(t, e, n || e.name), this
    }, f.prototype._getFormData = function() {
        return this._formData || (this._formData = new d.FormData), this._formData
    }, f.prototype.send = function(t) {
        var e = g(t),
            n = this._header["content-type"];
        if (e && g(this._data))
            for (var i in t)
                this._data[i] = t[i];
        else
            "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + t : t : this._data = (this._data || "") + t) : this._data = t;
        return !e || r(t) ? this : (n || this.type("json"), this)
    }, h.prototype.parse = function(t) {
        return d.console && console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0"), this.serialize(t), this
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
            n = this.xhr = w.getXHR(),
            a = this._query.join("&"),
            o = this._timeout,
            s = this._formData || this._data;
        this._callback = t || i, n.onreadystatechange = function() {
            if (4 == n.readyState) {
                var t;
                try {
                    t = n.status
                } catch (e) {
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
        var u = function(t) {
            t.total > 0 && (t.percent = t.loaded / t.total * 100), t.direction = "download", e.emit("progress", t)
        };
        this.hasListeners("progress") && (n.onprogress = u);
        try {
            n.upload && this.hasListeners("progress") && (n.upload.onprogress = u)
        } catch (t) {}
        if (o && !this._timer && (this._timer = setTimeout(function() {
            e.timedout = !0, e.abort()
        }, o)), a && (a = w.serializeObject(a), this.url += ~this.url.indexOf("?") ? "&" + a : "?" + a), this.username && this.password ? n.open(this.method, this.url, !0, this.username, this.password) : n.open(this.method, this.url, !0), this._withCredentials && (n.withCredentials = !0), "GET" != this.method && "HEAD" != this.method && "string" != typeof s && !r(s)) {
            var c = this._header["content-type"],
                p = this._parser || w.serialize[c ? c.split(";")[0] : ""];
            !p && l(c) && (p = w.serialize["application/json"]), p && (s = p(s))
        }
        for (var h in this.header)
            null != this.header[h] && n.setRequestHeader(h, this.header[h]);
        return this._responseType && (n.responseType = this._responseType), this.emit("request", this), n.send("undefined" != typeof s ? s : null), this
    }, w.Request = f, w.get = function(t, e, n) {
        var i = w("GET", t);
        return "function" == typeof e && (n = e, e = null), e && i.query(e), n && i.end(n), i
    }, w.head = function(t, e, n) {
        var i = w("HEAD", t);
        return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i
    }, w.del = v, w.delete = v, w.patch = function(t, e, n) {
        var i = w("PATCH", t);
        return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i
    }, w.post = function(t, e, n) {
        var i = w("POST", t);
        return "function" == typeof e && (n = e, e = null), e && i.send(e), n && i.end(n), i
    }, w.put = function(t, e, n) {
        var i = w("PUT", t);
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
        for (var i = 0, r = t.length, a = 3 == arguments.length ? n : t[i++]; i < r;)
            a = e.call(null, a, t[i], ++i, t);
        return a
    }
}, function(t, e, n) {
    var i = n(104);
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
                    a = this._formData || this._data;
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
                return i.open(this.method, this.url, !0), "POST" == this.method && "string" != typeof a && (a = n(a)), this.emit("request", this), i.send(a), this
            },
            r = e(t.url);
        r.hostname != window.location.hostname && "undefined" != typeof XDomainRequest && (t.end = i)
    };
    t.exports = n
}, function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(108), n(24), n(109), n(110)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t, e, n, i) {
        return {
            _num: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            get: function() {
                var e = t.getItem("cipher_device_id");
                if (!e) {
                    e = (+new Date + "").substring(0, 10);
                    var n = Math.floor(1e5 * (Math.random() + this._num[Math.floor(100 * Math.random() % 9)]));
                    e += n, e.length > 16 && (e = e.substring(0, 16));
                    var i = this._getRootDomain() || "";
                    t.setItem("cipher_device_id", e, 1 / 0, "/", i)
                }
                return e
            },
            getBuffer: function() {
                for (var t = this.get(), e = "", r = 0, a = t.length; r < a; ++r)
                    e += n("c", i(t[r]));
                return e
            },
            _getRootDomain: function() {
                var t = document.domain || window.location.hostname,
                    e = t.split(".");
                return e.slice(-2).join(".")
            }
        }
    })
}, function(t, e, n) {
    var i,
        r;
    !function(a, o) {
        i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(this, function() {
        "use strict";
        return {
            getItem: function(t) {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
            },
            setItem: function(t, e, n, i, r, a) {
                if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t))
                    return !1;
                var o = "";
                if (n)
                    switch (n.constructor) {
                    case Number:
                        o = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                        break;
                    case String:
                        o = "; expires=" + n;
                        break;
                    case Date:
                        o = "; expires=" + n.toUTCString()
                    }
                return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + o + (r ? "; domain=" + r : "") + (i ? "; path=" + i : "") + (a ? "; secure" : ""), !0
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
    })
}, function(t, e, n) {
    var i,
        r;
    !function(a, o) {
        i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(this, function() {
        return function(t) {
            for (var e, n, i, r, a, o, s, u, l, c, p, h, f, v, d, x, m, y, g, w, _, b, C, k = 0, S = 1, N = "", $ = "", M = 0, T = []; k < t.length;) {
                for (e = t.charAt(k), n = "", k++; k < t.length && null !== t.charAt(k).match(/[\d\*]/);)
                    n += t.charAt(k), k++;
                switch ("" === n && (n = "1"), e) {
                case "a":
                case "A":
                    if ("undefined" == typeof arguments[S])
                        throw new Error("Warning:  pack() Type " + e + ": not enough arguments");
                    for ($ = String(arguments[S]), "*" === n && (n = $.length), M = 0; M < n; M++)
                        N += "undefined" == typeof $[M] ? "a" === e ? String.fromCharCode(0) : " " : $[M];
                    S++;
                    break;
                case "h":
                case "H":
                    if ("undefined" == typeof arguments[S])
                        throw new Error("Warning: pack() Type " + e + ": not enough arguments");
                    if ($ = arguments[S], "*" === n && (n = $.length), n > $.length)
                        throw new Error("Warning: pack() Type " + e + ": not enough characters in string");
                    for (M = 0; M < n; M += 2)
                        i = $[M], i += M + 1 >= n || "undefined" == typeof $[M + 1] ? "0" : $[M + 1], "h" === e && (i = i[1] + i[0]), N += String.fromCharCode(parseInt(i, 16));
                    S++;
                    break;
                case "c":
                case "C":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(arguments[S]), S++;
                    break;
                case "s":
                case "S":
                case "v":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(255 & arguments[S]), N += String.fromCharCode(arguments[S] >> 8 & 255), S++;
                    break;
                case "n":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning: pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(255 & arguments[S]), S++;
                    break;
                case "i":
                case "I":
                case "l":
                case "L":
                case "V":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(255 & arguments[S]), N += String.fromCharCode(arguments[S] >> 8 & 255), N += String.fromCharCode(arguments[S] >> 16 & 255), N += String.fromCharCode(arguments[S] >> 24 & 255), S++;
                    break;
                case "N":
                    if ("*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(arguments[S] >> 24 & 255), N += String.fromCharCode(arguments[S] >> 16 & 255), N += String.fromCharCode(arguments[S] >> 8 & 255), N += String.fromCharCode(255 & arguments[S]), S++;
                    break;
                case "f":
                case "d":
                    if (r = 23, a = 8, "d" === e && (r = 52, a = 11), "*" === n && (n = arguments.length - S), n > arguments.length - S)
                        throw new Error("Warning:  pack() Type " + e + ": too few arguments");
                    for (M = 0; M < n; M++) {
                        for ($ = arguments[S], s = Math.pow(2, a - 1) - 1, u = -s + 1, l = s, c = u - r, p = isNaN(x = parseFloat($)) || x === -(1 / 0) || x === +(1 / 0) ? x : 0, h = 0, f = 2 * s + 1 + r + 3, v = new Array(f), d = (x = 0 !== p ? 0 : x) < 0, x = Math.abs(x), m = Math.floor(x), y = x - m, b = f; b;)
                            v[--b] = 0;
                        for (b = s + 2; m && b;)
                            v[--b] = m % 2, m = Math.floor(m / 2);
                        for (b = s + 1; y > 0 && b; --y)
                            v[++b] = ((y *= 2) >= 1) - 0;
                        for (b = -1; ++b < f && !v[b];)
                            ;
                        if (v[(g = r - 1 + (b = (h = s + 1 - b) >= u && h <= l ? b + 1 : s + 1 - (h = u - 1))) + 1]) {
                            if (!(w = v[g]))
                                for (_ = g + 2; !w && _ < f; w = v[_++])
                                    ;
                            for (_ = g + 1; w && --_ >= 0; (v[_] = !v[_] - 0) && (w = 0))
                                ;
                        }
                        for (b = b - 2 < 0 ? -1 : b - 3; ++b < f && !v[b];)
                            ;
                        for ((h = s + 1 - b) >= u && h <= l ? ++b : h < u && (b = s + 1 - (h = u - 1)), (m || 0 !== p) && (h = l + 1, b = s + 2, p === -(1 / 0) ? d = 1 : isNaN(p) && (v[b] = 1)), x = Math.abs(h + s), C = "", _ = a + 1; --_;)
                            C = x % 2 + C, x = x >>= 1;
                        for (x = 0, _ = 0, b = (C = (d ? "1" : "0") + C + v.slice(b, b + r).join("")).length, T = []; b;)
                            x += (1 << _) * C.charAt(--b), 7 === _ && (T[T.length] = String.fromCharCode(x), x = 0), _ = (_ + 1) % 8;
                        T[T.length] = x ? String.fromCharCode(x) : "", N += T.join(""), S++
                    }
                    break;
                case "x":
                    if ("*" === n)
                        throw new Error("Warning: pack(): Type x: '*' ignored");
                    for (M = 0; M < n; M++)
                        N += String.fromCharCode(0);
                    break;
                case "X":
                    if ("*" === n)
                        throw new Error("Warning: pack(): Type X: '*' ignored");
                    for (M = 0; M < n; M++) {
                        if (0 === N.length)
                            throw new Error("Warning: pack(): Type X: outside of string");
                        N = N.substring(0, N.length - 1)
                    }
                    break;
                case "@":
                    if ("*" === n)
                        throw new Error("Warning: pack(): Type X: '*' ignored");
                    if (n > N.length)
                        for (o = n - N.length, M = 0; M < o; M++)
                            N += String.fromCharCode(0);
                    n < N.length && (N = N.substring(0, n));
                    break;
                default:
                    throw new Error("Warning:  pack() Type " + e + ": unknown format code")
                }
            }
            if (S < arguments.length)
                throw new Error("Warning: pack(): " + (arguments.length - S) + " arguments unused");
            return N
        }
    })
}, function(t, e, n) {
    var i,
        r;
    !function(a, o) {
        i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
    }(this, function() {
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
    })
}, function(t, e, n) {
    function i(t) {
        t = "#reg" == t ? "#reg" : "#login", r(".navs-slider a").removeClass("active"), r(".navs-slider a[href='" + t + "']").addClass("active");
        var e = t.slice(1);
        r(".formWrapper").hide(), u.show(), r("#" + e + "FormWrapper").show(), "#reg" === t ? (window.dedog && window.dedog.setOptions({
            subCmd: 2
        }), o.regreSet()) : window.dedog && window.dedog.setOptions({
            subCmd: 1
        })
    }
    var r = n(2),
        a = n(112),
        o = n(135),
        s = n(8),
        u = r(".ui-tab-navs");
    new a;
    n(28), s(function(t) {
        i(location.hash)
    }), i(location.hash), r(".oauth-back").click(function() {
        window.history.back(-1)
    })
}, function(t, e, n) {
    var i,
        r,
        a = n(4),
        o = n(2),
        s = (n(113), n(10)),
        u = n(114),
        l = n(22),
        c = n(116),
        p = n(21),
        h = n(129),
        f = n(131);
    i = [], r = function() {
        return a("LoginForm", [s], {
            rawNode: o("#loginFormWrapper")[0],
            nodeMap: {
                $oauthWrapper: ".ui-oauth-wrapper",
                $oauthImg: ".ui-oauth-img",
                $oauthName: ".ui-oauth-name",
                $oauthToken_type: ".ui-token-type",
                $oauthOpenid: ".ui-openid",
                $oauthAccess_token: ".ui-access-token",
                $oauthUnionid: ".ui-unionid",
                $oauthRefresh_token: ".ui-refresh-token",
                $tabContentPhone: ".ui-content-phone",
                $tabContentEmail: ".ui-content-email",
                $contentCaptcha: ".ui-content-captcha",
                $tabItem: ".ui-tab-item",
                $captcha: ".ui-captcha",
                $checkboxLayout: ".ui-checkbox-layout",
                $uiRememberContent: ".ui-remember-content"
            },
            inputNames: ["email", "phone", "password", "captcha", "autologin"],
            validateNames: ["email", "password"],
            validationConfigs: {
                email: {
                    type: "r"
                },
                password: {
                    type: "l"
                },
                phone: {
                    type: "r"
                },
                captcha: {
                    type: "l"
                }
            },
            tipConfigs: {
                email: {
                    tip: !0
                },
                password: {
                    tip: !0
                },
                phone: {
                    tip: !0
                },
                captcha: {
                    tip: !0
                }
            },
            tipMsgClassName: "tipMsgClass",
            inputErrorClassName: "errorMsgClass",
            displayMsgTimer: null,
            validator: function() {
                var t = this;
                return o.extend({}, u, {
                    validPhone: function(e) {
                        return u.validPhone(e, t.codeSelect.get("value"), !0)
                    }
                })
            },
            preCreateUi: function() {
                var t = this;
                this.codeSelect = this.codeSelect || new f({
                    rawNode: o("#codeSelectLogin")[0],
                    optionItemSelector: "a",
                    value: o.cookie("login_region_no") || "+852",
                    keyName: "value",
                    maxHeight: 170,
                    data: "zh-CN" === window._params.language ? h.slice(1) : h,
                    createOptionsHtml: function(t, e, n) {
                        var i = [];
                        t = t || [];
                        for (var r = 0, a = t.length; r < a; ++r) {
                            var o = t[r];
                            i.push('<a href="javascript:void(0)" data-index="' + r + '" data-value="' + o[e] + '" data-key="' + o.txt + '">' + o.txt + '<span class="ui-extra-info">' + o[e] + "</span></a>")
                        }
                        return i.join("")
                    },
                    onChange: function(e, n, i) {
                        t.setCookie("login_region_no", e);
                        var r = t.getValue("phone");
                        r && t.$phoneInput.blur()
                    }
                })
            },
            postBindEvents: function() {
                var t = this,
                    e = this.$tabItem,
                    n = this.$tabContentPhone,
                    i = this.$tabContentEmail;
                e.click(function(r) {
                    var a = e.index(o(this)),
                        s = a ? 0 : 1;
                    e.hide().eq(s).show(), t.setCookie("login_tab_nIndex", a), a ? (t.validateNames = ["email", "password"], n.hide(), i.show()) : (t.validateNames = ["phone", "password"], n.show(), i.hide()), clearTimeout(t.displayMsgTimer), t.displayMsgTimer = null, o.each(t.inputNames, function(e, n) {
                        t["$" + n + "Msg"].removeClass(t.errorMsgClassName).html("").hide(), t.inputErrorClassName && t["$" + n + "Input"].removeClass(t.inputErrorClassName)
                    }), r.preventDefault()
                });
                var r = o.cookie("login_tab_nIndex");
                r && e.eq(r).click(), this.$captcha.click(function() {
                    t.refreshCaptcha()
                }), this.$autologinInput.click(function() {
                    t.$checkboxLayout.toggleClass("checked")
                }), this.$uiRememberContent.click(function(e) {
                    "INPUT" != e.target.tagName && t.$autologinInput.click()
                })
            },
            getRemoteValidRet: function(t, e) {
                switch (t) {
                case "email":
                    return this.getSaltInfo({
                        account: e
                    });
                case "phone":
                    return this.getSaltInfo({
                        account: e,
                        region_no: this.codeSelect.get("value")
                    })
                }
            },
            getSaltInfo: function(t) {
                var e = this,
                    n = o.Deferred();
                return this.saltRet && this.currentParams.account === t.account && this.currentParams.region_no === t.region_no ? n.resolve(this.saltRet) : c.getSalt(t).done(function(i) {
                    var r = i.data.svr_result;
                    e.saltRet = i.data, e.currentParams = t;
                    var a = e.currentUid;
                    e.currentUid = r.uid;
                    e.validateNames;
                    r.require_verify_code && "false" !== r.require_verify_code ? (e.addValidates("captcha"), e.$contentCaptcha.show(), a !== e.currentUid && e.refreshCaptcha()) : (e.removeValidates("captcha"), e.$contentCaptcha.hide()), n.resolve(i)
                }).fail(function(t) {
                    n.reject(t)
                }), n
            },
            displayMsg: function(t, e) {
                var n = this,
                    i = arguments,
                    r = this["$" + t + "Input"];
                r.val();
                r.removeClass(this.tipMsgClassName), this.displayMsgTimer = setTimeout(function() {
                    n.inherited(i)
                }, 100)
            },
            displayTip: function(t, e) {
                this.inherited(arguments);
                var n = e,
                    i = this["$" + t + "Input"];
                i.removeClass(this.inputErrorClassName), n ? i.addClass(this.tipMsgClassName) : i.removeClass(this.tipMsgClassName), this["$" + t + "Msg"].html("")
            },
            _checkBeforeSubmit: function() {
                for (var t = this.validateNames || [], e = 0, n = t.length; e < n; ++e) {
                    var i = t[e],
                        r = i.substring(0, 1).toUpperCase() + i.substr(1);
                    this["valid" + r](this.getValue(i))
                }
            },
            submit: function(t) {
                var e = o(".ui-tab-item").index(o(".ui-tab-item:visible"));
                return e ? this.loginSubmit(t, {
                    account: t.phone,
                    region_no: t.code
                }) : this.loginSubmit(t, {
                    account: t.email
                })
            },
            loginSubmit: function(t, e) {
                var n = o.Deferred(),
                    i = this;
                return this.getSaltInfo(e).done(function() {
                    t = o.extend({}, {
                        username: i.currentUid
                    }, t), c.postLogin(t, i.saltRet).done(function(t) {
                        n.resolve(t)
                    }).fail(function(t) {
                        if (t.data) {
                            var e = {};
                            t.data.require_verify_code ? (i.$contentCaptcha.is(":visible") || (i.addValidates("captcha"), i.showCaptchaNodes()), i.refreshCaptcha()) : t.data.require_device_verify ? (e = {
                                uid: t.data.uid,
                                phone_no: t.data.phone_no,
                                target: window._params.target
                            }, window.location.href = "/login/device-lock?" + p.transformRequest(e)) : t.data.require_phone_bind && (e = {
                                uid: t.data.uid,
                                target: window._params.target
                            }, window.location.href = "/login/device-phone?" + p.transformRequest(e))
                        }
                        n.reject(t)
                    })
                }).fail(function(t) {
                    n.reject(t)
                }), n
            },
            cb: function(t) {
                var e = o.extend({}, {
                        target: window._params.target,
                        device_id: l.get()
                    }, t.data),
                    n = p.transformRequest(e);
                window.location.href = window._params.jumpUrl + "?" + n
            },
            displayError: function(t) {
                if (t) {
                    var e = t.message || t.ret_msg || t;
                    "object" == typeof e && (e = "statusText" in e && "timeout" === e.statusText ? "请求超时" : "未知错误"), t.data.require_device_verify || t.data.require_phone_bind ? (this.$errorMsg.text(""), this.$errorWrapper.hide()) : (this.$errorMsg.text(e), this.$errorWrapper.show())
                } else
                    this.$errorMsg.text(""), this.$errorWrapper.hide()
            },
            refreshCaptcha: function() {
                this.currentUid && this.$captcha.attr("src", "/login/captcha?uid=" + this.currentUid + "&device_id=" + l.get())
            },
            showCaptchaNodes: function() {
                this.$contentCaptcha.show()
            },
            hideCaptchaNodes: function() {
                this.$contentCaptcha.hide()
            },
            setCookie: function(t, e) {
                o.cookie(t) && o.removeCookie(t), o.cookie(t, e, {
                    expires: 365,
                    path: "/",
                    domain: "passport.futu5.com",
                    secure: !0
                })
            },
            onPhoneInput: function() {
                this.$passwordInput.val(""), this.$errorMsg.html("")
            },
            onEmailInput: function() {
                this.$passwordInput.val(""), this.$errorMsg.html("")
            }
        })
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r,
        a; /*!
	 * jQuery Cookie Plugin v1.4.1
	 * https://github.com/carhartl/jquery-cookie
	 *
	 * Copyright 2013 Klaus Hartl
	 * Released under the MIT license
	 */






    !function(o) {
        r = [n(2)], i = o, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(function(t) {
        function e(t) {
            return s.raw ? t : encodeURIComponent(t)
        }
        function n(t) {
            return s.raw ? t : decodeURIComponent(t)
        }
        function i(t) {
            return e(s.json ? JSON.stringify(t) : String(t))
        }
        function r(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(o, " ")), s.json ? JSON.parse(t) : t
            } catch (t) {}
        }
        function a(e, n) {
            var i = s.raw ? e : r(e);
            return t.isFunction(n) ? n(i) : i
        }
        var o = /\+/g,
            s = t.cookie = function(r, o, u) {
                if (void 0 !== o && !t.isFunction(o)) {
                    if (u = t.extend({}, s.defaults, u), "number" == typeof u.expires) {
                        var l = u.expires,
                            c = u.expires = new Date;
                        c.setTime(+c + 864e5 * l)
                    }
                    return document.cookie = [e(r), "=", i(o), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
                }
                for (var p = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], f = 0, v = h.length; f < v; f++) {
                    var d = h[f].split("="),
                        x = n(d.shift()),
                        m = d.join("=");
                    if (r && r === x) {
                        p = a(m, o);
                        break
                    }
                    r || void 0 === (m = a(m)) || (p[x] = m)
                }
                return p
            };
        s.defaults = {}, t.removeCookie = function(e, n) {
            return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, n, {
                    expires: -1
                })), !t.cookie(e))
        }
    })
}, function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(16), n(115)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t, e) {
        return {
            validPhone: function(n, i, r) {
                n = t(n);
                var a = n.length,
                    o = /^\d+$/,
                    s = "";
                return i = +i, a ? o.test(n) ? 86 === i && 11 !== a ? s = e.errorPhoneFormat : 886 === i && 9 !== a ? s = e.errorPhoneFormat : 852 !== i && 853 !== i || 8 === a ? 86 === i || 886 === i || 852 === i || 853 === i || r || (s = e.errorPhoneFormat) : s = e.errorPhoneFormat : s = e.invalidPhone : s = e.inputPhone, {
                    result: !s,
                    message: s
                }
            },
            validEmail: function(n) {
                n = t(n);
                var i = "";
                return "" === n ? i = e.inputEmail : /^\d{6,11}$/.test(n) || /^[\w_\-\+\.]+@(?:[\w\-]+\.)+([a-z]{2,})$/i.test(n) || (i = e.invalidEmail), {
                    result: !i,
                    message: i
                }
            },
            validPassword: function(t) {
                var n = "";
                return "" !== t && "undefined" != typeof t || (n = e.inputPassword), {
                    result: !n,
                    message: n
                }
            },
            validCaptcha: function(t) {
                var n = "";
                return "" !== t && "undefined" != typeof t || (n = e.inputCaptcha), {
                    result: !n,
                    message: n
                }
            }
        }
    })
}, 
function(t, e) {
    var n = {
        __root: {
            inputPhone: "请输入手机号码",
            invalidPhone: "手机号码不能含有非法字符",
            errorPhoneFormat: "手机格式错误",
            remoteApiError: "远程接口错误",
            inputEmail: "请输入牛牛号/手机号/邮箱",
            inputPassword: "请输入登录密码",
            inputCaptcha: "请输入验证码",
            invalidEmail: "非法的牛牛号/手机号/邮箱",
            errorForbidLogin: "禁止登录",
            loginAndBind: "登录并绑定",
            notEmailActive: "邮箱未认证，请先激活帐号"
        },
        "__zh-hk": {
            inputPhone: "請輸入手機號碼",
            invalidPhone: "手機號碼不能含有非法字符",
            errorPhoneFormat: "手機格式錯誤",
            remoteApiError: "遠程接口錯誤",
            inputEmail: "請輸入牛牛號/郵箱",
            inputPassword: "請輸入登入密碼",
            inputCaptcha: "請輸入驗證碼",
            invalidEmail: "非法的牛牛號/電郵",
            errorForbidLogin: "禁止登入",
            loginAndBind: "登錄並綁定",
            notEmailActive: "郵箱未認證，請先激活帳號"
        }
    };
    n.init = function(t) {
        if (t || (t = window._i18n && window._i18n.locale ? window._i18n.locale : "root"), Object.assign)
            Object.assign(this, this.__root, this["__" + t]);
        else {
            var e = this["__" + t] || this.__root;
            if (e)
                for (var n in e)
                    this[n] = e[n]
        }
    }, n.init(), t.exports = n
}, 
function(t, e, n) {
    var i,
        r,
        a = n(2),
        o = n(19),
        s = n(22),
        u = n(117),
        l = n(115);
    i = [], r = function() {
        return {
            getSalt: function(t) {
                var e = a.Deferred();
                return t.account = a.trim(t.account), o.get({
                    url: "/login/salt",
                    data: a.extend({}, {
                        device_id: s.get()
                    }, t),
                    timeout: 1e4
                }).done(function(t) {
                    e.resolve(t)
                }).fail(function(t) {
                    e.reject(t)
                }), e
            },
            postLogin: function(t, e) {
                var n = a.Deferred(),
                    i = e.tgtgt_params;
                i.salt = e.svr_result.salt;
                var r = u.get(t.password, i);
                return delete t.password, t.rememberMe = t.autologin, t.username = a.trim(t.username), o.post({
                    url: "/auth/login",
                    data: a.extend({}, {
                        device_id: s.get(),
                        tgtgt: r
                    }, t),
                    timeout: 1e4
                }).done(function(t) {
                    n.resolve(t)
                }).fail(function(t) {
                    t && 403 === +t.result && (t.ret_msg = l.errorForbidLogin), n.reject(t)
                }), n
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, 
function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(24), n(118), n(124), n(125), n(126), n(128), n(119), n(127), n(26), n(27), n(22)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t, e, n, i, r, a, o, s, u, l, c) {
        return {
            get: function(e, n, i) {
                return !i && n.salt && (i = t(t(e).toString() + n.salt).toString(s)), this.aesEncryptCbcMd5Base64(this.buildPlain(e, n), i)
            },
            buildPlain: function(e, n) {
                var i = u("N", n.init_time),
                    r = u("N", n.invalid_time),
                    a = [u("C", n.ver), u("N", n.uid), t(e).toString(s), this.getRandomKey(), i, i, r, c.getBuffer(), u("C", n.os_type), u("N", n.seq), u("C", n.signed_len), ""],
                    o = a.join("");
                return o
            },
            aesEncryptCbcMd5: function(o, u) {
                var l = n.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0");
                u = s.parse(u), o += "";
                var c = o.length % 16;
                if (c) {
                    for (var p = [], h = 16 - c; h;)
                        p.push("0"), --h;
                    o += p.join("")
                }
                o = s.parse(o);
                var f = e.encrypt(o, u, {
                        iv: l,
                        padding: r
                    }),
                    v = e.encrypt(this.getPadding(c, l), u, {
                        iv: l,
                        padding: r,
                        mode: a
                    }),
                    d = f.ciphertext.toString() + v.ciphertext.toString() + t(o).toString();
                return i.parse(d)
            },
            aesEncryptCbcMd5Base64: function(t, e) {
                return o.stringify(this.aesEncryptCbcMd5(t, e))
            },
            getPadding: function(a, o) {
                var s = window.crypto || window.msCrypto,
                    u = "";
                if (s) {
                    var l = new Uint8Array(15);
                    s.getRandomValues(l);
                    for (var c = 0, p = l.length; c < p; ++c) {
                        var h = l[c].toString(16);
                        1 == h.length && (h = "0" + h), u += h
                    }
                    u += "0" + (+a).toString(16)
                } else {
                    o = o || n.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0");
                    var f = e.encrypt(t(Math.random() + "").toString(), n.parse(Math.random() + ""), {
                        iv: o,
                        padding: r
                    });
                    f = f.ciphertext.toString(), u = f.substr(0, 30) + "0" + (+a).toString(16)
                }
                return i.parse(u)
            },
            getRandomKey: function(i) {
                var a = window.crypto || window.msCrypto,
                    o = "";
                if (a && window.Uint8Array) {
                    var s = new Uint8Array(16);
                    a.getRandomValues(s);
                    for (var c = 0, p = s.length; c < p; ++c)
                        o += u("C", l(s[c]))
                } else {
                    i = i || n.parse("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0");
                    var h = e.encrypt(t(Math.random() + "").toString(), n.parse(Math.random() + ""), {
                        iv: i,
                        padding: r
                    });
                    h = h.ciphertext.toString();
                    for (var c = 0; c < 32; c += 2)
                        o += u("C", l(parseInt(h.substring(c, 2), 16)))
                }
                return o
            }
        }
    })
}, 
function(t, e, n) {
    !function(i, r, a) {
        t.exports = e = r(n(25), n(119), n(24), n(120), n(123))
    }(this, function(t) {
        return function() {
            var e = t,
                n = e.lib,
                i = n.BlockCipher,
                r = e.algo,
                a = [],
                o = [],
                s = [],
                u = [],
                l = [],
                c = [],
                p = [],
                h = [],
                f = [],
                v = [];
            !function() {
                for (var t = [], e = 0; e < 256; e++)
                    e < 128 ? t[e] = e << 1 : t[e] = e << 1 ^ 283;
                for (var n = 0, i = 0, e = 0; e < 256; e++) {
                    var r = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
                    r = r >>> 8 ^ 255 & r ^ 99, a[n] = r, o[r] = n;
                    var d = t[n],
                        x = t[d],
                        m = t[x],
                        y = 257 * t[r] ^ 16843008 * r;
                    s[n] = y << 24 | y >>> 8, u[n] = y << 16 | y >>> 16, l[n] = y << 8 | y >>> 24, c[n] = y;
                    var y = 16843009 * m ^ 65537 * x ^ 257 * d ^ 16843008 * n;
                    p[r] = y << 24 | y >>> 8, h[r] = y << 16 | y >>> 16, f[r] = y << 8 | y >>> 24, v[r] = y, n ? (n = d ^ t[t[t[m ^ d]]], i ^= t[t[i]]) : n = i = 1
                }
            }();
            var d = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                x = r.AES = i.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, i = this._nRounds = n + 6, r = 4 * (i + 1), o = this._keySchedule = [], s = 0; s < r; s++)
                                if (s < n)
                                    o[s] = e[s];
                                else {
                                    var u = o[s - 1];
                                    s % n ? n > 6 && s % n == 4 && (u = a[u >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & u]) : (u = u << 8 | u >>> 24, u = a[u >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & u], u ^= d[s / n | 0] << 24), o[s] = o[s - n] ^ u
                                }
                            for (var l = this._invKeySchedule = [], c = 0; c < r; c++) {
                                var s = r - c;
                                if (c % 4)
                                    var u = o[s];
                                else
                                    var u = o[s - 4];
                                c < 4 || s <= 4 ? l[c] = u : l[c] = p[a[u >>> 24]] ^ h[a[u >>> 16 & 255]] ^ f[a[u >>> 8 & 255]] ^ v[a[255 & u]]
                            }
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, s, u, l, c, a)
                    },
                    decryptBlock: function(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n, this._doCryptBlock(t, e, this._invKeySchedule, p, h, f, v, o);
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3], t[e + 3] = n
                    },
                    _doCryptBlock: function(t, e, n, i, r, a, o, s) {
                        for (var u = this._nRounds, l = t[e] ^ n[0], c = t[e + 1] ^ n[1], p = t[e + 2] ^ n[2], h = t[e + 3] ^ n[3], f = 4, v = 1; v < u; v++) {
                            var d = i[l >>> 24] ^ r[c >>> 16 & 255] ^ a[p >>> 8 & 255] ^ o[255 & h] ^ n[f++],
                                x = i[c >>> 24] ^ r[p >>> 16 & 255] ^ a[h >>> 8 & 255] ^ o[255 & l] ^ n[f++],
                                m = i[p >>> 24] ^ r[h >>> 16 & 255] ^ a[l >>> 8 & 255] ^ o[255 & c] ^ n[f++],
                                y = i[h >>> 24] ^ r[l >>> 16 & 255] ^ a[c >>> 8 & 255] ^ o[255 & p] ^ n[f++];
                            l = d, c = x, p = m, h = y
                        }
                        var d = (s[l >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & h]) ^ n[f++],
                            x = (s[c >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & l]) ^ n[f++],
                            m = (s[p >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & c]) ^ n[f++],
                            y = (s[h >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & p]) ^ n[f++];
                        t[e] = d, t[e + 1] = x, t[e + 2] = m, t[e + 3] = y
                    },
                    keySize: 8
                });
            e.AES = i._createHelper(x)
        }(), t.AES
    })
}, 
function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(25))
    }(this, function(t) {
        return function() {
            function e(t, e, n) {
                for (var i = [], a = 0, o = 0; o < e; o++)
                    if (o % 4) {
                        var s = n[t.charCodeAt(o - 1)] << o % 4 * 2,
                            u = n[t.charCodeAt(o)] >>> 6 - o % 4 * 2;
                        i[a >>> 2] |= (s | u) << 24 - a % 4 * 8, a++
                    }
                return r.create(i, a)
            }
            var n = t,
                i = n.lib,
                r = i.WordArray,
                a = n.enc;
            a.Base64 = {
                stringify: function(t) {
                    var e = t.words,
                        n = t.sigBytes,
                        i = this._map;
                    t.clamp();
                    for (var r = [], a = 0; a < n; a += 3)
                        for (var o = e[a >>> 2] >>> 24 - a % 4 * 8 & 255, s = e[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255, u = e[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, l = o << 16 | s << 8 | u, c = 0; c < 4 && a + .75 * c < n; c++)
                            r.push(i.charAt(l >>> 6 * (3 - c) & 63));
                    var p = i.charAt(64);
                    if (p)
                        for (; r.length % 4;)
                            r.push(p);
                    return r.join("")
                },
                parse: function(t) {
                    var n = t.length,
                        i = this._map,
                        r = this._reverseMap;
                    if (!r) {
                        r = this._reverseMap = [];
                        for (var a = 0; a < i.length; a++)
                            r[i.charCodeAt(a)] = a
                    }
                    var o = i.charAt(64);
                    if (o) {
                        var s = t.indexOf(o);
                        s !== -1 && (n = s)
                    }
                    return e(t, n, r)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }(), t.enc.Base64
    })
}, function(t, e, n) {
    !function(i, r, a) {
        t.exports = e = r(n(25), n(121), n(122))
    }(this, function(t) {
        return function() {
            var e = t,
                n = e.lib,
                i = n.Base,
                r = n.WordArray,
                a = e.algo,
                o = a.MD5,
                s = a.EvpKDF = i.extend({
                    cfg: i.extend({
                        keySize: 4,
                        hasher: o,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        for (var n = this.cfg, i = n.hasher.create(), a = r.create(), o = a.words, s = n.keySize, u = n.iterations; o.length < s;) {
                            l && i.update(l);
                            var l = i.update(t).finalize(e);
                            i.reset();
                            for (var c = 1; c < u; c++)
                                l = i.finalize(l), i.reset();
                            a.concat(l)
                        }
                        return a.sigBytes = 4 * s, a
                    }
                });
            e.EvpKDF = function(t, e, n) {
                return s.create(n).compute(t, e)
            }
        }(), t.EvpKDF
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(25))
    }(this, function(t) {
        return function() {
            var e = t,
                n = e.lib,
                i = n.WordArray,
                r = n.Hasher,
                a = e.algo,
                o = [],
                s = a.SHA1 = r.extend({
                    _doReset: function() {
                        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, i = n[0], r = n[1], a = n[2], s = n[3], u = n[4], l = 0; l < 80; l++) {
                            if (l < 16)
                                o[l] = 0 | t[e + l];
                            else {
                                var c = o[l - 3] ^ o[l - 8] ^ o[l - 14] ^ o[l - 16];
                                o[l] = c << 1 | c >>> 31
                            }
                            var p = (i << 5 | i >>> 27) + u + o[l];
                            p += l < 20 ? (r & a | ~r & s) + 1518500249 : l < 40 ? (r ^ a ^ s) + 1859775393 : l < 60 ? (r & a | r & s | a & s) - 1894007588 : (r ^ a ^ s) - 899497514, u = s, s = a, a = r << 30 | r >>> 2, r = i, i = p
                        }
                        n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + a | 0, n[3] = n[3] + s | 0, n[4] = n[4] + u | 0
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
            e.SHA1 = r._createHelper(s), e.HmacSHA1 = r._createHmacHelper(s)
        }(), t.SHA1
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(25))
    }(this, function(t) {
        !function() {
            var e = t,
                n = e.lib,
                i = n.Base,
                r = e.enc,
                a = r.Utf8,
                o = e.algo;
            o.HMAC = i.extend({
                init: function(t, e) {
                    t = this._hasher = new t.init, "string" == typeof e && (e = a.parse(e));
                    var n = t.blockSize,
                        i = 4 * n;
                    e.sigBytes > i && (e = t.finalize(e)), e.clamp();
                    for (var r = this._oKey = e.clone(), o = this._iKey = e.clone(), s = r.words, u = o.words, l = 0; l < n; l++)
                        s[l] ^= 1549556828, u[l] ^= 909522486;
                    r.sigBytes = o.sigBytes = i, this.reset()
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
        t.exports = e = r(n(25))
    }(this, function(t) {
        t.lib.Cipher || function(e) {
            var n = t,
                i = n.lib,
                r = i.Base,
                a = i.WordArray,
                o = i.BufferedBlockAlgorithm,
                s = n.enc,
                u = (s.Utf8, s.Base64),
                l = n.algo,
                c = l.EvpKDF,
                p = i.Cipher = o.extend({
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
                        o.reset.call(this), this._doReset()
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
                            return "string" == typeof t ? C : w
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
                h = (i.StreamCipher = p.extend({
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
                v = h.CBC = function() {
                    function t(t, n, i) {
                        var r = this._iv;
                        if (r) {
                            var a = r;
                            this._iv = e
                        } else
                            var a = this._prevBlock;
                        for (var o = 0; o < i; o++)
                            t[n + o] ^= a[o]
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
                                a = e.slice(n, n + r);
                            i.decryptBlock(e, n), t.call(this, e, n, r), this._prevBlock = a
                        }
                    }), n
                }(),
                d = n.pad = {},
                x = d.Pkcs7 = {
                    pad: function(t, e) {
                        for (var n = 4 * e, i = n - t.sigBytes % n, r = i << 24 | i << 16 | i << 8 | i, o = [], s = 0; s < i; s += 4)
                            o.push(r);
                        var u = a.create(o, i);
                        t.concat(u)
                    },
                    unpad: function(t) {
                        var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                        t.sigBytes -= e
                    }
                },
                m = (i.BlockCipher = p.extend({
                    cfg: p.cfg.extend({
                        mode: v,
                        padding: x
                    }),
                    reset: function() {
                        p.reset.call(this);
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
                g = y.OpenSSL = {
                    stringify: function(t) {
                        var e = t.ciphertext,
                            n = t.salt;
                        if (n)
                            var i = a.create([1398893684, 1701076831]).concat(n).concat(e);
                        else
                            var i = e;
                        return i.toString(u)
                    },
                    parse: function(t) {
                        var e = u.parse(t),
                            n = e.words;
                        if (1398893684 == n[0] && 1701076831 == n[1]) {
                            var i = a.create(n.slice(2, 4));
                            n.splice(0, 4), e.sigBytes -= 16
                        }
                        return m.create({
                            ciphertext: e,
                            salt: i
                        })
                    }
                },
                w = i.SerializableCipher = r.extend({
                    cfg: r.extend({
                        format: g
                    }),
                    encrypt: function(t, e, n, i) {
                        i = this.cfg.extend(i);
                        var r = t.createEncryptor(n, i),
                            a = r.finalize(e),
                            o = r.cfg;
                        return m.create({
                            ciphertext: a,
                            key: n,
                            iv: o.iv,
                            algorithm: t,
                            mode: o.mode,
                            padding: o.padding,
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
                b = _.OpenSSL = {
                    execute: function(t, e, n, i) {
                        i || (i = a.random(8));
                        var r = c.create({
                                keySize: e + n
                            }).compute(t, i),
                            o = a.create(r.words.slice(e), 4 * n);
                        return r.sigBytes = 4 * e, m.create({
                            key: r,
                            iv: o,
                            salt: i
                        })
                    }
                },
                C = i.PasswordBasedCipher = w.extend({
                    cfg: w.cfg.extend({
                        kdf: b
                    }),
                    encrypt: function(t, e, n, i) {
                        i = this.cfg.extend(i);
                        var r = i.kdf.execute(n, t.keySize, t.ivSize);
                        i.iv = r.iv;
                        var a = w.encrypt.call(this, t, e, r.key, i);
                        return a.mixIn(r), a
                    },
                    decrypt: function(t, e, n, i) {
                        i = this.cfg.extend(i), e = this._parse(e, i.format);
                        var r = i.kdf.execute(n, t.keySize, t.ivSize, e.salt);
                        i.iv = r.iv;
                        var a = w.decrypt.call(this, t, e, r.key, i);
                        return a
                    }
                })
        }()
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(25))
    }(this, function(t) {
        return t.enc.Utf8
    })
}, function(t, e, n) {
    !function(i, r) {
        t.exports = e = r(n(25))
    }(this, function(t) {
        return t.enc.Hex
    })
}, function(t, e, n) {
    !function(i, r, a) {
        t.exports = e = r(n(25), n(123))
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
        t.exports = e = r(n(25))
    }(this, function(t) {
        return t.enc.Latin1
    })
}, function(t, e, n) {
    !function(i, r, a) {
        t.exports = e = r(n(25), n(123))
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
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(130)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t) {
        return [{
            type: t.type,
            txt: t.txt1,
            value: t.value1
        }, {
            type: t.type,
            txt: t.txt2,
            value: t.value2
        }, {
            type: t.type,
            txt: t.txt3,
            value: t.value3
        }, {
            type: t.type,
            txt: t.txt4,
            value: t.value4
        }, {
            type: t.type1,
            txt: t.txt128,
            value: t.value128
        }, {
            type: t.type1,
            txt: t.txt218,
            value: t.value218
        }, {
            type: t.type1,
            txt: t.txt86,
            value: t.value86
        }, {
            type: t.type1,
            txt: t.txt20,
            value: t.value20
        }, {
            type: t.type1,
            txt: t.txt207,
            value: t.value207
        }, {
            type: t.type1,
            txt: t.txt5,
            value: t.value5
        }, {
            type: t.type1,
            txt: t.txt6,
            value: t.value6
        }, {
            type: t.type1,
            txt: t.txt7,
            value: t.value7
        }, {
            type: t.type1,
            txt: t.txt8,
            value: t.value8
        }, {
            type: t.type1,
            txt: t.txt9,
            value: t.value9
        }, {
            type: t.type1,
            txt: t.txt10,
            value: t.value10
        }, {
            type: t.type1,
            txt: t.txt11,
            value: t.value11
        }, {
            type: t.type1,
            txt: t.txt12,
            value: t.value12
        }, {
            type: t.type1,
            txt: t.txt13,
            value: t.value13
        }, {
            type: t.type1,
            txt: t.txt14,
            value: t.value14
        }, {
            type: t.type1,
            txt: t.txt15,
            value: t.value15
        }, {
            type: t.type1,
            txt: t.txt16,
            value: t.value16
        }, {
            type: t.type1,
            txt: t.txt17,
            value: t.value17
        }, {
            type: t.type1,
            txt: t.txt18,
            value: t.value18
        }, {
            type: t.type1,
            txt: t.txt19,
            value: t.value19
        }, {
            type: t.type1,
            txt: t.txt21,
            value: t.value21
        }, {
            type: t.type1,
            txt: t.txt22,
            value: t.value22
        }, {
            type: t.type1,
            txt: t.txt23,
            value: t.value23
        }, {
            type: t.type1,
            txt: t.txt24,
            value: t.value24
        }, {
            type: t.type1,
            txt: t.txt25,
            value: t.value25
        }, {
            type: t.type1,
            txt: t.txt26,
            value: t.value26
        }, {
            type: t.type1,
            txt: t.txt27,
            value: t.value27
        }, {
            type: t.type1,
            txt: t.txt28,
            value: t.value28
        }, {
            type: t.type1,
            txt: t.txt29,
            value: t.value29
        }, {
            type: t.type1,
            txt: t.txt30,
            value: t.value30
        }, {
            type: t.type1,
            txt: t.txt31,
            value: t.value31
        }, {
            type: t.type1,
            txt: t.txt32,
            value: t.value32
        }, {
            type: t.type1,
            txt: t.txt33,
            value: t.value33
        }, {
            type: t.type1,
            txt: t.txt34,
            value: t.value34
        }, {
            type: t.type1,
            txt: t.txt35,
            value: t.value35
        }, {
            type: t.type1,
            txt: t.txt36,
            value: t.value36
        }, {
            type: t.type1,
            txt: t.txt37,
            value: t.value37
        }, {
            type: t.type1,
            txt: t.txt38,
            value: t.value38
        }, {
            type: t.type1,
            txt: t.txt39,
            value: t.value39
        }, {
            type: t.type1,
            txt: t.txt40,
            value: t.value40
        }, {
            type: t.type1,
            txt: t.txt41,
            value: t.value41
        }, {
            type: t.type1,
            txt: t.txt42,
            value: t.value42
        }, {
            type: t.type1,
            txt: t.txt43,
            value: t.value43
        }, {
            type: t.type1,
            txt: t.txt44,
            value: t.value44
        }, {
            type: t.type1,
            txt: t.txt45,
            value: t.value45
        }, {
            type: t.type1,
            txt: t.txt46,
            value: t.value46
        }, {
            type: t.type1,
            txt: t.txt47,
            value: t.value47
        }, {
            type: t.type1,
            txt: t.txt48,
            value: t.value48
        }, {
            type: t.type1,
            txt: t.txt49,
            value: t.value49
        }, {
            type: t.type1,
            txt: t.txt50,
            value: t.value50
        }, {
            type: t.type1,
            txt: t.txt51,
            value: t.value51
        }, {
            type: t.type1,
            txt: t.txt52,
            value: t.value52
        }, {
            type: t.type1,
            txt: t.txt53,
            value: t.value53
        }, {
            type: t.type1,
            txt: t.txt54,
            value: t.value54
        }, {
            type: t.type1,
            txt: t.txt55,
            value: t.value55
        }, {
            type: t.type1,
            txt: t.txt56,
            value: t.value56
        }, {
            type: t.type1,
            txt: t.txt57,
            value: t.value57
        }, {
            type: t.type1,
            txt: t.txt58,
            value: t.value58
        }, {
            type: t.type1,
            txt: t.txt59,
            value: t.value59
        }, {
            type: t.type1,
            txt: t.txt60,
            value: t.value60
        }, {
            type: t.type1,
            txt: t.txt61,
            value: t.value61
        }, {
            type: t.type1,
            txt: t.txt62,
            value: t.value62
        }, {
            type: t.type1,
            txt: t.txt63,
            value: t.value63
        }, {
            type: t.type1,
            txt: t.txt64,
            value: t.value64
        }, {
            type: t.type1,
            txt: t.txt65,
            value: t.value65
        }, {
            type: t.type1,
            txt: t.txt66,
            value: t.value66
        }, {
            type: t.type1,
            txt: t.txt67,
            value: t.value67
        }, {
            type: t.type1,
            txt: t.txt68,
            value: t.value68
        }, {
            type: t.type1,
            txt: t.txt69,
            value: t.value69
        }, {
            type: t.type1,
            txt: t.txt70,
            value: t.value70
        }, {
            type: t.type1,
            txt: t.txt71,
            value: t.value71
        }, {
            type: t.type1,
            txt: t.txt72,
            value: t.value72
        }, {
            type: t.type1,
            txt: t.txt73,
            value: t.value73
        }, {
            type: t.type1,
            txt: t.txt74,
            value: t.value74
        }, {
            type: t.type1,
            txt: t.txt75,
            value: t.value75
        }, {
            type: t.type1,
            txt: t.txt76,
            value: t.value76
        }, {
            type: t.type1,
            txt: t.txt77,
            value: t.value77
        }, {
            type: t.type1,
            txt: t.txt78,
            value: t.value78
        }, {
            type: t.type1,
            txt: t.txt79,
            value: t.value79
        }, {
            type: t.type1,
            txt: t.txt80,
            value: t.value80
        }, {
            type: t.type1,
            txt: t.txt81,
            value: t.value81
        }, {
            type: t.type1,
            txt: t.txt82,
            value: t.value82
        }, {
            type: t.type1,
            txt: t.txt83,
            value: t.value83
        }, {
            type: t.type1,
            txt: t.txt84,
            value: t.value84
        }, {
            type: t.type1,
            txt: t.txt85,
            value: t.value85
        }, {
            type: t.type1,
            txt: t.txt87,
            value: t.value87
        }, {
            type: t.type1,
            txt: t.txt88,
            value: t.value88
        }, {
            type: t.type1,
            txt: t.txt89,
            value: t.value89
        }, {
            type: t.type1,
            txt: t.txt90,
            value: t.value90
        }, {
            type: t.type1,
            txt: t.txt91,
            value: t.value91
        }, {
            type: t.type1,
            txt: t.txt92,
            value: t.value92
        }, {
            type: t.type1,
            txt: t.txt93,
            value: t.value93
        }, {
            type: t.type1,
            txt: t.txt94,
            value: t.value94
        }, {
            type: t.type1,
            txt: t.txt95,
            value: t.value95
        }, {
            type: t.type1,
            txt: t.txt96,
            value: t.value96
        }, {
            type: t.type1,
            txt: t.txt97,
            value: t.value97
        }, {
            type: t.type1,
            txt: t.txt98,
            value: t.value98
        }, {
            type: t.type1,
            txt: t.txt99,
            value: t.value99
        }, {
            type: t.type1,
            txt: t.txt100,
            value: t.value100
        }, {
            type: t.type1,
            txt: t.txt101,
            value: t.value101
        }, {
            type: t.type1,
            txt: t.txt102,
            value: t.value102
        }, {
            type: t.type1,
            txt: t.txt103,
            value: t.value103
        }, {
            type: t.type1,
            txt: t.txt104,
            value: t.value104
        }, {
            type: t.type1,
            txt: t.txt105,
            value: t.value105
        }, {
            type: t.type1,
            txt: t.txt106,
            value: t.value106
        }, {
            type: t.type1,
            txt: t.txt107,
            value: t.value107
        }, {
            type: t.type1,
            txt: t.txt108,
            value: t.value108
        }, {
            type: t.type1,
            txt: t.txt109,
            value: t.value109
        }, {
            type: t.type1,
            txt: t.txt110,
            value: t.value110
        }, {
            type: t.type1,
            txt: t.txt111,
            value: t.value111
        }, {
            type: t.type1,
            txt: t.txt112,
            value: t.value112
        }, {
            type: t.type1,
            txt: t.txt113,
            value: t.value113
        }, {
            type: t.type1,
            txt: t.txt114,
            value: t.value114
        }, {
            type: t.type1,
            txt: t.txt115,
            value: t.value115
        }, {
            type: t.type1,
            txt: t.txt116,
            value: t.value116
        }, {
            type: t.type1,
            txt: t.txt117,
            value: t.value117
        }, {
            type: t.type1,
            txt: t.txt118,
            value: t.value118
        }, {
            type: t.type1,
            txt: t.txt119,
            value: t.value119
        }, {
            type: t.type1,
            txt: t.txt120,
            value: t.value120
        }, {
            type: t.type1,
            txt: t.txt121,
            value: t.value121
        }, {
            type: t.type1,
            txt: t.txt122,
            value: t.value122
        }, {
            type: t.type1,
            txt: t.txt123,
            value: t.value123
        }, {
            type: t.type1,
            txt: t.txt124,
            value: t.value124
        }, {
            type: t.type1,
            txt: t.txt125,
            value: t.value125
        }, {
            type: t.type1,
            txt: t.txt126,
            value: t.value126
        }, {
            type: t.type1,
            txt: t.txt127,
            value: t.value127
        }, {
            type: t.type1,
            txt: t.txt129,
            value: t.value129
        }, {
            type: t.type1,
            txt: t.txt130,
            value: t.value130
        }, {
            type: t.type1,
            txt: t.txt131,
            value: t.value131
        }, {
            type: t.type1,
            txt: t.txt132,
            value: t.value132
        }, {
            type: t.type1,
            txt: t.txt133,
            value: t.value133
        }, {
            type: t.type1,
            txt: t.txt134,
            value: t.value134
        }, {
            type: t.type1,
            txt: t.txt135,
            value: t.value135
        }, {
            type: t.type1,
            txt: t.txt136,
            value: t.value136
        }, {
            type: t.type1,
            txt: t.txt137,
            value: t.value137
        }, {
            type: t.type1,
            txt: t.txt138,
            value: t.value138
        }, {
            type: t.type1,
            txt: t.txt139,
            value: t.value139
        }, {
            type: t.type1,
            txt: t.txt140,
            value: t.value140
        }, {
            type: t.type1,
            txt: t.txt141,
            value: t.value141
        }, {
            type: t.type1,
            txt: t.txt142,
            value: t.value142
        }, {
            type: t.type1,
            txt: t.txt143,
            value: t.value143
        }, {
            type: t.type1,
            txt: t.txt144,
            value: t.value144
        }, {
            type: t.type1,
            txt: t.txt145,
            value: t.value145
        }, {
            type: t.type1,
            txt: t.txt146,
            value: t.value146
        }, {
            type: t.type1,
            txt: t.txt147,
            value: t.value147
        }, {
            type: t.type1,
            txt: t.txt148,
            value: t.value148
        }, {
            type: t.type1,
            txt: t.txt149,
            value: t.value149
        }, {
            type: t.type1,
            txt: t.txt150,
            value: t.value150
        }, {
            type: t.type1,
            txt: t.txt151,
            value: t.value151
        }, {
            type: t.type1,
            txt: t.txt152,
            value: t.value152
        }, {
            type: t.type1,
            txt: t.txt153,
            value: t.value153
        }, {
            type: t.type1,
            txt: t.txt154,
            value: t.value154
        }, {
            type: t.type1,
            txt: t.txt155,
            value: t.value155
        }, {
            type: t.type1,
            txt: t.txt156,
            value: t.value156
        }, {
            type: t.type1,
            txt: t.txt157,
            value: t.value157
        }, {
            type: t.type1,
            txt: t.txt158,
            value: t.value158
        }, {
            type: t.type1,
            txt: t.txt159,
            value: t.value159
        }, {
            type: t.type1,
            txt: t.txt160,
            value: t.value160
        }, {
            type: t.type1,
            txt: t.txt161,
            value: t.value161
        }, {
            type: t.type1,
            txt: t.txt162,
            value: t.value162
        }, {
            type: t.type1,
            txt: t.txt163,
            value: t.value163
        }, {
            type: t.type1,
            txt: t.txt164,
            value: t.value164
        }, {
            type: t.type1,
            txt: t.txt165,
            value: t.value165
        }, {
            type: t.type1,
            txt: t.txt166,
            value: t.value166
        }, {
            type: t.type1,
            txt: t.txt167,
            value: t.value167
        }, {
            type: t.type1,
            txt: t.txt168,
            value: t.value168
        }, {
            type: t.type1,
            txt: t.txt169,
            value: t.value169
        }, {
            type: t.type1,
            txt: t.txt170,
            value: t.value170
        }, {
            type: t.type1,
            txt: t.txt171,
            value: t.value171
        }, {
            type: t.type1,
            txt: t.txt172,
            value: t.value172
        }, {
            type: t.type1,
            txt: t.txt173,
            value: t.value173
        }, {
            type: t.type1,
            txt: t.txt174,
            value: t.value174
        }, {
            type: t.type1,
            txt: t.txt175,
            value: t.value175
        }, {
            type: t.type1,
            txt: t.txt176,
            value: t.value176
        }, {
            type: t.type1,
            txt: t.txt177,
            value: t.value177
        }, {
            type: t.type1,
            txt: t.txt178,
            value: t.value178
        }, {
            type: t.type1,
            txt: t.txt179,
            value: t.value179
        }, {
            type: t.type1,
            txt: t.txt180,
            value: t.value180
        }, {
            type: t.type1,
            txt: t.txt181,
            value: t.value181
        }, {
            type: t.type1,
            txt: t.txt182,
            value: t.value182
        }, {
            type: t.type1,
            txt: t.txt183,
            value: t.value183
        }, {
            type: t.type1,
            txt: t.txt184,
            value: t.value184
        }, {
            type: t.type1,
            txt: t.txt185,
            value: t.value185
        }, {
            type: t.type1,
            txt: t.txt186,
            value: t.value186
        }, {
            type: t.type1,
            txt: t.txt187,
            value: t.value187
        }, {
            type: t.type1,
            txt: t.txt188,
            value: t.value188
        }, {
            type: t.type1,
            txt: t.txt189,
            value: t.value189
        }, {
            type: t.type1,
            txt: t.txt190,
            value: t.value190
        }, {
            type: t.type1,
            txt: t.txt191,
            value: t.value191
        }, {
            type: t.type1,
            txt: t.txt192,
            value: t.value192
        }, {
            type: t.type1,
            txt: t.txt193,
            value: t.value193
        }, {
            type: t.type1,
            txt: t.txt194,
            value: t.value194
        }, {
            type: t.type1,
            txt: t.txt195,
            value: t.value195
        }, {
            type: t.type1,
            txt: t.txt196,
            value: t.value196
        }, {
            type: t.type1,
            txt: t.txt197,
            value: t.value197
        }, {
            type: t.type1,
            txt: t.txt198,
            value: t.value198
        }, {
            type: t.type1,
            txt: t.txt199,
            value: t.value199
        }, {
            type: t.type1,
            txt: t.txt200,
            value: t.value200
        }, {
            type: t.type1,
            txt: t.txt201,
            value: t.value201
        }, {
            type: t.type1,
            txt: t.txt202,
            value: t.value202
        }, {
            type: t.type1,
            txt: t.txt203,
            value: t.value203
        }, {
            type: t.type1,
            txt: t.txt204,
            value: t.value204
        }, {
            type: t.type1,
            txt: t.txt205,
            value: t.value205
        }, {
            type: t.type1,
            txt: t.txt206,
            value: t.value206
        }, {
            type: t.type1,
            txt: t.txt208,
            value: t.value208
        }, {
            type: t.type1,
            txt: t.txt209,
            value: t.value209
        }, {
            type: t.type1,
            txt: t.txt210,
            value: t.value210
        }, {
            type: t.type1,
            txt: t.txt211,
            value: t.value211
        }, {
            type: t.type1,
            txt: t.txt212,
            value: t.value212
        }, {
            type: t.type1,
            txt: t.txt213,
            value: t.value213
        }, {
            type: t.type1,
            txt: t.txt214,
            value: t.value214
        }, {
            type: t.type1,
            txt: t.txt215,
            value: t.value215
        }, {
            type: t.type1,
            txt: t.txt216,
            value: t.value216
        }, {
            type: t.type1,
            txt: t.txt217,
            value: t.value217
        }, {
            type: t.type1,
            txt: t.txt219,
            value: t.value219
        }, {
            type: t.type1,
            txt: t.txt220,
            value: t.value220
        }, {
            type: t.type1,
            txt: t.txt221,
            value: t.value221
        }, {
            type: t.type1,
            txt: t.txt222,
            value: t.value222
        }, {
            type: t.type1,
            txt: t.txt223,
            value: t.value223
        }, {
            type: t.type1,
            txt: t.txt224,
            value: t.value224
        }, {
            type: t.type1,
            txt: t.txt225,
            value: t.value225
        }, {
            type: t.type1,
            txt: t.txt226,
            value: t.value226
        }, {
            type: t.type1,
            txt: t.txt227,
            value: t.value227
        }]
    })
}, function(t, e) {
    var n = {
        __root: {
            type: "常用地区",
            type1: "全部地区",
            txt1: "中国大陆",
            txt2: "中国香港",
            txt3: "中国澳门",
            txt4: "中国台湾",
            txt5: "阿尔巴尼亚",
            txt6: "阿尔及利亚",
            txt7: "阿富汗",
            txt8: "阿根廷",
            txt9: "爱尔兰",
            txt10: "埃及",
            txt11: "埃塞俄比亚",
            txt12: "爱沙尼亚",
            txt13: "阿拉伯联合酋长国",
            txt14: "阿鲁巴",
            txt15: "阿曼",
            txt16: "安道尔",
            txt17: "安哥拉",
            txt18: "安圭拉",
            txt19: "安提瓜和巴布达",
            txt20: "澳大利亚",
            txt21: "奥地利",
            txt22: "阿塞拜疆",
            txt23: "巴巴多斯",
            txt24: "巴布亚新几内亚",
            txt25: "巴哈马",
            txt26: "白俄罗斯",
            txt27: "百慕大",
            txt28: "巴基斯坦",
            txt29: "巴拉圭",
            txt30: "巴林",
            txt31: "巴拿马",
            txt32: "保加利亚",
            txt33: "巴西",
            txt34: "北马里亚纳群岛",
            txt35: "贝宁",
            txt36: "比利时",
            txt37: "冰岛",
            txt38: "博茨瓦纳",
            txt39: "波多黎各",
            txt40: "波兰",
            txt41: "玻利维亚",
            txt42: "伯利兹",
            txt43: "波斯尼亚和黑塞哥维那",
            txt44: "不丹",
            txt45: "布基纳法索",
            txt46: "布隆迪",
            txt47: "朝鲜",
            txt48: "赤道几内亚",
            txt49: "丹麦",
            txt50: "德国",
            txt51: "东帝汶",
            txt52: "多哥",
            txt53: "多米尼克",
            txt54: "多米尼加共和国",
            txt55: "厄瓜多尔",
            txt56: "厄立特里亚",
            txt57: "俄罗斯",
            txt58: "法国",
            txt59: "法罗群岛",
            txt60: "梵蒂冈",
            txt61: "法属波利尼西亚",
            txt62: "斐济",
            txt63: "菲律宾",
            txt64: "芬兰",
            txt65: "佛得角",
            txt66: "福克兰群岛",
            txt67: "冈比亚",
            txt68: "刚果（布）",
            txt69: "刚果（金）",
            txt70: "格陵兰",
            txt71: "格林纳达",
            txt72: "格鲁吉亚",
            txt73: "哥伦比亚",
            txt74: "哥斯达黎加",
            txt75: "关岛",
            txt76: "古巴",
            txt77: "圭亚那",
            txt78: "海地",
            txt79: "韩国",
            txt80: "哈萨克斯坦",
            txt81: "黑山共和国",
            txt82: "荷兰",
            txt83: "荷属安的列斯群岛",
            txt84: "洪都拉斯",
            txt85: "加纳",
            txt86: "加拿大",
            txt87: "柬埔寨",
            txt88: "加蓬",
            txt89: "吉布提",
            txt90: "捷克共和国",
            txt91: "吉尔吉斯斯坦",
            txt92: "基里巴斯",
            txt93: "几内亚",
            txt94: "几内亚比绍",
            txt95: "开曼群岛",
            txt96: "喀麦隆",
            txt97: "卡塔尔",
            txt98: "科科斯群岛",
            txt99: "克罗地亚",
            txt100: "科摩罗",
            txt101: "肯尼亚",
            txt102: "科特迪瓦",
            txt103: "科威特",
            txt104: "库克群岛",
            txt105: "莱索托",
            txt106: "老挝人民民主共和国",
            txt107: "拉脱维亚",
            txt108: "黎巴嫩",
            txt109: "利比里亚",
            txt110: "利比亚",
            txt111: "列支敦士登",
            txt112: "立陶宛",
            txt113: "罗马尼亚",
            txt114: "卢森堡",
            txt115: "卢旺达",
            txt116: "马达加斯加",
            txt117: "马尔代夫",
            txt118: "马耳他",
            txt119: "马来西亚",
            txt120: "马拉维",
            txt121: "马里",
            txt122: "曼岛",
            txt123: "毛里求斯",
            txt124: "毛里塔尼亚",
            txt125: "马其顿",
            txt126: "马绍尔群岛",
            txt127: "马约特",
            txt128: "美国",
            txt129: "美属萨摩亚",
            txt130: "美属维京群岛",
            txt131: "蒙古",
            txt132: "孟加拉国",
            txt133: "蒙塞拉特群岛",
            txt134: "缅甸",
            txt135: "密克罗尼西亚联邦",
            txt136: "秘鲁",
            txt137: "摩尔多瓦",
            txt138: "摩洛哥",
            txt139: "摩纳哥",
            txt140: "莫桑比克",
            txt141: "墨西哥",
            txt142: "纳米比亚",
            txt143: "南非",
            txt144: "南极洲",
            txt145: "瑙鲁",
            txt146: "尼泊尔",
            txt147: "尼加拉瓜",
            txt148: "尼日尔",
            txt149: "尼日利亚",
            txt150: "纽埃",
            txt151: "挪威",
            txt152: "帕劳",
            txt153: "皮特凯恩群岛",
            txt154: "葡萄牙",
            txt155: "日本",
            txt156: "瑞典",
            txt157: "瑞士",
            txt158: "萨尔瓦多",
            txt159: "塞尔维亚",
            txt160: "塞拉利昂",
            txt161: "塞内加尔",
            txt162: "塞浦路斯",
            txt163: "塞舌尔群岛",
            txt164: "萨摩亚",
            txt165: "沙特阿拉伯",
            txt166: "圣巴泰勒米",
            txt167: "圣诞岛",
            txt168: "圣多美和普林西比",
            txt169: "圣赫勒拿",
            txt170: "圣基茨和尼维斯",
            txt171: "圣卢西亚",
            txt172: "圣马丁",
            txt173: "圣马力诺",
            txt174: "圣皮埃尔和密克隆",
            txt175: "圣文森特和格林纳丁斯",
            txt176: "斯里兰卡",
            txt177: "斯洛伐克",
            txt178: "斯洛文尼亚",
            txt179: "斯威士兰",
            txt180: "苏丹",
            txt181: "所罗门群岛",
            txt182: "索马里",
            txt183: "泰国",
            txt184: "塔吉克斯坦",
            txt185: "汤加",
            txt186: "坦桑尼亚",
            txt187: "特克斯和凯科斯群岛",
            txt188: "特立尼达和多巴哥",
            txt189: "土耳其",
            txt190: "土库曼斯坦",
            txt191: "突尼斯",
            txt192: "托克劳",
            txt193: "图瓦卢",
            txt194: "瓦利斯和富图纳",
            txt195: "瓦努阿图",
            txt196: "危地马拉",
            txt197: "委内瑞拉",
            txt198: "文莱",
            txt199: "乌干达",
            txt200: "乌克兰",
            txt201: "乌拉圭",
            txt202: "乌兹别克斯坦",
            txt203: "西班牙",
            txt204: "希腊",
            txt205: "新加坡",
            txt206: "新喀里多尼亚",
            txt207: "新西兰",
            txt208: "匈牙利",
            txt209: "叙利亚",
            txt210: "牙买加",
            txt211: "亚美尼亚",
            txt212: "也门",
            txt213: "意大利",
            txt214: "伊拉克",
            txt215: "伊朗",
            txt216: "印度",
            txt217: "印度尼西亚",
            txt218: "英国",
            txt219: "英属维京群岛",
            txt220: "以色列",
            txt221: "约旦",
            txt222: "越南",
            txt223: "赞比亚",
            txt224: "乍得",
            txt225: "直布罗陀",
            txt226: "智利",
            txt227: "中非共和国",
            value1: "+86",
            value2: "+852",
            value3: "+853",
            value4: "+886",
            value5: "+355",
            value6: "+213",
            value7: "+93",
            value8: "+54",
            value9: "+353",
            value10: "+20",
            value11: "+251",
            value12: "+372",
            value13: "+971",
            value14: "+297",
            value15: "+968",
            value16: "+376",
            value17: "+244",
            value18: "+1264",
            value19: "+1268",
            value20: "+61",
            value21: "+43",
            value22: "+994",
            value23: "+1246",
            value24: "+675",
            value25: "+1242",
            value26: "+375",
            value27: "+1441",
            value28: "+92",
            value29: "+595",
            value30: "+973",
            value31: "+507",
            value32: "+359",
            value33: "+55",
            value34: "+1670",
            value35: "+229",
            value36: "+32",
            value37: "+354",
            value38: "+267",
            value39: "+1",
            value40: "+48",
            value41: "+591",
            value42: "+501",
            value43: "+387",
            value44: "+975",
            value45: "+226",
            value46: "+257",
            value47: "+850",
            value48: "+240",
            value49: "+45",
            value50: "+49",
            value51: "+670",
            value52: "+228",
            value53: "+1767",
            value54: "+1809",
            value55: "+593",
            value56: "+291",
            value57: "+7",
            value58: "+33",
            value59: "+298",
            value60: "+39",
            value61: "+689",
            value62: "+679",
            value63: "+63",
            value64: "+358",
            value65: "+238",
            value66: "+500",
            value67: "+220",
            value68: "+242",
            value69: "+243",
            value70: "+299",
            value71: "+1473",
            value72: "+995",
            value73: "+57",
            value74: "+506",
            value75: "+1671",
            value76: "+53",
            value77: "+592",
            value78: "+509",
            value79: "+82",
            value80: "+7",
            value81: "+382",
            value82: "+31",
            value83: "+599",
            value84: "+504",
            value85: "+233",
            value86: "+1",
            value87: "+855",
            value88: "+241",
            value89: "+253",
            value90: "+420",
            value91: "+996",
            value92: "+686",
            value93: "+224",
            value94: "+245",
            value95: "+1345",
            value96: "+237",
            value97: "+974",
            value98: "+61",
            value99: "+385",
            value100: "+269",
            value101: "+254",
            value102: "+225",
            value103: "+965",
            value104: "+682",
            value105: "+266",
            value106: "+856",
            value107: "+371",
            value108: "+961",
            value109: "+231",
            value110: "+218",
            value111: "+423",
            value112: "+370",
            value113: "+40",
            value114: "+352",
            value115: "+250",
            value116: "+261",
            value117: "+960",
            value118: "+356",
            value119: "+60",
            value120: "+265",
            value121: "+223",
            value122: "+44",
            value123: "+230",
            value124: "+222",
            value125: "+389",
            value126: "+692",
            value127: "+262",
            value128: "+1",
            value129: "+1684",
            value130: "+1340",
            value131: "+976",
            value132: "+880",
            value133: "+1664",
            value134: "+95",
            value135: "+691",
            value136: "+51",
            value137: "+373",
            value138: "+212",
            value139: "+377",
            value140: "+258",
            value141: "+52",
            value142: "+264",
            value143: "+27",
            value144: "+672",
            value145: "+674",
            value146: "+977",
            value147: "+505",
            value148: "+227",
            value149: "+234",
            value150: "+683",
            value151: "+47",
            value152: "+680",
            value153: "+870",
            value154: "+351",
            value155: "+81",
            value156: "+46",
            value157: "+41",
            value158: "+503",
            value159: "+381",
            value160: "+232",
            value161: "+221",
            value162: "+357",
            value163: "+248",
            value164: "+685",
            value165: "+966",
            value166: "+590",
            value167: "+61",
            value168: "+239",
            value169: "+290",
            value170: "+1869",
            value171: "+1758",
            value172: "+1599",
            value173: "+378",
            value174: "+508",
            value175: "+1784",
            value176: "+94",
            value177: "+421",
            value178: "+386",
            value179: "+268",
            value180: "+249",
            value181: "+677",
            value182: "+252",
            value183: "+66",
            value184: "+992",
            value185: "+676",
            value186: "+255",
            value187: "+1649",
            value188: "+1868",
            value189: "+90",
            value190: "+993",
            value191: "+216",
            value192: "+690",
            value193: "+688",
            value194: "+681",
            value195: "+678",
            value196: "+502",
            value197: "+58",
            value198: "+673",
            value199: "+256",
            value200: "+380",
            value201: "+598",
            value202: "+998",
            value203: "+34",
            value204: "+30",
            value205: "+65",
            value206: "+687",
            value207: "+64",
            value208: "+36",
            value209: "+963",
            value210: "+1876",
            value211: "+374",
            value212: "+967",
            value213: "+39",
            value214: "+964",
            value215: "+98",
            value216: "+91",
            value217: "+62",
            value218: "+44",
            value219: "+1284",
            value220: "+972",
            value221: "+962",
            value222: "+84",
            value223: "+260",
            value224: "+235",
            value225: "+350",
            value226: "+56",
            value227: "+236",
            value228: "+86",
            value229: "+852",
            value230: "+853",
            value231: "+886"
        },
        "__zh-hk": {
            type: "常用地區",
            type1: "全部地區",
            txt1: "中國大陸",
            txt2: "中國香港",
            txt3: "中國澳門",
            txt4: "中國臺灣",
            txt5: "阿爾巴尼亞",
            txt6: "阿爾及利亞",
            txt7: "阿富汗",
            txt8: "阿根廷",
            txt9: "愛爾蘭",
            txt10: "埃及",
            txt11: "埃塞俄比亞",
            txt12: "愛沙尼亞",
            txt13: "阿拉伯聯合酋長國",
            txt14: "阿魯巴",
            txt15: "阿曼",
            txt16: "安道爾",
            txt17: "安哥拉",
            txt18: "安圭拉",
            txt19: "安提瓜和巴布達",
            txt20: "澳大利亞",
            txt21: "奧地利",
            txt22: "阿塞拜疆",
            txt23: "巴巴多斯",
            txt24: "巴布亞新幾內亞",
            txt25: "巴哈馬",
            txt26: "白俄羅斯",
            txt27: "百慕大",
            txt28: "巴基斯坦",
            txt29: "巴拉圭",
            txt30: "巴林",
            txt31: "巴拿馬",
            txt32: "保加利亞",
            txt33: "巴西",
            txt34: "北馬裏亞納群島",
            txt35: "貝寧",
            txt36: "比利時",
            txt37: "冰島",
            txt38: "博茨瓦納",
            txt39: "波多黎各",
            txt40: "波蘭",
            txt41: "玻利維亞",
            txt42: "伯利茲",
            txt43: "波斯尼亞和黑塞哥維那",
            txt44: "不丹",
            txt45: "布基納法索",
            txt46: "布隆迪",
            txt47: "朝鮮",
            txt48: "赤道幾內亞",
            txt49: "丹麥",
            txt50: "德國",
            txt51: "東帝汶",
            txt52: "多哥",
            txt53: "多米尼克",
            txt54: "多米尼加共和國",
            txt55: "厄瓜多爾",
            txt56: "厄立特裏亞",
            txt57: "俄羅斯",
            txt58: "法國",
            txt59: "法羅群島",
            txt60: "梵蒂岡",
            txt61: "法屬波利尼西亞",
            txt62: "斐濟",
            txt63: "菲律賓",
            txt64: "芬蘭",
            txt65: "佛得角",
            txt66: "福克蘭群島",
            txt67: "岡比亞",
            txt68: "剛果（布）",
            txt69: "剛果（金）",
            txt70: "格陵蘭",
            txt71: "格林納達",
            txt72: "格魯吉亞",
            txt73: "哥倫比亞",
            txt74: "哥斯達黎加",
            txt75: "關島",
            txt76: "古巴",
            txt77: "圭亞那",
            txt78: "海地",
            txt79: "韓國",
            txt80: "哈薩克斯坦",
            txt81: "黑山共和國",
            txt82: "荷蘭",
            txt83: "荷屬安的列斯群島",
            txt84: "洪都拉斯",
            txt85: "加納",
            txt86: "加拿大",
            txt87: "柬埔寨",
            txt88: "加蓬",
            txt89: "吉布提",
            txt90: "捷克共和國",
            txt91: "吉爾吉斯斯坦",
            txt92: "基裏巴斯",
            txt93: "幾內亞",
            txt94: "幾內亞比紹",
            txt95: "開曼群島",
            txt96: "喀麥隆",
            txt97: "卡塔爾",
            txt98: "科科斯群島",
            txt99: "克羅地亞",
            txt100: "科摩羅",
            txt101: "肯尼亞",
            txt102: "科特迪瓦",
            txt103: "科威特",
            txt104: "庫克群島",
            txt105: "萊索托",
            txt106: "老撾人民民主共和國",
            txt107: "拉脫維亞",
            txt108: "黎巴嫩",
            txt109: "利比裏亞",
            txt110: "利比亞",
            txt111: "列支敦士登",
            txt112: "立陶宛",
            txt113: "羅馬尼亞",
            txt114: "盧森堡",
            txt115: "盧旺達",
            txt116: "馬達加斯加",
            txt117: "馬爾代夫",
            txt118: "馬耳他",
            txt119: "馬來西亞",
            txt120: "馬拉維",
            txt121: "馬裏",
            txt122: "曼島",
            txt123: "毛裏求斯",
            txt124: "毛裏塔尼亞",
            txt125: "馬其頓",
            txt126: "馬紹爾群島",
            txt127: "馬約特",
            txt128: "美國",
            txt129: "美屬薩摩亞",
            txt130: "美屬維京群島",
            txt131: "蒙古",
            txt132: "孟加拉國",
            txt133: "蒙塞拉特群島",
            txt134: "緬甸",
            txt135: "密克羅尼西亞聯邦",
            txt136: "秘魯",
            txt137: "摩爾多瓦",
            txt138: "摩洛哥",
            txt139: "摩納哥",
            txt140: "莫桑比克",
            txt141: "墨西哥",
            txt142: "納米比亞",
            txt143: "南非",
            txt144: "南極洲",
            txt145: "瑙魯",
            txt146: "尼泊爾",
            txt147: "尼加拉瓜",
            txt148: "尼日爾",
            txt149: "尼日利亞",
            txt150: "紐埃",
            txt151: "挪威",
            txt152: "帕勞",
            txt153: "皮特凱恩群島",
            txt154: "葡萄牙",
            txt155: "日本",
            txt156: "瑞典",
            txt157: "瑞士",
            txt158: "薩爾瓦多",
            txt159: "塞爾維亞",
            txt160: "塞拉利昂",
            txt161: "塞內加爾",
            txt162: "塞浦路斯",
            txt163: "塞舌爾群島",
            txt164: "薩摩亞",
            txt165: "沙特阿拉伯",
            txt166: "聖巴泰勒米",
            txt167: "聖誕島",
            txt168: "聖多美和普林西比",
            txt169: "聖赫勒拿",
            txt170: "聖基茨和尼維斯",
            txt171: "聖盧西亞",
            txt172: "聖馬丁",
            txt173: "聖馬力諾",
            txt174: "聖皮埃爾和密克隆",
            txt175: "聖文森特和格林納丁斯",
            txt176: "斯裏蘭卡",
            txt177: "斯洛伐克",
            txt178: "斯洛文尼亞",
            txt179: "斯威士蘭",
            txt180: "蘇丹",
            txt181: "所羅門群島",
            txt182: "索馬裏",
            txt183: "泰國",
            txt184: "塔吉克斯坦",
            txt185: "湯加",
            txt186: "坦桑尼亞",
            txt187: "特克斯和凱科斯群島",
            txt188: "特立尼達和多巴哥",
            txt189: "土耳其",
            txt190: "土庫曼斯坦",
            txt191: "突尼斯",
            txt192: "托克勞",
            txt193: "圖瓦盧",
            txt194: "瓦利斯和富圖納",
            txt195: "瓦努阿圖",
            txt196: "危地馬拉",
            txt197: "委內瑞拉",
            txt198: "文萊",
            txt199: "烏幹達",
            txt200: "烏克蘭",
            txt201: "烏拉圭",
            txt202: "烏茲別克斯坦",
            txt203: "西班牙",
            txt204: "希臘",
            txt205: "新加坡",
            txt206: "新喀裏多尼亞",
            txt207: "新西蘭",
            txt208: "匈牙利",
            txt209: "敘利亞",
            txt210: "牙買加",
            txt211: "亞美尼亞",
            txt212: "也門",
            txt213: "意大利",
            txt214: "伊拉克",
            txt215: "伊朗",
            txt216: "印度",
            txt217: "印度尼西亞",
            txt218: "英國",
            txt219: "英屬維京群島",
            txt220: "以色列",
            txt221: "約旦",
            txt222: "越南",
            txt223: "贊比亞",
            txt224: "乍得",
            txt225: "直布羅陀",
            txt226: "智利",
            txt227: "中非共和國",
            value1: "+86",
            value2: "+852",
            value3: "+853",
            value4: "+886",
            value5: "+355",
            value6: "+213",
            value7: "+93",
            value8: "+54",
            value9: "+353",
            value10: "+20",
            value11: "+251",
            value12: "+372",
            value13: "+971",
            value14: "+297",
            value15: "+968",
            value16: "+376",
            value17: "+244",
            value18: "+1264",
            value19: "+1268",
            value20: "+61",
            value21: "+43",
            value22: "+994",
            value23: "+1246",
            value24: "+675",
            value25: "+1242",
            value26: "+375",
            value27: "+1441",
            value28: "+92",
            value29: "+595",
            value30: "+973",
            value31: "+507",
            value32: "+359",
            value33: "+55",
            value34: "+1670",
            value35: "+229",
            value36: "+32",
            value37: "+354",
            value38: "+267",
            value39: "+1",
            value40: "+48",
            value41: "+591",
            value42: "+501",
            value43: "+387",
            value44: "+975",
            value45: "+226",
            value46: "+257",
            value47: "+850",
            value48: "+240",
            value49: "+45",
            value50: "+49",
            value51: "+670",
            value52: "+228",
            value53: "+1767",
            value54: "+1809",
            value55: "+593",
            value56: "+291",
            value57: "+7",
            value58: "+33",
            value59: "+298",
            value60: "+39",
            value61: "+689",
            value62: "+679",
            value63: "+63",
            value64: "+358",
            value65: "+238",
            value66: "+500",
            value67: "+220",
            value68: "+242",
            value69: "+243",
            value70: "+299",
            value71: "+1473",
            value72: "+995",
            value73: "+57",
            value74: "+506",
            value75: "+1671",
            value76: "+53",
            value77: "+592",
            value78: "+509",
            value79: "+82",
            value80: "+7",
            value81: "+382",
            value82: "+31",
            value83: "+599",
            value84: "+504",
            value85: "+233",
            value86: "+1",
            value87: "+855",
            value88: "+241",
            value89: "+253",
            value90: "+420",
            value91: "+996",
            value92: "+686",
            value93: "+224",
            value94: "+245",
            value95: "+1345",
            value96: "+237",
            value97: "+974",
            value98: "+61",
            value99: "+385",
            value100: "+269",
            value101: "+254",
            value102: "+225",
            value103: "+965",
            value104: "+682",
            value105: "+266",
            value106: "+856",
            value107: "+371",
            value108: "+961",
            value109: "+231",
            value110: "+218",
            value111: "+423",
            value112: "+370",
            value113: "+40",
            value114: "+352",
            value115: "+250",
            value116: "+261",
            value117: "+960",
            value118: "+356",
            value119: "+60",
            value120: "+265",
            value121: "+223",
            value122: "+44",
            value123: "+230",
            value124: "+222",
            value125: "+389",
            value126: "+692",
            value127: "+262",
            value128: "+1",
            value129: "+1684",
            value130: "+1340",
            value131: "+976",
            value132: "+880",
            value133: "+1664",
            value134: "+95",
            value135: "+691",
            value136: "+51",
            value137: "+373",
            value138: "+212",
            value139: "+377",
            value140: "+258",
            value141: "+52",
            value142: "+264",
            value143: "+27",
            value144: "+672",
            value145: "+674",
            value146: "+977",
            value147: "+505",
            value148: "+227",
            value149: "+234",
            value150: "+683",
            value151: "+47",
            value152: "+680",
            value153: "+870",
            value154: "+351",
            value155: "+81",
            value156: "+46",
            value157: "+41",
            value158: "+503",
            value159: "+381",
            value160: "+232",
            value161: "+221",
            value162: "+357",
            value163: "+248",
            value164: "+685",
            value165: "+966",
            value166: "+590",
            value167: "+61",
            value168: "+239",
            value169: "+290",
            value170: "+1869",
            value171: "+1758",
            value172: "+1599",
            value173: "+378",
            value174: "+508",
            value175: "+1784",
            value176: "+94",
            value177: "+421",
            value178: "+386",
            value179: "+268",
            value180: "+249",
            value181: "+677",
            value182: "+252",
            value183: "+66",
            value184: "+992",
            value185: "+676",
            value186: "+255",
            value187: "+1649",
            value188: "+1868",
            value189: "+90",
            value190: "+993",
            value191: "+216",
            value192: "+690",
            value193: "+688",
            value194: "+681",
            value195: "+678",
            value196: "+502",
            value197: "+58",
            value198: "+673",
            value199: "+256",
            value200: "+380",
            value201: "+598",
            value202: "+998",
            value203: "+34",
            value204: "+30",
            value205: "+65",
            value206: "+687",
            value207: "+64",
            value208: "+36",
            value209: "+963",
            value210: "+1876",
            value211: "+374",
            value212: "+967",
            value213: "+39",
            value214: "+964",
            value215: "+98",
            value216: "+91",
            value217: "+62",
            value218: "+44",
            value219: "+1284",
            value220: "+972",
            value221: "+962",
            value222: "+84",
            value223: "+260",
            value224: "+235",
            value225: "+350",
            value226: "+56",
            value227: "+236",
            value228: "+86",
            value229: "+852",
            value230: "+853",
            value231: "+886"
        }
    };
    n.init = function(t) {
        if (t || (t = window._i18n && window._i18n.locale ? window._i18n.locale : "root"), Object.assign)
            Object.assign(this, this.__root, this["__" + t]);
        else {
            var e = this["__" + t] || this.__root;
            if (e)
                for (var n in e)
                    this[n] = e[n]
        }
    }, n.init(), t.exports = n
}, function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(4), n(2), n(132)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t, e, n) {
        return t("Select", [n], {
            defaultNodeMap: {
                $input: ".ui-select-input",
                $arrow: ".ui-select-arrow",
                $hiddenInput: ".ui-select-hidden",
                $optionsWrapper: ".ui-select-options"
            },
            optionItemSelector: "a",
            placeholder: "",
            data: null,
            valueName: "value",
            keyName: "name",
            value: "",
            oldValue: "",
            valueItem: null,
            onChange: e.noop,
            selectedIndex: 0,
            $selectedItemNode: null,
            optionHoverClassName: "hover01",
            name: "",
            maxHeight: 260,
            processRawProps: function(t) {
                if (this.inherited(arguments), !this.name) {
                    var n = e(t.rawNode);
                    this.name = n.data("name") || n.attr("name"), n.removeAttr("name")
                }
            },
            createUi: function() {
                this.inherited(arguments), this.initOptions(!0), this.$input.prop("readonly", !0), this.placeholder && this.$input.attr("placeholder", this.placeholder), this._setInputName()._setOptionsMaxHeight()
            },
            _setInputName: function() {
                return this.$hiddenInput.length || (this.$hiddenInput = e('<input type="hidden">'), this.$wrapper.append(this.$hiddenInput)), this.name ? this.$hiddenInput.attr("name", this.name || "") : this.name = this.$hiddenInput.attr("name"), this
            },
            _setOptionsMaxHeight: function() {
                return this.maxHeight && this.$optionsWrapper.css("maxHeight", this.maxHeight + "px"), this
            },
            bindEvents: function() {
                this._bindSelectOptionEvents()
            },
            unbindEvents: function() {
                this._unbindSelectOptionEvents()
            },
            _bindSelectOptionEvents: function() {
                this.$arrow.on("click", e.proxy(this.toggleOptions, this)), this.$input.on("click", e.proxy(this.toggleOptions, this)), this.$input.on("focus", function() {
                    e(this).prop("readonly") === !0 && this.blur()
                }), this.$hiddenInput.on("change", e.proxy(function() {
                    this.onChange(this.value, this.valueItem, this.oldValue), this.oldValue = this.$hiddenInput.val()
                }, this));
                var t = this;
                this.$optionsWrapper.on("click", this.optionItemSelector, function(n) {
                    n.preventDefault(), t.selectItem(e(this))
                }), e(document).off("click.ui-select." + this._id).on("click.ui-select." + this._id, function(n) {
                    var i = e(n.target).parents("[data-ui-id=" + t._id + "]");
                    i && i.length || t.onClickOuter()
                })
            },
            _unbindSelectOptionEvents: function() {
                this.$arrow.off(), this.$input.off(), this.$hiddenInput.off(), this.$optionsWrapper.off(), e(document).off("click.ui-select." + this._id), e(document).off("keydown.ui-select." + this._id)
            },
            toggleOptions: function() {
                this.$optionsWrapper.is(":hidden") ? this.showOptions() : this.hideOptions()
            },
            onKeydown: function(t) {
                var e = t.which;
                switch (e) {
                case 38:
                    this.selectPrevItem();
                    break;
                case 40:
                    this.selectNextItem();
                    break;
                case 13:
                    this.selectItem(null, !0);
                    break;
                case 9:
                    this.hideOptions()
                }
            },
            showOptions: function() {
                this.$optionsWrapper.show(), e(document).off("keydown.ui-select." + this._id).on("keydown.ui-select." + this._id, e.proxy(this.onKeydown, this)), this.optionsHeight = this.$optionsWrapper.height(), this._setInitSelected()
            },
            _setInitSelected: function() {
                if (!this.__initSelectedFlag) {
                    this.__initSelectedFlag = !0;
                    for (var t = 0, e = this.data.length; t < e; ++t) {
                        var n = this.data[t];
                        if (n[this.valueName] === this.value)
                            return void this._setItemSelected(t)
                    }
                }
            },
            hideOptions: function() {
                this.$optionsWrapper.hide(), e(document).off("keydown.ui-select." + this._id)
            },
            onClickOuter: function() {
                this.hideOptions()
            },
            createOptionsHtml: function(t, e, n) {
                var i = [];
                t = t || [];
                for (var r = 0, a = t.length; r < a; ++r) {
                    var o = t[r];
                    i.push('<a href="javascript:void(0)" data-index="' + r + '" data-value="' + o[e] + '" data-key="' + o[n] + '">' + o[n] + "</a>")
                }
                return i.join("")
            },
            initOptions: function(t) {
                if (this._initData(), this._setItemSelected(0), t)
                    this.set("value", this.value, !1);
                else {
                    var e = this.data[0];
                    e && !this.placeholder ? this._setValue(e) : this._setValue(null)
                }
            },
            _initData: function() {
                this.data ? (this.$optionsWrapper.html(this.createOptionsHtml(this.data, this.valueName, this.keyName)), this._addIndex(!0)) : (this.data = this.extractDataFromDom(), this._addIndex())
            },
            _addIndex: function(t) {
                var n = this;
                this.$optionsWrapper.find(this.optionItemSelector).each(function(i, r) {
                    var a = e(r);
                    if (a.data("index", i), t) {
                        var o = n.data[i] && n.data[i][n.valueName];
                        a.data("value", o || "")
                    }
                })
            },
            extractDataFromDom: function() {
                var t = this,
                    n = [];
                return this.$optionsWrapper.find(this.optionItemSelector).each(function(i, r) {
                    var a = e(r),
                        o = {};
                    o[t.keyName] = a.data("key") || a.text(), o[t.valueName] = a.data("value"), n.push(o)
                }), n
            },
            findItem: function(t) {
                for (var e = this.valueName, n = null, i = this.data || [], r = 0, a = i.length; r < a; ++r) {
                    var o = i[r];
                    if (o[e] === t) {
                        n = o;
                        break
                    }
                }
                return n
            },
            selectPrevItem: function() {
                this._setItemSelected(this.getIndex(this.selectedIndex - 1))
            },
            selectNextItem: function() {
                this._setItemSelected(this.getIndex(this.selectedIndex + 1))
            },
            getIndex: function(t) {
                var e = this.data && this.data.length;
                return e ? t < 0 ? e - 1 : t % e : 0
            },
            _setItemSelected: function(t) {
                var n = this.data && this.data.length;
                if (n) {
                    var i = e(this.$optionsWrapper.find(this.optionItemSelector).get(t));
                    this.$selectedItemNode && this.$selectedItemNode.removeClass(this.optionHoverClassName), i.addClass(this.optionHoverClassName), this.$selectedItemNode = i, this.selectedIndex = t, this._adjustScroll(i)
                } else
                    this.selectedIndex = 0
            },
            _adjustScroll: function(t) {
                if (this.optionsHeight) {
                    var e = t.position().top,
                        n = this.$optionsWrapper.scrollTop();
                    e > this.optionsHeight ? this.$optionsWrapper.scrollTop(e - this.optionsHeight + t.height() + n) : e < 0 && this.$optionsWrapper.scrollTop(n + e)
                }
            },
            selectItem: function(t, e) {
                var n = t ? t.data("index") : this.selectedIndex;
                this._setItemSelected(n), this.set("valueItem", this.data[n], !0), this.hideOptions()
            },
            _setValue: function(t) {
                var e = t && t[this.valueName];
                e || 0 === e || (e = "");
                var n = t && t[this.keyName] || "";
                this.value = e, this.valueItem = t, this.$input.val(n), this.$hiddenInput.val(e)
            },
            _setValueAttr: function(t, e) {
                var n = this.findItem(t);
                this.set("valueItem", n, e)
            },
            _setValueItemAttr: function(t, e) {
                return this.data ? (this._setValue(t), void (e && this.oldValue !== this.value + "" && this.$hiddenInput.change())) : void this._setValue(null)
            },
            _setDataAttr: function(t) {
                this.data = t || [], this.initOptions()
            },
            _getValueItemAttr: function(t) {
                return "undefined" == typeof t ? this.valueItem : this.findItem(t)
            }
        })
    })
}, function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        "use strict";
        r = [n(4), n(2), n(133)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t, e, n) {
        return t([n], {
            $searchRoot: null,
            processRawProps: function(t) {
                this.inherited(arguments), t.rawNode && (this._style = e(t.rawNode).data("style"))
            },
            createUi: function() {
                this.inherited(arguments), this._setCustomStyle()
            },
            insertTemplate: function() {
                var t = this.template;
                "function" == typeof this.template && (t = this.template(this)), this.$wrapper = e(t), e(this.rawNode).replaceWith(this.$wrapper), this.wrapper = this.$wrapper[0]
            },
            _setCustomStyle: function() {
                if (this._style) {
                    for (var t = this._style.split(";"), e = null, n = 0, i = t.length; n < i; ++n) {
                        var r = t[n],
                            a = r.split(":");
                        2 === a.length && (e = e || {}, e[a[0]] = a[1])
                    }
                    e && this.$wrapper.css(e)
                }
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
        a;
    !function(o, s) {
        "use strict";
        r = [n(4), n(134)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
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
    (function(a) {
        var o;
        o = "undefined" != typeof window ? window : a, function(a, o) {
            i = o, r = "function" == typeof i ? i.call(e, n, e, t) : i, !(void 0 !== r && (t.exports = r))
        }(this, function() {
            if (o.__webpack_ui_mng)
                return o.__webpack_ui_mng;
            var t = 0,
                e = [],
                n = 0;
            return o.__webpack_ui_mng = {
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
            }, o.__webpack_ui_mng
        })
    }).call(e, function() {
        return this
    }())
}, function(t, e, n) {
    var i,
        r,
        a = n(15),
        o = n(136),
        s = n(138),
        u = n(140),
        l = n(141);
    i = [], r = function() {
        var t = {
                disabledClass: "disabled",
                tipMsgClassName: "tipMsgClass",
                inputErrorClassName: "errorMsgClass",
                regFormWrapperName: [".regFormWrapper01", ".regFormWrapper02", ".regFormWrapper03"],
                validator: function() {
                    var t = this;
                    return $.extend({}, a, {
                        validPhone: function(e) {
                            return a.validPhone(e, t.codeSelect.get("value"), !0)
                        }
                    })
                },
                _displayTip: function(t, e) {
                    var n = e,
                        i = this["$" + t + "Input"];
                    i.removeClass(this.inputErrorClassName), n ? i.addClass(this.tipMsgClassName) : i.removeClass(this.tipMsgClassName), this["$" + t + "Msg"].html("")
                },
                _displayMsg: function(t, e, n, i) {
                    if (e) {
                        var r = this._createMsgHtml(t, e);
                        this["$" + t + "Msg"].addClass(this.errorMsgClassName).html(r).show(), this["$" + t + "Ok"].hide(), this.inputErrorClassName && this["$" + t + "Input"].addClass(this.inputErrorClassName), n && n.reject()
                    } else
                        this["$" + t + "Msg"].removeClass(this.errorMsgClassName).html("").hide(), this["$" + t + "Ok"].show(), this.inputErrorClassName && this["$" + t + "Input"].removeClass(this.inputErrorClassName), n && n.resolve();
                    var a = this["$" + t + "Input"];
                    a.removeClass(this.tipMsgClassName)
                },
                _checkBeforeSubmit: function() {
                    for (var t = this.validateNames || [], e = 0, n = t.length; e < n; ++e) {
                        var i = t[e],
                            r = i.substring(0, 1).toUpperCase() + i.substr(1);
                        this["valid" + r](this.getValue(i))
                    }
                },
                setInputValue: function(t, e) {
                    var n = $(t).find("form");
                    for (var i in e) {
                        var r = n.find("[name=" + i + "]");
                        r.val(e[i])
                    }
                },
                showWrapper: function(t) {
                    "string" == typeof t && (t = [t]);
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        $(n).show(), ".regFormWrapper02" === n && this.regForm02 && (this.regForm02.setCountDown(), this.regForm02.setPhoneNo(), this.regForm02.$uiContentCaptcha.hide(), this.regForm02.clearSmsInput()), ".regFormWrapper01" === n && this.regForm01 && (this.regForm01.refreshCaptcha(), this.regForm01.$captchaInput.val(""))
                    }
                },
                hideWrapper: function(t) {
                    "string" == typeof t && (t = [t]);
                    for (var e = 0; e < t.length; e++) {
                        $(t[e]).hide();
                        var n = t[e];
                        ".regFormWrapper02" === n && (this.clearCountDown(), this.$uiContentCaptcha.hide())
                    }
                }
            },
            e = new s($.extend({}, {
                navWrapperName: ".ui-tab-navs"
            }, t)),
            n = $.extend({}, {
                navWrapperName: ".ui-tab-navs",
                regForm02: e
            }, t),
            i = new o(n);
        e.regForm01 = i;
        new u($.extend({}, {
            regSuccess: l
        }, t));
        return {
            regreSet: function() {
                $(".regFormWrapper01").is(":hidden") && ($(".regFormWrapper").hide(), $(".regFormWrapper01").show(), $(".ui-tab-navs").show())
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r,
        a = n(10),
        o = n(4),
        s = n(2),
        u = n(137),
        l = n(129),
        c = n(131);
    i = [], r = function() {
        return o("RegForm01", [a], {
            rawNode: s(".regFormWrapper01")[0],
            nodeMap: {
                $phoneNo: ".ui-phone-no",
                $inputMsg: ".inputMsg",
                $uiCheckboxLayout: ".ui-checkbox-layout",
                $uiCaptcha: ".ui-captcha",
                $uiRememberContent: ".ui-remember-content"
            },
            inputNames: ["phone", "code", "captcha", "agreement"],
            validateNames: ["phone", "captcha", "agreement"],
            validationConfigs: {
                phone: {
                    type: "l"
                },
                agreement: {
                    events: "click"
                },
                captcha: {
                    type: "l"
                }
            },
            tipConfigs: {
                phone: {
                    tip: !0
                },
                captcha: {
                    tip: !0
                }
            },
            preCreateUi: function() {
                var t = this;
                this.codeSelect = this.codeSelect || new c({
                    rawNode: s("#codeSelectReg")[0],
                    optionItemSelector: "a",
                    value: "+86",
                    keyName: "value",
                    maxHeight: 170,
                    data: l,
                    createOptionsHtml: function(t, e, n) {
                        var i = [];
                        t = t || [];
                        for (var r = 0, a = t.length; r < a; ++r) {
                            var o = t[r];
                            i.push('<a href="javascript:void(0)" data-index="' + r + '" data-value="' + o[e] + '" data-key="' + o.txt + '">' + o.txt + '<span class="ui-extra-info">' + o[e] + "</span></a>")
                        }
                        return i.join("")
                    },
                    onChange: function(e, n, i) {
                        var r = t.getValue("phone");
                        r && t.$phoneInput.blur()
                    }
                })
            },
            postBindEvents: function() {
                var t = this;
                this.$uiCaptcha.click(function() {
                    t.refreshCaptcha()
                }), this.$agreementInput.click(function() {
                    t.$uiCheckboxLayout.toggleClass("checked")
                }), this.$uiRememberContent.click(function(e) {
                    "A" !== e.target.tagName && "INPUT" != e.target.tagName && t.$agreementInput.click()
                })
            },
            submit: function(t) {
                var e = s.Deferred(),
                    n = this;
                return u.sendSms(t).done(function(t) {
                    e.resolve(t)
                }).fail(function(t) {
                    n.refreshCaptcha(), e.reject(t)
                }), e
            },
            cb: function(t) {
                for (var e, n, i = {}, r = 0; r < this.inputNames.length; r++)
                    e = this.inputNames[r], n = this.getValue(e), i[e] = n;
                i.code_sig = t.data.code_sig;
                var a = this.regFormWrapperName;
                this.setInputValue(a[1], i), this.setInputValue(a[2], i), this.hideWrapper([a[0], this.navWrapperName]), this.showWrapper(a[1])
            },
            refreshCaptcha: function() {
                var t = this;
                this.isrefreshingCaptcha || (this.isrefreshingCaptcha = !0, u.refreshCaptcha().done(function() {
                    t.$uiCaptcha.attr("src", "/site/captcha?v=" + (new Date).getTime())
                }).always(function() {
                    t.isrefreshingCaptcha = !1
                }))
            }
        })
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r,
        a = n(2),
        o = n(19),
        s = n(22),
        u = (n(117), n(115), n(24));
    i = [], r = function() {
        return {
            refreshCaptcha: function() {
                var t = a.Deferred();
                return o.get({
                    url: "/site/captcha",
                    data: {
                        refresh: 1
                    },
                    timeout: 1e4
                }).done(function(e) {
                    t.resolve(e)
                }).fail(function(e) {
                    t.reject(e)
                }), t
            },
            getRegSalt: function() {
                var t = a.Deferred();
                return o.get({
                    url: "/reg/salt",
                    data: {
                        device_id: s.get()
                    },
                    timeout: 1e4
                }).done(function(e) {
                    t.resolve(e)
                }).fail(function(e) {
                    t.reject(e)
                }), t
            },
            sendSms: function(t) {
                var e = a.Deferred();
                return t = this.changeDataName(t), t.phone_no = a.trim(t.phone_no), o.post({
                    url: "/reg/send-sms",
                    data: a.extend({}, {
                        device_id: s.get()
                    }, t),
                    timeout: 1e4
                }).done(function(t) {
                    e.resolve(t)
                }).fail(function(t) {
                    e.reject(t)
                }), e
            },
            verifySms: function(t) {
                var e = a.Deferred();
                return t = this.changeDataName(t), t.phone_no = a.trim(t.phone_no), t.sms_code = a.trim(t.sms_code), o.post({
                    url: "/reg/verify-sms",
                    data: a.extend({}, {
                        device_id: s.get()
                    }, t),
                    timeout: 1e4
                }).done(function(t) {
                    e.resolve(t)
                }).fail(function(t) {
                    e.reject(t)
                }), e
            },
            smsReg: function(t) {
                var e = a.Deferred();
                return t = this.changeDataName(t), t.sms_code = a.trim(t.sms_code), t.phone_no = a.trim(t.phone_no), this.getRegSalt().done(function(n) {
                    var i = u(t.password).toString();
                    t.password_s2 = u(i + n.data.new_salt).toString(), t.password = null, t = a.extend({}, {
                        reg_sig: n.data.reg_sig,
                        device_id: s.get()
                    }, t), o.post({
                        url: "/reg/sms-reg",
                        data: t,
                        timeout: 1e4
                    }).done(function(t) {
                        e.resolve(t)
                    }).fail(function(t) {
                        e.reject(t)
                    })
                }).fail(function(t) {
                    e.reject(t)
                }), e
            },
            quickReg: function(t) {
                var e = a.Deferred();
                return o.post({
                    url: "/reg/quick-reg",
                    data: a.extend({}, {
                        device_id: s.get()
                    }, t),
                    timeout: 1e4
                }).done(function(t) {
                    e.resolve(t)
                }).fail(function(t) {
                    e.reject(t)
                }), e
            },
            changeDataName: function(t) {
                var e,
                    n = {};
                for (var i in t)
                    e = "phone" == i ? "phone_no" : "code" == i ? "region_no" : "msgCode" == i ? "sms_code" : i, n[e] = t[i];
                return n
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r,
        a = n(10),
        o = n(4),
        s = n(2),
        u = n(137),
        l = n(139);
    i = [], r = function() {
        return o("RegForm02", [a], {
            rawNode: s(".regFormWrapper02")[0],
            nodeMap: {
                $uiPhoneNo: ".ui-phone-no",
                $uiHiddenPhoneNo: ".ui-hidden-phone-no",
                $inputMsg: ".inputMsg",
                $uiVerifyCode: ".ui-verify-code",
                $uiBackBtn: ".ui-back-btn",
                $uiCaptcha: ".ui-captcha",
                $uiContentCaptcha: ".ui-content-captcha"
            },
            inputNames: ["msgCode", "captcha"],
            validateNames: ["msgCode", "captcha"],
            validationConfigs: {
                msgCode: {
                    type: "l"
                },
                captcha: {
                    type: "l"
                }
            },
            tipConfigs: {
                msgCode: {
                    tip: !0
                },
                captcha: {
                    tip: !0
                }
            },
            isdownCounting: !1,
            isSendingSms: !1,
            _timer: null,
            postBindEvents: function() {
                var t = this;
                this.$uiCaptcha.click(function() {
                    t.refreshCaptcha()
                }), this.$uiVerifyCode.click(function() {
                    if (!t.isdownCounting) {
                        var e = t.$uiContentCaptcha;
                        if (e.is(":hidden") && (t.refreshCaptcha(), t.$captchaInput.val(""), e.show()), !t.getValue("captcha"))
                            return void t.displayMsg("captcha", l.mustSendSms, t.dfdArray.captcha);
                        var n = t.$captchaMsg.html();
                        n || t.sendSms()
                    }
                }), this.$uiBackBtn.click(function() {
                    var e = t.regFormWrapperName;
                    t.hideWrapper(e[1]), t.showWrapper([e[0], t.navWrapperName])
                })
            },
            submit: function(t) {
                var e = s.Deferred(),
                    n = this;
                return u.verifySms(t).done(function(t) {
                    e.resolve(t)
                }).fail(function(t) {
                    n.displayError(t), e.reject(t)
                }), e
            },
            cb: function(t) {
                for (var e, n, i = {}, r = 0; r < this.inputNames.length; r++)
                    e = this.inputNames[r], n = this.getValue(e), i[e] = n;
                i.code_sig = t.data.code_sig;
                var a = this.regFormWrapperName;
                this.setInputValue(a[2], i), this.hideWrapper(a[1]), this.showWrapper(a[2])
            },
            setCountDown: function() {
                var t = this;
                this.isdownCounting = !0;
                var e = this.$uiVerifyCode;
                e.html("60s");
                var n = 60;
                this._timer = setInterval(function() {
                    n--, n > 0 ? e.html(n + "s") : (t.clearCountDown(), e.html(l.msgCodeStatus1))
                }, 1e3)
            },
            clearCountDown: function() {
                clearInterval(this._timer), this.isdownCounting = !1
            },
            setPhoneNo: function() {
                var t = this.$uiHiddenPhoneNo.val();
                this.$uiPhoneNo.html(t)
            },
            clearSmsInput: function() {
                this.$msgCodeInput.val(""), this.$msgCodeInput.focus().blur(), this.displayError()
            },
            refreshCaptcha: function() {
                var t = this;
                this.isrefreshingCaptcha || (this.isrefreshingCaptcha = !0, u.refreshCaptcha().done(function() {
                    t.$uiCaptcha.attr("src", "/site/captcha?v=" + (new Date).getTime())
                }).always(function() {
                    t.isrefreshingCaptcha = !1
                }))
            },
            sendSms: function() {
                var t = this,
                    e = t.$form.serializeObject();
                u.sendSms(e).done(function(e) {
                    t.setCountDown()
                }).fail(function(e) {
                    t.refreshCaptcha(), t.displayMsg("captcha", e)
                })
            }
        })
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e) {
    var n = {
        __root: {
            mustSendSms: "请先填写图形验证码",
            mustInputPhone: "请先输入您的手机号码",
            msgCodeStatus1: "发送验证码",
            registeredPhone: "您的手机号码已完成开户，请直接登录",
            setuping: "您的开户申请已提交，请直接登录查询开户进度",
            inputIdcard: "请输入开户证件号",
            verifyPhone: "请输入您的短信验证码",
            inputPhone: "请输入您的手机号码",
            setPwd: "设置登录密码"
        },
        "__zh-hk": {
            mustSendSms: "請先填寫圖形驗證碼",
            msgCodeStatus1: "傳送驗證碼",
            registeredPhone: "您的手機號碼已完成開戶，請直接登入",
            setuping: "您的開戶申請已提交，請直接登入査詢開戶進度",
            inputIdcard: "請輸入開戶證件號",
            verifyPhone: "請輸入您的簡訊驗證碼",
            inputPhone: "請輸入您的手機號碼",
            setPwd: "設定登入密碼"
        }
    };
    n.init = function(t) {
        if (t || (t = window._i18n && window._i18n.locale ? window._i18n.locale : "root"), Object.assign)
            Object.assign(this, this.__root, this["__" + t]);
        else {
            var e = this["__" + t] || this.__root;
            if (e)
                for (var n in e)
                    this[n] = e[n]
        }
    }, n.init(), t.exports = n
}, function(t, e, n) {
    var i,
        r,
        a = n(10),
        o = n(4),
        s = n(2),
        u = n(137);
    n(21), n(22);
    i = [], r = function() {
        return o("RegForm02", [a], {
            rawNode: s(".regFormWrapper03")[0],
            nodeMap: {
                $inputMsg: ".inputMsg",
                $passwordStrong: ".ui-password-strong"
            },
            inputNames: ["password"],
            validateNames: ["password"],
            validationConfigs: {
                password: {
                    type: "l"
                }
            },
            tipConfigs: {
                password: {
                    tip: !0
                }
            },
            onPasswordInput: function(t, e) {
                var n = this.validator.getPwdMessage(e),
                    i = n.message;
                this.$passwordStrong.html(i)
            },
            submit: function(t) {
                var e = s.Deferred();
                return u.smsReg(t).done(function(t) {
                    e.resolve(t)
                }).fail(function(t) {
                    e.reject(t)
                }), e
            },
            cb: function(t) {
                var e = this.regFormWrapperName;
                this.hideWrapper(e[2]);
                var n = s.extend({}, {
                    target: window._params.target,
                    jumpUrl: window._params.jumpUrl
                }, t.data);
                this.regSuccess.init(n)
            }
        })
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r,
        a = n(22),
        o = n(21),
        s = n(142);
    i = [], r = function() {
        return {
            $successWrapper: $(".regFormWrapper04"),
            $scanWrapper: $(".ui-m-scan-wrapper"),
            data: {},
            init: function(t) {
                this.data = t, this.render(t), this._bindEvent(), this.showSuccessWrapper()
            },
            showSuccessWrapper: function() {
                this.$successWrapper.show(), this.$scanWrapper.addClass("show")
            },
            render: function(t) {
                this.$successWrapper.find(".ui-uid").html(t.uid), (t.only_return || s.laterThanPC("3.20.0") || s.laterThanMac("4.3.1")) && this.$successWrapper.find(".setup-btn").hide()
            },
            _bindEvent: function() {
                var t = this;
                this.countDown(), setTimeout(function() {
                    t.jump(t.data.target)
                }, 3e3), this.$successWrapper.find(".target-back-btn").click(function() {
                    t.jump(t.data.target)
                }), this.$successWrapper.find(".setup-btn").click(function() {
                    var e = $(this).attr("target");
                    t.jump(e)
                })
            },
            countDown: function() {
                var t = this.$successWrapper.find(".ui-count-down"),
                    e = 3,
                    n = setInterval(function() {
                        e > 0 ? (e--, t.html(e + "s")) : clearInterval(n)
                    }, 1e3)
            },
            jump: function(t) {
                if (s.laterThanPC("3.20.0") || s.laterThanMac("4.3.1"))
                    return window.location.href = "https://passport.futu5.com/desktopnn/login?uid=" + this.data.uid, !0;
                this.data.jumpUrl;
                delete this.data.jumpUrl, delete this.data.target;
                var e = $.extend({}, {
                    target: t,
                    device_id: a.get()
                }, this.data);
                window.location.href = window._params.jumpUrl + "?" + o.transformRequest(e)
            }
        }
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function(t, e, n) {
    var i,
        r,
        a;
    !function(o, s) {
        r = [n(14)], i = s, a = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== a && (t.exports = a))
    }(this, function(t) {
        function e(t) {
            var e = {
                    niuyou: 1,
                    chatRoom: 2,
                    nnq: 4,
                    wxFriend: 8,
                    wxTimeline: 16,
                    qq: 32,
                    weibo: 64,
                    facebook: 128,
                    twitter: 256
                },
                n = 0;
            if (t)
                if ("all" === t)
                    n = 65535;
                else {
                    "string" == typeof t && (t = [t]);
                    for (var i = 0, r = t.length; i < r; ++i)
                        n |= e[t[i]] || 0
                }
            return n
        }
        function n(t, e) {
            var n,
                i;
            if (typeof t + typeof e != "stringstring")
                return !1;
            for (t = t.split("."), e = e.split("."), n = 0, i = Math.max(t.length, e.length); n < i; n++) {
                if (t[n] && !e[n] && parseInt(t[n]) > 0 || parseInt(t[n]) > parseInt(e[n]))
                    return 1;
                if (e[n] && !t[n] && parseInt(e[n]) > 0 || parseInt(t[n]) < parseInt(e[n]))
                    return -1
            }
            return 0
        }
        var i = {
                niuyou: "NiuYou",
                chatRoom: "ChatRoom",
                nnq: "Circle",
                wxFriend: "Wechat",
                wxTimeline: "WechatMoments",
                qq: "QQ",
                weibo: "SinaWeibo",
                facebook: "Facebook",
                twitter: "Twitter"
            },
            r = "10002";
        return {
            config: function(n) {
                if (t.isMobileNN()) {
                    var i = ["niuniunotice://url_change?url=", encodeURIComponent(n.link || window.location.href), "&title=", encodeURIComponent(n.title || window.document.title), "&description=", encodeURIComponent(n.desc || ""), "&imageUrl=", encodeURIComponent(n.imgUrl || "https://www.futunn.com/images/mobile/nn01.png"), "&disabled=", e(n.disabled), "&showTitle=", encodeURIComponent(n.showTitle || window.document.title), "&linkType=", encodeURIComponent(n.linkType || "")].join("");
                    window.location.assign(i)
                }
            },
            showShare: function(n) {
                if (t.isMobileNN()) {
                    var i = ["futunn://share/", encodeURIComponent(n.link || window.location.href), "/", encodeURIComponent(n.title || window.document.title), "/", encodeURIComponent(n.desc || " "), "/", encodeURIComponent(n.imgUrl || "https://www.futunn.com/images/mobile/nn01.png"), "/", e(n.disabled), "/", e(n.reportFlag), "/", n.reportEvent || ""].join("");
                    window.location.assign(i)
                }
            },
            quickShare: function(t) {
                if (this.isSupportQuickShare()) {
                    var e = ["futunn://quickShare/", encodeURIComponent(i[t.channel] || t.channel), "/", encodeURIComponent(t.link || window.location.href), "/", encodeURIComponent(t.title || window.document.title), "/", encodeURIComponent(t.desc || " "), "/", encodeURIComponent(t.imgUrl || "https://www.futunn.com/images/mobile/nn01.png")].join("");
                    window.location.assign(e)
                }
            },
            isSupportQuickShare: function() {
                return !!t.isMobileNN() && (!!this.laterThanAndroid("5.6.437") || !!this.laterThanIOS("6.2.297"))
            },
            login: function() {
                if (!this.isSupportLogin())
                    return !1;
                var t = ["futunn://login"].join("");
                window.location.assign(t)
            },
            callHelper: function() {
                return this.chatWith(r)
            },
            chatWith: function(e) {
                if (!t.isMobileNN() || !/\d+/g.test(e))
                    return !1;
                var n = ["futunn://chat", "/", e].join("");
                window.location.assign(n)
            },
            isSupportLogin: function() {
                return !!t.isMobileNN() && (!!this.laterThanAndroid("6.0.460") || !!this.laterThanIOS("6.5.309"))
            },
            isSupportStockScheme: function() {
                return !!t.isNnPlatform() && (!(!t.isMobileNN() && !t.isPCNN()) || !!this.laterThanMac("3.8.7"))
            },
            thirdPartyAuthorization: function(t, e) {
                this.isSupportThridPartyAuthorization() && window.location.assign("niuniunotice://" + t + "_authorization?callback=" + e)
            },
            isSupportThridPartyAuthorization: function() {
                return !!t.isMobileNN() && (!!this.laterThanAndroid("6.1.0") || !!this.laterThanIOS("6.5.309"))
            },
            laterThanIOS: function(e) {
                if (t.isIOS() && /futunn_iphone\/(\d+\.\d+.\d+)/i.test(window.navigator.userAgent)) {
                    var i = RegExp.$1;
                    if (n(i, e) >= 0)
                        return !0
                }
                return !1
            },
            laterThanAndroid: function(e) {
                if (t.isAndroid() && /futunn_android\/(\d+\.\d+.\d+)/i.test(window.navigator.userAgent)) {
                    var i = RegExp.$1;
                    if (n(i, e) >= 0)
                        return !0
                }
                return !1
            },
            laterThanMac: function(e) {
                if (t.isMac() && /futunn_mac\/(\d+\.\d+.\d+)/i.test(window.navigator.userAgent)) {
                    var i = RegExp.$1;
                    if (n(i, e) >= 0)
                        return !0
                }
                return !1
            },
            laterThanPC: function(e) {
                if (t.isPCNN() && /futunn_pc\/(\d+\.\d+.\d+)/i.test(window.navigator.userAgent)) {
                    var i = RegExp.$1;
                    if (n(i, e) >= 0)
                        return !0
                }
                return !1
            }
        }
    })
}]);


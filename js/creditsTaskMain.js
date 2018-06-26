!function(t) {
    function e(a) {
        if (n[a])
            return n[a].exports;
        var i = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return t[a].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var a = window.webpackJsonp;
    window.webpackJsonp = function(n, r) {
        for (var o, s, l = 0, c = []; l < n.length; l++)
            s = n[l], i[s] && c.push.apply(c, i[s]), i[s] = 0;
        for (o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        for (a && a(n, r); c.length;)
            c.shift().call(null, e)
    };
    var n = {},
        i = {
            2: 0
        };
    return e.e = function(t, a) {
        if (0 === i[t])
            return a.call(null, e);
        if (void 0 !== i[t])
            i[t].push(a);
        else {
            i[t] = [a];
            var n = document.getElementsByTagName("head")[0],
                r = document.createElement("script");
            r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = e.p + "chunks/" + ({}[t] || t) + "." + {
                3: "43b993d46dea4e171101"
            }[t] + ".js", n.appendChild(r)
        }
    }, e.m = t, e.c = n, e.p = "/scripts-build/", e(0)
}({
    0: function(t, e, a) {
        t.exports = a(67)
    },
    67: function(t, e, a) {
        a.e(3, function(t) {
            var e = [t(47), t(7), t(5), t(68), t(2), t(70), t(69), t(76), t(81)];
            (function(t, e, a, n, i, r, o, s, l) {
                var c = '<div class="ui-dialog-wrapper" style="display:none;"><div class="ui-dialog-dialogTitle ui-modal-header"><button class="ui-dialog-closeBtn iconfont ui-modal-close">&#xe605;</button><h3 class="ui-modal-title"></h3></div><div class="ui-dialog-dialogBody ui-dialog-hasIcon"><em class="warning iconfont"><font class="warning-font" style="display:block;">&#xe624;</font></em><p class="ui-dialog-messageTitle ui-modal-content"></p></div><div class="ui-dialog-dialogFooter ui-modal-footer"><button type="button" class="button btn01 submitBtn" data-event="Ok">确认</button></div></div>',
                    d = new r.Dialog({
                        template: c,
                        onModalBtnOk: function() {
                            this.hide()
                        },
                        close: function() {
                            this.hide()
                        },
                        btnSelector: "button.button",
                        title: "提示",
                        maskClassName: "dialog-cover",
                        content: "",
                        forbidScroll: !0
                    }),
                    u = '<div class="ui-dialog-wrapper" style="display:none;"><div class="ui-dialog-dialogTitle ui-modal-header"><button class="ui-dialog-closeBtn iconfont ui-modal-close">&#xe605;</button><h3 class="ui-modal-title"></h3></div><div class="ui-dialog-dialogBody ui-dialog-hasIcon"><em class="warning iconfont"><font class="ok-font" style="display:block;">&#xe623;</font></em><div class="ui-dialog-messageTitle ui-modal-content"></div></div><div class="ui-dialog-dialogFooter ui-modal-footer"><button type="button" class="button btn01 submitBtn" data-event="Ok">确定</button></div></div>',
                    p = new r.Dialog({
                        template: u,
                        onModalBtnOk: function() {
                            this.hide()
                        },
                        close: function() {
                            this.hide()
                        },
                        btnSelector: "button.button",
                        title: "提示",
                        maskClassName: "dialog-cover",
                        content: "",
                        forbidScroll: !0
                    }),
                    f = new e;
                i(document).ready(function() {
                    function e(t) {
                        o.show("加载中...", 0), i.ajax({
                            url: "/account/records",
                            dataType: "json",
                            type: "POST",
                            data: t,
                            success: function(n) {
                                if (o.hide(), "0" === n.code) {
                                    0 === t.page && (T.removeClass("current"), T.eq(1).addClass("current"), r.show(), k.hide());
                                    var i = n.data;
                                    t.page = i.current_page, t.pageCount = i.last_page, t.total = i.total, j ? j.set("data", t) : j = new s({
                                        rawNode: w,
                                        nodeMap: {
                                            $contentWrapper: "div.page01"
                                        },
                                        createTotalHtml: function(t) {
                                            return '<span class="span01">共 ' + t + " 条记录</span>"
                                        },
                                        createStartPageHtml: function() {
                                            return '<a href="javascript:;" class="page01more" data-page="1">1...</a>'
                                        },
                                        createPageHtml: function(t, e) {
                                            var a = e ? "current" : "";
                                            return '<a href="javascript:;" class="' + a + '" data-page="' + t + '">' + t + "</a>"
                                        },
                                        createMaxPageHtml: function(t) {
                                            return '<a href="javascript:;" class="page01more" data-page="' + t + '">...' + t + "</a>"
                                        },
                                        createPrevPageHtml: function(t, e) {
                                            var a = e ? "grayBtn" : "";
                                            return '<a href="javascript:;" class="fyBtn01 ' + a + '" data-page="' + t + '"><font>上一页</font></a>'
                                        },
                                        createNextPageHtml: function(t, e) {
                                            var a = e ? "grayBtn" : "";
                                            return '<a href="javascript:;" class="fyBtn01 ' + a + '" data-page="' + t + '"><font>下一页</font></a>'
                                        },
                                        createFirstPageHtml: function(t) {
                                            var e = t ? "grayBtn" : "";
                                            return '<a href="javascript:;" class="fyBtn01 ' + e + '" data-page="1"><font>首页</font></a>'
                                        },
                                        createLastPageHtml: function(t, e) {
                                            var a = e ? "grayBtn" : "";
                                            return '<a href="javascript:;" class="fyBtn01 ' + a + '" data-page="' + t + '"><font>末页</font></a>'
                                        },
                                        data: t,
                                        onClick: function(a) {
                                            t.page = a.attr("data-page"), e(t)
                                        },
                                        nodeOrder: ["total", "prev", "startPage", "pages", "maxPage", "next", "first", "last"],
                                        clickableSelector: "a:not(.grayBtn,.current)"
                                    });
                                    for (var l = n.data.data, u = "", p = 0; p < l.length; p++) {
                                        var f = l[p],
                                            g = p % 2 === 0 ? "first" : "end",
                                            m = f.type - 1 > 0 ? "-" : "+";
                                        u += '<tr class="' + g + '">', u += '<td class="left">' + a(f.record_date) + "</td>", u += '<td class="left">' + f.title + "</td>", u += '<td class="right">' + m + f.score + "</td>", u += '<td class="right">' + f.balance + "</td>", u += "</tr>"
                                    }
                                    c.html(u)
                                } else
                                    d.set("content", n.message), d.show()
                            },
                            error: function(t) {
                                d.set("content", "网络异常，请稍后再试"), d.show(), o.hide()
                            }
                        })
                    }
                    function a(t) {
                        t += "";
                        var e = new Date,
                            a = new Date(e.getFullYear() + "/" + e.getMonth() + "/" + e.getDate()),
                            n = t.substring(0, 4),
                            i = t.substring(4, 6),
                            r = t.substring(6, 8),
                            o = new Date(n + "/" + (i - 1) + "/" + r);
                        return a.toString() === o.toString() ? "今天" : a.getTime() - o.getTime() === 864e5 ? "昨天" : a.getFullYear() == n ? i + "/" + r : n + "/" + i + "/" + r
                    }
                    function n() {
                        i.ajax({
                            url: "/account/medal",
                            dataType: "json",
                            type: "GET",
                            success: function(t) {
                                if ("0" === t.code) {
                                    var e = t.data;
                                    M.html(e.fortune_score), H.html("Lv" + e.medal_level), I.css("width", 100 * e.percent + "%"), O.attr("src", e.medal_pic);
                                    var a = e.need_score,
                                        n = Math.round(1 * a / (1 - e.percent)),
                                        i = n - a;
                                    N.html(i + "/" + n)
                                }
                            },
                            error: function(t) {}
                        })
                    }
                    var r = i("div[name=creditsList]"),
                        c = r.find("table.credits-list tbody"),
                        u = r.find("div.list-selector"),
                        g = u.find("span"),
                        m = r.find("input[name=startDate]"),
                        v = r.find("em[name=startDateTrigger]"),
                        h = r.find("input[name=endDate]"),
                        y = r.find("em[name=endDateTrigger]"),
                        w = r.find("div[name=pageComponent]"),
                        b = r.find("div[name=query]"),
                        k = (w.find("div.page01"), i("div[name=creditsTask]")),
                        _ = k.find("div[name=taskType]"),
                        x = (_.find("span"), i("div[name=myTasks]"));
                    x.on("click", "a[name=gotoWork]", function(e) {
                        var a = i(e.target),
                            n = a.attr("title");
                        f.uploadServer({
                            client_time: Date.now() / 1e3 >> "0",
                            client_ver: "0",
                            report_id: "4",
                            event_id: "400148",
                            uid: t.nnId,
                            ext1: n
                        }, function(t, e) {})
                    });
                    var D = i("div[name=selector]"),
                        C = new Date,
                        P = new l({
                            zIndex: 100,
                            format: "yyyy-MM-dd",
                            rawNode: m,
                            startYear: C.getFullYear(),
                            startMonth: C.getMonth() + 1,
                            callback: function() {
                                for (var t = "", e = 0; e < this.result.length; e++)
                                    t += this.result[e].formatStr + " ";
                                this.$trigger.val(t)
                            }
                        }),
                        S = new l({
                            zIndex: 100,
                            format: "yyyy-MM-dd",
                            rawNode: h,
                            startYear: C.getFullYear(),
                            startMonth: C.getMonth() + 1,
                            callback: function() {
                                for (var t = "", e = 0; e < this.result.length; e++)
                                    t += this.result[e].formatStr + " ";
                                this.$trigger.val(t)
                            }
                        });
                    y.on("click", function(t) {
                        S.$self.show(), S.position(), P.$self.hide(), t.stopPropagation()
                    }), v.on("click", function(t) {
                        P.$self.show(), P.position(), S.$self.hide(), t.stopPropagation()
                    });
                    var T = D.find("span");
                    T.eq(0).on("click", function() {
                        var t = i(this);
                        t.hasClass("current") || (T.removeClass("current"), t.addClass("current"), r.hide(), k.show())
                    }), T.eq(1).on("click", function() {
                        var a = i(this);
                        a.hasClass("current") || (B = {
                            page: 0,
                            pageCount: 0,
                            total: 0,
                            type: "",
                            perPage: 20,
                            startDate: "",
                            endDate: ""
                        }, g.removeClass("current"), g.eq(0).addClass("current"), e(B)), f.uploadServer({
                            client_time: Date.now() / 1e3 >> "0",
                            client_ver: "0",
                            report_id: "4",
                            event_id: "400151",
                            uid: t.nnId
                        }, function(t, e) {})
                    }), u.on("click", "span", function(t) {
                        var a = i(t.target);
                        a.hasClass("current") || (g.removeClass("current"), a.addClass("current"), B.type = a.attr("type"), e(B))
                    });
                    var B = {
                        page: 0,
                        pageCount: 0,
                        total: 0,
                        type: "",
                        perPage: 20,
                        startDate: "",
                        endDate: ""
                    };
                    b.on("click", function() {
                        B && (B.page = 0, B.startDate = m.val().replace(/-/g, "").trim(), B.endDate = h.val().replace(/-/g, "").trim()), e(B)
                    });
                    var j,
                        M = i("[name=fortuneScore]"),
                        O = i("[name=medalPic]"),
                        H = i("[name=medalLevel]"),
                        I = i("[name=medalPercent]"),
                        N = i("[name=medalProcessNums]"),
                        F = k.find("div[name=tasks]");
                    F.on("click", "div[name=finish]", function(e) {
                        var a = i(e.target),
                            r = a.attr("status"),
                            s = JSON.parse(a.attr("task")),
                            l = i("#taskList");
                        "unGet" === r && (a.attr("status", "getting"), o.show("加载中...", 0), i.ajax({
                            url: "/account/pick-up",
                            dataType: "json",
                            type: "POST",
                            data: {
                                tid: s.tid
                            },
                            success: function(e) {
                                if (o.hide(), "0" == e.code) {
                                    a.parent().parent(".item").remove(), 0 == l.children(".item").length ? i("#tastHead,#taskList").hide() : (l.children(".item:odd").removeClass("left"), l.children(".item:even").addClass("left")), a.attr("status", "finished");
                                    var r = "<p>恭喜！您完成了" + s.title + '</p><p class="text04">' + s.description + '</p><p class="text05">获得奖励<span class="icon-star iconfont">&#xe652;</span>+' + s.score + "</p>";
                                    null != s.daily_limit && (r = r + '<p class="text04">今日还可完成' + (s.daily_limit - s.today_count) + "次(" + s.today_count + "/" + s.daily_limit + ")</p>"), p.set("content", r), p.show(), n(), f.uploadServer({
                                        client_time: Date.now() / 1e3 >> "0",
                                        client_ver: "0",
                                        report_id: "4",
                                        event_id: "400150",
                                        uid: t.nnId,
                                        ext1: s.title,
                                        ext2: "领取成功"
                                    }, function(t, e) {})
                                } else
                                    a.attr("status", "unGet"), d.set("content", e.message), d.show(), f.uploadServer({
                                        client_time: Date.now() / 1e3 >> "0",
                                        client_ver: "0",
                                        report_id: "4",
                                        event_id: "400150",
                                        uid: t.nnId,
                                        ext1: s.title,
                                        ext2: "领取失败"
                                    }, function(t, e) {})
                            },
                            error: function(e) {
                                a.attr("status", "unGet"), o.hide(), d.set("content", "网络异常，请稍后再试"), d.show(), f.uploadServer({
                                    client_time: Date.now() / 1e3 >> "0",
                                    client_ver: "0",
                                    report_id: "4",
                                    event_id: "400150",
                                    uid: t.nnId,
                                    ext1: s.title,
                                    ext2: "领取失败"
                                }, function(t, e) {})
                            }
                        }))
                    })
                })
            }).apply(null, e)
        })
    }
});


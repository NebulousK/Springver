window.txEval = function (source, target) {
    if (typeof source == "function") {
        return source.call(target || this)
    } else {
        if (typeof source == "string") {
            return (target) ? target.eval(source) : this.eval(source)
        }
    }
};
(function () {
    try {
        EditorJSLoader.readyState = "loading"
    } catch (m) {}
    var n = document,
        h = window,
        j = n.documentElement,
        q = false,
        b = true,
        c = null,
        p;
    var g = {};
    (function () {
        Object.extend = function (t, v) {
            for (var u in v) {
                t[u] = v[u]
            }
            return t
        };
        h.Class = {
            create: function () {
                return function () {
                    this.initialize.apply(this, arguments)
                }
            }
        };
        h.$break = {};
        Function.prototype.bind = function () {
            var t = this,
                v = $A(arguments),
                u = v.shift();
            return function () {
                return t.apply(u, v.concat($A(arguments)))
            }
        };
        Function.prototype.bindAsEventListener = function () {
            var t = this,
                v = $A(arguments),
                u = v.shift();
            return function (w) {
                return t.apply(u, [w || h.event].concat(v))
            }
        };
        var s = function (v) {
            var t = arguments;
            if (t.length > 1) {
                for (var u = 0, x = [], w = t.length; u < w; u++) {
                    x.push(g(t[u]))
                }
                return x
            }
            if (typeof v == "string") {
                v = n.getElementById(v)
            }
            return v
        };
        g = s;
        var r = navigator.userAgent.toLowerCase();
        var e = function (t) {
            return r.indexOf(t) != -1
        };
        Object.extend(g, {
            chrome: e("chrome"),
            safari: e("safari") && e("chrome") == q,
            gecko: e("firefox"),
            gecko_ver: e("firefox") ? parseFloat(r.replace(/.*firefox\/([\d\.]+).*/g, "$1")) : 0,
            msie: e("msie"),
            msie_ver: e("msie") ? parseFloat(navigator.appVersion.split("MSIE")[1]) : 0,
            webkit: e("applewebkit"),
            webkit_ver: e("applewebkit") ? parseFloat(r.replace(/.*safari\//g, "")) : 0,
            opera: e("opera"),
            presto: e("presto"),
            os_win: e("win"),
            os_mac: e("mac"),
            iphone: e("iphone"),
            ipod: e("ipod"),
            ipad: e("ipad"),
            ios: e("like mac os x") && e("mobile"),
            ios_ver: (e("like mac os x") && e("mobile")) ? parseFloat(r.replace(/^.*os (\d+)([_\d]*) .*$/g, "$1.$2").replace(/_/g, "")) : 0,
            android: e("android"),
            android_ver: e("android") ? parseFloat(r.replace(/.*android[\s]*([\d\.]+).*/g, "$1")) : 0,
            blackberry: e("blackberry"),
            winphone: e("windows phone os"),
            wince: e("windows ce")
        });
        g.msie6 = g.msie && 6 <= g.msie_ver && g.msie_ver < 7;
        Object.extend(g, {
            extend: Object.extend,
            browser: function () {
                if (g.msie) {
                    return "msie"
                } else {
                    if (g.gecko) {
                        return "firefox"
                    } else {
                        if (g.chrome) {
                            return "chrome"
                        } else {
                            if (g.webkit) {
                                return "safari"
                            } else {
                                if (g.opera) {
                                    return "opera"
                                } else {
                                    return ""
                                }
                            }
                        }
                    }
                }
            }()
        });
        h.$must = function (v, t) {
            var u = g(v);
            if (!u) {
                throw new Error("[Exception] " + t + " : not exist element(" + v + ")")
            }
            return u
        };
        h.txlib = s
    })();
    (function () {
        g.extend(g, {
            classNames: function (e) {
                return e.className.split(" ")
            },
            hasClassName: function (r, e) {
                if (e && r.className) {
                    var s = r.className.split(/\s+/);
                    return s.contains(e)
                }
                return q
            },
            addClassName: function (e, r) {
                if (!this.hasClassName(e, r)) {
                    e.className += " " + r
                }
            },
            removeClassName: function (r, e) {
                var s = r.className.split(/\s+/);
                r.className = s.without(e).compact().join(" ")
            },
            visible: function (e) {
                return g.getStyle(e, "display") != "none"
            },
            toggle: function (e) {
                e = g(e);
                g[g.visible(e) ? "hide" : "show"](e);
                return e
            },
            show: function (e) {
                g(e).style.display = "block";
                return e
            },
            hide: function (e) {
                g(e).style.display = "none";
                return e
            }
        })
    })();
    g.extend(g, {
        getStyle: function (r, s) {
            r = g(r);
            s = s == "float" ? "cssFloat" : s.camelize();
            var t = r.style[s];
            if (!t) {
                var e = n.defaultView.getComputedStyle(r, c);
                t = e ? e[s] : c
            }
            if (s == "opacity") {
                return t ? parseFloat(t) : 1
            }
            return t == "auto" ? c : t
        },
        setStyle: function (e, s, r) {
            e = g(e);
            var u = e.style;
            for (var t in s) {
                if (s.hasOwnProperty(t)) {
                    if (t === "opacity") {
                        g.setOpacity(e, s[t])
                    } else {
                        u[(t === "float" || t === "cssFloat") ? (u.styleFloat === p ? "cssFloat" : "styleFloat") : (r ? t : t.camelize())] = s[t]
                    }
                }
            }
            return e
        },
        setStyleProperty: function (e, s) {
            var r = b;
            this.setStyle(e, s, r)
        },
        getOpacity: function (e) {
            return g(e).getStyle("opacity")
        },
        setOpacity: function (e, r) {
            e = g(e);
            e.style.opacity = (r == 1 || r === "") ? "" : (r < 0.00001) ? 0 : r;
            return e
        },
        applyCSSText: function (s, r) {
            var e = s.createElement("style");
            e.setAttribute("type", "text/css");
            if (e.styleSheet) {
                e.styleSheet.cssText = r
            } else {
                e.textContent = r
            }
            s.getElementsByTagName("head")[0].appendChild(e)
        }
    });
    (function () {
        if (g.msie) {
            g.getStyle = function (r, s) {
                r = g(r);
                s = (s == "float" || s == "cssFloat") ? "styleFloat" : s.camelize();
                var t = r.style[s];
                if (!t && r.currentStyle) {
                    t = r.currentStyle[s]
                }
                if (s == "opacity") {
                    if (t = (g.getStyle(r, "filter") || "").match(/alpha\(opacity=(.*)\)/)) {
                        if (t[1]) {
                            return parseFloat(t[1]) / 100
                        }
                    }
                    return 1
                }
                if (t == "auto") {
                    if ((s == "width" || s == "height") && (g.getStyle(r, "display") != "none")) {
                        return r["offset" + s.capitalize()] + "px"
                    }
                    return c
                }
                return t
            }
        }
        if (g.msie) {
            g.setOpacity = function (r, u) {
                r = g(r);
                var t = g.getStyle(r, "filter"),
                    s = r.style;
                if (u == 1 || u === "") {
                    s.filter = t.replace(/alpha\([^\)]*\)/gi, "");
                    return r
                } else {
                    if (u < 0.00001) {
                        u = 0
                    }
                }
                s.filter = t.replace(/alpha\([^\)]*\)/gi, "") + "alpha(opacity=" + (u * 100) + ")";
                return r
            }
        }
        if (g.gecko) {
            g.extend(g, {
                setOpacity: function (r, s) {
                    r = g(r);
                    r.style.opacity = (s == 1) ? 0.999999 : (s === "") ? "" : (s < 0.00001) ? 0 : s;
                    return r
                }
            })
        }
        g.JSONHelper = {
            encodeURIComponentReplacer: function (r, s) {
                if (typeof s === "string") {
                    if (!e(s)) {
                        return encodeURIComponent(s)
                    }
                }
                return s
            },
            decodeURIComponentReviver: function (r, s) {
                if (typeof s === "string") {
                    if (!e(s)) {
                        return decodeURIComponent(s)
                    } else {
                        return JSON.parse(s, arguments.callee)
                    }
                }
                return s
            }
        };
        var e = function (r) {
            return (r.charAt(0) == "[" && r.charAt(r.length - 1) == "]")
        }
    })();
    (function () {
        g.extend(g, {
            cumulativeOffset: function (r) {
                var e = 0,
                    s = 0;
                do {
                    e += r.offsetTop || 0;
                    s += r.offsetLeft || 0;
                    r = r.offsetParent
                } while (r);
                return [s, e]
            },
            positionedOffset: function (r) {
                var e = 0,
                    t = 0;
                do {
                    e += r.offsetTop || 0;
                    t += r.offsetLeft || 0;
                    r = r.offsetParent;
                    if (r) {
                        if (r.tagName == "BODY") {
                            break
                        }
                        var s = g.getStyle(r, "position");
                        if (s == "relative" || s == "absolute") {
                            break
                        }
                    }
                } while (r);
                return [t, e]
            },
            getDimensions: function (s) {
                var w = g.getStyle(s, "display");
                if (w != "none" && w != c) {
                    return {
                        width: s.offsetWidth,
                        height: s.offsetHeight
                    }
                }
                var r = s.style;
                var v = r.visibility;
                var t = r.position;
                var e = r.display;
                r.visibility = "hidden";
                r.position = "absolute";
                r.display = "block";
                var x = s.clientWidth;
                var u = s.clientHeight;
                r.display = e;
                r.position = t;
                r.visibility = v;
                return {
                    width: x,
                    height: u
                }
            },
            getCoords: function (y, t) {
                var s = t || false;
                var r = y.offsetWidth;
                var u = y.offsetHeight;
                var v = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                var x;
                while (y) {
                    v.left += y.offsetLeft || 0;
                    v.top += y.offsetTop || 0;
                    y = y.offsetParent;
                    if (s) {
                        if (y) {
                            if (y.tagName == "BODY") {
                                break
                            }
                            x = g.getStyle(y, "position");
                            if (x !== "static") {
                                break
                            }
                        }
                    }
                }
                v.right = v.left + r;
                v.bottom = v.top + u;
                return v
            },
            getCoordsTarget: function (e) {
                return this.getCoords(e, b)
            }
        });
        if (g.webkit) {
            g.cumulativeOffset = function (r) {
                var e = 0,
                    s = 0;
                do {
                    e += r.offsetTop || 0;
                    s += r.offsetLeft || 0;
                    if (r.offsetParent == n.body) {
                        if (g.getStyle(r, "position") == "absolute") {
                            break
                        }
                    }
                    r = r.offsetParent
                } while (r);
                return [s, e]
            }
        }
    })();
    (function () {
        g.extend(g, {
            KEY_BACKSPACE: 8,
            KEY_TAB: 9,
            KEY_RETURN: 13,
            KEY_ESC: 27,
            KEY_LEFT: 37,
            KEY_UP: 38,
            KEY_RIGHT: 39,
            KEY_DOWN: 40,
            KEY_DELETE: 46,
            KEY_HOME: 36,
            KEY_END: 35,
            KEY_PAGEUP: 33,
            KEY_PAGEDOWN: 34,
            element: function (e) {
                return g(e.target || e.srcElement)
            },
            isLeftClick: function (e) {
                return (((e.which) && (e.which == 1)) || ((e.button) && (e.button == 1)))
            },
            pointerX: function (e) {
                return e.pageX || (e.clientX + (n.documentElement.scrollLeft || n.body.scrollLeft))
            },
            pointerY: function (e) {
                return e.pageY || (e.clientY + (n.documentElement.scrollTop || n.body.scrollTop))
            },
            stop: function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                    e.stopPropagation()
                } else {
                    e.returnValue = q;
                    e.cancelBubble = b
                }
            },
            findElement: function (s, r) {
                var e = g.element(s);
                while (e.parentNode && (!e.tagName || !e.tagName.toUpperCase || (e.tagName.toUpperCase() != r.toUpperCase()))) {
                    e = e.parentNode
                }
                return e
            },
            observers: q,
            _observeAndCache: function (t, s, r, e) {
                if (!this.observers) {
                    this.observers = []
                }
                if (t.addEventListener) {
                    this.observers.push([t, s, r, e]);
                    t.addEventListener(s, r, e)
                } else {
                    if (t.attachEvent) {
                        this.observers.push([t, s, r, e]);
                        t.attachEvent("on" + s, r)
                    }
                }
            },
            simulateEvent: function (v, r, u) {
                var w = g.observers;
                if (!w) {
                    return
                }
                for (var s = 0, t = w.length; s < t; s++) {
                    var e = w[s];
                    if (e && e[1] === r && e[0] === v) {
                        e[2](u)
                    }
                }
            },
            unloadCache: function () {
                if (!g.observers) {
                    return
                }
                for (var e = 0, r = g.observers.length; e < r; e++) {
                    g.stopObserving.apply(this, g.observers[e]);
                    g.observers[e][0] = c
                }
                g.observers = q
            },
            observe: function (t, s, r, e) {
                t = g(t);
                e = e || q;
                if (s == "keypress" && (g.webkit || t.attachEvent)) {
                    s = "keydown"
                }
                g._observeAndCache(t, s, r, e)
            },
            stopObserving: function (u, t, s, r) {
                u = g(u);
                r = r || q;
                if (t == "keypress" && (g.webkit || u.attachEvent)) {
                    t = "keydown"
                }
                if (u.removeEventListener) {
                    u.removeEventListener(t, s, r)
                } else {
                    if (u.detachEvent) {
                        try {
                            u.detachEvent("on" + t, s)
                        } catch (v) {}
                    }
                }
            }
        });
        if (g.msie) {
            g.observe(window, "unload", g.unloadCache, q)
        }
    })();
    (function () {
        g.extend(Object, {
            clone: function (e) {
                return Object.extend({}, e)
            }
        });
        g.extend(g, {
            isPrimitiveType: function (r) {
                var e = new g.Set("string", "number", "boolean", "date", "function");
                return e.contains(typeof r)
            },
            deepcopy: function (t, e) {
                var s = t;
                if (!e) {
                    return s
                }
                for (var r in e) {
                    switch (typeof (e[r])) {
                    case "string":
                    case "number":
                    case "boolean":
                    case "date":
                    case "function":
                        s[r] = e[r];
                        break;
                    default:
                        if (e[r]) {
                            if (e[r].constructor == Array) {
                                s[r] = [].concat(e[r])
                            } else {
                                s[r] = s[r] || {};
                                this.deepcopy(s[r], e[r])
                            }
                        } else {
                            s[r] = c
                        }
                        break
                    }
                }
                return s
            }
        })
    })();
    (function () {
        g.extend(String, {
            interpret: function (e) {
                return e == c ? "" : String(e)
            },
            specialChar: {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                "\\": "\\\\"
            }
        });
        g.extend(String.prototype, {
            gsub: function (u, s) {
                var e = "",
                    t = this,
                    r;
                s = arguments.callee.prepareReplacement(s);
                while (t.length > 0) {
                    if (r = t.match(u)) {
                        e += t.slice(0, r.index);
                        e += String.interpret(s(r));
                        t = t.slice(r.index + r[0].length)
                    } else {
                        e += t, t = ""
                    }
                }
                return e
            },
            strip: function () {
                return this.replace(/^\s+/, "").replace(/\s+$/, "")
            },
            stripTags: function () {
                return this.replace(/<\/?[^>]+>/gi, "")
            },
            toQueryParams: function (t) {
                var e = this.strip().match(/([^?#]*)(#.*)?$/);
                if (!e) {
                    return {}
                }
                var s = {};
                var r = c;
                e[1].split(t || "&").each(function (x) {
                    var w = c,
                        u = c;
                    var v = x.match(/([\w_]+)=(.*)/);
                    if (v) {
                        r = w = decodeURIComponent(v[1]);
                        if (v[2]) {
                            u = decodeURIComponent(v[2])
                        }
                    } else {
                        if (r) {
                            w = r;
                            u = s[w];
                            u += "&" + decodeURIComponent(x)
                        } else {
                            return
                        }
                    } if (w in s) {
                        if (s[w].constructor != Array) {
                            s[w] = [s[w]]
                        }
                        s[w].push(u)
                    } else {
                        s[w] = u
                    }
                });
                return s
            },
            toArray: function () {
                return this.split("")
            },
            times: function (s) {
                var e = "";
                for (var r = 0; r < s; r++) {
                    e += this
                }
                return e
            },
            camelize: function () {
                var t = this.split("-"),
                    e = t.length;
                if (e == 1) {
                    return t[0]
                }
                var s = this.charAt(0) == "-" ? t[0].charAt(0).toUpperCase() + t[0].substring(1) : t[0];
                for (var r = 1; r < e; r++) {
                    s += t[r].charAt(0).toUpperCase() + t[r].substring(1)
                }
                return s
            },
            capitalize: function () {
                return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase()
            },
            include: function (e) {
                return this.indexOf(e) > -1
            },
            empty: function () {
                return this == ""
            },
            blank: function () {
                return /^\s*$/.test(this)
            }
        });
        String.prototype.gsub.prepareReplacement = function (r) {
            if (typeof r == "function") {
                return r
            }
            var e = new Template(r);
            return function (s) {
                return e.evaluate(s)
            }
        };
        g.extend(String.prototype, {
            trim: function () {
                return this.replace(/(^\s*)|(\s*$)/g, "")
            },
            getRegExp: function () {
                return this.replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\//g, "\\/").replace(/\?/g, "\\?").replace(/\^/g, "\\^").replace(/\)/g, "\\)").replace(/\(/g, "\\(").replace(/\]/g, "\\]").replace(/\[/g, "\\[").replace(/\$/g, "\\$").replace(/\+/g, "\\+").replace(/\|/g, "\\|").replace(/&/g, "(&|&amp;)")
            },
            toNumber: function () {
                return (isNaN(this) ? 0 : parseInt(this, 10))
            },
            toFloat: function () {
                return (isNaN(this) ? 0 : parseFloat(this))
            },
            getRealLength: function () {
                var s = this;
                var e = 0;
                for (var r = 0; r < s.length; r++) {
                    e += (escape(s.charAt(r)).charAt(1) == "u") ? 2 : 1
                }
                return e
            },
            cutRealLength: function (s) {
                var t = this;
                var e = 0;
                for (var r = 0; r < t.length; r++) {
                    e += (escape(t.charAt(r)).charAt(1) == "u") ? 2 : 1;
                    if (e > s) {
                        return t.substring(0, r - 3).concat("...")
                    }
                }
                return t
            },
            getCut: function (e) {
                return this.cutRealLength(e)
            },
            parsePx: function () {
                if (this == c || this.length == 0) {
                    return 0
                } else {
                    if (this.indexOf("px") > -1) {
                        return this.substring(0, this.indexOf("px")).toNumber()
                    } else {
                        return this.toNumber()
                    }
                }
            },
            toPx: function () {
                if (this.indexOf("px") > -1) {
                    return this + ""
                } else {
                    return this + "px"
                }
            },
            isPx: function () {
                var e = this;
                if (e.trim() == "") {
                    return false
                } else {
                    if (e.indexOf("px") != -1) {
                        e = this.parsePx()
                    }
                }
                return !isNaN(e)
            },
            toByteUnit: function () {
                return this.toNumber().toByteUnit()
            },
            toCurrency: function () {
                var r = this;
                for (var e = 0; e < Math.floor((r.length - (1 + e)) / 3); e++) {
                    r = r.substring(0, r.length - (4 * e + 3)) + "," + r.substring(r.length - (4 * e + 3))
                }
                return r
            },
            replaceAll: function (e, r) {
                e = e.replace(new RegExp("(\\W)", "g"), "\\$1");
                r = r.replace(new RegExp("\\$", "g"), "$$$$");
                return this.replace(new RegExp(e, "gm"), r)
            }
        })
    })();
    (function () {
        g.extend(Number.prototype, {
            toPaddedString: function (s, r) {
                var e = this.toString(r || 10);
                return "0".times(s - e.length) + e
            },
            toTime: function () {
                return Math.floor(this / 60).toString().toPaddedString(2) + ":" + (this % 60).toString().toPaddedString(2)
            },
            toByteUnit: function () {
                var s;
                var e = ["GB", "MB", "KB"];
                if (this == 0) {
                    return "0" + e[2]
                }
                for (var r = 0; r < e.length; r++) {
                    s = this / Math.pow(1024, 3 - r);
                    if (s < 1) {
                        continue
                    }
                    return (Math.round(s * 10) / 10) + e[r]
                }
                return "1" + e[2]
            },
            toPx: function () {
                return this.toString() + "px"
            },
            parsePx: function () {
                return this + 0
            },
            isPx: function () {
                return b
            },
            toNumber: function () {
                return this + 0
            },
            toCurrency: function () {
                return this.toString().toCurrency()
            },
            getRegExp: function () {
                return this.toString().getRegExp()
            }
        })
    })();
    (function () {
        g.extend(Array.prototype, {
            each: function (s) {
                try {
                    for (var r = 0, t = this.length; r < t; r++) {
                        s(this[r])
                    }
                } catch (u) {
                    if (u != $break) {
                        throw u
                    }
                }
                return this
            },
            indexOf: function (r) {
                for (var e = 0; e < this.length; e++) {
                    if (this[e] == r) {
                        return e
                    }
                }
                return -1
            },
            map: function (s) {
                for (var e = [], r = 0, t = this.length; r < t; ++r) {
                    e[r] = s(this[r])
                }
                return e
            },
            include: function (e) {
                return this.contains(e)
            },
            contains: function (e) {
                return this.indexOf(e) >= 0
            },
            pluck: function (r) {
                var e = [];
                this.each(function (s) {
                    e.push(s[r])
                });
                return e
            },
            find: function (t) {
                for (var r = 0, e = this.length; r < e; r++) {
                    var s = this[r];
                    if (t(s, r)) {
                        return s
                    }
                }
                return c
            },
            findAll: function (u) {
                var s = [];
                for (var r = 0, e = this.length; r < e; r++) {
                    var t = this[r];
                    if (u(t, r)) {
                        s.push(t)
                    }
                }
                return s
            },
            inject: function (u, s) {
                for (var r = 0, e = this.length; r < e; r++) {
                    var t = this[r];
                    u = s(u, t, r)
                }
                return u
            },
            without: function () {
                var e = $A(arguments);
                return this.findAll(function (r) {
                    return !e.include(r)
                })
            },
            last: function () {
                return this[this.length - 1]
            },
            flatten: function () {
                return this.inject([], function (r, e) {
                    return r.concat(e && e.constructor == Array ? e.flatten() : [e])
                })
            },
            compact: function () {
                return this.findAll(function (e) {
                    return (e != c) && (e != "")
                })
            },
            uniq: function (e) {
                return this.inject([], function (t, s, r) {
                    if (0 == r || (e ? t.last() != s : !t.contains(s))) {
                        t.push(s)
                    }
                    return t
                })
            },
            toMap: function (r) {
                var e = {};
                this.each(function (s) {
                    e[s[r]] = s
                });
                return e
            }
        });
        Array.prototype.select = Array.prototype.findAll;
        Array.prototype.detect = Array.prototype.find;
        h.$A = function (s) {
            if (!s) {
                return []
            }
            if (typeof s.toArray === "function") {
                return s.toArray()
            } else {
                var t = [];
                for (var r = 0, e = s.length; r < e; r++) {
                    t.push(s[r])
                }
                return t
            }
        };
        g.Set = function () {
            var r = arguments;
            for (var s = 0, e = r.length; s < e; s++) {
                this[r[s]] = b
            }
        };
        g.Set.prototype.contains = function (e) {
            return e in this
        };
        g.objectToQueryString = function (s) {
            var t = [];
            for (var e in s) {
                if (s.hasOwnProperty(e)) {
                    var r = s[e];
                    if (r === c || r === p) {
                        r = ""
                    }
                    t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r))
                }
            }
            return t.join("&")
        }
    })();
    (function () {
        if (typeof (HTMLElement) != p + "") {
            var s = HTMLElement.prototype;
            var r = s.__proto__ = {
                __proto__: s.__proto__
            };
            if (HTMLElement.prototype.__defineSetter__) {
                r.__defineSetter__("innerText", function (v) {
                    this.textContent = v
                })
            }
            if (HTMLElement.prototype.__defineGetter__) {
                r.__defineGetter__("innerText", function () {
                    return this.textContent
                })
            }
        }
        if (typeof (XMLDocument) != p + "") {
            var u = XMLDocument;
            if (u.prototype.__defineGetter__) {
                u.prototype.__defineGetter__("xml", function () {
                    return (new XMLSerializer()).serializeToString(this)
                })
            }
        }
        if (typeof (Node) != p + "") {
            if (Node.prototype && Node.prototype.__defineGetter__) {
                Node.prototype.__defineGetter__("xml", function () {
                    return (new XMLSerializer()).serializeToString(this)
                })
            }
        }
        if (typeof (n.implementation) != p + "") {
            if (n.implementation.hasFeature("XPath", "3.0")) {
                if (typeof (u) != p + "") {
                    u.prototype.selectNodes = function (x, z) {
                        if (!z) {
                            z = this
                        }
                        var y = this.defaultNS;
                        var v = this.evaluate(x, z, {
                            normalResolver: this.createNSResolver(this.documentElement),
                            lookupNamespaceURI: function (B) {
                                switch (B) {
                                case "dflt":
                                    return y;
                                default:
                                    return this.normalResolver.lookupNamespaceURI(B)
                                }
                            }
                        }, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, c);
                        var A = [];
                        for (var w = 0; w < v.snapshotLength; w++) {
                            A[w] = v.snapshotItem(w)
                        }
                        return A
                    };
                    u.prototype.setProperty = function (x, w) {
                        if (x == "SelectionNamespaces" && w.indexOf("xmlns:dflt") == 0) {
                            this.defaultNS = w.replace(/^.*=\'(.+)\'/, "$1")
                        }
                    };
                    u.prototype.defaultNS;
                    u.prototype.selectSingleNode = function (w, x) {
                        if (!x) {
                            x = this
                        }
                        var v = this.selectNodes(w, x);
                        if (v.length > 0) {
                            return v[0]
                        } else {
                            return c
                        }
                    };
                    u.prototype.createNode = function (v, x, w) {
                        if (v == 1) {
                            return this.createElementNS(w, x)
                        } else {
                            return c
                        }
                    }
                }
                if (typeof (Element) != p + "") {
                    Element.prototype.selectNodes = function (v) {
                        if (this.ownerDocument.selectNodes) {
                            return this.ownerDocument.selectNodes(v, this)
                        } else {
                            throw "For XML Elements Only"
                        }
                    };
                    Element.prototype.selectSingleNode = function (v) {
                        if (this.ownerDocument.selectSingleNode) {
                            return this.ownerDocument.selectSingleNode(v, this)
                        } else {
                            throw "For XML Elements Only"
                        }
                    };
                    Element.prototype.text;
                    var t = Element.prototype;
                    var e = t.__proto__ = {
                        __proto__: t.__proto__
                    };
                    if (Element.prototype.__defineSetter__) {
                        e.__defineSetter__("text", function (v) {
                            this.textContent = v
                        })
                    }
                    if (Element.prototype.__defineGetter__) {
                        e.__defineGetter__("text", function () {
                            return this.textContent
                        })
                    }
                    if (h.origElement) {
                        h.origElement.prototype.selectNodes = Element.prototype.selectNodes;
                        h.origElement.prototype.selectSingleNode = Element.prototype.selectSingleNode
                    }
                }
            }
        }
    })();
    h.$tx = g;
    h.tx = {};

    function o(r, t) {
        for (var s = 0, e = r.length; s < e; s++) {
            t(r[s])
        }
    }
    h.installHyperscript = function (r, e) {
        o("a big blockquote br b center code dd dl dt div em font form h1 h2 h3 h4 h5 h6 hr img iframe input i li ol option pre p script select small span strike strong style sub sup table tbody td textarea tr ul u".split(" "), function (s) {
            r[s] = function () {
                var t = e.createElement(s);
                o(arguments, function (v) {
                    if (v.nodeType) {
                        t.appendChild(v)
                    } else {
                        if (typeof v == "string" || typeof v == "number") {
                            if (s == "textarea") {
                                if (g.msie) {
                                    t.value += v
                                } else {
                                    t.text += v
                                }
                            } else {
                                t.innerHTML += v
                            }
                        } else {
                            if (typeof v == "array") {
                                for (var x = 0; x < v.length; x++) {
                                    t.appendChild(v[x])
                                }
                            } else {
                                for (var u in v) {
                                    if (u == "style") {
                                        for (var w in v[u]) {
                                            if ((w == "float" || w == "cssFloat")) {
                                                t[u][t[u].styleFloat === p ? "cssFloat" : "styleFloat"] = v[u][w]
                                            } else {
                                                t[u][w] = v[u][w]
                                            }
                                        }
                                    } else {
                                        if (["more", "less", "longDesc"].contains(u)) {
                                            if (t.setAttribute) {
                                                t.setAttribute(u, v[u])
                                            }
                                        } else {
                                            if (["colSpan", "rowSpan", "cellPadding", "cellSpacing"].contains(u)) {
                                                if (t.setAttribute) {
                                                    t.setAttribute(u, v[u])
                                                }
                                            } else {
                                                if (v[u]) {
                                                    t[u] = v[u]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
                return t
            }
        })
    };
    installHyperscript(h.tx, n);
    (function () {
        function r(t, s) {
            if (!t) {
                return ""
            }
            if (s.indexOf("{if:") > -1) {
                s = s.replace(/#\{if:([_\w]+)([=><!]+)([_'"\-\w]+)\}([\s\S]*?)#\{\/if:\1\}/gm, function (y, v, x, B, A) {
                    if (t[v] == c) {
                        return y
                    }
                    var w = q;
                    try {
                        x = ((x == "=") ? "==" : x);
                        var C = '"' + (t[v] + "").replace(/['"]/g, "") + '"';
                        var u = '"' + B.replace(/['"]/g, "") + '"';
                        w = txEval("(" + C + x + u + ")")
                    } catch (z) {
                        w = q
                    }
                    if (w) {
                        return r(t, A)
                    } else {
                        return ""
                    }
                })
            }
            if (s.indexOf("{for:") > -1) {
                s = s.replace(/#\{for:([_\w]+):?(\d*):?(\d*)\}([\s\S]*?)#\{\/for:\1\}/gm, function (B, u, C, w, z) {
                    if (!t[u] || !t[u].length) {
                        return B
                    }
                    var x = t[u];
                    var v = [];
                    C = !!C ? (isNaN(C) ? x.length : parseInt(C)) : x.length;
                    w = !!w ? (isNaN(w) ? 0 : parseInt(w)) : 0;
                    for (var y = 0, A = Math.min(x.length, C); y < A; y++) {
                        v.push(r(x[y], z))
                    }
                    return v.join("").substring(w)
                })
            }
            return s.replace(/#\{([_\w]+)\}/g, function (v, u) {
                if (t[u] != c) {
                    return t[u]
                } else {
                    return v
                }
            })
        }
        var e = h.Template = function (s) {
            this.template = s
        };
        e.prototype = {
            evaluate: function (s) {
                return r(s, this.template)
            },
            evaluateToDom: function (t, s) {
                if (typeof (s) === "string") {
                    s = n.getElementById(s)
                }
                s.innerHTML = r(t, this.template)
            },
            evaluateAsDom: function (u, t) {
                var s = (t || document).createElement("div");
                s.innerHTML = r(u, this.template);
                return s.firstChild
            }
        }
    })();
    (function () {
        var e, u, s;
        var v = {
            "#": function (y, z) {
                if ((e = /(\S*)#(\S+)/.exec(z)) !== c) {
                    var x = e[1];
                    var A = e[2];
                    if (!y.getElementById) {
                        y = y.ownerDocument
                    }
                    if (u = y.getElementById(A)) {
                        if (x.length < 1 || u.nodeName.toLowerCase() == x) {
                            return [u]
                        }
                    }
                }
                return []
            },
            ".": function (z, D) {
                if ((e = /(\S*)\.(\S+)/.exec(D)) !== c) {
                    var y = ((e[1] === "") ? "*" : e[1]);
                    var x = e[2];
                    if ((s = z.getElementsByTagName(y)).length > 0) {
                        var B = [];
                        for (var A = 0; A < s.length; A++) {
                            var C = s[A];
                            if ((new RegExp("(^| )" + x + "($| )")).test(C.className)) {
                                B.push(C)
                            }
                        }
                        return B
                    }
                }
                return []
            },
            "*": function (x, A) {
                if ((s = x.getElementsByTagName(A)).length > 0) {
                    var z = [];
                    for (var y = 0; y < s.length; y++) {
                        z.push(s[y])
                    }
                    return z
                }
                return []
            }
        };
        var r = function (x, B) {
            if (x.length < 1) {
                return []
            }
            var A;
            if ((f = /(\.|#)/.exec(B)) !== c) {
                if (v[f[1]]) {
                    A = f[1]
                }
            }
            A = A || "*";
            var z = [];
            for (var y = 0; y < x.length; y++) {
                z = z.concat(v[A](x[y], B))
            }
            return z
        };
        var w = function (x, A) {
            var z = [x];
            var B = A.split(" ");
            for (var y = 0; y < B.length; y++) {
                z = r(z, B[y])
            }
            return z
        };
        var t = function (A, x, B) {
            B = !!B;
            if (A.nodeType !== 1 && A.nodeType !== 9) {
                return (B ? [] : c)
            }
            if (!x || typeof x !== "string") {
                return (B ? [] : c)
            }
            var z;
            var C = [];
            var D = x.split(",");
            for (var y = 0; y < D.length; y++) {
                z = w(A, D[y]);
                if (z && z.length > 0) {
                    C = C.concat(z);
                    if (!B) {
                        break
                    }
                }
            }
            if (B) {
                return C
            } else {
                return C[0]
            }
        };
        h.dGetty = function () {
            var x = arguments;
            if (x.length == 1) {
                if (typeof (x[0]) === "string") {
                    return t(n, x[0])
                }
            } else {
                if (x.length == 2) {
                    if (x[0].nodeType && typeof (x[1]) === "string") {
                        return t(x[0], x[1])
                    }
                }
            }
            return c
        };
        h.dGetties = function () {
            var x = arguments;
            if (x.length == 1) {
                if (typeof (x[0]) === "string") {
                    return t(n, x[0], b)
                }
            } else {
                if (x.length == 2) {
                    if (x[0].nodeType && typeof (x[1]) === "string") {
                        return t(x[0], x[1], b)
                    }
                }
            }
            return []
        }
    })();
    (function () {
        var e, u, s;
        var v = {
            "#": function (x, y) {
                if ((e = /(\S*)#(\S+)/.exec(y)) !== c) {
                    var w = e[1];
                    var z = e[2];
                    if (w.length < 1 || x.nodeName.toLowerCase() == w) {
                        if (x.id == z) {
                            return b
                        }
                    }
                }
                return q
            },
            ".": function (y, z) {
                if ((e = /(\S*)\.(\S+)/.exec(z)) !== c) {
                    var x = e[1];
                    var w = e[2];
                    if (x.length < 1 || y.nodeName.toLowerCase() == x) {
                        if (y.className.indexOf(w) > -1) {
                            return b
                        }
                    }
                }
                return q
            },
            "*": function (x, y) {
                var w = y;
                if (x.nodeName.toLowerCase() == w) {
                    return b
                }
                return q
            }
        };
        var r = function (w, y) {
            var x;
            if ((f = /(\.|#)/.exec(y)) !== c) {
                if (v[f[1]]) {
                    x = f[1]
                }
            }
            x = x || "*";
            return v[x](w, y)
        };
        var t = function (y, w) {
            if (y.nodeType !== 1) {
                return q
            }
            var z = q;
            var A = w.split(",");
            for (var x = 0; x < A.length; x++) {
                z = r(y, A[x]);
                if (z) {
                    break
                }
            }
            return z
        };
        h.dChecky = function () {
            var w = arguments;
            if (w.length == 2) {
                if (w[0].nodeType && typeof (w[1]) === "string") {
                    return t(w[0], w[1])
                }
            }
            return q
        }
    })();
    (function () {
        var e = function (s) {
            this.selectSingleNode = function (t) {
                if (!s) {
                    return c
                }
                return s.selectSingleNode(t)
            };
            this.selectNodes = function (t) {
                if (!s) {
                    return []
                }
                return s.selectNodes(t)
            };
            this.getAttributeNode = function (t) {
                if (!s) {
                    return c
                }
                return s.getAttributeNode(t)
            };
            this.hasChildNodes = function () {
                if (!s) {
                    return q
                }
                return s.hasChildNodes()
            };
            this.text = s ? (s.textContent || s.text) : c;
            this.type = s ? s.nodeType : 0;
            this.name = (s && s.nodeType == 1) ? (s.nodeName || "") : "";
            return this
        };
        e.prototype = {
            getValueOrDefault: function (t, s) {
                if (t === "") {
                    return s
                } else {
                    if (typeof (s) === "number") {
                        return (isNaN(t) ? 0 : parseInt(t))
                    } else {
                        if (typeof (s) === "boolean") {
                            return !!t
                        } else {
                            return t
                        }
                    }
                }
            },
            xText: function (s) {
                s = s || "";
                var t = this.text;
                t = (t || "").trim();
                return this.getValueOrDefault(t, s)
            },
            xAttr: function (u, t) {
                t = t || "";
                var s = this.getAttributeNode(u);
                var v = (!s) ? "" : s.nodeValue.trim();
                return this.getValueOrDefault(v, t)
            },
            xGet: function (s) {
                return xGetty(this, s)
            },
            xGets: function (s) {
                return xGetties(this, s)
            }
        };
        var r = ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.5.0", "MSXML2.DOMDocument.4.0", "MSXML4.DOMDocument", "MSXML3.DOMDocument", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XmlDom"];
        h.xCreate = function (u) {
            if (!!(h.attachEvent && !h.opera)) {
                var t = (function () {
                    var w = c;
                    for (var v = 0; v < r.length; v++) {
                        try {
                            w = new ActiveXObject(r[v])
                        } catch (x) {}
                        if (w !== c) {
                            return w
                        }
                    }
                    return c
                })();
                if (t === c) {
                    return c
                }
                t.async = q;
                t.loadXML(u);
                if (t.parseError.errorCode !== 0) {
                    return c
                }
                return new e(t)
            } else {
                var s = new DOMParser();
                var t = s.parseFromString(new String(u), "text/xml");
                return new e(t)
            }
        };
        h.xGetty = function (s, t) {
            if (s === c) {
                return c
            }
            return new e(s.selectSingleNode(t))
        };
        h.xGetties = function (v, x) {
            if (v === c) {
                return []
            }
            var w = [];
            var t = v.selectNodes(x);
            for (var u = 0, s = t.length; u < s; u++) {
                w.push(new e(t[u]))
            }
            return w
        }
    })();
    (function () {
        var s = {
            yyyy: /(\d{4})/,
            MM: /(\d{2})/,
            dd: /(\d{2})/,
            HH: /(\d{2})/,
            mm: /(\d{2})/,
            ss: /(\d{2})/,
            yy: /(\d{2})/,
            M: /([0-1]*\d)/,
            d: /([0-3]*\d)/,
            EEE: /(\uc77c|\uc6d4|\ud654|\uc218|\ubaa9|\uae08|\ud1a0)/
        };
        var e = ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"];

        function r(t) {
            this.pattern = t
        }
        r.prototype = {
            parse: function (t) {
                var u = {};
                this.pattern.replace(/(\w)\1*/g, function (v) {
                    if (s[v]) {
                        t = t.replace(s[v], function (w, x) {
                            u[v] = x;
                            return ""
                        })
                    }
                    return v
                });
                return new Date(Date.parse([Math.max(1, parseInt(u.MM || u.M || "01", 10)), "/", Math.max(1, parseInt(u.dd || u.d || "01", 10)), "/", (u.yyyy || u.yy || new Date().getFullYear()), " ", u.HH || "00", ":", u.mm || "00", ":", u.ss || "00"].join("")))
            },
            format: function (t) {
                return this.pattern.replace("yyyy", t.getFullYear()).replace("MM", (t.getMonth() + 1).toPaddedString(2)).replace("dd", t.getDate().toPaddedString(2)).replace("HH", t.getHours().toPaddedString(2)).replace("mm", t.getMinutes().toPaddedString(2)).replace("ss", t.getSeconds().toPaddedString(2)).replace("yy", t.getYear()).replace("M", t.getMonth() + 1).replace("d", t.getDate()).replace("EEE", e[t.getDay()])
            }
        };
        h.DateFormat = r
    })();
    (function () {
        var u = 16 * 3;
        var v = 16;
        var r = function (w) {
            return (w.clientWidth == w.scrollWidth && w.scrollWidth != w.offsetWidth) ? w.offsetWidth : w.scrollWidth
        };
        var s = function (x, w) {
            if (w) {
                return w.offsetHeight
            }
            return (x.clientHeight == x.scrollHeight && x.scrollHeight != x.offsetHeight) ? x.offsetHeight : x.scrollHeight
        };
        var e = function (z) {
            var C = window.top;
            var y = document.documentElement;
            var w = top.screen.availHeight - u;
            var x = z || r(y);
            var B = s(y);
            var A = false;
            if (w < B) {
                B = w;
                C.resizeBy(0, B - y.clientHeight)
            }
            this.resize = function (K) {
                var E = (y.clientWidth < y.scrollWidth);
                var I = y.clientWidth;
                var J = y.clientHeight;
                var D = (C.screenLeft) ? C.screenLeft : C.screenX;
                var H = (C.screenTop) ? C.screenTop : C.screenY;
                var F = r(y);
                var G = s(y, K);
                if (w < G) {
                    C.moveTo(D - (g.msie ? 3 : 0), 0);
                    if (g.msie) {
                        document.body.scroll = "yes"
                    }
                    C.resizeBy(0, w - J);
                    if (!A) {
                        C.resizeBy(0, -v)
                    }
                    A = true
                } else {
                    if (g.msie) {
                        document.body.scroll = "no"
                    }
                    C.resizeBy(0, G - J);
                    if (A) {
                        C.resizeBy(-v, 0)
                    }
                    if (E) {
                        C.resizeBy(0, -v)
                    }
                    A = false
                }
            }
        };
        var t;
        window.resizeHeight = function (w, x) {
            if (!t) {
                t = new e(w)
            }
            t.resize(x)
        }
    })();
    h.swfobject = function () {
        var T = p + "",
            H = "object",
            ai = "Shockwave Flash",
            am = "ShockwaveFlash.ShockwaveFlash",
            G = "application/x-shockwave-flash",
            ah = "SWFObjectExprInst",
            N = "onreadystatechange",
            ae = h,
            z = n,
            J = navigator,
            aj = q,
            ak = [x],
            E = [],
            ad = [],
            Y = [],
            B, ag, U, R, Z = q,
            e = q,
            D, W, C = b,
            ac = function () {
                var aq = typeof z.getElementById != T && typeof z.getElementsByTagName != T && typeof z.createElement != T,
                    ay = J.userAgent.toLowerCase(),
                    ao = J.platform.toLowerCase(),
                    av = ao ? /win/.test(ao) : /win/.test(ay),
                    at = ao ? /mac/.test(ao) : /mac/.test(ay),
                    aw = /webkit/.test(ay) ? parseFloat(ay.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : q,
                    an = !+"\v1",
                    ax = [0, 0, 0],
                    ar = c;
                if (typeof J.plugins != T && typeof J.plugins[ai] == H) {
                    ar = J.plugins[ai].description;
                    if (ar && !(typeof J.mimeTypes != T && J.mimeTypes[G] && !J.mimeTypes[G].enabledPlugin)) {
                        aj = b;
                        an = q;
                        ar = ar.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ax[0] = parseInt(ar.replace(/^(.*)\..*$/, "$1"), 10);
                        ax[1] = parseInt(ar.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ax[2] = /[a-zA-Z]/.test(ar) ? parseInt(ar.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof ae.ActiveXObject != T) {
                        try {
                            var au = new ActiveXObject(am);
                            if (au) {
                                ar = au.GetVariable("$version");
                                if (ar) {
                                    an = b;
                                    ar = ar.split(" ")[1].split(",");
                                    ax = [parseInt(ar[0], 10), parseInt(ar[1], 10), parseInt(ar[2], 10)]
                                }
                            }
                        } catch (ap) {}
                    }
                }
                return {
                    w3: aq,
                    pv: ax,
                    wk: aw,
                    ie: an,
                    win: av,
                    mac: at
                }
            }(),
            A = function () {
                if (!ac.w3) {
                    return
                }
                if ((typeof z.readyState != T && z.readyState == "complete") || (typeof z.readyState == T && (z.getElementsByTagName("body")[0] || z.body))) {
                    v()
                }
                if (!Z) {
                    if (typeof z.addEventListener != T) {
                        z.addEventListener("DOMContentLoaded", v, q)
                    }
                    if (ac.ie && ac.win) {
                        z.attachEvent(N, function () {
                            if (z.readyState == "complete") {
                                z.detachEvent(N, arguments.callee);
                                v()
                            }
                        });
                        if (ae == top) {
                            (function () {
                                if (Z) {
                                    return
                                }
                                try {
                                    z.documentElement.doScroll("left")
                                } catch (an) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                v()
                            })()
                        }
                    }
                    if (ac.wk) {
                        (function () {
                            if (Z) {
                                return
                            }
                            if (!/loaded|complete/.test(z.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            v()
                        })()
                    }
                    I(v)
                }
            }();

        function v() {
            if (Z) {
                return
            }
            try {
                var ap = z.getElementsByTagName("body")[0].appendChild(S("span"));
                ap.parentNode.removeChild(ap)
            } catch (aq) {
                return
            }
            Z = b;
            var an = ak.length;
            for (var ao = 0; ao < an; ao++) {
                ak[ao]()
            }
        }

        function aa(an) {
            if (Z) {
                an()
            } else {
                ak[ak.length] = an
            }
        }

        function I(ao) {
            if (typeof ae.addEventListener != T) {
                ae.addEventListener("load", ao, q)
            } else {
                if (typeof z.addEventListener != T) {
                    z.addEventListener("load", ao, q)
                } else {
                    if (typeof ae.attachEvent != T) {
                        y(ae, "onload", ao)
                    } else {
                        if (typeof ae.onload == "function") {
                            var an = ae.onload;
                            ae.onload = function () {
                                an();
                                ao()
                            }
                        } else {
                            ae.onload = ao
                        }
                    }
                }
            }
        }

        function x() {
            if (aj) {
                al()
            } else {
                X()
            }
        }

        function al() {
            var an = z.getElementsByTagName("body")[0];
            var aq = S(H);
            aq.setAttribute("type", G);
            var ap = an.appendChild(aq);
            if (ap) {
                var ao = 0;
                (function () {
                    if (typeof ap.GetVariable != T) {
                        var ar = ap.GetVariable("$version");
                        if (ar) {
                            ar = ar.split(" ")[1].split(",");
                            ac.pv = [parseInt(ar[0], 10), parseInt(ar[1], 10), parseInt(ar[2], 10)]
                        }
                    } else {
                        if (ao < 10) {
                            ao++;
                            setTimeout(arguments.callee, 10);
                            return
                        }
                    }
                    an.removeChild(aq);
                    ap = c;
                    X()
                })()
            } else {
                X()
            }
        }

        function X() {
            var ax = E.length;
            if (ax > 0) {
                for (var aw = 0; aw < ax; aw++) {
                    var ao = E[aw].id;
                    var ar = E[aw].callbackFn;
                    var aq = {
                        success: q,
                        id: ao
                    };
                    if (ac.pv[0] > 0) {
                        var av = s(ao);
                        if (av) {
                            if (V(E[aw].swfVersion) && !(ac.wk && ac.wk < 312)) {
                                M(ao, b);
                                if (ar) {
                                    aq.success = b;
                                    aq.ref = P(ao);
                                    ar(aq)
                                }
                            } else {
                                if (E[aw].expressInstall && Q()) {
                                    var az = {};
                                    az.data = E[aw].expressInstall;
                                    az.width = av.getAttribute("width") || "0";
                                    az.height = av.getAttribute("height") || "0";
                                    if (av.getAttribute("class")) {
                                        az.styleclass = av.getAttribute("class")
                                    }
                                    if (av.getAttribute("align")) {
                                        az.align = av.getAttribute("align")
                                    }
                                    var ay = {};
                                    var an = av.getElementsByTagName("param");
                                    var at = an.length;
                                    for (var au = 0; au < at; au++) {
                                        if (an[au].getAttribute("name").toLowerCase() != "movie") {
                                            ay[an[au].getAttribute("name")] = an[au].getAttribute("value")
                                        }
                                    }
                                    af(az, ay, ao, ar)
                                } else {
                                    F(av);
                                    if (ar) {
                                        ar(aq)
                                    }
                                }
                            }
                        }
                    } else {
                        M(ao, b);
                        if (ar) {
                            var ap = P(ao);
                            if (ap && typeof ap.SetVariable != T) {
                                aq.success = b;
                                aq.ref = ap
                            }
                            ar(aq)
                        }
                    }
                }
            }
        }

        function P(aq) {
            var an = c;
            var ao = s(aq);
            if (ao && ao.nodeName == "OBJECT") {
                if (typeof ao.SetVariable != T) {
                    an = ao
                } else {
                    var ap = ao.getElementsByTagName(H)[0];
                    if (ap) {
                        an = ap
                    }
                }
            }
            return an
        }

        function Q() {
            return !e && V("6.0.65") && (ac.win || ac.mac) && !(ac.wk && ac.wk < 312)
        }

        function af(aq, ar, an, ap) {
            e = b;
            U = ap || c;
            R = {
                success: q,
                id: an
            };
            var av = s(an);
            if (av) {
                if (av.nodeName == "OBJECT") {
                    B = w(av);
                    ag = c
                } else {
                    B = av;
                    ag = an
                }
                aq.id = ah;
                if (typeof aq.width == T || (!/%$/.test(aq.width) && parseInt(aq.width, 10) < 310)) {
                    aq.width = "310"
                }
                if (typeof aq.height == T || (!/%$/.test(aq.height) && parseInt(aq.height, 10) < 137)) {
                    aq.height = "137"
                }
                z.title = z.title.slice(0, 47) + " - Flash Player Installation";
                var au = ac.ie && ac.win ? "ActiveX" : "PlugIn",
                    at = "MMredirectURL=" + ae.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + au + "&MMdoctitle=" + z.title;
                if (typeof ar.flashvars != T) {
                    ar.flashvars += "&" + at
                } else {
                    ar.flashvars = at
                } if (ac.ie && ac.win && av.readyState != 4) {
                    var ao = S("div");
                    an += "SWFObjectNew";
                    ao.setAttribute("id", an);
                    av.parentNode.insertBefore(ao, av);
                    av.style.display = "none";
                    (function () {
                        if (av.readyState == 4) {
                            av.parentNode.removeChild(av)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                }
                K(aq, ar, an)
            }
        }

        function F(ao) {
            if (ac.ie && ac.win && ao.readyState != 4) {
                var an = S("div");
                ao.parentNode.insertBefore(an, ao);
                an.parentNode.replaceChild(w(ao), an);
                ao.style.display = "none";
                (function () {
                    if (ao.readyState == 4) {
                        ao.parentNode.removeChild(ao)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                ao.parentNode.replaceChild(w(ao), ao)
            }
        }

        function w(ar) {
            var aq = S("div");
            if (ac.win && ac.ie) {
                aq.innerHTML = ar.innerHTML
            } else {
                var ao = ar.getElementsByTagName(H)[0];
                if (ao) {
                    var at = ao.childNodes;
                    if (at) {
                        var an = at.length;
                        for (var ap = 0; ap < an; ap++) {
                            if (!(at[ap].nodeType == 1 && at[ap].nodeName == "PARAM") && !(at[ap].nodeType == 8)) {
                                aq.appendChild(at[ap].cloneNode(b))
                            }
                        }
                    }
                }
            }
            return aq
        }

        function K(az, ax, ao) {
            var an, aq = s(ao);
            if (ac.wk && ac.wk < 312) {
                return an
            }
            if (aq) {
                if (typeof az.id == T) {
                    az.id = ao
                }
                if (ac.ie && ac.win) {
                    var ay = "";
                    for (var av in az) {
                        if (az[av] != Object.prototype[av]) {
                            if (av.toLowerCase() == "data") {
                                ax.movie = az[av]
                            } else {
                                if (av.toLowerCase() == "styleclass") {
                                    ay += ' class="' + az[av] + '"'
                                } else {
                                    if (av.toLowerCase() != "classid") {
                                        ay += " " + av + '="' + az[av] + '"'
                                    }
                                }
                            }
                        }
                    }
                    var aw = "";
                    for (var au in ax) {
                        if (ax[au] != Object.prototype[au]) {
                            aw += '<param name="' + au + '" value="' + ax[au] + '" />'
                        }
                    }
                    aq.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ay + ">" + aw + "</object>";
                    ad[ad.length] = az.id;
                    an = s(az.id)
                } else {
                    var ap = S(H);
                    ap.setAttribute("type", G);
                    for (var at in az) {
                        if (az[at] != Object.prototype[at]) {
                            if (at.toLowerCase() == "styleclass") {
                                ap.setAttribute("class", az[at])
                            } else {
                                if (at.toLowerCase() != "classid") {
                                    ap.setAttribute(at, az[at])
                                }
                            }
                        }
                    }
                    for (var ar in ax) {
                        if (ax[ar] != Object.prototype[ar] && ar.toLowerCase() != "movie") {
                            u(ap, ar, ax[ar])
                        }
                    }
                    aq.parentNode.replaceChild(ap, aq);
                    an = ap
                }
            }
            return an
        }

        function u(ap, an, ao) {
            var aq = S("param");
            aq.setAttribute("name", an);
            aq.setAttribute("value", ao);
            ap.appendChild(aq)
        }

        function O(ao) {
            var an = s(ao);
            if (an && an.nodeName == "OBJECT") {
                if (ac.ie && ac.win) {
                    an.style.display = "none";
                    (function () {
                        if (an.readyState == 4) {
                            r(ao)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    an.parentNode.removeChild(an)
                }
            }
        }

        function r(ap) {
            var ao = s(ap);
            if (ao) {
                for (var an in ao) {
                    if (typeof ao[an] == "function") {
                        ao[an] = c
                    }
                }
                ao.parentNode.removeChild(ao)
            }
        }

        function s(ap) {
            var an = c;
            try {
                an = z.getElementById(ap)
            } catch (ao) {}
            return an
        }

        function S(an) {
            return z.createElement(an)
        }

        function y(ap, an, ao) {
            ap.attachEvent(an, ao);
            Y[Y.length] = [ap, an, ao]
        }

        function V(ap) {
            var ao = ac.pv,
                an = ap.split(".");
            an[0] = parseInt(an[0], 10);
            an[1] = parseInt(an[1], 10) || 0;
            an[2] = parseInt(an[2], 10) || 0;
            return (ao[0] > an[0] || (ao[0] == an[0] && ao[1] > an[1]) || (ao[0] == an[0] && ao[1] == an[1] && ao[2] >= an[2])) ? b : q
        }

        function L(at, ao, au, ar) {
            if (ac.ie && ac.mac) {
                return
            }
            var aq = z.getElementsByTagName("head")[0];
            if (!aq) {
                return
            }
            var an = (au && typeof au == "string") ? au : "screen";
            if (ar) {
                D = c;
                W = c
            }
            if (!D || W != an) {
                var ap = S("style");
                ap.setAttribute("type", "text/css");
                ap.setAttribute("media", an);
                D = aq.appendChild(ap);
                if (ac.ie && ac.win && typeof z.styleSheets != T && z.styleSheets.length > 0) {
                    D = z.styleSheets[z.styleSheets.length - 1]
                }
                W = an
            }
            if (ac.ie && ac.win) {
                if (D && typeof D.addRule == H) {
                    D.addRule(at, ao)
                }
            } else {
                if (D && typeof z.createTextNode != T) {
                    D.appendChild(z.createTextNode(at + " {" + ao + "}"))
                }
            }
        }

        function M(ap, an) {
            if (!C) {
                return
            }
            var ao = an ? "visible" : "hidden";
            if (Z && s(ap)) {
                s(ap).style.visibility = ao
            } else {
                L("#" + ap, "visibility:" + ao)
            }
        }

        function ab(ao) {
            var ap = /[\\\"<>\.;]/;
            var an = ap.exec(ao) != c;
            return an && typeof encodeURIComponent != T ? encodeURIComponent(ao) : ao
        }
        var t = function () {
            if (ac.ie && ac.win) {
                h.attachEvent("onunload", function () {
                    var at = Y.length;
                    for (var ar = 0; ar < at; ar++) {
                        Y[ar][0].detachEvent(Y[ar][1], Y[ar][2])
                    }
                    var ap = ad.length;
                    for (var aq = 0; aq < ap; aq++) {
                        O(ad[aq])
                    }
                    for (var ao in ac) {
                        ac[ao] = c
                    }
                    ac = c;
                    for (var an in swfobject) {
                        swfobject[an] = c
                    }
                    swfobject = c
                })
            }
        }();
        return {
            registerObject: function (ar, an, aq, ap) {
                if (ac.w3 && ar && an) {
                    var ao = {};
                    ao.id = ar;
                    ao.swfVersion = an;
                    ao.expressInstall = aq;
                    ao.callbackFn = ap;
                    E[E.length] = ao;
                    M(ar, q)
                } else {
                    if (ap) {
                        ap({
                            success: q,
                            id: ar
                        })
                    }
                }
            },
            getObjectById: function (an) {
                if (ac.w3) {
                    return P(an)
                }
            },
            embedSWF: function (ar, ay, av, ax, ao, aq, ap, au, aw, at) {
                var an = {
                    success: q,
                    id: ay
                };
                if (ac.w3 && !(ac.wk && ac.wk < 312) && ar && ay && av && ax && ao) {
                    M(ay, q);
                    aa(function () {
                        av += "";
                        ax += "";
                        var aA = {};
                        if (aw && typeof aw === H) {
                            for (var aC in aw) {
                                aA[aC] = aw[aC]
                            }
                        }
                        aA.data = ar;
                        aA.width = av;
                        aA.height = ax;
                        var aD = {};
                        if (au && typeof au === H) {
                            for (var aB in au) {
                                aD[aB] = au[aB]
                            }
                        }
                        if (ap && typeof ap === H) {
                            for (var az in ap) {
                                if (typeof aD.flashvars != T) {
                                    aD.flashvars += "&" + az + "=" + ap[az]
                                } else {
                                    aD.flashvars = az + "=" + ap[az]
                                }
                            }
                        }
                        if (V(ao)) {
                            var aE = K(aA, aD, ay);
                            if (aA.id == ay) {
                                M(ay, b)
                            }
                            an.success = b;
                            an.ref = aE
                        } else {
                            if (aq && Q()) {
                                aA.data = aq;
                                af(aA, aD, ay, at);
                                return
                            } else {
                                M(ay, b)
                            }
                        } if (at) {
                            at(an)
                        }
                    })
                } else {
                    if (at) {
                        at(an)
                    }
                }
            },
            switchOffAutoHideShow: function () {
                C = q
            },
            ua: ac,
            getFlashPlayerVersion: function () {
                return {
                    major: ac.pv[0],
                    minor: ac.pv[1],
                    release: ac.pv[2]
                }
            },
            hasFlashPlayerVersion: V,
            createSWF: function (ap, ao, an) {
                if (ac.w3) {
                    return K(ap, ao, an)
                } else {
                    return p
                }
            },
            showExpressInstall: function (ap, aq, an, ao) {
                if (ac.w3 && Q()) {
                    af(ap, aq, an, ao)
                }
            },
            removeSWF: function (an) {
                if (ac.w3) {
                    O(an)
                }
            },
            createCSS: function (aq, ap, ao, an) {
                if (ac.w3) {
                    L(aq, ap, ao, an)
                }
            },
            addDomLoadEvent: aa,
            addLoadEvent: I,
            getQueryParamValue: function (aq) {
                var ap = z.location.search || z.location.hash;
                if (ap) {
                    if (/\?/.test(ap)) {
                        ap = ap.split("?")[1]
                    }
                    if (aq == c) {
                        return ab(ap)
                    }
                    var ao = ap.split("&");
                    for (var an = 0; an < ao.length; an++) {
                        if (ao[an].substring(0, ao[an].indexOf("=")) == aq) {
                            return ab(ao[an].substring((ao[an].indexOf("=") + 1)))
                        }
                    }
                }
                return ""
            },
            expressInstallCallback: function () {
                if (e) {
                    var an = s(ah);
                    if (an && B) {
                        an.parentNode.replaceChild(B, an);
                        if (ag) {
                            M(ag, b);
                            if (ac.ie && ac.win) {
                                B.style.display = "block"
                            }
                        }
                        if (U) {
                            U(R)
                        }
                    }
                    e = q
                }
            }
        }
    }();
    var l = {
        __WORD_JOINER: "\ufeff",
        __WORD_JOINER_REGEXP: /\ufeff/g,
        __KEY: {
            ENTER: "13",
            DELETE: "46",
            SPACE: "32",
            BACKSPACE: "8",
            TAB: "9",
            PASTE: "86",
            CUT: "88"
        },
        I: {},
        X: {},
        define: function (e, r) {
            return Object.extend(e, r)
        },
        available: function (r, e) {
            if (!g("tx_" + e)) {
                return q
            }
            if (!r) {
                return q
            }
            if (r.use == q) {
                return q
            }
            return b
        },
        getSWF: h.getSWF
    };
    (function (r) {
        function s(u) {
            var t = u;
            while (t.$reference) {
                t = t.$reference
            }
            return t
        }

        function e(x) {
            var v = x.constructor.superclass;
            if (v) {
                var z = v.prototype.initialize;
                v.prototype.initialize = function () {
                    this.$reference = x
                };
                var y = new v();
                v.prototype.initialize = z;
                var u = function (A) {
                    if (!y[A]) {
                        return c
                    }
                    return function () {
                        var E = arguments;
                        var D = s(x);
                        var B = D.$super;
                        D.$super = y.$super;
                        var C = y[A].apply(D, E);
                        D.$super = B;
                        return C
                    }
                };
                var w = {};
                for (var t in y) {
                    if (t.charAt(0) != "$") {
                        if (typeof (y[t]) == "function") {
                            w[t] = u(t)
                        }
                    }
                }
                x.$super = w
            }
        }
        r.Class = {
            create: function (u) {
                var t = function () {
                    var w = this.constructor.prototype;
                    for (var v in w) {
                        if (w[v] && typeof (w[v]) === "object") {
                            if (w[v].constructor == Array) {
                                this[v] = [].concat(w[v])
                            } else {
                                this[v] = Object.extend({}, w[v])
                            }
                        }
                    }
                    e(this);
                    var x = arguments;
                    this.initialize.apply(this, x)
                };
                return r.Class.draft(u, t)
            },
            draft: function (w, x) {
                var u = x ? x : function () {
                    e(this)
                };
                if (w.$const) {
                    Object.extend(u, w.$const)
                }
                if (w.$extend) {
                    Object.extend(u.prototype, w.$extend.prototype);
                    u.superclass = w.$extend
                }
                if (w.$mixins) {
                    var v = $A(w.$mixins);
                    v.each(function (y) {
                        Object.extend(u.prototype, y)
                    })
                }
                for (var t in w) {
                    if (t.charAt(0) != "$") {
                        u.prototype[t] = w[t]
                    }
                }
                return u
            },
            overwrite: function (u, t) {
                if (u.prototype) {
                    Object.extend(u.prototype, t)
                }
                return u
            }
        };
        r.Mixin = r.Faculty = {
            create: function (v) {
                var u = {};
                for (var t in v) {
                    if (v[t] && typeof (v[t]) === "object") {
                        if (v[t].constructor == Array) {
                            u[t] = [].concat(v[t])
                        } else {
                            u[t] = Object.extend({}, v[t])
                        }
                    } else {
                        u[t] = v[t]
                    }
                }
                return u
            },
            toClass: function (t, u) {
                return r.Class.create(Object.extend({
                    initialize: u ? u : function () {}
                }, t))
            }
        }
    })(l);
    (function (e) {
        Object.extend(e, {
            installs: [],
            registers: [],
            modules: [],
            modulesX: [],
            install: function (s, r) {
                r.desc = "[install] " + s;
                e.installs.push(r)
            },
            register: function (s, r) {
                r.desc = "[register] " + s;
                e.registers.push(r)
            },
            module: function (s, r) {
                r.desc = "[module] " + s;
                e.modules.push(r)
            },
            moduleX: function (s, r) {
                r.desc = "[moduleX] " + s;
                e.modulesX.push(r)
            },
            invoke: function (z, v, y, r, s, t) {
                for (var u = 0, w = z.length; u < w; u++) {
                    var x = z[u];
                    x(v, y, r, s, t)
                }
            },
            invokeInstallation: function (t, u, v, s, r) {
                e.invoke(e.installs, t, u, v, s, r)
            },
            invokeRegisters: function (t, u, v, s, r) {
                e.invoke(e.registers, t, u, v, s, r)
            },
            invokeModules: function (t, u, v, s, r) {
                e.invoke(e.modules, t, u, v, s, r)
            },
            group: function () {},
            groupEnd: function () {}
        })
    })(l);
    h.Trex = l;
    var d = function (s, t, e, r) {
        return {
            data: s,
            style: {
                padding: t,
                backgroundColor: e,
                border: r
            }
        }
    };
    l.__CONFIG_COMMON = {
        thumbs: {
            options: [{
                color: "#FF0000"
            }, {
                color: "#FF5E00"
            }, {
                color: "#FFBB00"
            }, {
                color: "#FFE400"
            }, {
                color: "#ABF200"
            }, {
                color: "#1FDA11"
            }, {
                color: "#00D8FF"
            }, {
                color: "#0055FF"
            }, {
                color: "#0900FF"
            }, {
                color: "#6600FF"
            }, {
                color: "#FF00DD"
            }, {
                color: "#FF007F"
            }, {
                color: "#000000"
            }, {
                color: "#FFFFFF"
            }, {
                color: "#FFD8D8"
            }, {
                color: "#FAE0D4"
            }, {
                color: "#FAECC5"
            }, {
                color: "#FAF4C0"
            }, {
                color: "#E4F7BA"
            }, {
                color: "#CEFBC9"
            }, {
                color: "#D4F4FA"
            }, {
                color: "#D9E5FF"
            }, {
                color: "#DAD9FF"
            }, {
                color: "#E8D9FF"
            }, {
                color: "#FFD9FA"
            }, {
                color: "#FFD9EC"
            }, {
                color: "#F6F6F6"
            }, {
                color: "#EAEAEA"
            }, {
                color: "#FFA7A7"
            }, {
                color: "#FFC19E"
            }, {
                color: "#FFE08C"
            }, {
                color: "#FAED7D"
            }, {
                color: "#CEF279"
            }, {
                color: "#B7F0B1"
            }, {
                color: "#B2EBF4"
            }, {
                color: "#B2CCFF"
            }, {
                color: "#B5B2FF"
            }, {
                color: "#D1B2FF"
            }, {
                color: "#FFB2F5"
            }, {
                color: "#FFB2D9"
            }, {
                color: "#D5D5D5"
            }, {
                color: "#BDBDBD"
            }, {
                color: "#F15F5F"
            }, {
                color: "#F29661"
            }, {
                color: "#F2CB61"
            }, {
                color: "#E5D85C"
            }, {
                color: "#BCE55C"
            }, {
                color: "#86E57F"
            }, {
                color: "#5CD1E5"
            }, {
                color: "#6699FF"
            }, {
                color: "#6B66FF"
            }, {
                color: "#A366FF"
            }, {
                color: "#F261DF"
            }, {
                color: "#F261AA"
            }, {
                color: "#A6A6A6"
            }, {
                color: "#8C8C8C"
            }, {
                color: "#CC3D3D"
            }, {
                color: "#CC723D"
            }, {
                color: "#CCA63D"
            }, {
                color: "#C4B73B"
            }, {
                color: "#9FC93C"
            }, {
                color: "#47C83E"
            }, {
                color: "#3DB7CC"
            }, {
                color: "#4174D9"
            }, {
                color: "#4641D9"
            }, {
                color: "#7E41D9"
            }, {
                color: "#D941C5"
            }, {
                color: "#D9418D"
            }, {
                color: "#747474"
            }, {
                color: "#5D5D5D"
            }, {
                color: "#980000"
            }, {
                color: "#993800"
            }, {
                color: "#997000"
            }, {
                color: "#998A00"
            }, {
                color: "#6B9900"
            }, {
                color: "#2F9D27"
            }, {
                color: "#008299"
            }, {
                color: "#003399"
            }, {
                color: "#050099"
            }, {
                color: "#3D0099"
            }, {
                color: "#990085"
            }, {
                color: "#99004C"
            }, {
                color: "#4C4C4C"
            }, {
                color: "#353535"
            }, {
                color: "#670000"
            }, {
                color: "#662500"
            }, {
                color: "#664B00"
            }, {
                color: "#665C00"
            }, {
                color: "#476600"
            }, {
                color: "#22741C"
            }, {
                color: "#005766"
            }, {
                color: "#002266"
            }, {
                color: "#030066"
            }, {
                color: "#290066"
            }, {
                color: "#660058"
            }, {
                color: "#660033"
            }, {
                color: "#212121"
            }, {
                color: "#000000"
            }],
            transparent: {
                color: "transparent",
                border: "#999999",
                image: "#iconpath/ic_transparent4.gif?v=2",
                thumb: "#iconpath/txt_transparent.gif?v=2",
                thumbImage: "#iconpath/color_transparent_prev.gif?v=2"
            }
        },
        textbox: {
            options: [d("txc-textbox1", "10px", "#ffffff", "1px solid #f7f7f7"), d("txc-textbox2", "10px", "#eeeeee", "1px solid #eeeeee"), d("txc-textbox3", "10px", "#fefeb8", "1px solid #fefeb8"), d("txc-textbox4", "10px", "#fedec7", "1px solid #fedec7"), d("txc-textbox5", "10px", "#e7fdb5", "1px solid #e7fdb5"), d("txc-textbox6", "10px", "#dbe8fb", "1px solid #dbe8fb"), d("txc-textbox7", "10px", "#ffffff", "1px dashed #cbcbcb"), d("txc-textbox8", "10px", "#eeeeee", "1px dashed #c1c1c1"), d("txc-textbox9", "10px", "#fefeb8", "1px dashed #f3c534"), d("txc-textbox10", "10px", "#fedec7", "1px dashed #fe8943"), d("txc-textbox11", "10px", "#e7fdb5", "1px dashed #9fd331"), d("txc-textbox12", "10px", "#dbe8fb", "1px dashed #79a5e4"), d("txc-textbox13", "10px", "#ffffff", "1px solid #cbcbcb"), d("txc-textbox14", "10px", "#eeeeee", "1px solid #c1c1c1"), d("txc-textbox15", "10px", "#fefeb8", "1px solid #f3c534"), d("txc-textbox16", "10px", "#fedec7", "1px solid #fe8943"), d("txc-textbox17", "10px", "#e7fdb5", "1px solid #9fd331"), d("txc-textbox18", "10px", "#dbe8fb", "1px solid #79a5e4"), d("txc-textbox19", "10px", "#ffffff", "3px double #cbcbcb"), d("txc-textbox20", "10px", "#eeeeee", "3px double #c1c1c1"), d("txc-textbox21", "10px", "#fefeb8", "3px double #f3c534"), d("txc-textbox22", "10px", "#fedec7", "3px double #fe8943"), d("txc-textbox23", "10px", "#e7fdb5", "3px double #9fd331"), d("txc-textbox24", "10px", "#dbe8fb", "3px double #79a5e4")]
        }
    };
    var a = function () {
        var r = q;
        var e = [];
        var w = {};
        var z = {
            dinoHost: "http://editor.daum.net",
            cdnHost: "http://s1.daumcdn.net/editor",
            wrapper: "tx_trex_container",
            form: "tx_editor_form",
            txIconPath: "images/icon/editor/",
            txDecoPath: "images/deco/contents/",
            params: [],
            events: {
                preventUnload: b,
                useHotKey: b
            },
            save: {},
            adaptor: {},
            toolbar: {},
            sidebar: {
                attachbox: {},
                embeder: {},
                attacher: {},
                searcher: {}
            },
            plugin: {}
        };
        var t = function () {
            return {
                Tool: z.toolbar,
                Sidebar: z.sidebar,
                Plugin: z.plugin,
                Adaptor: z.adaptor,
                Save: z.save,
                Attacher: z.sidebar.attacher,
                Embeder: z.sidebar.embeder,
                Searcher: z.sidebar.searcher
            }
        };
        var y = function (C, B) {
            if (r) {
                throw new Error("configure is already setup (addParameter)")
            }
            w[C] = B
        };
        var s = {
            getUrl: function (D, E) {
                if (D == c) {
                    return c
                }
                D = D.replace(/#host#path\/pages\//g, EditorJSLoader.getPageBasePath());
                D = D.replace(/#host/g, z.txHost);
                D = D.replace(/#path\/?/g, z.txPath);
                D = D.replace(/#cmnhost/g, z.dinoHost);
                D = D.replace(/#cdnhost/g, z.cdnHost);
                for (var B in w) {
                    D = D.replace(new RegExp("#".concat(B), "g"), z[w[B]])
                }
                if (E) {
                    for (var C in E) {
                        D = D.replace(new RegExp("#".concat(C), "g"), E[C])
                    }
                }
                return D
            },
            getPopFeatures: function (B) {
                if (B == c) {
                    return c
                }
                if (typeof (B) === "string") {
                    return B
                }
                var C = [];
                ["toolbar", "location", "directories", "menubar"].each(function (D) {
                    C.push(D + "=" + (B[D] || "no"))
                });
                ["scrollbars", "resizable"].each(function (D) {
                    C.push(D + "=" + (B[D] || "yes"))
                });
                ["width", "height"].each(function (D) {
                    C.push(D + "=" + (B[D] || "500"))
                });
                ["left", "top"].each(function (D) {
                    C.push(D + "=" + (B[D] || "100"))
                });
                return C.join(",")
            },
            getDecoPath: function (B) {
                return B.replace(/#decopath\/?/, this.getUrl(z.txDecoPath))
            },
            getIconPath: function (B) {
                return B.replace(/#iconpath\/?/, this.getUrl(z.txIconPath))
            },
            setup: function (B) {
                g.deepcopy(z, B);
                z.params.each(function (C) {
                    y(C, C)
                });
                e.each(function (C) {
                    C(z)
                });
                r = b;
                this.setupVersion();
                return z
            },
            setupVersion: function () {
                z.txVersion = Editor.version
            },
            addParameter: function (C, B) {
                y(C, B)
            },
            clone: function (B) {
                return g.deepcopy({}, B)
            },
            merge: function () {
                var B = {};
                $A(arguments).each(function (C) {
                    g.deepcopy(B, C)
                });
                return B
            }
        };
        s.add = function (B, C) {
            if (r) {
                throw new Error("configure is already setup (mergeConfig)")
            }
            g.deepcopy(z, B);
            if (C) {
                e.push(C)
            }
        };
        s.get = function (B) {
            return z[B]
        };
        var v = function (C, B, D) {
            if (r) {
                throw new Error("configure is already setup (mergeConfig)")
            }
            this[C] = this[C] || {};
            g.deepcopy(this[C], B);
            if (D) {
                e.push(D)
            }
        };
        var u = function (B) {
            return this[B]
        };
        var A = t();
        for (var x in A) {
            s["add" + x] = v.bind(A[x]);
            s["get" + x] = u.bind(A[x])
        }
        return s
    }();
    h.TrexConfig = a;
    (function (e) {
        e.Ev = {
            __EDITOR_PANEL_MOUSEDOWN: "editor.panel.mousedown",
            __CANVAS_PANEL_KEYDOWN: "canvas.panel.keydown",
            __CANVAS_PANEL_KEYUP: "canvas.panel.keyup",
            __CANVAS_PANEL_MOUSEDOWN: "canvas.panel.mousedown",
            __CANVAS_PANEL_MOUSEUP: "canvas.panel.mouseup",
            __CANVAS_PANEL_MOUSEOVER: "canvas.panel.mouseover",
            __CANVAS_PANEL_MOUSEOUT: "canvas.panel.mouseout",
            __CANVAS_PANEL_CLICK: "canvas.panel.click",
            __CANVAS_PANEL_DBLCLICK: "canvas.panel.dbclick",
            __CANVAS_PANEL_PASTE: "canvas.panel.paste",
            __CANVAS_PANEL_SCROLLING: "canvas.panel.scrolling",
            __IFRAME_LOAD_COMPLETE: "iframe.load.complete",
            __IFRAME_LOADING_TIME: "iframe.loading.time",
            __CANVAS_SOURCE_PANEL_CLICK: "canvas.source.panel.click",
            __CANVAS_SOURCE_PANEL_KEYDOWN: "canvas.source.panel.mousedown",
            __CANVAS_SOURCE_PANEL_MOUSEDOWN: "canvas.source.panel.mousedown",
            __CANVAS_TEXT_PANEL_CLICK: "canvas.text.panel.click",
            __CANVAS_MODE_CHANGE: "canvas.mode.change",
            __TOOL_CLICK: "toolbar.button.click",
            __TOOL_SHORTCUT_KEY: "toolbar.shortcut",
            __ON_SUBMIT: "editor.submit",
            __CANVAS_WRAP_WIDTH_CHANGE: "canvas.wrap.width.change",
            __CANVAS_HEIGHT_CHANGE: "canvas.height.change",
            __CANVAS_PANEL_QUERY_STATUS: "canvas.panel.style.change",
            __CANVAS_PANEL_DELETE_SOMETHING: "canvas.panel.delkey.press",
            __ENTRYBOX_ENTRY_ADDED: "entrybox.entryadded",
            __ENTRYBOX_ENTRY_MODIFIED: "entrybox.entrymodified",
            __ENTRYBOX_ENTRY_REMOVED: "entrybox.entryremoved",
            __ENTRYBOX_ALL_ENTRY_REMOVED: "entrybox.removed.all.perfectly",
            __ENTRYBOX_CAPACITY_UPDATE: "entrybox.capacity.update",
            __ATTACHBOX_SHOW: "attachbox.show",
            __ATTACHBOX_HIDE: "attachbox.hide",
            __CANVAS_BEFORE_UNLOAD: "canvas.unload",
            __CANVAS_ENTRY_ADDED: "canvas.entry.added",
            __COMMAND_NODE_ADDED: "cmd.entry.added",
            __CMD_ALIGN_LEFT: "align.left",
            __CMD_ALIGN_CENTER: "align.center",
            __CMD_ALIGN_RIGHT: "align.right",
            __CMD_ALIGN_FULL: "align.full",
            __CMD_ALIGN_IMG_LEFT: "align.img.left",
            __CMD_ALIGN_IMG_CENTER: "align.img.center",
            __CMD_ALIGN_IMG_FLOAT_LEFT: "align.img.floatleft",
            __CMD_ALIGN_IMG_FLOAT_RIGHT: "align.img.floatright",
            __TOOL_CELL_LINE_CHANGE: "tool.cell.line.change",
            __CANVAS_MODE_INITIALIZE: "canvas.mode.initialize",
            __CANVAS_DATA_INITIALIZE: "canvas.load.data",
            __ENTRYBOX_ENTRY_REFRESH: "entrybox.entryrefresh",
            __PASTE_SEARCHRESULT: "trex.paste.info",
            __RUNTIME_EXCEPTION: "editor.runtime.exception",
            __REPORT_TO_MAGPIE: "editor.report.magpie",
            __SHOULD_CLOSE_MENUS: "editor.shouldclosemenus",
            __AUTOSAVER_LIST_OPENED: "editor.autosaver.listopened"
        }
    })(l);
    var i = {
        fire: function (s, e) {
            if (s && s.tagName) {
                var r = e[s.tagName.toLowerCase()];
                if (r) {
                    r(s, e)
                } else {
                    i.propagateToParent(s, e)
                }
            } else {}
        },
        propagateToParent: function (r, e) {
            var t = r.parentNode;
            if (t && t.tagName && t.tagName.toLowerCase) {
                var s = e[t.tagName.toLowerCase()];
                if (s) {
                    s(t, e)
                } else {
                    i.propagateToParent(t, e)
                }
            }
        },
        stopPropagation: function () {}
    };
    l.MarkupTemplate = {};
    (function () {
        var e = {};
        l.define(l.MarkupTemplate, {
            add: function (r, s) {
                e[r] = s
            },
            get: function (r) {
                if (!e[r]) {
                    return {
                        evaluate: function () {
                            return ""
                        },
                        evaluateToDom: function () {
                            return ""
                        }
                    }
                }
                if (typeof (e[r]) == "string") {
                    var s = e[r].replace(/@[\w\.]+/g, function (t) {
                        return TXMSG(t)
                    });
                    e[r] = new Template(s)
                }
                return e[r]
            },
            splitList: function (A, w, u) {
                var t = {
                    row: []
                };
                var y = u.length;
                var x = t.row;
                for (var z = 0; z < A; z++) {
                    x.push({
                        col: []
                    });
                    var r = x.last().col;
                    for (var s = 0; s < w; s++) {
                        var v = {
                            image: "",
                            data: "&nbsp;",
                            klass: ""
                        };
                        if (z * w + s < y) {
                            if (typeof (u[z * w + s]) == "string") {
                                v.data = u[z * w + s]
                            } else {
                                v = Object.extend(v, u[z * w + s])
                            }
                        }
                        r.push(v)
                    }
                }
                return t
            }
        })
    })();
    var k = {};
    (function () {
        var v = {
            "%body": ["body"],
            "%text": ["#text", "br"],
            "%element": ["#element"],
            "%control": ["img", "object", "hr", "table", "button", "iframe"],
            "%inline": ["span", "font", "u", "i", "b", "em", "strong", "big", "small", "a", "sub", "sup", "span"],
            "%block": ["p", "div", "ul", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "pre", "dl", "hr", "table", "button"],
            "%paragraph": ["p", "li", "dd", "dt", "h1", "h2", "h3", "h4", "h5", "h6", "td", "th", "div", "caption"],
            "%wrapper": ["div", "ul", "ol", "dl", "pre", "xmp", "table", "button"],
            "%innergroup": ["li", "dd", "dt", "td", "th"],
            "%outergroup": ["ul", "ol", "dl", "tr", "tbody", "thead", "tfoot", "table"],
            "%tablegroup": ["td", "th", "tr", "tbody", "thead", "tfoot", "table"],
            "%listgroup": ["li", "ul", "ol"],
            "%datagroup": ["dd", "dt", "dl"],
            "%listhead": ["ul", "ol"]
        };
        var r = {};
        for (var s in v) {
            r[s] = {};
            if (v[s]) {
                $A(v[s]).each(function (w) {
                    r[s][w] = b
                })
            }
        }

        function e(w) {
            var y = {};
            var x = w.split(",");
            x.each(function (A) {
                if (r[A]) {
                    for (var z in r[A]) {
                        y[z] = b
                    }
                } else {
                    y[A] = b
                }
            });
            return y
        }
        var u = l.Class.create({
            initialize: function (w) {
                this.patterns = w;
                this.map = e(w)
            },
            hasParts: function () {
                return (this.patterns.length > 0)
            },
            include: function (y) {
                var x = e(y);
                for (var w in x) {
                    if (this.map[w]) {
                        return b
                    }
                }
                return q
            },
            memberOf: function (y) {
                var x = e(y);
                for (var w in this.map) {
                    if (x[w]) {
                        return b
                    }
                }
                return q
            },
            extract: function (z) {
                var y = e(z);
                var x = [];
                for (var w in this.map) {
                    if (y[w]) {
                        x.push(w)
                    }
                }
                return k.translate(x.join(","))
            },
            getExpression: function () {
                if (!this.exprs) {
                    var x = [];
                    for (var w in this.map) {
                        x.push(w)
                    }
                    this.exprs = x.join(",")
                }
                return this.exprs
            }
        });
        var t = {};
        Object.extend(k, {
            translate: function (w) {
                if (!t[w]) {
                    t[w] = new u(w)
                }
                return t[w]
            }
        })
    })();
    Object.extend(k, {
        __POSITION: {
            __START_OF_TEXT: -1,
            __MIDDLE_OF_TEXT: 0,
            __END_OF_TEXT: 1,
            __EMPTY_TEXT: -2
        }
    });
    Object.extend(k, {
        isElement: function (e) {
            return e && e.nodeType == 1
        },
        isBody: function (e) {
            return k.isElement(e) && e.tagName == "BODY"
        },
        isBlock: function (e) {
            return k.kindOf(e, "%block")
        },
        isParagraph: function (e) {
            return k.kindOf(e, "%paragraph")
        },
        isText: function (e) {
            return k.kindOf(e, "%text")
        },
        isControl: function (e) {
            return k.kindOf(e, "%control")
        },
        getOwnerDocument: function (e) {
            return e.ownerDocument || e.document
        },
        getName: function (e) {
            return ((e && e.nodeType == 1) ? e.nodeName.toLowerCase() : "")
        },
        getText: function (e) {
            return e.textContent || e.text || e.innerText || ""
        },
        getLength: function (e) {
            if (!e) {
                return 0
            }
            if (e.nodeType == 1) {
                return e.childNodes.length
            } else {
                if (e.nodeType == 3) {
                    return e.nodeValue.length
                }
            }
            return 0
        },
        indexOf: function (s) {
            if (!s) {
                return -1
            }
            var u = s.parentNode;
            for (var r = 0, e = u.childNodes.length, t = u.childNodes; r < e; r++) {
                if (t[r] == s) {
                    return r
                }
            }
            return -1
        },
        hasContent: function (r, e) {
            if (!r || r.nodeType != 3) {
                return b
            }
            var s = k.removeMeaninglessSpace(r.nodeValue);
            if (e) {
                s = s.replace(l.__WORD_JOINER_REGEXP, "")
            }
            return (s != "")
        },
        removeEmptyTextNode: function (e) {
            if (e && e.nodeType == 3 && !e.nodeValue) {
                k.remove(e)
            }
        },
        hasUsefulChildren: function (r, e) {
            if (!r) {
                return q
            }
            var s = k.removeMeaninglessSpace(r.innerHTML);
            if (e) {
                s = s.replace(l.__WORD_JOINER_REGEXP, "")
            }
            if (!s) {
                return q
            }
            if (s.stripTags()) {
                return b
            }
            if (s.search(/<(img|br|hr)\s?[^>]*>/i) > -1) {
                return b
            }
            if (s.search(/<span\sid="?tx_(start|end)_marker"?><\/span>/i) > -1) {
                return b
            }
            return q
        },
        hasData: function (r, e) {
            if (!r) {
                return q
            }
            var s = "";
            if (r.nodeType == 1) {
                s = r.innerHTML
            } else {
                s = r.nodeValue
            }
            s = k.removeMeaninglessSpace(s);
            if (s == "") {
                return q
            }
            if (s.stripTags() != "") {
                return b
            }
            if (e) {
                return q
            }
            if (s.search(/<br\s?\/?>/i) > -1) {
                return b
            }
            return q
        },
        removeMeaninglessSpace: function (e) {
            return e.replace(/(^[\f\n\r\t\v\u2028\u2029]*)|([\f\n\r\t\v\u2028\u2029]*$)/g, "")
        }
    });
    Object.extend(k, {
        search: function (t, w, e) {
            var u = (t.length == 1) ? n : t[0];
            var v = t[t.length - 1];
            var s = (!v || !u || !u.nodeType || typeof v != "string");
            if (s) {
                return e
            }
            var r = k.translate(v);
            return w(u, r.getExpression())
        },
        find: function () {
            return this.search(arguments, dFindy, c)
        },
        collect: function () {
            return this.search(arguments, dGetty, c)
        },
        collectAll: function () {
            return this.search(arguments, dGetties, [])
        }
    });
    (function () {
        function s(u) {
            if (u) {
                if (typeof (u) === "function") {
                    return u
                } else {
                    var v = k.translate(u);
                    return function (w) {
                        if (w.nodeType == 1) {
                            if (v.include("#element")) {
                                return b
                            } else {
                                return dChecky(w, v.getExpression())
                            }
                        } else {
                            return v.include("#text")
                        }
                    }
                }
            } else {
                return c
            }
        }
        var t = {};

        function e(v) {
            v = v || "#element,#text";
            if (t[v]) {
                return t[v]
            }
            var u = new r(v);
            t[v] = u;
            return u
        }
        var r = l.Class.create({
            initialize: function (u) {
                this.pattern = u;
                this.translator = k.translate(u);
                this.hasClassPattern = u.indexOf(".") >= 0;
                this.hasIdPattern = u.indexOf("#") >= 0;
                this.matchesText = this.translator.include("#text");
                this.matchesElement = this.translator.include("#element")
            },
            test: function (x) {
                var u = x.nodeType;
                var z = this.translator.map;
                if (u == 1) {
                    if (this.matchesElement) {
                        return b
                    }
                    var w = x.tagName.toLowerCase();
                    if (z[w]) {
                        return b
                    }
                    var y = [];
                    if (this.hasClassPattern && x.className) {
                        x.className.split(/\s/).each(function (B) {
                            y.push("." + B);
                            y.push(w + "." + B)
                        })
                    }
                    if (this.hasIdPattern && x.id) {
                        var A = x.id;
                        y.push("#" + A);
                        y.push(w + "#" + A)
                    }
                    for (var v = 0; v < y.length; v++) {
                        if (z[y[v]]) {
                            return b
                        }
                    }
                    return q
                } else {
                    if (u == 3) {
                        return this.matchesText
                    }
                }
            }
        });
        Object.extend(k, {
            tagName: function (v, u) {
                if (!v) {
                    return c
                }
                return v.tagName
            },
            kindOf: function (v, w) {
                if (!v || !w) {
                    return q
                }
                var u = e(w);
                return u.test(v)
            },
            kindOf_old: function (u, v) {
                if (!u || !v) {
                    return q
                }
                return s(v)(u)
            },
            ancestor: function (w, x) {
                if (!w || !w.parentNode) {
                    return c
                }
                var v = e(x);
                var u = w.parentNode;
                while (u) {
                    if (k.isBody(u)) {
                        return c
                    }
                    if (v.test(u)) {
                        break
                    }
                    u = u.parentNode
                }
                return u
            },
            findAncestor: function (w, u, v) {
                while (!v(w)) {
                    if (u(w)) {
                        return w
                    }
                    w = w.parentNode
                }
                return c
            },
            descendant: function (u, v) {
                var w = k.descendants(u, v, b);
                if (w.length == 0) {
                    return c
                }
                return w[0]
            },
            descendants: function (v, y, A) {
                A = A || q;
                if (!v || !v.firstChild) {
                    return []
                }
                var u = q;
                var w = e(y);
                var z = [];
                var x = function (D) {
                    if (A && u) {
                        return
                    }
                    if (!k.first(D)) {
                        return
                    }
                    var E = k.children(D);
                    for (var C = 0, B = E.length; C < B; C++) {
                        if (w.test(E[C])) {
                            z.push(E[C]);
                            u = b
                        } else {
                            x(E[C])
                        }
                    }
                };
                x(v);
                return z
            },
            children: function (w, x) {
                var y = [];
                if (!w || !w.firstChild) {
                    return y
                }
                var v = e(x);
                var u = k.first(w);
                while (u) {
                    if (v.test(u)) {
                        y.push(u)
                    }
                    u = u.nextSibling
                }
                return y
            },
            next: function (w, x) {
                if (!w || !w.nextSibling) {
                    return c
                }
                var v = e(x);
                var u = w.nextSibling;
                while (u) {
                    if (k.hasContent(u)) {
                        if (v.test(u)) {
                            break
                        }
                    }
                    u = u.nextSibling
                }
                return u
            },
            previous: function (w, x) {
                if (!w || !w.previousSibling) {
                    return c
                }
                var v = e(x);
                var u = w.previousSibling;
                while (u) {
                    if (k.hasContent(u)) {
                        if (v.test(u)) {
                            break
                        }
                    }
                    u = u.previousSibling
                }
                return u
            },
            first: function (w, x) {
                if (!w || !w.firstChild) {
                    return c
                }
                var v = e(x);
                var u = w.firstChild;
                while (u) {
                    if (k.hasContent(u)) {
                        if (v.test(u)) {
                            break
                        }
                    }
                    u = u.nextSibling
                }
                return u
            },
            last: function (w, x) {
                if (!w || !w.lastChild) {
                    return c
                }
                var v = e(x);
                var u = w.lastChild;
                while (u) {
                    if (k.hasContent(u)) {
                        if (v.test(u)) {
                            break
                        }
                    }
                    u = u.previousSibling
                }
                return u
            },
            extract: function (x, A, y) {
                var z = [];
                if (!x || !A || !y) {
                    return z
                }
                var w = e(y);
                var u = q;
                var v = x.firstChild;
                while (v) {
                    if (k.include(v, A)) {
                        u = b
                    }
                    if (w.test(v)) {
                        z.push(v)
                    } else {
                        if (u) {
                            break
                        } else {
                            z = []
                        }
                    }
                    v = v.nextSibling
                }
                return u ? z : []
            },
            parent: function (u) {
                if (!u || !u.parentNode) {
                    return c
                }
                return u.parentNode
            },
            body: function (v) {
                if (!v || !v.parentNode) {
                    return c
                }
                var u = v.parentNode;
                while (u) {
                    if (k.isBody(u)) {
                        return u
                    }
                    u = u.parentNode
                }
                return c
            },
            top: function (v, w) {
                w = w || q;
                var u = v;
                while (k.first(u)) {
                    u = k.first(u)
                }
                if (w) {
                    return u
                } else {
                    if (k.kindOf(u, "#tx_start_marker,#tx_end_marker")) {
                        u = u.nextSibling || u.parentNode
                    } else {
                        if (k.kindOf(u, "%control")) {
                            u = u.parentNode
                        }
                    }
                    return u
                }
            },
            bottom: function (v, w) {
                w = w || q;
                var u = v;
                while (k.last(u)) {
                    u = k.last(u)
                }
                if (w) {
                    return u
                } else {
                    if (k.kindOf(u, "#tx_start_marker,#tx_end_marker")) {
                        u = u.previousSibling || u.parentNode
                    } else {
                        if (k.kindOf(u, "%control")) {
                            u = u.parentNode
                        }
                    }
                    return u
                }
            },
            include: function (v, w) {
                if (!v || !w) {
                    return q
                }
                if (v == w) {
                    return b
                }
                var u = w;
                while (u) {
                    if (k.isBody(u)) {
                        return q
                    } else {
                        if (u == v) {
                            return b
                        }
                    }
                    u = u.parentNode
                }
                return q
            }
        })
    })();
    Object.extend(k, {
        insertFirst: function (e, r) {
            if (!e || !r) {
                return
            }
            if (e.firstChild) {
                e.insertBefore(r, e.firstChild)
            } else {
                e.appendChild(r)
            }
            return r
        },
        insertAt: function (e, r) {
            if (!e || !r) {
                return
            }
            r.parentNode.insertBefore(e, r);
            return e
        },
        insertNext: function (r, s) {
            if (!r || !s) {
                return
            }
            var e = s.nextSibling;
            if (e) {
                e.parentNode.insertBefore(r, e)
            } else {
                s.parentNode.appendChild(r)
            }
            return r
        },
        append: function (e, r) {
            if (!e || !r) {
                return
            }
            e.appendChild(r);
            return r
        },
        remove: function (e) {
            if (!e) {
                return
            }
            if (e.parentNode) {
                e.parentNode.removeChild(e)
            }
            e = c
        },
        html: function (r, e) {
            if (!r) {
                return
            }
            r.innerHTML = e || "";
            return r
        },
        clean: function (e) {
            return k.html(e)
        },
        stuff: function (s, r) {
            if (!s) {
                return s
            }
            if (k.hasUsefulChildren(s, b)) {
                return s
            }
            if (s.lastChild) {
                var e = s;
                while (e.lastChild) {
                    e = e.lastChild
                }
                k.insertNext(r, e)
            } else {
                k.append(s, r)
            }
            return s
        }
    });
    Object.extend(k, {
        removeListIfEmpty: function (e) {
            while (k.kindOf(e, "%listhead") && e.childNodes.length == 1 && k.kindOf(e.firstChild, "%listhead")) {
                e = e.firstChild
            }
            while (k.kindOf(e, "%listhead") && e.childNodes.length == 0) {
                var r = e.parentNode;
                k.remove(e);
                e = r
            }
        }
    });
    Object.extend(k, {
        moveChild: function (e, s, r, u) {
            if (!e || !s) {
                return
            }
            r = Math.min(Math.max(r || 0), e.childNodes.length);
            u = Math.min(Math.max(u || e.childNodes.length), e.childNodes.length);
            if (r >= u) {
                return
            }
            var t = r;
            while (t++ < u && r < e.childNodes.length) {
                s.appendChild(e.childNodes[r])
            }
        },
        moveChildToParent: function (e) {
            if (!e) {
                return
            }
            while (e.firstChild) {
                e.parentNode.insertBefore(e.firstChild, e)
            }
        }
    });
    Object.extend(k, {
        replace: function (u, v) {
            if (!u || !v) {
                return c
            }
            if (k.getName(u) == k.getName(v)) {
                k.remove(v);
                return u
            } else {
                var s = [],
                    w = u.childNodes,
                    e = w.length;
                for (var r = 0; r < e; r++) {
                    s.push(w[r])
                }
                for (r = 0; r < e; r++) {
                    var x = s[r];
                    if (x.lastChild === u) {
                        var t = k.clone(x);
                        k.moveChild(x, t);
                        x.innerHTML = "";
                        v.appendChild(t)
                    } else {
                        v.appendChild(x)
                    }
                }
                k.insertAt(v, u);
                k.remove(u);
                return v
            }
        },
        clone: function (s, e) {
            var r = s.cloneNode(!!e);
            if (s.nodeType == 1) {
                r.removeAttribute("id")
            }
            return r
        }
    });
    Object.extend(k, {
        wrap: function (e, r) {
            if (!e || !r) {
                return c
            }
            if (r instanceof Array == q) {
                r = [].concat(r)
            }
            k.insertAt(e, r[0]);
            r.each((function (s) {
                k.append(e, s)
            }));
            return e
        },
        unwrap: function (e) {
            if (!e) {
                return c
            }
            var r = k.first(e);
            if (g.msie) {
                e.removeNode()
            } else {
                k.moveChildToParent(e);
                k.remove(e)
            }
            return r
        }
    });
    Object.extend(k, {
        divideText: function (r, s) {
            if (!k.isText(r)) {
                return r
            }
            if (s <= 0 || s >= r.length) {
                return r
            }
            var e = r.cloneNode(q);
            r.deleteData(s, r.length - s);
            e.deleteData(0, s);
            k.insertNext(e, r);
            return e
        },
        divideNode: function (t, u) {
            if (!k.isElement(t)) {
                return c
            }
            var r = t.childNodes.length - u;
            var e = t.cloneNode(q);
            for (var s = 0; s < r; s++) {
                k.insertFirst(e, t.lastChild)
            }
            k.insertNext(e, t);
            return e
        },
        splitAt: function (r, e) {
            if (!k.isElement(r)) {
                return
            }
            var s = k.clone(r);
            k.moveChild(r, s, e + 1, r.childNodes.length);
            k.insertNext(s, r);
            return s
        },
        divideTree: function (e, t) {
            var r = t,
                u, s;
            do {
                s = r.parentNode;
                u = k.indexOf(r);
                r = k.divideNode(s, u)
            } while (r.previousSibling != e);
            return r
        },
        divideParagraph: function (t) {
            var r = t;
            var e = k.indexOf(t);
            var s = r;
            while (r) {
                if (k.isBody(r)) {
                    break
                } else {
                    if (k.kindOf(r, "td,th,%wrapper,%outergroup")) {
                        break
                    } else {
                        if (k.kindOf(r, "#tx_start_marker,#tx_end_marker")) {
                            e = k.indexOf(r)
                        } else {
                            if (k.isControl(r)) {
                                e = k.indexOf(r)
                            } else {
                                if (k.isText(r)) {
                                    r = k.divideText(r, e);
                                    e = k.indexOf(r)
                                } else {
                                    r = k.divideNode(r, e);
                                    e = k.indexOf(r);
                                    s = r;
                                    if (k.kindOf(r, "p,li,dd,dt,h1,h2,h3,h4,h5,h6")) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                r = r.parentNode
            }
            return s
        },
        wrapInlinesWithP: function (u, t) {
            var e = k.getOwnerDocument(u);
            var s = k.extract(t || e.body, u, "%text,%inline,%control");
            if (this.hasOnlySavedCaret(s, u)) {
                return c
            }
            var r = e.createElement("p");
            k.wrap(r, s);
            return r
        },
        hasOnlySavedCaret: function (e, s) {
            var r = e.findAll(function (t) {
                return t.nodeType != 3 || t.nodeValue.trim() != ""
            });
            return this.isGoogRangeCaret(s) && r.length == 1 && r[0] == s
        },
        isGoogRangeCaret: function (e) {
            return e && /goog_[0-9]+/.test(e.id)
        }
    });
    Object.extend(k, {
        paragraphOf: function (e) {
            if (!e) {
                return "p"
            }
            var r = k.translate(e);
            if (r.memberOf("ul,ol")) {
                return "li"
            } else {
                if (r.memberOf("dl")) {
                    return "dd"
                } else {
                    if (r.memberOf("tr,tbody,thead,tfoot,table")) {
                        return "td"
                    } else {
                        return "p"
                    }
                }
            }
        },
        inlineOf: function () {
            return "span"
        },
        outerOf: function (e) {
            if (!e) {
                return "span"
            }
            var r = k.translate(e);
            if (r.memberOf("li")) {
                return "ol"
            } else {
                if (r.memberOf("dd,dt")) {
                    return "dl"
                } else {
                    if (r.memberOf("td,th,tr")) {
                        return "table"
                    } else {
                        return "p"
                    }
                }
            }
        }
    });
    (function () {
        var r = 0;
        var t = l.Class.create({
            $const: {
                __FONT_SIZE_BASIS: 9,
                __REG_EXT_NUMBER: new RegExp("[0-9.]+"),
                __REG_EXT_UNIT: new RegExp("px|pt|em")
            },
            initialize: function () {
                this.unitConverter = {
                    px2em: 1 / 12,
                    px2pt: 9 / 12,
                    em2px: 12,
                    em2pt: 9,
                    pt2px: 12 / 9,
                    pt2em: 1 / 9
                }
            },
            calculate: function (y, w) {
                if (y == c || y.length == 0) {
                    y = "0em"
                }
                if (w == c || w.length == 0) {
                    w = "0em"
                }
                var B = this.extractSign(w);
                var z = this.extractUnit(y);
                var x = this.extractUnit(w);
                var v = this.extractNumber(y).toNumber();
                var u = this.extractNumber(w).toNumber();
                if (z != x) {
                    if (this.unitConverter[z + "2" + x]) {
                        v *= this.unitConverter[z + "2" + x]
                    }
                }
                var A = 0;
                if (B == "-") {
                    A = Math.max(v - u, 0)
                } else {
                    A = (v + u)
                }
                A = (Math.round(A * 10) / 10);
                if (A == 0) {
                    return c
                } else {
                    return A + x
                }
            },
            needCalculation: function (u) {
                if (u == c || typeof u != "string") {
                    return q
                } else {
                    return (u.charAt(0) == "+" || u.charAt(0) == "-")
                }
            },
            extractSign: function (u) {
                var v = "+";
                if (u.charAt(0) == "+" || u.charAt(0) == "-") {
                    v = u.charAt(0)
                }
                return v
            },
            extractNumber: function (w) {
                var u = 0;
                var v;
                if ((v = w.match(t.__REG_EXT_NUMBER)) != c) {
                    u = v[0]
                }
                if (w.indexOf("%") > -1) {
                    u = u / 100
                }
                return u
            },
            extractUnit: function (w) {
                var u = "em";
                var v;
                if ((v = w.match(t.__REG_EXT_UNIT)) != c) {
                    u = v[0]
                }
                return u
            }
        });
        var s = new t();
        var e = {
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            datetime: "dateTime",
            accesskey: "accessKey",
            tabindex: "tabIndex",
            enctype: "encType",
            maxlength: "maxLength",
            readonly: "readOnly",
            longdesc: "longDesc",
            cellPadding: "cellPadding",
            cellSpacing: "cellSpacing",
            more: "more",
            less: "less",
            style: "style"
        };
        Object.extend(k, {
            applyAttributes: function (w, v) {
                if (!k.isElement(w)) {
                    return
                }
                for (var u in v) {
                    if (u == "style") {
                        k.applyStyles(w, v[u])
                    } else {
                        k.setAttribute(w, u, v[u])
                    }
                }
            },
            removeAttributes: function (w, v) {
                if (!k.isElement(w)) {
                    return
                }
                for (var u in v) {
                    if (u == "style") {
                        k.removeStyles(v[u])
                    } else {
                        w.removeAttribute(u, r)
                    }
                }
            },
            getAttribute: function (v, u) {
                if (!k.isElement(v)) {
                    return c
                }
                if (v && v.getAttribute) {
                    return v.getAttribute(e[u] || u)
                } else {
                    return c
                }
            },
            setAttribute: function (v, u, x) {
                if (!k.isElement(v)) {
                    return
                }
                if (x == c || x.length == 0 || x == 0) {
                    v.removeAttribute(u, r)
                } else {
                    if (e[u]) {
                        v.setAttribute(e[u], x)
                    } else {
                        try {
                            v[u] = x
                        } catch (w) {
                            v.setAttribute(e[u] || u, x)
                        }
                    }
                }
            },
            setStyles: function (u, A, x) {
                var y = u.style.cssText;
                var z;
                var C = Object.extend({}, A);
                if (C.font) {
                    if (x) {
                        u.style.font = C.font
                    } else {
                        if (u.style.cssText.indexOf("font:") == -1) {
                            u.style.cssText = "font: " + C.font + "; " + u.style.cssText
                        }
                    }
                    delete C.font
                }
                for (var v in C) {
                    var B;
                    if (s.needCalculation(C[v])) {
                        B = s.calculate(u.style[v], C[v])
                    } else {
                        B = C[v]
                    } if (B == c) {
                        B = ""
                    }
                    if (v == "float") {
                        v = g.msie ? "styleFloat" : "cssFloat"
                    }
                    z = (!u.style[v] && (v.indexOf("font") != 0 || y.indexOf("font:") == -1)) || x;
                    var w = (v == "textDecoration") && !u.style[v].include(B);
                    if (z) {
                        u.style[v] = B
                    } else {
                        if (w) {
                            u.style[v] += " " + B
                        }
                    }
                }
                k._clearUselessStyle(u)
            },
            applyStyles: function (v, u) {
                this.setStyles(v, u, b)
            },
            addStyles: function (v, u) {
                this.setStyles(v, u, q)
            },
            removeStyles: function (y, x) {
                var w = y.style.cssText;
                var v = w;
                for (var u in x) {
                    u = u.replace(/([A-Z])/g, "-$1");
                    w = w.replace(new RegExp("(^| )" + u + "\\s*:[^;]+;? ?", "ig"), "")
                }
                if (v != w) {
                    y.style.cssText = w;
                    k._clearUselessStyle(y)
                }
            },
            _clearUselessStyle: function (u) {
                var v = k.getAttribute(u, "style");
                if (!v) {
                    u.removeAttribute("style", r)
                }
            },
            getStyleText: function (u) {
                return u.style.cssText
            },
            setStyleText: function (u, v) {
                u.style.cssText = v;
                !v && k._clearUselessStyle(u)
            }
        })
    })();
    Object.extend(k, {
        goInto: function (r, e) {
            if (!r || !r.scrollIntoView) {
                return
            }
            r.scrollIntoView(e)
        },
        getScrollTop: function (e) {
            if (!e) {
                return 0
            }
            return (e.documentElement.scrollTop || e.body.scrollTop)
        },
        setScrollTop: function (r, e) {
            if (!r) {
                return
            }
            if (r.documentElement.scrollTop) {
                r.documentElement.scrollTop = e
            } else {
                r.body.scrollTop = e
            }
        },
        getScrollLeft: function (e) {
            if (!e) {
                return 0
            }
            return (e.documentElement.scrollLeft || e.body.scrollLeft)
        },
        setScrollLeft: function (e, r) {
            if (!e) {
                return
            }
            if (e.documentElement.scrollLeft) {
                e.documentElement.scrollLeft = r
            } else {
                e.body.scrollLeft = r
            }
        },
        getPosition: function (u, A) {
            if (!u) {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
            A = !!A;
            u = g(u);
            var y = (A) ? g.cumulativeOffset(u) : g.positionedOffset(u);
            var v;
            var x = u.style.display;
            if (x != "none" && x != c) {
                v = {
                    width: u.offsetWidth,
                    height: u.offsetHeight
                }
            } else {
                var s = u.style;
                var z = s.visibility;
                var w = s.position;
                var r = s.display;
                s.visibility = "hidden";
                s.position = "absolute";
                s.display = "block";
                var e = u.clientWidth;
                var t = u.clientHeight;
                s.display = r;
                s.position = w;
                s.visibility = z;
                v = {
                    width: e,
                    height: t
                }
            }
            return {
                x: y[0],
                y: y[1],
                width: v.width,
                height: v.height
            }
        },
        getWidth: function (r) {
            var e = r.style.width;
            if (e.isPx()) {
                return e.parsePx()
            }
            return r.offsetWidth
        },
        setWidth: function (r, e) {
            k.applyStyles(r, {
                width: e
            })
        },
        getHeight: function (r) {
            var e = r.style.height;
            if (e.isPx()) {
                return e.parsePx()
            }
            return r.offsetHeight
        },
        setHeight: function (r, e) {
            k.applyStyles(r, {
                height: e
            })
        },
        replacePngPath: function (t) {
            if (g.msie6) {
                if (n.location.href.indexOf("http://") > -1) {
                    return
                }
                try {
                    var w = g.getStyle(t, "filter");
                    var s = /src='([^']+)'/.exec(w)[1];
                    if (!s || s == "none") {
                        return
                    } else {
                        if (s.indexOf("http://") > -1) {
                            return
                        }
                    }
                    var r = n.location.href.split("/");
                    r.push("css");
                    r.pop();
                    s = s.replace(/\.\.\//g, function () {
                        r.pop();
                        return ""
                    });
                    var u = r.join("/") + "/" + s;
                    t.style.filter = w.replace(/src='([^']+)'/, "src='" + u + "'")
                } catch (v) {
                    alert(v)
                }
            }
        }
    });
    Object.extend(k, {
        EMPTY_PARAGRAPH_HTML: (g.msie ? "<p>&nbsp;</p>" : "<p><br></p>")
    });
    h.$tom = k;
    (function (e) {
        e.Util = {
            _dispElIds: [],
            getDispElId: function () {
                var s;
                do {
                    s = "tx_entry_" + (Math.floor(Math.random() * 90000) + 10000) + "_"
                } while (e.Util._dispElIds.contains(s));
                e.Util._dispElIds.push(s);
                return s
            },
            generateKey: function () {
                return parseInt(Math.random() * 100000000)
            },
            toStyleString: function (t) {
                var u = [];
                for (var s in t) {
                    if (t[s]) {
                        u.push(s.replace(/([A-Z])/g, "-$1").toLowerCase());
                        u.push(":");
                        u.push(t[s]);
                        u.push(";")
                    }
                }
                return u.join("")
            },
            toAttrString: function (t) {
                var u = [];
                for (var s in t) {
                    if (t[s]) {
                        u.push(" " + s + '="' + t[s] + '"')
                    }
                }
                return u.join("")
            },
            getMatchValue: function (u, t, v) {
                var s;
                if ((s = u.exec(t)) != c) {
                    return s[v]
                } else {
                    return c
                }
            },
            getAttachmentType: function (t) {
                t = (t || "").toLowerCase();
                var s = ["image/jpg", "image/jpeg", "image/png", "image/tiff", "image/gif", "image/bmp", "image/x-jg", "image/ief", "image/pict", "jpg", "bmp", "gif", "png"];
                if (s.contains(t)) {
                    return "image"
                }
                return "file"
            },
            thumburl: function (s) {
                s = (s || "").toLowerCase();
                switch (s) {
                case "doc":
                case "docx":
                    return r("#iconpath/pn_word.gif");
                case "xls":
                case "xlsx":
                    return r("#iconpath/pn_xls.gif");
                case "ppt":
                case "pptx":
                    return r("#iconpath/pn_ppt.gif");
                case "pdf":
                    return r("#iconpath/pn_pdf.gif");
                case "txt":
                    return r("#iconpath/pn_txt.gif");
                case "hwp":
                    return r("#iconpath/pn_hwp.gif");
                case "zip":
                case "alz":
                    return r("#iconpath/pn_zip.gif");
                case "mp3":
                case "wav":
                case "ogg":
                case "wma":
                case "mp4":
                case "ape":
                case "ra":
                case "ram":
                    return r("#iconpath/pn_mp3.gif");
                case "avi":
                case "mpeg":
                case "wmv":
                case "asf":
                    return r("#iconpath/pn_movie.gif");
                case "swf":
                    return r("#iconpath/pn_swf.gif");
                case "htm":
                case "html":
                    return r("#iconpath/pn_html.gif");
                case "jpg":
                case "gif":
                case "png":
                case "bmp":
                    return r("#iconpath/pn_etc.gif");
                default:
                    return r("#iconpath/pn_etc.gif")
                }
            },
            prevurl: function (s) {
                s = (s || "").toLowerCase();
                switch (s) {
                case "doc":
                case "docx":
                    return r("#iconpath/p_word_s.gif");
                case "xls":
                case "xlsx":
                    return r("#iconpath/p_xls_s.gif");
                case "ppt":
                case "pptx":
                    return r("#iconpath/p_ppt_s.gif");
                case "pdf":
                    return r("#iconpath/p_pdf_s.gif");
                case "txt":
                    return r("#iconpath/p_txt_s.gif");
                case "hwp":
                    return r("#iconpath/p_hwp_s.gif");
                case "zip":
                case "alz":
                    return r("#iconpath/p_zip_s.gif");
                case "mp3":
                case "wav":
                case "ogg":
                case "wma":
                case "mp4":
                case "ape":
                case "ra":
                case "ram":
                    return r("#iconpath/p_mp3_s.gif");
                case "avi":
                case "mpeg":
                case "wmv":
                case "asf":
                    return r("#iconpath/p_movie_s.gif");
                case "swf":
                    return r("#iconpath/p_swf_s.gif");
                case "htm":
                case "html":
                    return r("#iconpath/p_html_s.gif");
                case "jpg":
                    return r("#iconpath/p_jpg_s.gif");
                case "gif":
                    return r("#iconpath/p_gif_s.gif");
                case "png":
                case "bmp":
                    return r("#iconpath/p_png_s.gif");
                default:
                    return r("#iconpath/p_etc_s.gif")
                }
            },
            getMatchedClassName: function (w, v) {
                var s = q;
                var t = "";
                for (var u = 0; u < v.length; u++) {
                    t = v[u];
                    if (g.hasClassName(w, t)) {
                        s = t;
                        break
                    }
                }
                return s
            },
            getAllAttributesFromEmbed: function (t) {
                var w = {};
                t = t.replace(/<embed|>/ig, "");
                try {
                    var v = /(\w+)=((?:\")[^\"]+(?:\"|$)|(?:')[^']+(?:'|$)|(?:[^\"'][^ \n]+($| |\n)))/ig;
                    var s;
                    while ((s = v.exec(t)) != c) {
                        w[s[1].trim().toLowerCase()] = s[2].replace(/^(\"|')/i, "").replace(/(\"|')$/i, "").trim()
                    }
                } catch (u) {}
                return w
            },
            getAllAttributes: function (u) {
                var v = {};
                var s;
                var t = new RegExp('style="[^"]*(?:width|WIDTH)\\s*:\\s*([0-9]+)px[^"]*"', "g");
                while ((s = t.exec(u)) != c) {
                    v.width = s[1]
                }
                t = new RegExp('style="[^"]*(?:height|HEIGHT)\\s*:\\s*([0-9]+)px[^"]*"', "g");
                while ((s = t.exec(u)) != c) {
                    v.height = s[1]
                }
                t = new RegExp('\\s+([a-zA-Z]+)="([^"]*)"', "g");
                while ((s = t.exec(u)) != c) {
                    if (!v[s[1].toLowerCase()]) {
                        v[s[1].toLowerCase()] = s[2]
                    }
                }
                t = new RegExp("\\s+([a-zA-Z]+)='([^']*)'", "g");
                while ((s = t.exec(u)) != c) {
                    if (!v[s[1].toLowerCase()]) {
                        v[s[1].toLowerCase()] = s[2]
                    }
                }
                t = new RegExp("\\s+([a-zA-Z]+)=([^\\s>]*)", "g");
                while ((s = t.exec(u)) != c) {
                    if (!v[s[1].toLowerCase()]) {
                        v[s[1].toLowerCase()] = s[2]
                    }
                }
                return v
            }
        };
        e.HtmlCreator = {
            createTableMarkup: function (A, w, u) {
                var t = [];
                t.push('<table unselectable="on">');
                t.push("<tbody>");
                var y = u.length;
                var v;
                for (var z = 0; z < A; z++) {
                    t.push("<tr>");
                    for (var s = 0; s < w; s++) {
                        if (z * w + s < y) {
                            v = u[z * w + s];
                            if (v.image) {
                                var x = a.getIconPath(v.image);
                                t.push('<td class="tx-menu-list-item"><a href="javascript:;"><span class="' + (v.klass || "") + '"><img src="' + x + '" data="' + v.data + '"/></span></a></td>')
                            } else {
                                t.push('<td class="tx-menu-list-item"><a href="javascript:;"><span class="' + (v.klass || "") + '">' + v.data + "</span></a></td>")
                            }
                        } else {
                            t.push('<td class="tx-menu-list-item"><a href="javascript:;"><span class="">&nbsp;</span></a></td>')
                        }
                    }
                    t.push("</tr>")
                }
                t.push("</tbody>");
                t.push("</table>");
                return t.join("\n")
            }
        };
        e.String = {
            escapeQuot: function (s) {
                return s.replace(new RegExp('"', "g"), "&quot;").replace(new RegExp("'", "g"), "&#39;")
            },
            unescapeQuot: function (s) {
                return s.replace(new RegExp("&quot;", "gi"), '"').replace(new RegExp("&#39;", "g"), "'")
            },
            htmlspecialchars: function (s) {
                return e.String.escapeQuot(s.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;").replace(new RegExp(">", "g"), "&gt;"))
            },
            unHtmlspecialchars: function (s) {
                return e.String.unescapeQuot(s.replace(new RegExp("&amp;", "gi"), "&").replace(new RegExp("&lt;", "gi"), "<").replace(new RegExp("&gt;", "gi"), ">"))
            },
            parseAttribute: function (t, w) {
                var x = new RegExp("(^|\\W)" + w + '="([^"]*)"', "gi");
                var v = new RegExp("(^|\\W)" + w + "='([^']*)'", "gi");
                var u = new RegExp("(^|\\W)" + w + "=([^\\s>]*)", "gi");
                var s;
                if (s = x.exec(t)) {
                    return s[2]
                } else {
                    if (s = v.exec(t)) {
                        return s[2]
                    } else {
                        if (s = u.exec(t)) {
                            return s[2]
                        } else {
                            return ""
                        }
                    }
                }
            },
            changeAttribute: function (s, w, z) {
                var x = new RegExp("(^|\\W)" + w + '="([^"]*)"', "gi");
                var v = new RegExp("(^|\\W)" + w + "='([^']*)'", "gi");
                var u = new RegExp("(^|\\W)" + w + "=([^\\s>]*)", "gi");
                var t = new RegExp("<([\\w]+\\s*)", "gi");
                var y = q;
                if (s.search(x) > -1) {
                    y = b;
                    s = s.replace(x, z)
                }
                if (s.search(v) > -1) {
                    y = b;
                    s = s.replace(v, z)
                }
                if (s.search(u) > -1) {
                    y = b;
                    s = s.replace(u, z)
                }
                if (!y) {
                    s = s.replace(t, "<$1" + z + " ")
                }
                return s
            }
        };
        e.Validator = e.Class.create({
            initialize: function () {},
            strip: function (s) {
                return s.stripTags().replace(/&nbsp;/g, "").replace(e.__WORD_JOINER_REGEXP, "").trim()
            },
            exists: function (s) {
                if (!s) {
                    return q
                }
                if (this.strip(s) == "") {
                    if (s.search(/<(img|iframe|embed|table|hr|script|TXDB)/i) < 0) {
                        return q
                    }
                }
                return b
            },
            equals: function (s, t) {
                if (!s || !t) {
                    return q
                }
                if (s.search(/<(img|iframe|embed|table|hr|script|TXDB)/i) < 0) {
                    if (this.strip(s) == this.strip(t)) {
                        return b
                    }
                }
                return q
            }
        });
        e.Repeater = e.Class.create({
            initialize: function (s) {
                this.execHandler = s
            },
            start: function (s) {
                if (this.tItv) {
                    this.clear()
                }
                this.tItv = h.setInterval(this.onTimer.bind(this), s)
            },
            clear: function () {
                h.clearInterval(this.tItv);
                this.tItv = c
            },
            onTimer: function () {
                if (this.execHandler != c) {
                    this.execHandler()
                }
            }
        });
        e.Timer = e.Class.create({
            initialize: function (s) {
                this.execHandler = s
            },
            start: function (s) {
                h.setTimeout(this.onTimer.bind(this), s)
            },
            onTimer: function () {
                if (this.execHandler != c) {
                    this.execHandler()
                }
            }
        });
        e.Paging = e.Class.create({
            $const: {
                DEFAULT_PAGE_SIZE: 5,
                DEFAULT_BLOCK_SIZE: 10
            },
            initialize: function (t, s) {
                this.data = t;
                this.currentpage = s.initPage || 1;
                this.totalrow = s.totalrow || this.getTotalRow();
                this.pagesize = s.pagesize || e.Paging.DEFAULT_PAGE_SIZE;
                this.blocksize = s.blocksize || e.Paging.DEFAULT_PAGE_SIZE;
                this.totalpage = Math.ceil(this.totalrow / this.pagesize);
                this.totalblock = Math.ceil(this.totalpage / this.blocksize)
            },
            getNextPage: function () {
                return (this.currentpage < this.totalpage) ? this.currentpage + 1 : 0
            },
            getPrevPage: function () {
                return (this.currentpage > 1) ? this.currentpage - 1 : 0
            },
            getNextBlock: function () {
                var s = Math.ceil(this.currentpage / this.blocksize);
                return (s < this.totalblock) ? s * this.blocksize + 1 : 0
            },
            getPrevBlock: function () {
                var s = Math.ceil(this.currentpage / this.blocksize);
                return (s > 1) ? (s - 2) * this.blocksize + 1 : 0
            },
            getPageList: function () {
                var t = [];
                var s = Math.ceil(this.currentpage / this.blocksize) - 1;
                var v = (s * this.blocksize + 1);
                var w = Math.min(this.totalpage, (v + this.blocksize - 1));
                for (var u = v; u <= w; u++) {
                    t.push(u)
                }
                return t
            },
            movePage: function (s) {
                this.currentpage = s || this.currentpage
            },
            getOnePageData: function () {
                var s = [];
                var v = (this.currentpage - 1) * this.pagesize;
                var t = Math.min(this.currentpage * this.pagesize, this.totalrow);
                for (var u = v; u < t; u++) {
                    s.push(this.data[u])
                }
                return s
            },
            getTotalRow: function () {
                return this.data.length
            }
        });
        e.Slidebar = e.Class.create({
            initialize: function (s) {
                this.elContext = s.el;
                this.knobWidth = s.knobWidth;
                this.isDisabled = q;
                this.handler = function (u) {
                    if (!this.isDisabled && typeof s.handler == "function") {
                        s.handler(u)
                    }
                };
                this.logicObj = {
                    interval: s.interval || 5,
                    min: s.min || 0,
                    max: s.max || 100
                };
                this.physicObj = {
                    min: 0,
                    width: s.barSize || 100
                };
                this.physicObj.max = this.physicObj.width - this.knobWidth;
                this.physicObj.interval = this.logicObj.interval * this.physicObj.max / this.logicObj.max;
                this.startPos = 0;
                this.startX = 0;
                this.isDrag = q;
                this.result = 0;
                var t = k.collect(this.elContext, "dd.tx-slide");
                k.collect(t, "span.tx-slide-min").innerHTML = "";
                k.collect(t, "span.tx-slide-max").innerHTML = "";
                this.bindEvent();
                this.setKnobPosition(s.defaultValue || s.min || 0)
            },
            regenerate: function (s) {
                s = parseInt(s * this.physicObj.width / this.logicObj.max);
                this.setKnobPosition(s)
            },
            bindEvent: function () {
                var u = k.collect(this.elContext, "dd.tx-slide");
                var t = k.collect(u, "a.tx-slide-prev");
                var s = k.collect(u, "a.tx-slide-next");
                var w = k.collect(u, "div.tx-slide-bar");
                var v = this.elKnob = k.collect(u, "div.tx-slide-knob");
                g.observe(v, "mousedown", function (x) {
                    this.isDrag = b;
                    this.startPos = this.getKnobPosition();
                    this.startX = x.clientX;
                    g.stop(x)
                }.bind(this));
                g.observe(v, "mouseup", function () {
                    this.isDrag = q
                }.bind(this));
                g.observe(this.elContext, "mousemove", function (x) {
                    if (this.isDrag) {
                        this.setKnobPosition(this.startPos + x.clientX - this.startX);
                        g.stop(x);
                        this.handler(this.result)
                    }
                }.bind(this));
                g.observe(t, "click", function (z) {
                    var y = Math.round(this.physicObj.interval) - 1;
                    var x = this;
                    var A = function () {
                        var B = x.getKnobPosition();
                        x.setKnobPosition(B - 1);
                        if (y-- > 0) {
                            setTimeout(A, 10)
                        } else {
                            x.handler(x.result)
                        }
                    };
                    A();
                    g.stop(z)
                }.bind(this));
                g.observe(s, "click", function (z) {
                    var y = Math.round(this.physicObj.interval);
                    var x = this;
                    var A = function () {
                        var B = x.getKnobPosition();
                        x.setKnobPosition(B + 1);
                        if (--y > 0) {
                            setTimeout(A, 10)
                        } else {
                            x.handler(x.result)
                        }
                    };
                    A();
                    g.stop(z)
                }.bind(this));
                g.observe(this.elContext, "mouseup", function () {
                    if (this.isDrag) {
                        this.isDrag = q
                    }
                }.bind(this));
                g.observe(v, "click", function (x) {
                    g.stop(x)
                }.bind(this));
                g.observe(w, "click", function (z) {
                    if (!this.isDrag) {
                        var y = z.layerX || z.x;
                        this.setKnobPosition(y - this.knobWidth / 2);
                        this.handler(this.result)
                    }
                }.bind(this))
            },
            getKnobPosition: function () {
                var s = g.getStyle(this.elKnob, "left");
                return s.parsePx()
            },
            setKnobPosition: function (s) {
                s = (s < this.physicObj.max) ? s : this.physicObj.max;
                s = (s > this.physicObj.min) ? s : this.physicObj.min;
                g.setStyle(this.elKnob, {
                    left: s.toPx()
                });
                this.result = Math.round(s * this.logicObj.interval / this.physicObj.interval)
            },
            setDisable: function () {
                this.isDisabled = b
            },
            setEnable: function () {
                this.isDisabled = q
            },
            getDisabled: function () {
                return this.isDisabled
            }
        });
        e.DynamicSizer = e.Class.create({
            initialize: function (s) {
                this.config = s;
                this.wrapper = s.el;
                this.elEventContext = tx.div({
                    className: "tx-dynamic-sizer-context"
                });
                this.currentSize = {
                    row: 0,
                    col: 0
                };
                this.dynamicSizingEnabled = b;
                if (!s.moveHandler) {
                    s.moveHandler = function () {}
                }
                if (!s.clickHandler) {
                    s.clickHandler = function () {}
                }
                this.wrapper.appendChild(this.elEventContext);
                this.previewTable = new e.DynamicSizer.PreviewTable({
                    parentEl: this.elEventContext,
                    mouseOverHandler: this.changeSize.bind(this),
                    mouseClickHandler: this.selectSize.bind(this)
                })
            },
            clear: function () {
                this.dynamicSizingEnabled = b;
                this.changeSize(0, 0)
            },
            changeSize: function (t, s) {
                if (this.dynamicSizingEnabled) {
                    this.currentSize.row = t;
                    this.currentSize.col = s;
                    this._changeSelectionSize(t, s);
                    this.config.moveHandler(t, s)
                }
            },
            _changeSelectionSize: function (t, s) {
                this.previewTable.moveSelectionPos(t, s)
            },
            toggleDynamicSizing: function () {
                this.dynamicSizingEnabled = !this.dynamicSizingEnabled;
                if (this.dynamicSizingEnabled) {
                    this.selection.enableResize()
                } else {
                    this.selection.disableResize()
                }
            },
            selectSize: function (s) {
                this.config.clickHandler(s, this.currentSize)
            },
            getCurruentSize: function () {
                return this.currentSize
            }
        });
        e.DynamicSizer.PreviewTable = e.Class.create({
            $const: {
                DEFAULT_TD_STYLE: {},
                DEFAULT_TABLE_PROPERTY: {
                    cellpadding: "0",
                    cellspacing: "1"
                },
                MAX_SIZE: {
                    COL: 10,
                    ROW: 10
                }
            },
            initialize: function (t) {
                this.config = t;
                this.elTable = c;
                this.elTable = this.generateTable("tx-event");
                this.elSelection = tx.div({
                    className: "tx-selection"
                }, this.generateTable("tx-selection"));
                var u = this.generateTable("tx-panel");
                this.eventBinding();
                t.parentEl.appendChild(this.elTable);
                t.parentEl.appendChild(this.elSelection);
                t.parentEl.appendChild(u);
                var v = k.getPosition(this.elTable);
                var s = e.DynamicSizer.PreviewTable.MAX_SIZE;
                this.cellSize = {
                    width: Math.round((v.width - v.x) / s.COL),
                    height: (v.height - v.y) / s.ROW
                }
            },
            generateTable: function (w) {
                var u = tx.tbody();
                var t = e.DynamicSizer.PreviewTable;
                for (var v = 0; v < t.MAX_SIZE.ROW; v++) {
                    var y = tx.tr();
                    for (var s = 0; s < t.MAX_SIZE.COL; s++) {
                        var z = tx.td(tx.div({
                            style: t.DEFAULT_TD_STYLE
                        }));
                        z = this.setCoordToAttr(z, s + 1, v + 1);
                        y.appendChild(z)
                    }
                    u.appendChild(y)
                }
                var x = tx.table(t.DEFAULT_TABLE_PROPERTY);
                g.addClassName(x, w || "");
                x.appendChild(u);
                return x
            },
            moveSelectionPos: function (v, t) {
                var u = (t * this.cellSize.width).toPx();
                var s = (v * this.cellSize.height).toPx();
                g.setStyle(this.elSelection, {
                    width: u,
                    height: s
                })
            },
            setCoordToAttr: function (t, s, u) {
                t.setAttribute("col", s);
                t.setAttribute("row", u);
                return t
            },
            getCoordFromAttr: function (s) {
                return {
                    col: s.getAttribute("col") || 0,
                    row: s.getAttribute("row") || 0
                }
            },
            eventBinding: function () {
                this.mouseOverHandler = this.config.mouseOverHandler;
                this.mouseClickHandler = this.config.mouseClickHandler;
                var s = this;
                var u = function (x) {
                    var w = g.element(x) || {};
                    var v = (w.tagName || "").toUpperCase();
                    if (w && v == "TD") {
                        var y = s.getCoordFromAttr(w);
                        s.mouseOverHandler(y.row, y.col)
                    }
                    g.stop(x)
                };
                var t = function (v) {
                    s.mouseClickHandler(v)
                };
                g.observe(this.elTable, "mouseover", u);
                g.observe(this.elTable, "click", t)
            }
        });
        e.ImageScale = e.Class.create({
            initialize: function (u, t) {
                if (!u.imageurl) {
                    return
                }
                if (u.actualwidth) {
                    return
                }
                var s = function (w, v) {
                    u.actualwidth = w;
                    u.actualheight = v;
                    if (t) {
                        t(w, v)
                    }
                };
                setTimeout(function () {
                    var v = new Image();
                    v.onerror = function () {
                        v = c
                    };
                    if (v.onreadystatechange) {
                        v.onreadystatechange = function () {
                            if (this.readyState == "complete") {
                                s(this.width, this.height);
                                v = c
                            }
                        }
                    } else {
                        v.onload = function () {
                            s(this.width, this.height);
                            v = c
                        }
                    }
                    v.src = u.imageurl
                }, 10)
            }
        });

        function r(s) {
            var t = a.getIconPath(s);
            return t + ""
        }
    })(l);
    l.Flash = {
        DEFAULT: {
            flashvar: {
                debug: q + ""
            },
            paraObj: {
                allowScriptAccess: "always",
                quality: "low",
                menu: q + "",
                scale: "noscale",
                salign: "tl",
                loop: q + ""
            },
            attrObj: {
                bgcolor: "#FFFFFF"
            }
        },
        minFlashVer: "9.0.45",
        load: function (e, s, w, z, r) {
            var y = g.extend({}, l.Flash.DEFAULT.flashvar);
            var t = g.extend({}, l.Flash.DEFAULT.paraObj);
            var u = g.extend({}, l.Flash.DEFAULT.attrObj);
            var x = z ? z : {};
            g.extend(y, x.flashvarObj);
            g.extend(t, x.paraObj);
            g.extend(u, x.attrObj);
            u.id = w;
            if (!g(s)) {
                n.body.appendChild(tx.div({
                    id: s
                }))
            }
            var v = c;
            if (r) {
                v = function (A) {
                    r(A.success)
                }
            }
            swfobject.embedSWF(e, s, x.width ? x.width : "0", x.height ? x.height : "0", this.minFlashVer, q, y, t, u, v)
        },
        get: function (e) {
            return swfobject.getObjectById(e)
        },
        getPlayerVersion: function () {
            return swfobject.getFlashPlayerVersion()
        },
        hasPlayerVersion: function (e) {
            return swfobject.hasFlashPlayerVersion(e)
        },
        ready: function (r, e) {
            if (!l.Flash.get(r)) {
                setTimeout(function () {
                    l.Flash.ready(r, e)
                }, 500);
                return
            }
            setTimeout(e, 500)
        }
    };
    h.$txSWF = function (e) {
        return l.Flash.get(e)
    };
    l.I.XHRequester = l.Faculty.create({
        createXMLHttp: function () {
            var s = c;
            try {
                if (h.XMLHttpRequest) {
                    s = new XMLHttpRequest()
                } else {
                    if (h.ActiveXObject) {
                        s = new ActiveXObject("Msxml2.XMLHTTP");
                        if (!s) {
                            s = new ActiveXObject("Microsoft.XMLHTTP")
                        }
                    }
                }
                return s
            } catch (r) {
                return c
            }
        },
        sendRequest: function (r, s, t, u, y, z) {
            if (s == c && s != "") {
                return c
            }
            var w = c;
            var v = this.createXMLHttp();
            if (v == c) {
                return c
            }
            var A = function () {
                if (v.status == 200) {
                    if (r.toUpperCase() == "HEAD") {
                        w = y(v.getAllResponseHeaders())
                    } else {
                        w = y(v.responseText)
                    }
                } else {
                    w = z(v.status)
                }
                v = c
            };
            try {
                if (u) {
                    v.onreadystatechange = function () {
                        if (v.readyState == 4) {
                            A()
                        }
                    }
                }
                if (r.toUpperCase() == "POST") {
                    v.open("POST", s, u);
                    v.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
                    v.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    v.setRequestHeader("Content-Length", t.length);
                    v.setRequestHeader("Connetion", "close");
                    v.send(t)
                } else {
                    if (t && t.length > 0) {
                        s = s + ((s.indexOf("?") > -1) ? "&" : "?") + t
                    }
                    v.open(r.toUpperCase(), s, u);
                    v.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    v.send(c)
                } if (!u) {
                    A()
                }
                return w
            } catch (x) {
                return c
            }
        }
    });
    l.Responder = {
        callbacks: {},
        process: function () {},
        newKey: function () {
            var e = "exe_" + Math.floor(Math.random() * 100000);
            if (this[e]) {
                return this.newKey()
            } else {
                return e
            }
        },
        register: function (r) {
            var e = this.newKey();
            this.callbacks[e] = function (s) {
                r(s);
                this.callbacks[e] = c
            }.bind(this);
            return e
        }
    };
    l.I.FHRequester = l.Faculty.create({
        sendRequest: function (e, r, s, u, x, B, A) {
            var t = l.Flash.get("tx_fhr");
            if (!t) {
                t = function () {
                    var C = a.getUrl("#cmnhost/swf/FHR3.swf?v=2");
                    l.Flash.load(C, "tx_fhr_target", "tx_fhr");
                    return l.Flash.get("tx_fhr")
                }();
                setTimeout(this.sendRequest.bind(this, e, r, s, u, x, B), 100);
                return
            }
            if (!t.send) {
                setTimeout(this.sendRequest.bind(this, e, r, s, u, x, B), 50);
                return
            }
            var z = l.Responder.register(x);
            var w = 'Trex.Responder.callbacks["' + z + '"]';
            var y = "Trex.Responder.process";
            if (B) {
                var v = l.Responder.register(function (D, C) {
                    if (D == -1) {
                        B(D, C)
                    } else {
                        if (typeof A == "function") {
                            A(D, C)
                        }
                    }
                });
                y = 'Trex.Responder.callbacks["' + v + '"]'
            }
            if (r.charAt(0) === "/") {
                r = "http://" + n.location.host + r
            }
            if (e.toUpperCase() == "GET") {
                if (!s) {
                    s = ""
                } else {
                    r = r + ((r.indexOf("?") > -1) ? "&" : "?") + s
                }
            }
            if (r) {
                t.send(e, r, s, w, y)
            }
        }
    });
    l.I.JSRequester = l.Faculty.create({
        importScript: function (t, w, v, y) {
            if (t == c && t != "") {
                return c
            }
            w = w || "utf-8";
            v = v || n;
            try {
                var u = v.getElementsByTagName("head")[0] || v.documentElement;
                var s = v.createElement("script");
                s.type = "text/javascript";
                s.charset = w;
                s.src = t;
                var r = q;
                s.onload = s.onreadystatechange = function () {
                    if (!r && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                        r = b;
                        if (y) {
                            y()
                        }
                        s.onload = s.onreadystatechange = c;
                        if (u && s.parentNode) {
                            u.removeChild(s)
                        }
                    }
                };
                u.insertBefore(s, u.firstChild)
            } catch (x) {
                console.log(x)
            }
        }
    });
    h.$stop = {};
    h.$propagate = {};
    l.I.JobObservable = l.Faculty.create({
        jobObservers: {},
        observeJob: function (r, e) {
            if (!this.jobObservers[r]) {
                this.jobObservers[r] = []
            }
            this.jobObservers[r].push(e)
        },
        reserveJob: function (t, r, s) {
            s = s || 500;
            if (!this.jobObservers[t]) {
                this.jobObservers[t] = []
            }
            var e = this;
            this.jobObservers[t].push(function () {
                var u = $A(arguments);
                setTimeout(function () {
                    r.apply(e, u)
                }, s)
            })
        },
        fireJobs: function (t) {
            var r = this;
            var s = $A(arguments).slice(1);
            if (!this.jobObservers[t]) {
                return
            }
            try {
                this.jobObservers[t].each(function (e) {
                    e.apply(r, s)
                })
            } catch (u) {
                if (u != $stop) {
                    throw u
                }
            }
        }
    });
    l.I.KeyObservable = l.Faculty.create({
        keyObservers: {},
        observeKey: function (s, r) {
            var e = function (t) {
                return (t.ctrlKey ? "T" : "F") + (t.altKey ? "T" : "F") + (t.shiftKey ? "T" : "F") + "_" + t.keyCode
            }(s);
            if (!this.keyObservers[e]) {
                this.keyObservers[e] = []
            }
            this.keyObservers[e].push(r)
        },
        fireKeys: function (t) {
            var s = function (v) {
                return (v.ctrlKey ? "T" : "F") + (v.altKey ? "T" : "F") + (v.shiftKey ? "T" : "F") + "_" + v.keyCode
            }(t);
            if (!this.keyObservers[s]) {
                return
            }
            var r = this;
            var u = q;
            var e = function () {
                if (!u) {
                    g.stop(t);
                    u = b
                }
            };
            this.keyObservers[s].each(function (v) {
                try {
                    v.apply(r, [t]);
                    e()
                } catch (w) {
                    if (w === $stop) {
                        e()
                    } else {
                        if (w !== $propagate) {}
                    }
                }
            })
        },
        registerKeyEvent: function (r) {
            try {
                g.observe(r, "keydown", this.fireKeys.bind(this), b)
            } catch (s) {}
        }
    });
    l.I.ElementObservable = l.Faculty.create({
        elementObservers: {},
        observeElement: function (s, e) {
            if (s == c) {
                this.observeElement({
                    tag: "*tx-final-body*"
                }, e)
            } else {
                if (s.length) {
                    for (var r = 0; r < s.length; r++) {
                        var t = s[r];
                        this.observeElement(t, e)
                    }
                } else {
                    if (!this.elementObservers[s.tag]) {
                        this.elementObservers[s.tag] = {}
                    }
                    if (!s.klass) {
                        s.klass = "*tx-all-class*"
                    }
                    if (!this.elementObservers[s.tag][s.klass]) {
                        this.elementObservers[s.tag][s.klass] = []
                    }
                    this.elementObservers[s.tag][s.klass].push(e)
                }
            }
        },
        fireElements: function (u) {
            if (!u) {
                return
            }
            var t = u;
            var s = $A(arguments).slice(1);
            var r = this;
            try {
                var w;
                if (k.kindOf(t, "img,hr,table,button,iframe")) {
                    w = this.collectObserverByElement(t.nodeName.toLowerCase(), t.className);
                    if (w) {
                        w.each(function (e) {
                            e.apply(r, [t].concat(s))
                        })
                    }
                } else {
                    while (t) {
                        w = this.collectObserverByElement(t.nodeName.toLowerCase(), t.className);
                        if (w) {
                            w.each(function (e) {
                                e.apply(r, [t].concat(s))
                            })
                        }
                        if (k.isBody(t)) {
                            break
                        }
                        t = k.parent(t)
                    }
                }
            } catch (v) {
                if (v != $stop) {
                    throw v
                }
            }
            this.fireFinally()
        },
        fireFinally: function () {
            var e = this;
            var r = $A(arguments).slice(1);
            var s = this.collectObserverByElement("*tx-final-body*");
            if (s) {
                s.each(function (t) {
                    t.apply(e, [c].concat(r))
                })
            }
        },
        collectObserverByElement: function (r, e) {
            if (!this.elementObservers[r]) {
                return c
            }
            var u = [];
            e = e || "";
            if (e != "") {
                var s = e.split(" ");
                for (var t in this.elementObservers[r]) {
                    if (s.contains(t)) {
                        u.push(this.elementObservers[r][t])
                    }
                }
            }
            if (this.elementObservers[r]["*tx-all-class*"]) {
                u.push(this.elementObservers[r]["*tx-all-class*"])
            }
            return u.flatten()
        }
    });
    l.I.MouseoverObservable = l.Faculty.create({
        mouseoverObservers: {},
        observeMouseover: function (e, r, s) {
            if (!this.mouseoverObservers[e]) {
                this.mouseoverObservers[e] = {
                    success: [],
                    fail: [],
                    flag: q
                }
            }
            this.mouseoverObservers[e]["success"].push(r);
            if (s) {
                this.mouseoverObservers[e]["fail"].push(s)
            }
        },
        fireMouseover: function (u) {
            if (!u) {
                return
            }
            var t = u;
            var r = this;
            try {
                for (var s in this.mouseoverObservers) {
                    this.mouseoverObservers[s].flag = q
                }
                while (t) {
                    var x = this.collectMouseoverObserver(t);
                    if (x.length > 0) {
                        var w = this.getPositionByNode(t);
                        x.each(function (e) {
                            e.apply(r, [t, w])
                        })
                    }
                    if (k.isBody(t)) {
                        break
                    }
                    t = k.parent(t)
                }
            } catch (v) {
                if (v != $stop) {
                    throw v
                }
            }
            this.runMouseoverFailHandler()
        },
        runMouseoverFailHandler: function () {
            var r = [];
            for (var e in this.mouseoverObservers) {
                if (!this.mouseoverObservers[e].flag) {
                    r.push(this.mouseoverObservers[e]["fail"])
                }
            }
            r.flatten().each(function (s) {
                s()
            })
        },
        collectMouseoverObserver: function (w) {
            var x = [];
            var s = w.className || "";
            var r = w.tagName;
            if (r) {
                r = r.toLowerCase();
                if (this.mouseoverObservers[r]) {
                    x.push(this.mouseoverObservers[r]["success"]);
                    this.mouseoverObservers[r]["flag"] = b
                }
            }
            if (s != "") {
                var t = s.split(" ");
                for (var v = 0, e = t.length; v < e; v++) {
                    var u = r + "." + t[v];
                    if (this.mouseoverObservers[u]) {
                        x.push(this.mouseoverObservers[u]["success"]);
                        this.mouseoverObservers[u]["flag"] = b
                    }
                }
            }
            return x.flatten()
        }
    });
    l.I.Runnable = l.Faculty.create({
        isRunning: q,
        repeater: c,
        threads: [],
        startThread: function (e) {
            if (this.repeater) {
                this.repeater.clear()
            } else {
                this.repeater = new l.Repeater(this.runThread.bind(this))
            }
            this.repeater.start(e)
        },
        stopThread: function () {
            this.repeater.clear()
        },
        runThread: function () {
            if (this.isRunning) {
                return
            }
            if (this.threads.length > 0) {
                this.isRunning = b;
                (this.threads.shift())();
                this.isRunning = q
            }
        },
        putThread: function (e, r) {
            if (r) {
                this.threads.unshift(e)
            } else {
                this.threads.push(e)
            }
        }
    });
    l.MarkupTemplate.add("blackbox", '<div class="tx-blackbox">		<div class="tx-blackbox-panel"></div>		<div class="tx-content"></div>	</div>');
    l.BlackBox = l.Class.create({
        initialize: function () {},
        make: function (s) {
            var r = this.elBlackbox = l.MarkupTemplate.get("blackbox").evaluateAsDom({});
            var t = this.holder = s || n.body;
            k.insertFirst(t, r);
            this.elBlackboxPanel = k.collect(r, "div.tx-blackbox-panel");
            this.elContentArea = k.collect(r, "div.tx-content");
            var e = this.calculatePanelSize();
            this.panelWidth = e[0];
            this.panelHeight = e[1]
        },
        show: function (e) {
            this.makeScrollbar();
            this._append(e)
        },
        _append: function (r) {
            if (this.elContentArea.firstChild != c) {
                return q
            }
            k.append(this.elContentArea, r);
            var e = this.calculatePanelSize();
            this.panelWidth = e[0];
            this.panelHeight = e[1];
            g.setStyle(this.elBlackbox, {
                width: this.panelWidth.toPx(),
                height: this.panelHeight.toPx()
            });
            g.setStyle(this.elBlackboxPanel, {
                width: this.panelWidth.toPx(),
                height: this.panelHeight.toPx()
            });
            g.show(this.elBlackbox);
            this.alignCenter()
        },
        hide: function () {
            g.hide(this.elBlackbox);
            this.elContentArea.removeChild(this.elContentArea.firstChild);
            this.removeScrollbar()
        },
        makeScrollbar: function () {
            if (g.msie) {
                n.body.scroll = "yes"
            } else {
                n.body.style.overflow = "scroll"
            }
        },
        removeScrollbar: function () {
            if (g.msie) {
                n.body.scroll = ""
            } else {
                n.body.style.overflow = ""
            }
        },
        calculatePanelSize: function () {
            var e = k.getPosition(this.holder);
            return [e.width, e.height]
        },
        resizeBlackbox: function (e) {
            this.panelHeight = e;
            g.setStyle(this.elBlackbox, {
                height: this.panelHeight.toPx()
            });
            g.setStyle(this.elBlackboxPanel, {
                height: this.panelHeight.toPx()
            });
            this.alignCenter()
        },
        alignCenter: function () {
            var v = g.getStyle(this.elBlackbox, "width");
            var e = g.getStyle(this.elBlackbox, "height");
            var s = this.calculatePanelSize();
            this.panelWidth = s[0];
            this.panelHeight = s[1];
            var u = k.getPosition(this.elContentArea.firstChild);
            var r = u.width.parsePx();
            var w = u.height.parsePx();
            var t = (this.panelWidth - r) / 2;
            var x = (this.panelHeight > w * 2) ? (this.panelHeight - w) / 2 : 0;
            g.setStyle(this.elContentArea, {
                marginLeft: t.toPx(),
                marginTop: "30px"
            })
        }
    });
    l.install("editor.getBlackBox & canvas.getBlackBox", function (r, s, t, e) {
        var u = new l.BlackBox();
        r.getBlackBox = function () {
            return u
        };
        e.getBlackBox = function () {
            return u
        }
    });
    l.module("generate blackbox", function (s, t, u, e) {
        var v = s.getBlackBox();
        var r = s.getWrapper();
        v.make(r);
        e.observeKey({
            ctrlKey: q,
            altKey: q,
            shiftKey: q,
            keyCode: 27
        }, v.hide.bind(v));
        s.observeKey({
            ctrlKey: q,
            altKey: q,
            shiftKey: q,
            keyCode: 27
        }, v.hide.bind(v));
        e.observeJob(l.Ev.__CANVAS_HEIGHT_CHANGE, function (w) {
            v.resizeBlackbox(w.parsePx())
        })
    });
    l.MarkupTemplate.add("noticebox", '<div class="tx-noticebox">	<dl>		<dt>			<span>#{head}</span>			<a href="javascript:;">close</a>		</dt>		<dd>			<p>#{body}</p>			<div>				<a href="javascript:;"><img src="#{confirm}" border="0"/></a>				<a href="javascript:;"><img src="#{cancel}" border="0" /></a>			</div>		</dd>	</dl></div>');
    l.NoticeBox = l.Class.create({
        initialize: function (r, e) {
            this.make({
                head: r.head,
                body: r.body,
                confirm: r.confirm || "http://i1.daumcdn.net/icon/editor/btn_confirm_s1.gif?v=2",
                cancel: r.cancel || "http://i1.daumcdn.net/icon/editor/btn_cancel_s1.gif?v=2"
            });
            this.blackbox = e
        },
        make: function (e) {
            if (this.elBox) {
                return this
            }
            e = e || {};
            var r = this.elBox = l.MarkupTemplate.get("noticebox").evaluateAsDom(e);
            g.observe(k.collect(r, "dt a"), "click", this.cancel.bind(this));
            g.observe(k.collectAll(r, "dd div a")[0], "click", this.confirm.bind(this));
            g.observe(k.collectAll(r, "dd div a")[1], "click", this.cancel.bind(this));
            return this
        },
        weave: function (s, r, e) {
            this.confirmHandler = s;
            this.cancelHandler = r;
            this.completeHandler = e;
            return this
        },
        show: function () {
            this.blackbox.show(this.elBox)
        },
        hide: function () {
            this.blackbox.hide();
            return q
        },
        confirm: function () {
            if (this.confirmHandler) {
                this.confirmHandler()
            }
            return q
        },
        cancel: function (e) {
            if (this.cancelHandler) {
                this.cancelHandler()
            }
            this.hide(e);
            return q
        },
        complete: function (e) {
            if (this.completeHandler) {
                this.completeHandler()
            }
            this.hide(e);
            return q
        }
    });
    l.install("editor.newNoticeBox", function (e) {
        e.newNoticeBox = function (r) {
            return new l.NoticeBox(r, e.getBlackBox())
        }
    });
    h.autoResizeHeight = function (s, r) {
        var x = window.top;
        if (typeof s == "number") {
            var C = 50;
            var e = 30;
            var t = 300;
            if (!r) {
                r = 0
            }
            var w = self.document.documentElement;
            var B = {},
                A = {
                    x: 0,
                    y: 0
                };
            var v = (x.screenLeft) ? x.screenLeft : x.screenX;
            var z = (x.screenTop) ? x.screenTop : x.screenY;
            x.resizeTo(s, t);
            var y = (w.clientHeight == w.scrollHeight && w.scrollHeight != w.offsetHeight) ? w.offsetHeight : w.scrollHeight;
            var u = (w.clientWidth == w.scrollWidth && w.scrollWidth != w.offsetWidth) ? w.offsetWidth : w.scrollWidth;
            if (y > w.clientHeight) {
                B.height = y - w.clientHeight
            } else {
                B.width = 8;
                B.height = w.clientHeight - y + 35
            }
            A.y = Math.min(screen.availHeight - y - z - C, 0);
            A.x = Math.min(screen.availWidth - u - v - e, 0);
            if (A.x || A.y) {
                if (!g.chrome) {
                    x.moveBy(A.x, A.y)
                }
                x.resizeTo(s, t)
            }
            setTimeout(function () {
                x.resizeBy(0, B.height + r)
            }, 20)
        } else {
            setTimeout(function () {
                var J = s;
                if (!J) {
                    J = document.getElementsByTagName("HTML")[0]
                }
                var I = document.getElementsByTagName("HTML")[0];
                var H = I.clientWidth || I.scrollWidth;
                var D = I.clientHeight || I.scrollHeight;
                var E = J.offsetWidth || J.scrollWidth;
                var G = J.offsetHeight || J.scrollHeight;
                var F = E - H;
                var K = G - D;
                if (F || K) {
                    x.resizeBy(F, K)
                }
            }, 100)
        }
    };
    h.Querystring = function (v) {
        this.params = new Object();
        this.get = function (y, x) {
            if (x == c) {
                x = c
            }
            var z = this.params[y];
            if (z == c) {
                z = x
            }
            return z
        };
        this.getUTF8 = function (y, x) {
            if (x == c) {
                x = c
            }
            var z = unescape(this.params[y]);
            if (z == c) {
                z = x
            }
            return z
        };
        var e;
        if (v) {
            e = v
        } else {
            e = location.search.substring(1, location.search.length)
        } if (e.length == 0) {
            return
        }
        e = e.replace(/\+/g, " ");
        var s = e.split("&");
        for (var t = 0; t < s.length; t++) {
            var u;
            var w = s[t].split("=");
            var r = unescape(w[0]);
            if (w.length == 2) {
                u = w[1]
            } else {
                u = r
            }
            this.params[r] = u
        }
    };
    h.qs = new Querystring();
    h.closeWindow = function () {
        completeAttach();
        top.opener = self;
        top.close();
        var e;
        if (opener && !opener.closed) {
            e = opener
        } else {
            e = parent.opener
        } if (e.Editor) {
            e.Editor.focus()
        } else {
            e.focus()
        }
    };
    h.stripTags = function (e) {
        return e.replace(/<\/?[^>]+>/gi, "")
    };
    h.getAttacher = function (e) {
        return PopupUtil.getOpener().Editor.getSidebar().getAttacher(e)
    };
    h.getEmbeder = function (e) {
        return PopupUtil.getOpener().Editor.getSidebar().getEmbeder(e)
    };
    h.registerAction = function (e) {
        if (!e) {
            return
        }
        window.execAttach = e.attachHandler
    };
    h.registerSearch = function (e) {
        if (!e) {
            return
        }
        window.execSearch = e.insertHandler
    };
    h.registerEmded = function (e) {
        if (!e) {
            return
        }
        window.execEmbed = e.embedHandler
    };
    h.modifyResult = function () {};
    h.completeAttach = function () {};
    h.existEntry = function (e) {
        if (!e) {
            return q
        }
        return e.existEntry()
    };
    h.getFirstEntryData = function (e) {
        if (!e) {
            return q
        }
        return e.getFirstEntryData()
    };
    h.getAttrOfElement = function (r, t) {
        var s = new RegExp(t + "=['\"]?([^\"'>]*)[\"' ]", "i");
        var e = s.exec(r);
        if (e) {
            return e[1]
        } else {
            return c
        }
    };
    h.getParamValOfObjectTag = function (u, t) {
        var r = new RegExp("<param([^>]*)name=['\"]" + t + "['\"]([^>]*)>", "gi");
        var e = r.exec(u, "gi");
        var s = c;
        if (e) {
            r = new RegExp("value=['\"]([^>'\"]*)['\"]", "gi");
            s = r.exec(e[0]);
            if (s) {
                return s[1]
            }
        }
        return c
    };
    h.PopupUtil = {
        getOpener: function () {
            var e;
            if (opener && opener.Editor) {
                e = opener
            } else {
                if (parent.opener && parent.opener.Editor) {
                    e = parent.opener
                } else {
                    if (opener.opener && opener.opener.Editor) {
                        e = opener.opener
                    }
                }
            }
            return e
        }
    };
    h.getDateFormat = function (t, w) {
        t = t ? t.trim() : "";
        if ((t.length != 8) || (t.indexOf("0") == 0)) {
            return ""
        }
        var u = t.substr(0, 4) + (w || "\ub144 ");
        var s = (t.substr(4, 2).indexOf("0") == 0) ? t.substr(5, 1) : t.substr(4, 2);
        var e = (t.substr(6, 2).indexOf("0") == 0) ? t.substr(7, 1) : t.substr(6, 2);
        var v = (s != "0") ? s + (w || "\uc6d4 ") : "";
        var r = (e != "0") ? (e + (w ? "" : "\uc77c")) : "";
        return u + v + r
    };
    h.getDashedDateFormat = function (r) {
        r = r.trim();
        if (r.length != 8 || r.indexOf("00") == 0) {
            return ""
        }
        var t = removeZero(r.substr(0, 4), "");
        var s = removeZero(r.substr(4, 2), "-");
        var e = removeZero(r.substr(6, 2), "-");
        return t + s + e
    };
    h.removeZero = function (r, e) {
        return (r.indexOf("00") == 0) ? "" : e + r
    };
    h.getYearFormat = function (e) {
        e = e.trim() || "";
        if (e.length != 8) {
            return ""
        }
        return e.substr(0, 4) + "\ub144 "
    };
    h.getDayFormat = function (s) {
        try {
            s = s.trim();
            if (s.length != 8) {
                return s
            }
            var u = new Date(s.substr(0, 4), s.substr(4, 2) - 1, s.substr(6, 2));
            var r = ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"];
            return r[u.getDay()]
        } catch (t) {}
        return ""
    };
    h.stripBracket = function (s) {
        var r = s.trim().split(",");
        var e = [];
        r.each(function (t) {
            e.push(t.replace(/\[\[[\w]*\]\]/, ""))
        });
        return e.join(", ")
    };
    h.getFieldJson = function (e, r) {
        if (r) {
            return {
                name: e,
                value: r.stripTags()
            }
        }
        return c
    };
    if (typeof Editor !== "undefined") {
        Editor.version = "7.3.19"
    }
    try {
        EditorJSLoader.readyState = "complete";
        EditorJSLoader.finish()
    } catch (m) {}
})();
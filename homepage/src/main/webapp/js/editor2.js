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
    } catch (t) {}
    var c = document,
        i = window,
        o = c.documentElement,
        d = false,
        v = true,
        j = null,
        r;
    var foo = new Array();
    var check = "a,";
    var a;
    if (!a) {
        a = {}
    }(function () {
        function z(F) {
            return F < 10 ? "0" + F : F
        }
        if (typeof Date.prototype.toJSON !== "function") {
            Date.prototype.toJSON = function (F) {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + z(this.getUTCMonth() + 1) + "-" + z(this.getUTCDate()) + "T" + z(this.getUTCHours()) + ":" + z(this.getUTCMinutes()) + ":" + z(this.getUTCSeconds()) + "Z" : null
            };
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (F) {
                return this.valueOf()
            }
        }
        var y = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            B = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            C, x, E = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            D;

        function e(F) {
            B.lastIndex = 0;
            return B.test(F) ? '"' + F.replace(B, function (G) {
                var H = E[G];
                return typeof H === "string" ? H : "\\u" + ("0000" + G.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + F + '"'
        }

        function A(M, J) {
            var H, G, N, F, K = C,
                I, L = J[M];
            if (L && typeof L === "object" && typeof L.toJSON === "function") {
                L = L.toJSON(M)
            }
            if (typeof D === "function") {
                L = D.call(J, M, L)
            }
            switch (typeof L) {
            case "string":
                return e(L);
            case "number":
                return isFinite(L) ? String(L) : "null";
            case "boolean":
            case "null":
                return String(L);
            case "object":
                if (!L) {
                    return "null"
                }
                C += x;
                I = [];
                if (Object.prototype.toString.apply(L) === "[object Array]") {
                    F = L.length;
                    for (H = 0; H < F; H += 1) {
                        I[H] = A(H, L) || "null"
                    }
                    N = I.length === 0 ? "[]" : C ? "[\n" + C + I.join(",\n" + C) + "\n" + K + "]" : "[" + I.join(",") + "]";
                    C = K;
                    return N
                }
                if (D && typeof D === "object") {
                    F = D.length;
                    for (H = 0; H < F; H += 1) {
                        if (typeof D[H] === "string") {
                            G = D[H];
                            N = A(G, L);
                            if (N) {
                                I.push(e(G) + (C ? ": " : ":") + N)
                            }
                        }
                    }
                } else {
                    for (G in L) {
                        if (Object.prototype.hasOwnProperty.call(L, G)) {
                            N = A(G, L);
                            if (N) {
                                I.push(e(G) + (C ? ": " : ":") + N)
                            }
                        }
                    }
                }
                N = I.length === 0 ? "{}" : C ? "{\n" + C + I.join(",\n" + C) + "\n" + K + "}" : "{" + I.join(",") + "}";
                C = K;
                return N
            }
        }
        if (typeof a.stringify !== "function") {
            a.stringify = function (I, G, H) {
                var F;
                C = "";
                x = "";
                if (typeof H === "number") {
                    for (F = 0; F < H; F += 1) {
                        x += " "
                    }
                } else {
                    if (typeof H === "string") {
                        x = H
                    }
                }
                D = G;
                if (G && typeof G !== "function" && (typeof G !== "object" || typeof G.length !== "number")) {
                    throw new Error("JSON.stringify")
                }
                return A("", {
                    "": I
                })
            }
        }
        if (typeof a.parse !== "function") {
            a.parse = function (I, F) {
                var H;

                function G(M, L) {
                    var K, J, N = M[L];
                    if (N && typeof N === "object") {
                        for (K in N) {
                            if (Object.prototype.hasOwnProperty.call(N, K)) {
                                J = G(N, K);
                                if (J !== undefined) {
                                    N[K] = J
                                } else {
                                    delete N[K]
                                }
                            }
                        }
                    }
                    return F.call(M, L, N)
                }
                I = String(I);
                y.lastIndex = 0;
                if (y.test(I)) {
                    I = I.replace(y, function (J) {
                        return "\\u" + ("0000" + J.charCodeAt(0).toString(16)).slice(-4)
                    })
                }
                if (/^[\],:{}\s]*$/.test(I.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                    H = txEval("(" + I + ")");
                    return typeof F === "function" ? G({
                        "": H
                    }, "") : H
                }
                throw new SyntaxError("JSON.parse")
            }
        }
    }());
    var u = {};
    (function () {
        Object.extend = function (z, B) {
            for (var A in B) {
                z[A] = B[A]
            }
            return z
        };
        i.Class = {
            create: function () {
                return function () {
                    this.initialize.apply(this, arguments)
                }
            }
        };
        i.$break = {};
        Function.prototype.bind = function () {
            var z = this,
                B = $A(arguments),
                A = B.shift();
            return function () {
                return z.apply(A, B.concat($A(arguments)))
            }
        };
        Function.prototype.bindAsEventListener = function () {
            var z = this,
                B = $A(arguments),
                A = B.shift();
            return function (C) {
                return z.apply(A, [C || i.event].concat(B))
            }
        };
        var y = function (B) {
            var z = arguments;
            if (z.length > 1) {
                for (var A = 0, D = [], C = z.length; A < C; A++) {
                    D.push(u(z[A]))
                }
                return D
            }
            if (typeof B == "string") {
                B = c.getElementById(B)
            }
            return B
        };
        u = y;
        var x = navigator.userAgent.toLowerCase();
        var e = function (z) {
            return x.indexOf(z) != -1
        };
        Object.extend(u, {
            chrome: e("chrome"),
            safari: e("safari") && e("chrome") == d,
            gecko: e("firefox"),
            gecko_ver: e("firefox") ? parseFloat(x.replace(/.*firefox\/([\d\.]+).*/g, "$1")) : 0,
            msie: e("msie"),
            msie_ver: e("msie") ? parseFloat(navigator.appVersion.split("MSIE")[1]) : 0,
            webkit: e("applewebkit"),
            webkit_ver: e("applewebkit") ? parseFloat(x.replace(/.*safari\//g, "")) : 0,
            opera: e("opera"),
            presto: e("presto"),
            os_win: e("win"),
            os_mac: e("mac"),
            iphone: e("iphone"),
            ipod: e("ipod"),
            ipad: e("ipad"),
            ios: e("like mac os x") && e("mobile"),
            ios_ver: (e("like mac os x") && e("mobile")) ? parseFloat(x.replace(/^.*os (\d+)([_\d]*) .*$/g, "$1.$2").replace(/_/g, "")) : 0,
            android: e("android"),
            android_ver: e("android") ? parseFloat(x.replace(/.*android[\s]*([\d\.]+).*/g, "$1")) : 0,
            blackberry: e("blackberry"),
            winphone: e("windows phone os"),
            wince: e("windows ce")
        });
        u.msie6 = u.msie && 6 <= u.msie_ver && u.msie_ver < 7;
        Object.extend(u, {
            extend: Object.extend,
            browser: function () {
                if (u.msie) {
                    return "msie"
                } else {
                    if (u.gecko) {
                        return "firefox"
                    } else {
                        if (u.chrome) {
                            return "chrome"
                        } else {
                            if (u.webkit) {
                                return "safari"
                            } else {
                                if (u.opera) {
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
        i.$must = function (B, z) {
            var A = u(B);
            if (!A) {
                throw new Error("[Exception] " + z + " : not exist element(" + B + ")")
            }
            return A
        };
        i.txlib = y
    })();
    (function () {
        u.extend(u, {
            classNames: function (e) {
                return e.className.split(" ")
            },
            hasClassName: function (x, e) {
                if (e && x.className) {
                    var y = x.className.split(/\s+/);
                    return y.contains(e)
                }
                return d
            },
            addClassName: function (e, x) {
                if (!this.hasClassName(e, x)) {
                    e.className += " " + x
                }
            },
            removeClassName: function (x, e) {
                var y = x.className.split(/\s+/);
                x.className = y.without(e).compact().join(" ")
            },
            visible: function (e) {
                return u.getStyle(e, "display") != "none"
            },
            toggle: function (e) {
                e = u(e);
                u[u.visible(e) ? "hide" : "show"](e);
                return e
            },
            show: function (e) {
                u(e).style.display = "block";
                return e
            },
            hide: function (e) {
                u(e).style.display = "none";
                return e
            }
        })
    })();
    u.extend(u, {
        getStyle: function (x, y) {
            x = u(x);
            y = y == "float" ? "cssFloat" : y.camelize();
            var z = x.style[y];
            if (!z) {
                var e = c.defaultView.getComputedStyle(x, j);
                z = e ? e[y] : j
            }
            if (y == "opacity") {
                return z ? parseFloat(z) : 1
            }
            return z == "auto" ? j : z
        },
        setStyle: function (e, y, x) {
            e = u(e);
            var A = e.style;
            for (var z in y) {
                if (y.hasOwnProperty(z)) {
                    if (z === "opacity") {
                        u.setOpacity(e, y[z])
                    } else {
                        A[(z === "float" || z === "cssFloat") ? (A.styleFloat === r ? "cssFloat" : "styleFloat") : (x ? z : z.camelize())] = y[z]
                    }
                }
            }
            return e
        },
        setStyleProperty: function (e, y) {
            var x = v;
            this.setStyle(e, y, x)
        },
        getOpacity: function (e) {
            return u(e).getStyle("opacity")
        },
        setOpacity: function (e, x) {
            e = u(e);
            e.style.opacity = (x == 1 || x === "") ? "" : (x < 0.00001) ? 0 : x;
            return e
        },
        applyCSSText: function (y, x) {
            var e = y.createElement("style");
            e.setAttribute("type", "text/css");
            if (e.styleSheet) {
                e.styleSheet.cssText = x
            } else {
                e.textContent = x
            }
            y.getElementsByTagName("head")[0].appendChild(e)
        }
    });
    (function () {
        if (u.msie) {
            u.getStyle = function (x, y) {
                x = u(x);
                y = (y == "float" || y == "cssFloat") ? "styleFloat" : y.camelize();
                var z = x.style[y];
                if (!z && x.currentStyle) {
                    z = x.currentStyle[y]
                }
                if (y == "opacity") {
                    if (z = (u.getStyle(x, "filter") || "").match(/alpha\(opacity=(.*)\)/)) {
                        if (z[1]) {
                            return parseFloat(z[1]) / 100
                        }
                    }
                    return 1
                }
                if (z == "auto") {
                    if ((y == "width" || y == "height") && (u.getStyle(x, "display") != "none")) {
                        return x["offset" + y.capitalize()] + "px"
                    }
                    return j
                }
                return z
            }
        }
        if (u.msie) {
            u.setOpacity = function (x, A) {
                x = u(x);
                var z = u.getStyle(x, "filter"),
                    y = x.style;
                if (A == 1 || A === "") {
                    y.filter = z.replace(/alpha\([^\)]*\)/gi, "");
                    return x
                } else {
                    if (A < 0.00001) {
                        A = 0
                    }
                }
                y.filter = z.replace(/alpha\([^\)]*\)/gi, "") + "alpha(opacity=" + (A * 100) + ")";
                return x
            }
        }
        if (u.gecko) {
            u.extend(u, {
                setOpacity: function (x, y) {
                    x = u(x);
                    x.style.opacity = (y == 1) ? 0.999999 : (y === "") ? "" : (y < 0.00001) ? 0 : y;
                    return x
                }
            })
        }
        u.JSONHelper = {
            encodeURIComponentReplacer: function (x, y) {
                if (typeof y === "string") {
                    if (!e(y)) {
                        return encodeURIComponent(y)
                    }
                }
                return y
            },
            decodeURIComponentReviver: function (x, y) {
                if (typeof y === "string") {
                    if (!e(y)) {
                        return decodeURIComponent(y)
                    } else {
                        return a.parse(y, arguments.callee)
                    }
                }
                return y
            }
        };
        var e = function (x) {
            return (x.charAt(0) == "[" && x.charAt(x.length - 1) == "]")
        }
    })();
    (function () {
        u.extend(u, {
            cumulativeOffset: function (x) {
                var e = 0,
                    y = 0;
                do {
                    e += x.offsetTop || 0;
                    y += x.offsetLeft || 0;
                    x = x.offsetParent
                } while (x);
                return [y, e]
            },
            positionedOffset: function (x) {
                var e = 0,
                    z = 0;
                do {
                    e += x.offsetTop || 0;
                    z += x.offsetLeft || 0;
                    x = x.offsetParent;
                    if (x) {
                        if (x.tagName == "BODY") {
                            break
                        }
                        var y = u.getStyle(x, "position");
                        if (y == "relative" || y == "absolute") {
                            break
                        }
                    }
                } while (x);
                return [z, e]
            },
            getDimensions: function (y) {
                var C = u.getStyle(y, "display");
                if (C != "none" && C != j) {
                    return {
                        width: y.offsetWidth,
                        height: y.offsetHeight
                    }
                }
                var x = y.style;
                var B = x.visibility;
                var z = x.position;
                var e = x.display;
                x.visibility = "hidden";
                x.position = "absolute";
                x.display = "block";
                var D = y.clientWidth;
                var A = y.clientHeight;
                x.display = e;
                x.position = z;
                x.visibility = B;
                return {
                    width: D,
                    height: A
                }
            },
            getCoords: function (D, z) {
                var y = z || false;
                var x = D.offsetWidth;
                var A = D.offsetHeight;
                var B = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                var C;
                while (D) {
                    B.left += D.offsetLeft || 0;
                    B.top += D.offsetTop || 0;
                    D = D.offsetParent;
                    if (y) {
                        if (D) {
                            if (D.tagName == "BODY") {
                                break
                            }
                            C = u.getStyle(D, "position");
                            if (C !== "static") {
                                break
                            }
                        }
                    }
                }
                B.right = B.left + x;
                B.bottom = B.top + A;
                return B
            },
            getCoordsTarget: function (e) {
                return this.getCoords(e, v)
            }
        });
        if (u.webkit) {
            u.cumulativeOffset = function (x) {
                var e = 0,
                    y = 0;
                do {
                    e += x.offsetTop || 0;
                    y += x.offsetLeft || 0;
                    if (x.offsetParent == c.body) {
                        if (u.getStyle(x, "position") == "absolute") {
                            break
                        }
                    }
                    x = x.offsetParent
                } while (x);
                return [y, e]
            }
        }
    })();
    (function () {
        u.extend(u, {
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
                return u(e.target || e.srcElement)
            },
            isLeftClick: function (e) {
                return (((e.which) && (e.which == 1)) || ((e.button) && (e.button == 1)))
            },
            pointerX: function (e) {
                return e.pageX || (e.clientX + (c.documentElement.scrollLeft || c.body.scrollLeft))
            },
            pointerY: function (e) {
                return e.pageY || (e.clientY + (c.documentElement.scrollTop || c.body.scrollTop))
            },
            stop: function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                    e.stopPropagation()
                } else {
                    e.returnValue = d;
                    e.cancelBubble = v
                }
            },
            findElement: function (y, x) {
                var e = u.element(y);
                while (e.parentNode && (!e.tagName || !e.tagName.toUpperCase || (e.tagName.toUpperCase() != x.toUpperCase()))) {
                    e = e.parentNode
                }
                return e
            },
            observers: d,
            _observeAndCache: function (z, y, x, e) {
                if (!this.observers) {
                    this.observers = []
                }
                if (z.addEventListener) {
                    this.observers.push([z, y, x, e]);
                    z.addEventListener(y, x, e)
                } else {
                    if (z.attachEvent) {
                        this.observers.push([z, y, x, e]);
                        z.attachEvent("on" + y, x)
                    }
                }
            },
            simulateEvent: function (B, x, A) {
                var C = u.observers;
                if (!C) {
                    return
                }
                for (var y = 0, z = C.length; y < z; y++) {
                    var e = C[y];
                    if (e && e[1] === x && e[0] === B) {
                        e[2](A)
                    }
                }
            },
            unloadCache: function () {
                if (!u.observers) {
                    return
                }
                for (var e = 0, x = u.observers.length; e < x; e++) {
                    u.stopObserving.apply(this, u.observers[e]);
                    u.observers[e][0] = j
                }
                u.observers = d
            },
            observe: function (z, y, x, e) {
                z = u(z);
                e = e || d;
                if (y == "keypress" && (u.webkit || z.attachEvent)) {
                    y = "keydown"
                }
                u._observeAndCache(z, y, x, e)
            },
            stopObserving: function (A, z, y, x) {
                A = u(A);
                x = x || d;
                if (z == "keypress" && (u.webkit || A.attachEvent)) {
                    z = "keydown"
                }
                if (A.removeEventListener) {
                    A.removeEventListener(z, y, x)
                } else {
                    if (A.detachEvent) {
                        try {
                            A.detachEvent("on" + z, y)
                        } catch (B) {}
                    }
                }
            }
        });
        if (u.msie) {
            u.observe(window, "unload", u.unloadCache, d)
        }
    })();
    (function () {
        u.extend(Object, {
            clone: function (e) {
                return Object.extend({}, e)
            }
        });
        u.extend(u, {
            isPrimitiveType: function (x) {
                var e = new u.Set("string", "number", "boolean", "date", "function");
                return e.contains(typeof x)
            },
            deepcopy: function (z, e) {
                var y = z;
                if (!e) {
                    return y
                }
                for (var x in e) {
                    switch (typeof (e[x])) {
                    case "string":
                    case "number":
                    case "boolean":
                    case "date":
                    case "function":
                        y[x] = e[x];
                        break;
                    default:
                        if (e[x]) {
                            if (e[x].constructor == Array) {
                                y[x] = [].concat(e[x])
                            } else {
                                y[x] = y[x] || {};
                                this.deepcopy(y[x], e[x])
                            }
                        } else {
                            y[x] = j
                        }
                        break
                    }
                }
                return y
            }
        })
    })();
    (function () {
        u.extend(String, {
            interpret: function (e) {
                return e == j ? "" : String(e)
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
        u.extend(String.prototype, {
            gsub: function (A, y) {
                var e = "",
                    z = this,
                    x;
                y = arguments.callee.prepareReplacement(y);
                while (z.length > 0) {
                    if (x = z.match(A)) {
                        e += z.slice(0, x.index);
                        e += String.interpret(y(x));
                        z = z.slice(x.index + x[0].length)
                    } else {
                        e += z, z = ""
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
            toQueryParams: function (z) {
                var e = this.strip().match(/([^?#]*)(#.*)?$/);
                if (!e) {
                    return {}
                }
                var y = {};
                var x = j;
                e[1].split(z || "&").each(function (D) {
                    var C = j,
                        A = j;
                    var B = D.match(/([\w_]+)=(.*)/);
                    if (B) {
                        x = C = decodeURIComponent(B[1]);
                        if (B[2]) {
                            A = decodeURIComponent(B[2])
                        }
                    } else {
                        if (x) {
                            C = x;
                            A = y[C];
                            A += "&" + decodeURIComponent(D)
                        } else {
                            return
                        }
                    } if (C in y) {
                        if (y[C].constructor != Array) {
                            y[C] = [y[C]]
                        }
                        y[C].push(A)
                    } else {
                        y[C] = A
                    }
                });
                return y
            },
            toArray: function () {
                return this.split("")
            },
            times: function (y) {
                var e = "";
                for (var x = 0; x < y; x++) {
                    e += this
                }
                return e
            },
            camelize: function () {
                var z = this.split("-"),
                    e = z.length;
                if (e == 1) {
                    return z[0]
                }
                var y = this.charAt(0) == "-" ? z[0].charAt(0).toUpperCase() + z[0].substring(1) : z[0];
                for (var x = 1; x < e; x++) {
                    y += z[x].charAt(0).toUpperCase() + z[x].substring(1)
                }
                return y
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
        String.prototype.gsub.prepareReplacement = function (x) {
            if (typeof x == "function") {
                return x
            }
            var e = new Template(x);
            return function (y) {
                return e.evaluate(y)
            }
        };
        u.extend(String.prototype, {
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
                var y = this;
                var e = 0;
                for (var x = 0; x < y.length; x++) {
                    e += (escape(y.charAt(x)).charAt(1) == "u") ? 2 : 1
                }
                return e
            },
            cutRealLength: function (y) {
                var z = this;
                var e = 0;
                for (var x = 0; x < z.length; x++) {
                    e += (escape(z.charAt(x)).charAt(1) == "u") ? 2 : 1;
                    if (e > y) {
                        return z.substring(0, x - 3).concat("...")
                    }
                }
                return z
            },
            getCut: function (e) {
                return this.cutRealLength(e)
            },
            parsePx: function () {
                if (this == j || this.length == 0) {
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
                var x = this;
                for (var e = 0; e < Math.floor((x.length - (1 + e)) / 3); e++) {
                    x = x.substring(0, x.length - (4 * e + 3)) + "," + x.substring(x.length - (4 * e + 3))
                }
                return x
            },
            replaceAll: function (e, x) {
                e = e.replace(new RegExp("(\\W)", "g"), "\\$1");
                x = x.replace(new RegExp("\\$", "g"), "$$$$");
                return this.replace(new RegExp(e, "gm"), x)
            }
        })
    })();
    (function () {
        u.extend(Number.prototype, {
            toPaddedString: function (y, x) {
                var e = this.toString(x || 10);
                return "0".times(y - e.length) + e
            },
            toTime: function () {
                return Math.floor(this / 60).toString().toPaddedString(2) + ":" + (this % 60).toString().toPaddedString(2)
            },
            toByteUnit: function () {
                var y;
                var e = ["GB", "MB", "KB"];
                if (this == 0) {
                    return "0" + e[2]
                }
                for (var x = 0; x < e.length; x++) {
                    y = this / Math.pow(1024, 3 - x);
                    if (y < 1) {
                        continue
                    }
                    return (Math.round(y * 10) / 10) + e[x]
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
                return v
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
        u.extend(Array.prototype, {
            each: function (y) {
                try {
                    for (var x = 0, z = this.length; x < z; x++) {
                        y(this[x])
                    }
                } catch (A) {
                    if (A != $break) {
                        throw A
                    }
                }
                return this
            },
            indexOf: function (x) {
                for (var e = 0; e < this.length; e++) {
                    if (this[e] == x) {
                        return e
                    }
                }
                return -1
            },
            map: function (y) {
                for (var e = [], x = 0, z = this.length; x < z; ++x) {
                    e[x] = y(this[x])
                }
                return e
            },
            include: function (e) {
                return this.contains(e)
            },
            contains: function (e) {
                return this.indexOf(e) >= 0
            },
            pluck: function (x) {
                var e = [];
                this.each(function (y) {
                    e.push(y[x])
                });
                return e
            },
            find: function (z) {
                for (var x = 0, e = this.length; x < e; x++) {
                    var y = this[x];
                    if (z(y, x)) {
                        return y
                    }
                }
                return j
            },
            findAll: function (A) {
                var y = [];
                for (var x = 0, e = this.length; x < e; x++) {
                    var z = this[x];
                    if (A(z, x)) {
                        y.push(z)
                    }
                }
                return y
            },
            inject: function (A, y) {
                for (var x = 0, e = this.length; x < e; x++) {
                    var z = this[x];
                    A = y(A, z, x)
                }
                return A
            },
            without: function () {
                var e = $A(arguments);
                return this.findAll(function (x) {
                    return !e.include(x)
                })
            },
            last: function () {
                return this[this.length - 1]
            },
            flatten: function () {
                return this.inject([], function (x, e) {
                    return x.concat(e && e.constructor == Array ? e.flatten() : [e])
                })
            },
            compact: function () {
                return this.findAll(function (e) {
                    return (e != j) && (e != "")
                })
            },
            uniq: function (e) {
                return this.inject([], function (z, y, x) {
                    if (0 == x || (e ? z.last() != y : !z.contains(y))) {
                        z.push(y)
                    }
                    return z
                })
            },
            toMap: function (x) {
                var e = {};
                this.each(function (y) {
                    e[y[x]] = y
                });
                return e
            }
        });
        Array.prototype.select = Array.prototype.findAll;
        Array.prototype.detect = Array.prototype.find;
        i.$A = function (y) {
            if (!y) {
                return []
            }
            if (typeof y.toArray === "function") {
                return y.toArray()
            } else {
                var z = [];
                for (var x = 0, e = y.length; x < e; x++) {
                    z.push(y[x])
                }
                return z
            }
        };
        u.Set = function () {
            var x = arguments;
            for (var y = 0, e = x.length; y < e; y++) {
                this[x[y]] = v
            }
        };
        u.Set.prototype.contains = function (e) {
            return e in this
        };
        u.objectToQueryString = function (y) {
            var z = [];
            for (var e in y) {
                if (y.hasOwnProperty(e)) {
                    var x = y[e];
                    if (x === j || x === r) {
                        x = ""
                    }
                    z.push(encodeURIComponent(e) + "=" + encodeURIComponent(x))
                }
            }
            return z.join("&")
        }
    })();
    (function () {
        if (typeof (HTMLElement) != r + "") {
            var y = HTMLElement.prototype;
            var x = y.__proto__ = {
                __proto__: y.__proto__
            };
            if (HTMLElement.prototype.__defineSetter__) {
                x.__defineSetter__("innerText", function (B) {
                    this.textContent = B
                })
            }
            if (HTMLElement.prototype.__defineGetter__) {
                x.__defineGetter__("innerText", function () {
                    return this.textContent
                })
            }
        }
        if (typeof (XMLDocument) != r + "") {
            var A = XMLDocument;
            if (A.prototype.__defineGetter__) {
                A.prototype.__defineGetter__("xml", function () {
                    return (new XMLSerializer()).serializeToString(this)
                })
            }
        }
        if (typeof (Node) != r + "") {
            if (Node.prototype && Node.prototype.__defineGetter__) {
                Node.prototype.__defineGetter__("xml", function () {
                    return (new XMLSerializer()).serializeToString(this)
                })
            }
        }
        if (typeof (c.implementation) != r + "") {
            if (c.implementation.hasFeature("XPath", "3.0")) {
                if (typeof (A) != r + "") {
                    A.prototype.selectNodes = function (D, F) {
                        if (!F) {
                            F = this
                        }
                        var E = this.defaultNS;
                        var B = this.evaluate(D, F, {
                            normalResolver: this.createNSResolver(this.documentElement),
                            lookupNamespaceURI: function (H) {
                                switch (H) {
                                case "dflt":
                                    return E;
                                default:
                                    return this.normalResolver.lookupNamespaceURI(H)
                                }
                            }
                        }, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, j);
                        var G = [];
                        for (var C = 0; C < B.snapshotLength; C++) {
                            G[C] = B.snapshotItem(C)
                        }
                        return G
                    };
                    A.prototype.setProperty = function (C, B) {
                        if (C == "SelectionNamespaces" && B.indexOf("xmlns:dflt") == 0) {
                            this.defaultNS = B.replace(/^.*=\'(.+)\'/, "$1")
                        }
                    };
                    A.prototype.defaultNS;
                    A.prototype.selectSingleNode = function (C, D) {
                        if (!D) {
                            D = this
                        }
                        var B = this.selectNodes(C, D);
                        if (B.length > 0) {
                            return B[0]
                        } else {
                            return j
                        }
                    };
                    A.prototype.createNode = function (B, D, C) {
                        if (B == 1) {
                            return this.createElementNS(C, D)
                        } else {
                            return j
                        }
                    }
                }
                if (typeof (Element) != r + "") {
                    Element.prototype.selectNodes = function (B) {
                        if (this.ownerDocument.selectNodes) {
                            return this.ownerDocument.selectNodes(B, this)
                        } else {
                            throw "For XML Elements Only"
                        }
                    };
                    Element.prototype.selectSingleNode = function (B) {
                        if (this.ownerDocument.selectSingleNode) {
                            return this.ownerDocument.selectSingleNode(B, this)
                        } else {
                            throw "For XML Elements Only"
                        }
                    };
                    Element.prototype.text;
                    var z = Element.prototype;
                    var e = z.__proto__ = {
                        __proto__: z.__proto__
                    };
                    if (Element.prototype.__defineSetter__) {
                        e.__defineSetter__("text", function (B) {
                            this.textContent = B
                        })
                    }
                    if (Element.prototype.__defineGetter__) {
                        e.__defineGetter__("text", function () {
                            return this.textContent
                        })
                    }
                    if (i.origElement) {
                        i.origElement.prototype.selectNodes = Element.prototype.selectNodes;
                        i.origElement.prototype.selectSingleNode = Element.prototype.selectSingleNode
                    }
                }
            }
        }
    })();
    i.$tx = u;
    var g = i.goog = i.goog || {};
    g.global = i;
    g.LOCALE = "en";
    g.provide = function (e) {
        g.exportPath_(e)
    };
    g.exportPath_ = function (y, e, B) {
        var z = y.split(".");
        var A = B || g.global;
        if (!(z[0] in A) && A.execScript) {
            A.execScript("var " + z[0])
        }
        for (var x; z.length && (x = z.shift());) {
            if (!z.length && g.isDef(e)) {
                A[x] = e
            } else {
                if (A[x]) {
                    A = A[x]
                } else {
                    A = A[x] = {}
                }
            }
        }
    };
    g.abstractMethod = function () {
        throw Error("unimplemented abstract method")
    };
    g.typeOf = function (y) {
        var x = typeof y;
        if (x == "object") {
            if (y) {
                if (y instanceof Array) {
                    return "array"
                } else {
                    if (y instanceof Object) {
                        return x
                    }
                }
                var e = Object.prototype.toString.call((y));
                if (e == "[object Window]") {
                    return "object"
                }
                if ((e == "[object Array]" || typeof y.length == "number" && isTypeOfUndefined(y.splice) != r + "" && typeof y.propertyIsEnumerable != r + "" && !y.propertyIsEnumerable("splice"))) {
                    return "array"
                }
                if ((e == "[object Function]" || typeof y.call != r + "" && typeof y.propertyIsEnumerable != r + "" && !y.propertyIsEnumerable("call"))) {
                    return "function"
                }
            } else {
                return j + ""
            }
        } else {
            if (x == "function" && typeof y.call == r + "") {
                return "object"
            }
        }
        return x
    };
    g.isDef = function (e) {
        return e !== r
    };
    g.isNull = function (e) {
        return e === j
    };
    g.isDefAndNotNull = function (e) {
        return e != j
    };
    g.isArray = function (e) {
        return g.typeOf(e) == "array"
    };
    g.isArrayLike = function (x) {
        var e = g.typeOf(x);
        return e == "array" || e == "object" && typeof x.length == "number"
    };
    g.isDateLike = function (e) {
        return g.isObject(e) && typeof e.getFullYear == "function"
    };
    g.isString = function (e) {
        return typeof e == "string"
    };
    g.isBoolean = function (e) {
        return typeof e == "boolean"
    };
    g.isNumber = function (e) {
        return typeof e == "number"
    };
    g.isFunction = function (e) {
        return g.typeOf(e) == "function"
    };
    g.isObject = function (x) {
        var e = g.typeOf(x);
        return e == "object" || e == "array" || e == "function"
    };
    g.getUid = function (e) {
        return e[g.UID_PROPERTY_] || (e[g.UID_PROPERTY_] = ++g.uidCounter_)
    };
    g.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
    g.uidCounter_ = 0;
    Object.prototype.clone;
    g.bindNative_ = function (e, y, x) {
        return (e.call.apply(e.bind, arguments))
    };
    g.bindJs_ = function (x, A, y) {
        var e = A || g.global;
        if (arguments.length > 2) {
            var z = Array.prototype.slice.call(arguments, 2);
            return function () {
                var B = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(B, z);
                return x.apply(e, B)
            }
        } else {
            return function () {
                return x.apply(e, arguments)
            }
        }
    };
    g.bind = function (e, y, x) {
        if (Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
            g.bind = g.bindNative_
        } else {
            g.bind = g.bindJs_
        }
        return g.bind.apply(j, arguments)
    };
    g.partial = function (x, y) {
        var e = Array.prototype.slice.call(arguments, 1);
        return function () {
            var z = Array.prototype.slice.call(arguments);
            z.unshift.apply(z, e);
            return x.apply(this, z)
        }
    };
    g.now = Date.now || (function () {
        return +new Date()
    });
    g.inherits = function (x, e) {
        function y() {}
        y.prototype = e.prototype;
        x.superClass_ = e.prototype;
        x.prototype = new y();
        x.prototype.constructor = x
    };
    g.base = function (A, e, C) {
        var y = arguments.callee.caller;
        if (y.superClass_) {
            return y.superClass_.constructor.apply(A, Array.prototype.slice.call(arguments, 1))
        }
        var x = Array.prototype.slice.call(arguments, 2);
        var B = d;
        for (var z = A.constructor; z; z = z.superClass_ && z.superClass_.constructor) {
            if (z.prototype[e] === y) {
                B = v
            } else {
                if (B) {
                    return z.prototype[e].apply(A, x)
                }
            }
        }
        if (A[e] === y) {
            return A.constructor.prototype[e].apply(A, x)
        } else {
            throw Error("goog.base called from a method of one name to a method of a different name")
        }
    };
    g.provide("goog.string");
    g.provide("goog.string.Unicode");
    g.string.Unicode = {
        NBSP: "\xa0"
    };
    g.string.startsWith = function (x, e) {
        return x.lastIndexOf(e, 0) == 0
    };
    g.string.isEmpty = function (e) {
        return /^[\s\xa0]*$/.test(e)
    };
    g.string.stripNewlines = function (e) {
        return e.replace(/ ?(\r\n|\r|\n)+/g, " ")
    };
    g.string.canonicalizeNewlines = function (e) {
        return e.replace(/(\r\n|\r|\n)/g, "\n")
    };
    g.string.trim = function (e) {
        return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    g.string.htmlEscape = function (x, e) {
        if (e) {
            return x.replace(g.string.amperRe_, "&amp;").replace(g.string.ltRe_, "&lt;").replace(g.string.gtRe_, "&gt;").replace(g.string.quotRe_, "&quot;")
        } else {
            if (!g.string.allRe_.test(x)) {
                return x
            }
            if (x.indexOf("&") != -1) {
                x = x.replace(g.string.amperRe_, "&amp;")
            }
            if (x.indexOf("<") != -1) {
                x = x.replace(g.string.ltRe_, "&lt;")
            }
            if (x.indexOf(">") != -1) {
                x = x.replace(g.string.gtRe_, "&gt;")
            }
            if (x.indexOf('"') != -1) {
                x = x.replace(g.string.quotRe_, "&quot;")
            }
            return x
        }
    };
    g.string.amperRe_ = /&/g;
    g.string.ltRe_ = /</g;
    g.string.gtRe_ = />/g;
    g.string.quotRe_ = /\"/g;
    g.string.allRe_ = /[&<>\"]/;
    g.string.contains = function (x, e) {
        return x.indexOf(e) != -1
    };
    g.string.buildString = function (e) {
        return Array.prototype.join.call(arguments, "")
    };
    g.string.compareVersions = function (x, K) {
        var y = 0;
        var F = g.string.trim(String(x)).split(".");
        var E = g.string.trim(String(K)).split(".");
        var B = Math.max(F.length, E.length);
        for (var C = 0; y == 0 && C < B; C++) {
            var e = F[C] || "";
            var J = E[C] || "";
            var G = new RegExp("(\\d*)(\\D*)", "g");
            var A = new RegExp("(\\d*)(\\D*)", "g");
            do {
                var I = G.exec(e) || ["", "", ""];
                var H = A.exec(J) || ["", "", ""];
                if (I[0].length == 0 && H[0].length == 0) {
                    break
                }
                var D = I[1].length == 0 ? 0 : parseInt(I[1], 10);
                var z = H[1].length == 0 ? 0 : parseInt(H[1], 10);
                y = g.string.compareElements_(D, z) || g.string.compareElements_(I[2].length == 0, H[2].length == 0) || g.string.compareElements_(I[2], H[2])
            } while (y == 0)
        }
        return y
    };
    g.string.compareElements_ = function (x, e) {
        if (x < e) {
            return -1
        } else {
            if (x > e) {
                return 1
            }
        }
        return 0
    };
    g.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
    g.string.createUniqueString = function () {
        return "goog_" + g.string.uniqueStringCounter_++
    };
    g.provide("goog.userAgent");
    g.userAgent.ASSUME_IE = d;
    g.userAgent.ASSUME_GECKO = d;
    g.userAgent.ASSUME_WEBKIT = d;
    g.userAgent.ASSUME_MOBILE_WEBKIT = d;
    g.userAgent.ASSUME_OPERA = d;
    g.userAgent.BROWSER_KNOWN_ = g.userAgent.ASSUME_IE || g.userAgent.ASSUME_GECKO || g.userAgent.ASSUME_MOBILE_WEBKIT || g.userAgent.ASSUME_WEBKIT || g.userAgent.ASSUME_OPERA;
    g.userAgent.getUserAgentString = function () {
        return g.global.navigator ? g.global.navigator.userAgent : j
    };
    g.userAgent.getNavigator = function () {
        return g.global.navigator
    };
    g.userAgent.init_ = function () {
        g.userAgent.detectedOpera_ = d;
        g.userAgent.detectedIe_ = d;
        g.userAgent.detectedWebkit_ = d;
        g.userAgent.detectedMobile_ = d;
        g.userAgent.detectedGecko_ = d;
        var x;
        if (!g.userAgent.BROWSER_KNOWN_ && (x = g.userAgent.getUserAgentString())) {
            var e = g.userAgent.getNavigator();
            g.userAgent.detectedOpera_ = x.indexOf("Opera") == 0;
            g.userAgent.detectedIe_ = !g.userAgent.detectedOpera_ && x.indexOf("MSIE") != -1;
            g.userAgent.detectedWebkit_ = !g.userAgent.detectedOpera_ && x.indexOf("WebKit") != -1;
            g.userAgent.detectedMobile_ = g.userAgent.detectedWebkit_ && x.indexOf("Mobile") != -1;
            g.userAgent.detectedGecko_ = !g.userAgent.detectedOpera_ && !g.userAgent.detectedWebkit_ && e.product == "Gecko"
        }
    };
    if (!g.userAgent.BROWSER_KNOWN_) {
        g.userAgent.init_()
    }
    g.userAgent.OPERA = g.userAgent.BROWSER_KNOWN_ ? g.userAgent.ASSUME_OPERA : g.userAgent.detectedOpera_;
    g.userAgent.IE = g.userAgent.BROWSER_KNOWN_ ? g.userAgent.ASSUME_IE : g.userAgent.detectedIe_;
    g.userAgent.GECKO = g.userAgent.BROWSER_KNOWN_ ? g.userAgent.ASSUME_GECKO : g.userAgent.detectedGecko_;
    g.userAgent.WEBKIT = g.userAgent.BROWSER_KNOWN_ ? g.userAgent.ASSUME_WEBKIT || g.userAgent.ASSUME_MOBILE_WEBKIT : g.userAgent.detectedWebkit_;
    g.userAgent.MOBILE = g.userAgent.ASSUME_MOBILE_WEBKIT || g.userAgent.detectedMobile_;
    g.userAgent.SAFARI = g.userAgent.WEBKIT;
    g.userAgent.determinePlatform_ = function () {
        var e = g.userAgent.getNavigator();
        return e && e.platform || ""
    };
    g.userAgent.PLATFORM = g.userAgent.determinePlatform_();
    g.userAgent.ASSUME_MAC = d;
    g.userAgent.ASSUME_WINDOWS = d;
    g.userAgent.ASSUME_LINUX = d;
    g.userAgent.ASSUME_X11 = d;
    g.userAgent.PLATFORM_KNOWN_ = g.userAgent.ASSUME_MAC || g.userAgent.ASSUME_WINDOWS || g.userAgent.ASSUME_LINUX || g.userAgent.ASSUME_X11;
    g.userAgent.initPlatform_ = function () {
        g.userAgent.detectedMac_ = g.string.contains(g.userAgent.PLATFORM, "Mac");
        g.userAgent.detectedWindows_ = g.string.contains(g.userAgent.PLATFORM, "Win");
        g.userAgent.detectedLinux_ = g.string.contains(g.userAgent.PLATFORM, "Linux");
        g.userAgent.detectedX11_ = !!g.userAgent.getNavigator() && g.string.contains(g.userAgent.getNavigator()["appVersion"] || "", "X11")
    };
    if (!g.userAgent.PLATFORM_KNOWN_) {
        g.userAgent.initPlatform_()
    }
    g.userAgent.MAC = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_MAC : g.userAgent.detectedMac_;
    g.userAgent.WINDOWS = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_WINDOWS : g.userAgent.detectedWindows_;
    g.userAgent.LINUX = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_LINUX : g.userAgent.detectedLinux_;
    g.userAgent.X11 = g.userAgent.PLATFORM_KNOWN_ ? g.userAgent.ASSUME_X11 : g.userAgent.detectedX11_;
    g.userAgent.determineVersion_ = function () {
        var x = "",
            A;
        if (g.userAgent.OPERA && g.global.opera) {
            var z = g.global.opera.version;
            x = typeof z == "function" ? z() : z
        } else {
            if (g.userAgent.GECKO) {
                A = /rv\:([^\);]+)(\)|;)/
            } else {
                if (g.userAgent.IE) {
                    A = /MSIE\s+([^\);]+)(\)|;)/
                } else {
                    if (g.userAgent.WEBKIT) {
                        A = /WebKit\/(\S+)/
                    }
                }
            } if (A) {
                var e = A.exec(g.userAgent.getUserAgentString());
                x = e ? e[1] : ""
            }
        } if (g.userAgent.IE) {
            var y = g.userAgent.getDocumentMode_();
            if (y > parseFloat(x)) {
                return String(y)
            }
        }
        return x
    };
    g.userAgent.getDocumentMode_ = function () {
        var e = g.global.document;
        return e ? e.documentMode : r
    };
    g.userAgent.VERSION = g.userAgent.determineVersion_();
    g.userAgent.isVersionCache_ = {};
    g.userAgent.isVersion = function (e) {
        return g.userAgent.isVersionCache_[e] || (g.userAgent.isVersionCache_[e] = g.string.compareVersions(g.userAgent.VERSION, e) >= 0)
    };
    g.userAgent.isDocumentModeCache_ = {};
    g.userAgent.isDocumentMode = function (e) {
        return g.userAgent.isDocumentModeCache_[e] || (g.userAgent.isDocumentModeCache_[e] = g.userAgent.IE && c.documentMode && c.documentMode >= e)
    };
    g.provide("goog.array");
    g.provide("goog.array.ArrayLike");
    g.NATIVE_ARRAY_PROTOTYPES = v;
    g.array.ArrayLike;
    g.array.peek = function (e) {
        return e[e.length - 1]
    };
    g.array.ARRAY_PROTOTYPE_ = Array.prototype;
    g.array.indexOf = g.NATIVE_ARRAY_PROTOTYPES && g.array.ARRAY_PROTOTYPE_.indexOf ? function (e, y, x) {
        return g.array.ARRAY_PROTOTYPE_.indexOf.call(e, y, x)
    } : function (e, A, x) {
        var z = x == j ? 0 : (x < 0 ? Math.max(0, e.length + x) : x);
        if (g.isString(e)) {
            if (!g.isString(A) || A.length != 1) {
                return -1
            }
            return e.indexOf(A, z)
        }
        for (var y = z; y < e.length; y++) {
            if (y in e && e[y] === A) {
                return y
            }
        }
        return -1
    };
    g.array.forEach = g.NATIVE_ARRAY_PROTOTYPES && g.array.ARRAY_PROTOTYPE_.forEach ? function (e, y, x) {
        g.array.ARRAY_PROTOTYPE_.forEach.call(e, y, x)
    } : function (e, B, A) {
        var x = e.length;
        var y = g.isString(e) ? e.split("") : e;
        for (var z = 0; z < x; z++) {
            if (z in y) {
                B.call(A, y[z], z, e)
            }
        }
    };
    g.array.forEachRight = function (e, B, A) {
        var x = e.length;
        var y = g.isString(e) ? e.split("") : e;
        for (var z = x - 1; z >= 0; --z) {
            if (z in y) {
                B.call(A, y[z], z, e)
            }
        }
    };
    g.array.filter = g.NATIVE_ARRAY_PROTOTYPES && g.array.ARRAY_PROTOTYPE_.filter ? function (e, y, x) {
        return g.array.ARRAY_PROTOTYPE_.filter.call(e, y, x)
    } : function (A, B, e) {
        var y = A.length;
        var C = [];
        var E = 0;
        var D = g.isString(A) ? A.split("") : A;
        for (var z = 0; z < y; z++) {
            if (z in D) {
                var x = D[z];
                if (B.call(e, x, z, A)) {
                    C[E++] = x
                }
            }
        }
        return C
    };
    g.array.map = g.NATIVE_ARRAY_PROTOTYPES && g.array.ARRAY_PROTOTYPE_.map ? function (e, y, x) {
        return g.array.ARRAY_PROTOTYPE_.map.call(e, y, x)
    } : function (e, C, B) {
        var x = e.length;
        var A = new Array(x);
        var y = g.isString(e) ? e.split("") : e;
        for (var z = 0; z < x; z++) {
            if (z in y) {
                A[z] = C.call(B, y[z], z, e)
            }
        }
        return A
    };
    g.array.some = g.NATIVE_ARRAY_PROTOTYPES && g.array.ARRAY_PROTOTYPE_.some ? function (e, y, x) {
        return g.array.ARRAY_PROTOTYPE_.some.call(e, y, x)
    } : function (e, B, A) {
        var x = e.length;
        var y = g.isString(e) ? e.split("") : e;
        for (var z = 0; z < x; z++) {
            if (z in y && B.call(A, y[z], z, e)) {
                return v
            }
        }
        return d
    };
    g.array.every = g.NATIVE_ARRAY_PROTOTYPES && g.array.ARRAY_PROTOTYPE_.every ? function (e, y, x) {
        return g.array.ARRAY_PROTOTYPE_.every.call(e, y, x)
    } : function (e, B, A) {
        var x = e.length;
        var y = g.isString(e) ? e.split("") : e;
        for (var z = 0; z < x; z++) {
            if (z in y && !B.call(A, y[z], z, e)) {
                return d
            }
        }
        return v
    };
    g.array.contains = function (e, x) {
        return g.array.indexOf(e, x) >= 0
    };
    g.array.isEmpty = function (e) {
        return e.length == 0
    };
    g.array.clear = function (e) {
        if (!g.isArray(e)) {
            for (var x = e.length - 1; x >= 0; x--) {
                delete e[x]
            }
        }
        e.length = 0
    };
    g.array.insertAt = function (e, y, x) {
        g.array.splice(e, x, 0, y)
    };
    g.array.remove = function (e, y) {
        var x = g.array.indexOf(e, y);
        var z;
        if ((z = x >= 0)) {
            g.array.removeAt(e, x)
        }
        return z
    };
    g.array.removeAt = function (e, x) {
        return g.array.ARRAY_PROTOTYPE_.splice.call(e, x, 1).length == 1
    };
    g.array.concat = function (e) {
        return g.array.ARRAY_PROTOTYPE_.concat.apply(g.array.ARRAY_PROTOTYPE_, arguments)
    };
    g.array.clone = function (x) {
        if (g.isArray(x)) {
            return g.array.concat((x))
        } else {
            var z = [];
            for (var y = 0, e = x.length; y < e; y++) {
                z[y] = x[y]
            }
            return z
        }
    };
    g.array.toArray = function (e) {
        if (g.isArray(e)) {
            return g.array.concat((e))
        }
        return g.array.clone((e))
    };
    g.array.splice = function (e, x, y, z) {
        return g.array.ARRAY_PROTOTYPE_.splice.apply(e, g.array.slice(arguments, 1))
    };
    g.array.slice = function (x, y, e) {
        if (arguments.length <= 2) {
            return g.array.ARRAY_PROTOTYPE_.slice.call(x, y)
        } else {
            return g.array.ARRAY_PROTOTYPE_.slice.call(x, y, e)
        }
    };
    g.array.sort = function (e, x) {
        g.array.ARRAY_PROTOTYPE_.sort.call(e, x || g.array.defaultCompare)
    };
    g.array.equals = function (y, x, B) {
        if (!g.isArrayLike(y) || !g.isArrayLike(x) || y.length != x.length) {
            return d
        }
        var e = y.length;
        var A = B || g.array.defaultCompareEquality;
        for (var z = 0; z < e; z++) {
            if (!A(y[z], x[z])) {
                return d
            }
        }
        return v
    };
    g.array.compare = function (x, e, y) {
        return g.array.equals(x, e, y)
    };
    g.array.defaultCompare = function (x, e) {
        return x > e ? 1 : x < e ? -1 : 0
    };
    g.array.defaultCompareEquality = function (x, e) {
        return x === e
    };
    g.array.repeat = function (x, z) {
        var y = [];
        for (var e = 0; e < z; e++) {
            y[e] = x
        }
        return y
    };
    g.provide("goog.dom.classes");
    g.dom.classes.get = function (e) {
        var x = e.className;
        return x && typeof x.split == "function" ? x.split(/\s+/) : []
    };
    g.dom.classes.add = function (z, A) {
        var y = g.dom.classes.get(z);
        var x = g.array.slice(arguments, 1);
        var e = g.dom.classes.add_(y, x);
        z.className = y.join(" ");
        return e
    };
    g.dom.classes.add_ = function (y, e) {
        var z = 0;
        for (var x = 0; x < e.length; x++) {
            if (!g.array.contains(y, e[x])) {
                y.push(e[x]);
                z++
            }
        }
        return z == e.length
    };
    g.provide("goog.object");
    g.object.forEach = function (z, y, x) {
        for (var e in z) {
            y.call(x, z[e], e, z)
        }
    };
    g.object.filter = function (A, z, y) {
        var x = {};
        for (var e in A) {
            if (z.call(y, A[e], e, A)) {
                x[e] = A[e]
            }
        }
        return x
    };
    g.object.map = function (A, z, y) {
        var x = {};
        for (var e in A) {
            x[e] = z.call(y, A[e], e, A)
        }
        return x
    };
    g.object.every = function (z, y, x) {
        for (var e in z) {
            if (!y.call(x, z[e], e, z)) {
                return d
            }
        }
        return v
    };
    g.object.getCount = function (x) {
        var y = 0;
        for (var e in x) {
            y++
        }
        return y
    };
    g.object.contains = function (e, x) {
        return g.object.containsValue(e, x)
    };
    g.object.getValues = function (z) {
        var y = [];
        var x = 0;
        for (var e in z) {
            y[x++] = z[e]
        }
        return y
    };
    g.object.getKeys = function (z) {
        var y = [];
        var x = 0;
        for (var e in z) {
            y[x++] = e
        }
        return y
    };
    g.object.containsValue = function (x, y) {
        for (var e in x) {
            if (x[e] == y) {
                return v
            }
        }
        return d
    };
    g.object.isEmpty = function (x) {
        for (var e in x) {
            return d
        }
        return v
    };
    g.object.clear = function (x) {
        for (var e in x) {
            delete x[e]
        }
    };
    g.object.remove = function (x, e) {
        var y;
        if ((y = e in x)) {
            delete x[e]
        }
        return y
    };
    g.object.add = function (x, e, y) {
        if (e in x) {
            throw Error('The object already contains the key "' + e + '"')
        }
        g.object.set(x, e, y)
    };
    g.object.get = function (y, e, x) {
        if (e in y) {
            return y[e]
        }
        return x
    };
    g.object.set = function (y, e, x) {
        y[e] = x
    };
    g.object.clone = function (y) {
        var x = {};
        for (var e in y) {
            x[e] = y[e]
        }
        return x
    };
    g.object.PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    g.object.extend = function (A, B) {
        var y, z;
        for (var x = 1; x < arguments.length; x++) {
            z = arguments[x];
            for (y in z) {
                A[y] = z[y]
            }
            for (var e = 0; e < g.object.PROTOTYPE_FIELDS_.length; e++) {
                y = g.object.PROTOTYPE_FIELDS_[e];
                if (Object.prototype.hasOwnProperty.call(z, y)) {
                    A[y] = z[y]
                }
            }
        }
    };
    g.object.create = function (x) {
        var z = arguments.length;
        if (z == 1 && g.isArray(arguments[0])) {
            return g.object.create.apply(j, arguments[0])
        }
        if (z % 2) {
            throw Error("Uneven number of arguments")
        }
        var y = {};
        for (var e = 0; e < z; e += 2) {
            y[arguments[e]] = arguments[e + 1]
        }
        return y
    };
    g.provide("goog.dom.TagName");
    g.dom.TagName = {
        A: "A",
        ABBR: "ABBR",
        ACRONYM: "ACRONYM",
        ADDRESS: "ADDRESS",
        APPLET: "APPLET",
        AREA: "AREA",
        B: "B",
        BASE: "BASE",
        BASEFONT: "BASEFONT",
        BDO: "BDO",
        BIG: "BIG",
        BLOCKQUOTE: "BLOCKQUOTE",
        BODY: "BODY",
        BR: "BR",
        BUTTON: "BUTTON",
        CANVAS: "CANVAS",
        CAPTION: "CAPTION",
        CENTER: "CENTER",
        CITE: "CITE",
        CODE: "CODE",
        COL: "COL",
        COLGROUP: "COLGROUP",
        DD: "DD",
        DEL: "DEL",
        DFN: "DFN",
        DIR: "DIR",
        DIV: "DIV",
        DL: "DL",
        DT: "DT",
        EM: "EM",
        FIELDSET: "FIELDSET",
        FONT: "FONT",
        FORM: "FORM",
        FRAME: "FRAME",
        FRAMESET: "FRAMESET",
        H1: "H1",
        H2: "H2",
        H3: "H3",
        H4: "H4",
        H5: "H5",
        H6: "H6",
        HEAD: "HEAD",
        HR: "HR",
        HTML: "HTML",
        I: "I",
        IFRAME: "IFRAME",
        IMG: "IMG",
        INPUT: "INPUT",
        INS: "INS",
        ISINDEX: "ISINDEX",
        KBD: "KBD",
        LABEL: "LABEL",
        LEGEND: "LEGEND",
        LI: "LI",
        LINK: "LINK",
        MAP: "MAP",
        MENU: "MENU",
        META: "META",
        NOFRAMES: "NOFRAMES",
        NOSCRIPT: "NOSCRIPT",
        OBJECT: "OBJECT",
        OL: "OL",
        OPTGROUP: "OPTGROUP",
        OPTION: "OPTION",
        P: "P",
        PARAM: "PARAM",
        PRE: "PRE",
        Q: "Q",
        S: "S",
        SAMP: "SAMP",
        SCRIPT: "SCRIPT",
        SELECT: "SELECT",
        SMALL: "SMALL",
        SPAN: "SPAN",
        STRIKE: "STRIKE",
        STRONG: "STRONG",
        STYLE: "STYLE",
        SUB: "SUB",
        SUP: "SUP",
        TABLE: "TABLE",
        TBODY: "TBODY",
        TD: "TD",
        TEXTAREA: "TEXTAREA",
        TFOOT: "TFOOT",
        TH: "TH",
        THEAD: "THEAD",
        TITLE: "TITLE",
        TR: "TR",
        TT: "TT",
        U: "U",
        UL: "UL",
        VAR: "VAR"
    };
    g.provide("goog.math.Size");
    g.math.Size = function (x, e) {
        this.width = x;
        this.height = e
    };
    g.math.Size.equals = function (x, e) {
        if (x == e) {
            return v
        }
        if (!x || !e) {
            return d
        }
        return x.width == e.width && x.height == e.height
    };
    g.math.Size.prototype.clone = function () {
        return new g.math.Size(this.width, this.height)
    };
    g.math.Size.prototype.area = function () {
        return this.width * this.height
    };
    g.math.Size.prototype.isEmpty = function () {
        return !this.area()
    };
    g.provide("goog.dom.BrowserFeature");
    g.dom.BrowserFeature = {
        CAN_ADD_NAME_OR_TYPE_ATTRIBUTES: !g.userAgent.IE || g.userAgent.isVersion("9"),
        CAN_USE_CHILDREN_ATTRIBUTE: !g.userAgent.GECKO && !g.userAgent.IE || g.userAgent.IE && g.userAgent.isVersion("9") || g.userAgent.GECKO && g.userAgent.isVersion("1.9.1"),
        CAN_USE_INNER_TEXT: g.userAgent.IE && !g.userAgent.isVersion("9"),
        INNER_HTML_NEEDS_SCOPED_ELEMENT: g.userAgent.IE
    };
    g.provide("goog.math.Coordinate");
    g.math.Coordinate = function (x, e) {
        this.x = g.isDef(x) ? x : 0;
        this.y = g.isDef(e) ? e : 0
    };
    g.math.Coordinate.prototype.clone = function () {
        return new g.math.Coordinate(this.x, this.y)
    };
    g.math.Coordinate.equals = function (x, e) {
        if (x == e) {
            return v
        }
        if (!x || !e) {
            return d
        }
        return x.x == e.x && x.y == e.y
    };
    g.provide("goog.dom");
    g.provide("goog.dom.DomHelper");
    g.provide("goog.dom.NodeType");
    g.dom.ASSUME_QUIRKS_MODE = d;
    g.dom.ASSUME_STANDARDS_MODE = d;
    g.dom.COMPAT_MODE_KNOWN_ = g.dom.ASSUME_QUIRKS_MODE || g.dom.ASSUME_STANDARDS_MODE;
    g.dom.NodeType = {
        ELEMENT: 1,
        ATTRIBUTE: 2,
        TEXT: 3,
        CDATA_SECTION: 4,
        ENTITY_REFERENCE: 5,
        ENTITY: 6,
        PROCESSING_INSTRUCTION: 7,
        COMMENT: 8,
        DOCUMENT: 9,
        DOCUMENT_TYPE: 10,
        DOCUMENT_FRAGMENT: 11,
        NOTATION: 12
    };
    g.dom.getDomHelper = function (e) {
        return e ? new g.dom.DomHelper(g.dom.getOwnerDocument(e)) : (g.dom.defaultDomHelper_ || (g.dom.defaultDomHelper_ = new g.dom.DomHelper()))
    };
    g.dom.defaultDomHelper_;
    g.dom.getDocument = function () {
        return document
    };
    g.dom.getElement = function (e) {
        return g.isString(e) ? c.getElementById(e) : e
    };
    g.dom.$ = g.dom.getElement;
    g.dom.getElementsByTagNameAndClass = function (y, e, x) {
        return g.dom.getElementsByTagNameAndClass_(document, y, e, x)
    };
    g.dom.getElementsByClass = function (y, x) {
        var e = x || document;
        if (g.dom.canUseQuerySelector_(e)) {
            return e.querySelectorAll("." + y)
        } else {
            if (e.getElementsByClassName) {
                return e.getElementsByClassName(y)
            }
        }
        return g.dom.getElementsByTagNameAndClass_(document, "*", y, x)
    };
    g.dom.getElementByClass = function (y, x) {
        var e = x || document;
        var z = j;
        if (g.dom.canUseQuerySelector_(e)) {
            z = e.querySelector("." + y)
        } else {
            z = g.dom.getElementsByClass(y, x)[0]
        }
        return z || j
    };
    g.dom.canUseQuerySelector_ = function (e) {
        return e.querySelectorAll && e.querySelector && (!g.userAgent.WEBKIT || g.dom.isCss1CompatMode_(document) || g.userAgent.isVersion("528"))
    };
    g.dom.getElementsByTagNameAndClass_ = function (F, E, y, H) {
        var G = H || F;
        var x = (E && E != "*") ? E.toUpperCase() : "";
        if (g.dom.canUseQuerySelector_(G) && (x || y)) {
            var D = x + (y ? "." + y : "");
            return G.querySelectorAll(D)
        }
        if (y && G.getElementsByClassName) {
            var z = G.getElementsByClassName(y);
            if (x) {
                var I = {};
                var B = 0;
                for (var A = 0, e; e = z[A]; A++) {
                    if (x == e.nodeName) {
                        I[B++] = e
                    }
                }
                I.length = B;
                return I
            } else {
                return z
            }
        }
        var z = G.getElementsByTagName(x || "*");
        if (y) {
            var I = {};
            var B = 0;
            for (var A = 0, e; e = z[A]; A++) {
                var C = e.className;
                if (typeof C.split == "function" && g.array.contains(C.split(/\s+/), y)) {
                    I[B++] = e
                }
            }
            I.length = B;
            return I
        } else {
            return z
        }
    };
    g.dom.$$ = g.dom.getElementsByTagNameAndClass;
    g.dom.setProperties = function (x, e) {
        g.object.forEach(e, function (z, y) {
            if (y == "style") {
                x.style.cssText = z
            } else {
                if (y == "class") {
                    x.className = z
                } else {
                    if (y == "for") {
                        x.htmlFor = z
                    } else {
                        if (y in g.dom.DIRECT_ATTRIBUTE_MAP_) {
                            x.setAttribute(g.dom.DIRECT_ATTRIBUTE_MAP_[y], z)
                        } else {
                            x[y] = z
                        }
                    }
                }
            }
        })
    };
    g.dom.DIRECT_ATTRIBUTE_MAP_ = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        height: "height",
        width: "width",
        usemap: "useMap",
        frameborder: "frameBorder",
        maxlength: "maxLength",
        type: "type"
    };
    g.dom.getViewportSize = function (e) {
        return g.dom.getViewportSize_(e || window)
    };
    g.dom.getViewportSize_ = function (A) {
        var z = A.document;
        if (g.userAgent.WEBKIT && !g.userAgent.isVersion("500") && !g.userAgent.MOBILE) {
            if (typeof A.innerHeight == r + "") {
                A = window
            }
            var y = A.innerHeight;
            var x = A.document.documentElement.scrollHeight;
            if (A == A.top) {
                if (x < y) {
                    y -= 15
                }
            }
            return new g.math.Size(A.innerWidth, y)
        }
        var e = g.dom.isCss1CompatMode_(z) ? z.documentElement : z.body;
        return new g.math.Size(e.clientWidth, e.clientHeight)
    };
    g.dom.getWindow = function (e) {
        return e ? g.dom.getWindow_(e) : window
    };
    g.dom.getWindow_ = function (e) {
        return e.parentWindow || e.defaultView
    };
    g.dom.createDom = function (x, e, y) {
        return g.dom.createDom_(document, arguments)
    };
    g.dom.createDom_ = function (A, x) {
        var z = x[0];
        var e = x[1];
        if (!g.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && e && (e.name || e.type)) {
            var C = ["<", z];
            if (e.name) {
                C.push(' name="', g.string.htmlEscape(e.name), '"')
            }
            if (e.type) {
                C.push(' type="', g.string.htmlEscape(e.type), '"');
                var B = {};
                g.object.extend(B, e);
                e = B;
                delete e.type
            }
            C.push(">");
            z = C.join("")
        }
        var y = A.createElement(z);
        if (e) {
            if (g.isString(e)) {
                y.className = e
            } else {
                if (g.isArray(e)) {
                    g.dom.classes.add.apply(j, [y].concat(e))
                } else {
                    g.dom.setProperties(y, e)
                }
            }
        }
        if (x.length > 2) {
            g.dom.append_(A, y, x, 2)
        }
        return y
    };
    g.dom.append_ = function (B, A, x, C) {
        function z(D) {
            if (D) {
                A.appendChild(g.isString(D) ? B.createTextNode(D) : D)
            }
        }
        for (var y = C; y < x.length; y++) {
            var e = x[y];
            if (g.isArrayLike(e) && !g.dom.isNodeLike(e)) {
                g.array.forEach(g.dom.isNodeList(e) ? g.array.clone(e) : e, z)
            } else {
                z(e)
            }
        }
    };
    g.dom.$dom = g.dom.createDom;
    g.dom.createElement = function (e) {
        return c.createElement(e)
    };
    g.dom.createTextNode = function (e) {
        return c.createTextNode(e)
    };
    g.dom.isCss1CompatMode_ = function (e) {
        if (g.dom.COMPAT_MODE_KNOWN_) {
            return g.dom.ASSUME_STANDARDS_MODE
        }
        return e.compatMode == "CSS1Compat"
    };
    g.dom.canHaveChildren_OLD = function (e) {
        if (e.nodeType != g.dom.NodeType.ELEMENT) {
            return d
        }
        switch (e.tagName) {
        case g.dom.TagName.APPLET:
        case g.dom.TagName.AREA:
        case g.dom.TagName.BASE:
        case g.dom.TagName.BR:
        case g.dom.TagName.COL:
        case g.dom.TagName.FRAME:
        case g.dom.TagName.HR:
        case g.dom.TagName.IMG:
        case g.dom.TagName.INPUT:
        case g.dom.TagName.IFRAME:
        case g.dom.TagName.ISINDEX:
        case g.dom.TagName.LINK:
        case g.dom.TagName.NOFRAMES:
        case g.dom.TagName.NOSCRIPT:
        case g.dom.TagName.META:
        case g.dom.TagName.OBJECT:
        case g.dom.TagName.PARAM:
        case g.dom.TagName.SCRIPT:
        case g.dom.TagName.STYLE:
            return d
        }
        return v
    };
    g.dom.TAGS_CANT_HAVE_CHILDREN = {
        APPLET: v,
        AREA: v,
        BASE: v,
        BR: v,
        COL: v,
        FRAME: v,
        HR: v,
        IMG: v,
        INPUT: v,
        IFRAME: v,
        ISINDEX: v,
        LINK: v,
        NOFRAMES: v,
        NOSCRIPT: v,
        META: v,
        OBJECT: v,
        PARAM: v,
        SCRIPT: v,
        STYLE: v
    };
    g.dom.canHaveChildren = function (e) {
        return e.nodeType == g.dom.NodeType.ELEMENT && !g.dom.TAGS_CANT_HAVE_CHILDREN[e.tagName]
    };
    g.dom.appendChild = function (e, x) {
        e.appendChild(x)
    };
    g.dom.append = function (e, x) {
        g.dom.append_(g.dom.getOwnerDocument(e), e, arguments, 1)
    };
    g.dom.removeChildren = function (e) {
        var x;
        while ((x = e.firstChild)) {
            e.removeChild(x)
        }
    };
    g.dom.insertSiblingBefore = function (x, e) {
        if (e.parentNode) {
            e.parentNode.insertBefore(x, e)
        }
    };
    g.dom.insertSiblingAfter = function (x, e) {
        if (e.parentNode) {
            e.parentNode.insertBefore(x, e.nextSibling)
        }
    };
    g.dom.removeNode = function (e) {
        return e && e.parentNode ? e.parentNode.removeChild(e) : j
    };
    g.dom.replaceNode = function (e, y) {
        var x = y.parentNode;
        if (x) {
            x.replaceChild(e, y)
        }
    };
    g.dom.flattenElement = function (e) {
        var y, x = e.parentNode;
        if (x && x.nodeType != g.dom.NodeType.DOCUMENT_FRAGMENT) {
            if (e.removeNode) {
                return (e.removeNode(d))
            } else {
                while ((y = e.firstChild)) {
                    x.insertBefore(y, e)
                }
                return (g.dom.removeNode(e))
            }
        }
    };
    g.dom.isNodeLike = function (e) {
        return g.isObject(e) && e.nodeType > 0
    };
    g.dom.contains = function (x, e) {
        if (x.contains && e.nodeType == g.dom.NodeType.ELEMENT) {
            return x == e || x.contains(e)
        }
        if (typeof x.compareDocumentPosition != r + "") {
            return x == e || Boolean(x.compareDocumentPosition(e) & 16)
        }
        while (e && x != e) {
            e = e.parentNode
        }
        return e == x
    };
    g.dom.compareNodeOrder = function (D, C) {
        if (D == C) {
            return 0
        }
        if (D.compareDocumentPosition) {
            return D.compareDocumentPosition(C) & 2 ? 1 : -1
        }
        if ("sourceIndex" in D || (D.parentNode && "sourceIndex" in D.parentNode)) {
            var y = D.nodeType == g.dom.NodeType.ELEMENT;
            var e = C.nodeType == g.dom.NodeType.ELEMENT;
            if (y && e) {
                return D.sourceIndex - C.sourceIndex
            } else {
                var z = D.parentNode;
                var x = C.parentNode;
                if (z == x) {
                    return g.dom.compareSiblingOrder_(D, C)
                }
                if (!y && g.dom.contains(z, C)) {
                    return -1 * g.dom.compareParentsDescendantNodeIe_(D, C)
                }
                if (!e && g.dom.contains(x, D)) {
                    return g.dom.compareParentsDescendantNodeIe_(C, D)
                }
                return (y ? D.sourceIndex : z.sourceIndex) - (e ? C.sourceIndex : x.sourceIndex)
            }
        }
        var A = g.dom.getOwnerDocument(D);
        var E, B;
        E = A.createRange();
        E.selectNode(D);
        E.collapse(v);
        B = A.createRange();
        B.selectNode(C);
        B.collapse(v);
        return E.compareBoundaryPoints(g.global.Range.START_TO_END, B)
    };
    g.dom.compareParentsDescendantNodeIe_ = function (z, y) {
        var x = z.parentNode;
        if (x == y) {
            return -1
        }
        var e = y;
        while (e.parentNode != x) {
            e = e.parentNode
        }
        return g.dom.compareSiblingOrder_(e, z)
    };
    g.dom.compareSiblingOrder_ = function (x, e) {
        var y = e;
        while ((y = y.previousSibling)) {
            if (y == x) {
                return -1
            }
        }
        return 1
    };
    g.dom.findCommonAncestor = function (D) {
        var A, C = arguments.length;
        if (!C) {
            return j
        } else {
            if (C == 1) {
                return arguments[0]
            }
        }
        var E = [];
        var e = Infinity;
        for (A = 0; A < C; A++) {
            var F = [];
            var y = arguments[A];
            while (y) {
                F.unshift(y);
                y = y.parentNode
            }
            E.push(F);
            e = Math.min(e, F.length)
        }
        var x = j;
        for (A = 0; A < e; A++) {
            var B = E[0][A];
            for (var z = 1; z < C; z++) {
                if (B != E[z][A]) {
                    return x
                }
            }
            x = B
        }
        return x
    };
    g.dom.getOwnerDocument = function (e) {
        return (e.nodeType == g.dom.NodeType.DOCUMENT ? e : e.ownerDocument || e.document)
    };
    g.dom.getOuterHtml = function (e) {
        if ("outerHTML" in e) {
            return e.outerHTML
        } else {
            var x = g.dom.getOwnerDocument(e);
            var y = x.createElement("div");
            y.appendChild(e.cloneNode(v));
            return y.innerHTML
        }
    };
    g.dom.TAGS_TO_IGNORE_ = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    g.dom.PREDEFINED_TAG_VALUES_ = {
        IMG: " ",
        BR: "\n"
    };
    g.dom.getTextContent = function (y) {
        var x;
        if (g.dom.BrowserFeature.CAN_USE_INNER_TEXT && ("innerText" in y)) {
            x = g.string.canonicalizeNewlines(y.innerText)
        } else {
            var e = [];
            g.dom.getTextContent_(y, e, v);
            x = e.join("")
        }
        x = x.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        x = x.replace(/\u200B/g, "");
        if (!g.userAgent.IE) {
            x = x.replace(/ +/g, " ")
        }
        if (x != " ") {
            x = x.replace(/^\s*/, "")
        }
        return x
    };
    g.dom.getRawTextContent = function (x) {
        var e = [];
        g.dom.getTextContent_(x, e, d);
        return e.join("")
    };
    g.dom.getTextContent_ = function (y, x, e) {
        if (y.nodeName in g.dom.TAGS_TO_IGNORE_) {} else {
            if (y.nodeType == g.dom.NodeType.TEXT) {
                if (e) {
                    x.push(String(y.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
                } else {
                    x.push(y.nodeValue)
                }
            } else {
                if (y.nodeName in g.dom.PREDEFINED_TAG_VALUES_) {
                    x.push(g.dom.PREDEFINED_TAG_VALUES_[y.nodeName])
                } else {
                    var z = y.firstChild;
                    while (z) {
                        g.dom.getTextContent_(z, x, e);
                        z = z.nextSibling
                    }
                }
            }
        }
    };
    g.dom.isNodeList = function (e) {
        if (e && typeof e.length == "number") {
            if (g.isObject(e)) {
                return typeof e.item == "function" || typeof e.item == "string"
            } else {
                if (g.isFunction(e)) {
                    return typeof e.item == "function"
                }
            }
        }
        return d
    };
    g.dom.DomHelper = function (e) {
        this.document_ = e || g.global.document || document
    };
    g.dom.DomHelper.prototype.getDomHelper = g.dom.getDomHelper;
    g.dom.DomHelper.prototype.setDocument = function (e) {
        this.document_ = e
    };
    g.dom.DomHelper.prototype.getDocument = function () {
        return this.document_
    };
    g.dom.DomHelper.prototype.getElement = function (e) {
        if (g.isString(e)) {
            return this.document_.getElementById(e)
        } else {
            return e
        }
    };
    g.dom.DomHelper.prototype.$ = g.dom.DomHelper.prototype.getElement;
    g.dom.DomHelper.prototype.getElementsByTagNameAndClass = function (y, e, x) {
        return g.dom.getElementsByTagNameAndClass_(this.document_, y, e, x)
    };
    g.dom.DomHelper.prototype.getElementsByClass = function (x, e) {
        var y = e || this.document_;
        return g.dom.getElementsByClass(x, y)
    };
    g.dom.DomHelper.prototype.getElementByClass = function (x, e) {
        var y = e || this.document_;
        return g.dom.getElementByClass(x, y)
    };
    g.dom.DomHelper.prototype.$$ = g.dom.DomHelper.prototype.getElementsByTagNameAndClass;
    g.dom.DomHelper.prototype.setProperties = g.dom.setProperties;
    g.dom.DomHelper.prototype.getViewportSize = function (e) {
        return g.dom.getViewportSize(e || this.getWindow())
    };
    g.dom.Appendable;
    g.dom.DomHelper.prototype.createDom = function (x, e, y) {
        return g.dom.createDom_(this.document_, arguments)
    };
    g.dom.DomHelper.prototype.$dom = g.dom.DomHelper.prototype.createDom;
    g.dom.DomHelper.prototype.createElement = function (e) {
        return this.document_.createElement(e)
    };
    g.dom.DomHelper.prototype.createTextNode = function (e) {
        return this.document_.createTextNode(e)
    };
    g.dom.DomHelper.prototype.getWindow = function () {
        return g.dom.getWindow_(this.document_)
    };
    g.dom.DomHelper.prototype.appendChild = g.dom.appendChild;
    g.dom.DomHelper.prototype.append = g.dom.append;
    g.dom.DomHelper.prototype.removeChildren = g.dom.removeChildren;
    g.dom.DomHelper.prototype.insertSiblingBefore = g.dom.insertSiblingBefore;
    g.dom.DomHelper.prototype.insertSiblingAfter = g.dom.insertSiblingAfter;
    g.dom.DomHelper.prototype.removeNode = g.dom.removeNode;
    g.dom.DomHelper.prototype.replaceNode = g.dom.replaceNode;
    g.dom.DomHelper.prototype.flattenElement = g.dom.flattenElement;
    g.dom.DomHelper.prototype.isNodeLike = g.dom.isNodeLike;
    g.dom.DomHelper.prototype.contains = g.dom.contains;
    g.dom.DomHelper.prototype.getOwnerDocument = g.dom.getOwnerDocument;
    g.dom.DomHelper.prototype.getTextContent = g.dom.getTextContent;
    g.provide("goog.iter");
    g.provide("goog.iter.Iterator");
    g.provide("goog.iter.StopIteration");
    g.iter.Iterable;
    if ("StopIteration" in g.global) {
        g.iter.StopIteration = g.global.StopIteration
    } else {
        g.iter.StopIteration = Error("StopIteration")
    }
    g.iter.Iterator = function () {};
    g.iter.Iterator.prototype.next = function () {
        throw g.iter.StopIteration
    };
    g.iter.Iterator.prototype.__iterator__ = function (e) {
        return this
    };
    g.iter.toIterator = function (x) {
        if (x instanceof g.iter.Iterator) {
            return x
        }
        if (typeof x.__iterator__ == "function") {
            return x.__iterator__(d)
        }
        if (g.isArrayLike(x)) {
            var e = 0;
            var y = new g.iter.Iterator;
            y.next = function () {
                while (v) {
                    if (e >= x.length) {
                        throw g.iter.StopIteration
                    }
                    if (!(e in x)) {
                        e++;
                        continue
                    }
                    return x[e++]
                }
            };
            return y
        }
        throw Error("Not implemented")
    };
    g.iter.forEach = function (z, y, x) {
        if (g.isArrayLike(z)) {
            try {
                g.array.forEach((z), y, x)
            } catch (e) {
                if (e !== g.iter.StopIteration) {
                    throw e
                }
            }
        } else {
            z = g.iter.toIterator(z);
            try {
                while (v) {
                    y.call(x, z.next(), r, z)
                }
            } catch (e) {
                if (e !== g.iter.StopIteration) {
                    throw e
                }
            }
        }
    };
    g.iter.filter = function (y, x, e) {
        y = g.iter.toIterator(y);
        var z = new g.iter.Iterator;
        z.next = function () {
            while (v) {
                var A = y.next();
                if (x.call(e, A, r, y)) {
                    return A
                }
            }
        };
        return z
    };
    g.iter.join = function (x, e) {
        return g.iter.toArray(x).join(e)
    };
    g.iter.map = function (y, x, e) {
        y = g.iter.toIterator(y);
        var z = new g.iter.Iterator;
        z.next = function () {
            while (v) {
                var A = y.next();
                return x.call(e, A, r, y)
            }
        };
        return z
    };
    g.iter.some = function (z, y, x) {
        z = g.iter.toIterator(z);
        try {
            while (v) {
                if (y.call(x, z.next(), r, z)) {
                    return v
                }
            }
        } catch (e) {
            if (e !== g.iter.StopIteration) {
                throw e
            }
        }
        return d
    };
    g.iter.every = function (z, y, x) {
        z = g.iter.toIterator(z);
        try {
            while (v) {
                if (!y.call(x, z.next(), r, z)) {
                    return d
                }
            }
        } catch (e) {
            if (e !== g.iter.StopIteration) {
                throw e
            }
        }
        return v
    };
    g.iter.toArray = function (e) {
        if (g.isArrayLike(e)) {
            return g.array.toArray((e))
        }
        e = g.iter.toIterator(e);
        var x = [];
        g.iter.forEach(e, function (y) {
            x.push(y)
        });
        return x
    };
    g.iter.equals = function (x, e) {
        x = g.iter.toIterator(x);
        e = g.iter.toIterator(e);
        var z, y;
        try {
            while (v) {
                z = y = d;
                var D = x.next();
                z = v;
                var C = e.next();
                y = v;
                if (D != C) {
                    return d
                }
            }
        } catch (A) {
            if (A !== g.iter.StopIteration) {
                throw A
            } else {
                if (z && !y) {
                    return d
                }
                if (!y) {
                    try {
                        C = e.next();
                        return d
                    } catch (B) {
                        if (B !== g.iter.StopIteration) {
                            throw B
                        }
                        return v
                    }
                }
            }
        }
        return d
    };
    g.provide("goog.dom.TagIterator");
    g.provide("goog.dom.TagWalkType");
    g.dom.TagWalkType = {
        START_TAG: 1,
        OTHER: 0,
        END_TAG: -1
    };
    g.dom.TagIterator = function (A, e, y, z, x) {
        this.reversed = !!e;
        if (A) {
            this.setPosition(A, z)
        }
        this.depth = x != r ? x : this.tagType || 0;
        if (this.reversed) {
            this.depth *= -1
        }
        this.constrained = !y
    };
    g.inherits(g.dom.TagIterator, g.iter.Iterator);
    g.dom.TagIterator.prototype.node = j;
    g.dom.TagIterator.prototype.tagType = g.dom.TagWalkType.OTHER;
    g.dom.TagIterator.prototype.depth;
    g.dom.TagIterator.prototype.reversed;
    g.dom.TagIterator.prototype.constrained;
    g.dom.TagIterator.prototype.started_ = d;
    g.dom.TagIterator.prototype.setPosition = function (x, y, e) {
        this.node = x;
        if (x) {
            if (g.isNumber(y)) {
                this.tagType = y
            } else {
                this.tagType = this.node.nodeType != g.dom.NodeType.ELEMENT ? g.dom.TagWalkType.OTHER : this.reversed ? g.dom.TagWalkType.END_TAG : g.dom.TagWalkType.START_TAG
            }
        }
        if (g.isNumber(e)) {
            this.depth = e
        }
    };
    g.dom.TagIterator.prototype.copyFrom = function (e) {
        this.node = e.node;
        this.tagType = e.tagType;
        this.depth = e.depth;
        this.reversed = e.reversed;
        this.constrained = e.constrained
    };
    g.dom.TagIterator.prototype.clone = function () {
        return new g.dom.TagIterator(this.node, this.reversed, !this.constrained, this.tagType, this.depth)
    };
    g.dom.TagIterator.prototype.skipTag = function () {
        var e = this.reversed ? g.dom.TagWalkType.END_TAG : g.dom.TagWalkType.START_TAG;
        if (this.tagType == e) {
            this.tagType = (e * -1);
            this.depth += this.tagType * (this.reversed ? -1 : 1)
        }
    };
    g.dom.TagIterator.prototype.restartTag = function () {
        var e = this.reversed ? g.dom.TagWalkType.START_TAG : g.dom.TagWalkType.END_TAG;
        if (this.tagType == e) {
            this.tagType = (e * -1);
            this.depth += this.tagType * (this.reversed ? -1 : 1)
        }
    };
    g.dom.TagIterator.prototype.next = function () {
        var y;
        if (this.started_) {
            if (!this.node || this.constrained && this.depth == 0) {
                throw g.iter.StopIteration
            }
            y = this.node;
            var e = this.reversed ? g.dom.TagWalkType.END_TAG : g.dom.TagWalkType.START_TAG;
            if (this.tagType == e) {
                var z = this.reversed ? y.lastChild : y.firstChild;
                if (z) {
                    this.setPosition(z)
                } else {
                    this.setPosition(y, (e * -1))
                }
            } else {
                var x = this.reversed ? y.previousSibling : y.nextSibling;
                if (x && y.parentNode == x.parentNode) {
                    this.setPosition(x)
                } else {
                    this.setPosition(y.parentNode, (e * -1))
                }
            }
            this.depth += this.tagType * (this.reversed ? -1 : 1)
        } else {
            this.started_ = v
        }
        y = this.node;
        if (!this.node) {
            throw g.iter.StopIteration
        }
        return y
    };
    g.dom.TagIterator.prototype.isStarted = function () {
        return this.started_
    };
    g.dom.TagIterator.prototype.isStartTag = function () {
        return this.tagType == g.dom.TagWalkType.START_TAG
    };
    g.dom.TagIterator.prototype.isEndTag = function () {
        return this.tagType == g.dom.TagWalkType.END_TAG
    };
    g.dom.TagIterator.prototype.equals = function (e) {
        return e.node == this.node && (!this.node || e.tagType == this.tagType)
    };
    g.dom.TagIterator.prototype.splice = function (z) {
        var y = this.node;
        this.restartTag();
        this.reversed = !this.reversed;
        g.dom.TagIterator.prototype.next.call(this);
        this.reversed = !this.reversed;
        var e = g.isArrayLike(arguments[0]) ? arguments[0] : arguments;
        for (var x = e.length - 1; x >= 0; x--) {
            g.dom.insertSiblingAfter(e[x], y)
        }
        g.dom.removeNode(y)
    };
    g.provide("goog.structs");
    g.structs.getCount = function (e) {
        if (typeof e.getCount == "function") {
            return e.getCount()
        }
        if (g.isArrayLike(e) || g.isString(e)) {
            return e.length
        }
        return g.object.getCount(e)
    };
    g.structs.getValues = function (x) {
        if (typeof x.getValues == "function") {
            return x.getValues()
        }
        if (g.isString(x)) {
            return x.split("")
        }
        if (g.isArrayLike(x)) {
            var z = [];
            var e = x.length;
            for (var y = 0; y < e; y++) {
                z.push(x[y])
            }
            return z
        }
        return g.object.getValues(x)
    };
    g.structs.getKeys = function (x) {
        if (typeof x.getKeys == "function") {
            return x.getKeys()
        }
        if (typeof x.getValues == "function") {
            return r
        }
        if (g.isArrayLike(x) || g.isString(x)) {
            var z = [];
            var e = x.length;
            for (var y = 0; y < e; y++) {
                z.push(y)
            }
            return z
        }
        return g.object.getKeys(x)
    };
    g.structs.contains = function (e, x) {
        if (typeof e.contains == "function") {
            return e.contains(x)
        }
        if (typeof e.containsValue == "function") {
            return e.containsValue(x)
        }
        if (g.isArrayLike(e) || g.isString(e)) {
            return g.array.contains((e), x)
        }
        return g.object.containsValue(e, x)
    };
    g.structs.isEmpty = function (e) {
        if (typeof e.isEmpty == "function") {
            return e.isEmpty()
        }
        if (g.isArrayLike(e) || g.isString(e)) {
            return g.array.isEmpty((e))
        }
        return g.object.isEmpty(e)
    };
    g.structs.clear = function (e) {
        if (typeof e.clear == "function") {
            e.clear()
        } else {
            if (g.isArrayLike(e)) {
                g.array.clear((e))
            } else {
                g.object.clear(e)
            }
        }
    };
    g.structs.forEach = function (y, C, B) {
        if (typeof y.forEach == "function") {
            y.forEach(C, B)
        } else {
            if (g.isArrayLike(y) || g.isString(y)) {
                g.array.forEach((y), C, B)
            } else {
                var A = g.structs.getKeys(y);
                var x = g.structs.getValues(y);
                var e = x.length;
                for (var z = 0; z < e; z++) {
                    C.call(B, x[z], A && A[z], y)
                }
            }
        }
    };
    g.structs.filter = function (y, C, B) {
        if (typeof y.filter == "function") {
            return y.filter(C, B)
        }
        if (g.isArrayLike(y) || g.isString(y)) {
            return g.array.filter((y), C, B)
        }
        var D;
        var A = g.structs.getKeys(y);
        var x = g.structs.getValues(y);
        var e = x.length;
        if (A) {
            D = {};
            for (var z = 0; z < e; z++) {
                if (C.call(B, x[z], A[z], y)) {
                    D[A[z]] = x[z]
                }
            }
        } else {
            D = [];
            for (var z = 0; z < e; z++) {
                if (C.call(B, x[z], r, y)) {
                    D.push(x[z])
                }
            }
        }
        return D
    };
    g.structs.map = function (y, C, B) {
        if (typeof y.map == "function") {
            return y.map(C, B)
        }
        if (g.isArrayLike(y) || g.isString(y)) {
            return g.array.map((y), C, B)
        }
        var D;
        var A = g.structs.getKeys(y);
        var x = g.structs.getValues(y);
        var e = x.length;
        if (A) {
            D = {};
            for (var z = 0; z < e; z++) {
                D[A[z]] = C.call(B, x[z], A[z], y)
            }
        } else {
            D = [];
            for (var z = 0; z < e; z++) {
                D[z] = C.call(B, x[z], r, y)
            }
        }
        return D
    };
    g.structs.some = function (y, C, B) {
        if (typeof y.some == "function") {
            return y.some(C, B)
        }
        if (g.isArrayLike(y) || g.isString(y)) {
            return g.array.some((y), C, B)
        }
        var A = g.structs.getKeys(y);
        var x = g.structs.getValues(y);
        var e = x.length;
        for (var z = 0; z < e; z++) {
            if (C.call(B, x[z], A && A[z], y)) {
                return v
            }
        }
        return d
    };
    g.structs.every = function (y, C, B) {
        if (typeof y.every == "function") {
            return y.every(C, B)
        }
        if (g.isArrayLike(y) || g.isString(y)) {
            return g.array.every((y), C, B)
        }
        var A = g.structs.getKeys(y);
        var x = g.structs.getValues(y);
        var e = x.length;
        for (var z = 0; z < e; z++) {
            if (!C.call(B, x[z], A && A[z], y)) {
                return d
            }
        }
        return v
    };
    g.provide("goog.structs.Map");
    g.structs.Map = function (x, y) {
        this.map_ = {};
        this.keys_ = [];
        var z = arguments.length;
        if (z > 1) {
            if (z % 2) {
                throw Error("Uneven number of arguments")
            }
            for (var e = 0; e < z; e += 2) {
                this.set(arguments[e], arguments[e + 1])
            }
        } else {
            if (x) {
                this.addAll((x))
            }
        }
    };
    g.structs.Map.prototype.count_ = 0;
    g.structs.Map.prototype.version_ = 0;
    g.structs.Map.prototype.getCount = function () {
        return this.count_
    };
    g.structs.Map.prototype.getValues = function () {
        this.cleanupKeysArray_();
        var y = [];
        for (var x = 0; x < this.keys_.length; x++) {
            var e = this.keys_[x];
            y.push(this.map_[e])
        }
        return y
    };
    g.structs.Map.prototype.getKeys = function () {
        this.cleanupKeysArray_();
        return (this.keys_.concat())
    };
    g.structs.Map.prototype.containsKey = function (e) {
        return g.structs.Map.hasKey_(this.map_, e)
    };
    g.structs.Map.prototype.containsValue = function (y) {
        for (var x = 0; x < this.keys_.length; x++) {
            var e = this.keys_[x];
            if (g.structs.Map.hasKey_(this.map_, e) && this.map_[e] == y) {
                return v
            }
        }
        return d
    };
    g.structs.Map.prototype.equals = function (y, e) {
        if (this === y) {
            return v
        }
        if (this.count_ != y.getCount()) {
            return d
        }
        var x = e || g.structs.Map.defaultEquals;
        this.cleanupKeysArray_();
        for (var A, z = 0; A = this.keys_[z]; z++) {
            if (!x(this.get(A), y.get(A))) {
                return d
            }
        }
        return v
    };
    g.structs.Map.defaultEquals = function (x, e) {
        return x === e
    };
    g.structs.Map.prototype.isEmpty = function () {
        return this.count_ == 0
    };
    g.structs.Map.prototype.clear = function () {
        this.map_ = {};
        this.keys_.length = 0;
        this.count_ = 0;
        this.version_ = 0
    };
    g.structs.Map.prototype.remove = function (e) {
        if (g.structs.Map.hasKey_(this.map_, e)) {
            delete this.map_[e];
            this.count_--;
            this.version_++;
            if (this.keys_.length > 2 * this.count_) {
                this.cleanupKeysArray_()
            }
            return v
        }
        return d
    };
    g.structs.Map.prototype.cleanupKeysArray_ = function () {
        if (this.count_ != this.keys_.length) {
            var y = 0;
            var x = 0;
            while (y < this.keys_.length) {
                var z = this.keys_[y];
                if (g.structs.Map.hasKey_(this.map_, z)) {
                    this.keys_[x++] = z
                }
                y++
            }
            this.keys_.length = x
        }
        if (this.count_ != this.keys_.length) {
            var e = {};
            var y = 0;
            var x = 0;
            while (y < this.keys_.length) {
                var z = this.keys_[y];
                if (!(g.structs.Map.hasKey_(e, z))) {
                    this.keys_[x++] = z;
                    e[z] = 1
                }
                y++
            }
            this.keys_.length = x
        }
    };
    g.structs.Map.prototype.get = function (e, x) {
        if (g.structs.Map.hasKey_(this.map_, e)) {
            return this.map_[e]
        }
        return x
    };
    g.structs.Map.prototype.set = function (e, x) {
        if (!(g.structs.Map.hasKey_(this.map_, e))) {
            this.count_++;
            this.keys_.push(e);
            this.version_++
        }
        this.map_[e] = x
    };
    g.structs.Map.prototype.addAll = function (z) {
        var y, e;
        if (z instanceof g.structs.Map) {
            y = z.getKeys();
            e = z.getValues()
        } else {
            y = g.object.getKeys(z);
            e = g.object.getValues(z)
        }
        for (var x = 0; x < y.length; x++) {
            this.set(y[x], e[x])
        }
    };
    g.structs.Map.prototype.clone = function () {
        return new g.structs.Map(this)
    };
    g.structs.Map.prototype.toObject = function () {
        this.cleanupKeysArray_();
        var y = {};
        for (var x = 0; x < this.keys_.length; x++) {
            var e = this.keys_[x];
            y[e] = this.map_[e]
        }
        return y
    };
    g.structs.Map.prototype.__iterator__ = function (C) {
        this.cleanupKeysArray_();
        var x = 0;
        var y = this.keys_;
        var z = this.map_;
        var e = this.version_;
        var B = this;
        var A = new g.iter.Iterator;
        A.next = function () {
            while (v) {
                if (e != B.version_) {
                    throw Error("The map has changed since the iterator was created")
                }
                if (x >= y.length) {
                    throw g.iter.StopIteration
                }
                var D = y[x++];
                return C ? D : z[D]
            }
        };
        return A
    };
    g.structs.Map.hasKey_ = function (x, e) {
        return Object.prototype.hasOwnProperty.call(x, e)
    };
    g.provide("goog.structs.Set");
    g.structs.Set = function (e) {
        this.map_ = new g.structs.Map;
        if (e) {
            this.addAll(e)
        }
    };
    g.structs.Set.getKey_ = function (x) {
        var e = typeof x;
        if (e == "object" && x || e == "function") {
            return "o" + g.getUid((x))
        } else {
            return e.substr(0, 1) + x
        }
    };
    g.structs.Set.prototype.getCount = function () {
        return this.map_.getCount()
    };
    g.structs.Set.prototype.add = function (e) {
        this.map_.set(g.structs.Set.getKey_(e), e)
    };
    g.structs.Set.prototype.addAll = function (y) {
        var x = g.structs.getValues(y);
        var e = x.length;
        for (var z = 0; z < e; z++) {
            this.add(x[z])
        }
    };
    g.structs.Set.prototype.remove = function (e) {
        return this.map_.remove(g.structs.Set.getKey_(e))
    };
    g.structs.Set.prototype.clear = function () {
        this.map_.clear()
    };
    g.structs.Set.prototype.isEmpty = function () {
        return this.map_.isEmpty()
    };
    g.structs.Set.prototype.contains = function (e) {
        return this.map_.containsKey(g.structs.Set.getKey_(e))
    };
    g.structs.Set.prototype.containsAll = function (e) {
        return g.structs.every(e, this.contains, this)
    };
    g.structs.Set.prototype.getValues = function () {
        return this.map_.getValues()
    };
    g.structs.Set.prototype.clone = function () {
        return new g.structs.Set(this)
    };
    g.structs.Set.prototype.equals = function (e) {
        return this.getCount() == g.structs.getCount(e) && this.isSubsetOf(e)
    };
    g.structs.Set.prototype.isSubsetOf = function (e) {
        var x = g.structs.getCount(e);
        if (this.getCount() > x) {
            return d
        }
        if (!(e instanceof g.structs.Set) && x > 5) {
            e = new g.structs.Set(e)
        }
        return g.structs.every(this, function (y) {
            return g.structs.contains(e, y)
        })
    };
    g.structs.Set.prototype.__iterator__ = function (e) {
        return this.map_.__iterator__(d)
    };
    g.provide("goog.disposable.IDisposable");
    g.disposable.IDisposable = function () {};
    g.disposable.IDisposable.prototype.dispose;
    g.disposable.IDisposable.prototype.isDisposed;
    g.provide("goog.Disposable");
    g.provide("goog.dispose");
    g.Disposable = function () {
        if (g.Disposable.ENABLE_MONITORING) {
            g.Disposable.instances_[g.getUid(this)] = this
        }
    };
    g.Disposable.ENABLE_MONITORING = d;
    g.Disposable.instances_ = {};
    g.Disposable.prototype.disposed_ = d;
    g.Disposable.prototype.isDisposed = function () {
        return this.disposed_
    };
    g.Disposable.prototype.getDisposed = g.Disposable.prototype.isDisposed;
    g.Disposable.prototype.dispose = function () {
        if (!this.disposed_) {
            this.disposed_ = v;
            this.disposeInternal();
            if (g.Disposable.ENABLE_MONITORING) {
                var e = g.getUid(this);
                if (!g.Disposable.instances_.hasOwnProperty(e)) {
                    throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call")
                }
                delete g.Disposable.instances_[e]
            }
        }
    };
    g.Disposable.prototype.disposeInternal = function () {};
    g.dispose = function (e) {
        if (e && typeof e.dispose == "function") {
            e.dispose()
        }
    };
    g.provide("goog.dom.SavedRange");
    g.dom.SavedRange = function () {
        g.Disposable.call(this)
    };
    g.inherits(g.dom.SavedRange, g.Disposable);
    g.dom.SavedRange.prototype.restore = function (x) {
        var e = this.restoreInternal();
        if (!x) {
            this.dispose()
        }
        return e
    };
    g.dom.SavedRange.prototype.restoreInternal = g.abstractMethod;
    g.provide("goog.dom.SavedCaretRange");
    g.dom.SavedCaretRange = function (e) {
        g.dom.SavedRange.call(this);
        this.startCaretId_ = g.string.createUniqueString();
        this.endCaretId_ = g.string.createUniqueString();
        this.dom_ = g.dom.getDomHelper(e.getDocument());
        e.surroundWithNodes(this.createCaret_(v), this.createCaret_(d));
        this.removeIncidentalTextNode_()
    };
    g.inherits(g.dom.SavedCaretRange, g.dom.SavedRange);
    g.dom.SavedCaretRange.prototype.getCaret = function (e) {
        return this.dom_.getElement(e ? this.startCaretId_ : this.endCaretId_)
    };
    g.dom.SavedCaretRange.prototype.removeIncidentalTextNode_ = function () {
        var x = this.getCaret(v);
        this.removeIfEmptyText_(x.previousSibling);
        this.removeIfEmptyText_(x.nextSibling);
        var e = this.getCaret(d);
        this.removeIfEmptyText_(e.previousSibling);
        this.removeIfEmptyText_(e.nextSibling)
    };
    g.dom.SavedCaretRange.prototype.removeIfEmptyText_ = function (e) {
        if (e && e.nodeType === g.dom.NodeType.TEXT && !e.nodeValue) {
            g.dom.removeNode(e)
        }
    };
    g.dom.SavedCaretRange.prototype.removeCarets = function (e) {
        g.dom.removeNode(this.getCaret(v));
        g.dom.removeNode(this.getCaret(d));
        return e
    };
    g.dom.SavedCaretRange.prototype.restoreInternal = function () {
        var z = j;
        var C = this.getCaret(v);
        var y = this.getCaret(d);
        if (C && y) {
            var B = C.parentNode;
            var x = g.array.indexOf(B.childNodes, C);
            var e = y.parentNode;
            var A = g.array.indexOf(e.childNodes, y);
            z = g.dom.Range.createFromNodes(B, x + 1, e, A);
            z.select()
        }
        return z
    };
    g.dom.SavedCaretRange.prototype.disposeInternal = function () {
        this.removeCarets();
        this.dom_ = j
    };
    g.dom.SavedCaretRange.prototype.createCaret_ = function (e) {
        return this.dom_.createDom(g.dom.TagName.SPAN, {
            id: e ? this.startCaretId_ : this.endCaretId_
        })
    };
    g.dom.SavedCaretRange.CARET_REGEX = /<span\s+id="?goog_\d+"?><\/span>/ig;
    g.provide("goog.dom.AbstractRange");
    g.provide("goog.dom.RangeIterator");
    g.provide("goog.dom.RangeType");
    g.dom.RangeType = {
        TEXT: "text",
        CONTROL: "control",
        MULTI: "mutli"
    };
    g.dom.AbstractRange = function () {};
    g.dom.AbstractRange.getBrowserSelectionForWindow = function (B) {
        if (B.getSelection) {
            return B.getSelection()
        } else {
            var A = B.document;
            var y = A.selection;
            if (y) {
                try {
                    var x = y.createRange();
                    if (x.parentElement) {
                        if (x.parentElement().document != A) {
                            return j
                        }
                    } else {
                        if (!x.length || x.item(0).document != A) {
                            return j
                        }
                    }
                } catch (z) {
                    return j
                }
                return y
            }
            return j
        }
    };
    g.dom.AbstractRange.isNativeControlRange = function (e) {
        return !!e && !!e.addElement
    };
    g.dom.AbstractRange.prototype.clone = g.abstractMethod;
    g.dom.AbstractRange.prototype.getType = g.abstractMethod;
    g.dom.AbstractRange.prototype.getBrowserRangeObject = g.abstractMethod;
    g.dom.AbstractRange.prototype.setBrowserRangeObject = function (e) {
        return d
    };
    g.dom.AbstractRange.prototype.getTextRangeCount = g.abstractMethod;
    g.dom.AbstractRange.prototype.getTextRange = g.abstractMethod;
    g.dom.AbstractRange.prototype.getTextRanges = function () {
        var x = [];
        for (var y = 0, e = this.getTextRangeCount(); y < e; y++) {
            x.push(this.getTextRange(y))
        }
        return x
    };
    g.dom.AbstractRange.prototype.getContainer = g.abstractMethod;
    g.dom.AbstractRange.prototype.getStartNode = g.abstractMethod;
    g.dom.AbstractRange.prototype.getStartOffset = g.abstractMethod;
    g.dom.AbstractRange.prototype.getEndNode = g.abstractMethod;
    g.dom.AbstractRange.prototype.getEndOffset = g.abstractMethod;
    g.dom.AbstractRange.prototype.getAnchorNode = function () {
        return this.isReversed() ? this.getEndNode() : this.getStartNode()
    };
    g.dom.AbstractRange.prototype.getAnchorOffset = function () {
        return this.isReversed() ? this.getEndOffset() : this.getStartOffset()
    };
    g.dom.AbstractRange.prototype.getFocusNode = function () {
        return this.isReversed() ? this.getStartNode() : this.getEndNode()
    };
    g.dom.AbstractRange.prototype.getFocusOffset = function () {
        return this.isReversed() ? this.getStartOffset() : this.getEndOffset()
    };
    g.dom.AbstractRange.prototype.isReversed = function () {
        return d
    };
    g.dom.AbstractRange.prototype.getDocument = function () {
        return g.dom.getOwnerDocument(g.userAgent.IE ? this.getContainer() : this.getStartNode())
    };
    g.dom.AbstractRange.prototype.getWindow = function () {
        return g.dom.getWindow(this.getDocument())
    };
    g.dom.AbstractRange.prototype.containsRange = g.abstractMethod;
    g.dom.AbstractRange.prototype.containsNode = function (e, x) {
        return this.containsRange(g.dom.Range.createFromNodeContents(e), x)
    };
    g.dom.AbstractRange.prototype.isRangeInDocument = g.abstractMethod;
    g.dom.AbstractRange.prototype.isCollapsed = g.abstractMethod;
    g.dom.AbstractRange.prototype.getText = g.abstractMethod;
    g.dom.AbstractRange.prototype.getHtmlFragment = g.abstractMethod;
    g.dom.AbstractRange.prototype.getValidHtml = g.abstractMethod;
    g.dom.AbstractRange.prototype.getPastableHtml = g.abstractMethod;
    g.dom.AbstractRange.prototype.__iterator__ = g.abstractMethod;
    g.dom.AbstractRange.prototype.select = g.abstractMethod;
    g.dom.AbstractRange.prototype.removeContents = g.abstractMethod;
    g.dom.AbstractRange.prototype.insertNode = g.abstractMethod;
    g.dom.AbstractRange.prototype.surroundWithNodes = g.abstractMethod;
    g.dom.AbstractRange.prototype.saveUsingDom = g.abstractMethod;
    g.dom.AbstractRange.prototype.saveUsingCarets = function () {
        return (this.getStartNode() && this.getEndNode()) ? new g.dom.SavedCaretRange(this) : j
    };
    g.dom.AbstractRange.prototype.collapse = g.abstractMethod;
    g.dom.RangeIterator = function (e, x) {
        g.dom.TagIterator.call(this, e, x, v)
    };
    g.inherits(g.dom.RangeIterator, g.dom.TagIterator);
    g.dom.RangeIterator.prototype.getStartTextOffset = g.abstractMethod;
    g.dom.RangeIterator.prototype.getEndTextOffset = g.abstractMethod;
    g.dom.RangeIterator.prototype.getStartNode = g.abstractMethod;
    g.dom.RangeIterator.prototype.getEndNode = g.abstractMethod;
    g.dom.RangeIterator.prototype.isLast = g.abstractMethod;
    g.provide("goog.dom.AbstractMultiRange");
    g.dom.AbstractMultiRange = function () {};
    g.inherits(g.dom.AbstractMultiRange, g.dom.AbstractRange);
    g.dom.AbstractMultiRange.prototype.containsRange = function (A, z) {
        var e = this.getTextRanges();
        var y = A.getTextRanges();
        var x = z ? g.array.some : g.array.every;
        return x(y, function (B) {
            return g.array.some(e, function (C) {
                return C.containsRange(B, z)
            })
        })
    };
    g.dom.AbstractMultiRange.prototype.insertNode = function (e, x) {
        if (x) {
            g.dom.insertSiblingBefore(e, this.getStartNode())
        } else {
            g.dom.insertSiblingAfter(e, this.getEndNode())
        }
        return e
    };
    g.dom.AbstractMultiRange.prototype.surroundWithNodes = function (x, e) {
        this.insertNode(x, v);
        this.insertNode(e, d)
    };
    g.provide("goog.dom.TextRangeIterator");
    g.dom.TextRangeIterator = function (y, C, z, D, B) {
        var E;
        if (y) {
            this.startNode_ = y;
            this.startOffset_ = C;
            this.endNode_ = z;
            this.endOffset_ = D;
            if (y.nodeType == g.dom.NodeType.ELEMENT && y.tagName != g.dom.TagName.BR) {
                var x = y.childNodes;
                var F = x[C];
                if (F) {
                    this.startNode_ = F;
                    this.startOffset_ = 0
                } else {
                    if (x.length) {
                        this.startNode_ = (g.array.peek(x))
                    }
                    E = v
                }
            }
            if (z.nodeType == g.dom.NodeType.ELEMENT) {
                this.endNode_ = z.childNodes[D];
                if (this.endNode_) {
                    this.endOffset_ = 0
                } else {
                    this.endNode_ = z
                }
            }
        }
        g.dom.RangeIterator.call(this, B ? this.endNode_ : this.startNode_, B);
        if (E) {
            try {
                this.next()
            } catch (A) {
                if (A != g.iter.StopIteration) {
                    throw A
                }
            }
        }
    };
    g.inherits(g.dom.TextRangeIterator, g.dom.RangeIterator);
    g.dom.TextRangeIterator.prototype.startNode_ = j;
    g.dom.TextRangeIterator.prototype.endNode_ = j;
    g.dom.TextRangeIterator.prototype.startOffset_ = 0;
    g.dom.TextRangeIterator.prototype.endOffset_ = 0;
    g.dom.TextRangeIterator.prototype.getStartTextOffset = function () {
        return this.node.nodeType != g.dom.NodeType.TEXT ? -1 : this.node == this.startNode_ ? this.startOffset_ : 0
    };
    g.dom.TextRangeIterator.prototype.getEndTextOffset = function () {
        return this.node.nodeType != g.dom.NodeType.TEXT ? -1 : this.node == this.endNode_ ? this.endOffset_ : this.node.nodeValue.length
    };
    g.dom.TextRangeIterator.prototype.getStartNode = function () {
        return this.startNode_
    };
    g.dom.TextRangeIterator.prototype.setStartNode = function (e) {
        if (!this.isStarted()) {
            this.setPosition(e)
        }
        this.startNode_ = e;
        this.startOffset_ = 0
    };
    g.dom.TextRangeIterator.prototype.getEndNode = function () {
        return this.endNode_
    };
    g.dom.TextRangeIterator.prototype.setEndNode = function (e) {
        this.endNode_ = e;
        this.endOffset_ = 0
    };
    g.dom.TextRangeIterator.prototype.isLast = function () {
        return this.isStarted() && this.node == this.endNode_ && (!this.endOffset_ || !this.isStartTag())
    };
    g.dom.TextRangeIterator.prototype.next = function () {
        if (this.isLast()) {
            throw g.iter.StopIteration
        }
        return g.dom.TextRangeIterator.superClass_.next.call(this)
    };
    g.dom.TextRangeIterator.prototype.skipTag = function () {
        g.dom.TextRangeIterator.superClass_.skipTag.apply(this);
        if (g.dom.contains(this.node, this.endNode_)) {
            throw g.iter.StopIteration
        }
    };
    g.dom.TextRangeIterator.prototype.copyFrom = function (e) {
        this.startNode_ = e.startNode_;
        this.endNode_ = e.endNode_;
        this.startOffset_ = e.startOffset_;
        this.endOffset_ = e.endOffset_;
        this.isReversed_ = e.isReversed_;
        g.dom.TextRangeIterator.superClass_.copyFrom.call(this, e)
    };
    g.dom.TextRangeIterator.prototype.clone = function () {
        var e = new g.dom.TextRangeIterator(this.startNode_, this.startOffset_, this.endNode_, this.endOffset_, this.isReversed_);
        e.copyFrom(this);
        return e
    };
    g.provide("goog.userAgent.jscript");
    g.userAgent.jscript.ASSUME_NO_JSCRIPT = d;
    g.userAgent.jscript.init_ = function () {
        var e = "ScriptEngine" in g.global;
        g.userAgent.jscript.DETECTED_HAS_JSCRIPT_ = e && g.global.ScriptEngine() == "JScript";
        g.userAgent.jscript.DETECTED_VERSION_ = g.userAgent.jscript.DETECTED_HAS_JSCRIPT_ ? (g.global.ScriptEngineMajorVersion() + "." + g.global.ScriptEngineMinorVersion() + "." + g.global.ScriptEngineBuildVersion()) : "0"
    };
    if (!g.userAgent.jscript.ASSUME_NO_JSCRIPT) {
        g.userAgent.jscript.init_()
    }
    g.userAgent.jscript.HAS_JSCRIPT = g.userAgent.jscript.ASSUME_NO_JSCRIPT ? d : g.userAgent.jscript.DETECTED_HAS_JSCRIPT_;
    g.userAgent.jscript.VERSION = g.userAgent.jscript.ASSUME_NO_JSCRIPT ? "0" : g.userAgent.jscript.DETECTED_VERSION_;
    g.userAgent.jscript.isVersion = function (e) {
        return g.string.compareVersions(g.userAgent.jscript.VERSION, e) >= 0
    };
    g.provide("goog.string.StringBuffer");
    g.string.StringBuffer = function (e, x) {
        this.buffer_ = g.userAgent.jscript.HAS_JSCRIPT ? [] : "";
        if (e != j) {
            this.append.apply(this, arguments)
        }
    };
    g.string.StringBuffer.prototype.set = function (e) {
        this.clear();
        this.append(e)
    };
    if (g.userAgent.jscript.HAS_JSCRIPT) {
        g.string.StringBuffer.prototype.bufferLength_ = 0;
        g.string.StringBuffer.prototype.append = function (x, e, y) {
            if (e == j) {
                this.buffer_[this.bufferLength_++] = x
            } else {
                this.buffer_.push.apply((this.buffer_), arguments);
                this.bufferLength_ = this.buffer_.length
            }
            return this
        }
    } else {
        g.string.StringBuffer.prototype.append = function (x, e, z) {
            this.buffer_ += x;
            if (e != j) {
                for (var y = 1; y < arguments.length; y++) {
                    this.buffer_ += arguments[y]
                }
            }
            return this
        }
    }
    g.string.StringBuffer.prototype.clear = function () {
        if (g.userAgent.jscript.HAS_JSCRIPT) {
            this.buffer_.length = 0;
            this.bufferLength_ = 0
        } else {
            this.buffer_ = ""
        }
    };
    g.string.StringBuffer.prototype.getLength = function () {
        return this.toString().length
    };
    g.string.StringBuffer.prototype.toString = function () {
        if (g.userAgent.jscript.HAS_JSCRIPT) {
            var e = this.buffer_.join("");
            this.clear();
            if (e) {
                this.append(e)
            }
            return e
        } else {
            return (this.buffer_)
        }
    };
    g.provide("goog.dom.RangeEndpoint");
    g.dom.RangeEndpoint = {
        START: 1,
        END: 0
    };
    g.provide("goog.dom.browserrange.AbstractRange");
    g.dom.browserrange.AbstractRange = function () {};
    g.dom.browserrange.AbstractRange.prototype.clone = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.getBrowserRange = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.getContainer = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.getStartNode = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.getStartOffset = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.getEndNode = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.getEndOffset = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.compareBrowserRangeEndpoints = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.containsRange = function (D, B) {
        var z = B && !D.isCollapsed();
        var y = D.getBrowserRange();
        var C = g.dom.RangeEndpoint.START,
            x = g.dom.RangeEndpoint.END;
        try {
            if (z) {
                return this.compareBrowserRangeEndpoints(y, x, C) >= 0 && this.compareBrowserRangeEndpoints(y, C, x) <= 0
            } else {
                return this.compareBrowserRangeEndpoints(y, x, x) >= 0 && this.compareBrowserRangeEndpoints(y, C, C) <= 0
            }
        } catch (A) {
            if (!g.userAgent.IE) {
                throw A
            }
            return d
        }
    };
    g.dom.browserrange.AbstractRange.prototype.containsNode = function (e, x) {
        return this.containsRange(g.dom.browserrange.createRangeFromNodeContents(e), x)
    };
    g.dom.browserrange.AbstractRange.prototype.isCollapsed = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.getText = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.getHtmlFragment = function () {
        var e = new g.string.StringBuffer();
        g.iter.forEach(this, function (A, C, z) {
            if (A.nodeType == g.dom.NodeType.TEXT) {
                e.append(g.string.htmlEscape(A.nodeValue.substring(z.getStartTextOffset(), z.getEndTextOffset())))
            } else {
                if (A.nodeType == g.dom.NodeType.ELEMENT) {
                    if (z.isEndTag()) {
                        if (g.dom.canHaveChildren(A)) {
                            e.append("</" + A.tagName + ">")
                        }
                    } else {
                        var B = A.cloneNode(d);
                        var y = g.dom.getOuterHtml(B);
                        if (g.userAgent.IE && A.tagName == g.dom.TagName.LI) {
                            e.append(y)
                        } else {
                            var x = y.lastIndexOf("<");
                            e.append(x ? y.substr(0, x) : y)
                        }
                    }
                }
            }
        }, this);
        return e.toString()
    };
    g.dom.browserrange.AbstractRange.prototype.getValidHtml = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.__iterator__ = function (e) {
        return new g.dom.TextRangeIterator(this.getStartNode(), this.getStartOffset(), this.getEndNode(), this.getEndOffset())
    };
    g.dom.browserrange.AbstractRange.prototype.select = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.removeContents = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.surroundContents = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.insertNode = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.surroundWithNodes = g.abstractMethod;
    g.dom.browserrange.AbstractRange.prototype.collapse = g.abstractMethod;
    g.provide("goog.dom.browserrange.W3cRange");
    g.dom.browserrange.W3cRange = function (e) {
        this.range_ = e
    };
    g.inherits(g.dom.browserrange.W3cRange, g.dom.browserrange.AbstractRange);
    g.dom.browserrange.W3cRange.getBrowserRangeForNode = function (z) {
        var B = g.dom.getOwnerDocument(z).createRange();
        if (z.nodeType == g.dom.NodeType.TEXT) {
            B.setStart(z, 0);
            B.setEnd(z, z.length)
        } else {
            if (!g.dom.browserrange.canContainRangeEndpoint(z)) {
                var y = z.parentNode;
                var x = g.array.indexOf(y.childNodes, z);
                B.setStart(y, x);
                B.setEnd(y, x + 1)
            } else {
                var A, e = z;
                while ((A = e.firstChild) && g.dom.browserrange.canContainRangeEndpoint(A)) {
                    e = A
                }
                B.setStart(e, 0);
                e = z;
                while ((A = e.lastChild) && g.dom.browserrange.canContainRangeEndpoint(A)) {
                    e = A
                }
                B.setEnd(e, e.nodeType == g.dom.NodeType.ELEMENT ? e.childNodes.length : e.length)
            }
        }
        return B
    };
    g.dom.browserrange.W3cRange.getBrowserRangeForNodes = function (z, x, e, y) {
        var A = g.dom.getOwnerDocument(z).createRange();
        A.setStart(z, x);
        A.setEnd(e, y);
        return A
    };
    g.dom.browserrange.W3cRange.createFromNodeContents = function (e) {
        return new g.dom.browserrange.W3cRange(g.dom.browserrange.W3cRange.getBrowserRangeForNode(e))
    };
    g.dom.browserrange.W3cRange.createFromNodes = function (z, x, e, y) {
        return new g.dom.browserrange.W3cRange(g.dom.browserrange.W3cRange.getBrowserRangeForNodes(z, x, e, y))
    };
    g.dom.browserrange.W3cRange.prototype.clone = function () {
        return new this.constructor(this.range_.cloneRange())
    };
    g.dom.browserrange.W3cRange.prototype.getBrowserRange = function () {
        return this.range_
    };
    g.dom.browserrange.W3cRange.prototype.getContainer = function () {
        return this.range_.commonAncestorContainer
    };
    g.dom.browserrange.W3cRange.prototype.getStartNode = function () {
        return this.range_.startContainer
    };
    g.dom.browserrange.W3cRange.prototype.getStartOffset = function () {
        return this.range_.startOffset
    };
    g.dom.browserrange.W3cRange.prototype.getEndNode = function () {
        return this.range_.endContainer
    };
    g.dom.browserrange.W3cRange.prototype.getEndOffset = function () {
        return this.range_.endOffset
    };
    g.dom.browserrange.W3cRange.prototype.compareBrowserRangeEndpoints = function (x, y, e) {
        return this.range_.compareBoundaryPoints(e == g.dom.RangeEndpoint.START ? (y == g.dom.RangeEndpoint.START ? g.global.Range.START_TO_START : g.global.Range.START_TO_END) : (y == g.dom.RangeEndpoint.START ? g.global.Range.END_TO_START : g.global.Range.END_TO_END), (x))
    };
    g.dom.browserrange.W3cRange.prototype.isCollapsed = function () {
        return this.range_.collapsed
    };
    g.dom.browserrange.W3cRange.prototype.getText = function () {
        return this.range_.toString()
    };
    g.dom.browserrange.W3cRange.prototype.getValidHtml = function () {
        var z = g.dom.getDomHelper(this.range_.startContainer).createDom("div");
        z.appendChild(this.range_.cloneContents());
        var e = z.innerHTML;
        if (g.string.startsWith(e, "<") || !this.isCollapsed() && !g.string.contains(e, "<")) {
            return e
        }
        var x = this.getContainer();
        x = x.nodeType == g.dom.NodeType.ELEMENT ? x : x.parentNode;
        var y = g.dom.getOuterHtml((x.cloneNode(d)));
        return y.replace(">", ">" + e)
    };
    g.dom.browserrange.W3cRange.prototype.select = function (e) {
        var x = g.dom.getWindow(g.dom.getOwnerDocument(this.getStartNode()));
        this.selectInternal(x.getSelection(), e)
    };
    g.dom.browserrange.W3cRange.prototype.selectInternal = function (x, e) {
        x.removeAllRanges();
        x.addRange(this.range_)
    };
    g.dom.browserrange.W3cRange.prototype.removeContents = function () {
        var e = this.range_;
        e.extractContents();
        if (e.startContainer.hasChildNodes()) {
            var y = e.startContainer.childNodes[e.startOffset];
            if (y) {
                var x = y.previousSibling;
                if (g.dom.getRawTextContent(y) == "") {
                    g.dom.removeNode(y)
                }
                if (x && g.dom.getRawTextContent(x) == "") {
                    g.dom.removeNode(x)
                }
            }
        }
    };
    g.dom.browserrange.W3cRange.prototype.surroundContents = function (e) {
        this.range_.surroundContents(e);
        return e
    };
    g.dom.browserrange.W3cRange.prototype.insertNode = function (x, y) {
        var e = this.range_.cloneRange();
        e.collapse(y);
        e.insertNode(x);
        e.detach();
        return x
    };
    g.dom.browserrange.W3cRange.prototype.surroundWithNodes = function (x, z) {
        var A = g.dom.getWindow(g.dom.getOwnerDocument(this.getStartNode()));
        var e = g.dom.Range.createFromWindow(A);
        if (e) {
            var B = e.getStartNode();
            var F = e.getEndNode();
            var G = e.getStartOffset();
            var y = e.getEndOffset()
        }
        var D = this.range_.cloneRange();
        var C = this.range_.cloneRange();
        D.collapse(d);
        C.collapse(v);
        D.insertNode(z);
        C.insertNode(x);
        D.detach();
        C.detach();
        if (e) {
            var E = function (H) {
                return H == x || H == z
            };
            if (B.nodeType == g.dom.NodeType.TEXT) {
                while (G > B.length) {
                    G -= B.length;
                    do {
                        B = B.nextSibling
                    } while (E(B))
                }
            }
            if (F.nodeType == g.dom.NodeType.TEXT) {
                while (y > F.length) {
                    y -= F.length;
                    do {
                        F = F.nextSibling
                    } while (E(F))
                }
            }
            g.dom.Range.createFromNodes(B, (G), F, (y)).select()
        }
    };
    g.dom.browserrange.W3cRange.prototype.collapse = function (e) {
        this.range_.collapse(e)
    };
    g.provide("goog.dom.browserrange.WebKitRange");
    g.dom.browserrange.WebKitRange = function (e) {
        g.dom.browserrange.W3cRange.call(this, e)
    };
    g.inherits(g.dom.browserrange.WebKitRange, g.dom.browserrange.W3cRange);
    g.dom.browserrange.WebKitRange.createFromNodeContents = function (e) {
        return new g.dom.browserrange.WebKitRange(g.dom.browserrange.W3cRange.getBrowserRangeForNode(e))
    };
    g.dom.browserrange.WebKitRange.createFromNodes = function (z, x, e, y) {
        return new g.dom.browserrange.WebKitRange(g.dom.browserrange.W3cRange.getBrowserRangeForNodes(z, x, e, y))
    };
    g.dom.browserrange.WebKitRange.prototype.compareBrowserRangeEndpoints = function (x, y, e) {
        if (g.userAgent.isVersion("528")) {
            return (g.dom.browserrange.WebKitRange.superClass_.compareBrowserRangeEndpoints.call(this, x, y, e))
        }
        return this.range_.compareBoundaryPoints(e == g.dom.RangeEndpoint.START ? (y == g.dom.RangeEndpoint.START ? g.global.Range.START_TO_START : g.global.Range.END_TO_START) : (y == g.dom.RangeEndpoint.START ? g.global.Range.START_TO_END : g.global.Range.END_TO_END), (x))
    };
    g.dom.browserrange.WebKitRange.prototype.selectInternal = function (e, x) {
        e.removeAllRanges();
        if (x) {
            e.setBaseAndExtent(this.getEndNode(), this.getEndOffset(), this.getStartNode(), this.getStartOffset())
        } else {
            e.setBaseAndExtent(this.getStartNode(), this.getStartOffset(), this.getEndNode(), this.getEndOffset())
        }
    };
    g.provide("goog.dom.NodeIterator");
    g.dom.NodeIterator = function (z, e, y, x) {
        g.dom.TagIterator.call(this, z, e, y, j, x)
    };
    g.inherits(g.dom.NodeIterator, g.dom.TagIterator);
    g.dom.NodeIterator.prototype.next = function () {
        do {
            g.dom.NodeIterator.superClass_.next.call(this)
        } while (this.isEndTag());
        return this.node
    };
    g.provide("goog.dom.browserrange.IeRange");
    g.dom.browserrange.IeRange = function (e, x) {
        this.range_ = e;
        this.doc_ = x
    };
    g.inherits(g.dom.browserrange.IeRange, g.dom.browserrange.AbstractRange);
    g.dom.browserrange.IeRange.getBrowserRangeForNode_ = function (y) {
        var A = g.dom.getOwnerDocument(y).body.createTextRange();
        if (y.nodeType == g.dom.NodeType.ELEMENT) {
            A.moveToElementText(y);
            if (g.dom.browserrange.canContainRangeEndpoint(y) && !y.childNodes.length) {
                A.collapse(d)
            }
        } else {
            var z = 0;
            var x = y;
            while (x = x.previousSibling) {
                var e = x.nodeType;
                if (e == g.dom.NodeType.TEXT) {
                    z += x.length
                } else {
                    if (e == g.dom.NodeType.ELEMENT) {
                        A.moveToElementText(x);
                        break
                    }
                }
            }
            if (!x) {
                A.moveToElementText(y.parentNode)
            }
            A.collapse(!x);
            if (z) {
                A.move("character", z)
            }
            A.moveEnd("character", y.length)
        }
        return A
    };
    g.dom.browserrange.IeRange.getBrowserRangeForNodes_ = function (z, x, e, y) {
        var D, C = d;
        if (z.nodeType == g.dom.NodeType.ELEMENT) {
            D = z.childNodes[x];
            C = !D;
            z = D || z.lastChild || z;
            x = 0
        }
        var A = g.dom.browserrange.IeRange.getBrowserRangeForNode_(z);
        if (x) {
            A.move("character", x)
        }
        if (z == e && x == y) {
            A.collapse(v);
            return A
        }
        if (C) {
            A.collapse(d)
        }
        C = d;
        if (e.nodeType == g.dom.NodeType.ELEMENT) {
            D = e.childNodes[y];
            e = D || e.lastChild || e;
            y = 0;
            C = !D
        }
        var B = g.dom.browserrange.IeRange.getBrowserRangeForNode_(e);
        B.collapse(!C);
        if (y) {
            B.moveEnd("character", y)
        }
        A.setEndPoint("EndToEnd", B);
        return A
    };
    g.dom.browserrange.IeRange.createFromNodeContents = function (y) {
        var x = new g.dom.browserrange.IeRange(g.dom.browserrange.IeRange.getBrowserRangeForNode_(y), g.dom.getOwnerDocument(y));
        if (!g.dom.browserrange.canContainRangeEndpoint(y)) {
            x.startNode_ = x.endNode_ = x.parentNode_ = y.parentNode;
            x.startOffset_ = g.array.indexOf(x.parentNode_.childNodes, y);
            x.endOffset_ = x.startOffset_ + 1
        } else {
            var z, e = y;
            while ((z = e.firstChild) && g.dom.browserrange.canContainRangeEndpoint(z)) {
                e = z
            }
            x.startNode_ = e;
            x.startOffset_ = 0;
            e = y;
            while ((z = e.lastChild) && g.dom.browserrange.canContainRangeEndpoint(z)) {
                e = z
            }
            x.endNode_ = e;
            x.endOffset_ = e.nodeType == g.dom.NodeType.ELEMENT ? e.childNodes.length : e.length;
            x.parentNode_ = y
        }
        return x
    };
    g.dom.browserrange.IeRange.createFromNodes = function (A, x, e, z) {
        var y = new g.dom.browserrange.IeRange(g.dom.browserrange.IeRange.getBrowserRangeForNodes_(A, x, e, z), g.dom.getOwnerDocument(A));
        y.startNode_ = A;
        y.startOffset_ = x;
        y.endNode_ = e;
        y.endOffset_ = z;
        return y
    };
    g.dom.browserrange.IeRange.prototype.parentNode_ = j;
    g.dom.browserrange.IeRange.prototype.startNode_ = j;
    g.dom.browserrange.IeRange.prototype.endNode_ = j;
    g.dom.browserrange.IeRange.prototype.startOffset_ = -1;
    g.dom.browserrange.IeRange.prototype.endOffset_ = -1;
    g.dom.browserrange.IeRange.prototype.clone = function () {
        var e = new g.dom.browserrange.IeRange(this.range_.duplicate(), this.doc_);
        e.parentNode_ = this.parentNode_;
        e.startNode_ = this.startNode_;
        e.endNode_ = this.endNode_;
        return e
    };
    g.dom.browserrange.IeRange.prototype.getBrowserRange = function () {
        return this.range_
    };
    g.dom.browserrange.IeRange.prototype.clearCachedValues_ = function () {
        this.parentNode_ = this.startNode_ = this.endNode_ = j;
        this.startOffset_ = this.endOffset_ = -1
    };
    g.dom.browserrange.IeRange.prototype.getContainer = function () {
        if (!this.parentNode_) {
            var z = this.range_.text;
            var e = this.range_.duplicate();
            var y = z.replace(/ +$/, "");
            var B = z.length - y.length;
            if (B) {
                e.moveEnd("character", -B)
            }
            var x = e.parentElement();
            var C = e.htmlText;
            var A = g.string.stripNewlines(C).length;
            if (this.isCollapsed() && A > 0) {
                return (this.parentNode_ = x)
            }
            while (A > g.string.stripNewlines(x.outerHTML).length) {
                x = x.parentNode
            }
            while (x.childNodes.length == 1 && x.firstChild && x.innerText == g.dom.browserrange.IeRange.getNodeText_(x.firstChild)) {
                if (!g.dom.browserrange.canContainRangeEndpoint(x.firstChild)) {
                    break
                }
                x = x.firstChild
            }
            if (z.length == 0) {
                x = this.findDeepestContainer_(x)
            }
            this.parentNode_ = x
        }
        return this.parentNode_
    };
    g.dom.browserrange.IeRange.prototype.findDeepestContainer_ = function (z) {
        var G = z.childNodes;
        for (var C = 0, E = G.length; C < E; C++) {
            var x = G[C];
            if (g.dom.browserrange.canContainRangeEndpoint(x)) {
                var A = g.dom.browserrange.IeRange.getBrowserRangeForNode_(x);
                var e = g.dom.RangeEndpoint.START;
                var B = g.dom.RangeEndpoint.END;
                var D = (A.htmlText != x.outerHTML);
                var F = this.isCollapsed() && D;
                var y = F ? (this.compareBrowserRangeEndpoints(A, e, e) >= 0 && this.compareBrowserRangeEndpoints(A, e, B) <= 0) : this.range_.inRange(A);
                if (y) {
                    return this.findDeepestContainer_(x)
                }
            }
        }
        return z
    };
    g.dom.browserrange.IeRange.prototype.getStartNode = function () {
        if (!this.startNode_) {
            this.startNode_ = this.getEndpointNode_(g.dom.RangeEndpoint.START);
            if (this.isCollapsed()) {
                this.endNode_ = this.startNode_
            }
        }
        return this.startNode_
    };
    g.dom.browserrange.IeRange.prototype.getStartOffset = function () {
        if (this.startOffset_ < 0) {
            this.startOffset_ = this.getOffset_(g.dom.RangeEndpoint.START);
            if (this.isCollapsed()) {
                this.endOffset_ = this.startOffset_
            }
        }
        return this.startOffset_
    };
    g.dom.browserrange.IeRange.prototype.getEndNode = function () {
        if (this.isCollapsed()) {
            return this.getStartNode()
        }
        if (!this.endNode_) {
            this.endNode_ = this.getEndpointNode_(g.dom.RangeEndpoint.END)
        }
        return this.endNode_
    };
    g.dom.browserrange.IeRange.prototype.getEndOffset = function () {
        if (this.isCollapsed()) {
            return this.getStartOffset()
        }
        if (this.endOffset_ < 0) {
            this.endOffset_ = this.getOffset_(g.dom.RangeEndpoint.END);
            if (this.isCollapsed()) {
                this.startOffset_ = this.endOffset_
            }
        }
        return this.endOffset_
    };
    g.dom.browserrange.IeRange.prototype.compareBrowserRangeEndpoints = function (x, y, e) {
        return this.range_.compareEndPoints((y == g.dom.RangeEndpoint.START ? "Start" : "End") + "To" + (e == g.dom.RangeEndpoint.START ? "Start" : "End"), x)
    };
    g.dom.browserrange.IeRange.prototype.getEndpointNode_ = function (J, E) {
        var C = E || this.getContainer();
        if (!C || !C.firstChild) {
            return C
        }
        var y = g.dom.RangeEndpoint.START,
            F = g.dom.RangeEndpoint.END;
        var B = J == y;
        for (var G = 0, A = C.childNodes.length; G < A; G++) {
            var H = B ? G : A - G - 1;
            var z = C.childNodes[H];
            var D;
            try {
                D = g.dom.browserrange.createRangeFromNodeContents(z)
            } catch (I) {
                continue
            }
            var x = D.getBrowserRange();
            if (this.isCollapsed()) {
                if (!g.dom.browserrange.canContainRangeEndpoint(z)) {
                    if (this.compareBrowserRangeEndpoints(x, y, y) == 0) {
                        this.startOffset_ = this.endOffset_ = H;
                        return C
                    }
                } else {
                    if (D.containsRange(this)) {
                        return this.getEndpointNode_(J, z)
                    }
                }
            } else {
                if (this.containsRange(D)) {
                    if (!g.dom.browserrange.canContainRangeEndpoint(z)) {
                        if (B) {
                            this.startOffset_ = H
                        } else {
                            this.endOffset_ = H + 1
                        }
                        return C
                    }
                    while (z.childNodes.length == 1) {
                        z = z.firstChild
                    }
                    return this.getEndpointNode_(J, z)
                } else {
                    if (this.compareBrowserRangeEndpoints(x, y, F) < 0 && this.compareBrowserRangeEndpoints(x, F, y) > 0) {
                        while (z.childNodes.length == 1 && z.firstChild) {
                            z = z.firstChild
                        }
                        return this.getEndpointNode_(J, z)
                    }
                }
            }
        }
        return C
    };
    g.dom.browserrange.IeRange.prototype.compareNodeEndpoints_ = function (y, x, e) {
        return this.range_.compareEndPoints((x == g.dom.RangeEndpoint.START ? "Start" : "End") + "To" + (e == g.dom.RangeEndpoint.START ? "Start" : "End"), g.dom.browserrange.createRangeFromNodeContents(y).getBrowserRange())
    };
    g.dom.browserrange.IeRange.prototype.getOffset_ = function (J, x) {
        var B = J == g.dom.RangeEndpoint.START;
        var y = x || (B ? this.getStartNode() : this.getEndNode());
        if (y.nodeType == g.dom.NodeType.ELEMENT) {
            var C = y.childNodes;
            var I = C.length;
            var A = B ? 0 : I - 1;
            var F = B ? 1 : -1;
            for (var G = A; G >= 0 && G < I; G += F) {
                var z = C[G];
                if (g.dom.browserrange.canContainRangeEndpoint(z)) {
                    continue
                }
                var e = this.compareNodeEndpoints_(z, J, J);
                if (e == 0) {
                    return B ? G : G + 1
                }
            }
            return G == -1 ? 0 : G
        } else {
            var H = this.range_.duplicate();
            var E = g.dom.browserrange.IeRange.getBrowserRangeForNode_(y);
            H.setEndPoint(B ? "EndToEnd" : "StartToStart", E);
            var D = H.text.length;
            return B ? y.length - D : D
        }
    };
    g.dom.browserrange.IeRange.getNodeText_ = function (e) {
        return e.nodeType == g.dom.NodeType.TEXT ? e.nodeValue : e.innerText
    };
    g.dom.browserrange.IeRange.prototype.isRangeInDocument = function () {
        var e = this.doc_.body.createTextRange();
        e.moveToElementText(this.doc_.body);
        return this.containsRange(new g.dom.browserrange.IeRange(e, this.doc_), v)
    };
    g.dom.browserrange.IeRange.prototype.isCollapsed = function () {
        return this.range_.compareEndPoints("StartToEnd", this.range_) == 0
    };
    g.dom.browserrange.IeRange.prototype.getText = function () {
        return this.range_.text
    };
    g.dom.browserrange.IeRange.prototype.getValidHtml = function () {
        return this.range_.htmlText
    };
    g.dom.browserrange.IeRange.prototype.select = function (e) {
        this.range_.select()
    };
    g.dom.browserrange.IeRange.prototype.removeContents = function () {
        if (this.range_.htmlText) {
            var y = this.getStartNode();
            var B = this.getEndNode();
            var G = this.range_.text;
            var D = this.range_.duplicate();
            D.moveStart("character", 1);
            D.moveStart("character", -1);
            if (D.text != G) {
                var E = new g.dom.NodeIterator(y, d, v);
                var A = [];
                g.iter.forEach(E, function (e) {
                    if (e.nodeType != g.dom.NodeType.TEXT && this.containsNode(e)) {
                        A.push(e);
                        E.skipTag()
                    }
                    if (e == B) {
                        throw g.iter.StopIteration
                    }
                });
                this.collapse(v);
                g.array.forEach(A, g.dom.removeNode);
                this.clearCachedValues_();
                return
            }
            this.range_ = D;
            this.range_.text = "";
            this.clearCachedValues_();
            var x = this.getStartNode();
            var z = this.getStartOffset();
            try {
                var F = y.nextSibling;
                if (y == B && y.parentNode && y.nodeType == g.dom.NodeType.TEXT && F && F.nodeType == g.dom.NodeType.TEXT) {
                    y.nodeValue += F.nodeValue;
                    g.dom.removeNode(F);
                    this.range_ = g.dom.browserrange.IeRange.getBrowserRangeForNode_(x);
                    this.range_.move("character", z);
                    this.clearCachedValues_()
                }
            } catch (C) {}
        }
    };
    g.dom.browserrange.IeRange.getDomHelper_ = function (e) {
        return g.dom.getDomHelper(e.parentElement())
    };
    g.dom.browserrange.IeRange.pasteElement_ = function (x, z, y) {
        y = y || g.dom.browserrange.IeRange.getDomHelper_(x);
        var A;
        var e = A = z.id;
        if (!A) {
            A = z.id = g.string.createUniqueString()
        }
        x.pasteHTML(z.outerHTML);
        z = y.getElement(A);
        if (z) {
            if (!e) {
                z.removeAttribute("id")
            }
        }
        return z
    };
    g.dom.browserrange.IeRange.prototype.surroundContents = function (e) {
        g.dom.removeNode(e);
        e.innerHTML = this.range_.htmlText;
        e = g.dom.browserrange.IeRange.pasteElement_(this.range_, e);
        if (e) {
            this.range_.moveToElementText(e)
        }
        this.clearCachedValues_();
        return e
    };
    g.dom.browserrange.IeRange.insertNode_ = function (B, z, A, x) {
        x = x || g.dom.browserrange.IeRange.getDomHelper_(B);
        var e;
        if (z.nodeType != g.dom.NodeType.ELEMENT) {
            e = v;
            z = x.createDom(g.dom.TagName.DIV, j, z)
        }
        B.collapse(A);
        z = g.dom.browserrange.IeRange.pasteElement_(B, (z), x);
        if (e) {
            var y = z.firstChild;
            x.flattenElement(z);
            z = y
        }
        return z
    };
    g.dom.browserrange.IeRange.prototype.insertNode = function (x, y) {
        var e = g.dom.browserrange.IeRange.insertNode_(this.range_.duplicate(), x, y);
        this.clearCachedValues_();
        return e
    };
    g.dom.browserrange.IeRange.prototype.surroundWithNodes = function (x, e) {
        var z = this.range_.duplicate();
        var y = this.range_.duplicate();
        g.dom.browserrange.IeRange.insertNode_(z, x, v);
        g.dom.browserrange.IeRange.insertNode_(y, e, d);
        this.clearCachedValues_()
    };
    g.dom.browserrange.IeRange.prototype.collapse = function (e) {
        this.range_.collapse(e);
        if (e) {
            this.endNode_ = this.startNode_;
            this.endOffset_ = this.startOffset_
        } else {
            this.startNode_ = this.endNode_;
            this.startOffset_ = this.endOffset_
        }
    };
    g.provide("goog.dom.browserrange.GeckoRange");
    g.dom.browserrange.GeckoRange = function (e) {
        g.dom.browserrange.W3cRange.call(this, e)
    };
    g.inherits(g.dom.browserrange.GeckoRange, g.dom.browserrange.W3cRange);
    g.dom.browserrange.GeckoRange.createFromNodeContents = function (e) {
        return new g.dom.browserrange.GeckoRange(g.dom.browserrange.W3cRange.getBrowserRangeForNode(e))
    };
    g.dom.browserrange.GeckoRange.createFromNodes = function (z, x, e, y) {
        return new g.dom.browserrange.GeckoRange(g.dom.browserrange.W3cRange.getBrowserRangeForNodes(z, x, e, y))
    };
    g.dom.browserrange.GeckoRange.prototype.selectInternal = function (y, B) {
        var x = B ? this.getEndNode() : this.getStartNode();
        var z = B ? this.getEndOffset() : this.getStartOffset();
        var A = B ? this.getStartNode() : this.getEndNode();
        var e = B ? this.getStartOffset() : this.getEndOffset();
        y.collapse(x, z);
        if (x != A || z != e) {
            y.extend(A, e)
        }
    };
    g.provide("goog.dom.browserrange.OperaRange");
    g.dom.browserrange.OperaRange = function (e) {
        g.dom.browserrange.W3cRange.call(this, e)
    };
    g.inherits(g.dom.browserrange.OperaRange, g.dom.browserrange.W3cRange);
    g.dom.browserrange.OperaRange.createFromNodeContents = function (e) {
        return new g.dom.browserrange.OperaRange(g.dom.browserrange.W3cRange.getBrowserRangeForNode(e))
    };
    g.dom.browserrange.OperaRange.createFromNodes = function (z, x, e, y) {
        return new g.dom.browserrange.OperaRange(g.dom.browserrange.W3cRange.getBrowserRangeForNodes(z, x, e, y))
    };
    g.dom.browserrange.OperaRange.prototype.selectInternal = function (e, x) {
        e.collapse(this.getStartNode(), this.getStartOffset());
        if (this.getEndNode() != this.getStartNode() || this.getEndOffset() != this.getStartOffset()) {
            e.extend(this.getEndNode(), this.getEndOffset())
        }
        if (e.rangeCount == 0) {
            e.addRange(this.range_)
        }
    };
    g.provide("goog.dom.browserrange");
    g.provide("goog.dom.browserrange.Error");
    g.dom.browserrange.Error = {
        NOT_IMPLEMENTED: "Not Implemented"
    };
    g.dom.browserrange.createRange = function (e) {
        if (g.userAgent.IE && !g.userAgent.isDocumentMode(9)) {
            return new g.dom.browserrange.IeRange((e), g.dom.getOwnerDocument(e.parentElement()))
        } else {
            if (g.userAgent.WEBKIT) {
                return new g.dom.browserrange.WebKitRange((e))
            } else {
                if (g.userAgent.GECKO) {
                    return new g.dom.browserrange.GeckoRange((e))
                } else {
                    if (g.userAgent.OPERA) {
                        return new g.dom.browserrange.OperaRange((e))
                    } else {
                        return new g.dom.browserrange.W3cRange((e))
                    }
                }
            }
        }
    };
    g.dom.browserrange.createRangeFromNodeContents = function (e) {
        if (g.userAgent.IE && !g.userAgent.isDocumentMode(9)) {
            return g.dom.browserrange.IeRange.createFromNodeContents(e)
        } else {
            if (g.userAgent.WEBKIT) {
                return g.dom.browserrange.WebKitRange.createFromNodeContents(e)
            } else {
                if (g.userAgent.GECKO) {
                    return g.dom.browserrange.GeckoRange.createFromNodeContents(e)
                } else {
                    if (g.userAgent.OPERA) {
                        return g.dom.browserrange.OperaRange.createFromNodeContents(e)
                    } else {
                        return g.dom.browserrange.W3cRange.createFromNodeContents(e)
                    }
                }
            }
        }
    };
    g.dom.browserrange.createRangeFromNodes = function (z, x, e, y) {
        if (g.userAgent.IE && !g.userAgent.isDocumentMode(9)) {
            return g.dom.browserrange.IeRange.createFromNodes(z, x, e, y)
        } else {
            if (g.userAgent.WEBKIT) {
                return g.dom.browserrange.WebKitRange.createFromNodes(z, x, e, y)
            } else {
                if (g.userAgent.GECKO) {
                    return g.dom.browserrange.GeckoRange.createFromNodes(z, x, e, y)
                } else {
                    if (g.userAgent.OPERA) {
                        return g.dom.browserrange.OperaRange.createFromNodes(z, x, e, y)
                    } else {
                        return g.dom.browserrange.W3cRange.createFromNodes(z, x, e, y)
                    }
                }
            }
        }
    };
    g.dom.browserrange.canContainRangeEndpoint = function (e) {
        return g.dom.canHaveChildren(e) || e.nodeType == g.dom.NodeType.TEXT
    };
    g.provide("goog.dom.TextRange");
    g.dom.TextRange = function () {};
    g.inherits(g.dom.TextRange, g.dom.AbstractRange);
    g.dom.TextRange.createFromBrowserRange = function (e, x) {
        return g.dom.TextRange.createFromBrowserRangeWrapper_(g.dom.browserrange.createRange(e), x)
    };
    g.dom.TextRange.createFromBrowserRangeWrapper_ = function (y, x) {
        var e = new g.dom.TextRange();
        e.browserRangeWrapper_ = y;
        e.isReversed_ = !!x;
        return e
    };
    g.dom.TextRange.createFromNodeContents = function (x, e) {
        return g.dom.TextRange.createFromBrowserRangeWrapper_(g.dom.browserrange.createRangeFromNodeContents(x), e)
    };
    g.dom.TextRange.createFromNodes = function (y, A, B, e) {
        var x = new g.dom.TextRange();
        x.isReversed_ = g.dom.Range.isReversed(y, A, B, e);
        if (y.tagName == "BR") {
            var z = y.parentNode;
            A = g.array.indexOf(z.childNodes, y);
            y = z
        }
        if (B.tagName == "BR") {
            var z = B.parentNode;
            e = g.array.indexOf(z.childNodes, B);
            B = z
        }
        if (x.isReversed_) {
            x.startNode_ = B;
            x.startOffset_ = e;
            x.endNode_ = y;
            x.endOffset_ = A
        } else {
            x.startNode_ = y;
            x.startOffset_ = A;
            x.endNode_ = B;
            x.endOffset_ = e
        }
        return x
    };
    g.dom.TextRange.prototype.browserRangeWrapper_ = j;
    g.dom.TextRange.prototype.startNode_ = j;
    g.dom.TextRange.prototype.startOffset_ = j;
    g.dom.TextRange.prototype.endNode_ = j;
    g.dom.TextRange.prototype.endOffset_ = j;
    g.dom.TextRange.prototype.isReversed_ = d;
    g.dom.TextRange.prototype.clone = function () {
        var e = new g.dom.TextRange();
        e.browserRangeWrapper_ = this.browserRangeWrapper_;
        e.startNode_ = this.startNode_;
        e.startOffset_ = this.startOffset_;
        e.endNode_ = this.endNode_;
        e.endOffset_ = this.endOffset_;
        e.isReversed_ = this.isReversed_;
        return e
    };
    g.dom.TextRange.prototype.getType = function () {
        return g.dom.RangeType.TEXT
    };
    g.dom.TextRange.prototype.getBrowserRangeObject = function () {
        return this.getBrowserRangeWrapper_().getBrowserRange()
    };
    g.dom.TextRange.prototype.setBrowserRangeObject = function (e) {
        if (g.dom.AbstractRange.isNativeControlRange(e)) {
            return d
        }
        this.browserRangeWrapper_ = g.dom.browserrange.createRange(e);
        this.clearCachedValues_();
        return v
    };
    g.dom.TextRange.prototype.clearCachedValues_ = function () {
        this.startNode_ = this.startOffset_ = this.endNode_ = this.endOffset_ = j
    };
    g.dom.TextRange.prototype.getTextRangeCount = function () {
        return 1
    };
    g.dom.TextRange.prototype.getTextRange = function (e) {
        return this
    };
    g.dom.TextRange.prototype.getBrowserRangeWrapper_ = function () {
        return this.browserRangeWrapper_ || (this.browserRangeWrapper_ = g.dom.browserrange.createRangeFromNodes(this.getStartNode(), this.getStartOffset(), this.getEndNode(), this.getEndOffset()))
    };
    g.dom.TextRange.prototype.getContainer = function () {
        return this.getBrowserRangeWrapper_().getContainer()
    };
    g.dom.TextRange.prototype.getStartNode = function () {
        return this.startNode_ || (this.startNode_ = this.getBrowserRangeWrapper_().getStartNode())
    };
    g.dom.TextRange.prototype.getStartOffset = function () {
        return this.startOffset_ != j ? this.startOffset_ : (this.startOffset_ = this.getBrowserRangeWrapper_().getStartOffset())
    };
    g.dom.TextRange.prototype.getEndNode = function () {
        return this.endNode_ || (this.endNode_ = this.getBrowserRangeWrapper_().getEndNode())
    };
    g.dom.TextRange.prototype.getEndOffset = function () {
        return this.endOffset_ != j ? this.endOffset_ : (this.endOffset_ = this.getBrowserRangeWrapper_().getEndOffset())
    };
    g.dom.TextRange.prototype.moveToNodes = function (z, x, e, y, A) {
        this.startNode_ = z;
        this.startOffset_ = x;
        this.endNode_ = e;
        this.endOffset_ = y;
        this.isReversed_ = A;
        this.browserRangeWrapper_ = j
    };
    g.dom.TextRange.prototype.isReversed = function () {
        return this.isReversed_
    };
    g.dom.TextRange.prototype.containsRange = function (A, z) {
        var e = A.getType();
        if (e == g.dom.RangeType.TEXT) {
            return this.getBrowserRangeWrapper_().containsRange(A.getBrowserRangeWrapper_(), z)
        } else {
            if (e == g.dom.RangeType.CONTROL) {
                var y = A.getElements();
                var x = z ? g.array.some : g.array.every;
                return x(y, function (B) {
                    return this.containsNode(B, z)
                }, this)
            }
        }
        return d
    };
    g.dom.TextRange.isAttachedNode = function (y) {
        if (g.userAgent.IE && !g.userAgent.isDocumentMode(9)) {
            var x = d;
            try {
                x = y.parentNode
            } catch (z) {}
            return !!x
        } else {
            return g.dom.contains(y.ownerDocument.body, y)
        }
    };
    g.dom.TextRange.prototype.isRangeInDocument = function () {
        return (!this.startNode_ || g.dom.TextRange.isAttachedNode(this.startNode_)) && (!this.endNode_ || g.dom.TextRange.isAttachedNode(this.endNode_)) && (!(g.userAgent.IE && !g.userAgent.isDocumentMode(9)) || this.getBrowserRangeWrapper_().isRangeInDocument())
    };
    g.dom.TextRange.prototype.isCollapsed = function () {
        return this.getBrowserRangeWrapper_().isCollapsed()
    };
    g.dom.TextRange.prototype.getText = function () {
        return this.getBrowserRangeWrapper_().getText()
    };
    g.dom.TextRange.prototype.getHtmlFragment = function () {
        return this.getBrowserRangeWrapper_().getHtmlFragment()
    };
    g.dom.TextRange.prototype.getValidHtml = function () {
        return this.getBrowserRangeWrapper_().getValidHtml()
    };
    g.dom.TextRange.prototype.getPastableHtml = function () {
        var x = this.getValidHtml();
        if (x.match(/^\s*<td\b/i)) {
            x = "<table><tbody><tr>" + x + "</tr></tbody></table>"
        } else {
            if (x.match(/^\s*<tr\b/i)) {
                x = "<table><tbody>" + x + "</tbody></table>"
            } else {
                if (x.match(/^\s*<tbody\b/i)) {
                    x = "<table>" + x + "</table>"
                } else {
                    if (x.match(/^\s*<li\b/i)) {
                        var e = this.getContainer();
                        var y = g.dom.TagName.UL;
                        while (e) {
                            if (e.tagName == g.dom.TagName.OL) {
                                y = g.dom.TagName.OL;
                                break
                            } else {
                                if (e.tagName == g.dom.TagName.UL) {
                                    break
                                }
                            }
                            e = e.parentNode
                        }
                        x = g.string.buildString("<", y, ">", x, "</", y, ">")
                    }
                }
            }
        }
        return x
    };
    g.dom.TextRange.prototype.__iterator__ = function (e) {
        return new g.dom.TextRangeIterator(this.getStartNode(), this.getStartOffset(), this.getEndNode(), this.getEndOffset())
    };
    g.dom.TextRange.prototype.select = function () {
        this.getBrowserRangeWrapper_().select(this.isReversed_)
    };
    g.dom.TextRange.prototype.removeContents = function () {
        this.getBrowserRangeWrapper_().removeContents();
        this.clearCachedValues_()
    };
    g.dom.TextRange.prototype.surroundContents = function (x) {
        var e = this.getBrowserRangeWrapper_().surroundContents(x);
        this.clearCachedValues_();
        return e
    };
    g.dom.TextRange.prototype.insertNode = function (x, y) {
        var e = this.getBrowserRangeWrapper_().insertNode(x, y);
        this.clearCachedValues_();
        return e
    };
    g.dom.TextRange.prototype.surroundWithNodes = function (x, e) {
        this.getBrowserRangeWrapper_().surroundWithNodes(x, e);
        this.clearCachedValues_()
    };
    g.dom.TextRange.prototype.saveUsingDom = function () {
        return new g.dom.DomSavedTextRange_(this)
    };
    g.dom.TextRange.prototype.collapse = function (x) {
        var e = this.isReversed() ? !x : x;
        if (this.browserRangeWrapper_) {
            this.browserRangeWrapper_.collapse(e)
        }
        if (e) {
            this.endNode_ = this.startNode_;
            this.endOffset_ = this.startOffset_
        } else {
            this.startNode_ = this.endNode_;
            this.startOffset_ = this.endOffset_
        }
        this.isReversed_ = d
    };
    g.dom.DomSavedTextRange_ = function (e) {
        this.anchorNode_ = e.getAnchorNode();
        this.anchorOffset_ = e.getAnchorOffset();
        this.focusNode_ = e.getFocusNode();
        this.focusOffset_ = e.getFocusOffset()
    };
    g.inherits(g.dom.DomSavedTextRange_, g.dom.SavedRange);
    g.dom.DomSavedTextRange_.prototype.restoreInternal = function () {
        return g.dom.Range.createFromNodes(this.anchorNode_, this.anchorOffset_, this.focusNode_, this.focusOffset_)
    };
    g.dom.DomSavedTextRange_.prototype.disposeInternal = function () {
        g.dom.DomSavedTextRange_.superClass_.disposeInternal.call(this);
        this.anchorNode_ = j;
        this.focusNode_ = j
    };
    g.provide("goog.dom.MultiRange");
    g.provide("goog.dom.MultiRangeIterator");
    g.dom.MultiRange = function () {
        this.browserRanges_ = [];
        this.ranges_ = [];
        this.sortedRanges_ = j;
        this.container_ = j
    };
    g.inherits(g.dom.MultiRange, g.dom.AbstractMultiRange);
    g.dom.MultiRange.createFromBrowserSelection = function (z) {
        var x = new g.dom.MultiRange();
        for (var y = 0, e = z.rangeCount; y < e; y++) {
            x.browserRanges_.push(z.getRangeAt(y))
        }
        return x
    };
    g.dom.MultiRange.createFromBrowserRanges = function (x) {
        var e = new g.dom.MultiRange();
        e.browserRanges_ = g.array.clone(x);
        return e
    };
    g.dom.MultiRange.createFromTextRanges = function (x) {
        var e = new g.dom.MultiRange();
        e.ranges_ = x;
        e.browserRanges_ = x.map(function (y) {
            return y.getBrowserRangeObject()
        });
        return e
    };
    g.dom.MultiRange.prototype.clearCachedValues_ = function () {
        this.ranges_ = [];
        this.sortedRanges_ = j;
        this.container_ = j
    };
    g.dom.MultiRange.prototype.clone = function () {
        return g.dom.MultiRange.createFromBrowserRanges(this.browserRanges_)
    };
    g.dom.MultiRange.prototype.getType = function () {
        return g.dom.RangeType.MULTI
    };
    g.dom.MultiRange.prototype.getBrowserRangeObject = function () {
        return this.browserRanges_[0]
    };
    g.dom.MultiRange.prototype.setBrowserRangeObject = function (e) {
        return d
    };
    g.dom.MultiRange.prototype.getTextRangeCount = function () {
        return this.browserRanges_.length
    };
    g.dom.MultiRange.prototype.getTextRange = function (e) {
        if (!this.ranges_[e]) {
            this.ranges_[e] = g.dom.TextRange.createFromBrowserRange(this.browserRanges_[e])
        }
        return this.ranges_[e]
    };
    g.dom.MultiRange.prototype.getContainer = function () {
        if (!this.container_) {
            var x = [];
            for (var y = 0, e = this.getTextRangeCount(); y < e; y++) {
                x.push(this.getTextRange(y).getContainer())
            }
            this.container_ = g.dom.findCommonAncestor.apply(j, x)
        }
        return this.container_
    };
    g.dom.MultiRange.prototype.getSortedRanges = function () {
        if (!this.sortedRanges_) {
            this.sortedRanges_ = this.getTextRanges();
            this.sortedRanges_.sort(function (x, e) {
                var z = x.getStartNode();
                var A = x.getStartOffset();
                var y = e.getStartNode();
                var B = e.getStartOffset();
                if (z == y && A == B) {
                    return 0
                }
                return g.dom.Range.isReversed(z, A, y, B) ? 1 : -1
            })
        }
        return this.sortedRanges_
    };
    g.dom.MultiRange.prototype.getStartNode = function () {
        return this.getSortedRanges()[0].getStartNode()
    };
    g.dom.MultiRange.prototype.getStartOffset = function () {
        return this.getSortedRanges()[0].getStartOffset()
    };
    g.dom.MultiRange.prototype.getEndNode = function () {
        return this.getSortedRanges().last().getEndNode()
    };
    g.dom.MultiRange.prototype.getEndOffset = function () {
        return this.getSortedRanges().last().getEndOffset()
    };
    g.dom.MultiRange.prototype.isRangeInDocument = function () {
        return this.getTextRanges().every(function (e) {
            return e.isRangeInDocument()
        })
    };
    g.dom.MultiRange.prototype.isCollapsed = function () {
        return this.browserRanges_.length == 0 || this.browserRanges_.length == 1 && this.getTextRange(0).isCollapsed()
    };
    g.dom.MultiRange.prototype.getText = function () {
        return this.getTextRanges().map(function (e) {
            return e.getText()
        }).join("")
    };
    g.dom.MultiRange.prototype.getHtmlFragment = function () {
        return this.getValidHtml()
    };
    g.dom.MultiRange.prototype.getValidHtml = function () {
        return this.getTextRanges().map(function (e) {
            return e.getValidHtml()
        }).join("")
    };
    g.dom.MultiRange.prototype.getPastableHtml = function () {
        return this.getValidHtml()
    };
    g.dom.MultiRange.prototype.__iterator__ = function (e) {
        return new g.dom.MultiRangeIterator(this)
    };
    g.dom.MultiRange.prototype.select = function () {
        var y = g.dom.AbstractRange.getBrowserSelectionForWindow(this.getWindow());
        y.removeAllRanges();
        for (var x = 0, e = this.getTextRangeCount(); x < e; x++) {
            y.addRange(this.getTextRange(x).getBrowserRangeObject())
        }
    };
    g.dom.MultiRange.prototype.removeContents = function () {
        this.getTextRanges().each(function (e) {
            e.removeContents()
        })
    };
    g.dom.MultiRange.prototype.saveUsingDom = function () {
        return new g.dom.DomSavedMultiRange_(this)
    };
    g.dom.MultiRange.prototype.collapse = function (x) {
        if (!this.isCollapsed()) {
            var e = x ? this.getTextRange(0) : this.getTextRange(this.getTextRangeCount() - 1);
            this.clearCachedValues_();
            e.collapse(x);
            this.ranges_ = [e];
            this.sortedRanges_ = [e];
            this.browserRanges_ = [e.getBrowserRangeObject()]
        }
    };
    g.dom.DomSavedMultiRange_ = function (e) {
        this.savedRanges_ = e.getTextRanges().map(function (x) {
            return x.saveUsingDom()
        })
    };
    g.inherits(g.dom.DomSavedMultiRange_, g.dom.SavedRange);
    g.dom.DomSavedMultiRange_.prototype.restoreInternal = function () {
        var e = this.savedRanges_.map(function (x) {
            return x.restore()
        });
        return g.dom.MultiRange.createFromTextRanges(e)
    };
    g.dom.DomSavedMultiRange_.prototype.disposeInternal = function () {
        g.dom.DomSavedMultiRange_.superClass_.disposeInternal.call(this);
        this.savedRanges_.map(function (e) {
            e.dispose()
        });
        delete this.savedRanges_
    };
    g.dom.MultiRangeIterator = function (e) {
        if (e) {
            this.iterators_ = e.getSortedRanges().map(function (x) {
                return g.iter.toIterator(x)
            })
        }
        g.dom.RangeIterator.call(this, e ? this.getStartNode() : j, d)
    };
    g.inherits(g.dom.MultiRangeIterator, g.dom.RangeIterator);
    g.dom.MultiRangeIterator.prototype.iterators_ = j;
    g.dom.MultiRangeIterator.prototype.currentIdx_ = 0;
    g.dom.MultiRangeIterator.prototype.getStartTextOffset = function () {
        return this.iterators_[this.currentIdx_].getStartTextOffset()
    };
    g.dom.MultiRangeIterator.prototype.getEndTextOffset = function () {
        return this.iterators_[this.currentIdx_].getEndTextOffset()
    };
    g.dom.MultiRangeIterator.prototype.getStartNode = function () {
        return this.iterators_[0].getStartNode()
    };
    g.dom.MultiRangeIterator.prototype.getEndNode = function () {
        return this.iterators_.last().getEndNode()
    };
    g.dom.MultiRangeIterator.prototype.isLast = function () {
        return this.iterators_[this.currentIdx_].isLast()
    };
    g.dom.MultiRangeIterator.prototype.next = function () {
        try {
            var y = this.iterators_[this.currentIdx_];
            var x = y.next();
            this.setPosition(y.node, y.tagType, y.depth);
            return x
        } catch (e) {
            if (e !== g.iter.StopIteration || this.iterators_.length - 1 == this.currentIdx_) {
                throw e
            } else {
                this.currentIdx_++;
                return this.next()
            }
        }
    };
    g.dom.MultiRangeIterator.prototype.copyFrom = function (e) {
        this.iterators_ = g.array.clone(e.iterators_);
        g.dom.MultiRangeIterator.superClass_.copyFrom.call(this, e)
    };
    g.dom.MultiRangeIterator.prototype.clone = function () {
        var e = new g.dom.MultiRangeIterator(j);
        e.copyFrom(this);
        return e
    };
    g.provide("goog.dom.ControlRange");
    g.provide("goog.dom.ControlRangeIterator");
    g.dom.ControlRange = function () {};
    g.inherits(g.dom.ControlRange, g.dom.AbstractMultiRange);
    g.dom.ControlRange.createFromBrowserRange = function (x) {
        var e = new g.dom.ControlRange();
        e.range_ = x;
        return e
    };
    g.dom.ControlRange.createFromElements = function (z) {
        var x = g.dom.getOwnerDocument(arguments[0]).body.createControlRange();
        for (var y = 0, e = arguments.length; y < e; y++) {
            x.addElement(arguments[y])
        }
        return g.dom.ControlRange.createFromBrowserRange(x)
    };
    g.dom.ControlRange.prototype.range_ = j;
    g.dom.ControlRange.prototype.elements_ = j;
    g.dom.ControlRange.prototype.sortedElements_ = j;
    g.dom.ControlRange.prototype.clearCachedValues_ = function () {
        this.elements_ = j;
        this.sortedElements_ = j
    };
    g.dom.ControlRange.prototype.clone = function () {
        return g.dom.ControlRange.createFromElements.apply(this, this.getElements())
    };
    g.dom.ControlRange.prototype.getType = function () {
        return g.dom.RangeType.CONTROL
    };
    g.dom.ControlRange.prototype.getBrowserRangeObject = function () {
        return this.range_ || c.body.createControlRange()
    };
    g.dom.ControlRange.prototype.setBrowserRangeObject = function (e) {
        if (!g.dom.AbstractRange.isNativeControlRange(e)) {
            return d
        }
        this.range_ = e;
        return v
    };
    g.dom.ControlRange.prototype.getTextRangeCount = function () {
        return this.range_ ? this.range_.length : 0
    };
    g.dom.ControlRange.prototype.getTextRange = function (e) {
        return g.dom.TextRange.createFromNodeContents(this.range_.item(e))
    };
    g.dom.ControlRange.prototype.getContainer = function () {
        return g.dom.findCommonAncestor.apply(j, this.getElements())
    };
    g.dom.ControlRange.prototype.getStartNode = function () {
        return this.getSortedElements()[0]
    };
    g.dom.ControlRange.prototype.getStartOffset = function () {
        return 0
    };
    g.dom.ControlRange.prototype.getEndNode = function () {
        var x = this.getSortedElements();
        var e = (x.last());
        return (x.find(function (y) {
            return g.dom.contains(y, e)
        }))
    };
    g.dom.ControlRange.prototype.getEndOffset = function () {
        return this.getEndNode().childNodes.length
    };
    g.dom.ControlRange.prototype.getElements = function () {
        if (!this.elements_) {
            this.elements_ = [];
            if (this.range_) {
                for (var e = 0; e < this.range_.length; e++) {
                    this.elements_.push(this.range_.item(e))
                }
            }
        }
        return this.elements_
    };
    g.dom.ControlRange.prototype.getSortedElements = function () {
        if (!this.sortedElements_) {
            this.sortedElements_ = this.getElements().concat();
            this.sortedElements_.sort(function (x, e) {
                return x.sourceIndex - e.sourceIndex
            })
        }
        return this.sortedElements_
    };
    g.dom.ControlRange.prototype.isRangeInDocument = function () {
        var x = d;
        try {
            x = this.getElements().every(function (e) {
                return g.userAgent.IE ? e.parentNode : g.dom.contains(e.ownerDocument.body, e)
            })
        } catch (y) {}
        return x
    };
    g.dom.ControlRange.prototype.isCollapsed = function () {
        return !this.range_ || !this.range_.length
    };
    g.dom.ControlRange.prototype.getText = function () {
        return ""
    };
    g.dom.ControlRange.prototype.getHtmlFragment = function () {
        return this.getSortedElements().map(g.dom.getOuterHtml).join("")
    };
    g.dom.ControlRange.prototype.getValidHtml = function () {
        return this.getHtmlFragment()
    };
    g.dom.ControlRange.prototype.getPastableHtml = g.dom.ControlRange.prototype.getValidHtml;
    g.dom.ControlRange.prototype.__iterator__ = function (e) {
        return new g.dom.ControlRangeIterator(this)
    };
    g.dom.ControlRange.prototype.select = function () {
        if (this.range_) {
            this.range_.select()
        }
    };
    g.dom.ControlRange.prototype.removeContents = function () {
        if (this.range_) {
            var x = [];
            for (var y = 0, e = this.range_.length; y < e; y++) {
                x.push(this.range_.item(y))
            }
            x.each(g.dom.removeNode);
            this.collapse(d)
        }
    };
    g.dom.ControlRange.prototype.saveUsingDom = function () {
        return new g.dom.DomSavedControlRange_(this)
    };
    g.dom.ControlRange.prototype.collapse = function (e) {
        this.range_ = j;
        this.clearCachedValues_()
    };
    g.dom.DomSavedControlRange_ = function (e) {
        this.elements_ = e.getElements()
    };
    g.inherits(g.dom.DomSavedControlRange_, g.dom.SavedRange);
    g.dom.DomSavedControlRange_.prototype.restoreInternal = function () {
        var z = this.elements_.length ? g.dom.getOwnerDocument(this.elements_[0]) : document;
        var y = z.body.createControlRange();
        for (var x = 0, e = this.elements_.length; x < e; x++) {
            y.addElement(this.elements_[x])
        }
        return g.dom.ControlRange.createFromBrowserRange(y)
    };
    g.dom.DomSavedControlRange_.prototype.disposeInternal = function () {
        g.dom.DomSavedControlRange_.superClass_.disposeInternal.call(this);
        delete this.elements_
    };
    g.dom.ControlRangeIterator = function (e) {
        if (e) {
            this.elements_ = e.getSortedElements();
            this.startNode_ = this.elements_.shift();
            this.endNode_ = (this.elements_.last()) || this.startNode_
        }
        g.dom.RangeIterator.call(this, this.startNode_, d)
    };
    g.inherits(g.dom.ControlRangeIterator, g.dom.RangeIterator);
    g.dom.ControlRangeIterator.prototype.startNode_ = j;
    g.dom.ControlRangeIterator.prototype.endNode_ = j;
    g.dom.ControlRangeIterator.prototype.elements_ = j;
    g.dom.ControlRangeIterator.prototype.getStartTextOffset = function () {
        return 0
    };
    g.dom.ControlRangeIterator.prototype.getEndTextOffset = function () {
        return 0
    };
    g.dom.ControlRangeIterator.prototype.getStartNode = function () {
        return this.startNode_
    };
    g.dom.ControlRangeIterator.prototype.getEndNode = function () {
        return this.endNode_
    };
    g.dom.ControlRangeIterator.prototype.isLast = function () {
        return !this.depth && !this.elements_.length
    };
    g.dom.ControlRangeIterator.prototype.next = function () {
        if (this.isLast()) {
            throw g.iter.StopIteration
        } else {
            if (!this.depth) {
                var e = this.elements_.shift();
                this.setPosition(e, g.dom.TagWalkType.START_TAG, g.dom.TagWalkType.START_TAG);
                return e
            }
        }
        return g.dom.ControlRangeIterator.superClass_.next.call(this)
    };
    g.dom.ControlRangeIterator.prototype.copyFrom = function (e) {
        this.elements_ = e.elements_;
        this.startNode_ = e.startNode_;
        this.endNode_ = e.endNode_;
        g.dom.ControlRangeIterator.superClass_.copyFrom.call(this, e)
    };
    g.dom.ControlRangeIterator.prototype.clone = function () {
        var e = new g.dom.ControlRangeIterator(j);
        e.copyFrom(this);
        return e
    };
    g.provide("goog.dom.Range");
    g.dom.Range.createFromWindow = function (x) {
        var e = g.dom.AbstractRange.getBrowserSelectionForWindow(x || window);
        return e && g.dom.Range.createFromBrowserSelection(e)
    };
    g.dom.Range.createFromBrowserSelection = function (y) {
        var x;
        var z = d;
        if (y.createRange) {
            try {
                x = y.createRange()
            } catch (A) {
                return j
            }
        } else {
            if (y.rangeCount) {
                if (y.rangeCount > 1) {
                    return g.dom.MultiRange.createFromBrowserSelection((y))
                } else {
                    x = y.getRangeAt(0);
                    z = g.dom.Range.isReversed(y.anchorNode, y.anchorOffset, y.focusNode, y.focusOffset)
                }
            } else {
                return j
            }
        }
        return g.dom.Range.createFromBrowserRange(x, z)
    };
    g.dom.Range.createFromBrowserRange = function (e, x) {
        return g.dom.AbstractRange.isNativeControlRange(e) ? g.dom.ControlRange.createFromBrowserRange(e) : g.dom.TextRange.createFromBrowserRange(e, x)
    };
    g.dom.Range.createFromNodeContents = function (x, e) {
        return g.dom.TextRange.createFromNodeContents(x, e)
    };
    g.dom.Range.createCaret = function (e, x) {
        return g.dom.TextRange.createFromNodes(e, x, e, x)
    };
    g.dom.Range.createFromNodes = function (z, x, e, y) {
        return g.dom.TextRange.createFromNodes(z, x, e, y)
    };
    g.dom.Range.clearSelection = function (y) {
        var x = g.dom.AbstractRange.getBrowserSelectionForWindow(y || window);
        if (!x) {
            return
        }
        if (x.empty) {
            try {
                x.empty()
            } catch (z) {}
        } else {
            x.removeAllRanges()
        }
    };
    g.dom.Range.isReversed = function (x, y, z, e) {
        if (x == z) {
            return e < y
        }
        var A;
        if (x.nodeType == g.dom.NodeType.ELEMENT && y) {
            A = x.childNodes[y];
            if (A) {
                x = A;
                y = 0
            } else {
                if (g.dom.contains(x, z)) {
                    return v
                }
            }
        }
        if (z.nodeType == g.dom.NodeType.ELEMENT && e) {
            A = z.childNodes[e];
            if (A) {
                z = A;
                e = 0
            } else {
                if (g.dom.contains(z, x)) {
                    return d
                }
            }
        }
        return (g.dom.compareNodeOrder(x, z) || y - e) > 0
    };
    g.provide("export_dep");
    i.tx = {};

    function b(x, z) {
        for (var y = 0, e = x.length; y < e; y++) {
            z(x[y])
        }
    }
    i.installHyperscript = function (x, e) {
        b("a big blockquote br b center code dd dl dt div em font form h1 h2 h3 h4 h5 h6 hr img iframe input i li ol option pre p script select small span strike strong style sub sup table tbody td textarea tr ul u".split(" "), function (y) {
            x[y] = function () {
                var z = e.createElement(y);
                b(arguments, function (B) {
                    if (B.nodeType) {
                        z.appendChild(B)
                    } else {
                        if (typeof B == "string" || typeof B == "number") {
                            if (y == "textarea") {
                                if (u.msie) {
                                    z.value += B
                                } else {
                                    z.text += B
                                }
                            } else {
                                z.innerHTML += B
                            }
                        } else {
                            if (typeof B == "array") {
                                for (var D = 0; D < B.length; D++) {
                                    z.appendChild(B[D])
                                }
                            } else {
                                for (var A in B) {
                                    if (A == "style") {
                                        for (var C in B[A]) {
                                            if ((C == "float" || C == "cssFloat")) {
                                                z[A][z[A].styleFloat === r ? "cssFloat" : "styleFloat"] = B[A][C]
                                            } else {
                                                z[A][C] = B[A][C]
                                            }
                                        }
                                    } else {
                                        if (["more", "less", "longDesc"].contains(A)) {
                                            if (z.setAttribute) {
                                                z.setAttribute(A, B[A])
                                            }
                                        } else {
                                            if (["colSpan", "rowSpan", "cellPadding", "cellSpacing"].contains(A)) {
                                                if (z.setAttribute) {
                                                    z.setAttribute(A, B[A])
                                                }
                                            } else {
                                                if (B[A]) {
                                                    z[A] = B[A]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
                return z
            }
        })
    };
    installHyperscript(i.tx, c);
    (function () {
        function x(z, y) {
            if (!z) {
                return ""
            }
            if (y.indexOf("{if:") > -1) {
                y = y.replace(/#\{if:([_\w]+)([=><!]+)([_'"\-\w]+)\}([\s\S]*?)#\{\/if:\1\}/gm, function (E, B, D, H, G) {
                    if (z[B] == j) {
                        return E
                    }
                    var C = d;
                    try {
                        D = ((D == "=") ? "==" : D);
                        var I = '"' + (z[B] + "").replace(/['"]/g, "") + '"';
                        var A = '"' + H.replace(/['"]/g, "") + '"';
                        C = txEval("(" + I + D + A + ")")
                    } catch (F) {
                        C = d
                    }
                    if (C) {
                        return x(z, G)
                    } else {
                        return ""
                    }
                })
            }
            if (y.indexOf("{for:") > -1) {
                y = y.replace(/#\{for:([_\w]+):?(\d*):?(\d*)\}([\s\S]*?)#\{\/for:\1\}/gm, function (H, A, I, C, F) {
                    if (!z[A] || !z[A].length) {
                        return H
                    }
                    var D = z[A];
                    var B = [];
                    I = !!I ? (isNaN(I) ? D.length : parseInt(I)) : D.length;
                    C = !!C ? (isNaN(C) ? 0 : parseInt(C)) : 0;
                    for (var E = 0, G = Math.min(D.length, I); E < G; E++) {
                        B.push(x(D[E], F))
                    }
                    return B.join("").substring(C)
                })
            }
            return y.replace(/#\{([_\w]+)\}/g, function (B, A) {
                if (z[A] != j) {
                    return z[A]
                } else {
                    return B
                }
            })
        }
        var e = i.Template = function (y) {
            this.template = y
        };
        e.prototype = {
            evaluate: function (y) {
                return x(y, this.template)
            },
            evaluateToDom: function (z, y) {
                if (typeof (y) === "string") {
                    y = c.getElementById(y)
                }
                y.innerHTML = x(z, this.template)
            },
            evaluateAsDom: function (A, z) {
                var y = (z || document).createElement("div");
                y.innerHTML = x(A, this.template);
                return y.firstChild
            }
        }
    })();
    (function () {
        var e, A, y;
        var B = {
            "#": function (E, F) {
                if ((e = /(\S*)#(\S+)/.exec(F)) !== j) {
                    var D = e[1];
                    var G = e[2];
                    if (!E.getElementById) {
                        E = E.ownerDocument
                    }
                    if (A = E.getElementById(G)) {
                        if (D.length < 1 || A.nodeName.toLowerCase() == D) {
                            return [A]
                        }
                    }
                }
                return []
            },
            ".": function (F, J) {
                if ((e = /(\S*)\.(\S+)/.exec(J)) !== j) {
                    var E = ((e[1] === "") ? "*" : e[1]);
                    var D = e[2];
                    if ((y = F.getElementsByTagName(E)).length > 0) {
                        var H = [];
                        for (var G = 0; G < y.length; G++) {
                            var I = y[G];
                            if ((new RegExp("(^| )" + D + "($| )")).test(I.className)) {
                                H.push(I)
                            }
                        }
                        return H
                    }
                }
                return []
            },
            "*": function (D, G) {
                if ((y = D.getElementsByTagName(G)).length > 0) {
                    var F = [];
                    for (var E = 0; E < y.length; E++) {
                        F.push(y[E])
                    }
                    return F
                }
                return []
            }
        };
        var x = function (D, H) {
            if (D.length < 1) {
                return []
            }
            var G;
            if ((f = /(\.|#)/.exec(H)) !== j) {
                if (B[f[1]]) {
                    G = f[1]
                }
            }
            G = G || "*";
            var F = [];
            for (var E = 0; E < D.length; E++) {
                F = F.concat(B[G](D[E], H))
            }
            return F
        };
        var C = function (D, G) {
            var F = [D];
            var H = G.split(" ");
            for (var E = 0; E < H.length; E++) {
                F = x(F, H[E])
            }
            return F
        };
        var z = function (G, D, H) {
            H = !!H;
            if (G.nodeType !== 1 && G.nodeType !== 9) {
                return (H ? [] : j)
            }
            if (!D || typeof D !== "string") {
                return (H ? [] : j)
            }
            var F;
            var I = [];
            var J = D.split(",");
            for (var E = 0; E < J.length; E++) {
                F = C(G, J[E]);
                if (F && F.length > 0) {
                    I = I.concat(F);
                    if (!H) {
                        break
                    }
                }
            }
            if (H) {
                return I
            } else {
                return I[0]
            }
        };
        i.dGetty = function () {
            var D = arguments;
            if (D.length == 1) {
                if (typeof (D[0]) === "string") {
                    return z(c, D[0])
                }
            } else {
                if (D.length == 2) {
                    if (D[0].nodeType && typeof (D[1]) === "string") {
                        return z(D[0], D[1])
                    }
                }
            }
            return j
        };
        i.dGetties = function () {
            var D = arguments;
            if (D.length == 1) {
                if (typeof (D[0]) === "string") {
                    return z(c, D[0], v)
                }
            } else {
                if (D.length == 2) {
                    if (D[0].nodeType && typeof (D[1]) === "string") {
                        return z(D[0], D[1], v)
                    }
                }
            }
            return []
        }
    })();
    (function () {
        var e, A, y;
        var B = {
            "#": function (D, E) {
                if ((e = /(\S*)#(\S+)/.exec(E)) !== j) {
                    var C = e[1];
                    var F = e[2];
                    if (C.length < 1 || D.nodeName.toLowerCase() == C) {
                        if (D.id == F) {
                            return v
                        }
                    }
                }
                return d
            },
            ".": function (E, F) {
                if ((e = /(\S*)\.(\S+)/.exec(F)) !== j) {
                    var D = e[1];
                    var C = e[2];
                    if (D.length < 1 || E.nodeName.toLowerCase() == D) {
                        if (E.className.indexOf(C) > -1) {
                            return v
                        }
                    }
                }
                return d
            },
            "*": function (D, E) {
                var C = E;
                if (D.nodeName.toLowerCase() == C) {
                    return v
                }
                return d
            }
        };
        var x = function (C, E) {
            var D;
            if ((f = /(\.|#)/.exec(E)) !== j) {
                if (B[f[1]]) {
                    D = f[1]
                }
            }
            D = D || "*";
            return B[D](C, E)
        };
        var z = function (E, C) {
            if (E.nodeType !== 1) {
                return d
            }
            var F = d;
            var G = C.split(",");
            for (var D = 0; D < G.length; D++) {
                F = x(E, G[D]);
                if (F) {
                    break
                }
            }
            return F
        };
        i.dChecky = function () {
            var C = arguments;
            if (C.length == 2) {
                if (C[0].nodeType && typeof (C[1]) === "string") {
                    return z(C[0], C[1])
                }
            }
            return d
        }
    })();
    (function () {
        var e, z, y;
        var A = {
            "#": function (D, F) {
                if ((e = /(\S*)#(\S+)/.exec(F)) !== j) {
                    var C = ((e[1] === "") ? "*" : e[1]);
                    var G = e[2];
                    var E = D;
                    while (E) {
                        if (E.nodeName.toLowerCase() == "body") {
                            break
                        }
                        if (C == "*" || E.nodeName.toLowerCase() == C) {
                            if (E.id == G) {
                                return E
                            }
                        }
                        E = E.parentNode
                    }
                }
                return j
            },
            ".": function (E, G) {
                if ((e = /(\S*)\.(\S+)/.exec(G)) !== j) {
                    var D = ((e[1] === "") ? "*" : e[1]);
                    var C = e[2];
                    var F = E;
                    while (F) {
                        if (F.nodeName.toLowerCase() == "body") {
                            break
                        }
                        if (D == "*" || F.nodeName.toLowerCase() == D) {
                            if (F.className.indexOf(C) > -1) {
                                return F
                            }
                        }
                        F = F.parentNode
                    }
                }
                return j
            },
            "*": function (D, H) {
                var F = D;
                var G = {};
                var I = H.split(",");
                for (var E = 0, C = I.length; E < C; E++) {
                    G[I[E]] = v
                }
                while (F) {
                    if (F.nodeName.toLowerCase() == "body") {
                        break
                    }
                    if (G[F.nodeName.toLowerCase()]) {
                        return F
                    }
                    F = F.parentNode
                }
                return j
            }
        };
        var B = function (D, F) {
            var E;
            if ((f = /(\.|#|:\w+)/.exec(F)) !== j) {
                if (A[f[1]]) {
                    E = f[1]
                }
            }
            E = E || "*";
            var C = j;
            if ((C = A[E](D, F)) != j) {
                return C
            }
            return j
        };
        var x = function (G, D) {
            if (!D || typeof D !== "string") {
                return j
            }
            var F = G;
            var H = D.split(" ");
            for (var E = 0, C = H.length; E < C; E++) {
                if ((F = B(F, H[E])) == j) {
                    return j
                }
            }
            return F
        };
        i.dFindy = function () {
            var C = arguments;
            if (C.length == 1) {
                throw new Error("need more arguments")
            } else {
                if (C.length == 2) {
                    if (C[0].nodeType && typeof (C[1]) === "string") {
                        return x(C[0], C[1])
                    }
                }
            }
            return j
        }
    })();
    (function () {
        var e = function (y) {
            this.selectSingleNode = function (z) {
                if (!y) {
                    return j
                }
                return y.selectSingleNode(z)
            };
            this.selectNodes = function (z) {
                if (!y) {
                    return []
                }
                return y.selectNodes(z)
            };
            this.getAttributeNode = function (z) {
                if (!y) {
                    return j
                }
                return y.getAttributeNode(z)
            };
            this.hasChildNodes = function () {
                if (!y) {
                    return d
                }
                return y.hasChildNodes()
            };
            this.text = y ? (y.textContent || y.text) : j;
            this.type = y ? y.nodeType : 0;
            this.name = (y && y.nodeType == 1) ? (y.nodeName || "") : "";
            return this
        };
        e.prototype = {
            getValueOrDefault: function (z, y) {
                if (z === "") {
                    return y
                } else {
                    if (typeof (y) === "number") {
                        return (isNaN(z) ? 0 : parseInt(z))
                    } else {
                        if (typeof (y) === "boolean") {
                            return !!z
                        } else {
                            return z
                        }
                    }
                }
            },
            xText: function (y) {
                y = y || "";
                var z = this.text;
                z = (z || "").trim();
                return this.getValueOrDefault(z, y)
            },
            xAttr: function (A, z) {
                z = z || "";
                var y = this.getAttributeNode(A);
                var B = (!y) ? "" : y.nodeValue.trim();
                return this.getValueOrDefault(B, z)
            },
            xGet: function (y) {
                return xGetty(this, y)
            },
            xGets: function (y) {
                return xGetties(this, y)
            }
        };
        var x = ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.5.0", "MSXML2.DOMDocument.4.0", "MSXML4.DOMDocument", "MSXML3.DOMDocument", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XmlDom"];
        i.xCreate = function (A) {
            if (!!(i.attachEvent && !i.opera)) {
                var z = (function () {
                    var C = j;
                    for (var B = 0; B < x.length; B++) {
                        try {
                            C = new ActiveXObject(x[B])
                        } catch (D) {}
                        if (C !== j) {
                            return C
                        }
                    }
                    return j
                })();
                if (z === j) {
                    return j
                }
                z.async = d;
                z.loadXML(A);
                if (z.parseError.errorCode !== 0) {
                    return j
                }
                return new e(z)
            } else {
                var y = new DOMParser();
                var z = y.parseFromString(new String(A), "text/xml");
                return new e(z)
            }
        };
        i.xGetty = function (y, z) {
            if (y === j) {
                return j
            }
            return new e(y.selectSingleNode(z))
        };
        i.xGetties = function (B, D) {
            if (B === j) {
                return []
            }
            var C = [];
            var z = B.selectNodes(D);
            for (var A = 0, y = z.length; A < y; A++) {
                C.push(new e(z[A]))
            }
            return C
        }
    })();
    (function () {
        var y = {
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

        function x(z) {
            this.pattern = z
        }
        x.prototype = {
            parse: function (z) {
                var A = {};
                this.pattern.replace(/(\w)\1*/g, function (B) {
                    if (y[B]) {
                        z = z.replace(y[B], function (C, D) {
                            A[B] = D;
                            return ""
                        })
                    }
                    return B
                });
                return new Date(Date.parse([Math.max(1, parseInt(A.MM || A.M || "01", 10)), "/", Math.max(1, parseInt(A.dd || A.d || "01", 10)), "/", (A.yyyy || A.yy || new Date().getFullYear()), " ", A.HH || "00", ":", A.mm || "00", ":", A.ss || "00"].join("")))
            },
            format: function (z) {
                return this.pattern.replace("yyyy", z.getFullYear()).replace("MM", (z.getMonth() + 1).toPaddedString(2)).replace("dd", z.getDate().toPaddedString(2)).replace("HH", z.getHours().toPaddedString(2)).replace("mm", z.getMinutes().toPaddedString(2)).replace("ss", z.getSeconds().toPaddedString(2)).replace("yy", z.getYear()).replace("M", z.getMonth() + 1).replace("d", z.getDate()).replace("EEE", e[z.getDay()])
            }
        };
        i.DateFormat = x
    })();
    i.swfobject = function () {
        var Z = r + "",
            N = "object",
            ao = "Shockwave Flash",
            at = "ShockwaveFlash.ShockwaveFlash",
            M = "application/x-shockwave-flash",
            an = "SWFObjectExprInst",
            T = "onreadystatechange",
            ak = i,
            F = c,
            P = navigator,
            ap = d,
            aq = [D],
            K = [],
            aj = [],
            ae = [],
            H, am, aa, X, af = d,
            e = d,
            J, ac, I = v,
            ai = function () {
                var ax = typeof F.getElementById != Z && typeof F.getElementsByTagName != Z && typeof F.createElement != Z,
                    aE = P.userAgent.toLowerCase(),
                    av = P.platform.toLowerCase(),
                    aB = av ? /win/.test(av) : /win/.test(aE),
                    az = av ? /mac/.test(av) : /mac/.test(aE),
                    aC = /webkit/.test(aE) ? parseFloat(aE.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : d,
                    au = !+"\v1",
                    aD = [0, 0, 0],
                    ay = j;
                if (typeof P.plugins != Z && typeof P.plugins[ao] == N) {
                    ay = P.plugins[ao].description;
                    if (ay && !(typeof P.mimeTypes != Z && P.mimeTypes[M] && !P.mimeTypes[M].enabledPlugin)) {
                        ap = v;
                        au = d;
                        ay = ay.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        aD[0] = parseInt(ay.replace(/^(.*)\..*$/, "$1"), 10);
                        aD[1] = parseInt(ay.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        aD[2] = /[a-zA-Z]/.test(ay) ? parseInt(ay.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof ak.ActiveXObject != Z) {
                        try {
                            var aA = new ActiveXObject(at);
                            if (aA) {
                                ay = aA.GetVariable("$version");
                                if (ay) {
                                    au = v;
                                    ay = ay.split(" ")[1].split(",");
                                    aD = [parseInt(ay[0], 10), parseInt(ay[1], 10), parseInt(ay[2], 10)]
                                }
                            }
                        } catch (aw) {}
                    }
                }
                return {
                    w3: ax,
                    pv: aD,
                    wk: aC,
                    ie: au,
                    win: aB,
                    mac: az
                }
            }(),
            G = function () {
                if (!ai.w3) {
                    return
                }
                if ((typeof F.readyState != Z && F.readyState == "complete") || (typeof F.readyState == Z && (F.getElementsByTagName("body")[0] || F.body))) {
                    B()
                }
                if (!af) {
                    if (typeof F.addEventListener != Z) {
                        F.addEventListener("DOMContentLoaded", B, d)
                    }
                    if (ai.ie && ai.win) {
                        F.attachEvent(T, function () {
                            if (F.readyState == "complete") {
                                F.detachEvent(T, arguments.callee);
                                B()
                            }
                        });
                        if (ak == top) {
                            (function () {
                                if (af) {
                                    return
                                }
                                try {
                                    F.documentElement.doScroll("left")
                                } catch (au) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                B()
                            })()
                        }
                    }
                    if (ai.wk) {
                        (function () {
                            if (af) {
                                return
                            }
                            if (!/loaded|complete/.test(F.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            B()
                        })()
                    }
                    O(B)
                }
            }();

        function B() {
            if (af) {
                return
            }
            try {
                var aw = F.getElementsByTagName("body")[0].appendChild(Y("span"));
                aw.parentNode.removeChild(aw)
            } catch (ax) {
                return
            }
            af = v;
            var au = aq.length;
            for (var av = 0; av < au; av++) {
                aq[av]()
            }
        }

        function ag(au) {
            if (af) {
                au()
            } else {
                aq[aq.length] = au
            }
        }

        function O(av) {
            if (typeof ak.addEventListener != Z) {
                ak.addEventListener("load", av, d)
            } else {
                if (typeof F.addEventListener != Z) {
                    F.addEventListener("load", av, d)
                } else {
                    if (typeof ak.attachEvent != Z) {
                        E(ak, "onload", av)
                    } else {
                        if (typeof ak.onload == "function") {
                            var au = ak.onload;
                            ak.onload = function () {
                                au();
                                av()
                            }
                        } else {
                            ak.onload = av
                        }
                    }
                }
            }
        }

        function D() {
            if (ap) {
                ar()
            } else {
                ad()
            }
        }

        function ar() {
            var au = F.getElementsByTagName("body")[0];
            var ax = Y(N);
            ax.setAttribute("type", M);
            var aw = au.appendChild(ax);
            if (aw) {
                var av = 0;
                (function () {
                    if (typeof aw.GetVariable != Z) {
                        var ay = aw.GetVariable("$version");
                        if (ay) {
                            ay = ay.split(" ")[1].split(",");
                            ai.pv = [parseInt(ay[0], 10), parseInt(ay[1], 10), parseInt(ay[2], 10)]
                        }
                    } else {
                        if (av < 10) {
                            av++;
                            setTimeout(arguments.callee, 10);
                            return
                        }
                    }
                    au.removeChild(ax);
                    aw = j;
                    ad()
                })()
            } else {
                ad()
            }
        }

        function ad() {
            var aD = K.length;
            if (aD > 0) {
                for (var aC = 0; aC < aD; aC++) {
                    var av = K[aC].id;
                    var ay = K[aC].callbackFn;
                    var ax = {
                        success: d,
                        id: av
                    };
                    if (ai.pv[0] > 0) {
                        var aB = y(av);
                        if (aB) {
                            if (ab(K[aC].swfVersion) && !(ai.wk && ai.wk < 312)) {
                                S(av, v);
                                if (ay) {
                                    ax.success = v;
                                    ax.ref = V(av);
                                    ay(ax)
                                }
                            } else {
                                if (K[aC].expressInstall && W()) {
                                    var aF = {};
                                    aF.data = K[aC].expressInstall;
                                    aF.width = aB.getAttribute("width") || "0";
                                    aF.height = aB.getAttribute("height") || "0";
                                    if (aB.getAttribute("class")) {
                                        aF.styleclass = aB.getAttribute("class")
                                    }
                                    if (aB.getAttribute("align")) {
                                        aF.align = aB.getAttribute("align")
                                    }
                                    var aE = {};
                                    var au = aB.getElementsByTagName("param");
                                    var az = au.length;
                                    for (var aA = 0; aA < az; aA++) {
                                        if (au[aA].getAttribute("name").toLowerCase() != "movie") {
                                            aE[au[aA].getAttribute("name")] = au[aA].getAttribute("value")
                                        }
                                    }
                                    al(aF, aE, av, ay)
                                } else {
                                    L(aB);
                                    if (ay) {
                                        ay(ax)
                                    }
                                }
                            }
                        }
                    } else {
                        S(av, v);
                        if (ay) {
                            var aw = V(av);
                            if (aw && typeof aw.SetVariable != Z) {
                                ax.success = v;
                                ax.ref = aw
                            }
                            ay(ax)
                        }
                    }
                }
            }
        }

        function V(ax) {
            var au = j;
            var av = y(ax);
            if (av && av.nodeName == "OBJECT") {
                if (typeof av.SetVariable != Z) {
                    au = av
                } else {
                    var aw = av.getElementsByTagName(N)[0];
                    if (aw) {
                        au = aw
                    }
                }
            }
            return au
        }

        function W() {
            return !e && ab("6.0.65") && (ai.win || ai.mac) && !(ai.wk && ai.wk < 312)
        }

        function al(ax, ay, au, aw) {
            e = v;
            aa = aw || j;
            X = {
                success: d,
                id: au
            };
            var aB = y(au);
            if (aB) {
                if (aB.nodeName == "OBJECT") {
                    H = C(aB);
                    am = j
                } else {
                    H = aB;
                    am = au
                }
                ax.id = an;
                if (typeof ax.width == Z || (!/%$/.test(ax.width) && parseInt(ax.width, 10) < 310)) {
                    ax.width = "310"
                }
                if (typeof ax.height == Z || (!/%$/.test(ax.height) && parseInt(ax.height, 10) < 137)) {
                    ax.height = "137"
                }
                F.title = F.title.slice(0, 47) + " - Flash Player Installation";
                var aA = ai.ie && ai.win ? "ActiveX" : "PlugIn",
                    az = "MMredirectURL=" + ak.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + aA + "&MMdoctitle=" + F.title;
                if (typeof ay.flashvars != Z) {
                    ay.flashvars += "&" + az
                } else {
                    ay.flashvars = az
                } if (ai.ie && ai.win && aB.readyState != 4) {
                    var av = Y("div");
                    au += "SWFObjectNew";
                    av.setAttribute("id", au);
                    aB.parentNode.insertBefore(av, aB);
                    aB.style.display = "none";
                    (function () {
                        if (aB.readyState == 4) {
                            aB.parentNode.removeChild(aB)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                }
                Q(ax, ay, au)
            }
        }

        function L(av) {
            if (ai.ie && ai.win && av.readyState != 4) {
                var au = Y("div");
                av.parentNode.insertBefore(au, av);
                au.parentNode.replaceChild(C(av), au);
                av.style.display = "none";
                (function () {
                    if (av.readyState == 4) {
                        av.parentNode.removeChild(av)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                av.parentNode.replaceChild(C(av), av)
            }
        }

        function C(ay) {
            var ax = Y("div");
            if (ai.win && ai.ie) {
                ax.innerHTML = ay.innerHTML
            } else {
                var av = ay.getElementsByTagName(N)[0];
                if (av) {
                    var az = av.childNodes;
                    if (az) {
                        var au = az.length;
                        for (var aw = 0; aw < au; aw++) {
                            if (!(az[aw].nodeType == 1 && az[aw].nodeName == "PARAM") && !(az[aw].nodeType == 8)) {
                                ax.appendChild(az[aw].cloneNode(v))
                            }
                        }
                    }
                }
            }
            return ax
        }

        function Q(aF, aD, av) {
            var au, ax = y(av);
            if (ai.wk && ai.wk < 312) {
                return au
            }
            if (ax) {
                if (typeof aF.id == Z) {
                    aF.id = av
                }
                if (ai.ie && ai.win) {
                    var aE = "";
                    for (var aB in aF) {
                        if (aF[aB] != Object.prototype[aB]) {
                            if (aB.toLowerCase() == "data") {
                                aD.movie = aF[aB]
                            } else {
                                if (aB.toLowerCase() == "styleclass") {
                                    aE += ' class="' + aF[aB] + '"'
                                } else {
                                    if (aB.toLowerCase() != "classid") {
                                        aE += " " + aB + '="' + aF[aB] + '"'
                                    }
                                }
                            }
                        }
                    }
                    var aC = "";
                    for (var aA in aD) {
                        if (aD[aA] != Object.prototype[aA]) {
                            aC += '<param name="' + aA + '" value="' + aD[aA] + '" />'
                        }
                    }
                    ax.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + aE + ">" + aC + "</object>";
                    aj[aj.length] = aF.id;
                    au = y(aF.id)
                } else {
                    var aw = Y(N);
                    aw.setAttribute("type", M);
                    for (var az in aF) {
                        if (aF[az] != Object.prototype[az]) {
                            if (az.toLowerCase() == "styleclass") {
                                aw.setAttribute("class", aF[az])
                            } else {
                                if (az.toLowerCase() != "classid") {
                                    aw.setAttribute(az, aF[az])
                                }
                            }
                        }
                    }
                    for (var ay in aD) {
                        if (aD[ay] != Object.prototype[ay] && ay.toLowerCase() != "movie") {
                            A(aw, ay, aD[ay])
                        }
                    }
                    ax.parentNode.replaceChild(aw, ax);
                    au = aw
                }
            }
            return au
        }

        function A(aw, au, av) {
            var ax = Y("param");
            ax.setAttribute("name", au);
            ax.setAttribute("value", av);
            aw.appendChild(ax)
        }

        function U(av) {
            var au = y(av);
            if (au && au.nodeName == "OBJECT") {
                if (ai.ie && ai.win) {
                    au.style.display = "none";
                    (function () {
                        if (au.readyState == 4) {
                            x(av)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    au.parentNode.removeChild(au)
                }
            }
        }

        function x(aw) {
            var av = y(aw);
            if (av) {
                for (var au in av) {
                    if (typeof av[au] == "function") {
                        av[au] = j
                    }
                }
                av.parentNode.removeChild(av)
            }
        }

        function y(aw) {
            var au = j;
            try {
                au = F.getElementById(aw)
            } catch (av) {}
            return au
        }

        function Y(au) {
            return F.createElement(au)
        }

        function E(aw, au, av) {
            aw.attachEvent(au, av);
            ae[ae.length] = [aw, au, av]
        }

        function ab(aw) {
            var av = ai.pv,
                au = aw.split(".");
            au[0] = parseInt(au[0], 10);
            au[1] = parseInt(au[1], 10) || 0;
            au[2] = parseInt(au[2], 10) || 0;
            return (av[0] > au[0] || (av[0] == au[0] && av[1] > au[1]) || (av[0] == au[0] && av[1] == au[1] && av[2] >= au[2])) ? v : d
        }

        function R(az, av, aA, ay) {
            if (ai.ie && ai.mac) {
                return
            }
            var ax = F.getElementsByTagName("head")[0];
            if (!ax) {
                return
            }
            var au = (aA && typeof aA == "string") ? aA : "screen";
            if (ay) {
                J = j;
                ac = j
            }
            if (!J || ac != au) {
                var aw = Y("style");
                aw.setAttribute("type", "text/css");
                aw.setAttribute("media", au);
                J = ax.appendChild(aw);
                if (ai.ie && ai.win && typeof F.styleSheets != Z && F.styleSheets.length > 0) {
                    J = F.styleSheets[F.styleSheets.length - 1]
                }
                ac = au
            }
            if (ai.ie && ai.win) {
                if (J && typeof J.addRule == N) {
                    J.addRule(az, av)
                }
            } else {
                if (J && typeof F.createTextNode != Z) {
                    J.appendChild(F.createTextNode(az + " {" + av + "}"))
                }
            }
        }

        function S(aw, au) {
            if (!I) {
                return
            }
            var av = au ? "visible" : "hidden";
            if (af && y(aw)) {
                y(aw).style.visibility = av
            } else {
                R("#" + aw, "visibility:" + av)
            }
        }

        function ah(av) {
            var aw = /[\\\"<>\.;]/;
            var au = aw.exec(av) != j;
            return au && typeof encodeURIComponent != Z ? encodeURIComponent(av) : av
        }
        var z = function () {
            if (ai.ie && ai.win) {
                i.attachEvent("onunload", function () {
                    var az = ae.length;
                    for (var ay = 0; ay < az; ay++) {
                        ae[ay][0].detachEvent(ae[ay][1], ae[ay][2])
                    }
                    var aw = aj.length;
                    for (var ax = 0; ax < aw; ax++) {
                        U(aj[ax])
                    }
                    for (var av in ai) {
                        ai[av] = j
                    }
                    ai = j;
                    for (var au in swfobject) {
                        swfobject[au] = j
                    }
                    swfobject = j
                })
            }
        }();
        return {
            registerObject: function (ay, au, ax, aw) {
                if (ai.w3 && ay && au) {
                    var av = {};
                    av.id = ay;
                    av.swfVersion = au;
                    av.expressInstall = ax;
                    av.callbackFn = aw;
                    K[K.length] = av;
                    S(ay, d)
                } else {
                    if (aw) {
                        aw({
                            success: d,
                            id: ay
                        })
                    }
                }
            },
            getObjectById: function (au) {
                if (ai.w3) {
                    return V(au)
                }
            },
            embedSWF: function (ay, aE, aB, aD, av, ax, aw, aA, aC, az) {
                var au = {
                    success: d,
                    id: aE
                };
                if (ai.w3 && !(ai.wk && ai.wk < 312) && ay && aE && aB && aD && av) {
                    S(aE, d);
                    ag(function () {
                        aB += "";
                        aD += "";
                        var aG = {};
                        if (aC && typeof aC === N) {
                            for (var aI in aC) {
                                aG[aI] = aC[aI]
                            }
                        }
                        aG.data = ay;
                        aG.width = aB;
                        aG.height = aD;
                        var aJ = {};
                        if (aA && typeof aA === N) {
                            for (var aH in aA) {
                                aJ[aH] = aA[aH]
                            }
                        }
                        if (aw && typeof aw === N) {
                            for (var aF in aw) {
                                if (typeof aJ.flashvars != Z) {
                                    aJ.flashvars += "&" + aF + "=" + aw[aF]
                                } else {
                                    aJ.flashvars = aF + "=" + aw[aF]
                                }
                            }
                        }
                        if (ab(av)) {
                            var aK = Q(aG, aJ, aE);
                            if (aG.id == aE) {
                                S(aE, v)
                            }
                            au.success = v;
                            au.ref = aK
                        } else {
                            if (ax && W()) {
                                aG.data = ax;
                                al(aG, aJ, aE, az);
                                return
                            } else {
                                S(aE, v)
                            }
                        } if (az) {
                            az(au)
                        }
                    })
                } else {
                    if (az) {
                        az(au)
                    }
                }
            },
            switchOffAutoHideShow: function () {
                I = d
            },
            ua: ai,
            getFlashPlayerVersion: function () {
                return {
                    major: ai.pv[0],
                    minor: ai.pv[1],
                    release: ai.pv[2]
                }
            },
            hasFlashPlayerVersion: ab,
            createSWF: function (aw, av, au) {
                if (ai.w3) {
                    return Q(aw, av, au)
                } else {
                    return r
                }
            },
            showExpressInstall: function (aw, ax, au, av) {
                if (ai.w3 && W()) {
                    al(aw, ax, au, av)
                }
            },
            removeSWF: function (au) {
                if (ai.w3) {
                    U(au)
                }
            },
            createCSS: function (ax, aw, av, au) {
                if (ai.w3) {
                    R(ax, aw, av, au)
                }
            },
            addDomLoadEvent: ag,
            addLoadEvent: O,
            getQueryParamValue: function (ax) {
                var aw = F.location.search || F.location.hash;
                if (aw) {
                    if (/\?/.test(aw)) {
                        aw = aw.split("?")[1]
                    }
                    if (ax == j) {
                        return ah(aw)
                    }
                    var av = aw.split("&");
                    for (var au = 0; au < av.length; au++) {
                        if (av[au].substring(0, av[au].indexOf("=")) == ax) {
                            return ah(av[au].substring((av[au].indexOf("=") + 1)))
                        }
                    }
                }
                return ""
            },
            expressInstallCallback: function () {
                if (e) {
                    var au = y(an);
                    if (au && H) {
                        au.parentNode.replaceChild(H, au);
                        if (am) {
                            S(am, v);
                            if (ai.ie && ai.win) {
                                H.style.display = "block"
                            }
                        }
                        if (aa) {
                            aa(X)
                        }
                    }
                    e = d
                }
            }
        }
    }();

    function s(e, y) {
        for (var x in y) {
            e[x] = y[x]
        }
        return e
    }
    var m = function () {
        this.empty = true;
        this.shorthand = false;
        this.properties = {}
    };
    m.TAGS_FOR_PRESENTATION = {
        U: {
            textDecoration: "underline"
        },
        B: {
            fontWeight: "bold"
        },
        STRONG: {
            fontWeight: "bold"
        },
        I: {
            fontStyle: "italic"
        },
        EM: {
            fontStyle: "italic"
        },
        S: {
            textDecoration: "line-through"
        },
        STRIKE: {
            textDecoration: "line-through"
        },
        INS: {
            textDecoration: "underline"
        },
        DEL: {
            textDecoration: "line-through"
        },
        FONT: function (x) {
            var e = {};
            if (x.face) {
                e.fontFamily = x.face
            }
            if (x.color) {
                e.color = x.color
            }
            var y = ["", "x-small", "small", "medium", "large", "x-large", "xx-large"];
            if (x.size) {
                var z = x.size;
                e.fontSize = isNaN(z) ? z : y[Math.min(Math.max(1, z), 6)]
            }
            return e
        }
    };
    m.FONT_RELATED_CSS_PROPERTIES = {
        font: "font",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "font-size": "fontSize",
        "font-family": "fontFamily",
        "text-decoration": "textDecoration",
        color: "color",
        "background-color": "backgroundColor"
    };
    m.create = function (E, A) {
        var F = new m();
        var z = m.TAGS_FOR_PRESENTATION[E];
        if (z) {
            var D = (typeof z == "function") ? z(A) : z;
            for (var e in D) {
                F.setProperty(e, D[e])
            }
        }
        var y = A.style;
        if (y) {
            y = y.replace(/[\w-]+:\s?;/g, "");
            var C = y.split(/; ?|: ?/);
            for (var B = 0; B < C.length - 1; B += 2) {
                var x = m.FONT_RELATED_CSS_PROPERTIES[C[B].toLowerCase()];
                if (x) {
                    if (x != "backgroundColor" || (m.TAGS_FOR_PRESENTATION[E] || E == "SPAN")) {
                        F.setProperty(x, C[B + 1])
                    }
                }
            }
        }
        return F.getComputedStyles()
    };
    m.FONT_CSS_REGEXP = /(.*?)(\w+)(\/\w+)?\s+(['"]?[\w\uac00-\ud7a3]+['"]?)$/;
    m.NORMAL_VALUE = "normal";
    m.prototype.isEmpty = function () {
        return this.empty
    };
    m.prototype.setProperty = function (e, x) {
        if (/^font$/i.test(e)) {
            var y = this.fromShorthand(x);
            if (y) {
                this.shorthand = true;
                s(this.properties, this.fromShorthand(x))
            }
        } else {
            this.properties[e] = x
        }
        this.empty = false
    };
    m.prototype.getComputedStyles = function () {
        if (this.shorthand) {
            return this.toShorthand()
        } else {
            return s({}, this.properties)
        }
    };
    m.prototype.fromShorthand = function (z) {
        var x = z.indexOf(","),
            y = "";
        if (x > 0) {
            y = z.substring(x);
            z = z.substring(0, x)
        }
        var C = z.match(m.FONT_CSS_REGEXP);
        if (C === j) {
            return j
        }
        var B = m.NORMAL_VALUE;
        var e = {
            fontSize: C[2],
            lineHeight: (C[3] || B).replace("/", ""),
            fontFamily: C[4] + y,
            fontWeight: B,
            fontStyle: B,
            fontVariant: B
        };
        var A = C[1];
        if (/bold|700/i.test(A)) {
            e.fontWeight = "bold"
        }
        if (/italic/i.test(A)) {
            e.fontStyle = "italic"
        }
        if (/small-caps/i.test(A)) {
            e.fontVarient = "small-caps"
        }
        return e
    };
    m.prototype.toShorthand = function () {
        var z = s({}, this.properties);
        var y = m.NORMAL_VALUE;
        var x = [];
        ["fontWeight", "fontStyle", "fontVarient"].each(function (A) {
            if (z[A] != y) {
                x.push(z[A])
            }
        });
        if (z.lineHeight != y) {
            x.push(z.fontSize + "/" + z.lineHeight)
        } else {
            x.push(z.fontSize)
        }
        x.push(z.fontFamily);
        ["fontWeight", "fontStyle", "fontVarient", "fontSize", "lineHeight", "fontFamily"].each(function (A) {
            delete z[A]
        });
        var e = {
            font: x.join(" ")
        };
        e = s(e, z);
        return e
    };
    var h = {
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
        define: function (e, x) {
            return Object.extend(e, x)
        },
        available: function (x, e) {
            if (!u("tx_" + e)) {
                return d
            }
            if (!x) {
                return d
            }
            if (x.use == d) {
                return d
            }
            return v
        },
        getSWF: i.getSWF
    };
    (function (x) {
        function y(A) {
            var z = A;
            while (z.$reference) {
                z = z.$reference
            }
            return z
        }

        function e(D) {
            var B = D.constructor.superclass;
            if (B) {
                var F = B.prototype.initialize;
                B.prototype.initialize = function () {
                    this.$reference = D
                };
                var E = new B();
                B.prototype.initialize = F;
                var A = function (G) {
                    if (!E[G]) {
                        return j
                    }
                    return function () {
                        var K = arguments;
                        var J = y(D);
                        var H = J.$super;
                        J.$super = E.$super;
                        var I = E[G].apply(J, K);
                        J.$super = H;
                        return I
                    }
                };
                var C = {};
                for (var z in E) {
                    if (z.charAt(0) != "$") {
                        if (typeof (E[z]) == "function") {
                            C[z] = A(z)
                        }
                    }
                }
                D.$super = C
            }
        }
        x.Class = {
            create: function (A) {
                var z = function () {
                    var C = this.constructor.prototype;
                    for (var B in C) {
                        if (C[B] && typeof (C[B]) === "object") {
                            if (C[B].constructor == Array) {
                                this[B] = [].concat(C[B])
                            } else {
                                this[B] = Object.extend({}, C[B])
                            }
                        }
                    }
                    e(this);
                    var D = arguments;
                    this.initialize.apply(this, D)
                };
                return x.Class.draft(A, z)
            },
            draft: function (C, D) {
                var A = D ? D : function () {
                    e(this)
                };
                if (C.$const) {
                    Object.extend(A, C.$const)
                }
                if (C.$extend) {
                    Object.extend(A.prototype, C.$extend.prototype);
                    A.superclass = C.$extend
                }
                if (C.$mixins) {
                    var B = $A(C.$mixins);
                    B.each(function (E) {
                        Object.extend(A.prototype, E)
                    })
                }
                for (var z in C) {
                    if (z.charAt(0) != "$") {
                        A.prototype[z] = C[z]
                    }
                }
                return A
            },
            overwrite: function (A, z) {
                if (A.prototype) {
                    Object.extend(A.prototype, z)
                }
                return A
            }
        };
        x.Mixin = x.Faculty = {
            create: function (B) {
                var A = {};
                for (var z in B) {
                    if (B[z] && typeof (B[z]) === "object") {
                        if (B[z].constructor == Array) {
                            A[z] = [].concat(B[z])
                        } else {
                            A[z] = Object.extend({}, B[z])
                        }
                    } else {
                        A[z] = B[z]
                    }
                }
                return A
            },
            toClass: function (z, A) {
                return x.Class.create(Object.extend({
                    initialize: A ? A : function () {}
                }, z))
            }
        }
    })(h);
    (function (e) {
        Object.extend(e, {
            installs: [],
            registers: [],
            modules: [],
            modulesX: [],
            install: function (y, x) {
                x.desc = "[install] " + y;
                e.installs.push(x)
            },
            register: function (y, x) {
                x.desc = "[register] " + y;
                e.registers.push(x)
            },
            module: function (y, x) {
                x.desc = "[module] " + y;
                e.modules.push(x)
            },
            moduleX: function (y, x) {
                x.desc = "[moduleX] " + y;
                e.modulesX.push(x)
            },
            invoke: function (F, B, E, x, y, z) {
                for (var A = 0, C = F.length; A < C; A++) {
                    var D = F[A];
                    D(B, E, x, y, z)
                }
            },
            invokeInstallation: function (z, A, B, y, x) {
                e.invoke(e.installs, z, A, B, y, x)
            },
            invokeRegisters: function (z, A, B, y, x) {
                e.invoke(e.registers, z, A, B, y, x)
            },
            invokeModules: function (z, A, B, y, x) {
                e.invoke(e.modules, z, A, B, y, x)
            },
            group: function () {},
            groupEnd: function () {}
        })
    })(h);
    i.Trex = h;
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
    })(h);
    var l = {
        fire: function (y, e) {
            if (y && y.tagName) {
                var x = e[y.tagName.toLowerCase()];
                if (x) {
                    x(y, e)
                } else {
                    l.propagateToParent(y, e)
                }
            } else {}
        },
        propagateToParent: function (x, e) {
            var z = x.parentNode;
            if (z && z.tagName && z.tagName.toLowerCase) {
                var y = e[z.tagName.toLowerCase()];
                if (y) {
                    y(z, e)
                } else {
                    l.propagateToParent(z, e)
                }
            }
        },
        stopPropagation: function () {}
    };
    var n = function (y, z, e, x) {
        return {
            data: y,
            style: {
                padding: z,
                backgroundColor: e,
                border: x
            }
        }
    };
    h.__CONFIG_COMMON = {
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
            options: [n("txc-textbox1", "10px", "#ffffff", "1px solid #f7f7f7"), n("txc-textbox2", "10px", "#eeeeee", "1px solid #eeeeee"), n("txc-textbox3", "10px", "#fefeb8", "1px solid #fefeb8"), n("txc-textbox4", "10px", "#fedec7", "1px solid #fedec7"), n("txc-textbox5", "10px", "#e7fdb5", "1px solid #e7fdb5"), n("txc-textbox6", "10px", "#dbe8fb", "1px solid #dbe8fb"), n("txc-textbox7", "10px", "#ffffff", "1px dashed #cbcbcb"), n("txc-textbox8", "10px", "#eeeeee", "1px dashed #c1c1c1"), n("txc-textbox9", "10px", "#fefeb8", "1px dashed #f3c534"), n("txc-textbox10", "10px", "#fedec7", "1px dashed #fe8943"), n("txc-textbox11", "10px", "#e7fdb5", "1px dashed #9fd331"), n("txc-textbox12", "10px", "#dbe8fb", "1px dashed #79a5e4"), n("txc-textbox13", "10px", "#ffffff", "1px solid #cbcbcb"), n("txc-textbox14", "10px", "#eeeeee", "1px solid #c1c1c1"), n("txc-textbox15", "10px", "#fefeb8", "1px solid #f3c534"), n("txc-textbox16", "10px", "#fedec7", "1px solid #fe8943"), n("txc-textbox17", "10px", "#e7fdb5", "1px solid #9fd331"), n("txc-textbox18", "10px", "#dbe8fb", "1px solid #79a5e4"), n("txc-textbox19", "10px", "#ffffff", "3px double #cbcbcb"), n("txc-textbox20", "10px", "#eeeeee", "3px double #c1c1c1"), n("txc-textbox21", "10px", "#fefeb8", "3px double #f3c534"), n("txc-textbox22", "10px", "#fedec7", "3px double #fe8943"), n("txc-textbox23", "10px", "#e7fdb5", "3px double #9fd331"), n("txc-textbox24", "10px", "#dbe8fb", "3px double #79a5e4")]
        }
    };
    var q = function () {
        var x = d;
        var e = [];
        var C = {};
        var F = {
            dinoHost: "http://editor.daum.net",
            cdnHost: "http://s1.daumcdn.net/editor",
            wrapper: "tx_trex_container",
            form: "tx_editor_form",
            txIconPath: "images/icon/editor/",
            txDecoPath: "images/deco/contents/",
            params: [],
            events: {
                preventUnload: v,
                useHotKey: v
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
        var z = function () {
            return {
                Tool: F.toolbar,
                Sidebar: F.sidebar,
                Plugin: F.plugin,
                Adaptor: F.adaptor,
                Save: F.save,
                Attacher: F.sidebar.attacher,
                Embeder: F.sidebar.embeder,
                Searcher: F.sidebar.searcher
            }
        };
        var E = function (I, H) {
            if (x) {
                throw new Error("configure is already setup (addParameter)")
            }
            C[I] = H
        };
        var y = {
            getUrl: function (J, K) {
                if (J == j) {
                    return j
                }
                J = J.replace(/#host#path\/pages\//g, EditorJSLoader.getPageBasePath());
                J = J.replace(/#host/g, F.txHost);
                J = J.replace(/#path\/?/g, F.txPath);
                J = J.replace(/#cmnhost/g, F.dinoHost);
                J = J.replace(/#cdnhost/g, F.cdnHost);
                for (var H in C) {
                    J = J.replace(new RegExp("#".concat(H), "g"), F[C[H]])
                }
                if (K) {
                    for (var I in K) {
                        J = J.replace(new RegExp("#".concat(I), "g"), K[I])
                    }
                }
                return J
            },
            getPopFeatures: function (H) {
                if (H == j) {
                    return j
                }
                if (typeof (H) === "string") {
                    return H
                }
                var I = [];
                ["toolbar", "location", "directories", "menubar"].each(function (J) {
                    I.push(J + "=" + (H[J] || "no"))
                });
                ["scrollbars", "resizable"].each(function (J) {
                    I.push(J + "=" + (H[J] || "yes"))
                });
                ["width", "height"].each(function (J) {
                    I.push(J + "=" + (H[J] || "500"))
                });
                ["left", "top"].each(function (J) {
                    I.push(J + "=" + (H[J] || "100"))
                });
                return I.join(",")
            },
            getDecoPath: function (H) {
                return H.replace(/#decopath\/?/, this.getUrl(F.txDecoPath))
            },
            getIconPath: function (H) {
                return H.replace(/#iconpath\/?/, this.getUrl(F.txIconPath))
            },
            setup: function (H) {
                u.deepcopy(F, H);
                F.params.each(function (I) {
                    E(I, I)
                });
                e.each(function (I) {
                    I(F)
                });
                x = v;
                this.setupVersion();
                return F
            },
            setupVersion: function () {
                F.txVersion = Editor.version
            },
            addParameter: function (I, H) {
                E(I, H)
            },
            clone: function (H) {
                return u.deepcopy({}, H)
            },
            merge: function () {
                var H = {};
                $A(arguments).each(function (I) {
                    u.deepcopy(H, I)
                });
                return H
            }
        };
        y.add = function (H, I) {
            if (x) {
                throw new Error("configure is already setup (mergeConfig)")
            }
            u.deepcopy(F, H);
            if (I) {
                e.push(I)
            }
        };
        y.get = function (H) {
            return F[H]
        };
        var B = function (I, H, J) {
            if (x) {
                throw new Error("configure is already setup (mergeConfig)")
            }
            this[I] = this[I] || {};
            u.deepcopy(this[I], H);
            if (J) {
                e.push(J)
            }
        };
        var A = function (H) {
            return this[H]
        };
        var G = z();
        for (var D in G) {
            y["add" + D] = B.bind(G[D]);
            y["get" + D] = A.bind(G[D])
        }
        return y
    }();
    i.TrexConfig = q;
    var k = function () {
        var y = {};

        function e(z) {
            return (z.indexOf("#iconpath") > -1) ? q.getIconPath(z) : z
        }

        function x(z) {
            return (z.indexOf("#decopath") > -1) ? q.getDecoPath(z) : z
        }
        return {
            getMsg: function (A) {
                var z = y[A] || "";
                return e(x(z))
            },
            addMsg: function (z) {
                u.deepcopy(y, z)
            },
            printAll: function () {
                for (var z in y) {
                    if (y.hasOwnProperty(z)) {}
                }
            }
        }
    }();
    i.TXMSG = k.getMsg;
    i.TrexMessage = k;
    var p = function (e) {
        this.config = e || {}
    };
    p.prototype.set = function (C, B) {
        var A = C.split(".");
        var e = A[A.length - 1];
        var x = this.config;
        for (var z = 0; z < A.length - 1; z++) {
            var y = A[z];
            if (!x[y]) {
                x[y] = {}
            }
            x = x[y]
        }
        if (u.isPrimitiveType(B)) {
            x[e] = B
        } else {
            if (!x[e]) {
                x[e] = {}
            }
            u.deepcopy(x[e], B)
        }
    };
    p.prototype.getConfig = function () {
        return this.config
    };
    i.EditorConfigBuilder = p;
    h.MarkupTemplate = {};
    (function () {
        var e = {};
        h.define(h.MarkupTemplate, {
            add: function (x, y) {
                e[x] = y
            },
            get: function (x) {
                if (!e[x]) {
                    return {
                        evaluate: function () {
                            return ""
                        },
                        evaluateToDom: function () {
                            return ""
                        }
                    }
                }
                if (typeof (e[x]) == "string") {
                    var y = e[x].replace(/@[\w\.]+/g, function (z) {
                        return TXMSG(z)
                    });
                    e[x] = new Template(y)
                }
                return e[x]
            },
            splitList: function (G, C, A) {
                var z = {
                    row: []
                };
                var E = A.length;
                var D = z.row;
                for (var F = 0; F < G; F++) {
                    D.push({
                        col: []
                    });
                    var x = D.last().col;
                    for (var y = 0; y < C; y++) {
                        var B = {
                            image: "",
                            data: "&nbsp;",
                            klass: ""
                        };
                        if (F * C + y < E) {
                            if (typeof (A[F * C + y]) == "string") {
                                B.data = A[F * C + y]
                            } else {
                                B = Object.extend(B, A[F * C + y])
                            }
                        }
                        x.push(B)
                    }
                }
                return z
            }
        })
    })();
    var w = {};
    (function () {
        var B = {
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
        var x = {};
        for (var y in B) {
            x[y] = {};
            if (B[y]) {
                $A(B[y]).each(function (C) {
                    x[y][C] = v
                })
            }
        }

        function e(C) {
            var E = {};
            var D = C.split(",");
            D.each(function (G) {
                if (x[G]) {
                    for (var F in x[G]) {
                        E[F] = v
                    }
                } else {
                    E[G] = v
                }
            });
            return E
        }
        var A = h.Class.create({
            initialize: function (C) {
                this.patterns = C;
                this.map = e(C)
            },
            hasParts: function () {
                return (this.patterns.length > 0)
            },
            include: function (E) {
                var D = e(E);
                for (var C in D) {
                    if (this.map[C]) {
                        return v
                    }
                }
                return d
            },
            memberOf: function (E) {
                var D = e(E);
                for (var C in this.map) {
                    if (D[C]) {
                        return v
                    }
                }
                return d
            },
            extract: function (F) {
                var E = e(F);
                var D = [];
                for (var C in this.map) {
                    if (E[C]) {
                        D.push(C)
                    }
                }
                return w.translate(D.join(","))
            },
            getExpression: function () {
                if (!this.exprs) {
                    var D = [];
                    for (var C in this.map) {
                        D.push(C)
                    }
                    this.exprs = D.join(",")
                }
                return this.exprs
            }
        });
        var z = {};
        Object.extend(w, {
            translate: function (C) {
                if (!z[C]) {
                    z[C] = new A(C)
                }
                return z[C]
            }
        })
    })();
    Object.extend(w, {
        __POSITION: {
            __START_OF_TEXT: -1,
            __MIDDLE_OF_TEXT: 0,
            __END_OF_TEXT: 1,
            __EMPTY_TEXT: -2
        }
    });
    Object.extend(w, {
        isElement: function (e) {
            return e && e.nodeType == 1
        },
        isBody: function (e) {
            return w.isElement(e) && e.tagName == "BODY"
        },
        isBlock: function (e) {
            return w.kindOf(e, "%block")
        },
        isParagraph: function (e) {
            return w.kindOf(e, "%paragraph")
        },
        isText: function (e) {
            return w.kindOf(e, "%text")
        },
        isControl: function (e) {
            return w.kindOf(e, "%control")
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
        indexOf: function (y) {
            if (!y) {
                return -1
            }
            var A = y.parentNode;
            for (var x = 0, e = A.childNodes.length, z = A.childNodes; x < e; x++) {
                if (z[x] == y) {
                    return x
                }
            }
            return -1
        },
        hasContent: function (x, e) {
            if (!x || x.nodeType != 3) {
                return v
            }
            var y = w.removeMeaninglessSpace(x.nodeValue);
            if (e) {
                y = y.replace(h.__WORD_JOINER_REGEXP, "")
            }
            return (y != "")
        },
        removeEmptyTextNode: function (e) {
            if (e && e.nodeType == 3 && !e.nodeValue) {
                w.remove(e)
            }
        },
        hasUsefulChildren: function (x, e) {
            if (!x) {
                return d
            }
            var y = w.removeMeaninglessSpace(x.innerHTML);
            if (e) {
                y = y.replace(h.__WORD_JOINER_REGEXP, "")
            }
            if (!y) {
                return d
            }
            if (y.stripTags()) {
                return v
            }
            if (y.search(/<(img|br|hr)\s?[^>]*>/i) > -1) {
                return v
            }
            if (y.search(/<span\sid="?tx_(start|end)_marker"?><\/span>/i) > -1) {
                return v
            }
            return d
        },
        hasData: function (x, e) {
            if (!x) {
                return d
            }
            var y = "";
            if (x.nodeType == 1) {
                y = x.innerHTML
            } else {
                y = x.nodeValue
            }
            y = w.removeMeaninglessSpace(y);
            if (y == "") {
                return d
            }
            if (y.stripTags() != "") {
                return v
            }
            if (e) {
                return d
            }
            if (y.search(/<br\s?\/?>/i) > -1) {
                return v
            }
            return d
        },
        removeMeaninglessSpace: function (e) {
            return e.replace(/(^[\f\n\r\t\v\u2028\u2029]*)|([\f\n\r\t\v\u2028\u2029]*$)/g, "")
        }
    });
    Object.extend(w, {
        search: function (z, C, e) {
            var A = (z.length == 1) ? c : z[0];
            var B = z[z.length - 1];
            var y = (!B || !A || !A.nodeType || typeof B != "string");
            if (y) {
                return e
            }
            var x = w.translate(B);
            return C(A, x.getExpression())
        },
        find: function () {
            return this.search(arguments, dFindy, j)
        },
        collect: function () {
            return this.search(arguments, dGetty, j)
        },
        collectAll: function () {
            return this.search(arguments, dGetties, [])
        }
    });
    (function () {
        function y(A) {
            if (A) {
                if (typeof (A) === "function") {
                    return A
                } else {
                    var B = w.translate(A);
                    return function (C) {
                        if (C.nodeType == 1) {
                            if (B.include("#element")) {
                                return v
                            } else {
                                return dChecky(C, B.getExpression())
                            }
                        } else {
                            return B.include("#text")
                        }
                    }
                }
            } else {
                return j
            }
        }
        var z = {};

        function e(B) {
            B = B || "#element,#text";
            if (z[B]) {
                return z[B]
            }
            var A = new x(B);
            z[B] = A;
            return A
        }
        var x = h.Class.create({
            initialize: function (A) {
                this.pattern = A;
                this.translator = w.translate(A);
                this.hasClassPattern = A.indexOf(".") >= 0;
                this.hasIdPattern = A.indexOf("#") >= 0;
                this.matchesText = this.translator.include("#text");
                this.matchesElement = this.translator.include("#element")
            },
            test: function (D) {
                var A = D.nodeType;
                var F = this.translator.map;
                if (A == 1) {
                    if (this.matchesElement) {
                        return v
                    }
                    var C = D.tagName.toLowerCase();
                    if (F[C]) {
                        return v
                    }
                    var E = [];
                    if (this.hasClassPattern && D.className) {
                        D.className.split(/\s/).each(function (H) {
                            E.push("." + H);
                            E.push(C + "." + H)
                        })
                    }
                    if (this.hasIdPattern && D.id) {
                        var G = D.id;
                        E.push("#" + G);
                        E.push(C + "#" + G)
                    }
                    for (var B = 0; B < E.length; B++) {
                        if (F[E[B]]) {
                            return v
                        }
                    }
                    return d
                } else {
                    if (A == 3) {
                        return this.matchesText
                    }
                }
            }
        });
        Object.extend(w, {
            tagName: function (B, A) {
                if (!B) {
                    return j
                }
                return B.tagName
            },
            kindOf: function (B, C) {
                if (!B || !C) {
                    return d
                }
                var A = e(C);
                return A.test(B)
            },
            kindOf_old: function (A, B) {
                if (!A || !B) {
                    return d
                }
                return y(B)(A)
            },
            ancestor: function (C, D) {
                if (!C || !C.parentNode) {
                    return j
                }
                var B = e(D);
                var A = C.parentNode;
                while (A) {
                    if (w.isBody(A)) {
                        return j
                    }
                    if (B.test(A)) {
                        break
                    }
                    A = A.parentNode
                }
                return A
            },
            findAncestor: function (C, A, B) {
                while (!B(C)) {
                    if (A(C)) {
                        return C
                    }
                    C = C.parentNode
                }
                return j
            },
            descendant: function (A, B) {
                var C = w.descendants(A, B, v);
                if (C.length == 0) {
                    return j
                }
                return C[0]
            },
            descendants: function (B, E, G) {
                G = G || d;
                if (!B || !B.firstChild) {
                    return []
                }
                var A = d;
                var C = e(E);
                var F = [];
                var D = function (J) {
                    if (G && A) {
                        return
                    }
                    if (!w.first(J)) {
                        return
                    }
                    var K = w.children(J);
                    for (var I = 0, H = K.length; I < H; I++) {
                        if (C.test(K[I])) {
                            F.push(K[I]);
                            A = v
                        } else {
                            D(K[I])
                        }
                    }
                };
                D(B);
                return F
            },
            children: function (C, D) {
                var E = [];
                if (!C || !C.firstChild) {
                    return E
                }
                var B = e(D);
                var A = w.first(C);
                while (A) {
                    if (B.test(A)) {
                        E.push(A)
                    }
                    A = A.nextSibling
                }
                return E
            },
            next: function (C, D) {
                if (!C || !C.nextSibling) {
                    return j
                }
                var B = e(D);
                var A = C.nextSibling;
                while (A) {
                    if (w.hasContent(A)) {
                        if (B.test(A)) {
                            break
                        }
                    }
                    A = A.nextSibling
                }
                return A
            },
            previous: function (C, D) {
                if (!C || !C.previousSibling) {
                    return j
                }
                var B = e(D);
                var A = C.previousSibling;
                while (A) {
                    if (w.hasContent(A)) {
                        if (B.test(A)) {
                            break
                        }
                    }
                    A = A.previousSibling
                }
                return A
            },
            first: function (C, D) {
                if (!C || !C.firstChild) {
                    return j
                }
                var B = e(D);
                var A = C.firstChild;
                while (A) {
                    if (w.hasContent(A)) {
                        if (B.test(A)) {
                            break
                        }
                    }
                    A = A.nextSibling
                }
                return A
            },
            last: function (C, D) {
                if (!C || !C.lastChild) {
                    return j
                }
                var B = e(D);
                var A = C.lastChild;
                while (A) {
                    if (w.hasContent(A)) {
                        if (B.test(A)) {
                            break
                        }
                    }
                    A = A.previousSibling
                }
                return A
            },
            extract: function (D, G, E) {
                var F = [];
                if (!D || !G || !E) {
                    return F
                }
                var C = e(E);
                var A = d;
                var B = D.firstChild;
                while (B) {
                    if (w.include(B, G)) {
                        A = v
                    }
                    if (C.test(B)) {
                        F.push(B)
                    } else {
                        if (A) {
                            break
                        } else {
                            F = []
                        }
                    }
                    B = B.nextSibling
                }
                return A ? F : []
            },
            parent: function (A) {
                if (!A || !A.parentNode) {
                    return j
                }
                return A.parentNode
            },
            body: function (B) {
                if (!B || !B.parentNode) {
                    return j
                }
                var A = B.parentNode;
                while (A) {
                    if (w.isBody(A)) {
                        return A
                    }
                    A = A.parentNode
                }
                return j
            },
            top: function (B, C) {
                C = C || d;
                var A = B;
                while (w.first(A)) {
                    A = w.first(A)
                }
                if (C) {
                    return A
                } else {
                    if (w.kindOf(A, "#tx_start_marker,#tx_end_marker")) {
                        A = A.nextSibling || A.parentNode
                    } else {
                        if (w.kindOf(A, "%control")) {
                            A = A.parentNode
                        }
                    }
                    return A
                }
            },
            bottom: function (B, C) {
                C = C || d;
                var A = B;
                while (w.last(A)) {
                    A = w.last(A)
                }
                if (C) {
                    return A
                } else {
                    if (w.kindOf(A, "#tx_start_marker,#tx_end_marker")) {
                        A = A.previousSibling || A.parentNode
                    } else {
                        if (w.kindOf(A, "%control")) {
                            A = A.parentNode
                        }
                    }
                    return A
                }
            },
            include: function (B, C) {
                if (!B || !C) {
                    return d
                }
                if (B == C) {
                    return v
                }
                var A = C;
                while (A) {
                    if (w.isBody(A)) {
                        return d
                    } else {
                        if (A == B) {
                            return v
                        }
                    }
                    A = A.parentNode
                }
                return d
            }
        })
    })();
    Object.extend(w, {
        insertFirst: function (e, x) {
            if (!e || !x) {
                return
            }
            if (e.firstChild) {
                e.insertBefore(x, e.firstChild)
            } else {
                e.appendChild(x)
            }
            return x
        },
        insertAt: function (e, x) {
            if (!e || !x) {
                return
            }
            x.parentNode.insertBefore(e, x);
            return e
        },
        insertNext: function (x, y) {
            if (!x || !y) {
                return
            }
            var e = y.nextSibling;
            if (e) {
                e.parentNode.insertBefore(x, e)
            } else {
                y.parentNode.appendChild(x)
            }
            return x
        },
        append: function (e, x) {
            if (!e || !x) {
                return
            }
            e.appendChild(x);
            return x
        },
        remove: function (e) {
            if (!e) {
                return
            }
            if (e.parentNode) {
                e.parentNode.removeChild(e)
            }
            e = j
        },
        html: function (x, e) {
            if (!x) {
                return
            }
            x.innerHTML = e || "";
            return x
        },
        clean: function (e) {
            return w.html(e)
        },
        stuff: function (y, x) {
            if (!y) {
                return y
            }
            if (w.hasUsefulChildren(y, v)) {
                return y
            }
            if (y.lastChild) {
                var e = y;
                while (e.lastChild) {
                    e = e.lastChild
                }
                w.insertNext(x, e)
            } else {
                w.append(y, x)
            }
            return y
        }
    });
    Object.extend(w, {
        removeListIfEmpty: function (e) {
            while (w.kindOf(e, "%listhead") && e.childNodes.length == 1 && w.kindOf(e.firstChild, "%listhead")) {
                e = e.firstChild
            }
            while (w.kindOf(e, "%listhead") && e.childNodes.length == 0) {
                var x = e.parentNode;
                w.remove(e);
                e = x
            }
        }
    });
    Object.extend(w, {
        moveChild: function (e, y, x, A) {
            if (!e || !y) {
                return
            }
            x = Math.min(Math.max(x || 0), e.childNodes.length);
            A = Math.min(Math.max(A || e.childNodes.length), e.childNodes.length);
            if (x >= A) {
                return
            }
            var z = x;
            while (z++ < A && x < e.childNodes.length) {
                y.appendChild(e.childNodes[x])
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
    Object.extend(w, {
        replace: function (A, B) {
            if (!A || !B) {
                return j
            }
            if (w.getName(A) == w.getName(B)) {
                w.remove(B);
                return A
            } else {
                var y = [],
                    C = A.childNodes,
                    e = C.length;
                for (var x = 0; x < e; x++) {
                    y.push(C[x])
                }
                for (x = 0; x < e; x++) {
                    var D = y[x];
                    if (D.lastChild === A) {
                        var z = w.clone(D);
                        w.moveChild(D, z);
                        D.innerHTML = "";
                        B.appendChild(z)
                    } else {
                        B.appendChild(D)
                    }
                }
                w.insertAt(B, A);
                w.remove(A);
                return B
            }
        },
        clone: function (y, e) {
            var x = y.cloneNode(!!e);
            if (y.nodeType == 1) {
                x.removeAttribute("id")
            }
            return x
        }
    });
    Object.extend(w, {
        wrap: function (e, x) {
            if (!e || !x) {
                return j
            }
            if (x instanceof Array == d) {
                x = [].concat(x)
            }
            w.insertAt(e, x[0]);
            x.each((function (y) {
                w.append(e, y)
            }));
            return e
        },
        unwrap: function (e) {
            if (!e) {
                return j
            }
            var x = w.first(e);
            if (u.msie) {
                e.removeNode()
            } else {
                w.moveChildToParent(e);
                w.remove(e)
            }
            return x
        }
    });
    Object.extend(w, {
        divideText: function (x, y) {
            if (!w.isText(x)) {
                return x
            }
            if (y <= 0 || y >= x.length) {
                return x
            }
            var e = x.cloneNode(d);
            x.deleteData(y, x.length - y);
            e.deleteData(0, y);
            w.insertNext(e, x);
            return e
        },
        divideNode: function (z, A) {
            if (!w.isElement(z)) {
                return j
            }
            var x = z.childNodes.length - A;
            var e = z.cloneNode(d);
            for (var y = 0; y < x; y++) {
                w.insertFirst(e, z.lastChild)
            }
            w.insertNext(e, z);
            return e
        },
        splitAt: function (x, e) {
            if (!w.isElement(x)) {
                return
            }
            var y = w.clone(x);
            w.moveChild(x, y, e + 1, x.childNodes.length);
            w.insertNext(y, x);
            return y
        },
        divideTree: function (e, z) {
            var x = z,
                A, y;
            do {
                y = x.parentNode;
                A = w.indexOf(x);
                x = w.divideNode(y, A)
            } while (x.previousSibling != e);
            return x
        },
        divideParagraph: function (z) {
            var x = z;
            var e = w.indexOf(z);
            var y = x;
            while (x) {
                if (w.isBody(x)) {
                    break
                } else {
                    if (w.kindOf(x, "td,th,%wrapper,%outergroup")) {
                        break
                    } else {
                        if (w.kindOf(x, "#tx_start_marker,#tx_end_marker")) {
                            e = w.indexOf(x)
                        } else {
                            if (w.isControl(x)) {
                                e = w.indexOf(x)
                            } else {
                                if (w.isText(x)) {
                                    x = w.divideText(x, e);
                                    e = w.indexOf(x)
                                } else {
                                    x = w.divideNode(x, e);
                                    e = w.indexOf(x);
                                    y = x;
                                    if (w.kindOf(x, "p,li,dd,dt,h1,h2,h3,h4,h5,h6")) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                x = x.parentNode
            }
            return y
        },
        wrapInlinesWithP: function (A, z) {
            var e = w.getOwnerDocument(A);
            var y = w.extract(z || e.body, A, "%text,%inline,%control");
            if (this.hasOnlySavedCaret(y, A)) {
                return j
            }
            var x = e.createElement("p");
            w.wrap(x, y);
            return x
        },
        hasOnlySavedCaret: function (e, y) {
            var x = e.findAll(function (z) {
                return z.nodeType != 3 || z.nodeValue.trim() != ""
            });
            return this.isGoogRangeCaret(y) && x.length == 1 && x[0] == y
        },
        isGoogRangeCaret: function (e) {
            return e && /goog_[0-9]+/.test(e.id)
        }
    });
    Object.extend(w, {
        paragraphOf: function (e) {
            if (!e) {
                return "p"
            }
            var x = w.translate(e);
            if (x.memberOf("ul,ol")) {
                return "li"
            } else {
                if (x.memberOf("dl")) {
                    return "dd"
                } else {
                    if (x.memberOf("tr,tbody,thead,tfoot,table")) {
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
            var x = w.translate(e);
            if (x.memberOf("li")) {
                return "ol"
            } else {
                if (x.memberOf("dd,dt")) {
                    return "dl"
                } else {
                    if (x.memberOf("td,th,tr")) {
                        return "table"
                    } else {
                        return "p"
                    }
                }
            }
        }
    });
    (function () {
        var x = 0;
        var z = h.Class.create({
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
            calculate: function (E, C) {
                if (E == j || E.length == 0) {
                    E = "0em"
                }
                if (C == j || C.length == 0) {
                    C = "0em"
                }
                var H = this.extractSign(C);
                var F = this.extractUnit(E);
                var D = this.extractUnit(C);
                var B = this.extractNumber(E).toNumber();
                var A = this.extractNumber(C).toNumber();
                if (F != D) {
                    if (this.unitConverter[F + "2" + D]) {
                        B *= this.unitConverter[F + "2" + D]
                    }
                }
                var G = 0;
                if (H == "-") {
                    G = Math.max(B - A, 0)
                } else {
                    G = (B + A)
                }
                G = (Math.round(G * 10) / 10);
                if (G == 0) {
                    return j
                } else {
                    return G + D
                }
            },
            needCalculation: function (A) {
                if (A == j || typeof A != "string") {
                    return d
                } else {
                    return (A.charAt(0) == "+" || A.charAt(0) == "-")
                }
            },
            extractSign: function (A) {
                var B = "+";
                if (A.charAt(0) == "+" || A.charAt(0) == "-") {
                    B = A.charAt(0)
                }
                return B
            },
            extractNumber: function (C) {
                var A = 0;
                var B;
                if ((B = C.match(z.__REG_EXT_NUMBER)) != j) {
                    A = B[0]
                }
                if (C.indexOf("%") > -1) {
                    A = A / 100
                }
                return A
            },
            extractUnit: function (C) {
                var A = "em";
                var B;
                if ((B = C.match(z.__REG_EXT_UNIT)) != j) {
                    A = B[0]
                }
                return A
            }
        });
        var y = new z();
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
        Object.extend(w, {
            applyAttributes: function (C, B) {
                if (!w.isElement(C)) {
                    return
                }
                for (var A in B) {
                    if (A == "style") {
                        w.applyStyles(C, B[A])
                    } else {
                        w.setAttribute(C, A, B[A])
                    }
                }
            },
            removeAttributes: function (C, B) {
                if (!w.isElement(C)) {
                    return
                }
                for (var A in B) {
                    if (A == "style") {
                        w.removeStyles(B[A])
                    } else {
                        C.removeAttribute(A, x)
                    }
                }
            },
            getAttribute: function (B, A) {
                if (!w.isElement(B)) {
                    return j
                }
                if (B && B.getAttribute) {
                    return B.getAttribute(e[A] || A)
                } else {
                    return j
                }
            },
            setAttribute: function (B, A, D) {
                if (!w.isElement(B)) {
                    return
                }
                if (D == j || D.length == 0 || D == 0) {
                    B.removeAttribute(A, x)
                } else {
                    if (e[A]) {
                        B.setAttribute(e[A], D)
                    } else {
                        try {
                            B[A] = D
                        } catch (C) {
                            B.setAttribute(e[A] || A, D)
                        }
                    }
                }
            },
            setStyles: function (A, G, D) {
                var E = A.style.cssText;
                var F;
                var I = Object.extend({}, G);
                if (I.font) {
                    if (D) {
                        A.style.font = I.font
                    } else {
                        if (A.style.cssText.indexOf("font:") == -1) {
                            A.style.cssText = "font: " + I.font + "; " + A.style.cssText
                        }
                    }
                    delete I.font
                }
                for (var B in I) {
                    var H;
                    if (y.needCalculation(I[B])) {
                        H = y.calculate(A.style[B], I[B])
                    } else {
                        H = I[B]
                    } if (H == j) {
                        H = ""
                    }
                    if (B == "float") {
                        B = u.msie ? "styleFloat" : "cssFloat"
                    }
                    F = (!A.style[B] && (B.indexOf("font") != 0 || E.indexOf("font:") == -1)) || D;
                    var C = (B == "textDecoration") && !A.style[B].include(H);
                    if (F) {
                        A.style[B] = H
                    } else {
                        if (C) {
                            A.style[B] += " " + H
                        }
                    }
                }
                w._clearUselessStyle(A)
            },
            applyStyles: function (B, A) {
                this.setStyles(B, A, v)
            },
            addStyles: function (B, A) {
                this.setStyles(B, A, d)
            },
            removeStyles: function (E, D) {
                var C = E.style.cssText;
                var B = C;
                for (var A in D) {
                    A = A.replace(/([A-Z])/g, "-$1");
                    C = C.replace(new RegExp("(^| )" + A + "\\s*:[^;]+;? ?", "ig"), "")
                }
                if (B != C) {
                    E.style.cssText = C;
                    w._clearUselessStyle(E)
                }
            },
            _clearUselessStyle: function (A) {
                var B = w.getAttribute(A, "style");
                if (!B) {
                    A.removeAttribute("style", x)
                }
            },
            getStyleText: function (A) {
                return A.style.cssText
            },
            setStyleText: function (A, B) {
                A.style.cssText = B;
                !B && w._clearUselessStyle(A)
            }
        })
    })();
    Object.extend(w, {
        goInto: function (x, e) {
            if (!x || !x.scrollIntoView) {
                return
            }
            x.scrollIntoView(e)
        },
        getScrollTop: function (e) {
            if (!e) {
                return 0
            }
            return (e.documentElement.scrollTop || e.body.scrollTop)
        },
        setScrollTop: function (x, e) {
            if (!x) {
                return
            }
            if (x.documentElement.scrollTop) {
                x.documentElement.scrollTop = e
            } else {
                x.body.scrollTop = e
            }
        },
        getScrollLeft: function (e) {
            if (!e) {
                return 0
            }
            return (e.documentElement.scrollLeft || e.body.scrollLeft)
        },
        setScrollLeft: function (e, x) {
            if (!e) {
                return
            }
            if (e.documentElement.scrollLeft) {
                e.documentElement.scrollLeft = x
            } else {
                e.body.scrollLeft = x
            }
        },
        getPosition: function (A, G) {
            if (!A) {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
            G = !!G;
            A = u(A);
            var E = (G) ? u.cumulativeOffset(A) : u.positionedOffset(A);
            var B;
            var D = A.style.display;
            if (D != "none" && D != j) {
                B = {
                    width: A.offsetWidth,
                    height: A.offsetHeight
                }
            } else {
                var y = A.style;
                var F = y.visibility;
                var C = y.position;
                var x = y.display;
                y.visibility = "hidden";
                y.position = "absolute";
                y.display = "block";
                var e = A.clientWidth;
                var z = A.clientHeight;
                y.display = x;
                y.position = C;
                y.visibility = F;
                B = {
                    width: e,
                    height: z
                }
            }
            return {
                x: E[0],
                y: E[1],
                width: B.width,
                height: B.height
            }
        },
        getWidth: function (x) {
            var e = x.style.width;
            if (e.isPx()) {
                return e.parsePx()
            }
            return x.offsetWidth
        },
        setWidth: function (x, e) {
            w.applyStyles(x, {
                width: e
            })
        },
        getHeight: function (x) {
            var e = x.style.height;
            if (e.isPx()) {
                return e.parsePx()
            }
            return x.offsetHeight
        },
        setHeight: function (x, e) {
            w.applyStyles(x, {
                height: e
            })
        },
        replacePngPath: function (z) {
            if (u.msie6) {
                if (c.location.href.indexOf("http://") > -1) {
                    return
                }
                try {
                    var C = u.getStyle(z, "filter");
                    var y = /src='([^']+)'/.exec(C)[1];
                    if (!y || y == "none") {
                        return
                    } else {
                        if (y.indexOf("http://") > -1) {
                            return
                        }
                    }
                    var x = c.location.href.split("/");
                    x.push("css");
                    x.pop();
                    y = y.replace(/\.\.\//g, function () {
                        x.pop();
                        return ""
                    });
                    var A = x.join("/") + "/" + y;
                    z.style.filter = C.replace(/src='([^']+)'/, "src='" + A + "'")
                } catch (B) {
                    alert(B)
                }
            }
        }
    });
    Object.extend(w, {
        EMPTY_PARAGRAPH_HTML: (u.msie ? "<p>&nbsp;</p>" : "<p><br></p>")
    });
    i.$tom = w;
    (function (e) {
        e.Util = {
            _dispElIds: [],
            getDispElId: function () {
                var y;
                do {
                    y = "tx_entry_" + (Math.floor(Math.random() * 90000) + 10000) + "_"
                } while (e.Util._dispElIds.contains(y));
                e.Util._dispElIds.push(y);
                return y
            },
            generateKey: function () {
                return parseInt(Math.random() * 100000000)
            },
            toStyleString: function (z) {
                var A = [];
                for (var y in z) {
                    if (z[y]) {
                        A.push(y.replace(/([A-Z])/g, "-$1").toLowerCase());
                        A.push(":");
                        A.push(z[y]);
                        A.push(";")
                    }
                }
                return A.join("")
            },
            toAttrString: function (z) {
                var A = [];
                for (var y in z) {
                    if (z[y]) {
                        A.push(" " + y + '="' + z[y] + '"')
                    }
                }
                return A.join("")
            },
            getMatchValue: function (A, z, B) {
                var y;
                if ((y = A.exec(z)) != j) {
                    return y[B]
                } else {
                    return j
                }
            },
            getAttachmentType: function (z) {
                z = (z || "").toLowerCase();
                var y = ["image/jpg", "image/jpeg", "image/png", "image/tiff", "image/gif", "image/bmp", "image/x-jg", "image/ief", "image/pict", "jpg", "bmp", "gif", "png"];
                if (y.contains(z)) {
                    return "image"
                }
                return "file"
            },
            thumburl: function (y) {
                y = (y || "").toLowerCase();
                switch (y) {
                case "doc":
                case "docx":
                    return x("#iconpath/pn_word.gif");
                case "xls":
                case "xlsx":
                    return x("#iconpath/pn_xls.gif");
                case "ppt":
                case "pptx":
                    return x("#iconpath/pn_ppt.gif");
                case "pdf":
                    return x("#iconpath/pn_pdf.gif");
                case "txt":
                    return x("#iconpath/pn_txt.gif");
                case "hwp":
                    return x("#iconpath/pn_hwp.gif");
                case "zip":
                case "alz":
                    return x("#iconpath/pn_zip.gif");
                case "mp3":
                case "wav":
                case "ogg":
                case "wma":
                case "mp4":
                case "ape":
                case "ra":
                case "ram":
                    return x("#iconpath/pn_mp3.gif");
                case "avi":
                case "mpeg":
                case "wmv":
                case "asf":
                    return x("#iconpath/pn_movie.gif");
                case "swf":
                    return x("#iconpath/pn_swf.gif");
                case "htm":
                case "html":
                    return x("#iconpath/pn_html.gif");
                case "jpg":
                case "gif":
                case "png":
                case "bmp":
                    return x("#iconpath/pn_etc.gif");
                default:
                    return x("#iconpath/pn_etc.gif")
                }
            },
            prevurl: function (y) {
                y = (y || "").toLowerCase();
                switch (y) {
                case "doc":
                case "docx":
                    return x("#iconpath/p_word_s.gif");
                case "xls":
                case "xlsx":
                    return x("#iconpath/p_xls_s.gif");
                case "ppt":
                case "pptx":
                    return x("#iconpath/p_ppt_s.gif");
                case "pdf":
                    return x("#iconpath/p_pdf_s.gif");
                case "txt":
                    return x("#iconpath/p_txt_s.gif");
                case "hwp":
                    return x("#iconpath/p_hwp_s.gif");
                case "zip":
                case "alz":
                    return x("#iconpath/p_zip_s.gif");
                case "mp3":
                case "wav":
                case "ogg":
                case "wma":
                case "mp4":
                case "ape":
                case "ra":
                case "ram":
                    return x("#iconpath/p_mp3_s.gif");
                case "avi":
                case "mpeg":
                case "wmv":
                case "asf":
                    return x("#iconpath/p_movie_s.gif");
                case "swf":
                    return x("#iconpath/p_swf_s.gif");
                case "htm":
                case "html":
                    return x("#iconpath/p_html_s.gif");
                case "jpg":
                    return x("#iconpath/p_jpg_s.gif");
                case "gif":
                    return x("#iconpath/p_gif_s.gif");
                case "png":
                case "bmp":
                    return x("#iconpath/p_png_s.gif");
                default:
                    return x("#iconpath/p_etc_s.gif")
                }
            },
            getMatchedClassName: function (C, B) {
                var y = d;
                var z = "";
                for (var A = 0; A < B.length; A++) {
                    z = B[A];
                    if (u.hasClassName(C, z)) {
                        y = z;
                        break
                    }
                }
                return y
            },
            getAllAttributesFromEmbed: function (z) {
                var C = {};
                z = z.replace(/<embed|>/ig, "");
                try {
                    var B = /(\w+)=((?:\")[^\"]+(?:\"|$)|(?:')[^']+(?:'|$)|(?:[^\"'][^ \n]+($| |\n)))/ig;
                    var y;
                    while ((y = B.exec(z)) != j) {
                        C[y[1].trim().toLowerCase()] = y[2].replace(/^(\"|')/i, "").replace(/(\"|')$/i, "").trim()
                    }
                } catch (A) {}
                return C
            },
            getAllAttributes: function (A) {
                var B = {};
                var y;
                var z = new RegExp('style="[^"]*(?:width|WIDTH)\\s*:\\s*([0-9]+)px[^"]*"', "g");
                while ((y = z.exec(A)) != j) {
                    B.width = y[1]
                }
                z = new RegExp('style="[^"]*(?:height|HEIGHT)\\s*:\\s*([0-9]+)px[^"]*"', "g");
                while ((y = z.exec(A)) != j) {
                    B.height = y[1]
                }
                z = new RegExp('\\s+([a-zA-Z]+)="([^"]*)"', "g");
                while ((y = z.exec(A)) != j) {
                    if (!B[y[1].toLowerCase()]) {
                        B[y[1].toLowerCase()] = y[2]
                    }
                }
                z = new RegExp("\\s+([a-zA-Z]+)='([^']*)'", "g");
                while ((y = z.exec(A)) != j) {
                    if (!B[y[1].toLowerCase()]) {
                        B[y[1].toLowerCase()] = y[2]
                    }
                }
                z = new RegExp("\\s+([a-zA-Z]+)=([^\\s>]*)", "g");
                while ((y = z.exec(A)) != j) {
                    if (!B[y[1].toLowerCase()]) {
                        B[y[1].toLowerCase()] = y[2]
                    }
                }
                return B
            }
        };
        e.HtmlCreator = {
            createTableMarkup: function (G, C, A) {
                var z = [];
                z.push('<table unselectable="on">');
                z.push("<tbody>");
                var E = A.length;
                var B;
                for (var F = 0; F < G; F++) {
                    z.push("<tr>");
                    for (var y = 0; y < C; y++) {
                        if (F * C + y < E) {
                            B = A[F * C + y];
                            if (B.image) {
                                var D = q.getIconPath(B.image);
                                z.push('<td class="tx-menu-list-item"><a href="javascript:;"><span class="' + (B.klass || "") + '"><img src="' + D + '" data="' + B.data + '"/></span></a></td>')
                            } else {
                                z.push('<td class="tx-menu-list-item"><a href="javascript:;"><span class="' + (B.klass || "") + '">' + B.data + "</span></a></td>")
                            }
                        } else {
                            z.push('<td class="tx-menu-list-item"><a href="javascript:;"><span class="">&nbsp;</span></a></td>')
                        }
                    }
                    z.push("</tr>")
                }
                z.push("</tbody>");
                z.push("</table>");
                return z.join("\n")
            }
        };
        e.String = {
            escapeQuot: function (y) {
                return y.replace(new RegExp('"', "g"), "&quot;").replace(new RegExp("'", "g"), "&#39;")
            },
            unescapeQuot: function (y) {
                return y.replace(new RegExp("&quot;", "gi"), '"').replace(new RegExp("&#39;", "g"), "'")
            },
            htmlspecialchars: function (y) {
                return e.String.escapeQuot(y.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;").replace(new RegExp(">", "g"), "&gt;"))
            },
            unHtmlspecialchars: function (y) {
                return e.String.unescapeQuot(y.replace(new RegExp("&amp;", "gi"), "&").replace(new RegExp("&lt;", "gi"), "<").replace(new RegExp("&gt;", "gi"), ">"))
            },
            parseAttribute: function (z, C) {
                var D = new RegExp("(^|\\W)" + C + '="([^"]*)"', "gi");
                var B = new RegExp("(^|\\W)" + C + "='([^']*)'", "gi");
                var A = new RegExp("(^|\\W)" + C + "=([^\\s>]*)", "gi");
                var y;
                if (y = D.exec(z)) {
                    return y[2]
                } else {
                    if (y = B.exec(z)) {
                        return y[2]
                    } else {
                        if (y = A.exec(z)) {
                            return y[2]
                        } else {
                            return ""
                        }
                    }
                }
            },
            changeAttribute: function (y, C, F) {
                var D = new RegExp("(^|\\W)" + C + '="([^"]*)"', "gi");
                var B = new RegExp("(^|\\W)" + C + "='([^']*)'", "gi");
                var A = new RegExp("(^|\\W)" + C + "=([^\\s>]*)", "gi");
                var z = new RegExp("<([\\w]+\\s*)", "gi");
                var E = d;
                if (y.search(D) > -1) {
                    E = v;
                    y = y.replace(D, F)
                }
                if (y.search(B) > -1) {
                    E = v;
                    y = y.replace(B, F)
                }
                if (y.search(A) > -1) {
                    E = v;
                    y = y.replace(A, F)
                }
                if (!E) {
                    y = y.replace(z, "<$1" + F + " ")
                }
                return y
            }
        };
        e.Validator = e.Class.create({
            initialize: function () {},
            strip: function (y) {
                return y.stripTags().replace(/&nbsp;/g, "").replace(e.__WORD_JOINER_REGEXP, "").trim()
            },
            exists: function (y) {
                if (!y) {
                    return d
                }
                if (this.strip(y) == "") {
                    if (y.search(/<(img|iframe|embed|table|hr|script|TXDB)/i) < 0) {
                        return d
                    }
                }
                return v
            },
            equals: function (y, z) {
                if (!y || !z) {
                    return d
                }
                if (y.search(/<(img|iframe|embed|table|hr|script|TXDB)/i) < 0) {
                    if (this.strip(y) == this.strip(z)) {
                        return v
                    }
                }
                return d
            }
        });
        e.Repeater = e.Class.create({
            initialize: function (y) {
                this.execHandler = y
            },
            start: function (y) {
                if (this.tItv) {
                    this.clear()
                }
                this.tItv = i.setInterval(this.onTimer.bind(this), y)
            },
            clear: function () {
                i.clearInterval(this.tItv);
                this.tItv = j
            },
            onTimer: function () {
                if (this.execHandler != j) {
                    this.execHandler()
                }
            }
        });
        e.Timer = e.Class.create({
            initialize: function (y) {
                this.execHandler = y
            },
            start: function (y) {
                i.setTimeout(this.onTimer.bind(this), y)
            },
            onTimer: function () {
                if (this.execHandler != j) {
                    this.execHandler()
                }
            }
        });
        e.Paging = e.Class.create({
            $const: {
                DEFAULT_PAGE_SIZE: 5,
                DEFAULT_BLOCK_SIZE: 10
            },
            initialize: function (z, y) {
                this.data = z;
                this.currentpage = y.initPage || 1;
                this.totalrow = y.totalrow || this.getTotalRow();
                this.pagesize = y.pagesize || e.Paging.DEFAULT_PAGE_SIZE;
                this.blocksize = y.blocksize || e.Paging.DEFAULT_PAGE_SIZE;
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
                var y = Math.ceil(this.currentpage / this.blocksize);
                return (y < this.totalblock) ? y * this.blocksize + 1 : 0
            },
            getPrevBlock: function () {
                var y = Math.ceil(this.currentpage / this.blocksize);
                return (y > 1) ? (y - 2) * this.blocksize + 1 : 0
            },
            getPageList: function () {
                var z = [];
                var y = Math.ceil(this.currentpage / this.blocksize) - 1;
                var B = (y * this.blocksize + 1);
                var C = Math.min(this.totalpage, (B + this.blocksize - 1));
                for (var A = B; A <= C; A++) {
                    z.push(A)
                }
                return z
            },
            movePage: function (y) {
                this.currentpage = y || this.currentpage
            },
            getOnePageData: function () {
                var y = [];
                var B = (this.currentpage - 1) * this.pagesize;
                var z = Math.min(this.currentpage * this.pagesize, this.totalrow);
                for (var A = B; A < z; A++) {
                    y.push(this.data[A])
                }
                return y
            },
            getTotalRow: function () {
                return this.data.length
            }
        });
        e.Slidebar = e.Class.create({
            initialize: function (y) {
                this.elContext = y.el;
                this.knobWidth = y.knobWidth;
                this.isDisabled = d;
                this.handler = function (A) {
                    if (!this.isDisabled && typeof y.handler == "function") {
                        y.handler(A)
                    }
                };
                this.logicObj = {
                    interval: y.interval || 5,
                    min: y.min || 0,
                    max: y.max || 100
                };
                this.physicObj = {
                    min: 0,
                    width: y.barSize || 100
                };
                this.physicObj.max = this.physicObj.width - this.knobWidth;
                this.physicObj.interval = this.logicObj.interval * this.physicObj.max / this.logicObj.max;
                this.startPos = 0;
                this.startX = 0;
                this.isDrag = d;
                this.result = 0;
                var z = w.collect(this.elContext, "dd.tx-slide");
                w.collect(z, "span.tx-slide-min").innerHTML = "";
                w.collect(z, "span.tx-slide-max").innerHTML = "";
                this.bindEvent();
                this.setKnobPosition(y.defaultValue || y.min || 0)
            },
            regenerate: function (y) {
                y = parseInt(y * this.physicObj.width / this.logicObj.max);
                this.setKnobPosition(y)
            },
            bindEvent: function () {
                var A = w.collect(this.elContext, "dd.tx-slide");
                var z = w.collect(A, "a.tx-slide-prev");
                var y = w.collect(A, "a.tx-slide-next");
                var C = w.collect(A, "div.tx-slide-bar");
                var B = this.elKnob = w.collect(A, "div.tx-slide-knob");
                u.observe(B, "mousedown", function (D) {
                    this.isDrag = v;
                    this.startPos = this.getKnobPosition();
                    this.startX = D.clientX;
                    u.stop(D)
                }.bind(this));
                u.observe(B, "mouseup", function () {
                    this.isDrag = d
                }.bind(this));
                u.observe(this.elContext, "mousemove", function (D) {
                    if (this.isDrag) {
                        this.setKnobPosition(this.startPos + D.clientX - this.startX);
                        u.stop(D);
                        this.handler(this.result)
                    }
                }.bind(this));
                u.observe(z, "click", function (F) {
                    var E = Math.round(this.physicObj.interval) - 1;
                    var D = this;
                    var G = function () {
                        var H = D.getKnobPosition();
                        D.setKnobPosition(H - 1);
                        if (E-- > 0) {
                            setTimeout(G, 10)
                        } else {
                            D.handler(D.result)
                        }
                    };
                    G();
                    u.stop(F)
                }.bind(this));
                u.observe(y, "click", function (F) {
                    var E = Math.round(this.physicObj.interval);
                    var D = this;
                    var G = function () {
                        var H = D.getKnobPosition();
                        D.setKnobPosition(H + 1);
                        if (--E > 0) {
                            setTimeout(G, 10)
                        } else {
                            D.handler(D.result)
                        }
                    };
                    G();
                    u.stop(F)
                }.bind(this));
                u.observe(this.elContext, "mouseup", function () {
                    if (this.isDrag) {
                        this.isDrag = d
                    }
                }.bind(this));
                u.observe(B, "click", function (D) {
                    u.stop(D)
                }.bind(this));
                u.observe(C, "click", function (E) {
                    if (!this.isDrag) {
                        var D = E.layerX || E.x;
                        this.setKnobPosition(D - this.knobWidth / 2);
                        this.handler(this.result)
                    }
                }.bind(this))
            },
            getKnobPosition: function () {
                var y = u.getStyle(this.elKnob, "left");
                return y.parsePx()
            },
            setKnobPosition: function (y) {
                y = (y < this.physicObj.max) ? y : this.physicObj.max;
                y = (y > this.physicObj.min) ? y : this.physicObj.min;
                u.setStyle(this.elKnob, {
                    left: y.toPx()
                });
                this.result = Math.round(y * this.logicObj.interval / this.physicObj.interval)
            },
            setDisable: function () {
                this.isDisabled = v
            },
            setEnable: function () {
                this.isDisabled = d
            },
            getDisabled: function () {
                return this.isDisabled
            }
        });
        e.DynamicSizer = e.Class.create({
            initialize: function (y) {
                this.config = y;
                this.wrapper = y.el;
                this.elEventContext = tx.div({
                    className: "tx-dynamic-sizer-context"
                });
                this.currentSize = {
                    row: 0,
                    col: 0
                };
                this.dynamicSizingEnabled = v;
                if (!y.moveHandler) {
                    y.moveHandler = function () {}
                }
                if (!y.clickHandler) {
                    y.clickHandler = function () {}
                }
                this.wrapper.appendChild(this.elEventContext);
                this.previewTable = new e.DynamicSizer.PreviewTable({
                    parentEl: this.elEventContext,
                    mouseOverHandler: this.changeSize.bind(this),
                    mouseClickHandler: this.selectSize.bind(this)
                })
            },
            clear: function () {
                this.dynamicSizingEnabled = v;
                this.changeSize(0, 0)
            },
            changeSize: function (z, y) {
                if (this.dynamicSizingEnabled) {
                    this.currentSize.row = z;
                    this.currentSize.col = y;
                    this._changeSelectionSize(z, y);
                    this.config.moveHandler(z, y)
                }
            },
            _changeSelectionSize: function (z, y) {
                this.previewTable.moveSelectionPos(z, y)
            },
            toggleDynamicSizing: function () {
                this.dynamicSizingEnabled = !this.dynamicSizingEnabled;
                if (this.dynamicSizingEnabled) {
                    this.selection.enableResize()
                } else {
                    this.selection.disableResize()
                }
            },
            selectSize: function (y) {
                this.config.clickHandler(y, this.currentSize)
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
            initialize: function (z) {
                this.config = z;
                this.elTable = j;
                this.elTable = this.generateTable("tx-event");
                this.elSelection = tx.div({
                    className: "tx-selection"
                }, this.generateTable("tx-selection"));
                var A = this.generateTable("tx-panel");
                this.eventBinding();
                z.parentEl.appendChild(this.elTable);
                z.parentEl.appendChild(this.elSelection);
                z.parentEl.appendChild(A);
                var B = w.getPosition(this.elTable);
                var y = e.DynamicSizer.PreviewTable.MAX_SIZE;
                this.cellSize = {
                    width: Math.round((B.width - B.x) / y.COL),
                    height: (B.height - B.y) / y.ROW
                }
            },
            generateTable: function (C) {
                var A = tx.tbody();
                var z = e.DynamicSizer.PreviewTable;
                for (var B = 0; B < z.MAX_SIZE.ROW; B++) {
                    var E = tx.tr();
                    for (var y = 0; y < z.MAX_SIZE.COL; y++) {
                        var F = tx.td(tx.div({
                            style: z.DEFAULT_TD_STYLE
                        }));
                        F = this.setCoordToAttr(F, y + 1, B + 1);
                        E.appendChild(F)
                    }
                    A.appendChild(E)
                }
                var D = tx.table(z.DEFAULT_TABLE_PROPERTY);
                u.addClassName(D, C || "");
                D.appendChild(A);
                return D
            },
            moveSelectionPos: function (B, z) {
                var A = (z * this.cellSize.width).toPx();
                var y = (B * this.cellSize.height).toPx();
                u.setStyle(this.elSelection, {
                    width: A,
                    height: y
                })
            },
            setCoordToAttr: function (z, y, A) {
                z.setAttribute("col", y);
                z.setAttribute("row", A);
                return z
            },
            getCoordFromAttr: function (y) {
                return {
                    col: y.getAttribute("col") || 0,
                    row: y.getAttribute("row") || 0
                }
            },
            eventBinding: function () {
                this.mouseOverHandler = this.config.mouseOverHandler;
                this.mouseClickHandler = this.config.mouseClickHandler;
                var y = this;
                var A = function (D) {
                    var C = u.element(D) || {};
                    var B = (C.tagName || "").toUpperCase();
                    if (C && B == "TD") {
                        var E = y.getCoordFromAttr(C);
                        y.mouseOverHandler(E.row, E.col)
                    }
                    u.stop(D)
                };
                var z = function (B) {
                    y.mouseClickHandler(B)
                };
                u.observe(this.elTable, "mouseover", A);
                u.observe(this.elTable, "click", z)
            }
        });
        e.ImageScale = e.Class.create({
            initialize: function (A, z) {
                if (!A.imageurl) {
                    return
                }
                if (A.actualwidth) {
                    return
                }
                var y = function (C, B) {
                    A.actualwidth = C;
                    A.actualheight = B;
                    if (z) {
                        z(C, B)
                    }
                };
                setTimeout(function () {
                    var B = new Image();
                    B.onerror = function () {
                        B = j
                    };
                    if (B.onreadystatechange) {
                        B.onreadystatechange = function () {
                            if (this.readyState == "complete") {
                                y(this.width, this.height);
                                B = j
                            }
                        }
                    } else {
                        B.onload = function () {
                            y(this.width, this.height);
                            B = j
                        }
                    }
                    B.src = A.imageurl
                }, 10)
            }
        });

        function x(y) {
            var z = q.getIconPath(y);
            return z + ""
        }
    })(h);
    h.ImageResizer = h.Class.create({
        initialize: function (D, y) {
            var A = D;
            var C = y.maxWidth || 200;
            var B = y.maxHeight || 200;
            var z = y.defImgUrl;
            var e = y.onComplete || function () {};

            function x(J, G) {
                var H, F;
                var I = J.width;
                var E = J.height;
                if (I == C && E == B) {
                    F = C;
                    H = B
                } else {
                    if (I < C && E < B) {
                        F = I;
                        H = E
                    } else {
                        H = B;
                        F = Math.floor(B * (I / E));
                        if (F > C) {
                            F = C;
                            H = Math.floor(C * (E / I))
                        }
                    }
                }
                A.width = F;
                A.height = H;
                A.src = G;
                e(F, H)
            }
            this.execResize = function (E) {
                var F = new Image();
                F.onerror = function () {
                    A.width = C;
                    A.height = B;
                    A.src = z;
                    F = j
                };
                if (F.onreadystatechange) {
                    F.onreadystatechange = function () {
                        if (this.readyState == "complete") {
                            x(F, E)
                        }
                    }
                } else {
                    F.onload = function () {
                        x(F, E)
                    }
                }
                F.src = E
            }
        }
    });
    h.Flash = {
        DEFAULT: {
            flashvar: {
                debug: d + ""
            },
            paraObj: {
                allowScriptAccess: "always",
                quality: "low",
                menu: d + "",
                scale: "noscale",
                salign: "tl",
                loop: d + ""
            },
            attrObj: {
                bgcolor: "#FFFFFF"
            }
        },
        minFlashVer: "9.0.45",
        load: function (e, y, C, F, x) {
            var E = u.extend({}, h.Flash.DEFAULT.flashvar);
            var z = u.extend({}, h.Flash.DEFAULT.paraObj);
            var A = u.extend({}, h.Flash.DEFAULT.attrObj);
            var D = F ? F : {};
            u.extend(E, D.flashvarObj);
            u.extend(z, D.paraObj);
            u.extend(A, D.attrObj);
            A.id = C;
            if (!u(y)) {
                c.body.appendChild(tx.div({
                    id: y
                }))
            }
            var B = j;
            if (x) {
                B = function (G) {
                    x(G.success)
                }
            }
            swfobject.embedSWF(e, y, D.width ? D.width : "0", D.height ? D.height : "0", this.minFlashVer, d, E, z, A, B)
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
        ready: function (x, e) {
            if (!h.Flash.get(x)) {
                setTimeout(function () {
                    h.Flash.ready(x, e)
                }, 500);
                return
            }
            setTimeout(e, 500)
        }
    };
    i.$txSWF = function (e) {
        return h.Flash.get(e)
    };
    h.TableUtil = {
        isDaumTable: function (e) {
            return u.hasClassName(e, "txc-table")
        },
        cloneNodeForEmptyTd: function (x) {
            var e;
            e = x.cloneNode(d);
            h.TableUtil.emptyTd(e);
            return e
        },
        emptyTd: function (e) {
            e.innerHTML = "&nbsp;"
        },
        splitWidthByColSpan: function (x) {
            var e;
            if (1 < x.colSpan && x.style.width) {
                e = parseInt(x.style.width, 10);
                w.setStyles(x, {
                    width: Math.floor(e / x.colSpan) + "px"
                }, v)
            }
        },
        splitHeightByRowSpan: function (x) {
            var e;
            if (1 < x.rowSpan && x.style.height) {
                e = parseInt(x.style.height, 10);
                w.setStyles(x, {
                    height: Math.floor(e / x.rowSpan) + "px"
                }, v)
            }
        },
        collapseCaret: function (y, x) {
            var e;
            try {
                e = y.getProcessor().createGoogRangeFromNodes(x, 0, x, 0);
                e.select()
            } catch (z) {}
        },
        getClosestByTagNames: function (e, y) {
            var x;
            if (y && typeof y.tagName === "string") {
                x = y.tagName.toLowerCase();
                if (x !== "body") {
                    if (e.contains(x)) {
                        return y
                    } else {
                        return arguments.callee(e, y.parentNode)
                    }
                }
            }
            return j
        },
        getTableIndexerFromTd: function (x) {
            var e;
            e = h.TableUtil.getClosestByTagNames(["table"], x);
            return new h.TableUtil.Indexer(e)
        }
    };
    h.TableUtil.Boundary = h.Class.create({
        initialize: function (e) {
            this.top = -1;
            this.left = -1;
            this.bottom = -1;
            this.right = -1;
            if (e) {
                this.set(e)
            }
        },
        getTop: function () {
            return this.top
        },
        getLeft: function () {
            return this.left
        },
        getBottom: function () {
            return this.bottom
        },
        getRight: function () {
            return this.right
        },
        setTop: function (e) {
            this.top = e
        },
        setLeft: function (e) {
            this.left = e
        },
        setBottom: function (e) {
            this.bottom = e
        },
        setRight: function (e) {
            this.right = e
        },
        set: function (e) {
            if ("top" in e) {
                this.setTop(e.top)
            }
            if ("left" in e) {
                this.setLeft(e.left)
            }
            if ("bottom" in e) {
                this.setBottom(e.bottom)
            }
            if ("right" in e) {
                this.setRight(e.right)
            }
        },
        isValid: function () {
            if (this.top === -1) {
                return d
            }
            if (this.left === -1) {
                return d
            }
            if (this.bottom === -1) {
                return d
            }
            if (this.right === -1) {
                return d
            }
            return v
        },
        addBoundary: function (z, x) {
            var y, e;
            y = this.addStartBoundary(z, x);
            e = this.addEndBoundary(z, x);
            return y || e
        },
        merge: function (y) {
            var x, e;
            x = this.addStartBoundary(y.top, y.left);
            e = this.addEndBoundary(y.bottom, y.right);
            return x || e
        },
        addStartBoundary: function (y, e) {
            var x;
            x = d;
            if (this.top === -1 || y < this.top) {
                this.top = y;
                x = v
            }
            if (this.left === -1 || e < this.left) {
                this.left = e;
                x = v
            }
            return x
        },
        addEndBoundary: function (y, e) {
            var x;
            x = d;
            if (this.bottom === -1 || this.bottom < y) {
                this.bottom = y;
                x = v
            }
            if (this.right === -1 || this.right < e) {
                this.right = e;
                x = v
            }
            return x
        }
    });
    h.TableUtil.Indexer = h.Class.create({
        initialize: function (e) {
            this.indexData = j;
            this.table = j;
            this.resetIndex();
            this.setTable(e);
            this.makeIndex()
        },
        getRowSize: function () {
            return this.indexData.length
        },
        getColSize: function () {
            if (0 < this.indexData.length) {
                return this.indexData[0].length
            }
            return 0
        },
        getTd: function (x, e) {
            if (this.indexData[x]) {
                if (this.indexData[x][e]) {
                    return this.indexData[x][e]
                }
            }
            return j
        },
        getTdArr: function (A) {
            var e, z, y, x;
            e = [];
            z = A.top;
            while (z <= A.bottom) {
                y = this.indexData[z];
                x = A.left;
                while (x <= A.right) {
                    if (e.contains(y[x]) === d) {
                        e.push(y[x])
                    }
                    x += 1
                }
                z += 1
            }
            return e
        },
        getTdArrHasTop: function (y) {
            var x, B, A, e, z;
            x = [];
            e = this.getColSize();
            for (z = 0; z < e; z += 1) {
                B = this.getTd(y, z);
                A = this.getTd(y - 1, z);
                this.uniquePushWhenDifferent(x, B, A)
            }
            return x
        },
        getTdArrHasBottom: function (y) {
            var x, B, A, e, z;
            x = [];
            e = this.getColSize();
            for (z = 0; z < e; z += 1) {
                B = this.getTd(y, z);
                A = this.getTd(y + 1, z);
                this.uniquePushWhenDifferent(x, B, A)
            }
            return x
        },
        getTdArrHasLeft: function (y) {
            var x, B, A, e, z;
            x = [];
            e = this.getRowSize();
            for (z = 0; z < e; z += 1) {
                B = this.getTd(z, y);
                A = this.getTd(z, y - 1);
                this.uniquePushWhenDifferent(x, B, A)
            }
            return x
        },
        getTdArrHasRight: function (y) {
            var x, B, A, e, z;
            x = [];
            e = this.getRowSize();
            for (z = 0; z < e; z += 1) {
                B = this.getTd(z, y);
                A = this.getTd(z, y + 1);
                this.uniquePushWhenDifferent(x, B, A)
            }
            return x
        },
        getBoundary: function (D) {
            var e, B, A, C, y, z, x;
            e = new h.TableUtil.Boundary();
            B = this.indexData;
            A = B.length;
            for (C = 0; C < A; C += 1) {
                y = B[C];
                if (y) {
                    z = y.length;
                    for (x = 0; x < z; x += 1) {
                        if (y[x] === D) {
                            e.addBoundary(C, x)
                        }
                    }
                }
            }
            return e
        },
        reload: function () {
            this.resetIndex();
            this.makeIndex()
        },
        uniquePushWhenDifferent: function (e, y, x) {
            if (y !== x) {
                if (e.contains(y) === d) {
                    e.push(y)
                }
            }
        },
        resetIndex: function () {
            this.indexData = []
        },
        setTable: function (e) {
            this.table = e
        },
        makeIndex: function () {
            var B, A, D, C, y, z, x, e;
            B = this.table.rows;
            A = B.length;
            for (D = 0; D < A; D += 1) {
                C = B[D];
                y = C.cells;
                z = y.length;
                for (x = 0; x < z; x += 1) {
                    e = y[x];
                    this.addCellIndex(D, e)
                }
            }
        },
        addCellIndex: function (D, e) {
            var C, B, z, x, y, A;
            C = this.getNextCellIndex(this.indexData[D]);
            z = e.rowSpan;
            for (B = 0; B < z; B += 1) {
                x = D + B;
                if (!this.indexData[x]) {
                    this.indexData[x] = []
                }
                A = e.colSpan;
                for (y = 0; y < A; y += 1) {
                    this.indexData[x][C + y] = e
                }
            }
        },
        getNextCellIndex: function (x) {
            var y, e;
            if (!x) {
                return 0
            }
            e = x.length;
            for (y = 0; y < e; y += 1) {
                if (!x[y]) {
                    break
                }
            }
            return y
        }
    });
    h.I.XHRequester = h.Faculty.create({
        createXMLHttp: function () {
            var y = j;
            try {
                if (i.XMLHttpRequest) {
                    y = new XMLHttpRequest()
                } else {
                    if (i.ActiveXObject) {
                        y = new ActiveXObject("Msxml2.XMLHTTP");
                        if (!y) {
                            y = new ActiveXObject("Microsoft.XMLHTTP")
                        }
                    }
                }
                return y
            } catch (x) {
                return j
            }
        },
        sendRequest: function (x, y, z, A, E, F) {
            if (y == j && y != "") {
                return j
            }
            var C = j;
            var B = this.createXMLHttp();
            if (B == j) {
                return j
            }
            var G = function () {
                if (B.status == 200) {
                    if (x.toUpperCase() == "HEAD") {
                        C = E(B.getAllResponseHeaders())
                    } else {
                        C = E(B.responseText)
                    }
                } else {
                    C = F(B.status)
                }
                B = j
            };
            try {
                if (A) {
                    B.onreadystatechange = function () {
                        if (B.readyState == 4) {
                            G()
                        }
                    }
                }
                if (x.toUpperCase() == "POST") {
                    B.open("POST", y, A);
                    B.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
                    B.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    B.setRequestHeader("Content-Length", z.length);
                    B.setRequestHeader("Connetion", "close");
                    B.send(z)
                } else {
                    if (z && z.length > 0) {
                        y = y + ((y.indexOf("?") > -1) ? "&" : "?") + z
                    }
                    B.open(x.toUpperCase(), y, A);
                    B.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    B.send(j)
                } if (!A) {
                    G()
                }
                return C
            } catch (D) {
                return j
            }
        }
    });
    h.Responder = {
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
        register: function (x) {
            var e = this.newKey();
            this.callbacks[e] = function (y) {
                x(y);
                this.callbacks[e] = j
            }.bind(this);
            return e
        }
    };
    h.I.FHRequester = h.Faculty.create({
        sendRequest: function (e, x, y, A, D, H, G) {
            var z = h.Flash.get("tx_fhr");
            if (!z) {
                z = function () {
                    var I = q.getUrl("#cmnhost/swf/FHR3.swf?v=2");
                    h.Flash.load(I, "tx_fhr_target", "tx_fhr");
                    return h.Flash.get("tx_fhr")
                }();
                setTimeout(this.sendRequest.bind(this, e, x, y, A, D, H), 100);
                return
            }
            if (!z.send) {
                setTimeout(this.sendRequest.bind(this, e, x, y, A, D, H), 50);
                return
            }
            var F = h.Responder.register(D);
            var C = 'Trex.Responder.callbacks["' + F + '"]';
            var E = "Trex.Responder.process";
            if (H) {
                var B = h.Responder.register(function (J, I) {
                    if (J == -1) {
                        H(J, I)
                    } else {
                        if (typeof G == "function") {
                            G(J, I)
                        }
                    }
                });
                E = 'Trex.Responder.callbacks["' + B + '"]'
            }
            if (x.charAt(0) === "/") {
                x = "http://" + c.location.host + x
            }
            if (e.toUpperCase() == "GET") {
                if (!y) {
                    y = ""
                } else {
                    x = x + ((x.indexOf("?") > -1) ? "&" : "?") + y
                }
            }
            if (x) {
                z.send(e, x, y, C, E)
            }
        }
    });
    h.I.JSRequester = h.Faculty.create({
        importScript: function (z, C, B, E) {
            if (z == j && z != "") {
                return j
            }
            C = C || "utf-8";
            B = B || c;
            try {
                var A = B.getElementsByTagName("head")[0] || B.documentElement;
                var y = B.createElement("script");
                y.type = "text/javascript";
                y.charset = C;
                y.src = z;
                var x = d;
                y.onload = y.onreadystatechange = function () {
                    if (!x && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                        x = v;
                        if (E) {
                            E()
                        }
                        y.onload = y.onreadystatechange = j;
                        if (A && y.parentNode) {
                            A.removeChild(y)
                        }
                    }
                };
                A.insertBefore(y, A.firstChild)
            } catch (D) {
                console.log(D)
            }
        }
    });
    i.$stop = {};
    i.$propagate = {};
    h.I.JobObservable = h.Faculty.create({
        jobObservers: {},
        observeJob: function (x, e) {
            if (!this.jobObservers[x]) {
                this.jobObservers[x] = []
            }
            this.jobObservers[x].push(e)
        },
        reserveJob: function (z, x, y) {
            y = y || 500;
            if (!this.jobObservers[z]) {
                this.jobObservers[z] = []
            }
            var e = this;
            this.jobObservers[z].push(function () {
                var A = $A(arguments);
                setTimeout(function () {
                    x.apply(e, A)
                }, y)
            })
        },
        fireJobs: function (z) {
            var x = this;
            var y = $A(arguments).slice(1);
            if (!this.jobObservers[z]) {
                return
            }
            try {
                this.jobObservers[z].each(function (e) {
                    e.apply(x, y)
                })
            } catch (A) {
                if (A != $stop) {
                    throw A
                }
            }
        }
    });
    h.I.KeyObservable = h.Faculty.create({
        keyObservers: {},
        observeKey: function (y, x) {
            var e = function (z) {
                return (z.ctrlKey ? "T" : "F") + (z.altKey ? "T" : "F") + (z.shiftKey ? "T" : "F") + "_" + z.keyCode
            }(y);
            if (!this.keyObservers[e]) {
                this.keyObservers[e] = []
            }
            this.keyObservers[e].push(x)
        },
        fireKeys: function (z) {
            var y = function (B) {
                return (B.ctrlKey ? "T" : "F") + (B.altKey ? "T" : "F") + (B.shiftKey ? "T" : "F") + "_" + B.keyCode
            }(z);
            if (!this.keyObservers[y]) {
                return
            }
            var x = this;
            var A = d;
            var e = function () {
                if (!A) {
                    u.stop(z);
                    A = v
                }
            };
            this.keyObservers[y].each(function (B) {
                try {
                    B.apply(x, [z]);
                    e()
                } catch (C) {
                    if (C === $stop) {
                        e()
                    } else {
                        if (C !== $propagate) {}
                    }
                }
            })
        },
        registerKeyEvent: function (x) {
            try {
                u.observe(x, "keydown", this.fireKeys.bind(this), v)
            } catch (y) {}
        }
    });
    h.I.ElementObservable = h.Faculty.create({
        elementObservers: {},
        observeElement: function (y, e) {
            if (y == j) {
                this.observeElement({
                    tag: "*tx-final-body*"
                }, e)
            } else {
                if (y.length) {
                    for (var x = 0; x < y.length; x++) {
                        var z = y[x];
                        this.observeElement(z, e)
                    }
                } else {
                    if (!this.elementObservers[y.tag]) {
                        this.elementObservers[y.tag] = {}
                    }
                    if (!y.klass) {
                        y.klass = "*tx-all-class*"
                    }
                    if (!this.elementObservers[y.tag][y.klass]) {
                        this.elementObservers[y.tag][y.klass] = []
                    }
                    this.elementObservers[y.tag][y.klass].push(e)
                }
            }
        },
        fireElements: function (A) {
            if (!A) {
                return
            }
            var z = A;
            var y = $A(arguments).slice(1);
            var x = this;
            try {
                var C;
                if (w.kindOf(z, "img,hr,table,button,iframe")) {
                    C = this.collectObserverByElement(z.nodeName.toLowerCase(), z.className);
                    if (C) {
                        C.each(function (e) {
                            e.apply(x, [z].concat(y))
                        })
                    }
                } else {
                    while (z) {
                        C = this.collectObserverByElement(z.nodeName.toLowerCase(), z.className);
                        if (C) {
                            C.each(function (e) {
                                e.apply(x, [z].concat(y))
                            })
                        }
                        if (w.isBody(z)) {
                            break
                        }
                        z = w.parent(z)
                    }
                }
            } catch (B) {
                if (B != $stop) {
                    throw B
                }
            }
            this.fireFinally()
        },
        fireFinally: function () {
            var e = this;
            var x = $A(arguments).slice(1);
            var y = this.collectObserverByElement("*tx-final-body*");
            if (y) {
                y.each(function (z) {
                    z.apply(e, [j].concat(x))
                })
            }
        },
        collectObserverByElement: function (x, e) {
            if (!this.elementObservers[x]) {
                return j
            }
            var A = [];
            e = e || "";
            if (e != "") {
                var y = e.split(" ");
                for (var z in this.elementObservers[x]) {
                    if (y.contains(z)) {
                        A.push(this.elementObservers[x][z])
                    }
                }
            }
            if (this.elementObservers[x]["*tx-all-class*"]) {
                A.push(this.elementObservers[x]["*tx-all-class*"])
            }
            return A.flatten()
        }
    });
    h.I.MouseoverObservable = h.Faculty.create({
        mouseoverObservers: {},
        observeMouseover: function (e, x, y) {
            if (!this.mouseoverObservers[e]) {
                this.mouseoverObservers[e] = {
                    success: [],
                    fail: [],
                    flag: d
                }
            }
            this.mouseoverObservers[e]["success"].push(x);
            if (y) {
                this.mouseoverObservers[e]["fail"].push(y)
            }
        },
        fireMouseover: function (A) {
            if (!A) {
                return
            }
            var z = A;
            var x = this;
            try {
                for (var y in this.mouseoverObservers) {
                    this.mouseoverObservers[y].flag = d
                }
                while (z) {
                    var D = this.collectMouseoverObserver(z);
                    if (D.length > 0) {
                        var C = this.getPositionByNode(z);
                        D.each(function (e) {
                            e.apply(x, [z, C])
                        })
                    }
                    if (w.isBody(z)) {
                        break
                    }
                    z = w.parent(z)
                }
            } catch (B) {
                if (B != $stop) {
                    throw B
                }
            }
            this.runMouseoverFailHandler()
        },
        runMouseoverFailHandler: function () {
            var x = [];
            for (var e in this.mouseoverObservers) {
                if (!this.mouseoverObservers[e].flag) {
                    x.push(this.mouseoverObservers[e]["fail"])
                }
            }
            x.flatten().each(function (y) {
                y()
            })
        },
        collectMouseoverObserver: function (C) {
            var D = [];
            var y = C.className || "";
            var x = C.tagName;
            if (x) {
                x = x.toLowerCase();
                if (this.mouseoverObservers[x]) {
                    D.push(this.mouseoverObservers[x]["success"]);
                    this.mouseoverObservers[x]["flag"] = v
                }
            }
            if (y != "") {
                var z = y.split(" ");
                for (var B = 0, e = z.length; B < e; B++) {
                    var A = x + "." + z[B];
                    if (this.mouseoverObservers[A]) {
                        D.push(this.mouseoverObservers[A]["success"]);
                        this.mouseoverObservers[A]["flag"] = v
                    }
                }
            }
            return D.flatten()
        }
    });
    h.I.Runnable = h.Faculty.create({
        isRunning: d,
        repeater: j,
        threads: [],
        startThread: function (e) {
            if (this.repeater) {
                this.repeater.clear()
            } else {
                this.repeater = new h.Repeater(this.runThread.bind(this))
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
                this.isRunning = v;
                (this.threads.shift())();
                this.isRunning = d
            }
        },
        putThread: function (e, x) {
            if (x) {
                this.threads.unshift(e)
            } else {
                this.threads.push(e)
            }
        }
    });
    k.addMsg({
        "@menu.pallete.revert": "\uae30\ubcf8\uc0c9\uc73c\ub85c",
        "@adoptor.label": "\uac00\ub098\ub2e4",
        "@adoptor.transparent": "\ud22c\uba85"
    });
    h.MarkupTemplate.add("menu.colorpallete.text", '#{for:items}<li class="tx-menu-list-item" style="background-color:#{color}"><a unselectable="on" style="color:#{text}">#{label}</a></li>#{/for:items}');
    h.MarkupTemplate.add("menu.colorpallete.thumb", '#{for:items}<li class="tx-menu-list-item" unselectable="on" style="background-color:#{color};border:none;#{if:image!=null}background-image:url(#{image})#{/if:image};"></li>#{/for:items}');
    h.MarkupTemplate.add("menu.colorpallete.revert", '<p class="tx-pallete-revert"><a unselectable="on" href="javascript:;" title="@menu.pallete.revert">@menu.pallete.revert</a></p>');
    h.I.ColorPallete = h.Faculty.create({
        isGradeInit: d,
        isPickerDisplayed: d,
        onregenerated: function (e, x) {
            this.setColorValueAtInputbox(x)
        },
        setColorValueAtInputbox: function (y) {
            if (!y) {
                return
            }
            if (typeof y != "string" && y.toString) {
                y = y.toString()
            }
            var z = y.split("|")[0];
            if (!h.Color.getValidColor(z)) {
                z = "#000000"
            }
            var e = w.collect(this.elInner, "p.tx-pallete-input input");
            var x = w.collect(this.elInner, "p.tx-pallete-input span");
            if (y && e && x) {
                e.value = z;
                x.style.backgroundColor = z
            }
        },
        hookEvent: function (y) {
            var F = this.elMenu;
            var I = this.elInner = w.collect(F, "div.tx-menu-inner");
            var E = w.collect(I, "ul.tx-pallete-text-list");
            if (y.texts) {
                var L = y.texts.options;
                h.MarkupTemplate.get("menu.colorpallete.text").evaluateToDom({
                    items: L
                }, E);
                var A = w.collectAll(E, "li");
                this.addColorClickEvent(A, L)
            } else {
                I.removeChild(E);
                E = j
            } if (y.thumbs) {
                var G = !!y.needTrans;
                var D = [].concat(y.thumbs.options);
                if (G) {
                    D.pop();
                    D.push(Object.extend({}, y.thumbs.transparent))
                }
                var J = w.collect(I, "ul.tx-pallete-thumb-list");
                h.MarkupTemplate.get("menu.colorpallete.thumb").evaluateToDom({
                    items: D
                }, J);
                var B = w.collectAll(J, "li");
                this.addColorClickEvent(B, D)
            }
            this.elPicker = w.collect(I, "div.tx-pallete-picker");
            var x = w.collect(I, "div.tx-pallete-buttons");
            var e = this.elMore = w.collect(x, "p.tx-pallete-more a");
            u.observe(e, "click", this.togglePicker.bind(this));
            if (y.needRevert) {
                w.insertFirst(x, h.MarkupTemplate.get("menu.colorpallete.revert").evaluateAsDom({}));
                u.observe(w.collect(x, "p.tx-pallete-revert a"), "click", function (M) {
                    this.onSelect(M, j);
                    this.hide()
                }.bind(this))
            }
            var K = w.collect(this.elInner, "p.tx-pallete-input");
            this.elPreview = w.collect(K, "span");
            var C = this.elInput = w.collect(K, "input");
            var z = this.elEnter = w.collect(K, "a");
            var H = this;
            u.observe(C, "blur", function () {
                H.lastValue = C.value
            });
            u.observe(z, "click", this.onColorEnter.bind(this))
        },
        addColorClickEvent: function (B, x) {
            for (var z = 0, e = B.length; z < e; z++) {
                var y = B[z];
                var A = x[z];
                u.observe(y, "click", this.onSelect.bindAsEventListener(this, A.color + (A.text ? "|" + A.text : "")))
            }
        },
        _generatePicker: function () {
            var x = this.elPicker;
            var y = w.collect(x, "div.tx-pallete-pickerbox");
            u.observe(y, "mouseout", this.onMouseOut.bind(this));
            var z = this.elChromaBar = w.collect(y, "div.tx-chromabar");
            w.replacePngPath(z);
            u.observe(z, "mousedown", this.onChromDown.bindAsEventListener(this));
            u.observe(z, "mousemove", this.onChromMove.bindAsEventListener(this));
            u.observe(z, "mouseup", this.onChromUp.bindAsEventListener(this));
            this.elHueBar = w.collect(y, "div.tx-huebar");
            var e = this.elHueBar;
            this.hueDownHandler = this.onHueDown.bindAsEventListener(this);
            this.hueMoveHandler = this.onHueMove.bindAsEventListener(this);
            this.hueUpHandler = this.onHueUp.bindAsEventListener(this);
            this.hueClickHandler = this.onHueClick.bindAsEventListener(this);
            u.observe(e, "mousedown", this.hueDownHandler);
            u.observe(e, "click", this.hueClickHandler);
            this.nColWidth = 150;
            this.nColHeight = 120;
            this.nHueHeight = 120;
            this.mRGB = {
                r: 0,
                g: 0,
                b: 0
            };
            this.mHSV = {
                h: 0,
                s: 100,
                v: 100
            };
            this.setHueColor("FF0000")
        },
        reinitGrade: function () {
            var x = u.cumulativeOffset(this.elMenu);
            var e = u.positionedOffset(this.elChromaBar);
            this.iChromPos = {
                x: (x[0] + e[0]),
                y: (x[1] + e[1])
            };
            e = u.positionedOffset(this.elHueBar);
            this.iHuePos = {
                x: (x[0] + e[0]),
                y: (x[1] + e[1])
            }
        },
        onColorEnter: function (x) {
            var e;
            if (this.elInput.value == TXMSG("@adoptor.transparent")) {
                e = "transparent"
            } else {
                e = h.Color.getValidColor(this.elInput.value)
            } if (e !== j) {
                this.onSelect(x, e)
            }
            this.hide()
        },
        previewColor: function (e) {
            this.changeColor(e)
        },
        onMouseOut: function () {
            if (this.lastValue !== j && this.lastValue !== r && this.mousedownDetected) {
                this.changeColor(this.lastValue)
            }
        },
        changeColor: function (e) {
            e = h.Color.getHexColor(e);
            this.elPreview.style.backgroundColor = e;
            if (e == "transparent") {
                this.elInput.value = TXMSG("@adoptor.transparent")
            } else {
                this.elInput.value = e
            }
        },
        enterColor: function () {
            if (this.elInput.value == TXMSG("@adoptor.transparent")) {
                this.changeColor("transparent")
            } else {
                if (this.elInput.value.length == 7) {
                    var e = h.Color.getValidColor(this.elInput.value);
                    if (e !== j) {
                        this.changeColor(e)
                    }
                }
            }
        },
        togglePicker: function (y) {
            var e = this.elMore;
            var x = this.elPicker;
            if (this.isPickerDisplayed) {
                e.className = "tx-more-down";
                u.hide(x)
            } else {
                e.className = "tx-more-up";
                u.show(x);
                if (u.msie6) {
                    x.style.padding = "1px";
                    setTimeout(function () {
                        x.style.padding = "0px"
                    }, 0)
                }
                if (!this.isGradeInit) {
                    this._generatePicker();
                    this.isGradeInit = v;
                    this.reinitGrade()
                }
            }
            this.isPickerDisplayed = !this.isPickerDisplayed;
            u.stop(y)
        },
        getChromCoords: function (x) {
            var y = (x.clientX - this.iChromPos.x) + o.scrollLeft;
            var e = (x.clientY - this.iChromPos.y) + o.scrollTop;
            y = Math.min(this.nColWidth, Math.max(0, y));
            e = Math.min(this.nColHeight, Math.max(0, e));
            return {
                x: y,
                y: e
            }
        },
        getHueCoords: function (e) {
            var x = e.offsetY || e.layerY;
            return Math.min(this.nHueHeight, Math.max(0, x))
        },
        getColorByEvent: function (e, C) {
            var A = (e / (this.nColWidth)) * 100;
            var z = (1 - C / (this.nColHeight)) * 100;
            var B = 3;
            A = Math.floor(Math.min(Math.max(A, 0), 100));
            if (A < B) {
                A = 0
            } else {
                if (A > 100 - B) {
                    A = 100
                }
            }
            z = Math.floor(Math.min(Math.max(z, 0), 100));
            if (z < B) {
                z = 0
            } else {
                if (z > 100 - B) {
                    z = 100
                }
            }
            this.mHSV.s = A;
            this.mHSV.v = z;
            this.mRGB = this.hsv2rgb(this.mHSV.h, this.mHSV.s, this.mHSV.v);
            return this.rgb2hex(this.mRGB.r, this.mRGB.g, this.mRGB.b)
        },
        onChromDown: function () {
            this.mousedownDetected = v
        },
        onChromMove: function (x) {
            if (this.mousedownDetected) {
                var y = this.getChromCoords(x);
                var e = this.getColorByEvent(y.x, y.y);
                this.previewColor(e)
            }
        },
        onChromUp: function (x) {
            var y = this.getChromCoords(x);
            var e = this.getColorByEvent(y.x, y.y);
            this.previewColor(e);
            this.lastValue = e;
            this.mousedownDetected = d
        },
        getHueByEvent: function (z) {
            var e = parseInt((z / (this.nHueHeight)) * 360);
            this.mHSV.h = Math.floor(Math.min(Math.max(e, 0), 360));
            var x = this.hsv2rgb(this.mHSV.h, 100, 100);
            return this.rgb2hex(x.r, x.g, x.b)
        },
        setHueColor: function (e) {
            this.elChromaBar.style.backgroundColor = e
        },
        onHueDown: function () {
            u.observe(c, "mousemove", this.hueMoveHandler);
            u.observe(c, "mouseup", this.hueUpHandler)
        },
        onHueMove: function (x) {
            var z = this.getHueCoords(x);
            var e = this.getHueByEvent(z);
            this.setHueColor(e)
        },
        onHueClick: function (x) {
            var z = this.getHueCoords(x);
            var e = this.getHueByEvent(z);
            this.setHueColor(e)
        },
        onHueUp: function () {
            u.stopObserving(c, "mousemove", this.hueMoveHandler);
            u.stopObserving(c, "mouseup", this.hueUpHandler)
        },
        hex2rgb: function (e) {
            this.mRGB.r = (this.toDec(e.substr(0, 1)) * 16) + this.toDec(e.substr(1, 1));
            this.mRGB.g = (this.toDec(e.substr(2, 1)) * 16) + this.toDec(e.substr(3, 1));
            this.mRGB.b = (this.toDec(e.substr(4, 1)) * 16) + this.toDec(e.substr(5, 1));
            return this.mRGB
        },
        toDec: function (x) {
            var e = "0123456789ABCDEF";
            return e.indexOf(x.toUpperCase())
        },
        rgb2hex: function (y, x, e) {
            y = y.toString(16);
            if (y.length == 1) {
                y = "0" + y
            }
            x = x.toString(16);
            if (x.length == 1) {
                x = "0" + x
            }
            e = e.toString(16);
            if (e.length == 1) {
                e = "0" + e
            }
            return "#" + y + x + e
        },
        hsv2rgb: function (y, J, I) {
            y %= 360;
            J /= 100;
            I /= 100;
            var e = 0,
                z = 0,
                D = 0;
            if (J === 0) {
                e = Math.floor(I * 255);
                z = Math.floor(I * 255);
                D = Math.floor(I * 255)
            } else {
                var B = y / 60;
                var A = Math.floor(B);
                var H = I * (1 - J);
                var F = I * (1 - J * (B - A));
                var E = I * (1 - J * (1 - (B - A)));
                var x = 0,
                    C = 0,
                    G = 0;
                if (A === 0) {
                    x = I;
                    C = E;
                    G = H
                } else {
                    if (A == 1) {
                        x = F;
                        C = I;
                        G = H
                    } else {
                        if (A == 2) {
                            x = H;
                            C = I;
                            G = E
                        } else {
                            if (A == 3) {
                                x = H;
                                C = F;
                                G = I
                            } else {
                                if (A == 4) {
                                    x = E;
                                    C = H;
                                    G = I
                                } else {
                                    if (A == 5) {
                                        x = I;
                                        C = H;
                                        G = F
                                    }
                                }
                            }
                        }
                    }
                }
                e = Math.floor(x * 255);
                z = Math.floor(C * 255);
                D = Math.floor(G * 255)
            }
            return {
                r: e,
                g: z,
                b: D
            }
        },
        rgb2hsv: function (x, C, H) {
            var z = (x / 255);
            var F = (C / 255);
            var J = (H / 255);
            var B = 0,
                K = 0,
                I = 0;
            var G = Math.min(z, F, J);
            var y = Math.max(z, F, J);
            var E = y - G;
            I = E;
            if (E === 0) {
                B = 0;
                K = 0
            } else {
                K = E / y;
                var D = (((y - z) / 6) + (E / 2)) / E;
                var e = (((y - F) / 6) + (E / 2)) / E;
                var A = (((y - J) / 6) + (E / 2)) / E;
                if (z == y) {
                    B = A - e
                } else {
                    if (F == y) {
                        B = (1 / 3) + D - A
                    } else {
                        if (J == y) {
                            B = (2 / 3) + e - D
                        }
                    }
                } if (B < 0) {
                    B += 1
                }
                if (B > 1) {
                    B -= 1
                }
            }
            return {
                h: B,
                s: K,
                v: I
            }
        }
    });
    h.Color = {
        getHexColor: function (x) {
            x = x.trim();
            if (x.indexOf("rgb") < 0) {
                if (x.length > 0 && (x.indexOf("-moz-use") > -1 || x == "transparent")) {
                    return "transparent"
                } else {
                    return x
                }
            }
            if (/rgba\s?\((0,\s?){3}0\)/i.test(x)) {
                return "transparent"
            }
            var e = x.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*\d*\)/i);
            if (!e) {
                return x
            }
            e.shift();
            if (e.length < 3) {
                return x
            }
            var A;
            var z = "#";
            for (var y = 0; y < 3; y++) {
                A = parseInt(e[y].trim()).toString(16).toUpperCase();
                if (A.length == 1) {
                    z = z.concat("0" + A)
                } else {
                    if (A.length > 2) {
                        z = z.concat("FF")
                    } else {
                        z = z.concat("" + A)
                    }
                }
            }
            return z
        },
        getValidColor: function (x) {
            if (x === j || x == "transparent") {
                return "transparent"
            }
            var e = x.match(/#?([0-9a-f]{6}|[0-9a-f]{3})/i);
            if (e === j || x.length > 8) {
                return j
            }
            if (e[1].length == 3) {
                return "#" + e[1] + e[1]
            } else {
                return "#" + e[1]
            }
        },
        getOptColor: function (x, y) {
            if (!x || x.length != 7 || x.charAt(0) != "#") {
                return "#e5e5e5"
            }
            x = x.substring(1, 7).toLowerCase();
            y = isNaN(y) ? 100 : y;
            var z = "#";
            var B, e;
            for (var A = 0; A < 3; A++) {
                B = parseInt(x.substr(A * 2, 2), 16);
                e = Math.round(Math.floor((255 - B) * (1 - y * 0.01) + B * (y * 0.02))).toString(16);
                if (e.length == 1) {
                    z += "0" + e
                } else {
                    if (e.length > 2) {
                        z += "ff"
                    } else {
                        z += e
                    }
                }
            }
            return z
        }
    };
    h.I.CookieBaker = h.Faculty.create({
        cookieName: j,
        cookieValue: j,
        initCookie: function (e, x) {
            this.cookieName = e;
            this.cookieValue = function () {
                var A = c.cookie.split(";");
                for (var z = 0; z < A.length; z++) {
                    var y = A[z].replace(/^\s+/, "");
                    if (y.indexOf(e + "=") == 0) {
                        return y.substring(e.length + 1)
                    }
                }
                return j
            }() || "";
            this.maxCnt = x || 3
        },
        writeCookie: function (x, A) {
            var e = this.cookieName,
                z;
            if (A) {
                var y = new Date();
                y.setTime(new Date().getTime() + A * 24 * 60 * 60 * 1000);
                z = "; expires=" + y.toGMTString()
            } else {
                z = ""
            } if (x === j) {
                x = ""
            }
            c.cookie = e + "=" + x + z + "; path=/";
            this.cookieValue = x
        },
        readCookie: function () {
            if (this.cookieValue === j + "") {
                return j
            }
            return this.cookieValue
        },
        eraseCookie: function () {
            var e = this.cookieName;
            this.writeCookie(e, "", -1)
        },
        extractOptions: function (e, y) {
            var z = e.toMap("data");
            var x = [];
            y.split("|").compact().each(function (A) {
                if (z[A]) {
                    x.push(z[A])
                }
            }.bind(this));
            return x
        },
        mergeValues: function (y, x) {
            var e = y.split("|").compact();
            if (e.contains(x)) {
                return y
            }
            if (e.length >= this.maxCnt) {
                e.pop()
            }
            e.unshift(x);
            return e.join("|")
        }
    });
    h.MarkupTemplate.add("button.itsnew", '<em class="tx-itsnew" title="new">new</em>');
    h.MarkupTemplate.add("button.select.text", "<span>#{data}</span>");
    h.Button = h.Class.create({
        $const: {
            __borderClasses: {
                "tx-btn-trans": v,
                "tx-btn-lbg": v,
                "tx-btn-bg": v,
                "tx-btn-rbg": v,
                "tx-btn-lrbg": v,
                "tx-slt-tlbg": v,
                "tx-slt-tbg": v,
                "tx-slt-trbg": v,
                "tx-slt-blbg": v,
                "tx-slt-bbg": v,
                "tx-slt-brbg": v,
                "tx-slt-31bg": v,
                "tx-slt-31lbg": v,
                "tx-slt-31rbg": v,
                "tx-slt-70lbg": v,
                "tx-slt-70bg": v,
                "tx-slt-59bg": v,
                "tx-slt-42bg": v,
                "tx-slt-56bg": v,
                "tx-btn-nlrbg": v,
                "tx-btn-43lrbg": v,
                "tx-btn-52lrbg": v,
                "tx-btn-57lrbg": v,
                "tx-btn-71lrbg": v,
                "tx-btn-48lbg": v,
                "tx-btn-48rbg": v,
                "tx-btn-30lrbg": v,
                "tx-btn-46lrbg": v,
                "tx-btn-67lrbg": v,
                "tx-btn-49lbg": v,
                "tx-btn-58bg": v,
                "tx-btn-46bg": v,
                "tx-btn-49rbg": v,
                "tx-btn-widget": v,
                "tx-btn-widget-tbg": v,
                "tx-btn-widget-brbg": v
            },
            addBorderClass: function (e) {
                h.Button.__borderClasses[e] = v
            },
            getBorderClass: function (z) {
                var e = u.classNames(z);
                for (var y = 0; y < e.length; y++) {
                    var x = e[y];
                    var A = h.Button.__borderClasses[x];
                    if (A) {
                        return x
                    }
                }
            }
        },
        hasState: j,
        isDisabled: j,
        lastValue: j,
        lastText: j,
        elButton: j,
        elIcon: j,
        borderClass: j,
        _command: function () {},
        setCommand: function (e) {
            this._command = e
        },
        initialize: function (e) {
            var A = this.config = e;
            if (A.borderClass) {
                h.Button.addBorderClass(A.borderClass)
            }
            this.itsNew = !!A.itsnew;
            this.hasState = !!A.status;
            this.isDisabled = d;
            this.lastValue = A.selectedValue || j;
            if (e.el) {
                this.elButton = e.el
            } else {
                var x = A.id || "tx_" + A.identity;
                this.elButton = $must(x + (A.initializedId || ""))
            }
            var z = this.elButton;
            var y = this.elIcon = w.collect(z, "a");
            if (!y) {
                throw new Error("[Exception]Trex.Button : can't find elIcon for button '" + x + "'")
            }
            this.borderClass = h.Button.getBorderClass(z);
            if (this.oninitialized) {
                this.oninitialized.bind(this)(A)
            }
            this.generate();
            if (this.itsNew) {
                w.append(y, h.MarkupTemplate.get("button.itsnew").evaluateAsDom({}))
            }
            if (A.selectedValue && this.setValue) {
                this.setValue(A.selectedValue)
            }
            if (A.selectedText && this.setText) {
                this.setText(A.selectedText)
            }
            if (A.selectedState && this.setState) {
                this.setState(A.selectedState)
            }
        },
        generate: function () {
            var e = this.elIcon;
            this.hdlMouseDown = this.onMouseDown.bindAsEventListener(this);
            this.hdlMouseOver = this.onMouseOver.bindAsEventListener(this);
            this.hdlMouseOut = this.onMouseOut.bindAsEventListener(this);
            this.hdlKeydown = this.onKeyDown.bindAsEventListener(this);
            this.hdlClick = this.onClick.bindAsEventListener(this);
            u.observe(e, "mousedown", this.hdlMouseDown);
            u.observe(e, "mouseover", this.hdlMouseOver);
            u.observe(e, "mouseout", this.hdlMouseOut);
            u.observe(e, "keydown", this.hdlKeydown);
            u.observe(e, "click", this.hdlClick);
            if (this.ongenerated) {
                this.ongenerated.bind(this)(this.config)
            }
        },
        removeHandler: function () {
            if (!this.hdlMouseDown) {
                return
            }
            var e = this.elIcon;
            u.stopObserving(e, "mousedown", this.hdlMouseDown);
            u.stopObserving(e, "mouseover", this.hdlMouseOver);
            u.stopObserving(e, "mouseout", this.hdlMouseOut);
            u.stopObserving(e, "keydown", this.hdlKeydown);
            u.stopObserving(e, "click", this.hdlClick)
        },
        getCurrentBorderClass: function (z) {
            var e = u.classNames(z);
            for (var y = 0; y < e.length; y++) {
                var x = e[y];
                if (x.indexOf(this.borderClass) != -1) {
                    return x
                }
            }
            return r + ""
        },
        normalState: function () {
            var e = this.getCurrentBorderClass(this.elButton);
            if (e == this.borderClass) {
                return
            }
            u.removeClassName(this.elButton, e);
            u.addClassName(this.elButton, this.borderClass)
        },
        hoveredState: function () {
            var e = this.getCurrentBorderClass(this.elButton);
            u.removeClassName(this.elButton, e);
            u.addClassName(this.elButton, this.borderClass + "-hovered");
            this.decreaseZindex()
        },
        pushedState: function () {
            var e = this.getCurrentBorderClass(this.elButton);
            u.removeClassName(this.elButton, e);
            u.addClassName(this.elButton, this.borderClass + "-pushed")
        },
        currentState: function () {
            var x = this.getCurrentBorderClass(this.elButton);
            var e = "normal";
            if (x.indexOf("-pushed") != -1) {
                e = "pushed"
            } else {
                if (x.indexOf("-hovered") != -1) {
                    e = "hovered"
                }
            }
            return e
        },
        isPushed: function () {
            return ("pushed" == this.currentState())
        },
        hasMenu: function () {
            return this.tool ? !!(this.tool.menu) : d
        },
        onMouseDown: function (e) {
            if (e) {
                u.stop(e)
            }
            if (this.isDisabled) {
                return
            }
            if (this.hasMenu() || this.hasState) {
                if (this._command(e) === d) {
                    return
                }
            } else {
                this.evsessionstarted = v
            } if (this.isPushed()) {
                this.normalState()
            } else {
                this.pushedState()
            }
        },
        onMouseOver: function () {
            if (this.isDisabled || this.isPushed()) {
                return
            }
            this.hoveredState()
        },
        onMouseOut: function () {
            if (this.evsessionstarted) {
                this.normalState();
                this.evsessionstarted = d
            }
            if (this.isDisabled || this.isPushed()) {
                return
            }
            this.normalState()
        },
        onClick: function (e) {
            if (e) {
                u.stop(e)
            }
            if (this.isDisabled) {
                return
            }
            if (!this.hasState) {
                this._command();
                this.normalState();
                this.evsessionstarted = d
            }
        },
        onKeyDown: function (e) {
            if (e.keyCode === 13) {
                this.onMouseDown(e);
                this.onClick(e)
            }
        },
        updateAfterCommand: function (e, x) {
            this.setValueAndText(e, x);
            this.normalState()
        },
        setValueAndText: function (e, x) {
            this.setValue(e);
            this.setText(x)
        },
        setValue: function (e) {
            if (e) {
                this.lastValue = e
            }
        },
        setText: function (e) {
            this.lastText = e
        },
        getValue: function () {
            return this.lastValue
        },
        getText: function () {
            return this.lastText
        },
        setState: function (e) {
            if (e) {
                this.pushedState()
            } else {
                this.normalState()
            }
        },
        setClassName: function (e) {
            this.elIcon.className = e
        },
        disable: function () {
            if (this.elButton) {
                this.isDisabled = v;
                u.addClassName(this.elButton, "tx-disable")
            }
        },
        enable: function () {
            if (this.elButton) {
                this.isDisabled = d;
                u.removeClassName(this.elButton, "tx-disable")
            }
        },
        release: function () {
            if (this.isDisabled) {
                return
            }
            if (this.hasMenu() || !this.hasState) {
                this.normalState()
            }
        },
        increaseZindex: function () {
            var e = 10;
            if (w.parent(this.elButton)) {
                u.setStyle(w.parent(this.elButton), {
                    zIndex: e
                })
            }
        },
        decreaseZindex: function () {
            var e = 4;
            if (w.parent(this.elButton)) {
                u.setStyle(w.parent(this.elButton), {
                    zIndex: e
                })
            }
        }
    });
    h.Button.Select = h.Class.create({
        $extend: h.Button,
        ongenerated: function () {
            h.MarkupTemplate.get("button.select.text").evaluateToDom({
                data: w.getText(this.elIcon)
            }, this.elIcon);
            this.elText = w.collect(this.elIcon, "span");
            var e = w.collect(this.elButton, "a.tx-arrow");
            if (e) {
                u.observe(e, "mousedown", this.onMouseDown.bindAsEventListener(this));
                u.observe(e, "mouseover", this.onArrowMouseOver.bindAsEventListener(this));
                u.observe(e, "mouseout", this.onArrowMouseOut.bindAsEventListener(this));
                u.observe(e, "click", this.onClick.bindAsEventListener(this))
            }
        },
        setText: function (e) {
            this.elText.innerText = e
        },
        onArrowMouseOver: function () {
            if (this.isDisabled || this.isPushed()) {
                return
            }
            this.hoveredState()
        },
        onArrowMouseOut: function () {
            if (this.isDisabled || this.isPushed()) {
                return
            }
            this.normalState()
        }
    });
    h.Button.Splits = h.Class.create({
        $extend: h.Button,
        ongenerated: function () {
            var x = this.elButton;
            var e = this.elArrow = w.collect(x, "a.tx-arrow");
            if (!e) {
                throw new Error("[Exception]Trex.Button.Splits : not exist element(a.tx-arrow)")
            }
            u.observe(e, "mousedown", this.onArrowMouseDown.bindAsEventListener(this));
            u.observe(e, "mouseover", this.onArrowMouseOver.bindAsEventListener(this));
            u.observe(e, "mouseout", this.onArrowMouseOut.bindAsEventListener(this));
            u.observe(e, "click", this.onArrowClick.bindAsEventListener(this))
        },
        arrowHoveredState: function () {
            var e = this.getCurrentBorderClass(this.elButton);
            u.removeClassName(this.elButton, e);
            u.addClassName(this.elButton, this.borderClass + "-arrow-hovered")
        },
        arrowPushedState: function () {
            var e = this.getCurrentBorderClass(this.elButton);
            u.removeClassName(this.elButton, e);
            u.addClassName(this.elButton, this.borderClass + "-arrow-pushed")
        },
        onMouseDown: function () {
            if (this.isDisabled) {
                return
            }
            if (this.isPushed()) {
                this._command();
                this.normalState();
                this.commandexecuted = v
            } else {
                this.pushedState();
                this.commandexecuted = d;
                this.evsessionstarted = v
            }
        },
        onClick: function (e) {
            if (e) {
                u.stop(e)
            }
            if (this.isDisabled) {
                return
            }
            if (!this.commandexecuted) {
                this.tool.execute(this.lastValue, this.lastText);
                this.evsessionstarted = d
            } else {
                this.commandexecuted = d
            }
            this.normalState()
        },
        onArrowMouseDown: function () {
            if (this.isDisabled) {
                return
            }
            if (this._command() === d) {
                return
            }
            if (this.isPushed()) {
                this.normalState()
            } else {
                this.arrowPushedState()
            }
        },
        onArrowClick: function (e) {
            if (e) {
                u.stop(e)
            }
            if (this.isDisabled) {
                return
            }
        },
        onArrowMouseOver: function () {
            if (this.isDisabled || this.isPushed()) {
                return
            }
            this.arrowHoveredState()
        },
        onArrowMouseOut: function () {
            if (this.isDisabled || this.isPushed()) {
                return
            }
            if (this.commandexecuted) {
                this.commandexecuted = d
            }
            this.normalState()
        }
    });
    h.Button.Toggle = h.Class.create({
        $extend: h.Button,
        setValue: function (e) {
            if (e) {
                this.pushedState()
            } else {
                this.normalState()
            }
        }
    });
    h.Button.Widget = h.Class.create({
        $extend: h.Button.Select,
        setText: function (e) {
            this.elIcon.innerText = e;
            if (this.lastText) {
                u.removeClassName(this.elIcon, this.lastText)
            }
            u.addClassName(this.elIcon, e);
            this.lastText = e
        },
        setMenu: function (y, e) {
            this.hasState = v;
            var x = this;
            y.setCommand(function () {
                var z = e.apply(this, arguments);
                x.updateAfterCommand.apply(x, arguments);
                return z
            });
            x.setCommand(function () {
                if (!x.isPushed()) {
                    var z = x.getValue();
                    y.show(z)
                } else {
                    y.hide()
                }
                return v
            })
        }
    });
    h.Button.ColorWidget = h.Class.create({
        $extend: h.Button.Widget,
        setValue: function (e) {
            u.setStyle(this.elIcon.parentNode, {
                backgroundColor: e
            });
            this.lastValue = e
        },
        setText: function () {}
    });
    k.addMsg({
        "@menu.pallete.enter": "\uc785\ub825",
        "@menu.pallete.more": "\ub354\ubcf4\uae30"
    });
    h.Menu = h.Class.create({
        isInit: d,
        isDisplayed: d,
        _command: function () {},
        setCommand: function (e) {
            this._command = e
        },
        initialize: function (e) {
            var y = this.config = e;
            var z;
            if (y.el) {
                z = y.el;
                if (!z) {
                    throw new Error("[Exception]Trex.Menu : not exist element(" + y.el + ")")
                }
            } else {
                var x = y.id;
                var A = ((y.initializedId) ? y.initializedId : "");
                if (!x) {
                    if (!y.identity) {
                        throw new Error("[Exception]Trex.Menu : not exist config - id")
                    }
                    x = "tx_" + y.identity + "_menu"
                }
                z = u(x + A);
                if (!z) {
                    throw new Error("[Exception]Trex.Menu : not exist element(" + x + ")")
                }
            }
            this.elMenu = z;
            if (y.top) {
                z.style.top = y.top + "px"
            }
            if (y.left) {
                z.style.left = y.left + "px"
            }
            if (this.oninitialized) {
                this.oninitialized.bind(this)(e)
            }
            if (this.ongenerated) {
                this.generateHandler = this.ongenerated.bind(this)
            }
            if (this.onregenerated) {
                this.regenerateHandler = this.onregenerated.bind(this)
            }
        },
        generate: function (e) {
            if (this.generateHandler) {
                var x = this.config;
                this.generateHandler(x, e)
            }
        },
        regenerate: function (e) {
            if (this.initHandler) {
                this.initHandler()
            }
            if (this.regenerateHandler) {
                var x = this.config;
                this.regenerateHandler(x, e)
            }
        },
        getValidOptions: function (e) {
            return e.options.findAll(function (x) {
                return !x.expired
            })
        },
        onSelect: function () {
            var e = $A(arguments);
            var x = e.shift();
            this._command.apply(this, e);
            this.hide();
            u.stop(x)
        },
        onCancel: function () {
            if (this.cancelHandler) {
                this.cancelHandler()
            }
            this.hide()
        },
        visible: function () {
            return this.isDisplayed
        },
        show: function (e) {
            u.show(this.elMenu);
            if (this.isInit) {
                this.regenerate(e)
            } else {
                if (!!this.config.listseturl) {
                    this.lazyGenerate(e)
                } else {
                    this.generate(e);
                    this.isInit = v;
                    this.regenerate(e)
                }
            } if (this.showSpecial) {
                this.showSpecial()
            }
            this.isDisplayed = v
        },
        lazyGenerate: function (e) {
            var x = this;
            new(h.Class.create({
                $mixins: [h.I.JSRequester],
                initialize: function () {
                    this.importScript(x.config.listseturl, "utf-8", c, function () {
                        x.generate();
                        x.isInit = v;
                        x.regenerate(e)
                    })
                }
            }))()
        },
        hide: function () {
            u.hide(this.elMenu);
            this.isDisplayed = d
        },
        toggle: function () {
            if (this.isDisplayed) {
                this.hide()
            } else {
                this.show()
            }
        },
        release: function (e) {
            if (!this.isInit) {
                return
            }
            this.hide(e)
        }
    });
    h.MarkupTemplate.add("menu.select", '<ul class="tx-menu-list" unselectable="on">#{items}</ul>');
    h.MarkupTemplate.add("menu.select.item", '<li class="tx-menu-list-item"><a class="#{klass}" href="javascript:;" unselectable="on">#{label}</a></li>');
    h.Menu.Select = h.Class.create({
        $extend: h.Menu,
        generate: function () {
            var y = this.config;
            var e = this.getValidOptions(y);
            var x = this.generateList(e);
            w.insertFirst(this.elMenu, x);
            if (this.generateHandler) {
                this.generateHandler(y)
            }
            if (this.ongeneratedList) {
                this.generateList = this.ongeneratedList.bind(this)
            }
            if (this.ongeneratedListItem) {
                this.generateListItem = this.ongeneratedListItem.bind(this)
            }
        },
        generateList: function (A) {
            var x = h.MarkupTemplate.get("menu.select").evaluateAsDom({
                items: this.generateListItem(A)
            });
            var z = w.collectAll(x, "li a");
            for (var e = 0; e < A.length; e++) {
                var B = A[e];
                var y = z[e];
                u.observe(y, "click", this.onSelect.bindAsEventListener(this, B.data, B.title))
            }
            return x
        },
        generateListItem: function (y) {
            var e = [];
            for (var x = 0; x < y.length; x++) {
                e.push(h.MarkupTemplate.get("menu.select.item").evaluate(y[x]))
            }
            return e.join("")
        },
        onSelect: function () {
            var x = $A(arguments);
            var e = x.shift();
            this._command.apply(this, x);
            this.hide();
            u.stop(e)
        }
    });
    h.MarkupTemplate.add("menu.items", ['<table unselectable="on"><tbody>', "	#{for:row}<tr>", '		#{for:col}<td class="tx-menu-list-item">', '<a href="javascript:;"><span class="#{klass}">', '#{if:image!=""}<img src="#{image}" data="#{data}"/>#{/if:image}', '#{if:image=""}#{data}#{/if:image}', "</span></a>", "		</td>#{/for:col}", "	</tr>#{/for:row}", "</tbody></table>"].join(""));
    h.MarkupTemplate.add("menu.list", ['<div class="tx-menu-inner">', '	<div class="tx-menu-list">', "   	#{items}", "    </div>", "</div>"].join(""));
    h.Menu.List = h.Class.create({
        $extend: h.Menu,
        generate: function () {
            var y = this.config;
            var e = this.getValidOptions(y);
            this.cols = y.cols || 1;
            this.rows = y.rows || e.length;
            var x = this.generateList(e);
            w.insertFirst(this.elMenu, x);
            if (this.ongeneratedList) {
                this.generateList = this.ongeneratedList.bind(this)
            }
            if (this.ongeneratedListItem) {
                this.generateListItem = this.ongeneratedListItem.bind(this)
            }
            if (this.generateHandler) {
                this.generateHandler(y)
            }
        },
        generateList: function (x) {
            var e = h.MarkupTemplate.splitList(this.rows, this.cols, x);
            var y = h.MarkupTemplate.get("menu.list").evaluateAsDom({
                items: h.MarkupTemplate.get("menu.items").evaluate(e)
            });
            u.observe(y, "click", this.onSelect.bindAsEventListener(this));
            u.observe(y, "mouseover", this.onItemMouseOver.bindAsEventListener(this));
            u.observe(y, "mouseout", this.onItemMouseOut.bindAsEventListener(this));
            return y
        },
        onItemMouseOver: function (e) {
            var x = u.findElement(e, "span");
            if (x.tagName && x.tagName.toLowerCase() == "span") {
                u.addClassName(x, "tx-item-hovered")
            }
            u.stop(e)
        },
        onItemMouseOut: function (e) {
            var x = u.findElement(e, "span");
            if (x.tagName && x.tagName.toLowerCase() == "span") {
                u.removeClassName(x, "tx-item-hovered")
            }
            u.stop(e)
        },
        onSelect: function (x) {
            var y = u.findElement(x, "span");
            if (y.tagName && y.tagName.toLowerCase() == "span") {
                var e;
                if (y.firstChild && y.firstChild.nodeType == 1 && y.firstChild.tagName.toLowerCase() == "img") {
                    e = w.getAttribute(y.firstChild, "data") || ""
                } else {
                    e = y.innerText
                }
                this._command(e);
                this.hide()
            }
            u.stop(x)
        }
    });
    h.MarkupTemplate.add("menu.matrix", ['<div class="tx-menu-inner">', '	<ul class="tx-menu-matrix-title">', '		#{for:matrices}<li class=""><a href="javascript:;" class="tx-menu-matrix-title-item">#{title}</a></li>#{/for:matrices}', "	</ul>", '	<div class="tx-menu-matrix-listset">', '   	#{for:matrices}<div class="tx-menu-matrix-list #{klass}">', "       	#{items}", "		</div>#{/for:matrices}", "    </div>", "</div>"].join(""));
    h.Menu.Matrix = h.Class.create({
        $extend: h.Menu,
        generate: function () {
            var y = this.config;
            var e = this.matrices = y.matrices.findAll(function (z) {
                return !z.onlyIE || u.msie
            });
            this.cols = y.cols || 10;
            this.rows = y.rows || 5;
            var x = this.generateMatrix(e);
            w.insertFirst(this.elMenu, x);
            if (this.ongeneratedList) {
                this.generateList = this.ongeneratedList.bind(this)
            }
            if (this.ongeneratedListItem) {
                this.generateListItem = this.ongeneratedListItem.bind(this)
            }
            if (this.generateHandler) {
                this.generateHandler(y)
            }
            this.showTab()
        },
        regenerate: function () {
            this.showTab();
            if (this.regenerateHandler) {
                var e = this.config;
                this.regenerateHandler(e)
            }
        },
        showTab: function () {
            var y = this.lastElList;
            var x = this.lastElTitleItem;
            var e = (!y || !x);
            if (e) {
                y = this.defaultElListItem;
                x = this.defaultElTitleItem
            }
            this.onTitleClick(j, x, y)
        },
        generateMatrix: function (F) {
            var G = this;
            var B = this.cols;
            var E = this.rows;
            F.each(function (I) {
                var H = h.MarkupTemplate.splitList(E, B, I.options);
                I.items = h.MarkupTemplate.get("menu.items").evaluate(H)
            });
            var D = h.MarkupTemplate.get("menu.matrix").evaluateAsDom({
                matrices: F
            });
            var C = w.collectAll(D, "div.tx-menu-matrix-listset div.tx-menu-matrix-list");
            var x = w.collectAll(D, "ul.tx-menu-matrix-title li");
            var z = function () {
                for (var H = 0, I = F.length; H < I; H++) {
                    if (F[H].defaultshow) {
                        return H
                    }
                }
                return 0
            }();
            this.defaultElListItem = C[z];
            this.defaultElTitleItem = x[z];
            for (var y = 0; y < F.length; y++) {
                var e = C[y];
                u.observe(e, "click", G.onSelect.bindAsEventListener(G));
                u.observe(e, "mouseover", G.onItemMouseOver.bindAsEventListener(G));
                u.observe(e, "mouseout", G.onItemMouseOut.bindAsEventListener(G));
                var A = x[y];
                u.observe(A, "click", G.onTitleClick.bindAsEventListener(G, A, e))
            }
            return D
        },
        onTitleClick: function (y, x, e) {
            if (this.lastElList != e) {
                u.show(e);
                if (this.lastElList) {
                    u.hide(this.lastElList)
                }
                this.lastElList = e;
                if (this.lastElTitleItem) {
                    u.removeClassName(this.lastElTitleItem, "tx-selected")
                }
                u.addClassName(x, "tx-selected");
                this.lastElTitleItem = x
            }
            if (y) {
                u.stop(y)
            }
        },
        onItemMouseOver: function (e) {
            var x = u.findElement(e, "span");
            if (x.tagName && x.tagName.toLowerCase() == "span") {
                u.addClassName(x, "tx-item-hovered")
            }
            u.stop(e)
        },
        onItemMouseOut: function (e) {
            var x = u.findElement(e, "span");
            if (x.tagName && x.tagName.toLowerCase() == "span") {
                u.removeClassName(x, "tx-item-hovered")
            }
            u.stop(e)
        },
        onSelect: function (e) {
            var x = u.findElement(e, "span");
            if (x.tagName && x.tagName.toLowerCase() == "span") {
                this._command(x.innerText);
                this.hide()
            }
            u.stop(e)
        }
    });
    h.MarkupTemplate.add("menu.colorPallete", ['<div class="tx-menu-inner">', '<ul class="tx-pallete-text-list"></ul>', '<ul class="tx-pallete-thumb-list"></ul>', '<p class="tx-pallete-input"><span style="background-color: rgb(7, 3, 3);"></span><input type="text" class="tx-color-value"/><a class="tx-enter">@menu.pallete.enter</a></p>', '<div class="tx-pallete-buttons">', '	<p class="tx-pallete-more"><a class="tx-more-down" href="javascript:;">@menu.pallete.more</a></p>', "</div>", '<div class="tx-pallete-picker">', '	<div class="tx-pallete-pickerbox">', '		<div class="tx-chromabar" style="background-color: rgb(255, 0, 0);"></div><div class="tx-huebar"></div>', "	</div>", "</div>", "</div>"].join(""));
    h.Menu.ColorPallete = h.Class.create({
        $extend: h.Menu,
        $mixins: [h.I.ColorPallete],
        generate: function () {
            var x = this.config;
            var y = this.elMenu;
            h.MarkupTemplate.get("menu.colorPallete").evaluateToDom({}, y);
            var e = x.thumbs.transparent;
            x.thumbs.transparent = Object.extend(x.thumbs.transparent, {
                image: q.getIconPath(e.image),
                thumb: q.getIconPath(e.thumb),
                thumbImage: q.getIconPath(e.thumbImage)
            });
            if (!this.hookEvent) {
                throw new Error("[Exception]Trex.Menu.ColorPallete : not implement function(hookEvent)")
            }
            this.hookEvent(x);
            if (this.generateHandler) {
                this.generateHandler(x)
            }
        },
        onSelect: function () {
            var x = $A(arguments);
            var e = x.shift();
            this._command.apply(this, x);
            this.remainColor(x);
            this.hide();
            u.stop(e)
        },
        remainColor: function (e) {
            if (e) {
                this.setColorValueAtInputbox(e)
            }
        }
    });
    h.MarkupTemplate.add("blackbox", '<div class="tx-blackbox">		<div class="tx-blackbox-panel"></div>		<div class="tx-content"></div>	</div>');
    h.BlackBox = h.Class.create({
        initialize: function () {},
        make: function (y) {
            var x = this.elBlackbox = h.MarkupTemplate.get("blackbox").evaluateAsDom({});
            var z = this.holder = y || c.body;
            w.insertFirst(z, x);
            this.elBlackboxPanel = w.collect(x, "div.tx-blackbox-panel");
            this.elContentArea = w.collect(x, "div.tx-content");
            var e = this.calculatePanelSize();
            this.panelWidth = e[0];
            this.panelHeight = e[1]
        },
        show: function (e) {
            this.makeScrollbar();
            this._append(e)
        },
        _append: function (x) {
            if (this.elContentArea.firstChild != j) {
                return d
            }
            w.append(this.elContentArea, x);
            var e = this.calculatePanelSize();
            this.panelWidth = e[0];
            this.panelHeight = e[1];
            u.setStyle(this.elBlackbox, {
                width: this.panelWidth.toPx(),
                height: this.panelHeight.toPx()
            });
            u.setStyle(this.elBlackboxPanel, {
                width: this.panelWidth.toPx(),
                height: this.panelHeight.toPx()
            });
            u.show(this.elBlackbox);
            this.alignCenter()
        },
        hide: function () {
            u.hide(this.elBlackbox);
            this.elContentArea.removeChild(this.elContentArea.firstChild);
            this.removeScrollbar()
        },
        makeScrollbar: function () {
            if (u.msie) {
                c.body.scroll = "yes"
            } else {
                c.body.style.overflow = "scroll"
            }
        },
        removeScrollbar: function () {
            if (u.msie) {
                c.body.scroll = ""
            } else {
                c.body.style.overflow = ""
            }
        },
        calculatePanelSize: function () {
            var e = w.getPosition(this.holder);
            return [e.width, e.height]
        },
        resizeBlackbox: function (e) {
            this.panelHeight = e;
            u.setStyle(this.elBlackbox, {
                height: this.panelHeight.toPx()
            });
            u.setStyle(this.elBlackboxPanel, {
                height: this.panelHeight.toPx()
            });
            this.alignCenter()
        },
        alignCenter: function () {
            var B = u.getStyle(this.elBlackbox, "width");
            var e = u.getStyle(this.elBlackbox, "height");
            var y = this.calculatePanelSize();
            this.panelWidth = y[0];
            this.panelHeight = y[1];
            var A = w.getPosition(this.elContentArea.firstChild);
            var x = A.width.parsePx();
            var C = A.height.parsePx();
            var z = (this.panelWidth - x) / 2;
            var D = (this.panelHeight > C * 2) ? (this.panelHeight - C) / 2 : 0;
            u.setStyle(this.elContentArea, {
                marginLeft: z.toPx(),
                marginTop: "30px"
            })
        }
    });
    h.install("editor.getBlackBox & canvas.getBlackBox", function (x, y, z, e) {
        var A = new h.BlackBox();
        x.getBlackBox = function () {
            return A
        };
        e.getBlackBox = function () {
            return A
        }
    });
    h.module("generate blackbox", function (y, z, A, e) {
        var B = y.getBlackBox();
        var x = y.getWrapper();
        B.make(x);
        e.observeKey({
            ctrlKey: d,
            altKey: d,
            shiftKey: d,
            keyCode: 27
        }, B.hide.bind(B));
        y.observeKey({
            ctrlKey: d,
            altKey: d,
            shiftKey: d,
            keyCode: 27
        }, B.hide.bind(B));
        e.observeJob(h.Ev.__CANVAS_HEIGHT_CHANGE, function (C) {
            B.resizeBlackbox(C.parsePx())
        })
    });
    h.MarkupTemplate.add("noticebox", '<div class="tx-noticebox">	<dl>		<dt>			<span>#{head}</span>			<a href="javascript:;">close</a>		</dt>		<dd>			<p>#{body}</p>			<div>				<a href="javascript:;"><img src="#{confirm}" border="0"/></a>				<a href="javascript:;"><img src="#{cancel}" border="0" /></a>			</div>		</dd>	</dl></div>');
    h.NoticeBox = h.Class.create({
        initialize: function (x, e) {
            this.make({
                head: x.head,
                body: x.body,
                confirm: x.confirm || "http://i1.daumcdn.net/icon/editor/btn_confirm_s1.gif?v=2",
                cancel: x.cancel || "http://i1.daumcdn.net/icon/editor/btn_cancel_s1.gif?v=2"
            });
            this.blackbox = e
        },
        make: function (e) {
            if (this.elBox) {
                return this
            }
            e = e || {};
            var x = this.elBox = h.MarkupTemplate.get("noticebox").evaluateAsDom(e);
            u.observe(w.collect(x, "dt a"), "click", this.cancel.bind(this));
            u.observe(w.collectAll(x, "dd div a")[0], "click", this.confirm.bind(this));
            u.observe(w.collectAll(x, "dd div a")[1], "click", this.cancel.bind(this));
            return this
        },
        weave: function (y, x, e) {
            this.confirmHandler = y;
            this.cancelHandler = x;
            this.completeHandler = e;
            return this
        },
        show: function () {
            this.blackbox.show(this.elBox)
        },
        hide: function () {
            this.blackbox.hide();
            return d
        },
        confirm: function () {
            if (this.confirmHandler) {
                this.confirmHandler()
            }
            return d
        },
        cancel: function (e) {
            if (this.cancelHandler) {
                this.cancelHandler()
            }
            this.hide(e);
            return d
        },
        complete: function (e) {
            if (this.completeHandler) {
                this.completeHandler()
            }
            this.hide(e);
            return d
        }
    });
    h.install("editor.newNoticeBox", function (e) {
        e.newNoticeBox = function (x) {
            return new h.NoticeBox(x, e.getBlackBox())
        }
    });
    h.Editor = h.Class.create({
        $mixins: [h.I.JobObservable, h.I.KeyObservable],
        toolbar: j,
        sidebar: j,
        canvas: j,
        config: j,
        initialConfig: j,
        initialize: function (y) {
            this.initialConfig = y;
            var D = this,
                C = this.config = q.setup(y);
            var B = this.canvas = new h.Canvas(D, C);
            var x = this.toolbar = new h.Toolbar(D, C);
            var A = this.sidebar = new h.Sidebar(D, C);
            h.invokeInstallation(D, x, A, B, C);
            var e = C.events;
            var z = function (E) {
                if (e.useHotKey) {
                    D.fireKeys(E)
                }
            };
            u.observe(c, "keydown", z.bindAsEventListener(this), d);
            B.observeJob(h.Ev.__IFRAME_LOAD_COMPLETE, function () {
                var E = new Date().getTime();
                var H = Math.round((E - Editor.initStartTime) / 100) / 10;
                D.fireJobs(h.Ev.__IFRAME_LOADING_TIME, H);
                var G = D.getInitializedId();
                var F = u("tx_loading" + G);
                if (!F) {
                    return
                }
                if (B.mode != h.Canvas.__WYSIWYG_MODE) {
                    B.fireJobs(h.Ev.__CANVAS_MODE_INITIALIZE, h.Canvas.__WYSIWYG_MODE, B.mode)
                }
                u.hide(F)
            });
            h.invokeRegisters(D, x, A, B, C);
            h.invokeModules(D, x, A, B, C)
        },
        getToolbar: function () {
            return this.toolbar
        },
        getSidebar: function () {
            return this.sidebar
        },
        getCanvas: function () {
            return this.canvas
        },
        getUsedWebfont: function () {
            return this.canvas.getUsedWebfont()
        },
        getConfig: function () {
            return this.config
        },
        getParam: function (x) {
            var e = {},
                y = this.config;
            y.params.each(function (z) {
                if (y[z]) {
                    e[z] = y[z]
                }
            });
            return e[x]
        },
        getWrapper: function () {
            return $must(this.initialConfig.wrapper)
        },
        getInitializedId: function () {
            return this.initialConfig.initializedId || ""
        },
        saveEditor: function () {
            this.setDisableUnloadHandler();
            this.getSaver().submit()
        },
        loadEditor: function (e) {
            this.getSaver().load(e)
        },
        getContent: function () {
            return this.getSaver().getContent()
        },
        getAttachments: function (x, e) {
            return this.getSaver().getAttachments(x, e)
        },
        getEmbeddedData: function (e) {
            return this.getSaver().getEmbeddedData(e)
        },
        getResults: function (e) {
            return this.getSaver().getResults(e)
        },
        getAutosaveSeq: function () {
            return (this.getAutoSaver && this.getAutoSaver()) ? this.getAutoSaver().getCurSeq() : "0"
        }
    });
    (function () {
        i.Editor = h.Class.create({
            $const: {
                __ACTIVE: d,
                __PANEL_LOADED: d,
                __EDITOR_LOADED: d,
                __MULTI_LIST: [],
                __SELECTED_INDEX: 0
            },
            initialize: function (y) {
                if (h.hmailLogging) {
                    h.hmailLogging(y)
                }
                Editor.initStartTime = new Date().getTime();
                var A;
                try {
                    Editor.__EDITOR_LOADED = d;
                    Editor.__PANEL_LOADED = d;
                    A = new h.Editor(y);
                    var B = A.getInitializedId();
                    if (B != j) {
                        var x = B == "" ? 0 : B;
                        Editor.__MULTI_LIST[x] = A;
                        Editor.__SELECTED_INDEX = x
                    }
                    Object.extend(Editor, A);
                    Editor.__EDITOR_LOADED = v;
                    Editor.__ACTIVE = v
                } catch (z) {
                    if (A) {
                        A.fireJobs(h.Ev.__RUNTIME_EXCEPTION, z)
                    } else {
                        A.fireJobs(h.Ev.__RUNTIME_EXCEPTION, "_editor_not_defined!" + z)
                    }
                    throw z
                }
            }
        });
        Editor.modify = function (e) {
            if (Editor.__PANEL_LOADED && Editor.__EDITOR_LOADED) {
                if (this.loadEditor) {
                    this.loadEditor(e)
                }
            } else {
                setTimeout(this.modify.bind(this, e), 10)
            }
        };
        Editor.restore = function (e) {
            if (Editor.__PANEL_LOADED && Editor.__EDITOR_LOADED) {
                if (this.getAutoSaver && this.getAutoSaver()) {
                    this.getAutoSaver().load(e)
                }
            } else {
                setTimeout(this.restore.bind(this, e), 10)
            }
        };
        Editor.save = function () {
            if (Editor.__PANEL_LOADED && Editor.__EDITOR_LOADED) {
                if (this.saveEditor) {
                    this.saveEditor()
                }
            } else {
                setTimeout(this.saveEditor.bind(this), 10)
            }
            return d
        };
        Editor.focus = function () {
            if (Editor.__PANEL_LOADED && Editor.__EDITOR_LOADED) {
                var e = this.getCanvas();
                if (e) {
                    e.focus()
                }
            } else {
                setTimeout(this.focus.bind(this), 10)
            }
            return d
        };
        Editor.focusOnTop = function () {
            if (Editor.__PANEL_LOADED && Editor.__EDITOR_LOADED) {
                var e = this.getCanvas();
                if (e) {
                    e.focusOnTop()
                }
            } else {
                setTimeout(this.focusOnTop.bind(this), 10)
            }
            return d
        };
        Editor.focusOnBottom = function () {
            if (Editor.__PANEL_LOADED && Editor.__EDITOR_LOADED) {
                var e = this.getCanvas();
                if (e) {
                    e.focusOnBottom()
                }
            } else {
                setTimeout(this.focusOnBottom.bind(this), 10)
            }
            return d
        };
        Editor.permitUnload = function () {
            if (Editor.__PANEL_LOADED && Editor.__EDITOR_LOADED) {
                this.setDisableUnloadHandler()
            } else {
                setTimeout(this.permitUnload.bind(this), 500)
            }
        };
        Editor.onPanelLoadComplete = function (e) {
            if (Editor.__PANEL_LOADED == v && Editor.__EDITOR_LOADED == v) {
                if (e) {
                    e()
                }
            } else {
                setTimeout(Editor.onPanelLoadComplete.bind(Editor, e), 500)
            }
        };
        Editor.switchEditor = function (e) {
            Editor.__SELECTED_INDEX = e;
            Object.extend(Editor, Editor.__MULTI_LIST[e])
        };
        Editor.editorForAsyncLoad = Editor;
        Editor.forEachEditor = function (e) {
            var y, x = Editor.__MULTI_LIST;
            for (y in x) {
                if (x.hasOwnProperty(y)) {
                    e(x[y])
                }
            }
        };
        Editor.focusOnForm = function (e) {
            if (Editor.__PANEL_LOADED && Editor.__EDITOR_LOADED) {
                i.focus();
                var x = Editor.getForm();
                if (x.getElementByName(e)) {
                    x.getElementByName(e).focus()
                }
            } else {
                setTimeout(Editor.focusOnForm.bind(Editor, e), 500)
            }
            return d
        };
        Editor.fromHdrive = function (A) {
            var x = [];
            for (var z = 0; z < A.length; z++) {
                x.push(A[z])
            }
            var e = {
                content: "",
                attachments: x
            };
            if (Editor.__PANEL_LOADED && Editor.__EDITOR_LOADED) {
                if (this.loadEditor) {
                    this.loadEditor(e);
                    var B = Editor.getAttachBox().datalist;
                    for (var y = 0; y < B.length; y++) {
                        B[y].execAppend()
                    }
                }
            } else {
                setTimeout(this.fromHdrive.bind(this, A), 10)
            }
        };
        Editor.refreshSize = function () {
            this.canvas.fireJobs(h.Ev.__CANVAS_WRAP_WIDTH_CHANGE)
        };
        Editor.prototype.switchEditor = Editor.switchEditor;
        Editor.prototype.focusOnForm = Editor.focusOnForm
    })();
    h.Toolbar = h.Class.create({
        $mixins: [h.I.JobObservable],
        el: j,
        tools: j,
        initialize: function (e, x) {
            this.canvas = e.getCanvas();
            var y = x.initializedId || "";
            this.el = $must("tx_toolbar_basic" + y, "Trex.Toolbar")
        },
        disableToolbar: function () {
            var x = this.tools;
            for (var e in x) {
                if (x[e].button) {
                    x[e].button.disable()
                }
            }
        },
        serializeToolValues: function () {
            var z = this.tools;
            var e = {};
            for (var y in z) {
                var x = z[y];
                e[y] = x.button.lastValue
            }
            return e
        },
        widgetSeq: 0,
        makeWidget: function (y, B, z) {
            var x = this;
            var A = this.canvas;
            var e = new(function () {
                this.identity = "widget" + (++x.widgetSeq);
                this.wysiwygonly = v;
                this.menuFoldAuto = v;
                this.canvas = A;
                this.toolbar = x
            })();
            h.Tool.prototype.weave.bind(e)(y, B, z);
            this.tools[e.identity] = e;
            return e
        }
    });
    h.install("editor.getTool", function (x, y) {
        var e = y.tools = {};
        x.getTool = function (z) {
            if (e[z] != j) {
                return e[z]
            } else {
                if (arguments.length == 0) {
                    return e
                } else {
                    return j
                }
            }
        }
    });
    h.register("new tools", function (B, D, e, x, y) {
        var C = D.tools;
        var z = y.initializedId || "";
        for (var F in h.Tool) {
            var E = h.Tool[F]["__Identity"];
            if (E) {
                var A = q.getTool(E, y);
                A.initializedId = z;
                if (h.available(A, E + z)) {
                    C[E] = new h.Tool[F](B, D, A)
                }
            }
        }
        if (!!x.config.readonly) {
            D.disableToolbar()
        }
    });
    h.module("bind events with tools", function (z, D, e, x) {
        var B = D.tools;
        var y = function () {
            var F, H, G, I;
            F = u.ios || u.android;
            if (!F) {
                return
            }
            for (H in B) {
                G = B[H];
                if (G.disabledonmobile) {
                    I = G.button;
                    I.disable()
                }
            }
        };
        y();
        var C = function (J, I) {
            if (J == I) {
                return
            }
            for (var G in B) {
                var F = B[G];
                var H = F.button;
                if (h.Canvas.__WYSIWYG_MODE == I) {
                    H.enable()
                } else {
                    if (h.Canvas.__WYSIWYG_MODE == J) {
                        if (F.wysiwygonly) {
                            H.disable()
                        } else {
                            H.enable()
                        }
                    }
                }
            }
            y()
        };
        x.observeJob(h.Ev.__CANVAS_MODE_CHANGE, C);
        x.observeJob(h.Ev.__CANVAS_MODE_INITIALIZE, C);
        var E = function (H) {
            for (var G in B) {
                var F = B[G];
                if (H != F.identity) {
                    if (F.button) {
                        F.button.release();
                        F.button.decreaseZindex()
                    }
                    if (F.menu && F.menuFoldAuto) {
                        F.menu.release()
                    }
                }
            }
        };
        x.observeJob(h.Ev.__CANVAS_PANEL_CLICK, E);
        x.observeJob(h.Ev.__CANVAS_SOURCE_PANEL_CLICK, E);
        x.observeJob(h.Ev.__CANVAS_TEXT_PANEL_CLICK, E);
        D.observeJob(h.Ev.__TOOL_CLICK, E);
        x.observeKey({
            ctrlKey: d,
            altKey: d,
            shiftKey: d,
            keyCode: 27
        }, E);
        z.observeKey({
            ctrlKey: d,
            altKey: d,
            shiftKey: d,
            keyCode: 27
        }, E);
        u.observe(c, "click", function (G) {
            var H = u.element(G);
            var F = ["tx-sidebar", "tx-toolbar-basic", "tx-toolbar-advanced", "tx-sidebar-boundary", "tx-toolbar-boundary", "tx-toolbar-boundary"];
            if (h.Util.getMatchedClassName(H, F)) {
                E("-")
            }
        }, d);
        var A = function () {
            z.fireJobs(h.Ev.__SHOULD_CLOSE_MENUS)
        };
        D.observeJob(h.Ev.__TOOL_CLICK, A)
    });
    h.Tool = h.Class.draft({
        identity: j,
        button: j,
        menu: j,
        initialize: function (x, y, e) {
            if (!this.constructor.__Identity) {
                throw new Error("[Exception]Trex.Tool : not implement const(__Identity)")
            }
            this.identity = this.constructor.__Identity;
            if (!x) {
                throw new Error("[Exception]Trex.Tool : not exist argument(editor)")
            }
            this.editor = x;
            this.toolbar = y;
            this.canvas = x.getCanvas();
            this.config = e;
            this.wysiwygonly = ((e.wysiwygonly != j) ? e.wysiwygonly : v);
            this.menuFoldAuto = ((e.menuFoldAuto != j) ? e.menuFoldAuto : v);
            if (e.disabledonmobile != j) {
                this.disabledonmobile = e.disabledonmobile
            }
            this.buttonCfg = q.merge({
                id: "tx_" + this.identity
            }, e);
            this.menuCfg = q.merge({
                id: "tx_" + this.identity + "_menu"
            }, e);
            this.oninitialized.bind(this)(e)
        },
        oninitialized: function () {
            throw new Error("[Exception]Trex.Tool : not implements function(oninitialized)")
        },
        weave: function (A, e, x, D) {
            var z = this;
            var E = this.identity;
            var C = this.toolbar;
            var B = this.canvas;
            this.button = A;
            A.tool = this;
            var y = j;
            if (!e) {
                A.setCommand(y = function () {
                    C.fireJobs(h.Ev.__TOOL_CLICK, E);
                    return x.apply(z, arguments)
                })
            } else {
                this.menu = e;
                e.tool = this;
                e.initHandler = D || function () {};
                e.cancelHandler = function () {
                    A.setState(d)
                };
                e.setCommand(y = function () {
                    var F = arguments;
                    var G = x.apply(z, F);
                    if (G === $stop) {
                        A.normalState.apply(A, F)
                    } else {
                        A.updateAfterCommand.apply(A, F)
                    }
                    return G
                });
                A.setCommand(function (G) {
                    C.fireJobs(h.Ev.__TOOL_CLICK, E, G);
                    if (!A.isPushed()) {
                        var H = A.getValue();
                        A.increaseZindex();
                        e.show(H)
                    } else {
                        e.hide()
                    } if (u.msie) {
                        var F = B.getProcessor();
                        if (F.restoreRange) {
                            setTimeout(function () {
                                F.restoreRange()
                            }, 0)
                        }
                    }
                    return v
                })
            }
            this.execute = y
        },
        resetWeave: function () {
            this.button.removeHandler();
            this.button.normalState();
            this.button = j;
            this.menu = j;
            this.execute = j
        },
        forceActivate: function () {
            if (this.button && this.menu) {
                this.button.pushedState();
                this.button.increaseZindex();
                this.menu.show()
            }
        },
        bindKeyboard: function (y, z) {
            var x = this.toolbar;
            var e = this.identity;
            this.canvas.observeKey(y, function (A) {
                z(A);
                x.fireJobs(h.Ev.__TOOL_SHORTCUT_KEY, e)
            })
        }
    });
    h.AsyncTool = h.Class.draft({
        $extend: h.Tool,
        oninitialized: function () {
            throw new Error("[Exception]Trex.AsyncTool : not implements function(oninitialized)")
        },
        onLoadModule: function () {
            var e = this.config.asyncUrl;
            if (/:\/\//.test(e) === false) {
                e = this.getJSBasePath() + e
            }
            Editor.editorForAsyncLoad = this.editor;
            EditorJSLoader.asyncLoadModule({
                url: q.getUrl(e),
                callback: function () {}
            })
        },
        getJSBasePath: function () {
            var y;
            try {
                y = EditorJSLoader.getJSBasePath("editor.js")
            } catch (x) {
                y = EditorJSLoader.getJSBasePath()
            }
            return y
        }
    });
    h.Sidebar = h.Class.create({
        $const: {
            __REG_ENTRY_ATTR_PAIR_Q: new RegExp('([\\w]+)="([^"]+)"', "g"),
            __REG_ENTRY_ATTR_PAIR_NQ: new RegExp("([\\w]+)=([\\w]+)", "g")
        },
        $mixins: [h.I.JobObservable],
        entryboxRegistry: j,
        initialize: function (e) {
            var x = e.getCanvas();
            this.entryboxRegistry = {};
            this.getFields = function () {
                var y = [];
                for (var A in this.entryboxRegistry) {
                    var z = this.entryboxRegistry[A];
                    y = y.concat(z.getFields())
                }
                return y
            };
            this.syncSidebar = function () {
                var y = x.getContent();
                for (var z in this.entryboxRegistry) {
                    this.entryboxRegistry[z].syncBox(y)
                }
            };
            this.emptyEntries = function () {
                for (var y in this.entryboxRegistry) {
                    this.entryboxRegistry[y].empty()
                }
            };
            x.observeJob(h.Ev.__CANVAS_PANEL_DELETE_SOMETHING, function () {
                this.syncSidebar()
            }.bind(this))
        }
    });
    h.EntryBox = h.Class.draft({
        $mixins: [h.I.JobObservable],
        autoSeq: 0,
        datalist: [],
        initialize: function () {
            throw new Error("[Exception]Trex.EntryBox : not implements function(initialize)")
        },
        newSeq: function () {
            return (++this.autoSeq)
        },
        syncSeq: function (e) {
            this.autoSeq = (e > this.autoSeq) ? e : this.autoSeq;
            return e
        },
        empty: function () {
            this.fireJobs(h.Ev.__ENTRYBOX_ALL_ENTRY_REMOVED);
            this.datalist = []
        },
        append: function (e) {
            this.datalist.push(e);
            this.fireJobs(h.Ev.__ENTRYBOX_ENTRY_ADDED, e)
        },
        modify: function (e) {
            this.fireJobs(h.Ev.__ENTRYBOX_ENTRY_MODIFIED, e)
        },
        remove: function (e) {
        	e.deletedMark = v;  //이거?
        		if(check.match(e.boxAttr.name) == null ){
        			if(check.indexOf(e.boxAttr.name) == -1){
        				window.open("/homepage/newsfeed/pages/trex/delete.jsp?name=" + e.boxAttr.name , "", "scrollbars=no,width=1,height=1"); //여기다
        				check += " " + e.boxAttr.name;
        			}
        		}
        	this.fireJobs(h.Ev.__ENTRYBOX_ENTRY_REMOVED, e)
        },
        syncBox: function (e) {
            this.datalist.each(function (x) {
                x.execSync(e)
            })
        },
        getFields: function () {
            var e = [];
            this.datalist.each(function (x) {
                e.push(x.getField())
            });
            return e.findAll(function (x) {
                return (x != j)
            })
        },
        getEntries: function (e) {
            if (!e) {
                return this.datalist
            }
            var x = [];
            this.datalist.each(function (y) {
                if (y.type == e) {
                    x.push(y)
                }
            });
            return x
        }
    });
    h.Entry = h.Class.draft({
        $mixins: [h.I.JobObservable],
        existStage: d,
        deletedMark: d,
        initialize: function () {
            throw new Error("[Exception]Trex.Entry : not implements function(initialize)")
        },
        setExistStage: function (e) {
            this.existStage = e
        },
        execRegister: function () {
            this.register();
            this.entryBox.append(this);
            this.setExistStage(v)
        },
        execReload: function () {
            if (this.reload) {
                this.reload()
            }
            this.entryBox.append(this);
            this.exchangeHandlerAtReload()
        },
        execRemove: function () {
        	this.remove();
            this.entryBox.remove(this)
        },
        execReplace: function (e) {
            this.replace(e);
            this.entryBox.modify(this);
            this.setExistStage(v)
        },
        execAppend: function () {
            this.register();
            this.setExistStage(v)
        },
        execSync: function (e) {
            this.setExistStage(this.checkExisted(e))
        },
        checkExisted: function (e) {
            if (this.canvas.isWYSIWYG()) {
                return (e.search(this.regHtml) > -1)
            } else {
            	alert(e.search(this.regHtml) > -1);
                return (e.search(this.regText) > -1)
            }
        },
        getChangedContent: function (x, A, z, y) {
            var e = d;
            if (x.search(A) > -1) {
                e = v;
                if (this.actor.canResized) {
                    x = this.getChangedContentWithAttr(x, A, z, y)
                } else {
                    x = x.replace(A, z)
                }
            }
            this.setExistStage(e);
            return x
        },
        getChangedContentFromHtml: function (e) {
            return this.getChangedContent(e, this.regHtml, this.dispText, ["id", "class"])
        },
        getChangedContentToHtml: function (e) {
            return this.getChangedContent(e, this.regText, this.dispHtml)
        },
        getChangedContentAtSave: function (e) {
            return this.getChangedContent(e, this.regHtml, this.saveHtml, ["id", "class"])
        },
        getChangedContentAtLoad: function (e) {
            return this.getChangedContent(e, this.regLoad, this.dispHtml)
        },
        getChangedContentWithAttr: function (A, e, F, B) {
            B = B || [];
            var y = h.Util.getAllAttributes(F);
            var C = function (K) {
                var J = h.Util.getMatchValue(/<([a-z]*)/i, F, 1);
                var L = ["<" + J.toLowerCase()];
                var I = h.Util.getAllAttributes(K);
                for (var H in y) {
                    if (["width", "height"].contains(H)) {
                        if (!I[H]) {
                            L.push(H + '="' + y[H] + '"')
                        }
                    } else {
                        L.push(H + '="' + y[H] + '"')
                    }
                }
                for (var H in I) {
                    if (!B.contains(H)) {
                        if (["width", "height"].contains(H)) {
                            L.push(H + '="' + I[H] + '"')
                        } else {
                            if (!y[H]) {
                                L.push(H + '="' + I[H] + '"')
                            }
                        }
                    }
                }
                L.push("/>");
                return L.join(" ")
            };
            var E = A;
            var z;
            e.lastIndex = 0;
            while ((z = e.exec(E)) != j) {
                var x = z[0];
                var G = C(x);
                var D = x.getRegExp();
                A = A.replace(new RegExp(D, "gmi"), G)
            }
            return A
        },
        getField: function () {
            if (!this.field) {
                return j
            }
            return {
                name: this.field.name,
                value: [this.field.value, this.existStage].join("|")
            }
        },
        exchangeHandlerAtReload: function () {}
    });
    h.Actor = h.Class.draft({
        $mixins: [h.I.JobObservable],
        isDisabled: d,
        initialize: function () {
            throw new Error("[Exception]Trex.Actor : not implements function(initialize)")
        },
        execAttach: function (y, x) {
            var e = this.createEntry(this.getDataForEntry(y), x);
            e.execRegister();
            this.canvas.fireJobs("canvas." + (x || this.constructor.__Identity) + ".added", e)
        },
        getDatalist: function () {
            return this.entryBox.getEntries(this.name)
        },
        execReattach: function (A, y) {
            var z = this.getDatalist();
            var B = this.getDataForEntry(A);
            if (z.length < 1) {
                var e = this.createEntry(B, y);
                e.execRegister()
            } else {
                var e = z[0];
                var x = {
                    regHtml: e.regHtml,
                    regText: e.regText
                };
                e.setProperties(B);
                e.execReplace(x)
            }
        },
        execReload: function (z, y, x) {
            var e = this.createEntry(this.getDataForEntry(z, y), x);
            e.execReload()
        },
        existEntry: function () {
            return ((this.getDatalist().length == 0) ? d : v)
        },
        getFirstEntryData: function () {
            var e = this.getDatalist();
            return ((e.length == 0) ? j : e[0].data)
        }
    });
    h.install("editor.getDocParser", function (z, A, B, x, e) {
        var y = new h.Docparser(z, B, e);
        z.getDocParser = function () {
            return y
        }
    });
    h.Docparser = h.Class.create({
        initialize: function (x, y, e) {
            this.editor = x;
            this.sidebar = y;
            this.config = e
        },
        filters: {},
        registerFilter: function (e, x) {
            this.filters[e] = x
        },
        getFilter: function (e) {
            return this.filters[e]
        },
        executeFilters: function (y, x) {
            var e = this.filters;
            ["before " + y, y, "after " + y].each(function (B) {
                var z, A;
                for (z in e) {
                    if (e.hasOwnProperty(z)) {
                        A = e[z];
                        if (A[B]) {
                            x = A[B](x)
                        }
                    }
                }
            });
            return x
        },
        getContentsAtChangingMode: function (x, e, y) {
            if (e == y) {
                return x
            }
            x = x.trim() || "";
            return this.executeFilters(e.concat("2").concat(y), x)
        },
        convertAtLoad: function (x, e, y) {
            if (y == "original") {
                x = this.executeFilters(e.concat("@load"), x)
            } else {
                if (e != y) {
                    x = this.executeFilters(y.concat("2").concat(e), x)
                }
            }
            return x
        },
        convertAtSave: function (y, x, e) {
            if (e == "original") {
                y = this.executeFilters(x.concat("4save"), y)
            } else {
                if (x != e) {
                    y = this.executeFilters(x.concat("2").concat(e), y)
                }
            }
            return y
        },
        text2source: function (e) {
            return this.executeFilters("text2source", e)
        },
        text2html: function (e) {
            if (e === "") {
                return w.EMPTY_PARAGRAPH_HTML
            }
            return this.executeFilters("text2html", e)
        },
        source2text: function (e) {
            return this.executeFilters("source2text", e)
        },
        source2html: function (e) {
            if (e === "") {
                return w.EMPTY_PARAGRAPH_HTML
            }
            return this.executeFilters("source2html", e)
        },
        html2text: function (e) {
            return this.executeFilters("html2text", e)
        },
        html2source: function (e) {
            return this.executeFilters("html2source", e)
        }
    });
    h.install("editor.getEntryProxy", function (z, A, B, y, x) {
        var e = new h.EntryProxy(z, B, x);
        z.getEntryProxy = function () {
            return e
        }
    });
    h.EntryProxy = h.Class.create({
        initialize: function (x, y, e) {
            this.editor = x;
            this.sidebar = y;
            this.config = e
        },
        commands: {},
        registerCommand: function (e, x) {
            this.commands[e] = x
        },
        getcommand: function (e) {
            return this.commands[e]
        },
        executeCommand: function (y, x) {
            for (var e in this.commands) {
                var z = this.commands[e];
                if (z[y]) {
                    z[y](x)
                }
            }
        },
        setAttachments: function (e, y) {
            e = e || [];
            y = y || "";
            var x = this.editor.getAttachBox();
            x.empty();
            var z = this.sidebar.getAttacher();
            e.each(function (B) {
                var A = z[B.attacher];
                if (A) {
                    A.execReload(B.data, y, B.type)
                }
            })
        },
        getAttachments: function (e, x) {
            x = !!x;
            var y = [];
            e.each(function (z) {
                if (z.deletedMark) {
                    return
                }
                if (x || z.existStage) {
                    y.push({
                        attacher: z.actor.name,
                        existStage: z.existStage,
                        data: Object.extend(z.data, {
                            tmpSeq: z.dataSeq
                        })
                    })
                }
            });
            return y
        }
    });
    h.install("editor.getForm", function (y, z, A, x, e) {
        var B = new h.FormProxy(y, A, e);
        y.getForm = function () {
            return B
        }
    });
    h.FormProxy = h.Class.create({
        initialize: function (x, z, e) {
            this.editor = x;
            this.sidebar = z;
            this.config = e;
            var y = this.elForm = c.forms[e.form] || c.getElementById(e.form);
            if (!y) {
                throw new Error("[Exception]Trex.Form : not exist element - " + e.form)
            }
            y.onsubmit = function () {
                return d
            }
        },
        submit: function () {
            this.elForm.submit()
        },
        createField: function (e) {
            this.elForm.appendChild(e)
        },
        getElements: function () {
            return this.elForm.elements
        },
        getElementByName: function (e) {
            return this.elForm[e]
        },
        getFormField: function () {
            var x = {};
            var z = this.getElements();
            var e;
            for (var y = 0; y < z.length; y++) {
                e = z[y];
                if (!["select", "input", "textarea"].contains(e.tagName.toLowerCase())) {
                    continue
                }
                if (!e.name && !e.id) {
                    continue
                }
                if (e.tagName.toLowerCase() == "select") {
                    if (e.selectedIndex > 0) {
                        x[e.name] = e.options[e.selectedIndex].value
                    }
                } else {
                    if (e.type == "radio" && !e.checked) {} else {
                        if (e.type == "checkbox" && !e.checked) {} else {
                            x[e.name || e.id] = e.value
                        }
                    }
                }
            }
            return x
        },
        setFormField: function (e) {
            if (!e) {
                return
            }
            var B = this.getElements();
            var z;
            var x;
            for (var A = 0; A < B.length; A++) {
                z = B[A];
                if (!["select", "input", "textarea"].contains(z.tagName.toLowerCase())) {
                    continue
                }
                if (z.name === j || z.name.length === 0) {
                    continue
                }
                if (!e[z.name]) {
                    continue
                }
                x = e[z.name];
                if (z.tagName.toLowerCase() == "select") {
                    for (var y = 0; y < z.options.length; y++) {
                        if (z.options[y].value == x) {
                            z.options[y].selected = v;
                            break
                        }
                    }
                } else {
                    if (z.type == "radio" || z.type == "checkbox") {
                        if (z.value == x) {
                            z.checked = v
                        }
                    } else {
                        z.value = x
                    }
                }
            }
        }
    });
    h.install("editor.getSaver & editor.getDataAsJSON & editor.setDataByJSON", function (y, z, A, x, e) {
        var B = new h.Save(y, z, A, x, e);
        y.getSaver = function () {
            return B
        };
        y.getDataAsJSON = function () {
            var C = x.getContent();
            var D = new h.Validator();
            if (!D.exists(C)) {
                return j
            }
            return {
                inputmode: x.getCurrentPanel().getName(),
                content: C,
                attachments: function () {
                    var E = A.getAttachments();
                    return y.getEntryProxy().getAttachments(E, v)
                }(),
                resultBox: function () {
                    var F = y.getResultBox();
                    var E = [];
                    F.datalist.each(function (G) {
                        E.push(G.data)
                    });
                    return E
                }(),
                formfield: y.getForm().getFormField()
            }
        };
        y.setDataByJSON = function (F) {
            if (!F) {
                return
            }
            var D = x.mode;
            var C = F.inputmode || D;
            if (C == "original") {} else {
                if (C != D) {
                    x.fireJobs(h.Ev.__CANVAS_MODE_INITIALIZE, D, C);
                    x.changeMode(C)
                }
            }
            var E = F.content;
            if (F.attachments) {
                y.getEntryProxy().setAttachments(F.attachments, E)
            }
            if (E) {
                E = y.getDocParser().convertAtLoad(E, D, C);
                x.initContent(E)
            }
            if (F.resultBox) {
                F.resultBox.each(function (H) {
                    var G;
                    G = A.searchers[H._meta.type];
                    if (G) {
                        G.execReload(H, E)
                    }
                })
            }
            A.syncSidebar();
            if (F.formfield) {
                y.getForm().setFormField(F.formfield)
            }
        }
    });
    h.Save = h.Class.create({
        editor: j,
        toolbar: j,
        sidebar: j,
        canvas: j,
        config: j,
        form: j,
        initialize: function (y, z, A, x, e) {
            this.editor = y;
            this.toolbar = z;
            this.sidebar = A;
            this.canvas = x;
            this.config = e;
            this.form = y.getForm();
            this.docparser = y.getDocParser();
            this.entryproxy = y.getEntryProxy()
        },
        save: function () {
            try {
                if (typeof validForm == "function") {
                    if (!validForm(this.editor)) {
                        return d
                    }
                }
                if (typeof setForm == "function") {
                    if (!setForm(this.editor)) {
                        return d
                    }
                }
                return v
            } catch (x) {
                this.editor.fireJobs(h.Ev.__RUNTIME_EXCEPTION, x);
                return d
            }
        },
        submit: function () {
            if (this.save()) {
                this.editor.fireJobs(h.Ev.__ON_SUBMIT, this.editor);
                if (this.config.save && typeof this.config.save.onSave == "function") {
                    var e = this.config.save.onSave;
                    e()
                } else {
                    this.form.submit()
                }
            }
        },
        getContent: function (x) {
            var z = this.canvas;
            var e = z.mode;
            var A = x || "original";
            var y = z.getContent();
            y = this.docparser.convertAtSave(y, e, A);
            return y
        },
        getAttachments: function (x, e) {
            e = e || d;
            var y = this.sidebar.getAttachments(x);
            return this.entryproxy.getAttachments(y, e)
        },
        getEmbeddedData: function (e) {
            return this.sidebar.getEmbeddedData(e)
        },
        getResults: function (e) {
            return this.sidebar.getResults(e)
        },
        load: function (x) {
            if (!x) {
                throw new Error("[Exception]Trex.Save : not exist argument(data)")
            }
            if (typeof loadForm == "function") {
                loadForm(this.editor, x)
            }
            try {
                this.setDataByJSONToEditor(x)
            } catch (e) {
                alert(" - Error: " + e.message + "\n\uc18c\uc2a4\ubcf4\uae30 \ubaa8\ub4dc\ub85c \uc804\ud658\ud569\ub2c8\ub2e4.\n\uc798\ubabb\ub41c HTML\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud574\uc8fc\uc138\uc694.");
                x.inputmode = h.Canvas.__HTML_MODE;
                this.setDataByJSONToEditor(x)
            }
            if (typeof postLoad == "function") {
                postLoad(this.editor, x)
            }
        },
        setDataByJSONToEditor: function (e) {
            this.editor.setDataByJSON({
                inputmode: (!e.inputmode || e.inputmode == "html") ? "original" : e.inputmode,
                content: function () {
                    var x = e.content;
                    if (typeof x == "string") {
                        return e.content
                    } else {
                        if (x && x.nodeType && (x.nodeType == 1)) {
                            return e.content.value
                        } else {
                            return ""
                        }
                    }
                }(),
                attachments: e.attachments
            })
        },
        makeField: function () {
            var z = this.sidebar;
            var y = this.form;
            var e = this.getContent();
            y.createField(tx.textarea({
                name: "tx_content",
                style: {
                    display: "none"
                }
            }, e));
            var x = z.getFields();
            x.each(function (A) {
                y.createField(tx.input({
                    type: "hidden",
                    name: A.name,
                    value: A.value
                }))
            })
        }
    });
    h.module("new Trex.Resizer", function (z, A, C, y, x) {
        var D = x.initializedId || "";
        var e = q.get("resizer", x);
        var B = j;
        z.setMinHeight = function (E) {
            return B.setMinHeight(E)
        };
        z.restoreMinHeight = function () {
            return B.restoreMinHeight()
        };
        if (h.available(e, "resizer" + D)) {
            B = new h.Resizer(z, e)
        }
    });
    q.add({
        resizer: {
            minHeight: 200
        }
    });
    h.Resizer = h.Class.create({
        $const: {
            __Identity: "resizer"
        },
        $mixins: [h.I.JobObservable],
        initialize: function (y, e) {
            var B = 0;
            if (!y) {
                return
            }
            this.config = e;
            var C = y.getInitializedId();
            var x = this.elBar = u("tx_resizer" + C);
            if (!x) {
                return
            }
            if (u.msie_ver == "5.5") {
                x.setAttribute("align", "center")
            }
            this.resizeHeightAtService = function (D) {
                if (typeof resizeHeight == "function") {
                    resizeHeight(D)
                }
            };
            this.resizingHeightAtService = function (D) {
                if (typeof resizingEditorHeight == "function") {
                    resizingEditorHeight(D)
                }
            };
            this.minDragHeight = e.minHeight;
            var A;
            this.startDrag = function (E) {
                var G = y.getCanvas();
                var F = G.getCurrentPanel();
                if (F == j) {
                    return
                }
                var D = F.getPosition();
                this.panelHeight = D.height;
                this.dragStartPosY = E.clientY;
                this.isDragging = v;
                u.observe(c, "mousemove", this.documentDraggingHandler);
                u.observe(c, "mouseup", this.stopDragHandler);
                if (F.getName() == h.Canvas.__WYSIWYG_MODE) {
                    this.panelTop = D.y;
                    A = F.getDocument();
                    if (A == j) {
                        return
                    }
                    G.fireJobs("canvas.height.beforechange");
                    u.observe(A, "mousemove", this.wysiwygDraggingHandler);
                    u.observe(A, "mouseup", this.stopDragHandler)
                }
                u.stop(E)
            };
            this.stopDrag = function (D) {
                var F = y.getCanvas();
                var E = F.getCurrentPanel();
                if (E == j) {
                    return
                }
                this.isDragging = d;
                u.stopObserving(c, "mousemove", this.documentDraggingHandler);
                u.stopObserving(c, "mouseup", this.stopDragHandler);
                if (A == j) {
                    return
                }
                u.stopObserving(A, "mousemove", this.wysiwygDraggingHandler);
                u.stopObserving(A, "mouseup", this.stopDragHandler);
                A = j;
                this.resizeHeightAtService(B);
                F.fireJobs("canvas.height.afterchange");
                u.stop(D)
            };
            this.dragingAtDocument = function (E) {
                var G = y.getCanvas();
                if (this.isDragging) {
                    var F = G.getCurrentPanel();
                    if (F == j) {
                        return
                    }
                    try {
                        var D = Math.max((this.panelHeight + E.clientY - this.dragStartPosY), this.minDragHeight.parsePx()).toPx();
                        F.setPanelHeight(D);
                        B = D;
                        G.fireJobs("canvas.height.change", D);
                        this.resizingHeightAtService(D)
                    } catch (H) {}
                }
                u.stop(E)
            };
            this.dragingAtWysiwyg = function (E) {
                var G = y.getCanvas();
                if (this.isDragging) {
                    var F = G.getCurrentPanel();
                    if (F == j) {
                        return
                    }
                    try {
                        var I = c.body.scrollTop || o.scrollTop || i.pageYOffset;
                        var D = Math.max((this.panelHeight + E.clientY - this.dragStartPosY + this.panelTop - I), this.minDragHeight.parsePx()).toPx();
                        F.setPanelHeight(D);
                        G.fireJobs("canvas.height.change", D)
                    } catch (H) {}
                }
                u.stop(E)
            };
            this.startDragHandler = this.startDrag.bindAsEventListener(this);
            this.stopDragHandler = this.stopDrag.bindAsEventListener(this);
            this.documentDraggingHandler = this.dragingAtDocument.bindAsEventListener(this);
            this.wysiwygDraggingHandler = this.dragingAtWysiwyg.bindAsEventListener(this);
            this.isDragging = d;
            u.observe(x, "mousedown", this.startDragHandler);
            var z = y.getCanvas();
            z.observeJob("canvas.fullscreen.change", function () {
                u.hide(x)
            });
            z.observeJob("canvas.normalscreen.change", function () {
                u.show(x)
            })
        },
        setMinHeight: function (e) {
            return this.minDragHeight = e.toPx()
        },
        restoreMinHeight: function () {
            return this.minDragHeight = this.config.minHeight || 200
        }
    });
    (function () {
        function e(A, z) {
            while (A.length >= z) {
                A.shift()
            }
        }
        var y = 20;
        h.History = h.Class.create({});
        h.History.prototype = {
            maxUndoCount: y,
            canvas: j,
            undoMementoList: j,
            redoMementoList: j,
            currentMemento: j,
            contentModified: d,
            initialize: function (z) {
                this.canvas = z;
                this.setupHistory();
                this.bindKeyEvent(z)
            },
            bindKeyEvent: function (A) {
                var z = this;
                A.observeJob("canvas.panel.undo", function () {
                    z.undoHandler()
                });
                A.observeJob("canvas.panel.redo", function () {
                    z.redoHandler()
                })
            },
            setupHistory: function () {
                this.initHistory({
                    content: w.EMPTY_PARAGRAPH_HTML,
                    scrollTop: 0
                })
            },
            canUndo: function () {
                return this.undoMementoList.length > 0
            },
            canRedo: function () {
                return this.redoMementoList.length > 0
            },
            setCurrentMemento: function (z) {
                this.currentMemento = z
            },
            undoHandler: function () {
                var A = this;
                A.saveHistoryIfEdited();
                if (!A.canUndo()) {
                    return
                }
                var z = A.undoMementoList.pop();
                z.undo();
                A.redoMementoList.push(z);
                A.setCurrentMemento(z)
            },
            redoHandler: function () {
                var z = this;
                z.saveHistoryIfEdited();
                if (!z.canRedo()) {
                    return
                }
                var A = z.redoMementoList.pop();
                A.redo();
                z.undoMementoList.push(A);
                z.setCurrentMemento(A)
            },
            initHistory: function (C) {
                var A = this;
                A.undoMementoList = [];
                A.redoMementoList = [];
                var B = new x();
                var z = Object.extend({
                    content: w.EMPTY_PARAGRAPH_HTML,
                    scrollTop: 0
                }, C);
                B.addUndoData(z);
                B.addHandler(A.getTextHandler());
                A.setCurrentMemento(B)
            },
            saveHistory: function (D, F, C) {
                var A = this;
                var z = A.undoMementoList;
                var E = A.currentMemento;
                A.redoMementoList = [];
                if (arguments.length == 3) {
                    E.addUndoRedData(D, F, C)
                }
                var G = A.getTextData();
                E.addRedoData(G);
                e(z, A.maxUndoCount);
                z.push(E);
                var B = new x();
                B.addHandler(A.getTextHandler());
                B.addUndoData(G);
                A.setCurrentMemento(B);
                A.contentModified = d
            },
            injectHistory: function (C, D, B) {
                if (!this.canUndo()) {
                    return
                }
                var z = this.undoMementoList;
                var A = z[z.length - 1];
                A.addUndoRedData(C, D, B)
            },
            saveHistoryIfEdited: function () {
                if (this.contentModified) {
                    this.saveHistory()
                }
            },
            saveHistoryByKeyEvent: function (B) {
                var A = {
                    code: B.keyCode,
                    ctrl: B.ctrlKey || (B.keyCode === 17),
                    alt: B.altKey || (B.keyCode === 18),
                    shift: B.shiftKey || (B.keyCode === 16)
                };
                if (A.code == 229) {
                    return
                }
                var z = this;
                if (A.code == h.__KEY.ENTER || A.code == h.__KEY.SPACE || A.code == h.__KEY.TAB) {
                    z.saveHistoryIfEdited()
                } else {
                    if (A.code == h.__KEY.DELETE || A.code == h.__KEY.BACKSPACE) {
                        z.saveHistory()
                    } else {
                        if ((A.code == h.__KEY.PASTE || A.code == h.__KEY.CUT) && A.ctrl) {
                            z.saveHistory()
                        } else {
                            if (((A.code > 32 && A.code < 41) && A.shift) || (A.code == 65 && A.ctrl)) {
                                z.saveHistoryIfEdited()
                            } else {
                                if (A.ctrl || A.alt || (A.shift && A.code == 16)) {} else {
                                    z.contentModified = v
                                }
                            }
                        }
                    }
                }
            },
            getTextHandler: function () {
                var z = this.canvas;
                return function (A) {
                    z.setContent(A.content);
                    setTimeout(function () {
                        z.setScrollTop(A.scrollTop)
                    }, 0)
                }
            },
            getTextData: function () {
                return {
                    content: this.canvas.getContent(),
                    scrollTop: this.canvas.getScrollTop()
                }
            }
        };
        var x = h.Class.create({
            initialize: function () {
                this.before = {};
                this.after = {};
                this.handlers = []
            },
            addUndoRedData: function (A, B, z) {
                Object.extend(this.before, A);
                Object.extend(this.after, B);
                this.handlers.push(z)
            },
            addHandler: function (z) {
                this.handlers.push(z)
            },
            addUndoData: function (z) {
                Object.extend(this.before, z)
            },
            addRedoData: function (z) {
                Object.extend(this.after, z)
            },
            undo: function () {
                var z = this;
                z.handlers.each(function (A) {
                    A(z.before)
                })
            },
            redo: function () {
                var z = this;
                z.handlers.each(function (A) {
                    A(z.after)
                })
            }
        })
    })();
    (function (x) {
        var y = new u.Set(13, 8, 32, 33, 34, 37, 38, 39, 40, 46);
        var e = function (z) {
            return y.contains(z)
        };
        q.add({
            canvas: {
                doctype: "html",
                mode: ["text", "html", "source"],
                styles: {
                    color: "#333333",
                    fontFamily: "\ub3cb\uc6c0",
                    fontSize: "9pt",
                    backgroundColor: "#ffffff",
                    lineHeight: "1.5",
                    padding: "8px"
                },
                pMarginZero: true,
                selectedMode: "html",
                readonly: d,
                initHeight: 400,
                minHeight: 200,
                ext: "html",
                param: "",
                newlinepolicy: "p",
                showGuideArea: v,
                convertingText: v
            }
        }, function (A) {
            var C = q.get("canvas", A);
            var z = A.events;
            C.initializedId = A.initializedId;
            C.useHotKey = z.useHotKey;
            var D = q.getTool("switcher", A);
            if (x.available(D, "switcher" + C.initializedId)) {
                C.mode = D.options.pluck("data")
            }
            var E = q.getTool("fontfamily", A);
            if (x.available(E, "fontfamily" + C.initializedId)) {
                if (E.webfont && E.webfont.use) {
                    C.webfont = E.webfont;
                    C.webfont.options.each(function (F) {
                        F.url = q.getUrl(F.url)
                    })
                }
            }
            var B = q.get("resizer", A);
            if (B) {
                C.minHeight = B.minHeight
            }
            C.wysiwygUrl = q.getUrl([(C.wysiwygPath || "#host#path/pages/daumx/"), "wysiwyg_", (C.serviceWysiwyg || ""), ((C.doctype == "html") ? "html" : "xhtml"), ".", (C.ext ? C.ext : "html"), "?prefix=" + A.initializedId, "&", C.param].join(""))
        });
        q.add({
            size: {}
        });
        x.Canvas = x.Class.create({
            $const: {
                __TEXT_MODE: "text",
                __HTML_MODE: "source",
                __WYSIWYG_MODE: "html",
                __WYSIWYG_PADDING: 8,
                __IMAGE_PADDING: 5
            },
            $mixins: [x.I.JobObservable, x.I.KeyObservable, x.I.ElementObservable, x.I.MouseoverObservable],
            editor: j,
            elContainer: j,
            config: j,
            history: j,
            panels: j,
            initialize: function (z, B) {
                this.editor = z;
                var A = this.config = q.get("canvas", B);
                var C = ((B.initializedId) ? B.initializedId : "");
                this.elContainer = u("tx_canvas" + C);
                this.wysiwygEl = u("tx_canvas_wysiwyg_holder" + C);
                this.sourceEl = u("tx_canvas_source_holder" + C);
                this.textEl = u("tx_canvas_text_holder" + C);
                this.initConfig(B);
                this.createPanel();
                this.history = new x.History(this, A);
                this.setCanvasSize({
                    height: A.initHeight
                })
            },
            initConfig: function (B) {
                var A = this.config;
                this.getRootConfig = function () {
                    return B
                };
                this.getConfig = function () {
                    return A
                };
                this.getStyleConfig = function (C) {
                    if (C) {
                        return A.styles[C]
                    } else {
                        return A.styles
                    }
                };
                var z = q.get("size", B);
                this.measureWrapWidth = function () {
                    z.wrapWidth = this.getContainerWidth()
                };
                this.measureWrapWidth();
                if (!z.contentWidth) {
                    z.contentWidth = z.wrapWidth
                }
                z.contentPadding = A.styles.padding.parsePx();
                this.getSizeConfig = function () {
                    return z
                }
            },
            getContainerWidth: function () {
                return u.getDimensions(this.elContainer).width
            },
            createPanel: function () {
                var C = this;
                var B = this.config;
                this.panels = {};
                this.mode = B.selectedMode || x.Canvas.__WYSIWYG_MODE;
                if ((u.ios && u.ios_ver < 5) || u.android) {
                    this.mode = x.Canvas.__TEXT_MODE
                }
                var A = {
                    text: function (D) {
                        return new x.Canvas.TextPanel(C, D)
                    },
                    source: function (D) {
                        return new x.Canvas.HtmlPanel(C, D)
                    },
                    html: function (D) {
                        return new x.Canvas.WysiwygPanel(C, D)
                    }
                };
                B.mode.each(function (D) {
                    if (A[D]) {
                        C.panels[D] = A[D](B)
                    }
                });
                for (var z in C.panels) {
                    if (this.mode == z) {
                        C.panels[z].show()
                    } else {
                        C.panels[z].hide()
                    }
                }
                C.observeJob("canvas.panel.iframe.load", function (D) {
                    C.fireJobs(x.Ev.__IFRAME_LOAD_COMPLETE, D)
                })
            },
            changeMode: function (A) {
                var z = this.editor;
                var E = this.mode;
                if (E == A) {
                    return
                }
                var B = this.panels[E];
                var C = this.panels[A];
                if (!B || !C) {
                    throw new Error("[Exception]Trex.Canvas : not suppored mode")
                }
                var G = B.getContent();
                var D = z.getDocParser().getContentsAtChangingMode(G, E, A);
                if (E == x.Canvas.__WYSIWYG_MODE) {
                    if (u.msie_ver === 8) {
                        B.hide()
                    }
                    B.setContent("");
                    try {
                        this.focusOnTop()
                    } catch (F) {}
                }
                try {
                    C.setContent(D)
                } catch (H) {
                    alert(" - Error: " + H.message + "\n\uc5d0\ub514\ud130 \ud0c0\uc785 \ubcc0\uacbd\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\uc798\ubabb\ub41c HTML\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud574\uc8fc\uc138\uc694.");
                    B.setContent(G);
                    B.show();
                    return
                }
                this.mode = A;
                this.fireJobs(x.Ev.__CANVAS_MODE_CHANGE, E, A);
                C.setPanelHeight(B.getPanelHeight());
                B.hide();
                C.show();
                try {
                    if (A == "html" && !this.getPanel("html").designModeActivated && u.gecko) {
                        this.getPanel("html").el.contentDocument.designMode = "on";
                        this.getPanel("html").designModeActivated = v
                    }
                } catch (F) {
                    throw F
                }
            },
            focus: function () {
                this.panels[this.mode].focus()
            },
            focusOnTop: function () {
                if (!this.isWYSIWYG()) {
                    return
                }
                this.getProcessor().focusOnTop()
            },
            focusOnBottom: function () {
                if (!this.isWYSIWYG()) {
                    return
                }
                this.getProcessor().focusOnBottom()
            },
            getCanvasPos: function () {
                var z = u.cumulativeOffset(this.elContainer);
                return {
                    x: z[0],
                    y: z[1]
                }
            },
            setCanvasSize: function (z) {
                if (this.panels[this.mode] && z.height) {
                    this.panels[this.mode].setPanelHeight(z.height)
                } else {
                    throw new Error("[Exception]Trex.Canvas : argument has no property - size.height ")
                }
            },
            canHTML: function () {
                return this.isWYSIWYG()
            },
            isWYSIWYG: function () {
                return this.mode === x.Canvas.__WYSIWYG_MODE
            },
            getPanel: function (z) {
                if (this.panels[z]) {
                    return this.panels[z]
                } else {
                    return j
                }
            },
            getCurrentPanel: function () {
                if (this.panels[this.mode]) {
                    return this.panels[this.mode]
                } else {
                    return j
                }
            },
            getProcessor: function (z) {
                if (!z) {
                    return this.panels[this.mode].getProcessor()
                } else {
                    return this.panels[z].getProcessor()
                }
            },
            getContent: function () {
                var z = this.panels[this.mode].getContent();
                if (z) {
                    z = z.replace(x.__WORD_JOINER_REGEXP, "")
                }
                return z
            },
            getScrollTop: function () {
                if (!this.isWYSIWYG()) {
                    return 0
                }
                return this.panels[this.mode].getScrollTop()
            },
            setScrollTop: function (z) {
                if (!this.isWYSIWYG()) {
                    return
                }
                this.panels[this.mode].setScrollTop(z)
            },
            setContent: function (z) {
                this.panels[this.mode].setContent(z);
                this.includeWebfontCss(z)
            },
            initContent: function (z) {
                this.history.initHistory({
                    content: z
                });
                this.panels[this.mode].setContent(z);
                this.includeWebfontCss(z);
                this.fireJobs(x.Ev.__CANVAS_DATA_INITIALIZE, x.Canvas.__WYSIWYG_MODE, j)
            },
            includeWebfontCss: function (z) {
                if (!this.isWYSIWYG()) {
                    return
                }
                return this.panels[this.mode].includeWebfontCss(z)
            },
            getUsedWebfont: function () {
                if (!this.isWYSIWYG()) {
                    return []
                }
                return this.panels[this.mode].getUsedWebfont()
            },
            runScript: function (z) {
                if (!this.isWYSIWYG()) {
                    return []
                }
                this.panels[this.mode].runScript(z)
            },
            importScript: function (z, A) {
                if (!this.isWYSIWYG()) {
                    return []
                }
                this.panels[this.mode].importScript(z, A)
            },
            query: function (A) {
                if (!this.isWYSIWYG()) {
                    return j
                }
                var z = this.getProcessor();
                return A(z)
            },
            execute: function (B) {
                var A = this.history;
                var z = this.getProcessor();
                if (this.isWYSIWYG()) {
                    if (u.msie) {
                        setTimeout(function () {
                            z.restoreRange();
                            B(z);
                            A.saveHistory();
                            z.restore()
                        }, 0)
                    } else {
                        B(z);
                        z.focus();
                        A.saveHistory();
                        z.restore()
                    }
                } else {
                    B(z)
                }
            },
            moveCaret: function (z) {
                if (!z) {
                    return
                }
                if (!this.isWYSIWYG()) {
                    return
                }
                this.getProcessor().moveCaretWith(z)
            },
            pasteContent: function (B, z, A) {
                z = z || d;
                this.execute(function (C) {
                    C.pasteContent(B, z, A)
                })
            },
            pasteNode: function (B, z, A) {
                if (!this.isWYSIWYG()) {
                    return
                }
                z = z || d;
                this.execute(function (C) {
                    C.pasteNode(B, z, A)
                })
            },
            addStyle: function (z) {
                this.panels[this.mode].addStyle(z)
            },
            getStyle: function (z) {
                return this.panels[this.mode].getStyle(z)
            },
            getPositionByNode: function (z) {
                if (!this.isWYSIWYG()) {
                    return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
                return this.panels[this.mode].getPositionByNode(z)
            },
            onKeyDown: function (z) {
                this.fireJobs(x.Ev.__CANVAS_PANEL_KEYDOWN, z);
                if (this.config.useHotKey) {
                    this.fireKeys(z)
                }
            },
            onKeyUp: function (z) {
                var A = z.keyCode;
                if (e(A)) {
                    this.getProcessor().clearDummy()
                }
                this.history.saveHistoryByKeyEvent(z);
                try {
                    this.mayAttachmentChanged = v;
                    this.fireJobs(x.Ev.__CANVAS_PANEL_KEYUP, z);
                    if (this.isWYSIWYG() && e(A)) {
                        this.triggerQueryStatus()
                    }
                    if (A === x.__KEY.DELETE || A === x.__KEY.BACKSPACE) {
                        this.fireJobs(x.Ev.__CANVAS_PANEL_DELETE_SOMETHING)
                    }
                } catch (B) {}
            },
            onMouseOver: function (z) {
                try {
                    this.fireMouseover(u.element(z));
                    this.fireJobs(x.Ev.__CANVAS_PANEL_MOUSEOVER, z)
                } catch (A) {}
            },
            onMouseOut: function (z) {
                try {
                    this.fireJobs(x.Ev.__CANVAS_PANEL_MOUSEOUT, z)
                } catch (A) {}
            },
            onMouseDown: function (z) {
                this.getProcessor().clearDummy();
                try {
                    this.fireElements(u.element(z))
                } catch (B) {}
                this.fireJobs(x.Ev.__CANVAS_PANEL_MOUSEDOWN, z);
                var A = this.history;
                A.saveHistoryIfEdited()
            },
            onMouseUp: function (A) {
                try {
                    var z = this;
                    z.fireJobs(x.Ev.__CANVAS_PANEL_MOUSEUP, A);
                    setTimeout(function () {
                        var C = z.getProcessor().createGoogRange();
                        if (C) {
                            z.fireJobs(x.Ev.__CANVAS_PANEL_QUERY_STATUS, C)
                        }
                    }, 20)
                } catch (B) {}
            },
            mayAttachmentChanged: d,
            onClick: function (z) {
                this.fireJobs(x.Ev.__CANVAS_PANEL_CLICK, z)
            },
            onDoubleClick: function (z) {
                this.fireJobs(x.Ev.__CANVAS_PANEL_DBLCLICK, z)
            },
            onScroll: function (z) {
                this.fireJobs(x.Ev.__CANVAS_PANEL_SCROLLING, z)
            },
            onPaste: function () {
                this.fireJobs(x.Ev.__CANVAS_PANEL_PASTE)
            },
            triggerQueryStatus: function () {
                this.cancelReservedQueryStatusTrigger();
                this.reserveQueryStatusTrigger()
            },
            reserveQueryStatusTrigger: function () {
                var z = this;
                this.reservedQueryStatusTrigger = setTimeout(function () {
                    var A = z.getProcessor().createGoogRange();
                    if (A) {
                        z.fireJobs(x.Ev.__CANVAS_PANEL_QUERY_STATUS, A);
                        z.fireElements(z.getProcessor().getNode())
                    }
                }, 20)
            },
            cancelReservedQueryStatusTrigger: function () {
                if (this.reservedQueryStatusTrigger) {
                    clearTimeout(this.reservedQueryStatusTrigger)
                }
            },
            syncProperty: function () {
                this.triggerQueryStatus()
            }
        })
    })(h);
    h.module("focus body @after editor iframe load", function (x, y, z, e) {
        e.observeJob(h.Ev.__IFRAME_LOAD_COMPLETE, function () {
            if (!e.isWYSIWYG()) {
                return
            }
            try {
                var A = e.getProcessor();
                A.focusOnTop()
            } catch (B) {}
        })
    });
    h.module("bind canvas events for close external menus", function (y, z, A, x) {
        var e = function () {
            y.fireJobs(h.Ev.__SHOULD_CLOSE_MENUS)
        };
        x.observeJob(h.Ev.__CANVAS_PANEL_CLICK, e);
        x.observeJob(h.Ev.__CANVAS_SOURCE_PANEL_CLICK, e);
        x.observeJob(h.Ev.__CANVAS_TEXT_PANEL_CLICK, e)
    });
    h.module("make getter for 'iframeheight' and 'iframetop' size", function (y, z, A, x) {
        var B = 0;
        var e = 0;
        x.observeJob(h.Ev.__CANVAS_HEIGHT_CHANGE, function (C) {
            B = C.parsePx()
        });
        x.observeJob("canvas.apply.background", function () {
            var D = x.getPanel(h.Canvas.__WYSIWYG_MODE);
            var C = w.getPosition(D.el);
            e = C.y
        });
        x.reserveJob(h.Ev.__IFRAME_LOAD_COMPLETE, function () {
            var D = x.getPanel(h.Canvas.__WYSIWYG_MODE);
            B = D.getPanelHeight().parsePx();
            var C = w.getPosition(D.el);
            e = C.y
        }, 300);
        x.getIframeHeight = function () {
            return B
        };
        x.getIframeTop = function () {
            return e
        }
    });
    h.module("sync attachment data periodically", function (x, y, z, e) {
        setTimeout(function () {
            setInterval(function () {
                if (e.mayAttachmentChanged) {
                    e.fireJobs(h.Ev.__CANVAS_PANEL_DELETE_SOMETHING);
                    e.mayAttachmentChanged = d
                }
            }, 3000)
        }, 10000)
    });
    h.Canvas.BasedPanel = h.Class.draft({
        initialize: function (y, x) {
            this.config = x;
            this.canvas = y;
            this.elHolder = this.getHolder(x);
            this.el = this.getPanel(x);
            if (!this.el) {
                throw new Error("[Exception]Trex.Canvas.Panel : panel element is not founded")
            }
            var e = this.constructor.__MODE;
            this.getName = function () {
                return e
            };
            this.lastHeight = j
        },
        focus: function () {
            this.el.focus()
        },
        show: function () {
            try {
                u.show(this.elHolder)
            } catch (x) {}
        },
        hide: function () {
            try {
                u.hide(this.elHolder)
            } catch (x) {}
        },
        getStyle: function (e) {
            if (this.el.style[e]) {
                return this.el.style[e]
            } else {
                return j
            }
        },
        addStyle: function (x) {
            for (var e in x) {
                if (this.el.style[e]) {
                    this.el.style[e] = x[e]
                }
            }
        },
        getPosition: function () {
            return w.getPosition(this.el)
        },
        getPanelHeight: function () {
            return w.getHeight(this.el).toPx()
        },
        setPanelHeight: function (e) {
            e = e.toPx();
            if (this.lastHeight == e) {
                return
            }
            w.setHeight(this.el, e);
            this.lastHeight = e
        }
    });
    (function () {
        h.WysiwygIframeLoader = h.Class.create({
            initialize: function (z) {
                this.iframe = z
            },
            load: function (A) {
                try {
                    this.loadLocalIframe(A)
                } catch (z) {
                    this.reloadUsingCatalyst(A)
                }
            },
            loadLocalIframe: function (A) {
                var z = this.iframe.contentWindow.document;
                z.open();
                z.write(e);
                z.close();
                setTimeout(function () {
                    A(z)
                }, 0)
            },
            reloadUsingCatalyst: function (C) {
                var z = this;
                i.__tx_wysiwyg_iframe_load_complete = function () {
                    z.loadLocalIframe(C)
                };
                try {
                    var B = EditorJSLoader.getPageBasePath("editor.js")
                } catch (A) {
                    B = EditorJSLoader.getPageBasePath()
                }
                this.iframe.src = B + "trex/iframe_loader_catalyst.html?" + document.domain
            },
            loadRemoteIframe: function () {
                var z = this.el;
                z.setAttribute("src", this.canvasConfig.wysiwygUrl)
            }
        });

        function y(B) {
            var z = c.location;
            if (B.indexOf("http://") === 0) {} else {
                if (B.indexOf("file://") === 0) {} else {
                    if (B.indexOf("/") === 0) {
                        B = "http://" + z.host + ":" + (z.port || "80") + B
                    } else {
                        var A = z.href;
                        var C = A.lastIndexOf("/");
                        B = A.substring(0, C + 1) + B
                    }
                }
            }
            return B
        }
        var x = y(EditorJSLoader.getCSSBasePath());
        var e = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html lang="ko"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Daum\uc5d0\ub514\ud130</title><script id="txScriptForEval"><\/script><link rel="stylesheet" href="' + x + 'content_view.css" type="text/css"></link><link rel="stylesheet" href="' + x + 'content_wysiwyg.css" type="text/css"></link><style id="txStyleForSetRule"></style></head><body class="tx-content-container">' + w.EMPTY_PARAGRAPH_HTML + "</body></html>"
    })();
    (function () {
        h.WebfontLoader = h.Class.create({
            initialize: function (x, e) {
                this.doc = x;
                this.styleCnt = 0;
                this.defWebfont = e.styles.fontFamily;
                this.useWebfont = (e.webfont && e.webfont.use);
                this.webfontCfg = e.webfont || [];
                this.elStyleSheet = this.getStyleSheet()
            },
            load: function (y) {
                if (!u.msie) {
                    return
                }
                if (!y) {
                    return
                }
                if (!this.useWebfont) {
                    return
                }
                var e = [];
                y += " // font-family:" + this.defWebfont;
                y.replace(/font-family\s*:\s*(\w*)/gi, function (A, z) {
                    e.push(z);
                    return A
                });
                if (e.length == 0) {
                    return
                }
                var x = this;
                setTimeout(function () {
                    var z = e.uniq().join("||");
                    x.webfontCfg.options.each(function (A) {
                        if (A.url && z.indexOf(A.data) > -1) {
                            x.imports(A)
                        }
                    })
                }, 10)
            },
            getUsed: function () {
                if (!u.msie) {
                    return []
                }
                var e = [];
                if (!this.useWebfont) {
                    return e
                }
                this.webfontCfg.options.each(function (x) {
                    if (!x.url) {
                        e.push(x.data)
                    }
                });
                return e
            },
            getStyleSheet: function () {
                return this.doc.styleSheets[this.styleCnt++]
            },
            imports: function (x) {
                try {
                    this.elStyleSheet.addImport(x.url, 2)
                } catch (y) {
                    this.elStyleSheet = this.getStyleSheet();
                    this.elStyleSheet.addImport(x.url, 2)
                }
                x.url = j
            }
        })
    })();
    (function () {
        h.ScriptLoader = h.Class.create({
            $mixins: [h.I.FHRequester],
            isJsHolding: d,
            jsQueue: [],
            imported: [],
            initialize: function (e) {
                this.win = e
            },
            execScript: function () {
                if (this.jsQueue.length == 0) {
                    return
                }
                if (!this.isJsHolding) {
                    this.isJsHolding = v;
                    try {
                        var e = this.jsQueue.shift();
                        if (this.win["eval"]) {
                            txEval(e.script, this.win)
                        } else {
                            this.win.document.getElementById("txScriptForEval").text = e.script
                        }
                    } catch (x) {} finally {
                        if (typeof (e.callback) === "function") {
                            e.callback()
                        }
                        this.isJsHolding = d
                    }
                }
                setTimeout(this.execScript.bind(this), 5)
            },
            runBy: function (e, x) {
                this.jsQueue.push({
                    script: e,
                    callback: x
                });
                this.execScript()
            },
            importBy: function (e, x) {
                if (e.indexOf("cia.daum.net") < 0 && this.imported.contains(e)) {
                    if (typeof (x) === "function") {
                        x()
                    }
                    return
                }
                this.imported.push(e);
                this.sendRequest("get", e, "", d, function (y) {
                    this.runBy(y, x)
                }.bind(this), function () {})
            }
        })
    })();
    (function () {
        var e = 16;
        h.WysiwygRelative = h.Class.create({
            initialize: function (x) {
                this.iframe = x
            },
            getRelative: function (y) {
                var E = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                var F = this.iframe.contentWindow.document;
                if (y) {
                    var D = w.getPosition(y, v);
                    var B = w.getHeight(this.iframe);
                    var x = w.getScrollTop(F);
                    if (D.y + D.height < x || D.y > x + B) {
                        return E
                    } else {
                        var C = 0;
                        var A = 0;
                        var G = w.getWidth(this.iframe);
                        var z = w.getScrollLeft(F);
                        E.x = C + ((z > 0) ? 0 : D.x);
                        E.width = Math.min(G - D.x - e, D.width - ((z > 0) ? z - D.x : 0));
                        E.height = D.height;
                        E.y = D.y - x + A
                    }
                }
                return E
            }
        })
    })();
    (function () {
        h.WysiwygEventBinder = h.Class.create({
            initialize: function (B, A, z) {
                this.win = B;
                this.doc = A;
                this.canvas = z
            },
            bindEvents: function () {
                this.translateDocumentEventToCanvas("keyup", "onKeyUp");
                this.translateDocumentEventToCanvas("keydown", "onKeyDown");
                this.translateDocumentEventToCanvas("mouseover", "onMouseOver");
                this.translateDocumentEventToCanvas("mouseout", "onMouseOut");
                this.translateDocumentEventToCanvas("click", "onClick");
                this.translateDocumentEventToCanvas("dblclick", "onDoubleClick");
                this.translateDocumentEventToCanvas("mousedown", "onMouseDown");
                this.translateDocumentEventToCanvas("mouseup", "onMouseUp");
                this.translateWindowEventToCanvas("scroll", "onScroll");
                this.translateBodyEventToCanvas("paste", "onPaste");
                this.triggerQueryStatusWhenTenConsecutiveKeyPressesDetected()
            },
            translateDocumentEventToCanvas: function (z, A) {
                this.translateEventToCanvas(this.doc, z, A)
            },
            translateWindowEventToCanvas: function (z, A) {
                this.translateEventToCanvas(this.win, z, A)
            },
            translateBodyEventToCanvas: function (z, A) {
                this.translateEventToCanvas(this.doc.body, z, A)
            },
            translateEventToCanvas: function (C, z, B) {
                var A = this.canvas;
                u.observe(C, z, function (D) {
                    A[B](D)
                }, d)
            },
            triggerQueryStatusWhenTenConsecutiveKeyPressesDetected: function () {
                var z = this.canvas;
                e(this.doc, function () {
                    z.triggerQueryStatus()
                })
            }
        });
        var e = function (z, A) {
            var C = 0,
                D = -1,
                B = (u.msie || u.webkit) ? "keydown" : "keypress";
            u.observe(z, B, function (F) {
                var E = F.keyCode;
                if (!y(E) && D !== E) {
                    if (C >= 9) {
                        A();
                        C = 0
                    } else {
                        C++
                    }
                    D = E
                }
            }, d)
        };
        var y = function (z) {
            return x.contains(z)
        };
        var x = new u.Set(8, 16, 17, 18, 32, 33, 34, 37, 38, 39, 40, 46, 229)
    })();
    (function () {
        h.Canvas.WysiwygPanel = h.Class.create({
            $extend: h.Canvas.BasedPanel,
            $const: {
                __MODE: h.Canvas.__WYSIWYG_MODE,
                EVENT_BINDING_DELAY: 500
            },
            initialize: function (D, E) {
                this.$super.initialize(D, E);
                this.canvasConfig = E;
                this.iframe = this.el;
                this.wysiwygWindow = this.iframe.contentWindow;
                var C = this;
                var F = new h.WysiwygIframeLoader(this.iframe);
                F.load(function (G) {
                    C.wysiwygDoc = G;
                    C.initializeSubModules(G);
                    C.installScripts(C.wysiwygWindow, G);
                    C.makeEditable();
                    C.applyBodyStyles(C.canvasConfig.styles);
                    C.applyCustomCssText(C.canvasConfig.customCssText);
                    C.clearContent();
                    C.bindEvents(D);
                    Editor.__PANEL_LOADED = v;
                    D.fireJobs(h.Ev.__IFRAME_LOAD_COMPLETE, G)
                })
            },
            initializeSubModules: function (D) {
                var C = this.wysiwygWindow;
                this.processor = new h.Canvas.ProcessorP(C, D);
                this.webfontLoader = new h.WebfontLoader(D, this.canvasConfig)
            },
            makeEditable: function () {
                if (this.canvasConfig.readonly) {
                    return
                }
                if (u.msie || u.chrome || u.webkit_ver >= 3) {
                    this.wysiwygDoc.body.setAttribute("contentEditable", v.toString())
                } else {
                    var C = this;
                    setTimeout(function () {
                        try {
                            C.wysiwygDoc.designMode = "On";
                            if (u.gecko) {
                                C.wysiwygDoc.execCommand("enableInlineTableEditing", d, d)
                            }
                        } catch (D) {
                            C.designModeActivated = d
                        }
                    }, 10)
                }
            },
            getName: function () {
                return this.constructor.__MODE
            },
            getWindow: function () {
                return this.wysiwygWindow
            },
            getDocument: function () {
                return this.wysiwygDoc
            },
            getContent: function () {
                return this.wysiwygDoc.body.innerHTML
            },
            setContent: function (C) {
                C = this.doPreFilter(C);
                this.setBodyHTML(C);
                this.doPostFilter(this.wysiwygDoc.body)
            },
            doPreFilter: function (C) {
                if (C) {
                    C = A(C);
                    C = x(C)
                }
                return C
            },
            setBodyHTML: function (C) {
                this.wysiwygDoc.body.innerHTML = C || w.EMPTY_PARAGRAPH_HTML
            },
            doPostFilter: function (C) {
                z(C)
            },
            clearContent: function () {
                this.setContent("")
            },
            getScrollTop: function () {
                return w.getScrollTop(this.wysiwygDoc)
            },
            setScrollTop: function (C) {
                w.setScrollTop(this.wysiwygDoc, C)
            },
            getScrollLeft: function () {
                return w.getScrollLeft(this.wysiwygDoc)
            },
            getProcessor: function () {
                return this.processor
            },
            ifProcessorReady: function (C) {
                if (this.processor) {
                    C(this.processor)
                }
            },
            getStyle: function (C) {
                return u.getStyle(this.wysiwygDoc.body, C)
            },
            addStyle: function (C) {
                u.setStyleProperty(this.wysiwygDoc.body, C)
            },
            setBodyStyle: function (E, D) {
                var C = e(D);
                u.setStyleProperty(E.body, C)
            },
            setFontStyle: function (F, D) {
                var E = Object.extend(D, {
                    browser: u.browser,
                    pMarginZero: this.canvasConfig.pMarginZero ? "true" : "false"
                });
                var C = new Template(["#{if:pMarginZero=='true'}p { margin:0; padding:0; }#{/if:pMarginZero}", "body, td, button { color:#{color}; font-size:#{fontSize}; font-family:#{fontFamily}; line-height:#{lineHeight}; }", "a, a:hover, a:link, a:active, a:visited { color:#{color}; }", "div.txc-search-border { border-color:#{color}; }", "div.txc-search-opborder { border-color:#{color}; }", "img.tx-unresizable { width: auto !important; height: auto !important; }", "button a { text-decoration:none #{if:browser=='firefox'}!important#{/if:browser}; color:#{color} #{if:browser=='firefox'}!important#{/if:browser}; }"].join("\n")).evaluate(E);
                u.applyCSSText(F, C)
            },
            applyBodyStyles: function (C) {
                var E = this.wysiwygDoc;
                try {
                    this.setFontStyle(E, C);
                    this.setBodyStyle(E, C)
                } catch (D) {}
            },
            applyCustomCssText: function (C) {
                if (!C) {
                    return
                }
                var D = this.wysiwygDoc;
                try {
                    u.applyCSSText(D, C)
                } catch (E) {}
            },
            setRule: function (C, F) {
                var E, D, G;
                try {
                    E = this.wysiwygDoc.getElementById("txStyleForSetRule");
                    D = E.sheet ? E.sheet : E.styleSheet;
                    G = D.cssRules ? D.cssRules : D.rules;
                    if (D.insertRule) {
                        if (0 < G.length) {
                            D.deleteRule(0)
                        }
                        if (C) {
                            D.insertRule(C + "{" + F + "}", 0)
                        }
                    } else {
                        if (D.addRule) {
                            if (0 < G.length) {
                                D.removeRule(0)
                            }
                            if (C) {
                                D.addRule(C, F, 0)
                            }
                        }
                    }
                } catch (H) {}
            },
            bindEvents: function (C) {
                var D = new h.WysiwygEventBinder(this.wysiwygWindow, this.wysiwygDoc, C, this.processor);
                setTimeout(function () {
                    D.bindEvents()
                }, this.constructor.EVENT_BINDING_DELAY)
            },
            getPanel: function (C) {
                var D = C.initializedId || "";
                return $must("tx_canvas_wysiwyg" + D, "Trex.Canvas.WysiwygPanel")
            },
            getHolder: function (C) {
                var D = C.initializedId || "";
                return $must("tx_canvas_wysiwyg_holder" + D, "Trex.Canvas.WysiwygPanel")
            },
            focus: function () {
                this.ifProcessorReady(function (C) {
                    C.focus()
                })
            },
            show: function () {
                this.$super.show();
                this.ifProcessorReady(function (C) {
                    setTimeout(function () {
                        try {
                            C.focusOnTop()
                        } catch (D) {}
                    }, 100)
                })
            },
            hide: function () {
                this.ifProcessorReady(function (C) {
                    C.blur()
                });
                this.$super.hide()
            },
            includeWebfontCss: function (C) {
                this.webfontLoader.load(C)
            },
            getUsedWebfont: function () {
                return this.webfontLoader.getUsed()
            },
            getPositionByNode: function (D) {
                var C = new h.WysiwygRelative(this.iframe);
                return C.getRelative(D)
            },
            runScript: function (C, E) {
                var D = new h.ScriptLoader(this.wysiwygWindow);
                D.runBy(C, E)
            },
            importScript: function (C, E) {
                var D = new h.ScriptLoader(this.wysiwygWindow);
                D.importBy(C, E)
            },
            installScripts: function () {
                var C = this,
                    E = C.wysiwygWindow,
                    D = C.wysiwygDoc;
                installHyperscript(E, D);
                B(E, C);
                y(E)
            }
        });

        function e(F) {
            var C = ["color", "fontSize", "fontFamily", "lineHeight"];
            var D = Object.clone(F);
            for (var E = 0; E < C.length; E++) {
                delete D[C[E]]
            }
            return D
        }

        function B(D, C) {
            D.txImportScript = function (E, F) {
                C.importScript(E, F)
            }
        }

        function y(D) {
            var C = function () {};
            D.UI = {
                toolTip: C
            };
            D.ciaCallback = C;
            D.ShowOrgImage = C
        }

        function A(C) {
            return C.replace(h.__WORD_JOINER_REGEXP, "")
        }

        function x(C) {
            if (u.msie) {
                C = C.replace(/(<script|<style)/i, h.__WORD_JOINER + "$1")
            }
            return C
        }

        function z(D) {
            if (u.msie) {
                var G = w.collectAll(D, "p,li");
                for (var E = 0, C = G.length; E < C; E++) {
                    var F = G[E];
                    if (w.getLength(F) === 0 && F.tagName.toLowerCase() !== "p") {
                        try {
                            F.innerHTML = "&nbsp;"
                        } catch (H) {}
                    }
                    if (w.getLength(F) === 1 && F.innerHTML === "&nbsp;") {
                        F.innerHTML = ""
                    }
                }
            }
        }
    })();
    h.Canvas.TextareaPanel = h.Class.create({
        $extend: h.Canvas.BasedPanel,
        initialize: function (x, e) {
            this.$super.initialize(x, e);
            var y = new h.Canvas.TextAreaProcessor(this.el);
            this.getProcessor = function () {
                return y
            };
            this.lastHeight = (this.lastHeight - 9 * 2).toPx();
            if (!!e.readonly) {
                this.setReadOnly()
            }
        },
        show: function () {
            this.$super.show();
            var x = this.elHolder;
            var e = this.getProcessor();
            setTimeout(function () {
                try {
                    e.focusOnTop()
                } catch (y) {}
                if (u.msie6) {
                    x.style.padding = "1px";
                    setTimeout(function () {
                        x.style.padding = "0px"
                    }, 0)
                }
            }, 100)
        },
        setContent: function (e) {
            this.el.value = e
        },
        getContent: function () {
            return this.el.value
        },
        getPanelHeight: function () {
            return (w.getHeight(this.el).parsePx() + 2).toPx()
        },
        setPanelHeight: function (e) {
            this.$super.setPanelHeight((e.parsePx() - 2).toPx())
        },
        setReadOnly: function () {
            this.el.readOnly = v
        }
    });
    h.Canvas.HtmlPanel = h.Class.create({
        $extend: h.Canvas.TextareaPanel,
        $const: {
            __MODE: h.Canvas.__HTML_MODE
        },
        initialize: function (x, e) {
            this.$super.initialize(x, e);
            this.bindEvents();
            if (u.msie_ver == "8") {
                this.el.setAttribute("style", "width: 500px; min-width: 100%; max-width: 100%;")
            }
            if (!e.styles.notApplyBgColorOnSourceMode) {
                if (e.styles.backgroundColor) {
                    u.setStyle(this.el, {
                        backgroundColor: e.styles.backgroundColor
                    })
                }
                if (e.styles.color) {
                    u.setStyle(this.el, {
                        color: e.styles.color
                    })
                }
            }
        },
        bindEvents: function () {
            var e = {
                keydown: function (y) {
                    this.canvas.fireJobs(h.Ev.__CANVAS_SOURCE_PANEL_KEYDOWN, y)
                },
                keyup: function () {
                    var y = this.canvas.getProcessor();
                    if (y && y.savePosition) {
                        y.savePosition()
                    }
                },
                mousedown: function (y) {
                    this.canvas.fireJobs(h.Ev.__CANVAS_SOURCE_PANEL_MOUSEDOWN, y)
                },
                mouseup: function () {
                    var y = this.canvas.getProcessor();
                    if (y && y.savePosition) {
                        y.savePosition()
                    }
                },
                click: function (y) {
                    this.canvas.fireJobs(h.Ev.__CANVAS_SOURCE_PANEL_CLICK, y)
                }
            };
            for (var x in e) {
                u.observe(this.el, x, e[x].bind(this), v)
            }
        },
        getPanel: function (e) {
            var x = ((e.initializedId) ? e.initializedId : "");
            return $must("tx_canvas_source" + x, "Trex.Canvas.HtmlPanel")
        },
        getHolder: function (e) {
            var x = ((e.initializedId) ? e.initializedId : "");
            return $must("tx_canvas_source_holder" + x, "Trex.Canvas.HtmlPanel")
        },
        setContent: function (x) {
            var e = new h.Validator();
            if (e.exists(x)) {
                this.$super.setContent(x)
            } else {
                this.$super.setContent("")
            }
        }
    });
    h.Canvas.TextPanel = h.Class.create({
        $extend: h.Canvas.TextareaPanel,
        $const: {
            __MODE: h.Canvas.__TEXT_MODE
        },
        initialize: function (x, e) {
            this.$super.initialize(x, e);
            this.bindEvents()
        },
        bindEvents: function () {
            var e = {
                keydown: function () {},
                keyup: function () {},
                mousedown: function () {},
                mouseup: function () {},
                click: function (y) {
                    this.canvas.fireJobs(h.Ev.__CANVAS_TEXT_PANEL_CLICK, y)
                }
            };
            for (var x in e) {
                u.observe(this.el, x, e[x].bind(this), v)
            }
        },
        getPanel: function (e) {
            var x = ((e.initializedId) ? e.initializedId : "");
            return $must("tx_canvas_text" + x, "Trex.Canvas.TextPanel")
        },
        getHolder: function (e) {
            var x = ((e.initializedId) ? e.initializedId : "");
            return $must("tx_canvas_text_holder" + x, "Trex.Canvas.TextPanel")
        }
    });
    h.module("interrupt enter key action @ text panel", function (x, z, A, e) {
        var y = e.config.newlinepolicy;
        var B = e.config.insertbr;
        if (y == "br" && B) {
            e.observeJob(h.Ev.__CANVAS_SOURCE_PANEL_KEYDOWN, function (C) {
                if (e.isWYSIWYG()) {
                    return
                }
                e.getProcessor().controlEnter(C)
            })
        }
    });
    h.I.Marker = {};
    h.I.Marker.Standard = {
        paste: function () {
            var e = this.processor.getRange();
            var C = e.endContainer;
            var A = e.startContainer;
            if (C.nodeType == 9) {
                C = this.processor.doc.body;
                A = this.processor.doc.body
            }
            var z = this.endMarker = this.processor.create("span", {
                id: "tx_end_marker"
            });
            var x = e.endOffset;
            if (C.nodeType == 3) {
                C.splitText(x);
                C.parentNode.insertBefore(z, C.nextSibling)
            } else {
                C.insertBefore(z, C.childNodes[x])
            }
            var B = this.startMarker = this.processor.create("span", {
                id: "tx_start_marker"
            });
            var y = e.startOffset;
            if (A.nodeType == 3) {
                A.splitText(y);
                A.parentNode.insertBefore(B, A.nextSibling)
            } else {
                A.insertBefore(B, A.childNodes[y])
            }
        },
        remove: function () {
            w.remove(this.startMarker);
            w.remove(this.endMarker)
        }
    };
    h.I.Marker.Trident = {
        paste: function () {
            this.clear();
            var x = this.processor.getRange();
            var e = this.processor.doc.body;
            var z = x.duplicate();
            z.collapse(v);
            z.pasteHTML('<span id="tx_start_marker"></span>');
            this.startMarker = w.collect(e, "#tx_start_marker");
            var y = x.duplicate();
            y.collapse(d);
            y.pasteHTML('<span id="tx_end_marker"></span>');
            this.endMarker = w.collect(e, "#tx_end_marker")
        },
        clear: function () {
            var e = this.processor.doc.body;
            w.remove(w.collect(e, "#tx_start_marker"));
            w.remove(w.collect(e, "#tx_end_marker"))
        },
        remove: function () {
            w.remove(this.startMarker);
            w.remove(this.endMarker)
        }
    };
    h.Canvas.Marker = h.Class.create({
        $mixins: [((u.msie) ? h.I.Marker.Trident : h.I.Marker.Standard)],
        initialize: function (e) {
            this.processor = e
        },
        backup: function () {
            this.processor.bookmarkWithMarker(this)
        },
        checkCollapsed: function () {
            return (w.next(this.startMarker) == this.endMarker)
        }
    });
    h.I.Selection = {};
    h.I.Selection.Standard = {
        getSel: function () {
            return this.win.getSelection()
        },
        getText: function () {
            return this.getSel().toString()
        },
        getNode: function () {
            var e = this.getRange();
            if (e) {
                var x = e.startContainer;
                if (x.nodeType == 1) {
                    if (w.isBody(x)) {
                        return (x)
                    } else {
                        return (x.childNodes[e.startOffset])
                    }
                } else {
                    return (x.parentNode)
                }
            } else {
                return j
            }
        },
        createRange: function () {
            return this.doc.createRange()
        },
        createTextRange: function () {
            return this.doc.createRange()
        },
        getRange: function (y) {
            var x = this.getSel();
            if (x && x.rangeCount > 0) {
                if (y == j) {
                    if (x.rangeCount == 1) {
                        return x.getRangeAt(0)
                    } else {
                        return this.mergeRange(x)
                    }
                } else {
                    var e = x.getRangeAt(0);
                    e.collapse(y);
                    return e
                }
            } else {
                return this.doc.createRange()
            }
        },
        isCollapsed: function () {
            var e = this.getSel();
            return (e && e.isCollapsed)
        },
        collapse: function (x) {
            var y = this.getSel();
            if (y && y.rangeCount > 0) {
                var e = y.getRangeAt(0);
                e.collapse(x)
            }
        },
        getControl: function () {
            var x = this.getSel();
            var e;
            if (u.opera) {
                e = x.anchorNode.childNodes[x.anchorOffset];
                if (e == j) {
                    return j
                }
                if (x.isCollapsed && e.tagName != "IMG") {
                    return j
                }
            } else {
                if (x.isCollapsed) {
                    return j
                }
                e = x.anchorNode.childNodes[x.anchorOffset]
            } if (w.kindOf(e, "%control")) {
                return e
            } else {
                return j
            }
        },
        hasControl: function () {
            return (this.getControl() != j)
        },
        selectControl: function (x) {
            var e = this.createRange();
            e.selectNode(x);
            var y = this.getSel();
            y.removeAllRanges();
            y.addRange(e)
        },
        compareTextPos: function () {
            var e = this.getRange();
            if (e) {
                var x = e.startContainer;
                if (x.nodeType == 3) {
                    if (x.textContent.trim().length == 0) {
                        return w.__POSITION.__EMPTY_TEXT
                    } else {
                        if (e.startOffset == 0) {
                            return w.__POSITION.__START_OF_TEXT
                        } else {
                            if (e.startOffset == x.textContent.length) {
                                return w.__POSITION.__END_OF_TEXT
                            } else {
                                return w.__POSITION.__MIDDLE_OF_TEXT
                            }
                        }
                    }
                }
            }
            return w.__POSITION.__END_OF_TEXT
        },
        mergeRange: function (B) {
            try {
                var A = [];
                for (var z = 0, E = B.rangeCount; z < E; z++) {
                    A.push(B.getRangeAt(z))
                }
                B.removeAllRanges();
                var y = A[0].startContainer.childNodes[A[0].startOffset];
                var D = A[E - 1].endContainer.childNodes[A[E - 1].endOffset - 1];
                var x = this.doc.createRange();
                try {
                    x.setStart(y, 0)
                } catch (C) {
                    x.collapse(v)
                }
                try {
                    x.setEnd(D, D.childNodes.length)
                } catch (C) {}
                B.addRange(x);
                return B.getRangeAt(0)
            } catch (C) {
                return B.getRangeAt(0)
            }
        },
        setStart: function (x, y, A) {
            try {
                x.setStart(y, A)
            } catch (z) {
                x.collapse(v);
                x.setStart(y, A)
            }
        },
        setEnd: function (x, y, A) {
            try {
                x.setEnd(y, A)
            } catch (z) {
                x.collapse(d);
                x.setEnd(y, A)
            }
        },
        selectRange: function (e) {
            var x = this.getSel();
            x.removeAllRanges();
            x.addRange(e)
        }
    };
    h.I.Selection.Trident = {
        getSel: function () {
            return this.doc.selection
        },
        getText: function () {
            return this.getSel().createRange().text
        },
        getNode: function () {
            var x = this.getSel();
            var e = x.type.toLowerCase();
            if (e === "control") {
                return (x.createRange().item(0))
            } else {
                return (x.createRange().parentElement())
            }
        },
        createRange: function () {
            var e = this.getSel();
            return e.createRange()
        },
        createTextRange: function () {
            return this.doc.body.createTextRange()
        },
        getRange: function (z) {
            var y = this.getSel();
            var x = y.type.toLowerCase();
            if (x == "none") {
                return y.createRange() ? y.createRange() : function () {
                    var A = this.doc.body.createTextRange();
                    A.collapse(v);
                    A.select();
                    return A
                }()
            }
            if (z == j) {
                return y.createRange()
            } else {
                if (x === "text") {
                    var e = y.createRange();
                    e.collapse(z);
                    e.select();
                    return y.createRange()
                } else {
                    if (x === "control") {
                        y.empty()
                    }
                    return y.createRange()
                }
            }
        },
        isCollapsed: function () {
            var y = this.getSel();
            var x = y.type.toLowerCase();
            if (x === "none") {
                return v
            } else {
                if (x === "control") {
                    return v
                } else {
                    if (x === "text") {
                        var e = y.createRange();
                        return e.compareEndPoints("StartToEnd", e) == 0
                    } else {
                        return v
                    }
                }
            }
        },
        collapse: function (y) {
            var z = this.getSel();
            var x = z.type.toLowerCase();
            if (x === "text") {
                var e = z.createRange();
                e.collapse(y);
                e.select();
                return z.createRange()
            } else {
                if (x === "control") {
                    z.empty()
                }
                return z.createRange()
            }
        },
        getControl: function () {
            var y = this.getSel();
            var e = y.type.toLowerCase();
            if (e === "control") {
                var x = y.createRange().item(0);
                if (w.kindOf(x, "%control")) {
                    return x
                } else {
                    return j
                }
            } else {
                return j
            }
        },
        hasControl: function () {
            var x = this.getSel();
            var e = x.type.toLowerCase();
            if (e === "control") {
                return v
            } else {
                return d
            }
        },
        selectControl: function (x) {
            var e = this.doc.body.createControlRange();
            e.add(x);
            e.select()
        },
        compareTextPos: function () {
            var y = this.getSel();
            var x = y.type.toLowerCase();
            if (x === "none") {
                var e = y.createRange();
                var z = e.duplicate();
                z.moveToElementText(e.parentElement());
                if (z.text.trim().replace(h.__WORD_JOINER_REGEXP, "").length == 0) {
                    return w.__POSITION.__EMPTY_TEXT
                } else {
                    if (e.compareEndPoints("StartToStart", z) == 0) {
                        return w.__POSITION.__START_OF_TEXT
                    } else {
                        if (e.compareEndPoints("EndToEnd", z) == 0) {
                            return w.__POSITION.__END_OF_TEXT
                        } else {
                            return w.__POSITION.__MIDDLE_OF_TEXT
                        }
                    }
                }
            }
            return w.__POSITION.__END_OF_TEXT
        },
        transTextRange: function (e, A, B, y) {
            var z = this.createTextRange();
            var x = this.win.span(h.__WORD_JOINER);
            w.insertAt(x, A);
            z.moveToElementText(x);
            w.remove(x);
            z.collapse(v);
            z.moveStart("character", B);
            if (y) {
                e.setEndPoint("StartToStart", z)
            } else {
                e.setEndPoint("EndToEnd", z)
            }
            return e
        },
        setStart: function (x, y, A) {
            try {
                this.transTextRange(x, y, A, v)
            } catch (z) {
                console.log(z)
            }
            return x
        },
        setEnd: function (x, y, A) {
            try {
                this.transTextRange(x, y, A, d)
            } catch (z) {
                console.log(z)
            }
            return x
        },
        selectRange: function (e) {
            e.select()
        }
    };
    h.I.Selection.Gecko = {};
    h.I.Selection.Webkit = {
        getControl: function () {
            var z = this.getSel();
            if (z.isCollapsed) {
                return j
            }
            if (w.isElement(z.anchorNode)) {
                var y = z.anchorNode.childNodes[z.anchorOffset];
                if (w.kindOf(y, "%control")) {
                    return y
                } else {
                    return j
                }
            }
            var x = w.previous(z.focusNode);
            var e = w.next(z.anchorNode);
            if (x == e) {
                return w.first(x, "%control")
            } else {
                return j
            }
        },
        selectControl: function (x) {
            var e = this.createRange();
            e.selectNode(x);
            var y = this.getSel();
            y.removeAllRanges();
            y.addRange(e)
        }
    };
    h.I.Selection.Presto = {};
    h.Canvas.Selection = h.Class.create({
        $mixins: [h.I.Selection.Standard, ((u.msie) ? h.I.Selection.Trident : {}), ((u.gecko) ? h.I.Selection.Gecko : {}), ((u.webkit) ? h.I.Selection.Webkit : {}), ((u.presto) ? h.I.Selection.Presto : {})],
        initialize: function (e) {
            this.processor = e;
            this.win = e.win;
            this.doc = e.doc
        }
    });
    h.Canvas.Bookmark = h.Class.create({
        startContainer: j,
        startOffset: 0,
        endContainer: j,
        endOffset: 0,
        initialize: function (e) {
            this.processor = e;
            this.win = e.win;
            this.doc = e.doc;
            this.dummy = function () {
                return e.newDummy()
            }
        },
        collapse: function (e) {
            if (e) {
                this.updateEnd(this.startContainer, this.startOffset)
            } else {
                this.updateStart(this.endContainer, this.endOffset)
            }
        },
        save: function (e) {
            this.updateStart(e.startContainer, e.startOffset);
            this.updateEnd(e.endContainer, e.endOffset)
        },
        saveAroundNode: function (e) {
            this.updateStartBefore(w.top(e));
            this.updateEndAfter(w.bottom(e))
        },
        saveIntoFirst: function (x) {
            var e = w.top(x);
            this.updateEndBefore(e);
            this.collapse(d)
        },
        saveIntoLast: function (x) {
            var e = w.bottom(x);
            this.updateEndBefore(e);
            this.collapse(d)
        },
        savePreviousTo: function (x) {
            if (w.previous(x)) {
                var e = w.top(w.previous(x));
                this.updateEndAfter(e)
            } else {
                this.updateEndBefore(x)
            }
            this.collapse(d)
        },
        saveNextTo: function (x) {
            if (w.next(x)) {
                var e = w.top(w.next(x));
                this.updateEndBefore(e)
            } else {
                this.updateEndAfter(x)
            }
            this.collapse(d)
        },
        saveWithMarker: function (e) {
            if (e.checkCollapsed()) {
                this.updateEndAfter(e.endMarker);
                this.collapse(d)
            } else {
                this.updateStartBefore(e.startMarker);
                this.updateEndAfter(e.endMarker)
            }
        },
        select: function (z) {
            if (this.isValid()) {
                var x = z.createTextRange();
                try {
                    z.setStart(x, this.startContainer, this.startOffset);
                    z.setEnd(x, this.endContainer, this.endOffset)
                } catch (y) {
                    console.log(y)
                }
                z.selectRange(x)
            }
            this.reset()
        },
        isValid: function () {
            return this.isValidStartContainer() && this.isValidEndContainer()
        },
        isValidStartContainer: function () {
            return this.doc.body === w.body(this.startContainer)
        },
        isValidEndContainer: function () {
            return this.doc.body === w.body(this.endContainer)
        },
        updateStart: function (e, x) {
            this.startContainer = e;
            this.startOffset = x
        },
        updateStartBefore: function (x) {
            var e = this.dummy();
            w.insertAt(e, x);
            this.startContainer = e;
            this.startOffset = 0
        },
        updateStartAfter: function (x) {
            var e = this.dummy();
            w.insertNext(e, x);
            this.startContainer = e;
            this.startOffset = 0
        },
        updateEnd: function (e, x) {
            this.endContainer = e;
            this.endOffset = x
        },
        updateEndBefore: function (x) {
            var e = this.dummy();
            if (x.nodeName && x.nodeName.toUpperCase() == "P" && !x.nodeValue) {
                w.append(x, e)
            } else {
                w.insertAt(e, x)
            }
            this.endContainer = e;
            this.endOffset = 0
        },
        updateEndAfter: function (x) {
            var e = this.dummy();
            w.insertNext(e, x);
            this.endContainer = e;
            this.endOffset = 0
        },
        reset: function () {
            this.startContainer = j;
            this.startOffset = 0;
            this.endContainer = j;
            this.endOffset = 0
        }
    });
    h.Canvas.TextAreaProcessor = h.Class.create({
        $mixins: [],
        initialize: function (e) {
            this.el = e
        },
        focus: function () {
            this.el.focus()
        },
        focusOnTop: function () {
            var e = this.el;
            if (e.createTextRange) {
                var x = e.createTextRange();
                x.collapse(v);
                x.moveStart("character", 0);
                x.moveEnd("character", 0);
                x.select()
            } else {
                if (e.setSelectionRange) {
                    e.select();
                    e.setSelectionRange(0, 0)
                } else {
                    e.focus()
                }
            }
        },
        blur: function () {
            i.focus()
        },
        savePosition: function () {
            if (this.el.createTextRange) {
                this.currentPos = c.selection.createRange().duplicate()
            }
        },
        controlEnter: function () {
            var e = this;
            e.insertTag("<br/>", "")
        },
        insertTag: function (e, x) {
            this.pasteContent(e + x);
            return v
        },
        pasteContent: function (e) {
            this.el.value += e
        }
    });
    h.I.Processor = {};
    h.I.Processor.Standard = {
        txSelection: j,
        initialize: function (x, e) {
            this.win = x;
            this.doc = e;
            this.txSelection = new h.Canvas.Selection(this);
            this.bookmark = new h.Canvas.Bookmark(this)
        },
        getTxSel: function () {
            return this.txSelection
        },
        getSel: function () {
            return this.txSelection.getSel()
        },
        getRange: function () {
            return this.txSelection.getRange()
        },
        getBookmark: function () {
            return this.bookmark
        },
        isCollapsed: function () {
            return this.txSelection.isCollapsed()
        },
        getNode: function () {
            return this.txSelection.getNode()
        },
        getControl: function () {
            return this.txSelection.getControl()
        },
        hasControl: function () {
            return this.txSelection.hasControl()
        },
        selectControl: function (e) {
            return this.txSelection.selectControl(e)
        },
        getText: function () {
            return this.txSelection.getText()
        },
        compareTextPos: function () {
            return this.txSelection.compareTextPos()
        },
        findNode: function (x) {
            try {
                return w.find(this.getNode(), x)
            } catch (y) {
                return j
            }
        },
        queryStyle: function (y, x) {
            if (!y) {
                return j
            }
            x = ((x == "float") ? ((y.style.styleFloat === r) ? "cssFloat" : "styleFloat") : x);
            if (y.style && y.style[x]) {
                return y.style[x]
            } else {
                if (y.currentStyle && y.currentStyle[x]) {
                    return y.currentStyle[x]
                } else {
                    if (i.getComputedStyle) {
                        var e = this.doc.defaultView.getComputedStyle(y, j);
                        return ((e) ? e[x] : j)
                    }
                }
            }
            return j
        },
        queryAttr: function (x, e) {
            if (!x) {
                return j
            }
            return w.getAttribute(x, e)
        },
        queryCommandState: function (y) {
            try {
                return this.doc.queryCommandState(y)
            } catch (x) {
                return d
            }
        },
        queryCommandValue: function (y) {
            try {
                return this.doc.queryCommandValue(y)
            } catch (x) {
                return ""
            }
        },
        execCommand: function (z, x) {
            if (u.gecko) {
                try {
                    this.doc.execCommand("styleWithCSS", d, d)
                } catch (y) {}
            }
            try {
                this.doc.execCommand(z, d, x)
            } catch (y) {}
        },
        execWithMarker: function (y) {
            var x = new h.Canvas.Marker(this);
            this.bookmarkTo();
            try {
                x.paste();
                x.backup();
                y(x)
            } catch (z) {
                console.log(z, z.stack)
            } finally {
                x.remove()
            }
        },
        focus: function () {
            this.win.focus()
        },
        blur: function () {
            i.focus()
        },
        focusOnTop: function () {
            this.win.focus();
            this.selectFirstText(this.doc.body);
            this.doc.body.scrollTop = 0
        },
        selectFirstText: function (x) {
            var y = w.top(x);
            var e = this.createGoogRangeFromNodes(y, 0, y, 0);
            e.select()
        },
        focusOnBottom: function () {
            this.win.focus();
            this.moveCaretTo(this.doc.body, d);
            this.doc.body.scrollTop = this.doc.body.scrollHeight
        },
        moveCaretTo: function (x, e) {
            if (!x) {
                return
            }
            this.bookmarkInto(x, e);
            this.bookmark.select(this.txSelection)
        },
        moveCaretWith: function (x) {
            if (!x) {
                return
            }
            var e = this.findNode(x);
            if (e) {
                this.bookmark.saveNextTo(e);
                this.bookmark.select(this.txSelection)
            }
        },
        selectAround: function (e) {
            if (!e) {
                return
            }
            this.bookmark.saveAroundNode(e);
            this.bookmark.select(this.txSelection)
        },
        bookmarkInto: function (x, e) {
            if (!x) {
                return
            }
            e = (e == j) ? v : e;
            if (e) {
                this.bookmark.saveIntoFirst(x)
            } else {
                this.bookmark.saveIntoLast(x)
            }
        },
        bookmarkToPrevious: function (e) {
            if (!e) {
                return
            }
            this.bookmark.savePreviousTo(e)
        },
        bookmarkToNext: function (e) {
            if (!e) {
                return
            }
            this.bookmark.saveNextTo(e)
        },
        bookmarkTo: function (e) {
            e = e || this.txSelection.getRange();
            this.bookmark.save({
                startContainer: e.startContainer,
                startOffset: e.startOffset,
                endContainer: e.endContainer,
                endOffset: e.endOffset
            })
        },
        bookmarkWithMarker: function (e) {
            this.bookmark.saveWithMarker(e)
        },
        restore: function () {
            this.bookmark.select(this.txSelection)
        },
        create: function () {
            var y = arguments[0];
            var A = this.newNode(y);
            for (var z = 1; z < arguments.length; z++) {
                var e = arguments[z];
                if (e.nodeType) {
                    w.append(A, e)
                } else {
                    if (typeof (e) == "string" || typeof (e) == "number") {
                        A.innerHTML += e
                    } else {
                        if (typeof (e) == "array") {
                            for (var x = 0; x < e.length; x++) {
                                w.append(A, e[x])
                            }
                        } else {
                            w.applyAttributes(A, e)
                        }
                    }
                }
            }
            return A
        },
        pasteNode: function (A, z, C) {
            if (!A) {
                return
            }
            if (!A.length) {
                A = [].concat(A)
            }
            this.txSelection.collapse(d);
            if (z) {
                var y, x, e;
                var B = this;
                this.execWithMarker(function (D) {
                    e = w.divideParagraph(D.endMarker);
                    var E = w.kindOf(e, "p,li,dd,dt,h1,h2,h3,h4,h5,h6");
                    if (E) {
                        y = w.previous(e);
                        x = w.clone(e)
                    } else {
                        e = B.newNode("p");
                        w.insertAt(e, D.endMarker);
                        x = B.newNode("p")
                    }
                    w.insertAt(x, e);
                    A.each(function (F) {
                        w.append(x, F)
                    });
                    if (C) {
                        w.applyAttributes(x, C)
                    }
                });
                if (y) {
                    if (!w.hasData(y)) {
                        this.stuffNode(y)
                    }
                }
                this.stuffNode(e);
                this.bookmark.saveIntoFirst(e)
            } else {
                this.execWithMarker(function (D) {
                    A.each(function (E) {
                        w.insertAt(E, D.endMarker)
                    })
                })
            }
            return A[0]
        },
        pasteContent: function (y, x, A) {
            var e = this.create("div");
            e.innerHTML = y;
            var z = w.children(e);
            return this.pasteNode(z, x, A)
        },
        replace: function (y, e, x) {
            this.bookmark.saveAroundNode(y);
            return w.replace(y, this.create(e, x))
        },
        blocks: function (y) {
            var A = [];
            var z = y();
            if (this.hasControl()) {
                var x = this.getControl();
                if (w.kindOf(x.parentNode, z)) {
                    A.push(x.parentNode)
                }
            } else {
                var e = this;
                this.execWithMarker(function (B) {
                    var D = e.getBlockRangeIterator(z, B.startMarker, B.endMarker);
                    var C;
                    while (D.hasNext()) {
                        C = D.next();
                        if (w.kindOf(C, "#tx_start_marker,#tx_end_marker")) {} else {
                            A.push(C)
                        }
                    }
                })
            }
            return A
        },
        inlines: function (z) {
            var C = [];
            var A = z();
            var y = this;
            var B = function () {
                return y.create(w.inlineOf())
            };
            if (this.hasControl()) {
                var x = this.getControl();
                if (w.kindOf(x, A)) {
                    C.push(x)
                } else {
                    var e = B();
                    w.insertNext(e, x);
                    w.append(e, x)
                }
            } else {
                this.execWithMarker(function (E) {
                    if (E.checkCollapsed()) {
                        var D = B();
                        w.append(D, y.newDummy());
                        w.insertNext(D, E.startMarker);
                        y.bookmarkTo({
                            startContainer: D,
                            startOffset: 1,
                            endContainer: D,
                            endOffset: 1
                        });
                        C.push(D)
                    } else {
                        var G = y.getInlineRangeIterator(A, E.startMarker, E.endMarker);
                        var F;
                        while (G.hasNext()) {
                            F = G.next();
                            if (w.kindOf(F, "#tx_start_marker,#tx_end_marker")) {} else {
                                if (w.kindOf(F, "br")) {} else {
                                    C.push(F)
                                }
                            }
                        }
                    }
                })
            }
            return C
        },
        controls: function (e) {
            var x = [];
            if (this.hasControl()) {
                if (w.kindOf(this.getControl(), e())) {
                    x.push(this.getControl())
                }
            }
            return x
        },
        addDummyNbsp: function () {},
        apply: function (x, e) {
            if (!x) {
                return j
            }
            if (!x.length) {
                x = [].concat(x)
            }
            x.each(function (y) {
                w.applyAttributes(y, e)
            });
            return x
        },
        wrap: function (y, e, x) {
            if (!y) {
                return j
            }
            if (!y.length) {
                y = [].concat(y)
            }
            x = x || {};
            return w.wrap(this.create(e, x), y)
        },
        unwrap: function (e) {
            if (!e) {
                return j
            }
            this.bookmark.saveAroundNode(e);
            return w.unwrap(e)
        },
        createGoogRange: function () {
            return g.dom.Range.createFromWindow(this.win)
        },
        createGoogRangeFromNodes: function (z, x, e, y) {
            return g.dom.Range.createFromNodes(z, x, e, y)
        },
        executeUsingCaret: function (x) {
            try {
                var e = this.createGoogRange();
                var y = e.saveUsingCarets();
                return x(e, y)
            } finally {
                if (!y.isDisposed()) {
                    y.restore()
                }
            }
        }
    };
    h.module("observe that @when control elements are focused at", function (x, y, z, e) {
        if (u.webkit || u.presto) {
            e.observeJob(h.Ev.__CANVAS_PANEL_MOUSEDOWN, function (C) {
                var B = e.getProcessor();
                var A = u.element(C);
                if (w.kindOf(A, "img,hr,iframe,table")) {
                    var D = w.find(A, "button");
                    if (D) {
                        B.selectControl(D)
                    } else {
                        B.selectControl(A)
                    }
                } else {
                    if (w.kindOf(A, "button")) {
                        B.selectControl(A)
                    }
                }
            })
        }
    });
    h.I.Processor.Trident = {
        stuffNode: function (e) {
            if (w.getLength(e) == 0) {
                e.innerHTML = "&nbsp;"
            }
            return e
        },
        controlEnterByParagraph: function () {
            var x = this.findNode("div");
            var e;
            if (!x) {
                throw $propagate
            }
            var y = this.findNode("%paragraph");
            if (w.kindOf(y, "p")) {
                if (w.first(x, "p") == y) {
                    this.execWithMarker(function (z) {
                        e = w.divideParagraph(z.endMarker)
                    });
                    this.stuffNode(y);
                    this.stuffNode(e);
                    this.moveCaretTo(e)
                } else {
                    throw $propagate
                }
            } else {
                if (w.kindOf(y, "li,td,th,dd,dt")) {
                    throw $propagate
                } else {
                    e = this.newParagraph("p");
                    this.execWithMarker(function (z) {
                        w.insertNext(e, z.endMarker)
                    });
                    this.moveCaretTo(e)
                }
            }
        }
    };
    h.module("delete image element @when backspace key event fires", function (x, y, z, e) {
        if (u.msie) {
            e.observeKey({
                ctrlKey: d,
                altKey: d,
                shiftKey: d,
                keyCode: h.__KEY.BACKSPACE
            }, function () {
                var B = e.getProcessor();
                if (B.hasControl() && B.getControl()) {
                    try {
                        var A = B.getControl();
                        w.remove(A)
                    } catch (C) {}
                    throw $stop
                }
                throw $propagate
            })
        }
    });
    h.module("delete table element @when backspace key event fires", function (x, y, z, e) {
        if (u.msie) {
            var A;
            e.observeKey({
                ctrlKey: d,
                altKey: d,
                shiftKey: d,
                keyCode: h.__KEY.BACKSPACE
            }, function () {
                var C = e.getProcessor();
                var B = C.getRange();
                try {
                    if (A == B.boundingLeft) {
                        var E = w.previous(C.getNode());
                        if (w.kindOf(E, "table")) {
                            w.remove(E)
                        }
                    }
                } catch (D) {}
                A = B.boundingLeft;
                throw $propagate
            })
        }
    });
    Object.extend(h.I.Processor.Trident, {
        lastRange: j,
        shouldHandleOnActivate: v,
        restoreRange: function () {
            if (!this.shouldHandleOnActivate) {
                return
            }
            if (this.lastRange) {
                try {
                    this.lastRange.select()
                } catch (A) {
                    var z = this.getSel();
                    var y = z.type.toLowerCase();
                    if (y === "control") {
                        z.empty();
                        var x = z.createRange();
                        x.collapse(d);
                        x.select()
                    }
                } finally {
                    this.lastRange = j
                }
            }
        }
    });
    h.module("bind iframe activate or deactivate event", function (x, y, z, e) {
        if (u.msie) {
            e.observeJob(h.Ev.__IFRAME_LOAD_COMPLETE, function (A) {
                var B = e.getProcessor(h.Canvas.__WYSIWYG_MODE);
                u.observe(A, "beforedeactivate", function (E) {
                    var C = E.toElement;
                    if (C) {
                        B.shouldHandleOnActivate = d;
                        B.lastRange = j
                    } else {
                        var D = u.element(E);
                        if (!D || !w.isElement(D)) {
                            return
                        }
                        B.shouldHandleOnActivate = !w.kindOf(D, "iframe,object");
                        B.lastRange = B.getRange()
                    }
                });
                u.observe(A, "activate", function () {
                    B.lastRange = j
                })
            })
        }
    });
    h.I.Processor.Gecko = {
        stuffNode: function (e) {
            return w.stuff(e, this.newNode("br"))
        },
        controlEnterByParagraph: function () {
            throw $propagate
        }
    };
    h.I.Processor.Webkit = {
        stuffNode: function (e) {
            return w.stuff(e, this.newNode("br"))
        },
        controlEnterByParagraph: function () {
            throw $propagate
        },
        findParagraph: function (y) {
            var e = function (z) {
                return w.kindOf(z, "div,p,blockquote")
            };
            var x = function (z) {
                return w.kindOf(z, "body,li,%tablegroup")
            };
            return w.findAncestor(y, e, x)
        },
        findAncestorListItem: function (y) {
            var e = function (z) {
                return w.kindOf(z, "li")
            };
            var x = function (z) {
                return w.kindOf(z, "body,%tablegroup")
            };
            return w.findAncestor(y, e, x)
        },
        divideListItem: function (e) {
            var y, x = this;
            x.execWithMarker(function (z) {
                y = w.divideTree(e, z.endMarker)
            });
            if (!w.hasUsefulChildren(e, v)) {
                e.innerHTML = ""
            }
            if (!w.hasUsefulChildren(y, v)) {
                y.innerHTML = ""
            }
            x.stuffNode(e);
            x.stuffNode(y);
            x.moveCaretTo(y)
        },
        queryCommandState: function (A) {
            var x = this.getRange();
            if (this.hasControl() && x.collapsed === d && x.endOffset - x.startOffset === 1) {
                if (A === "bold" || A === "underline" || A === "italic" || A === "strikethrough") {
                    var y = this.getControl();
                    if (y.tagName === "IMG" || y.tagName === "BUTTON") {
                        return d
                    }
                }
            }
            try {
                return this.doc.queryCommandState(A)
            } catch (z) {
                return d
            }
        },
        addDummyNbsp: function (e) {
            var x;
            if (e.length === 1) {
                x = e[0];
                if (x.tagName.toLowerCase() === "span" && x.childNodes.length === 1 && x.firstChild.nodeType === 3 && x.firstChild.data === "") {
                    x.firstChild.data = "\u00A0"
                }
            }
        }
    };
    h.I.Processor.Presto = {
        stuffNode: function (e) {
            return w.stuff(e, this.newNode("br"))
        },
        controlEnterByParagraph: function (e) {
            throw $propagate
        }
    };
    h.I.Processor.StandardP = {
        putBogusParagraph: function () {
            var y = this.doc.body;
            var x = w.last(y);
            if (x && w.kindOf(x, "p")) {
                return
            }
            var e = this.newParagraph("p");
            if (w.kindOf(x, "br")) {
                w.replace(x, e)
            } else {
                w.append(y, e)
            }
        }
    };
    h.module("put bogus paragraph @when any key event fires", function (x, y, z, e) {
        if (u.msie) {
            return
        }
        if (e.config.newlinepolicy == "p") {
            e.reserveJob(h.Ev.__CANVAS_PANEL_KEYUP, function () {
                if (!e.isWYSIWYG()) {
                    return
                }
                var A = e.getProcessor();
                A.putBogusParagraph()
            }, 10)
        }
    });
    h.module("interrupt enter key action @ wysiwyg panel", function (x, y, A, e) {
        var z = q.get("canvas");
        if (z.newlinepolicy != "p") {
            return
        }
        e.observeKey({
            ctrlKey: d,
            altKey: d,
            shiftKey: d,
            keyCode: h.__KEY.ENTER
        }, function (C) {
            if (!e.isWYSIWYG()) {
                return
            }
            var B = e.getProcessor();
            try {
                B.getTxSel().collapse(d);
                B.controlEnterByParagraph(C)
            } catch (D) {
                if (D == $propagate) {
                    throw D
                }
            }
        })
    });
    h.I.Processor.TridentP = {};
    h.I.Processor.GeckoP = {};
    h.I.Processor.WebkitP = {};
    h.I.Processor.PrestoP = {};
    (function () {
        var e = h.Class.create({
            initialize: function (z, y, A, x) {
                this.processor = z;
                this.start = A;
                this.end = x || this.start;
                this.current = this.start;
                this.wTranslator = w.translate(y).extract("%wrapper");
                this.pTranslator = w.translate(y).extract("%paragraph")
            },
            hasNext: function () {
                return !!this.current
            },
            next: function () {
                var y = this.current;
                y = this.find(y);
                var x = y;
                if (w.include(y, this.end)) {
                    x = j
                } else {
                    while (x && !w.next(x)) {
                        x = w.parent(x);
                        if (w.isBody(x)) {
                            x = j
                        }
                    }
                    if (x) {
                        x = w.next(x)
                    }
                } if (x == this.end) {
                    x = j
                }
                this.current = x;
                return y
            },
            find: function (B) {
                var z;
                var A = B;
                if (!w.hasContent(A)) {
                    return A
                }
                while (A) {
                    z = A;
                    if (w.isBody(A) || w.kindOf(A, "%tablegroup")) {
                        break
                    }
                    if (w.kindOf(A, this.wTranslator.getExpression())) {
                        return A
                    }
                    if (w.kindOf(A, "%wrapper,%outergroup")) {
                        A = w.descendant(z, this.pTranslator.getExpression());
                        if (A) {
                            return A
                        }
                        A = w.descendant(z, "%paragraph");
                        if (A) {
                            z = A;
                            break
                        }
                    }
                    if (w.kindOf(A, this.pTranslator.getExpression())) {
                        return A
                    }
                    A = A.parentNode
                }
                var y = w.paragraphOf(w.getName(z));
                var C = this.processor.newNode(y);
                var x = w.extract(z, B, "%text,%inline,img,object,embed,hr");
                w.wrap(C, x);
                this.processor.stuffNode(C);
                return C
            }
        });
        Object.extend(h.I.Processor.Standard, {
            getBlockRangeIterator: function (y, z, x) {
                return new e(this, y, z, x)
            }
        })
    })();
    (function () {
        var e = h.Class.create({
            initialize: function (z, y, A, x) {
                this.processor = z;
                this.start = A;
                this.end = x || this.start;
                this.current = this.start;
                this.iTranslator = w.translate(y).extract("%inline")
            },
            hasNext: function () {
                return !!this.current
            },
            next: function () {
                var y = this.current;
                y = this.find(y);
                var x = y;
                if (y == this.end) {
                    x = j
                } else {
                    while (x && !w.next(x)) {
                        x = w.parent(x);
                        if (w.isBody(x)) {
                            x = j
                        }
                    }
                    if (x) {
                        x = w.next(x)
                    }
                } if (w.include(x, this.end)) {
                    x = w.top(x, v)
                }
                this.current = x;
                return y
            },
            find: function (B) {
                var A = B;
                if (w.kindOf(A, "%paragraph,%outergroup,%block") || w.isBody(A)) {
                    var z = A;
                    A = w.top(z, v);
                    if (!A) {
                        var y = w.inlineOf();
                        var x = this.processor.create(y);
                        w.append(z, x);
                        return x
                    }
                }
                if (w.kindOf(A, "br")) {
                    return A
                } else {
                    if (!w.hasContent(A)) {
                        return A
                    }
                } if (w.kindOf(A, this.iTranslator.getExpression())) {
                    return A
                }
                var y = w.inlineOf();
                var x = this.processor.create(y);
                w.insertAt(x, A);
                if (A) {
                    w.append(x, A)
                }
                return x
            }
        });
        Object.extend(h.I.Processor.Standard, {
            getInlineRangeIterator: function (y, z, x) {
                return new e(this, y, z, x)
            }
        })
    })();
    (function () {
        var e = j;
        var x = {};
        var y = {};
        Object.extend(h.I.Processor.Standard, {
            newNode: function (z) {
                if (e != this.doc) {
                    x = {};
                    e = this.doc
                }
                if (!x[z]) {
                    x[z] = this.win[z]()
                }
                return w.clone(x[z], d)
            },
            newText: function (z) {
                return this.doc.createTextNode(z)
            },
            newParagraph: function (z) {
                if (e != this.doc) {
                    y = {};
                    e = this.doc
                }
                if (!y[z]) {
                    y[z] = this.stuffNode(this.newNode(z))
                }
                return w.clone(y[z], v)
            }
        })
    })();
    (function () {
        var e = j;
        var x = j;
        var z = d;
        var y = [];
        Object.extend(h.I.Processor.Standard, {
            newDummy: function (A) {
                if (e != this.doc) {
                    x = j;
                    y = [];
                    e = this.doc
                }
                if (!x) {
                    x = this.doc.createTextNode(h.__WORD_JOINER)
                }
                var B = w.clone(x);
                if (!A) {
                    y.push(B);
                    z = v
                }
                return B
            },
            clearDummy: function () {
                if (!z) {
                    return
                }
                var C, E;
                try {
                    C = this.createGoogRange();
                    E = C && C.getStartNode()
                } catch (B) {}
                var H = j;
                for (var F = 0, A = y.length - 1; F < A; F++) {
                    try {
                        var D = y.shift();
                        if (D && D.nodeValue) {
                            if (D.nodeValue == h.__WORD_JOINER) {
                                if (E != D) {
                                    w.remove(D)
                                } else {
                                    H = D
                                }
                            } else {
                                D.nodeValue = D.nodeValue.replace(h.__WORD_JOINER_REGEXP, "")
                            }
                        } else {}
                    } catch (G) {}
                }
                H && y.splice(0, 0, H);
                z = d
            }
        })
    })();
    h.Canvas.Processor = h.Class.draft({
        $mixins: [h.I.Processor.Standard, ((u.msie) ? h.I.Processor.Trident : {}), ((u.gecko) ? h.I.Processor.Gecko : {}), ((u.webkit) ? h.I.Processor.Webkit : {}), ((u.presto) ? h.I.Processor.Presto : {})]
    });
    h.Canvas.ProcessorP = h.Class.create({
        $extend: h.Canvas.Processor,
        $mixins: [h.I.Processor.StandardP, ((u.msie) ? h.I.Processor.TridentP : {}), ((u.gecko) ? h.I.Processor.GeckoP : {}), ((u.webkit) ? h.I.Processor.WebkitP : {}), ((u.presto) ? h.I.Processor.PrestoP : {})]
    });
    h.register("filter > mode change", function (E, F, e, z, B) {
        function y(J) {
            var K = [
                [new RegExp("<head[^>]*>.*?<\\/head>", "gi"), ""],
                [new RegExp("<script[^>]*>.*?<\\/script>", "gi"), ""],
                [new RegExp("<style[^>]*>.*?<\\/style>", "gi"), ""],
                [new RegExp("<!--.*?-->", "gi"), ""],
                [new RegExp("<h[1-6][^>]*>(.+?)<\\/h[1-6]>", "gi"), "\n$1\n\n"],
                [new RegExp("\r\n(<p[^>]*>|<div[^>]*>|<ul[^>]*>|<ol[^>]*>|<li[^>]*>)", "gi"), "$1"],
                [new RegExp("(<p[^>]*>(.+?)<\\/p>)", "gi"), "$1\n"],
                [new RegExp("<br[^>]*>\\n", "gi"), "\n"],
                [new RegExp("<br[^>]*>", "gi"), "\n"],
                [new RegExp("(<ul[^>]*>|<\\/ul>|<ol[^>]*>|<\\/ol>|<\\/table>)", "gi"), "\n\n"],
                [new RegExp("<td[^>]*>(.+?)<\\/td>\n?", "gi"), "\t$1"],
                [new RegExp("<th[^>]*>(.+?)<\\/th>\n?", "gi"), " \t$1"],
                [new RegExp("<\\/tr>\n?", "gi"), ""],
                [new RegExp("<tr[^>]*>\n?", "gi"), "\n"],
                [new RegExp("(<li[^>]*>(.+?)<\\/li>)", "gi"), "\t$1\n"],
                [new RegExp("<[\\/a-zA-Z!]+[^>]*>", "g"), ""],
                [new RegExp("&nbsp;?", "g"), " "],
                [new RegExp("&quot;?", "g"), '"'],
                [new RegExp("&gt;?", "g"), ">"],
                [new RegExp("&lt;?", "g"), "<"],
                [new RegExp("&amp;?", "g"), "&"],
                [new RegExp("&copy;?", "g"), "(c)"],
                [new RegExp("&trade;?", "g"), "(tm)"],
                [new RegExp("&#8220;?", "g"), '"'],
                [new RegExp("&#8221;?", "g"), '"'],
                [new RegExp("&#8211;?", "g"), "_"],
                [new RegExp("&#8217;?", "g"), "'"],
                [new RegExp("&#38;?", "g"), "&"],
                [new RegExp("&#169;?", "g"), "(c)"],
                [new RegExp("&#8482;?", "g"), "(tm)"],
                [new RegExp("&#151;?", "g"), "--"],
                [new RegExp("&#039;?", "g"), "'"],
                [new RegExp("&#147;?", "g"), '"'],
                [new RegExp("&#148;?", "g"), '"'],
                [new RegExp("&#149;?", "g"), "*"],
                [new RegExp("&reg;?", "g"), "(R]"],
                [new RegExp("&bull;?", "g"), "*"]
            ];
            var I = J;
            for (var H = 0; H < K.length; H++) {
                I = I.replace(K[H][0], K[H][1])
            }
            return I
        }

        function D(H) {
            return H.replace(new RegExp("<br[^>]*>\\n", "gi"), "\n")
        }

        function C(H) {
            if (H !== j && H.length !== 0) {
                H = H.replace(/&/g, "&amp;");
                H = H.replace(/ /g, "&nbsp;");
                H = H.replace(/\"/g, "&quot;");
                H = H.replace(/>/g, "&gt;");
                H = H.replace(/</g, "&lt;");
                if (H.lastIndexOf("\n") === H.length - 1) {
                    H = H.substr(0, H.length - 1)
                }
                if (H.lastIndexOf("\r") === H.length - 1) {
                    H = H.substr(0, H.length - 1)
                }
                H = H.replace(/\r\n|\r|\n/g, "<br>\n")
            }
            return H
        }

        function A(H) {
            return u.msie ? H : H.replace(/(\n*<p>)/gi, "\n$1").replace(/^\n/, "")
        }

        function G(H) {
            return u.msie ? H : H.replace(/\n+(<p>)/gi, "$1")
        }
        var x = E.getDocParser();
        x.registerFilter("filter/converting", {
            "text@load": function (H) {
                return y(H)
            },
            "source@load": function (H) {
                return H
            },
            "html@load": function (H) {
                return H
            },
            text4save: function (I) {
                var H;
                if (B.canvas.escapeTextModeContents) {
                    H = C(I)
                } else {
                    H = I
                }
                try {
                    H = D(H)
                } catch (J) {}
                return H
            },
            source4save: function (H) {
                return H
            },
            html4save: function (H) {
                return H
            },
            text2source: function (H) {
                return C(H)
            },
            text2html: function (H) {
                return C(H)
            },
            source2text: function (H) {
                return y(G(H))
            },
            source2html: function (H) {
                return G(H)
            },
            html2text: function (H) {
                return y(H)
            },
            html2source: function (H) {
                return A(H)
            }
        })
    });
    h.register("filter > clear redundancy", function (y) {
        function e(B) {
            var z = function (I, F, E) {
                var H = 0;
                var D = function (J, K, L) {
                    H++;
                    if (L.length == 0 || L.trim().length == 0) {
                        return ""
                    } else {
                        return ['<span style="', F, ":", K, ';">', L, "</span>"].join("")
                    }
                };
                var G = new RegExp('(?:<span[^>;]*style="' + F + ':[^";]*;?"[^>;]*>){' + E + "}<span\\s*style=['\"]?" + F + ":\\s*(\\w+)[;'\"]*>([\\S\\s]*?)</span>(?:</span>){" + E + "}", "gi");
                do {
                    H = 0;
                    I = I.replace(G, D)
                } while (H > 0);
                return I
            };
            B = B.replace(/<(span|font)([^>]*)><\/\1>/gi, function (F, D, E) {
                if (/ (?:id|class)=/i.test(E)) {
                    return F
                }
                return ""
            });
            var C = ["font-size", "font-family"];
            for (var A = 0; A < C.length; A++) {
                B = z(B, C[A], 2);
                B = z(B, C[A], 1)
            }
            return B
        }
        var x = y.getDocParser();
        x.registerFilter("filter/redundancy", {
            "text@load": function (z) {
                return z
            },
            "source@load": function (z) {
                return e(z)
            },
            "html@load": function (z) {
                return e(z)
            },
            text4save: function (z) {
                return z
            },
            source4save: function (z) {
                return z
            },
            html4save: function (z) {
                return z
            },
            text2source: function (z) {
                return z
            },
            text2html: function (z) {
                return z
            },
            source2text: function (z) {
                return z
            },
            source2html: function (z) {
                return z
            },
            html2text: function (z) {
                return z
            },
            html2source: function (z) {
                return e(z)
            }
        })
    });
    k.addMsg({
        "@attacher.only.wysiwyg.alert": "\uc5d0\ub514\ud130 \uc0c1\ud0dc\uc5d0\uc11c\ub9cc \ubcf8\ubb38\uc5d0 \uc0bd\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc5d0\ub514\ud130\ubaa8\ub4dc\uc5d0\uc11c \ucca8\ubd80\ubc15\uc2a4\uc758 \uc378\ub124\uc77c\uc744 \ud074\ub9ad\ud574\uc11c \uc0bd\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."
    });
    h.Attachment = h.Class.draft({
        $extend: h.Entry,
        isChecked: d,
        focused: d,
        attrs: {
            align: "left"
        },
        initialize: function (e, x) {
            this.actor = e;
            this.canvas = e.canvas;
            this.entryBox = e.entryBox;
            this.type = this.constructor.__Identity;
            this.setProperties(x);
            if (this.oninitialized) {
                this.oninitialized(e, x)
            }
        },
        setFocused: function (e) {
            if (this.focused !== e) {
                this.focused = e
            }
        },
        setExistStage: function (e) {
            this.existStage = e;
            if (this.entryBox.changeState) {
                this.entryBox.changeState(this)
            }
        },
        remove: function () {
            var e = this.canvas.getContent();
            if (this.canvas.isWYSIWYG()) {
                if (e.search(this.regHtml) > -1) {
                    e = e.replace(this.regHtml, ""); //img 앞부분 까지임
                    this.canvas.setContent(e)
                }
            } else {
                if (e.search(this.regText) > -1) {
                    e = e.replace(this.regText, "");
                    this.canvas.setContent(e)
                }
            }
        },
        register: function () {
            if (Editor.getSidebar().addOnlyBox) {
                return
            }
            var y = this.actor;
            if (y.boxonly) {
                return
            }
            if (this.canvas.isWYSIWYG()) {
                var A = this.pastescope;
                var B = this.dispHtml;
                var z = "img";
                var x = B.match(/<(\w+)/);
                if (x && x[1]) {
                    z = x[1]
                }
                var C = new RegExp("<" + z + " ", "i");
                if (this.objectStyle) {
                    B = B.replace(C, "<" + z + ' style="' + h.Util.toStyleString(this.objectStyle) + '" ')
                }
                if (this.objectAttr) {
                    B = B.replace(C, "<" + z + " " + h.Util.toAttrString(this.objectAttr) + " ")
                }
                var e = this.paragraphStyle || {};
                this.canvas.execute(function (D) {
                    D.moveCaretWith(A);
                    D.pasteContent(B, v, {
                        style: e
                    })
                })
            } else {
                if (this.actor.wysiwygonly) {
                    alert(TXMSG("@attacher.only.wysiwyg.alert"))
                } else {
                    this.canvas.getProcessor().insertTag("", this.dispText)
                }
            }
        },
        replace: function (z) {
            var y = this.canvas;
            var x = y.getContent();
            var e = this.actor;
            if (!e.boxonly) {
                if (y.isWYSIWYG()) {
                    if (x.search(z.regHtml) > -1) {
                        x = x.replace(z.regHtml, this.dispHtml);
                        y.setContent(x)
                    } else {
                        y.pasteContent(this.dispHtml, v)
                    }
                } else {
                    if (x.search(z.regText) > -1) {
                        x = x.replace(z.regText, "");
                        y.setContent(x)
                    }
                    alert(TXMSG("@attacher.only.wysiwyg.alert"))
                }
            }
        },
        setProperties: function (x) {
            var e = x;
            this.data = e;
            this.key = this.actor.getKey(e) || "K" + h.Util.generateKey();
            this.field = this.getFieldAttr(e);
            this.boxAttr = this.getBoxAttr(e);
            this.objectAttr = this.getObjectAttr.bind(this)(e);
            this.objectStyle = this.getObjectStyle.bind(this)(e);
            this.paragraphStyle = this.getParaStyle.bind(this)(e);
            this.saveHtml = this.getSaveHtml.bind(this)(e);
            this.dispHtml = this.getDispHtml.bind(this)(e);
            this.dispText = this.getDispText.bind(this)(e);
            this.regLoad = this.getRegLoad.bind(this)(e);
            this.regHtml = this.getRegHtml.bind(this)(e);
            this.regText = this.getRegText.bind(this)(e)
        },
        refreshProperties: function () {
            this.setProperties(this.data)
        },
        getObjectAttr: function () {
            return this.actor.config.objattr
        },
        getObjectStyle: function () {
            var e = {};
            if (this.actor.config.objstyle) {
                e = Object.extend(e, this.actor.config.objstyle)
            }
            return e
        },
        getParaStyle: function (e) {
            var x = Object.extend({}, this.actor.config.parastyle || this.actor.config.defaultstyle);
            return x
        }
    });
    q.addSidebar("attachbox", {
        show: d,
        destroy: d
    });
    h.AttachBox = h.Class.create({
        $extend: h.EntryBox,
        isChecked: d,
        initialize: function () {},
        checkAvailableCapacity: function () {
            return v
        },
        getAvailableCapacity: function () {
            return v
        },
        checkInsertableSize: function () {
            return v
        }
    });
    h.install("editor.getAttachBox & sidebar.getAttachments", function (z, A, B, y, x) {
        var e = new h.AttachBox(x, z);
        B.entryboxRegistry.attachbox = e;
        z.getAttachBox = function () {
            return e
        };
        B.getAttachments = e.getEntries.bind(e)
    });
    h.register("filter > attachers", function (y) {
        var e = y.getAttachBox();
        var x = y.getDocParser();
        x.registerFilter("filter/attachments", {
            "text@load": function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("text@load", A)
                    }
                    A = B.getChangedContent(A, B.regLoad, "")
                });
                return A
            },
            "source@load": function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("source@load", A)
                    }
                    A = B.getChangedContent(A, B.regLoad, B.dispText)
                });
                return A
            },
            "html@load": function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("html@load", A)
                    }
                    A = B.getChangedContent(A, B.regLoad, B.dispHtml)
                });
                return A
            },
            text4save: function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("text4save", A)
                    }
                    A = B.getChangedContent(A, B.regText, "")
                });
                return A
            },
            source4save: function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("source4save", A)
                    }
                    A = B.getChangedContent(A, B.regText, B.saveHtml, ["id", "class"])
                });
                return A
            },
            html4save: function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("html4save", A)
                    }
                    A = B.getChangedContent(A, B.regHtml, B.saveHtml, ["id", "class"])
                });
                return A
            },
            text2source: function (z) {
                return z
            },
            text2html: function (z) {
                return z
            },
            source2text: function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("source2text", A)
                    }
                    A = B.getChangedContent(A, B.regText, "")
                });
                return A
            },
            source2html: function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("source2html", A)
                    }
                    A = B.getChangedContent(A, B.regText, B.dispHtml)
                });
                return A
            },
            html2text: function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("html2text", A)
                    }
                    A = B.getChangedContent(A, B.regHtml, "")
                });
                return A
            },
            html2source: function (A) {
                var z = e.datalist;
                z.each(function (B) {
                    if (B.loadDataByContent) {
                        B.loadDataByContent("html2source", A)
                    }
                    A = B.getChangedContent(A, B.regHtml, B.dispText, ["id", "class"])
                });
                return A
            }
        })
    });
    h.module("push history @when entrybox has changes", function (y, z, A, x) {
        var e = y.getAttachBox();
        e.observeJob(h.Ev.__ENTRYBOX_ENTRY_REMOVED, function (C) {
            x.history.saveHistory({
                deleted: d
            }, {
                deleted: v
            }, function (D) {
                C.deletedMark = D.deleted;
                e.fireJobs(h.Ev.__ENTRYBOX_ENTRY_REFRESH, C)
            })
        });
        var B = function (C) {
            if (u.msie) {
                setTimeout(function () {
                    C()
                }, 0)
            } else {
                C()
            }
        };
        e.observeJob(h.Ev.__ENTRYBOX_ENTRY_ADDED, function (C) {
            B(function () {
                x.history.injectHistory({
                    deleted: v
                }, {
                    deleted: d
                }, function (D) {
                    C.deletedMark = D.deleted;
                    e.fireJobs(h.Ev.__ENTRYBOX_ENTRY_REFRESH, C)
                })
            })
        })
    });
    k.addMsg({
        "@attacher.ins": "\uc0bd\uc785",
        "@attacher.del": "\uc0ad\uc81c",
        "@attacher.preview.image": "#iconpath/pn_preview.gif",
        "@attacher.delete.confirm": "\uc0ad\uc81c\ud558\uc2dc\uba74 \ubcf8\ubb38\uc5d0\uc11c\ub3c4 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
        "@attacher.delete.all.confirm": "\uc120\ud0dd\ud55c \ucca8\ubd80\ud30c\uc77c\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc0ad\uc81c\ud558\uc2dc\uba74 \ubcf8\ubb38\uc5d0\uc11c\ub3c4 \uc0ad\uc81c\ub429\ub2c8\ub2e4.",
        "@attacher.exist.alert": "\uc774\ubbf8 \ubcf8\ubb38\uc5d0 \uc0bd\uc785\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."
    });
    h.install("attachbox.onAttachBoxInitialized @if config.sidebar.attachbox.show = true", function (z, A, B, y, x) {
        var e = z.getAttachBox();
        if (x.sidebar.attachbox.show == v) {
            Object.extend(e, h.I.AttachBox);
            e.onAttachBoxInitialized(x, y, z)
        }
    });
    h.I.AttachBox = {
        useBox: v,
        isDisplay: d,
        lastSelectedEntry: j,
        onAttachBoxInitialized: function (B, A) {
            var F = this;
            this.canvas = A;
            var C = ((B.initializedId) ? B.initializedId : "");
            this.elBox = $must("tx_attach_div" + C, "Trex.I.AttachBox");
            this.elList = $must("tx_attach_list" + C, "Trex.I.AttachBox");
            var G = $must("tx_attach_preview" + C, "Trex.I.AttachBox");
            this.elPreviewKind = w.collect(G, "p");
            var x = this.elPreviewImg = w.collect(G, "img");
            this.imageResizer = new h.ImageResizer(x, {
                maxWidth: 147,
                maxHeight: 108,
                defImgUrl: TXMSG("@attacher.preview.image"),
                onComplete: function (I, H) {
                    x.style.marginTop = Math.floor((108 - H) / 2).toPx()
                }
            });
            this.elDelete = w.collect("#tx_attach_delete" + C + " a");
            u.observe(this.elDelete, "click", this.onDeleteAll.bind(this));
            if (typeof showAttachBox == "function") {
                this.observeJob(h.Ev.__ATTACHBOX_SHOW, function () {
                    showAttachBox()
                })
            }
            if (typeof hideAttachBox == "function") {
                this.observeJob(h.Ev.__ATTACHBOX_HIDE, function () {
                    hideAttachBox()
                })
            }
            var e = this.elProgress = $must("tx_upload_progress" + C, "Trex.I.AttachBox");
            this.elProgressPercent = w.collect(e, "div");
            this.elProgressTicker = w.collect(e, "p");
            this.observeJob(h.Ev.__ENTRYBOX_ENTRY_ADDED, function (H) {
                F.registerEntryNode(H);
                F.displayBox()
            });
            this.observeJob(h.Ev.__ENTRYBOX_ENTRY_MODIFIED, function (H) {
                F.modifyEntryNode(H);
                F.refreshPreview()
            });
            this.observeJob(h.Ev.__ENTRYBOX_ENTRY_REMOVED, function (H) {
                F.removeEntryNode(H);
                F.displayBox();
                if (F.lastSelectedEntry && F.lastSelectedEntry.key == H.key) {
                    F.refreshPreview()
                }
            });
            this.observeJob(h.Ev.__ENTRYBOX_ALL_ENTRY_REMOVED, function () {
                F.datalist.each(function (H) {
                    F.removeEntryNode(H, v)
                });
                F.displayBox();
                if (F.lastSelectedEntry) {
                    F.refreshPreview()
                }
            });
            this.observeJob(h.Ev.__ENTRYBOX_ENTRY_REFRESH, function (H) {
                F.displayBox();
                F.refreshEntryNode(H)
            });
            var D = u("tx_attach_up_size" + C),
                E = u("tx_attach_max_size" + C),
                z = u("tx_attach_group_used_size" + C),
                y = u("tx_attach_group_max_size" + C);
            this.observeJob(h.Ev.__ENTRYBOX_CAPACITY_UPDATE, function () {
                var H = B.sidebar.capacity;
                if (H.show == d) {
                    return
                }
                if (D) {
                    D.innerText = H.uploaded.toByteUnit()
                }
                if (E) {
                    E.innerText = H.available.toByteUnit()
                }
                if (H.group) {
                    if (z) {
                        z.innerText = (H.group.used + H.uploaded).toByteUnit()
                    }
                    if (y) {
                        y.innerText = H.group.maximum.toByteUnit()
                    }
                }
            })
        },
        onDeleteAll: function (e) {
            if (this.datalist.length === 0) {
                return
            }
            if (!e && !confirm(TXMSG("@attacher.delete.all.confirm"))) {
                return
            }
            this.datalist.each(function (x) {
                if (x.deletedMark == d) {
                    x.execRemove()
                }
            });
            this.initPreviewImage()
        },
        checkDisplay: function () {
            return this.isDisplay
        },
        setDisplay: function (e) {
            this.isDisplay = e
        },
        displayBox: function () {
            var e = d;
            for (var x = 0; x < this.datalist.length; x++) {
                if (this.datalist[x].deletedMark == d) {
                    e = v
                }
            }
            if (this.isDisplay == e) {
                return
            }
            if (e) {
                u.show(this.elBox);
                this.fireJobs(h.Ev.__ATTACHBOX_SHOW, v)
            } else {
                u.hide(this.elBox);
                this.fireJobs(h.Ev.__ATTACHBOX_HIDE, d)
            }
            this.isDisplay = e
        },
        registerEntryNode: function (z) {
            var B = tx.li();
            this.elList.appendChild(B);
            z.elData = B;
            z.makeSelection = function (D) {
                if (D) {
                    this.showEntryThumb(z)
                } else {
                    this.hideEntryThumb(z)
                }
            }.bind(this);
            u.observe(B, "mouseover", this.onEntryMouseOver.bind(this, z));
            u.observe(B, "mouseout", this.onEntryMouseOut.bind(this, z));
            var A = tx.dl();
            B.appendChild(A);
            var x = z.elName = tx.dt({
                className: "tx-name",
                unselectable: "on"
            }, z.boxAttr.name);
            A.appendChild(x);
            u.observe(B, "click", function (D) {
                var E = u.element(D);
                if (E.className == "tx-delete" || E.className == "tx-insert") {
                    return
                }
                if (D.ctrlKey) {
                    this.clickEntryWithCtrl(z)
                } else {
                    if (D.shiftKey) {
                        this.clickEntryWithShift(z)
                    } else {
                        this.clickEntry(z)
                    }
                } if (z.actor.name == "image") {
                    if (!z.data.width || !z.data.height) {
                        new h.ImageScale(z.data)
                    }
                }
            }.bind(this), d);
            var y = tx.dd({
                className: "tx-button"
            });
            A.appendChild(y);
            var e = tx.a({
                className: "tx-delete"
            }, TXMSG("@attacher.del"));
            y.appendChild(e);
            u.observe(e, "click", function () {
                if (!confirm(TXMSG("@attacher.delete.confirm"))) {
                    return
                }
                
                  z.execRemove(z.boxAttr.name); //box
            }, d);
            var C = z.elInsert = tx.a({
                className: "tx-insert"
            }, TXMSG("@attacher.ins"));
            y.appendChild(C);
            u.observe(C, "click", function () {
                if (z.existStage && !z.actor.config.multipleuse) {
                    alert(TXMSG("@attacher.exist.alert"))
                } else {
                    z.execAppend()
                }
            }, d)
        },
        changeState: function (x) {
            var e = x.existStage;
            if (e && !x.actor.config.multipleuse) {
                u.addClassName(x.elData, "tx-existed")
            } else {
                u.removeClassName(x.elData, "tx-existed")
            }
        },
        modifyEntryNode: function (e) {
            e.elName.innerText = e.boxAttr.name
        },
        removeEntryNode: function (e, x) {
            if (x) {
                e.elData.parentNode.removeChild(e.elData)
            } else {
                if (e.deletedMark) {
                    u.hide(e.elData)
                }
            }
        },
        refreshEntryNode: function (e) {
            if (e.deletedMark) {
                u.hide(e.elData)
            } else {
                u.show(e.elData)
            }
        },
        refreshPreview: function () {
            for (var x = 0, e = this.datalist.length - 1; x < e; ++x) {
                var y = this.datalist[x];
                if (this.lastSelectedEntry && this.lastSelectedEntry.key == y.key && y.deleteMark == false) {
                    this.setPreivewImage(y);
                    return v
                }
            }
            for (var x = 0, e = this.datalist.length - 1; x < e; ++x) {
                var y = this.datalist[x];
                if (y.deletedMark == false && u.hasClassName(y.elData, "tx-clicked")) {
                    this.setPreivewImage(y);
                    return v
                }
            }
            this.initPreviewImage();
            return d
        },
        setPreivewImage: function (e) {
            this.imageResizer.execResize(e.boxAttr.image);
            this.lastSelectedEntry = e
        },
        initPreviewImage: function () {
            this.imageResizer.execResize(TXMSG("@attacher.preview.image"));
            this.lastSelectedEntry = j
        },
        showEntryThumb: function (e) {
            u.addClassName(e.elData, "tx-clicked");
            u.removeClassName(e.elData, "tx-hovered")
        },
        hideEntryThumb: function (e) {
            u.removeClassName(e.elData, "tx-clicked")
        },
        onEntryMouseOver: function (e) {
            u.addClassName(e.elData, "tx-hovered")
        },
        onEntryMouseOut: function (e) {
            u.removeClassName(e.elData, "tx-hovered")
        },
        startUpload: function () {
            this.elProgressPercent.style.width = "0".toPx();
            u.setStyle(this.elList, {
                opacity: 0.3
            });
            u.show(this.elProgress)
        },
        doUpload: function (x) {
            var e = 300;
            this.elProgressPercent.style.width = Math.floor(e * (isNaN(x) ? 0 : parseFloat(x) * 0.01)).toPx();
            this.elProgressTicker.innerText = Math.floor((isNaN(x) ? 0 : parseFloat(x))) + "%"
        },
        endUpload: function () {
            u.hide(this.elProgress);
            u.setStyle(this.elList, {
                opacity: 1
            })
        },
        clickEntry: function (e) {
            if (this.lastSelectedEntry) {
                if (this.lastSelectedEntry.key == e.key) {
                    return
                }
                this.datalist.each(function (x) {
                    x.makeSelection(d)
                })
            }
            this.elPreviewKind.className = ((e.boxAttr.className) ? e.boxAttr.className : "");
            e.makeSelection(v);
            this.setPreivewImage(e)
        },
        clickEntryWithCtrl: function (e) {
            if (u.hasClassName(e.elData, "tx-clicked")) {
                e.makeSelection(d);
                this.refreshPreview()
            } else {
                this.elPreviewKind.className = ((e.boxAttr.className) ? e.boxAttr.className : "");
                e.makeSelection(v);
                this.setPreivewImage(e)
            }
        },
        clickEntryWithShift: function (y) {
            if (u.hasClassName(y.elData, "tx-clicked")) {
                y.makeSelection(d);
                this.lastSelectedEntry = j
            } else {
                var e = this.getIndexOf(y);
                var z;
                if (this.lastSelectedEntry) {
                    z = this.getIndexOf(this.lastSelectedEntry)
                }
                var B = z,
                    A = e;
                if (e == z) {
                    B = A = e
                } else {
                    if (e < z) {
                        B = e;
                        A = z
                    }
                }
                this.elPreviewKind.className = ((y.boxAttr.className) ? y.boxAttr.className : "");
                for (var x = B; x < A + 1; x++) {
                    this.datalist[x].makeSelection(v)
                }
                this.setPreivewImage(y)
            }
        },
        getIndexOf: function (y) {
            var x, e;
            for (x = 0; x < this.datalist.length; x++) {
                if (this.datalist[x] === y) {
                    e = v;
                    break
                }
            }
            return e ? x : -1
        },
        getSelectedList: function (x) {
            var y = [];
            var e;
            if (x) {
                e = this.getAttachments(x)
            } else {
                e = this.datalist
            }
            e.each(function (z) {
                if (u.hasClassName(z.elData, "tx-clicked")) {
                    y.push(z)
                }
            });
            return y
        },
        removeSelection: function (e) {
            e.each(function (x) {
                u.removeClassName(x.elData, "tx-clicked")
            })
        }
    };
    h.install("attachbox.onFileCapacityInitialized @if sidebar.capacity.show = true", function (z, A, B, y, x) {
        var e = z.getAttachBox();
        if (x.sidebar.capacity.show === v) {
            Object.extend(e, h.I.FileCapacity);
            e.onFileCapacityInitialized(x, y)
        }
    });
    q.addSidebar("capacity", {
        show: v,
        maximum: 3145728,
        filter: {
            use: "",
            sound: {
                title: "sound file",
                maximum: 3145728,
                extensions: ",mp3,wav,ogg,wma,mp4,ape,wmv,asf,ra,ram,"
            },
            movie: {
                title: "movie file",
                maximum: 3145728,
                extensions: ",wmv,mpg,avi,"
            }
        }
    });
    h.I.FileCapacity = {
        onFileCapacityInitialized: function (z, y) {
            var A = (z.initializedId) ? z.initializedId : "";
            var B = z.sidebar.capacity;
            B.uploaded = 0;
            B.available = B.maximum;
            B.uploadedFileNum = 0;
            var C = function (H, I) {
                I = parseInt(I, 10);
                if (isNaN(I) || B[H] == r) {
                    return d
                }
                if (B.group && H == "available") {
                    B[H] = Math.min(I, B.maximum, B.group.maximum - B.group.used)
                } else {
                    B[H] = I
                }
                return B[H]
            };
            this.checkAvailableCapacity = function () {
                return (B.uploaded < B.available)
            };
            this.checkInsertableSize = function (H) {
                return (parseInt(B.uploaded, 10) + parseInt(H, 10) <= parseInt(B.available, 10))
            };
            this.getCapacity = function (H) {
                return (B[H] || 0)
            };
            this.changeAvailableCapacity = function (H) {
                if (C("available", H)) {
                    F();
                    return H
                }
                return d
            };
            var E = function (I) {
                var H = B.uploaded + I;
                if (H < 0) {
                    H = 0
                }
                B.uploaded = H
            };
            var D = function (H) {
                E(-1 * H);
                B.uploadedFileNum -= 1
            };
            var x = function (H) {
                E(H);
                B.uploadedFileNum += 1
            };
            var e = {};
            if (B.filter.use.length > 0) {
                B.filter.use.split(",").each(function (H) {
                    if (B.filter[H]) {
                        e[H] = Object.extend({}, B.filter[H])
                    }
                })
            }
            this.getFiltersNameByExt = function (I) {
                var J = [];
                for (var H in e) {
                    if (e[H].extensions.indexOf("," + I.toLowerCase() + ",") > -1) {
                        J.push(H)
                    }
                }
                return J
            };
            this.getFilterExtensions = function (H) {
                if (e[H]) {
                    return e[H].extensions
                } else {
                    return j
                }
            };
            this.getFilterMaximum = function (H) {
                if (e[H]) {
                    return e[H].maximum
                } else {
                    return j
                }
            };
            this.getUploadedSizeByFilter = function (I) {
                var J = 0;
                var H = e[I].extensions;
                this.datalist.each(function (L) {
                    if (L.data && L.data.filename) {
                        var K = L.data.filename.split(".").pop().toLowerCase();
                        if (H.indexOf("," + K + ",") > -1) {
                            J += L.data.filesize
                        }
                    }
                });
                return J
            };
            if (B.group) {
                C("available", Math.min(B.maximum, B.group.maximum - B.group.used))
            }
            this.getGroupCapacity = function (H) {
                return ((B.group) ? (B.group[H] || 0) : 0)
            };
            this.observeJob(h.Ev.__ENTRYBOX_ENTRY_ADDED, function (H) {
                if (H.actor.isCheckSize) {
                    x(H.data.filesize || 0);
                    F()
                }
            });
            this.observeJob(h.Ev.__ENTRYBOX_ENTRY_REMOVED, function (H) {
                if (H.actor.isCheckSize) {
                    D(H.data.filesize || 0);
                    F()
                }
            });
            this.observeJob(h.Ev.__ENTRYBOX_ALL_ENTRY_REMOVED, function () {
                B.uploaded = 0;
                B.uploadedFileNum = 0;
                F()
            });
            this.observeJob(h.Ev.__ENTRYBOX_ENTRY_REFRESH, function (I) {
                if (!I.actor.isCheckSize) {
                    return
                }
                var H = I.data.filesize || 0;
                if (I.deletedMark) {
                    D(H)
                } else {
                    x(H)
                }
                F()
            });
            var G = this;
            var F = function () {
                var H = {
                    uploaded: B.uploaded,
                    available: B.available,
                    maximum: B.maximum,
                    uploadedFileNum: B.uploadedFileNum,
                    group: B.group
                };
                G.fireJobs(h.Ev.__ENTRYBOX_CAPACITY_UPDATE, H)
            }
        }
    };
    k.addMsg({
        "@attacher.can.modify.alert": "\uae30\uc874\uc5d0 \ub4f1\ub85d\ub41c #{title}\uc744(\ub97c) \uc218\uc815\ud560 \uc218 \uc788\ub294 \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.",
        "@attacher.can.modify.confirm": "#{title}\uc740(\ub294) \ud558\ub098\ub9cc \ub4f1\ub85d\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc62c\ub9ac\uc2dc\uba74 \uae30\uc874\uc758 #{title}\uc774(\uac00) \uc0ad\uc81c\ub429\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
        "@attacher.insert.alert": "\uc5d0\ub514\ud130 \uc0c1\ud0dc\uc5d0\uc11c\ub9cc \uc0bd\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
        "@attacher.capacity.alert": "\uc6a9\ub7c9\uc744 \ucd08\uacfc\ud558\uc600\uc2b5\ub2c8\ub2e4.",
        "@attacher.size.alert": "\uc6a9\ub7c9\uc744 \ucd08\uacfc\ud558\uc5ec \ub354\uc774\uc0c1 \ub4f1\ub85d\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."
    });
    h.install("sidebar.getAttacher & sidebar.getUploadAdaptor", function (x, y, z) {
        var e = z.attachers = {};
        z.getAttacher = function (A) {
            if (e[A] != j) {
                return e[A]
            } else {
                if (arguments.length == 0) {
                    return e
                } else {
                    return j
                }
            }
        }
    });
    h.register("new attachers", function (B, D, e, x, y) {
        var C = B.getAttachBox();
        var A = e.attachers;
        for (var z in h.Attacher) {
            var E = h.Attacher[z]["__Identity"];
            if (E) {
                A[E] = new h.Attacher[z](B, C, y)
            }
        }
        if (A.file) {
            e.getUploadAdaptor = function () {
                return A.file.getAdaptor()
            }
        }
    });
    h.Attacher = h.Class.draft({
        $extend: h.Actor,
        canModified: d,
        canResized: d,
        initialize: function (x, z, e) {
            this.editor = x;
            this.canvas = x.getCanvas();
            this.entryBox = z;
            var y = this.config = q.getAttacher(this.constructor.__Identity, e);
            if (e.pvpage && !!y.usepvpage) {
                this.pvUrl = q.getUrl(e.pvpage, {
                    pvname: this.name
                })
            }
            this.boxonly = ((y.boxonly != j) ? y.boxonly : d);
            this.isMultiple = ((y.multiple != j) ? y.multiple : d);
            this.isCheckSize = ((y.checksize != j) ? y.checksize : d);
            this.wysiwygonly = ((y.wysiwygonly != j) ? y.wysiwygonly : v);
            this.pastescope = y.pastescope;
            if (this.oninitialized) {
                this.oninitialized(e)
            }
            this.attachHandler = this.attachHandler.bind(this)
        },
        execute: function (C) {
            if (this.wysiwygonly && !this.canvas.isWYSIWYG()) {
                alert(TXMSG("@attacher.insert.alert"));
                return
            }
            if (this.isCheckSize && !this.entryBox.checkAvailableCapacity()) {
                alert(TXMSG("@attacher.capacity.alert"));
                return
            }
            if (!this.checkInsertable()) {
                if (this.canModified) {
                    var y = new Template(TXMSG("@attacher.can.modify.alert"));
                    alert(y.evaluate({
                        title: this.title
                    }))
                } else {
                    var y = new Template(TXMSG("@attacher.can.modify.confirm"));
                    if (!confirm(y.evaluate({
                        title: this.title
                    }))) {
                        return
                    }
                }
            }
            if (this.clickHandler) {
                this.clickHandler()
            } else {
                try {
                    var x = this.config.popPageUrl;
                    if (C) {
                        x = x + ((x.indexOf("?") > -1) ? "&" : "?") + C
                    }
                    var z = (document.location.hostname != document.domain);
                    if (z) {
                        x = x + ((x.indexOf("?") > -1) ? "&" : "?") + "xssDomain=" + document.domain
                    }
                    x = (this.pvUrl ? this.pvUrl + ((this.pvUrl.indexOf("?") > -1) ? "&" : "?") + "u=" + escape(x) : x);
                    var B = i.open(x, "at" + this.name, this.config.features);
                    B.focus()
                } catch (A) {}
            }
        },
        attachHandler: function (x, e) {
            if (this.checkInsertable()) {
                if (this.isCheckSize && !this.entryBox.checkInsertableSize(x.filesize)) {
                    alert(TXMSG("@attacher.size.alert"));
                    return
                }
                this.execAttach(x, e)
            } else {
                this.execReattach(x, e)
            }
        },
        createEntry: function (x, e) {
            return this.createAttachment(x, e)
        },
        createAttachment: function (y, x) {
            var e = this.constructor.__Identity;
            if (x) {
                e = x
            }
            return new h.Attachment[e.capitalize()](this, y)
        },
        checkInsertable: function () {
            return (this.isMultiple || this.getDatalist().length === 0)
        }
    });
    k.addMsg({
        "@embeder.alert": "\uc5d0\ub514\ud130 \uc0c1\ud0dc\uc5d0\uc11c\ub9cc \uc0bd\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."
    });
    h.EmbedBox = h.Class.create({
        $extend: h.EntryBox,
        initialize: function () {}
    });
    h.install("editor.getEmbedBox & sidebar.getEmbeder & sidebar.getEmbeddedData", function (z, A, B, y, x) {
        var C = new h.EmbedBox(x, y, z);
        B.entryboxRegistry.embedbox = C;
        z.getEmbedBox = function () {
            return C
        };
        B.getEmbeddedData = C.getEntries.bind(C);
        var e = B.embeders = {};
        B.getEmbeder = function (D) {
            if (e[D] != j) {
                return e[D]
            } else {
                if (arguments.length == 0) {
                    return e
                } else {
                    return j
                }
            }
        }
    });
    h.register("new embeders", function (A, C, e, x, y) {
        var E = A.getEmbedBox();
        var B = e.embeders;
        for (var z in h.Embeder) {
            var D = h.Embeder[z]["__Identity"];
            if (D) {
                if (!C.tools[D]) {}
                B[D] = new h.Embeder[z](A, E, y)
            }
        }
    });
    h.Embeder = h.Class.draft({
        $extend: h.Actor,
        canResized: d,
        initialize: function (x, z, e) {
            this.editor = x;
            this.canvas = x.getCanvas();
            var y = this.config = q.getEmbeder(this.constructor.__Identity, e);
            if (e.pvpage && !!y.usepvpage) {
                this.pvUrl = q.getUrl(e.pvpage, {
                    pvname: this.name
                })
            }
            this.wysiwygonly = ((y.wysiwygonly != j) ? y.wysiwygonly : v);
            this.pastescope = y.pastescope;
            this.embedHandler = this.embedHandler.bind(this);
            if (this.oninitialized) {
                this.oninitialized.bind(this)(e)
            }
        },
        execute: function () {
            if (this.wysiwygonly && !this.canvas.isWYSIWYG()) {
                alert(TXMSG("@embeder.alert"));
                return
            }
            if (this.clickHandler) {
                this.clickHandler()
            } else {
                try {
                    var x = this.config.popPageUrl;
                    var y = (document.location.hostname != document.domain);
                    if (y) {
                        x = x + ((x.indexOf("?") > -1) ? "&" : "?") + "xssDomain=" + document.domain
                    }
                    x = (this.pvUrl ? this.pvUrl + ((this.pvUrl.indexOf("?") > -1) ? "&" : "?") + "u=" + escape(x) : x);
                    var A = i.open(x, "at" + this.name, this.config.features);
                    A.focus()
                } catch (z) {}
            }
        },
        embedHandler: function (e) {
            this.execAttach(e)
        },
        createEntry: function (y, x) {
            var e = this.constructor.__Identity;
            if (x) {
                e = x
            }
            return new h.EmbedEntry[e.capitalize()](this, y)
        },
        execAttach: function (z) {
            var y = this.pastescope;
            var x = this.getCreatedHtml(z);
            var e = this.config.parastyle || this.config.defaultstyle || {};
            this.canvas.execute(function (A) {
                A.moveCaretWith(y);
                A.pasteContent(x, v, e)
            })
        },
        execReattach: function () {},
        execReload: function () {},
        getReloadContent: function (z, y) {
            if (!z.dispElId) {
                return y
            }
            var e = this.getCreatedHtml(z);
            var x = new RegExp('<(?:img|IMG)[^>]*id="?' + z.dispElId + '"?[^>]*/?>', "gm");
            if (y.search(x) > -1) {
                return y.replace(x, e)
            }
            return y
        }
    });
    h.EmbedEntry = h.Class.create({
        $extend: h.Entry,
        attrs: {
            align: "left"
        },
        initialize: function (e, x) {
            this.actor = e;
            this.canvas = e.canvas;
            this.entryBox = e.entryBox;
            this.setProperties(x)
        },
        register: function () {
            if (this.canvas.isWYSIWYG()) {
                var e = this.actor.config.defaultstyle;
                if (e) {
                    this.canvas.pasteContent(this.dispHtml, v, {
                        style: e
                    })
                } else {
                    this.canvas.pasteContent(this.dispHtml, v)
                }
            } else {
                this.canvas.getProcessor().insertTag("", this.dispText)
            }
        },
        setProperties: function (x) {
            this.type = this.constructor.__Identity;
            var e = this.data = x;
            this.key = e.key;
            this.dispHtml = this.getDispHtml(e);
            this.saveHtml = this.dispText = this.getDispText(e);
            this.regHtml = this.getRegHtml(e);
            this.regLoad = this.regText = this.getRegText(e)
        }
    });
    h.I.ButtonFontTool = h.Mixin.create({
        oninitialized: function (x) {
            var e = this;
            e.button = new h.Button(e.buttonCfg);
            e.weave(e.button, j, e.handler);
            if (x.sync) {
                e.startSyncButtonWithStyle()
            }
            e.bindKeyboard(x.hotKey, e.handler.bind(e))
        },
        rangeExecutor: function (e) {
            e.execCommand(this.getQueryCommandName())
        },
        onAfterHandler: function (x) {
            var e = this.canvas;
            if (e.triggerQueryStatus) {
                e.triggerQueryStatus()
            }
        },
        startSyncButtonWithStyle: function () {
            var e = this;
            e.canvas.observeJob(h.Ev.__CANVAS_PANEL_QUERY_STATUS, function (x) {
                e.syncButton(e.queryCurrentStyle(x))
            })
        },
        queryCurrentStyle: function (x) {
            var e = this;
            var y = e.canvas.query(function (z) {
                var B = e.getQueryCommandName();
                if (B && !u.opera && !u.gecko) {
                    return z.queryCommandState(B)
                } else {
                    var A = e.findQueryingNode(x);
                    return !!A && e.isStyleApplied(A)
                }
            });
            return y
        },
        computeNewStyle: function () {
            return j
        },
        cachedProperty: d,
        syncButton: function (e) {
            if (this.cachedProperty != e) {
                this.button.setState(e);
                this.cachedProperty = e
            }
        }
    });
    h.I.MenuFontTool = h.Mixin.create({
        oninitialized: function (y) {
            var x = this;
            x.beforeOnInitialized(y);
            var e = x.menuInitHandler && x.menuInitHandler.bind(x);
            x.weave(x.createButton(), x.createMenu(), x.handler, e);
            if (y.sync) {
                x.startSyncButtonWithStyle()
            }
        },
        rangeExecutor: function (x, y, e) {
            this.wrapTextAsStyledSpan(x, y, e)
        },
        startSyncButtonWithStyle: function () {
            var e = this;
            e.canvas.observeJob(h.Ev.__CANVAS_PANEL_QUERY_STATUS, function (x) {
                e.syncButton(e.queryCurrentStyle(x))
            })
        },
        queryCurrentStyle: function (x) {
            var e = this;
            var z = e.queryCommandValue();
            if (e.reliableQueriedValue(z) && z && e.getTextByValue(z)) {
                return e.getTextByValue(z)
            }
            var y = e.canvas.query(function (A) {
                var B;
                if (u.msie && x.isCollapsed()) {
                    B = A.getNode()
                } else {
                    B = e.findQueryingNode(x)
                }
                return e.queryElementCurrentStyle(B)
            });
            if (y && e.getTextByValue(y)) {
                return e.getTextByValue(y)
            }
            return z || y || e.getTextByValue(e.getDefaultProperty())
        },
        queryCommandValue: function () {
            var e = this;
            return e.canvas.query(function (x) {
                return x.queryCommandValue(e.getQueryCommandName())
            })
        },
        reliableQueriedValue: function (e) {
            return v
        },
        queryElementCurrentStyle: function (z) {
            var x = this.getCssPropertyName();
            var C = z;
            var B = 10;
            for (var y = 0; y < B && w.kindOf(C, "%inline"); y++) {
                var e = C.style[x];
                if (e) {
                    return e
                }
                if (w.kindOf(C, "font") && w.getAttribute(this.getFontTagAttribute())) {
                    return w.getAttribute(this.getFontTagAttribute())
                }
                C = C.parentNode
            }
            var A = this.canvas.getProcessor();
            if (z) {
                return A.queryStyle(z, x)
            } else {
                return j
            }
        },
        computeNewStyle: function (x) {
            var e = {};
            e[this.getCssPropertyName()] = x;
            return e
        },
        cachedProperty: d,
        syncButton: function (x) {
            var e = this;
            e.button.setText(x);
            if (e.cachedProperty != x) {
                e.button.setText(x);
                e.cachedProperty = x
            }
        }
    });
    h.I.FontTool = h.Mixin.create({
        initialize: function (x, y, e) {
            this.$super.initialize(x, y, e)
        },
        handler: function (e) {
            this.onBeforeHandler(e);
            this.doHandle(e);
            this.onAfterHandler(e)
        },
        onBeforeHandler: function () {},
        doHandle: function (z) {
            var x = this,
                e, y = x.computeNewStyle(z);
            x.canvas.execute(function (B) {
                var A = (B.table) ? B.table.getTdArr() : [];
                if (A.length > 0) {
                    e = g.dom.Range.createFromNodeContents(A[0]);
                    B.executeUsingCaret(function () {
                        x.tableCellsExecutor(B, y, A)
                    })
                } else {
                    e = B.createGoogRange();
                    if (e) {
                        x.rangeExecutor(B, y, e)
                    }
                }
            })
        },
        onAfterHandler: function () {},
        tableCellsExecutor: function (y, z, x) {
            var e = this;
            x.each(function (A) {
                var B = g.dom.Range.createFromNodeContents(A);
                B.select();
                e.rangeExecutor(y, z, B)
            })
        },
        findQueryingNode: function (x) {
            if (x) {
                var z;
                try {
                    z = this.findFirst(x.__iterator__(), function (A) {
                        return A.nodeType == 3 && A.nodeValue.trim()
                    })
                } catch (e) {}
                if (z) {
                    return z.parentNode
                } else {
                    var y = x.getStartNode();
                    if (y && y.nodeType == 3) {
                        return y.parentNode
                    }
                    return y
                }
            }
        },
        findFirst: function (x, z) {
            try {
                return g.iter.filter(x, z).next()
            } catch (y) {
                return null
            }
        }
    });
    h.I.WrappingSpanFontTool = h.Mixin.create({
        wrapTextAsStyledSpan: function (A, C, E) {
            var D;
            if (A.isCollapsed()) {
                var y = E.getStartNode();
                if (y.nodeType == 3) {
                    y = y.parentNode
                }
                var F = this.findOrCreateDummySpan(y, A, E);
                var x = F.firstChild;
                A.createGoogRangeFromNodes(x, x.length, x, x.length).select();
                D = [F]
            } else {
                A.executeUsingCaret(function (H, K) {
                    var I = z(K);
                    var J = e(I);
                    D = G(J)
                })
            }
            A.apply(D, {
                style: C
            });

            function z(J) {
                var I = J.getCaret(v),
                    H = J.getCaret(d);
                return new g.dom.TextRangeIterator(I, 0, H, 0)
            }

            function e(I) {
                var H = [];
                g.iter.forEach(I, function (J) {
                    if (J.nodeType == 3 && !w.kindOf(J.parentNode, "table,thead,tbody,tr,ul,ol")) {
                        H.push(J)
                    }
                });
                return H
            }

            function G(I) {
                var H = [];
                I.each(function (L) {
                    var J = L.parentNode;
                    if (J.nodeName == "SPAN" && B(J)) {
                        H.push(J)
                    } else {
                        var K = A.create("span");
                        w.wrap(K, L);
                        H.push(K)
                    }
                });
                return H
            }

            function B(K) {
                var L = K.childNodes;
                var I = L.length;
                if (I > 3) {
                    return d
                }
                for (var J = 0, H = I; J < H; J++) {
                    if (w.isGoogRangeCaret(L[J])) {
                        I = I - 1
                    }
                }
                return I == 1
            }
        },
        findOrCreateDummySpan: function (y, x, e) {
            var z = (y.tagName == "SPAN" && y.childNodes.length == 1 && y.firstChild.nodeType == 3 && y.firstChild.nodeValue == h.__WORD_JOINER);
            if (z) {
                return y
            } else {
                return this.createDummySpan(y, x, e)
            }
        },
        createDummySpan: function (e, z, x) {
            var y = null;
            if (e.tagName == "SPAN") {
                y = w.clone(e)
            } else {
                y = z.create("span")
            }
            y.appendChild(z.newDummy());
            y = x.insertNode(y);
            w.removeEmptyTextNode(y.previousSibling);
            w.removeEmptyTextNode(y.nextSibling);
            return y
        }
    });
    k.addMsg({
        "@switcher.wysiwyg": "\uc5d0\ub514\ud130",
        "@switcher.source": "HTML",
        "@switcher.text": "\ud14d\uc2a4\ud2b8"
    });
    q.addTool("switcher", {
        wysiwygonly: d,
        status: v,
        options: [{
            label: TXMSG("@switcher.wysiwyg"),
            title: TXMSG("@switcher.wysiwyg"),
            data: "html"
        }, {
            label: TXMSG("@switcher.source"),
            title: TXMSG("@switcher.source"),
            data: "source"
        }, {
            label: TXMSG("@switcher.text"),
            title: TXMSG("@switcher.text"),
            data: "text"
        }]
    });
    h.Tool.Switcher = h.Class.create({
        $const: {
            __Identity: "switcher"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var D = this.canvas;
            var y = {};
            x.options.each(function (F) {
                y[F.data] = {
                    title: F.title
                }
            });
            var e = "";
            var B = x.options[0];
            var C = function (F) {
                if (F === "text") {
                    if (D.mode !== "text") {
                        return v
                    }
                }
                return d
            };
            var z = function () {
                var G, H, F;
                G = D.getContent();
                H = G.toLowerCase().trim();
                F = w.EMPTY_PARAGRAPH_HTML.toLowerCase().trim();
                if (H && H !== F && H !== "&nbsp;") {
                    return v
                }
                return d
            };
            var A = function (F) {
                if (x.changeModeConfirmMsg) {
                    if (C(F)) {
                        if (z()) {
                            if (d === confirm(x.changeModeConfirmMsg)) {
                                return $stop
                            }
                        }
                    }
                }
                D.changeMode(F)
            };
            var E = function (G, F) {
                if (G == F) {
                    return
                }
                if (e == F) {
                    return
                }
                if (!y[F]) {
                    return
                }
                this.button.setValue(F);
                this.button.setText(y[F].title);
                e = F
            }.bind(this);
            D.observeJob(h.Ev.__CANVAS_MODE_CHANGE, E);
            D.observeJob(h.Ev.__CANVAS_MODE_INITIALIZE, E);
            this.weave.bind(this)(new h.Button.Select(q.merge(this.buttonCfg, {
                selectedValue: B.data,
                selectedText: B.label
            })), new h.Menu.Select(this.menuCfg), A)
        }
    });
    q.addTool("switchertoggle", {
        wysiwygonly: d,
        sync: v,
        status: v,
        options: [{
            label: "\uc5d0\ub514\ud130",
            title: "\uc5d0\ub514\ud130",
            data: "html"
        }, {
            label: "HTML",
            title: "HTML",
            data: "source"
        }]
    });
    h.Tool.SwitcherToggle = h.Class.create({
        $const: {
            __Identity: "switchertoggle"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var y = this.canvas;
            var x = function () {
                switch (y.mode) {
                case "html":
                    y.changeMode("source");
                    break;
                case "source":
                    y.changeMode("html");
                    break
                }
                return d
            };
            this.weave.bind(this)(new h.Button.Toggle(q.merge(this.buttonCfg, {
                borderClass: "tx-switchtoggle"
            })), j, x);
            var e = function (A, z) {
                this.button.setValue(z == "source")
            }.bind(this);
            y.observeJob(h.Ev.__CANVAS_MODE_CHANGE, e);
            y.observeJob(h.Ev.__CANVAS_MODE_INITIALIZE, e)
        }
    });
    k.addMsg({
        "@fontfamily.gulim": "\uad74\ub9bc",
        "@fontfamily.batang": "\ubc14\ud0d5",
        "@fontfamily.dotum": "\ub3cb\uc6c0",
        "@fontfamily.gungsuh": "\uad81\uc11c"
    });
    q.addTool("fontfamily", {
        sync: v,
        status: v,
        useFavorite: v,
        options: [{
            label: TXMSG("@fontfamily.gulim") + ' (<span class="tx-txt">\uac00\ub098\ub2e4\ub77c</span>)',
            title: TXMSG("@fontfamily.gulim"),
            data: "Gulim,\uad74\ub9bc,AppleGothic,sans-serif",
            klass: "tx-gulim"
        }, {
            label: TXMSG("@fontfamily.batang") + ' (<span class="tx-txt">\uac00\ub098\ub2e4\ub77c</span>)',
            title: TXMSG("@fontfamily.batang"),
            data: "Batang,\ubc14\ud0d5",
            klass: "tx-batang"
        }, {
            label: TXMSG("@fontfamily.dotum") + ' (<span class="tx-txt">\uac00\ub098\ub2e4\ub77c</span>)',
            title: TXMSG("@fontfamily.dotum"),
            data: "Dotum,\ub3cb\uc6c0",
            klass: "tx-dotum"
        }, {
            label: TXMSG("@fontfamily.gungsuh") + ' (<span class="tx-txt">\uac00\ub098\ub2e4\ub77c</span>)',
            title: TXMSG("@fontfamily.gungsuh"),
            data: "Gungsuh,\uad81\uc11c",
            klass: "tx-gungseo"
        }, {
            label: 'Arial (<span class="tx-txt">abcde</span>)',
            title: "Arial",
            data: "Arial",
            klass: "tx-arial"
        }, {
            label: 'Verdana (<span class="tx-txt">abcde</span>)',
            title: "Verdana",
            data: "Verdana",
            klass: "tx-verdana"
        }]
    });
    h.Tool.FontFamily = h.Class.create({
        $const: {
            __Identity: "fontfamily"
        },
        $extend: h.Tool,
        $mixins: [h.I.CookieBaker, h.I.FontTool, h.I.MenuFontTool, h.I.WrappingSpanFontTool],
        beforeOnInitialized: function (y) {
            function x(A) {
                e.usedWebFonts = ((u.msie && A.webfont && A.webfont.use) ? A.webfont.options : []);
                e.usedFonts = A.options.concat(e.usedWebFonts)
            }

            function z(A) {
                if (A.useFavorite && e.usedWebFonts.length > 0) {
                    e.useFavorite = v;
                    e.initCookie("txFontFamilyFavorite")
                } else {
                    e.useFavorite = d
                }
            }
            var e = this;
            e.focusLoosed = d;
            x(y);
            z(y);
            e.createFontFamilyMap(e.usedFonts)
        },
        createFontFamilyMap: function (y) {
            var x = this,
                e = {};
            this.fontFamilyMap = e;
            y.each(function (C) {
                var z, D, B, A;
                z = C.data.split(",");
                D = C.title;
                for (B = 0; B < z.length; B += 1) {
                    A = x.preprocessFontFamily(z[B]);
                    e[A] = D
                }
                if (!e[D.toLowerCase()]) {
                    e[D.toLowerCase()] = D
                }
            })
        },
        createButton: function () {
            var e = new h.Button.Select(this.buttonCfg);
            this.button = e;
            e.setValue(this.getDefaultProperty());
            e.setText(this.getTextByValue(this.getDefaultProperty()));
            return e
        },
        createMenu: function () {
            var e = this;
            var x = new h.Menu.Select(q.merge(e.menuCfg, {
                options: e.usedFonts
            }));
            this.menu = x;
            x.generateListItem = function (C) {
                var z = [],
                    B, D, A;
                for (B = 0; B < C.length; B += 1) {
                    D = C[B];
                    A = D.label;
                    D.label = D.label.replace(/<span class="tx\-txt">/, '<span class="tx-txt" style="font-family:' + D.data + ';">');
                    z.push(h.MarkupTemplate.get("menu.select.item").evaluate(D));
                    D.label = A
                }
                return z.join("")
            };
            if (e.usedWebFonts.length > 0) {
                u.addClassName(x.elMenu, "tx-fontfamily-webfont-menu");
                var y = tx.input({
                    type: "text",
                    className: "tx-dummyfocus"
                });
                w.append(x.elMenu, y);
                u.observe(x.elMenu, "mousedown", function (z) {
                    if (z.offsetX < e.menu.elMenu.clientWidth) {
                        return
                    }
                    y.style.top = z.offsetY.toPx();
                    if (!e.focusLoosed) {
                        y.focus();
                        y.blur();
                        e.menu.elMenu.focus();
                        e.focusLoosed = v
                    }
                })
            }
            return x
        },
        menuInitHandler: function () {
            var x = this;
            var z = x.menu;
            x.focusLoosed = d;
            if (!x.useFavorite) {
                return []
            }
            z.elMenu.scrollTop = 0;
            var y = w.collect(z.elMenu, "ul.tx-menu-favlist");
            if (y) {
                w.remove(y)
            }
            var e = x.extractOptions(x.usedFonts, x.readCookie());
            y = z.generateList(e);
            w.insertFirst(z.elMenu, y);
            u.addClassName(y, "tx-menu-favlist");
            return e
        },
        onBeforeHandler: function (e) {
            this.canvas.includeWebfontCss("font-family: " + e)
        },
        onAfterHandler: function (x) {
            var e = this;
            if (e.useFavorite) {
                e.writeCookie(e.mergeValues(e.readCookie(), x))
            }
        },
        getDefaultProperty: function () {
            return this.canvas.getStyleConfig().fontFamily
        },
        getRelatedCssPropertyNames: function () {
            return ["font", this.getCssPropertyName()]
        },
        getCssPropertyName: function () {
            return "fontFamily"
        },
        getQueryCommandName: function () {
            return "fontname"
        },
        getFontTagAttribute: function () {
            return "face"
        },
        preprocessFontFamily: function (e) {
            return e.toLowerCase().replace(/'|"/g, "").replace(/_?9$/, "")
        },
        getTextByValue: function (e) {
            if (e.include(",")) {
                e = e.split(",")[0]
            }
            e = this.preprocessFontFamily(e);
            return this.fontFamilyMap[e]
        }
    });
    q.addTool("fontsize", {
        sync: v,
        status: v,
        options: [{
            label: "\uac00\ub098\ub2e4\ub77c\ub9c8\ubc14\uc0ac (8pt)",
            title: "8pt",
            data: "8pt",
            klass: "tx-8pt"
        }, {
            label: "\uac00\ub098\ub2e4\ub77c\ub9c8\ubc14\uc0ac (9pt)",
            title: "9pt",
            data: "9pt",
            klass: "tx-9pt"
        }, {
            label: "\uac00\ub098\ub2e4\ub77c\ub9c8\ubc14\uc0ac (10pt)",
            title: "10pt",
            data: "10pt",
            klass: "tx-10pt"
        }, {
            label: "\uac00\ub098\ub2e4\ub77c\ub9c8\ubc14\uc0ac (11pt)",
            title: "11pt",
            data: "11pt",
            klass: "tx-11pt"
        }, {
            label: "\uac00\ub098\ub2e4\ub77c\ub9c8\ubc14\uc0ac (12pt)",
            title: "12pt",
            data: "12pt",
            klass: "tx-12pt"
        }, {
            label: "\uac00\ub098\ub2e4\ub77c\ub9c8\ubc14\uc0ac (14pt)",
            title: "14pt",
            data: "14pt",
            klass: "tx-14pt"
        }, {
            label: "\uac00\ub098\ub2e4\ub77c\ub9c8\ubc14\uc0ac (18pt)",
            title: "18pt",
            data: "18pt",
            klass: "tx-18pt"
        }, {
            label: "\uac00\ub098\ub2e4\ub77c\ub9c8 (24pt)",
            title: "24pt",
            data: "24pt",
            klass: "tx-24pt"
        }, {
            label: "\uac00\ub098\ub2e4 (36pt)",
            title: "36pt",
            data: "36pt",
            klass: "tx-36pt"
        }]
    });
    h.Tool.FontSize = h.Class.create({
        $const: {
            __Identity: "fontsize"
        },
        $extend: h.Tool,
        $mixins: [h.I.FontTool, h.I.MenuFontTool, h.I.WrappingSpanFontTool],
        beforeOnInitialized: function (e) {
            this.createFontSizeMap(e)
        },
        createButton: function () {
            var x = this.getDefaultProperty();
            var e = this.button = new h.Button.Select(this.buttonCfg);
            e.setValue(x);
            e.setText(this.getTextByValue(x));
            return e
        },
        createMenu: function () {
            return new h.Menu.Select(this.menuCfg)
        },
        createFontSizeMap: function (e) {
            var x = this.fontSizeMap = {};
            e.options.each(function (y) {
                x[y.data] = y.title
            });
            [{
                title: "8pt",
                data: "1"
            }, {
                title: "10pt",
                data: "2"
            }, {
                title: "12pt",
                data: "3"
            }, {
                title: "14pt",
                data: "4"
            }, {
                title: "18pt",
                data: "5"
            }, {
                title: "24pt",
                data: "6"
            }, {
                title: "36pt",
                data: "7"
            }, {
                title: "7.5pt",
                data: "10px"
            }, {
                title: "8pt",
                data: "11px"
            }, {
                title: "9pt",
                data: "12px"
            }, {
                title: "10pt",
                data: "13px"
            }, {
                title: "11pt",
                data: "15px"
            }, {
                title: "12pt",
                data: "16px"
            }, {
                title: "14pt",
                data: "19px"
            }, {
                title: "18pt",
                data: "24px"
            }, {
                title: "24pt",
                data: "32px"
            }, {
                title: "36pt",
                data: "48px"
            }, {
                title: "8pt",
                data: "x-small"
            }, {
                title: "10pt",
                data: "small"
            }, {
                title: "12pt",
                data: "medium"
            }, {
                title: "14pt",
                data: "large"
            }, {
                title: "18pt",
                data: "x-large"
            }, {
                title: "24pt",
                data: "xx-large"
            }, {
                title: "36pt",
                data: "-webkit-xxx-large"
            }].each(function (y) {
                x[y.data] = y.title
            })
        },
        reliableQueriedValue: function (e) {
            return u.webkit === false
        },
        getTextByValue: function (y) {
            var x = this.fontSizeMap[y];
            if (!x) {
                var e = Math.round(parseFloat(y)).toPx();
                x = this.fontSizeMap[e]
            }
            return x
        },
        getRelatedCssPropertyNames: function () {
            return ["font", this.getCssPropertyName()]
        },
        getCssPropertyName: function () {
            return "fontSize"
        },
        getQueryCommandName: function () {
            return "fontsize"
        },
        getDefaultProperty: function () {
            return this.canvas.getStyleConfig().fontSize
        },
        getFontTagAttribute: function () {
            return "size"
        }
    });
    q.addTool("bold", {
        wysiwygonly: v,
        sync: v,
        status: v,
        hotKey: {
            ctrlKey: v,
            keyCode: 66
        }
    });
    h.Tool.Bold = h.Class.create({
        $const: {
            __Identity: "bold"
        },
        $extend: h.Tool,
        $mixins: [h.I.FontTool, h.I.ButtonFontTool],
        getRelatedCssPropertyNames: function () {
            return ["font", this.getCssPropertyName()]
        },
        getCssPropertyName: function () {
            return "fontWeight"
        },
        getQueryCommandName: function () {
            return "bold"
        },
        isStyleApplied: function (e) {
            return ["bold", "700"].contains(u.getStyle(e, "fontWeight"))
        }
    });
    q.addTool("underline", {
        wysiwygonly: v,
        sync: v,
        status: v,
        hotKey: {
            ctrlKey: v,
            keyCode: 85
        }
    });
    h.Tool.Underline = h.Class.create({
        $const: {
            __Identity: "underline"
        },
        $extend: h.Tool,
        $mixins: [h.I.FontTool, h.I.ButtonFontTool],
        getRelatedCssPropertyNames: function () {
            return [this.getCssPropertyName()]
        },
        getCssPropertyName: function () {
            return "textDecoration"
        },
        getQueryCommandName: function () {
            return "underline"
        },
        isStyleApplied: function (e) {
            return u.getStyle(e, "textDecoration").include("underline")
        }
    });
    q.addTool("italic", {
        wysiwygonly: v,
        sync: v,
        status: v,
        hotKey: {
            ctrlKey: v,
            keyCode: 73
        }
    });
    h.Tool.Italic = h.Class.create({
        $const: {
            __Identity: "italic"
        },
        $extend: h.Tool,
        $mixins: [h.I.FontTool, h.I.ButtonFontTool],
        getRelatedCssPropertyNames: function () {
            return ["font", this.getCssPropertyName()]
        },
        getCssPropertyName: function () {
            return "fontStyle"
        },
        getQueryCommandName: function () {
            return "italic"
        },
        isStyleApplied: function (e) {
            return u.getStyle(e, "fontStyle") == "italic"
        }
    });
    q.addTool("strike", {
        wysiwygonly: v,
        sync: v,
        status: v,
        hotKey: {
            ctrlKey: v,
            keyCode: 68
        }
    });
    h.Tool.Strike = h.Class.create({
        $const: {
            __Identity: "strike"
        },
        $extend: h.Tool,
        $mixins: [h.I.FontTool, h.I.ButtonFontTool],
        getRelatedCssPropertyNames: function () {
            return [this.getCssPropertyName()]
        },
        getCssPropertyName: function () {
            return "textDecoration"
        },
        getQueryCommandName: function () {
            return "strikethrough"
        },
        isStyleApplied: function (e) {
            return u.getStyle(e, "textDecoration").include("line-through")
        }
    });
    q.addTool("forecolor", {
        defaultcolor: "#7c84ef",
        wysiwygonly: v,
        sync: d,
        status: v,
        useFavorite: v,
        thumbs: h.__CONFIG_COMMON.thumbs,
        needRevert: v
    });
    h.Tool.ForeColor = h.Class.create({
        $const: {
            __Identity: "forecolor"
        },
        $extend: h.Tool,
        $mixins: [h.I.CookieBaker, h.I.FontTool, h.I.MenuFontTool, h.I.WrappingSpanFontTool],
        beforeOnInitialized: function (e) {
            this.useFavorite = !!e.useFavorite;
            if (this.useFavorite) {
                this.initCookie("txForeColorFavorite")
            }
        },
        createButton: function () {
            var x = this.readCookie() || this.getDefaultProperty();
            var e = this.button = new h.Button.Splits(this.buttonCfg);
            e.setValue(x);
            this.syncButton(x);
            return e
        },
        createMenu: function () {
            return new h.Menu.ColorPallete(this.menuCfg)
        },
        onAfterHandler: function (e) {
            this.syncButton(e);
            if (this.useFavorite) {
                this.writeCookie(e)
            }
        },
        getDefaultProperty: function () {
            return this.canvas.getStyleConfig().color
        },
        getRelatedCssPropertyNames: function () {
            return [this.getCssPropertyName()]
        },
        getCssPropertyName: function () {
            return "color"
        },
        getQueryCommandName: function () {
            return "forecolor"
        },
        computeNewStyle: function (x) {
            var e = {};
            e[this.getCssPropertyName()] = x || this.getDefaultProperty();
            return e
        },
        syncButton: function (x) {
            try {
                if (x) {
                    u.setStyle(this.button.elButton, {
                        backgroundColor: x
                    })
                }
            } catch (y) {}
        }
    });
    q.addTool("backcolor", {
        defaultcolor: "#9aa5ea",
        wysiwygonly: v,
        sync: d,
        status: v,
        useFavorite: v,
        texts: {
            options: [{
                color: "#ff0000",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#e545d0",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#000000",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#ff5e00",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#7c43b1",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#848484",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#ffbb00",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#4673ff",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#66e8ff",
                text: "#000000",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#ffe400",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#1fafda",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#8cfccb",
                text: "#000000",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#a8c40d",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#009999",
                text: "#ffffff",
                label: "\uac00\ub098\ub2e4"
            }, {
                color: "#ffffff",
                text: "#000000",
                label: "\uac00\ub098\ub2e4"
            }]
        },
        thumbs: h.__CONFIG_COMMON.thumbs,
        needRevert: v,
        needTrans: d
    });
    h.Tool.BackColor = h.Class.create({
        $const: {
            __Identity: "backcolor"
        },
        $extend: h.Tool,
        $mixins: [h.I.CookieBaker, h.I.FontTool, h.I.MenuFontTool, h.I.WrappingSpanFontTool],
        beforeOnInitialized: function (e) {
            this.useFavorite = !!e.useFavorite;
            if (this.useFavorite) {
                this.initCookie("txBackColorFavorite")
            }
        },
        createButton: function () {
            var x = this.readCookie() || this.getDefaultProperty();
            var e = this.button = new h.Button.Splits(this.buttonCfg);
            e.setValue(x);
            this.syncButton(x);
            return e
        },
        createMenu: function () {
            return new h.Menu.ColorPallete(this.menuCfg)
        },
        onAfterHandler: function (e) {
            this.syncButton(e);
            if (this.useFavorite) {
                this.writeCookie(e)
            }
        },
        getDefaultProperty: function () {
            return this.config.defaultcolor
        },
        syncButton: function (y) {
            try {
                var x = y ? y.split("|")[0] : j;
                if (x) {
                    u.setStyle(this.button.elButton, {
                        backgroundColor: x
                    })
                }
            } catch (z) {}
        },
        getRelatedCssPropertyNames: function () {
            return ["color", this.getCssPropertyName()]
        },
        getCssPropertyName: function () {
            return "backgroundColor"
        },
        getQueryCommandName: function () {
            return (u.gecko || u.opera) ? "hilitecolor" : "backcolor"
        },
        computeNewStyle: function (x) {
            if (this.shouldRevert(x) || this.includeTextColor(x)) {
                var e = x ? x.split("|") : [];
                return {
                    backgroundColor: e[0],
                    color: e[1]
                }
            }
            return {
                backgroundColor: x
            }
        },
        shouldRevert: function (e) {
            return e == j
        },
        includeTextColor: function (e) {
            return e && (e.indexOf("|") > -1)
        }
    });
    q.addTool("indent", {
        sync: d,
        status: d,
        hotKey: {
            keyCode: 9
        }
    });
    h.Tool.Indent = h.Class.create({
        $const: {
            __Identity: "indent"
        },
        $extend: h.Tool,
        oninitialized: function (e) {
            this.weave(new h.Button(this.buttonCfg), j, this.handler);
            this.bindKeyboard(e.hotKey, this.tabKeyHandler.bind(this));
            this.createHandlers()
        },
        handler: function () {
            var e = this,
                x = e.canvas;
            x.execute(function (y) {
                e.onIndentClicked.handle(y)
            })
        },
        tabKeyHandler: function () {
            var e = this;
            this.canvas.execute(function (x) {
                e.onTabPressed.handle(x)
            })
        },
        createHandlers: function () {
            var B = h.Tool.Indent;
            var A = B.Judge;
            var x = B.Operation;
            var y = B.Handler;
            var C = h.ChainHandler;
            var e = C.connect([new C(A.ListItem, x.IndentListItem), new C(A.BlockNode, x.IndentBlockNode)]);
            var z = C.connect([new C(A.And(A.HeadOfParagraph, A.ListItem), x.IndentListItem), new C(A.ChildOfLastTableCell, x.GoToBelowTable), new C(A.ChildOfTableCell, x.GoToNextCell), new C(A.And(A.HeadOfParagraph, A.BlockNode), x.IndentBlockNode), new C(A.AlwaysTrue, x.AddFourSpaces)]);
            this.onTabPressed = new y(z, e, e);
            this.onIndentClicked = new y(e, e, e)
        }
    });
    h.Tool.Indent.Handler = h.Class.create({
        initialize: function (e, y, B) {
            var z = h.Tool.Indent;
            var A = z.RangeIndenter;
            var x = z.TableCellIndenter;
            this.collapsedRange = new A(e), this.selectedRange = new A(y), this.tableCellSelected = new x(B)
        },
        handle: function (e) {
            var x = (e.table) ? e.table.getTdArr() : [];
            if (x.length > 0) {
                this.tableCellSelected.indent(e)
            } else {
                if (e.isCollapsed()) {
                    this.collapsedRange.indent(e)
                } else {
                    this.selectedRange.indent(e)
                }
            }
        }
    });
    h.ChainHandler = h.Class.create({
        $const: {
            connect: function (e) {
                var y = e[0];
                for (var x = 1; x < e.length; x++) {
                    e[x - 1].setNext(e[x])
                }
                return y
            }
        },
        initialize: function (e, x) {
            this.judge = e;
            this.executor = x;
            return this
        },
        setNext: function (e) {
            this.successor = e;
            return this.successor
        },
        handle: function () {
            var e = arguments;
            if (this.judge.apply(this, e)) {
                this.executor.apply(this, e)
            } else {
                if (this.successor) {
                    this.successor.handle.apply(this.successor, e)
                }
            }
        }
    });
    (function () {
        h.Tool.Indent.Helper = {
            findBlocksToIndentFromRange: function (A, D, F) {
                var B = F.getCaret(v);
                var z = F.getCaret(d);
                if (D.isCollapsed()) {
                    A.getStartNode();
                    A.getStartOffset();
                    var E = this.findBlockToIndent(B, D);
                    var y = (E.tagName == "P" && E.firstChild == B && E.lastChild == z);
                    if (y) {
                        D.stuffNode(E)
                    }
                    F.restoreInternal();
                    return [E]
                } else {
                    var C = new g.dom.TextRangeIterator(B, 0, z, 0);
                    return this.findBlocksToIndentFromIterator(D, C)
                }
            },
            findBlocksToIndentFromIterator: function (D, C) {
                var z = this;
                var B = z.collectAllNodes(C);
                var A = z.selectLeafNodes(B);
                var y = z.filterUnableToIndent(A);
                var E = y.map(function (F) {
                    return z.findBlockToIndent(F, D)
                });
                E = E.compact().uniq();
                return E
            },
            collectAllNodes: function (z) {
                var y = [];
                g.iter.forEach(z, function (A) {
                    if (!y.contains(A)) {
                        y.push(A)
                    }
                });
                return y
            },
            selectLeafNodes: function (y) {
                var z = [];
                y.each(function (A) {
                    if (A.childNodes.length == 0) {
                        z.push(A)
                    }
                });
                return z
            },
            filterUnableToIndent: function (z) {
                var y = [];
                z.each(function (A) {
                    if (w.kindOf(A, "ul,ol,dl")) {
                        w.removeListIfEmpty(A)
                    } else {
                        if (w.kindOf(A.parentNode, "table") && w.isText(A)) {} else {
                            if (w.kindOf(A.parentNode, "thead,tbody,tfooter") && !w.kindOf(A, "tr")) {} else {
                                if (w.kindOf(A.parentNode, "tr") && !w.kindOf(A, "th,td")) {} else {
                                    if (w.kindOf(A.parentNode, "ul,ol,dl") && !w.kindOf(A, "li,dd,dt")) {} else {
                                        y.push(A)
                                    }
                                }
                            }
                        }
                    }
                });
                return y
            },
            findBlockToIndent: function (y) {
                var z = this.findOrCreateBlockForNode(y);
                return this.findIndentableHigherBlock(z)
            },
            findOrCreateBlockForNode: function (z) {
                if (w.isText(z) || w.kindOf(z, "%inline,img")) {
                    var y = w.ancestor(z, "p,li,dd,dt,h1,h2,h3,h4,h5,h6,div");
                    if (y && w.children(y, "%block").length == 0) {
                        return y
                    } else {
                        y = w.ancestor(z, "%paragraph,pre,noscript,form,hr,address,fieldset,blockquote");
                        return w.wrapInlinesWithP(z, y)
                    }
                } else {
                    return z
                }
            },
            findIndentableHigherBlock: function (A) {
                var y = j;
                var z = A;
                while (z && z.tagName != "BODY") {
                    if (!y && w.kindOf(z, "p,div,h1,h2,h3,h4,h5,h6")) {
                        y = z
                    } else {
                        if (w.kindOf(z, "li,dd,dt")) {
                            return z
                        } else {
                            if (y && w.kindOf(z, "td,th")) {
                                return y
                            }
                        }
                    }
                    z = z.parentNode
                }
                return y
            },
            findAncestorTableCell: function (y) {
                return w.ancestor(y, "td,th")
            },
            findNextCell: function (A) {
                var B = this.findCurrentCell(A);
                var z = w.next(B, "td,th");
                if (!z) {
                    var y = w.next(w.parent(B), "tr");
                    if (y) {
                        z = w.first(y, "td,th")
                    }
                }
                return z
            },
            findPreviousCell: function (z) {
                var A = this.findCurrentCell(z);
                var y = w.previous(A, "td,th");
                if (!y) {
                    var B = w.previous(w.parent(A), "tr");
                    if (B) {
                        y = w.last(B, "td,th")
                    }
                }
                return y
            },
            findCurrentCell: function (y) {
                return w.kindOf(y, "td,th") ? y : this.findAncestorTableCell(y)
            },
            isCaretOnStartOf: function (D, A) {
                var B = A.getStartNode();
                var y = A.getStartOffset();
                while (w.isElement(B) && B.childNodes.length > 0) {
                    B = B.childNodes[y];
                    y = 0
                }
                var C = new g.dom.TextRangeIterator(D, 0, B, y);
                var z = d;
                g.iter.forEach(C, function (E) {
                    if (E.nodeType == 3 && !w.kindOf(E.parentNode, "script,style")) {
                        var F = (E === B) ? E.nodeValue.substring(0, y) : E.nodeValue;
                        F = F.replace(h.__WORD_JOINER_REGEXP, "");
                        z = w.removeMeaninglessSpace(F).length > 0
                    } else {
                        if (w.isElement(E)) {
                            if (w.kindOf(E, "img,embed,iframe")) {
                                z = v
                            }
                        }
                    } if (z) {
                        throw g.iter.StopIteration
                    }
                });
                return !z
            }
        };
        var e = h.Tool.Indent.Helper;
        var x = {};
        h.Tool.Indent.RangeIndenter = h.Class.create({
            initialize: function (y) {
                this.handler = y
            },
            indent: function (z) {
                var y = this;
                z.executeUsingCaret(function (A, C) {
                    var B = e.findBlocksToIndentFromRange(A, z, C);
                    B.each(function (D) {
                        try {
                            y.handler.handle(D, z, A)
                        } catch (E) {
                            if (E == x) {
                                C.dispose()
                            } else {
                                throw E
                            }
                        }
                    })
                })
            }
        });
        h.Tool.Indent.TableCellIndenter = h.Class.create({
            initialize: function (y) {
                this.handler = y
            },
            indent: function (z) {
                var y = this;
                var A = (z.table) ? z.table.getTdArr() : [];
                A.each(function (B) {
                    var D = new g.dom.TagIterator(B);
                    var C = e.findBlocksToIndentFromIterator(z, D);
                    C.each(function (E) {
                        y.handler.handle(E, z, j)
                    })
                })
            }
        });
        h.Tool.Indent.Judge = {
            ChildOfFirstTableCell: function (y) {
                var z = e.findAncestorTableCell(y);
                return z && !e.findPreviousCell(z)
            },
            ChildOfLastTableCell: function (y) {
                var z = e.findAncestorTableCell(y);
                return z && !e.findNextCell(z)
            },
            ChildOfTableCell: function (y) {
                return e.findAncestorTableCell(y)
            },
            ListItem: function (y) {
                return w.kindOf(y, "li") && w.kindOf(y.parentNode, "ol,ul")
            },
            OneDepthList: function (z) {
                if (w.kindOf(z, "li")) {
                    var y = new h.Tool.StyledList.ListBuilder();
                    if (y.countDepthOfList(z) == 1) {
                        return v
                    }
                }
                return d
            },
            IndentedBlockNode: function (y) {
                return w.kindOf(y, "%block") && y.style && y.style.marginLeft != ""
            },
            BlockNode: function (y) {
                return w.kindOf(y, "%block")
            },
            HeadOfParagraph: function (A, z, y) {
                return e.isCaretOnStartOf(A, y)
            },
            And: function (z, y) {
                return function () {
                    return z.apply(this, arguments) && y.apply(this, arguments)
                }
            },
            AlwaysTrue: function () {
                return v
            }
        };
        h.Tool.Indent.Operation = {
            GoToBelowTable: function (A, y) {
                var z = w.ancestor(A, "table");
                y.bookmarkToNext(z);
                throw x
            },
            GoToNextCell: function (A, z) {
                var y = e.findNextCell(A);
                if (y) {
                    z.selectFirstText(y);
                    throw x
                }
            },
            IndentListItem: function (A) {
                var y = w.ancestor(A, "ul,ol,dl");
                if (y) {
                    var z = w.previous(A);
                    var B = w.next(A);
                    if (w.kindOf(z, "ul,ol,dl")) {
                        w.append(z, A)
                    } else {
                        var C = w.clone(y);
                        w.applyStyles(C, {
                            marginLeft: j,
                            paddingLeft: j
                        });
                        w.wrap(C, A)
                    } if (w.kindOf(B, "ul,ol,dl")) {
                        w.moveChild(B, A.parentNode);
                        w.remove(B)
                    }
                }
            },
            getChildrenAsElement: function (A) {
                var C = [];
                var B = A.childNodes;
                for (var z = 0, y = B.length; z < y; z++) {
                    var E = B[z];
                    if (w.isText(E)) {
                        var D = w.wrapInlinesWithP(E, A);
                        C.push(D)
                    } else {
                        if (w.isElement(E)) {
                            C.push(E)
                        }
                    }
                }
                return C
            },
            IndentBlockNode: function (y) {
                w.applyStyles(y, {
                    marginLeft: "+2em"
                })
            },
            AddFourSpaces: function (z, y) {
                y.pasteContent("&nbsp;&nbsp;&nbsp;&nbsp;", d)
            },
            GoToAboveTable: function (A, y) {
                var z = w.ancestor(A, "table");
                y.bookmarkToPrevious(z);
                throw x
            },
            GoToPreviousCell: function (A, y) {
                var z = e.findPreviousCell(A);
                if (z) {
                    y.moveCaretTo(z, v);
                    throw x
                }
            },
            OutdentListItem: function (C, B) {
                var D = w.ancestor(C, "ul,ol,dl");
                if (!D) {
                    return
                }
                var y = D.parentNode;
                if (w.kindOf(y, "li")) {
                    w.unwrap(y);
                    y = D.parentNode
                }
                var F = w.kindOf(y, "ul,ol,dl") ? y : j;
                var A;
                if (F) {
                    A = w.divideNode(D, w.indexOf(C));
                    w.insertAt(C, A)
                } else {
                    A = w.divideNode(D, w.indexOf(C));
                    var z = w.getStyleText(C);
                    var E = B.newNode("p");
                    w.setStyleText(E, z);
                    w.replace(C, E);
                    w.insertAt(E, A)
                }
                w.removeListIfEmpty(D);
                w.removeListIfEmpty(A)
            },
            OutdentBlockNode: function (y) {
                w.applyStyles(y, {
                    marginLeft: "-2em"
                })
            },
            Propagate: function () {
                throw $propagate
            }
        }
    })();
    q.addTool("outdent", {
        sync: d,
        status: d,
        hotKey: {
            shiftKey: v,
            keyCode: 9
        }
    });
    h.Tool.Outdent = h.Class.create({
        $const: {
            __Identity: "outdent"
        },
        $extend: h.Tool,
        oninitialized: function (e) {
            this.weave(new h.Button(this.buttonCfg), j, this.handler);
            this.createHandlers();
            this.observeBackspace();
            this.bindKeyboard(e.hotKey, this.shiftTabKeyHandler.bind(this))
        },
        handler: function () {
            var e = this;
            this.canvas.execute(function (x) {
                e.onOutdentClicked.handle(x)
            })
        },
        shiftTabKeyHandler: function () {
            var e = this;
            this.canvas.execute(function (x) {
                e.onShiftTabPressed.handle(x)
            })
        },
        observeBackspace: function () {
            var x = this.canvas;
            var e = this;
            x.observeKey({
                keyCode: h.__KEY.BACKSPACE
            }, function () {
                x.query(function (y) {
                    e.onBackspace.handle(y)
                })
            })
        },
        createHandlers: function () {
            var e = h.Tool.Indent;
            var y = e.Judge;
            var x = e.Operation;
            var A = e.Handler;
            var D = h.ChainHandler;
            var B = D.connect([new D(y.ListItem, x.OutdentListItem), new D(y.BlockNode, x.OutdentBlockNode)]);
            var z = D.connect([new D(y.AlwaysTrue, x.Propagate)]);
            var E = D.connect([new D(y.ListItem, x.OutdentListItem), new D(y.ChildOfFirstTableCell, x.GoToAboveTable), new D(y.ChildOfTableCell, x.GoToPreviousCell), new D(y.BlockNode, x.OutdentBlockNode)]);
            var C = D.connect([new D(y.And(y.HeadOfParagraph, y.OneDepthList), x.Propagate), new D(y.And(y.HeadOfParagraph, y.ListItem), x.OutdentListItem), new D(y.And(y.HeadOfParagraph, y.IndentedBlockNode), x.OutdentBlockNode), new D(y.AlwaysTrue, x.Propagate)]);
            this.onShiftTabPressed = new A(E, B, B);
            this.onOutdentClicked = new A(B, B, B);
            this.onBackspace = new A(C, z, z)
        }
    });
    h.I.AlignExecution = h.Mixin.create({
        executeAlignImageMode: function (y) {
            var A = this.constructor.__ImageModeProps.image;
            var x = y.getControl();
            if (!x) {
                return
            }
            y.apply(x, A);
            var e = this.constructor.__ImageModeProps.paragraph;
            if (e) {
                var z = w.find(x, "%paragraph");
                y.apply(z, e)
            }
        },
        executeAlignTextMode: function (A) {
            var e = this.constructor.__TextModeProps.paragraph;
            var y = A.getControl();
            if (y && w.kindOf(y, "button")) {
                var C = w.find(y, "%paragraph");
                if (C) {
                    A.apply(C, e)
                }
                var x = w.collect(y, "blockquote");
                if (x) {
                    x.style.margin = this.constructor.__TextModeProps.button["style"]["margin"]
                }
            } else {
                var B = A.blocks(function () {
                    return "%paragraph"
                });
                A.apply(B, e);
                var z = [];
                B.each(function (E) {
                    var D;
                    D = w.collectAll(E, "table,hr");
                    D.each(function (F) {
                        z.push(F)
                    })
                });
                A.apply(z, {
                    align: e.style["textAlign"]
                })
            }
        },
        queryImageFloat: function (x) {
            var e = x.getControl();
            if (e) {
                return x.queryStyle(e, "float")
            } else {
                return j
            }
        },
        queryParaFloat: function (y) {
            var e, x = y.findNode("%paragraph");
            if (x) {
                e = y.queryStyle(x, "float")
            }
            return e || j
        },
        queryTextAlign: function (y) {
            var x = y.findNode("%paragraph");
            var e = y.queryStyle(x, "textAlign");
            if (!e) {
                e = y.queryAttr(x, "align")
            }
            if (!e || e == "start" || e == "auto" || e == "-webkit-auto") {
                e = "left"
            }
            return e
        },
        queryControlAlign: function (e) {
            var x = e.getControl();
            return e.queryAttr(x, "align")
        },
        executeAlign: function (x) {
            var e = this;
            var y = e.getAlignMode(x);
            if (y == "tableCell") {
                e.executeTableCellMode(x)
            } else {
                if (y == "image") {
                    e.executeAlignImageMode(x)
                } else {
                    e.executeAlignTextMode(x)
                }
            }
        },
        getAlignMode: function (x) {
            var e = (x.table) ? x.table.getTdArr() : [];
            if (e.length > 0) {
                return "tableCell"
            } else {
                if (this.imageAlignMode) {
                    return "image"
                } else {
                    return "text"
                }
            }
        },
        executeTableCellMode: function (z) {
            if (!this.indenter) {
                var A = h.Tool.Indent.Judge;
                var B = h.ChainHandler;
                var x = this;

                function e(C) {
                    w.applyAttributes(C, x.constructor.__TextModeProps.paragraph)
                }
                var y = B.connect([new B(A.ListItem, e), new B(A.BlockNode, e)]);
                this.indenter = new h.Tool.Indent.TableCellIndenter(y)
            }
            this.indenter.indent(z)
        },
        syncButtonState: function () {
            var e = this;
            var x = e.canvas.query(function (y) {
                return e.queryCurrentStyle(y)
            });
            e.button.setState(x)
        },
        queryCurrentStyle: function (e) {
            if (this.imageAlignMode) {
                return this.queryImageMode(e)
            }
            return this.queryTextMode(e)
        },
        queryImageMode: function (y) {
            var e = this.constructor.__ImageModeProps;
            var z = this.queryImageFloat(y);
            if (z && z != "none") {
                if (e.image && e.image.style["float"]) {
                    return (z == e.image.style["float"])
                }
            }
            var A = this.queryParaFloat(y);
            if (A && A != "none") {
                if (e.paragraph && e.paragraph.style["float"]) {
                    return (A == e.paragraph.style["float"])
                }
            }
            var x = this.queryTextAlign(y);
            if (e.paragraph && e.paragraph.style.textAlign) {
                return (x == e.paragraph.style.textAlign)
            }
            return d
        },
        queryTextMode: function (y) {
            var z = this.constructor.__TextModeProps;
            var x = z.paragraph.style.textAlign;
            var e = this.queryControlAlign(y);
            if (e == j) {
                var A = this.queryTextAlign(y) || "left";
                return (A == x)
            } else {
                return (e == x)
            }
        }
    });
    (function () {
        q.addTool("alignleft", {
            sync: v,
            status: v,
            hotKey: {
                ctrlKey: v,
                keyCode: 188
            }
        });
        var y = "left";
        var e = "none";
        var z = "none";
        var x = {
            align: j,
            style: {
                textAlign: y
            }
        };
        h.Tool.AlignLeft = h.Class.create({
            $const: {
                __Identity: "alignleft",
                __ImageModeProps: {
                    paragraph: x,
                    image: {
                        style: {
                            clear: z,
                            "float": e,
                            marginLeft: "",
                            marginRight: ""
                        }
                    }
                },
                __TextModeProps: {
                    paragraph: x,
                    button: {
                        style: {
                            margin: "0"
                        }
                    }
                }
            },
            $extend: h.Tool,
            $mixins: [h.I.AlignExecution],
            oninitialized: function (B) {
                var A = this;
                A.imageAlignMode = d;
                A.weave(new h.Button(A.buttonCfg), j, A.handler);
                A.bindKeyboard(B.hotKey, A.handler.bind(A));
                A.startSyncButtonWithStyle()
            },
            handler: function () {
                var A = this;
                var B = A.canvas;
                var C = A.toolbar;
                B.execute(function (D) {
                    A.executeAlign(D);
                    var E = A.getAlignMode(D);
                    if (E == "image") {
                        C.fireJobs(h.Ev.__CMD_ALIGN_IMG_LEFT)
                    } else {
                        if (E == "text") {
                            C.fireJobs(h.Ev.__CMD_ALIGN_LEFT)
                        }
                    }
                });
                B.triggerQueryStatus()
            },
            startSyncButtonWithStyle: function () {
                var A = this;
                A.canvas.observeJob(h.Ev.__CANVAS_PANEL_QUERY_STATUS, function () {
                    A.syncButtonState()
                })
            }
        })
    })();
    (function () {
        q.addTool("aligncenter", {
            sync: v,
            status: v,
            hotKey: {
                ctrlKey: v,
                keyCode: 190
            }
        });
        var y = "center";
        var e = "none";
        var z = "none";
        var x = {
            align: j,
            style: {
                textAlign: y
            }
        };
        h.Tool.AlignCenter = h.Class.create({
            $const: {
                __Identity: "aligncenter",
                __ImageModeProps: {
                    paragraph: x,
                    image: {
                        style: {
                            clear: z,
                            "float": e,
                            marginLeft: "",
                            marginRight: ""
                        }
                    }
                },
                __TextModeProps: {
                    paragraph: x,
                    button: {
                        style: {
                            margin: "0 auto"
                        }
                    }
                }
            },
            $extend: h.Tool,
            $mixins: [h.I.AlignExecution],
            oninitialized: function (B) {
                var A = this;
                A.imageAlignMode = d;
                A.weave(new h.Button(A.buttonCfg), j, A.handler);
                A.bindKeyboard(B.hotKey, A.handler.bind(A));
                A.startSyncButtonWithStyle()
            },
            handler: function () {
                var A = this;
                var B = A.canvas;
                var C = A.toolbar;
                B.execute(function (D) {
                    A.executeAlign(D);
                    var E = A.getAlignMode(D);
                    if (E == "image") {
                        C.fireJobs(h.Ev.__CMD_ALIGN_IMG_CENTER)
                    } else {
                        if (E == "text") {
                            C.fireJobs(h.Ev.__CMD_ALIGN_CENTER)
                        }
                    }
                });
                B.triggerQueryStatus()
            },
            startSyncButtonWithStyle: function () {
                var A = this;
                A.canvas.observeJob(h.Ev.__CANVAS_PANEL_QUERY_STATUS, function () {
                    A.syncButtonState()
                })
            }
        })
    })();
    (function () {
        q.addTool("alignright", {
            sync: v,
            status: v,
            hotKey: {
                ctrlKey: v,
                keyCode: 191
            }
        });
        var y = "right";
        var e = "left";
        var z = "both";
        var A = "8px";
        var x = "";
        h.Tool.AlignRight = h.Class.create({
            $const: {
                __Identity: "alignright",
                __ImageModeProps: {
                    image: {
                        style: {
                            clear: z,
                            "float": e,
                            marginLeft: x,
                            marginRight: A
                        }
                    }
                },
                __TextModeProps: {
                    paragraph: {
                        align: j,
                        style: {
                            textAlign: y
                        }
                    },
                    button: {
                        style: {
                            margin: "0 0 0 auto"
                        }
                    }
                }
            },
            $extend: h.Tool,
            $mixins: [h.I.AlignExecution],
            oninitialized: function (C) {
                var B = this;
                B.imageAlignMode = d;
                B.weave(new h.Button(B.buttonCfg), j, B.handler);
                B.bindKeyboard(C.hotKey, B.handler.bind(B));
                B.startSyncButtonWithStyle()
            },
            handler: function () {
                var B = this;
                var C = B.canvas;
                var D = B.toolbar;
                C.execute(function (E) {
                    B.executeAlign(E);
                    var F = B.getAlignMode(E);
                    if (F == "image") {
                        D.fireJobs(h.Ev.__CMD_ALIGN_IMG_FLOAT_LEFT)
                    } else {
                        if (F == "text") {
                            D.fireJobs(h.Ev.__CMD_ALIGN_RIGHT)
                        }
                    }
                });
                C.triggerQueryStatus()
            },
            startSyncButtonWithStyle: function () {
                var B = this;
                B.canvas.observeJob(h.Ev.__CANVAS_PANEL_QUERY_STATUS, function () {
                    B.syncButtonState()
                })
            }
        })
    })();
    (function () {
        q.addTool("alignfull", {
            sync: v,
            status: v
        });
        var y = "justify";
        var e = "right";
        var z = "both";
        var A = "8px";
        var x = "";
        h.Tool.AlignFull = h.Class.create({
            $const: {
                __Identity: "alignfull",
                __ImageModeProps: {
                    image: {
                        style: {
                            clear: z,
                            "float": e,
                            marginLeft: A,
                            marginRight: x
                        }
                    }
                },
                __TextModeProps: {
                    paragraph: {
                        align: j,
                        style: {
                            textAlign: y
                        }
                    },
                    button: {
                        style: {
                            margin: "0"
                        }
                    }
                }
            },
            $extend: h.Tool,
            $mixins: [h.I.AlignExecution],
            oninitialized: function () {
                var B = this;
                B.imageAlignMode = d;
                B.weave(new h.Button(B.buttonCfg), j, B.handler);
                B.startSyncButtonWithStyle()
            },
            handler: function () {
                var B = this;
                var C = B.canvas;
                var D = B.toolbar;
                C.execute(function (E) {
                    B.executeAlign(E);
                    var F = B.getAlignMode(E);
                    if (F == "image") {
                        D.fireJobs(h.Ev.__CMD_ALIGN_IMG_FLOAT_RIGHT)
                    } else {
                        if (F == "text") {
                            D.fireJobs(h.Ev.__CMD_ALIGN_FULL)
                        }
                    }
                });
                C.triggerQueryStatus()
            },
            startSyncButtonWithStyle: function () {
                var B = this;
                B.canvas.observeJob(h.Ev.__CANVAS_PANEL_QUERY_STATUS, function () {
                    B.syncButtonState()
                })
            }
        })
    })();
    q.addTool("insertcells", {
        sync: d,
        status: v,
        options: [{
            label: "\uc704\ub85c \uc0bd\uc785",
            title: "\uc704\ub85c \uc0bd\uc785",
            data: "addRowUpper",
            klass: "tx-insertcells-1"
        }, {
            label: "\uc544\ub798 \uc0bd\uc785",
            title: "\uc544\ub798 \uc0bd\uc785",
            data: "addRowBelow",
            klass: "tx-insertcells-2"
        }, {
            label: "\uc67c\ucabd \uc0bd\uc785",
            title: "\uc67c\ucabd \uc0bd\uc785",
            data: "addColLeft",
            klass: "tx-insertcells-3"
        }, {
            label: "\uc624\ub978\ucabd \uc0bd\uc785",
            title: "\uc624\ub978\ucabd \uc0bd\uc785",
            data: "addColRight",
            klass: "tx-insertcells-4"
        }]
    });
    h.Tool.Insertcells = h.Class.create({
        $const: {
            __Identity: "insertcells"
        },
        $extend: h.Tool,
        oninitialized: function (e) {
            var z = this.canvas;
            var B = z.getStyleConfig().insert;
            var x = (e.options || []);
            var A = {};
            x.each(function (C) {
                A[C.data] = C.title
            });
            var y = function (C) {
                z.query(function (D) {
                    if (D.table) {
                        switch (C) {
                        case "addRowUpper":
                            D.table.insertRowAbove();
                            break;
                        case "addRowBelow":
                            D.table.insertRowBelow();
                            break;
                        case "addColLeft":
                            D.table.insertColLeft();
                            break;
                        case "addColRight":
                            D.table.insertColRight();
                            break
                        }
                    }
                })
            };
            this.weave.bind(this)(new h.Button.Select(q.merge(this.buttonCfg, {
                selectedValue: B
            })), new h.Menu.Select(this.menuCfg), y)
        }
    });
    q.addTool("deletecells", {
        sync: d,
        status: v,
        options: [{
            label: "\ud589 \uc0ad\uc81c",
            title: "\ud589 \uc0ad\uc81c",
            data: "deleteRow",
            klass: "tx-deletecells-1"
        }, {
            label: "\uc5f4 \uc0ad\uc81c",
            title: "\uc5f4 \uc0ad\uc81c",
            data: "deleteCol",
            klass: "tx-deletecells-2"
        }]
    });
    h.Tool.deletecells = h.Class.create({
        $const: {
            __Identity: "deletecells"
        },
        $extend: h.Tool,
        oninitialized: function (e) {
            var y = this.canvas;
            var z = y.getStyleConfig().insert;
            var x = function (A) {
                y.query(function (B) {
                    if (B.table) {
                        switch (A) {
                        case "deleteRow":
                            B.table.deleteRow();
                            break;
                        case "deleteCol":
                            B.table.deleteCol();
                            break
                        }
                    }
                })
            };
            this.weave.bind(this)(new h.Button.Select(q.merge(this.buttonCfg, {
                selectedValue: z
            })), new h.Menu.Select(this.menuCfg), x)
        }
    });
    q.addTool("mergecells", {
        sync: d,
        status: v,
        options: [{
            label: "\ubcd1\ud569",
            title: "\ubcd1\ud569",
            data: "merge",
            klass: "tx-mergecells-1"
        }, {
            label: "\ubd84\ud560",
            title: "\ubd84\ud560",
            data: "cancelmerge",
            klass: "tx-mergecells-2"
        }]
    });
    h.Tool.Mergecells = h.Class.create({
        $const: {
            __Identity: "mergecells"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var x = this.canvas;
            var y = x.getStyleConfig().insert;
            var e = function (z) {
                x.query(function (A) {
                    if (A.table) {
                        switch (z) {
                        case "merge":
                            A.table.merge();
                            break;
                        case "cancelmerge":
                            A.table.resetMerge();
                            break
                        }
                    }
                })
            };
            this.weave.bind(this)(new h.Button.Select(q.merge(this.buttonCfg, {
                selectedValue: y
            })), new h.Menu.Select(this.menuCfg), e)
        }
    });
    k.addMsg({
        "@cellslineheight.subtitle1": "1pt",
        "@cellslineheight.subtitle2": "2pt",
        "@cellslineheight.subtitle3": "3pt",
        "@cellslineheight.subtitle4": "4pt",
        "@cellslineheight.subtitle5": "5pt"
    });
    q.addTool("cellslineheight", {
        sync: d,
        status: v,
        options: [{
            label: TXMSG("@cellslineheight.subtitle1"),
            title: "1pt",
            data: 1,
            klass: "tx-cellslineheight-1"
        }, {
            label: TXMSG("@cellslineheight.subtitle2"),
            title: "2pt",
            data: 2,
            klass: "tx-cellslineheight-2"
        }, {
            label: TXMSG("@cellslineheight.subtitle3"),
            title: "3pt",
            data: 3,
            klass: "tx-cellslineheight-3"
        }, {
            label: TXMSG("@cellslineheight.subtitle4"),
            title: "4pt",
            data: 4,
            klass: "tx-cellslineheight-4"
        }, {
            label: TXMSG("@cellslineheight.subtitle5"),
            title: "5pt",
            data: 5,
            klass: "tx-cellslineheight-5"
        }]
    });
    h.Tool.Cellslineheight = h.Class.create({
        $const: {
            __Identity: "cellslineheight"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var e = this;
            e.createListStyleMap(x);
            e.weave(new h.Button.CellslineheightList(e.buttonCfg), new h.Menu.Select(e.menuCfg), e.handler)
        },
        createListStyleMap: function (e) {
            var x = this.listStyleMap = {};
            e.options.each(function (y) {
                x[y.data] = {
                    type: y.type,
                    klass: y.klass
                }
            })
        },
        handler: function (x) {
            var e = this;
            if (!e.listStyleMap[x]) {
                return
            }
            e.canvas.query(function (y) {
                if (y.table) {
                    y.table.setBorderHeight(x)
                }
            })
        },
        getButtonClassByValue: function (x) {
            var e = this.listStyleMap;
            if (e[x]) {
                return e[x].klass
            } else {
                return e[this.getDefaultProperty()].klass
            }
        }
    });
    h.Button.CellslineheightList = h.Class.create({
        $extend: h.Button.Select
    });
    q.addTool("cellslinecolor", {
        defaultcolor: "#7c84ef",
        wysiwygonly: v,
        sync: d,
        status: v,
        useFavorite: v,
        thumbs: h.__CONFIG_COMMON.thumbs,
        needRevert: v
    });
    h.Tool.Cellslinecolor = h.Class.create({
        $const: {
            __Identity: "cellslinecolor"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var x = this.canvas;
            var e = this;
            this.button = new h.Button(this.buttonCfg);
            var y = function (A) {
                z(A);
                x.query(function (B) {
                    if (B.table) {
                        B.table.setBorderColor(A)
                    }
                })
            };
            var z = function (A) {
                if (A) {
                    try {
                        u.setStyle(e.button.elButton, {
                            backgroundColor: A
                        })
                    } catch (B) {}
                }
            };
            z(this.config.defaultcolor);
            this.weave.bind(this)(e.button, new h.Menu.ColorPallete(this.menuCfg), y)
        }
    });
    k.addMsg({
        "@cellslinestyle.subtitle1": "\ud14c\ub450\ub9ac \uc5c6\uc74c",
        "@cellslinestyle.subtitle2": "\uc2e4\uc120",
        "@cellslinestyle.subtitle3": "\uc810\uc120",
        "@cellslinestyle.subtitle4": "\uc791\uc740 \uc810\uc120"
    });
    q.addTool("cellslinestyle", {
        sync: d,
        status: v,
        options: [{
            label: TXMSG("@cellslinestyle.subtitle1"),
            title: "\ud14c\ub450\ub9ac \uc5c6\uc74c",
            data: "none",
            klass: "tx-cellslinestyle-1"
        }, {
            label: TXMSG("@cellslinestyle.subtitle2"),
            title: "\uc2e4\uc120",
            data: "solid",
            klass: "tx-cellslinestyle-2"
        }, {
            label: TXMSG("@cellslinestyle.subtitle3"),
            title: "\uc810\uc120",
            data: "dotted",
            klass: "tx-cellslinestyle-3"
        }, {
            label: TXMSG("@cellslinestyle.subtitle4"),
            title: "\uc791\uc740 \uc810\uc120",
            data: "dashed",
            klass: "tx-cellslinestyle-4"
        }]
    });
    h.Tool.Cellslinestyle = h.Class.create({
        $const: {
            __Identity: "cellslinestyle"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var e = this;
            e.createListStyleMap(x);
            e.weave(new h.Button.CellsLineStyledList(e.buttonCfg), new h.Menu.Select(e.menuCfg), e.handler)
        },
        createListStyleMap: function (e) {
            var x = this.listStyleMap = {};
            e.options.each(function (y) {
                x[y.data] = {
                    type: y.type,
                    klass: y.klass
                }
            })
        },
        handler: function (x) {
            var e = this;
            if (!e.listStyleMap[x]) {
                return
            }
            e.canvas.query(function (y) {
                if (y.table) {
                    y.table.setBorderType(x)
                }
            })
        },
        getDefaultProperty: function () {
            return 1
        }
    });
    h.Button.CellsLineStyledList = h.Class.create({
        $extend: h.Button.Select
    });
    q.addTool("cellsoutline", {
        sync: d,
        status: v,
        options: [{
            label: "\ubaa8\ub4e0 \ud14c\ub450\ub9ac",
            title: "\ubaa8\ub4e0 \ud14c\ub450\ub9ac",
            data: "all",
            klass: "tx-cellsoutline-1"
        }, {
            label: "\ubc14\uae65 \ud14c\ub450\ub9ac",
            title: "\ubc14\uae65 \ud14c\ub450\ub9ac",
            data: "out",
            klass: "tx-cellsoutline-2"
        }, {
            label: "\uc548\ucabd \ud14c\ub450\ub9ac",
            title: "\uc548\ucabd \ud14c\ub450\ub9ac",
            data: "in",
            klass: "tx-cellsoutline-3"
        }, {
            label: "\uc704\ucabd \ud14c\ub450\ub9ac",
            title: "\uc704\ucabd \ud14c\ub450\ub9ac",
            data: "top",
            klass: "tx-cellsoutline-4"
        }, {
            label: "\uc544\ub798\ucabd \ud14c\ub450\ub9ac",
            title: "\uc544\ub798\ucabd \ud14c\ub450\ub9ac",
            data: "bottom",
            klass: "tx-cellsoutline-5"
        }, {
            label: "\uc67c\ucabd \ud14c\ub450\ub9ac",
            title: "\uc67c\ucabd \ud14c\ub450\ub9ac",
            data: "left",
            klass: "tx-cellsoutline-6"
        }, {
            label: "\uc624\ub978\ucabd \ud14c\ub450\ub9ac",
            title: "\uc624\ub978\ucabd \ud14c\ub450\ub9ac",
            data: "right",
            klass: "tx-cellsoutline-7"
        }, {
            label: "\ud14c\ub450\ub9ac \uc5c6\uc74c",
            title: "\ud14c\ub450\ub9ac \uc5c6\uc74c",
            data: "none",
            klass: "tx-cellsoutline-8"
        }]
    });
    h.Tool.Cellsoutline = h.Class.create({
        $const: {
            __Identity: "cellsoutline"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var e = this;
            this.twinkleCount = 0;
            this.twinkleTimer = j;
            e.createListStyleMap(x);
            e.weave(new h.Button.CellsoutlineList(e.buttonCfg), new h.Menu.Select(e.menuCfg), e.handler);
            this.toolbar.observeJob(h.Ev.__TOOL_CELL_LINE_CHANGE, function (y) {
                if (y.fromInit != v) {
                    e.twinkleButton()
                }
            })
        },
        createListStyleMap: function (e) {
            var x = this.listStyleMap = {};
            e.options.each(function (y) {
                x[y.data] = {
                    type: y.type,
                    klass: y.klass
                }
            })
        },
        handler: function (x) {
            var e = this;
            if (!e.listStyleMap[x]) {
                return
            }
            e.canvas.query(function (y) {
                if (y.table) {
                    y.table.setBorderRange(x)
                }
            });
            e.canvas.execute(function (y) {
                if (y.table) {
                    if (x == "none") {
                        y.table.setNoBorder()
                    } else {
                        y.table.applyBorder()
                    }
                }
            })
        },
        twinkleButton: function () {
            var e;
            e = this;
            if (this.twinkleTimer) {
                clearInterval(this.twinkleTimer);
                this.twinkleTimer = j
            }
            this.twinkleCount = 4;
            this.twinkleTimer = setInterval(function () {
                if (0 < e.twinkleCount) {
                    e.twinkleCount -= 1;
                    if (e.button.currentState() == "hovered") {
                        e.button.normalState()
                    } else {
                        e.button.hoveredState()
                    }
                } else {
                    e.button.normalState();
                    clearInterval(e.twinkleTimer);
                    e.twinkleTimer = j
                }
            }, 500)
        }
    });
    h.Button.CellsoutlineList = h.Class.create({
        $extend: h.Button.Select
    });
    h.MarkupTemplate.add("cellsline.preview", ['<table width="#{width}" cellPadding="0" style="line-height:0"><tbody><tr>', '<td valign="center" height="#{height}">', '<div style="border-bottom:#{value};width:#{width}px;height:2px;overflow:hidden;"></div>', "</td>", "</tr></tbody></table>"].join(""));
    q.addTool("cellslinepreview", {
        sync: d,
        status: v,
        options: [{
            label: h.MarkupTemplate.get("cellsline.preview").evaluate({
                value: "1pt solid #ccc",
                width: 70,
                height: 14
            }),
            title: "1pt solid #ccc",
            data: "#ccc 1 solid"
        }, {
            label: h.MarkupTemplate.get("cellsline.preview").evaluate({
                value: "2pt solid #c54",
                width: 70,
                height: 14
            }),
            title: "2pt solid #c54",
            data: "#c54 2 solid"
        }, {
            label: h.MarkupTemplate.get("cellsline.preview").evaluate({
                value: "2pt solid #67f",
                width: 70,
                height: 14
            }),
            title: "2pt solid #67f",
            data: "#67f 2 solid"
        }, {
            label: h.MarkupTemplate.get("cellsline.preview").evaluate({
                value: "3pt solid #000",
                width: 70,
                height: 14
            }),
            title: "3pt solid #000",
            data: "#000 3 solid"
        }, {
            label: h.MarkupTemplate.get("cellsline.preview").evaluate({
                value: "1pt dashed #d4c",
                width: 70,
                height: 14
            }),
            title: "1pt dashed #d4c",
            data: "#d4c 1 dashed"
        }]
    });
    h.Tool.Cellslinepreview = h.Class.create({
        $const: {
            __Identity: "cellslinepreview"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var e = this;
            this.data = {
                color: "",
                height: 0,
                type: ""
            };
            this.weave(new h.Button.CellslinepreviewList(this.buttonCfg), new h.Menu.Select(this.menuCfg), this.handler);
            this.toolbar.observeJob(h.Ev.__TOOL_CELL_LINE_CHANGE, function (y) {
                e.setData(y);
                e.refreshPreview()
            })
        },
        setData: function (e) {
            if ("color" in e) {
                this.data.color = e.color
            }
            if ("height" in e) {
                this.data.height = e.height
            }
            if ("type" in e) {
                this.data.type = e.type
            }
        },
        refreshPreview: function () {
            var e;
            e = this.data;
            text = e.height + "pt " + e.type + " " + e.color;
            this.setPreview(text)
        },
        setPreview: function (e) {
            this.button.elText.innerHTML = h.MarkupTemplate.get("cellsline.preview").evaluate({
                value: e,
                width: 43,
                height: 14
            })
        },
        addBorderHistory: function (e) {
            this.setData(e);
            this.refreshPreview()
        },
        handler: function (y, z) {
            var e = this,
                x = e.canvas;
            x.execute(function (B) {
                var A;
                if (B.table) {
                    A = y.split(" ");
                    B.table.setBorderButtons(A[0], A[1], A[2])
                }
            })
        }
    });
    h.Button.CellslinepreviewList = h.Class.create({
        $extend: h.Button.Select,
        setText: function (e) {
            this.tool.setPreview(e)
        }
    });
    q.addTool("tablebackcolor", {
        defaultcolor: "#9aa5ea",
        wysiwygonly: v,
        sync: d,
        status: v,
        useFavorite: v,
        thumbs: h.__CONFIG_COMMON.thumbs,
        needRevert: v
    });
    h.Tool.Tablebackcolor = h.Class.create({
        $const: {
            __Identity: "tablebackcolor"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var y = this.canvas;
            var e = this;
            e.button = new h.Button(this.buttonCfg);
            var x = function (A) {
                y.query(function (B) {
                    if (B.table) {
                        B.table.tableBackground(A)
                    }
                });
                z(A)
            };
            var z = function (A) {
                try {
                    if (A) {
                        u.setStyle(e.button.elButton, {
                            backgroundColor: A
                        })
                    }
                } catch (B) {}
            };
            this.weave.bind(this)(e.button, new h.Menu.ColorPallete(this.menuCfg), x)
        }
    });
    q.addTool("tableedittool", {
        sync: d,
        status: v,
        opened: d
    });
    h.Tool.TableEditTool = h.Class.create({
        $const: {
            __Identity: "tableedittool"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var e = this.toolbar;
            var B = e.el;
            var A = w.collect(B.parentNode, "div.tx-toolbar-advanced");
            if (!A) {
                return
            }
            e.observeJob("toolbar.advanced.fold", function () {
                u.hide(A);
                u.removeClassName(B, "tx-toolbar-basic-open")
            });
            e.observeJob("toolbar.advanced.spread", function () {
                u.show(A);
                u.addClassName(B, "tx-toolbar-basic-open")
            });
            var z = d;
            var y = function () {
                if (z) {
                    e.fireJobs("toolbar.advanced.fold")
                } else {
                    e.fireJobs("toolbar.advanced.spread")
                }
                z = !z
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), j, y);
            if (x.opened == v) {
                A.show();
                u.addClassName(B, "tx-toolbar-basic-open");
                z = v
            }
        }
    });
    q.addTool("tabletemplate", {
        sync: d,
        status: v,
        rows: 5,
        cols: 9,
        options: [{
            label: "image",
            data: 1,
            klass: "tx-tabletemplate-1"
        }, {
            label: "image",
            data: 2,
            klass: "tx-tabletemplate-2"
        }, {
            label: "image",
            data: 3,
            klass: "tx-tabletemplate-3"
        }, {
            label: "image",
            data: 4,
            klass: "tx-tabletemplate-4"
        }, {
            label: "image",
            data: 5,
            klass: "tx-tabletemplate-5"
        }, {
            label: "image",
            data: 6,
            klass: "tx-tabletemplate-6"
        }, {
            label: "image",
            data: 7,
            klass: "tx-tabletemplate-7"
        }, {
            label: "image",
            data: 8,
            klass: "tx-tabletemplate-8"
        }, {
            label: "image",
            data: 9,
            klass: "tx-tabletemplate-9"
        }, {
            label: "image",
            data: 10,
            klass: "tx-tabletemplate-10"
        }, {
            label: "image",
            data: 11,
            klass: "tx-tabletemplate-11"
        }, {
            label: "image",
            data: 12,
            klass: "tx-tabletemplate-12"
        }, {
            label: "image",
            data: 13,
            klass: "tx-tabletemplate-13"
        }, {
            label: "image",
            data: 14,
            klass: "tx-tabletemplate-14"
        }, {
            label: "image",
            data: 15,
            klass: "tx-tabletemplate-15"
        }, {
            label: "image",
            data: 16,
            klass: "tx-tabletemplate-16"
        }, {
            label: "image",
            data: 17,
            klass: "tx-tabletemplate-17"
        }, {
            label: "image",
            data: 18,
            klass: "tx-tabletemplate-18"
        }, {
            label: "image",
            data: 19,
            klass: "tx-tabletemplate-19"
        }, {
            label: "image",
            data: 20,
            klass: "tx-tabletemplate-20"
        }, {
            label: "image",
            data: 21,
            klass: "tx-tabletemplate-21"
        }, {
            label: "image",
            data: 22,
            klass: "tx-tabletemplate-22"
        }, {
            label: "image",
            data: 23,
            klass: "tx-tabletemplate-23"
        }, {
            label: "image",
            data: 24,
            klass: "tx-tabletemplate-24"
        }, {
            label: "image",
            data: 25,
            klass: "tx-tabletemplate-25"
        }, {
            label: "image",
            data: 26,
            klass: "tx-tabletemplate-26"
        }, {
            label: "image",
            data: 27,
            klass: "tx-tabletemplate-27"
        }, {
            label: "image",
            data: 28,
            klass: "tx-tabletemplate-28"
        }, {
            label: "image",
            data: 29,
            klass: "tx-tabletemplate-29"
        }, {
            label: "image",
            data: 30,
            klass: "tx-tabletemplate-30"
        }, {
            label: "image",
            data: 31,
            klass: "tx-tabletemplate-31"
        }, {
            label: "image",
            data: 32,
            klass: "tx-tabletemplate-32"
        }, {
            label: "image",
            data: 33,
            klass: "tx-tabletemplate-33"
        }, {
            label: "image",
            data: 34,
            klass: "tx-tabletemplate-34"
        }, {
            label: "image",
            data: 35,
            klass: "tx-tabletemplate-35"
        }, {
            label: "image",
            data: 36,
            klass: "tx-tabletemplate-36"
        }, {
            label: "image",
            data: 37,
            klass: "tx-tabletemplate-37"
        }, {
            label: "image",
            data: 38,
            klass: "tx-tabletemplate-38"
        }, {
            label: "image",
            data: 39,
            klass: "tx-tabletemplate-39"
        }, {
            label: "image",
            data: 40,
            klass: "tx-tabletemplate-40"
        }, {
            label: "image",
            data: 41,
            klass: "tx-tabletemplate-41"
        }, {
            label: "image",
            data: 42,
            klass: "tx-tabletemplate-42"
        }, {
            label: "image",
            data: 43,
            klass: "tx-tabletemplate-43"
        }, {
            label: "image",
            data: 44,
            klass: "tx-tabletemplate-44"
        }, {
            label: "image",
            data: 45,
            klass: "tx-tabletemplate-45"
        }]
    });
    h.Tool.Tabletemplate = h.Class.create({
        $const: {
            __Identity: "tabletemplate"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var e = this;
            var z = this.canvas;
            var A = {};
            x.options.each(function (B) {
                A[B.data] = {
                    type: B.type
                }
            });
            var y = function (C) {
                if (!A[C]) {
                    return
                }
                var B = j;
                z.execute(function (D) {
                    if (D.table) {
                        B = D.findNode("table");
                        D.table.setTemplateStyle(B, C)
                    }
                })
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), new h.Menu.List(this.menuCfg), y)
        }
    });
    q.addTool("lineheight", {
        sync: d,
        status: v,
        options: [{
            label: "50%",
            title: "50%",
            data: "0.5"
        }, {
            label: "80%",
            title: "80%",
            data: "0.8"
        }, {
            label: "100%",
            title: "100%",
            data: "1.0"
        }, {
            label: "120%",
            title: "120%",
            data: "1.2"
        }, {
            label: "150%",
            title: "150%",
            data: "1.5"
        }, {
            label: "180%",
            title: "180%",
            data: "1.8"
        }, {
            label: "200%",
            title: "200%",
            data: "2.0"
        }]
    });
    h.Tool.LineHeight = h.Class.create({
        $const: {
            __Identity: "lineheight"
        },
        $extend: h.Tool,
        oninitialized: function (e) {
            var z = this.canvas;
            var B = z.getStyleConfig().lineHeight;
            var x = (e.options || []);
            var A = {};
            x.each(function (C) {
                A[C.data] = C.title
            });
            var y = function (C) {
                z.execute(function (D) {
                    var E = D.blocks(function () {
                        return "%paragraph"
                    });
                    D.apply(E, {
                        style: {
                            lineHeight: C
                        }
                    })
                })
            };
            this.weave.bind(this)(new h.Button.Select(q.merge(this.buttonCfg, {
                selectedValue: B
            })), new h.Menu.Select(this.menuCfg), y)
        }
    });
    k.addMsg({
        "@styledlist.subtitle1": "\ucde8\uc18c",
        "@styledlist.subtitle2": "\ub3d9\uadf8\ub77c\ubbf8",
        "@styledlist.subtitle3": "\ub124\ubaa8",
        "@styledlist.subtitle4": "\uc22b\uc790",
        "@styledlist.subtitle5": "\ub85c\ub9c8\uc22b\uc790",
        "@styledlist.subtitle6": "\uc54c\ud30c\ubcb3"
    });
    q.addTool("styledlist", {
        status: v,
        options: [{
            label: TXMSG("@styledlist.subtitle1"),
            title: "cancel",
            type: "cancel",
            data: "cancel",
            klass: "tx-styledlist-0"
        }, {
            label: TXMSG("@styledlist.subtitle2"),
            title: "disc",
            type: "ul",
            data: "disc",
            klass: "tx-styledlist-1"
        }, {
            label: TXMSG("@styledlist.subtitle3"),
            title: "square",
            type: "ul",
            data: "square",
            klass: "tx-styledlist-2"
        }, {
            label: TXMSG("@styledlist.subtitle4"),
            title: "decimal",
            type: "ol",
            data: "decimal",
            klass: "tx-styledlist-3"
        }, {
            label: TXMSG("@styledlist.subtitle5"),
            title: "upper-roman",
            type: "ol",
            data: "upper-roman",
            klass: "tx-styledlist-4"
        }, {
            label: TXMSG("@styledlist.subtitle6"),
            title: "upper-alpha",
            type: "ol",
            data: "upper-alpha",
            klass: "tx-styledlist-5"
        }],
        hotKey: {
            ul: {
                ctrlKey: v,
                altKey: v,
                keyCode: 85
            },
            ol: {
                ctrlKey: v,
                altKey: v,
                keyCode: 79
            }
        }
    });
    h.Tool.StyledList = h.Class.create({
        $const: {
            __Identity: "styledlist"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var e = this;
            e.createListStyleMap(x);
            e.weave(new h.Button.StyledList(e.buttonCfg), new h.Menu.Select(e.menuCfg), e.handler, e.menuInitHandler.bind(e));
            e.indentHelper = h.Tool.Indent.Helper;
            e.bindKeyboard(x.hotKey.ul, e.handler.bind(e, "disc"));
            e.bindKeyboard(x.hotKey.ol, e.handler.bind(e, "decimal"));
            e.startSyncButtonWithStyle()
        },
        createListStyleMap: function (e) {
            var x = this.listStyleMap = {};
            e.options.each(function (y) {
                x[y.data] = {
                    type: y.type,
                    klass: y.klass
                }
            })
        },
        handler: function (y) {
            var x = this;
            if (!x.listStyleMap[y]) {
                return
            }
            var e = x.listStyleMap[y].type;
            var z = {
                listStyleType: y
            };
            x.canvas.execute(function (A) {
                if (e == "cancel") {
                    x.outdentListItem(A)
                } else {
                    x.createListFromSelection(A, e, z)
                }
            })
        },
        outdentListItem: function (e) {
            e.executeUsingCaret(function (x, z) {
                var y = h.Tool.Indent.Helper.findBlocksToIndentFromRange(x, e, z);
                y.each(function (A) {
                    h.Tool.Indent.Operation.OutdentListItem(A, e)
                })
            })
        },
        createListFromSelection: function (y, x, z) {
            var e = this;
            y.executeUsingCaret(function (A, D) {
                var C = e.indentHelper.findBlocksToIndentFromRange(A, y, D);
                var B = e.groupEachList(C);
                B.each(function (F) {
                    var E = new h.Tool.StyledList.ListBuilder(y, x, z);
                    E.createListForNodes(F)
                })
            })
        },
        groupEachList: function (x) {
            var e = this.indentHelper;
            var A = [];
            var z = [];
            var y = j;
            x.each(function (B) {
                var C = e.findCurrentCell(B);
                if (C != y) {
                    if (z.length > 0) {
                        A.push(z);
                        z = []
                    }
                    y = C
                }
                z.push(B)
            });
            if (z.length > 0) {
                A.push(z)
            }
            return A
        },
        menuInitHandler: function () {
            var e = this.canvas.query(function (y) {
                return !!y.findNode("%listhead")
            });
            var x = w.collect(this.menu.elMenu, "li");
            if (e) {
                u.show(x)
            } else {
                u.hide(x)
            }
        },
        startSyncButtonWithStyle: function () {
            var e = this;
            var x = e.canvas;
            var y = e.getDefaultProperty();
            x.observeJob(h.Ev.__CANVAS_PANEL_QUERY_STATUS, function () {
                var A = x.query(function (B) {
                    var C = B.findNode("%listhead");
                    return B.queryStyle(C, "listStyleType")
                });
                A = A || e.getDefaultProperty();
                if (y == A) {
                    return
                }
                var z = e.getButtonClassByValue(A);
                e.button.setText(z);
                y = A
            })
        },
        getDefaultProperty: function () {
            return "decimal"
        },
        getButtonClassByValue: function (x) {
            var e = this.listStyleMap;
            if (e[x]) {
                return e[x].klass
            } else {
                return e[this.getDefaultProperty()].klass
            }
        }
    });
    h.Button.StyledList = h.Class.create({
        $extend: h.Button.Select,
        setText: function (e) {
            this.elIcon.className = "tx-icon " + e
        }
    });
    h.Tool.StyledList.ListBuilder = h.Class.create({
        currentDepth: j,
        prepared: d,
        listElement: j,
        uselessListCandidate: [],
        processor: j,
        initialize: function (x, e, y) {
            this.processor = x;
            this.listTag = e;
            this.listStyle = y
        },
        createListForNodes: function (x) {
            var e = this;
            var y = e.getNodeDepthList(x);
            y.each(function (z) {
                var A = z.node;
                var B = z.depth;
                if (!e.prepared) {
                    e.prepareRootList(A, B)
                }
                e.adjustDepth(A, B);
                e.appendAsListItem(A)
            });
            e.cleanupEmptyList()
        },
        getNodeDepthList: function (x) {
            var e = this;
            return x.map(function (y) {
                return {
                    node: y,
                    depth: e.countDepthOfList(y)
                }
            })
        },
        countDepthOfList: function (y) {
            var x = 0;
            var e = w.parent(y);
            while (e && !w.isBody(e)) {
                if (w.kindOf(e, "ol,ul")) {
                    x++
                } else {
                    if (w.kindOf(e, "th,td")) {
                        break
                    }
                }
                e = w.parent(e)
            }
            return (x || 1)
        },
        prepareRootList: function (y, z) {
            var e = this;
            e.listElement = e.createNewList();
            var x;
            if (y.tagName == "LI") {
                e.uselessListCandidate.push(y.parentNode);
                x = w.divideNode(y.parentNode, w.indexOf(y))
            } else {
                x = y
            }
            w.insertAt(e.listElement, x);
            e.currentDepth = z;
            e.listDepth = z;
            e.prepared = v
        },
        adjustDepth: function (x, y) {
            var e = this;
            while (y != e.currentDepth) {
                if (y > e.currentDepth) {
                    e.increaseDepth()
                } else {
                    e.decreaseDepth()
                }
            }
        },
        increaseDepth: function () {
            var x = this;
            var y = x.listElement;
            x.currentDepth++;
            var e = x.createNewList();
            y.appendChild(e);
            x.listElement = e
        },
        decreaseDepth: function () {
            var e = this;
            var y = e.listElement;
            e.currentDepth--;
            if (e.listDepth > e.currentDepth) {
                e.uselessListCandidate.push(y.parentNode);
                var z = w.divideNode(y.parentNode, w.indexOf(y));
                var x = e.createNewList();
                w.insertAt(x, z);
                x.appendChild(y)
            }
            e.listElement = y.parentNode
        },
        createNewList: function () {
            var e = this;
            var x = e.processor.newNode(e.listTag);
            u.setStyle(x, e.listStyle);
            return x
        },
        cleanupEmptyList: function () {
            this.uselessListCandidate.each(function (e) {
                w.removeListIfEmpty(e)
            })
        },
        wrapWithListItem: function (y) {
            if (y.tagName == "LI") {
                return y
            } else {
                if (y.tagName == "P" || (u.webkit && y.tagName == "DIV")) {
                    var x = this.createListItem();
                    w.applyStyles(y, {
                        marginLeft: j
                    });
                    if (w.getStyleText(y)) {
                        w.wrap(x, y);
                        return x
                    } else {
                        return w.replace(y, x)
                    }
                } else {
                    var e = this.createListItem();
                    e.appendChild(y);
                    return e
                }
            }
        },
        createListItem: function () {
            return this.processor.newNode("li")
        },
        appendAsListItem: function (x) {
            var e = this.wrapWithListItem(x);
            if (w.kindOf(x.parentNode, "%listhead")) {
                this.uselessListCandidate.push(x.parentNode)
            }
            this.listElement.appendChild(e)
        }
    });
    q.addTool("link", {
        wysiwygonly: v,
        sync: d,
        status: v
    });
    k.addMsg({
        "@insertlink.cancel.image": "#iconpath/btn_cancel.gif?v=2",
        "@insertlink.confirm.image": "#iconpath/btn_confirm.gif?v=2",
        "@insertlink.invalid.url": "'HTTP://'\ub85c \uc2dc\uc791\ud558\ub294 URL\uc744 \uc785\ub825\ud574\uc8fc\uc2ed\uc2dc\uc624.",
        "@insertlink.link.alt": "[#{title}]\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.",
        "@insertlink.remove.image": "#iconpath/btn_remove.gif?v=2",
        "@insertlink.title": "\uc120\ud0dd\ub41c \ubd80\ubd84\uc5d0 \uac78\ub9b4 URL\uc8fc\uc18c\ub97c \ub123\uc5b4\uc8fc\uc138\uc694.",
        "@insertlink.onclick.target": "\ud074\ub9ad \uc2dc",
        "@insertlink.target.blank": "\uc0c8 \ucc3d",
        "@insertlink.target.self": "\ud604\uc7ac\ucc3d",
        "@insertlink.class.name": "tx-link"
    });
    h.Tool.Link = h.Class.create({
        $const: {
            __Identity: "link"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var e = this;
            var B = this.canvas;
            var z = function (C) {
                if (B.isWYSIWYG()) {
                    if (C) {
                        B.execute(function (D) {
                            var G = {
                                href: C.link,
                                target: C.target ? C.target : "_blank",
                                className: C.className
                            };
                            var F, E;
                            if (D.findNode("a")) {
                                F = D.findNode("a");
                                w.applyAttributes(F, G)
                            } else {
                                if (D.hasControl()) {
                                    E = D.controls(function () {
                                        return "img"
                                    });
                                    w.wrap(D.create("a", G), E)
                                } else {
                                    if (D.isCollapsed()) {
                                        F = D.create("a", G);
                                        F.innerHTML = C.link;
                                        D.pasteNode(F, d)
                                    } else {
                                        E = D.inlines(function () {
                                            return "%text,img,a,%inline"
                                        });
                                        E.each(function (H) {
                                            if (w.hasUsefulChildren(H, v)) {
                                                if (w.kindOf(H, "a")) {
                                                    w.applyAttributes(H, G)
                                                } else {
                                                    if (w.kindOf(H, "img")) {
                                                        w.wrap(D.create("a", G), [H])
                                                    } else {
                                                        var J = w.getStyleText(H);
                                                        var K = w.collectAll(H, "a");
                                                        K.each(function (L) {
                                                            w.moveChildToParent(L);
                                                            w.remove(L)
                                                        });
                                                        var I = D.create("a", G);
                                                        w.setStyleText(I, J);
                                                        w.replace(H, I)
                                                    }
                                                }
                                            } else {
                                                w.remove(H)
                                            }
                                        })
                                    }
                                }
                            }
                        })
                    } else {
                        B.execute(function (E) {
                            var D = E.findNode("a");
                            if (D) {
                                E.unwrap(D)
                            }
                        })
                    }
                } else {
                    B.execute(function (D) {
                        D.insertTag('<a href="' + C.link + '" target="' + C.target + '" >', "</a>")
                    })
                }
            };
            var y = "";
            var x = function () {
                if (B.isWYSIWYG()) {
                    return B.query(function (C) {
                        var D, E, F, G;
                        D = C.findNode("a");
                        if (D) {
                            E = w.getAttribute(D, "href");
                            if (E) {
                                F = w.getAttribute(D, "target");
                                return {
                                    exist: v,
                                    value: E,
                                    target: F
                                }
                            }
                        } else {
                            G = C.getText();
                            if (/^(?:(?:http|https|ftp):\/\/)?[\w\d\-_\.]+[\w\d\-_]+(?::[0-9]+)?(?:\/.*)?$/i.test(G)) {
                                return {
                                    exist: d,
                                    value: G
                                }
                            }
                        }
                        return {
                            exist: d,
                            value: y
                        }
                    })
                } else {
                    return {
                        exist: d,
                        value: y
                    }
                }
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), new h.Menu.Link(this.menuCfg), z, x);
            var A = function (C) {
                e.button.onMouseDown(C)
            };
            this.bindKeyboard({
                ctrlKey: v,
                keyCode: 75
            }, A)
        }
    });
    h.MarkupTemplate.add("menu.insertlink", ['<div class="tx-menu-inner">', "    <dl>", "        <dt>", "            @insertlink.title", "        </dt>", "        <dd>", '            <input type="text" class="tx-text-input"/>', "        </dd>", '        <dd class="tx-rp">', '            <span class="tx-text tx-first">@insertlink.onclick.target</span>', '            <span><input type="radio" name="tx-insertlink-win" value="_blank"/><span class="tx-text">@insertlink.target.blank</span></span>', '            <span><input type="radio" name="tx-insertlink-win" value="_top"/><span class="tx-text">@insertlink.target.self</span></span>', "        </dd>", '        <dd class="tx-hr">', "            <hr/>", "        </dd>", "        <dd>", '            <img width="32" height="21" src="@insertlink.confirm.image"/>', '            <img width="32" height="21" src="@insertlink.cancel.image"/>', '            <img width="51" height="21" src="@insertlink.remove.image" style="display: none;"/>', "        </dd>", "    </dl>", "</div>"].join(""));
    h.Menu.Link = h.Class.create({
        $extend: h.Menu,
        ongenerated: function () {
            var C = this.elMenu;
            h.MarkupTemplate.get("menu.insertlink").evaluateToDom({}, C);
            var e = w.collectAll(C, ".tx-rp input");
            var x = this.newInput = e[0];
            u.observe(x, "click", function () {
                x.checked = "checked";
                A.checked = ""
            });
            var A = this.currInput = e[1];
            u.observe(A, "click", function () {
                A.checked = "checked";
                x.checked = ""
            });
            var z = function (E) {
                if (!E) {
                    return d
                }
                E = E.trim();
                if (E.length == 0) {
                    return d
                }
                if (!/http[s]?:\/\//.test(E)) {
                    return "http://" + E
                } else {
                    return E
                }
            };
            var B = this.elInput = w.collect(C, "input.tx-text-input");
            u.observe(B, "keydown", function (F) {
                if (F.keyCode == 13) {
                    var G = z(B.value);
                    if (!G) {
                        alert(TXMSG("@insertlink.invalid.url"));
                        u.stop(F);
                        return
                    }
                    var E = x.checked ? x.value : A.value;
                    this.onSelect(F, {
                        link: G,
                        target: E,
                        className: TXMSG("@insertlink.class.name")
                    });
                    u.stop(F)
                }
            }.bindAsEventListener(this));
            var D = w.collectAll(C, "img");
            u.observe(D[0], "click", function (F) {
                var G = z(B.value);
                if (!G) {
                    alert(TXMSG("@insertlink.invalid.url"));
                    u.stop(F);
                    return
                }
                var E = x.checked ? x.value : A.value;
                this.onSelect(F, {
                    link: G,
                    target: E,
                    className: TXMSG("@insertlink.class.name")
                });
                u.stop(F)
            }.bind(this));
            u.observe(D[1], "click", function () {
                this.onCancel()
            }.bindAsEventListener(this));
            var y = u(D[2]);
            u.observe(y, "click", function (E) {
                this.onSelect(E, j)
            }.bindAsEventListener(this));
            this.toggleRemoveBtn = function (E) {
                y.style.display = ((E) ? "" : "none")
            }
        },
        onregenerated: function () {
            var x = this.elInput;
            var e = this.initHandler();
            x.value = e.value;
            if (e.target == "_self" || e.target == "_top") {
                this.currInput.checked = "checked";
                this.newInput.checked = ""
            } else {
                this.newInput.checked = "checked";
                this.currInput.checked = ""
            }
            this.toggleRemoveBtn(e.exist);
            x.focus();
            if (u.msie) {
                setTimeout(function () {
                    try {
                        x.focus();
                        var y = c.selection.createRange();
                        y.move("character", x.value.length);
                        y.select()
                    } catch (z) {}
                }, 100)
            }
        }
    });
    q.addTool("richtextbox", {
        sync: d,
        status: v,
        rows: 4,
        cols: 6,
        borderwidth: 1,
        bordercolor: "#cbcbcb",
        bgcolor: "#ffffff",
        padding: "10px",
        styles: [{
            klass: "",
            image: "#iconpath/textbox/thum_line01.gif?v=2",
            data: "solid"
        }, {
            klass: "",
            image: "#iconpath/textbox/thum_line02.gif?v=2",
            data: "double"
        }, {
            klass: "",
            image: "#iconpath/textbox/thum_line03.gif?v=2",
            data: "dashed"
        }, {
            klass: "",
            image: "#iconpath/textbox/thum_line04.gif?v=2",
            data: "none"
        }],
        options: h.__CONFIG_COMMON.textbox.options,
        thumbs: h.__CONFIG_COMMON.thumbs
    });
    k.addMsg({
        "@richtextbox.add": "\ub354\ud558\uae30",
        "@richtextbox.sub": "\ube7c\uae30",
        "@richtextbox.alert": "1 \uc774\uc0c1 20 \uc774\ud558\uc758 \uc22b\uc790\ub9cc \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
        "@richtextbox.bg.color": "\ubc30\uacbd\uc0c9",
        "@richtextbox.border.color": "\uc120 \uc0c9",
        "@richtextbox.border.style": "\uc120 \uc2a4\ud0c0\uc77c",
        "@richtextbox.border.width": "\uc120 \uad75\uae30"
    });
    h.Tool.RichTextBox = h.Class.create({
        $const: {
            __Identity: "richtextbox"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var z = this.canvas;
            var x = this.toolbar;
            var e = this;
            var y = this.handler = function () {
                var B = e.menu;
                var A = {
                    borderStyle: B.elPreview.style.borderStyle,
                    borderWidth: B.elPreview.style.borderWidth,
                    borderColor: B.elPreview.style.borderColor,
                    backgroundColor: B.elPreview.style.backgroundColor,
                    padding: B.padding
                };
                z.execute(function (D) {
                    var E = D.blocks(function () {
                        return "%wrapper,p,dd,dt,h1,h2,h3,h4,h5,h6,div,caption"
                    });
                    var C = D.wrap(E, "div", {
                        className: "txc-textbox",
                        style: A
                    });
                    x.fireJobs("cmd.textbox.added", C)
                })
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), new h.Menu.RichTextbox(this.menuCfg), y)
        }
    });
    h.MarkupTemplate.add("richtextbox.colorpallete", ['<dd class="#{wrapClass}">', '	<div class="tx-color-box">', '		<a href="javascript:;" class="tx-color-bg-thumb" style="background-color:#{color}"></a>', "	</div>", '	<a href="javascript:;" class="tx-color-arrow-down"></a>', '	<div class="tx-colorpallete" unselectable="on" style="display:none;z-index:15000;"></div>', "</dd>"].join(""));
    h.Menu.RichTextbox = h.Class.create({
        $extend: h.Menu,
        ongenerated: function (Q) {
            var E = this;
            var A = {};
            Q.options.each(function (T) {
                A[T.data] = T.style
            });
            this.borderWidth = Q.borderWidth || 1;
            this.borderColor = Q.borderColor || "#cbcbcb";
            this.bgColor = Q.bgColor || "#ffffff";
            this.padding = Q.padding;
            var P = this.generateBorderStyle.bind(this);
            var H = this.generateBorderWidth.bind(this);
            var K = this.generateBorderColor.bind(this);
            var D = this.generateBgColor.bind(this);
            var C = this.elMenu;
            var O = w.collect(C, "div.tx-menu-header");
            var y = w.collect(O, "div.tx-menu-preview-area");
            this.elPreview = w.collect(y, "div.tx-menu-preview");
            var S = this.elSwitch = w.collect(O, "div.tx-menu-switch");
            var L = w.collect(S, "div.tx-menu-simple");
            var N = w.collect(S, "div.tx-menu-advanced");
            var x = w.collect(C, "div.tx-menu-inner");
            var F = w.collect(C, "div.tx-menu-footer");
            var I = w.collect(F, "img.tx-menu-confirm");
            var e = w.collect(F, "img.tx-menu-cancel");
            (function J() {
                var V = E.simplePalette = tx.div({
                    className: "tx-menu-list"
                });
                x.appendChild(V);
                var T = Q.rows;
                var U = Q.cols;
                V.innerHTML = h.HtmlCreator.createTableMarkup(T, U, Q.options);
                u.observe(V, "click", function (W) {
                    var X = u.element(W);
                    l.fire(X, {
                        span: function () {
                            var Z;
                            if (X.firstChild && X.firstChild.nodeType == 1 && X.firstChild.tagName.toLowerCase() == "img") {
                                Z = X.firstChild.title
                            } else {
                                Z = X.innerText
                            }
                            var Y = A[Z];
                            B(Y)
                        }
                    });
                    u.stop(W)
                })
            })();
            (function z() {
                var T = E.advancedPalette = tx.div({
                    className: "tx-advanced-list"
                });
                x.appendChild(T);
                T.appendChild(tx.dl({
                    style: {
                        height: "24px"
                    }
                }, tx.dt(TXMSG("@richtextbox.border.style")), P()));
                T.appendChild(tx.dl(tx.dt(TXMSG("@richtextbox.border.width")), H()));
                T.appendChild(tx.dl(tx.dt(TXMSG("@richtextbox.border.color")), K()));
                T.appendChild(tx.dl(tx.dt(TXMSG("@richtextbox.bg.color")), D()))
            })();
            var M = function () {
                E.borderWidthInput.value = parseInt(E.elPreview.style.borderWidth);
                E.borderColorInput.style.backgroundColor = E.elPreview.style.borderTopColor;
                E.bgColorInput.style.backgroundColor = E.elPreview.style.backgroundColor
            };
            var B = function (T) {
                E.elPreview.style.border = T.border;
                E.elPreview.style.backgroundColor = T.backgroundColor
            };
            var R = function (T) {
                if (T == "simple") {
                    u.addClassName(L, "tx-selected");
                    u.show(E.simplePalette);
                    u.removeClassName(N, "tx-selected");
                    u.hide(E.advancedPalette)
                } else {
                    if (T == "advanced") {
                        u.removeClassName(L, "tx-selected");
                        u.hide(E.simplePalette);
                        u.addClassName(N, "tx-selected");
                        u.show(E.advancedPalette);
                        M()
                    }
                }
            };
            (function G() {
                u.observe(L, "click", R.bind(E, "simple"));
                u.observe(N, "click", R.bind(E, "advanced"));
                u.observe(I, "click", E.onSelect.bind(E));
                u.observe(e, "click", function () {
                    E.onCancel()
                })
            })();
            R("simple");
            B(A["txc-textbox13"])
        },
        generateBorderStyle: function () {
            var x = this;
            var e = tx.dd({
                className: "tx-border-area"
            });
            u.observe(e, "click", function (y) {
                var z = u.element(y);
                l.fire(z, {
                    img: function (A) {
                        var B = A.getAttribute("data");
                        x.elPreview.style.borderStyle = B;
                        if (B == "double" && x.borderWidthInput.value.toNumber() < 3) {
                            x.elPreview.style.borderWidth = "3px";
                            x.borderWidthInput.value = "3"
                        }
                    }
                });
                u.stop(y)
            });
            e.innerHTML = h.HtmlCreator.createTableMarkup(1, 4, this.config.styles);
            return e
        },
        generateBorderWidth: function () {
            var B = this;
            var x = tx.dd({
                className: "tx-border-area"
            });
            var A = this.borderWidthInput = tx.input({
                type: "text",
                value: this.borderWidth
            });
            x.appendChild(A);
            var y = function (C) {
                if (C > 20) {
                    alert(TXMSG("@richtextbox.alert"));
                    A.value = 20
                } else {
                    if (C < 1) {
                        alert(TXMSG("@richtextbox.alert"));
                        A.value = 1
                    } else {
                        B.elPreview.style.borderWidth = C + "px";
                        A.value = C
                    }
                }
            };
            u.observe(A, "blur", function (C) {
                y(A.value.toNumber(), C)
            });
            u.observe(A, "keydown", function (C) {
                if (C.keyCode == u.KEY_RETURN) {
                    u.stop(C)
                }
            });
            var z = tx.a({
                href: "javascript:;",
                className: "btn_add"
            }, TXMSG("@richtextbox.add"));
            x.appendChild(z);
            u.observe(z, "click", function (C) {
                y(A.value.toNumber() + 1);
                u.stop(C)
            });
            var e = tx.a({
                href: "javascript:;",
                className: "btn_sub"
            }, TXMSG("@richtextbox.sub"));
            x.appendChild(e);
            u.observe(e, "click", function (C) {
                y(A.value.toNumber() - 1);
                u.stop(C)
            });
            return x
        },
        generateBorderColor: function () {
            var D = this;
            var z = h.MarkupTemplate.get("richtextbox.colorpallete").evaluateAsDom({
                color: this.borderColor,
                wrapClass: "tx-color-wrap"
            });
            var A = w.collect(z, "div.tx-colorpallete");
            var e = function (E) {
                D.elPreview.style.borderColor = C.style.backgroundColor = D.borderColor = E
            };
            var y = j;
            var B = function () {
                if (y == j) {
                    y = D.createColorPallete(A, e);
                    y.show()
                } else {
                    if (!u.visible(A)) {
                        y.show()
                    } else {
                        y.hide()
                    }
                }
            };
            this.externalBorderColorToggler = function () {
                if (u.visible(A)) {
                    y.hide()
                }
            };
            var C = this.borderColorInput = w.collect(z, ".tx-color-box a");
            u.observe(C, "click", function (E) {
                D.externalBgColorToggler();
                B();
                u.stop(E)
            });
            var x = w.collect(z, "a.tx-color-arrow-down");
            u.observe(x, "click", function (E) {
                D.externalBgColorToggler();
                B();
                u.stop(E)
            });
            return z
        },
        createColorPallete: function (e, y) {
            var x = new h.Menu.ColorPallete({
                el: e,
                thumbs: this.config.thumbs
            });
            x.setCommand(y);
            return x
        },
        generateBgColor: function () {
            var D = this;
            var y = h.MarkupTemplate.get("richtextbox.colorpallete").evaluateAsDom({
                color: this.bgColor
            });
            var z = w.collect(y, "div.tx-colorpallete");
            var B = function (E) {
                D.elPreview.style.backgroundColor = C.style.backgroundColor = D.bgColor = E
            };
            var x = j;
            var A = function () {
                if (x == j) {
                    x = D.createColorPallete(z, B);
                    x.show()
                } else {
                    if (!u.visible(z)) {
                        x.show()
                    } else {
                        x.hide()
                    }
                }
            };
            this.externalBgColorToggler = function () {
                if (u.visible(z)) {
                    x.hide()
                }
            };
            var C = this.bgColorInput = w.collect(y, ".tx-color-box a");
            u.observe(C, "click", function (E) {
                D.externalBorderColorToggler();
                A();
                u.stop(E)
            });
            var e = w.collect(y, "a.tx-color-arrow-down");
            u.observe(e, "click", function (E) {
                D.externalBorderColorToggler();
                A();
                u.stop(E)
            });
            return y
        }
    });
    q.addTool("quote", {
        sync: d,
        status: v,
        rows: 2,
        cols: 3,
        options: [{
            type: "image",
            data: "tx-quote1",
            image: "#iconpath/quote/citation01.gif?v=2"
        }, {
            type: "image",
            data: "tx-quote2",
            image: "#iconpath/quote/citation02.gif?v=2"
        }, {
            type: "image",
            data: "tx-quote3",
            image: "#iconpath/quote/citation03.gif?v=2"
        }, {
            type: "image",
            data: "tx-quote4",
            image: "#iconpath/quote/citation04.gif?v=2"
        }, {
            type: "image",
            data: "tx-quote5",
            image: "#iconpath/quote/citation05.gif?v=2"
        }, {
            type: "cancel",
            data: "tx-quote6",
            image: "#iconpath/quote/citation06.gif?v=2"
        }]
    }, function (e) {
        var x = q.getTool("quote", e);
        x.options.each(function (y) {
            y.image = q.getIconPath(y.image, "quote")
        })
    });
    h.Tool.Quote = h.Class.create({
        $const: {
            __Identity: "quote"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var e = this;
            var A = this.canvas;
            var B = {};
            x.options.each(function (C) {
                B[C.data] = {
                    type: C.type
                }
            });
            var y = function (E) {
                if (!B[E]) {
                    return
                }
                var D = B[E].type;
                var C = "blockquote";
                var F = {
                    className: E
                };
                if (A.isWYSIWYG()) {
                    A.execute(function (H) {
                        var G = H.findNode(C);
                        if (G) {
                            if (D == "cancel") {
                                H.unwrap(G)
                            } else {
                                H.apply(G, F)
                            }
                        } else {
                            if (D != "cancel") {
                                var I = H.blocks(function () {
                                    return "%wrapper,%paragraph"
                                });
                                I = I.findAll(function (J) {
                                    if (w.kindOf(J, "%innergroup")) {
                                        H.wrap(w.children(J), C, F);
                                        return d
                                    } else {
                                        return v
                                    }
                                });
                                H.wrap(I, C, F)
                            }
                        }
                    })
                } else {
                    A.execute(function (G) {
                        G.insertTag("<blockquote>", "</blockquote>")
                    })
                }
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), new h.Menu.List(this.menuCfg), y);
            var z = function (C) {
                e.button.onMouseDown(C)
            };
            this.bindKeyboard({
                ctrlKey: v,
                keyCode: 81
            }, z)
        }
    });
    q.addTool("table", {
        borderStyle: "1px solid #ccc",
        sync: d,
        status: v
    }, function (x) {
        var e = q.get("canvas", x).styles.backgroundColor;
        if (e != "transparent") {
            q.getTool("table", x).bgcolor = e
        }
    });
    k.addMsg({
        "@table.alert": "1 \uc774\uc0c1 99 \uc774\ud558\uc758 \uc22b\uc790\ub9cc \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4."
    });
    h.Tool.Table = h.Class.create({
        $const: {
            __Identity: "table",
            __DEFAULT_TABLE_PROPERTY: {
                cellSpacing: 0,
                cellPadding: 1,
                border: 0,
                style: {
                    border: "none",
                    borderCollapse: "collapse"
                }
            },
            __DEFAULT_TABLE_PROPERTY_STR: 'cellspacing="0" cellpadding="0" border="0"',
            __DEFAULT_TABLE_STYLE: "border:none;border-collapse:collapse;",
            __DEFAULT_TABLE_CLASS: "txc-table"
        },
        $extend: h.Tool,
        oninitialized: function (x) {
            var e = this;
            this.tableSize = {
                row: 0,
                col: 0
            };
            var z = this.canvas;
            var y = this.handler = function (B) {
                var A = e.makeEmptyTable(B.row, B.col);
                z.execute(function (D) {
                    var C = D.pasteContent(A, v);
                    D.bookmarkInto(C);
                    if (e.toolbar.tools.advanced) {
                        e.toolbar.tools.advanced.forceOpen()
                    }
                })
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), new h.Menu.Table(this.menuCfg), y)
        },
        makeEmptyTable: function (F, e) {
            var E = [];
            var C = this._createDefaultTableWidth();
            E.push('<table class="' + h.Tool.Table.__DEFAULT_TABLE_CLASS + '" width="' + C + '" ');
            E.push(h.Tool.Table.__DEFAULT_TABLE_PROPERTY_STR);
            E.push(' style="');
            E.push(h.Tool.Table.__DEFAULT_TABLE_STYLE);
            E.push(";font-family:");
            E.push(this.editor.canvas.getStyle("fontFamily"));
            E.push(";font-size:");
            E.push(this.editor.canvas.getStyle("fontSize"));
            E.push('"><tbody>');
            var D = this.config.borderStyle;
            var B = parseInt(C / e);
            var x = ["border-bottom:", D, ";border-right:", D, ";"].join("");
            for (var A = 0; A < F; A++) {
                E.push("<tr>");
                for (var z = 0; z < e; z++) {
                    var y = [x];
                    E.push('<td style="width:');
                    E.push(B);
                    E.push(";");
                    E.push("height:", 24, ";");
                    E.push(x);
                    if (A == 0) {
                        E.push("border-top:", D, ";")
                    }
                    if (z == 0) {
                        E.push("border-left:", D, ";")
                    }
                    E.push(';">&nbsp;</td>\n')
                }
                E.push("</tr>\n")
            }
            E.push("</tbody></table>");
            return E.join("")
        },
        _createDefaultTableWidth: function () {
            var e = this.config.tableWidth;
            if (!e) {
                var x = this.canvas.getSizeConfig().contentPadding || 8;
                e = (this.canvas.getSizeConfig().contentWidth || 600) - x * 2 - 20
            }
            return e
        }
    });
    h.Tool.Table.TemplateWizard = h.Class.create({
        initialize: function () {
            this.templateList = (typeof getTableTemplateList == "function") ? getTableTemplateList() : [{
                klass: "ex1",
                common: {
                    backgroundColor: "transparent",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "1px solid #d9d9d9",
                    borderBottom: "1px solid #d9d9d9"
                },
                firstRow: {
                    borderTop: "1px solid #000"
                },
                firstCol: {
                    borderLeft: "1px solid #000"
                },
                lastCol: {
                    borderRight: "1px solid #000"
                },
                lastRow: {
                    borderBottom: "1px solid #000"
                },
                evenRow: {},
                oddRow: {}
            }];
            this.currentTemplate = j
        },
        applyStyle: function (A, z) {
            if (isNaN(z)) {
                return
            }
            var y = new h.Tool.Table.TableCellMatrixer(A);
            var B = y.getTdMatrix();
            this.currentTemplate = this.templateList[z];
            for (var x = 0; x < B.length; x++) {
                for (var e = 0; e < B[x].length; e++) {
                    this.setCellStyle(B[x][e], {
                        isEvenRow: (x % 2) == 1,
                        isFirstRow: x == 0,
                        isLastRow: x == B.length - 1,
                        isFirstCol: e == 0,
                        isLastCol: (e == B[x].length - 1)
                    })
                }
            }
        },
        setCellStyle: function (x, e) {
            var y = this.currentTemplate;
            var z = Object.extend({}, y.common);
            Object.extend(z, (e.isEvenRow) ? y.evenRow : y.oddRow);
            Object.extend(z, (e.isFirstRow) ? y.firstRow : (e.isLastRow) ? y.lastRow : {});
            Object.extend(z, (e.isLastCol) ? y.lastCol : {});
            Object.extend(z, (e.isFirstCol) ? y.firstCol : {});
            txlib.setStyle(x, z)
        },
        getTemplateList: function () {
            return this.templateList
        }
    });
    h.Tool.Table.TableCellMatrixer = h.Class.create({
        initialize: function (z) {
            this.rowSize = this.initRowSize(z);
            this.colSize = this.initColSize(z);
            var y = w.first(z, "tbody") || z;
            this.tdMatrix = this.createTdMatrix(y);
            for (var x = 0; x < this.tdMatrix.length; x++) {
                for (var e = 0; e < this.tdMatrix[x].length; e++) {
                    var A = this.tdMatrix[x][e];
                    if (A.cols > 1) {
                        A.cols--;
                        this.tdMatrix[x].splice(e + 1, 0, A)
                    }
                }
            }
            for (var x = 0; x < this.tdMatrix.length; x++) {
                for (var e = 0; e < this.tdMatrix[x].length; e++) {
                    var A = this.tdMatrix[x][e];
                    if (A.rows > 1) {
                        A.rows--;
                        this.tdMatrix[x + 1].splice(e, 0, A)
                    }
                }
            }
        },
        createTdMatrix: function (x) {
            var z = [];
            var A = w.children(x, "tr");
            for (var y = 0, e = A.length; y < e; y++) {
                z.push(this.createTdArray(A[y]))
            }
            return z
        },
        createTdArray: function (A) {
            var z = [];
            var y = w.children(A, "td");
            for (var x = 0, e = y.length; x < e; x++) {
                z.push(this.decorateSingleTd(y[x]))
            }
            return z
        },
        decorateSingleTd: function (y) {
            var x = parseInt(y.getAttribute("colSpan") || 1);
            var e = parseInt(y.getAttribute("rowSpan") || 1);
            y.cols = x;
            y.rows = (e - 1) * x + 1;
            return y
        },
        initRowSize: function (e) {
            return e.rows.length
        },
        initColSize: function (x) {
            var e = 0;
            var y = w.children(w.collect(x, "tr"), "td");
            y.each(function (z) {
                e += parseInt(z.getAttribute("colSpan") || 1)
            });
            return e
        },
        getRowSize: function () {
            return this.rowSize
        },
        getColSize: function () {
            return this.colSize
        },
        getTdMatrix: function () {
            return this.tdMatrix
        }
    });
    k.addMsg({
        "@table.title.insert": "\ud45c\uc0bd\uc785 &nbsp;",
        "@table.title.setDirectly": "\ud45c \uc9c1\uc811\uc124\uc815",
        "@table.title.row": "\uc5f4 \uac1c\uc218",
        "@table.title.col": "\ud589 \uac1c\uc218"
    });
    h.MarkupTemplate.add("menu.table.direct", ["<div>@table.title.setDirectly</div>", '<div class="tx-table-input-area">', '<div class="tx-field tx-col-field">@table.title.row<input type="text" value="1"><a class="tx-btn tx-btn-add" href="javascript:;">@table.title.row+</a><a class="tx-btn tx-btn-sub" href="javascript:;">@table.title.row-</a></div>', '<div class="tx-field tx-row-field">@table.title.col<input type="text" value="1"><a class="tx-btn tx-btn-add" href="javascript:;">@table.title.col+</a><a class="tx-btn tx-btn-sub" href="javascript:;">@table.title.col-</a></div>', "</div>"].join(""));
    h.Menu.Table = h.Class.create({
        $const: {
            MAX_ROW: 99,
            MAX_COL: 99
        },
        $extend: h.Menu,
        ongenerated: function () {
            this.rowSize = 1;
            this.colSize = 1;
            this.elInnerPreview = w.collect(this.elMenu, "div.tx-menu-inner .tx-menu-preview");
            this.dynamicSizer = this.generateDynamicSizer(this.elInnerPreview);
            this.elInnerRowCol = w.collect(this.elMenu, "div.tx-menu-inner .tx-menu-rowcol");
            this.generateTextSizer(this.elInnerRowCol);
            this.elButtonArea = w.collect(this.elMenu, "div.tx-menu-inner .tx-menu-enter");
            this.generateButtonArea(this.elButtonArea)
        },
        onregenerated: function () {
            this.showDynamicSizer()
        },
        showDynamicSizer: function () {
            this.dynamicSizer.clear();
            u.show(this.elInnerPreview);
            u.hide(this.elInnerRowCol);
            u.hide(this.elButtonArea)
        },
        showTextSizer: function () {
            u.hide(this.elInnerPreview);
            u.show(this.elInnerRowCol);
            u.show(this.elButtonArea)
        },
        generateDynamicSizer: function (z) {
            var x = this;
            var C = tx.span();
            var A = tx.div({
                className: "tx-dynamic-sizer-display"
            }, TXMSG("@table.title.insert"), C);
            z.appendChild(A);
            var B = new h.DynamicSizer({
                el: z,
                clickHandler: this.onSelect.bind(this),
                moveHandler: function (E, D) {
                    C.innerHTML = E + "x" + D
                }
            });
            var e = tx.a({
                href: "javascript:;"
            }, TXMSG("@table.title.setDirectly"));
            u.observe(e, "click", function (D) {
                x.showTextSizer();
                u.stop(D)
            });
            var y = tx.div({
                className: "tx-more-button"
            });
            y.appendChild(e);
            z.appendChild(y);
            return B
        },
        generateTextSizer: function (x) {
            var e = this;
            h.MarkupTemplate.get("menu.table.direct").evaluateToDom({}, x);
            var z = {
                calculate: function (D, B, C) {
                    D = parseInt(D);
                    if (D + C > B || D + C < 1) {
                        alert(TXMSG("@table.alert"));
                        return D
                    } else {
                        return D + C
                    }
                },
                getValidValue: function (D, C, B) {
                    if (D < 0 || D > B) {
                        alert(TXMSG("@table.alert"));
                        return C
                    } else {
                        return D
                    }
                }
            };
            var y = w.collect(x, "div.tx-col-field input");
            u.observe(y, "blur", function () {
                y.value = e.colSize = z.getValidValue(y.value, e.colSize, h.Menu.Table.MAX_COL)
            });
            u.observe(w.collect(x, "div.tx-col-field a.tx-btn-add"), "click", function () {
                y.value = e.colSize = z.calculate(e.colSize, h.Menu.Table.MAX_COL, 1);
                return d
            });
            u.observe(w.collect(x, "div.tx-col-field a.tx-btn-sub"), "click", function () {
                y.value = e.colSize = z.calculate(e.colSize, h.Menu.Table.MAX_COL, -1);
                return d
            });
            var A = w.collect(x, "div.tx-row-field input");
            u.observe(A, "blur", function () {
                A.value = e.rowSize = z.getValidValue(A.value, e.rowSize, h.Menu.Table.MAX_ROW)
            });
            u.observe(w.collect(x, "div.tx-row-field a.tx-btn-add"), "click", function () {
                A.value = e.rowSize = z.calculate(e.rowSize, h.Menu.Table.MAX_ROW, 1);
                return d
            });
            u.observe(w.collect(x, "div.tx-row-field a.tx-btn-sub"), "click", function () {
                A.value = e.rowSize = z.calculate(e.rowSize, h.Menu.Table.MAX_ROW, -1);
                return d
            })
        },
        generateButtonArea: function (y) {
            var e = this;
            var z = tx.div();
            var A = tx.a({
                href: "javascript:;",
                className: "tx-btn-confirm"
            }, "\ud655\uc778");
            var x = tx.a({
                href: "javascript:;",
                className: "tx-btn-cancel"
            }, "\ucde8\uc18c");
            u.observe(A, "click", function (B) {
                e.onSelect(B, {
                    row: e.rowSize,
                    col: e.colSize
                })
            });
            u.observe(x, "click", function () {
                this.onCancel();
                return d
            }.bindAsEventListener(this));
            z.appendChild(A);
            z.appendChild(x);
            y.appendChild(z)
        }
    });
    (function () {
        k.addMsg({
            "@emoticon.subtitle.person": "\uc0ac\ub78c",
            "@emoticon.subtitle.animal": "\ub3d9\uc2dd\ubb3c",
            "@emoticon.subtitle.thing": "\uc0ac\ubb3c",
            "@emoticon.subtitle.etc": "\uae30\ud0c0"
        });
        var e = function (A, z) {
            var B = [];
            for (var y = 1; y <= z; y++) {
                B.push("#decopath/emoticon/" + A + "_" + x(y) + ".gif?v=2")
            }
            return B
        };
        var x = function (y) {
            return (y < 10) ? "0" + y : String(y)
        };
        q.addTool("emoticon", {
            sync: d,
            status: v,
            rows: 5,
            cols: 7,
            matrices: [{
                title: TXMSG("@emoticon.subtitle.person"),
                klass: "tx-menu-matrix-per",
                options: e("per", 29)
            }, {
                title: TXMSG("@emoticon.subtitle.animal"),
                klass: "tx-menu-matrix-ani",
                options: e("ani", 28)
            }, {
                title: TXMSG("@emoticon.subtitle.thing"),
                klass: "tx-menu-matrix-things",
                options: e("things", 35),
                defaultshow: v
            }, {
                title: TXMSG("@emoticon.subtitle.etc"),
                klass: "tx-menu-matrix-etc",
                options: e("etc", 29)
            }],
            asyncUrl: "trex/tool/async/emoticon.js"
        }, function (y) {
            var z = q.getTool("emoticon", y);
            z.matrices.each(function (B) {
                for (var C = 0, A = B.options.length; C < A; C++) {
                    B.options[C] = q.getDecoPath(B.options[C])
                }
            })
        });
        h.Tool.Emoticon = h.Class.create({
            $const: {
                __Identity: "emoticon"
            },
            $extend: h.AsyncTool,
            oninitialized: function () {
                this.weave.bind(this)(new h.Button(this.buttonCfg), j, this.onLoadModule)
            }
        })
    })();
    q.addTool("redo", {
        sync: d,
        status: d
    });
    h.Tool.ReDo = h.Class.create({
        $const: {
            __Identity: "redo"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var x = this.canvas;
            var e = function () {
                x.getProcessor().blur();
                x.focus();
                setTimeout(function () {
                    x.fireJobs("canvas.panel.redo")
                }, 0)
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), j, e);
            this.bindKeyboard({
                ctrlKey: v,
                keyCode: 89
            }, function () {
                x.fireJobs("canvas.panel.redo");
                x.triggerQueryStatus()
            })
        }
    });
    q.addTool("undo", {
        sync: d,
        status: d
    });
    h.Tool.UnDo = h.Class.create({
        $const: {
            __Identity: "undo"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var x = this.canvas;
            var e = function () {
                x.getProcessor().blur();
                x.focus();
                setTimeout(function () {
                    x.fireJobs("canvas.panel.undo")
                }, 20)
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), j, e);
            this.bindKeyboard({
                ctrlKey: v,
                keyCode: 90
            }, function () {
                x.fireJobs("canvas.panel.undo");
                x.triggerQueryStatus()
            })
        }
    });
    q.addTool("horizontalrule", {
        wysiwygonly: v,
        sync: d,
        status: v,
        top: j,
        left: j,
        options: [{
            data: "tx-hr-border-1",
            image: "#iconpath/horizontalrule/line01.gif?v=2",
            html: '<hr style="display:block; border: black 0 none; border-top: black 1px solid; height: 1px"/>'
        }, {
            data: "tx-hr-border-2",
            image: "#iconpath/horizontalrule/line02.gif?v=2",
            html: '<hr style="display:block; border: black 0 none; border-top: black 1px solid; border-bottom: black 3px solid; height: 7px"/>'
        }, {
            data: "tx-hr-border-3",
            image: "#iconpath/horizontalrule/line04.gif?v=2",
            html: '<hr style="display:block; border: black 0 none; border-top: black 1px dotted; height: 1px"/>'
        }, {
            data: "tx-hr-image-1",
            image: "#iconpath/horizontalrule/line03.gif?v=2",
            html: '<div style="background: url(#decopath/horizontalrule/line03.gif?v=2) repeat-x scroll left;  width: 99%; height: 15px"><hr style="border: black 0 none; left: -9999px; position: relative; top: -9999px"></div>'
        }, {
            data: "tx-hr-image-2",
            image: "#iconpath/horizontalrule/line05.gif?v=2",
            html: '<div style="background: url(#decopath/horizontalrule/line05.gif?v=2) repeat-x scroll left;  width: 99%; height: 15px"><hr style="border: black 0 none; left: -9999px; position: relative; top: -9999px"></div>'
        }, {
            data: "tx-hr-image-3",
            image: "#iconpath/horizontalrule/line06.gif?v=2",
            html: '<div style="background: url(#decopath/horizontalrule/line06.gif?v=2) repeat-x scroll left;  width: 99%; height: 15px"><hr style="border: black 0 none; left: -9999px; position: relative; top: -9999px"></div>'
        }, {
            data: "tx-hr-image-4",
            image: "#iconpath/horizontalrule/line07.gif?v=2",
            html: '<div style="background: url(#decopath/horizontalrule/line08.gif?v=2) repeat-x scroll left;  width: 99%; height: 15px"><hr style="border: black 0 none; left: -9999px; position: relative; top: -9999px"></div>'
        }]
    }, function (e) {
        var x = q.getTool("horizontalrule", e);
        x.options.each(function (y) {
            y.image = q.getIconPath(y.image);
            if (y.html) {
                y.html = q.getDecoPath(y.html)
            }
        })
    });
    h.Tool.HorizontalRule = h.Class.create({
        $const: {
            __Identity: "horizontalrule"
        },
        $extend: h.Tool,
        oninitialized: function (e) {
            var y = this.canvas;
            var z = {};
            e.options.each(function (A) {
                z[A.data] = {
                    html: A.html
                }
            });
            var x = function (B) {
                if (!z[B]) {
                    return
                }
                var A = z[B];
                if (y.isWYSIWYG()) {
                    y.execute(function (C) {
                        C.pasteContent(A.html, v)
                    })
                } else {
                    y.execute(function (C) {
                        C.insertTag("", A.html)
                    })
                }
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), new h.Menu.List(this.menuCfg), x)
        }
    });
    (function () {
        k.addMsg({
            "@specialchar.subtitle1": "\uc77c\ubc18\uae30\ud638",
            "@specialchar.subtitle2": "\uc218\ud559\ubd80\ud638, \ud1b5\ud654\ub2e8\uc704",
            "@specialchar.subtitle3": "\uc6d0 \uae30\ud638, \uad04\ud638",
            "@specialchar.subtitle4": "\uc77c\ubcf8\uc5b4",
            "@specialchar.subtitle5": "\ub85c\ub9c8\uc790, \uadf8\ub9ac\uc2a4"
        });
        q.addTool("specialchar", {
            sync: d,
            status: v,
            rows: 9,
            cols: 20,
            top: j,
            left: j,
            matrices: [{
                title: TXMSG("@specialchar.subtitle1"),
                options: ["\uff03", "\uff06", "\uff0a", "\uff20", "\xa7", "\u203b", "\u2606", "\u2605", "\u25cb", "\u25cf", "\u25ce", "\u25c7", "\u25c6", "\u25a1", "\u25a0", "\u25b3", "\u25b2", "\u25bd", "\u25bc", "\u2192", "\u2190", "\u2191", "\u2193", "\u2194", "\u3013", "\u25c1", "\u25c0", "\u25b7", "\u25b6", "\u2664", "\u2660", "\u2661", "\u2665", "\u2667", "\u2663", "\u2299", "\u25c8", "\u25a3", "\u25d0", "\u25d1", "\u2592", "\u25a4", "\u25a5", "\u25a8", "\u25a7", "\u25a6", "\u25a9", "\u2668", "\u260f", "\u260e", "\u261c", "\u261e", "\xb6", "\u2020", "\u2021", "\u2195", "\u2197", "\u2199", "\u2196", "\u2198", "\u266d", "\u2669", "\u266a", "\u266c", "\u327f", "\u321c", "\u2116", "\u33c7", "\u2122", "\u33c2", "\u33d8", "\u2121", "\xae", "\xaa", "\xba", "\uff02", "\uff08", "\uff09", "\uff3b", "\uff3d", "\uff5b", "\uff5d", "\u2018", "\u2019", "\u201c", "\u201d", "\u3014", "\u3015", "\u3008", "\u3009", "\u300a", "\u300b", "\u300c", "\u300d", "\u300e", "\u300f", "\u3010", "\u3011", "\uff01", "\uff07", "\uff0c", "\uff0e", "\uff0f", "\uff1a", "\uff1b", "\uff1f", "\uff3e", "\uff3f", "\uff40", "\uff5c", "\uffe3", "\u3001", "\u3002", "\xb7", "\u2025", "\u2026", "\xa8", "\u3003", "\u2015", "\u2225", "\uff3c", "\u223c", "\xb4", "\uff5e", "\u02c7", "\u02d8", "\u02dd", "\u02da", "\u02d9", "\xb8", "\u02db", "\xa1", "\xbf", "\u02d0"]
            }, {
                title: TXMSG("@specialchar.subtitle2"),
                options: ["\uff0b", "\uff0d", "\uff1c", "\uff1d", "\uff1e", "\xb1", "\xd7", "\xf7", "\u2260", "\u2264", "\u2265", "\u221e", "\u2234", "\u2642", "\u2640", "\u2220", "\u22a5", "\u2312", "\u2202", "\u2207", "\u2261", "\u2252", "\u226a", "\u226b", "\u221a", "\u223d", "\u221d", "\u2235", "\u222b", "\u222c", "\u2208", "\u220b", "\u2286", "\u2287", "\u2282", "\u2283", "\u222a", "\u2229", "\u2227", "\u2228", "\uffe2", "\u21d2", "\u21d4", "\u2200", "\u2203", "\u222e", "\u2211", "\u220f", "\uff04", "\uff05", "\uffe6", "\uff26", "\u2032", "\u2033", "\u2103", "\u212b", "\uffe0", "\uffe1", "\uffe5", "\xa4", "\u2109", "\u2030", "?", "\u3395", "\u3396", "\u3397", "\u2113", "\u3398", "\u33c4", "\u33a3", "\u33a4", "\u33a5", "\u33a5", "\u33a6", "\u3399", "\u339a", "\u339b", "\u339c", "\u339d", "\u339e", "\u339f", "\u33a0", "\u33a1", "\u33a2", "\u33ca", "\u338d", "\u338e", "\u338f", "\u33cf", "\u3388", "\u3389", "\u33c8", "\u33a7", "\u33a8", "\u33b0", "\u33b1", "\u33b2", "\u33b3", "\u33b4", "\u33b5", "\u33b6", "\u33b7", "\u33b8", "\u33b9", "\u3380", "\u3381", "\u3382", "\u3383", "\u3384", "\u33ba", "\u33bb", "\u33bc", "\u33bd", "\u33be", "\u33bf", "\u3390", "\u3391", "\u3392", "\u3393", "\u3394", "\u2126", "\u33c0", "\u33c1", "\u338a", "\u338b", "\u338c", "\u33d6", "\u33c5", "\u33ad", "\u33ae", "\u33af", "\u33db", "\u33a9", "\u33aa", "\u33ab", "\u33ac", "\u33dd", "\u33d0", "\u33d3", "\u33c3", "\u33c9", "\u33dc", "\u33c6"]
            }, {
                title: TXMSG("@specialchar.subtitle3"),
                options: ["\u3260", "\u3261", "\u3262", "\u3263", "\u3264", "\u3265", "\u3266", "\u3267", "\u3268", "\u3269", "\u326a", "\u326b", "\u326c", "\u326d", "\u326e", "\u326f", "\u3270", "\u3271", "\u3272", "\u3273", "\u3274", "\u3275", "\u3276", "\u3277", "\u3278", "\u3279", "\u327a", "\u327b", "\u3200", "\u3201", "\u3202", "\u3203", "\u3204", "\u3205", "\u3206", "\u3207", "\u3208", "\u3209", "\u320a", "\u320b", "\u320c", "\u320d", "\u320e", "\u320f", "\u3210", "\u3211", "\u3212", "\u3213", "\u3214", "\u3215", "\u3216", "\u3217", "\u3218", "\u3219", "\u321a", "\u321b", "\u24d0", "\u24d1", "\u24d2", "\u24d3", "\u24d4", "\u24d5", "\u24d6", "\u24d7", "\u24d8", "\u24d9", "\u24da", "\u24db", "\u24dc", "\u24dd", "\u24de", "\u24df", "\u24e0", "\u24e1", "\u24e2", "\u24e3", "\u24e4", "\u24e5", "\u24e6", "\u24e7", "\u24e8", "\u24e9", "\u2460", "\u2461", "\u2462", "\u2463", "\u2464", "\u2465", "\u2466", "\u2467", "\u2468", "\u2469", "\u246a", "\u246b", "\u246c", "\u246d", "\u246e", "\u249c", "\u249d", "\u249e", "\u249f", "\u24a0", "\u24a1", "\u24a2", "\u24a3", "\u24a4", "\u24a5", "\u24a6", "\u24a7", "\u24a8", "\u24a9", "\u24aa", "\u24ab", "\u24ac", "\u24ad", "\u24ae", "\u24af", "\u24b0", "\u24b1", "\u24b2", "\u24b3", "\u24b4", "\u24b5", "\u2474", "\u2475", "\u2476", "\u2477", "\u2478", "\u2479", "\u247a", "\u247b", "\u247c", "\u247d", "\u247e", "\u247f", "\u2480", "\u2481", "\u2482"]
            }, {
                title: TXMSG("@specialchar.subtitle4"),
                options: ["\u3041", "\u3042", "\u3043", "\u3044", "\u3045", "\u3046", "\u3047", "\u3048", "\u3049", "\u304a", "\u304b", "\u304c", "\u304d", "\u304e", "\u304f", "\u3050", "\u3051", "\u3049", "\u3053", "\u3054", "\u3055", "\u3056", "\u3057", "\u3058", "\u3059", "\u305a", "\u305b", "\u305c", "\u305d", "\u305e", "\u305f", "\u3060", "\u3061", "\u3062", "\u3063", "\u3064", "\u3065", "\u3066", "\u3067", "\u3068", "\u3069", "\u306a", "\u306b", "\u306c", "\u306d", "\u306e", "\u306f", "\u3070", "\u3071", "\u3072", "\u3073", "\u3074", "\u3075", "\u3076", "\u3077", "\u3078", "\u3079", "\u307a", "\u307b", "\u307c", "\u307d", "\u307e", "\u307f", "\u3080", "\u3081", "\u3082", "\u3083", "\u3084", "\u3085", "\u3086", "\u3087", "\u3088", "\u3089", "\u308a", "\u308b", "\u308c", "\u308d", "\u308e", "\u308f", "\u3090", "\u3091", "\u3092", "\u3093", "\u30a1", "\u30a2", "\u30a3", "\u30a4", "\u30a5", "\u30a6", "\u30a7", "\u30a8", "\u30a9", "\u30aa", "\u30ab", "\u30ac", "\u30ad", "\u30ae", "\u30af", "\u30b0", "\u30b1", "\u30b2", "\u30b3", "\u30b4", "\u30b5", "\u30b6", "\u30b7", "\u30b8", "\u30b9", "\u30ba", "\u30bb", "\u30bc", "\u30bd", "\u30be", "\u30bf", "\u30c0", "\u30c1", "\u30c2", "\u30c3", "\u30c4", "\u30c5", "\u30c6", "\u30c7", "\u30c8", "\u30c9", "\u30ca", "\u30cb", "\u30cc", "\u30cd", "\u30ce", "\u30cf", "\u30d0", "\u30d1", "\u30d2", "\u30d3", "\u30d4", "\u30d5", "\u30d6", "\u30d7", "\u30d8", "\u30d9", "\u30da", "\u30db", "\u30dc", "\u30dd", "\u30de", "\u30df", "\u30e0", "\u30e1", "\u30e2", "\u30e3", "\u30e4", "\u30e5", "\u30e6", "\u30e7", "\u30e8", "\u30e9", "\u30ea", "\u30eb", "\u30ec", "\u30ed", "\u30ee", "\u30ef", "\u30f0", "\u30f1", "\u30f2", "\u30f3", "\u30f4", "\u30f5", "\u30f6"]
            }, {
                title: TXMSG("@specialchar.subtitle5"),
                options: ["\uff10", "\uff11", "\uff12", "\uff13", "\uff14", "\uff15", "\uff16", "\uff17", "\uff18", "\uff19", "\u2170", "\u2171", "\u2172", "\u2173", "\u2174", "\u2175", "\u2176", "\u2177", "\u2178", "\u2179", "\u2160", "\u2161", "\u2162", "\u2163", "\u2164", "\u2165", "\u2166", "\u2167", "\u2168", "\u2169", "\u0391", "\u0392", "\u0393", "\u0394", "\u0395", "\u0396", "\u0397", "\u0398", "\u0399", "\u039a", "\u039b", "\u039c", "\u039d", "\u039e", "\u039f", "\u03a0", "\u03a1", "\u03a3", "\u03a4", "\u03a5", "\u03a6", "\u03a7", "\u03a8", "\u03a9", "\u03b1", "\u03b2", "\u03b3", "\u03b4", "\u03b5", "\u03b6", "\u03b7", "\u03b8", "\u03b9\u03ba", "\u03bb", "\u03bc", "\u03bd", "\u03be", "\u03bf", "\u03c0", "\u03c1", "\u03c3", "\u03c4", "\u03c5", "\u03c6", "\u03c7", "\u03c8", "\u03c9"]
            }],
            asyncUrl: "trex/tool/async/specialchar.js"
        });
        h.Tool.SpecialChar = h.Class.create({
            $const: {
                __Identity: "specialchar"
            },
            $extend: h.AsyncTool,
            oninitialized: function (e) {
                this.config = e;
                this.weave.bind(this)(new h.Button(this.buttonCfg), j, this.onLoadModule)
            }
        })
    })();
    q.addTool("dictionary", {
        url: "http://engdic.daum.net/dicen/small_view_top.do",
        sync: d,
        status: d
    });
    h.Tool.Dictionary = h.Class.create({
        $const: {
            __Identity: "dictionary"
        },
        $extend: h.Tool,
        oninitialized: function (e) {
            var y = this.canvas;
            var x = function () {
                var B = y.query(function (C) {
                    return encodeURI(C.getText())
                });
                var z = (B.length > 0) ? "http://engdic.daum.net/dicen/small_search.do" : e.url;
                var A = i.open(z + "?q=" + B, "dicWin", "width=410,height=550,scrollbars=yes");
                A.focus()
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), j, x)
        }
    });
    (function () {
        q.addTool("background", {
            wysiwygonly: v,
            sync: d,
            status: v,
            thumbs: h.__CONFIG_COMMON.thumbs
        });
        var e;
        h.Tool.Background = h.Class.create({
            $const: {
                __Identity: "background"
            },
            $extend: h.Tool,
            oninitialized: function () {
                this.weave(new h.Button(this.buttonCfg), new h.Menu.ColorPallete(this.menuCfg), this.handler)
            },
            handler: function (y) {
                var x = this;
                var z = x.canvas;
                z.fireJobs("canvas.apply.backgroundcolor", y);
                z.history.saveHistory({
                    backgroundColor: e,
                    backgroundImage: z.getStyle("backgroundImage")
                }, {
                    backgroundColor: y,
                    backgroundImage: z.getStyle("backgroundImage")
                }, function (A) {
                    x._restoreColor(A)
                });
                z.addStyle({
                    backgroundColor: y,
                    backgroundImage: ""
                });
                e = y;
                z.getConfig().hasUserBgcolor = v
            },
            _restoreColor: function (y) {
                var x = this.canvas;
                x.addStyle({
                    backgroundColor: y.backgroundColor
                });
                if (y.backgroundImage) {
                    x.addStyle({
                        backgroundImage: y.backgroundImage
                    })
                }
                e = y.backgroundColor
            }
        });
        h.install("canvas.getBgColor & canvas.setBgColor & editor.getContentWithBg", function (A, B, C, z, y) {
            e = y.canvas.styles.backgroundColor;
            z.getBgColor = function () {
                var D = e || z.getPanel("html").getStyle("backgroundColor");
                if (D) {
                    return h.Color.getHexColor(D)
                } else {
                    return ""
                }
            };
            z.setBgColor = function (D) {
                z.getPanel("html").addStyle({
                    backgroundColor: D || "transparent"
                })
            };
            A.getContentWithBg = function () {
                var D = z.getBgColor().toLowerCase();
                if (D == "transparent") {
                    return A.getContent()
                } else {
                    return ['<table class="txc-wrapper" border="0" cellspacing="0" cellpadding="0"><tr>', '<td bgcolor="', D, '">', A.getContent(), "</td>", "</tr></table>"].join("")
                }
            };
            var x = z.initContent.bind(z);
            z.initContent = function (E) {
                if (E.search(/<table[^>]*txc-wrapper[^>]*>/i) > -1) {
                    var D;
                    E = E.replace(/<table[^>]*txc-wrapper[^>]*><tr><td([^>]*)>([\s\S]*?)<\/td><\/tr><\/table>/i, function (H, F, G) {
                        D = F.replace(/\sbgcolor="([#\w]*)"/, "$1");
                        return G
                    });
                    z.setBgColor(D)
                }
                x(E)
            };
            z.history.initHistory({
                backgroundColor: y.canvas.styles.backgroundColor,
                backgroundImage: y.canvas.styles.backgroundImage || "none"
            });
            z.reserveJob(h.Ev.__IFRAME_LOAD_COMPLETE, function () {
                var D = z.config.articleBackgroundColor;
                if (D && D != "transparent") {
                    z.addStyle({
                        backgroundColor: D,
                        backgroundImage: ""
                    })
                }
            });
            z.observeJob("canvas.apply.letterpaper", function (D) {
                if (D.id) {
                    z.getPanel("html").addStyle({
                        backgroundColor: "transparent"
                    })
                }
            })
        })
    })();
    q.addTool("advanced", {
        sync: d,
        status: v,
        opened: d
    });
    h.Tool.Advanced = h.Class.create({
        $const: {
            __Identity: "advanced"
        },
        $extend: h.Tool,
        oninitialized: function (y) {
            var e = this;
            var x = this.toolbar;
            var B = x.el;
            e.opened = d;
            var A = w.collect(B.parentNode, "div.tx-toolbar-advanced");
            if (!A) {
                return
            }
            x.observeJob("toolbar.advanced.fold", function () {
                u.hide(A);
                u.removeClassName(B, "tx-toolbar-basic-open")
            });
            x.observeJob("toolbar.advanced.spread", function () {
                u.show(A);
                u.addClassName(B, "tx-toolbar-basic-open")
            });
            var z = function () {
                if (e.opened) {
                    x.fireJobs("toolbar.advanced.fold")
                } else {
                    x.fireJobs("toolbar.advanced.spread")
                }
                e.opened = !e.opened
            };
            this.weave.bind(this)(new h.Button(this.buttonCfg), j, z);
            if (y.opened == v) {
                A.show();
                u.addClassName(B, "tx-toolbar-basic-open");
                e.opened = v
            }
        },
        forceOpen: function () {
            this.button.pushedState();
            this.toolbar.fireJobs("toolbar.advanced.spread");
            this.opened = v
        }
    });
    h.module("add drop-down menu button if extra buttons exist.", function (x, y, z, e) {
        e.observeJob(h.Ev.__IFRAME_LOAD_COMPLETE, function () {
            var A = w.collectAll(x.getWrapper(), "li.tx-list-extra div.tx-extra");
            if (A.length == 0) {
                return
            }
            A.each(function (C) {
                var B = w.next(C, ".tx-extra-menu");
                if (!B) {
                    return
                }
                y.makeWidget(new h.Button({
                    el: C,
                    sync: d,
                    status: v
                }), new h.Menu({
                    el: B
                }), function () {})
            })
        })
    });
    (function () {
        q.addTool("fullscreen", {
            wysiwygonly: d,
            status: d,
            switched: d,
            minHeight: 200,
            minWidth: 766,
            asyncUrl: "trex/tool/async/fullscreen.js"
        });
        h.Tool.FullScreen = h.Class.create({
            $const: {
                __Identity: "fullscreen"
            },
            $extend: h.AsyncTool,
            oninitialized: function (e) {
                this.weave.bind(this)(new h.Button(this.buttonCfg), j, this.onLoadModule)
            }
        })
    })();
    q.addTool("image", {
        disabledonmobile: v,
        wysiwygonly: v,
        sync: d,
        status: d
    });
    k.addMsg({
        "@image.title": "\uc0ac\uc9c4"
    });
    h.Tool.Image = h.Class.create({
        $const: {
            __Identity: "image"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var e = this.editor;
            this.weave.bind(this)(new h.Button(this.buttonCfg), j, function () {
                e.getSidebar().getAttacher("image").execute()
            })
        }
    });
    q.addAttacher("image", {
        multiple: v,
        multipleuse: d,
        checksize: d,
        boxonly: d,
        wysiwygonly: v,
        objattr: {},
        features: {
            left: 250,
            top: 65,
            width: 797,
            height: 644
        },
        popPageUrl: "#host#path/pages/trex/image.html"
    }, function (e) {
        var x = q.getAttacher("image", e);
        x.popPageUrl = q.getUrl(x.popPageUrl);
        x.features = q.getPopFeatures(x.features)
    });
    h.Attacher.Image = h.Class.create({
        $const: {
            __Identity: "image"
        },
        $extend: h.Attacher,
        name: "image",
        title: TXMSG("@image.title"),
        canModified: d,
        canResized: v,
        oninitialized: function () {},
        getKey: function (e) {
            return e.imageurl
        },
        getDataForEntry: function (y) {
            y.imageurl = this.encodeSpaceInUrl(y.imageurl);
            y.originalurl = this.encodeSpaceInUrl(y.originalurl);
            y.attachurl = this.encodeSpaceInUrl(y.attachurl);
            y.thumburl = y.thumburl || y.imageurl.replace(/\/image\//gm, "/P150x100/");
            if (!y.dispElId) {
                y.dispElId = h.Util.getDispElId()
            }
            var e = ((y.tmpSeq) ? this.entryBox.syncSeq(y.tmpSeq) : this.entryBox.newSeq());
            var x = Object.extend({
                dataSeq: e
            }, y);
            return x
        },
        createEntry: function (x, e) {
            return this.createAttachment(x, e)
        },
        encodeSpaceInUrl: function (e) {
            if (!e) {
                return
            }
            return e.replace(/ /g, "%20")
        },
        execAttach: function (y, x) {
            var e = this.createEntry(this.getDataForEntry(y), x);
            e.execRegister()
        },
        execReload: function (z, y, x) {
            var e = this.createEntry(this.getDataForEntry(z, y), x);
            e.execReload()
        }
    });
    h.Attachment.Image = h.Class.create({
        $const: {
            __Identity: "image"
        },
        $extend: h.Attachment,
        getFieldAttr: function (e) {
            return {
                name: "tx_attach_image",
                value: [e.thumburl, e.imageurl, e.originalurl, e.exifurl, e.filename, e.filesize].join("|")
            }
        },
        getBoxAttr: function (x) {
            var e = x.width ? x.width + "x" + x.height + " / " : "";
            return {
                name: x.filename + " (" + e + x.filesize.toByteUnit() + ")",
                image: x.thumburl
            }
        },
        getObjectAttr: function (x) {
            var e = Object.extend({}, this.actor.config.objattr);
            if (x.width) {
                if (!e.width || e.width > x.width) {
                    e.width = x.width
                }
            } else {
                e.width = j
            } if (x.height) {
                if (!e.height || e.height > x.height) {
                    e.height = x.height
                }
            } else {
                e.height = j
            }
            return e
        },
        getObjectStyle: function (y) {
            var x = {};
            if (this.actor.config.objstyle) {
                x = Object.extend(x, this.actor.config.objstyle)
            }
            if (y.imagealign) {
                var e = {
                    L: h.Tool.AlignLeft,
                    C: h.Tool.AlignCenter,
                    FL: h.Tool.AlignRight,
                    FR: h.Tool.AlignFull
                }[y.imagealign];
                if (e && e.__ImageModeProps && e.__ImageModeProps.image) {
                    x = Object.extend(x, e.__ImageModeProps.image["style"])
                }
            }
            return x
        },
        getParaStyle: function (x) {
            var y = Object.extend({}, this.actor.config.parastyle || this.actor.config.defaultstyle);
            if (x.imagealign) {
                var e = {
                    L: h.Tool.AlignLeft,
                    C: h.Tool.AlignCenter,
                    FL: h.Tool.AlignRight,
                    FR: h.Tool.AlignFull
                }[x.imagealign];
                if (e && e.__ImageModeProps && e.__ImageModeProps.paragraph) {
                    y = Object.extend(y, e.__ImageModeProps.paragraph["style"])
                }
            }
            return y
        },
        getSaveHtml: function (e) {
            return '<img src="' + e.imageurl + '" style="max-width:100%;clear:none;float:none;"/>'
        },
        getDispHtml: function (e) {
            return '<img id="' + e.dispElId + '" src="' + e.imageurl + '" style="max-width:100%;clear:none;float:none;"/>'
        }, //이넘 고치면 됨
        getDispText: function (e) {
            return '<img src="' + e.imageurl + '" style="max-width:100%;clear:none;float:none;"/>'
        },
        getRegLoad: function (e) {
            return new RegExp('<(?:img|IMG)[^>]*src="?' + e.imageurl.getRegExp() + '"?[^>]*/?>', "gim")
        },
        getRegHtml: function (e) {
            return new RegExp('<(?:img|IMG)[^>]*src="?' + e.imageurl.getRegExp() + '"?[^>]*/?>', "gim")
        },
        getRegText: function (e) {
            return new RegExp('<(?:img|IMG)[^>]*src="?' + e.imageurl.getRegExp() + '"?[^>]*/?>', "gim")
        }
    });
    q.addTool("file", {
        disabledonmobile: v,
        wysiwygonly: v,
        sync: d,
        status: d
    });
    k.addMsg({
        "@file.title": "\ud30c\uc77c"
    });
    h.Tool.File = h.Class.create({
        $const: {
            __Identity: "file"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var e = this.editor;
            this.weave.bind(this)(new h.Button(this.buttonCfg), j, function () {
                e.getSidebar().getAttacher("file").execute()
            })
        }
    });
    q.addAttacher("file", {
        multiple: v,
        multipleuse: d,
        checksize: v,
        boxonly: d,
        wysiwygonly: d,
        features: {
            left: 250,
            top: 65,
            width: 450,
            height: 404
        },
        popPageUrl: "#host#path/pages/trex/file.html"
    }, function (e) {
        var x = q.getAttacher("file", e);
        x.popPageUrl = q.getUrl(x.popPageUrl);
        x.features = q.getPopFeatures(x.features)
    });
    h.Attacher.File = h.Class.create({
        $const: {
            __Identity: "file"
        },
        $extend: h.Attacher,
        name: "file",
        title: TXMSG("@file.title"),
        canModified: v,
        canResized: d,
        oninitialized: function () {},
        getKey: function (e) {
            return e.key || e.attachurl
        },
        getDataForEntry: function (A) {
            if (!A.dispElId) {
                A.dispElId = h.Util.getDispElId()
            }
            var e = ((A.tmpSeq) ? this.entryBox.syncSeq(A.tmpSeq) : this.entryBox.newSeq());
            var z = A.filename.split(".").pop().toLowerCase();
            var x;
            switch (z) {
            case "jpg":
            case "gif":
            case "png":
            case "bmp":
                x = A.attachurl.replace("/attach/", "/thumbnail/");
                break;
            default:
                x = h.Util.thumburl(z)
            }
            var y = Object.extend({
                dataSeq: e,
                thumburl: x,
                prevurl: h.Util.prevurl(A.filename.split(".").pop().toLowerCase())
            }, A);
            return y
        }
    });
    h.Attachment.File = h.Class.create({
        $const: {
            __Identity: "file"
        },
        $extend: h.Attachment,
        getFieldAttr: function (e) {
            return {
                name: "tx_attach_file",
                value: [e.attachurl, e.filesize, e.filename].join("|")
            }
        },
        getBoxAttr: function (A) {
            var x = 56;
            var y = A.filename;
            if (y.getRealLength() > x) {
                var B = y.split(".");
                var z = B.pop();
                var e = B.join(".").cutRealLength(x - 2);
                y = e + "." + z
            }
            return {
                name: y + " (" + A.filesize.toByteUnit() + ")",
                image: A.thumburl
            }
        },
        getObjectStyle: function (y) {
            var x = {};
            if (this.actor.config.objstyle) {
                x = Object.extend(x, this.actor.config.objstyle)
            }
            if (y.imagealign) {
                var e = {
                    L: h.Tool.AlignLeft,
                    C: h.Tool.AlignCenter,
                    FL: h.Tool.AlignRight,
                    FR: h.Tool.AlignFull
                }[y.imagealign];
                if (e && e.__TextModeProps && e.__TextModeProps.image) {
                    x = Object.extend(x, e.__TextModeProps.button["style"])
                }
            }
            return x
        },
        getParaStyle: function (x) {
            var y = Object.extend({}, this.actor.config.parastyle || this.actor.config.defaultstyle);
            if (x.imagealign) {
                var e = {
                    L: h.Tool.AlignLeft,
                    C: h.Tool.AlignCenter,
                    FL: h.Tool.AlignFull,
                    FR: h.Tool.AlignRight
                }[x.imagealign];
                if (e && e.__TextModeProps && e.__TextModeProps.paragraph) {
                    y = Object.extend(y, e.__TextModeProps.paragraph["style"])
                }
            }
            return y
        },
        getSaveHtml: function (e) {
            return '<a href="' + e.attachurl + '"><img src="' + e.prevurl + '"/> ' + e.filename + "</a>"
        },
        getDispHtml: function (e) {
            return '<button id="' + e.dispElId + '" class="txc-file"><img class="tx-unresizable" src="' + e.prevurl + '" ld="' + e.attachurl + '"/> ' + e.filename + "</button>"
        },
        getDispText: function (e) {
            return "[" + TXMSG("@file.title") + ":" + e.dataSeq + "]"
        },
        getRegLoad: function (e) {
            return new RegExp('<(?:a|A)\\s*href="?' + e.attachurl.getRegExp() + '[^"]*"?[^>]*><(?:img|IMG)[^>]*/?>[\\S\\s]*?</(?:a|A)>', "gm")
        },
        getRegHtml: function (e) {
            return new RegExp('<(?:button|BUTTON)[^>]*id="?' + e.dispElId + '"?[^>]*>[\\S\\s]*?' + e.attachurl.getRegExp() + "[\\S\\s]*?</(?:button|BUTTON)>", "gm")
        },
        getRegText: function (e) {
            return new RegExp("\\[" + TXMSG("@file.title") + ":" + e.dataSeq + "\\]", "gm")
        }
    });
    q.addTool("media", {
        wysiwygonly: v,
        sync: d,
        status: d
    });
    k.addMsg({
        "@media.title": "\uba40\ud2f0\ubbf8\ub514\uc5b4",
        "@media.prev.url": "#iconpath/spacer2.gif?v=2",
        "@media.prev.url.tvpot": "#iconpath/img_multi_tvpot.gif?v=2",
        "@media.prev.url.wmp": "#iconpath/spacer2.gif?v=2"
    });
    h.Tool.Media = h.Class.create({
        $const: {
            __Identity: "media"
        },
        $extend: h.Tool,
        oninitialized: function () {
            var e = this.editor;
            this.weave.bind(this)(new h.Button(this.buttonCfg), j, function () {
                e.getSidebar().getEmbeder("media").execute()
            })
        }
    });
    q.addEmbeder("media", {
        wysiwygonly: v,
        useCC: d,
        features: {
            left: 250,
            top: 65,
            width: 458,
            height: 568,
            resizable: "yes"
        },
        popPageUrl: "#host#path/pages/trex/multimedia.html",
        allowNetworkingFilter: v,
        allowNetworkingSites: [{
            host: "www.youtube.com"
        }, {
            host: "youtube.com"
        }, {
            host: "api.v.daum.net"
        }, {
            host: "tvpot.daum.net"
        }, {
            host: "flvs.daum.net"
        }, {
            host: "photo-contents.daum-img.net"
        }, {
            host: "serviceapi.nmv.naver.com"
        }, {
            host: "v.nate.com"
        }, {
            host: "flvr.pandora.tv"
        }]
    }, function (e) {
        var x = e.sidebar.embeder.media;
        x.popPageUrl = q.getUrl(x.popPageUrl);
        x.features = q.getPopFeatures(x.features)
    });
    (function () {
        h.Embeder.Media = h.Class.create({
            $const: {
                __Identity: "media"
            },
            $extend: h.Embeder,
            name: "media",
            title: TXMSG("@media.title"),
            canResized: v,
            getCreatedHtml: function (G) {
                var F = G.code || e(G.url, this.config);
                return B(F)
            },
            getDataForEntry: function () {}
        });
        h.register("filter > media ", function (F, G, I) {
            var H = I.embeders.media.config;
            F.getDocParser().registerFilter("filter/embeder/media", {
                "text@load": function (J) {
                    return J
                },
                "source@load": function (J) {
                    return B(J)
                },
                "html@load": function (J) {
                    return B(J)
                },
                text4save: function (J) {
                    return J
                },
                source4save: function (J) {
                    J = D(J);
                    J = z(J, H);
                    return J
                },
                html4save: function (J) {
                    J = D(J);
                    J = z(J, H);
                    return J
                },
                text2source: function (J) {
                    return J
                },
                text2html: function (J) {
                    return J
                },
                source2text: function (J) {
                    return J
                },
                source2html: function (J) {
                    return B(J)
                },
                html2text: function (J) {
                    return D(J)
                },
                html2source: function (J) {
                    return D(J)
                }
            })
        });

        function A(I, H) {
            var G, K, J, F;
            K = "";
            G = /[\/]*\/\/([^\/]+)\//i.exec(I);
            if (G && G[1]) {
                K = G[1]
            }
            F = H.allowNetworkingSites.length;
            for (J = 0; J < F; J += 1) {
                if (K == H.allowNetworkingSites[J].host) {
                    return v
                }
            }
            return d
        }

        function z(H, G) {
            var F;
            if (G.allowNetworkingFilter == d) {
                return H
            }
            F = H.replace(/(<object[^>]*>)((?:\n|.)*?)(<\/object>)/gi, function (K, N, M, I) {
                var J, L;
                J = /<param[^>]*=[^\w]*movie[^\w]+[^>]*>/i.exec(M);
                if (J && J[0]) {
                    L = /\s+value=["']?([^\s"']*)["']?/i.exec(J[0]);
                    if (L && L[1]) {
                        if (A(L[1], G)) {
                            return N + M + I
                        }
                    }
                }
                J = /<param[^>]*=[^\w]*src[^\w]+[^>]*>/i.exec(M);
                if (J && J[0]) {
                    L = /\s+value=["']?([^\s"']*)["']?/i.exec(J[0]);
                    if (L && L[1]) {
                        if (A(L[1], G)) {
                            return N + M + I
                        }
                    }
                }
                M = M.replace(/<param[^>]*=[^\w]*allowNetworking[^\w]+[^>]*>/i, "");
                M = '<param name="allowNetworking" value="internal" />'.concat(M);
                return N + M + I
            });
            F = F.replace(/(<embed)([^>]*)(><\/embed>|\/>)/gi, function (L, M, I, J) {
                var K = /\s+src=["']?([^\s"']*)["']?/i.exec(I);
                if (K && K[1]) {
                    if (A(K[1], G)) {
                        return M + I + J
                    }
                }
                I = I.replace(/\s+allowNetworking=["']?[\w]*["']?/i, "").concat(' allowNetworking="internal"');
                return M + I + J
            });
            return F
        }

        function D(K) {
            var H;
            var J = new RegExp("<(?:img|IMG)[^>]*txc-media[^>]*/?>", "gim");
            var I = K;
            while ((H = J.exec(I)) != j) {
                var G = H[0];
                var F = x(G);
                if (!u.msie && F.indexOf("$") > -1) {
                    F = F.replace(/\$/g, "$$$$")
                }
                K = K.replace(G, F)
            }
            return K
        }

        function B(M) {
            if (u.msie) {
                M = M.replace(/<iframe[^>]*src=("|'|)https?:\/\/www\.youtube\.com\/embed\/(\w+)\1[^>]*><\/iframe>/i, function (R, Q, P) {
                    var O, S, N;
                    O = R.match(/\swidth=['"]?(\d+)/);
                    S = (O && O[1]) || "560";
                    O = R.match(/\sheight=['"]?(\d+)/);
                    N = (O && O[1]) || "315";
                    return '<object width="' + S + '" height="' + N + '"><param name="movie" value="https://www.youtube.com/v/' + P + '?version=3&amp;hl=ko_KR"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param><embed src="https://www.youtube.com/v/' + P + '?version=3&amp;hl=ko_KR" type="application/x-shockwave-flash" width="' + S + '" height="' + N + '" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>'
                });
                M = M.replace(/(<object[^>]*>)((?:\n|.)*?)(<\/object>)/gi, function (O, Q, P, N) {
                    P = P.replace(/<param[^>]*=[^\w]*wmode[^\w]+[^>]*>/i, "");
                    P = P.replace(/<param[^>]*=[^\w]*play[^\w]+[^>]*>/i, "");
                    P = '<param name="wmode" value="transparent" />'.concat(P);
                    return Q + P + N
                });
                M = M.replace(/(<embed)([^>]*)(>)/gi, function (P, Q, N, O) {
                    N = N.replace(/\s+wmode=("|'|)\w*\1/i, "");
                    N += " wmode=transparent";
                    return Q + N + O
                });
                return M
            } else {
                var I, F, H, K;
                var J = M;
                var G = new RegExp("<(?:script)[^>]*>[\\S\\s]*?(<(?:embed|EMBED)[^>]*src=[^>]*>)[\\S\\s]*?</(?:script)>", "gim");
                while ((I = G.exec(J)) != j) {
                    F = I[0];
                    H = F.replace(/<embed/i, "<xxembed");
                    M = M.replace(F, H)
                }
                var L = new RegExp("<(?:object|OBJECT)[^>]*>[\\S\\s]*?(<(?:embed|EMBED)[^>]*src=[^>]*>)[\\S\\s]*?</(?:object|OBJECT)>", "gim");
                while ((I = L.exec(J)) != j) {
                    F = I[0];
                    K = I[1];
                    H = E(F, K);
                    M = M.replace(F, H)
                }
                L = new RegExp("<(?:embed|EMBED)[^>]*src=[^>]*(?:/?>|></(?:embed|EMBED)>)", "gim");
                while ((I = L.exec(J)) != j) {
                    F = I[0];
                    K = I[0];
                    H = E(F, K);
                    M = M.replace(F, H)
                }
                M = M.replace(/<xxembed/i, "<embed");
                return M
            }
        }

        function E(H, P) {
            var G = h.Util.getAllAttributesFromEmbed(P);
            var K = G.src;
            var L = (G.width || " ").parsePx();
            var M = (G.height || " ").parsePx();
            if (isNaN(L) || isNaN(M)) {
                var Q = y(K);
                L = Q.width;
                M = Q.height
            }
            var J = "<embed";
            for (var I in G) {
                J += " " + I + '="' + G[I] + '"'
            }
            J += ">";
            var O = H.split(P);
            H = O[0] + J;
            for (var N = 1; N < O.length; N++) {
                H += O[N]
            }
            var F = C(K);
            return '<img src="' + F.imageSrc + '" width="' + L + '" height="' + M + '" border="0" class="tx-entry-embed txc-media'  + F.className + '" ld="' + encodeURIComponent(H) + '"/>'
        }

        function x(K) {
            var F = h.Util.getAllAttributes(K);
            var J = F.ld;
            if (!J || J.length == 0) {
                return ""
            }
            var H = F.width;
            var I = F.height;
            var L = decodeURIComponent(J);
            var O = L;
            if (L.indexOf("object") > -1 || L.indexOf("OBJECT") > -1) {
                var M;
                var P = new RegExp("<(?:embed|EMBED)[^>]*src=[^>]*(?:/?>|></(?:embed|EMBED)>)", "gim");
                while ((M = P.exec(L)) != j) {
                    O = M[0]
                }
            }
            F = h.Util.getAllAttributes(O);
            var G = F.src;
            var N = y(G);
            if (isNaN(H)) {
                L = h.String.changeAttribute(L, "width", ' width="' + N.width + '"')
            } else {
                L = h.String.changeAttribute(L, "width", ' width="' + H + '"')
            } if (isNaN(I)) {
                L = h.String.changeAttribute(L, "height", ' height="' + N.height + '"')
            } else {
                L = h.String.changeAttribute(L, "height", ' height="' + I + '"')
            }
            return L
        }

        function e(J, I) {
            var K, G, L, H, F;
            K = J.split(".").pop().split("?")[0].toLowerCase();
            G = y(J);
            if (J.indexOf("http://flvs.daum.net") == 0) {
                L = " allowScriptAccess='always'"
            } else {
                L = " allowScriptAccess='never'";
                if (I.allowNetworkingFilter && A(J, I) == d) {
                    L += " allowNetworking='internal'"
                }
            }
            H = "http://tvpot.daum.net/clip/ClipViewByVid.do?vid=";
            if (J.indexOf(H) == 0) {
                F = J.substr(H.length);
                J = "http://flvs.daum.net/flvPlayer.swf?vid=" + F;
                K = "swf";
                L = " allowScriptAccess='always'"
            }
            switch (K) {
            case "swf":
                return '<embed src="' + J + "\" quality='high' " + L + " type='application/x-shockwave-flash' allowfullscreen='true' pluginspage='http://www.macromedia.com/go/getflashplayer' wmode='transparent' width='" + G.width + "' height='" + G.height + "'></embed>";
            case "mp3":
            case "wma":
            case "asf":
            case "asx":
            case "mpg":
            case "mpeg":
            case "wmv":
            case "avi":
                return '<embed src="' + J + '" type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" width=\'' + G.width + "' height='" + G.height + "'></embed>";
            case "mov":
                return '<embed src="' + J + '" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/indext.html" width=\'' + G.width + "' height='" + G.height + "'></embed>";
            case "jpg":
            case "bmp":
            case "gif":
            case "png":
                return '<img src="' + J + '" border="0"/>';
            default:
                return '<embed src="' + J + "\" width='" + G.width + "' height='" + G.height + "' " + L + " ></embed>"
            }
        }

        function y(G) {
            var F, H;
            if (G.indexOf("api.bloggernews.media.daum.net/static/recombox1") > -1) {
                F = 400;
                H = 80
            } else {
                if (G.indexOf("flvs.daum.net/flvPlayer") > -1) {
                    F = 502;
                    H = 399
                } else {
                    var I = G.split(".").pop().split("?")[0].toLowerCase();
                    switch (I) {
                    case "mp3":
                    case "wma":
                    case "asf":
                    case "asx":
                        F = 280;
                        H = 45;
                        break;
                    case "mpg":
                    case "mpeg":
                    case "wmv":
                    case "avi":
                        F = 320;
                        H = 285;
                        break;
                    default:
                        F = 400;
                        H = 300;
                        break
                    }
                }
            }
            return {
                width: F,
                height: H
            }
        }

        function C(H) {
            var F = "";
            var G = "";
            if (H.indexOf("api.bloggernews.media.daum.net/static/recombox1") > -1) {
                F = "";
                G = TXMSG("@media.prev.url")
            } else {
                if (H.indexOf("flvs.daum.net/flvPlayer") > -1) {
                    F = " txc-media-tvpot";
                    G = TXMSG("@media.prev.url.tvpot")
                } else {
                    var I = H.split(".").pop().split("?")[0].toLowerCase();
                    switch (I) {
                    case "mp3":
                    case "wma":
                    case "asf":
                    case "asx":
                        F = " txc-media-wmp";
                        G = TXMSG("@media.prev.url.wmp");
                        break;
                    case "mpg":
                    case "mpeg":
                    case "wmv":
                    case "avi":
                        F = " txc-media-wmp";
                        G = TXMSG("@media.prev.url.wmp");
                        break;
                    default:
                        F = "";
                        G = TXMSG("@media.prev.url");
                        break
                    }
                }
            }
            return {
                className: F,
                imageSrc: G
            }
        }
    })();
    k.addMsg({
        "@canvas.unload.message": "\uc791\uc131\ud558\uc2e0 \ub0b4\uc6a9\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9c0\ub97c \ub5a0\ub098\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
        "@canvas.unload.message.at.modify": "\uc791\uc131\ud558\uc2e0 \ub0b4\uc6a9\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9c0\ub97c \ub5a0\ub098\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"
    });
    h.install("editor.isDisableUnloadHandler & editor.setDisableUnloadHandler", function (e) {
        var x = v;
        e.isDisableUnloadHandler = function () {
            return x
        };
        e.setDisableUnloadHandler = function () {
            x = d
        };
        e.setEnableUnloadHandler = function () {
            x = v
        }
    });
    h.module("observing beforeunload event", function (A, B, C, y, x) {
        var e = x.events;
        var z = new h.Validator();
        u.observe(window, "beforeunload", function (D) {
            if (A.isDisableUnloadHandler()) {
                if (e.preventUnload) {
                    y.fireJobs(h.Ev.__CANVAS_BEFORE_UNLOAD);
                    if (z.exists(y.getContent())) {
                        D.returnValue = TXMSG("@canvas.unload.message");
                        return TXMSG("@canvas.unload.message")
                    }
                }
            }
        }, d)
    });
    k.addMsg({
        "@align.image.align.center": "\uac00\uc6b4\ub370\uc815\ub82c",
        "@align.image.align.full": "\uc624\ub978\ucabd\uae00\ud750\ub984",
        "@align.image.align.left": "\uc67c\ucabd\uc815\ub82c",
        "@align.image.align.right": "\uc67c\ucabd\uae00\ud750\ub984",
        "@align.text.align.center": "\uac00\uc6b4\ub370\uc815\ub82c (Ctrl+.)",
        "@align.text.align.full": "\uc591\ucabd\uc815\ub82c",
        "@align.text.align.left": "\uc67c\ucabd\uc815\ub82c (Ctrl+,)",
        "@align.text.align.right": "\uc624\ub978\ucabd\uc815\ub82c (Ctrl+/)"
    });
    h.module("Register an eventhandler in order to change align icons upon toolbar when user click a specific image or not.", function (z, B, C, y) {
        var D = "tx-selected-image";
        var x = [B.tools.alignleft, B.tools.aligncenter, B.tools.alignright, B.tools.alignfull];
        var e = ["txc-2image-c", "txc-3image-c", "txc-footnote", "txc-jukebox", "txc-movie", "txc-gallery", "txc-imazing", "txc-map", "txc-file", "txc-emo", "tx-entry-embed", "txc-bgm", "txc-pie"];
        var A = function (E) {
            var F = function (G, I, K) {
                var J = j;
                var H = j;
                if (!J) {
                    J = w.find(G.button.elButton, "li")
                }
                if (!H) {
                    H = u(G.button.elIcon)
                }
                H.title = K;
                if (I == "image") {
                    if (!u.hasClassName(J, D)) {
                        u.addClassName(J, D)
                    }
                    G.imageAlignMode = v
                } else {
                    if (u.hasClassName(J, D)) {
                        u.removeClassName(J, D)
                    }
                    G.imageAlignMode = d
                }
            };
            F(x[0], E, E == "image" ? TXMSG("@align.image.align.left") : TXMSG("@align.text.align.left"));
            F(x[1], E, E == "image" ? TXMSG("@align.image.align.center") : TXMSG("@align.text.align.center"));
            F(x[2], E, E == "image" ? TXMSG("@align.image.align.right") : TXMSG("@align.text.align.right"));
            F(x[3], E, E == "image" ? TXMSG("@align.image.align.full") : TXMSG("@align.text.align.full"))
        };
        y.observeElement([{
            tag: "body"
        }, {
            tag: "table"
        }, {
            tag: "hr"
        }], function () {
            A("text")
        });
        y.observeElement({
            tag: "img"
        }, function (F) {
            var E = h.Util.getMatchedClassName(F, e);
            if (E) {
                A("text")
            } else {
                if (w.find(F, "button")) {
                    A("text")
                } else {
                    A("image")
                }
            }
        })
    });
    h.module("make padding area inside Canvas with editor width", function (B, L, N, z) {
        var H = z.getPanel(h.Canvas.__WYSIWYG_MODE);
        if (!H) {
            return
        }
        var Q = H.el;
        var P = 5;
        var M = 16;
        var E = 28;
        var U = 2;
        var F;
        var y;
        var C;
        var T;
        var X = z.getSizeConfig();
        var W = z.getContainerWidth();
        var R = X.contentWidth.toNumber();
        var V = X.contentPadding.toNumber();
        var A = (W > R);
        z.observeJob("canvas.apply.background", function (aa) {
            Z({
                top: (aa && aa.topLeftHeight) ? aa.topLeftHeight.parsePx() : 0,
                right: (aa && aa.midRightWidth) ? aa.midRightWidth.parsePx() : 0,
                bottom: (aa && aa.botLeftHeight) ? aa.botLeftHeight.parsePx() : 0,
                left: (aa && aa.midLeftWidth) ? aa.midLeftWidth.parsePx() : 0
            })
        });
        z.observeJob("canvas.apply.letterpaper", function (aa) {
            Z({
                top: (aa && aa.topHeight) ? aa.topHeight.parsePx() : 0,
                right: (aa && (aa.midColor || aa.midUrl)) ? V : 0,
                bottom: (aa && aa.botHeight) ? aa.botHeight.parsePx() : 0,
                left: (aa && (aa.midColor || aa.midUrl)) ? V : 0
            })
        });
        if (A) {
            z.observeJob(h.Ev.__IFRAME_LOAD_COMPLETE, function () {
                Z();
                e();
                G()
            });
            z.observeJob(h.Ev.__CANVAS_MODE_CHANGE, function (ab, aa) {
                I();
                G()
            });
            z.observeJob(h.Ev.__CANVAS_WRAP_WIDTH_CHANGE, D);
            z.observeJob("canvas.normalscreen.change", D);
            z.observeJob("canvas.fullscreen.change", D);
            z.getCanvasGuideSize = function () {
                return J().leftWidth.parsePx()
            };
            if (!u.msie) {
                if (u.gecko) {
                    u.setStyle(Q, {
                        overflowX: "auto",
                        overflowY: "auto"
                    })
                } else {
                    u.setStyle(Q, {
                        overflowX: "auto",
                        overflowY: "scroll"
                    })
                }
            }
        }

        function Z(aa) {
            H.addStyle(O(aa))
        }

        function O(aa) {
            var ad = {};
            var ae = ["top", "bottom", "left", "right"];
            for (var ac = 0; ac < ae.length; ac++) {
                var ab = ae[ac];
                ad[ab] = (aa && aa[ab]) || V
            }
            if (A) {
                ad.left = Math.max(Math.ceil(x()), 0);
                ad.right = Math.max(Math.floor(x()), 0);
                return {
                    width: R,
                    paddingLeft: "0",
                    paddingRight: "0",
                    paddingTop: ad.top.toPx(),
                    paddingBottom: ad.bottom.toPx(),
                    marginLeft: ad.left.toPx(),
                    marginRight: ad.right.toPx()
                }
            } else {
                return {
                    paddingTop: ad.top.toPx(),
                    paddingRight: ad.right.toPx(),
                    paddingBottom: ad.bottom.toPx(),
                    paddingLeft: ad.left.toPx()
                }
            }
        }

        function x() {
            return (W - R - U - M) / 2
        }

        function J() {
            var aa = x();
            if (aa < E) {
                return {
                    leftWidth: "0",
                    rightWidth: "0",
                    rightPos: "0"
                }
            } else {
                return {
                    leftWidth: Math.ceil(aa - V).toPx(),
                    rightWidth: Math.max(0, (Math.floor(aa - V))).toPx(),
                    rightPos: (R + Math.ceil(aa + V)).toPx()
                }
            }
        }

        function Y() {
            return F && y
        }
        var K;

        function D() {
            clearTimeout(K);
            K = setTimeout(function () {
                W = z.getContainerWidth();
                S()
            }, 4)
        }

        function S() {
            Z();
            I();
            G()
        }

        function e() {
            var aa = z.getStyleConfig().color;
            F = tx.div({
                className: "tx-wysiwyg-padding"
            });
            C = tx.div({
                className: "tx-wysiwyg-padding-divL",
                style: {
                    borderColor: aa
                }
            });
            y = tx.div({
                className: "tx-wysiwyg-padding"
            });
            T = tx.div({
                className: "tx-wysiwyg-padding-divR",
                style: {
                    borderColor: aa
                }
            });
            var ab = z.wysiwygEl;
            F.appendChild(C);
            ab.insertBefore(F, Q);
            y.appendChild(T);
            ab.insertBefore(y, Q);
            I()
        }

        function I() {
            if (Y()) {
                var ab = J();
                u.setStyle(F, {
                    width: ab.leftWidth
                });
                u.setStyle(y, {
                    width: ab.rightWidth,
                    left: ab.rightPos
                });
                var aa = ab.leftWidth.parsePx() > E;
                var ac = z.getConfig().showGuideArea;
                var ad = aa && ac ? "1px solid" : "0 none";
                u.setStyle(C, {
                    borderRight: ad,
                    borderBottom: ad
                });
                u.setStyle(T, {
                    borderLeft: ad,
                    borderBottom: ad
                })
            }
        }

        function G() {
            if (Y()) {
                if (z.mode == h.Canvas.__WYSIWYG_MODE) {
                    u.show(F);
                    u.show(y)
                } else {
                    u.hide(F);
                    u.hide(y)
                }
            }
        }
    });
    h.module("Register an eventhandler in order to resize block and edit search results & some images in wysiwig panel.", function (z, A, B, x) {
        if (u.msie) {
            var e = function (C) {
                if (C.onresizestart == j) {
                    C.onresizestart = function () {
                        return d
                    }
                }
            };
            x.observeElement({
                tag: "img",
                klass: "tx-unresizable"
            }, e);
            x.observeElement({
                tag: "img",
                klass: "tx-entry-attach"
            }, e);
            x.observeElement({
                tag: "img",
                klass: "txc-footnote"
            }, e);
            x.observeElement({
                tag: "iframe",
                klass: "txc-map"
            }, e)
        }
        var y;
        if (u.msie) {
            y = function (C) {
                C.setAttribute("unselectable", "on");
                $A(C.getElementsByTagName("*")).each(function (E) {
                    if (E.nodeName.charAt(0) != "/") {
                        E.setAttribute("unselectable", "on")
                    }
                });
                var D = x.getProcessor();
                D.selectControl(C)
            }
        } else {
            y = function (C) {
                var D = x.getProcessor();
                D.selectControl(C);
                throw $stop
            }
        }
        x.observeElement({
            tag: "button"
        }, y);
        x.observeElement({
            tag: "img"
        }, function (C) {
            var D = w.find(C, "button");
            if (D) {
                y(D);
                throw $stop
            }
        })
    });
    h.module("in order to save history for image resizing on IE", function (z, A, B, x) {
        var y = x.history;
        var e = {};
        var C = j;
        x.observeJob(h.Ev.__CANVAS_PANEL_MOUSEDOWN, function (E) {
            var D = u.element(E);
            if (D && D.tagName && D.tagName.toLowerCase() == "img") {
                C = D;
                e = w.getPosition(D)
            }
        });
        x.observeJob(h.Ev.__CANVAS_PANEL_MOUSEUP, function () {
            if (C) {
                var E = d;
                try {
                    var F = w.getPosition(C);
                    for (var D in F) {
                        if (F[D] != e[D]) {
                            E = v
                        }
                    }
                    if (E) {
                        y.saveHistory()
                    }
                } catch (G) {} finally {
                    C = j
                }
            }
        })
    });
    (function () {
        var y = {
            getEventElement: function (A) {
                var z = u.findElement(A, "td");
                if (z && z.tagName && z.tagName.toUpperCase() == "TD") {
                    return z
                } else {
                    return j
                }
            },
            getMaxCoord: function (B) {
                var z = this.getXCoords(B);
                var A = this.getYCoords(B);
                return {
                    x: z[z.length - 1],
                    y: A[A.length - 1]
                }
            },
            getMinCoord: function (B) {
                var z = this.getXCoords(B);
                var A = this.getYCoords(B);
                return {
                    x: z[0],
                    y: A[0]
                }
            },
            getYCoords: function (z) {
                return this.getCoordsByKey(z, "row")
            },
            getXCoords: function (z) {
                return this.getCoordsByKey(z, "col")
            },
            getCoordsByKey: function (C, A) {
                var B = new RegExp(A + "(\\d+)", "gim");
                var D = [];
                var z = C.getAttribute(A + "Class");
                z.trim().replace(B, function (E, F) {
                    D.push(F.toNumber())
                });
                return D
            },
            setSelect: function (z) {
                u.setStyle(z, {
                    backgroundImage: "url(http://i1.daumcdn.net/icon/editor/table_focus_50.png)"
                })
            },
            setUnselect: function (z) {
                u.setStyle(z, {
                    backgroundImage: ""
                })
            },
            clearContent: function (z) {
                z.setAttribute("unselectable", "on");
                z.innerHTML = "-"
            },
            clearCoords: function (z) {
                z.setAttribute("colClass", "");
                z.setAttribute("rowClass", "")
            },
            setCoords: function (A, H, z) {
                var E = H + 1;
                var F = this.getRowSpan(A);
                var B = "row ".times(F).replace(/(row)/g, function (I, J) {
                    return J + (E++)
                });
                var C = z + 1;
                var G = this.getColSpan(A);
                var D = "col ".times(G).replace(/(col)/g, function (I, J) {
                    return J + (C++)
                });
                A.setAttribute("colClass", D);
                A.setAttribute("rowClass", B)
            },
            getColSpan: function (z) {
                return parseInt(z.getAttribute("colSpan") || 1)
            },
            getRowSpan: function (z) {
                return parseInt(z.getAttribute("rowSpan") || 1)
            }
        };
        var e = {
            start: {
                x: -1,
                y: -1
            },
            top: -1,
            left: -1,
            bottom: -1,
            right: -1,
            init: function (z, A) {
                this.start.x = this.left = this.right = z;
                this.start.y = this.top = this.bottom = A
            },
            clear: function () {
                this.top = this.left = this.bottom = this.right = this.start.x = this.start.y = -1
            },
            changeBoundary: function (z, A) {
                this.top = Math.min(this.start.y, A);
                this.bottom = Math.max(this.start.y, A);
                this.left = Math.min(this.start.x, z);
                this.right = Math.max(this.start.x, z)
            },
            getRectCoord: function () {
                return {
                    sx: this.left,
                    sy: this.top,
                    ex: this.right,
                    ey: this.bottom
                }
            }
        };
        var x = {
            canMerge: function (z, B) {
                var A;
                for (A = z.sy; A < z.ey + 1; A++) {
                    if (y.getMinCoord(B[A][z.sx]).x - 1 != z.sx || y.getMaxCoord(B[A][z.ex]).x - 1 != z.ex) {
                        return d
                    }
                }
                for (A = z.sx; A < z.ex + 1; A++) {
                    if (y.getMinCoord(B[z.sy][A]).y - 1 != z.sy || y.getMaxCoord(B[z.ey][A]).y - 1 != z.ey) {
                        return d
                    }
                }
                return v
            },
            canSplit: function (A, C) {
                var B = y.getMinCoord(C[A.sy][A.sx]);
                var z = y.getMinCoord(C[A.ey][A.ex]);
                return (B.x == z.x && B.y == z.y && B.x > 0 && B.y > 0)
            },
            isMergedCell: function (A, B) {
                var z = y.getMaxCoord(B[A.sy][A.sx]);
                var C = y.getMinCoord(B[A.sy][A.sx]);
                if (z.x != C.x || z.y != C.y) {
                    return v
                } else {
                    return d
                }
            },
            canRemoveRow: function (A, D) {
                var z = A.sy;
                var E = A.ey;
                var C = D[0].length;
                for (var B = 0; B < C; B++) {
                    if (z != y.getMinCoord(D[A.sy][B]).y - 1) {
                        return d
                    }
                    if (E != y.getMaxCoord(D[A.ey][B]).y - 1) {
                        return d
                    }
                }
                return v
            },
            canRemoveCol: function (z, E) {
                var D = z.sx;
                var C = z.ex;
                var B = E.length;
                for (var A = 0; A < B; A++) {
                    if (D != y.getMinCoord(E[A][z.sx]).x - 1) {
                        return d
                    }
                    if (C != y.getMaxCoord(E[A][z.ex]).x - 1) {
                        return d
                    }
                }
                return v
            },
            isAllRowSelected: function (z, A) {
                return (A.length <= z.ey - z.sy + 1) ? v : d
            },
            isAllColSelected: function (z, A) {
                return (A[0].length <= z.ex - z.sx + 1) ? v : d
            },
            canAddUpperRow: function (B, A) {
                for (var z = 0; z < A[0].length; z++) {
                    if (A[B - 1][z] == A[B][z]) {
                        return d
                    }
                }
                return v
            },
            canAddBelowRow: function (B, A) {
                for (var z = 0; z < A[0].length; z++) {
                    if (A[B + 1][z] == A[B][z]) {
                        return d
                    }
                }
                return v
            },
            canAddLeftCol: function (z, B) {
                for (var A = 0; A < B.length; A++) {
                    if (B[A][z - 1] == B[A][z]) {
                        return d
                    }
                }
                return v
            },
            canAddRightCol: function (z, B) {
                for (var A = 0; A < B.length; A++) {
                    if (B[A][z + 1] == B[A][z]) {
                        return d
                    }
                }
                return v
            }
        };
        h.MarkupTemplate.add("table.edit", '<div class="tx-table-edit"><ul class="tx-tab tx-tab-menu1"><li><a href="javascript:;">\ud45c\uad6c\uc131</a></li><li><a href="javascript:;">\ub514\uc790\uc778</a></li><li><a href="javascript:;">\uc11c\uc2dd</a></li></ul><div class="tx-table-edit-layout"><div class="tx-table-edit-layout-wrapper"><div class="tx-table-edit-layout-insert"><h4>\uc0bd\uc785</h4><ul class="tx-2cell"><li class="tx-left"><a href="javascript:;" class="tx-up" title="\uc704\uc5d0 \ucd94\uac00">\uc704</a></li><li class="tx-right"><a href="javascript:;" class="tx-down" title="\uc544\ub798\uc5d0 \ucd94\uac00">\uc544\ub798</a></li></ul><ul class="tx-2cell"><li class="tx-left"><a href="javascript:;" class="tx-left" title="\uc67c\ucabd\uc5d0 \ucd94\uac00">\uc67c\ucabd</a></li><li class="tx-right"><a href="javascript:;" class="tx-right" title="\uc624\ub978\ucabd \ucd94\uac00">\uc624\ub978</a></li></ul></div><div class="tx-table-edit-layout-cell"><h4>\uc0ad\uc81c</h4><ul class="tx-2cell"><li class="tx-left"><a href="javascript:;" class="tx-col" title="\uc5f4\uc0ad\uc81c">\uc5f4</a></li><li class="tx-right"><a href="javascript:;" class="tx-row" title="\ud589\uc0ad\uc81c">\ud589</a></li></ul><h4 style="width:50px">\ubcd1\ud569/\ubd84\ud560</h4><ul class="tx-2cell"><li class="tx-left"><a href="javascript:;" class="tx-merge" title="\ubcd1\ud569">\ud569</a></li><li class="tx-right"><a href="javascript:;" class="tx-split" title="\ubd84\ud560">\ubd84</a></li></ul></div><div class="tx-table-edit-layout-align"><h4>\uc815\ub82c</h4><ul class="tx-3cell"><li class="tx-left"><a href="javascript:;" class="tx-top" title="\uc0c1\ub2e8">\uc0c1</a></li><li class="tx-center"><a href="javascript:;" class="tx-middle" title="\uc911\ub2e8">\uc911</a></li><li class="tx-right"><a href="javascript:;" class="tx-bottom" title="\ud558\ub2e8">\ud558</a></li></ul><ul class="tx-3cell"><li class="tx-left"><a href="javascript:;" class="tx-alignleft" title="\uc67c\ucabd \uc815\ub82c">\uc88c</a></li><li class="tx-center"><a href="javascript:;" class="tx-aligncenter" title="\uac00\uc6b4\ub370 \uc815\ub82c">\uc911</a></li><li class="tx-right"><a href="javascript:;" class="tx-alignright" title="\uc624\ub978\ucabd \uc815\ub82c">\uc6b0</a></li></ul></div></div></div><div class="tx-table-edit-design"><div class="tx-table-edit-design-wrapper"><dl><dt>\ud14c\ub450\ub9ac\uc120\ud0dd</dt><dd class="tx-table-edit-borderrange tx-btn-widget"><a href="javascript:;" class="tx-icon">\ud14c\ub450\ub9ac</a><a href="javascript:;" class="tx-arrow">\ud14c\ub450\ub9ac</a><div class="tx-menu"></div></dd><dt>\uc120</dt><dd class="tx-table-edit-bordercolor tx-btn-widget-tbg"><a href="javascript:;" class="tx-icon">\uc120\uc0c9</a><a href="javascript:;" class="tx-arrow">\uc120\uc0c9</a><div class="tx-colorpallete"></div></dd><dd class="tx-table-edit-borderwidth tx-btn-widget"><a href="javascript:;" class="tx-icon">\uad75\uae30</a><a href="javascript:;" class="tx-arrow">\uad75\uae30</a><div class="tx-menu"></div></dd><dd class="tx-table-edit-borderstyle tx-btn-widget"><a href="javascript:;" class="tx-icon">\uc2a4\ud0c0\uc77c</a><a href="javascript:;" class="tx-arrow">\uc2a4\ud0c0\uc77c</a><div class="tx-menu"></div></dd><dt>\ubc30\uacbd\uc0c9</dt><dd class="tx-table-edit-backcolor tx-btn-widget-brbg"><a href="javascript:;" class="tx-icon">\ubc30\uacbd\uc0c9</a><a href="javascript:;" class="tx-arrow">\ubc30\uacbd\uc0c9</a><div class="tx-colorpallete" unselectable="on"></div></dd></dl></div></div><div class="tx-table-edit-template"><div class="tx-table-edit-template-wrapper"><ul><!--li class="tx-ex1"><a href="javascript:"></a></li--></ul><a href="javascript:;" class="tx-button-on">\ub354\ubcf4\uae30</a><ul class="tx-table-edit-template-all"><!--li class="tx-ex1"><a href="javascript:"></a></li--></ul></div></div><div class="tx-table-edit-main"><a href="javascript:;" class="tx-confirm">\ud655\uc778</a><a href="javascript:;" class="tx-cancel">\ucde8\uc18c</a></div></div>');
        h.Menu.Table.TableEdit = h.Class.create({
            $const: {
                __OPTIONS: {
                    WIDTH: [{
                        label: "1pt",
                        title: "1px",
                        klass: "tx-1px",
                        data: "1"
                    }, {
                        label: "2pt",
                        title: "2px",
                        klass: "tx-2px",
                        data: "2"
                    }, {
                        label: "3pt",
                        title: "3px",
                        klass: "tx-3px",
                        data: "3"
                    }, {
                        label: "4pt",
                        title: "4px",
                        klass: "tx-4px",
                        data: "4"
                    }, {
                        label: "5pt",
                        title: "5px",
                        klass: "tx-5px",
                        data: "5"
                    }, {
                        label: "6pt",
                        title: "6px",
                        klass: "tx-6px",
                        data: "6"
                    }, {
                        label: "7pt",
                        title: "7px",
                        klass: "tx-7px",
                        data: "7"
                    }],
                    RANGE: [{
                        label: "\ubaa8\ub4e0 \ud14c\ub450\ub9ac",
                        title: "\uc804\uccb4",
                        klass: "tx-all",
                        data: "all"
                    }, {
                        label: "\ubc14\uae65 \ud14c\ub450\ub9ac",
                        title: "\ubc14\uae65\ucabd",
                        klass: "tx-out",
                        data: "out"
                    }, {
                        label: "\uc548\ucabd \ud14c\ub450\ub9ac",
                        title: "\uc548\ucabd",
                        klass: "tx-in",
                        data: "in"
                    }, {
                        label: "\uc704\ucabd \ud14c\ub450\ub9ac",
                        title: "\uc704\ucabd",
                        klass: "tx-top",
                        data: "top"
                    }, {
                        label: "\uc544\ub798\ucabd \ud14c\ub450\ub9ac",
                        title: "\uc544\ub7ab\ucabd",
                        klass: "tx-bottom",
                        data: "bottom"
                    }, {
                        label: "\uc67c\ucabd \ud14c\ub450\ub9ac",
                        title: "\uc67c\ucabd",
                        klass: "tx-left",
                        data: "left"
                    }, {
                        label: "\uc624\ub978\ucabd \ud14c\ub450\ub9ac",
                        title: "\uc624\ub978\ucabd",
                        klass: "tx-right",
                        data: "right"
                    }],
                    STYLE: [{
                        label: "\uc5c6\uc74c",
                        title: "\uc5c6\uc74c",
                        klass: "tx-none",
                        data: "none"
                    }, {
                        label: "\uc2e4\uc120",
                        title: "\uc2e4\uc120",
                        klass: "tx-solid",
                        data: "solid"
                    }, {
                        label: "\uad75\uc740\uc810\uc120",
                        title: "\uad75\uc740\uc810\uc120",
                        klass: "tx-dashed",
                        data: "dashed"
                    }, {
                        label: "\uc810\uc120",
                        title: "\uc810\uc120",
                        klass: "tx-dotted",
                        data: "dotted"
                    }]
                }
            },
            initialize: function (z) {
                if (!z.table) {
                    alert("\ud3b8\uc9d1\ud560 \ud14c\uc774\ube14\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return
                }
                var A = this.config = u.extend({}, z);
                this.previewTable = new h.Menu.Table.TableEdit.PreviewTable(A);
                this.realTable = new h.Menu.Table.TableEdit.TableEditor(A);
                this.elContainer = this.elPreviewArea = j;
                this.createTableEditLayer();
                this.blackBox = z.editor.getBlackBox();
                this.blackBox.show(this.elContainer);
                this.eventBinding();
                this.showMenu(0);
                this.borderRange = "all"
            },
            createTableEditLayer: function () {
                this.elPreviewArea = tx.div({
                    className: "tx-preview"
                });
                this.elPreviewArea.appendChild(this.previewTable.getTable());
                this.elContainer = tx.div({
                    className: "tx-table-edit-container"
                });
                this.elContainer.appendChild(this.elPreviewArea);
                this.elMenu = h.MarkupTemplate.get("table.edit").evaluateAsDom({});
                this.elContainer.appendChild(this.elMenu);
                var z = tx.div({
                    style: {
                        clear: "both"
                    }
                });
                z.style.clear = "both";
                this.elContainer.appendChild(z)
            },
            _eventBindingTab: function () {
                var z = this.showMenu = function (G) {
                    if (isNaN(G)) {
                        return
                    }
                    for (var F = 0; F < B.length; F++) {
                        u.removeClassName(D, "tx-tab-menu" + (F + 1));
                        u.hide(C[F])
                    }
                    u.addClassName(D, "tx-tab-menu" + (G + 1));
                    u.show(C[G])
                };
                var D = w.collect(this.elMenu, "ul.tx-tab");
                var B = w.collectAll(D, "li");
                var C = [w.collect(this.elContainer, "div.tx-table-edit-layout"), w.collect(this.elContainer, "div.tx-table-edit-design"), w.collect(this.elContainer, "div.tx-table-edit-template")];
                var E = function (G, F) {
                    z(F);
                    return d
                };
                for (var A = 0; A < B.length; A++) {
                    u.observe(B[A], "click", E.bindAsEventListener(this, A))
                }
            },
            _eventBindingLayoutMenu: function () {
                var A = this;
                var D = w.collectAll(w.collect(this.elMenu, ".tx-table-edit-layout"), "a");
                var z = ["addRowUpper", "addRowBelow", "addColLeft", "addColRight", "removeCol", "removeRow", "merge", "split", "changeTextValignTop", "changeTextValignMiddle", "changeTextValignBottom", "changeTextAlignLeft", "changeTextAlignCenter", "changeTextAlignRight"];
                var F = function (J) {
                    var I = u.findElement(J, "li");
                    var H = I.parentNode;
                    if (I) {
                        var G = u.classNames(I)[0].replace("tx", "");
                        H.className = H.className + G
                    }
                };
                var C = function (H) {
                    var G = u.findElement(H, "ul");
                    if (G) {
                        G.className = G.className.replace(/-right|-center|-left/, "")
                    }
                };
                var E = function (H, G) {
                    u.stop(H);
                    A[z[G]]();
                    return d
                };
                for (var B = 0; B < D.length; B++) {
                    u.observe(D[B], "click", E.bindAsEventListener(this, B));
                    u.observe(D[B], "mouseover", F);
                    u.observe(D[B], "mouseout", C)
                }
            },
            _eventBindingDesignMenu: function () {
                var z = this;
                var B = w.collect(this.elMenu, "div.tx-table-edit-design");
                var A = this.config.editor.toolbar;
                var C = w.collect(B, "dd.tx-table-edit-backcolor a.tx-icon");
                A.makeWidget(new h.Button.ColorWidget({
                    status: v,
                    el: w.collect(B, "dd.tx-table-edit-backcolor")
                }), new h.Menu.ColorPallete({
                    el: w.collect(this.elMenu, "dd.tx-table-edit-backcolor div.tx-colorpallete"),
                    thumbs: h.__CONFIG_COMMON.thumbs
                }), function (F) {
                    if (!u.hasClassName(C, "tx-selected")) {
                        u.addClassName(C, "tx-selected")
                    }
                    z.changeCellStyle("changeBackColor", F)
                });
                var D = w.collect(B, "dd.tx-table-edit-borderrange a.tx-icon");
                A.makeWidget(new h.Button.Widget({
                    status: v,
                    el: w.collect(B, "dd.tx-table-edit-borderrange")
                }), new h.Menu.Select({
                    el: w.collect(B, "dd.tx-table-edit-borderrange div.tx-menu"),
                    options: h.Menu.Table.TableEdit.__OPTIONS.RANGE
                }), function (F) {
                    u.removeClassName(D, D.previousClassName || "tx-range");
                    D.previousClassName = "tx-range-" + F;
                    u.addClassName(D, "tx-range-" + F);
                    z.setBorderRange(F)
                });
                var E = w.collect(B, "dd.tx-table-edit-bordercolor a.tx-icon");
                A.makeWidget(new h.Button.ColorWidget({
                    status: v,
                    el: w.collect(B, "dd.tx-table-edit-bordercolor")
                }), new h.Menu.ColorPallete({
                    el: w.collect(this.elMenu, "dd.tx-table-edit-bordercolor div.tx-colorpallete"),
                    thumbs: h.__CONFIG_COMMON.thumbs
                }), function (F) {
                    if (!u.hasClassName(E, "tx-selected")) {
                        u.addClassName(E, "tx-selected")
                    }
                    z.changeCellStyle("changeBorderColor", F)
                });
                A.makeWidget(new h.Button.Widget({
                    status: v,
                    el: w.collect(B, "dd.tx-table-edit-borderwidth")
                }), new h.Menu.Select({
                    el: w.collect(B, "dd.tx-table-edit-borderwidth div.tx-menu"),
                    options: h.Menu.Table.TableEdit.__OPTIONS.WIDTH
                }), function (G) {
                    var F = G.toPx();
                    z.changeCellStyle("changeBorderWidth", F)
                });
                A.makeWidget(new h.Button.Widget({
                    status: v,
                    el: w.collect(B, "dd.tx-table-edit-borderstyle")
                }), new h.Menu.Select({
                    el: w.collect(B, "dd.tx-table-edit-borderstyle div.tx-menu"),
                    options: h.Menu.Table.TableEdit.__OPTIONS.STYLE
                }), function (F) {
                    z.changeCellStyle("changeBorderType", F)
                })
            },
            _eventBidingTemplateMenu: function () {
                var F = w.collectAll(this.elMenu, "div.tx-table-edit-template ul");
                var E = F[0];
                var B = F[1];
                var C = (new h.Tool.Table.TemplateWizard()).getTemplateList();
                var z = this;
                var A = function (K, J, L) {
                    for (var I = 0; I < K.length; I++) {
                        var H = tx.li({
                            className: "tx-" + K[I].klass
                        });
                        var M = tx.a({
                            href: "javascript:;"
                        });
                        var G = tx.span(" ");
                        u.observe(M, "click", function (N) {
                            return function () {
                                z.applyTemplateStyle(N);
                                return d
                            }
                        }(I + L));
                        M.appendChild(G);
                        H.appendChild(M);
                        J.appendChild(H)
                    }
                };
                A(C.slice(10), B, 10);
                A(C.slice(1, 10), E, 1);
                var D = w.collect(this.elMenu, "a.tx-button-on");
                u.observe(D, "click", function () {
                    D.className = u.hasClassName(D, "tx-button") ? "tx-button-on" : "tx-button";
                    u.toggle(B);
                    return d
                })
            },
            _eventBindingMainMenu: function () {
                var B = this;
                var A = w.collect(this.elContainer, "div.tx-table-edit-main");
                var C = w.collect(A, "a.tx-confirm");
                u.observe(C, "click", function () {
                    B.done();
                    return d
                });
                var z = w.collect(A, "a.tx-cancel");
                u.observe(z, "click", function () {
                    B.cancel();
                    return d
                })
            },
            eventBinding: function () {
                this._eventBindingTab();
                this._eventBidingTemplateMenu();
                this._eventBindingLayoutMenu();
                this._eventBindingDesignMenu();
                this._eventBindingMainMenu()
            },
            getContainer: function () {
                return this.elContainer
            },
            _executeLayoutCommand: function (z, A) {
                this.previewTable.clearSelection();
                this.previewTable[z](A);
                this.previewTable.refreshCoord();
                this.realTable[z](A);
                this.previewTable.clearBoundary()
            },
            addRowUpper: function () {
                var z = this.previewTable.getSelectedRectCoord().sy;
                if (z < 0) {
                    alert("\ucd94\uac00\ub420 \ud589\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return
                }
                if (z != 0 && !x.canAddUpperRow(z, this.previewTable.getTdMatrix())) {
                    alert("\uc88c\uc6b0\uce21\uc5d0 \ud569\uccd0\uc9c4 \ud589\uc774 \uc788\uc5b4\uc11c \ud589\uc744 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");
                    return
                }
                this._executeLayoutCommand("addRowUpper", z)
            },
            addRowBelow: function () {
                var z = this.previewTable.getSelectedRectCoord().ey;
                if (z < 0) {
                    alert("\ucd94\uac00\ub420 \ud589\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return
                }
                if (this.previewTable.getTdMatrix().length - 1 != z && !x.canAddBelowRow(z, this.previewTable.getTdMatrix())) {
                    alert("\uc88c\uc6b0\uce21\uc5d0 \ud569\uccd0\uc9c4 \ud589\uc774 \uc788\uc5b4\uc11c \ud589\uc744 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");
                    return
                }
                this._executeLayoutCommand("addRowBelow", z)
            },
            addColLeft: function () {
                var z = this.previewTable.getSelectedRectCoord().sx;
                if (z < 0) {
                    alert("\ucd94\uac00\ub420 \uc5f4\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return
                }
                if (0 != z && !x.canAddLeftCol(z, this.previewTable.getTdMatrix())) {
                    alert("\uc704\uc544\ub798\uc5d0 \ud569\uccd0\uc9c4 \uc5f4\uc774 \uc788\uc5b4\uc11c \uc5f4\uc744 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");
                    return
                }
                this._executeLayoutCommand("addColLeft", z)
            },
            addColRight: function () {
                var z = this.previewTable.getSelectedRectCoord().ex;
                if (z < 0) {
                    alert("\ucd94\uac00\ub420 \uc5f4\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return
                }
                if (this.previewTable.getTdMatrix()[0].length - 1 != z && !x.canAddRightCol(z, this.previewTable.getTdMatrix())) {
                    alert("\uc704\uc544\ub798\uc5d0 \ud569\uccd0\uc9c4 \uc5f4\uc774 \uc788\uc5b4\uc11c \uc5f4\uc744 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");
                    return
                }
                this._executeLayoutCommand("addColRight", z)
            },
            removeRow: function () {
                var z = this.previewTable.getSelectedRectCoord();
                var B = z.sy;
                var A = z.ey;
                if (B < 0) {
                    alert("\uc0ad\uc81c\ud560 \ud589\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return
                }
                if (!x.canRemoveRow(z, this.previewTable.getTdMatrix())) {
                    alert("\uc0ad\uc81c\ud560 \uc218 \uc5c6\ub294 \ud589\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.");
                    return
                }
                if (x.isAllRowSelected(z, this.previewTable.getTdMatrix())) {
                    alert("\ubaa8\ub4e0 \ud589\uc744 \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");
                    return
                }
                this.previewTable.clearSelection();
                for (var C = B; C <= A; C++) {
                    this.previewTable.removeRow(B);
                    this.realTable.removeRow(B)
                }
                this.previewTable.refreshCoord();
                this.previewTable.clearBoundary()
            },
            removeCol: function () {
                var z = this.previewTable.getSelectedRectCoord();
                var C = z.sx;
                var B = z.ex;
                if (C < 0) {
                    alert("\uc0ad\uc81c\ud560 \uc5f4\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return
                }
                if (!x.canRemoveCol(z, this.previewTable.getTdMatrix())) {
                    alert("\uc0ad\uc81c\ud560 \uc218 \uc5c6\ub294 \uc5f4\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.");
                    return
                }
                if (x.isAllColSelected(z, this.previewTable.getTdMatrix())) {
                    alert("\ubaa8\ub4e0 \uc5f4\uc744 \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");
                    return
                }
                for (var A = C; A <= B; A++) {
                    this._executeLayoutCommand("removeCol", C)
                }
            },
            merge: function () {
                var z = this.previewTable.getSelectedRectCoord();
                if (z.sx < 0 || z.sy < 0) {
                    alert("\ud569\uce60 \uce78\ub4e4\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return d
                }
                if (this.previewTable.getTdMatrix()[z.sy][z.sx] == this.previewTable.getTdMatrix()[z.ey][z.ex]) {
                    alert("\ud569\uce60\uce78\uc744 \ub450\uce78\uc774\uc0c1 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return d
                }
                if (!x.canMerge(z, this.previewTable.getTdMatrix())) {
                    alert("\ud569\uce58\uae30\ub97c \uc218\ud589\ud560 \uc218 \uc5c6\ub294 \uc120\ud0dd\uc601\uc5ed\uc785\ub2c8\ub2e4.");
                    return d
                }
                this.previewTable.clearSelection();
                this.previewTable.merge(z);
                this.previewTable.refreshCoord();
                this.realTable.merge(z);
                this.previewTable.clearBoundary()
            },
            split: function () {
                var z = this.previewTable.getSelectedRectCoord();
                if (z.sx < 0 || z.sy < 0) {
                    alert("\ub098\ub20c \uce78\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return d
                }
                if (!x.canSplit(z, this.previewTable.getTdMatrix())) {
                    alert("\ub098\ub204\uc5b4\uc9c8 \uce78\uc744 \ud55c\uce78\ub9cc \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return d
                }
                if (!x.isMergedCell(z, this.previewTable.getTdMatrix())) {
                    alert("\ub354\uc774\uc0c1 \ub098\ub20c \uc218 \uc5c6\ub294 \uce78\uc785\ub2c8\ub2e4. \ub450\uce78\uc774\uc0c1 \ud569\uccd0\uc9c4 \uce78\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
                    return d
                }
                this.previewTable.clearSelection();
                this.previewTable.split(z);
                this.previewTable.refreshCoord();
                this.realTable.split(z);
                this.previewTable.clearBoundary()
            },
            changeCellStyle: function (B, A) {
                var z = this.previewTable.getSelectedRectCoord();
                this.previewTable[B](z, A, this.borderRange);
                this.realTable[B](z, A, this.borderRange)
            },
            _changeTextAlign: function (A) {
                var z = this.previewTable.getSelectedRectCoord();
                this.previewTable.changeTextAlign(z, A);
                this.realTable.changeTextAlign(z, A)
            },
            changeTextAlignLeft: function () {
                this._changeTextAlign("left")
            },
            changeTextAlignCenter: function () {
                this._changeTextAlign("center")
            },
            changeTextAlignRight: function () {
                this._changeTextAlign("right")
            },
            _changeTextValign: function (A) {
                var z = this.previewTable.getSelectedRectCoord();
                this.previewTable.changeTextValign(z, A);
                this.realTable.changeTextValign(z, A)
            },
            changeTextValignTop: function () {
                this._changeTextValign("top")
            },
            changeTextValignMiddle: function () {
                this._changeTextValign("middle")
            },
            changeTextValignBottom: function () {
                this._changeTextValign("bottom")
            },
            applyTemplateStyle: function (z) {
                if (isNaN(z)) {
                    return
                }
                this.previewTable.applyTemplateStyle(z);
                this.realTable.applyTemplateStyle(z)
            },
            setBorderRange: function (z) {
                this.borderRange = z
            },
            cancel: function () {
                this.blackBox.hide()
            },
            done: function () {
                w.insertAt(this.realTable.getTable(), this.config.table);
                w.remove(this.config.table);
                this.blackBox.hide()
            }
        });
        h.Menu.Table.TableEdit.TableEditor = h.Class.create({
            $const: {
                BORDER_STYLE: "1px solid #ccc"
            },
            initialize: function (A) {
                this.elTable = this.createTable(A.table);
                this.initTdMatrix();
                this.tableConfig = {};
                var z = A.editor.getCanvas();
                this.doc = z.getCurrentPanel().getDocument()
            },
            initTdMatrix: function () {
                var z = new h.Tool.Table.TableCellMatrixer(this.elTable);
                this.tdMatrix = z.getTdMatrix();
                this.rowSize = z.getRowSize();
                this.colSize = z.getColSize()
            },
            createTable: function (z) {
                return z.cloneNode(v)
            },
            setTdBorderStyle: function (B, A, C) {
                var z = h.Menu.Table.TableEdit.TableEditor.BORDER_STYLE;
                u.setStyle(B, {
                    borderRight: z,
                    borderBottom: z,
                    borderTop: (A) ? z : "",
                    borderLeft: (C) ? z : ""
                })
            },
            createTd: function (A) {
                var B = this.doc.createElement("td");
                B.innerHTML = "&nbsp;";
                for (var z in A) {
                    B.setAttribute(z, A[z])
                }
                return B
            },
            createTr: function () {
                var A = this.doc.createElement("tr");
                for (var z = 0; z < this.colSize; z++) {
                    var B = this.createTd({});
                    this.setTdBorderStyle(B, d, (z == 0));
                    A.appendChild(B)
                }
                return A
            },
            addRowUpper: function (z) {
                this._addRow(z);
                if (z == 0) {
                    for (var A = 0; A < this.colSize; A++) {
                        u.setStyle(this.tdMatrix[0][A], {
                            borderTop: "1px solid #000"
                        });
                        u.setStyle(this.tdMatrix[1][A], {
                            borderTop: "none"
                        })
                    }
                }
            },
            addRowBelow: function (z) {
                this._addRow(z, v)
            },
            _addRow: function (C, A) {
                var D = dGetties(this.elTable, "tr");
                var B = D[C];
                var z = this.createTr();
                w[(A) ? "insertNext" : "insertAt"](z, B);
                if (A) {
                    C++
                }
                this.tdMatrix.splice(C, 0, w.collectAll(z, "td"));
                this.rowSize++
            },
            addColLeft: function (z) {
                this._addCol(z);
                if (z == 0) {
                    for (var A = 0; A < this.rowSize; A++) {
                        u.setStyle(this.tdMatrix[A][1], {
                            borderLeft: "none"
                        })
                    }
                }
            },
            addColRight: function (z) {
                this._addCol(z, v)
            },
            _resizeAllCellWidth: function () {
                var B = u.getStyle(this.elTable, "width") || this.elTable.getAttribute("width") || 389;
                B = parseInt(B);
                if (!B) {
                    return
                }
                var C = Math.round(B / this.colSize, 0);
                for (var A = 0; A < this.rowSize; A++) {
                    for (var z = 0; z < this.colSize; z++) {
                        u.setStyle(this.tdMatrix[A][z], {
                            width: (C * y.getColSpan(this.tdMatrix[A][z])).toPx()
                        })
                    }
                }
            },
            _addCol: function (B, F) {
                var A = [];
                var E = j;
                var D = function (K, H, J, I) {
                    var G = H;
                    while (J[K][G] && A.contains(J[K][G])) {
                        G += (I) ? -1 : 1
                    }
                    A.push(J[K][G]);
                    return J[K][G]
                };
                for (var C = 0; C < this.rowSize; C++) {
                    E = D(C, B, this.tdMatrix, F);
                    var z = this.createTd({});
                    this.setTdBorderStyle(z, C == 0, B == 0);
                    w[(!F) ? "insertAt" : "insertNext"](z, E);
                    this.tdMatrix[C].splice(F ? B + 1 : B, 0, z)
                }
                this.colSize++;
                this._resizeAllCellWidth()
            },
            removeRow: function (z) {
                var B = this.tdMatrix[z][0].parentNode;
                w.remove(B);
                this.tdMatrix.splice(z, 1);
                this.rowSize--;
                if (z == 0) {
                    for (var A = 0; A < this.colSize; A++) {
                        this.setTdBorderStyle(this.tdMatrix[0][A], z == 0, A == 0)
                    }
                }
            },
            removeCol: function (z) {
                var A;
                for (A = 0; A < this.rowSize; A++) {
                    w.remove(this.tdMatrix[A][z]);
                    this.tdMatrix[A].splice(z, 1)
                }
                this.colSize--;
                for (A = 0; A < this.rowSize; A++) {
                    if (this.tdMatrix[A][z]) {
                        this.setTdBorderStyle(this.tdMatrix[A][z], A == 0, z == 0)
                    }
                }
            },
            merge: function (J) {
                var K = 0,
                    E;
                for (E = J.sx; E <= J.ex; E) {
                    var F = y.getColSpan(this.tdMatrix[J.sy][E]);
                    K += F;
                    E += F
                }
                var A = 0;
                for (E = J.sy; E <= J.ey; E) {
                    var H = y.getRowSpan(this.tdMatrix[E][J.sx]);
                    A += H;
                    E += H
                }
                var I = this.createTd({
                    rowSpan: A,
                    colSpan: K
                });
                var G = function (L) {
                    return (L.parentNode && L.parentNode.nodeType != "11")
                };
                this.setTdBorderStyle(I, J.sy == 0, J.sx == 0);
                var z = this.tdMatrix[J.sy][J.sx];
                w.insertAt(I, z);
                var B = "";
                for (E = J.sy; E <= J.ey; E++) {
                    var D = "";
                    for (var C = J.sx; C <= J.ex; C++) {
                        if (G(this.tdMatrix[E][C])) {
                            w.remove(this.tdMatrix[E][C]);
                            D += this.tdMatrix[E][C].innerHTML + ""
                        }
                        this.tdMatrix[E][C] = I
                    }
                    B += D + ""
                }
                I.innerHTML = B;
                this._resizeAllCellWidth()
            },
            split: function (M) {
                var L = this;
                var A = function (O, N) {
                    if (!L.tdMatrix[O][N - 1]) {
                        return j
                    } else {
                        if (y.getRowSpan(L.tdMatrix[O][N - 1]) > 1) {
                            return A(O, N - 1)
                        } else {
                            return L.tdMatrix[O][N - 1]
                        }
                    }
                };
                var G = M.sy;
                var B = M.sx;
                var C = this.tdMatrix[G][B];
                var I = C.innerHTML;
                var K = y.getRowSpan(C);
                var H = y.getColSpan(C);
                var J = w.collectAll(this.elTable, "tr");
                for (var F = G; F < G + K; F++) {
                    for (var E = B; E < B + H; E++) {
                        var D = this.createTd({});
                        this.setTdBorderStyle(D, F == 0, E == 0);
                        var z = A(F, E);
                        if (z) {
                            w.insertNext(D, z)
                        } else {
                            w.insertFirst(J[F], D)
                        }
                        this.tdMatrix[F][E] = D
                    }
                }
                this.tdMatrix[G][B].innerHTML = I;
                w.remove(C);
                this._resizeAllCellWidth()
            },
            _changeTopBorderStyle: function (A, D, E) {
                var C = {};
                C[(A.sy == 0) ? "borderTop" + D : "borderBottom" + D] = E;
                var z = (A.sy == 0) ? 0 : A.sy - 1;
                for (var B = A.sx; B <= A.ex; B++) {
                    u.setStyle(this.tdMatrix[z][B], C)
                }
            },
            _changeBottomBorderStyle: function (A, D, E) {
                var C = {};
                C["borderBottom" + D] = E;
                var z = A.ey;
                for (var B = A.sx; B <= A.ex; B++) {
                    u.setStyle(this.tdMatrix[z][B], C)
                }
            },
            _changeLeftBorderStyle: function (z, D, E) {
                var C = {};
                C[(z.sx == 0) ? "borderLeft" + D : "borderRight" + D] = E;
                var A = (z.sx == 0) ? 0 : z.sx - 1;
                for (var B = z.sy; B <= z.ey; B++) {
                    u.setStyle(this.tdMatrix[B][A], C)
                }
            },
            _changeRightBorderStyle: function (z, D, E) {
                var C = {};
                C["borderRight" + D] = E;
                var A = z.ex;
                for (var B = z.sy; B <= z.ey; B++) {
                    u.setStyle(this.tdMatrix[B][A], C)
                }
            },
            _changeInBorderStyle: function (z, D, E) {
                var C = {};
                for (var B = z.sy; B <= z.ey; B++) {
                    for (var A = z.sx; A <= z.ex; A++) {
                        C = {};
                        if (B != z.ey) {
                            C["borderBottom" + D] = E
                        }
                        if (A != z.ex) {
                            C["borderRight" + D] = E
                        }
                        u.setStyle(this.tdMatrix[B][A], C)
                    }
                }
            },
            _changeOutBorderStyle: function (z, A, B) {
                this._changeTopBorderStyle(z, A, B);
                this._changeBottomBorderStyle(z, A, B);
                this._changeLeftBorderStyle(z, A, B);
                this._changeRightBorderStyle(z, A, B)
            },
            _changeBorderStyle: function (D, A, B, C) {
                var z = this._getValidRectCoord(D);
                this._removeTableBorderProperty();
                this._removeTableSpacingProperty();
                switch (C) {
                case "top":
                    this._changeTopBorderStyle(z, A, B);
                    break;
                case "bottom":
                    this._changeBottomBorderStyle(z, A, B);
                    break;
                case "left":
                    this._changeLeftBorderStyle(z, A, B);
                    break;
                case "right":
                    this._changeRightBorderStyle(z, A, B);
                    break;
                case "in":
                    this._changeInBorderStyle(z, A, B);
                    break;
                case "out":
                    this._changeOutBorderStyle(z, A, B);
                    break;
                case "all":
                    this._changeInBorderStyle(z, A, B);
                    this._changeOutBorderStyle(z, A, B);
                    break;
                default:
                    break
                }
            },
            _getValidRectCoord: function (z) {
                return {
                    sy: (z.sy < 0) ? 0 : z.sy,
                    ex: (z.ex < 0) ? this.colSize - 1 : z.ex,
                    ey: (z.ey < 0) ? this.rowSize - 1 : z.ey,
                    sx: (z.sx < 0) ? 0 : z.sx
                }
            },
            _removeTableBorderProperty: function () {
                var A = parseInt(this.elTable.getAttribute("border"));
                if (A > 0) {
                    this.elTable.setAttribute("border", "0");
                    var z = new h.Tool.Table.TemplateWizard();
                    z.applyStyle(this.elTable, 0)
                }
            },
            _removeTableSpacingProperty: function () {
                this.elTable.setAttribute("cellSpacing", "0")
            },
            changeBorderColor: function (z, B, A) {
                this._changeBorderStyle(z, "Color", B, A)
            },
            changeBorderType: function (z, B, A) {
                this._changeBorderStyle(z, "Style", B, A)
            },
            changeBorderWidth: function (z, C, A) {
                var B = C.toPx();
                this._changeBorderStyle(z, "Width", B, A)
            },
            _changeCellStyle: function (z, B, E) {
                var F = this._getValidRectCoord(z);
                var D = {};
                D[B] = E;
                for (var C = F.sy; C <= F.ey; C++) {
                    for (var A = F.sx; A <= F.ex; A++) {
                        u.setStyle(this.tdMatrix[C][A], D)
                    }
                }
            },
            changeBackColor: function (z, A) {
                this._changeCellStyle(z, "backgroundColor", A)
            },
            changeTextAlign: function (z, A) {
                this._changeCellStyle(z, "textAlign", A)
            },
            changeTextValign: function (z, A) {
                this._changeCellStyle(z, "verticalAlign", A)
            },
            applyTemplateStyle: function (A) {
                this._removeTableBorderProperty();
                this._removeTableSpacingProperty();
                var z = new h.Tool.Table.TemplateWizard();
                z.applyStyle(this.elTable, A)
            },
            getTdMatrix: function () {
                return this.tdMatrix
            },
            getTable: function () {
                return this.elTable
            }
        });
        h.Menu.Table.TableEdit.PreviewTable = h.Class.create({
            $extend: h.Menu.Table.TableEdit.TableEditor,
            initialize: function (z) {
                this.$super.initialize(z);
                this.tableConfig = {};
                this.countOfExcuteResizeToParentClientWidth = 0;
                this.boundary = e;
                this.boundary.clear();
                this.refreshCoord();
                this.clearTable();
                this.eventBinding()
            },
            createTd: function (z) {
                return tx.td(z, "+")
            },
            createTr: function () {
                var A = tx.tr();
                for (var z = 0; z < this.colSize; z++) {
                    var B = this.createTd({});
                    this.setTdBorderStyle(B, d, (z == 0));
                    A.appendChild(B)
                }
                return A
            },
            createTable: function (z) {
                if (u.msie || u.opera) {
                    var A = tx.div();
                    A.innerHTML = z.outerHTML;
                    return A.firstChild
                } else {
                    return z.cloneNode(v)
                }
            },
            clearTable: function () {
                if (u.gecko) {
                    u.setStyle(this.elTable, {
                        borderCollapse: "separate"
                    })
                }
                this.elTable.setAttribute("width", "");
                for (var A = 0; A < this.rowSize; A++) {
                    for (var z = 0; z < this.colSize; z++) {
                        y.clearContent(this.tdMatrix[A][z])
                    }
                }
                this._resizeAllCellWidth()
            },
            clearSelection: function () {
                var B = this.boundary;
                if (B.top < 0 || B.left < 0) {
                    return
                }
                for (var A = B.top; A <= B.bottom; A++) {
                    for (var z = B.left; z <= B.right; z++) {
                        y.setUnselect(this.tdMatrix[A][z])
                    }
                }
            },
            setSelection: function () {
                var B = this.boundary;
                for (var A = B.top; A <= B.bottom; A++) {
                    for (var z = B.left; z <= B.right; z++) {
                        y.setSelect(this.tdMatrix[A][z])
                    }
                }
            },
            _clearCoord: function () {
                for (var A = 0; A < this.rowSize; A++) {
                    for (var z = 0; z < this.colSize; z++) {
                        y.clearCoords(this.tdMatrix[A][z])
                    }
                }
            },
            refreshCoord: function () {
                this._clearCoord();
                for (var A = 0; A < this.rowSize; A++) {
                    for (var z = 0; z < this.colSize; z++) {
                        var B = this.tdMatrix[A][z].getAttribute("colClass");
                        if (!B) {
                            y.setCoords(this.tdMatrix[A][z], A, z)
                        }
                    }
                }
                this.resizeToParentClientWidth()
            },
            resizeToParentClientWidth: function () {
                var A, z;
                A = this;
                z = this.elTable.parentNode;
                if (z && 0 < z.clientWidth) {
                    this.elTable.style.width = z.clientWidth + "px"
                } else {
                    if (this.countOfExcuteResizeToParentClientWidth < 30) {
                        this.countOfExcuteResizeToParentClientWidth += 1;
                        setTimeout(function () {
                            A.resizeToParentClientWidth()
                        }, 16);
                        return
                    }
                }
                this.countOfExcuteResizeToParentClientWidth = 0
            },
            getSelectedRectCoord: function () {
                return this.boundary.getRectCoord()
            },
            clearBoundary: function () {
                this.boundary.clear()
            },
            eventBinding: function () {
                var A = this;
                var C = j;
                var z = function (G) {
                    var F = y.getEventElement(G, v);
                    if (F) {
                        var E = y.getMinCoord(F);
                        var H = y.getMaxCoord(F);
                        A.clearSelection();
                        A.boundary.init(E.x - 1, E.y - 1);
                        A.boundary.changeBoundary(H.x - 1, H.y - 1);
                        C = F
                    }
                };
                var D = function (F) {
                    if (C) {
                        var E = y.getEventElement(F);
                        if (E && C != E) {
                            var G = y.getMinCoord(E);
                            C = E;
                            A.clearSelection();
                            A.boundary.changeBoundary(G.x - 1, G.y - 1);
                            A.setSelection()
                        }
                    }
                };
                var B = function (F) {
                    u.stop(F);
                    var E = y.getEventElement(F);
                    if (C) {
                        if (E == C) {
                            A.setSelection()
                        }
                        C = j
                    }
                };
                setTimeout(function () {
                    var F = w.collect(".tx-table-edit-container");
                    var G = function (J) {
                        var K = u.element(J);
                        if (K && K.tagName) {
                            var H = K.className || "";
                            var I = K.tagName.toLowerCase() || "";
                            if (I == "div" && (H.indexOf("tx-table-edit") > -1 || H.indexOf("tx-preview") > -1)) {
                                A.clearSelection();
                                A.boundary.clear();
                                u.stop(J)
                            }
                        }
                    };
                    u.observe(F, "click", G);
                    var E = function () {
                        if (C) {
                            C = j
                        }
                    };
                    u.observe(F, "mouseup", E)
                }, 1000);
                u.observe(this.elTable, "mousedown", z);
                u.observe(this.elTable, "mouseover", D);
                u.observe(this.elTable, "mouseup", B)
            }
        })
    }());
    h.module("Add layer to display notice message on editor area before editing", function (y, z, A, x, e) {
        if (e.initializedMessage) {
            x.observeJob(h.Ev.__IFRAME_LOAD_COMPLETE, function () {
                var C = tx.div({
                    id: "tx-canvas-notice",
                    className: "tx-canvas-notice"
                }, e.initializedMessage);
                u("tx_canvas").insertBefore(C, u("tx_loading"));
                var B = function () {
                    if (u("tx-canvas-notice")) {
                        u("tx_canvas").removeChild(C);
                        if (y.focus) {
                            y.focus()
                        }
                    }
                };
                u.observe(C, "click", B);
                x.observeJob(h.Ev.__CANVAS_DATA_INITIALIZE, B);
                z.observeJob(h.Ev.__TOOL_CLICK, B)
            })
        }
    });
    h.MarkupTemplate.add("table.col.resize.dragger", '<div class="tx-table-col-resize-dragger" style="position:absolute; overflow:hidden; top: 0; left: 0; width: 3px; height: 100%; cursor:col-resize;"></div>');
    h.MarkupTemplate.add("table.row.resize.dragger", '<div class="tx-table-row-resize-dragger" style="position:absolute; overflow:hidden; top: 0; left: 0; width: 100%; height: 3px; cursor:row-resize;"></div>');
    k.addMsg({
        "@table.noselect.alert": "\ud14c\uc774\ube14\uc744 \uc120\ud0dd\ud558\uc2e0 \ud6c4 \uc0ac\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."
    });
    h.Table = {};
    h.module("table selector", function (z, A, B, y, x) {
        var e;
        e = function (E) {
            var D, C, F;
            D = h.MarkupTemplate.get("table.col.resize.dragger").evaluateAsDom({});
            C = h.MarkupTemplate.get("table.row.resize.dragger").evaluateAsDom({});
            F = E.wysiwygEl;
            w.insertFirst(F, D);
            w.insertFirst(F, C);
            u.hide(D);
            u.hide(C)
        };
        y.observeJob(h.Ev.__IFRAME_LOAD_COMPLETE, function () {
            var I, D, F, H, K, E;
            I = new h.Table.Selector(z, x);
            D = new h.Table.Merge(z, x);
            F = new h.Table.Insert(z, x);
            H = new h.Table.Delete(z, x);
            K = new h.Table.Border(z, x);
            E = new h.Table.TemplateLoader();
            e(y);
            var N = y.getPanel(h.Canvas.__WYSIWYG_MODE);
            var G = N.getProcessor();
            var J = function () {
                var O, P;
                if (I.getSelected().isValid() === d) {
                    O = G.getNode();
                    P = h.TableUtil.getClosestByTagNames(["td", "th"], O);
                    if (P) {
                        I.selectByTd(P, P)
                    }
                }
            };
            y.observeElement({
                tag: "table"
            }, function (O) {
                if (A.tools.advanced) {
                    A.tools.advanced.forceOpen()
                }
            });
            var C = {
                range: "all",
                color: "",
                height: 1,
                type: "solid"
            };
            var M = function () {
                var O = A.tools.cellslinecolor;
                if (O) {
                    C.color = O.config.defaultcolor
                }
            };
            M();
            var L = function () {
                alert(TXMSG("@table.noselect.alert"))
            };
            G.table = {
                getTdArr: function () {
                    return I.getSelectedTdArr()
                },
                isDuringSelection: function () {
                    return I.isDuringSelection()
                },
                execute: function (P, O) {
                    if (!O) {
                        J()
                    }
                    if (I.getSelected().isValid()) {
                        P();
                        y.history.saveHistory()
                    } else {
                        L()
                    }
                },
                merge: function () {
                    this.execute(function () {
                        D.merge(I)
                    }, v)
                },
                resetMerge: function () {
                    this.execute(function () {
                        D.resetMerge(I)
                    })
                },
                insertRowAbove: function () {
                    this.execute(function () {
                        F.insertRowAbove(I)
                    })
                },
                insertRowBelow: function () {
                    this.execute(function () {
                        F.insertRowBelow(I)
                    })
                },
                insertColLeft: function () {
                    this.execute(function () {
                        F.insertColLeft(I)
                    })
                },
                insertColRight: function () {
                    this.execute(function () {
                        F.insertColRight(I)
                    })
                },
                deleteRow: function () {
                    this.execute(function () {
                        H.deleteRow(I)
                    })
                },
                deleteCol: function () {
                    this.execute(function () {
                        H.deleteCol(I)
                    })
                },
                setBorderRange: function (O) {
                    C.range = O
                },
                setBorderColor: function (O) {
                    C.color = O;
                    A.fireJobs(h.Ev.__TOOL_CELL_LINE_CHANGE, {
                        color: O
                    })
                },
                setBorderHeight: function (O) {
                    C.height = O;
                    A.fireJobs(h.Ev.__TOOL_CELL_LINE_CHANGE, {
                        height: O
                    })
                },
                setBorderType: function (O) {
                    C.type = O;
                    A.fireJobs(h.Ev.__TOOL_CELL_LINE_CHANGE, {
                        type: O
                    })
                },
                setNoBorder: function () {
                    var O = this;
                    this.execute(function () {
                        K.setTableSelect(I);
                        K.setBorderRange("all");
                        K.changeBorderColor(O.getTdArr(), "");
                        K.changeBorderHeight(O.getTdArr(), "0");
                        K.changeBorderType(O.getTdArr(), "none")
                    })
                },
                setBorderButtons: function (P, O, R) {
                    var Q;
                    Q = A.tools.cellslinecolor;
                    if (Q) {
                        Q.execute(P)
                    }
                    Q = A.tools.cellslineheight;
                    if (Q) {
                        Q.execute(O)
                    }
                    Q = A.tools.cellslinestyle;
                    if (Q) {
                        Q.execute(R)
                    }
                },
                getBorderProperty: function () {
                    return {
                        color: C.color,
                        height: C.height,
                        type: C.type
                    }
                },
                applyBorder: function () {
                    var O = this;
                    this.execute(function () {
                        K.setTableSelect(I);
                        K.setBorderRange(C.range);
                        K.changeBorderColor(O.getTdArr(), C.color);
                        K.changeBorderHeight(O.getTdArr(), C.height);
                        K.changeBorderType(O.getTdArr(), C.type);
                        O.addBorderHistory()
                    })
                },
                addBorderHistory: function () {
                    var O;
                    O = A.tools.cellslinepreview;
                    if (O) {
                        O.addBorderHistory(C)
                    }
                },
                tableBackground: function (P) {
                    var O = this;
                    this.execute(function () {
                        var S, T, R, Q;
                        S = {
                            backgroundColor: P
                        };
                        T = O.getTdArr();
                        Q = T.length;
                        for (R = 0; R < Q; R += 1) {
                            u.setStyle(T[R], S)
                        }
                        I.reset()
                    })
                },
                setTemplateStyle: function (P, O) {
                    if (P) {
                        E.getTemplate(O, function (Q) {
                            Q.apply(P);
                            I.reset()
                        })
                    } else {
                        L()
                    }
                }
            };
            A.fireJobs(h.Ev.__TOOL_CELL_LINE_CHANGE, {
                color: C.color,
                height: C.height,
                type: C.type,
                fromInit: v
            });
            A.observeJob(h.Ev.__TOOL_CLICK, function (O) {
                if (["fontfamily", "fontsize", "bold", "underline", "italic", "strike", "forecolor", "backcolor", "indent", "outdent", "alignleft", "aligncenter", "alignright", "alignfull", "mergecells", "splitcells", "insertcells", "deletecells", "cellsoutline", "cellslinecolor", "cellslineheight", "cellslinestyle", "cellslinepreview", "tablebackcolor", "tabletemplate"].contains(O) === d) {
                    I.reset()
                }
                if (O === "tablebackcolor") {
                    J()
                }
            })
        })
    });
    h.Table.Selector = h.Class.create({
        SELECTED_CLASS_NAME: "tx_table_selected_cell",
        SELECTED_CSS_TEXT: "{background:#e9eeff !important}",
        initialize: function (e) {
            this.canvas = e.getCanvas();
            this.wysiwygPanel = this.canvas.getPanel(h.Canvas.__WYSIWYG_MODE);
            this.htmlBody = this.getHtmlBody();
            this.isDragging = d;
            this.currentTable = j;
            this.currentTd = j;
            this.paintedTdArr = [];
            this.startCellBoundary = new h.TableUtil.Boundary();
            this.endCellBoundary = this.startCellBoundary;
            this.selectedBoundary = new h.TableUtil.Boundary();
            this.tableIndexer = j;
            this.applyCss();
            this.observeEvent()
        },
        getHtmlBody: function () {
            var e;
            e = this.wysiwygPanel.getDocument();
            return e.body
        },
        applyCss: function () {
            var e;
            e = this.wysiwygPanel.getDocument();
            u.applyCSSText(e, "." + this.SELECTED_CLASS_NAME + this.SELECTED_CSS_TEXT)
        },
        observeEvent: function () {
            var e;
            e = this;
            this.canvas.observeJob(h.Ev.__CANVAS_PANEL_MOUSEDOWN, function (y) {
                var x;
                x = u.element(y);
                e.onmousedown(x)
            });
            u.observe(this.htmlBody, "mousemove", function (y) {
                var x;
                x = u.element(y);
                e.onmousemove(x)
            });
            this.canvas.observeJob(h.Ev.__CANVAS_PANEL_MOUSEUP, function (x) {
                e.onmouseup()
            });
            u.observe(i.top, "mouseup", function (x) {
                e.onmouseup()
            });
            this.canvas.observeJob(h.Ev.__CANVAS_PANEL_KEYDOWN, function (x) {
                if (e.isDragging) {
                    u.stop(x);
                    e.reset()
                } else {
                    e.onkeydown(x.ctrlKey, x.keyCode)
                }
            });
            this.canvas.observeJob(h.Ev.__CANVAS_DATA_INITIALIZE, function (x) {
                if (x === h.Canvas.__WYSIWYG_MODE) {
                    e.clearSelected()
                }
            })
        },
        onmousedown: function (x) {
            var y, e;
            this.reset();
            if (this.canvas.config.readonly === d) {
                y = h.TableUtil.getClosestByTagNames(["td", "th"], x);
                e = w.find(y, ".txc-info");
                if (y && !e) {
                    this.selectStart(y);
                    this.turnOnDragging()
                }
            }
        },
        onmousemove: function (x) {
            var z, e, y;
            if (this.isDragging) {
                z = h.TableUtil.getClosestByTagNames(["td", "th"], x);
                if (z) {
                    e = h.TableUtil.getClosestByTagNames(["table"], z);
                    if (e === this.currentTable && z !== this.currentTd) {
                        this.selectEnd(z);
                        this.applySelected();
                        h.TableUtil.collapseCaret(this.wysiwygPanel, x)
                    }
                } else {
                    y = (this.endCellBoundary === this.startCellBoundary);
                    if (this.currentTd && y) {
                        this.selectEnd(this.currentTd);
                        this.applySelected();
                        h.TableUtil.collapseCaret(this.wysiwygPanel, x)
                    }
                }
            }
        },
        onmouseup: function () {
            if (this.isDragging) {
                this.turnOffDragging()
            }
        },
        onkeydown: function (A, z) {
            var y, e, x;
            if (A === d) {
                if (z === u.KEY_DELETE) {
                    y = this.getSelectedTdArr();
                    e = y.length;
                    for (x = 0; x < e; x += 1) {
                        h.TableUtil.emptyTd(y[x])
                    }
                }
                this.reset()
            }
        },
        selectStart: function (e) {
            this.currentTable = h.TableUtil.getClosestByTagNames(["table"], e);
            this.tableIndexer = new h.TableUtil.Indexer(this.currentTable);
            this.startCellBoundary = this.tableIndexer.getBoundary(e);
            this.endCellBoundary = this.startCellBoundary;
            this.currentTd = e
        },
        selectEnd: function (e) {
            this.endCellBoundary = this.tableIndexer.getBoundary(e);
            this.currentTd = e
        },
        applySelected: function () {
            this.calculateSelectedBoundary();
            this.extendSelectedBoundary();
            this.paint()
        },
        calculateSelectedBoundary: function () {
            this.selectedBoundary = new h.TableUtil.Boundary();
            this.selectedBoundary.merge(this.startCellBoundary);
            this.selectedBoundary.merge(this.endCellBoundary)
        },
        extendSelectedBoundary: function () {
            var e;
            e = this.selectedBoundary.isValid();
            while (e) {
                e = this.oneTimeExtendBoundary()
            }
        },
        oneTimeExtendBoundary: function () {
            var z, y, x, A, e;
            z = this.tableIndexer.getTdArr(this.selectedBoundary);
            x = z.length;
            for (y = 0; y < x; y += 1) {
                A = this.tableIndexer.getBoundary(z[y]);
                e = this.selectedBoundary.merge(A);
                if (e) {
                    return v
                }
            }
            return d
        },
        paint: function () {
            var x, e;
            x = this.tableIndexer.getTdArr(this.selectedBoundary);
            e = Array.prototype.without.apply(this.paintedTdArr, x);
            this.paintSelected(x);
            this.eraseSelected(e)
        },
        paintSelected: function (x) {
            var e;
            e = this;
            this.paintedTdArr = [];
            x.each(function (y) {
                u.addClassName(y, e.SELECTED_CLASS_NAME);
                e.paintedTdArr.push(y)
            })
        },
        eraseSelected: function (e) {
            this.removeClassName(e);
            this.paintedTdArr = Array.prototype.without.apply(this.paintedTdArr, e)
        },
        removeClassName: function (x) {
            var e;
            e = this;
            x.each(function (z) {
                var y;
                u.removeClassName(z, e.SELECTED_CLASS_NAME);
                if (z.className === "") {
                    y = z.removeAttribute("class");
                    if (y === d) {
                        z.removeAttribute("className")
                    }
                }
            })
        },
        clearSelected: function () {
            var e;
            e = w.collectAll(this.htmlBody, "." + this.SELECTED_CLASS_NAME);
            this.removeClassName(e);
            this.paintedTdArr = []
        },
        resetBoundary: function () {
            this.startCellBoundary = new h.TableUtil.Boundary();
            this.endCellBoundary = this.startCellBoundary;
            this.selectedBoundary = new h.TableUtil.Boundary()
        },
        turnOnDragging: function () {
            this.isDragging = v
        },
        turnOffDragging: function () {
            this.isDragging = d
        },
        resetDragging: function () {
            this.isDragging = d;
            this.currentTable = j;
            this.currentTd = j
        },
        isDuringSelection: function () {
            return this.isDragging
        },
        getIndexer: function () {
            return this.tableIndexer
        },
        getSelected: function () {
            return this.selectedBoundary
        },
        getSelectedTdArr: function () {
            if (this.selectedBoundary.isValid()) {
                return this.tableIndexer.getTdArr(this.selectedBoundary)
            }
            return []
        },
        selectByBoundary: function (e) {
            this.resetBoundary();
            this.selectedBoundary = e;
            this.paint()
        },
        selectByTd: function (e, x) {
            this.selectStart(e);
            this.selectEnd(x);
            this.applySelected()
        },
        reset: function () {
            this.clearSelected();
            this.resetBoundary();
            this.resetDragging();
            this.reloadIndexer()
        },
        reloadIndexer: function () {
            if (this.tableIndexer) {
                this.tableIndexer.reload()
            }
        },
        getSizeOfSelected: function () {
            var x, y, z, e, A;
            x = this.getSelectedTdArr();
            if (0 < x.length) {
                y = x[0];
                z = x[x.length - 1];
                e = w.getPosition(y);
                A = w.getPosition(z);
                return {
                    width: A.x + A.width - e.x,
                    height: A.y + A.height - e.y
                }
            }
            return {
                width: 0,
                height: 0
            }
        }
    });
    h.Table.Merge = h.Class.create({
        initialize: function (x) {
            var e;
            e = x.getCanvas();
            this.wysiwygPanel = e.getPanel(h.Canvas.__WYSIWYG_MODE)
        },
        merge: function (y) {
            var x, z, e;
            y.reloadIndexer();
            x = y.getSelectedTdArr();
            if (1 < x.length) {
                e = y.getSizeOfSelected();
                z = x[0];
                this.deleteCellForMerge(x);
                this.extendCellForMerge(z, y, e);
                y.reset();
                y.selectByTd(z, z);
                h.TableUtil.collapseCaret(this.wysiwygPanel, z)
            } else {
                alert("\ub450\uac1c \uc774\uc0c1\uc758 \uc140\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.")
            }
        },
        deleteCellForMerge: function (z) {
            var y, A, x, e;
            y = z[0].innerHTML;
            e = z.length;
            for (x = 1; x < e; x += 1) {
                A = y.replace(h.__WORD_JOINER_REGEXP, "").trim();
                if (A === "" || A === "&nbsp;") {
                    y = z[x].innerHTML
                }
                w.remove(z[x])
            }
            z[0].innerHTML = y
        },
        extendCellForMerge: function (z, y, x) {
            var e;
            e = y.getSelected();
            z.colSpan = e.right - e.left + 1;
            z.rowSpan = e.bottom - e.top + 1;
            if (z.style.width) {
                w.setWidth(z, x.width + "px")
            }
            if (z.style.height) {
                w.setHeight(z, x.height + "px")
            }
        },
        resetMerge: function (y) {
            var x, e;
            y.reloadIndexer();
            x = this.splitCol(y);
            y.reloadIndexer();
            e = this.splitRow(y);
            if (x === d && e === d) {
                alert("\uc774\ubbf8 \ud569\uccd0\uc9c4 \uc140\ub9cc \ubd84\ud560 \uac00\ub2a5\ud569\ub2c8\ub2e4.")
            } else {
                y.reloadIndexer()
            }
        },
        splitCol: function (A) {
            var B, z, C, y, e, x;
            B = d;
            z = A.getSelectedTdArr();
            e = z.length;
            if (0 < e) {
                for (y = 0; y < e; y += 1) {
                    C = z[y];
                    x = this.splitTdByColSpan(C);
                    B = B || x
                }
            }
            return B
        },
        splitRow: function (A) {
            var B, z, C, y, e, x;
            B = d;
            z = A.getSelectedTdArr();
            e = z.length;
            if (0 < e) {
                for (y = 0; y < e; y += 1) {
                    C = z[y];
                    x = this.splitTdByRowSpan(C);
                    B = B || x
                }
            }
            return B
        },
        splitTdByColSpan: function (z) {
            var x, e, y;
            x = z.colSpan - 1;
            y = 0 < x;
            h.TableUtil.splitWidthByColSpan(z);
            z.colSpan = 1;
            while (0 < x) {
                e = h.TableUtil.cloneNodeForEmptyTd(z);
                w.insertNext(e, z);
                x -= 1
            }
            return y
        },
        splitTdByRowSpan: function (y) {
            var x, e;
            e = y.rowSpan - 1;
            x = 0 < e;
            h.TableUtil.splitHeightByRowSpan(y);
            while (0 < e) {
                this.splitTdOneByOne(y);
                e -= 1
            }
            return x
        },
        splitTdOneByOne: function (z) {
            var e, x, y;
            e = this.getTrForInsert(z);
            x = this.getTdForInsert(z, e);
            y = h.TableUtil.cloneNodeForEmptyTd(z);
            y.rowSpan = 1;
            z.rowSpan -= 1;
            if (x) {
                w.insertAt(y, x)
            } else {
                w.append(e, y)
            }
        },
        getTrForInsert: function (z) {
            var y, e, x;
            x = w.parent(z);
            e = z.rowSpan - 1;
            for (y = 0; y < e; y += 1) {
                x = w.next(x, "tr")
            }
            return x
        },
        getTdForInsert: function (y, C) {
            var A, E, x, F, B, z, D, e;
            A = h.TableUtil.getTableIndexerFromTd(y);
            E = A.getBoundary(y);
            x = E.left;
            F = C.cells;
            B = F.length;
            for (z = 0; z < B; z += 1) {
                D = F[z];
                e = A.getBoundary(D);
                if (x <= e.left) {
                    return D
                }
            }
            return j
        }
    });
    h.Table.Insert = h.Class.create({
        COL_DIRECTION: {
            LEFT: "left",
            RIGHT: "right"
        },
        initialize: function (x) {
            var e;
            e = x.getCanvas();
            this.wysiwygPanel = e.getPanel(h.Canvas.__WYSIWYG_MODE)
        },
        insertRowAbove: function (x) {
            var y, e;
            x.reloadIndexer();
            y = x.getSelected();
            if (y.isValid()) {
                e = x.getIndexer();
                this.insertRowAboveByBoundary(y, e);
                x.reset()
            }
        },
        insertRowAboveByBoundary: function (C, y) {
            var z, x, e, A, B;
            z = y.table;
            x = C.bottom - C.top + 1;
            e = C.top;
            A = y.getTdArr(new h.TableUtil.Boundary({
                top: C.top,
                right: y.getColSize() - 1,
                bottom: C.top,
                left: 0
            }));
            B = y.getTdArrHasTop(C.top);
            this.addRow(z, x, e, A, B)
        },
        addRow: function (B, y, e, C, D) {
            var A, z, x;
            A = function (F) {
                var E;
                if (D.contains(F)) {
                    E = h.TableUtil.cloneNodeForEmptyTd(F);
                    h.TableUtil.splitHeightByRowSpan(E);
                    E.rowSpan = 1;
                    x.appendChild(E)
                } else {
                    F.rowSpan += 1
                }
            };
            for (z = 0; z < y; z += 1) {
                x = B.insertRow(e);
                C.each(A)
            }
        },
        insertRowBelow: function (x) {
            var y, e;
            x.reloadIndexer();
            y = x.getSelected();
            if (y.isValid()) {
                e = x.getIndexer();
                this.insertRowBelowByBoundary(y, e);
                x.reset()
            }
        },
        insertRowBelowByBoundary: function (C, y) {
            var z, x, e, A, B;
            z = y.table;
            x = C.bottom - C.top + 1;
            e = C.bottom + 1;
            A = y.getTdArr(new h.TableUtil.Boundary({
                top: C.bottom,
                right: y.getColSize() - 1,
                bottom: C.bottom,
                left: 0
            }));
            B = y.getTdArrHasBottom(C.bottom);
            this.addRow(z, x, e, A, B)
        },
        insertColLeft: function (x) {
            var y, e;
            x.reloadIndexer();
            y = x.getSelected();
            if (y.isValid()) {
                e = x.getIndexer();
                this.insertColLeftByBoundary(y, e);
                x.reset()
            }
        },
        insertColLeftByBoundary: function (A, e) {
            var x, y, z;
            x = A.right - A.left + 1;
            y = e.getTdArr(new h.TableUtil.Boundary({
                top: 0,
                right: A.left,
                bottom: e.getRowSize() - 1,
                left: A.left
            }));
            z = e.getTdArrHasLeft(A.left);
            this.addCol(x, y, z, this.COL_DIRECTION.LEFT)
        },
        addCol: function (z, A, C, B) {
            var e, y, x;
            e = this;
            y = function (E) {
                var D;
                if (C.contains(E)) {
                    D = h.TableUtil.cloneNodeForEmptyTd(E);
                    h.TableUtil.splitWidthByColSpan(D);
                    D.colSpan = 1;
                    if (B === e.COL_DIRECTION.LEFT) {
                        w.insertAt(D, E)
                    } else {
                        w.insertNext(D, E)
                    }
                } else {
                    E.colSpan += 1
                }
            };
            for (x = 0; x < z; x += 1) {
                A.each(y)
            }
        },
        insertColRight: function (x) {
            var y, e;
            x.reloadIndexer();
            y = x.getSelected();
            if (y.isValid()) {
                e = x.getIndexer();
                this.insertColRightByBoundary(y, e);
                x.reset()
            }
        },
        insertColRightByBoundary: function (A, e) {
            var x, y, z;
            x = A.right - A.left + 1;
            y = e.getTdArr(new h.TableUtil.Boundary({
                top: 0,
                right: A.right,
                bottom: e.getRowSize() - 1,
                left: A.right
            }));
            z = e.getTdArrHasRight(A.right);
            this.addCol(x, y, z, this.COL_DIRECTION.RIGHT)
        }
    });
    h.Table.Delete = h.Class.create({
        initialize: function (x) {
            var e;
            e = x.getCanvas();
            this.wysiwygPanel = e.getPanel(h.Canvas.__WYSIWYG_MODE)
        },
        deleteRow: function (e) {
            var x;
            x = e.getSelected();
            if (x.isValid()) {
                this.deleteRowOneByOne(e);
                e.reset();
                this.deleteEmptyTableByTableSelector(e)
            }
        },
        deleteRowOneByOne: function (z) {
            var e, y, A, x;
            A = z.getSelected();
            e = A.top;
            y = A.bottom - A.top + 1;
            while (0 < y) {
                z.reloadIndexer();
                x = z.getIndexer();
                this.deleteRowByIndex(x, e);
                y -= 1
            }
            if (e === 0) {
                this.drawTopBorder(z)
            }
        },
        drawTopBorder: function (A) {
            var y, z, e, x, B;
            A.reloadIndexer();
            y = A.getIndexer();
            z = y.getTdArrHasTop(0);
            e = z.length;
            for (x = 0; x < e; x += 1) {
                B = z[x];
                if (B.style.borderTop === "" && B.style.borderBottom !== "") {
                    B.style.borderTop = B.style.borderBottom
                }
            }
        },
        deleteRowByIndex: function (z, y) {
            var B, x, e, A;
            B = this.getTdArrByRowIndex(z, y);
            x = this.getTdArrByHasTop(z, y);
            e = B.length;
            if (0 < e) {
                A = w.parent(B[0]);
                this.deleteTdInDeleteRow(B, x, A, z);
                w.remove(A)
            }
        },
        getTdArrByRowIndex: function (x, e) {
            return x.getTdArr(new h.TableUtil.Boundary({
                top: e,
                right: x.getColSize() - 1,
                bottom: e,
                left: 0
            }))
        },
        getTdArrByHasTop: function (x, e) {
            return x.getTdArrHasTop(e)
        },
        deleteTdInDeleteRow: function (B, x, A, z) {
            var e, y, C;
            e = B.length;
            for (y = 0; y < e; y += 1) {
                C = B[y];
                if (1 < C.rowSpan) {
                    C.rowSpan -= 1;
                    this.reduceHeightAsRow(C, A);
                    if (x.contains(C)) {
                        this.shiftRowOfTd(C, z)
                    }
                } else {
                    w.remove(C)
                }
            }
        },
        reduceHeightAsRow: function (z, x) {
            var y, e;
            if (z.style.height) {
                y = parseInt(z.style.height, 10);
                e = y - x.offsetHeight;
                if (0 < e) {
                    w.setStyles(z, {
                        height: e + "px"
                    }, v)
                }
            }
        },
        shiftRowOfTd: function (A, y) {
            var z, e, x;
            z = w.parent(A);
            e = w.next(z, "tr");
            x = this.getTdForInsert(A, e, y);
            if (x) {
                w.insertAt(A, x)
            } else {
                w.append(e, A)
            }
        },
        getTdForInsert: function (y, C, A) {
            var E, x, F, B, z, D, e;
            E = A.getBoundary(y);
            x = E.left;
            F = C.cells;
            B = F.length;
            for (z = 0; z < B; z += 1) {
                D = F[z];
                e = A.getBoundary(D);
                if (x <= e.left) {
                    return D
                }
            }
            return j
        },
        deleteEmptyTableByTableSelector: function (y) {
            var e, x;
            e = y.getIndexer();
            x = e.table;
            if (x.rows.length === 0) {
                w.remove(x)
            }
        },
        deleteCol: function (e) {
            var x;
            x = e.getSelected();
            if (x.isValid()) {
                this.deleteColOneByOne(e);
                e.reset();
                this.deleteEmptyTableByTableSelector(e)
            }
        },
        deleteColOneByOne: function (z) {
            var e, y, A, x;
            A = z.getSelected();
            e = A.left;
            y = A.right - A.left + 1;
            while (0 < y) {
                z.reloadIndexer();
                x = z.getIndexer();
                this.deleteColByIndex(x, e);
                y -= 1
            }
            if (e === 0) {
                this.drawLeftBorder(z)
            }
        },
        drawLeftBorder: function (A) {
            var y, z, e, x, B;
            A.reloadIndexer();
            y = A.getIndexer();
            z = y.getTdArrHasLeft(0);
            e = z.length;
            for (x = 0; x < e; x += 1) {
                B = z[x];
                if (B.style.borderLeft === "" && B.style.borderRight !== "") {
                    B.style.borderLeft = B.style.borderRight
                }
            }
        },
        deleteColByIndex: function (z, x) {
            var A, e, y, B;
            A = this.getTdArrByColIndex(z, x);
            e = A.length;
            for (y = 0; y < e; y += 1) {
                B = A[y];
                if (1 < B.colSpan) {
                    B.colSpan -= 1
                } else {
                    w.remove(B)
                }
            }
        },
        getTdArrByColIndex: function (x, e) {
            return x.getTdArr(new h.TableUtil.Boundary({
                top: 0,
                right: e,
                bottom: x.getRowSize() - 1,
                left: e
            }))
        }
    });
    h.Table.Border = h.Class.create({
        $const: {
            BORDER_STYLE: "1px solid #ccc"
        },
        initialize: function (y, x) {
            var e;
            e = y.getCanvas();
            this.wysiwygPanel = e.getPanel(h.Canvas.__WYSIWYG_MODE);
            this.borderRange = "all";
            this.borderColor = "#4174D9";
            this.tableSelect = j;
            this.selectedBoundary = j
        },
        setBorderRange: function (e) {
            this.borderRange = e
        },
        setTableSelect: function (e) {
            this.tableSelect = e;
            this.selectedBoundary = e.getSelected()
        },
        changeTopBorderStyle: function (A, E, D) {
            var x = {};
            var y = this.selectedBoundary;
            var F, e;
            var C = this.tableSelect.getIndexer();
            var z;
            if (y.top == 0) {
                F = "borderTop" + E;
                z = new h.TableUtil.Boundary({
                    top: y.top,
                    bottom: y.top,
                    left: y.left,
                    right: y.right
                })
            } else {
                F = "borderBottom" + E;
                z = new h.TableUtil.Boundary({
                    top: y.top - 1,
                    bottom: y.top - 1,
                    left: y.left,
                    right: y.right
                })
            }
            e = C.getTdArr(z);
            x[F] = D;
            for (var B = 0; B < e.length; B++) {
                u.setStyle(e[B], x)
            }
        },
        changeBottomBorderStyle: function (z, E, D) {
            var x = {};
            var y = this.selectedBoundary;
            var F, e, A;
            var C = this.tableSelect.getIndexer();
            F = "borderBottom" + E;
            A = new h.TableUtil.Boundary({
                top: y.bottom,
                bottom: y.bottom,
                left: y.left,
                right: y.right
            });
            e = C.getTdArr(A);
            x[F] = D;
            for (var B = 0; B < e.length; B++) {
                u.setStyle(e[B], x)
            }
        },
        changeLeftBorderStyle: function (A, E, D) {
            var x = {};
            var y = this.selectedBoundary;
            var F, e;
            var C = this.tableSelect.getIndexer();
            var z;
            if (y.left == 0) {
                F = "borderLeft" + E;
                z = new h.TableUtil.Boundary({
                    top: y.top,
                    bottom: y.bottom,
                    left: y.left,
                    right: y.left
                })
            } else {
                F = "borderRight" + E;
                z = new h.TableUtil.Boundary({
                    top: y.top,
                    bottom: y.bottom,
                    left: y.left - 1,
                    right: y.left - 1
                })
            }
            e = C.getTdArr(z);
            x[F] = D;
            for (var B = 0; B < e.length; B++) {
                u.setStyle(e[B], x)
            }
        },
        changeRightBorderStyle: function (A, E, D) {
            var x = {};
            var y = this.selectedBoundary;
            var F, e;
            var C = this.tableSelect.getIndexer();
            var z;
            F = "borderRight" + E;
            z = new h.TableUtil.Boundary({
                top: y.top,
                bottom: y.bottom,
                left: y.right,
                right: y.right
            });
            e = C.getTdArr(z);
            x[F] = D;
            for (var B = 0; B < e.length; B++) {
                u.setStyle(e[B], x)
            }
        },
        changeInBorderStyle: function (C, I, H) {
            var D = {};
            var A = {};
            var z = this.selectedBoundary;
            var J, e, G, y;
            var B, x;
            var F = this.tableSelect.getIndexer();
            G = "borderBottom" + I;
            B = new h.TableUtil.Boundary({
                top: z.top,
                bottom: z.bottom - 1,
                left: z.left,
                right: z.right
            });
            J = F.getTdArr(B);
            D[G] = H;
            for (var E = 0; E < J.length; E++) {
                u.setStyle(J[E], D)
            }
            y = "borderRight" + I;
            x = new h.TableUtil.Boundary({
                top: z.top,
                bottom: z.bottom,
                left: z.left,
                right: z.right - 1
            });
            e = F.getTdArr(x);
            A[y] = H;
            for (var E = 0; E < e.length; E++) {
                u.setStyle(e[E], A)
            }
        },
        changeOutBorderStyle: function (y, e, x) {
            this.changeTopBorderStyle(y, e, x);
            this.changeBottomBorderStyle(y, e, x);
            this.changeLeftBorderStyle(y, e, x);
            this.changeRightBorderStyle(y, e, x)
        },
        changeNoneBorderStyle: function (y, e, x) {},
        changeBorderStyle: function (y, e, x) {
            var z = this.borderRange;
            switch (z) {
            case "top":
                this.changeTopBorderStyle(y, e, x);
                break;
            case "bottom":
                this.changeBottomBorderStyle(y, e, x);
                break;
            case "left":
                this.changeLeftBorderStyle(y, e, x);
                break;
            case "right":
                this.changeRightBorderStyle(y, e, x);
                break;
            case "in":
                this.changeInBorderStyle(y, e, x);
                break;
            case "out":
                this.changeOutBorderStyle(y, e, x);
                break;
            case "all":
                this.changeInBorderStyle(y, e, x);
                this.changeOutBorderStyle(y, e, x);
                break;
            case "none":
                this.changeInBorderStyle(y, e, x);
                this.changeOutBorderStyle(y, e, x);
                break;
            default:
                break
            }
        },
        changeBorderColor: function (x, e) {
            if (e != j) {
                this.borderColor = e
            }
            this.changeBorderStyle(x, "Color", this.borderColor)
        },
        changeBorderType: function (x, e) {
            this.changeBorderStyle(x, "Style", e);
            this.changeBorderColor(x)
        },
        changeBorderHeight: function (y, x) {
            var e = x.toPx();
            this.changeBorderStyle(y, "Width", e);
            this.changeBorderColor(y)
        }
    });
    (function () {
        h.Table.TemplateLoader = h.Class.create({
            initialize: function () {
                this.templateList = j
            },
            getTemplate: function (y, z) {
                if (isNaN(y)) {
                    return
                }
                if (this.templateList) {
                    z(new e(this.templateList[y]))
                } else {
                    var x = this;
                    this.loadTemplate(function (A) {
                        x.templateList = A;
                        z(new e(x.templateList[y]))
                    })
                }
            },
            loadTemplate: function (y) {
                var x = this.getJSBasePath() + "trex/modules/table/async/template_data.js";
                EditorJSLoader.asyncLoadModule({
                    url: q.getUrl(x),
                    callback: function () {
                        var z = getTableTemplateList();
                        y(z)
                    }
                })
            },
            getJSBasePath: function () {
                var y;
                try {
                    y = EditorJSLoader.getJSBasePath("editor.js")
                } catch (x) {
                    y = EditorJSLoader.getJSBasePath()
                }
                return y
            }
        });
        var e = h.Class.create({
            initialize: function (x) {
                this.templateData = x
            },
            apply: function (B) {
                var A = new h.Tool.Table.TableCellMatrixer(B);
                var C = A.getTdMatrix();
                var x = this;
                for (var z = 0; z < C.length; z++) {
                    for (var y = 0; y < C[z].length; y++) {
                        x.setCellStyle(C[z][y], {
                            isEvenRow: (z % 2) == 1,
                            isFirstRow: z == 0,
                            isLastRow: z == C.length - 1,
                            isFirstCol: y == 0,
                            isLastCol: (y == C[z].length - 1)
                        })
                    }
                }
            },
            setCellStyle: function (y, x) {
                var z = this.templateData;
                var A = Object.extend({}, z.common);
                Object.extend(A, (x.isEvenRow) ? z.evenRow : z.oddRow);
                Object.extend(A, (x.isFirstRow) ? z.firstRow : (x.isLastRow) ? z.lastRow : {});
                Object.extend(A, (x.isLastCol) ? z.lastCol : {});
                Object.extend(A, (x.isFirstCol) ? z.firstCol : {});
                txlib.setStyle(y, A)
            }
        })
    })();
    h.module("table resize dragger", function (x, y, z, e) {
        e.observeJob(h.Ev.__IFRAME_LOAD_COMPLETE, function () {
            var Y = e.getPanel(h.Canvas.__WYSIWYG_MODE);
            var J = Y.getDocument();
            var aE = Y.getWindow();
            var ad = J.body;
            var aH = 20;
            var aB;
            var aP = w.collect(e.wysiwygEl, ".tx-table-col-resize-dragger");
            var aN = w.collect(e.wysiwygEl, ".tx-table-row-resize-dragger");
            var aa = d;
            var aM, Z, av, ar;
            var aL, aQ, aK;
            var ap, R, Q;
            var aC, A;
            var F, D;
            var T, aA, aF;
            var ak, L, ac;
            var X, W, aI;
            var aJ = {
                TOP: "EDGE_TOP",
                BOTTOM: "EDGE_BOTTOM",
                LEFT: "EDGE_LEFT",
                RIGHT: "EDGE_RIGHT",
                NONE: "NONE"
            };
            var af = aJ.NONE;
            var M = function () {
                aa = d;
                aC = j;
                A = j;
                aM = Z = j;
                av = ar = j;
                aA = T = aF = j;
                ak = L = ac = j;
                F = D = 0;
                ap = R = Q = 0;
                aL = aQ = aK = 0
            };
            var ai = function () {
                aM = w.find(aC, "table");
                if (aM == j) {
                    return j
                }
                aa = v;
                ap = aM.offsetWidth;
                if (af != aJ.NONE) {
                    u.stop(aI);
                    E()
                }
                switch (af) {
                case aJ.LEFT:
                    ay();
                    aj();
                    break;
                case aJ.RIGHT:
                    aG();
                    aj();
                    break;
                case aJ.TOP:
                    N();
                    az();
                    break;
                case aJ.BOTTOM:
                    G();
                    az();
                    break
                }
            };
            var ay = function () {
                var aS = new h.TableUtil.Indexer(aM);
                var aR = aS.getBoundary(aC);
                if (aR.left > 0) {
                    T = aS.getTdArrHasRight(aR.left - 1);
                    aA = aS.getTdArrHasLeft(aR.left)
                }
            };
            var aG = function () {
                var aS = new h.TableUtil.Indexer(aM);
                var aR = aS.getBoundary(aC);
                var aT = aS.getColSize();
                T = aS.getTdArrHasRight(aR.right);
                if (aR.right < aT - 1) {
                    aA = aS.getTdArrHasLeft(aR.right + 1)
                }
            };
            var N = function () {
                var aS = new h.TableUtil.Indexer(aM);
                var aR = aS.getBoundary(aC);
                aF = aS.getTdArrHasBottom(aR.top - 1)
            };
            var G = function () {
                var aS = new h.TableUtil.Indexer(aM);
                var aR = aS.getBoundary(aC);
                aF = aS.getTdArrHasTop(aR.bottom)
            };
            var au = function () {
                switch (af) {
                case aJ.LEFT:
                case aJ.RIGHT:
                    H();
                    break;
                case aJ.TOP:
                case aJ.BOTTOM:
                    P();
                    break
                }
                if (af != aJ.NONE) {
                    e.history.saveHistory()
                }
            };
            var S = function () {
                if (aa) {
                    A = I();
                    at()
                } else {
                    ab()
                }
            };
            var at = function () {
                switch (af) {
                case aJ.LEFT:
                case aJ.RIGHT:
                    an();
                    break;
                case aJ.TOP:
                case aJ.BOTTOM:
                    aD();
                    break
                }
            };
            var ab = function () {
                var aS = w.find(u.element(aI), "td");
                var aR = w.find(aS, ".txc-info");
                if (aS && !aR) {
                    aC = aS;
                    af = U(aC);
                    E()
                } else {
                    af = aJ.NONE;
                    E()
                }
            };
            var I = function () {
                var aR = j;
                switch (af) {
                case aJ.LEFT:
                case aJ.RIGHT:
                    aR = aP;
                    break;
                case aJ.TOP:
                case aJ.BOTTOM:
                    aR = aN;
                    break
                }
                return aR
            };
            var aj = function () {
                aa = v;
                ak = [];
                L = [];
                var aR = 0;
                if (T) {
                    for (aR = 0; aR < T.length; aR++) {
                        ak.push(T[aR].offsetWidth)
                    }
                    aL = aO(ak);
                    for (aR = 0; aR < T.length; aR++) {
                        if (aL == ak[aR]) {
                            av = T[aR];
                            break
                        }
                    }
                }
                if (aA) {
                    for (aR = 0; aR < aA.length; aR++) {
                        L.push(aA[aR].offsetWidth)
                    }
                    aQ = aO(L);
                    for (aR = 0; aR < aA.length; aR++) {
                        if (aQ == L[aR]) {
                            ar = aA[aR];
                            break
                        }
                    }
                }
                R = u.getCoordsTarget(A).left
            };
            var an = function () {
                if (aa) {
                    var aR = parseInt(X - w.getScrollLeft(J) - R);
                    var aS;
                    if (av && ar) {
                        aS = C(av, aR)
                    }
                    if (av && ar == j) {
                        aS = am(av, aR)
                    }
                    if (av == j && ar) {
                        aS = ax(ar, aR)
                    }
                    if (aS) {
                        u.setStyle(A, {
                            left: aS.toPx()
                        })
                    }
                }
            };
            var C = function (aT, aS) {
                var aV, aW, aR, aU, aX;
                aV = aL + aQ;
                aW = aL + aS;
                aR = aQ - aS;
                aU = u.getCoordsTarget(aT);
                if (aW >= aH && aR >= aH) {
                    aX = X - w.getScrollLeft(J)
                } else {
                    if (aW <= aH) {
                        aW = aH;
                        aR = aV - aW;
                        aX = aU.left - w.getScrollLeft(J) + aW
                    } else {
                        if (aR <= aH) {
                            aR = aH;
                            aW = aV - aR;
                            aX = aU.left - w.getScrollLeft(J) + aW
                        }
                    }
                }
                F = aW - aL;
                return aX
            };
            var am = function (aS, aR) {
                var aU, aT, aV;
                aU = aL + aR;
                aT = u.getCoordsTarget(aS);
                if (aU < aH) {
                    aU = aH
                }
                aV = aT.left - w.getScrollLeft(J) + aU;
                F = aU - aL;
                return aV
            };
            var ax = function (aU, aS) {
                var aR, aT, aV;
                aR = aQ - aS;
                aT = u.getCoordsTarget(aU);
                if (aR < aH) {
                    aR = aH
                }
                aV = aT.left + aR;
                F = aQ - aR;
                return aV
            };
            var H = function () {
                K();
                M()
            };
            var K = function () {
                var aR;
                if (T) {
                    for (aR = 0; aR < T.length; aR++) {
                        T[aR].style.width = ak[aR] + F
                    }
                }
                if (aA) {
                    for (aR = 0; aR < aA.length; aR++) {
                        aA[aR].style.width = L[aR] - F
                    }
                }
                if (T && aA == j) {
                    O()
                }
            };
            var az = function () {
                aa = v;
                aK = aC.offsetHeight;
                ac = [];
                if (aF) {
                    var aR;
                    for (aR = 0; aR < aF.length; aR++) {
                        ac.push(parseInt(aF[aR].offsetHeight))
                    }
                    aK = aO(ac);
                    for (aR = 0; aR < aF.length; aR++) {
                        if (aK == ac[aR]) {
                            Z = aF[aR]
                        }
                    }
                }
                Q = u.getCoordsTarget(A).top
            };
            var aD = function () {
                if (aa) {
                    var aR = W - w.getScrollTop(J) - Q;
                    var aS = aK + parseInt(aR);
                    var aT = u.getCoordsTarget(Z);
                    var aU = j;
                    if (aS < 0) {
                        aS = 0;
                        aU = aT.top + aS - w.getScrollTop(J)
                    } else {
                        aU = W - w.getScrollTop(J)
                    } if (aU) {
                        u.setStyle(A, {
                            top: aU.toPx()
                        })
                    }
                    D = aS - aK
                }
            };
            var P = function () {
                ae();
                M()
            };
            var ae = function () {
                if (aF) {
                    for (var aS = 0; aS < aF.length; aS++) {
                        var aR = ac[aS] + D;
                        if (aR < 0) {
                            aR = 20
                        }
                        aF[aS].style.height = aR.toPx()
                    }
                }
            };
            (function V() {
                var aR = J.createElement("div");
                ad.appendChild(aR);
                aR.style.width = aR.style.paddingLeft = "1px";
                aB = aR.offsetWidth === 2;
                ad.removeChild(aR)
            })();
            var U = function (aU) {
                var a3, a5 = aJ.NONE;
                if ("getBoundingClientRect" in document.documentElement) {
                    try {
                        var a4 = aU.ownerDocument,
                            aS = a4.documentElement,
                            aY = a4.body;
                        var aX = aU.getBoundingClientRect(),
                            aZ = a4.defaultView || a4.parentWindow,
                            aW = aS.clientTop || aY.clientTop || 0,
                            a1 = aS.clientLeft || aY.clientLeft || 0,
                            aR = aZ.pageYOffset || aB && aS.scrollTop || aY.scrollTop,
                            aV = aZ.pageXOffset || aB && aS.scrollLeft || aY.scrollLeft,
                            a2 = aX.top + aR - aW,
                            aT = aX.left + aV - a1;
                        a3 = {
                            top: a2,
                            left: aT,
                            bottom: a2 + aU.offsetHeight,
                            right: aT + aU.offsetWidth
                        }
                    } catch (a0) {
                        a3 = j
                    }
                }
                if (!a3) {
                    a3 = u.getCoordsTarget(aU)
                }
                if ((X - a3.left) < 5 && aU.cellIndex != 0) {
                    a5 = aJ.LEFT
                } else {
                    if ((a3.right - 5) < X) {
                        a5 = aJ.RIGHT
                    } else {
                        if ((W - a3.top) < 5 && aU.parentNode.rowIndex != 0) {
                            a5 = aJ.TOP
                        } else {
                            if ((a3.bottom - 5) < W) {
                                a5 = aJ.BOTTOM
                            }
                        }
                    }
                }
                return a5
            };
            var E = function () {
                e.query(function (aR) {
                    if (aR.table) {
                        if (aR.table.isDuringSelection() || e.config.readonly) {
                            af = aJ.NONE
                        }
                        switch (af) {
                        case aJ.LEFT:
                        case aJ.RIGHT:
                            u.hide(aN);
                            u.show(aP);
                            ah(aP);
                            A = aP;
                            break;
                        case aJ.TOP:
                        case aJ.BOTTOM:
                            u.hide(aP);
                            u.show(aN);
                            ag(aN);
                            A = aN;
                            break;
                        case aJ.NONE:
                            u.hide(aP);
                            u.hide(aN);
                            break
                        }
                    }
                })
            };
            var ah = function (aS) {
                if (aS == j) {
                    return
                }
                var aR;
                if (aa) {
                    aR = u.getCoordsTarget(aS).left;
                    u.setStyle(aS, {
                        width: "2px",
                        height: Y.el.clientHeight,
                        border: "1px dotted #81aFFC",
                        background: "",
                        left: aR.toPx()
                    });
                    u.setOpacity(aP, 1)
                } else {
                    aR = X - w.getScrollLeft(J);
                    u.setStyle(aS, {
                        width: "2px",
                        height: Y.el.clientHeight,
                        border: "",
                        background: "#fff",
                        left: aR.toPx()
                    });
                    u.setOpacity(aP, 0)
                }
            };
            var ag = function (aS) {
                if (aS == j) {
                    return
                }
                var aR = j;
                if (aa) {
                    aR = u.getCoordsTarget(aS).top;
                    u.setStyle(aS, {
                        height: "2px",
                        border: "1px dotted #81aFFC",
                        background: "",
                        top: aR.toPx()
                    });
                    u.setOpacity(aN, 1)
                } else {
                    aR = W - w.getScrollTop(J);
                    u.setStyle(aS, {
                        height: "2px",
                        border: "",
                        background: "#fff",
                        top: aR.toPx()
                    });
                    u.setOpacity(aN, 0)
                }
            };
            var O = function () {
                var aR = 0;
                if (ap) {
                    aR = parseInt(ap) + F;
                    aM.width = aR;
                    aM.style.width = aR.toPx()
                }
            };
            var B = function () {
                u.observe(c.body, "mouseup", function (aR) {
                    aw(aR);
                    au()
                });
                if (u.msie) {
                    u.observe(ad, "mousemove", function (aR) {
                        aw(aR);
                        S()
                    });
                    u.observe(ad, "mouseup", function (aR) {
                        aw(aR);
                        au()
                    })
                } else {
                    u.observe(aE, "mousemove", function (aR) {
                        aw(aR);
                        S()
                    });
                    u.observe(aE, "mouseup", function (aR) {
                        aw(aR);
                        au()
                    })
                } if (u.safari) {
                    u.observe(c.body, "mousemove", function (aR) {
                        if (aa) {
                            al(aR);
                            S()
                        }
                    })
                }
                u.observe(aP, "mousedown", function (aR) {
                    aw(aR);
                    ai()
                });
                u.observe(aN, "mousedown", function (aR) {
                    aw(aR);
                    ai()
                })
            };
            var aw = function (aR) {
                aI = aR;
                X = aq(aI);
                W = ao(aI)
            };
            var al = function (aR) {
                aI = aR;
                X = aq(aI) - u.getCoords(e.wysiwygEl).left + J.body.scrollLeft;
                W = ao(aI) - u.getCoords(e.wysiwygEl).top + J.body.scrollTop
            };
            var aq = function (aS) {
                var aR = 0;
                aS = aS || aE.event;
                if (aS.pageX) {
                    aR = aS.pageX
                } else {
                    if (aS.clientX) {
                        aR = aS.clientX + J.body.scrollLeft + J.documentElement.scrollLeft
                    }
                }
                return aR
            };
            var ao = function (aR) {
                var aS = 0;
                aR = aR || aE.event;
                if (aR.pageY) {
                    aS = aR.pageY
                } else {
                    if (aR.clientY) {
                        aS = aR.clientY + J.body.scrollTop + J.documentElement.scrollTop
                    }
                }
                return aS
            };

            function aO(aR) {
                return Math.min.apply(Math, aR)
            }
            M();
            B()
        })
    });
    if (typeof Editor !== "undefined") {
        Editor.version = "7.3.19"
    }
    try {
        EditorJSLoader.readyState = "complete";
        EditorJSLoader.finish()
    } catch (t) {}
})();
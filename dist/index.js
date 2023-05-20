(function (v, m) {
    typeof exports == "object" && typeof module < "u"
        ? m(exports, require("react"))
        : typeof define == "function" && define.amd
        ? define(["exports", "react"], m)
        : ((v = typeof globalThis < "u" ? globalThis : v || self),
          m((v.NtdCommon = {}), v.React));
})(this, function (v, m) {
    "use strict";
    var Pr = Object.defineProperty;
    var Or = (v, m, F) =>
        m in v
            ? Pr(v, m, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: F,
              })
            : (v[m] = F);
    var K = (v, m, F) => (Or(v, typeof m != "symbol" ? m + "" : m, F), F);
    const X = ((a) =>
            a && typeof a == "object" && "default" in a ? a : { default: a })(
            m
        ),
        We = (...a) => a.filter(Boolean).join(" "),
        Ye = (a, i) => (a ? i : () => {}),
        Ue = (a) =>
            (a.match(/[a-zA-Z0-9]+/g) || [])
                .map((i) => `${i.charAt(0).toUpperCase()}${i.slice(1)}`)
                .join(""),
        ce = (a) => Object.prototype.toString.call(a).slice(8, -1),
        Ve = (a) => {
            if (ce(a) !== "Function")
                throw new Error("[IIFE] --- [cb] is not a function");
            return a();
        };
    function $e(...a) {
        return (i) => a.reduceRight((c, d) => d(c), i);
    }
    function Be(a) {
        return new URLSearchParams(location.search).get(a);
    }
    var D = { exports: {} },
        N = {};
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var le;
    function Je() {
        if (le) return N;
        le = 1;
        var a = X.default,
            i = Symbol.for("react.element"),
            c = Symbol.for("react.fragment"),
            d = Object.prototype.hasOwnProperty,
            h =
                a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                    .ReactCurrentOwner,
            y = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(E, l, T) {
            var R,
                w = {},
                O = null,
                I = null;
            T !== void 0 && (O = "" + T),
                l.key !== void 0 && (O = "" + l.key),
                l.ref !== void 0 && (I = l.ref);
            for (R in l) d.call(l, R) && !y.hasOwnProperty(R) && (w[R] = l[R]);
            if (E && E.defaultProps)
                for (R in ((l = E.defaultProps), l))
                    w[R] === void 0 && (w[R] = l[R]);
            return {
                $$typeof: i,
                type: E,
                key: O,
                ref: I,
                props: w,
                _owner: h.current,
            };
        }
        return (N.Fragment = c), (N.jsx = _), (N.jsxs = _), N;
    }
    var L = {};
    /**
     * @license React
     * react-jsx-runtime.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var fe;
    function ze() {
        return (
            fe ||
                ((fe = 1),
                process.env.NODE_ENV !== "production" &&
                    (function () {
                        var a = X.default,
                            i = Symbol.for("react.element"),
                            c = Symbol.for("react.portal"),
                            d = Symbol.for("react.fragment"),
                            h = Symbol.for("react.strict_mode"),
                            y = Symbol.for("react.profiler"),
                            _ = Symbol.for("react.provider"),
                            E = Symbol.for("react.context"),
                            l = Symbol.for("react.forward_ref"),
                            T = Symbol.for("react.suspense"),
                            R = Symbol.for("react.suspense_list"),
                            w = Symbol.for("react.memo"),
                            O = Symbol.for("react.lazy"),
                            I = Symbol.for("react.offscreen"),
                            $ = Symbol.iterator,
                            W = "@@iterator";
                        function Y(e) {
                            if (e === null || typeof e != "object") return null;
                            var r = ($ && e[$]) || e[W];
                            return typeof r == "function" ? r : null;
                        }
                        var j =
                            a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                        function b(e) {
                            {
                                for (
                                    var r = arguments.length,
                                        t = new Array(r > 1 ? r - 1 : 0),
                                        n = 1;
                                    n < r;
                                    n++
                                )
                                    t[n - 1] = arguments[n];
                                Q("error", e, t);
                            }
                        }
                        function Q(e, r, t) {
                            {
                                var n = j.ReactDebugCurrentFrame,
                                    u = n.getStackAddendum();
                                u !== "" && ((r += "%s"), (t = t.concat([u])));
                                var f = t.map(function (s) {
                                    return String(s);
                                });
                                f.unshift("Warning: " + r),
                                    Function.prototype.apply.call(
                                        console[e],
                                        console,
                                        f
                                    );
                            }
                        }
                        var ee = !1,
                            B = !1,
                            Ke = !1,
                            Xe = !1,
                            Ze = !1,
                            he;
                        he = Symbol.for("react.module.reference");
                        function Qe(e) {
                            return !!(
                                typeof e == "string" ||
                                typeof e == "function" ||
                                e === d ||
                                e === y ||
                                Ze ||
                                e === h ||
                                e === T ||
                                e === R ||
                                Xe ||
                                e === I ||
                                ee ||
                                B ||
                                Ke ||
                                (typeof e == "object" &&
                                    e !== null &&
                                    (e.$$typeof === O ||
                                        e.$$typeof === w ||
                                        e.$$typeof === _ ||
                                        e.$$typeof === E ||
                                        e.$$typeof === l ||
                                        e.$$typeof === he ||
                                        e.getModuleId !== void 0))
                            );
                        }
                        function er(e, r, t) {
                            var n = e.displayName;
                            if (n) return n;
                            var u = r.displayName || r.name || "";
                            return u !== "" ? t + "(" + u + ")" : t;
                        }
                        function ge(e) {
                            return e.displayName || "Context";
                        }
                        function S(e) {
                            if (e == null) return null;
                            if (
                                (typeof e.tag == "number" &&
                                    b(
                                        "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
                                    ),
                                typeof e == "function")
                            )
                                return e.displayName || e.name || null;
                            if (typeof e == "string") return e;
                            switch (e) {
                                case d:
                                    return "Fragment";
                                case c:
                                    return "Portal";
                                case y:
                                    return "Profiler";
                                case h:
                                    return "StrictMode";
                                case T:
                                    return "Suspense";
                                case R:
                                    return "SuspenseList";
                            }
                            if (typeof e == "object")
                                switch (e.$$typeof) {
                                    case E:
                                        var r = e;
                                        return ge(r) + ".Consumer";
                                    case _:
                                        var t = e;
                                        return ge(t._context) + ".Provider";
                                    case l:
                                        return er(e, e.render, "ForwardRef");
                                    case w:
                                        var n = e.displayName || null;
                                        return n !== null
                                            ? n
                                            : S(e.type) || "Memo";
                                    case O: {
                                        var u = e,
                                            f = u._payload,
                                            s = u._init;
                                        try {
                                            return S(s(f));
                                        } catch {
                                            return null;
                                        }
                                    }
                                }
                            return null;
                        }
                        var k = Object.assign,
                            U = 0,
                            me,
                            ye,
                            Ee,
                            be,
                            _e,
                            Re,
                            Ce;
                        function we() {}
                        we.__reactDisabledLog = !0;
                        function rr() {
                            {
                                if (U === 0) {
                                    (me = console.log),
                                        (ye = console.info),
                                        (Ee = console.warn),
                                        (be = console.error),
                                        (_e = console.group),
                                        (Re = console.groupCollapsed),
                                        (Ce = console.groupEnd);
                                    var e = {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: we,
                                        writable: !0,
                                    };
                                    Object.defineProperties(console, {
                                        info: e,
                                        log: e,
                                        warn: e,
                                        error: e,
                                        group: e,
                                        groupCollapsed: e,
                                        groupEnd: e,
                                    });
                                }
                                U++;
                            }
                        }
                        function tr() {
                            {
                                if ((U--, U === 0)) {
                                    var e = {
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !0,
                                    };
                                    Object.defineProperties(console, {
                                        log: k({}, e, { value: me }),
                                        info: k({}, e, { value: ye }),
                                        warn: k({}, e, { value: Ee }),
                                        error: k({}, e, { value: be }),
                                        group: k({}, e, { value: _e }),
                                        groupCollapsed: k({}, e, { value: Re }),
                                        groupEnd: k({}, e, { value: Ce }),
                                    });
                                }
                                U < 0 &&
                                    b(
                                        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
                                    );
                            }
                        }
                        var re = j.ReactCurrentDispatcher,
                            te;
                        function J(e, r, t) {
                            {
                                if (te === void 0)
                                    try {
                                        throw Error();
                                    } catch (u) {
                                        var n = u.stack
                                            .trim()
                                            .match(/\n( *(at )?)/);
                                        te = (n && n[1]) || "";
                                    }
                                return (
                                    `
` +
                                    te +
                                    e
                                );
                            }
                        }
                        var ne = !1,
                            z;
                        {
                            var nr =
                                typeof WeakMap == "function" ? WeakMap : Map;
                            z = new nr();
                        }
                        function Te(e, r) {
                            if (!e || ne) return "";
                            {
                                var t = z.get(e);
                                if (t !== void 0) return t;
                            }
                            var n;
                            ne = !0;
                            var u = Error.prepareStackTrace;
                            Error.prepareStackTrace = void 0;
                            var f;
                            (f = re.current), (re.current = null), rr();
                            try {
                                if (r) {
                                    var s = function () {
                                        throw Error();
                                    };
                                    if (
                                        (Object.defineProperty(
                                            s.prototype,
                                            "props",
                                            {
                                                set: function () {
                                                    throw Error();
                                                },
                                            }
                                        ),
                                        typeof Reflect == "object" &&
                                            Reflect.construct)
                                    ) {
                                        try {
                                            Reflect.construct(s, []);
                                        } catch (x) {
                                            n = x;
                                        }
                                        Reflect.construct(e, [], s);
                                    } else {
                                        try {
                                            s.call();
                                        } catch (x) {
                                            n = x;
                                        }
                                        e.call(s.prototype);
                                    }
                                } else {
                                    try {
                                        throw Error();
                                    } catch (x) {
                                        n = x;
                                    }
                                    e();
                                }
                            } catch (x) {
                                if (x && n && typeof x.stack == "string") {
                                    for (
                                        var o = x.stack.split(`
`),
                                            C = n.stack.split(`
`),
                                            p = o.length - 1,
                                            g = C.length - 1;
                                        p >= 1 && g >= 0 && o[p] !== C[g];

                                    )
                                        g--;
                                    for (; p >= 1 && g >= 0; p--, g--)
                                        if (o[p] !== C[g]) {
                                            if (p !== 1 || g !== 1)
                                                do
                                                    if (
                                                        (p--,
                                                        g--,
                                                        g < 0 || o[p] !== C[g])
                                                    ) {
                                                        var P =
                                                            `
` + o[p].replace(" at new ", " at ");
                                                        return (
                                                            e.displayName &&
                                                                P.includes(
                                                                    "<anonymous>"
                                                                ) &&
                                                                (P = P.replace(
                                                                    "<anonymous>",
                                                                    e.displayName
                                                                )),
                                                            typeof e ==
                                                                "function" &&
                                                                z.set(e, P),
                                                            P
                                                        );
                                                    }
                                                while (p >= 1 && g >= 0);
                                            break;
                                        }
                                }
                            } finally {
                                (ne = !1),
                                    (re.current = f),
                                    tr(),
                                    (Error.prepareStackTrace = u);
                            }
                            var M = e ? e.displayName || e.name : "",
                                Le = M ? J(M) : "";
                            return typeof e == "function" && z.set(e, Le), Le;
                        }
                        function ar(e, r, t) {
                            return Te(e, !1);
                        }
                        function or(e) {
                            var r = e.prototype;
                            return !!(r && r.isReactComponent);
                        }
                        function G(e, r, t) {
                            if (e == null) return "";
                            if (typeof e == "function") return Te(e, or(e));
                            if (typeof e == "string") return J(e);
                            switch (e) {
                                case T:
                                    return J("Suspense");
                                case R:
                                    return J("SuspenseList");
                            }
                            if (typeof e == "object")
                                switch (e.$$typeof) {
                                    case l:
                                        return ar(e.render);
                                    case w:
                                        return G(e.type, r, t);
                                    case O: {
                                        var n = e,
                                            u = n._payload,
                                            f = n._init;
                                        try {
                                            return G(f(u), r, t);
                                        } catch {}
                                    }
                                }
                            return "";
                        }
                        var H = Object.prototype.hasOwnProperty,
                            Pe = {},
                            Oe = j.ReactDebugCurrentFrame;
                        function q(e) {
                            if (e) {
                                var r = e._owner,
                                    t = G(e.type, e._source, r ? r.type : null);
                                Oe.setExtraStackFrame(t);
                            } else Oe.setExtraStackFrame(null);
                        }
                        function ir(e, r, t, n, u) {
                            {
                                var f = Function.call.bind(H);
                                for (var s in e)
                                    if (f(e, s)) {
                                        var o = void 0;
                                        try {
                                            if (typeof e[s] != "function") {
                                                var C = Error(
                                                    (n || "React class") +
                                                        ": " +
                                                        t +
                                                        " type `" +
                                                        s +
                                                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                                                        typeof e[s] +
                                                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                                                );
                                                throw (
                                                    ((C.name =
                                                        "Invariant Violation"),
                                                    C)
                                                );
                                            }
                                            o = e[s](
                                                r,
                                                s,
                                                n,
                                                t,
                                                null,
                                                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                                            );
                                        } catch (p) {
                                            o = p;
                                        }
                                        o &&
                                            !(o instanceof Error) &&
                                            (q(u),
                                            b(
                                                "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                                                n || "React class",
                                                t,
                                                s,
                                                typeof o
                                            ),
                                            q(null)),
                                            o instanceof Error &&
                                                !(o.message in Pe) &&
                                                ((Pe[o.message] = !0),
                                                q(u),
                                                b(
                                                    "Failed %s type: %s",
                                                    t,
                                                    o.message
                                                ),
                                                q(null));
                                    }
                            }
                        }
                        var sr = Array.isArray;
                        function ae(e) {
                            return sr(e);
                        }
                        function ur(e) {
                            {
                                var r =
                                        typeof Symbol == "function" &&
                                        Symbol.toStringTag,
                                    t =
                                        (r && e[Symbol.toStringTag]) ||
                                        e.constructor.name ||
                                        "Object";
                                return t;
                            }
                        }
                        function cr(e) {
                            try {
                                return Se(e), !1;
                            } catch {
                                return !0;
                            }
                        }
                        function Se(e) {
                            return "" + e;
                        }
                        function xe(e) {
                            if (cr(e))
                                return (
                                    b(
                                        "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                                        ur(e)
                                    ),
                                    Se(e)
                                );
                        }
                        var V = j.ReactCurrentOwner,
                            lr = { key: !0, ref: !0, __self: !0, __source: !0 },
                            je,
                            De,
                            oe;
                        oe = {};
                        function fr(e) {
                            if (H.call(e, "ref")) {
                                var r = Object.getOwnPropertyDescriptor(
                                    e,
                                    "ref"
                                ).get;
                                if (r && r.isReactWarning) return !1;
                            }
                            return e.ref !== void 0;
                        }
                        function dr(e) {
                            if (H.call(e, "key")) {
                                var r = Object.getOwnPropertyDescriptor(
                                    e,
                                    "key"
                                ).get;
                                if (r && r.isReactWarning) return !1;
                            }
                            return e.key !== void 0;
                        }
                        function vr(e, r) {
                            if (
                                typeof e.ref == "string" &&
                                V.current &&
                                r &&
                                V.current.stateNode !== r
                            ) {
                                var t = S(V.current.type);
                                oe[t] ||
                                    (b(
                                        'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                                        S(V.current.type),
                                        e.ref
                                    ),
                                    (oe[t] = !0));
                            }
                        }
                        function pr(e, r) {
                            {
                                var t = function () {
                                    je ||
                                        ((je = !0),
                                        b(
                                            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                                            r
                                        ));
                                };
                                (t.isReactWarning = !0),
                                    Object.defineProperty(e, "key", {
                                        get: t,
                                        configurable: !0,
                                    });
                            }
                        }
                        function hr(e, r) {
                            {
                                var t = function () {
                                    De ||
                                        ((De = !0),
                                        b(
                                            "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                                            r
                                        ));
                                };
                                (t.isReactWarning = !0),
                                    Object.defineProperty(e, "ref", {
                                        get: t,
                                        configurable: !0,
                                    });
                            }
                        }
                        var gr = function (e, r, t, n, u, f, s) {
                            var o = {
                                $$typeof: i,
                                type: e,
                                key: r,
                                ref: t,
                                props: s,
                                _owner: f,
                            };
                            return (
                                (o._store = {}),
                                Object.defineProperty(o._store, "validated", {
                                    configurable: !1,
                                    enumerable: !1,
                                    writable: !0,
                                    value: !1,
                                }),
                                Object.defineProperty(o, "_self", {
                                    configurable: !1,
                                    enumerable: !1,
                                    writable: !1,
                                    value: n,
                                }),
                                Object.defineProperty(o, "_source", {
                                    configurable: !1,
                                    enumerable: !1,
                                    writable: !1,
                                    value: u,
                                }),
                                Object.freeze &&
                                    (Object.freeze(o.props), Object.freeze(o)),
                                o
                            );
                        };
                        function mr(e, r, t, n, u) {
                            {
                                var f,
                                    s = {},
                                    o = null,
                                    C = null;
                                t !== void 0 && (xe(t), (o = "" + t)),
                                    dr(r) && (xe(r.key), (o = "" + r.key)),
                                    fr(r) && ((C = r.ref), vr(r, u));
                                for (f in r)
                                    H.call(r, f) &&
                                        !lr.hasOwnProperty(f) &&
                                        (s[f] = r[f]);
                                if (e && e.defaultProps) {
                                    var p = e.defaultProps;
                                    for (f in p)
                                        s[f] === void 0 && (s[f] = p[f]);
                                }
                                if (o || C) {
                                    var g =
                                        typeof e == "function"
                                            ? e.displayName ||
                                              e.name ||
                                              "Unknown"
                                            : e;
                                    o && pr(s, g), C && hr(s, g);
                                }
                                return gr(e, o, C, u, n, V.current, s);
                            }
                        }
                        var ie = j.ReactCurrentOwner,
                            ke = j.ReactDebugCurrentFrame;
                        function A(e) {
                            if (e) {
                                var r = e._owner,
                                    t = G(e.type, e._source, r ? r.type : null);
                                ke.setExtraStackFrame(t);
                            } else ke.setExtraStackFrame(null);
                        }
                        var se;
                        se = !1;
                        function ue(e) {
                            return (
                                typeof e == "object" &&
                                e !== null &&
                                e.$$typeof === i
                            );
                        }
                        function Fe() {
                            {
                                if (ie.current) {
                                    var e = S(ie.current.type);
                                    if (e)
                                        return (
                                            `

Check the render method of \`` +
                                            e +
                                            "`."
                                        );
                                }
                                return "";
                            }
                        }
                        function yr(e) {
                            {
                                if (e !== void 0) {
                                    var r = e.fileName.replace(/^.*[\\\/]/, ""),
                                        t = e.lineNumber;
                                    return (
                                        `

Check your code at ` +
                                        r +
                                        ":" +
                                        t +
                                        "."
                                    );
                                }
                                return "";
                            }
                        }
                        var Ie = {};
                        function Er(e) {
                            {
                                var r = Fe();
                                if (!r) {
                                    var t =
                                        typeof e == "string"
                                            ? e
                                            : e.displayName || e.name;
                                    t &&
                                        (r =
                                            `

Check the top-level render call using <` +
                                            t +
                                            ">.");
                                }
                                return r;
                            }
                        }
                        function Ae(e, r) {
                            {
                                if (
                                    !e._store ||
                                    e._store.validated ||
                                    e.key != null
                                )
                                    return;
                                e._store.validated = !0;
                                var t = Er(r);
                                if (Ie[t]) return;
                                Ie[t] = !0;
                                var n = "";
                                e &&
                                    e._owner &&
                                    e._owner !== ie.current &&
                                    (n =
                                        " It was passed a child from " +
                                        S(e._owner.type) +
                                        "."),
                                    A(e),
                                    b(
                                        'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                                        t,
                                        n
                                    ),
                                    A(null);
                            }
                        }
                        function Me(e, r) {
                            {
                                if (typeof e != "object") return;
                                if (ae(e))
                                    for (var t = 0; t < e.length; t++) {
                                        var n = e[t];
                                        ue(n) && Ae(n, r);
                                    }
                                else if (ue(e))
                                    e._store && (e._store.validated = !0);
                                else if (e) {
                                    var u = Y(e);
                                    if (
                                        typeof u == "function" &&
                                        u !== e.entries
                                    )
                                        for (
                                            var f = u.call(e), s;
                                            !(s = f.next()).done;

                                        )
                                            ue(s.value) && Ae(s.value, r);
                                }
                            }
                        }
                        function br(e) {
                            {
                                var r = e.type;
                                if (r == null || typeof r == "string") return;
                                var t;
                                if (typeof r == "function") t = r.propTypes;
                                else if (
                                    typeof r == "object" &&
                                    (r.$$typeof === l || r.$$typeof === w)
                                )
                                    t = r.propTypes;
                                else return;
                                if (t) {
                                    var n = S(r);
                                    ir(t, e.props, "prop", n, e);
                                } else if (r.PropTypes !== void 0 && !se) {
                                    se = !0;
                                    var u = S(r);
                                    b(
                                        "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                                        u || "Unknown"
                                    );
                                }
                                typeof r.getDefaultProps == "function" &&
                                    !r.getDefaultProps.isReactClassApproved &&
                                    b(
                                        "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
                                    );
                            }
                        }
                        function _r(e) {
                            {
                                for (
                                    var r = Object.keys(e.props), t = 0;
                                    t < r.length;
                                    t++
                                ) {
                                    var n = r[t];
                                    if (n !== "children" && n !== "key") {
                                        A(e),
                                            b(
                                                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                                                n
                                            ),
                                            A(null);
                                        break;
                                    }
                                }
                                e.ref !== null &&
                                    (A(e),
                                    b(
                                        "Invalid attribute `ref` supplied to `React.Fragment`."
                                    ),
                                    A(null));
                            }
                        }
                        function Ne(e, r, t, n, u, f) {
                            {
                                var s = Qe(e);
                                if (!s) {
                                    var o = "";
                                    (e === void 0 ||
                                        (typeof e == "object" &&
                                            e !== null &&
                                            Object.keys(e).length === 0)) &&
                                        (o +=
                                            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                                    var C = yr(u);
                                    C ? (o += C) : (o += Fe());
                                    var p;
                                    e === null
                                        ? (p = "null")
                                        : ae(e)
                                        ? (p = "array")
                                        : e !== void 0 && e.$$typeof === i
                                        ? ((p =
                                              "<" +
                                              (S(e.type) || "Unknown") +
                                              " />"),
                                          (o =
                                              " Did you accidentally export a JSX literal instead of a component?"))
                                        : (p = typeof e),
                                        b(
                                            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                                            p,
                                            o
                                        );
                                }
                                var g = mr(e, r, t, u, f);
                                if (g == null) return g;
                                if (s) {
                                    var P = r.children;
                                    if (P !== void 0)
                                        if (n)
                                            if (ae(P)) {
                                                for (
                                                    var M = 0;
                                                    M < P.length;
                                                    M++
                                                )
                                                    Me(P[M], e);
                                                Object.freeze &&
                                                    Object.freeze(P);
                                            } else
                                                b(
                                                    "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                                                );
                                        else Me(P, e);
                                }
                                return e === d ? _r(g) : br(g), g;
                            }
                        }
                        function Rr(e, r, t) {
                            return Ne(e, r, t, !0);
                        }
                        function Cr(e, r, t) {
                            return Ne(e, r, t, !1);
                        }
                        var wr = Cr,
                            Tr = Rr;
                        (L.Fragment = d), (L.jsx = wr), (L.jsxs = Tr);
                    })()),
            L
        );
    }
    (function (a) {
        process.env.NODE_ENV === "production"
            ? (a.exports = Je())
            : (a.exports = ze());
    })(D);
    function Ge(a) {
        return m.forwardRef((i, c) => {
            const {
                providers: d,
                template: h,
                app: y,
                services: _,
                containers: E,
            } = a;
            let l = [];
            return (
                E && (l = l.concat(E)),
                _ && (l = l.concat(_)),
                d && (l = l.concat(d)),
                h && (l = l.concat(h)),
                D.exports.jsx(m.Fragment, {
                    children: l.reduceRight(
                        (T, R) => D.exports.jsx(R, { children: T }),
                        D.exports.jsx(y, { ...i, ref: c })
                    ),
                })
            );
        });
    }
    class de {
        isDevMsgOrNotData(i) {
            const c = i.data,
                d =
                    c.source &&
                    (c == null ? void 0 : c.source.includes("react-devtools"));
            return !i.data || d;
        }
    }
    class ve extends de {
        constructor() {
            super();
            K(this, "url");
            this.url = "*";
        }
        set setUrl(c) {
            this.url = c;
        }
        emit(c, d) {
            window.parent.postMessage(c, this.url), d && this.on(c.type, d);
        }
        on(c, d) {
            const h = (y) => {
                if (this.isDevMsgOrNotData(y)) return;
                const _ = y.data,
                    { payload: E, type: l } = _;
                l === c && (d(E), window.removeEventListener("message", h));
            };
            window.addEventListener("message", h);
        }
        static get Instance() {
            return this.instance || (this.instance = new this());
        }
    }
    K(ve, "instance");
    class pe extends de {
        on(i, c) {
            const d = (h) => {
                if (this.isDevMsgOrNotData(h)) return;
                const y = h.data,
                    { payload: _, type: E } = y;
                E === i && c(_);
            };
            return this.listen(d);
        }
        manual(i) {
            const c = (d) => {
                this.isDevMsgOrNotData(d) || i(d);
            };
            return this.listen(c);
        }
        listen(i) {
            return (
                window.addEventListener("message", i),
                () => {
                    window.removeEventListener("message", i);
                }
            );
        }
        static get Instance() {
            return this.instance || (this.instance = new this());
        }
    }
    K(pe, "instance");
    const Z = (a) => {
            const i = m.createContext(null);
            return (
                (i.displayName = a),
                {
                    useHook: () => {
                        const c = X.default.useContext(i);
                        if (!c)
                            throw new Error(
                                `use${a} must be used within a ${a}Provider`
                            );
                        return c;
                    },
                    context: i,
                }
            );
        },
        He = ({ name: a, slice: i, middleware: c }) => {
            const { useHook: d, context: h } = Z(a),
                { useHook: y, context: _ } = Z(a + "Dispatch"),
                E = ({ children: T, slice: R, middleware: w }) => {
                    const { reducer: O, initialValue: I } = R,
                        [$, W] = m.useReducer(O, I),
                        Y = m.useMemo(() => {
                            if (w) return new Map(Object.entries(w(W)));
                        }, [w]),
                        j = m.useCallback(
                            (b) => {
                                const { type: Q, payload: ee } = b;
                                if (Y) {
                                    const B = Y.get(Q);
                                    B ? B(ee) : W(b);
                                } else W(b);
                            },
                            [Y]
                        );
                    return D.exports.jsx(h.Provider, {
                        value: $,
                        children: D.exports.jsx(_.Provider, {
                            value: j,
                            children: T,
                        }),
                    });
                };
            return {
                useContextState: d,
                useContextDispatch: y,
                Provider: ({ children: T }) =>
                    D.exports.jsx(E, { slice: i, middleware: c, children: T }),
            };
        },
        qe = ({ initialValue: a, reducers: i }) => {
            const c = (h = a, y) => {
                const E = new Map(Object.entries(i)).get(y.type);
                return E ? E(h, y.payload) : h;
            };
            return {
                actions: Object.keys(i).reduce(
                    (h, y) => ({ ...h, [y]: (_) => ({ type: y, payload: _ }) }),
                    {}
                ),
                reducer: c,
                initialValue: a,
            };
        };
    (v.ComponentInject = Ge),
        (v.IIFE = Ve),
        (v.PostMessageDriven = ve),
        (v.PostMessageDriving = pe),
        (v.compose = $e),
        (v.createContextFactory = Z),
        (v.createProviderFactory = He),
        (v.createSlice = qe),
        (v.handleExecuteEvent = Ye),
        (v.mergeClassName = We),
        (v.queryString = Be),
        (v.toPascalCase = Ue),
        (v.typeofValue = ce),
        Object.defineProperties(v, {
            __esModule: { value: !0 },
            [Symbol.toStringTag]: { value: "Module" },
        });
});

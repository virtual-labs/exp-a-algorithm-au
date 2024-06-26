function Nv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Ho =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function kv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var le = { exports: {} },
  fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oo = Symbol.for("react.element"),
  Pv = Symbol.for("react.portal"),
  Tv = Symbol.for("react.fragment"),
  Rv = Symbol.for("react.strict_mode"),
  Mv = Symbol.for("react.profiler"),
  Ov = Symbol.for("react.provider"),
  bv = Symbol.for("react.context"),
  Av = Symbol.for("react.forward_ref"),
  Dv = Symbol.for("react.suspense"),
  Iv = Symbol.for("react.memo"),
  zv = Symbol.for("react.lazy"),
  Lf = Symbol.iterator;
function Lv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lf && e[Lf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pp = Object.assign,
  mp = {};
function vi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mp),
    (this.updater = n || hp);
}
vi.prototype.isReactComponent = {};
vi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
vi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gp() {}
gp.prototype = vi.prototype;
function mc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mp),
    (this.updater = n || hp);
}
var gc = (mc.prototype = new gp());
gc.constructor = mc;
pp(gc, vi.prototype);
gc.isPureReactComponent = !0;
var Ff = Array.isArray,
  vp = Object.prototype.hasOwnProperty,
  vc = { current: null },
  yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function wp(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      vp.call(t, r) && !yp.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Oo,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: vc.current,
  };
}
function Fv(e, t) {
  return {
    $$typeof: Oo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function yc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Oo;
}
function $v(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var $f = /\/+/g;
function ou(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? $v("" + e.key)
    : t.toString(36);
}
function Sl(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Oo:
          case Pv:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + ou(l, 0) : r),
      Ff(i)
        ? ((n = ""),
          e != null && (n = e.replace($f, "$&/") + "/"),
          Sl(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (yc(i) &&
            (i = Fv(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace($f, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Ff(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + ou(o, a);
      l += Sl(o, t, n, u, i);
    }
  else if (((u = Lv(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + ou(o, a++)), (l += Sl(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Yo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Sl(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function jv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ut = { current: null },
  El = { transition: null },
  Uv = {
    ReactCurrentDispatcher: ut,
    ReactCurrentBatchConfig: El,
    ReactCurrentOwner: vc,
  };
fe.Children = {
  map: Yo,
  forEach: function (e, t, n) {
    Yo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Yo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Yo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!yc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
fe.Component = vi;
fe.Fragment = Tv;
fe.Profiler = Mv;
fe.PureComponent = mc;
fe.StrictMode = Rv;
fe.Suspense = Dv;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uv;
fe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = pp({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = vc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      vp.call(t, u) &&
        !yp.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Oo, type: e.type, key: i, ref: o, props: r, _owner: l };
};
fe.createContext = function (e) {
  return (
    (e = {
      $$typeof: bv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ov, _context: e }),
    (e.Consumer = e)
  );
};
fe.createElement = wp;
fe.createFactory = function (e) {
  var t = wp.bind(null, e);
  return (t.type = e), t;
};
fe.createRef = function () {
  return { current: null };
};
fe.forwardRef = function (e) {
  return { $$typeof: Av, render: e };
};
fe.isValidElement = yc;
fe.lazy = function (e) {
  return { $$typeof: zv, _payload: { _status: -1, _result: e }, _init: jv };
};
fe.memo = function (e, t) {
  return { $$typeof: Iv, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function (e) {
  var t = El.transition;
  El.transition = {};
  try {
    e();
  } finally {
    El.transition = t;
  }
};
fe.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
fe.useCallback = function (e, t) {
  return ut.current.useCallback(e, t);
};
fe.useContext = function (e) {
  return ut.current.useContext(e);
};
fe.useDebugValue = function () {};
fe.useDeferredValue = function (e) {
  return ut.current.useDeferredValue(e);
};
fe.useEffect = function (e, t) {
  return ut.current.useEffect(e, t);
};
fe.useId = function () {
  return ut.current.useId();
};
fe.useImperativeHandle = function (e, t, n) {
  return ut.current.useImperativeHandle(e, t, n);
};
fe.useInsertionEffect = function (e, t) {
  return ut.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function (e, t) {
  return ut.current.useLayoutEffect(e, t);
};
fe.useMemo = function (e, t) {
  return ut.current.useMemo(e, t);
};
fe.useReducer = function (e, t, n) {
  return ut.current.useReducer(e, t, n);
};
fe.useRef = function (e) {
  return ut.current.useRef(e);
};
fe.useState = function (e) {
  return ut.current.useState(e);
};
fe.useSyncExternalStore = function (e, t, n) {
  return ut.current.useSyncExternalStore(e, t, n);
};
fe.useTransition = function () {
  return ut.current.useTransition();
};
fe.version = "18.2.0";
(function (e) {
  e.exports = fe;
})(le);
const dr = kv(le.exports),
  io = Nv({ __proto__: null, default: dr }, [le.exports]);
var Xu = {},
  _p = { exports: {} },
  Rt = {},
  xp = { exports: {} },
  Sp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, F) {
    var Y = A.length;
    A.push(F);
    e: for (; 0 < Y; ) {
      var J = (Y - 1) >>> 1,
        re = A[J];
      if (0 < i(re, F)) (A[J] = F), (A[Y] = re), (Y = J);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var F = A[0],
      Y = A.pop();
    if (Y !== F) {
      A[0] = Y;
      e: for (var J = 0, re = A.length, De = re >>> 1; J < De; ) {
        var me = 2 * (J + 1) - 1,
          Ne = A[me],
          Q = me + 1,
          te = A[Q];
        if (0 > i(Ne, Y))
          Q < re && 0 > i(te, Ne)
            ? ((A[J] = te), (A[Q] = Y), (J = Q))
            : ((A[J] = Ne), (A[me] = Y), (J = me));
        else if (Q < re && 0 > i(te, Y)) (A[J] = te), (A[Q] = Y), (J = Q);
        else break e;
      }
    }
    return F;
  }
  function i(A, F) {
    var Y = A.sortIndex - F.sortIndex;
    return Y !== 0 ? Y : A.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    d = null,
    c = 3,
    m = !1,
    S = !1,
    w = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(A) {
    for (var F = n(s); F !== null; ) {
      if (F.callback === null) r(s);
      else if (F.startTime <= A)
        r(s), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(s);
    }
  }
  function y(A) {
    if (((w = !1), h(A), !S))
      if (n(u) !== null) (S = !0), b(x);
      else {
        var F = n(s);
        F !== null && U(y, F.startTime - A);
      }
  }
  function x(A, F) {
    (S = !1), w && ((w = !1), p(O), (O = -1)), (m = !0);
    var Y = c;
    try {
      for (
        h(F), d = n(u);
        d !== null && (!(d.expirationTime > F) || (A && !j()));

      ) {
        var J = d.callback;
        if (typeof J == "function") {
          (d.callback = null), (c = d.priorityLevel);
          var re = J(d.expirationTime <= F);
          (F = e.unstable_now()),
            typeof re == "function" ? (d.callback = re) : d === n(u) && r(u),
            h(F);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var De = !0;
      else {
        var me = n(s);
        me !== null && U(y, me.startTime - F), (De = !1);
      }
      return De;
    } finally {
      (d = null), (c = Y), (m = !1);
    }
  }
  var M = !1,
    E = null,
    O = -1,
    L = 5,
    z = -1;
  function j() {
    return !(e.unstable_now() - z < L);
  }
  function ie() {
    if (E !== null) {
      var A = e.unstable_now();
      z = A;
      var F = !0;
      try {
        F = E(!0, A);
      } finally {
        F ? ue() : ((M = !1), (E = null));
      }
    } else M = !1;
  }
  var ue;
  if (typeof g == "function")
    ue = function () {
      g(ie);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      G = R.port2;
    (R.port1.onmessage = ie),
      (ue = function () {
        G.postMessage(null);
      });
  } else
    ue = function () {
      C(ie, 0);
    };
  function b(A) {
    (E = A), M || ((M = !0), ue());
  }
  function U(A, F) {
    O = C(function () {
      A(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || m || ((S = !0), b(x));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (A) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = c;
      }
      var Y = c;
      c = F;
      try {
        return A();
      } finally {
        c = Y;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, F) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var Y = c;
      c = A;
      try {
        return F();
      } finally {
        c = Y;
      }
    }),
    (e.unstable_scheduleCallback = function (A, F, Y) {
      var J = e.unstable_now();
      switch (
        (typeof Y == "object" && Y !== null
          ? ((Y = Y.delay), (Y = typeof Y == "number" && 0 < Y ? J + Y : J))
          : (Y = J),
        A)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = Y + re),
        (A = {
          id: f++,
          callback: F,
          priorityLevel: A,
          startTime: Y,
          expirationTime: re,
          sortIndex: -1,
        }),
        Y > J
          ? ((A.sortIndex = Y),
            t(s, A),
            n(u) === null &&
              A === n(s) &&
              (w ? (p(O), (O = -1)) : (w = !0), U(y, Y - J)))
          : ((A.sortIndex = re), t(u, A), S || m || ((S = !0), b(x))),
        A
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (A) {
      var F = c;
      return function () {
        var Y = c;
        c = F;
        try {
          return A.apply(this, arguments);
        } finally {
          c = Y;
        }
      };
    });
})(Sp);
(function (e) {
  e.exports = Sp;
})(xp);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ep = le.exports,
  kt = xp.exports;
function V(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Cp = new Set(),
  oo = {};
function kr(e, t) {
  oi(e, t), oi(e + "Capture", t);
}
function oi(e, t) {
  for (oo[e] = t, e = 0; e < t.length; e++) Cp.add(t[e]);
}
var Cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gu = Object.prototype.hasOwnProperty,
  Bv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  jf = {},
  Uf = {};
function Vv(e) {
  return Gu.call(Uf, e)
    ? !0
    : Gu.call(jf, e)
    ? !1
    : Bv.test(e)
    ? (Uf[e] = !0)
    : ((jf[e] = !0), !1);
}
function Wv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hv(e, t, n, r) {
  if (t === null || typeof t > "u" || Wv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function st(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var Ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new st(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ze[t] = new st(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ze[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ze[e] = new st(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ze[e] = new st(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ze[e] = new st(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ze[e] = new st(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ze[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wc = /[\-:]([a-z])/g;
function _c(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wc, _c);
    Ze[t] = new st(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wc, _c);
    Ze[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(wc, _c);
  Ze[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ze[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ze.xlinkHref = new st(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ze[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xc(e, t, n, r) {
  var i = Ze.hasOwnProperty(t) ? Ze[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hv(t, n, i, r) && (n = null),
    r || i === null
      ? Vv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mn = Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Qo = Symbol.for("react.element"),
  Dr = Symbol.for("react.portal"),
  Ir = Symbol.for("react.fragment"),
  Sc = Symbol.for("react.strict_mode"),
  qu = Symbol.for("react.profiler"),
  Np = Symbol.for("react.provider"),
  kp = Symbol.for("react.context"),
  Ec = Symbol.for("react.forward_ref"),
  Zu = Symbol.for("react.suspense"),
  Ju = Symbol.for("react.suspense_list"),
  Cc = Symbol.for("react.memo"),
  Dn = Symbol.for("react.lazy"),
  Pp = Symbol.for("react.offscreen"),
  Bf = Symbol.iterator;
function Ni(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bf && e[Bf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var be = Object.assign,
  lu;
function $i(e) {
  if (lu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      lu = (t && t[1]) || "";
    }
  return (
    `
` +
    lu +
    e
  );
}
var au = !1;
function uu(e, t) {
  if (!e || au) return "";
  au = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var u =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (au = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? $i(e) : "";
}
function Yv(e) {
  switch (e.tag) {
    case 5:
      return $i(e.type);
    case 16:
      return $i("Lazy");
    case 13:
      return $i("Suspense");
    case 19:
      return $i("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = uu(e.type, !1)), e;
    case 11:
      return (e = uu(e.type.render, !1)), e;
    case 1:
      return (e = uu(e.type, !0)), e;
    default:
      return "";
  }
}
function es(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ir:
      return "Fragment";
    case Dr:
      return "Portal";
    case qu:
      return "Profiler";
    case Sc:
      return "StrictMode";
    case Zu:
      return "Suspense";
    case Ju:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case kp:
        return (e.displayName || "Context") + ".Consumer";
      case Np:
        return (e._context.displayName || "Context") + ".Provider";
      case Ec:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Cc:
        return (
          (t = e.displayName || null), t !== null ? t : es(e.type) || "Memo"
        );
      case Dn:
        (t = e._payload), (e = e._init);
        try {
          return es(e(t));
        } catch {}
    }
  return null;
}
function Qv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return es(t);
    case 8:
      return t === Sc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Xn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Tp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Kv(e) {
  var t = Tp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ko(e) {
  e._valueTracker || (e._valueTracker = Kv(e));
}
function Rp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Tp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ts(e, t) {
  var n = t.checked;
  return be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Vf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Xn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Mp(e, t) {
  (t = t.checked), t != null && xc(e, "checked", t, !1);
}
function ns(e, t) {
  Mp(e, t);
  var n = Xn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? rs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && rs(e, t.type, Xn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function rs(e, t, n) {
  (t !== "number" || jl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ji = Array.isArray;
function Xr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Xn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function is(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Hf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(V(92));
      if (ji(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Xn(n) };
}
function Op(e, t) {
  var n = Xn(t.value),
    r = Xn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Yf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function os(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? bp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Xo,
  Ap = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Xo = Xo || document.createElement("div"),
          Xo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Xo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yi).forEach(function (e) {
  Xv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yi[t] = Yi[e]);
  });
});
function Dp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yi.hasOwnProperty(e) && Yi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ip(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Dp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Gv = be(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ls(e, t) {
  if (t) {
    if (Gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function as(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var us = null;
function Nc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ss = null,
  Gr = null,
  qr = null;
function Qf(e) {
  if ((e = Do(e))) {
    if (typeof ss != "function") throw Error(V(280));
    var t = e.stateNode;
    t && ((t = Ta(t)), ss(e.stateNode, e.type, t));
  }
}
function zp(e) {
  Gr ? (qr ? qr.push(e) : (qr = [e])) : (Gr = e);
}
function Lp() {
  if (Gr) {
    var e = Gr,
      t = qr;
    if (((qr = Gr = null), Qf(e), t)) for (e = 0; e < t.length; e++) Qf(t[e]);
  }
}
function Fp(e, t) {
  return e(t);
}
function $p() {}
var su = !1;
function jp(e, t, n) {
  if (su) return e(t, n);
  su = !0;
  try {
    return Fp(e, t, n);
  } finally {
    (su = !1), (Gr !== null || qr !== null) && ($p(), Lp());
  }
}
function ao(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ta(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(V(231, t, typeof n));
  return n;
}
var cs = !1;
if (Cn)
  try {
    var ki = {};
    Object.defineProperty(ki, "passive", {
      get: function () {
        cs = !0;
      },
    }),
      window.addEventListener("test", ki, ki),
      window.removeEventListener("test", ki, ki);
  } catch {
    cs = !1;
  }
function qv(e, t, n, r, i, o, l, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Qi = !1,
  Ul = null,
  Bl = !1,
  fs = null,
  Zv = {
    onError: function (e) {
      (Qi = !0), (Ul = e);
    },
  };
function Jv(e, t, n, r, i, o, l, a, u) {
  (Qi = !1), (Ul = null), qv.apply(Zv, arguments);
}
function ey(e, t, n, r, i, o, l, a, u) {
  if ((Jv.apply(this, arguments), Qi)) {
    if (Qi) {
      var s = Ul;
      (Qi = !1), (Ul = null);
    } else throw Error(V(198));
    Bl || ((Bl = !0), (fs = s));
  }
}
function Pr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Up(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Kf(e) {
  if (Pr(e) !== e) throw Error(V(188));
}
function ty(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pr(e)), t === null)) throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Kf(i), e;
        if (o === r) return Kf(i), t;
        o = o.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function Bp(e) {
  return (e = ty(e)), e !== null ? Vp(e) : null;
}
function Vp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wp = kt.unstable_scheduleCallback,
  Xf = kt.unstable_cancelCallback,
  ny = kt.unstable_shouldYield,
  ry = kt.unstable_requestPaint,
  Fe = kt.unstable_now,
  iy = kt.unstable_getCurrentPriorityLevel,
  kc = kt.unstable_ImmediatePriority,
  Hp = kt.unstable_UserBlockingPriority,
  Vl = kt.unstable_NormalPriority,
  oy = kt.unstable_LowPriority,
  Yp = kt.unstable_IdlePriority,
  Ca = null,
  an = null;
function ly(e) {
  if (an && typeof an.onCommitFiberRoot == "function")
    try {
      an.onCommitFiberRoot(Ca, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qt = Math.clz32 ? Math.clz32 : sy,
  ay = Math.log,
  uy = Math.LN2;
function sy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ay(e) / uy) | 0)) | 0;
}
var Go = 64,
  qo = 4194304;
function Ui(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Wl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = Ui(a)) : ((o &= l), o !== 0 && (r = Ui(o)));
  } else (l = n & ~i), l !== 0 ? (r = Ui(l)) : o !== 0 && (r = Ui(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & i) === 0 &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function cy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function fy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - qt(o),
      a = 1 << l,
      u = i[l];
    u === -1
      ? ((a & n) === 0 || (a & r) !== 0) && (i[l] = cy(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ds(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qp() {
  var e = Go;
  return (Go <<= 1), (Go & 4194240) === 0 && (Go = 64), e;
}
function cu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qt(t)),
    (e[t] = n);
}
function dy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Pc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var we = 0;
function Kp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Xp,
  Tc,
  Gp,
  qp,
  Zp,
  hs = !1,
  Zo = [],
  Un = null,
  Bn = null,
  Vn = null,
  uo = new Map(),
  so = new Map(),
  zn = [],
  hy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Gf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Un = null;
      break;
    case "dragenter":
    case "dragleave":
      Bn = null;
      break;
    case "mouseover":
    case "mouseout":
      Vn = null;
      break;
    case "pointerover":
    case "pointerout":
      uo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      so.delete(t.pointerId);
  }
}
function Pi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Do(t)), t !== null && Tc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function py(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Un = Pi(Un, e, t, n, r, i)), !0;
    case "dragenter":
      return (Bn = Pi(Bn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Vn = Pi(Vn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return uo.set(o, Pi(uo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), so.set(o, Pi(so.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Jp(e) {
  var t = ar(e.target);
  if (t !== null) {
    var n = Pr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Up(n)), t !== null)) {
          (e.blockedOn = t),
            Zp(e.priority, function () {
              Gp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ps(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (us = r), n.target.dispatchEvent(r), (us = null);
    } else return (t = Do(n)), t !== null && Tc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qf(e, t, n) {
  Cl(e) && n.delete(t);
}
function my() {
  (hs = !1),
    Un !== null && Cl(Un) && (Un = null),
    Bn !== null && Cl(Bn) && (Bn = null),
    Vn !== null && Cl(Vn) && (Vn = null),
    uo.forEach(qf),
    so.forEach(qf);
}
function Ti(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    hs ||
      ((hs = !0),
      kt.unstable_scheduleCallback(kt.unstable_NormalPriority, my)));
}
function co(e) {
  function t(i) {
    return Ti(i, e);
  }
  if (0 < Zo.length) {
    Ti(Zo[0], e);
    for (var n = 1; n < Zo.length; n++) {
      var r = Zo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Un !== null && Ti(Un, e),
      Bn !== null && Ti(Bn, e),
      Vn !== null && Ti(Vn, e),
      uo.forEach(t),
      so.forEach(t),
      n = 0;
    n < zn.length;
    n++
  )
    (r = zn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zn.length && ((n = zn[0]), n.blockedOn === null); )
    Jp(n), n.blockedOn === null && zn.shift();
}
var Zr = Mn.ReactCurrentBatchConfig,
  Hl = !0;
function gy(e, t, n, r) {
  var i = we,
    o = Zr.transition;
  Zr.transition = null;
  try {
    (we = 1), Rc(e, t, n, r);
  } finally {
    (we = i), (Zr.transition = o);
  }
}
function vy(e, t, n, r) {
  var i = we,
    o = Zr.transition;
  Zr.transition = null;
  try {
    (we = 4), Rc(e, t, n, r);
  } finally {
    (we = i), (Zr.transition = o);
  }
}
function Rc(e, t, n, r) {
  if (Hl) {
    var i = ps(e, t, n, r);
    if (i === null) _u(e, t, r, Yl, n), Gf(e, r);
    else if (py(i, e, t, n, r)) r.stopPropagation();
    else if ((Gf(e, r), t & 4 && -1 < hy.indexOf(e))) {
      for (; i !== null; ) {
        var o = Do(i);
        if (
          (o !== null && Xp(o),
          (o = ps(e, t, n, r)),
          o === null && _u(e, t, r, Yl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else _u(e, t, r, null, n);
  }
}
var Yl = null;
function ps(e, t, n, r) {
  if (((Yl = null), (e = Nc(r)), (e = ar(e)), e !== null))
    if (((t = Pr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Up(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yl = e), null;
}
function em(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (iy()) {
        case kc:
          return 1;
        case Hp:
          return 4;
        case Vl:
        case oy:
          return 16;
        case Yp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Fn = null,
  Mc = null,
  Nl = null;
function tm() {
  if (Nl) return Nl;
  var e,
    t = Mc,
    n = t.length,
    r,
    i = "value" in Fn ? Fn.value : Fn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Nl = i.slice(e, 1 < r ? 1 - r : void 0));
}
function kl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Jo() {
  return !0;
}
function Zf() {
  return !1;
}
function Mt(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Jo
        : Zf),
      (this.isPropagationStopped = Zf),
      this
    );
  }
  return (
    be(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Jo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Jo));
      },
      persist: function () {},
      isPersistent: Jo,
    }),
    t
  );
}
var yi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Oc = Mt(yi),
  Ao = be({}, yi, { view: 0, detail: 0 }),
  yy = Mt(Ao),
  fu,
  du,
  Ri,
  Na = be({}, Ao, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ri &&
            (Ri && e.type === "mousemove"
              ? ((fu = e.screenX - Ri.screenX), (du = e.screenY - Ri.screenY))
              : (du = fu = 0),
            (Ri = e)),
          fu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : du;
    },
  }),
  Jf = Mt(Na),
  wy = be({}, Na, { dataTransfer: 0 }),
  _y = Mt(wy),
  xy = be({}, Ao, { relatedTarget: 0 }),
  hu = Mt(xy),
  Sy = be({}, yi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ey = Mt(Sy),
  Cy = be({}, yi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ny = Mt(Cy),
  ky = be({}, yi, { data: 0 }),
  ed = Mt(ky),
  Py = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ty = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ry = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function My(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ry[e]) ? !!t[e] : !1;
}
function bc() {
  return My;
}
var Oy = be({}, Ao, {
    key: function (e) {
      if (e.key) {
        var t = Py[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = kl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ty[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bc,
    charCode: function (e) {
      return e.type === "keypress" ? kl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? kl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  by = Mt(Oy),
  Ay = be({}, Na, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  td = Mt(Ay),
  Dy = be({}, Ao, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bc,
  }),
  Iy = Mt(Dy),
  zy = be({}, yi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ly = Mt(zy),
  Fy = be({}, Na, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $y = Mt(Fy),
  jy = [9, 13, 27, 32],
  Ac = Cn && "CompositionEvent" in window,
  Ki = null;
Cn && "documentMode" in document && (Ki = document.documentMode);
var Uy = Cn && "TextEvent" in window && !Ki,
  nm = Cn && (!Ac || (Ki && 8 < Ki && 11 >= Ki)),
  nd = String.fromCharCode(32),
  rd = !1;
function rm(e, t) {
  switch (e) {
    case "keyup":
      return jy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function im(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zr = !1;
function By(e, t) {
  switch (e) {
    case "compositionend":
      return im(t);
    case "keypress":
      return t.which !== 32 ? null : ((rd = !0), nd);
    case "textInput":
      return (e = t.data), e === nd && rd ? null : e;
    default:
      return null;
  }
}
function Vy(e, t) {
  if (zr)
    return e === "compositionend" || (!Ac && rm(e, t))
      ? ((e = tm()), (Nl = Mc = Fn = null), (zr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return nm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function id(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wy[e.type] : t === "textarea";
}
function om(e, t, n, r) {
  zp(r),
    (t = Ql(t, "onChange")),
    0 < t.length &&
      ((n = new Oc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Xi = null,
  fo = null;
function Hy(e) {
  gm(e, 0);
}
function ka(e) {
  var t = $r(e);
  if (Rp(t)) return e;
}
function Yy(e, t) {
  if (e === "change") return t;
}
var lm = !1;
if (Cn) {
  var pu;
  if (Cn) {
    var mu = "oninput" in document;
    if (!mu) {
      var od = document.createElement("div");
      od.setAttribute("oninput", "return;"),
        (mu = typeof od.oninput == "function");
    }
    pu = mu;
  } else pu = !1;
  lm = pu && (!document.documentMode || 9 < document.documentMode);
}
function ld() {
  Xi && (Xi.detachEvent("onpropertychange", am), (fo = Xi = null));
}
function am(e) {
  if (e.propertyName === "value" && ka(fo)) {
    var t = [];
    om(t, fo, e, Nc(e)), jp(Hy, t);
  }
}
function Qy(e, t, n) {
  e === "focusin"
    ? (ld(), (Xi = t), (fo = n), Xi.attachEvent("onpropertychange", am))
    : e === "focusout" && ld();
}
function Ky(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ka(fo);
}
function Xy(e, t) {
  if (e === "click") return ka(t);
}
function Gy(e, t) {
  if (e === "input" || e === "change") return ka(t);
}
function qy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Jt = typeof Object.is == "function" ? Object.is : qy;
function ho(e, t) {
  if (Jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Gu.call(t, i) || !Jt(e[i], t[i])) return !1;
  }
  return !0;
}
function ad(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ud(e, t) {
  var n = ad(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ad(n);
  }
}
function um(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? um(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function sm() {
  for (var e = window, t = jl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jl(e.document);
  }
  return t;
}
function Dc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Zy(e) {
  var t = sm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    um(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Dc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = ud(n, o));
        var l = ud(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jy = Cn && "documentMode" in document && 11 >= document.documentMode,
  Lr = null,
  ms = null,
  Gi = null,
  gs = !1;
function sd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  gs ||
    Lr == null ||
    Lr !== jl(r) ||
    ((r = Lr),
    "selectionStart" in r && Dc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gi && ho(Gi, r)) ||
      ((Gi = r),
      (r = Ql(ms, "onSelect")),
      0 < r.length &&
        ((t = new Oc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Lr))));
}
function el(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fr = {
    animationend: el("Animation", "AnimationEnd"),
    animationiteration: el("Animation", "AnimationIteration"),
    animationstart: el("Animation", "AnimationStart"),
    transitionend: el("Transition", "TransitionEnd"),
  },
  gu = {},
  cm = {};
Cn &&
  ((cm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fr.animationend.animation,
    delete Fr.animationiteration.animation,
    delete Fr.animationstart.animation),
  "TransitionEvent" in window || delete Fr.transitionend.transition);
function Pa(e) {
  if (gu[e]) return gu[e];
  if (!Fr[e]) return e;
  var t = Fr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in cm) return (gu[e] = t[n]);
  return e;
}
var fm = Pa("animationend"),
  dm = Pa("animationiteration"),
  hm = Pa("animationstart"),
  pm = Pa("transitionend"),
  mm = new Map(),
  cd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function er(e, t) {
  mm.set(e, t), kr(t, [e]);
}
for (var vu = 0; vu < cd.length; vu++) {
  var yu = cd[vu],
    e1 = yu.toLowerCase(),
    t1 = yu[0].toUpperCase() + yu.slice(1);
  er(e1, "on" + t1);
}
er(fm, "onAnimationEnd");
er(dm, "onAnimationIteration");
er(hm, "onAnimationStart");
er("dblclick", "onDoubleClick");
er("focusin", "onFocus");
er("focusout", "onBlur");
er(pm, "onTransitionEnd");
oi("onMouseEnter", ["mouseout", "mouseover"]);
oi("onMouseLeave", ["mouseout", "mouseover"]);
oi("onPointerEnter", ["pointerout", "pointerover"]);
oi("onPointerLeave", ["pointerout", "pointerover"]);
kr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
kr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
kr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
kr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Bi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  n1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));
function fd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ey(r, t, void 0, e), (e.currentTarget = null);
}
function gm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && i.isPropagationStopped())) break e;
          fd(i, a, s), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          fd(i, a, s), (o = u);
        }
    }
  }
  if (Bl) throw ((e = fs), (Bl = !1), (fs = null), e);
}
function Pe(e, t) {
  var n = t[xs];
  n === void 0 && (n = t[xs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (vm(t, e, 2, !1), n.add(r));
}
function wu(e, t, n) {
  var r = 0;
  t && (r |= 4), vm(n, e, r, t);
}
var tl = "_reactListening" + Math.random().toString(36).slice(2);
function po(e) {
  if (!e[tl]) {
    (e[tl] = !0),
      Cp.forEach(function (n) {
        n !== "selectionchange" && (n1.has(n) || wu(n, !1, e), wu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[tl] || ((t[tl] = !0), wu("selectionchange", !1, t));
  }
}
function vm(e, t, n, r) {
  switch (em(t)) {
    case 1:
      var i = gy;
      break;
    case 4:
      i = vy;
      break;
    default:
      i = Rc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !cs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function _u(e, t, n, r, i) {
  var o = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = ar(a)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  jp(function () {
    var s = o,
      f = Nc(n),
      d = [];
    e: {
      var c = mm.get(e);
      if (c !== void 0) {
        var m = Oc,
          S = e;
        switch (e) {
          case "keypress":
            if (kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = by;
            break;
          case "focusin":
            (S = "focus"), (m = hu);
            break;
          case "focusout":
            (S = "blur"), (m = hu);
            break;
          case "beforeblur":
          case "afterblur":
            m = hu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Jf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = _y;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Iy;
            break;
          case fm:
          case dm:
          case hm:
            m = Ey;
            break;
          case pm:
            m = Ly;
            break;
          case "scroll":
            m = yy;
            break;
          case "wheel":
            m = $y;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Ny;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = td;
        }
        var w = (t & 4) !== 0,
          C = !w && e === "scroll",
          p = w ? (c !== null ? c + "Capture" : null) : c;
        w = [];
        for (var g = s, h; g !== null; ) {
          h = g;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              p !== null && ((y = ao(g, p)), y != null && w.push(mo(g, y, h)))),
            C)
          )
            break;
          g = g.return;
        }
        0 < w.length &&
          ((c = new m(c, S, null, n, f)), d.push({ event: c, listeners: w }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          c &&
            n !== us &&
            (S = n.relatedTarget || n.fromElement) &&
            (ar(S) || S[Nn]))
        )
          break e;
        if (
          (m || c) &&
          ((c =
            f.window === f
              ? f
              : (c = f.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          m
            ? ((S = n.relatedTarget || n.toElement),
              (m = s),
              (S = S ? ar(S) : null),
              S !== null &&
                ((C = Pr(S)), S !== C || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((m = null), (S = s)),
          m !== S)
        ) {
          if (
            ((w = Jf),
            (y = "onMouseLeave"),
            (p = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = td),
              (y = "onPointerLeave"),
              (p = "onPointerEnter"),
              (g = "pointer")),
            (C = m == null ? c : $r(m)),
            (h = S == null ? c : $r(S)),
            (c = new w(y, g + "leave", m, n, f)),
            (c.target = C),
            (c.relatedTarget = h),
            (y = null),
            ar(f) === s &&
              ((w = new w(p, g + "enter", S, n, f)),
              (w.target = h),
              (w.relatedTarget = C),
              (y = w)),
            (C = y),
            m && S)
          )
            t: {
              for (w = m, p = S, g = 0, h = w; h; h = br(h)) g++;
              for (h = 0, y = p; y; y = br(y)) h++;
              for (; 0 < g - h; ) (w = br(w)), g--;
              for (; 0 < h - g; ) (p = br(p)), h--;
              for (; g--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                (w = br(w)), (p = br(p));
              }
              w = null;
            }
          else w = null;
          m !== null && dd(d, c, m, w, !1),
            S !== null && C !== null && dd(d, C, S, w, !0);
        }
      }
      e: {
        if (
          ((c = s ? $r(s) : window),
          (m = c.nodeName && c.nodeName.toLowerCase()),
          m === "select" || (m === "input" && c.type === "file"))
        )
          var x = Yy;
        else if (id(c))
          if (lm) x = Gy;
          else {
            x = Ky;
            var M = Qy;
          }
        else
          (m = c.nodeName) &&
            m.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (x = Xy);
        if (x && (x = x(e, s))) {
          om(d, x, n, f);
          break e;
        }
        M && M(e, c, s),
          e === "focusout" &&
            (M = c._wrapperState) &&
            M.controlled &&
            c.type === "number" &&
            rs(c, "number", c.value);
      }
      switch (((M = s ? $r(s) : window), e)) {
        case "focusin":
          (id(M) || M.contentEditable === "true") &&
            ((Lr = M), (ms = s), (Gi = null));
          break;
        case "focusout":
          Gi = ms = Lr = null;
          break;
        case "mousedown":
          gs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (gs = !1), sd(d, n, f);
          break;
        case "selectionchange":
          if (Jy) break;
        case "keydown":
        case "keyup":
          sd(d, n, f);
      }
      var E;
      if (Ac)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        zr
          ? rm(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (nm &&
          n.locale !== "ko" &&
          (zr || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && zr && (E = tm())
            : ((Fn = f),
              (Mc = "value" in Fn ? Fn.value : Fn.textContent),
              (zr = !0))),
        (M = Ql(s, O)),
        0 < M.length &&
          ((O = new ed(O, e, null, n, f)),
          d.push({ event: O, listeners: M }),
          E ? (O.data = E) : ((E = im(n)), E !== null && (O.data = E)))),
        (E = Uy ? By(e, n) : Vy(e, n)) &&
          ((s = Ql(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new ed("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: s }),
            (f.data = E)));
    }
    gm(d, t);
  });
}
function mo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ql(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ao(e, n)),
      o != null && r.unshift(mo(e, o, i)),
      (o = ao(e, t)),
      o != null && r.push(mo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function br(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function dd(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      i
        ? ((u = ao(n, o)), u != null && l.unshift(mo(n, u, a)))
        : i || ((u = ao(n, o)), u != null && l.push(mo(n, u, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var r1 = /\r\n?/g,
  i1 = /\u0000|\uFFFD/g;
function hd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      r1,
      `
`
    )
    .replace(i1, "");
}
function nl(e, t, n) {
  if (((t = hd(t)), hd(e) !== t && n)) throw Error(V(425));
}
function Kl() {}
var vs = null,
  ys = null;
function ws(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _s = typeof setTimeout == "function" ? setTimeout : void 0,
  o1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pd = typeof Promise == "function" ? Promise : void 0,
  l1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pd < "u"
      ? function (e) {
          return pd.resolve(null).then(e).catch(a1);
        }
      : _s;
function a1(e) {
  setTimeout(function () {
    throw e;
  });
}
function xu(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), co(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  co(t);
}
function Wn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function md(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wi = Math.random().toString(36).slice(2),
  on = "__reactFiber$" + wi,
  go = "__reactProps$" + wi,
  Nn = "__reactContainer$" + wi,
  xs = "__reactEvents$" + wi,
  u1 = "__reactListeners$" + wi,
  s1 = "__reactHandles$" + wi;
function ar(e) {
  var t = e[on];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nn] || n[on])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = md(e); e !== null; ) {
          if ((n = e[on])) return n;
          e = md(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Do(e) {
  return (
    (e = e[on] || e[Nn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $r(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function Ta(e) {
  return e[go] || null;
}
var Ss = [],
  jr = -1;
function tr(e) {
  return { current: e };
}
function Te(e) {
  0 > jr || ((e.current = Ss[jr]), (Ss[jr] = null), jr--);
}
function Ce(e, t) {
  jr++, (Ss[jr] = e.current), (e.current = t);
}
var Gn = {},
  rt = tr(Gn),
  mt = tr(!1),
  vr = Gn;
function li(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function gt(e) {
  return (e = e.childContextTypes), e != null;
}
function Xl() {
  Te(mt), Te(rt);
}
function gd(e, t, n) {
  if (rt.current !== Gn) throw Error(V(168));
  Ce(rt, t), Ce(mt, n);
}
function ym(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(V(108, Qv(e) || "Unknown", i));
  return be({}, n, r);
}
function Gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gn),
    (vr = rt.current),
    Ce(rt, e),
    Ce(mt, mt.current),
    !0
  );
}
function vd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n
    ? ((e = ym(e, t, vr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Te(mt),
      Te(rt),
      Ce(rt, e))
    : Te(mt),
    Ce(mt, n);
}
var wn = null,
  Ra = !1,
  Su = !1;
function wm(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function c1(e) {
  (Ra = !0), wm(e);
}
function nr() {
  if (!Su && wn !== null) {
    Su = !0;
    var e = 0,
      t = we;
    try {
      var n = wn;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wn = null), (Ra = !1);
    } catch (i) {
      throw (wn !== null && (wn = wn.slice(e + 1)), Wp(kc, nr), i);
    } finally {
      (we = t), (Su = !1);
    }
  }
  return null;
}
var Ur = [],
  Br = 0,
  ql = null,
  Zl = 0,
  At = [],
  Dt = 0,
  yr = null,
  _n = 1,
  xn = "";
function rr(e, t) {
  (Ur[Br++] = Zl), (Ur[Br++] = ql), (ql = e), (Zl = t);
}
function _m(e, t, n) {
  (At[Dt++] = _n), (At[Dt++] = xn), (At[Dt++] = yr), (yr = e);
  var r = _n;
  e = xn;
  var i = 32 - qt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - qt(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (_n = (1 << (32 - qt(t) + i)) | (n << i) | r),
      (xn = o + e);
  } else (_n = (1 << o) | (n << i) | r), (xn = e);
}
function Ic(e) {
  e.return !== null && (rr(e, 1), _m(e, 1, 0));
}
function zc(e) {
  for (; e === ql; )
    (ql = Ur[--Br]), (Ur[Br] = null), (Zl = Ur[--Br]), (Ur[Br] = null);
  for (; e === yr; )
    (yr = At[--Dt]),
      (At[Dt] = null),
      (xn = At[--Dt]),
      (At[Dt] = null),
      (_n = At[--Dt]),
      (At[Dt] = null);
}
var Nt = null,
  St = null,
  Re = !1,
  Qt = null;
function xm(e, t) {
  var n = It(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function yd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Nt = e), (St = Wn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Nt = e), (St = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = yr !== null ? { id: _n, overflow: xn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = It(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Nt = e),
            (St = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Es(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cs(e) {
  if (Re) {
    var t = St;
    if (t) {
      var n = t;
      if (!yd(e, t)) {
        if (Es(e)) throw Error(V(418));
        t = Wn(n.nextSibling);
        var r = Nt;
        t && yd(e, t)
          ? xm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (Nt = e));
      }
    } else {
      if (Es(e)) throw Error(V(418));
      (e.flags = (e.flags & -4097) | 2), (Re = !1), (Nt = e);
    }
  }
}
function wd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Nt = e;
}
function rl(e) {
  if (e !== Nt) return !1;
  if (!Re) return wd(e), (Re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ws(e.type, e.memoizedProps))),
    t && (t = St))
  ) {
    if (Es(e)) throw (Sm(), Error(V(418)));
    for (; t; ) xm(e, t), (t = Wn(t.nextSibling));
  }
  if ((wd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              St = Wn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      St = null;
    }
  } else St = Nt ? Wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Sm() {
  for (var e = St; e; ) e = Wn(e.nextSibling);
}
function ai() {
  (St = Nt = null), (Re = !1);
}
function Lc(e) {
  Qt === null ? (Qt = [e]) : Qt.push(e);
}
var f1 = Mn.ReactCurrentBatchConfig;
function Ht(e, t) {
  if (e && e.defaultProps) {
    (t = be({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Jl = tr(null),
  ea = null,
  Vr = null,
  Fc = null;
function $c() {
  Fc = Vr = ea = null;
}
function jc(e) {
  var t = Jl.current;
  Te(Jl), (e._currentValue = t);
}
function Ns(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jr(e, t) {
  (ea = e),
    (Fc = Vr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (ht = !0), (e.firstContext = null));
}
function Ft(e) {
  var t = e._currentValue;
  if (Fc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vr === null)) {
      if (ea === null) throw Error(V(308));
      (Vr = e), (ea.dependencies = { lanes: 0, firstContext: e });
    } else Vr = Vr.next = e;
  return t;
}
var ur = null;
function Uc(e) {
  ur === null ? (ur = [e]) : ur.push(e);
}
function Em(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Uc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    kn(e, r)
  );
}
function kn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var In = !1;
function Bc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function En(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Hn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (pe & 2) !== 0)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      kn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Uc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    kn(e, n)
  );
}
function Pl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pc(e, n);
  }
}
function _d(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ta(e, t, n, r) {
  var i = e.updateQueue;
  In = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), l === null ? (o = s) : (l.next = s), (l = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = i.baseState;
    (l = 0), (f = s = u = null), (a = o);
    do {
      var c = a.lane,
        m = a.eventTime;
      if ((r & c) === c) {
        f !== null &&
          (f = f.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            w = a;
          switch (((c = t), (m = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                d = S.call(m, d, c);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (c = typeof S == "function" ? S.call(m, d, c) : S),
                c == null)
              )
                break e;
              d = be({}, d, c);
              break e;
            case 2:
              In = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (c = i.effects),
          c === null ? (i.effects = [a]) : c.push(a));
      } else
        (m = {
          eventTime: m,
          lane: c,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = m), (u = d)) : (f = f.next = m),
          (l |= c);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (c = a),
          (a = c.next),
          (c.next = null),
          (i.lastBaseUpdate = c),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (u = d),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (_r |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function xd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(V(191, i));
        i.call(r);
      }
    }
}
var Nm = new Ep.Component().refs;
function ks(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : be({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ma = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      i = Qn(e),
      o = En(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Hn(e, o, i)),
      t !== null && (Zt(t, e, i, r), Pl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = lt(),
      i = Qn(e),
      o = En(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Hn(e, o, i)),
      t !== null && (Zt(t, e, i, r), Pl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = lt(),
      r = Qn(e),
      i = En(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Hn(e, i, r)),
      t !== null && (Zt(t, e, r, n), Pl(t, e, r));
  },
};
function Sd(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ho(n, r) || !ho(i, o)
      : !0
  );
}
function km(e, t, n) {
  var r = !1,
    i = Gn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ft(o))
      : ((i = gt(t) ? vr : rt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? li(e, i) : Gn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ma),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ed(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ma.enqueueReplaceState(t, t.state, null);
}
function Ps(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Nm), Bc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ft(o))
    : ((o = gt(t) ? vr : rt.current), (i.context = li(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ks(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ma.enqueueReplaceState(i, i.state, null),
      ta(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            a === Nm && (a = i.refs = {}),
              l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function il(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      V(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cd(e) {
  var t = e._init;
  return t(e._payload);
}
function Pm(e) {
  function t(p, g) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [g]), (p.flags |= 16)) : h.push(g);
    }
  }
  function n(p, g) {
    if (!e) return null;
    for (; g !== null; ) t(p, g), (g = g.sibling);
    return null;
  }
  function r(p, g) {
    for (p = new Map(); g !== null; )
      g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling);
    return p;
  }
  function i(p, g) {
    return (p = Kn(p, g)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, g, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < g ? ((p.flags |= 2), g) : h)
            : ((p.flags |= 2), g))
        : ((p.flags |= 1048576), g)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, g, h, y) {
    return g === null || g.tag !== 6
      ? ((g = Ru(h, p.mode, y)), (g.return = p), g)
      : ((g = i(g, h)), (g.return = p), g);
  }
  function u(p, g, h, y) {
    var x = h.type;
    return x === Ir
      ? f(p, g, h.props.children, y, h.key)
      : g !== null &&
        (g.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Dn &&
            Cd(x) === g.type))
      ? ((y = i(g, h.props)), (y.ref = Mi(p, g, h)), (y.return = p), y)
      : ((y = Al(h.type, h.key, h.props, null, p.mode, y)),
        (y.ref = Mi(p, g, h)),
        (y.return = p),
        y);
  }
  function s(p, g, h, y) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== h.containerInfo ||
      g.stateNode.implementation !== h.implementation
      ? ((g = Mu(h, p.mode, y)), (g.return = p), g)
      : ((g = i(g, h.children || [])), (g.return = p), g);
  }
  function f(p, g, h, y, x) {
    return g === null || g.tag !== 7
      ? ((g = pr(h, p.mode, y, x)), (g.return = p), g)
      : ((g = i(g, h)), (g.return = p), g);
  }
  function d(p, g, h) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = Ru("" + g, p.mode, h)), (g.return = p), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Qo:
          return (
            (h = Al(g.type, g.key, g.props, null, p.mode, h)),
            (h.ref = Mi(p, null, g)),
            (h.return = p),
            h
          );
        case Dr:
          return (g = Mu(g, p.mode, h)), (g.return = p), g;
        case Dn:
          var y = g._init;
          return d(p, y(g._payload), h);
      }
      if (ji(g) || Ni(g))
        return (g = pr(g, p.mode, h, null)), (g.return = p), g;
      il(p, g);
    }
    return null;
  }
  function c(p, g, h, y) {
    var x = g !== null ? g.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return x !== null ? null : a(p, g, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Qo:
          return h.key === x ? u(p, g, h, y) : null;
        case Dr:
          return h.key === x ? s(p, g, h, y) : null;
        case Dn:
          return (x = h._init), c(p, g, x(h._payload), y);
      }
      if (ji(h) || Ni(h)) return x !== null ? null : f(p, g, h, y, null);
      il(p, h);
    }
    return null;
  }
  function m(p, g, h, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (p = p.get(h) || null), a(g, p, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Qo:
          return (p = p.get(y.key === null ? h : y.key) || null), u(g, p, y, x);
        case Dr:
          return (p = p.get(y.key === null ? h : y.key) || null), s(g, p, y, x);
        case Dn:
          var M = y._init;
          return m(p, g, h, M(y._payload), x);
      }
      if (ji(y) || Ni(y)) return (p = p.get(h) || null), f(g, p, y, x, null);
      il(g, y);
    }
    return null;
  }
  function S(p, g, h, y) {
    for (
      var x = null, M = null, E = g, O = (g = 0), L = null;
      E !== null && O < h.length;
      O++
    ) {
      E.index > O ? ((L = E), (E = null)) : (L = E.sibling);
      var z = c(p, E, h[O], y);
      if (z === null) {
        E === null && (E = L);
        break;
      }
      e && E && z.alternate === null && t(p, E),
        (g = o(z, g, O)),
        M === null ? (x = z) : (M.sibling = z),
        (M = z),
        (E = L);
    }
    if (O === h.length) return n(p, E), Re && rr(p, O), x;
    if (E === null) {
      for (; O < h.length; O++)
        (E = d(p, h[O], y)),
          E !== null &&
            ((g = o(E, g, O)), M === null ? (x = E) : (M.sibling = E), (M = E));
      return Re && rr(p, O), x;
    }
    for (E = r(p, E); O < h.length; O++)
      (L = m(E, p, O, h[O], y)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? O : L.key),
          (g = o(L, g, O)),
          M === null ? (x = L) : (M.sibling = L),
          (M = L));
    return (
      e &&
        E.forEach(function (j) {
          return t(p, j);
        }),
      Re && rr(p, O),
      x
    );
  }
  function w(p, g, h, y) {
    var x = Ni(h);
    if (typeof x != "function") throw Error(V(150));
    if (((h = x.call(h)), h == null)) throw Error(V(151));
    for (
      var M = (x = null), E = g, O = (g = 0), L = null, z = h.next();
      E !== null && !z.done;
      O++, z = h.next()
    ) {
      E.index > O ? ((L = E), (E = null)) : (L = E.sibling);
      var j = c(p, E, z.value, y);
      if (j === null) {
        E === null && (E = L);
        break;
      }
      e && E && j.alternate === null && t(p, E),
        (g = o(j, g, O)),
        M === null ? (x = j) : (M.sibling = j),
        (M = j),
        (E = L);
    }
    if (z.done) return n(p, E), Re && rr(p, O), x;
    if (E === null) {
      for (; !z.done; O++, z = h.next())
        (z = d(p, z.value, y)),
          z !== null &&
            ((g = o(z, g, O)), M === null ? (x = z) : (M.sibling = z), (M = z));
      return Re && rr(p, O), x;
    }
    for (E = r(p, E); !z.done; O++, z = h.next())
      (z = m(E, p, O, z.value, y)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? O : z.key),
          (g = o(z, g, O)),
          M === null ? (x = z) : (M.sibling = z),
          (M = z));
    return (
      e &&
        E.forEach(function (ie) {
          return t(p, ie);
        }),
      Re && rr(p, O),
      x
    );
  }
  function C(p, g, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Ir &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Qo:
          e: {
            for (var x = h.key, M = g; M !== null; ) {
              if (M.key === x) {
                if (((x = h.type), x === Ir)) {
                  if (M.tag === 7) {
                    n(p, M.sibling),
                      (g = i(M, h.props.children)),
                      (g.return = p),
                      (p = g);
                    break e;
                  }
                } else if (
                  M.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Dn &&
                    Cd(x) === M.type)
                ) {
                  n(p, M.sibling),
                    (g = i(M, h.props)),
                    (g.ref = Mi(p, M, h)),
                    (g.return = p),
                    (p = g);
                  break e;
                }
                n(p, M);
                break;
              } else t(p, M);
              M = M.sibling;
            }
            h.type === Ir
              ? ((g = pr(h.props.children, p.mode, y, h.key)),
                (g.return = p),
                (p = g))
              : ((y = Al(h.type, h.key, h.props, null, p.mode, y)),
                (y.ref = Mi(p, g, h)),
                (y.return = p),
                (p = y));
          }
          return l(p);
        case Dr:
          e: {
            for (M = h.key; g !== null; ) {
              if (g.key === M)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === h.containerInfo &&
                  g.stateNode.implementation === h.implementation
                ) {
                  n(p, g.sibling),
                    (g = i(g, h.children || [])),
                    (g.return = p),
                    (p = g);
                  break e;
                } else {
                  n(p, g);
                  break;
                }
              else t(p, g);
              g = g.sibling;
            }
            (g = Mu(h, p.mode, y)), (g.return = p), (p = g);
          }
          return l(p);
        case Dn:
          return (M = h._init), C(p, g, M(h._payload), y);
      }
      if (ji(h)) return S(p, g, h, y);
      if (Ni(h)) return w(p, g, h, y);
      il(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (g = i(g, h)), (g.return = p), (p = g))
          : (n(p, g), (g = Ru(h, p.mode, y)), (g.return = p), (p = g)),
        l(p))
      : n(p, g);
  }
  return C;
}
var ui = Pm(!0),
  Tm = Pm(!1),
  Io = {},
  un = tr(Io),
  vo = tr(Io),
  yo = tr(Io);
function sr(e) {
  if (e === Io) throw Error(V(174));
  return e;
}
function Vc(e, t) {
  switch ((Ce(yo, t), Ce(vo, e), Ce(un, Io), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : os(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = os(t, e));
  }
  Te(un), Ce(un, t);
}
function si() {
  Te(un), Te(vo), Te(yo);
}
function Rm(e) {
  sr(yo.current);
  var t = sr(un.current),
    n = os(t, e.type);
  t !== n && (Ce(vo, e), Ce(un, n));
}
function Wc(e) {
  vo.current === e && (Te(un), Te(vo));
}
var Me = tr(0);
function na(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Eu = [];
function Hc() {
  for (var e = 0; e < Eu.length; e++)
    Eu[e]._workInProgressVersionPrimary = null;
  Eu.length = 0;
}
var Tl = Mn.ReactCurrentDispatcher,
  Cu = Mn.ReactCurrentBatchConfig,
  wr = 0,
  Oe = null,
  Ue = null,
  We = null,
  ra = !1,
  qi = !1,
  wo = 0,
  d1 = 0;
function et() {
  throw Error(V(321));
}
function Yc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Jt(e[n], t[n])) return !1;
  return !0;
}
function Qc(e, t, n, r, i, o) {
  if (
    ((wr = o),
    (Oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Tl.current = e === null || e.memoizedState === null ? g1 : v1),
    (e = n(r, i)),
    qi)
  ) {
    o = 0;
    do {
      if (((qi = !1), (wo = 0), 25 <= o)) throw Error(V(301));
      (o += 1),
        (We = Ue = null),
        (t.updateQueue = null),
        (Tl.current = y1),
        (e = n(r, i));
    } while (qi);
  }
  if (
    ((Tl.current = ia),
    (t = Ue !== null && Ue.next !== null),
    (wr = 0),
    (We = Ue = Oe = null),
    (ra = !1),
    t)
  )
    throw Error(V(300));
  return e;
}
function Kc() {
  var e = wo !== 0;
  return (wo = 0), e;
}
function rn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return We === null ? (Oe.memoizedState = We = e) : (We = We.next = e), We;
}
function $t() {
  if (Ue === null) {
    var e = Oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ue.next;
  var t = We === null ? Oe.memoizedState : We.next;
  if (t !== null) (We = t), (Ue = e);
  else {
    if (e === null) throw Error(V(310));
    (Ue = e),
      (e = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null,
      }),
      We === null ? (Oe.memoizedState = We = e) : (We = We.next = e);
  }
  return We;
}
function _o(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Nu(e) {
  var t = $t(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = Ue,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      u = null,
      s = o;
    do {
      var f = s.lane;
      if ((wr & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = d), (l = r)) : (u = u.next = d),
          (Oe.lanes |= f),
          (_r |= f);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (l = r) : (u.next = a),
      Jt(r, t.memoizedState) || (ht = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Oe.lanes |= o), (_r |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ku(e) {
  var t = $t(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Jt(o, t.memoizedState) || (ht = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Mm() {}
function Om(e, t) {
  var n = Oe,
    r = $t(),
    i = t(),
    o = !Jt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ht = !0)),
    (r = r.queue),
    Xc(Dm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (We !== null && We.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      xo(9, Am.bind(null, n, r, i, t), void 0, null),
      He === null)
    )
      throw Error(V(349));
    (wr & 30) !== 0 || bm(n, t, i);
  }
  return i;
}
function bm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Am(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Im(t) && zm(e);
}
function Dm(e, t, n) {
  return n(function () {
    Im(t) && zm(e);
  });
}
function Im(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Jt(e, n);
  } catch {
    return !0;
  }
}
function zm(e) {
  var t = kn(e, 1);
  t !== null && Zt(t, e, 1, -1);
}
function Nd(e) {
  var t = rn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _o,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = m1.bind(null, Oe, e)),
    [t.memoizedState, e]
  );
}
function xo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Lm() {
  return $t().memoizedState;
}
function Rl(e, t, n, r) {
  var i = rn();
  (Oe.flags |= e),
    (i.memoizedState = xo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oa(e, t, n, r) {
  var i = $t();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ue !== null) {
    var l = Ue.memoizedState;
    if (((o = l.destroy), r !== null && Yc(r, l.deps))) {
      i.memoizedState = xo(t, n, o, r);
      return;
    }
  }
  (Oe.flags |= e), (i.memoizedState = xo(1 | t, n, o, r));
}
function kd(e, t) {
  return Rl(8390656, 8, e, t);
}
function Xc(e, t) {
  return Oa(2048, 8, e, t);
}
function Fm(e, t) {
  return Oa(4, 2, e, t);
}
function $m(e, t) {
  return Oa(4, 4, e, t);
}
function jm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Um(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oa(4, 4, jm.bind(null, t, e), n)
  );
}
function Gc() {}
function Bm(e, t) {
  var n = $t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Vm(e, t) {
  var n = $t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wm(e, t, n) {
  return (wr & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (ht = !0)), (e.memoizedState = n))
    : (Jt(n, t) || ((n = Qp()), (Oe.lanes |= n), (_r |= n), (e.baseState = !0)),
      t);
}
function h1(e, t) {
  var n = we;
  (we = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Cu.transition;
  Cu.transition = {};
  try {
    e(!1), t();
  } finally {
    (we = n), (Cu.transition = r);
  }
}
function Hm() {
  return $t().memoizedState;
}
function p1(e, t, n) {
  var r = Qn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ym(e))
  )
    Qm(t, n);
  else if (((n = Em(e, t, n, r)), n !== null)) {
    var i = lt();
    Zt(n, e, r, i), Km(n, t, r);
  }
}
function m1(e, t, n) {
  var r = Qn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ym(e)) Qm(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Jt(a, l))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Uc(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Em(e, t, i, r)),
      n !== null && ((i = lt()), Zt(n, e, r, i), Km(n, t, r));
  }
}
function Ym(e) {
  var t = e.alternate;
  return e === Oe || (t !== null && t === Oe);
}
function Qm(e, t) {
  qi = ra = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Km(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pc(e, n);
  }
}
var ia = {
    readContext: Ft,
    useCallback: et,
    useContext: et,
    useEffect: et,
    useImperativeHandle: et,
    useInsertionEffect: et,
    useLayoutEffect: et,
    useMemo: et,
    useReducer: et,
    useRef: et,
    useState: et,
    useDebugValue: et,
    useDeferredValue: et,
    useTransition: et,
    useMutableSource: et,
    useSyncExternalStore: et,
    useId: et,
    unstable_isNewReconciler: !1,
  },
  g1 = {
    readContext: Ft,
    useCallback: function (e, t) {
      return (rn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ft,
    useEffect: kd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Rl(4194308, 4, jm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = rn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = p1.bind(null, Oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nd,
    useDebugValue: Gc,
    useDeferredValue: function (e) {
      return (rn().memoizedState = e);
    },
    useTransition: function () {
      var e = Nd(!1),
        t = e[0];
      return (e = h1.bind(null, e[1])), (rn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Oe,
        i = rn();
      if (Re) {
        if (n === void 0) throw Error(V(407));
        n = n();
      } else {
        if (((n = t()), He === null)) throw Error(V(349));
        (wr & 30) !== 0 || bm(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        kd(Dm.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        xo(9, Am.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rn(),
        t = He.identifierPrefix;
      if (Re) {
        var n = xn,
          r = _n;
        (n = (r & ~(1 << (32 - qt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = wo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = d1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  v1 = {
    readContext: Ft,
    useCallback: Bm,
    useContext: Ft,
    useEffect: Xc,
    useImperativeHandle: Um,
    useInsertionEffect: Fm,
    useLayoutEffect: $m,
    useMemo: Vm,
    useReducer: Nu,
    useRef: Lm,
    useState: function () {
      return Nu(_o);
    },
    useDebugValue: Gc,
    useDeferredValue: function (e) {
      var t = $t();
      return Wm(t, Ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Nu(_o)[0],
        t = $t().memoizedState;
      return [e, t];
    },
    useMutableSource: Mm,
    useSyncExternalStore: Om,
    useId: Hm,
    unstable_isNewReconciler: !1,
  },
  y1 = {
    readContext: Ft,
    useCallback: Bm,
    useContext: Ft,
    useEffect: Xc,
    useImperativeHandle: Um,
    useInsertionEffect: Fm,
    useLayoutEffect: $m,
    useMemo: Vm,
    useReducer: ku,
    useRef: Lm,
    useState: function () {
      return ku(_o);
    },
    useDebugValue: Gc,
    useDeferredValue: function (e) {
      var t = $t();
      return Ue === null ? (t.memoizedState = e) : Wm(t, Ue.memoizedState, e);
    },
    useTransition: function () {
      var e = ku(_o)[0],
        t = $t().memoizedState;
      return [e, t];
    },
    useMutableSource: Mm,
    useSyncExternalStore: Om,
    useId: Hm,
    unstable_isNewReconciler: !1,
  };
function ci(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Yv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Pu(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function Ts(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var w1 = typeof WeakMap == "function" ? WeakMap : Map;
function Xm(e, t, n) {
  (n = En(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      la || ((la = !0), (Fs = r)), Ts(e, t);
    }),
    n
  );
}
function Gm(e, t, n) {
  (n = En(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ts(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ts(e, t),
          typeof r != "function" &&
            (Yn === null ? (Yn = new Set([this])) : Yn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Pd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new w1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = A1.bind(null, e, t, n)), t.then(e, e));
}
function Td(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Rd(e, t, n, r, i) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = En(-1, 1)), (t.tag = 2), Hn(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = i), e);
}
var _1 = Mn.ReactCurrentOwner,
  ht = !1;
function it(e, t, n, r) {
  t.child = e === null ? Tm(t, null, n, r) : ui(t, e.child, n, r);
}
function Md(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Jr(t, i),
    (r = Qc(e, t, n, r, o, i)),
    (n = Kc()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Pn(e, t, i))
      : (Re && n && Ic(t), (t.flags |= 1), it(e, t, r, i), t.child)
  );
}
function Od(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !of(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), qm(e, t, o, r, i))
      : ((e = Al(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), (e.lanes & i) === 0)) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ho), n(l, r) && e.ref === t.ref)
    )
      return Pn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Kn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qm(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ho(o, r) && e.ref === t.ref)
      if (((ht = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        (e.flags & 131072) !== 0 && (ht = !0);
      else return (t.lanes = e.lanes), Pn(e, t, i);
  }
  return Rs(e, t, n, r, i);
}
function Zm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ce(Hr, _t),
        (_t |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ce(Hr, _t),
          (_t |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Ce(Hr, _t),
        (_t |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ce(Hr, _t),
      (_t |= r);
  return it(e, t, i, n), t.child;
}
function Jm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Rs(e, t, n, r, i) {
  var o = gt(n) ? vr : rt.current;
  return (
    (o = li(t, o)),
    Jr(t, i),
    (n = Qc(e, t, n, r, o, i)),
    (r = Kc()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Pn(e, t, i))
      : (Re && r && Ic(t), (t.flags |= 1), it(e, t, n, i), t.child)
  );
}
function bd(e, t, n, r, i) {
  if (gt(n)) {
    var o = !0;
    Gl(t);
  } else o = !1;
  if ((Jr(t, i), t.stateNode === null))
    Ml(e, t), km(t, n, r), Ps(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var u = l.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Ft(s))
      : ((s = gt(n) ? vr : rt.current), (s = li(t, s)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && Ed(t, l, r, s)),
      (In = !1);
    var c = t.memoizedState;
    (l.state = c),
      ta(t, r, l, i),
      (u = t.memoizedState),
      a !== r || c !== u || mt.current || In
        ? (typeof f == "function" && (ks(t, n, f, r), (u = t.memoizedState)),
          (a = In || Sd(t, n, a, r, c, u, s))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = s),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Cm(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : Ht(t.type, a)),
      (l.props = s),
      (d = t.pendingProps),
      (c = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ft(u))
        : ((u = gt(n) ? vr : rt.current), (u = li(t, u)));
    var m = n.getDerivedStateFromProps;
    (f =
      typeof m == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== d || c !== u) && Ed(t, l, r, u)),
      (In = !1),
      (c = t.memoizedState),
      (l.state = c),
      ta(t, r, l, i);
    var S = t.memoizedState;
    a !== d || c !== S || mt.current || In
      ? (typeof m == "function" && (ks(t, n, m, r), (S = t.memoizedState)),
        (s = In || Sd(t, n, s, r, c, S, u) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, S, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, S, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (l.props = r),
        (l.state = S),
        (l.context = u),
        (r = s))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ms(e, t, n, r, o, i);
}
function Ms(e, t, n, r, i, o) {
  Jm(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && vd(t, n, !1), Pn(e, t, o);
  (r = t.stateNode), (_1.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = ui(t, e.child, null, o)), (t.child = ui(t, null, a, o)))
      : it(e, t, a, o),
    (t.memoizedState = r.state),
    i && vd(t, n, !0),
    t.child
  );
}
function eg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? gd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gd(e, t.context, !1),
    Vc(e, t.containerInfo);
}
function Ad(e, t, n, r, i) {
  return ai(), Lc(i), (t.flags |= 256), it(e, t, n, r), t.child;
}
var Os = { dehydrated: null, treeContext: null, retryLane: 0 };
function bs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tg(e, t, n) {
  var r = t.pendingProps,
    i = Me.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Ce(Me, i & 1),
    e === null)
  )
    return (
      Cs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              (r & 1) === 0 && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Da(l, r, 0, null)),
              (e = pr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = bs(n)),
              (t.memoizedState = Os),
              e)
            : qc(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return x1(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      (l & 1) === 0 && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Kn(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Kn(a, o)) : ((o = pr(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? bs(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Os),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Kn(o, { mode: "visible", children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qc(e, t) {
  return (
    (t = Da({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ol(e, t, n, r) {
  return (
    r !== null && Lc(r),
    ui(t, e.child, null, n),
    (e = qc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function x1(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Pu(Error(V(422)))), ol(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Da({ mode: "visible", children: r.children }, i, 0, null)),
        (o = pr(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        (t.mode & 1) !== 0 && ui(t, e.child, null, l),
        (t.child.memoizedState = bs(l)),
        (t.memoizedState = Os),
        o);
  if ((t.mode & 1) === 0) return ol(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(V(419))), (r = Pu(o, r, void 0)), ol(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), ht || a)) {
    if (((r = He), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = (i & (r.suspendedLanes | l)) !== 0 ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), kn(e, i), Zt(r, e, i, -1));
    }
    return rf(), (r = Pu(Error(V(421)))), ol(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = D1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (St = Wn(i.nextSibling)),
      (Nt = t),
      (Re = !0),
      (Qt = null),
      e !== null &&
        ((At[Dt++] = _n),
        (At[Dt++] = xn),
        (At[Dt++] = yr),
        (_n = e.id),
        (xn = e.overflow),
        (yr = t)),
      (t = qc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Dd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ns(e.return, t, n);
}
function Tu(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function ng(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((it(e, t, r.children, n), (r = Me.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dd(e, n, t);
        else if (e.tag === 19) Dd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ce(Me, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && na(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Tu(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && na(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Tu(t, !0, n, null, o);
        break;
      case "together":
        Tu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ml(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (_r |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function S1(e, t, n) {
  switch (t.tag) {
    case 3:
      eg(t), ai();
      break;
    case 5:
      Rm(t);
      break;
    case 1:
      gt(t.type) && Gl(t);
      break;
    case 4:
      Vc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Ce(Jl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ce(Me, Me.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? tg(e, t, n)
          : (Ce(Me, Me.current & 1),
            (e = Pn(e, t, n)),
            e !== null ? e.sibling : null);
      Ce(Me, Me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return ng(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ce(Me, Me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zm(e, t, n);
  }
  return Pn(e, t, n);
}
var rg, As, ig, og;
rg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
As = function () {};
ig = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), sr(un.current);
    var o = null;
    switch (n) {
      case "input":
        (i = ts(e, i)), (r = ts(e, r)), (o = []);
        break;
      case "select":
        (i = be({}, i, { value: void 0 })),
          (r = be({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = is(e, i)), (r = is(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Kl);
    }
    ls(n, r);
    var l;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var a = i[s];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (oo.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                a[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (oo.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && Pe("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
og = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Oi(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function tt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function E1(e, t, n) {
  var r = t.pendingProps;
  switch ((zc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return tt(t), null;
    case 1:
      return gt(t.type) && Xl(), tt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        si(),
        Te(mt),
        Te(rt),
        Hc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (rl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Qt !== null && (Us(Qt), (Qt = null)))),
        As(e, t),
        tt(t),
        null
      );
    case 5:
      Wc(t);
      var i = sr(yo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ig(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return tt(t), null;
        }
        if (((e = sr(un.current)), rl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[on] = t), (r[go] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Pe("cancel", r), Pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Pe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Bi.length; i++) Pe(Bi[i], r);
              break;
            case "source":
              Pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Pe("error", r), Pe("load", r);
              break;
            case "details":
              Pe("toggle", r);
              break;
            case "input":
              Vf(r, o), Pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Pe("invalid", r);
              break;
            case "textarea":
              Hf(r, o), Pe("invalid", r);
          }
          ls(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      nl(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      nl(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : oo.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  Pe("scroll", r);
            }
          switch (n) {
            case "input":
              Ko(r), Wf(r, o, !0);
              break;
            case "textarea":
              Ko(r), Yf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Kl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = bp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[on] = t),
            (e[go] = r),
            rg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = as(n, r)), n)) {
              case "dialog":
                Pe("cancel", e), Pe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Bi.length; i++) Pe(Bi[i], e);
                i = r;
                break;
              case "source":
                Pe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Pe("error", e), Pe("load", e), (i = r);
                break;
              case "details":
                Pe("toggle", e), (i = r);
                break;
              case "input":
                Vf(e, r), (i = ts(e, r)), Pe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = be({}, r, { value: void 0 })),
                  Pe("invalid", e);
                break;
              case "textarea":
                Hf(e, r), (i = is(e, r)), Pe("invalid", e);
                break;
              default:
                i = r;
            }
            ls(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Ip(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Ap(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && lo(e, u)
                    : typeof u == "number" && lo(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (oo.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && Pe("scroll", e)
                      : u != null && xc(e, o, u, l));
              }
            switch (n) {
              case "input":
                Ko(e), Wf(e, r, !1);
                break;
              case "textarea":
                Ko(e), Yf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Xr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Xr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Kl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return tt(t), null;
    case 6:
      if (e && t.stateNode != null) og(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (((n = sr(yo.current)), sr(un.current), rl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[on] = t),
            (o = r.nodeValue !== n) && ((e = Nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                nl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  nl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[on] = t),
            (t.stateNode = r);
      }
      return tt(t), null;
    case 13:
      if (
        (Te(Me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Re && St !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          Sm(), ai(), (t.flags |= 98560), (o = !1);
        else if (((o = rl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(V(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(V(317));
            o[on] = t;
          } else
            ai(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          tt(t), (o = !1);
        } else Qt !== null && (Us(Qt), (Qt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (Me.current & 1) !== 0
                ? Be === 0 && (Be = 3)
                : rf())),
          t.updateQueue !== null && (t.flags |= 4),
          tt(t),
          null);
    case 4:
      return (
        si(), As(e, t), e === null && po(t.stateNode.containerInfo), tt(t), null
      );
    case 10:
      return jc(t.type._context), tt(t), null;
    case 17:
      return gt(t.type) && Xl(), tt(t), null;
    case 19:
      if ((Te(Me), (o = t.memoizedState), o === null)) return tt(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Oi(o, !1);
        else {
          if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((l = na(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Oi(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ce(Me, (Me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Fe() > fi &&
            ((t.flags |= 128), (r = !0), Oi(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = na(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Oi(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !Re)
            )
              return tt(t), null;
          } else
            2 * Fe() - o.renderingStartTime > fi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Oi(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Fe()),
          (t.sibling = null),
          (n = Me.current),
          Ce(Me, r ? (n & 1) | 2 : n & 1),
          t)
        : (tt(t), null);
    case 22:
    case 23:
      return (
        nf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (_t & 1073741824) !== 0 &&
            (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : tt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function C1(e, t) {
  switch ((zc(t), t.tag)) {
    case 1:
      return (
        gt(t.type) && Xl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        si(),
        Te(mt),
        Te(rt),
        Hc(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Wc(t), null;
    case 13:
      if (
        (Te(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(V(340));
        ai();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Te(Me), null;
    case 4:
      return si(), null;
    case 10:
      return jc(t.type._context), null;
    case 22:
    case 23:
      return nf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ll = !1,
  nt = !1,
  N1 = typeof WeakSet == "function" ? WeakSet : Set,
  Z = null;
function Wr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ae(e, t, r);
      }
    else n.current = null;
}
function Ds(e, t, n) {
  try {
    n();
  } catch (r) {
    Ae(e, t, r);
  }
}
var Id = !1;
function k1(e, t) {
  if (((vs = Hl), (e = sm()), Dc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            d = e,
            c = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = l + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (c = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (c === n && ++s === i && (a = l),
                c === o && ++f === r && (u = l),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = c), (c = d.parentNode);
            }
            d = m;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ys = { focusedElem: e, selectionRange: n }, Hl = !1, Z = t; Z !== null; )
    if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Z = e);
    else
      for (; Z !== null; ) {
        t = Z;
        try {
          var S = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    C = S.memoizedState,
                    p = t.stateNode,
                    g = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ht(t.type, w),
                      C
                    );
                  p.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(V(163));
            }
        } catch (y) {
          Ae(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Z = e);
          break;
        }
        Z = t.return;
      }
  return (S = Id), (Id = !1), S;
}
function Zi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ds(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ba(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Is(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function lg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[on], delete t[go], delete t[xs], delete t[u1], delete t[s1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ag(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function zd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ag(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Kl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zs(e, t, n), e = e.sibling; e !== null; ) zs(e, t, n), (e = e.sibling);
}
function Ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ls(e, t, n), e = e.sibling; e !== null; ) Ls(e, t, n), (e = e.sibling);
}
var Ke = null,
  Yt = !1;
function An(e, t, n) {
  for (n = n.child; n !== null; ) ug(e, t, n), (n = n.sibling);
}
function ug(e, t, n) {
  if (an && typeof an.onCommitFiberUnmount == "function")
    try {
      an.onCommitFiberUnmount(Ca, n);
    } catch {}
  switch (n.tag) {
    case 5:
      nt || Wr(n, t);
    case 6:
      var r = Ke,
        i = Yt;
      (Ke = null),
        An(e, t, n),
        (Ke = r),
        (Yt = i),
        Ke !== null &&
          (Yt
            ? ((e = Ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ke.removeChild(n.stateNode));
      break;
    case 18:
      Ke !== null &&
        (Yt
          ? ((e = Ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? xu(e.parentNode, n)
              : e.nodeType === 1 && xu(e, n),
            co(e))
          : xu(Ke, n.stateNode));
      break;
    case 4:
      (r = Ke),
        (i = Yt),
        (Ke = n.stateNode.containerInfo),
        (Yt = !0),
        An(e, t, n),
        (Ke = r),
        (Yt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !nt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ds(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      An(e, t, n);
      break;
    case 1:
      if (
        !nt &&
        (Wr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ae(n, t, a);
        }
      An(e, t, n);
      break;
    case 21:
      An(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((nt = (r = nt) || n.memoizedState !== null), An(e, t, n), (nt = r))
        : An(e, t, n);
      break;
    default:
      An(e, t, n);
  }
}
function Ld(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new N1()),
      t.forEach(function (r) {
        var i = I1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Bt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ke = a.stateNode), (Yt = !1);
              break e;
            case 3:
              (Ke = a.stateNode.containerInfo), (Yt = !0);
              break e;
            case 4:
              (Ke = a.stateNode.containerInfo), (Yt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ke === null) throw Error(V(160));
        ug(o, l, i), (Ke = null), (Yt = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        Ae(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) sg(t, e), (t = t.sibling);
}
function sg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Bt(t, e), nn(e), r & 4)) {
        try {
          Zi(3, e, e.return), ba(3, e);
        } catch (w) {
          Ae(e, e.return, w);
        }
        try {
          Zi(5, e, e.return);
        } catch (w) {
          Ae(e, e.return, w);
        }
      }
      break;
    case 1:
      Bt(t, e), nn(e), r & 512 && n !== null && Wr(n, n.return);
      break;
    case 5:
      if (
        (Bt(t, e),
        nn(e),
        r & 512 && n !== null && Wr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          lo(i, "");
        } catch (w) {
          Ae(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Mp(i, o),
              as(a, l);
            var s = as(a, o);
            for (l = 0; l < u.length; l += 2) {
              var f = u[l],
                d = u[l + 1];
              f === "style"
                ? Ip(i, d)
                : f === "dangerouslySetInnerHTML"
                ? Ap(i, d)
                : f === "children"
                ? lo(i, d)
                : xc(i, f, d, s);
            }
            switch (a) {
              case "input":
                ns(i, o);
                break;
              case "textarea":
                Op(i, o);
                break;
              case "select":
                var c = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? Xr(i, !!o.multiple, m, !1)
                  : c !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Xr(i, !!o.multiple, o.defaultValue, !0)
                      : Xr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[go] = o;
          } catch (w) {
            Ae(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Bt(t, e), nn(e), r & 4)) {
        if (e.stateNode === null) throw Error(V(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          Ae(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Bt(t, e), nn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          co(t.containerInfo);
        } catch (w) {
          Ae(e, e.return, w);
        }
      break;
    case 4:
      Bt(t, e), nn(e);
      break;
    case 13:
      Bt(t, e),
        nn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ef = Fe())),
        r & 4 && Ld(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((nt = (s = nt) || f), Bt(t, e), (nt = s)) : Bt(t, e),
        nn(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && (e.mode & 1) !== 0)
        )
          for (Z = e, f = e.child; f !== null; ) {
            for (d = Z = f; Z !== null; ) {
              switch (((c = Z), (m = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zi(4, c, c.return);
                  break;
                case 1:
                  Wr(c, c.return);
                  var S = c.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      Ae(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Wr(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    $d(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = c), (Z = m)) : $d(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (i = d.stateNode),
                  s
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (u = d.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Dp("display", l)));
              } catch (w) {
                Ae(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
              } catch (w) {
                Ae(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Bt(t, e), nn(e), r & 4 && Ld(e);
      break;
    case 21:
      break;
    default:
      Bt(t, e), nn(e);
  }
}
function nn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ag(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (lo(i, ""), (r.flags &= -33));
          var o = zd(e);
          Ls(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = zd(e);
          zs(e, a, l);
          break;
        default:
          throw Error(V(161));
      }
    } catch (u) {
      Ae(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function P1(e, t, n) {
  (Z = e), cg(e);
}
function cg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var i = Z,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || ll;
      if (!l) {
        var a = i.alternate,
          u = (a !== null && a.memoizedState !== null) || nt;
        a = ll;
        var s = nt;
        if (((ll = l), (nt = u) && !s))
          for (Z = i; Z !== null; )
            (l = Z),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? jd(i)
                : u !== null
                ? ((u.return = l), (Z = u))
                : jd(i);
        for (; o !== null; ) (Z = o), cg(o), (o = o.sibling);
        (Z = i), (ll = a), (nt = s);
      }
      Fd(e);
    } else
      (i.subtreeFlags & 8772) !== 0 && o !== null
        ? ((o.return = i), (Z = o))
        : Fd(e);
  }
}
function Fd(e) {
  for (; Z !== null; ) {
    var t = Z;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              nt || ba(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !nt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && xd(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xd(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && co(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(V(163));
          }
        nt || (t.flags & 512 && Is(t));
      } catch (c) {
        Ae(t, t.return, c);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function $d(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function jd(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ba(4, t);
          } catch (u) {
            Ae(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ae(t, i, u);
            }
          }
          var o = t.return;
          try {
            Is(t);
          } catch (u) {
            Ae(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Is(t);
          } catch (u) {
            Ae(t, l, u);
          }
      }
    } catch (u) {
      Ae(t, t.return, u);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (Z = a);
      break;
    }
    Z = t.return;
  }
}
var T1 = Math.ceil,
  oa = Mn.ReactCurrentDispatcher,
  Zc = Mn.ReactCurrentOwner,
  zt = Mn.ReactCurrentBatchConfig,
  pe = 0,
  He = null,
  je = null,
  qe = 0,
  _t = 0,
  Hr = tr(0),
  Be = 0,
  So = null,
  _r = 0,
  Aa = 0,
  Jc = 0,
  Ji = null,
  dt = null,
  ef = 0,
  fi = 1 / 0,
  vn = null,
  la = !1,
  Fs = null,
  Yn = null,
  al = !1,
  $n = null,
  aa = 0,
  eo = 0,
  $s = null,
  Ol = -1,
  bl = 0;
function lt() {
  return (pe & 6) !== 0 ? Fe() : Ol !== -1 ? Ol : (Ol = Fe());
}
function Qn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (pe & 2) !== 0 && qe !== 0
    ? qe & -qe
    : f1.transition !== null
    ? (bl === 0 && (bl = Qp()), bl)
    : ((e = we),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : em(e.type))),
      e);
}
function Zt(e, t, n, r) {
  if (50 < eo) throw ((eo = 0), ($s = null), Error(V(185)));
  bo(e, n, r),
    ((pe & 2) === 0 || e !== He) &&
      (e === He && ((pe & 2) === 0 && (Aa |= n), Be === 4 && Ln(e, qe)),
      vt(e, r),
      n === 1 &&
        pe === 0 &&
        (t.mode & 1) === 0 &&
        ((fi = Fe() + 500), Ra && nr()));
}
function vt(e, t) {
  var n = e.callbackNode;
  fy(e, t);
  var r = Wl(e, e === He ? qe : 0);
  if (r === 0)
    n !== null && Xf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xf(n), t === 1))
      e.tag === 0 ? c1(Ud.bind(null, e)) : wm(Ud.bind(null, e)),
        l1(function () {
          (pe & 6) === 0 && nr();
        }),
        (n = null);
    else {
      switch (Kp(r)) {
        case 1:
          n = kc;
          break;
        case 4:
          n = Hp;
          break;
        case 16:
          n = Vl;
          break;
        case 536870912:
          n = Yp;
          break;
        default:
          n = Vl;
      }
      n = yg(n, fg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fg(e, t) {
  if (((Ol = -1), (bl = 0), (pe & 6) !== 0)) throw Error(V(327));
  var n = e.callbackNode;
  if (ei() && e.callbackNode !== n) return null;
  var r = Wl(e, e === He ? qe : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ua(e, r);
  else {
    t = r;
    var i = pe;
    pe |= 2;
    var o = hg();
    (He !== e || qe !== t) && ((vn = null), (fi = Fe() + 500), hr(e, t));
    do
      try {
        O1();
        break;
      } catch (a) {
        dg(e, a);
      }
    while (1);
    $c(),
      (oa.current = o),
      (pe = i),
      je !== null ? (t = 0) : ((He = null), (qe = 0), (t = Be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ds(e)), i !== 0 && ((r = i), (t = js(e, i)))), t === 1)
    )
      throw ((n = So), hr(e, 0), Ln(e, r), vt(e, Fe()), n);
    if (t === 6) Ln(e, r);
    else {
      if (
        ((i = e.current.alternate),
        (r & 30) === 0 &&
          !R1(i) &&
          ((t = ua(e, r)),
          t === 2 && ((o = ds(e)), o !== 0 && ((r = o), (t = js(e, o)))),
          t === 1))
      )
        throw ((n = So), hr(e, 0), Ln(e, r), vt(e, Fe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          ir(e, dt, vn);
          break;
        case 3:
          if (
            (Ln(e, r), (r & 130023424) === r && ((t = ef + 500 - Fe()), 10 < t))
          ) {
            if (Wl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              lt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = _s(ir.bind(null, e, dt, vn), t);
            break;
          }
          ir(e, dt, vn);
          break;
        case 4:
          if ((Ln(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - qt(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Fe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * T1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _s(ir.bind(null, e, dt, vn), r);
            break;
          }
          ir(e, dt, vn);
          break;
        case 5:
          ir(e, dt, vn);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return vt(e, Fe()), e.callbackNode === n ? fg.bind(null, e) : null;
}
function js(e, t) {
  var n = Ji;
  return (
    e.current.memoizedState.isDehydrated && (hr(e, t).flags |= 256),
    (e = ua(e, t)),
    e !== 2 && ((t = dt), (dt = n), t !== null && Us(t)),
    e
  );
}
function Us(e) {
  dt === null ? (dt = e) : dt.push.apply(dt, e);
}
function R1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Jt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ln(e, t) {
  for (
    t &= ~Jc,
      t &= ~Aa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ud(e) {
  if ((pe & 6) !== 0) throw Error(V(327));
  ei();
  var t = Wl(e, 0);
  if ((t & 1) === 0) return vt(e, Fe()), null;
  var n = ua(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ds(e);
    r !== 0 && ((t = r), (n = js(e, r)));
  }
  if (n === 1) throw ((n = So), hr(e, 0), Ln(e, t), vt(e, Fe()), n);
  if (n === 6) throw Error(V(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ir(e, dt, vn),
    vt(e, Fe()),
    null
  );
}
function tf(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    (pe = n), pe === 0 && ((fi = Fe() + 500), Ra && nr());
  }
}
function xr(e) {
  $n !== null && $n.tag === 0 && (pe & 6) === 0 && ei();
  var t = pe;
  pe |= 1;
  var n = zt.transition,
    r = we;
  try {
    if (((zt.transition = null), (we = 1), e)) return e();
  } finally {
    (we = r), (zt.transition = n), (pe = t), (pe & 6) === 0 && nr();
  }
}
function nf() {
  (_t = Hr.current), Te(Hr);
}
function hr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), o1(n)), je !== null))
    for (n = je.return; n !== null; ) {
      var r = n;
      switch ((zc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xl();
          break;
        case 3:
          si(), Te(mt), Te(rt), Hc();
          break;
        case 5:
          Wc(r);
          break;
        case 4:
          si();
          break;
        case 13:
          Te(Me);
          break;
        case 19:
          Te(Me);
          break;
        case 10:
          jc(r.type._context);
          break;
        case 22:
        case 23:
          nf();
      }
      n = n.return;
    }
  if (
    ((He = e),
    (je = e = Kn(e.current, null)),
    (qe = _t = t),
    (Be = 0),
    (So = null),
    (Jc = Aa = _r = 0),
    (dt = Ji = null),
    ur !== null)
  ) {
    for (t = 0; t < ur.length; t++)
      if (((n = ur[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    ur = null;
  }
  return e;
}
function dg(e, t) {
  do {
    var n = je;
    try {
      if (($c(), (Tl.current = ia), ra)) {
        for (var r = Oe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ra = !1;
      }
      if (
        ((wr = 0),
        (We = Ue = Oe = null),
        (qi = !1),
        (wo = 0),
        (Zc.current = null),
        n === null || n.return === null)
      ) {
        (Be = 1), (So = t), (je = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          u = t;
        if (
          ((t = qe),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = a,
            d = f.tag;
          if ((f.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
            var c = f.alternate;
            c
              ? ((f.updateQueue = c.updateQueue),
                (f.memoizedState = c.memoizedState),
                (f.lanes = c.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var m = Td(l);
          if (m !== null) {
            (m.flags &= -257),
              Rd(m, l, a, o, t),
              m.mode & 1 && Pd(o, s, t),
              (t = m),
              (u = s);
            var S = t.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else S.add(u);
            break e;
          } else {
            if ((t & 1) === 0) {
              Pd(o, s, t), rf();
              break e;
            }
            u = Error(V(426));
          }
        } else if (Re && a.mode & 1) {
          var C = Td(l);
          if (C !== null) {
            (C.flags & 65536) === 0 && (C.flags |= 256),
              Rd(C, l, a, o, t),
              Lc(ci(u, a));
            break e;
          }
        }
        (o = u = ci(u, a)),
          Be !== 4 && (Be = 2),
          Ji === null ? (Ji = [o]) : Ji.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = Xm(o, u, t);
              _d(o, p);
              break e;
            case 1:
              a = u;
              var g = o.type,
                h = o.stateNode;
              if (
                (o.flags & 128) === 0 &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Yn === null || !Yn.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = Gm(o, a, t);
                _d(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      mg(n);
    } catch (x) {
      (t = x), je === n && n !== null && (je = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function hg() {
  var e = oa.current;
  return (oa.current = ia), e === null ? ia : e;
}
function rf() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    He === null ||
      ((_r & 268435455) === 0 && (Aa & 268435455) === 0) ||
      Ln(He, qe);
}
function ua(e, t) {
  var n = pe;
  pe |= 2;
  var r = hg();
  (He !== e || qe !== t) && ((vn = null), hr(e, t));
  do
    try {
      M1();
      break;
    } catch (i) {
      dg(e, i);
    }
  while (1);
  if (($c(), (pe = n), (oa.current = r), je !== null)) throw Error(V(261));
  return (He = null), (qe = 0), Be;
}
function M1() {
  for (; je !== null; ) pg(je);
}
function O1() {
  for (; je !== null && !ny(); ) pg(je);
}
function pg(e) {
  var t = vg(e.alternate, e, _t);
  (e.memoizedProps = e.pendingProps),
    t === null ? mg(e) : (je = t),
    (Zc.current = null);
}
function mg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = E1(n, t, _t)), n !== null)) {
        je = n;
        return;
      }
    } else {
      if (((n = C1(n, t)), n !== null)) {
        (n.flags &= 32767), (je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Be = 6), (je = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function ir(e, t, n) {
  var r = we,
    i = zt.transition;
  try {
    (zt.transition = null), (we = 1), b1(e, t, n, r);
  } finally {
    (zt.transition = i), (we = r);
  }
  return null;
}
function b1(e, t, n, r) {
  do ei();
  while ($n !== null);
  if ((pe & 6) !== 0) throw Error(V(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(V(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (dy(e, o),
    e === He && ((je = He = null), (qe = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      al ||
      ((al = !0),
      yg(Vl, function () {
        return ei(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || o)
  ) {
    (o = zt.transition), (zt.transition = null);
    var l = we;
    we = 1;
    var a = pe;
    (pe |= 4),
      (Zc.current = null),
      k1(e, n),
      sg(n, e),
      Zy(ys),
      (Hl = !!vs),
      (ys = vs = null),
      (e.current = n),
      P1(n),
      ry(),
      (pe = a),
      (we = l),
      (zt.transition = o);
  } else e.current = n;
  if (
    (al && ((al = !1), ($n = e), (aa = i)),
    (o = e.pendingLanes),
    o === 0 && (Yn = null),
    ly(n.stateNode),
    vt(e, Fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (la) throw ((la = !1), (e = Fs), (Fs = null), e);
  return (
    (aa & 1) !== 0 && e.tag !== 0 && ei(),
    (o = e.pendingLanes),
    (o & 1) !== 0 ? (e === $s ? eo++ : ((eo = 0), ($s = e))) : (eo = 0),
    nr(),
    null
  );
}
function ei() {
  if ($n !== null) {
    var e = Kp(aa),
      t = zt.transition,
      n = we;
    try {
      if (((zt.transition = null), (we = 16 > e ? 16 : e), $n === null))
        var r = !1;
      else {
        if (((e = $n), ($n = null), (aa = 0), (pe & 6) !== 0))
          throw Error(V(331));
        var i = pe;
        for (pe |= 4, Z = e.current; Z !== null; ) {
          var o = Z,
            l = o.child;
          if ((Z.flags & 16) !== 0) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (Z = s; Z !== null; ) {
                  var f = Z;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zi(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (Z = d);
                  else
                    for (; Z !== null; ) {
                      f = Z;
                      var c = f.sibling,
                        m = f.return;
                      if ((lg(f), f === s)) {
                        Z = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = m), (Z = c);
                        break;
                      }
                      Z = m;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              Z = o;
            }
          }
          if ((o.subtreeFlags & 2064) !== 0 && l !== null)
            (l.return = o), (Z = l);
          else
            e: for (; Z !== null; ) {
              if (((o = Z), (o.flags & 2048) !== 0))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zi(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (Z = p);
                break e;
              }
              Z = o.return;
            }
        }
        var g = e.current;
        for (Z = g; Z !== null; ) {
          l = Z;
          var h = l.child;
          if ((l.subtreeFlags & 2064) !== 0 && h !== null)
            (h.return = l), (Z = h);
          else
            e: for (l = g; Z !== null; ) {
              if (((a = Z), (a.flags & 2048) !== 0))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ba(9, a);
                  }
                } catch (x) {
                  Ae(a, a.return, x);
                }
              if (a === l) {
                Z = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (Z = y);
                break e;
              }
              Z = a.return;
            }
        }
        if (
          ((pe = i), nr(), an && typeof an.onPostCommitFiberRoot == "function")
        )
          try {
            an.onPostCommitFiberRoot(Ca, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (we = n), (zt.transition = t);
    }
  }
  return !1;
}
function Bd(e, t, n) {
  (t = ci(n, t)),
    (t = Xm(e, t, 1)),
    (e = Hn(e, t, 1)),
    (t = lt()),
    e !== null && (bo(e, 1, t), vt(e, t));
}
function Ae(e, t, n) {
  if (e.tag === 3) Bd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yn === null || !Yn.has(r)))
        ) {
          (e = ci(n, e)),
            (e = Gm(t, e, 1)),
            (t = Hn(t, e, 1)),
            (e = lt()),
            t !== null && (bo(t, 1, e), vt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function A1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = lt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    He === e &&
      (qe & n) === n &&
      (Be === 4 || (Be === 3 && (qe & 130023424) === qe && 500 > Fe() - ef)
        ? hr(e, 0)
        : (Jc |= n)),
    vt(e, t);
}
function gg(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = qo), (qo <<= 1), (qo & 130023424) === 0 && (qo = 4194304)));
  var n = lt();
  (e = kn(e, t)), e !== null && (bo(e, t, n), vt(e, n));
}
function D1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gg(e, n);
}
function I1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  r !== null && r.delete(t), gg(e, n);
}
var vg;
vg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || mt.current) ht = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (ht = !1), S1(e, t, n);
      ht = (e.flags & 131072) !== 0;
    }
  else (ht = !1), Re && (t.flags & 1048576) !== 0 && _m(t, Zl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ml(e, t), (e = t.pendingProps);
      var i = li(t, rt.current);
      Jr(t, n), (i = Qc(null, t, r, e, i, n));
      var o = Kc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            gt(r) ? ((o = !0), Gl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Bc(t),
            (i.updater = Ma),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ps(t, r, e, n),
            (t = Ms(null, t, r, !0, o, n)))
          : ((t.tag = 0), Re && o && Ic(t), it(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ml(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = L1(r)),
          (e = Ht(r, e)),
          i)
        ) {
          case 0:
            t = Rs(null, t, r, e, n);
            break e;
          case 1:
            t = bd(null, t, r, e, n);
            break e;
          case 11:
            t = Md(null, t, r, e, n);
            break e;
          case 14:
            t = Od(null, t, r, Ht(r.type, e), n);
            break e;
        }
        throw Error(V(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ht(r, i)),
        Rs(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ht(r, i)),
        bd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((eg(t), e === null)) throw Error(V(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Cm(e, t),
          ta(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = ci(Error(V(423)), t)), (t = Ad(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ci(Error(V(424)), t)), (t = Ad(e, t, r, n, i));
            break e;
          } else
            for (
              St = Wn(t.stateNode.containerInfo.firstChild),
                Nt = t,
                Re = !0,
                Qt = null,
                n = Tm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ai(), r === i)) {
            t = Pn(e, t, n);
            break e;
          }
          it(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Rm(t),
        e === null && Cs(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        ws(r, i) ? (l = null) : o !== null && ws(r, o) && (t.flags |= 32),
        Jm(e, t),
        it(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Cs(t), null;
    case 13:
      return tg(e, t, n);
    case 4:
      return (
        Vc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ui(t, null, r, n)) : it(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ht(r, i)),
        Md(e, t, r, i, n)
      );
    case 7:
      return it(e, t, t.pendingProps, n), t.child;
    case 8:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          Ce(Jl, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Jt(o.value, l)) {
            if (o.children === i.children && !mt.current) {
              t = Pn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = En(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ns(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(V(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Ns(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        it(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Jr(t, n),
        (i = Ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        it(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ht(r, t.pendingProps)),
        (i = Ht(r.type, i)),
        Od(e, t, r, i, n)
      );
    case 15:
      return qm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ht(r, i)),
        Ml(e, t),
        (t.tag = 1),
        gt(r) ? ((e = !0), Gl(t)) : (e = !1),
        Jr(t, n),
        km(t, r, i),
        Ps(t, r, i, n),
        Ms(null, t, r, !0, e, n)
      );
    case 19:
      return ng(e, t, n);
    case 22:
      return Zm(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function yg(e, t) {
  return Wp(e, t);
}
function z1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function It(e, t, n, r) {
  return new z1(e, t, n, r);
}
function of(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function L1(e) {
  if (typeof e == "function") return of(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ec)) return 11;
    if (e === Cc) return 14;
  }
  return 2;
}
function Kn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = It(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Al(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) of(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Ir:
        return pr(n.children, i, o, t);
      case Sc:
        (l = 8), (i |= 8);
        break;
      case qu:
        return (
          (e = It(12, n, t, i | 2)), (e.elementType = qu), (e.lanes = o), e
        );
      case Zu:
        return (e = It(13, n, t, i)), (e.elementType = Zu), (e.lanes = o), e;
      case Ju:
        return (e = It(19, n, t, i)), (e.elementType = Ju), (e.lanes = o), e;
      case Pp:
        return Da(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Np:
              l = 10;
              break e;
            case kp:
              l = 9;
              break e;
            case Ec:
              l = 11;
              break e;
            case Cc:
              l = 14;
              break e;
            case Dn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(V(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = It(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function pr(e, t, n, r) {
  return (e = It(7, e, r, t)), (e.lanes = n), e;
}
function Da(e, t, n, r) {
  return (
    (e = It(22, e, r, t)),
    (e.elementType = Pp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ru(e, t, n) {
  return (e = It(6, e, null, t)), (e.lanes = n), e;
}
function Mu(e, t, n) {
  return (
    (t = It(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function F1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cu(0)),
    (this.expirationTimes = cu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function lf(e, t, n, r, i, o, l, a, u) {
  return (
    (e = new F1(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = It(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bc(o),
    e
  );
}
function $1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wg(e) {
  if (!e) return Gn;
  e = e._reactInternals;
  e: {
    if (Pr(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (gt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (gt(n)) return ym(e, n, t);
  }
  return t;
}
function _g(e, t, n, r, i, o, l, a, u) {
  return (
    (e = lf(n, r, !0, e, i, o, l, a, u)),
    (e.context = wg(null)),
    (n = e.current),
    (r = lt()),
    (i = Qn(n)),
    (o = En(r, i)),
    (o.callback = t != null ? t : null),
    Hn(n, o, i),
    (e.current.lanes = i),
    bo(e, i, r),
    vt(e, r),
    e
  );
}
function Ia(e, t, n, r) {
  var i = t.current,
    o = lt(),
    l = Qn(i);
  return (
    (n = wg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = En(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Hn(i, t, l)),
    e !== null && (Zt(e, i, l, o), Pl(e, i, l)),
    l
  );
}
function sa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function af(e, t) {
  Vd(e, t), (e = e.alternate) && Vd(e, t);
}
function j1() {
  return null;
}
var xg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function uf(e) {
  this._internalRoot = e;
}
za.prototype.render = uf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Ia(e, t, null, null);
};
za.prototype.unmount = uf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xr(function () {
      Ia(null, e, null, null);
    }),
      (t[Nn] = null);
  }
};
function za(e) {
  this._internalRoot = e;
}
za.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++);
    zn.splice(n, 0, e), n === 0 && Jp(e);
  }
};
function sf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function La(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wd() {}
function U1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = sa(l);
        o.call(s);
      };
    }
    var l = _g(t, r, e, 0, null, !1, !1, "", Wd);
    return (
      (e._reactRootContainer = l),
      (e[Nn] = l.current),
      po(e.nodeType === 8 ? e.parentNode : e),
      xr(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = sa(u);
      a.call(s);
    };
  }
  var u = lf(e, 0, !1, null, null, !1, !1, "", Wd);
  return (
    (e._reactRootContainer = u),
    (e[Nn] = u.current),
    po(e.nodeType === 8 ? e.parentNode : e),
    xr(function () {
      Ia(t, u, n, r);
    }),
    u
  );
}
function Fa(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var u = sa(l);
        a.call(u);
      };
    }
    Ia(t, l, e, i);
  } else l = U1(n, t, e, i, r);
  return sa(l);
}
Xp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ui(t.pendingLanes);
        n !== 0 &&
          (Pc(t, n | 1),
          vt(t, Fe()),
          (pe & 6) === 0 && ((fi = Fe() + 500), nr()));
      }
      break;
    case 13:
      xr(function () {
        var r = kn(e, 1);
        if (r !== null) {
          var i = lt();
          Zt(r, e, 1, i);
        }
      }),
        af(e, 1);
  }
};
Tc = function (e) {
  if (e.tag === 13) {
    var t = kn(e, 134217728);
    if (t !== null) {
      var n = lt();
      Zt(t, e, 134217728, n);
    }
    af(e, 134217728);
  }
};
Gp = function (e) {
  if (e.tag === 13) {
    var t = Qn(e),
      n = kn(e, t);
    if (n !== null) {
      var r = lt();
      Zt(n, e, t, r);
    }
    af(e, t);
  }
};
qp = function () {
  return we;
};
Zp = function (e, t) {
  var n = we;
  try {
    return (we = e), t();
  } finally {
    we = n;
  }
};
ss = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ns(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ta(r);
            if (!i) throw Error(V(90));
            Rp(r), ns(r, i);
          }
        }
      }
      break;
    case "textarea":
      Op(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xr(e, !!n.multiple, t, !1);
  }
};
Fp = tf;
$p = xr;
var B1 = { usingClientEntryPoint: !1, Events: [Do, $r, Ta, zp, Lp, tf] },
  bi = {
    findFiberByHostInstance: ar,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  V1 = {
    bundleType: bi.bundleType,
    version: bi.version,
    rendererPackageName: bi.rendererPackageName,
    rendererConfig: bi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: bi.findFiberByHostInstance || j1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ul.isDisabled && ul.supportsFiber)
    try {
      (Ca = ul.inject(V1)), (an = ul);
    } catch {}
}
Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B1;
Rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sf(t)) throw Error(V(200));
  return $1(e, t, null, n);
};
Rt.createRoot = function (e, t) {
  if (!sf(e)) throw Error(V(299));
  var n = !1,
    r = "",
    i = xg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = lf(e, 1, !1, null, null, n, !1, r, i)),
    (e[Nn] = t.current),
    po(e.nodeType === 8 ? e.parentNode : e),
    new uf(t)
  );
};
Rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(V(188))
      : ((e = Object.keys(e).join(",")), Error(V(268, e)));
  return (e = Bp(t)), (e = e === null ? null : e.stateNode), e;
};
Rt.flushSync = function (e) {
  return xr(e);
};
Rt.hydrate = function (e, t, n) {
  if (!La(t)) throw Error(V(200));
  return Fa(null, e, t, !0, n);
};
Rt.hydrateRoot = function (e, t, n) {
  if (!sf(e)) throw Error(V(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = xg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = _g(t, null, e, 1, n != null ? n : null, i, !1, o, l)),
    (e[Nn] = t.current),
    po(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new za(t);
};
Rt.render = function (e, t, n) {
  if (!La(t)) throw Error(V(200));
  return Fa(null, e, t, !1, n);
};
Rt.unmountComponentAtNode = function (e) {
  if (!La(e)) throw Error(V(40));
  return e._reactRootContainer
    ? (xr(function () {
        Fa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Nn] = null);
        });
      }),
      !0)
    : !1;
};
Rt.unstable_batchedUpdates = tf;
Rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!La(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return Fa(e, t, n, !1, r);
};
Rt.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Rt);
})(_p);
var Hd = _p.exports;
(Xu.createRoot = Hd.createRoot), (Xu.hydrateRoot = Hd.hydrateRoot);
/**
 * @remix-run/router v1.0.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Le() {
  return (
    (Le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Le.apply(this, arguments)
  );
}
var Xe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Xe || (Xe = {}));
const Yd = "popstate";
function W1(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: a } = r.location;
    return Eo(
      "",
      { pathname: o, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : qn(i);
  }
  return Y1(t, n, null, e);
}
function H1() {
  return Math.random().toString(36).substr(2, 8);
}
function Qd(e) {
  return { usr: e.state, key: e.key };
}
function Eo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Le(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Tr(t) : t,
      { state: n, key: (t && t.key) || r || H1() }
    )
  );
}
function qn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Tr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function mr(e) {
  let t =
      typeof window < "u" &&
      typeof window.location < "u" &&
      window.location.origin !== "null"
        ? window.location.origin
        : "unknown://unknown",
    n = typeof e == "string" ? e : qn(e);
  return new URL(n, t);
}
function Y1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = Xe.Pop,
    u = null;
  function s() {
    (a = Xe.Pop), u && u({ action: a, location: c.location });
  }
  function f(m, S) {
    a = Xe.Push;
    let w = Eo(c.location, m, S);
    n && n(w, m);
    let C = Qd(w),
      p = c.createHref(w);
    try {
      l.pushState(C, "", p);
    } catch {
      i.location.assign(p);
    }
    o && u && u({ action: a, location: c.location });
  }
  function d(m, S) {
    a = Xe.Replace;
    let w = Eo(c.location, m, S);
    n && n(w, m);
    let C = Qd(w),
      p = c.createHref(w);
    l.replaceState(C, "", p), o && u && u({ action: a, location: c.location });
  }
  let c = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(m) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Yd, s),
        (u = m),
        () => {
          i.removeEventListener(Yd, s), (u = null);
        }
      );
    },
    createHref(m) {
      return t(i, m);
    },
    encodeLocation(m) {
      let S = mr(typeof m == "string" ? m : qn(m));
      return { pathname: S.pathname, search: S.search, hash: S.hash };
    },
    push: f,
    replace: d,
    go(m) {
      return l.go(m);
    },
  };
  return c;
}
var Ge;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ge || (Ge = {}));
function Q1(e) {
  return e.index === !0;
}
function Sg(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, i) => {
      let o = [...t, i],
        l = typeof r.id == "string" ? r.id : o.join("-");
      return (
        xe(
          r.index !== !0 || !r.children,
          "Cannot specify children on an index route"
        ),
        xe(
          !n.has(l),
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        n.add(l),
        Q1(r)
          ? Le({}, r, { id: l })
          : Le({}, r, {
              id: l,
              children: r.children ? Sg(r.children, o, n) : void 0,
            })
      );
    })
  );
}
function sl(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Tr(t) : t,
    i = uw(r.pathname || "/", n);
  if (i == null) return null;
  let o = Eg(e);
  K1(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) l = rw(o[a], lw(i));
  return l;
}
function Eg(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((i, o) => {
      let l = {
        relativePath: i.path || "",
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: o,
        route: i,
      };
      l.relativePath.startsWith("/") &&
        (xe(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let a = to([r, l.relativePath]),
        u = n.concat(l);
      i.children &&
        i.children.length > 0 &&
        (xe(
          i.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + a + '".')
        ),
        Eg(i.children, t, u, a)),
        !(i.path == null && !i.index) &&
          t.push({ path: a, score: tw(a, i.index), routesMeta: u });
    }),
    t
  );
}
function K1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : nw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const X1 = /^:\w+$/,
  G1 = 3,
  q1 = 2,
  Z1 = 1,
  J1 = 10,
  ew = -2,
  Kd = (e) => e === "*";
function tw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Kd) && (r += ew),
    t && (r += q1),
    n
      .filter((i) => !Kd(i))
      .reduce((i, o) => i + (X1.test(o) ? G1 : o === "" ? Z1 : J1), r)
  );
}
function nw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function rw(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      u = l === n.length - 1,
      s = i === "/" ? t : t.slice(i.length) || "/",
      f = iw(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let d = a.route;
    o.push({
      params: r,
      pathname: to([i, f.pathname]),
      pathnameBase: dw(to([i, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== "/" && (i = to([i, f.pathnameBase]));
  }
  return o;
}
function iw(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ow(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((s, f, d) => {
      if (f === "*") {
        let c = a[d] || "";
        l = o.slice(0, o.length - c.length).replace(/(.)\/+$/, "$1");
      }
      return (s[f] = aw(a[d] || "", f)), s;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function ow(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (l, a) => (r.push(a), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function lw(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      cf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function aw(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      cf(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function uw(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function xe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function cf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function sw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Tr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : cw(n, t)) : t,
    search: hw(r),
    hash: pw(i),
  };
}
function cw(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ou(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Cg(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function fw(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Tr(e))
    : ((i = Le({}, e)),
      xe(
        !i.pathname || !i.pathname.includes("?"),
        Ou("?", "pathname", "search", i)
      ),
      xe(
        !i.pathname || !i.pathname.includes("#"),
        Ou("#", "pathname", "hash", i)
      ),
      xe(!i.search || !i.search.includes("#"), Ou("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    a;
  if (r || l == null) a = n;
  else {
    let d = t.length - 1;
    if (l.startsWith("..")) {
      let c = l.split("/");
      for (; c[0] === ".."; ) c.shift(), (d -= 1);
      i.pathname = c.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let u = sw(i, a),
    s = l && l !== "/" && l.endsWith("/"),
    f = (o || l === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u;
}
const to = (e) => e.join("/").replace(/\/\/+/g, "/"),
  dw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  pw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Xd extends Error {}
class mw {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      xe(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects"
      );
    let n;
    (this.abortPromise = new Promise((i, o) => (n = o))),
      (this.controller = new AbortController());
    let r = () => n(new Xd("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", r)),
      this.controller.signal.addEventListener("abort", r),
      (this.data = Object.entries(t).reduce((i, o) => {
        let [l, a] = o;
        return Object.assign(i, { [l]: this.trackPromise(l, a) });
      }, {}));
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.pendingKeys.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (i) => this.onSettle(r, t, null, i),
      (i) => this.onSettle(r, t, i)
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, "_tracked", { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, i) {
    if (this.controller.signal.aborted && r instanceof Xd)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => r }),
        Promise.reject(r)
      );
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const o = this.subscriber;
    return r
      ? (Object.defineProperty(t, "_error", { get: () => r }),
        o && o(!1),
        Promise.reject(r))
      : (Object.defineProperty(t, "_data", { get: () => i }), o && o(!1), i);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener("abort", r),
        (n = await new Promise((i) => {
          this.subscribe((o) => {
            t.removeEventListener("abort", r), (o || this.done) && i(o);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      xe(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds"
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, i] = n;
        return Object.assign(t, { [r]: vw(i) });
      }, {})
    );
  }
}
function gw(e) {
  return e instanceof Promise && e._tracked === !0;
}
function vw(e) {
  if (!gw(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class $a {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function yw(e) {
  return e instanceof $a;
}
const Ng = ["post", "put", "patch", "delete"],
  ww = new Set(Ng),
  _w = ["get", ...Ng],
  xw = new Set(_w),
  Sw = new Set([301, 302, 303, 307, 308]),
  Ew = new Set([307, 308]),
  bu = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Cw = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Nw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  kw = !Nw;
function Pw(e) {
  xe(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t = Sg(e.routes),
    n = null,
    r = new Set(),
    i = null,
    o = null,
    l = null,
    a = !1,
    u = sl(t, e.history.location, e.basename),
    s = null;
  if (u == null) {
    let I = lr(404, { pathname: e.history.location.pathname }),
      { matches: B, route: X } = eh(t);
    (u = B), (s = { [X.id]: I });
  }
  let f = !u.some((I) => I.route.loader) || e.hydrationData != null,
    d,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: u,
      initialized: f,
      navigation: bu,
      restoreScrollPosition: null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || s,
      fetchers: new Map(),
    },
    m = Xe.Pop,
    S = !1,
    w,
    C = !1,
    p = !1,
    g = [],
    h = [],
    y = new Map(),
    x = 0,
    M = -1,
    E = new Map(),
    O = new Set(),
    L = new Map(),
    z = new Map();
  function j() {
    return (
      (n = e.history.listen((I) => {
        let { action: B, location: X } = I;
        return A(B, X);
      })),
      c.initialized || A(Xe.Pop, c.location),
      d
    );
  }
  function ie() {
    n && n(), r.clear(), w && w.abort(), c.fetchers.forEach((I, B) => Ie(B));
  }
  function ue(I) {
    return r.add(I), () => r.delete(I);
  }
  function R(I) {
    (c = Le({}, c, I)), r.forEach((B) => B(c));
  }
  function G(I, B) {
    var X;
    let ne =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        c.navigation.state === "loading" &&
        ((X = c.navigation.formAction) == null ? void 0 : X.split("?")[0]) ===
          I.pathname,
      oe = B.loaderData
        ? { loaderData: Au(c.loaderData, B.loaderData, B.matches || []) }
        : {};
    R(
      Le({}, ne ? {} : { actionData: null }, B, oe, {
        historyAction: m,
        location: I,
        initialized: !0,
        navigation: bu,
        revalidation: "idle",
        restoreScrollPosition: c.navigation.formData
          ? !1
          : Si(I, B.matches || c.matches),
        preventScrollReset: S,
      })
    ),
      C ||
        m === Xe.Pop ||
        (m === Xe.Push
          ? e.history.push(I, I.state)
          : m === Xe.Replace && e.history.replace(I, I.state)),
      (m = Xe.Pop),
      (S = !1),
      (C = !1),
      (p = !1),
      (g = []),
      (h = []);
  }
  async function b(I, B) {
    if (typeof I == "number") {
      e.history.go(I);
      return;
    }
    let { path: X, submission: ne, error: oe } = Gd(I, B),
      ae = Eo(c.location, X, B && B.state);
    ae = Le({}, ae, e.history.encodeLocation(ae));
    let he = (B && B.replace) === !0 || ne != null ? Xe.Replace : Xe.Push,
      de =
        B && "preventScrollReset" in B ? B.preventScrollReset === !0 : void 0;
    return await A(he, ae, {
      submission: ne,
      pendingError: oe,
      preventScrollReset: de,
      replace: B && B.replace,
    });
  }
  function U() {
    if (
      (te(),
      R({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        A(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      A(m || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function A(I, B, X) {
    w && w.abort(),
      (w = null),
      (m = I),
      (C = (X && X.startUninterruptedRevalidation) === !0),
      Za(c.location, c.matches),
      (S = (X && X.preventScrollReset) === !0);
    let ne = X && X.overrideNavigation,
      oe = sl(t, B, e.basename);
    if (!oe) {
      let Ye = lr(404, { pathname: B.pathname }),
        { matches: fn, route: Ot } = eh(t);
      xi(), G(B, { matches: fn, loaderData: {}, errors: { [Ot.id]: Ye } });
      return;
    }
    if (bw(c.location, B)) {
      G(B, { matches: oe });
      return;
    }
    w = new AbortController();
    let ae = Di(B, w.signal, X && X.submission),
      he,
      de;
    if (X && X.pendingError) de = { [Yr(oe).route.id]: X.pendingError };
    else if (X && X.submission) {
      let Ye = await F(ae, B, X.submission, oe, { replace: X.replace });
      if (Ye.shortCircuited) return;
      (he = Ye.pendingActionData),
        (de = Ye.pendingActionError),
        (ne = Le({ state: "loading", location: B }, X.submission));
    }
    let {
      shortCircuited: ge,
      loaderData: _e,
      errors: Ee,
    } = await Y(ae, B, oe, ne, X && X.submission, X && X.replace, he, de);
    ge || ((w = null), G(B, { matches: oe, loaderData: _e, errors: Ee }));
  }
  async function F(I, B, X, ne, oe) {
    te();
    let ae = Le({ state: "submitting", location: B }, X);
    R({ navigation: ae });
    let he,
      de = ih(ne, B);
    if (!de.route.action)
      he = {
        type: Ge.error,
        error: lr(405, {
          method: I.method,
          pathname: B.pathname,
          routeId: de.route.id,
        }),
      };
    else if (
      ((he = await Ai("action", I, de, ne, d.basename)), I.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (ti(he))
      return await Ne(c, he, oe && oe.replace === !0), { shortCircuited: !0 };
    if (no(he)) {
      let ge = Yr(ne, de.route.id);
      return (
        (oe && oe.replace) !== !0 && (m = Xe.Push),
        { pendingActionError: { [ge.route.id]: he.error } }
      );
    }
    if (cr(he)) throw new Error("defer() is not supported in actions");
    return { pendingActionData: { [de.route.id]: he.data } };
  }
  async function Y(I, B, X, ne, oe, ae, he, de) {
    let ge = ne;
    ge ||
      (ge = {
        state: "loading",
        location: B,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      });
    let [_e, Ee] = qd(c, X, oe, B, p, g, h, he, de, L);
    if (
      (xi(
        (Je) =>
          !(X && X.some((Ve) => Ve.route.id === Je)) ||
          (_e && _e.some((Ve) => Ve.route.id === Je))
      ),
      _e.length === 0 && Ee.length === 0)
    )
      return (
        G(B, {
          matches: X,
          loaderData: Au(c.loaderData, {}, X),
          errors: de || null,
          actionData: he || null,
        }),
        { shortCircuited: !0 }
      );
    C ||
      (Ee.forEach((Je) => {
        let [Ve] = Je,
          hn = c.fetchers.get(Ve),
          Mr = {
            state: "loading",
            data: hn && hn.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        c.fetchers.set(Ve, Mr);
      }),
      R(
        Le(
          { navigation: ge, actionData: he || c.actionData || null },
          Ee.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      )),
      (M = ++x),
      Ee.forEach((Je) => {
        let [Ve] = Je;
        return y.set(Ve, w);
      });
    let {
      results: Ye,
      loaderResults: fn,
      fetcherResults: Ot,
    } = await Q(c.matches, X, _e, Ee, I);
    if (I.signal.aborted) return { shortCircuited: !0 };
    Ee.forEach((Je) => {
      let [Ve] = Je;
      return y.delete(Ve);
    });
    let dn = th(Ye);
    if (dn) return await Ne(c, dn, ae), { shortCircuited: !0 };
    let { loaderData: Rr, errors: On } = Jd(c, X, _e, fn, de, Ee, Ot, z);
    z.forEach((Je, Ve) => {
      Je.subscribe((hn) => {
        (hn || Je.done) && z.delete(Ve);
      });
    }),
      _i();
    let bn = jo(M);
    return Le(
      { loaderData: Rr, errors: On },
      bn || Ee.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function J(I) {
    return c.fetchers.get(I) || Cw;
  }
  function re(I, B, X, ne) {
    if (kw)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    y.has(I) && ft(I);
    let oe = sl(t, X, e.basename);
    if (!oe) {
      Se(I, B, lr(404, { pathname: X }));
      return;
    }
    let { path: ae, submission: he } = Gd(X, ne, !0),
      de = ih(oe, ae);
    if (he) {
      De(I, B, ae, de, oe, he);
      return;
    }
    L.set(I, [ae, de, oe]), me(I, B, ae, de, oe);
  }
  async function De(I, B, X, ne, oe, ae) {
    if ((te(), L.delete(I), !ne.route.action)) {
      let Ut = lr(405, { method: ae.formMethod, pathname: X, routeId: B });
      Se(I, B, Ut);
      return;
    }
    let he = c.fetchers.get(I),
      de = Le({ state: "submitting" }, ae, { data: he && he.data });
    c.fetchers.set(I, de), R({ fetchers: new Map(c.fetchers) });
    let ge = new AbortController(),
      _e = Di(X, ge.signal, ae);
    y.set(I, ge);
    let Ee = await Ai("action", _e, ne, oe, d.basename);
    if (_e.signal.aborted) {
      y.get(I) === ge && y.delete(I);
      return;
    }
    if (ti(Ee)) {
      y.delete(I), O.add(I);
      let Ut = Le({ state: "loading" }, ae, { data: void 0 });
      return (
        c.fetchers.set(I, Ut), R({ fetchers: new Map(c.fetchers) }), Ne(c, Ee)
      );
    }
    if (no(Ee)) {
      Se(I, B, Ee.error);
      return;
    }
    cr(Ee) && xe(!1, "defer() is not supported in actions");
    let Ye = c.navigation.location || c.location,
      fn = Di(Ye, ge.signal),
      Ot =
        c.navigation.state !== "idle"
          ? sl(t, c.navigation.location, e.basename)
          : c.matches;
    xe(Ot, "Didn't find any matches after fetcher action");
    let dn = ++x;
    E.set(I, dn);
    let Rr = Le({ state: "loading", data: Ee.data }, ae);
    c.fetchers.set(I, Rr);
    let [On, bn] = qd(
      c,
      Ot,
      ae,
      Ye,
      p,
      g,
      h,
      { [ne.route.id]: Ee.data },
      void 0,
      L
    );
    bn
      .filter((Ut) => {
        let [pn] = Ut;
        return pn !== I;
      })
      .forEach((Ut) => {
        let [pn] = Ut,
          Vo = c.fetchers.get(pn),
          eu = {
            state: "loading",
            data: Vo && Vo.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        c.fetchers.set(pn, eu), y.set(pn, ge);
      }),
      R({ fetchers: new Map(c.fetchers) });
    let {
      results: Je,
      loaderResults: Ve,
      fetcherResults: hn,
    } = await Q(c.matches, Ot, On, bn, fn);
    if (ge.signal.aborted) return;
    E.delete(I),
      y.delete(I),
      bn.forEach((Ut) => {
        let [pn] = Ut;
        return y.delete(pn);
      });
    let Mr = th(Je);
    if (Mr) return Ne(c, Mr);
    let { loaderData: jt, errors: Uo } = Jd(
        c,
        c.matches,
        On,
        Ve,
        void 0,
        bn,
        hn,
        z
      ),
      Ja = {
        state: "idle",
        data: Ee.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
    c.fetchers.set(I, Ja);
    let Bo = jo(dn);
    c.navigation.state === "loading" && dn > M
      ? (xe(m, "Expected pending action"),
        w && w.abort(),
        G(c.navigation.location, {
          matches: Ot,
          loaderData: jt,
          errors: Uo,
          fetchers: new Map(c.fetchers),
        }))
      : (R(
          Le(
            { errors: Uo, loaderData: Au(c.loaderData, jt, Ot) },
            Bo ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        (p = !1));
  }
  async function me(I, B, X, ne, oe) {
    let ae = c.fetchers.get(I),
      he = {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        data: ae && ae.data,
      };
    c.fetchers.set(I, he), R({ fetchers: new Map(c.fetchers) });
    let de = new AbortController(),
      ge = Di(X, de.signal);
    y.set(I, de);
    let _e = await Ai("loader", ge, ne, oe, d.basename);
    if (
      (cr(_e) && (_e = (await Mg(_e, ge.signal, !0)) || _e),
      y.get(I) === de && y.delete(I),
      ge.signal.aborted)
    )
      return;
    if (ti(_e)) {
      await Ne(c, _e);
      return;
    }
    if (no(_e)) {
      let Ye = Yr(c.matches, B);
      c.fetchers.delete(I),
        R({
          fetchers: new Map(c.fetchers),
          errors: { [Ye.route.id]: _e.error },
        });
      return;
    }
    xe(!cr(_e), "Unhandled fetcher deferred data");
    let Ee = {
      state: "idle",
      data: _e.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    };
    c.fetchers.set(I, Ee), R({ fetchers: new Map(c.fetchers) });
  }
  async function Ne(I, B, X) {
    B.revalidate && (p = !0);
    let ne = Eo(I.location, B.location);
    if (
      (xe(ne, "Expected a location on the redirect navigation"),
      B.external && typeof window < "u" && typeof window.location < "u")
    ) {
      X
        ? window.location.replace(B.location)
        : window.location.assign(B.location);
      return;
    }
    w = null;
    let oe = X === !0 ? Xe.Replace : Xe.Push,
      {
        formMethod: ae,
        formAction: he,
        formEncType: de,
        formData: ge,
      } = I.navigation;
    Ew.has(B.status) && ae && Rg(ae) && de && ge
      ? await A(oe, ne, {
          submission: {
            formMethod: ae,
            formAction: B.location,
            formEncType: de,
            formData: ge,
          },
        })
      : await A(oe, ne, {
          overrideNavigation: {
            state: "loading",
            location: ne,
            formMethod: ae || void 0,
            formAction: he || void 0,
            formEncType: de || void 0,
            formData: ge || void 0,
          },
        });
  }
  async function Q(I, B, X, ne, oe) {
    let ae = await Promise.all([
        ...X.map((ge) => Ai("loader", oe, ge, B, d.basename)),
        ...ne.map((ge) => {
          let [, _e, Ee, Ye] = ge;
          return Ai("loader", Di(_e, oe.signal), Ee, Ye, d.basename);
        }),
      ]),
      he = ae.slice(0, X.length),
      de = ae.slice(X.length);
    return (
      await Promise.all([
        nh(I, X, he, oe.signal, !1, c.loaderData),
        nh(
          I,
          ne.map((ge) => {
            let [, , _e] = ge;
            return _e;
          }),
          de,
          oe.signal,
          !0
        ),
      ]),
      { results: ae, loaderResults: he, fetcherResults: de }
    );
  }
  function te() {
    (p = !0),
      g.push(...xi()),
      L.forEach((I, B) => {
        y.has(B) && (h.push(B), ft(B));
      });
  }
  function Se(I, B, X) {
    let ne = Yr(c.matches, B);
    Ie(I), R({ errors: { [ne.route.id]: X }, fetchers: new Map(c.fetchers) });
  }
  function Ie(I) {
    y.has(I) && ft(I),
      L.delete(I),
      E.delete(I),
      O.delete(I),
      c.fetchers.delete(I);
  }
  function ft(I) {
    let B = y.get(I);
    xe(B, "Expected fetch controller: " + I), B.abort(), y.delete(I);
  }
  function ke(I) {
    for (let B of I) {
      let ne = {
        state: "idle",
        data: J(B).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
      c.fetchers.set(B, ne);
    }
  }
  function _i() {
    let I = [];
    for (let B of O) {
      let X = c.fetchers.get(B);
      xe(X, "Expected fetcher: " + B),
        X.state === "loading" && (O.delete(B), I.push(B));
    }
    ke(I);
  }
  function jo(I) {
    let B = [];
    for (let [X, ne] of E)
      if (ne < I) {
        let oe = c.fetchers.get(X);
        xe(oe, "Expected fetcher: " + X),
          oe.state === "loading" && (ft(X), E.delete(X), B.push(X));
      }
    return ke(B), B.length > 0;
  }
  function xi(I) {
    let B = [];
    return (
      z.forEach((X, ne) => {
        (!I || I(ne)) && (X.cancel(), B.push(ne), z.delete(ne));
      }),
      B
    );
  }
  function tn(I, B, X) {
    if (
      ((i = I), (l = B), (o = X || ((ne) => ne.key)), !a && c.navigation === bu)
    ) {
      a = !0;
      let ne = Si(c.location, c.matches);
      ne != null && R({ restoreScrollPosition: ne });
    }
    return () => {
      (i = null), (l = null), (o = null);
    };
  }
  function Za(I, B) {
    if (i && o && l) {
      let X = B.map((oe) => rh(oe, c.loaderData)),
        ne = o(I, X) || I.key;
      i[ne] = l();
    }
  }
  function Si(I, B) {
    if (i && o && l) {
      let X = B.map((ae) => rh(ae, c.loaderData)),
        ne = o(I, X) || I.key,
        oe = i[ne];
      if (typeof oe == "number") return oe;
    }
    return null;
  }
  return (
    (d = {
      get basename() {
        return e.basename;
      },
      get state() {
        return c;
      },
      get routes() {
        return t;
      },
      initialize: j,
      subscribe: ue,
      enableScrollRestoration: tn,
      navigate: b,
      fetch: re,
      revalidate: U,
      createHref: (I) => e.history.createHref(I),
      encodeLocation: (I) => e.history.encodeLocation(I),
      getFetcher: J,
      deleteFetcher: Ie,
      dispose: ie,
      _internalFetchControllers: y,
      _internalActiveDeferreds: z,
    }),
    d
  );
}
function Tw(e) {
  return e != null && "formData" in e;
}
function Gd(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == "string" ? e : qn(e);
  if (!t || !Tw(t)) return { path: r };
  if (t.formMethod && !Aw(t.formMethod))
    return { path: r, error: lr(405, { method: t.formMethod }) };
  if (t.formMethod && Rg(t.formMethod))
    return {
      path: r,
      submission: {
        formMethod: t.formMethod,
        formAction: Tg(r),
        formEncType:
          (t && t.formEncType) || "application/x-www-form-urlencoded",
        formData: t.formData,
      },
    };
  let i = Tr(r);
  try {
    let o = Pg(t.formData);
    n && i.search && Og(i.search) && o.append("index", ""),
      (i.search = "?" + o);
  } catch {
    return { path: r, error: lr(400) };
  }
  return { path: qn(i) };
}
function Rw(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function qd(e, t, n, r, i, o, l, a, u, s) {
  let f = u ? Object.values(u)[0] : a ? Object.values(a)[0] : null,
    d = u ? Object.keys(u)[0] : void 0,
    m = Rw(t, d).filter(
      (w, C) =>
        w.route.loader != null &&
        (Mw(e.loaderData, e.matches[C], w) ||
          o.some((p) => p === w.route.id) ||
          Zd(e.location, e.matches[C], n, r, w, i, f))
    ),
    S = [];
  return (
    s &&
      s.forEach((w, C) => {
        let [p, g, h] = w;
        l.includes(C)
          ? S.push([C, p, g, h])
          : i && Zd(p, g, n, p, g, i, f) && S.push([C, p, g, h]);
      }),
    [m, S]
  );
}
function Mw(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function kg(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Zd(e, t, n, r, i, o, l) {
  let a = mr(e),
    u = t.params,
    s = mr(r),
    f = i.params,
    d = kg(t, i) || a.toString() === s.toString() || a.search !== s.search || o;
  if (i.route.shouldRevalidate) {
    let c = i.route.shouldRevalidate(
      Le({ currentUrl: a, currentParams: u, nextUrl: s, nextParams: f }, n, {
        actionResult: l,
        defaultShouldRevalidate: d,
      })
    );
    if (typeof c == "boolean") return c;
  }
  return d;
}
async function Ai(e, t, n, r, i, o, l) {
  i === void 0 && (i = "/"), o === void 0 && (o = !1), l === void 0 && (l = !1);
  let a,
    u,
    s,
    f = new Promise((c, m) => (s = m)),
    d = () => s();
  t.signal.addEventListener("abort", d);
  try {
    let c = n.route[e];
    xe(
      c,
      "Could not find the " + e + ' to run on the "' + n.route.id + '" route'
    ),
      (u = await Promise.race([c({ request: t, params: n.params }), f])),
      xe(
        u !== void 0,
        "You defined " +
          (e === "action" ? "an action" : "a loader") +
          " for route " +
          ('"' +
            n.route.id +
            "\" but didn't return anything from your `" +
            e +
            "` ") +
          "function. Please return a value or `null`."
      );
  } catch (c) {
    (a = Ge.error), (u = c);
  } finally {
    t.signal.removeEventListener("abort", d);
  }
  if (u instanceof Response) {
    let c = u.status;
    if (Sw.has(c)) {
      let w = u.headers.get("Location");
      xe(
        w,
        "Redirects returned/thrown from loaders/actions must have a Location header"
      );
      let C = mr(w).origin !== mr("/").origin;
      if (!C) {
        let p = r.slice(0, r.indexOf(n) + 1),
          g = Cg(p).map((x) => x.pathnameBase),
          h = mr(t.url).pathname,
          y = fw(w, g, h);
        if ((xe(qn(y), "Unable to resolve redirect location: " + w), i)) {
          let x = y.pathname;
          y.pathname = x === "/" ? i : to([i, x]);
        }
        w = qn(y);
      }
      if (o) throw (u.headers.set("Location", w), u);
      return {
        type: Ge.redirect,
        status: c,
        location: w,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
        external: C,
      };
    }
    if (l) throw { type: a || Ge.data, response: u };
    let m,
      S = u.headers.get("Content-Type");
    return (
      S && S.startsWith("application/json")
        ? (m = await u.json())
        : (m = await u.text()),
      a === Ge.error
        ? { type: a, error: new $a(c, u.statusText, m), headers: u.headers }
        : { type: Ge.data, data: m, statusCode: u.status, headers: u.headers }
    );
  }
  return a === Ge.error
    ? { type: a, error: u }
    : u instanceof mw
    ? { type: Ge.deferred, deferredData: u }
    : { type: Ge.data, data: u };
}
function Di(e, t, n) {
  let r = mr(Tg(e)).toString(),
    i = { signal: t };
  if (n) {
    let { formMethod: o, formEncType: l, formData: a } = n;
    (i.method = o.toUpperCase()),
      (i.body = l === "application/x-www-form-urlencoded" ? Pg(a) : a);
  }
  return new Request(r, i);
}
function Pg(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    xe(
      typeof r == "string",
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      t.append(n, r);
  return t;
}
function Ow(e, t, n, r, i) {
  let o = {},
    l = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((f, d) => {
      let c = t[d].route.id;
      if (
        (xe(!ti(f), "Cannot handle redirect results in processLoaderData"),
        no(f))
      ) {
        let m = Yr(e, c),
          S = f.error;
        r && ((S = Object.values(r)[0]), (r = void 0)),
          (l = Object.assign(l || {}, { [m.route.id]: S })),
          u || ((u = !0), (a = yw(f.error) ? f.error.status : 500)),
          f.headers && (s[c] = f.headers);
      } else
        cr(f)
          ? (i && i.set(c, f.deferredData), (o[c] = f.deferredData.data))
          : ((o[c] = f.data),
            f.statusCode != null &&
              f.statusCode !== 200 &&
              !u &&
              (a = f.statusCode),
            f.headers && (s[c] = f.headers));
    }),
    r && (l = r),
    { loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: s }
  );
}
function Jd(e, t, n, r, i, o, l, a) {
  let { loaderData: u, errors: s } = Ow(t, n, r, i, a);
  for (let f = 0; f < o.length; f++) {
    let [d, , c] = o[f];
    xe(
      l !== void 0 && l[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let m = l[f];
    if (no(m)) {
      let S = Yr(e.matches, c.route.id);
      (s && s[S.route.id]) || (s = Le({}, s, { [S.route.id]: m.error })),
        e.fetchers.delete(d);
    } else {
      if (ti(m)) throw new Error("Unhandled fetcher revalidation redirect");
      if (cr(m)) throw new Error("Unhandled fetcher deferred data");
      {
        let S = {
          state: "idle",
          data: m.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        e.fetchers.set(d, S);
      }
    }
  }
  return { loaderData: u, errors: s };
}
function Au(e, t, n) {
  let r = Le({}, t);
  return (
    n.forEach((i) => {
      let o = i.route.id;
      t[o] === void 0 && e[o] !== void 0 && (r[o] = e[o]);
    }),
    r
  );
}
function Yr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function eh(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function lr(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      message: o,
    } = t === void 0 ? {} : t,
    l = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((l = "Bad Request"),
        i && n && r
          ? (a =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : (a = "Cannot submit binary form data using GET"))
      : e === 403
      ? ((l = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = "Method Not Allowed"),
        i && n && r
          ? (a =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new $a(e || 500, l, new Error(a), !0)
  );
}
function th(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ti(n)) return n;
  }
}
function Tg(e) {
  let t = typeof e == "string" ? Tr(e) : e;
  return qn(Le({}, t, { hash: "" }));
}
function bw(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function cr(e) {
  return e.type === Ge.deferred;
}
function no(e) {
  return e.type === Ge.error;
}
function ti(e) {
  return (e && e.type) === Ge.redirect;
}
function Aw(e) {
  return xw.has(e);
}
function Rg(e) {
  return ww.has(e);
}
async function nh(e, t, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      u = t[l],
      s = e.find((d) => d.route.id === u.route.id),
      f = s != null && !kg(s, u) && (o && o[u.route.id]) !== void 0;
    cr(a) &&
      (i || f) &&
      (await Mg(a, r, i).then((d) => {
        d && (n[l] = d || n[l]);
      }));
  }
}
async function Mg(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ge.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Ge.error, error: i };
      }
    return { type: Ge.data, data: e.deferredData.data };
  }
}
function Og(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function rh(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function ih(e, t) {
  let n = typeof t == "string" ? Tr(t).search : t.search;
  if (e[e.length - 1].route.index && Og(n || "")) return e[e.length - 1];
  let r = Cg(e);
  return r[r.length - 1];
}
var ja = { exports: {} },
  Ua = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dw = le.exports,
  Iw = Symbol.for("react.element"),
  zw = Symbol.for("react.fragment"),
  Lw = Object.prototype.hasOwnProperty,
  Fw = Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $w = { key: !0, ref: !0, __self: !0, __source: !0 };
function bg(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Lw.call(t, r) && !$w.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Iw,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Fw.current,
  };
}
Ua.Fragment = zw;
Ua.jsx = bg;
Ua.jsxs = bg;
(function (e) {
  e.exports = Ua;
})(ja);
const ni = ja.exports.Fragment,
  q = ja.exports.jsx,
  ce = ja.exports.jsxs;
/**
 * React Router v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bs() {
  return (
    (Bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bs.apply(this, arguments)
  );
}
function jw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Uw = typeof Object.is == "function" ? Object.is : jw,
  { useState: Bw, useEffect: Vw, useLayoutEffect: Ww, useDebugValue: Hw } = io;
function Yw(e, t, n) {
  const r = t(),
    [{ inst: i }, o] = Bw({ inst: { value: r, getSnapshot: t } });
  return (
    Ww(() => {
      (i.value = r), (i.getSnapshot = t), Du(i) && o({ inst: i });
    }, [e, r, t]),
    Vw(
      () => (
        Du(i) && o({ inst: i }),
        e(() => {
          Du(i) && o({ inst: i });
        })
      ),
      [e]
    ),
    Hw(r),
    r
  );
}
function Du(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Uw(n, r);
  } catch {
    return !0;
  }
}
function Qw(e, t, n) {
  return t();
}
const Kw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Xw = !Kw,
  Gw = Xw ? Qw : Yw;
"useSyncExternalStore" in io && ((e) => e.useSyncExternalStore)(io);
const qw = le.exports.createContext(null),
  Zw = le.exports.createContext({ outlet: null, matches: [] }),
  Jw = le.exports.createContext(null);
var oh;
(function (e) {
  e.UseRevalidator = "useRevalidator";
})(oh || (oh = {}));
var Vs;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Vs || (Vs = {}));
function e_(e) {
  let t = le.exports.useContext(qw);
  return t || xe(!1), t;
}
function t_() {
  var e;
  let t = le.exports.useContext(Jw),
    n = e_(Vs.UseRouteError),
    r = le.exports.useContext(Zw),
    i = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || xe(!1),
    i.route.id || xe(!1),
    (e = n.errors) == null ? void 0 : e[i.route.id])
  );
}
var lh;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(lh || (lh = {}));
new Promise(() => {});
function Ag(e) {
  return e.map((t) => {
    let n = Bs({}, t);
    return (
      n.hasErrorBoundary == null &&
        (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = Ag(n.children)),
      n
    );
  });
}
/**
 * React Router DOM v6.4.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ws() {
  return (
    (Ws = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ws.apply(this, arguments)
  );
}
function n_(e, t) {
  return Pw({
    basename: t == null ? void 0 : t.basename,
    history: W1({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || r_(),
    routes: Ag(e),
  }).initialize();
}
function r_() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Ws({}, t, { errors: i_(t.errors) })), t;
}
function i_(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    i && i.__type === "RouteErrorResponse"
      ? (n[r] = new $a(i.status, i.statusText, i.data, i.internal === !0))
      : (n[r] = i);
  return n;
}
var ah;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(ah || (ah = {}));
var uh;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(uh || (uh = {}));
function o_() {
  const e = t_();
  return ce("div", {
    className: "grid text-center align-item-center",
    children: [
      q("h1", { children: "Oops!" }),
      q("p", { children: q("i", { children: e.statusText || e.message }) }),
    ],
  });
}
function Dl(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
    ? -1
    : e > t
    ? 1
    : e >= t
    ? 0
    : NaN;
}
function l_(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
    ? -1
    : t > e
    ? 1
    : t >= e
    ? 0
    : NaN;
}
function Dg(e) {
  let t, n, r;
  e.length !== 2
    ? ((t = Dl), (n = (a, u) => Dl(e(a), u)), (r = (a, u) => e(a) - u))
    : ((t = e === Dl || e === l_ ? e : a_), (n = e), (r = e));
  function i(a, u, s = 0, f = a.length) {
    if (s < f) {
      if (t(u, u) !== 0) return f;
      do {
        const d = (s + f) >>> 1;
        n(a[d], u) < 0 ? (s = d + 1) : (f = d);
      } while (s < f);
    }
    return s;
  }
  function o(a, u, s = 0, f = a.length) {
    if (s < f) {
      if (t(u, u) !== 0) return f;
      do {
        const d = (s + f) >>> 1;
        n(a[d], u) <= 0 ? (s = d + 1) : (f = d);
      } while (s < f);
    }
    return s;
  }
  function l(a, u, s = 0, f = a.length) {
    const d = i(a, u, s, f - 1);
    return d > s && r(a[d - 1], u) > -r(a[d], u) ? d - 1 : d;
  }
  return { left: i, center: l, right: o };
}
function a_() {
  return 0;
}
function u_(e) {
  return e === null ? NaN : +e;
}
const s_ = Dg(Dl),
  c_ = s_.right;
Dg(u_).center;
const f_ = c_;
var Hs = Math.sqrt(50),
  Ys = Math.sqrt(10),
  Qs = Math.sqrt(2);
function d_(e, t, n) {
  var r,
    i = -1,
    o,
    l,
    a;
  if (((t = +t), (e = +e), (n = +n), e === t && n > 0)) return [e];
  if (
    ((r = t < e) && ((o = e), (e = t), (t = o)),
    (a = Ig(e, t, n)) === 0 || !isFinite(a))
  )
    return [];
  if (a > 0) {
    let u = Math.round(e / a),
      s = Math.round(t / a);
    for (
      u * a < e && ++u, s * a > t && --s, l = new Array((o = s - u + 1));
      ++i < o;

    )
      l[i] = (u + i) * a;
  } else {
    a = -a;
    let u = Math.round(e * a),
      s = Math.round(t * a);
    for (
      u / a < e && ++u, s / a > t && --s, l = new Array((o = s - u + 1));
      ++i < o;

    )
      l[i] = (u + i) / a;
  }
  return r && l.reverse(), l;
}
function Ig(e, t, n) {
  var r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log(r) / Math.LN10),
    o = r / Math.pow(10, i);
  return i >= 0
    ? (o >= Hs ? 10 : o >= Ys ? 5 : o >= Qs ? 2 : 1) * Math.pow(10, i)
    : -Math.pow(10, -i) / (o >= Hs ? 10 : o >= Ys ? 5 : o >= Qs ? 2 : 1);
}
function h_(e, t, n) {
  var r = Math.abs(t - e) / Math.max(0, n),
    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
    o = r / i;
  return (
    o >= Hs ? (i *= 10) : o >= Ys ? (i *= 5) : o >= Qs && (i *= 2),
    t < e ? -i : i
  );
}
function p_(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n < r || (n === void 0 && r >= r)) && (n = r);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n < i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
var m_ = { value: () => {} };
function zo() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Il(n);
}
function Il(e) {
  this._ = e;
}
function g_(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = "",
        i = n.indexOf(".");
      if (
        (i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))),
        n && !t.hasOwnProperty(n))
      )
        throw new Error("unknown type: " + n);
      return { type: n, name: r };
    });
}
Il.prototype = zo.prototype = {
  constructor: Il,
  on: function (e, t) {
    var n = this._,
      r = g_(e + "", n),
      i,
      o = -1,
      l = r.length;
    if (arguments.length < 2) {
      for (; ++o < l; )
        if ((i = (e = r[o]).type) && (i = v_(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++o < l; )
      if ((i = (e = r[o]).type)) n[i] = sh(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = sh(n[i], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Il(e);
  },
  call: function (e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], r = 0, i = o.length; r < i; ++r) o[r].value.apply(t, n);
  },
  apply: function (e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(t, n);
  },
};
function v_(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t) return i.value;
}
function sh(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      (e[r] = m_), (e = e.slice(0, r).concat(e.slice(r + 1)));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ks = "http://www.w3.org/1999/xhtml";
const ch = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ks,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function Ba(e) {
  var t = (e += ""),
    n = t.indexOf(":");
  return (
    n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)),
    ch.hasOwnProperty(t) ? { space: ch[t], local: e } : e
  );
}
function y_(e) {
  return function () {
    var t = this.ownerDocument,
      n = this.namespaceURI;
    return n === Ks && t.documentElement.namespaceURI === Ks
      ? t.createElement(e)
      : t.createElementNS(n, e);
  };
}
function w_(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function zg(e) {
  var t = Ba(e);
  return (t.local ? w_ : y_)(t);
}
function __() {}
function ff(e) {
  return e == null
    ? __
    : function () {
        return this.querySelector(e);
      };
}
function x_(e) {
  typeof e != "function" && (e = ff(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (
      var o = t[i], l = o.length, a = (r[i] = new Array(l)), u, s, f = 0;
      f < l;
      ++f
    )
      (u = o[f]) &&
        (s = e.call(u, u.__data__, f, o)) &&
        ("__data__" in u && (s.__data__ = u.__data__), (a[f] = s));
  return new at(r, this._parents);
}
function Lg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function S_() {
  return [];
}
function Fg(e) {
  return e == null
    ? S_
    : function () {
        return this.querySelectorAll(e);
      };
}
function E_(e) {
  return function () {
    return Lg(e.apply(this, arguments));
  };
}
function C_(e) {
  typeof e == "function" ? (e = E_(e)) : (e = Fg(e));
  for (var t = this._groups, n = t.length, r = [], i = [], o = 0; o < n; ++o)
    for (var l = t[o], a = l.length, u, s = 0; s < a; ++s)
      (u = l[s]) && (r.push(e.call(u, u.__data__, s, l)), i.push(u));
  return new at(r, i);
}
function $g(e) {
  return function () {
    return this.matches(e);
  };
}
function jg(e) {
  return function (t) {
    return t.matches(e);
  };
}
var N_ = Array.prototype.find;
function k_(e) {
  return function () {
    return N_.call(this.children, e);
  };
}
function P_() {
  return this.firstElementChild;
}
function T_(e) {
  return this.select(e == null ? P_ : k_(typeof e == "function" ? e : jg(e)));
}
var R_ = Array.prototype.filter;
function M_() {
  return Array.from(this.children);
}
function O_(e) {
  return function () {
    return R_.call(this.children, e);
  };
}
function b_(e) {
  return this.selectAll(
    e == null ? M_ : O_(typeof e == "function" ? e : jg(e))
  );
}
function A_(e) {
  typeof e != "function" && (e = $g(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], l = o.length, a = (r[i] = []), u, s = 0; s < l; ++s)
      (u = o[s]) && e.call(u, u.__data__, s, o) && a.push(u);
  return new at(r, this._parents);
}
function Ug(e) {
  return new Array(e.length);
}
function D_() {
  return new at(this._enter || this._groups.map(Ug), this._parents);
}
function ca(e, t) {
  (this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t);
}
ca.prototype = {
  constructor: ca,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function I_(e) {
  return function () {
    return e;
  };
}
function z_(e, t, n, r, i, o) {
  for (var l = 0, a, u = t.length, s = o.length; l < s; ++l)
    (a = t[l]) ? ((a.__data__ = o[l]), (r[l] = a)) : (n[l] = new ca(e, o[l]));
  for (; l < u; ++l) (a = t[l]) && (i[l] = a);
}
function L_(e, t, n, r, i, o, l) {
  var a,
    u,
    s = new Map(),
    f = t.length,
    d = o.length,
    c = new Array(f),
    m;
  for (a = 0; a < f; ++a)
    (u = t[a]) &&
      ((c[a] = m = l.call(u, u.__data__, a, t) + ""),
      s.has(m) ? (i[a] = u) : s.set(m, u));
  for (a = 0; a < d; ++a)
    (m = l.call(e, o[a], a, o) + ""),
      (u = s.get(m))
        ? ((r[a] = u), (u.__data__ = o[a]), s.delete(m))
        : (n[a] = new ca(e, o[a]));
  for (a = 0; a < f; ++a) (u = t[a]) && s.get(c[a]) === u && (i[a] = u);
}
function F_(e) {
  return e.__data__;
}
function $_(e, t) {
  if (!arguments.length) return Array.from(this, F_);
  var n = t ? L_ : z_,
    r = this._parents,
    i = this._groups;
  typeof e != "function" && (e = I_(e));
  for (
    var o = i.length,
      l = new Array(o),
      a = new Array(o),
      u = new Array(o),
      s = 0;
    s < o;
    ++s
  ) {
    var f = r[s],
      d = i[s],
      c = d.length,
      m = j_(e.call(f, f && f.__data__, s, r)),
      S = m.length,
      w = (a[s] = new Array(S)),
      C = (l[s] = new Array(S)),
      p = (u[s] = new Array(c));
    n(f, d, w, C, p, m, t);
    for (var g = 0, h = 0, y, x; g < S; ++g)
      if ((y = w[g])) {
        for (g >= h && (h = g + 1); !(x = C[h]) && ++h < S; );
        y._next = x || null;
      }
  }
  return (l = new at(l, r)), (l._enter = a), (l._exit = u), l;
}
function j_(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function U_() {
  return new at(this._exit || this._groups.map(Ug), this._parents);
}
function B_(e, t, n) {
  var r = this.enter(),
    i = this,
    o = this.exit();
  return (
    typeof e == "function"
      ? ((r = e(r)), r && (r = r.selection()))
      : (r = r.append(e + "")),
    t != null && ((i = t(i)), i && (i = i.selection())),
    n == null ? o.remove() : n(o),
    r && i ? r.merge(i).order() : i
  );
}
function V_(e) {
  for (
    var t = e.selection ? e.selection() : e,
      n = this._groups,
      r = t._groups,
      i = n.length,
      o = r.length,
      l = Math.min(i, o),
      a = new Array(i),
      u = 0;
    u < l;
    ++u
  )
    for (
      var s = n[u], f = r[u], d = s.length, c = (a[u] = new Array(d)), m, S = 0;
      S < d;
      ++S
    )
      (m = s[S] || f[S]) && (c[S] = m);
  for (; u < i; ++u) a[u] = n[u];
  return new at(a, this._parents);
}
function W_() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, o = r[i], l; --i >= 0; )
      (l = r[i]) &&
        (o &&
          l.compareDocumentPosition(o) ^ 4 &&
          o.parentNode.insertBefore(l, o),
        (o = l));
  return this;
}
function H_(e) {
  e || (e = Y_);
  function t(d, c) {
    return d && c ? e(d.__data__, c.__data__) : !d - !c;
  }
  for (
    var n = this._groups, r = n.length, i = new Array(r), o = 0;
    o < r;
    ++o
  ) {
    for (
      var l = n[o], a = l.length, u = (i[o] = new Array(a)), s, f = 0;
      f < a;
      ++f
    )
      (s = l[f]) && (u[f] = s);
    u.sort(t);
  }
  return new at(i, this._parents).order();
}
function Y_(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Q_() {
  var e = arguments[0];
  return (arguments[0] = this), e.apply(null, arguments), this;
}
function K_() {
  return Array.from(this);
}
function X_() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length; i < o; ++i) {
      var l = r[i];
      if (l) return l;
    }
  return null;
}
function G_() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function q_() {
  return !this.node();
}
function Z_(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], o = 0, l = i.length, a; o < l; ++o)
      (a = i[o]) && e.call(a, a.__data__, o, i);
  return this;
}
function J_(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function ex(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function tx(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function nx(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function rx(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function ix(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null
      ? this.removeAttributeNS(e.space, e.local)
      : this.setAttributeNS(e.space, e.local, n);
  };
}
function ox(e, t) {
  var n = Ba(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null
      ? n.local
        ? ex
        : J_
      : typeof t == "function"
      ? n.local
        ? ix
        : rx
      : n.local
      ? nx
      : tx)(n, t)
  );
}
function Bg(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function lx(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function ax(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function ux(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function sx(e, t, n) {
  return arguments.length > 1
    ? this.each(
        (t == null ? lx : typeof t == "function" ? ux : ax)(
          e,
          t,
          n == null ? "" : n
        )
      )
    : di(this.node(), e);
}
function di(e, t) {
  return (
    e.style.getPropertyValue(t) ||
    Bg(e).getComputedStyle(e, null).getPropertyValue(t)
  );
}
function cx(e) {
  return function () {
    delete this[e];
  };
}
function fx(e, t) {
  return function () {
    this[e] = t;
  };
}
function dx(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function hx(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? cx : typeof t == "function" ? dx : fx)(e, t))
    : this.node()[e];
}
function Vg(e) {
  return e.trim().split(/^|\s+/);
}
function df(e) {
  return e.classList || new Wg(e);
}
function Wg(e) {
  (this._node = e), (this._names = Vg(e.getAttribute("class") || ""));
}
Wg.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 &&
      (this._names.push(e),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 &&
      (this._names.splice(t, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function Hg(e, t) {
  for (var n = df(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function Yg(e, t) {
  for (var n = df(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function px(e) {
  return function () {
    Hg(this, e);
  };
}
function mx(e) {
  return function () {
    Yg(this, e);
  };
}
function gx(e, t) {
  return function () {
    (t.apply(this, arguments) ? Hg : Yg)(this, e);
  };
}
function vx(e, t) {
  var n = Vg(e + "");
  if (arguments.length < 2) {
    for (var r = df(this.node()), i = -1, o = n.length; ++i < o; )
      if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? gx : t ? px : mx)(n, t));
}
function yx() {
  this.textContent = "";
}
function wx(e) {
  return function () {
    this.textContent = e;
  };
}
function _x(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t == null ? "" : t;
  };
}
function xx(e) {
  return arguments.length
    ? this.each(e == null ? yx : (typeof e == "function" ? _x : wx)(e))
    : this.node().textContent;
}
function Sx() {
  this.innerHTML = "";
}
function Ex(e) {
  return function () {
    this.innerHTML = e;
  };
}
function Cx(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t == null ? "" : t;
  };
}
function Nx(e) {
  return arguments.length
    ? this.each(e == null ? Sx : (typeof e == "function" ? Cx : Ex)(e))
    : this.node().innerHTML;
}
function kx() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Px() {
  return this.each(kx);
}
function Tx() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Rx() {
  return this.each(Tx);
}
function Mx(e) {
  var t = typeof e == "function" ? e : zg(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ox() {
  return null;
}
function bx(e, t) {
  var n = typeof e == "function" ? e : zg(e),
    r = t == null ? Ox : typeof t == "function" ? t : ff(t);
  return this.select(function () {
    return this.insertBefore(
      n.apply(this, arguments),
      r.apply(this, arguments) || null
    );
  });
}
function Ax() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Dx() {
  return this.each(Ax);
}
function Ix() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function zx() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Lx(e) {
  return this.select(e ? zx : Ix);
}
function Fx(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function $x(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function jx(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var n = "",
        r = t.indexOf(".");
      return (
        r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
        { type: t, name: n }
      );
    });
}
function Ux(e) {
  return function () {
    var t = this.__on;
    if (!!t) {
      for (var n = 0, r = -1, i = t.length, o; n < i; ++n)
        (o = t[n]),
          (!e.type || o.type === e.type) && o.name === e.name
            ? this.removeEventListener(o.type, o.listener, o.options)
            : (t[++r] = o);
      ++r ? (t.length = r) : delete this.__on;
    }
  };
}
function Bx(e, t, n) {
  return function () {
    var r = this.__on,
      i,
      o = $x(t);
    if (r) {
      for (var l = 0, a = r.length; l < a; ++l)
        if ((i = r[l]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = o), (i.options = n)),
            (i.value = t);
          return;
        }
    }
    this.addEventListener(e.type, o, n),
      (i = { type: e.type, name: e.name, value: t, listener: o, options: n }),
      r ? r.push(i) : (this.__on = [i]);
  };
}
function Vx(e, t, n) {
  var r = jx(e + ""),
    i,
    o = r.length,
    l;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, s = a.length, f; u < s; ++u)
        for (i = 0, f = a[u]; i < o; ++i)
          if ((l = r[i]).type === f.type && l.name === f.name) return f.value;
    }
    return;
  }
  for (a = t ? Bx : Ux, i = 0; i < o; ++i) this.each(a(r[i], t, n));
  return this;
}
function Qg(e, t, n) {
  var r = Bg(e),
    i = r.CustomEvent;
  typeof i == "function"
    ? (i = new i(t, n))
    : ((i = r.document.createEvent("Event")),
      n
        ? (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
        : i.initEvent(t, !1, !1)),
    e.dispatchEvent(i);
}
function Wx(e, t) {
  return function () {
    return Qg(this, e, t);
  };
}
function Hx(e, t) {
  return function () {
    return Qg(this, e, t.apply(this, arguments));
  };
}
function Yx(e, t) {
  return this.each((typeof t == "function" ? Hx : Wx)(e, t));
}
function* Qx() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length, l; i < o; ++i)
      (l = r[i]) && (yield l);
}
var hf = [null];
function at(e, t) {
  (this._groups = e), (this._parents = t);
}
function Lo() {
  return new at([[document.documentElement]], hf);
}
function Kx() {
  return this;
}
at.prototype = Lo.prototype = {
  constructor: at,
  select: x_,
  selectAll: C_,
  selectChild: T_,
  selectChildren: b_,
  filter: A_,
  data: $_,
  enter: D_,
  exit: U_,
  join: B_,
  merge: V_,
  selection: Kx,
  order: W_,
  sort: H_,
  call: Q_,
  nodes: K_,
  node: X_,
  size: G_,
  empty: q_,
  each: Z_,
  attr: ox,
  style: sx,
  property: hx,
  classed: vx,
  text: xx,
  html: Nx,
  raise: Px,
  lower: Rx,
  append: Mx,
  insert: bx,
  remove: Dx,
  clone: Lx,
  datum: Fx,
  on: Vx,
  dispatch: Yx,
  [Symbol.iterator]: Qx,
};
function xt(e) {
  return typeof e == "string"
    ? new at([[document.querySelector(e)]], [document.documentElement])
    : new at([[e]], hf);
}
function Xx(e) {
  let t;
  for (; (t = e.sourceEvent); ) e = t;
  return e;
}
function yn(e, t) {
  if (((e = Xx(e)), t === void 0 && (t = e.currentTarget), t)) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return (
        (r.x = e.clientX),
        (r.y = e.clientY),
        (r = r.matrixTransform(t.getScreenCTM().inverse())),
        [r.x, r.y]
      );
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [
        e.clientX - i.left - t.clientLeft,
        e.clientY - i.top - t.clientTop,
      ];
    }
  }
  return [e.pageX, e.pageY];
}
function Ar(e) {
  return typeof e == "string"
    ? new at([document.querySelectorAll(e)], [document.documentElement])
    : new at([Lg(e)], hf);
}
const Gx = { passive: !1 },
  Co = { capture: !0, passive: !1 };
function Iu(e) {
  e.stopImmediatePropagation();
}
function ri(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Kg(e) {
  var t = e.document.documentElement,
    n = xt(e).on("dragstart.drag", ri, Co);
  "onselectstart" in t
    ? n.on("selectstart.drag", ri, Co)
    : ((t.__noselect = t.style.MozUserSelect),
      (t.style.MozUserSelect = "none"));
}
function Xg(e, t) {
  var n = e.document.documentElement,
    r = xt(e).on("dragstart.drag", null);
  t &&
    (r.on("click.drag", ri, Co),
    setTimeout(function () {
      r.on("click.drag", null);
    }, 0)),
    "onselectstart" in n
      ? r.on("selectstart.drag", null)
      : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
}
const cl = (e) => () => e;
function Xs(
  e,
  {
    sourceEvent: t,
    subject: n,
    target: r,
    identifier: i,
    active: o,
    x: l,
    y: a,
    dx: u,
    dy: s,
    dispatch: f,
  }
) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: l, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: s, enumerable: !0, configurable: !0 },
    _: { value: f },
  });
}
Xs.prototype.on = function () {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function qx(e) {
  return !e.ctrlKey && !e.button;
}
function Zx() {
  return this.parentNode;
}
function Jx(e, t) {
  return t == null ? { x: e.x, y: e.y } : t;
}
function eS() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function tS() {
  var e = qx,
    t = Zx,
    n = Jx,
    r = eS,
    i = {},
    o = zo("start", "drag", "end"),
    l = 0,
    a,
    u,
    s,
    f,
    d = 0;
  function c(y) {
    y.on("mousedown.drag", m)
      .filter(r)
      .on("touchstart.drag", C)
      .on("touchmove.drag", p, Gx)
      .on("touchend.drag touchcancel.drag", g)
      .style("touch-action", "none")
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function m(y, x) {
    if (!(f || !e.call(this, y, x))) {
      var M = h(this, t.call(this, y, x), y, x, "mouse");
      !M ||
        (xt(y.view).on("mousemove.drag", S, Co).on("mouseup.drag", w, Co),
        Kg(y.view),
        Iu(y),
        (s = !1),
        (a = y.clientX),
        (u = y.clientY),
        M("start", y));
    }
  }
  function S(y) {
    if ((ri(y), !s)) {
      var x = y.clientX - a,
        M = y.clientY - u;
      s = x * x + M * M > d;
    }
    i.mouse("drag", y);
  }
  function w(y) {
    xt(y.view).on("mousemove.drag mouseup.drag", null),
      Xg(y.view, s),
      ri(y),
      i.mouse("end", y);
  }
  function C(y, x) {
    if (!!e.call(this, y, x)) {
      var M = y.changedTouches,
        E = t.call(this, y, x),
        O = M.length,
        L,
        z;
      for (L = 0; L < O; ++L)
        (z = h(this, E, y, x, M[L].identifier, M[L])) &&
          (Iu(y), z("start", y, M[L]));
    }
  }
  function p(y) {
    var x = y.changedTouches,
      M = x.length,
      E,
      O;
    for (E = 0; E < M; ++E)
      (O = i[x[E].identifier]) && (ri(y), O("drag", y, x[E]));
  }
  function g(y) {
    var x = y.changedTouches,
      M = x.length,
      E,
      O;
    for (
      f && clearTimeout(f),
        f = setTimeout(function () {
          f = null;
        }, 500),
        E = 0;
      E < M;
      ++E
    )
      (O = i[x[E].identifier]) && (Iu(y), O("end", y, x[E]));
  }
  function h(y, x, M, E, O, L) {
    var z = o.copy(),
      j = yn(L || M, x),
      ie,
      ue,
      R;
    if (
      (R = n.call(
        y,
        new Xs("beforestart", {
          sourceEvent: M,
          target: c,
          identifier: O,
          active: l,
          x: j[0],
          y: j[1],
          dx: 0,
          dy: 0,
          dispatch: z,
        }),
        E
      )) != null
    )
      return (
        (ie = R.x - j[0] || 0),
        (ue = R.y - j[1] || 0),
        function G(b, U, A) {
          var F = j,
            Y;
          switch (b) {
            case "start":
              (i[O] = G), (Y = l++);
              break;
            case "end":
              delete i[O], --l;
            case "drag":
              (j = yn(A || U, x)), (Y = l);
              break;
          }
          z.call(
            b,
            y,
            new Xs(b, {
              sourceEvent: U,
              subject: R,
              target: c,
              identifier: O,
              active: Y,
              x: j[0] + ie,
              y: j[1] + ue,
              dx: j[0] - F[0],
              dy: j[1] - F[1],
              dispatch: z,
            }),
            E
          );
        }
      );
  }
  return (
    (c.filter = function (y) {
      return arguments.length
        ? ((e = typeof y == "function" ? y : cl(!!y)), c)
        : e;
    }),
    (c.container = function (y) {
      return arguments.length
        ? ((t = typeof y == "function" ? y : cl(y)), c)
        : t;
    }),
    (c.subject = function (y) {
      return arguments.length
        ? ((n = typeof y == "function" ? y : cl(y)), c)
        : n;
    }),
    (c.touchable = function (y) {
      return arguments.length
        ? ((r = typeof y == "function" ? y : cl(!!y)), c)
        : r;
    }),
    (c.on = function () {
      var y = o.on.apply(o, arguments);
      return y === o ? c : y;
    }),
    (c.clickDistance = function (y) {
      return arguments.length ? ((d = (y = +y) * y), c) : Math.sqrt(d);
    }),
    c
  );
}
function pf(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function Gg(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Fo() {}
var No = 0.7,
  fa = 1 / No,
  ii = "\\s*([+-]?\\d+)\\s*",
  ko = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  sn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  nS = /^#([0-9a-f]{3,8})$/,
  rS = new RegExp(`^rgb\\(${ii},${ii},${ii}\\)$`),
  iS = new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`),
  oS = new RegExp(`^rgba\\(${ii},${ii},${ii},${ko}\\)$`),
  lS = new RegExp(`^rgba\\(${sn},${sn},${sn},${ko}\\)$`),
  aS = new RegExp(`^hsl\\(${ko},${sn},${sn}\\)$`),
  uS = new RegExp(`^hsla\\(${ko},${sn},${sn},${ko}\\)$`),
  fh = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
pf(Fo, Sr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: dh,
  formatHex: dh,
  formatHex8: sS,
  formatHsl: cS,
  formatRgb: hh,
  toString: hh,
});
function dh() {
  return this.rgb().formatHex();
}
function sS() {
  return this.rgb().formatHex8();
}
function cS() {
  return qg(this).formatHsl();
}
function hh() {
  return this.rgb().formatRgb();
}
function Sr(e) {
  var t, n;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = nS.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? ph(t)
          : n === 3
          ? new pt(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : n === 8
          ? fl(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : n === 4
          ? fl(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = rS.exec(e))
      ? new pt(t[1], t[2], t[3], 1)
      : (t = iS.exec(e))
      ? new pt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = oS.exec(e))
      ? fl(t[1], t[2], t[3], t[4])
      : (t = lS.exec(e))
      ? fl((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = aS.exec(e))
      ? vh(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = uS.exec(e))
      ? vh(t[1], t[2] / 100, t[3] / 100, t[4])
      : fh.hasOwnProperty(e)
      ? ph(fh[e])
      : e === "transparent"
      ? new pt(NaN, NaN, NaN, 0)
      : null
  );
}
function ph(e) {
  return new pt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function fl(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new pt(e, t, n, r);
}
function fS(e) {
  return (
    e instanceof Fo || (e = Sr(e)),
    e ? ((e = e.rgb()), new pt(e.r, e.g, e.b, e.opacity)) : new pt()
  );
}
function Gs(e, t, n, r) {
  return arguments.length === 1 ? fS(e) : new pt(e, t, n, r == null ? 1 : r);
}
function pt(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
pf(
  pt,
  Gs,
  Gg(Fo, {
    brighter(e) {
      return (
        (e = e == null ? fa : Math.pow(fa, e)),
        new pt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? No : Math.pow(No, e)),
        new pt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new pt(gr(this.r), gr(this.g), gr(this.b), da(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: mh,
    formatHex: mh,
    formatHex8: dS,
    formatRgb: gh,
    toString: gh,
  })
);
function mh() {
  return `#${fr(this.r)}${fr(this.g)}${fr(this.b)}`;
}
function dS() {
  return `#${fr(this.r)}${fr(this.g)}${fr(this.b)}${fr(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function gh() {
  const e = da(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${gr(this.r)}, ${gr(this.g)}, ${gr(
    this.b
  )}${e === 1 ? ")" : `, ${e})`}`;
}
function da(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function gr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function fr(e) {
  return (e = gr(e)), (e < 16 ? "0" : "") + e.toString(16);
}
function vh(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new Xt(e, t, n, r)
  );
}
function qg(e) {
  if (e instanceof Xt) return new Xt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Fo || (e = Sr(e)), !e)) return new Xt();
  if (e instanceof Xt) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    o = Math.max(t, n, r),
    l = NaN,
    a = o - i,
    u = (o + i) / 2;
  return (
    a
      ? (t === o
          ? (l = (n - r) / a + (n < r) * 6)
          : n === o
          ? (l = (r - t) / a + 2)
          : (l = (t - n) / a + 4),
        (a /= u < 0.5 ? o + i : 2 - o - i),
        (l *= 60))
      : (a = u > 0 && u < 1 ? 0 : l),
    new Xt(l, a, u, e.opacity)
  );
}
function hS(e, t, n, r) {
  return arguments.length === 1 ? qg(e) : new Xt(e, t, n, r == null ? 1 : r);
}
function Xt(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
pf(
  Xt,
  hS,
  Gg(Fo, {
    brighter(e) {
      return (
        (e = e == null ? fa : Math.pow(fa, e)),
        new Xt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? No : Math.pow(No, e)),
        new Xt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new pt(
        zu(e >= 240 ? e - 240 : e + 120, i, r),
        zu(e, i, r),
        zu(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity
      );
    },
    clamp() {
      return new Xt(yh(this.h), dl(this.s), dl(this.l), da(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = da(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${yh(this.h)}, ${
        dl(this.s) * 100
      }%, ${dl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  })
);
function yh(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function dl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function zu(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
      ? n
      : e < 240
      ? t + ((n - t) * (240 - e)) / 60
      : t) * 255
  );
}
const mf = (e) => () => e;
function pS(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function mS(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function gS(e) {
  return (e = +e) == 1
    ? Zg
    : function (t, n) {
        return n - t ? mS(t, n, e) : mf(isNaN(t) ? n : t);
      };
}
function Zg(e, t) {
  var n = t - e;
  return n ? pS(e, n) : mf(isNaN(e) ? t : e);
}
const ha = (function e(t) {
  var n = gS(t);
  function r(i, o) {
    var l = n((i = Gs(i)).r, (o = Gs(o)).r),
      a = n(i.g, o.g),
      u = n(i.b, o.b),
      s = Zg(i.opacity, o.opacity);
    return function (f) {
      return (
        (i.r = l(f)), (i.g = a(f)), (i.b = u(f)), (i.opacity = s(f)), i + ""
      );
    };
  }
  return (r.gamma = e), r;
})(1);
function vS(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (o) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - o) + t[i] * o;
    return r;
  };
}
function yS(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function wS(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = new Array(r),
    o = new Array(n),
    l;
  for (l = 0; l < r; ++l) i[l] = gf(e[l], t[l]);
  for (; l < n; ++l) o[l] = t[l];
  return function (a) {
    for (l = 0; l < r; ++l) o[l] = i[l](a);
    return o;
  };
}
function _S(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return n.setTime(e * (1 - r) + t * r), n;
    }
  );
}
function Kt(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function xS(e, t) {
  var n = {},
    r = {},
    i;
  (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e ? (n[i] = gf(e[i], t[i])) : (r[i] = t[i]);
  return function (o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var qs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Lu = new RegExp(qs.source, "g");
function SS(e) {
  return function () {
    return e;
  };
}
function ES(e) {
  return function (t) {
    return e(t) + "";
  };
}
function Jg(e, t) {
  var n = (qs.lastIndex = Lu.lastIndex = 0),
    r,
    i,
    o,
    l = -1,
    a = [],
    u = [];
  for (e = e + "", t = t + ""; (r = qs.exec(e)) && (i = Lu.exec(t)); )
    (o = i.index) > n &&
      ((o = t.slice(n, o)), a[l] ? (a[l] += o) : (a[++l] = o)),
      (r = r[0]) === (i = i[0])
        ? a[l]
          ? (a[l] += i)
          : (a[++l] = i)
        : ((a[++l] = null), u.push({ i: l, x: Kt(r, i) })),
      (n = Lu.lastIndex);
  return (
    n < t.length && ((o = t.slice(n)), a[l] ? (a[l] += o) : (a[++l] = o)),
    a.length < 2
      ? u[0]
        ? ES(u[0].x)
        : SS(t)
      : ((t = u.length),
        function (s) {
          for (var f = 0, d; f < t; ++f) a[(d = u[f]).i] = d.x(s);
          return a.join("");
        })
  );
}
function gf(e, t) {
  var n = typeof t,
    r;
  return t == null || n === "boolean"
    ? mf(t)
    : (n === "number"
        ? Kt
        : n === "string"
        ? (r = Sr(t))
          ? ((t = r), ha)
          : Jg
        : t instanceof Sr
        ? ha
        : t instanceof Date
        ? _S
        : yS(t)
        ? vS
        : Array.isArray(t)
        ? wS
        : (typeof t.valueOf != "function" && typeof t.toString != "function") ||
          isNaN(t)
        ? xS
        : Kt)(e, t);
}
function CS(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
var wh = 180 / Math.PI,
  Zs = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function e0(e, t, n, r, i, o) {
  var l, a, u;
  return (
    (l = Math.sqrt(e * e + t * t)) && ((e /= l), (t /= l)),
    (u = e * n + t * r) && ((n -= e * u), (r -= t * u)),
    (a = Math.sqrt(n * n + r * r)) && ((n /= a), (r /= a), (u /= a)),
    e * r < t * n && ((e = -e), (t = -t), (u = -u), (l = -l)),
    {
      translateX: i,
      translateY: o,
      rotate: Math.atan2(t, e) * wh,
      skewX: Math.atan(u) * wh,
      scaleX: l,
      scaleY: a,
    }
  );
}
var hl;
function NS(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    e + ""
  );
  return t.isIdentity ? Zs : e0(t.a, t.b, t.c, t.d, t.e, t.f);
}
function kS(e) {
  return e == null ||
    (hl || (hl = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    hl.setAttribute("transform", e),
    !(e = hl.transform.baseVal.consolidate()))
    ? Zs
    : ((e = e.matrix), e0(e.a, e.b, e.c, e.d, e.e, e.f));
}
function t0(e, t, n, r) {
  function i(s) {
    return s.length ? s.pop() + " " : "";
  }
  function o(s, f, d, c, m, S) {
    if (s !== d || f !== c) {
      var w = m.push("translate(", null, t, null, n);
      S.push({ i: w - 4, x: Kt(s, d) }, { i: w - 2, x: Kt(f, c) });
    } else (d || c) && m.push("translate(" + d + t + c + n);
  }
  function l(s, f, d, c) {
    s !== f
      ? (s - f > 180 ? (f += 360) : f - s > 180 && (s += 360),
        c.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: Kt(s, f) }))
      : f && d.push(i(d) + "rotate(" + f + r);
  }
  function a(s, f, d, c) {
    s !== f
      ? c.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: Kt(s, f) })
      : f && d.push(i(d) + "skewX(" + f + r);
  }
  function u(s, f, d, c, m, S) {
    if (s !== d || f !== c) {
      var w = m.push(i(m) + "scale(", null, ",", null, ")");
      S.push({ i: w - 4, x: Kt(s, d) }, { i: w - 2, x: Kt(f, c) });
    } else (d !== 1 || c !== 1) && m.push(i(m) + "scale(" + d + "," + c + ")");
  }
  return function (s, f) {
    var d = [],
      c = [];
    return (
      (s = e(s)),
      (f = e(f)),
      o(s.translateX, s.translateY, f.translateX, f.translateY, d, c),
      l(s.rotate, f.rotate, d, c),
      a(s.skewX, f.skewX, d, c),
      u(s.scaleX, s.scaleY, f.scaleX, f.scaleY, d, c),
      (s = f = null),
      function (m) {
        for (var S = -1, w = c.length, C; ++S < w; ) d[(C = c[S]).i] = C.x(m);
        return d.join("");
      }
    );
  };
}
var PS = t0(NS, "px, ", "px)", "deg)"),
  TS = t0(kS, ", ", ")", ")"),
  RS = 1e-12;
function _h(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function MS(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function OS(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const bS = (function e(t, n, r) {
  function i(o, l) {
    var a = o[0],
      u = o[1],
      s = o[2],
      f = l[0],
      d = l[1],
      c = l[2],
      m = f - a,
      S = d - u,
      w = m * m + S * S,
      C,
      p;
    if (w < RS)
      (p = Math.log(c / s) / t),
        (C = function (E) {
          return [a + E * m, u + E * S, s * Math.exp(t * E * p)];
        });
    else {
      var g = Math.sqrt(w),
        h = (c * c - s * s + r * w) / (2 * s * n * g),
        y = (c * c - s * s - r * w) / (2 * c * n * g),
        x = Math.log(Math.sqrt(h * h + 1) - h),
        M = Math.log(Math.sqrt(y * y + 1) - y);
      (p = (M - x) / t),
        (C = function (E) {
          var O = E * p,
            L = _h(x),
            z = (s / (n * g)) * (L * OS(t * O + x) - MS(x));
          return [a + z * m, u + z * S, (s * L) / _h(t * O + x)];
        });
    }
    return (C.duration = (p * 1e3 * t) / Math.SQRT2), C;
  }
  return (
    (i.rho = function (o) {
      var l = Math.max(0.001, +o),
        a = l * l,
        u = a * a;
      return e(l, a, u);
    }),
    i
  );
})(Math.SQRT2, 2, 4);
var hi = 0,
  Vi = 0,
  Ii = 0,
  n0 = 1e3,
  pa,
  Wi,
  ma = 0,
  Er = 0,
  Va = 0,
  Po = typeof performance == "object" && performance.now ? performance : Date,
  r0 =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function vf() {
  return Er || (r0(AS), (Er = Po.now() + Va));
}
function AS() {
  Er = 0;
}
function ga() {
  this._call = this._time = this._next = null;
}
ga.prototype = yf.prototype = {
  constructor: ga,
  restart: function (e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    (n = (n == null ? vf() : +n) + (t == null ? 0 : +t)),
      !this._next &&
        Wi !== this &&
        (Wi ? (Wi._next = this) : (pa = this), (Wi = this)),
      (this._call = e),
      (this._time = n),
      Js();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Js());
  },
};
function yf(e, t, n) {
  var r = new ga();
  return r.restart(e, t, n), r;
}
function DS() {
  vf(), ++hi;
  for (var e = pa, t; e; )
    (t = Er - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
  --hi;
}
function xh() {
  (Er = (ma = Po.now()) + Va), (hi = Vi = 0);
  try {
    DS();
  } finally {
    (hi = 0), zS(), (Er = 0);
  }
}
function IS() {
  var e = Po.now(),
    t = e - ma;
  t > n0 && ((Va -= t), (ma = e));
}
function zS() {
  for (var e, t = pa, n, r = 1 / 0; t; )
    t._call
      ? (r > t._time && (r = t._time), (e = t), (t = t._next))
      : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (pa = n)));
  (Wi = e), Js(r);
}
function Js(e) {
  if (!hi) {
    Vi && (Vi = clearTimeout(Vi));
    var t = e - Er;
    t > 24
      ? (e < 1 / 0 && (Vi = setTimeout(xh, e - Po.now() - Va)),
        Ii && (Ii = clearInterval(Ii)))
      : (Ii || ((ma = Po.now()), (Ii = setInterval(IS, n0))), (hi = 1), r0(xh));
  }
}
function Sh(e, t, n) {
  var r = new ga();
  return (
    (t = t == null ? 0 : +t),
    r.restart(
      (i) => {
        r.stop(), e(i + t);
      },
      t,
      n
    ),
    r
  );
}
var LS = zo("start", "end", "cancel", "interrupt"),
  FS = [],
  i0 = 0,
  Eh = 1,
  ec = 2,
  zl = 3,
  Ch = 4,
  tc = 5,
  Ll = 6;
function Wa(e, t, n, r, i, o) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  $S(e, n, {
    name: t,
    index: r,
    group: i,
    on: LS,
    tween: FS,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: i0,
  });
}
function wf(e, t) {
  var n = en(e, t);
  if (n.state > i0) throw new Error("too late; already scheduled");
  return n;
}
function cn(e, t) {
  var n = en(e, t);
  if (n.state > zl) throw new Error("too late; already running");
  return n;
}
function en(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function $S(e, t, n) {
  var r = e.__transition,
    i;
  (r[t] = n), (n.timer = yf(o, 0, n.time));
  function o(s) {
    (n.state = Eh),
      n.timer.restart(l, n.delay, n.time),
      n.delay <= s && l(s - n.delay);
  }
  function l(s) {
    var f, d, c, m;
    if (n.state !== Eh) return u();
    for (f in r)
      if (((m = r[f]), m.name === n.name)) {
        if (m.state === zl) return Sh(l);
        m.state === Ch
          ? ((m.state = Ll),
            m.timer.stop(),
            m.on.call("interrupt", e, e.__data__, m.index, m.group),
            delete r[f])
          : +f < t &&
            ((m.state = Ll),
            m.timer.stop(),
            m.on.call("cancel", e, e.__data__, m.index, m.group),
            delete r[f]);
      }
    if (
      (Sh(function () {
        n.state === zl &&
          ((n.state = Ch), n.timer.restart(a, n.delay, n.time), a(s));
      }),
      (n.state = ec),
      n.on.call("start", e, e.__data__, n.index, n.group),
      n.state === ec)
    ) {
      for (
        n.state = zl, i = new Array((c = n.tween.length)), f = 0, d = -1;
        f < c;
        ++f
      )
        (m = n.tween[f].value.call(e, e.__data__, n.index, n.group)) &&
          (i[++d] = m);
      i.length = d + 1;
    }
  }
  function a(s) {
    for (
      var f =
          s < n.duration
            ? n.ease.call(null, s / n.duration)
            : (n.timer.restart(u), (n.state = tc), 1),
        d = -1,
        c = i.length;
      ++d < c;

    )
      i[d].call(e, f);
    n.state === tc && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    (n.state = Ll), n.timer.stop(), delete r[t];
    for (var s in r) return;
    delete e.__transition;
  }
}
function Fl(e, t) {
  var n = e.__transition,
    r,
    i,
    o = !0,
    l;
  if (!!n) {
    t = t == null ? null : t + "";
    for (l in n) {
      if ((r = n[l]).name !== t) {
        o = !1;
        continue;
      }
      (i = r.state > ec && r.state < tc),
        (r.state = Ll),
        r.timer.stop(),
        r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group),
        delete n[l];
    }
    o && delete e.__transition;
  }
}
function jS(e) {
  return this.each(function () {
    Fl(this, e);
  });
}
function US(e, t) {
  var n, r;
  return function () {
    var i = cn(this, e),
      o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var l = 0, a = r.length; l < a; ++l)
        if (r[l].name === t) {
          (r = r.slice()), r.splice(l, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function BS(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function () {
    var o = cn(this, e),
      l = o.tween;
    if (l !== r) {
      i = (r = l).slice();
      for (var a = { name: t, value: n }, u = 0, s = i.length; u < s; ++u)
        if (i[u].name === t) {
          i[u] = a;
          break;
        }
      u === s && i.push(a);
    }
    o.tween = i;
  };
}
function VS(e, t) {
  var n = this._id;
  if (((e += ""), arguments.length < 2)) {
    for (var r = en(this.node(), n).tween, i = 0, o = r.length, l; i < o; ++i)
      if ((l = r[i]).name === e) return l.value;
    return null;
  }
  return this.each((t == null ? US : BS)(n, e, t));
}
function _f(e, t, n) {
  var r = e._id;
  return (
    e.each(function () {
      var i = cn(this, r);
      (i.value || (i.value = {}))[t] = n.apply(this, arguments);
    }),
    function (i) {
      return en(i, r).value[t];
    }
  );
}
function o0(e, t) {
  var n;
  return (
    typeof t == "number"
      ? Kt
      : t instanceof Sr
      ? ha
      : (n = Sr(t))
      ? ((t = n), ha)
      : Jg
  )(e, t);
}
function WS(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function HS(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function YS(e, t, n) {
  var r,
    i = n + "",
    o;
  return function () {
    var l = this.getAttribute(e);
    return l === i ? null : l === r ? o : (o = t((r = l), n));
  };
}
function QS(e, t, n) {
  var r,
    i = n + "",
    o;
  return function () {
    var l = this.getAttributeNS(e.space, e.local);
    return l === i ? null : l === r ? o : (o = t((r = l), n));
  };
}
function KS(e, t, n) {
  var r, i, o;
  return function () {
    var l,
      a = n(this),
      u;
    return a == null
      ? void this.removeAttribute(e)
      : ((l = this.getAttribute(e)),
        (u = a + ""),
        l === u
          ? null
          : l === r && u === i
          ? o
          : ((i = u), (o = t((r = l), a))));
  };
}
function XS(e, t, n) {
  var r, i, o;
  return function () {
    var l,
      a = n(this),
      u;
    return a == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((l = this.getAttributeNS(e.space, e.local)),
        (u = a + ""),
        l === u
          ? null
          : l === r && u === i
          ? o
          : ((i = u), (o = t((r = l), a))));
  };
}
function GS(e, t) {
  var n = Ba(e),
    r = n === "transform" ? TS : o0;
  return this.attrTween(
    e,
    typeof t == "function"
      ? (n.local ? XS : KS)(n, r, _f(this, "attr." + e, t))
      : t == null
      ? (n.local ? HS : WS)(n)
      : (n.local ? QS : YS)(n, r, t)
  );
}
function qS(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function ZS(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function JS(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && ZS(e, o)), n;
  }
  return (i._value = t), i;
}
function eE(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && qS(e, o)), n;
  }
  return (i._value = t), i;
}
function tE(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ba(e);
  return this.tween(n, (r.local ? JS : eE)(r, t));
}
function nE(e, t) {
  return function () {
    wf(this, e).delay = +t.apply(this, arguments);
  };
}
function rE(e, t) {
  return (
    (t = +t),
    function () {
      wf(this, e).delay = t;
    }
  );
}
function iE(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? nE : rE)(t, e))
    : en(this.node(), t).delay;
}
function oE(e, t) {
  return function () {
    cn(this, e).duration = +t.apply(this, arguments);
  };
}
function lE(e, t) {
  return (
    (t = +t),
    function () {
      cn(this, e).duration = t;
    }
  );
}
function aE(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? oE : lE)(t, e))
    : en(this.node(), t).duration;
}
function uE(e, t) {
  if (typeof t != "function") throw new Error();
  return function () {
    cn(this, e).ease = t;
  };
}
function sE(e) {
  var t = this._id;
  return arguments.length ? this.each(uE(t, e)) : en(this.node(), t).ease;
}
function cE(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    cn(this, e).ease = n;
  };
}
function fE(e) {
  if (typeof e != "function") throw new Error();
  return this.each(cE(this._id, e));
}
function dE(e) {
  typeof e != "function" && (e = $g(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], l = o.length, a = (r[i] = []), u, s = 0; s < l; ++s)
      (u = o[s]) && e.call(u, u.__data__, s, o) && a.push(u);
  return new Tn(r, this._parents, this._name, this._id);
}
function hE(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups,
      n = e._groups,
      r = t.length,
      i = n.length,
      o = Math.min(r, i),
      l = new Array(r),
      a = 0;
    a < o;
    ++a
  )
    for (
      var u = t[a], s = n[a], f = u.length, d = (l[a] = new Array(f)), c, m = 0;
      m < f;
      ++m
    )
      (c = u[m] || s[m]) && (d[m] = c);
  for (; a < r; ++a) l[a] = t[a];
  return new Tn(l, this._parents, this._name, this._id);
}
function pE(e) {
  return (e + "")
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var n = t.indexOf(".");
      return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
    });
}
function mE(e, t, n) {
  var r,
    i,
    o = pE(t) ? wf : cn;
  return function () {
    var l = o(this, e),
      a = l.on;
    a !== r && (i = (r = a).copy()).on(t, n), (l.on = i);
  };
}
function gE(e, t) {
  var n = this._id;
  return arguments.length < 2
    ? en(this.node(), n).on.on(e)
    : this.each(mE(n, e, t));
}
function vE(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function yE() {
  return this.on("end.remove", vE(this._id));
}
function wE(e) {
  var t = this._name,
    n = this._id;
  typeof e != "function" && (e = ff(e));
  for (var r = this._groups, i = r.length, o = new Array(i), l = 0; l < i; ++l)
    for (
      var a = r[l], u = a.length, s = (o[l] = new Array(u)), f, d, c = 0;
      c < u;
      ++c
    )
      (f = a[c]) &&
        (d = e.call(f, f.__data__, c, a)) &&
        ("__data__" in f && (d.__data__ = f.__data__),
        (s[c] = d),
        Wa(s[c], t, n, c, s, en(f, n)));
  return new Tn(o, this._parents, t, n);
}
function _E(e) {
  var t = this._name,
    n = this._id;
  typeof e != "function" && (e = Fg(e));
  for (var r = this._groups, i = r.length, o = [], l = [], a = 0; a < i; ++a)
    for (var u = r[a], s = u.length, f, d = 0; d < s; ++d)
      if ((f = u[d])) {
        for (
          var c = e.call(f, f.__data__, d, u),
            m,
            S = en(f, n),
            w = 0,
            C = c.length;
          w < C;
          ++w
        )
          (m = c[w]) && Wa(m, t, n, w, c, S);
        o.push(c), l.push(f);
      }
  return new Tn(o, l, t, n);
}
var xE = Lo.prototype.constructor;
function SE() {
  return new xE(this._groups, this._parents);
}
function EE(e, t) {
  var n, r, i;
  return function () {
    var o = di(this, e),
      l = (this.style.removeProperty(e), di(this, e));
    return o === l ? null : o === n && l === r ? i : (i = t((n = o), (r = l)));
  };
}
function l0(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function CE(e, t, n) {
  var r,
    i = n + "",
    o;
  return function () {
    var l = di(this, e);
    return l === i ? null : l === r ? o : (o = t((r = l), n));
  };
}
function NE(e, t, n) {
  var r, i, o;
  return function () {
    var l = di(this, e),
      a = n(this),
      u = a + "";
    return (
      a == null && (u = a = (this.style.removeProperty(e), di(this, e))),
      l === u ? null : l === r && u === i ? o : ((i = u), (o = t((r = l), a)))
    );
  };
}
function kE(e, t) {
  var n,
    r,
    i,
    o = "style." + t,
    l = "end." + o,
    a;
  return function () {
    var u = cn(this, e),
      s = u.on,
      f = u.value[o] == null ? a || (a = l0(t)) : void 0;
    (s !== n || i !== f) && (r = (n = s).copy()).on(l, (i = f)), (u.on = r);
  };
}
function PE(e, t, n) {
  var r = (e += "") == "transform" ? PS : o0;
  return t == null
    ? this.styleTween(e, EE(e, r)).on("end.style." + e, l0(e))
    : typeof t == "function"
    ? this.styleTween(e, NE(e, r, _f(this, "style." + e, t))).each(
        kE(this._id, e)
      )
    : this.styleTween(e, CE(e, r, t), n).on("end.style." + e, null);
}
function TE(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function RE(e, t, n) {
  var r, i;
  function o() {
    var l = t.apply(this, arguments);
    return l !== i && (r = (i = l) && TE(e, l, n)), r;
  }
  return (o._value = t), o;
}
function ME(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, RE(e, t, n == null ? "" : n));
}
function OE(e) {
  return function () {
    this.textContent = e;
  };
}
function bE(e) {
  return function () {
    var t = e(this);
    this.textContent = t == null ? "" : t;
  };
}
function AE(e) {
  return this.tween(
    "text",
    typeof e == "function"
      ? bE(_f(this, "text", e))
      : OE(e == null ? "" : e + "")
  );
}
function DE(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function IE(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && DE(i)), t;
  }
  return (r._value = e), r;
}
function zE(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, IE(e));
}
function LE() {
  for (
    var e = this._name,
      t = this._id,
      n = a0(),
      r = this._groups,
      i = r.length,
      o = 0;
    o < i;
    ++o
  )
    for (var l = r[o], a = l.length, u, s = 0; s < a; ++s)
      if ((u = l[s])) {
        var f = en(u, t);
        Wa(u, e, n, s, l, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease,
        });
      }
  return new Tn(r, this._parents, e, n);
}
function FE() {
  var e,
    t,
    n = this,
    r = n._id,
    i = n.size();
  return new Promise(function (o, l) {
    var a = { value: l },
      u = {
        value: function () {
          --i === 0 && o();
        },
      };
    n.each(function () {
      var s = cn(this, r),
        f = s.on;
      f !== e &&
        ((t = (e = f).copy()),
        t._.cancel.push(a),
        t._.interrupt.push(a),
        t._.end.push(u)),
        (s.on = t);
    }),
      i === 0 && o();
  });
}
var $E = 0;
function Tn(e, t, n, r) {
  (this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
}
function a0() {
  return ++$E;
}
var mn = Lo.prototype;
Tn.prototype = {
  constructor: Tn,
  select: wE,
  selectAll: _E,
  selectChild: mn.selectChild,
  selectChildren: mn.selectChildren,
  filter: dE,
  merge: hE,
  selection: SE,
  transition: LE,
  call: mn.call,
  nodes: mn.nodes,
  node: mn.node,
  size: mn.size,
  empty: mn.empty,
  each: mn.each,
  on: gE,
  attr: GS,
  attrTween: tE,
  style: PE,
  styleTween: ME,
  text: AE,
  textTween: zE,
  remove: yE,
  tween: VS,
  delay: iE,
  duration: aE,
  ease: sE,
  easeVarying: fE,
  end: FE,
  [Symbol.iterator]: mn[Symbol.iterator],
};
function jE(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var UE = { time: null, delay: 0, duration: 250, ease: jE };
function BE(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return n;
}
function VE(e) {
  var t, n;
  e instanceof Tn
    ? ((t = e._id), (e = e._name))
    : ((t = a0()), ((n = UE).time = vf()), (e = e == null ? null : e + ""));
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var l = r[o], a = l.length, u, s = 0; s < a; ++s)
      (u = l[s]) && Wa(u, e, t, s, l, n || BE(u, t));
  return new Tn(r, this._parents, e, t);
}
Lo.prototype.interrupt = jS;
Lo.prototype.transition = VE;
function WE(e, t) {
  var n,
    r = 1;
  e == null && (e = 0), t == null && (t = 0);
  function i() {
    var o,
      l = n.length,
      a,
      u = 0,
      s = 0;
    for (o = 0; o < l; ++o) (a = n[o]), (u += a.x), (s += a.y);
    for (u = (u / l - e) * r, s = (s / l - t) * r, o = 0; o < l; ++o)
      (a = n[o]), (a.x -= u), (a.y -= s);
  }
  return (
    (i.initialize = function (o) {
      n = o;
    }),
    (i.x = function (o) {
      return arguments.length ? ((e = +o), i) : e;
    }),
    (i.y = function (o) {
      return arguments.length ? ((t = +o), i) : t;
    }),
    (i.strength = function (o) {
      return arguments.length ? ((r = +o), i) : r;
    }),
    i
  );
}
function HE(e) {
  const t = +this._x.call(null, e),
    n = +this._y.call(null, e);
  return u0(this.cover(t, n), t, n, e);
}
function u0(e, t, n, r) {
  if (isNaN(t) || isNaN(n)) return e;
  var i,
    o = e._root,
    l = { data: r },
    a = e._x0,
    u = e._y0,
    s = e._x1,
    f = e._y1,
    d,
    c,
    m,
    S,
    w,
    C,
    p,
    g;
  if (!o) return (e._root = l), e;
  for (; o.length; )
    if (
      ((w = t >= (d = (a + s) / 2)) ? (a = d) : (s = d),
      (C = n >= (c = (u + f) / 2)) ? (u = c) : (f = c),
      (i = o),
      !(o = o[(p = (C << 1) | w)]))
    )
      return (i[p] = l), e;
  if (
    ((m = +e._x.call(null, o.data)),
    (S = +e._y.call(null, o.data)),
    t === m && n === S)
  )
    return (l.next = o), i ? (i[p] = l) : (e._root = l), e;
  do
    (i = i ? (i[p] = new Array(4)) : (e._root = new Array(4))),
      (w = t >= (d = (a + s) / 2)) ? (a = d) : (s = d),
      (C = n >= (c = (u + f) / 2)) ? (u = c) : (f = c);
  while ((p = (C << 1) | w) === (g = ((S >= c) << 1) | (m >= d)));
  return (i[g] = o), (i[p] = l), e;
}
function YE(e) {
  var t,
    n,
    r = e.length,
    i,
    o,
    l = new Array(r),
    a = new Array(r),
    u = 1 / 0,
    s = 1 / 0,
    f = -1 / 0,
    d = -1 / 0;
  for (n = 0; n < r; ++n)
    isNaN((i = +this._x.call(null, (t = e[n])))) ||
      isNaN((o = +this._y.call(null, t))) ||
      ((l[n] = i),
      (a[n] = o),
      i < u && (u = i),
      i > f && (f = i),
      o < s && (s = o),
      o > d && (d = o));
  if (u > f || s > d) return this;
  for (this.cover(u, s).cover(f, d), n = 0; n < r; ++n)
    u0(this, l[n], a[n], e[n]);
  return this;
}
function QE(e, t) {
  if (isNaN((e = +e)) || isNaN((t = +t))) return this;
  var n = this._x0,
    r = this._y0,
    i = this._x1,
    o = this._y1;
  if (isNaN(n)) (i = (n = Math.floor(e)) + 1), (o = (r = Math.floor(t)) + 1);
  else {
    for (
      var l = i - n || 1, a = this._root, u, s;
      n > e || e >= i || r > t || t >= o;

    )
      switch (
        ((s = ((t < r) << 1) | (e < n)),
        (u = new Array(4)),
        (u[s] = a),
        (a = u),
        (l *= 2),
        s)
      ) {
        case 0:
          (i = n + l), (o = r + l);
          break;
        case 1:
          (n = i - l), (o = r + l);
          break;
        case 2:
          (i = n + l), (r = o - l);
          break;
        case 3:
          (n = i - l), (r = o - l);
          break;
      }
    this._root && this._root.length && (this._root = a);
  }
  return (this._x0 = n), (this._y0 = r), (this._x1 = i), (this._y1 = o), this;
}
function KE() {
  var e = [];
  return (
    this.visit(function (t) {
      if (!t.length)
        do e.push(t.data);
        while ((t = t.next));
    }),
    e
  );
}
function XE(e) {
  return arguments.length
    ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
    : isNaN(this._x0)
    ? void 0
    : [
        [this._x0, this._y0],
        [this._x1, this._y1],
      ];
}
function ot(e, t, n, r, i) {
  (this.node = e), (this.x0 = t), (this.y0 = n), (this.x1 = r), (this.y1 = i);
}
function GE(e, t, n) {
  var r,
    i = this._x0,
    o = this._y0,
    l,
    a,
    u,
    s,
    f = this._x1,
    d = this._y1,
    c = [],
    m = this._root,
    S,
    w;
  for (
    m && c.push(new ot(m, i, o, f, d)),
      n == null
        ? (n = 1 / 0)
        : ((i = e - n), (o = t - n), (f = e + n), (d = t + n), (n *= n));
    (S = c.pop());

  )
    if (
      !(
        !(m = S.node) ||
        (l = S.x0) > f ||
        (a = S.y0) > d ||
        (u = S.x1) < i ||
        (s = S.y1) < o
      )
    )
      if (m.length) {
        var C = (l + u) / 2,
          p = (a + s) / 2;
        c.push(
          new ot(m[3], C, p, u, s),
          new ot(m[2], l, p, C, s),
          new ot(m[1], C, a, u, p),
          new ot(m[0], l, a, C, p)
        ),
          (w = ((t >= p) << 1) | (e >= C)) &&
            ((S = c[c.length - 1]),
            (c[c.length - 1] = c[c.length - 1 - w]),
            (c[c.length - 1 - w] = S));
      } else {
        var g = e - +this._x.call(null, m.data),
          h = t - +this._y.call(null, m.data),
          y = g * g + h * h;
        if (y < n) {
          var x = Math.sqrt((n = y));
          (i = e - x), (o = t - x), (f = e + x), (d = t + x), (r = m.data);
        }
      }
  return r;
}
function qE(e) {
  if (
    isNaN((f = +this._x.call(null, e))) ||
    isNaN((d = +this._y.call(null, e)))
  )
    return this;
  var t,
    n = this._root,
    r,
    i,
    o,
    l = this._x0,
    a = this._y0,
    u = this._x1,
    s = this._y1,
    f,
    d,
    c,
    m,
    S,
    w,
    C,
    p;
  if (!n) return this;
  if (n.length)
    for (;;) {
      if (
        ((S = f >= (c = (l + u) / 2)) ? (l = c) : (u = c),
        (w = d >= (m = (a + s) / 2)) ? (a = m) : (s = m),
        (t = n),
        !(n = n[(C = (w << 1) | S)]))
      )
        return this;
      if (!n.length) break;
      (t[(C + 1) & 3] || t[(C + 2) & 3] || t[(C + 3) & 3]) &&
        ((r = t), (p = C));
    }
  for (; n.data !== e; ) if (((i = n), !(n = n.next))) return this;
  return (
    (o = n.next) && delete n.next,
    i
      ? (o ? (i.next = o) : delete i.next, this)
      : t
      ? (o ? (t[C] = o) : delete t[C],
        (n = t[0] || t[1] || t[2] || t[3]) &&
          n === (t[3] || t[2] || t[1] || t[0]) &&
          !n.length &&
          (r ? (r[p] = n) : (this._root = n)),
        this)
      : ((this._root = o), this)
  );
}
function ZE(e) {
  for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
  return this;
}
function JE() {
  return this._root;
}
function e2() {
  var e = 0;
  return (
    this.visit(function (t) {
      if (!t.length)
        do ++e;
        while ((t = t.next));
    }),
    e
  );
}
function t2(e) {
  var t = [],
    n,
    r = this._root,
    i,
    o,
    l,
    a,
    u;
  for (
    r && t.push(new ot(r, this._x0, this._y0, this._x1, this._y1));
    (n = t.pop());

  )
    if (
      !e((r = n.node), (o = n.x0), (l = n.y0), (a = n.x1), (u = n.y1)) &&
      r.length
    ) {
      var s = (o + a) / 2,
        f = (l + u) / 2;
      (i = r[3]) && t.push(new ot(i, s, f, a, u)),
        (i = r[2]) && t.push(new ot(i, o, f, s, u)),
        (i = r[1]) && t.push(new ot(i, s, l, a, f)),
        (i = r[0]) && t.push(new ot(i, o, l, s, f));
    }
  return this;
}
function n2(e) {
  var t = [],
    n = [],
    r;
  for (
    this._root &&
    t.push(new ot(this._root, this._x0, this._y0, this._x1, this._y1));
    (r = t.pop());

  ) {
    var i = r.node;
    if (i.length) {
      var o,
        l = r.x0,
        a = r.y0,
        u = r.x1,
        s = r.y1,
        f = (l + u) / 2,
        d = (a + s) / 2;
      (o = i[0]) && t.push(new ot(o, l, a, f, d)),
        (o = i[1]) && t.push(new ot(o, f, a, u, d)),
        (o = i[2]) && t.push(new ot(o, l, d, f, s)),
        (o = i[3]) && t.push(new ot(o, f, d, u, s));
    }
    n.push(r);
  }
  for (; (r = n.pop()); ) e(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function r2(e) {
  return e[0];
}
function i2(e) {
  return arguments.length ? ((this._x = e), this) : this._x;
}
function o2(e) {
  return e[1];
}
function l2(e) {
  return arguments.length ? ((this._y = e), this) : this._y;
}
function s0(e, t, n) {
  var r = new xf(t == null ? r2 : t, n == null ? o2 : n, NaN, NaN, NaN, NaN);
  return e == null ? r : r.addAll(e);
}
function xf(e, t, n, r, i, o) {
  (this._x = e),
    (this._y = t),
    (this._x0 = n),
    (this._y0 = r),
    (this._x1 = i),
    (this._y1 = o),
    (this._root = void 0);
}
function Nh(e) {
  for (var t = { data: e.data }, n = t; (e = e.next); )
    n = n.next = { data: e.data };
  return t;
}
var ct = (s0.prototype = xf.prototype);
ct.copy = function () {
  var e = new xf(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
    t = this._root,
    n,
    r;
  if (!t) return e;
  if (!t.length) return (e._root = Nh(t)), e;
  for (n = [{ source: t, target: (e._root = new Array(4)) }]; (t = n.pop()); )
    for (var i = 0; i < 4; ++i)
      (r = t.source[i]) &&
        (r.length
          ? n.push({ source: r, target: (t.target[i] = new Array(4)) })
          : (t.target[i] = Nh(r)));
  return e;
};
ct.add = HE;
ct.addAll = YE;
ct.cover = QE;
ct.data = KE;
ct.extent = XE;
ct.find = GE;
ct.remove = qE;
ct.removeAll = ZE;
ct.root = JE;
ct.size = e2;
ct.visit = t2;
ct.visitAfter = n2;
ct.x = i2;
ct.y = l2;
function Et(e) {
  return function () {
    return e;
  };
}
function Qr(e) {
  return (e() - 0.5) * 1e-6;
}
function a2(e) {
  return e.index;
}
function kh(e, t) {
  var n = e.get(t);
  if (!n) throw new Error("node not found: " + t);
  return n;
}
function u2(e) {
  var t = a2,
    n = d,
    r,
    i = Et(30),
    o,
    l,
    a,
    u,
    s,
    f = 1;
  e == null && (e = []);
  function d(C) {
    return 1 / Math.min(a[C.source.index], a[C.target.index]);
  }
  function c(C) {
    for (var p = 0, g = e.length; p < f; ++p)
      for (var h = 0, y, x, M, E, O, L, z; h < g; ++h)
        (y = e[h]),
          (x = y.source),
          (M = y.target),
          (E = M.x + M.vx - x.x - x.vx || Qr(s)),
          (O = M.y + M.vy - x.y - x.vy || Qr(s)),
          (L = Math.sqrt(E * E + O * O)),
          (L = ((L - o[h]) / L) * C * r[h]),
          (E *= L),
          (O *= L),
          (M.vx -= E * (z = u[h])),
          (M.vy -= O * z),
          (x.vx += E * (z = 1 - z)),
          (x.vy += O * z);
  }
  function m() {
    if (!!l) {
      var C,
        p = l.length,
        g = e.length,
        h = new Map(l.map((x, M) => [t(x, M, l), x])),
        y;
      for (C = 0, a = new Array(p); C < g; ++C)
        (y = e[C]),
          (y.index = C),
          typeof y.source != "object" && (y.source = kh(h, y.source)),
          typeof y.target != "object" && (y.target = kh(h, y.target)),
          (a[y.source.index] = (a[y.source.index] || 0) + 1),
          (a[y.target.index] = (a[y.target.index] || 0) + 1);
      for (C = 0, u = new Array(g); C < g; ++C)
        (y = e[C]),
          (u[C] = a[y.source.index] / (a[y.source.index] + a[y.target.index]));
      (r = new Array(g)), S(), (o = new Array(g)), w();
    }
  }
  function S() {
    if (!!l) for (var C = 0, p = e.length; C < p; ++C) r[C] = +n(e[C], C, e);
  }
  function w() {
    if (!!l) for (var C = 0, p = e.length; C < p; ++C) o[C] = +i(e[C], C, e);
  }
  return (
    (c.initialize = function (C, p) {
      (l = C), (s = p), m();
    }),
    (c.links = function (C) {
      return arguments.length ? ((e = C), m(), c) : e;
    }),
    (c.id = function (C) {
      return arguments.length ? ((t = C), c) : t;
    }),
    (c.iterations = function (C) {
      return arguments.length ? ((f = +C), c) : f;
    }),
    (c.strength = function (C) {
      return arguments.length
        ? ((n = typeof C == "function" ? C : Et(+C)), S(), c)
        : n;
    }),
    (c.distance = function (C) {
      return arguments.length
        ? ((i = typeof C == "function" ? C : Et(+C)), w(), c)
        : i;
    }),
    c
  );
}
const s2 = 1664525,
  c2 = 1013904223,
  Ph = 4294967296;
function f2() {
  let e = 1;
  return () => (e = (s2 * e + c2) % Ph) / Ph;
}
function d2(e) {
  return e.x;
}
function h2(e) {
  return e.y;
}
var p2 = 10,
  m2 = Math.PI * (3 - Math.sqrt(5));
function g2(e) {
  var t,
    n = 1,
    r = 0.001,
    i = 1 - Math.pow(r, 1 / 300),
    o = 0,
    l = 0.6,
    a = new Map(),
    u = yf(d),
    s = zo("tick", "end"),
    f = f2();
  e == null && (e = []);
  function d() {
    c(), s.call("tick", t), n < r && (u.stop(), s.call("end", t));
  }
  function c(w) {
    var C,
      p = e.length,
      g;
    w === void 0 && (w = 1);
    for (var h = 0; h < w; ++h)
      for (
        n += (o - n) * i,
          a.forEach(function (y) {
            y(n);
          }),
          C = 0;
        C < p;
        ++C
      )
        (g = e[C]),
          g.fx == null ? (g.x += g.vx *= l) : ((g.x = g.fx), (g.vx = 0)),
          g.fy == null ? (g.y += g.vy *= l) : ((g.y = g.fy), (g.vy = 0));
    return t;
  }
  function m() {
    for (var w = 0, C = e.length, p; w < C; ++w) {
      if (
        ((p = e[w]),
        (p.index = w),
        p.fx != null && (p.x = p.fx),
        p.fy != null && (p.y = p.fy),
        isNaN(p.x) || isNaN(p.y))
      ) {
        var g = p2 * Math.sqrt(0.5 + w),
          h = w * m2;
        (p.x = g * Math.cos(h)), (p.y = g * Math.sin(h));
      }
      (isNaN(p.vx) || isNaN(p.vy)) && (p.vx = p.vy = 0);
    }
  }
  function S(w) {
    return w.initialize && w.initialize(e, f), w;
  }
  return (
    m(),
    (t = {
      tick: c,
      restart: function () {
        return u.restart(d), t;
      },
      stop: function () {
        return u.stop(), t;
      },
      nodes: function (w) {
        return arguments.length ? ((e = w), m(), a.forEach(S), t) : e;
      },
      alpha: function (w) {
        return arguments.length ? ((n = +w), t) : n;
      },
      alphaMin: function (w) {
        return arguments.length ? ((r = +w), t) : r;
      },
      alphaDecay: function (w) {
        return arguments.length ? ((i = +w), t) : +i;
      },
      alphaTarget: function (w) {
        return arguments.length ? ((o = +w), t) : o;
      },
      velocityDecay: function (w) {
        return arguments.length ? ((l = 1 - w), t) : 1 - l;
      },
      randomSource: function (w) {
        return arguments.length ? ((f = w), a.forEach(S), t) : f;
      },
      force: function (w, C) {
        return arguments.length > 1
          ? (C == null ? a.delete(w) : a.set(w, S(C)), t)
          : a.get(w);
      },
      find: function (w, C, p) {
        var g = 0,
          h = e.length,
          y,
          x,
          M,
          E,
          O;
        for (p == null ? (p = 1 / 0) : (p *= p), g = 0; g < h; ++g)
          (E = e[g]),
            (y = w - E.x),
            (x = C - E.y),
            (M = y * y + x * x),
            M < p && ((O = E), (p = M));
        return O;
      },
      on: function (w, C) {
        return arguments.length > 1 ? (s.on(w, C), t) : s.on(w);
      },
    })
  );
}
function v2() {
  var e,
    t,
    n,
    r,
    i = Et(-30),
    o,
    l = 1,
    a = 1 / 0,
    u = 0.81;
  function s(m) {
    var S,
      w = e.length,
      C = s0(e, d2, h2).visitAfter(d);
    for (r = m, S = 0; S < w; ++S) (t = e[S]), C.visit(c);
  }
  function f() {
    if (!!e) {
      var m,
        S = e.length,
        w;
      for (o = new Array(S), m = 0; m < S; ++m)
        (w = e[m]), (o[w.index] = +i(w, m, e));
    }
  }
  function d(m) {
    var S = 0,
      w,
      C,
      p = 0,
      g,
      h,
      y;
    if (m.length) {
      for (g = h = y = 0; y < 4; ++y)
        (w = m[y]) &&
          (C = Math.abs(w.value)) &&
          ((S += w.value), (p += C), (g += C * w.x), (h += C * w.y));
      (m.x = g / p), (m.y = h / p);
    } else {
      (w = m), (w.x = w.data.x), (w.y = w.data.y);
      do S += o[w.data.index];
      while ((w = w.next));
    }
    m.value = S;
  }
  function c(m, S, w, C) {
    if (!m.value) return !0;
    var p = m.x - t.x,
      g = m.y - t.y,
      h = C - S,
      y = p * p + g * g;
    if ((h * h) / u < y)
      return (
        y < a &&
          (p === 0 && ((p = Qr(n)), (y += p * p)),
          g === 0 && ((g = Qr(n)), (y += g * g)),
          y < l && (y = Math.sqrt(l * y)),
          (t.vx += (p * m.value * r) / y),
          (t.vy += (g * m.value * r) / y)),
        !0
      );
    if (m.length || y >= a) return;
    (m.data !== t || m.next) &&
      (p === 0 && ((p = Qr(n)), (y += p * p)),
      g === 0 && ((g = Qr(n)), (y += g * g)),
      y < l && (y = Math.sqrt(l * y)));
    do
      m.data !== t &&
        ((h = (o[m.data.index] * r) / y), (t.vx += p * h), (t.vy += g * h));
    while ((m = m.next));
  }
  return (
    (s.initialize = function (m, S) {
      (e = m), (n = S), f();
    }),
    (s.strength = function (m) {
      return arguments.length
        ? ((i = typeof m == "function" ? m : Et(+m)), f(), s)
        : i;
    }),
    (s.distanceMin = function (m) {
      return arguments.length ? ((l = m * m), s) : Math.sqrt(l);
    }),
    (s.distanceMax = function (m) {
      return arguments.length ? ((a = m * m), s) : Math.sqrt(a);
    }),
    (s.theta = function (m) {
      return arguments.length ? ((u = m * m), s) : Math.sqrt(u);
    }),
    s
  );
}
function y2(e) {
  var t = Et(0.1),
    n,
    r,
    i;
  typeof e != "function" && (e = Et(e == null ? 0 : +e));
  function o(a) {
    for (var u = 0, s = n.length, f; u < s; ++u)
      (f = n[u]), (f.vx += (i[u] - f.x) * r[u] * a);
  }
  function l() {
    if (!!n) {
      var a,
        u = n.length;
      for (r = new Array(u), i = new Array(u), a = 0; a < u; ++a)
        r[a] = isNaN((i[a] = +e(n[a], a, n))) ? 0 : +t(n[a], a, n);
    }
  }
  return (
    (o.initialize = function (a) {
      (n = a), l();
    }),
    (o.strength = function (a) {
      return arguments.length
        ? ((t = typeof a == "function" ? a : Et(+a)), l(), o)
        : t;
    }),
    (o.x = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : Et(+a)), l(), o)
        : e;
    }),
    o
  );
}
function w2(e) {
  var t = Et(0.1),
    n,
    r,
    i;
  typeof e != "function" && (e = Et(e == null ? 0 : +e));
  function o(a) {
    for (var u = 0, s = n.length, f; u < s; ++u)
      (f = n[u]), (f.vy += (i[u] - f.y) * r[u] * a);
  }
  function l() {
    if (!!n) {
      var a,
        u = n.length;
      for (r = new Array(u), i = new Array(u), a = 0; a < u; ++a)
        r[a] = isNaN((i[a] = +e(n[a], a, n))) ? 0 : +t(n[a], a, n);
    }
  }
  return (
    (o.initialize = function (a) {
      (n = a), l();
    }),
    (o.strength = function (a) {
      return arguments.length
        ? ((t = typeof a == "function" ? a : Et(+a)), l(), o)
        : t;
    }),
    (o.y = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : Et(+a)), l(), o)
        : e;
    }),
    o
  );
}
function _2(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function va(e, t) {
  if (
    (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var n,
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function pi(e) {
  return (e = va(Math.abs(e))), e ? e[1] : NaN;
}
function x2(e, t) {
  return function (n, r) {
    for (
      var i = n.length, o = [], l = 0, a = e[0], u = 0;
      i > 0 &&
      a > 0 &&
      (u + a + 1 > r && (a = Math.max(1, r - u)),
      o.push(n.substring((i -= a), i + a)),
      !((u += a + 1) > r));

    )
      a = e[(l = (l + 1) % e.length)];
    return o.reverse().join(t);
  };
}
function S2(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (n) {
      return e[+n];
    });
  };
}
var E2 =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ya(e) {
  if (!(t = E2.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Sf({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
ya.prototype = Sf.prototype;
function Sf(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
Sf.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function C2(e) {
  e: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), (i = n);
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var c0;
function N2(e, t) {
  var n = va(e, t);
  if (!n) return e + "";
  var r = n[0],
    i = n[1],
    o = i - (c0 = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    l = r.length;
  return o === l
    ? r
    : o > l
    ? r + new Array(o - l + 1).join("0")
    : o > 0
    ? r.slice(0, o) + "." + r.slice(o)
    : "0." + new Array(1 - o).join("0") + va(e, Math.max(0, t + o - 1))[0];
}
function Th(e, t) {
  var n = va(e, t);
  if (!n) return e + "";
  var r = n[0],
    i = n[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + r
    : r.length > i + 1
    ? r.slice(0, i + 1) + "." + r.slice(i + 1)
    : r + new Array(i - r.length + 2).join("0");
}
const Rh = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: _2,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Th(e * 100, t),
  r: Th,
  s: N2,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Mh(e) {
  return e;
}
var Oh = Array.prototype.map,
  bh = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xB5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function k2(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Mh
        : x2(Oh.call(e.grouping, Number), e.thousands + ""),
    n = e.currency === void 0 ? "" : e.currency[0] + "",
    r = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    o = e.numerals === void 0 ? Mh : S2(Oh.call(e.numerals, String)),
    l = e.percent === void 0 ? "%" : e.percent + "",
    a = e.minus === void 0 ? "\u2212" : e.minus + "",
    u = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(d) {
    d = ya(d);
    var c = d.fill,
      m = d.align,
      S = d.sign,
      w = d.symbol,
      C = d.zero,
      p = d.width,
      g = d.comma,
      h = d.precision,
      y = d.trim,
      x = d.type;
    x === "n"
      ? ((g = !0), (x = "g"))
      : Rh[x] || (h === void 0 && (h = 12), (y = !0), (x = "g")),
      (C || (c === "0" && m === "=")) && ((C = !0), (c = "0"), (m = "="));
    var M =
        w === "$"
          ? n
          : w === "#" && /[boxX]/.test(x)
          ? "0" + x.toLowerCase()
          : "",
      E = w === "$" ? r : /[%p]/.test(x) ? l : "",
      O = Rh[x],
      L = /[defgprs%]/.test(x);
    h =
      h === void 0
        ? 6
        : /[gprs]/.test(x)
        ? Math.max(1, Math.min(21, h))
        : Math.max(0, Math.min(20, h));
    function z(j) {
      var ie = M,
        ue = E,
        R,
        G,
        b;
      if (x === "c") (ue = O(j) + ue), (j = "");
      else {
        j = +j;
        var U = j < 0 || 1 / j < 0;
        if (
          ((j = isNaN(j) ? u : O(Math.abs(j), h)),
          y && (j = C2(j)),
          U && +j == 0 && S !== "+" && (U = !1),
          (ie =
            (U ? (S === "(" ? S : a) : S === "-" || S === "(" ? "" : S) + ie),
          (ue =
            (x === "s" ? bh[8 + c0 / 3] : "") +
            ue +
            (U && S === "(" ? ")" : "")),
          L)
        ) {
          for (R = -1, G = j.length; ++R < G; )
            if (((b = j.charCodeAt(R)), 48 > b || b > 57)) {
              (ue = (b === 46 ? i + j.slice(R + 1) : j.slice(R)) + ue),
                (j = j.slice(0, R));
              break;
            }
        }
      }
      g && !C && (j = t(j, 1 / 0));
      var A = ie.length + j.length + ue.length,
        F = A < p ? new Array(p - A + 1).join(c) : "";
      switch (
        (g && C && ((j = t(F + j, F.length ? p - ue.length : 1 / 0)), (F = "")),
        m)
      ) {
        case "<":
          j = ie + j + ue + F;
          break;
        case "=":
          j = ie + F + j + ue;
          break;
        case "^":
          j = F.slice(0, (A = F.length >> 1)) + ie + j + ue + F.slice(A);
          break;
        default:
          j = F + ie + j + ue;
          break;
      }
      return o(j);
    }
    return (
      (z.toString = function () {
        return d + "";
      }),
      z
    );
  }
  function f(d, c) {
    var m = s(((d = ya(d)), (d.type = "f"), d)),
      S = Math.max(-8, Math.min(8, Math.floor(pi(c) / 3))) * 3,
      w = Math.pow(10, -S),
      C = bh[8 + S / 3];
    return function (p) {
      return m(w * p) + C;
    };
  }
  return { format: s, formatPrefix: f };
}
var pl, f0, d0;
P2({ thousands: ",", grouping: [3], currency: ["$", ""] });
function P2(e) {
  return (pl = k2(e)), (f0 = pl.format), (d0 = pl.formatPrefix), pl;
}
function T2(e) {
  return Math.max(0, -pi(Math.abs(e)));
}
function R2(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(pi(t) / 3))) * 3 - pi(Math.abs(e))
  );
}
function M2(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, pi(t) - pi(e)) + 1
  );
}
function O2(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function b2(e) {
  return function () {
    return e;
  };
}
function A2(e) {
  return +e;
}
var Ah = [0, 1];
function Kr(e) {
  return e;
}
function nc(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : b2(isNaN(t) ? NaN : 0.5);
}
function D2(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (r) {
      return Math.max(e, Math.min(t, r));
    }
  );
}
function I2(e, t, n) {
  var r = e[0],
    i = e[1],
    o = t[0],
    l = t[1];
  return (
    i < r ? ((r = nc(i, r)), (o = n(l, o))) : ((r = nc(r, i)), (o = n(o, l))),
    function (a) {
      return o(r(a));
    }
  );
}
function z2(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = new Array(r),
    o = new Array(r),
    l = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++l < r;

  )
    (i[l] = nc(e[l], e[l + 1])), (o[l] = n(t[l], t[l + 1]));
  return function (a) {
    var u = f_(e, a, 1, r) - 1;
    return o[u](i[u](a));
  };
}
function L2(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function F2() {
  var e = Ah,
    t = Ah,
    n = gf,
    r,
    i,
    o,
    l = Kr,
    a,
    u,
    s;
  function f() {
    var c = Math.min(e.length, t.length);
    return (
      l !== Kr && (l = D2(e[0], e[c - 1])),
      (a = c > 2 ? z2 : I2),
      (u = s = null),
      d
    );
  }
  function d(c) {
    return c == null || isNaN((c = +c))
      ? o
      : (u || (u = a(e.map(r), t, n)))(r(l(c)));
  }
  return (
    (d.invert = function (c) {
      return l(i((s || (s = a(t, e.map(r), Kt)))(c)));
    }),
    (d.domain = function (c) {
      return arguments.length ? ((e = Array.from(c, A2)), f()) : e.slice();
    }),
    (d.range = function (c) {
      return arguments.length ? ((t = Array.from(c)), f()) : t.slice();
    }),
    (d.rangeRound = function (c) {
      return (t = Array.from(c)), (n = CS), f();
    }),
    (d.clamp = function (c) {
      return arguments.length ? ((l = c ? !0 : Kr), f()) : l !== Kr;
    }),
    (d.interpolate = function (c) {
      return arguments.length ? ((n = c), f()) : n;
    }),
    (d.unknown = function (c) {
      return arguments.length ? ((o = c), d) : o;
    }),
    function (c, m) {
      return (r = c), (i = m), f();
    }
  );
}
function $2() {
  return F2()(Kr, Kr);
}
function j2(e, t, n, r) {
  var i = h_(e, t, n),
    o;
  switch (((r = ya(r == null ? ",f" : r)), r.type)) {
    case "s": {
      var l = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((o = R2(i, l))) && (r.precision = o),
        d0(r, l)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null &&
        !isNaN((o = M2(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null &&
        !isNaN((o = T2(i))) &&
        (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return f0(r);
}
function U2(e) {
  var t = e.domain;
  return (
    (e.ticks = function (n) {
      var r = t();
      return d_(r[0], r[r.length - 1], n == null ? 10 : n);
    }),
    (e.tickFormat = function (n, r) {
      var i = t();
      return j2(i[0], i[i.length - 1], n == null ? 10 : n, r);
    }),
    (e.nice = function (n) {
      n == null && (n = 10);
      var r = t(),
        i = 0,
        o = r.length - 1,
        l = r[i],
        a = r[o],
        u,
        s,
        f = 10;
      for (
        a < l && ((s = l), (l = a), (a = s), (s = i), (i = o), (o = s));
        f-- > 0;

      ) {
        if (((s = Ig(l, a, n)), s === u)) return (r[i] = l), (r[o] = a), t(r);
        if (s > 0) (l = Math.floor(l / s) * s), (a = Math.ceil(a / s) * s);
        else if (s < 0) (l = Math.ceil(l * s) / s), (a = Math.floor(a * s) / s);
        else break;
        u = s;
      }
      return e;
    }),
    e
  );
}
function h0() {
  var e = $2();
  return (
    (e.copy = function () {
      return L2(e, h0());
    }),
    O2.apply(e, arguments),
    U2(e)
  );
}
const ml = (e) => () => e;
function B2(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i },
  });
}
function Sn(e, t, n) {
  (this.k = e), (this.x = t), (this.y = n);
}
Sn.prototype = {
  constructor: Sn,
  scale: function (e) {
    return e === 1 ? this : new Sn(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0)
      ? this
      : new Sn(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
var p0 = new Sn(1, 0, 0);
Sn.prototype;
function Fu(e) {
  e.stopImmediatePropagation();
}
function zi(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function V2(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function W2() {
  var e = this;
  return e instanceof SVGElement
    ? ((e = e.ownerSVGElement || e),
      e.hasAttribute("viewBox")
        ? ((e = e.viewBox.baseVal),
          [
            [e.x, e.y],
            [e.x + e.width, e.y + e.height],
          ])
        : [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value],
          ])
    : [
        [0, 0],
        [e.clientWidth, e.clientHeight],
      ];
}
function Dh() {
  return this.__zoom || p0;
}
function H2(e) {
  return (
    -e.deltaY *
    (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
    (e.ctrlKey ? 10 : 1)
  );
}
function Y2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Q2(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0],
    i = e.invertX(t[1][0]) - n[1][0],
    o = e.invertY(t[0][1]) - n[0][1],
    l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    l > o ? (o + l) / 2 : Math.min(0, o) || Math.max(0, l)
  );
}
function K2() {
  var e = V2,
    t = W2,
    n = Q2,
    r = H2,
    i = Y2,
    o = [0, 1 / 0],
    l = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    a = 250,
    u = bS,
    s = zo("start", "zoom", "end"),
    f,
    d,
    c,
    m = 500,
    S = 150,
    w = 0,
    C = 10;
  function p(R) {
    R.property("__zoom", Dh)
      .on("wheel.zoom", O, { passive: !1 })
      .on("mousedown.zoom", L)
      .on("dblclick.zoom", z)
      .filter(i)
      .on("touchstart.zoom", j)
      .on("touchmove.zoom", ie)
      .on("touchend.zoom touchcancel.zoom", ue)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  (p.transform = function (R, G, b, U) {
    var A = R.selection ? R.selection() : R;
    A.property("__zoom", Dh),
      R !== A
        ? x(R, G, b, U)
        : A.interrupt().each(function () {
            M(this, arguments)
              .event(U)
              .start()
              .zoom(null, typeof G == "function" ? G.apply(this, arguments) : G)
              .end();
          });
  }),
    (p.scaleBy = function (R, G, b, U) {
      p.scaleTo(
        R,
        function () {
          var A = this.__zoom.k,
            F = typeof G == "function" ? G.apply(this, arguments) : G;
          return A * F;
        },
        b,
        U
      );
    }),
    (p.scaleTo = function (R, G, b, U) {
      p.transform(
        R,
        function () {
          var A = t.apply(this, arguments),
            F = this.__zoom,
            Y =
              b == null
                ? y(A)
                : typeof b == "function"
                ? b.apply(this, arguments)
                : b,
            J = F.invert(Y),
            re = typeof G == "function" ? G.apply(this, arguments) : G;
          return n(h(g(F, re), Y, J), A, l);
        },
        b,
        U
      );
    }),
    (p.translateBy = function (R, G, b, U) {
      p.transform(
        R,
        function () {
          return n(
            this.__zoom.translate(
              typeof G == "function" ? G.apply(this, arguments) : G,
              typeof b == "function" ? b.apply(this, arguments) : b
            ),
            t.apply(this, arguments),
            l
          );
        },
        null,
        U
      );
    }),
    (p.translateTo = function (R, G, b, U, A) {
      p.transform(
        R,
        function () {
          var F = t.apply(this, arguments),
            Y = this.__zoom,
            J =
              U == null
                ? y(F)
                : typeof U == "function"
                ? U.apply(this, arguments)
                : U;
          return n(
            p0
              .translate(J[0], J[1])
              .scale(Y.k)
              .translate(
                typeof G == "function" ? -G.apply(this, arguments) : -G,
                typeof b == "function" ? -b.apply(this, arguments) : -b
              ),
            F,
            l
          );
        },
        U,
        A
      );
    });
  function g(R, G) {
    return (
      (G = Math.max(o[0], Math.min(o[1], G))),
      G === R.k ? R : new Sn(G, R.x, R.y)
    );
  }
  function h(R, G, b) {
    var U = G[0] - b[0] * R.k,
      A = G[1] - b[1] * R.k;
    return U === R.x && A === R.y ? R : new Sn(R.k, U, A);
  }
  function y(R) {
    return [(+R[0][0] + +R[1][0]) / 2, (+R[0][1] + +R[1][1]) / 2];
  }
  function x(R, G, b, U) {
    R.on("start.zoom", function () {
      M(this, arguments).event(U).start();
    })
      .on("interrupt.zoom end.zoom", function () {
        M(this, arguments).event(U).end();
      })
      .tween("zoom", function () {
        var A = this,
          F = arguments,
          Y = M(A, F).event(U),
          J = t.apply(A, F),
          re = b == null ? y(J) : typeof b == "function" ? b.apply(A, F) : b,
          De = Math.max(J[1][0] - J[0][0], J[1][1] - J[0][1]),
          me = A.__zoom,
          Ne = typeof G == "function" ? G.apply(A, F) : G,
          Q = u(
            me.invert(re).concat(De / me.k),
            Ne.invert(re).concat(De / Ne.k)
          );
        return function (te) {
          if (te === 1) te = Ne;
          else {
            var Se = Q(te),
              Ie = De / Se[2];
            te = new Sn(Ie, re[0] - Se[0] * Ie, re[1] - Se[1] * Ie);
          }
          Y.zoom(null, te);
        };
      });
  }
  function M(R, G, b) {
    return (!b && R.__zooming) || new E(R, G);
  }
  function E(R, G) {
    (this.that = R),
      (this.args = G),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = t.apply(R, G)),
      (this.taps = 0);
  }
  E.prototype = {
    event: function (R) {
      return R && (this.sourceEvent = R), this;
    },
    start: function () {
      return (
        ++this.active === 1 &&
          ((this.that.__zooming = this), this.emit("start")),
        this
      );
    },
    zoom: function (R, G) {
      return (
        this.mouse &&
          R !== "mouse" &&
          (this.mouse[1] = G.invert(this.mouse[0])),
        this.touch0 &&
          R !== "touch" &&
          (this.touch0[1] = G.invert(this.touch0[0])),
        this.touch1 &&
          R !== "touch" &&
          (this.touch1[1] = G.invert(this.touch1[0])),
        (this.that.__zoom = G),
        this.emit("zoom"),
        this
      );
    },
    end: function () {
      return (
        --this.active === 0 && (delete this.that.__zooming, this.emit("end")),
        this
      );
    },
    emit: function (R) {
      var G = xt(this.that).datum();
      s.call(
        R,
        this.that,
        new B2(R, {
          sourceEvent: this.sourceEvent,
          target: p,
          type: R,
          transform: this.that.__zoom,
          dispatch: s,
        }),
        G
      );
    },
  };
  function O(R, ...G) {
    if (!e.apply(this, arguments)) return;
    var b = M(this, G).event(R),
      U = this.__zoom,
      A = Math.max(
        o[0],
        Math.min(o[1], U.k * Math.pow(2, r.apply(this, arguments)))
      ),
      F = yn(R);
    if (b.wheel)
      (b.mouse[0][0] !== F[0] || b.mouse[0][1] !== F[1]) &&
        (b.mouse[1] = U.invert((b.mouse[0] = F))),
        clearTimeout(b.wheel);
    else {
      if (U.k === A) return;
      (b.mouse = [F, U.invert(F)]), Fl(this), b.start();
    }
    zi(R),
      (b.wheel = setTimeout(Y, S)),
      b.zoom("mouse", n(h(g(U, A), b.mouse[0], b.mouse[1]), b.extent, l));
    function Y() {
      (b.wheel = null), b.end();
    }
  }
  function L(R, ...G) {
    if (c || !e.apply(this, arguments)) return;
    var b = R.currentTarget,
      U = M(this, G, !0).event(R),
      A = xt(R.view).on("mousemove.zoom", re, !0).on("mouseup.zoom", De, !0),
      F = yn(R, b),
      Y = R.clientX,
      J = R.clientY;
    Kg(R.view),
      Fu(R),
      (U.mouse = [F, this.__zoom.invert(F)]),
      Fl(this),
      U.start();
    function re(me) {
      if ((zi(me), !U.moved)) {
        var Ne = me.clientX - Y,
          Q = me.clientY - J;
        U.moved = Ne * Ne + Q * Q > w;
      }
      U.event(me).zoom(
        "mouse",
        n(h(U.that.__zoom, (U.mouse[0] = yn(me, b)), U.mouse[1]), U.extent, l)
      );
    }
    function De(me) {
      A.on("mousemove.zoom mouseup.zoom", null),
        Xg(me.view, U.moved),
        zi(me),
        U.event(me).end();
    }
  }
  function z(R, ...G) {
    if (!!e.apply(this, arguments)) {
      var b = this.__zoom,
        U = yn(R.changedTouches ? R.changedTouches[0] : R, this),
        A = b.invert(U),
        F = b.k * (R.shiftKey ? 0.5 : 2),
        Y = n(h(g(b, F), U, A), t.apply(this, G), l);
      zi(R),
        a > 0
          ? xt(this).transition().duration(a).call(x, Y, U, R)
          : xt(this).call(p.transform, Y, U, R);
    }
  }
  function j(R, ...G) {
    if (!!e.apply(this, arguments)) {
      var b = R.touches,
        U = b.length,
        A = M(this, G, R.changedTouches.length === U).event(R),
        F,
        Y,
        J,
        re;
      for (Fu(R), Y = 0; Y < U; ++Y)
        (J = b[Y]),
          (re = yn(J, this)),
          (re = [re, this.__zoom.invert(re), J.identifier]),
          A.touch0
            ? !A.touch1 &&
              A.touch0[2] !== re[2] &&
              ((A.touch1 = re), (A.taps = 0))
            : ((A.touch0 = re), (F = !0), (A.taps = 1 + !!f));
      f && (f = clearTimeout(f)),
        F &&
          (A.taps < 2 &&
            ((d = re[0]),
            (f = setTimeout(function () {
              f = null;
            }, m))),
          Fl(this),
          A.start());
    }
  }
  function ie(R, ...G) {
    if (!!this.__zooming) {
      var b = M(this, G).event(R),
        U = R.changedTouches,
        A = U.length,
        F,
        Y,
        J,
        re;
      for (zi(R), F = 0; F < A; ++F)
        (Y = U[F]),
          (J = yn(Y, this)),
          b.touch0 && b.touch0[2] === Y.identifier
            ? (b.touch0[0] = J)
            : b.touch1 && b.touch1[2] === Y.identifier && (b.touch1[0] = J);
      if (((Y = b.that.__zoom), b.touch1)) {
        var De = b.touch0[0],
          me = b.touch0[1],
          Ne = b.touch1[0],
          Q = b.touch1[1],
          te = (te = Ne[0] - De[0]) * te + (te = Ne[1] - De[1]) * te,
          Se = (Se = Q[0] - me[0]) * Se + (Se = Q[1] - me[1]) * Se;
        (Y = g(Y, Math.sqrt(te / Se))),
          (J = [(De[0] + Ne[0]) / 2, (De[1] + Ne[1]) / 2]),
          (re = [(me[0] + Q[0]) / 2, (me[1] + Q[1]) / 2]);
      } else if (b.touch0) (J = b.touch0[0]), (re = b.touch0[1]);
      else return;
      b.zoom("touch", n(h(Y, J, re), b.extent, l));
    }
  }
  function ue(R, ...G) {
    if (!!this.__zooming) {
      var b = M(this, G).event(R),
        U = R.changedTouches,
        A = U.length,
        F,
        Y;
      for (
        Fu(R),
          c && clearTimeout(c),
          c = setTimeout(function () {
            c = null;
          }, m),
          F = 0;
        F < A;
        ++F
      )
        (Y = U[F]),
          b.touch0 && b.touch0[2] === Y.identifier
            ? delete b.touch0
            : b.touch1 && b.touch1[2] === Y.identifier && delete b.touch1;
      if (
        (b.touch1 && !b.touch0 && ((b.touch0 = b.touch1), delete b.touch1),
        b.touch0)
      )
        b.touch0[1] = this.__zoom.invert(b.touch0[0]);
      else if (
        (b.end(),
        b.taps === 2 &&
          ((Y = yn(Y, this)), Math.hypot(d[0] - Y[0], d[1] - Y[1]) < C))
      ) {
        var J = xt(this).on("dblclick.zoom");
        J && J.apply(this, arguments);
      }
    }
  }
  return (
    (p.wheelDelta = function (R) {
      return arguments.length
        ? ((r = typeof R == "function" ? R : ml(+R)), p)
        : r;
    }),
    (p.filter = function (R) {
      return arguments.length
        ? ((e = typeof R == "function" ? R : ml(!!R)), p)
        : e;
    }),
    (p.touchable = function (R) {
      return arguments.length
        ? ((i = typeof R == "function" ? R : ml(!!R)), p)
        : i;
    }),
    (p.extent = function (R) {
      return arguments.length
        ? ((t =
            typeof R == "function"
              ? R
              : ml([
                  [+R[0][0], +R[0][1]],
                  [+R[1][0], +R[1][1]],
                ])),
          p)
        : t;
    }),
    (p.scaleExtent = function (R) {
      return arguments.length
        ? ((o[0] = +R[0]), (o[1] = +R[1]), p)
        : [o[0], o[1]];
    }),
    (p.translateExtent = function (R) {
      return arguments.length
        ? ((l[0][0] = +R[0][0]),
          (l[1][0] = +R[1][0]),
          (l[0][1] = +R[0][1]),
          (l[1][1] = +R[1][1]),
          p)
        : [
            [l[0][0], l[0][1]],
            [l[1][0], l[1][1]],
          ];
    }),
    (p.constrain = function (R) {
      return arguments.length ? ((n = R), p) : n;
    }),
    (p.duration = function (R) {
      return arguments.length ? ((a = +R), p) : a;
    }),
    (p.interpolate = function (R) {
      return arguments.length ? ((u = R), p) : u;
    }),
    (p.on = function () {
      var R = s.on.apply(s, arguments);
      return R === s ? p : R;
    }),
    (p.clickDistance = function (R) {
      return arguments.length ? ((w = (R = +R) * R), p) : Math.sqrt(w);
    }),
    (p.tapDistance = function (R) {
      return arguments.length ? ((C = +R), p) : C;
    }),
    p
  );
}
let X2;
const G2 = (e, t, n, r, i, { color: o, radius: l, graphType: a }) => {
    e.innerHTML != "" && (e.innerHTML = ""),
      console.log(t, "linksData"),
      console.log(n, "nodesData");
    const u = e.getBoundingClientRect(),
      s = u.height,
      f = u.width,
      d = h0()
        .domain([0, p_(t, (E) => E.value)])
        .range([0, 1]),
      c = y2()
        .x((E) => E.x)
        .strength(0.02),
      m = w2()
        .y((E) => E.y)
        .strength(0.02),
      S = g2()
        .force(
          "link",
          u2()
            .id((E) => E.id)
            .strength((E) => d(E.value / 1e3))
        )
        .force("charge", v2().strength(-100))
        .force("center", WE())
        .force("x", c)
        .force("y", m);
    S.nodes(n), S.force("link").links(t);
    const w = xt(e)
        .append("svg")
        .attr("viewBox", [-f / 2, -s / 2, f, s])
        .call(
          K2().on("zoom", function () {
            w.attr("transform", void 0);
          })
        ),
      C = w
        .append("g")
        .attr("class", "links")
        .selectAll("g")
        .data(t)
        .enter()
        .append("g"),
      p = C.append("line")
        .attr("stroke-width", 1.5)
        .attr("marker-end", "url(#arrowhead)")
        .attr("stroke", "white"),
      g = C.append("text")
        .text((E) => E.gOfN)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .attr("fill", "white")
        .attr("font-size", "large")
        .on("click", function (E, O) {
          const L = parseInt(prompt("Enter new value for gOfN:"));
          L !== null &&
            (console.log(r, "noOfNodesAndLinks"),
            console.log(O.id, "e.id in linkLabels"),
            console.log(O, "e"),
            console.log(t, "linksData in linkLabels"),
            xt(this).text(L),
            console.log(L, "gOfN"));
          for (let j = 0; j < t.length; j++)
            t[j].target.id === O.target.id &&
              t[j].source.id === O.source.id &&
              (t[j].gOfN = L);
          for (let j = 0; j < t.length; j++)
            t[j].target.id === O.source.id &&
              t[j].source.id === O.target.id &&
              (t[j].gOfN = L);
          console.log(t, "linksData after update");
          const z = new CustomEvent("gOfNUpdate", {
            detail: { newValue: L, linksData: t, nodesData: n },
          });
          window.dispatchEvent(z);
        });
    console.log(t, "linksData");
    const h = w
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(n)
      .enter()
      .append("g")
      .style("fill", o)
      .call(tS().on("start", y).on("drag", x).on("end", M));
    h.append("circle").attr("r", l),
      h
        .append("text")
        .text((E) => E.id)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .attr("fill", "black")
        .attr("font-size", "large")
        .on("click", function (E, O) {
          const L = O.id;
          console.log(L, "oldValue");
          let z = prompt("Enter new value for id:");
          if (
            ((z = z.toUpperCase()), z !== null && !n.find((j) => j.id === z))
          ) {
            (E.id = z), xt(this).text(z);
            for (let j = 0; j < n.length; j++)
              if (
                (console.log(n[j].id, "objects[i].id"),
                console.log(L, "oldValue"),
                n[j].id == L)
              ) {
                n[j].id = z;
                const ie = new CustomEvent("updateIdOnClick", {
                  detail: {
                    newValue: z,
                    oldValue: L,
                    nodesData: n,
                    linksData: t,
                  },
                });
                window.dispatchEvent(ie);
              }
          } else alert("Id is already used");
        }),
      a == "directed" &&
        w
          .append("defs")
          .append("marker")
          .attr("id", "arrowhead")
          .attr("viewBox", "0 -5 10 10")
          .attr("refX", l * 4.5)
          .attr("refY", 0)
          .attr("markerWidth", 8)
          .attr("markerHeight", 8)
          .attr("orient", "auto")
          .attr("fill", "white")
          .append("path")
          .attr("d", "M0,-5L10,0L0,5"),
      h
        .append("text")
        .text((E) => E.hOfN)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .attr("fill", "white")
        .attr("font-size", "large")
        .attr("dy", -28)
        .on("click", function (E, O) {
          var L = prompt("Enter new value for hOfN:");
          if (L !== null) {
            (E.hOfN = L), xt(this).text(L), (L = parseInt(L));
            const z = new CustomEvent("hOfNUpdate", { detail: L });
            window.dispatchEvent(z);
          }
          for (let z = 0; z < n.length; z++) n[z].id == O.id && (n[z].hOfN = L);
          console.log(n, "nodesData after hOfN update");
        });
    function y(E) {
      E.active || S.alphaTarget(1).restart(),
        (E.subject.fx = E.subject.x),
        (E.subject.fy = E.subject.y);
    }
    function x(E) {
      (E.subject.fx = E.x), (E.subject.fy = E.y);
    }
    function M(E) {
      E.active || S.alphaTarget(0),
        (E.subject.fx = null),
        (E.subject.fy = null);
    }
    return (
      S.on("tick", () => {
        S.alpha(0.5),
          p
            .attr("x1", function (E) {
              return E.source.x;
            })
            .attr("y1", function (E) {
              return E.source.y;
            })
            .attr("x2", function (E) {
              return E.target.x;
            })
            .attr("y2", function (E) {
              return E.target.y;
            }),
          h.attr("transform", function (E) {
            return "translate(" + E.x + "," + E.y + ")";
          }),
          p
            .attr("x1", (E) => E.source.x)
            .attr("y1", (E) => E.source.y)
            .attr("x2", (E) => E.target.x)
            .attr("y2", (E) => E.target.y),
          g
            .attr("x", (E) => (E.source.x + E.target.x) / 2)
            .attr("y", (E) => (E.source.y + E.target.y) / 2 - 10),
          Ar("g.links line").classed("selecting", (E) => E.selecting),
          Ar("g.nodes g").classed("start", (E) => E.startNode),
          Ar("g.nodes g").classed("found", (E) => E.targetNode),
          Ar("g.nodes g").classed("deadEnd", (E) => E.deadEnd),
          Ar("g.nodes g").classed("activated", (E) => E.active),
          Ar("g.links line").classed("selected", (E) => E.selected);
      }),
      {
        destroy: () => {
          S.stop();
        },
        nodes: () => w.node(),
      }
    );
  },
  q2 = () => X2;
var m0 = { exports: {} },
  g0 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $o = le.exports;
function Z2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var J2 = typeof Object.is == "function" ? Object.is : Z2,
  eC = $o.useSyncExternalStore,
  tC = $o.useRef,
  nC = $o.useEffect,
  rC = $o.useMemo,
  iC = $o.useDebugValue;
g0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = tC(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = rC(
    function () {
      function u(m) {
        if (!s) {
          if (((s = !0), (f = m), (m = r(m)), i !== void 0 && l.hasValue)) {
            var S = l.value;
            if (i(S, m)) return (d = S);
          }
          return (d = m);
        }
        if (((S = d), J2(f, m))) return S;
        var w = r(m);
        return i !== void 0 && i(S, w) ? S : ((f = m), (d = w));
      }
      var s = !1,
        f,
        d,
        c = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        c === null
          ? void 0
          : function () {
              return u(c());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = eC(e, o[0], o[1]);
  return (
    nC(
      function () {
        (l.hasValue = !0), (l.value = a);
      },
      [a]
    ),
    iC(a),
    a
  );
};
(function (e) {
  e.exports = g0;
})(m0);
var Ct = "default" in io ? dr : io,
  Ih = Symbol.for("react-redux-context"),
  zh = typeof globalThis < "u" ? globalThis : {};
function oC() {
  var e;
  if (!Ct.createContext) return {};
  const t = (e = zh[Ih]) != null ? e : (zh[Ih] = new Map());
  let n = t.get(Ct.createContext);
  return n || ((n = Ct.createContext(null)), t.set(Ct.createContext, n)), n;
}
var Zn = oC(),
  lC = () => {
    throw new Error("uSES not initialized!");
  };
function Ef(e = Zn) {
  return function () {
    return Ct.useContext(e);
  };
}
var v0 = Ef(),
  y0 = lC,
  aC = (e) => {
    y0 = e;
  },
  uC = (e, t) => e === t;
function sC(e = Zn) {
  const t = e === Zn ? v0 : Ef(e),
    n = (r, i = {}) => {
      const { equalityFn: o = uC, devModeChecks: l = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: a,
          subscription: u,
          getServerState: s,
          stabilityCheck: f,
          identityFunctionCheck: d,
        } = t();
      Ct.useRef(!0);
      const c = Ct.useCallback(
          {
            [r.name](S) {
              return r(S);
            },
          }[r.name],
          [r, f, l.stabilityCheck]
        ),
        m = y0(u.addNestedSub, a.getState, s || a.getState, c, o);
      return Ct.useDebugValue(m), m;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Cf = sC();
function cC(e) {
  e();
}
function fC() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      cC(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Lh = { notify() {}, get: () => [] };
function dC(e, t) {
  let n,
    r = Lh,
    i = 0,
    o = !1;
  function l(w) {
    f();
    const C = r.subscribe(w);
    let p = !1;
    return () => {
      p || ((p = !0), C(), d());
    };
  }
  function a() {
    r.notify();
  }
  function u() {
    S.onStateChange && S.onStateChange();
  }
  function s() {
    return o;
  }
  function f() {
    i++, n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = fC()));
  }
  function d() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Lh));
  }
  function c() {
    o || ((o = !0), f());
  }
  function m() {
    o && ((o = !1), d());
  }
  const S = {
    addNestedSub: l,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
    isSubscribed: s,
    trySubscribe: c,
    tryUnsubscribe: m,
    getListeners: () => r,
  };
  return S;
}
var hC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  pC = hC ? Ct.useLayoutEffect : Ct.useEffect;
function mC({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once",
}) {
  const l = Ct.useMemo(() => {
      const s = dC(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o,
      };
    }, [e, r, i, o]),
    a = Ct.useMemo(() => e.getState(), [e]);
  pC(() => {
    const { subscription: s } = l;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      a !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [l, a]);
  const u = t || Zn;
  return Ct.createElement(u.Provider, { value: l }, n);
}
var gC = mC;
function w0(e = Zn) {
  const t = e === Zn ? v0 : Ef(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var vC = w0();
function yC(e = Zn) {
  const t = e === Zn ? vC : w0(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var wC = yC();
aC(m0.exports.useSyncExternalStoreWithSelector);
const _C = ({
  nodesAndLinks: e,
  graphType: t,
  manual: n,
  setManual: r,
  noOfNodesAndLinks: i,
  setNoOfNodesAndLinks: o,
}) => {
  const l = le.exports.useRef(null);
  le.exports.useState(!1);
  const { showGrpahs: a } = Cf((u) => u.astar);
  return (
    le.exports.useEffect(() => {
      l.current &&
        a &&
        G2(l.current, e.links, e.nodes, i, o, {
          color: "#808080",
          radius: 20,
          graphType: t ? "directed" : "undirected",
        });
    }, [e]),
    console.log(e, "nodesAndLinks"),
    console.log(l.current, "containerRef.current"),
    ce(ni, {
      children: [
        q("div", {
          style: { padding: "0.5rem" },
          children: q("h1", {
            style: { textAlign: "center", fontSize: "2rem" },
          }),
        }),
        q("div", { ref: l, className: "h-full", id: "graphContainer" }),
      ],
    })
  );
};
function gl(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var xC = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/ (function (e, t) {
  (function (n) {
    e.exports = n();
  })(function () {
    return (function n(r, i, o) {
      function l(s, f) {
        if (!i[s]) {
          if (!r[s]) {
            var d = typeof gl == "function" && gl;
            if (!f && d) return d(s, !0);
            if (a) return a(s, !0);
            var c = new Error("Cannot find module '" + s + "'");
            throw ((c.code = "MODULE_NOT_FOUND"), c);
          }
          var m = (i[s] = { exports: {} });
          r[s][0].call(
            m.exports,
            function (S) {
              var w = r[s][1][S];
              return l(w || S);
            },
            m,
            m.exports,
            n,
            r,
            i,
            o
          );
        }
        return i[s].exports;
      }
      for (var a = typeof gl == "function" && gl, u = 0; u < o.length; u++)
        l(o[u]);
      return l;
    })(
      {
        1: [
          function (n, r, i) {
            (function (o) {
              var l = o.MutationObserver || o.WebKitMutationObserver,
                a;
              if (l) {
                var u = 0,
                  s = new l(S),
                  f = o.document.createTextNode("");
                s.observe(f, { characterData: !0 }),
                  (a = function () {
                    f.data = u = ++u % 2;
                  });
              } else if (!o.setImmediate && typeof o.MessageChannel < "u") {
                var d = new o.MessageChannel();
                (d.port1.onmessage = S),
                  (a = function () {
                    d.port2.postMessage(0);
                  });
              } else
                "document" in o &&
                "onreadystatechange" in o.document.createElement("script")
                  ? (a = function () {
                      var C = o.document.createElement("script");
                      (C.onreadystatechange = function () {
                        S(),
                          (C.onreadystatechange = null),
                          C.parentNode.removeChild(C),
                          (C = null);
                      }),
                        o.document.documentElement.appendChild(C);
                    })
                  : (a = function () {
                      setTimeout(S, 0);
                    });
              var c,
                m = [];
              function S() {
                c = !0;
                for (var C, p, g = m.length; g; ) {
                  for (p = m, m = [], C = -1; ++C < g; ) p[C]();
                  g = m.length;
                }
                c = !1;
              }
              r.exports = w;
              function w(C) {
                m.push(C) === 1 && !c && a();
              }
            }).call(
              this,
              typeof Ho < "u"
                ? Ho
                : typeof self < "u"
                ? self
                : typeof window < "u"
                ? window
                : {}
            );
          },
          {},
        ],
        2: [
          function (n, r, i) {
            var o = n(1);
            function l() {}
            var a = {},
              u = ["REJECTED"],
              s = ["FULFILLED"],
              f = ["PENDING"];
            r.exports = d;
            function d(x) {
              if (typeof x != "function")
                throw new TypeError("resolver must be a function");
              (this.state = f),
                (this.queue = []),
                (this.outcome = void 0),
                x !== l && w(this, x);
            }
            (d.prototype.catch = function (x) {
              return this.then(null, x);
            }),
              (d.prototype.then = function (x, M) {
                if (
                  (typeof x != "function" && this.state === s) ||
                  (typeof M != "function" && this.state === u)
                )
                  return this;
                var E = new this.constructor(l);
                if (this.state !== f) {
                  var O = this.state === s ? x : M;
                  m(E, O, this.outcome);
                } else this.queue.push(new c(E, x, M));
                return E;
              });
            function c(x, M, E) {
              (this.promise = x),
                typeof M == "function" &&
                  ((this.onFulfilled = M),
                  (this.callFulfilled = this.otherCallFulfilled)),
                typeof E == "function" &&
                  ((this.onRejected = E),
                  (this.callRejected = this.otherCallRejected));
            }
            (c.prototype.callFulfilled = function (x) {
              a.resolve(this.promise, x);
            }),
              (c.prototype.otherCallFulfilled = function (x) {
                m(this.promise, this.onFulfilled, x);
              }),
              (c.prototype.callRejected = function (x) {
                a.reject(this.promise, x);
              }),
              (c.prototype.otherCallRejected = function (x) {
                m(this.promise, this.onRejected, x);
              });
            function m(x, M, E) {
              o(function () {
                var O;
                try {
                  O = M(E);
                } catch (L) {
                  return a.reject(x, L);
                }
                O === x
                  ? a.reject(
                      x,
                      new TypeError("Cannot resolve promise with itself")
                    )
                  : a.resolve(x, O);
              });
            }
            (a.resolve = function (x, M) {
              var E = C(S, M);
              if (E.status === "error") return a.reject(x, E.value);
              var O = E.value;
              if (O) w(x, O);
              else {
                (x.state = s), (x.outcome = M);
                for (var L = -1, z = x.queue.length; ++L < z; )
                  x.queue[L].callFulfilled(M);
              }
              return x;
            }),
              (a.reject = function (x, M) {
                (x.state = u), (x.outcome = M);
                for (var E = -1, O = x.queue.length; ++E < O; )
                  x.queue[E].callRejected(M);
                return x;
              });
            function S(x) {
              var M = x && x.then;
              if (
                x &&
                (typeof x == "object" || typeof x == "function") &&
                typeof M == "function"
              )
                return function () {
                  M.apply(x, arguments);
                };
            }
            function w(x, M) {
              var E = !1;
              function O(ie) {
                E || ((E = !0), a.reject(x, ie));
              }
              function L(ie) {
                E || ((E = !0), a.resolve(x, ie));
              }
              function z() {
                M(L, O);
              }
              var j = C(z);
              j.status === "error" && O(j.value);
            }
            function C(x, M) {
              var E = {};
              try {
                (E.value = x(M)), (E.status = "success");
              } catch (O) {
                (E.status = "error"), (E.value = O);
              }
              return E;
            }
            d.resolve = p;
            function p(x) {
              return x instanceof this ? x : a.resolve(new this(l), x);
            }
            d.reject = g;
            function g(x) {
              var M = new this(l);
              return a.reject(M, x);
            }
            d.all = h;
            function h(x) {
              var M = this;
              if (Object.prototype.toString.call(x) !== "[object Array]")
                return this.reject(new TypeError("must be an array"));
              var E = x.length,
                O = !1;
              if (!E) return this.resolve([]);
              for (
                var L = new Array(E), z = 0, j = -1, ie = new this(l);
                ++j < E;

              )
                ue(x[j], j);
              return ie;
              function ue(R, G) {
                M.resolve(R).then(b, function (U) {
                  O || ((O = !0), a.reject(ie, U));
                });
                function b(U) {
                  (L[G] = U), ++z === E && !O && ((O = !0), a.resolve(ie, L));
                }
              }
            }
            d.race = y;
            function y(x) {
              var M = this;
              if (Object.prototype.toString.call(x) !== "[object Array]")
                return this.reject(new TypeError("must be an array"));
              var E = x.length,
                O = !1;
              if (!E) return this.resolve([]);
              for (var L = -1, z = new this(l); ++L < E; ) j(x[L]);
              return z;
              function j(ie) {
                M.resolve(ie).then(
                  function (ue) {
                    O || ((O = !0), a.resolve(z, ue));
                  },
                  function (ue) {
                    O || ((O = !0), a.reject(z, ue));
                  }
                );
              }
            }
          },
          { 1: 1 },
        ],
        3: [
          function (n, r, i) {
            (function (o) {
              typeof o.Promise != "function" && (o.Promise = n(2));
            }).call(
              this,
              typeof Ho < "u"
                ? Ho
                : typeof self < "u"
                ? self
                : typeof window < "u"
                ? window
                : {}
            );
          },
          { 2: 2 },
        ],
        4: [
          function (n, r, i) {
            var o =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (v) {
                    return typeof v;
                  }
                : function (v) {
                    return v &&
                      typeof Symbol == "function" &&
                      v.constructor === Symbol &&
                      v !== Symbol.prototype
                      ? "symbol"
                      : typeof v;
                  };
            function l(v, N) {
              if (!(v instanceof N))
                throw new TypeError("Cannot call a class as a function");
            }
            function a() {
              try {
                if (typeof indexedDB < "u") return indexedDB;
                if (typeof webkitIndexedDB < "u") return webkitIndexedDB;
                if (typeof mozIndexedDB < "u") return mozIndexedDB;
                if (typeof OIndexedDB < "u") return OIndexedDB;
                if (typeof msIndexedDB < "u") return msIndexedDB;
              } catch {
                return;
              }
            }
            var u = a();
            function s() {
              try {
                if (!u || !u.open) return !1;
                var v =
                    typeof openDatabase < "u" &&
                    /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
                    !/Chrome/.test(navigator.userAgent) &&
                    !/BlackBerry/.test(navigator.platform),
                  N =
                    typeof fetch == "function" &&
                    fetch.toString().indexOf("[native code") !== -1;
                return (
                  (!v || N) &&
                  typeof indexedDB < "u" &&
                  typeof IDBKeyRange < "u"
                );
              } catch {
                return !1;
              }
            }
            function f(v, N) {
              (v = v || []), (N = N || {});
              try {
                return new Blob(v, N);
              } catch (k) {
                if (k.name !== "TypeError") throw k;
                for (
                  var _ =
                      typeof BlobBuilder < "u"
                        ? BlobBuilder
                        : typeof MSBlobBuilder < "u"
                        ? MSBlobBuilder
                        : typeof MozBlobBuilder < "u"
                        ? MozBlobBuilder
                        : WebKitBlobBuilder,
                    P = new _(),
                    T = 0;
                  T < v.length;
                  T += 1
                )
                  P.append(v[T]);
                return P.getBlob(N.type);
              }
            }
            typeof Promise > "u" && n(3);
            var d = Promise;
            function c(v, N) {
              N &&
                v.then(
                  function (_) {
                    N(null, _);
                  },
                  function (_) {
                    N(_);
                  }
                );
            }
            function m(v, N, _) {
              typeof N == "function" && v.then(N),
                typeof _ == "function" && v.catch(_);
            }
            function S(v) {
              return (
                typeof v != "string" &&
                  (console.warn(v + " used as a key, but it is not a string."),
                  (v = String(v))),
                v
              );
            }
            function w() {
              if (
                arguments.length &&
                typeof arguments[arguments.length - 1] == "function"
              )
                return arguments[arguments.length - 1];
            }
            var C = "local-forage-detect-blob-support",
              p = void 0,
              g = {},
              h = Object.prototype.toString,
              y = "readonly",
              x = "readwrite";
            function M(v) {
              for (
                var N = v.length,
                  _ = new ArrayBuffer(N),
                  P = new Uint8Array(_),
                  T = 0;
                T < N;
                T++
              )
                P[T] = v.charCodeAt(T);
              return _;
            }
            function E(v) {
              return new d(function (N) {
                var _ = v.transaction(C, x),
                  P = f([""]);
                _.objectStore(C).put(P, "key"),
                  (_.onabort = function (T) {
                    T.preventDefault(), T.stopPropagation(), N(!1);
                  }),
                  (_.oncomplete = function () {
                    var T = navigator.userAgent.match(/Chrome\/(\d+)/),
                      k = navigator.userAgent.match(/Edge\//);
                    N(k || !T || parseInt(T[1], 10) >= 43);
                  });
              }).catch(function () {
                return !1;
              });
            }
            function O(v) {
              return typeof p == "boolean"
                ? d.resolve(p)
                : E(v).then(function (N) {
                    return (p = N), p;
                  });
            }
            function L(v) {
              var N = g[v.name],
                _ = {};
              (_.promise = new d(function (P, T) {
                (_.resolve = P), (_.reject = T);
              })),
                N.deferredOperations.push(_),
                N.dbReady
                  ? (N.dbReady = N.dbReady.then(function () {
                      return _.promise;
                    }))
                  : (N.dbReady = _.promise);
            }
            function z(v) {
              var N = g[v.name],
                _ = N.deferredOperations.pop();
              if (_) return _.resolve(), _.promise;
            }
            function j(v, N) {
              var _ = g[v.name],
                P = _.deferredOperations.pop();
              if (P) return P.reject(N), P.promise;
            }
            function ie(v, N) {
              return new d(function (_, P) {
                if (((g[v.name] = g[v.name] || re()), v.db))
                  if (N) L(v), v.db.close();
                  else return _(v.db);
                var T = [v.name];
                N && T.push(v.version);
                var k = u.open.apply(u, T);
                N &&
                  (k.onupgradeneeded = function (D) {
                    var $ = k.result;
                    try {
                      $.createObjectStore(v.storeName),
                        D.oldVersion <= 1 && $.createObjectStore(C);
                    } catch (W) {
                      if (W.name === "ConstraintError")
                        console.warn(
                          'The database "' +
                            v.name +
                            '" has been upgraded from version ' +
                            D.oldVersion +
                            " to version " +
                            D.newVersion +
                            ', but the storage "' +
                            v.storeName +
                            '" already exists.'
                        );
                      else throw W;
                    }
                  }),
                  (k.onerror = function (D) {
                    D.preventDefault(), P(k.error);
                  }),
                  (k.onsuccess = function () {
                    var D = k.result;
                    (D.onversionchange = function ($) {
                      $.target.close();
                    }),
                      _(D),
                      z(v);
                  });
              });
            }
            function ue(v) {
              return ie(v, !1);
            }
            function R(v) {
              return ie(v, !0);
            }
            function G(v, N) {
              if (!v.db) return !0;
              var _ = !v.db.objectStoreNames.contains(v.storeName),
                P = v.version < v.db.version,
                T = v.version > v.db.version;
              if (
                (P &&
                  (v.version !== N &&
                    console.warn(
                      'The database "' +
                        v.name +
                        `" can't be downgraded from version ` +
                        v.db.version +
                        " to version " +
                        v.version +
                        "."
                    ),
                  (v.version = v.db.version)),
                T || _)
              ) {
                if (_) {
                  var k = v.db.version + 1;
                  k > v.version && (v.version = k);
                }
                return !0;
              }
              return !1;
            }
            function b(v) {
              return new d(function (N, _) {
                var P = new FileReader();
                (P.onerror = _),
                  (P.onloadend = function (T) {
                    var k = btoa(T.target.result || "");
                    N({
                      __local_forage_encoded_blob: !0,
                      data: k,
                      type: v.type,
                    });
                  }),
                  P.readAsBinaryString(v);
              });
            }
            function U(v) {
              var N = M(atob(v.data));
              return f([N], { type: v.type });
            }
            function A(v) {
              return v && v.__local_forage_encoded_blob;
            }
            function F(v) {
              var N = this,
                _ = N._initReady().then(function () {
                  var P = g[N._dbInfo.name];
                  if (P && P.dbReady) return P.dbReady;
                });
              return m(_, v, v), _;
            }
            function Y(v) {
              L(v);
              for (var N = g[v.name], _ = N.forages, P = 0; P < _.length; P++) {
                var T = _[P];
                T._dbInfo.db && (T._dbInfo.db.close(), (T._dbInfo.db = null));
              }
              return (
                (v.db = null),
                ue(v)
                  .then(function (k) {
                    return (v.db = k), G(v) ? R(v) : k;
                  })
                  .then(function (k) {
                    v.db = N.db = k;
                    for (var D = 0; D < _.length; D++) _[D]._dbInfo.db = k;
                  })
                  .catch(function (k) {
                    throw (j(v, k), k);
                  })
              );
            }
            function J(v, N, _, P) {
              P === void 0 && (P = 1);
              try {
                var T = v.db.transaction(v.storeName, N);
                _(null, T);
              } catch (k) {
                if (
                  P > 0 &&
                  (!v.db ||
                    k.name === "InvalidStateError" ||
                    k.name === "NotFoundError")
                )
                  return d
                    .resolve()
                    .then(function () {
                      if (
                        !v.db ||
                        (k.name === "NotFoundError" &&
                          !v.db.objectStoreNames.contains(v.storeName) &&
                          v.version <= v.db.version)
                      )
                        return v.db && (v.version = v.db.version + 1), R(v);
                    })
                    .then(function () {
                      return Y(v).then(function () {
                        J(v, N, _, P - 1);
                      });
                    })
                    .catch(_);
                _(k);
              }
            }
            function re() {
              return {
                forages: [],
                db: null,
                dbReady: null,
                deferredOperations: [],
              };
            }
            function De(v) {
              var N = this,
                _ = { db: null };
              if (v) for (var P in v) _[P] = v[P];
              var T = g[_.name];
              T || ((T = re()), (g[_.name] = T)),
                T.forages.push(N),
                N._initReady || ((N._initReady = N.ready), (N.ready = F));
              var k = [];
              function D() {
                return d.resolve();
              }
              for (var $ = 0; $ < T.forages.length; $++) {
                var W = T.forages[$];
                W !== N && k.push(W._initReady().catch(D));
              }
              var H = T.forages.slice(0);
              return d
                .all(k)
                .then(function () {
                  return (_.db = T.db), ue(_);
                })
                .then(function (K) {
                  return (_.db = K), G(_, N._defaultConfig.version) ? R(_) : K;
                })
                .then(function (K) {
                  (_.db = T.db = K), (N._dbInfo = _);
                  for (var ee = 0; ee < H.length; ee++) {
                    var se = H[ee];
                    se !== N &&
                      ((se._dbInfo.db = _.db),
                      (se._dbInfo.version = _.version));
                  }
                });
            }
            function me(v, N) {
              var _ = this;
              v = S(v);
              var P = new d(function (T, k) {
                _.ready()
                  .then(function () {
                    J(_._dbInfo, y, function (D, $) {
                      if (D) return k(D);
                      try {
                        var W = $.objectStore(_._dbInfo.storeName),
                          H = W.get(v);
                        (H.onsuccess = function () {
                          var K = H.result;
                          K === void 0 && (K = null), A(K) && (K = U(K)), T(K);
                        }),
                          (H.onerror = function () {
                            k(H.error);
                          });
                      } catch (K) {
                        k(K);
                      }
                    });
                  })
                  .catch(k);
              });
              return c(P, N), P;
            }
            function Ne(v, N) {
              var _ = this,
                P = new d(function (T, k) {
                  _.ready()
                    .then(function () {
                      J(_._dbInfo, y, function (D, $) {
                        if (D) return k(D);
                        try {
                          var W = $.objectStore(_._dbInfo.storeName),
                            H = W.openCursor(),
                            K = 1;
                          (H.onsuccess = function () {
                            var ee = H.result;
                            if (ee) {
                              var se = ee.value;
                              A(se) && (se = U(se));
                              var ve = v(se, ee.key, K++);
                              ve !== void 0 ? T(ve) : ee.continue();
                            } else T();
                          }),
                            (H.onerror = function () {
                              k(H.error);
                            });
                        } catch (ee) {
                          k(ee);
                        }
                      });
                    })
                    .catch(k);
                });
              return c(P, N), P;
            }
            function Q(v, N, _) {
              var P = this;
              v = S(v);
              var T = new d(function (k, D) {
                var $;
                P.ready()
                  .then(function () {
                    return (
                      ($ = P._dbInfo),
                      h.call(N) === "[object Blob]"
                        ? O($.db).then(function (W) {
                            return W ? N : b(N);
                          })
                        : N
                    );
                  })
                  .then(function (W) {
                    J(P._dbInfo, x, function (H, K) {
                      if (H) return D(H);
                      try {
                        var ee = K.objectStore(P._dbInfo.storeName);
                        W === null && (W = void 0);
                        var se = ee.put(W, v);
                        (K.oncomplete = function () {
                          W === void 0 && (W = null), k(W);
                        }),
                          (K.onabort = K.onerror =
                            function () {
                              var ve = se.error
                                ? se.error
                                : se.transaction.error;
                              D(ve);
                            });
                      } catch (ve) {
                        D(ve);
                      }
                    });
                  })
                  .catch(D);
              });
              return c(T, _), T;
            }
            function te(v, N) {
              var _ = this;
              v = S(v);
              var P = new d(function (T, k) {
                _.ready()
                  .then(function () {
                    J(_._dbInfo, x, function (D, $) {
                      if (D) return k(D);
                      try {
                        var W = $.objectStore(_._dbInfo.storeName),
                          H = W.delete(v);
                        ($.oncomplete = function () {
                          T();
                        }),
                          ($.onerror = function () {
                            k(H.error);
                          }),
                          ($.onabort = function () {
                            var K = H.error ? H.error : H.transaction.error;
                            k(K);
                          });
                      } catch (K) {
                        k(K);
                      }
                    });
                  })
                  .catch(k);
              });
              return c(P, N), P;
            }
            function Se(v) {
              var N = this,
                _ = new d(function (P, T) {
                  N.ready()
                    .then(function () {
                      J(N._dbInfo, x, function (k, D) {
                        if (k) return T(k);
                        try {
                          var $ = D.objectStore(N._dbInfo.storeName),
                            W = $.clear();
                          (D.oncomplete = function () {
                            P();
                          }),
                            (D.onabort = D.onerror =
                              function () {
                                var H = W.error ? W.error : W.transaction.error;
                                T(H);
                              });
                        } catch (H) {
                          T(H);
                        }
                      });
                    })
                    .catch(T);
                });
              return c(_, v), _;
            }
            function Ie(v) {
              var N = this,
                _ = new d(function (P, T) {
                  N.ready()
                    .then(function () {
                      J(N._dbInfo, y, function (k, D) {
                        if (k) return T(k);
                        try {
                          var $ = D.objectStore(N._dbInfo.storeName),
                            W = $.count();
                          (W.onsuccess = function () {
                            P(W.result);
                          }),
                            (W.onerror = function () {
                              T(W.error);
                            });
                        } catch (H) {
                          T(H);
                        }
                      });
                    })
                    .catch(T);
                });
              return c(_, v), _;
            }
            function ft(v, N) {
              var _ = this,
                P = new d(function (T, k) {
                  if (v < 0) {
                    T(null);
                    return;
                  }
                  _.ready()
                    .then(function () {
                      J(_._dbInfo, y, function (D, $) {
                        if (D) return k(D);
                        try {
                          var W = $.objectStore(_._dbInfo.storeName),
                            H = !1,
                            K = W.openKeyCursor();
                          (K.onsuccess = function () {
                            var ee = K.result;
                            if (!ee) {
                              T(null);
                              return;
                            }
                            v === 0 || H
                              ? T(ee.key)
                              : ((H = !0), ee.advance(v));
                          }),
                            (K.onerror = function () {
                              k(K.error);
                            });
                        } catch (ee) {
                          k(ee);
                        }
                      });
                    })
                    .catch(k);
                });
              return c(P, N), P;
            }
            function ke(v) {
              var N = this,
                _ = new d(function (P, T) {
                  N.ready()
                    .then(function () {
                      J(N._dbInfo, y, function (k, D) {
                        if (k) return T(k);
                        try {
                          var $ = D.objectStore(N._dbInfo.storeName),
                            W = $.openKeyCursor(),
                            H = [];
                          (W.onsuccess = function () {
                            var K = W.result;
                            if (!K) {
                              P(H);
                              return;
                            }
                            H.push(K.key), K.continue();
                          }),
                            (W.onerror = function () {
                              T(W.error);
                            });
                        } catch (K) {
                          T(K);
                        }
                      });
                    })
                    .catch(T);
                });
              return c(_, v), _;
            }
            function _i(v, N) {
              N = w.apply(this, arguments);
              var _ = this.config();
              (v = (typeof v != "function" && v) || {}),
                v.name ||
                  ((v.name = v.name || _.name),
                  (v.storeName = v.storeName || _.storeName));
              var P = this,
                T;
              if (!v.name) T = d.reject("Invalid arguments");
              else {
                var k = v.name === _.name && P._dbInfo.db,
                  D = k
                    ? d.resolve(P._dbInfo.db)
                    : ue(v).then(function ($) {
                        var W = g[v.name],
                          H = W.forages;
                        W.db = $;
                        for (var K = 0; K < H.length; K++) H[K]._dbInfo.db = $;
                        return $;
                      });
                v.storeName
                  ? (T = D.then(function ($) {
                      if (!!$.objectStoreNames.contains(v.storeName)) {
                        var W = $.version + 1;
                        L(v);
                        var H = g[v.name],
                          K = H.forages;
                        $.close();
                        for (var ee = 0; ee < K.length; ee++) {
                          var se = K[ee];
                          (se._dbInfo.db = null), (se._dbInfo.version = W);
                        }
                        var ve = new d(function (ye, $e) {
                          var ze = u.open(v.name, W);
                          (ze.onerror = function (bt) {
                            var Ci = ze.result;
                            Ci.close(), $e(bt);
                          }),
                            (ze.onupgradeneeded = function () {
                              var bt = ze.result;
                              bt.deleteObjectStore(v.storeName);
                            }),
                            (ze.onsuccess = function () {
                              var bt = ze.result;
                              bt.close(), ye(bt);
                            });
                        });
                        return ve
                          .then(function (ye) {
                            H.db = ye;
                            for (var $e = 0; $e < K.length; $e++) {
                              var ze = K[$e];
                              (ze._dbInfo.db = ye), z(ze._dbInfo);
                            }
                          })
                          .catch(function (ye) {
                            throw (
                              ((j(v, ye) || d.resolve()).catch(function () {}),
                              ye)
                            );
                          });
                      }
                    }))
                  : (T = D.then(function ($) {
                      L(v);
                      var W = g[v.name],
                        H = W.forages;
                      $.close();
                      for (var K = 0; K < H.length; K++) {
                        var ee = H[K];
                        ee._dbInfo.db = null;
                      }
                      var se = new d(function (ve, ye) {
                        var $e = u.deleteDatabase(v.name);
                        ($e.onerror = function () {
                          var ze = $e.result;
                          ze && ze.close(), ye($e.error);
                        }),
                          ($e.onblocked = function () {
                            console.warn(
                              'dropInstance blocked for database "' +
                                v.name +
                                '" until all open connections are closed'
                            );
                          }),
                          ($e.onsuccess = function () {
                            var ze = $e.result;
                            ze && ze.close(), ve(ze);
                          });
                      });
                      return se
                        .then(function (ve) {
                          W.db = ve;
                          for (var ye = 0; ye < H.length; ye++) {
                            var $e = H[ye];
                            z($e._dbInfo);
                          }
                        })
                        .catch(function (ve) {
                          throw (
                            ((j(v, ve) || d.resolve()).catch(function () {}),
                            ve)
                          );
                        });
                    }));
              }
              return c(T, N), T;
            }
            var jo = {
              _driver: "asyncStorage",
              _initStorage: De,
              _support: s(),
              iterate: Ne,
              getItem: me,
              setItem: Q,
              removeItem: te,
              clear: Se,
              length: Ie,
              key: ft,
              keys: ke,
              dropInstance: _i,
            };
            function xi() {
              return typeof openDatabase == "function";
            }
            var tn =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              Za = "~~local_forage_type~",
              Si = /^~~local_forage_type~([^~]+)~/,
              I = "__lfsc__:",
              B = I.length,
              X = "arbf",
              ne = "blob",
              oe = "si08",
              ae = "ui08",
              he = "uic8",
              de = "si16",
              ge = "si32",
              _e = "ur16",
              Ee = "ui32",
              Ye = "fl32",
              fn = "fl64",
              Ot = B + X.length,
              dn = Object.prototype.toString;
            function Rr(v) {
              var N = v.length * 0.75,
                _ = v.length,
                P,
                T = 0,
                k,
                D,
                $,
                W;
              v[v.length - 1] === "=" && (N--, v[v.length - 2] === "=" && N--);
              var H = new ArrayBuffer(N),
                K = new Uint8Array(H);
              for (P = 0; P < _; P += 4)
                (k = tn.indexOf(v[P])),
                  (D = tn.indexOf(v[P + 1])),
                  ($ = tn.indexOf(v[P + 2])),
                  (W = tn.indexOf(v[P + 3])),
                  (K[T++] = (k << 2) | (D >> 4)),
                  (K[T++] = ((D & 15) << 4) | ($ >> 2)),
                  (K[T++] = (($ & 3) << 6) | (W & 63));
              return H;
            }
            function On(v) {
              var N = new Uint8Array(v),
                _ = "",
                P;
              for (P = 0; P < N.length; P += 3)
                (_ += tn[N[P] >> 2]),
                  (_ += tn[((N[P] & 3) << 4) | (N[P + 1] >> 4)]),
                  (_ += tn[((N[P + 1] & 15) << 2) | (N[P + 2] >> 6)]),
                  (_ += tn[N[P + 2] & 63]);
              return (
                N.length % 3 === 2
                  ? (_ = _.substring(0, _.length - 1) + "=")
                  : N.length % 3 === 1 &&
                    (_ = _.substring(0, _.length - 2) + "=="),
                _
              );
            }
            function bn(v, N) {
              var _ = "";
              if (
                (v && (_ = dn.call(v)),
                v &&
                  (_ === "[object ArrayBuffer]" ||
                    (v.buffer && dn.call(v.buffer) === "[object ArrayBuffer]")))
              ) {
                var P,
                  T = I;
                v instanceof ArrayBuffer
                  ? ((P = v), (T += X))
                  : ((P = v.buffer),
                    _ === "[object Int8Array]"
                      ? (T += oe)
                      : _ === "[object Uint8Array]"
                      ? (T += ae)
                      : _ === "[object Uint8ClampedArray]"
                      ? (T += he)
                      : _ === "[object Int16Array]"
                      ? (T += de)
                      : _ === "[object Uint16Array]"
                      ? (T += _e)
                      : _ === "[object Int32Array]"
                      ? (T += ge)
                      : _ === "[object Uint32Array]"
                      ? (T += Ee)
                      : _ === "[object Float32Array]"
                      ? (T += Ye)
                      : _ === "[object Float64Array]"
                      ? (T += fn)
                      : N(new Error("Failed to get type for BinaryArray"))),
                  N(T + On(P));
              } else if (_ === "[object Blob]") {
                var k = new FileReader();
                (k.onload = function () {
                  var D = Za + v.type + "~" + On(this.result);
                  N(I + ne + D);
                }),
                  k.readAsArrayBuffer(v);
              } else
                try {
                  N(JSON.stringify(v));
                } catch (D) {
                  console.error(
                    "Couldn't convert value into a JSON string: ",
                    v
                  ),
                    N(null, D);
                }
            }
            function Je(v) {
              if (v.substring(0, B) !== I) return JSON.parse(v);
              var N = v.substring(Ot),
                _ = v.substring(B, Ot),
                P;
              if (_ === ne && Si.test(N)) {
                var T = N.match(Si);
                (P = T[1]), (N = N.substring(T[0].length));
              }
              var k = Rr(N);
              switch (_) {
                case X:
                  return k;
                case ne:
                  return f([k], { type: P });
                case oe:
                  return new Int8Array(k);
                case ae:
                  return new Uint8Array(k);
                case he:
                  return new Uint8ClampedArray(k);
                case de:
                  return new Int16Array(k);
                case _e:
                  return new Uint16Array(k);
                case ge:
                  return new Int32Array(k);
                case Ee:
                  return new Uint32Array(k);
                case Ye:
                  return new Float32Array(k);
                case fn:
                  return new Float64Array(k);
                default:
                  throw new Error("Unkown type: " + _);
              }
            }
            var Ve = {
              serialize: bn,
              deserialize: Je,
              stringToBuffer: Rr,
              bufferToString: On,
            };
            function hn(v, N, _, P) {
              v.executeSql(
                "CREATE TABLE IF NOT EXISTS " +
                  N.storeName +
                  " (id INTEGER PRIMARY KEY, key unique, value)",
                [],
                _,
                P
              );
            }
            function Mr(v) {
              var N = this,
                _ = { db: null };
              if (v)
                for (var P in v)
                  _[P] = typeof v[P] != "string" ? v[P].toString() : v[P];
              var T = new d(function (k, D) {
                try {
                  _.db = openDatabase(
                    _.name,
                    String(_.version),
                    _.description,
                    _.size
                  );
                } catch ($) {
                  return D($);
                }
                _.db.transaction(function ($) {
                  hn(
                    $,
                    _,
                    function () {
                      (N._dbInfo = _), k();
                    },
                    function (W, H) {
                      D(H);
                    }
                  );
                }, D);
              });
              return (_.serializer = Ve), T;
            }
            function jt(v, N, _, P, T, k) {
              v.executeSql(
                _,
                P,
                T,
                function (D, $) {
                  $.code === $.SYNTAX_ERR
                    ? D.executeSql(
                        "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                        [N.storeName],
                        function (W, H) {
                          H.rows.length
                            ? k(W, $)
                            : hn(
                                W,
                                N,
                                function () {
                                  W.executeSql(_, P, T, k);
                                },
                                k
                              );
                        },
                        k
                      )
                    : k(D, $);
                },
                k
              );
            }
            function Uo(v, N) {
              var _ = this;
              v = S(v);
              var P = new d(function (T, k) {
                _.ready()
                  .then(function () {
                    var D = _._dbInfo;
                    D.db.transaction(function ($) {
                      jt(
                        $,
                        D,
                        "SELECT * FROM " +
                          D.storeName +
                          " WHERE key = ? LIMIT 1",
                        [v],
                        function (W, H) {
                          var K = H.rows.length ? H.rows.item(0).value : null;
                          K && (K = D.serializer.deserialize(K)), T(K);
                        },
                        function (W, H) {
                          k(H);
                        }
                      );
                    });
                  })
                  .catch(k);
              });
              return c(P, N), P;
            }
            function Ja(v, N) {
              var _ = this,
                P = new d(function (T, k) {
                  _.ready()
                    .then(function () {
                      var D = _._dbInfo;
                      D.db.transaction(function ($) {
                        jt(
                          $,
                          D,
                          "SELECT * FROM " + D.storeName,
                          [],
                          function (W, H) {
                            for (
                              var K = H.rows, ee = K.length, se = 0;
                              se < ee;
                              se++
                            ) {
                              var ve = K.item(se),
                                ye = ve.value;
                              if (
                                (ye && (ye = D.serializer.deserialize(ye)),
                                (ye = v(ye, ve.key, se + 1)),
                                ye !== void 0)
                              ) {
                                T(ye);
                                return;
                              }
                            }
                            T();
                          },
                          function (W, H) {
                            k(H);
                          }
                        );
                      });
                    })
                    .catch(k);
                });
              return c(P, N), P;
            }
            function Bo(v, N, _, P) {
              var T = this;
              v = S(v);
              var k = new d(function (D, $) {
                T.ready()
                  .then(function () {
                    N === void 0 && (N = null);
                    var W = N,
                      H = T._dbInfo;
                    H.serializer.serialize(N, function (K, ee) {
                      ee
                        ? $(ee)
                        : H.db.transaction(
                            function (se) {
                              jt(
                                se,
                                H,
                                "INSERT OR REPLACE INTO " +
                                  H.storeName +
                                  " (key, value) VALUES (?, ?)",
                                [v, K],
                                function () {
                                  D(W);
                                },
                                function (ve, ye) {
                                  $(ye);
                                }
                              );
                            },
                            function (se) {
                              if (se.code === se.QUOTA_ERR) {
                                if (P > 0) {
                                  D(Bo.apply(T, [v, W, _, P - 1]));
                                  return;
                                }
                                $(se);
                              }
                            }
                          );
                    });
                  })
                  .catch($);
              });
              return c(k, _), k;
            }
            function Ut(v, N, _) {
              return Bo.apply(this, [v, N, _, 1]);
            }
            function pn(v, N) {
              var _ = this;
              v = S(v);
              var P = new d(function (T, k) {
                _.ready()
                  .then(function () {
                    var D = _._dbInfo;
                    D.db.transaction(function ($) {
                      jt(
                        $,
                        D,
                        "DELETE FROM " + D.storeName + " WHERE key = ?",
                        [v],
                        function () {
                          T();
                        },
                        function (W, H) {
                          k(H);
                        }
                      );
                    });
                  })
                  .catch(k);
              });
              return c(P, N), P;
            }
            function Vo(v) {
              var N = this,
                _ = new d(function (P, T) {
                  N.ready()
                    .then(function () {
                      var k = N._dbInfo;
                      k.db.transaction(function (D) {
                        jt(
                          D,
                          k,
                          "DELETE FROM " + k.storeName,
                          [],
                          function () {
                            P();
                          },
                          function ($, W) {
                            T(W);
                          }
                        );
                      });
                    })
                    .catch(T);
                });
              return c(_, v), _;
            }
            function eu(v) {
              var N = this,
                _ = new d(function (P, T) {
                  N.ready()
                    .then(function () {
                      var k = N._dbInfo;
                      k.db.transaction(function (D) {
                        jt(
                          D,
                          k,
                          "SELECT COUNT(key) as c FROM " + k.storeName,
                          [],
                          function ($, W) {
                            var H = W.rows.item(0).c;
                            P(H);
                          },
                          function ($, W) {
                            T(W);
                          }
                        );
                      });
                    })
                    .catch(T);
                });
              return c(_, v), _;
            }
            function G0(v, N) {
              var _ = this,
                P = new d(function (T, k) {
                  _.ready()
                    .then(function () {
                      var D = _._dbInfo;
                      D.db.transaction(function ($) {
                        jt(
                          $,
                          D,
                          "SELECT key FROM " +
                            D.storeName +
                            " WHERE id = ? LIMIT 1",
                          [v + 1],
                          function (W, H) {
                            var K = H.rows.length ? H.rows.item(0).key : null;
                            T(K);
                          },
                          function (W, H) {
                            k(H);
                          }
                        );
                      });
                    })
                    .catch(k);
                });
              return c(P, N), P;
            }
            function q0(v) {
              var N = this,
                _ = new d(function (P, T) {
                  N.ready()
                    .then(function () {
                      var k = N._dbInfo;
                      k.db.transaction(function (D) {
                        jt(
                          D,
                          k,
                          "SELECT key FROM " + k.storeName,
                          [],
                          function ($, W) {
                            for (var H = [], K = 0; K < W.rows.length; K++)
                              H.push(W.rows.item(K).key);
                            P(H);
                          },
                          function ($, W) {
                            T(W);
                          }
                        );
                      });
                    })
                    .catch(T);
                });
              return c(_, v), _;
            }
            function Z0(v) {
              return new d(function (N, _) {
                v.transaction(
                  function (P) {
                    P.executeSql(
                      "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                      [],
                      function (T, k) {
                        for (var D = [], $ = 0; $ < k.rows.length; $++)
                          D.push(k.rows.item($).name);
                        N({ db: v, storeNames: D });
                      },
                      function (T, k) {
                        _(k);
                      }
                    );
                  },
                  function (P) {
                    _(P);
                  }
                );
              });
            }
            function J0(v, N) {
              N = w.apply(this, arguments);
              var _ = this.config();
              (v = (typeof v != "function" && v) || {}),
                v.name ||
                  ((v.name = v.name || _.name),
                  (v.storeName = v.storeName || _.storeName));
              var P = this,
                T;
              return (
                v.name
                  ? (T = new d(function (k) {
                      var D;
                      v.name === _.name
                        ? (D = P._dbInfo.db)
                        : (D = openDatabase(v.name, "", "", 0)),
                        v.storeName
                          ? k({ db: D, storeNames: [v.storeName] })
                          : k(Z0(D));
                    }).then(function (k) {
                      return new d(function (D, $) {
                        k.db.transaction(
                          function (W) {
                            function H(ve) {
                              return new d(function (ye, $e) {
                                W.executeSql(
                                  "DROP TABLE IF EXISTS " + ve,
                                  [],
                                  function () {
                                    ye();
                                  },
                                  function (ze, bt) {
                                    $e(bt);
                                  }
                                );
                              });
                            }
                            for (
                              var K = [], ee = 0, se = k.storeNames.length;
                              ee < se;
                              ee++
                            )
                              K.push(H(k.storeNames[ee]));
                            d.all(K)
                              .then(function () {
                                D();
                              })
                              .catch(function (ve) {
                                $(ve);
                              });
                          },
                          function (W) {
                            $(W);
                          }
                        );
                      });
                    }))
                  : (T = d.reject("Invalid arguments")),
                c(T, N),
                T
              );
            }
            var ev = {
              _driver: "webSQLStorage",
              _initStorage: Mr,
              _support: xi(),
              iterate: Ja,
              getItem: Uo,
              setItem: Ut,
              removeItem: pn,
              clear: Vo,
              length: eu,
              key: G0,
              keys: q0,
              dropInstance: J0,
            };
            function tv() {
              try {
                return (
                  typeof localStorage < "u" &&
                  "setItem" in localStorage &&
                  !!localStorage.setItem
                );
              } catch {
                return !1;
              }
            }
            function Af(v, N) {
              var _ = v.name + "/";
              return v.storeName !== N.storeName && (_ += v.storeName + "/"), _;
            }
            function nv() {
              var v = "_localforage_support_test";
              try {
                return (
                  localStorage.setItem(v, !0), localStorage.removeItem(v), !1
                );
              } catch {
                return !0;
              }
            }
            function rv() {
              return !nv() || localStorage.length > 0;
            }
            function iv(v) {
              var N = this,
                _ = {};
              if (v) for (var P in v) _[P] = v[P];
              return (
                (_.keyPrefix = Af(v, N._defaultConfig)),
                rv()
                  ? ((N._dbInfo = _), (_.serializer = Ve), d.resolve())
                  : d.reject()
              );
            }
            function ov(v) {
              var N = this,
                _ = N.ready().then(function () {
                  for (
                    var P = N._dbInfo.keyPrefix, T = localStorage.length - 1;
                    T >= 0;
                    T--
                  ) {
                    var k = localStorage.key(T);
                    k.indexOf(P) === 0 && localStorage.removeItem(k);
                  }
                });
              return c(_, v), _;
            }
            function lv(v, N) {
              var _ = this;
              v = S(v);
              var P = _.ready().then(function () {
                var T = _._dbInfo,
                  k = localStorage.getItem(T.keyPrefix + v);
                return k && (k = T.serializer.deserialize(k)), k;
              });
              return c(P, N), P;
            }
            function av(v, N) {
              var _ = this,
                P = _.ready().then(function () {
                  for (
                    var T = _._dbInfo,
                      k = T.keyPrefix,
                      D = k.length,
                      $ = localStorage.length,
                      W = 1,
                      H = 0;
                    H < $;
                    H++
                  ) {
                    var K = localStorage.key(H);
                    if (K.indexOf(k) === 0) {
                      var ee = localStorage.getItem(K);
                      if (
                        (ee && (ee = T.serializer.deserialize(ee)),
                        (ee = v(ee, K.substring(D), W++)),
                        ee !== void 0)
                      )
                        return ee;
                    }
                  }
                });
              return c(P, N), P;
            }
            function uv(v, N) {
              var _ = this,
                P = _.ready().then(function () {
                  var T = _._dbInfo,
                    k;
                  try {
                    k = localStorage.key(v);
                  } catch {
                    k = null;
                  }
                  return k && (k = k.substring(T.keyPrefix.length)), k;
                });
              return c(P, N), P;
            }
            function sv(v) {
              var N = this,
                _ = N.ready().then(function () {
                  for (
                    var P = N._dbInfo, T = localStorage.length, k = [], D = 0;
                    D < T;
                    D++
                  ) {
                    var $ = localStorage.key(D);
                    $.indexOf(P.keyPrefix) === 0 &&
                      k.push($.substring(P.keyPrefix.length));
                  }
                  return k;
                });
              return c(_, v), _;
            }
            function cv(v) {
              var N = this,
                _ = N.keys().then(function (P) {
                  return P.length;
                });
              return c(_, v), _;
            }
            function fv(v, N) {
              var _ = this;
              v = S(v);
              var P = _.ready().then(function () {
                var T = _._dbInfo;
                localStorage.removeItem(T.keyPrefix + v);
              });
              return c(P, N), P;
            }
            function dv(v, N, _) {
              var P = this;
              v = S(v);
              var T = P.ready().then(function () {
                N === void 0 && (N = null);
                var k = N;
                return new d(function (D, $) {
                  var W = P._dbInfo;
                  W.serializer.serialize(N, function (H, K) {
                    if (K) $(K);
                    else
                      try {
                        localStorage.setItem(W.keyPrefix + v, H), D(k);
                      } catch (ee) {
                        (ee.name === "QuotaExceededError" ||
                          ee.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                          $(ee),
                          $(ee);
                      }
                  });
                });
              });
              return c(T, _), T;
            }
            function hv(v, N) {
              if (
                ((N = w.apply(this, arguments)),
                (v = (typeof v != "function" && v) || {}),
                !v.name)
              ) {
                var _ = this.config();
                (v.name = v.name || _.name),
                  (v.storeName = v.storeName || _.storeName);
              }
              var P = this,
                T;
              return (
                v.name
                  ? (T = new d(function (k) {
                      v.storeName
                        ? k(Af(v, P._defaultConfig))
                        : k(v.name + "/");
                    }).then(function (k) {
                      for (var D = localStorage.length - 1; D >= 0; D--) {
                        var $ = localStorage.key(D);
                        $.indexOf(k) === 0 && localStorage.removeItem($);
                      }
                    }))
                  : (T = d.reject("Invalid arguments")),
                c(T, N),
                T
              );
            }
            var pv = {
                _driver: "localStorageWrapper",
                _initStorage: iv,
                _support: tv(),
                iterate: av,
                getItem: lv,
                setItem: dv,
                removeItem: fv,
                clear: ov,
                length: cv,
                key: uv,
                keys: sv,
                dropInstance: hv,
              },
              mv = function (N, _) {
                return (
                  N === _ ||
                  (typeof N == "number" &&
                    typeof _ == "number" &&
                    isNaN(N) &&
                    isNaN(_))
                );
              },
              gv = function (N, _) {
                for (var P = N.length, T = 0; T < P; ) {
                  if (mv(N[T], _)) return !0;
                  T++;
                }
                return !1;
              },
              Df =
                Array.isArray ||
                function (v) {
                  return Object.prototype.toString.call(v) === "[object Array]";
                },
              Ei = {},
              If = {},
              Or = { INDEXEDDB: jo, WEBSQL: ev, LOCALSTORAGE: pv },
              vv = [
                Or.INDEXEDDB._driver,
                Or.WEBSQL._driver,
                Or.LOCALSTORAGE._driver,
              ],
              Wo = ["dropInstance"],
              tu = [
                "clear",
                "getItem",
                "iterate",
                "key",
                "keys",
                "length",
                "removeItem",
                "setItem",
              ].concat(Wo),
              yv = {
                description: "",
                driver: vv.slice(),
                name: "localforage",
                size: 4980736,
                storeName: "keyvaluepairs",
                version: 1,
              };
            function wv(v, N) {
              v[N] = function () {
                var _ = arguments;
                return v.ready().then(function () {
                  return v[N].apply(v, _);
                });
              };
            }
            function nu() {
              for (var v = 1; v < arguments.length; v++) {
                var N = arguments[v];
                if (N)
                  for (var _ in N)
                    N.hasOwnProperty(_) &&
                      (Df(N[_])
                        ? (arguments[0][_] = N[_].slice())
                        : (arguments[0][_] = N[_]));
              }
              return arguments[0];
            }
            var _v = (function () {
                function v(N) {
                  l(this, v);
                  for (var _ in Or)
                    if (Or.hasOwnProperty(_)) {
                      var P = Or[_],
                        T = P._driver;
                      (this[_] = T), Ei[T] || this.defineDriver(P);
                    }
                  (this._defaultConfig = nu({}, yv)),
                    (this._config = nu({}, this._defaultConfig, N)),
                    (this._driverSet = null),
                    (this._initDriver = null),
                    (this._ready = !1),
                    (this._dbInfo = null),
                    this._wrapLibraryMethodsWithReady(),
                    this.setDriver(this._config.driver).catch(function () {});
                }
                return (
                  (v.prototype.config = function (_) {
                    if ((typeof _ > "u" ? "undefined" : o(_)) === "object") {
                      if (this._ready)
                        return new Error(
                          "Can't call config() after localforage has been used."
                        );
                      for (var P in _) {
                        if (
                          (P === "storeName" &&
                            (_[P] = _[P].replace(/\W/g, "_")),
                          P === "version" && typeof _[P] != "number")
                        )
                          return new Error(
                            "Database version must be a number."
                          );
                        this._config[P] = _[P];
                      }
                      return "driver" in _ && _.driver
                        ? this.setDriver(this._config.driver)
                        : !0;
                    } else
                      return typeof _ == "string"
                        ? this._config[_]
                        : this._config;
                  }),
                  (v.prototype.defineDriver = function (_, P, T) {
                    var k = new d(function (D, $) {
                      try {
                        var W = _._driver,
                          H = new Error(
                            "Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"
                          );
                        if (!_._driver) {
                          $(H);
                          return;
                        }
                        for (
                          var K = tu.concat("_initStorage"),
                            ee = 0,
                            se = K.length;
                          ee < se;
                          ee++
                        ) {
                          var ve = K[ee],
                            ye = !gv(Wo, ve);
                          if ((ye || _[ve]) && typeof _[ve] != "function") {
                            $(H);
                            return;
                          }
                        }
                        var $e = function () {
                          for (
                            var Ci = function (Ev) {
                                return function () {
                                  var Cv = new Error(
                                      "Method " +
                                        Ev +
                                        " is not implemented by the current driver"
                                    ),
                                    zf = d.reject(Cv);
                                  return (
                                    c(zf, arguments[arguments.length - 1]), zf
                                  );
                                };
                              },
                              ru = 0,
                              Sv = Wo.length;
                            ru < Sv;
                            ru++
                          ) {
                            var iu = Wo[ru];
                            _[iu] || (_[iu] = Ci(iu));
                          }
                        };
                        $e();
                        var ze = function (Ci) {
                          Ei[W] &&
                            console.info("Redefining LocalForage driver: " + W),
                            (Ei[W] = _),
                            (If[W] = Ci),
                            D();
                        };
                        "_support" in _
                          ? _._support && typeof _._support == "function"
                            ? _._support().then(ze, $)
                            : ze(!!_._support)
                          : ze(!0);
                      } catch (bt) {
                        $(bt);
                      }
                    });
                    return m(k, P, T), k;
                  }),
                  (v.prototype.driver = function () {
                    return this._driver || null;
                  }),
                  (v.prototype.getDriver = function (_, P, T) {
                    var k = Ei[_]
                      ? d.resolve(Ei[_])
                      : d.reject(new Error("Driver not found."));
                    return m(k, P, T), k;
                  }),
                  (v.prototype.getSerializer = function (_) {
                    var P = d.resolve(Ve);
                    return m(P, _), P;
                  }),
                  (v.prototype.ready = function (_) {
                    var P = this,
                      T = P._driverSet.then(function () {
                        return (
                          P._ready === null && (P._ready = P._initDriver()),
                          P._ready
                        );
                      });
                    return m(T, _, _), T;
                  }),
                  (v.prototype.setDriver = function (_, P, T) {
                    var k = this;
                    Df(_) || (_ = [_]);
                    var D = this._getSupportedDrivers(_);
                    function $() {
                      k._config.driver = k.driver();
                    }
                    function W(ee) {
                      return (
                        k._extend(ee),
                        $(),
                        (k._ready = k._initStorage(k._config)),
                        k._ready
                      );
                    }
                    function H(ee) {
                      return function () {
                        var se = 0;
                        function ve() {
                          for (; se < ee.length; ) {
                            var ye = ee[se];
                            return (
                              se++,
                              (k._dbInfo = null),
                              (k._ready = null),
                              k.getDriver(ye).then(W).catch(ve)
                            );
                          }
                          $();
                          var $e = new Error(
                            "No available storage method found."
                          );
                          return (k._driverSet = d.reject($e)), k._driverSet;
                        }
                        return ve();
                      };
                    }
                    var K =
                      this._driverSet !== null
                        ? this._driverSet.catch(function () {
                            return d.resolve();
                          })
                        : d.resolve();
                    return (
                      (this._driverSet = K.then(function () {
                        var ee = D[0];
                        return (
                          (k._dbInfo = null),
                          (k._ready = null),
                          k.getDriver(ee).then(function (se) {
                            (k._driver = se._driver),
                              $(),
                              k._wrapLibraryMethodsWithReady(),
                              (k._initDriver = H(D));
                          })
                        );
                      }).catch(function () {
                        $();
                        var ee = new Error(
                          "No available storage method found."
                        );
                        return (k._driverSet = d.reject(ee)), k._driverSet;
                      })),
                      m(this._driverSet, P, T),
                      this._driverSet
                    );
                  }),
                  (v.prototype.supports = function (_) {
                    return !!If[_];
                  }),
                  (v.prototype._extend = function (_) {
                    nu(this, _);
                  }),
                  (v.prototype._getSupportedDrivers = function (_) {
                    for (var P = [], T = 0, k = _.length; T < k; T++) {
                      var D = _[T];
                      this.supports(D) && P.push(D);
                    }
                    return P;
                  }),
                  (v.prototype._wrapLibraryMethodsWithReady = function () {
                    for (var _ = 0, P = tu.length; _ < P; _++) wv(this, tu[_]);
                  }),
                  (v.prototype.createInstance = function (_) {
                    return new v(_);
                  }),
                  v
                );
              })(),
              xv = new _v();
            r.exports = xv;
          },
          { 3: 3 },
        ],
      },
      {},
      [4]
    )(4);
  });
})(xC);
function Qe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var SC = (() =>
    (typeof Symbol == "function" && Symbol.observable) || "@@observable")(),
  Fh = SC,
  $u = () => Math.random().toString(36).substring(7).split("").join("."),
  EC = {
    INIT: `@@redux/INIT${$u()}`,
    REPLACE: `@@redux/REPLACE${$u()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${$u()}`,
  },
  wa = EC;
function Nf(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function _0(e, t, n) {
  if (typeof e != "function") throw new Error(Qe(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Qe(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Qe(1));
    return n(_0)(e, t);
  }
  let r = e,
    i = t,
    o = new Map(),
    l = o,
    a = 0,
    u = !1;
  function s() {
    l === o &&
      ((l = new Map()),
      o.forEach((C, p) => {
        l.set(p, C);
      }));
  }
  function f() {
    if (u) throw new Error(Qe(3));
    return i;
  }
  function d(C) {
    if (typeof C != "function") throw new Error(Qe(4));
    if (u) throw new Error(Qe(5));
    let p = !0;
    s();
    const g = a++;
    return (
      l.set(g, C),
      function () {
        if (!!p) {
          if (u) throw new Error(Qe(6));
          (p = !1), s(), l.delete(g), (o = null);
        }
      }
    );
  }
  function c(C) {
    if (!Nf(C)) throw new Error(Qe(7));
    if (typeof C.type > "u") throw new Error(Qe(8));
    if (typeof C.type != "string") throw new Error(Qe(17));
    if (u) throw new Error(Qe(9));
    try {
      (u = !0), (i = r(i, C));
    } finally {
      u = !1;
    }
    return (
      (o = l).forEach((g) => {
        g();
      }),
      C
    );
  }
  function m(C) {
    if (typeof C != "function") throw new Error(Qe(10));
    (r = C), c({ type: wa.REPLACE });
  }
  function S() {
    const C = d;
    return {
      subscribe(p) {
        if (typeof p != "object" || p === null) throw new Error(Qe(11));
        function g() {
          const y = p;
          y.next && y.next(f());
        }
        return g(), { unsubscribe: C(g) };
      },
      [Fh]() {
        return this;
      },
    };
  }
  return (
    c({ type: wa.INIT }),
    { dispatch: c, subscribe: d, getState: f, replaceReducer: m, [Fh]: S }
  );
}
function CC(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: wa.INIT }) > "u") throw new Error(Qe(12));
    if (typeof n(void 0, { type: wa.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Qe(13));
  });
}
function NC(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  const r = Object.keys(n);
  let i;
  try {
    CC(n);
  } catch (o) {
    i = o;
  }
  return function (l = {}, a) {
    if (i) throw i;
    let u = !1;
    const s = {};
    for (let f = 0; f < r.length; f++) {
      const d = r[f],
        c = n[d],
        m = l[d],
        S = c(m, a);
      if (typeof S > "u") throw (a && a.type, new Error(Qe(14)));
      (s[d] = S), (u = u || S !== m);
    }
    return (u = u || r.length !== Object.keys(l).length), u ? s : l;
  };
}
function _a(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function kC(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(Qe(15));
    };
    const l = { getState: i.getState, dispatch: (u, ...s) => o(u, ...s) },
      a = e.map((u) => u(l));
    return (o = _a(...a)(i.dispatch)), { ...i, dispatch: o };
  };
}
function PC(e) {
  return Nf(e) && "type" in e && typeof e.type == "string";
}
var TC = Object.defineProperty,
  $h = Object.getOwnPropertySymbols,
  RC = Object.prototype.hasOwnProperty,
  MC = Object.prototype.propertyIsEnumerable,
  jh = (e, t, n) =>
    t in e
      ? TC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  OC = (e, t) => {
    for (var n in t || (t = {})) RC.call(t, n) && jh(e, n, t[n]);
    if ($h) for (var n of $h(t)) MC.call(t, n) && jh(e, n, t[n]);
    return e;
  },
  x0 = Symbol.for("immer-nothing"),
  Uh = Symbol.for("immer-draftable"),
  Pt = Symbol.for("immer-state");
function Gt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var mi = Object.getPrototypeOf;
function Jn(e) {
  return !!e && !!e[Pt];
}
function Rn(e) {
  var t;
  return e
    ? S0(e) ||
        Array.isArray(e) ||
        !!e[Uh] ||
        !!((t = e.constructor) != null && t[Uh]) ||
        Ya(e) ||
        Qa(e)
    : !1;
}
var bC = Object.prototype.constructor.toString();
function S0(e) {
  if (!e || typeof e != "object") return !1;
  const t = mi(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === bC;
}
function To(e, t) {
  Ha(e) === 0
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Ha(e) {
  const t = e[Pt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ya(e) ? 2 : Qa(e) ? 3 : 0;
}
function rc(e, t) {
  return Ha(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function E0(e, t, n) {
  const r = Ha(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function AC(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ya(e) {
  return e instanceof Map;
}
function Qa(e) {
  return e instanceof Set;
}
function or(e) {
  return e.copy_ || e.base_;
}
function ic(e, t) {
  if (Ya(e)) return new Map(e);
  if (Qa(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && S0(e))
    return mi(e) ? OC({}, e) : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Pt];
  let r = Reflect.ownKeys(n);
  for (let i = 0; i < r.length; i++) {
    const o = r[i],
      l = n[o];
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) &&
        (n[o] = {
          configurable: !0,
          writable: !0,
          enumerable: l.enumerable,
          value: e[o],
        });
  }
  return Object.create(mi(e), n);
}
function kf(e, t = !1) {
  return (
    Ka(e) ||
      Jn(e) ||
      !Rn(e) ||
      (Ha(e) > 1 && (e.set = e.add = e.clear = e.delete = DC),
      Object.freeze(e),
      t && To(e, (n, r) => kf(r, !0))),
    e
  );
}
function DC() {
  Gt(2);
}
function Ka(e) {
  return Object.isFrozen(e);
}
var IC = {};
function Cr(e) {
  const t = IC[e];
  return t || Gt(0, e), t;
}
var Ro;
function C0() {
  return Ro;
}
function zC(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Bh(e, t) {
  t &&
    (Cr("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function oc(e) {
  lc(e), e.drafts_.forEach(LC), (e.drafts_ = null);
}
function lc(e) {
  e === Ro && (Ro = e.parent_);
}
function Vh(e) {
  return (Ro = zC(Ro, e));
}
function LC(e) {
  const t = e[Pt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Wh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Pt].modified_ && (oc(t), Gt(4)),
        Rn(e) && ((e = xa(t, e)), t.parent_ || Sa(t, e)),
        t.patches_ &&
          Cr("Patches").generateReplacementPatches_(
            n[Pt].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = xa(t, n, [])),
    oc(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== x0 ? e : void 0
  );
}
function xa(e, t, n) {
  if (Ka(t)) return t;
  const r = t[Pt];
  if (!r) return To(t, (i, o) => Hh(e, r, t, i, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Sa(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i,
      l = !1;
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (l = !0)),
      To(o, (a, u) => Hh(e, r, i, a, u, n, l)),
      Sa(e, i, !1),
      n &&
        e.patches_ &&
        Cr("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Hh(e, t, n, r, i, o, l) {
  if (Jn(i)) {
    const a =
        o && t && t.type_ !== 3 && !rc(t.assigned_, r) ? o.concat(r) : void 0,
      u = xa(e, i, a);
    if ((E0(n, r, u), Jn(u))) e.canAutoFreeze_ = !1;
    else return;
  } else l && n.add(i);
  if (Rn(i) && !Ka(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    xa(e, i), (!t || !t.scope_.parent_) && Sa(e, i);
  }
}
function Sa(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && kf(t, n);
}
function FC(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : C0(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    o = Pf;
  n && ((i = [r]), (o = Mo));
  const { revoke: l, proxy: a } = Proxy.revocable(i, o);
  return (r.draft_ = a), (r.revoke_ = l), a;
}
var Pf = {
    get(e, t) {
      if (t === Pt) return e;
      const n = or(e);
      if (!rc(n, t)) return $C(e, n, t);
      const r = n[t];
      return e.finalized_ || !Rn(r)
        ? r
        : r === ju(e.base_, t)
        ? (Uu(e), (e.copy_[t] = uc(r, e)))
        : r;
    },
    has(e, t) {
      return t in or(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(or(e));
    },
    set(e, t, n) {
      const r = N0(or(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = ju(or(e), t),
          o = i == null ? void 0 : i[Pt];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (AC(n, i) && (n !== void 0 || rc(e.base_, t))) return !0;
        Uu(e), ac(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        ju(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Uu(e), ac(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = or(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Gt(11);
    },
    getPrototypeOf(e) {
      return mi(e.base_);
    },
    setPrototypeOf() {
      Gt(12);
    },
  },
  Mo = {};
To(Pf, (e, t) => {
  Mo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Mo.deleteProperty = function (e, t) {
  return Mo.set.call(this, e, t, void 0);
};
Mo.set = function (e, t, n) {
  return Pf.set.call(this, e[0], t, n, e[0]);
};
function ju(e, t) {
  const n = e[Pt];
  return (n ? or(n) : e)[t];
}
function $C(e, t, n) {
  var r;
  const i = N0(t, n);
  return i
    ? "value" in i
      ? i.value
      : (r = i.get) == null
      ? void 0
      : r.call(e.draft_)
    : void 0;
}
function N0(e, t) {
  if (!(t in e)) return;
  let n = mi(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = mi(n);
  }
}
function ac(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ac(e.parent_));
}
function Uu(e) {
  e.copy_ || (e.copy_ = ic(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var jC = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const l = this;
          return function (u = o, ...s) {
            return l.produce(u, (f) => n.call(this, f, ...s));
          };
        }
        typeof n != "function" && Gt(6),
          r !== void 0 && typeof r != "function" && Gt(7);
        let i;
        if (Rn(t)) {
          const o = Vh(this),
            l = uc(t, void 0);
          let a = !0;
          try {
            (i = n(l)), (a = !1);
          } finally {
            a ? oc(o) : lc(o);
          }
          return Bh(o, r), Wh(i, o);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === x0 && (i = void 0),
            this.autoFreeze_ && kf(i, !0),
            r)
          ) {
            const o = [],
              l = [];
            Cr("Patches").generateReplacementPatches_(t, i, o, l), r(o, l);
          }
          return i;
        } else Gt(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (l, ...a) => this.produceWithPatches(l, (u) => t(u, ...a));
        let r, i;
        return [
          this.produce(t, n, (l, a) => {
            (r = l), (i = a);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Rn(e) || Gt(8), Jn(e) && (e = k0(e));
    const t = Vh(this),
      n = uc(e, void 0);
    return (n[Pt].isManual_ = !0), lc(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Pt];
    (!n || !n.isManual_) && Gt(9);
    const { scope_: r } = n;
    return Bh(r, t), Wh(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Cr("Patches").applyPatches_;
    return Jn(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function uc(e, t) {
  const n = Ya(e)
    ? Cr("MapSet").proxyMap_(e, t)
    : Qa(e)
    ? Cr("MapSet").proxySet_(e, t)
    : FC(e, t);
  return (t ? t.scope_ : C0()).drafts_.push(n), n;
}
function k0(e) {
  return Jn(e) || Gt(10, e), P0(e);
}
function P0(e) {
  if (!Rn(e) || Ka(e)) return e;
  const t = e[Pt];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = ic(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = ic(e, !0);
  return (
    To(n, (r, i) => {
      E0(n, r, P0(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Tt = new jC(),
  T0 = Tt.produce;
Tt.produceWithPatches.bind(Tt);
Tt.setAutoFreeze.bind(Tt);
Tt.setUseStrictShallowCopy.bind(Tt);
Tt.applyPatches.bind(Tt);
Tt.createDraft.bind(Tt);
Tt.finishDraft.bind(Tt);
var UC = Object.defineProperty,
  Yh = Object.getOwnPropertySymbols,
  BC = Object.prototype.hasOwnProperty,
  VC = Object.prototype.propertyIsEnumerable,
  Qh = (e, t, n) =>
    t in e
      ? UC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Kh = (e, t) => {
    for (var n in t || (t = {})) BC.call(t, n) && Qh(e, n, t[n]);
    if (Yh) for (var n of Yh(t)) VC.call(t, n) && Qh(e, n, t[n]);
    return e;
  };
function WC(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function HC(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function YC(
  e,
  t = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Xh = (e) => (Array.isArray(e) ? e : [e]);
function QC(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    YC(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function KC(e, t) {
  const n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var XC = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  GC = typeof WeakRef < "u" ? WeakRef : XC,
  qC = 0,
  Gh = 1;
function vl() {
  return { s: qC, v: void 0, o: null, p: null };
}
function Tf(e, t = {}) {
  let n = vl();
  const { resultEqualityCheck: r } = t;
  let i,
    o = 0;
  function l() {
    var a, u;
    let s = n;
    const { length: f } = arguments;
    for (let m = 0, S = f; m < S; m++) {
      const w = arguments[m];
      if (typeof w == "function" || (typeof w == "object" && w !== null)) {
        let C = s.o;
        C === null && (s.o = C = new WeakMap());
        const p = C.get(w);
        p === void 0 ? ((s = vl()), C.set(w, s)) : (s = p);
      } else {
        let C = s.p;
        C === null && (s.p = C = new Map());
        const p = C.get(w);
        p === void 0 ? ((s = vl()), C.set(w, s)) : (s = p);
      }
    }
    const d = s;
    let c;
    if (
      (s.s === Gh ? (c = s.v) : ((c = e.apply(null, arguments)), o++),
      (d.s = Gh),
      r)
    ) {
      const m =
        (u = (a = i == null ? void 0 : i.deref) == null ? void 0 : a.call(i)) !=
        null
          ? u
          : i;
      m != null && r(m, c) && ((c = m), o !== 0 && o--),
        (i =
          (typeof c == "object" && c !== null) || typeof c == "function"
            ? new GC(c)
            : c);
    }
    return (d.v = c), c;
  }
  return (
    (l.clearCache = () => {
      (n = vl()), l.resetResultsCount();
    }),
    (l.resultsCount = () => o),
    (l.resetResultsCount = () => {
      o = 0;
    }),
    l
  );
}
function R0(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        l = 0,
        a,
        u = {},
        s = i.pop();
      typeof s == "object" && ((u = s), (s = i.pop())),
        WC(
          s,
          `createSelector expects an output function after the inputs, but received: [${typeof s}]`
        );
      const f = Kh(Kh({}, n), u),
        {
          memoize: d,
          memoizeOptions: c = [],
          argsMemoize: m = Tf,
          argsMemoizeOptions: S = [],
          devModeChecks: w = {},
        } = f,
        C = Xh(c),
        p = Xh(S),
        g = QC(i),
        h = d(function () {
          return o++, s.apply(null, arguments);
        }, ...C),
        y = m(function () {
          l++;
          const M = KC(g, arguments);
          return (a = h.apply(null, M)), a;
        }, ...p);
      return Object.assign(y, {
        resultFunc: s,
        memoizedResultFunc: h,
        dependencies: g,
        dependencyRecomputations: () => l,
        resetDependencyRecomputations: () => {
          l = 0;
        },
        lastResult: () => a,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0;
        },
        memoize: d,
        argsMemoize: m,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var ZC = R0(Tf),
  JC = Object.assign(
    (e, t = ZC) => {
      HC(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const n = Object.keys(e),
        r = n.map((o) => e[o]);
      return t(r, (...o) => o.reduce((l, a, u) => ((l[n[u]] = a), l), {}));
    },
    { withTypes: () => JC }
  );
function M0(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : i(o);
}
var eN = M0(),
  tN = M0,
  nN = (...e) => {
    const t = R0(...e),
      n = Object.assign(
        (...r) => {
          const i = t(...r),
            o = (l, ...a) => i(Jn(l) ? k0(l) : l, ...a);
          return Object.assign(o, i), o;
        },
        { withTypes: () => n }
      );
    return n;
  };
nN(Tf);
var rN =
  typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == "object"
            ? _a
            : _a.apply(null, arguments);
      };
function gi(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(yt(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => PC(r) && r.type === e),
    n
  );
}
var O0 = class Hi extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Hi.prototype);
  }
  static get [Symbol.species]() {
    return Hi;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Hi(...t[0].concat(this))
      : new Hi(...t.concat(this));
  }
};
function qh(e) {
  return Rn(e) ? T0(e, () => {}) : e;
}
function Zh(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(yt(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function iN(e) {
  return typeof e == "boolean";
}
var oN = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t != null ? t : {};
      let l = new O0();
      return n && (iN(n) ? l.push(eN) : l.push(tN(n.extraArgument))), l;
    },
  lN = "RTK_autoBatch",
  b0 = (e) => (t) => {
    setTimeout(t, e);
  },
  aN =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : b0(10),
  uN =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        o = !1,
        l = !1;
      const a = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? aN
            : e.type === "callback"
            ? e.queueNotification
            : b0(e.timeout),
        s = () => {
          (l = !1), o && ((o = !1), a.forEach((f) => f()));
        };
      return Object.assign({}, r, {
        subscribe(f) {
          const d = () => i && f(),
            c = r.subscribe(d);
          return (
            a.add(f),
            () => {
              c(), a.delete(f);
            }
          );
        },
        dispatch(f) {
          var d;
          try {
            return (
              (i = !((d = f == null ? void 0 : f.meta) != null && d[lN])),
              (o = !i),
              o && (l || ((l = !0), u(s))),
              r.dispatch(f)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  sN = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n != null ? n : {};
      let i = new O0(e);
      return r && i.push(uN(typeof r == "object" ? r : void 0)), i;
    },
  cN = !0;
function fN(e) {
  const t = oN(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: l = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (Nf(n)) a = NC(n);
  else throw new Error(yt(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let s = _a;
  i && (s = rN({ trace: !cN, ...(typeof i == "object" && i) }));
  const f = kC(...u),
    d = sN(f);
  let c = typeof l == "function" ? l(d) : d();
  const m = s(...c);
  return _0(a, o, m);
}
function A0(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(o, l) {
      const a = typeof o == "string" ? o : o.type;
      if (!a) throw new Error(yt(28));
      if (a in t) throw new Error(yt(29));
      return (t[a] = l), i;
    },
    addMatcher(o, l) {
      return n.push({ matcher: o, reducer: l }), i;
    },
    addDefaultCase(o) {
      return (r = o), i;
    },
  };
  return e(i), [t, n, r];
}
function dN(e) {
  return typeof e == "function";
}
function hN(e, t) {
  let [n, r, i] = A0(t),
    o;
  if (dN(e)) o = () => qh(e());
  else {
    const a = qh(e);
    o = () => a;
  }
  function l(a = o(), u) {
    let s = [
      n[u.type],
      ...r.filter(({ matcher: f }) => f(u)).map(({ reducer: f }) => f),
    ];
    return (
      s.filter((f) => !!f).length === 0 && (s = [i]),
      s.reduce((f, d) => {
        if (d)
          if (Jn(f)) {
            const m = d(f, u);
            return m === void 0 ? f : m;
          } else {
            if (Rn(f)) return T0(f, (c) => d(c, u));
            {
              const c = d(f, u);
              if (c === void 0) {
                if (f === null) return f;
                throw new Error(yt(9));
              }
              return c;
            }
          }
        return f;
      }, a)
    );
  }
  return (l.getInitialState = o), l;
}
var pN = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  mN = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += pN[(Math.random() * 64) | 0];
    return t;
  },
  gN = Symbol.for("rtk-slice-createasyncthunk");
function vN(e, t) {
  return `${e}/${t}`;
}
function yN({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[gN];
  return function (i) {
    const { name: o, reducerPath: l = o } = i;
    if (!o) throw new Error(yt(11));
    typeof process < "u";
    const a =
        (typeof i.reducers == "function" ? i.reducers(xN()) : i.reducers) || {},
      u = Object.keys(a),
      s = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      f = {
        addCase(h, y) {
          const x = typeof h == "string" ? h : h.type;
          if (!x) throw new Error(yt(12));
          if (x in s.sliceCaseReducersByType) throw new Error(yt(13));
          return (s.sliceCaseReducersByType[x] = y), f;
        },
        addMatcher(h, y) {
          return s.sliceMatchers.push({ matcher: h, reducer: y }), f;
        },
        exposeAction(h, y) {
          return (s.actionCreators[h] = y), f;
        },
        exposeCaseReducer(h, y) {
          return (s.sliceCaseReducersByName[h] = y), f;
        },
      };
    u.forEach((h) => {
      const y = a[h],
        x = {
          reducerName: h,
          type: vN(o, h),
          createNotation: typeof i.reducers == "function",
        };
      EN(y) ? NN(x, y, f, t) : SN(x, y, f);
    });
    function d() {
      const [h = {}, y = [], x = void 0] =
          typeof i.extraReducers == "function"
            ? A0(i.extraReducers)
            : [i.extraReducers],
        M = { ...h, ...s.sliceCaseReducersByType };
      return hN(i.initialState, (E) => {
        for (let O in M) E.addCase(O, M[O]);
        for (let O of s.sliceMatchers) E.addMatcher(O.matcher, O.reducer);
        for (let O of y) E.addMatcher(O.matcher, O.reducer);
        x && E.addDefaultCase(x);
      });
    }
    const c = (h) => h,
      m = new Map();
    let S;
    function w(h, y) {
      return S || (S = d()), S(h, y);
    }
    function C() {
      return S || (S = d()), S.getInitialState();
    }
    function p(h, y = !1) {
      function x(E) {
        let O = E[h];
        return typeof O > "u" && y && (O = C()), O;
      }
      function M(E = c) {
        const O = Zh(m, y, { insert: () => new WeakMap() });
        return Zh(O, E, {
          insert: () => {
            var z;
            const L = {};
            for (const [j, ie] of Object.entries(
              (z = i.selectors) != null ? z : {}
            ))
              L[j] = wN(ie, E, C, y);
            return L;
          },
        });
      }
      return {
        reducerPath: h,
        getSelectors: M,
        get selectors() {
          return M(x);
        },
        selectSlice: x,
      };
    }
    const g = {
      name: o,
      reducer: w,
      actions: s.actionCreators,
      caseReducers: s.sliceCaseReducersByName,
      getInitialState: C,
      ...p(l),
      injectInto(h, { reducerPath: y, ...x } = {}) {
        const M = y != null ? y : l;
        return (
          h.inject({ reducerPath: M, reducer: w }, x), { ...g, ...p(M, !0) }
        );
      },
    };
    return g;
  };
}
function wN(e, t, n, r) {
  function i(o, ...l) {
    let a = t(o);
    return typeof a > "u" && r && (a = n()), e(a, ...l);
  }
  return (i.unwrapped = e), i;
}
var _N = yN();
function xN() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function SN({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, l;
  if ("reducer" in r) {
    if (n && !CN(r)) throw new Error(yt(17));
    (o = r.reducer), (l = r.prepare);
  } else o = r;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, l ? gi(e, l) : gi(e));
}
function EN(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function CN(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function NN({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(yt(18));
  const {
      payloadCreator: o,
      fulfilled: l,
      pending: a,
      rejected: u,
      settled: s,
      options: f,
    } = n,
    d = i(e, o, f);
  r.exposeAction(t, d),
    l && r.addCase(d.fulfilled, l),
    a && r.addCase(d.pending, a),
    u && r.addCase(d.rejected, u),
    s && r.addMatcher(d.settled, s),
    r.exposeCaseReducer(t, {
      fulfilled: l || yl,
      pending: a || yl,
      rejected: u || yl,
      settled: s || yl,
    });
}
function yl() {}
var kN = (e, t) => {
    if (typeof e != "function") throw new Error(yt(32));
  },
  Rf = "listenerMiddleware",
  PN = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: o } = e;
    if (t) i = gi(t).match;
    else if (n) (t = n.type), (i = n.match);
    else if (r) i = r;
    else if (!i) throw new Error(yt(21));
    return kN(o), { predicate: i, type: t, effect: o };
  },
  TN = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = PN(e);
      return {
        id: mN(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(yt(22));
        },
      };
    },
    { withTypes: () => TN }
  ),
  RN = Object.assign(gi(`${Rf}/add`), { withTypes: () => RN });
gi(`${Rf}/removeAll`);
var MN = Object.assign(gi(`${Rf}/remove`), { withTypes: () => MN });
function yt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const ON = {
    openListDetails: [],
    closeListDetails: [],
    startNode: "",
    goalNode: "",
    result: [],
    showGrpahs: !1,
    finalPathShow: !1,
  },
  D0 = _N({
    name: "astar",
    initialState: ON,
    reducers: {
      updateShowGraph: (e, t) => ({ ...e, showGrpahs: !0 }),
      UpdateOpenListDetails: (e, t) => (
        console.log(t.payload, "payload"),
        { ...e, openListDetails: [...t.payload] }
      ),
      UpdateCloseListDetails: (e, t) => ({
        ...e,
        closeListDetails: [...t.payload],
      }),
      updateStartAndEndNode: (e, t) => ({
        ...e,
        startNode: t.payload.startNode,
        goalNode: t.payload.goalNode,
      }),
      updateResult: (e, t) => (
        console.log(e.result, "result"),
        { ...e, result: [...e.result, t.payload] }
      ),
      updateFinalPath: (e, t) => (
        console.log(e.result, "result"), { ...e, finalPathShow: t.payload }
      ),
      onClear: (e, t) => ({
        ...e,
        openListDetails: [],
        closeListDetails: [],
        startNode: "",
        goalNode: "",
        result: [],
        showGrpahs: !1,
      }),
    },
  }),
  {
    updateFinalPath: bN,
    updateShowGraph: Bu,
    UpdateCloseListDetails: AN,
    UpdateOpenListDetails: DN,
    updateStartAndEndNode: IN,
    updateResult: zN,
    onClear: LN,
  } = D0.actions,
  FN = D0.reducer,
  $N = new CustomEvent("randomSearch"),
  I0 = [],
  jN = () => {
    (I0.length = 0), window.dispatchEvent($N);
  },
  Ea = [
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90,
  ],
  Li = function (e, t, n, r) {
    let i = [],
      o = [];
    for (let l = 0; l < e; l++) {
      const a = String.fromCharCode(Ea[Math.floor(Math.random() * Ea.length)]);
      if (i.find((u) => u.id === a)) {
        l--;
        continue;
      }
      i.push({ id: a, hOfN: Math.floor(Math.random() * 10) + 1 });
    }
    for (let l = 0; l < t; l++) {
      const a = i[Math.floor(Math.random() * i.length)].id,
        u = i[Math.floor(Math.random() * i.length)].id;
      if (
        a === u ||
        o.find(
          (d) =>
            (d.source === a && d.target === u) ||
            (d.source === u && d.target === a)
        )
      ) {
        l--;
        continue;
      }
      const s = Math.floor(Math.random() * 10) + 1,
        f = Math.floor(Math.random() * 10) + 1;
      o.push({ source: a, target: u, value: s, gOfN: f }),
        o.push({ source: u, target: a, value: s, gOfN: f });
    }
    return { nodes: i, links: o };
  },
  Jh = function (e, t, n, r) {
    let i = [],
      o = [];
    for (let l = 0; l < e; l++) {
      const a = String.fromCharCode(Ea[Math.floor(Math.random() * Ea.length)]);
      if (i.find((u) => u.id === a)) {
        l--;
        continue;
      }
      i.push({ id: a, hOfN: Math.floor(Math.random() * 0) + 0 });
    }
    for (let l = 0; l < t; l++) {
      const a = i[Math.floor(Math.random() * i.length)].id,
        u = i[Math.floor(Math.random() * i.length)].id;
      if (
        a === u ||
        o.find(
          (d) =>
            (d.source === a && d.target === u) ||
            (d.source === u && d.target === a)
        )
      ) {
        l--;
        continue;
      }
      const s = Math.floor(Math.random() * 10) + 1,
        f = Math.floor(Math.random() * 10) + 1;
      o.push({ source: a, target: u, value: s, gOfN: f }),
        o.push({ source: u, target: a, value: s, gOfN: f });
    }
    return { nodes: i, links: o };
  },
  UN = new Set(),
  sc = [],
  Vt = 1e3,
  BN = q2();
console.log(BN, "exportedValue from astarSearch");
async function VN(e, t, n, r, i) {
  return (
    console.log(e, t),
    e.map((o) => (o.active = !1)),
    t.map((o) => (o.selected = !1)),
    t.map((o) => (o.selecting = !1)),
    t.map((o) => (o.startNode = !1)),
    e.map((o) => (o.startNode = !1)),
    e.map((o) => (o.targetNode = !1)),
    jN(),
    i(IN({ startNode: n, goalNode: r })),
    (e.find((o) => o.id == n).startNode = !0),
    await new Promise((o) => setTimeout(o, Vt)),
    UN.clear(),
    (sc.length = 0),
    await WN(e, t, n, r, i)
  );
}
async function WN(e, t, n, r, i) {
  e.find((w) => w.id == n).active = !0;
  const o = await t.filter((w) => w.source.id == n);
  o.map((w) => (w.selecting = !1)),
    await new Promise((w) => setTimeout(w, Vt)),
    await new Promise((w) => setTimeout(w, Vt)),
    await new Promise((w) => setTimeout(w, Vt));
  let l = [],
    a = [],
    u = e.find((w) => w.id == n).id;
  e.find((w) => w.id == r), l.push(u), console.log("openlist", l);
  let s = [],
    f = new Map(),
    d = [],
    c = 0,
    m = 0,
    S = "";
  for (; l.length > 0; ) {
    let w = function (h, y) {
      for (let x = 0; x < h.length; x++)
        if (!y.includes(h[x].target.id)) return !1;
      return !0;
    };
    if (
      l.length === 0 ||
      (l.includes(u) && (l = l.filter((h) => h !== u)),
      a.push(u),
      i(DN(l)),
      u === r)
    )
      return;
    (s = t.filter((h) => h.source.id == u && !a.includes(h.target.id))),
      s.length === 0 && (S = u);
    const C = (h) => {
      const y = [];
      for (let x = 0; x < h.length - 1; x++) {
        const M = h[x],
          E = h[x + 1],
          O = t.filter((L) => L.source.id === M && L.target.id === E);
        console.log(O, "alld"), O.length > 0 ? y.push(O[0].gOfN) : y.push(null);
      }
      return y;
    };
    let p = [];
    if (
      (s.map((h) => {
        h.source.id;
        const y = h.target.id;
        h.gOfN, h.target.hOfN;
        const x = [...a],
          M = [...a, y],
          E = x.map((b) => b + "=>").join(""),
          O = C(M),
          L = M[M.length - 1],
          z = e.filter((b) => b.id === L),
          ie = [...O, z[0].hOfN].map((b) => (b === null ? 0 : b)),
          ue = ie
            .map((b) => (ie[ie.length - 1] === b ? b + "=" : b + "+"))
            .join(""),
          R = ie.reduce(G);
        function G(b, U) {
          return b + U;
        }
        p = [...p, ce("h5", { children: [E, y, "=f(n) = ", ue, R] })];
      }),
      i(
        zN([
          s.length === 0
            ? ce("h5", { children: ["No neighbouring nodes for ", u] })
            : p,
        ])
      ),
      s.find((h) => h.target.id == r))
    ) {
      a.push(r),
        i(AN(a)),
        await new Promise((h) => setTimeout(h, Vt)),
        (e.find((h) => h.id == r).active = !0),
        await new Promise((h) => setTimeout(h, Vt)),
        console.log("exiting from step 5"),
        console.log("current", u),
        (t.find((h) => h.source.id === u && h.target.id === r).selected = !0);
      return;
    }
    if (w(s, a)) {
      u = l[l.length - 1];
      let y = t.find((x) => x.source.id === u && a.includes(x.target.id)).target
        .id;
      console.log(y, "entry_point"),
        (t.find((x) => x.source.id === u && x.target.id === y).selected = !0),
        console.log(u, "current in step 5");
    } else
      console.log("Not all elements of neighbors are present in closedList");
    for (let h = 0; h < s.length; h++)
      c === 0
        ? (f.set(s[h].target.id, s[h].target.hOfN + s[h].gOfN),
          console.log(s, "hfhhh"),
          l.push(s[h].target.id))
        : (a.includes(s[h].target.id) ||
            f.set(s[h].target.id, s[h].target.hOfN + m + s[h].gOfN),
          !l.includes(s[h].target.id) &&
            !a.includes(s[h].target.id) &&
            l.push(s[h].target.id));
    await new Promise((h) => setTimeout(h, Vt));
    let g = -1;
    if (
      (f.forEach((h, y) => {
        (g == -1 || h < g) &&
          !a.includes(y) &&
          e.find((x) => x.id != u) &&
          ((g = h), (u = y));
      }),
      t.find((h) => h.source.id === a[a.length - 1] && h.target.id === u) &&
        (t.find(
          (h) => h.source.id === a[a.length - 1] && h.target.id === u
        ).selected = !0),
      await new Promise((h) => setTimeout(h, Vt)),
      f.clear(),
      await new Promise((h) => setTimeout(h, Vt)),
      (e.find((h) => h.id === u).active = !0),
      u === r)
    ) {
      l = l.filter((h) => h !== u);
      for (let h = 0; h < a.length; h++)
        (t.find(
          (y) => y.source.id === a[h] && y.target.id == a[h + 1]
        ).selected = !0),
          console.log(a[h], "closedList[i]");
      return;
    }
    s.length === 0 &&
      ((e.find((h) => h.id == S).active = !1),
      t
        .filter((h) => h.source.id === S || h.target.id === S)
        .forEach((h) => {
          h.selected = !1;
        }),
      (a = a.filter((h) => h !== S)),
      console.log(S, t, "cv"),
      l.push(S)),
      t.find((h) => h.source.id === a[a.length - 1] && h.target.id === u) &&
        (d.push(
          t.find((h) => h.target.id === a[a.length - 1] && h.source.id === u)
            .gOfN
        ),
        (m = d.reduce((h, y) => h + y, 0)),
        (c = c + 1));
  }
  return (
    o.map((w) => (w.selecting = !1)),
    await new Promise((w) => setTimeout(w, Vt)),
    sc.length == 1 ||
      ((e.find((w) => w.id == n).active = !1),
      sc.pop(),
      await new Promise((w) => setTimeout(w, Vt))),
    !1
  );
}
function HN({
  changeGraph: e,
  nodesAndLinks: t,
  changeGraphType: n,
  manual: r,
  setManual: i,
  setNodesAndLinks: o,
  changeManualGraph: l,
}) {
  const a = wC(),
    { result: u } = Cf((Q) => Q.astar),
    [s, f] = le.exports.useState(""),
    [d, c] = le.exports.useState(""),
    [m, S] = le.exports.useState(0),
    [w, C] = le.exports.useState(0),
    [p, g] = le.exports.useState(1),
    [h, y] = le.exports.useState(""),
    [x, M] = le.exports.useState(""),
    [E, O] = le.exports.useState(),
    [L, z] = le.exports.useState(!0),
    [j, ie] = le.exports.useState(!1),
    [ue, R] = le.exports.useState(!1),
    [G, b] = le.exports.useState({ state: !1, message: "" }),
    [U, A] = le.exports.useState({ noOfNodes: 0, noOfLinks: 0 });
  console.log("hi", u);
  const F =
      (U.noOfNodes > 0 && U.noOfLinks === 0) ||
      (U.noOfNodes === 0 && U.noOfLinks === 0),
    Y = (Q) => {
      console.log(typeof Q.target.value),
        console.log(Q.target.value.length),
        !/[a-zA-Z]/.test(Q.target.value) && Q.target.value.length !== 0
          ? ie(!0)
          : ie(!1),
        y(Q.target.value.toUpperCase());
    };
  console.log(U);
  const J = (Q) => {
      !/[a-zA-Z]/.test(Q.target.value) && Q.target.value.length !== 0
        ? ie(!0)
        : ie(!1),
        M(Q.target.value.toUpperCase());
    },
    re = async (Q, te, Se, Ie) => {
      a(LN()), a(bN(!0)), await VN(Q, te, Se, Ie, a);
    };
  le.exports.useEffect(() => {
    const Q = (te) => {
      const { newValue: Se, linksData: Ie, nodesData: ft } = te.detail;
      console.log(te.detail.newValue, "new value"),
        console.log(te.detail.oldValue, "old value");
      const ke = { ...t };
      (ke.nodes = ft),
        (ke.links = Ie),
        console.log(ke, "nodes and links in playground"),
        o(ke);
    };
    return (
      window.addEventListener("updateIdOnClick", Q),
      () => {
        window.removeEventListener("updateIdOnClick", Q);
      }
    );
  }, []),
    le.exports.useEffect(() => {
      const Q = (te) => {
        const Se = te.detail;
        console.log(Se);
      };
      return (
        window.addEventListener("hOfNUpdate", Q),
        () => {
          window.removeEventListener("hOfNUpdate", Q);
        }
      );
    }, []),
    le.exports.useEffect(() => {
      const Q = (te) => {
        const { newValue: Se, linksData: Ie, nodesData: ft } = te.detail;
        console.log(Se), console.log(Ie), console.log(ft);
        const ke = { ...t };
        (ke.nodes = ft),
          (ke.links = Ie),
          o(ke),
          console.log(t, "nodes and links in controller panel useEffect");
      };
      return (
        window.addEventListener("gOfNUpdate", Q),
        () => {
          window.removeEventListener("gOfNUpdate", Q);
        }
      );
    }, []);
  const De = () => {
    if (
      U.noOfNodes < 0 ||
      U.noOfLinks > 101 ||
      U.noOfNodes < 0 ||
      U.noOfLinks > 101
    ) {
      b({
        state: !0,
        message: "No of nodes and links should be between 0 and 100",
      });
      return;
    }
    let Q = { noOfNodes: U.noOfNodes, noOfLinks: U.noOfLinks };
    if (parseInt(Q.noOfNodes) < parseInt(Q.noOfLinks)) {
      console.log(Q.noOfNodes),
        console.log(Q.noOfLinks),
        b({
          state: !0,
          message: "No of nodes should be greater than no of links",
        });
      return;
    }
    b({ state: !1, message: "" }), A(Q), e(U.noOfNodes, U.noOfLinks);
  };
  function me() {
    a(Bu(!0)),
      i(!0),
      l(p, 0),
      console.log("change graph called"),
      console.log(t.nodes, "nodes in controller panel"),
      z(!1),
      A({ noOfLinks: 0, noOfNodes: 0 }),
      R(!1);
  }
  le.exports.useEffect(() => {
    O(), y(""), M("");
  }, [t]);
  const Ne = () => {
    if (d === "" || s === "") {
      b({ state: !0, message: "Source and Target node cannot be empty" });
      return;
    }
    if (d === s) {
      b({ state: !0, message: "Source and Target node cannot be same" });
      return;
    }
    b({ state: !1, message: "" });
    let Q = t.nodes,
      te = t.links;
    (Q = Q.map(
      (ke) => (
        ke.id === d &&
          ((ke.hOfN = m),
          ke.hOfN !== null && ke.hOfN !== void 0
            ? b({ state: !0, message: "" })
            : console.log("noproblem")),
        ke
      )
    )),
      console.log(Q, "nodes in contrller panel"),
      console.log(te, "links in contrller panel");
    let Se = Q.filter((ke) => ke.id === d),
      Ie = Q.filter((ke) => ke.id === s);
    const ft = Math.floor(Math.random() * 10) + 1;
    if (Se.length !== 0 && Ie.length !== 0) {
      console.log(Se, "sourceNodeToBeAdded"),
        console.log(Ie, "targetNodeToBeAdded");
      let ke = { source: Se[0], target: Ie[0], value: ft, gOfN: w },
        _i = { source: Ie[0], target: Se[0], value: ft, gOfN: w };
      o({ nodes: Q, links: [...te, ke, _i] }),
        console.log(te, "links in controller panel after adding new links"),
        c(""),
        f("");
    } else {
      b({
        state: !0,
        message: "Source and Target node should be present in the graph",
      });
      return;
    }
  };
  return ce("div", {
    className:
      "gap-10 shadow-sm shadow-gray-700 tracking-widest p-5 bg-blue m-4",
    children: [
      q("div", {
        className: "w-full",
        children: q("h1", {
          className: "text-3xl text-center",
          children: "A* Algorithm",
        }),
      }),
      L
        ? q(ni, {
            children: ce("div", {
              style: { display: "flex", justifyContent: "space-between" },
              className: "my-5",
              children: [
                q("div", {
                  className: "",
                  children: q("input", {
                    type: "number",
                    name: "noOfNodes",
                    onChange: (Q) => {
                      a(Bu(!1));
                      const te =
                        Q.target.value === "" ? 0 : parseInt(Q.target.value);
                      if (
                        (A({ ...U, noOfNodes: te }),
                        U.noOfLinks === 0 && te > 0 && R(!0),
                        Q.target.value === "" && R(!1),
                        te > 26)
                      ) {
                        b({
                          state: !0,
                          message: "No of nodes should be less than 26",
                        });
                        return;
                      }
                      if (te < U.noOfLinks) {
                        b({
                          state: !0,
                          message:
                            "No of nodes should be greater than no of links",
                        });
                        return;
                      }
                      if (te < 100 && te > U.noOfLinks) {
                        b({ state: !1, message: "" });
                        return;
                      }
                      if (isNaN(te)) {
                        b({
                          state: !0,
                          message: "No of nodes should be a number",
                        });
                        return;
                      }
                    },
                    className:
                      "input input-bordered input-accent bg-white placeholder-gray-800",
                    placeholder: "No Of Node",
                    id: "noOfNodes",
                  }),
                }),
                ce("div", {
                  className: "",
                  style: { display: "flex", flexDirection: "column" },
                  children: [
                    q("input", {
                      type: "number",
                      name: "noOfLinks",
                      onChange: (Q) => {
                        const te =
                          Q.target.value === "" ? 0 : parseInt(Q.target.value);
                        if (
                          (R(Q.target.value === ""),
                          A({ ...U, noOfLinks: te }),
                          Q.target.value === "0")
                        ) {
                          b({
                            state: !0,
                            message: "please enter value higer than zero.",
                          });
                          return;
                        }
                        if (te > U.noOfNodes) {
                          b({
                            state: !0,
                            message:
                              "No of links should be less than no of nodes",
                          });
                          return;
                        }
                        if (te > 100) {
                          b({
                            state: !0,
                            message: "No of links should be less than 100",
                          });
                          return;
                        }
                        if (te < 100 && te < U.noOfNodes) {
                          b({ state: !1, message: "" });
                          return;
                        }
                      },
                      className:
                        "input input-bordered input-accent bg-white placeholder-gray-800",
                      placeholder: "No Of Links",
                      id: "noOfLinks",
                    }),
                    q("span", {
                      style: { color: "red" },
                      children: ue ? "Please Enter No Of Links" : "",
                    }),
                  ],
                }),
              ],
            }),
          })
        : null,
      ce("div", {
        className: "my-5",
        style: { display: "flex", justifyContent: "space-between" },
        children: [
          q("button", {
            className: "btn btn-primary ",
            onClick: () => {
              a(Bu(!0)), De(), i(!1), z(!0);
            },
            disabled: r ? !1 : F,
            style: {
              fontWeight: "bold",
              width: "49%",
              color: F ? "#ffffff50" : L ? "black" : "grey",
              boxShadow: L ? "0px 0px 0px 2px #F471B5" : "none",
              border: "1px solid #0F1629",
            },
            children: "Generate Random Graph",
          }),
          q("button", {
            className: "btn btn-primary",
            onClick: me,
            style: {
              width: "49%",
              fontWeight: "bold",
              color: r ? "black" : "grey",
              boxShadow: r ? "0px 0px 0px 2px #F471B5" : "none",
              border: "1px solid #0F1629",
            },
            children: "Generate Custom Graph",
          }),
        ],
      }),
      L
        ? ce(ni, {
            children: [
              ce("div", {
                style: { display: "flex", justifyContent: "space-between" },
                children: [
                  q("div", {
                    className: "my-5",
                    children: q("input", {
                      type: "text",
                      onChange: Y,
                      className:
                        "input input-bordered input-accent bg-white placeholder-gray-800",
                      placeholder: "Source Node",
                      id: "source2",
                    }),
                  }),
                  q("div", {
                    className: "my-5",
                    children: q("input", {
                      type: "text",
                      onChange: J,
                      className:
                        "input input-bordered input-accent bg-white placeholder-gray-800",
                      placeholder: "Destination Node",
                      id: "destination2",
                    }),
                  }),
                ],
              }),
              q("button", {
                className: "btn btn-secondary",
                style: {
                  width: "50%",
                  color: h === "" || x === "" ? "#ffffff50" : "black",
                },
                disabled: h === "" || x === "",
                onClick: () => re(t.nodes, t.links, h, x),
                children: "Find Path",
              }),
            ],
          })
        : null,
      E
        ? ce("div", {
            children: [
              q("h6", {
                className: "font-bold tracking-wide",
                children: "Path Found",
              }),
              E &&
                E.map((Q, te) =>
                  ce(
                    "span",
                    {
                      className: "text-lg text-accent pr-2",
                      children: [Q, " ", te != E.length - 1 ? "-->" : ""],
                    },
                    te
                  )
                ),
            ],
          })
        : null,
      j
        ? q("div", {
            className: "text-red-500",
            style: { fontWeight: "bold" },
            children: "Only One Capital Letters Allowed",
          })
        : null,
      r
        ? ce(ni, {
            children: [
              ce("div", {
                className: "my-5",
                style: { display: "flex", justifyContent: "space-between" },
                children: [
                  q("input", {
                    type: "number",
                    placeholder: "No of nodes",
                    className:
                      "input input-bordered input-accent bg-white placeholder-gray-800",
                    value: p,
                    onChange: (Q) => {
                      g(Q.target.value);
                    },
                  }),
                  q("button", {
                    className: "btn btn-primary",
                    onClick: me,
                    style: { fontWeight: "bold" },
                    children: "Add Custom Nodes",
                  }),
                ],
              }),
              ce("div", {
                style: { display: "flex", justifyContent: "space-between" },
                children: [
                  ce("select", {
                    className:
                      "select select-bordered select-accent bg-white my-4",
                    value: d,
                    onChange: (Q) => {
                      c(Q.target.value);
                    },
                    children: [
                      q("option", { value: "", children: "Select Source" }),
                      t.nodes.map((Q) =>
                        q("option", { value: Q.id, children: Q.id }, Q.id)
                      ),
                    ],
                  }),
                  ce("select", {
                    className:
                      "select select-bordered select-accent bg-white my-4",
                    value: s,
                    onChange: (Q) => {
                      f(Q.target.value);
                    },
                    children: [
                      q("option", { value: "", children: "Select Target" }),
                      t.nodes.map((Q) =>
                        q("option", { value: Q.id, children: Q.id }, Q.id)
                      ),
                    ],
                  }),
                ],
              }),
              q("button", {
                className: "btn btn-primary my-5",
                onClick: Ne,
                style: { width: "50%", fontWeight: "bold" },
                children: "Add Link",
              }),
              ce("div", {
                style: { display: "flex", justifyContent: "space-between" },
                className: "my-5",
                children: [
                  q("div", {
                    style: { display: "flex" },
                    children: q("input", {
                      type: "text",
                      value: h,
                      onChange: Y,
                      className:
                        "input input-bordered input-accent bg-white placeholder-gray-800",
                      placeholder: "Source Node",
                      id: "source",
                      style: { minWidth: "50px" },
                    }),
                  }),
                  q("div", {
                    children: q("input", {
                      type: "text",
                      value: x,
                      onChange: J,
                      className:
                        "input input-bordered input-accent bg-white placeholder-gray-800",
                      placeholder: "Destination Node",
                      id: "destination",
                      style: { minWidth: "50px" },
                    }),
                  }),
                ],
              }),
              q("button", {
                className: "btn btn-secondary",
                onClick: () => re(t.nodes, t.links, h, x),
                children: "Find Path",
              }),
            ],
          })
        : null,
      G.state
        ? q("div", {
            className: "text-red-500 w-full",
            children: q("h6", {
              className: "font-bold tracking-wide",
              children: G.message,
            }),
          })
        : null,
    ],
  });
}
const YN = () => {
  const [e, t] = le.exports.useState([]);
  return (
    le.exports.useEffect(() => {
      const n = (r) => {
        t([...I0]);
      };
      return (
        window.addEventListener("randomSearch", n),
        () => {
          window.removeEventListener("randomSearch", n);
        }
      );
    }, [e]),
    e
  );
};
var QN = le.exports.createContext({});
const z0 = QN;
function KN(e) {
  if (Array.isArray(e)) return e;
}
function XN(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      i,
      o,
      l,
      a = [],
      u = !0,
      s = !1;
    try {
      if (((o = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        u = !1;
      } else
        for (
          ;
          !(u = (r = o.call(n)).done) && (a.push(r.value), a.length !== t);
          u = !0
        );
    } catch (f) {
      (s = !0), (i = f);
    } finally {
      try {
        if (!u && n.return != null && ((l = n.return()), Object(l) !== l))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return a;
  }
}
function ep(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function GN(e, t) {
  if (!!e) {
    if (typeof e == "string") return ep(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ep(e, t);
  }
}
function qN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L0(e, t) {
  return KN(e) || XN(e, t) || GN(e, t) || qN();
}
function Nr(e) {
  return (
    (Nr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nr(e)
  );
}
function ZN(e, t) {
  if (Nr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Nr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JN(e) {
  var t = ZN(e, "string");
  return Nr(t) == "symbol" ? t : String(t);
}
function cc(e, t, n) {
  return (
    (t = JN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ek(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function F0(e, t) {
  if (e == null) return {};
  var n = ek(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
var $0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", l = 0; l < arguments.length; l++) {
        var a = arguments[l];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var l = "";
      for (var a in o) t.call(o, a) && o[a] && (l = i(l, a));
      return l;
    }
    function i(o, l) {
      return l ? (o ? o + " " + l : o + l) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})($0);
const tk = $0.exports;
function Lt(e, t) {
  nk(e) && (e = "100%");
  var n = rk(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function nk(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function rk(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ik(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function wl(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Vu(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ok(e, t, n) {
  return { r: Lt(e, 255) * 255, g: Lt(t, 255) * 255, b: Lt(n, 255) * 255 };
}
function Wu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function lk(e, t, n) {
  var r, i, o;
  if (((e = Lt(e, 360)), (t = Lt(t, 100)), (n = Lt(n, 100)), t === 0))
    (i = n), (o = n), (r = n);
  else {
    var l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (r = Wu(a, l, e + 1 / 3)), (i = Wu(a, l, e)), (o = Wu(a, l, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function ak(e, t, n) {
  (e = Lt(e, 255)), (t = Lt(t, 255)), (n = Lt(n, 255));
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = 0,
    l = r,
    a = r - i,
    u = r === 0 ? 0 : a / r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: l };
}
function uk(e, t, n) {
  (e = Lt(e, 360) * 6), (t = Lt(t, 100)), (n = Lt(n, 100));
  var r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    l = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    u = r % 6,
    s = [n, l, o, o, a, n][u],
    f = [a, n, n, l, o, o][u],
    d = [o, o, a, n, n, l][u];
  return { r: s * 255, g: f * 255, b: d * 255 };
}
function sk(e, t, n, r) {
  var i = [
    Vu(Math.round(e).toString(16)),
    Vu(Math.round(t).toString(16)),
    Vu(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function tp(e) {
  return wt(e) / 255;
}
function wt(e) {
  return parseInt(e, 16);
}
var np = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function Fi(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    i = null,
    o = null,
    l = !1,
    a = !1;
  return (
    typeof e == "string" && (e = dk(e)),
    typeof e == "object" &&
      (gn(e.r) && gn(e.g) && gn(e.b)
        ? ((t = ok(e.r, e.g, e.b)),
          (l = !0),
          (a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : gn(e.h) && gn(e.s) && gn(e.v)
        ? ((r = wl(e.s)),
          (i = wl(e.v)),
          (t = uk(e.h, r, i)),
          (l = !0),
          (a = "hsv"))
        : gn(e.h) &&
          gn(e.s) &&
          gn(e.l) &&
          ((r = wl(e.s)),
          (o = wl(e.l)),
          (t = lk(e.h, r, o)),
          (l = !0),
          (a = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    (n = ik(n)),
    {
      ok: l,
      format: e.format || a,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var ck = "[-\\+]?\\d+%?",
  fk = "[-\\+]?\\d*\\.\\d+%?",
  jn = "(?:".concat(fk, ")|(?:").concat(ck, ")"),
  Hu = "[\\s|\\(]+("
    .concat(jn, ")[,|\\s]+(")
    .concat(jn, ")[,|\\s]+(")
    .concat(jn, ")\\s*\\)?"),
  Yu = "[\\s|\\(]+("
    .concat(jn, ")[,|\\s]+(")
    .concat(jn, ")[,|\\s]+(")
    .concat(jn, ")[,|\\s]+(")
    .concat(jn, ")\\s*\\)?"),
  Wt = {
    CSS_UNIT: new RegExp(jn),
    rgb: new RegExp("rgb" + Hu),
    rgba: new RegExp("rgba" + Yu),
    hsl: new RegExp("hsl" + Hu),
    hsla: new RegExp("hsla" + Yu),
    hsv: new RegExp("hsv" + Hu),
    hsva: new RegExp("hsva" + Yu),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function dk(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (np[e]) (e = np[e]), (t = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Wt.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Wt.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Wt.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Wt.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Wt.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Wt.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Wt.hex8.exec(e)),
                          n
                            ? {
                                r: wt(n[1]),
                                g: wt(n[2]),
                                b: wt(n[3]),
                                a: tp(n[4]),
                                format: t ? "name" : "hex8",
                              }
                            : ((n = Wt.hex6.exec(e)),
                              n
                                ? {
                                    r: wt(n[1]),
                                    g: wt(n[2]),
                                    b: wt(n[3]),
                                    format: t ? "name" : "hex",
                                  }
                                : ((n = Wt.hex4.exec(e)),
                                  n
                                    ? {
                                        r: wt(n[1] + n[1]),
                                        g: wt(n[2] + n[2]),
                                        b: wt(n[3] + n[3]),
                                        a: tp(n[4] + n[4]),
                                        format: t ? "name" : "hex8",
                                      }
                                    : ((n = Wt.hex3.exec(e)),
                                      n
                                        ? {
                                            r: wt(n[1] + n[1]),
                                            g: wt(n[2] + n[2]),
                                            b: wt(n[3] + n[3]),
                                            format: t ? "name" : "hex",
                                          }
                                        : !1)))))))));
}
function gn(e) {
  return Boolean(Wt.CSS_UNIT.exec(String(e)));
}
var _l = 2,
  rp = 0.16,
  hk = 0.05,
  pk = 0.05,
  mk = 0.15,
  j0 = 5,
  U0 = 4,
  gk = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function ip(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    i = ak(t, n, r);
  return { h: i.h * 360, s: i.s, v: i.v };
}
function xl(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return "#".concat(sk(t, n, r, !1));
}
function vk(e, t, n) {
  var r = n / 100,
    i = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    };
  return i;
}
function op(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - _l * t : Math.round(e.h) + _l * t)
      : (r = n ? Math.round(e.h) + _l * t : Math.round(e.h) - _l * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function lp(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - rp * t) : t === U0 ? (r = e.s + rp) : (r = e.s + hk * t),
    r > 1 && (r = 1),
    n && t === j0 && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function ap(e, t, n) {
  var r;
  return (
    n ? (r = e.v + pk * t) : (r = e.v - mk * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function fc(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Fi(e),
      i = j0;
    i > 0;
    i -= 1
  ) {
    var o = ip(r),
      l = xl(Fi({ h: op(o, i, !0), s: lp(o, i, !0), v: ap(o, i, !0) }));
    n.push(l);
  }
  n.push(xl(r));
  for (var a = 1; a <= U0; a += 1) {
    var u = ip(r),
      s = xl(Fi({ h: op(u, a), s: lp(u, a), v: ap(u, a) }));
    n.push(s);
  }
  return t.theme === "dark"
    ? gk.map(function (f) {
        var d = f.index,
          c = f.opacity,
          m = xl(vk(Fi(t.backgroundColor || "#141414"), Fi(n[d]), c * 100));
        return m;
      })
    : n;
}
var Qu = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666",
  },
  $l = {},
  Ku = {};
Object.keys(Qu).forEach(function (e) {
  ($l[e] = fc(Qu[e])),
    ($l[e].primary = $l[e][5]),
    (Ku[e] = fc(Qu[e], { theme: "dark", backgroundColor: "#141414" })),
    (Ku[e].primary = Ku[e][5]);
});
var yk = $l.blue;
function up(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? up(Object(n), !0).forEach(function (r) {
          cc(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : up(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function wk() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function _k(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var sp = "data-rc-order",
  cp = "data-rc-priority",
  xk = "rc-util-key",
  dc = new Map();
function B0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith("data-") ? t : "data-".concat(t)) : xk;
}
function Mf(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Sk(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Of(e) {
  return Array.from((dc.get(e) || e).children).filter(function (t) {
    return t.tagName === "STYLE";
  });
}
function V0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!wk()) return null;
  var n = t.csp,
    r = t.prepend,
    i = t.priority,
    o = i === void 0 ? 0 : i,
    l = Sk(r),
    a = l === "prependQueue",
    u = document.createElement("style");
  u.setAttribute(sp, l),
    a && o && u.setAttribute(cp, "".concat(o)),
    n != null && n.nonce && (u.nonce = n == null ? void 0 : n.nonce),
    (u.innerHTML = e);
  var s = Mf(t),
    f = s.firstChild;
  if (r) {
    if (a) {
      var d = (t.styles || Of(s)).filter(function (c) {
        if (!["prepend", "prependQueue"].includes(c.getAttribute(sp)))
          return !1;
        var m = Number(c.getAttribute(cp) || 0);
        return o >= m;
      });
      if (d.length) return s.insertBefore(u, d[d.length - 1].nextSibling), u;
    }
    s.insertBefore(u, f);
  } else s.appendChild(u);
  return u;
}
function Ek(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Mf(t);
  return (t.styles || Of(n)).find(function (r) {
    return r.getAttribute(B0(t)) === e;
  });
}
function Ck(e, t) {
  var n = dc.get(e);
  if (!n || !_k(document, n)) {
    var r = V0("", t),
      i = r.parentNode;
    dc.set(e, i), e.removeChild(r);
  }
}
function Nk(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Mf(n),
    i = Of(r),
    o = ln(ln({}, n), {}, { styles: i });
  Ck(r, o);
  var l = Ek(t, o);
  if (l) {
    var a, u;
    if (
      (a = o.csp) !== null &&
      a !== void 0 &&
      a.nonce &&
      l.nonce !== ((u = o.csp) === null || u === void 0 ? void 0 : u.nonce)
    ) {
      var s;
      l.nonce = (s = o.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return l.innerHTML !== e && (l.innerHTML = e), l;
  }
  var f = V0(e, o);
  return f.setAttribute(B0(o), t), f;
}
function W0(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function kk(e) {
  return W0(e) instanceof ShadowRoot;
}
function Pk(e) {
  return kk(e) ? W0(e) : null;
}
var hc = {},
  Tk = function (t) {};
function Rk(e, t) {}
function Mk(e, t) {}
function Ok() {
  hc = {};
}
function H0(e, t, n) {
  !t && !hc[n] && (e(!1, n), (hc[n] = !0));
}
function Xa(e, t) {
  H0(Rk, e, t);
}
function bk(e, t) {
  H0(Mk, e, t);
}
Xa.preMessage = Tk;
Xa.resetWarned = Ok;
Xa.noteOnce = bk;
function Ak(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase();
  });
}
function Dk(e, t) {
  Xa(e, "[@ant-design/icons] ".concat(t));
}
function fp(e) {
  return (
    Nr(e) === "object" &&
    typeof e.name == "string" &&
    typeof e.theme == "string" &&
    (Nr(e.icon) === "object" || typeof e.icon == "function")
  );
}
function dp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        (t.className = r), delete t.class;
        break;
      default:
        delete t[n], (t[Ak(n)] = r);
    }
    return t;
  }, {});
}
function pc(e, t, n) {
  return n
    ? dr.createElement(
        e.tag,
        ln(ln({ key: t }, dp(e.attrs)), n),
        (e.children || []).map(function (r, i) {
          return pc(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
        })
      )
    : dr.createElement(
        e.tag,
        ln({ key: t }, dp(e.attrs)),
        (e.children || []).map(function (r, i) {
          return pc(r, "".concat(t, "-").concat(e.tag, "-").concat(i));
        })
      );
}
function Y0(e) {
  return fc(e)[0];
}
function Q0(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Ik = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  zk = function (t) {
    var n = le.exports.useContext(z0),
      r = n.csp,
      i = n.prefixCls,
      o = Ik;
    i && (o = o.replace(/anticon/g, i)),
      le.exports.useEffect(function () {
        var l = t.current,
          a = Pk(l);
        Nk(o, "@ant-design-icons", { prepend: !0, csp: r, attachTo: a });
      }, []);
  },
  Lk = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor",
  ],
  ro = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
function Fk(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (ro.primaryColor = t),
    (ro.secondaryColor = n || Y0(t)),
    (ro.calculated = !!n);
}
function $k() {
  return ln({}, ro);
}
var Ga = function (t) {
  var n = t.icon,
    r = t.className,
    i = t.onClick,
    o = t.style,
    l = t.primaryColor,
    a = t.secondaryColor,
    u = F0(t, Lk),
    s = le.exports.useRef(),
    f = ro;
  if (
    (l && (f = { primaryColor: l, secondaryColor: a || Y0(l) }),
    zk(s),
    Dk(fp(n), "icon should be icon definiton, but got ".concat(n)),
    !fp(n))
  )
    return null;
  var d = n;
  return (
    d &&
      typeof d.icon == "function" &&
      (d = ln(
        ln({}, d),
        {},
        { icon: d.icon(f.primaryColor, f.secondaryColor) }
      )),
    pc(
      d.icon,
      "svg-".concat(d.name),
      ln(
        ln(
          {
            className: r,
            onClick: i,
            style: o,
            "data-icon": d.name,
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          u
        ),
        {},
        { ref: s }
      )
    )
  );
};
Ga.displayName = "IconReact";
Ga.getTwoToneColors = $k;
Ga.setTwoToneColors = Fk;
const bf = Ga;
function K0(e) {
  var t = Q0(e),
    n = L0(t, 2),
    r = n[0],
    i = n[1];
  return bf.setTwoToneColors({ primaryColor: r, secondaryColor: i });
}
function jk() {
  var e = bf.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Uk = [
  "className",
  "icon",
  "spin",
  "rotate",
  "tabIndex",
  "onClick",
  "twoToneColor",
];
K0(yk.primary);
var qa = le.exports.forwardRef(function (e, t) {
  var n = e.className,
    r = e.icon,
    i = e.spin,
    o = e.rotate,
    l = e.tabIndex,
    a = e.onClick,
    u = e.twoToneColor,
    s = F0(e, Uk),
    f = le.exports.useContext(z0),
    d = f.prefixCls,
    c = d === void 0 ? "anticon" : d,
    m = f.rootClassName,
    S = tk(
      m,
      c,
      cc(
        cc({}, "".concat(c, "-").concat(r.name), !!r.name),
        "".concat(c, "-spin"),
        !!i || r.name === "loading"
      ),
      n
    ),
    w = l;
  w === void 0 && a && (w = -1);
  var C = o
      ? {
          msTransform: "rotate(".concat(o, "deg)"),
          transform: "rotate(".concat(o, "deg)"),
        }
      : void 0,
    p = Q0(u),
    g = L0(p, 2),
    h = g[0],
    y = g[1];
  return q("span", {
    role: "img",
    "aria-label": r.name,
    ...s,
    ref: t,
    tabIndex: w,
    onClick: a,
    className: S,
    children: q(bf, { icon: r, primaryColor: h, secondaryColor: y, style: C }),
  });
});
qa.displayName = "AntdIcon";
qa.getTwoToneColor = jk;
qa.setTwoToneColor = K0;
const Bk = qa;
var Vk = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  },
  name: "info-circle",
  theme: "outlined",
};
const Wk = Vk;
var Hk = function (t, n) {
  return q(Bk, { ...t, ref: n, icon: Wk });
};
const Yk = le.exports.forwardRef(Hk);
function Qk() {
  const [e, t] = le.exports.useState(!1);
  YN();
  const n = le.exports.useRef(null),
    {
      openListDetails: r,
      closeListDetails: i,
      startNode: o,
      goalNode: l,
      result: a,
      finalPathShow: u,
    } = Cf((s) => s.astar);
  return (
    console.log(a, "result"),
    ce("div", {
      className:
        "p-5 bg-base-100 m-4 shadow-sm shadow-gray-700 tracking-widest",
      style: {
        overflowY: "auto",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
      },
      ref: n,
      children: [
        q("h4", {
          style: { fontSize: 15, color: "yellow", marginBottom: 20 },
          children: "Operations",
        }),
        u &&
          ce(ni, {
            children: [
              o !== "" &&
                l !== "" &&
                ce("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "100%",
                    marginBottom: 10,
                  },
                  children: [
                    ce("div", {
                      style: { display: "flex", alignItems: "center" },
                      children: [
                        q("h4", {
                          style: { fontSize: 15 },
                          children: "Start Node:",
                        }),
                        q("div", {
                          style: {
                            width: 30,
                            height: 30,
                            background: "white",
                            borderRadius: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            marginInline: "3px",
                            padding: 2,
                            color: "#0f1729",
                            fontSize: 16,
                            fontWeight: 600,
                          },
                          children: o,
                        }),
                      ],
                    }),
                    ce("div", {
                      style: { display: "flex", alignItems: "center" },
                      children: [
                        q("h4", {
                          style: { fontSize: 15 },
                          children: "Goal Node:",
                        }),
                        q("div", {
                          style: {
                            width: 30,
                            height: 30,
                            background: "white",
                            borderRadius: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            marginInline: "3px",
                            padding: 2,
                            color: "#0f1729",
                            fontSize: 16,
                            fontWeight: 600,
                          },
                          children: l,
                        }),
                      ],
                    }),
                  ],
                }),
              ce("div", {
                style: { display: "flex", justifyContent: "space-evenly" },
                children: [
                  ce("div", {
                    style: {
                      width: 200,
                      height: 200,
                      background: "white",
                      marginInline: 15,
                    },
                    children: [
                      q("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 50,
                          background: "#99e6c5",
                          flexDirection: "column",
                        },
                        children: q("h3", {
                          style: {
                            color: "black",
                            fontSize: 15,
                            fontWeight: 600,
                          },
                          children: "Open List",
                        }),
                      }),
                      ce("div", {
                        style: {
                          height: 150,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        children: [
                          r.length === 0 &&
                            q("h5", {
                              style: { color: "black" },
                              children: "Empty",
                            }),
                          r.length >= 0 &&
                            r.map((s) =>
                              q("div", {
                                style: {
                                  width: 30,
                                  height: 30,
                                  background: "#0f1729",
                                  borderRadius: 10,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxShadow:
                                    "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                  marginInline: "3px",
                                  padding: 2,
                                },
                                children: q("h3", {
                                  style: { fontWeight: 700 },
                                  children: s,
                                }),
                              })
                            ),
                        ],
                      }),
                    ],
                  }),
                  ce("div", {
                    style: {
                      width: 200,
                      height: 200,
                      background: "white",
                      marginInline: 15,
                    },
                    children: [
                      q("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 50,
                          background: "#99e6c5",
                        },
                        children: q("h3", {
                          style: {
                            color: "black",
                            fontSize: 15,
                            fontWeight: 600,
                          },
                          children: "Close List",
                        }),
                      }),
                      ce("div", {
                        style: {
                          height: 150,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        children: [
                          i.length === 0 &&
                            q("h5", {
                              style: { color: "black" },
                              children: "Empty",
                            }),
                          i.length >= 0 &&
                            i.map((s) =>
                              q("div", {
                                style: {
                                  width: 30,
                                  height: 30,
                                  background: "#0f1729",
                                  borderRadius: 10,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxShadow:
                                    "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                  marginInline: "3px",
                                  padding: 2,
                                },
                                children: q("h3", {
                                  style: { fontWeight: 700 },
                                  children: s,
                                }),
                              })
                            ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              q("h4", {
                style: {
                  fontSize: 15,
                  color: "yellow",
                  MarginTop: 20,
                  textAlign: "start",
                  width: "100%",
                },
                children: "Steps :",
              }),
              ce("h5", {
                style: {
                  fontSize: 12,
                  color: "white",
                  paddingTop: 5,
                  textAlign: "start",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                },
                children: [
                  ce("b", {
                    style: { fontSize: 12, color: "yellow", marginRight: 10 },
                    children: ["Notes: ", "  "],
                  }),
                  "A star Algorithm is f(n) = g(n)+h(n)",
                  q(Yk, {
                    onClick: () => t(!e),
                    style: { fontSize: 15, color: "yellow", marginLeft: 5 },
                  }),
                ],
              }),
              e &&
                ce("div", {
                  style: { marginTop: 5 },
                  children: [
                    q("h5", {
                      children:
                        "f(n): the estimate of the total cost from start node to target node through a node n.",
                    }),
                    q("h5", {
                      children:
                        "g(n): actual cost from start node to target node n.",
                    }),
                    q("h5", {
                      children:
                        "h(n): estimated cost from start node n to target node.",
                    }),
                  ],
                }),
              ce("div", {
                style: { width: "100%", marginTop: 10, fontSize: 13 },
                children: [
                  a.length > 0 &&
                    a.map((s, f) =>
                      ce(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            marginBlock: 15,
                          },
                          children: [
                            ce("h5", { children: [f + 1, "."] }),
                            q("div", {
                              style: { width: "auto", marginLeft: 10 },
                              children: s.map((d, c) => d),
                            }),
                          ],
                        },
                        f
                      )
                    ),
                  ce("h4", {
                    children: [
                      q("b", {
                        style: { color: "yellow" },
                        children: "final path :",
                      }),
                      " ",
                      q("b", {
                        style: { color: "white" },
                        children: i.join(","),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    })
  );
}
function Kk({
  changeGraph: e,
  nodesAndLinks: t,
  changeGraphType: n,
  manual: r,
  setManual: i,
  setNodesAndLinks: o,
  noOfNodesAndLinks: l,
  setNoOfNodesAndLinks: a,
  changeManualGraph: u,
}) {
  return ce("div", {
    className: "w-1/3 hidden-scroll hidden sm:block",
    children: [
      q(HN, {
        manual: r,
        setManual: i,
        changeGraphType: n,
        changeGraph: e,
        nodesAndLinks: t,
        setNodesAndLinks: o,
        noOfNodesAndLinks: l,
        setNoOfNodesAndLinks: a,
        changeManualGraph: u,
      }),
      q(Qk, {}),
    ],
  });
}
function X0() {
  const [e, t] = dr.useState(!1),
    [n, r] = dr.useState(!1),
    [i, o] = dr.useState(Li(10, 10)),
    l = (d, c) => {
      console.log("changeGraph"), o(Li(d, c));
    },
    a = (d, c) => {
      console.log("changeGraph"), o(Jh(d, c));
    },
    u = (d) => {
      o(Li(10, 10)), r(d);
    },
    [s, f] = le.exports.useState({ noOfNodes: 0, noOfLinks: 0 });
  return (
    le.exports.useEffect(() => {
      const d = (c) => {
        console.log(c.detail.newValue, "new value"),
          console.log(c.detail.oldValue, "old value");
        const m = { ...i };
        (m.nodes = m.nodes.map((S) =>
          S.id === c.detail.oldValue ? { ...S, id: c.detail.newValue } : S
        )),
          console.log(m, "nodes and links in playground"),
          o(m);
      };
      return (
        window.addEventListener("customEventName", d),
        () => {
          window.removeEventListener("customEventName", d);
        }
      );
    }, [i]),
    ce(ni, {
      children: [
        q(Kk, {
          manual: e,
          setManual: t,
          nodesAndLinks: i,
          changeGraphType: u,
          changeGraph: l,
          setNodesAndLinks: o,
          noOfNodesAndLinks: s,
          setNoOfNodesAndLinks: f,
          changeManualGraph: a,
        }),
        q("div", {
          className: "sm:w-2/3  h-screen",
          children: q(_C, {
            manual: e,
            setManual: t,
            graphType: n,
            nodesAndLinks: i,
            noOfNodesAndLinks: s,
            setNoOfNodesAndLinks: f,
            changeManualGraph: a,
          }),
        }),
      ],
    })
  );
}
const Xk = fN({ reducer: { astar: FN } });
n_([{ path: "/", element: q(X0, {}), errorElement: q(o_, {}) }]);
Xu.createRoot(document.getElementById("root")).render(
  q("div", {
    className: "h-full flex flex-col sm:flex-row ",
    children: q(gC, { store: Xk, children: q(X0, {}) }),
  })
);

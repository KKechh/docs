(function () {
  if (location.origin != 'https://www1.hi.cn') return;
  (function (d, w, c) {
    if (w[c]) return;
    var s = d.createElement("script");
    w[c] = function () {
      (w[c].z = w[c].z || []).push(arguments);
    };
    s.async = true;
    s.src = "https://static.ahc.ink/hecong.js";
    if (d.head) d.head.appendChild(s);
  })(document, window, "_AIHECONG");
  _AIHECONG("ini", { channelId: "LQ65lz" });
})();
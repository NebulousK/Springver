(function () {
    var g = document,
        f = window,
        c = g.documentElement,
        a = false,
        b = true,
        e = null,
        h;
    Trex.Class.overwrite(Trex.Tool.Emoticon, {
        oninitialized: function () {
            var j = this.canvas;
            var i = this.handler = function (k) {
                if (!k || k.trim().length == 0) {
                    return
                }
                j.execute(function (m) {
                    var l = m.win.img({
                        src: k,
                        border: "0",
                        className: "txc-emo"
                    });
                    m.pasteNode(l, a)
                })
            };
            this.resetWeave();
            this.weave.bind(this)(new Trex.Button(this.buttonCfg), new Trex.Menu.Matrix(this.menuCfg), i)
        }
    });
    var d = "emoticon";
    Editor.forEachEditor(function (i) {
        i.getTool()[d].oninitialized()
    });
    Editor.editorForAsyncLoad.getTool()[d].forceActivate()
})();
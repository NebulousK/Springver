(function () {
    var g = document,
        f = window,
        c = g.documentElement,
        a = false,
        b = true,
        e = null,
        h;
    TrexMessage.addMsg({
        "@specialchar.cancel.image": "#iconpath/btn_l_cancel.gif?v=2",
        "@specialchar.confirm.image": "#iconpath/btn_l_confirm.gif?v=2",
        "@specialchar.title": "\uc120\ud0dd\ud55c \uae30\ud638"
    });
    Trex.Class.overwrite(Trex.Tool.SpecialChar, {
        oninitialized: function () {
            var j = this.canvas;
            var i = function (k) {
                if (!k) {
                    return
                }
                j.execute(function (l) {
                    l.pasteContent(k, a)
                })
            };
            this.resetWeave();
            this.weave.bind(this)(new Trex.Button(this.buttonCfg), new Trex.Menu.SpecialChar(this.menuCfg), i)
        }
    });
    Trex.MarkupTemplate.add("menu.specialchar.input", ['<dl class="tx-menu-matrix-input">', "	<dt><span>@specialchar.title</span></dt>", '	<dd><input type="text" value=""/></dd>', '	<dd><img class="tx-menu-btn-confirm" src="@specialchar.confirm.image" align="absmiddle"/></dd>', '	<dd><img class="tx-menu-btn-cancel" src="@specialchar.cancel.image" align="absmiddle"/></dd>', "</dl>"].join(""));
    Trex.Menu.SpecialChar = Trex.Class.create({
        $extend: Trex.Menu.Matrix,
        ongenerated: function () {
            var k = this.elMenu;
            var i = Trex.MarkupTemplate.get("menu.specialchar.input").evaluateAsDom({});
            $tom.append($tom.collect(k, "div.tx-menu-inner"), i);
            var j = this.elInput = $tom.collect(i, "input");
            var l = $tom.collectAll(i, "img");
            if (l.length == 2) {
                $tx.observe(l[0], "click", function () {
                    this._command(this.elInput.value);
                    this.hide()
                }.bind(this));
                $tx.observe(l[1], "click", function () {
                    this.onCancel()
                }.bind(this))
            }
            $tx.observe(j, "keydown", function (m) {
                if (m.keyCode == 13) {
                    $tx.stop(m);
                    this._command(this.elInput.value);
                    this.hide()
                }
            }.bind(this))
        },
        onregenerated: function () {
            this.elInput.value = "";
            this.elInput.focus()
        },
        onSelect: function (j) {
            var l = this.elInput;
            var i = $tx.findElement(j, "span");
            if (i.tagName && i.tagName.toLowerCase() != "span") {
                return
            }
            l.value += (!i.innerText || i.innerText == "&nbsp;" || i.innerText.trim() == "") ? "" : i.innerText;
            $tx.stop(j);
            l.focus();
            if ($tx.msie) {
                try {
                    var k = g.selection.createRange();
                    k.move("character", l.value.length);
                    k.select()
                } catch (m) {}
            }
        }
    });
    var d = "specialchar";
    Editor.forEachEditor(function (i) {
        i.getTool()[d].oninitialized()
    });
    Editor.editorForAsyncLoad.getTool()[d].forceActivate()
})();
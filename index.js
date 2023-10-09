
const elements = [
  {
    "element": "a",
    "description": "signifies a resource link phrase",
    "spec": "https://html.spec.whatwg.org/#the-a-element",
    "attributes": {
      "href": "",
      "target": "",
      "download": "",
      "ping": "",
      "rel": "",
      "hreflang": "", 
      "type": "", 
      "referrerpolicy": ""
    }
  },
  {
    "element": "abbr",
    "description": "signifies an abbreviated phrase",
    "spec": "https://html.spec.whatwg.org/#the-abbr-element",
  },
  {
    "element": "address",
    "description": "signifies a contact content",
    "spec": "https://html.spec.whatwg.org/#the-address-element",
  },
  {
    "element": "area",
    "description": "specifies an `img` `map` region link",
    "spec": "https://html.spec.whatwg.org/#the-area-element",
    "attributes": {
      "alt": "", 
      "coords": "", 
      "shape": "", 
      "href": "", 
      "target": "", 
      "download": "", 
      "ping": "", 
      "rel": "", 
      "referrerpolicy": ""
    }
  },
  {
    "element": "article",
    "description": "signifies an independent content",
    "spec": "https://html.spec.whatwg.org/#the-article-element",
  },
  {
    "element": "aside",
    "description": "signifies a diverging content",
    "spec": "https://html.spec.whatwg.org/#the-aside-element",
  },
  {
    "element": "audio",
    "description": "specifies an audio multimedia",
    "spec": "https://html.spec.whatwg.org/#the-audio-element",
    "attributes": {
      "src": "", 
      "crossorigin": "", 
      "preload": "", 
      "autoplay": "", 
      "loop": "", 
      "muted": "", 
      "controls": ""
    }
  },
  {
    "element": "b",
    "description": "signifies an attentive phrase",
    "spec": "https://html.spec.whatwg.org/#the-b-element",
  },
  {
    "element": "base",
    "description": "specifies the `head` base URL",
    "spec": "https://html.spec.whatwg.org/#the-base-element",
    "attributes": {
      "href": "", 
      "target": ""
    }
  },
  {
    "element": "bdi",
    "description": "signifies a bi-direction phrase",
    "spec": "https://html.spec.whatwg.org/#the-bdi-element",
  },
  {
    "element": "bdo",
    "description": "signifies an off-direction phrase",
    "spec": "https://html.spec.whatwg.org/#the-bdo-element",
  },
  {
    "element": "blockquote",
    "description": "signifies a quoted content",
    "spec": "https://html.spec.whatwg.org/#the-blockquote-element",
    "attributes": {
      "cite": ""
    }
  },
  {
    "element": "body",
    "description": "signifies the document content",
    "spec": "https://html.spec.whatwg.org/#the-body-element",
    "attributes": {
      "onafterprint": "", 
      "onbeforeprint": "", 
      "onbeforeunload": "", 
      "onhashchange": "",
      "onlanguagechange": "", 
      "onmessage": "", 
      "onmessageerror": "", 
      "onoffline": "", 
      "ononline": "", 
      "onpagehide": "", 
      "onpageshow": "", 
      "onpopshow": "", 
      "onpopstate": "", 
      "onrejectionhandled": "", 
      "onstorage": "", 
      "onunhandledrejection": "", 
      "onunload": ""
    }
  },
  {
    "element": "br",
    "description": "specifies a line break",
    "spec": "https://html.spec.whatwg.org/#the-br-element",
  },
  {
    "element": "button",
    "description": "signifies a call-to-action phrase",
    "spec": "https://html.spec.whatwg.org/#the-button-element",
    "attributes": {
      "disabled": "", 
      "form": "", 
      "formaction": "", 
      "formenctype": "", 
      "formmethod": "", 
      "formnovalidate": "", 
      "formtarget": "", 
      "name": "", 
      "popovertarget": "", 
      "popovertargetaction": "", 
      "type": "", 
      "value": ""
    }
  },
  {
    "element": "canvas",
    "description": "specifies a real-time image multimedia",
    "spec": "https://html.spec.whatwg.org/#the-canvas-element",
    "attributes": {
      "width": "", 
      "height": ""
    }
  },
  {
    "element": "caption",
    "description": "signifies a table caption content",
    "spec": "https://html.spec.whatwg.org/#the-caption-element",
  },
  {
    "element": "cite",
    "description": "signifies a work title phrase",
    "spec": "https://html.spec.whatwg.org/#the-cite-element",
  },
  {
    "element": "code",
    "description": "signifies a computer code phrase",
    "spec": "https://html.spec.whatwg.org/#the-code-element",
  },
  {
    "element": "col",
    "description": "specifies a `colgroup` item",
    "spec": "https://html.spec.whatwg.org/#the-col-element",
    "attributes": {
      "span": ""
    }
  },
  {
    "element": "colgroup",
    "description": "specifies a `table` column target",
    "spec": "https://html.spec.whatwg.org/#the-colgroup-element",
    "attributes": {
      "span": ""
    }
  },
  {
    "element": "data",
    "description": "signifies a machine-readable phrase",
    "spec": "https://html.spec.whatwg.org/#the-data-element",
    "attributes": {
      "value": ""
    }
  },
  {
    "element": "datalist",
    "description": "signifies a set of `option` content",
    "spec": "https://html.spec.whatwg.org/#the-datalist-element",
  },
  {
    "element": "dd",
    "description": "signifies a description definition content",
    "spec": "https://html.spec.whatwg.org/#the-dd-element",
  },
  {
    "element": "del",
    "description": "signifies a deleted content",
    "spec": "https://html.spec.whatwg.org/#the-del-element",
    "attributes": {
      "cite": "", 
      "datetime": ""
    }
  },
  {
    "element": "details",
    "description": "signifies a disclosable content",
    "spec": "https://html.spec.whatwg.org/#the-details-element",
    "attributes": {
      "open": ""
    }
  },
  {
    "element": "dfn",
    "description": "signifies a definition instance phrase",
    "spec": "https://html.spec.whatwg.org/#the-dfn-element",
  },
  {
    "element": "dialog",
    "description": "signifies a transitional content",
    "spec": "https://html.spec.whatwg.org/#the-dialog-element",
    "attributes": {
      "open": ""
    }
  },
  {
    "element": "div",
    "description": "signifies an 'other' content",
    "spec": "https://html.spec.whatwg.org/#the-div-element",
  },
  {
    "element": "dl",
    "description": "signifies a set of `dt` and `dd` content",
    "spec": "https://html.spec.whatwg.org/#the-dl-element",
  },
  {
    "element": "dt",
    "description": "signifies a description term content",
    "spec": "https://html.spec.whatwg.org/#the-dt-element",
  },
  {
    "element": "em",
    "description": "signifies a stressed phrase",
    "spec": "https://html.spec.whatwg.org/#the-em-element",
  },
  {
    "element": "embed",
    "description": "specifies a placeholder multimedia",
    "spec": "https://html.spec.whatwg.org/#the-embed-element",
    "attributes": {
      "src": "", 
      "type": "", 
      "width": "", 
      "height": ""
    }
  },
  {
    "element": "fieldset",
    "description": "signifies a set of related 'field' content",
    "spec": "https://html.spec.whatwg.org/#the-fieldset-element",
    "attributes": {
      "disabled": "", 
      "form": "", 
      "name": ""
    }
  },
  {
    "element": "figcaption",
    "description": "signifies a figure caption content",
    "spec": "https://html.spec.whatwg.org/#the-figcaption-element",
  },
  {
    "element": "figure",
    "description": "signifies an off-flowable content",
    "spec": "https://html.spec.whatwg.org/#the-figure-element",
  },
  {
    "element": "footer",
    "description": "signfies a supplementary content",
    "spec": "https://html.spec.whatwg.org/#the-footer-element",
  },
  {
    "element": "form",
    "description": "signifies a set of 'field' content",
    "spec": "https://html.spec.whatwg.org/#the-form-element",
    "attributes": {
      "accept-charset": "", 
      "action": "", 
      "autocomplete": "", 
      "enctype": "", 
      "method": "", 
      "name": "", 
      "novalidate": "", 
      "target": "", 
      "rel": ""
    }
  },
  {
    "element": "h1",
    "description": "signifies a heading level 1 block",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h2",
    "description": "signifies a heading level 2 block",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h3",
    "description": "signifies a heading level 3 block",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h4",
    "description": "signifies a heading level 4 block",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h5",
    "description": "signifies a heading level 5 block",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h6",
    "description": "signifies a heading level 6 block",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "head",
    "description": "specify the document metadata",
    "spec": "https://html.spec.whatwg.org/#the-head-element",
  },
  {
    "element": "header",
    "description": "signifies an introductory content",
    "spec": "https://html.spec.whatwg.org/#the-header-element",
  },
  {
    "element": "hgroup",
    "description": "groups heading and related paragraphs",
    "spec": "https://html.spec.whatwg.org/#the-hgroup-element"
  },
  {
    "element": "hr",
    "description": "specifies a paragraph break",
    "spec": "https://html.spec.whatwg.org/#the-hr-element",
  },
  {
    "element": "html",
    "description": "represents the document",
    "spec": "https://html.spec.whatwg.org/#the-html-element",
  },
  {
    "element": "i",
    "description": "signifies an alternated phrase",
    "spec": "https://html.spec.whatwg.org/#the-i-element",
  },
  {
    "element": "iframe",
    "description": "specifies a web document multimedia",
    "spec": "https://html.spec.whatwg.org/#the-iframe-element",
    "attributes": {
      "src": "", 
      "srcdoc": "", 
      "name": "", 
      "sandbox": "", 
      "allow": "", 
      "allowfullscreen": "", 
      "width": "", 
      "height": "", 
      "referrerpolicy": "", 
      "loading": ""
    }
  },
  {
    "element": "img",
    "description": "specifies an image multimedia",
    "spec": "https://html.spec.whatwg.org/#the-img-element",
    "attributes": {
      "alt": "", 
      "src": "", 
      "srcset": "", 
      "sizes": "", 
      "crossorigin": "", 
      "usemap": "", 
      "ismap": "", 
      "width": "", 
      "height": "", 
      "referrerpolicy": "", 
      "decoding": "", 
      "loading": "", 
      "fetchpriority": ""
    }
  },
  {
    "element": "input",
    "description": "specifies a data field",
    "spec": "https://html.spec.whatwg.org/#the-input-element",
    "attributes": {
      "accept": "", 
      "alt": "", 
      "autocomplete": "", 
      "checked": "", 
      "dirname": "", 
      "disabled": "", 
      "form": "",
      "formaction": "", 
      "formenctype": "", 
      "formmethod": "", 
      "formnovalidate": "", 
      "formtarget": "", 
      "height": "", 
      "list": "", 
      "max": "", 
      "maxlength": "", 
      "min": "", 
      "minlength": "", 
      "multiple": "", 
      "name": "", 
      "pattern": "", 
      "placeholder": "", 
      "popovertarget": "", 
      "popovertargetaction": "", 
      "readonly": "", 
      "required": "", 
      "size": "", 
      "src": "", 
      "step": "", 
      "type": "", 
      "value": "", 
      "width": ""
    }
  },
  {
    "element": "ins",
    "description": "signifies an inserted content",
    "spec": "https://html.spec.whatwg.org/#the-ins-element",
    "attributes": {
      "cite": "", 
      "datetime": ""
    }
  },
  {
    "element": "kbd",
    "description": "signifies a user input phrase",
    "spec": "https://html.spec.whatwg.org/#the-kbd-element",
  },
  {
    "element": "label",
    "description": "signifies an element caption phrase",
    "spec": "https://html.spec.whatwg.org/#the-label-element",
    "attributes": {
      "for": ""
    }
  },
  {
    "element": "legend",
    "description": "signifies a `fieldset` caption content",
    "spec": "https://html.spec.whatwg.org/#the-legend-element",
  },
  {
    "element": "li",
    "description": "signifies a 'list' item content",
    "spec": "https://html.spec.whatwg.org/#the-li-element",
    "attributes": {
      "value": ""
    },
    "attributesNote": "if the element is not a child of ul or menu",
  },
  {
    "element": "link",
    "description": "specifies an extension link",
    "spec": "https://html.spec.whatwg.org/#the-link-element",
    "attributes": {
      "href": "", 
      "crossorigin": "", 
      "rel": "", 
      "media": "", 
      "integrity": "", 
      "hreflang": "", 
      "type": "", 
      "referrerpolicy": "", 
      "sizes": "", 
      "imagesrcset": "", 
      "imagesizes": "", 
      "as": "", 
      "blocking": "", 
      "color": "", 
      "disabled": "", 
      "color": "", 
      "disabled": "", 
      "fetchpriority": ""
    }
  },
  {
    "element": "main",
    "description": "signifies the dominant content",
    "spec": "https://html.spec.whatwg.org/#the-main-element",
  },
  {
    "element": "map",
    "description": "signifies an `img` map content",
    "spec": "https://html.spec.whatwg.org/#the-map-element",
    "attributes": {
      "name": ""
    }
  },
  {
    "element": "mark",
    "description": "signifies a highlighted phrase",
    "spec": "https://html.spec.whatwg.org/#the-mark-element",
  },
  {
    "element": "math",
    "description": "signifies a math formula phrase",
    "spec": "https://www.w3.org/Math/draft-spec/chapter2.html#interf.toplevel",
    "attributes": {
      "display": ""
    }
  },
  {
    "element": "menu",
    "description": "signifies a set of toolbar `li` content",
    "spec": "https://html.spec.whatwg.org/#the-menu-element",
  },
  {
    "element": "meta",
    "description": "specifies an 'other' metadata item",
    "spec": "https://html.spec.whatwg.org/#the-meta-element",
    "attributes": {
      "name": "", 
      "http-equiv": "", 
      "content": "", 
      "charset": "", 
      "media": ""
    }
  },
  {
    "element": "meter",
    "description": "signifies the gauge of a known phrase",
    "spec": "https://html.spec.whatwg.org/#the-meter-element",
    "attributes": {
      "value": "", 
      "min": "", 
      "max": "", 
      "low": "", 
      "high": "", 
      "optimum": ""
    }
  },
  {
    "element": "nav",
    "description": "signifies a navigation content",
    "spec": "https://html.spec.whatwg.org/#the-nav-element",
  },
  {
    "element": "noscript",
    "description": "represents a `script` fallback content",
    "spec": "https://html.spec.whatwg.org/#the-noscript-element",
  },
  {
    "element": "object",
    "description": "specifies an 'other' multimedia",
    "spec": "https://html.spec.whatwg.org/#the-object-element",
    "attributes": {
      "data": "", 
      "type": "", 
      "name": "", 
      "form": "", 
      "width": "", 
      "height": ""
    }
  },
  {
    "element": "ol",
    "description": "signifies a set of ordered `li` content",
    "spec": "https://html.spec.whatwg.org/#the-ol-element",
    "attributes": {
      "reversed": "", 
      "start": "", 
      "type": ""
    }
  },
  {
    "element": "optgroup",
    "description": "specifies a set of `select` `option` content",
    "spec": "https://html.spec.whatwg.org/#the-optgroup-element",
    "attributes": {
      "disabled": "", 
      "label": ""
    }
  },
  {
    "element": "option",
    "description": "represents a 'field' option text",
    "spec": "https://html.spec.whatwg.org/#the-option-element",
    "attributes": {
      "disabled": "", 
      "label": "", 
      "selected": "", 
      "value": ""
    }
  },
  {
    "element": "output",
    "description": "signifies a computer output phrase",
    "spec": "https://html.spec.whatwg.org/#the-output-element",
    "attributes": {
      "for": "", 
      "form": "", 
      "name": ""
    }
  },
  {
    "element": "p",
    "description": "signifies a paragraph block",
    "spec": "https://html.spec.whatwg.org/#the-p-element",
  },
  {
    "element": "picture",
    "description": "specifies a set of `img` `source` content",
    "spec": "https://html.spec.whatwg.org/#the-picture-element",
  },
  {
    "element": "pre",
    "description": "signifies a preformatted block",
    "spec": "https://html.spec.whatwg.org/#the-pre-element",
  },
  {
    "element": "progress",
    "description": "signifies the gauge of an unknown phrase",
    "spec": "https://html.spec.whatwg.org/#the-progress-element",
    "attributes": {
      "value": "", 
      "max": ""
    }
  },
  {
    "element": "q",
    "description": "signifies a quoted phrase",
    "spec": "https://html.spec.whatwg.org/#the-q-element",
    "attributes": {
      "cite": ""
    }
  },
  {
    "element": "rp",
    "description": "signifies a `ruby` fallback text",
    "spec": "https://html.spec.whatwg.org/#the-rp-element",
  },
  {
    "element": "rt",
    "description": "signifies a `ruby` component phrase",
    "spec": "https://html.spec.whatwg.org/#the-rt-element",
  },
  {
    "element": "ruby",
    "description": "signifies a ruby annotated phrase",
    "spec": "https://html.spec.whatwg.org/#the-ruby-element",
  },
  {
    "element": "s",
    "description": "signifies an inaccurate phrase",
    "spec": "https://html.spec.whatwg.org/#the-s-element",
  },
  {
    "element": "samp",
    "description": "signifies a previous `output` phrase",
    "spec": "https://html.spec.whatwg.org/#the-samp-element",
  },
  {
    "element": "script",
    "description": "represents a script text",
    "spec": "https://html.spec.whatwg.org/#the-script-element",
    "attributes": {
      "src": "", 
      "type": "", 
      "nomodule": "", 
      "async": "", 
      "defer": "", 
      "crossorigin": "", 
      "integrity": "", 
      "referrerpolicy": "", 
      "blocking": "", 
      "fetchpolicy": ""
    }
  },
  {
    "element": "search",
    "description": "signifies a search content",
    "spec": "https://html.spec.whatwg.org/#the-search-element",
  },
  {
    "element": "section",
    "description": "signifies a dependent content",
    "spec": "https://html.spec.whatwg.org/#the-section-element",
  },
  {
    "element": "select",
    "description": "specifies a multi-option text field",
    "spec": "https://html.spec.whatwg.org/#the-select-element",
    "attributes": {
      "autocomplete": "", 
      "disabled": "", 
      "form": "", 
      "multiple": "", 
      "name": "", 
      "required": "", 
      "size": ""
    }
  },
  {
    "element": "slot",
    "description": "signifies a placeholder content",
    "spec": "https://html.spec.whatwg.org/#the-slot-element",
    "attributes": {
      "name": ""
    }
  },
  {
    "element": "small",
    "description": "signifies an aside phrase",
    "spec": "https://html.spec.whatwg.org/#the-small-element",
  },
  {
    "element": "source",
    "description": "specifies an `img` or 'media' source",
    "spec": "https://html.spec.whatwg.org/#the-source-element",
    "attributes": {
      "type": "", 
      "media": "", 
      "src": "", 
      "srcset": "", 
      "sizes": "", 
      "width": "", 
      "height": ""
    }
  },
  {
    "element": "span",
    "description": "signifies an 'other' phrase",
    "spec": "https://html.spec.whatwg.org/#the-span-element",
  },
  {
    "element": "strong",
    "description": "signifies an important phrase",
    "spec": "https://html.spec.whatwg.org/#the-strong-element",
  },
  {
    "element": "style",
    "description": "specifies a style text",
    "spec": "https://html.spec.whatwg.org/#the-style-element",
    "attributes": {
      "media": "", 
      "blocking": ""
    }
  },
  {
    "element": "sub",
    "description": "signifies a subscripted phrase",
    "spec": "https://html.spec.whatwg.org/#the-sub-and-sup-elements",
  },
  {
    "element": "summary",
    "description": "signifies a `details` caption content",
    "spec": "https://html.spec.whatwg.org/#the-legend-element",
  },
  {
    "element": "sup",
    "description": "signifies a superscripted phrase",
    "spec": "https://html.spec.whatwg.org/#the-sub-and-sup-elements",
  },
  {
    "element": "svg",
    "description": "signifies a vector image multimedia",
    "spec": "https://svgwg.org/svg2-draft/struct.html#SVGElement",
    "attributes": {
      "height": "",
      "preserveAspectRatio": "",
      "viewBox": "",
      "width": "",
      "x": "",
      "y": "",
    }
  },
  {
    "element": "table",
    "description": "signifies a multi-dimensional content",
    "spec": "https://html.spec.whatwg.org/#the-table-element",
  },
  {
    "element": "tbody",
    "description": "signifies the set of `tr` body content",
    "spec": "https://html.spec.whatwg.org/#the-tbody-element",
  },
  {
    "element": "td",
    "description": "signifies a `table` data content",
    "spec": "https://html.spec.whatwg.org/#the-td-element",
    "attributes": {
      "colspan": "", 
      "rowspan": "", 
      "headers": ""
    }
  },
  {
    "element": "template",
    "description": "represents a model content",
    "spec": "https://html.spec.whatwg.org/#the-template-element",
  },
  {
    "element": "textarea",
    "description": "specifies a multi-line text field",
    "spec": "https://html.spec.whatwg.org/#the-textarea-element",
    "attributes": {
      "autocomplete": "", 
      "cols": "", 
      "dirname": "", 
      "disabled": "", 
      "form": "", 
      "maxlength": "", 
      "minlength": "", 
      "name": "", 
      "placeholder": "", 
      "readonly": "", 
      "required": "", 
      "rows": "", 
      "wrap": ""
    }
  },
  {
    "element": "tfoot",
    "description": "signifies the set of `tr` summary content",
    "spec": "https://html.spec.whatwg.org/#the-tfoot-element",
  },
  {
    "element": "th",
    "description": "signifies a `table` header content",
    "spec": "https://html.spec.whatwg.org/#the-th-element",
    "attributes": {
      "colspan": "", 
      "rowspan": "", 
      "headers": "", 
      "scope": "", 
      "abbr": ""
    }
  },
  {
    "element": "thead",
    "description": "specifies the set of `tr` header content",
    "spec": "https://html.spec.whatwg.org/#the-thead-element",
  },
  {
    "element": "time",
    "description": "signifies a time-readable phrase",
    "spec": "https://html.spec.whatwg.org/#the-time-element",
    "attributes": {
      "datetime": ""
    }
  },
  {
    "element": "title",
    "description": "specifies the `head` title text",
    "spec": "https://html.spec.whatwg.org/#the-title-element",
  },
  {
    "element": "tr",
    "description": "signifies a `table` row content",
    "spec": "https://html.spec.whatwg.org/#the-tr-element",
  },
  {
    "element": "track",
    "description": "specifies a timed text for an `audio`  or a `video`",
    "spec": "https://html.spec.whatwg.org/#the-track-element",
    "attributes": {
      "kind": "", 
      "src": "", 
      "srclang": "", 
      "lable": "", 
      "default": ""
    }
  },
  {
    "element": "u",
    "description": "signifies an unarticulated phrase",
    "spec": "https://html.spec.whatwg.org/#the-u-element",
  },
  {
    "element": "ul",
    "description": "signifies a set of unordered `li` content",
    "spec": "https://html.spec.whatwg.org/#the-ul-element",
  },
  {
    "element": "var",
    "description": "signifies a variable phrase",
    "spec": "https://html.spec.whatwg.org/#the-var-element",
  },
  {
    "element": "video",
    "description": "specifies a video multimedia",
    "spec": "https://html.spec.whatwg.org/#the-video-element",
    "attributes": {
      "src": "", 
      "crossorigin": "", 
      "poster": "", 
      "preload": "", 
      "autoplay": "", 
      "playsinline": "", 
      "loop": "", 
      "muted": "", 
      "controls": "", 
      "width": "", 
      "height": ""
    }
  },  
  {
    "element": "wbr",
    "description": "specifies a suitable line break",
    "spec": "https://html.spec.whatwg.org/#the-wbr-element",
  },
  {
    "element": "-",
    "description": "signifies a custom content",
    "spec": "https://html.spec.whatwg.org/#autonomous-custom-element",
    "attributes": {
      "form": "", 
      "disabled": "", 
      "readonly": "", 
      "name": ""
    }
  },
  {
    "element": "",
    "description": "signifies a text",
    "spec": "https://html.spec.whatwg.org/#text-content",
  },
]

module.exports = { elements }

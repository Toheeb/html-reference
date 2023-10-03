
const elements = [
  {
    "element": "a",
    "description": "phrases a resource link",
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
    "description": "phrases an abbreviation",
    "spec": "https://html.spec.whatwg.org/#the-abbr-element",
  },
  {
    "element": "address",
    "description": "groups contact contents",
    "spec": "https://html.spec.whatwg.org/#the-address-element",
  },
  {
    "element": "area",
    "description": "specify the link of an image part",
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
    "description": "groups independent contents",
    "spec": "https://html.spec.whatwg.org/#the-article-element",
  },
  {
    "element": "aside",
    "description": "groups tangental contents",
    "spec": "https://html.spec.whatwg.org/#the-aside-element",
  },
  {
    "element": "audio",
    "description": "specify an audio media",
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
    "description": "phrases an attentive text",
    "spec": "https://html.spec.whatwg.org/#the-b-element",
  },
  {
    "element": "base",
    "description": "specify document base URL",
    "spec": "https://html.spec.whatwg.org/#the-base-element",
    "attributes": {
      "href": "", 
      "target": ""
    }
  },
  {
    "element": "bdi",
    "description": "phrases an isolated text",
    "spec": "https://html.spec.whatwg.org/#the-bdi-element",
  },
  {
    "element": "bdo",
    "description": "phrases a bidirectional text",
    "spec": "https://html.spec.whatwg.org/#the-bdo-element",
  },
  {
    "element": "blockquote",
    "description": "groups quoted contents",
    "spec": "https://html.spec.whatwg.org/#the-blockquote-element",
    "attributes": {
      "cite": ""
    }
  },
  {
    "element": "body",
    "description": "groups document contents",
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
    "description": "specify a phrase break",
    "spec": "https://html.spec.whatwg.org/#the-br-element",
  },
  {
    "element": "button",
    "description": "specify a user action",
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
    "description": "specify an image on the fly",
    "spec": "https://html.spec.whatwg.org/#the-canvas-element",
    "attributes": {
      "width": "", 
      "height": ""
    }
  },
  {
    "element": "caption",
    "description": "groups table label contents",
    "spec": "https://html.spec.whatwg.org/#the-caption-element",
  },
  {
    "element": "cite",
    "description": "phrases the title of a work",
    "spec": "https://html.spec.whatwg.org/#the-cite-element",
  },
  {
    "element": "code",
    "description": "phrases a computer code",
    "spec": "https://html.spec.whatwg.org/#the-code-element",
  },
  {
    "element": "col",
    "description": "specify table column targets",
    "spec": "https://html.spec.whatwg.org/#the-col-element",
    "attributes": {
      "span": ""
    }
  },
  {
    "element": "colgroup",
    "description": "specify (list of) table column targets",
    "spec": "https://html.spec.whatwg.org/#the-colgroup-element",
    "attributes": {
      "span": ""
    }
  },
  {
    "element": "data",
    "description": "phrases a machine-readable text",
    "spec": "https://html.spec.whatwg.org/#the-data-element",
    "attributes": {
      "value": ""
    }
  },
  {
    "element": "datalist",
    "description": "specify the list of option elements",
    "spec": "https://html.spec.whatwg.org/#the-datalist-element",
  },
  {
    "element": "dd",
    "description": "groups dl name contents",
    "spec": "https://html.spec.whatwg.org/#the-dd-element",
  },
  {
    "element": "del",
    "description": "phrases a deleted text",
    "spec": "https://html.spec.whatwg.org/#the-del-element",
    "attributes": {
      "cite": "", 
      "datetime": ""
    }
  },
  {
    "element": "details",
    "description": "groups more contents",
    "spec": "https://html.spec.whatwg.org/#the-details-element",
    "attributes": {
      "open": ""
    }
  },
  {
    "element": "dfn",
    "description": "phrases a definition instance",
    "spec": "https://html.spec.whatwg.org/#the-dfn-element",
  },
  {
    "element": "dialog",
    "description": "groups transitory contents",
    "spec": "https://html.spec.whatwg.org/#the-dialog-element",
    "attributes": {
      "open": ""
    }
  },
  {
    "element": "div",
    "description": "groups blank contents",
    "spec": "https://html.spec.whatwg.org/#the-div-element",
  },
  {
    "element": "dl",
    "description": "groups name-value contents",
    "spec": "https://html.spec.whatwg.org/#the-dl-element",
  },
  {
    "element": "dt",
    "description": "groups dl value contents",
    "spec": "https://html.spec.whatwg.org/#the-dt-element",
  },
  {
    "element": "em",
    "description": "phrases a stressed text",
    "spec": "https://html.spec.whatwg.org/#the-em-element",
  },
  {
    "element": "embed",
    "description": "specify a stand-by integration point",
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
    "description": "groups control elements",
    "spec": "https://html.spec.whatwg.org/#the-fieldset-element",
    "attributes": {
      "disabled": "", 
      "form": "", 
      "name": ""
    }
  },
  {
    "element": "figcaption",
    "description": "groups figure label contents",
    "spec": "https://html.spec.whatwg.org/#the-figcaption-element",
  },
  {
    "element": "figure",
    "description": "groups offsetted independent contents",
    "spec": "https://html.spec.whatwg.org/#the-figure-element",
  },
  {
    "element": "footer",
    "description": "groups supplementary contents",
    "spec": "https://html.spec.whatwg.org/#the-footer-element",
  },
  {
    "element": "form",
    "description": "specify a link to process control elements",
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
    "description": "blocks heading level 1 contents",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h2",
    "description": "blocks heading level 2 contents",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h3",
    "description": "blocks heading level 3 contents",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h4",
    "description": "blocks heading level 4 contents",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h5",
    "description": "blocks heading level 5 contents",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "h6",
    "description": "blocks heading level 6 contents",
    "spec": "https://html.spec.whatwg.org/#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements",
  },
  {
    "element": "head",
    "description": "groups document metadata",
    "spec": "https://html.spec.whatwg.org/#the-head-element",
  },
  {
    "element": "header",
    "description": "groups introductory contents",
    "spec": "https://html.spec.whatwg.org/#the-header-element",
  },
  {
    "element": "hgroup",
    "description": "groups heading and related paragraphs",
    "spec": "https://html.spec.whatwg.org/#the-hgroup-element"
  },
  {
    "element": "hr",
    "description": "specify a paragraph break",
    "spec": "https://html.spec.whatwg.org/#the-hr-element",
  },
  {
    "element": "html",
    "description": "represents document metadata and content",
    "spec": "https://html.spec.whatwg.org/#the-html-element",
  },
  {
    "element": "i",
    "description": "phrases an alternated text",
    "spec": "https://html.spec.whatwg.org/#the-i-element",
  },
  {
    "element": "iframe",
    "description": "specify a content navigable",
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
    "description": "specify an image",
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
    "description": "specify a field for user content",
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
    "description": "phrases an inserted text",
    "spec": "https://html.spec.whatwg.org/#the-ins-element",
    "attributes": {
      "cite": "", 
      "datetime": ""
    }
  },
  {
    "element": "kbd",
    "description": "phrases a computer input",
    "spec": "https://html.spec.whatwg.org/#the-kbd-element",
  },
  {
    "element": "label",
    "description": "phrases an element label",
    "spec": "https://html.spec.whatwg.org/#the-label-element",
    "attributes": {
      "for": ""
    }
  },
  {
    "element": "legend",
    "description": "blocks a fieldset label",
    "spec": "https://html.spec.whatwg.org/#the-legend-element",
  },
  {
    "element": "li",
    "description": "groups list item contents",
    "spec": "https://html.spec.whatwg.org/#the-li-element",
    "attributes": {
      "value": ""
    },
    "attributesNote": "if element is not a child of ul or menu",
  },
  {
    "element": "link",
    "description": "specify a link to document resources",
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
    "description": "groups dominant contents",
    "spec": "https://html.spec.whatwg.org/#the-main-element",
  },
  {
    "element": "map",
    "description": "specify an image map",
    "spec": "https://html.spec.whatwg.org/#the-map-element",
    "attributes": {
      "name": ""
    }
  },
  {
    "element": "mark",
    "description": "phrases a marked text",
    "spec": "https://html.spec.whatwg.org/#the-mark-element",
  },
  {
    "element": "math",
    "description": "groups a single mathematical formula",
    "spec": "https://www.w3.org/Math/draft-spec/chapter2.html#interf.toplevel",
    "attributes": {
      "display": ""
    }
  },
  {
    "element": "menu",
    "description": "groups unordered toolbar list items",
    "spec": "https://html.spec.whatwg.org/#the-menu-element",
  },
  {
    "element": "meta",
    "description": "specify other document resources",
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
    "description": "phrases gauge of a known range",
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
    "description": "groups navigation contents",
    "spec": "https://html.spec.whatwg.org/#the-nav-element",
  },
  {
    "element": "noscript",
    "description": "represents disabled-script contents",
    "spec": "https://html.spec.whatwg.org/#the-noscript-element",
  },
  {
    "element": "object",
    "description": "specify other multimedia",
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
    "description": "groups ordered list items",
    "spec": "https://html.spec.whatwg.org/#the-ol-element",
    "attributes": {
      "reversed": "", 
      "start": "", 
      "type": ""
    }
  },
  {
    "element": "optgroup",
    "description": "specify a list of select option elements",
    "spec": "https://html.spec.whatwg.org/#the-optgroup-element",
    "attributes": {
      "disabled": "", 
      "label": ""
    }
  },
  {
    "element": "option",
    "description": "specify an option",
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
    "description": "phrases a user result",
    "spec": "https://html.spec.whatwg.org/#the-output-element",
    "attributes": {
      "for": "", 
      "form": "", 
      "name": ""
    }
  },
  {
    "element": "p",
    "description": "blocks paragraph contents",
    "spec": "https://html.spec.whatwg.org/#the-p-element",
  },
  {
    "element": "picture",
    "description": "specify an image with alternative sources",
    "spec": "https://html.spec.whatwg.org/#the-picture-element",
  },
  {
    "element": "pre",
    "description": "blocks preformatted contents",
    "spec": "https://html.spec.whatwg.org/#the-pre-element",
  },
  {
    "element": "progress",
    "description": "phrases gauge of an unknown range",
    "spec": "https://html.spec.whatwg.org/#the-progress-element",
    "attributes": {
      "value": "", 
      "max": ""
    }
  },
  {
    "element": "q",
    "description": "phrases a quoted text",
    "spec": "https://html.spec.whatwg.org/#the-q-element",
    "attributes": {
      "cite": ""
    }
  },
  {
    "element": "rp",
    "description": "phrases a ruby fallback",
    "spec": "https://html.spec.whatwg.org/#the-rp-element",
  },
  {
    "element": "rt",
    "description": "phrases a ruby component",
    "spec": "https://html.spec.whatwg.org/#the-rt-element",
  },
  {
    "element": "ruby",
    "description": "phrases a ruby annotation",
    "spec": "https://html.spec.whatwg.org/#the-ruby-element",
  },
  {
    "element": "s",
    "description": "phrases an irrelevant text",
    "spec": "https://html.spec.whatwg.org/#the-s-element",
  },
  {
    "element": "samp",
    "description": "phrases a computer output",
    "spec": "https://html.spec.whatwg.org/#the-samp-element",
  },
  {
    "element": "script",
    "description": "specify a document script",
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
    "description": "groups filtering elements",
    "spec": "https://html.spec.whatwg.org/#the-search-element",
  },
  {
    "element": "section",
    "description": "groups generic contents",
    "spec": "https://html.spec.whatwg.org/#the-section-element",
  },
  {
    "element": "select",
    "description": "specify a field for multi-option text",
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
    "description": "phrases a placeholder",
    "spec": "https://html.spec.whatwg.org/#the-slot-element",
    "attributes": {
      "name": ""
    }
  },
  {
    "element": "small",
    "description": "phrases a side comment",
    "spec": "https://html.spec.whatwg.org/#the-small-element",
  },
  {
    "element": "source",
    "description": "specify an alternative image or media",
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
    "description": "phrases a text",
    "spec": "https://html.spec.whatwg.org/#the-span-element",
  },
  {
    "element": "strong",
    "description": "phrases an important text",
    "spec": "https://html.spec.whatwg.org/#the-strong-element",
  },
  {
    "element": "style",
    "description": "specify a document CSS",
    "spec": "https://html.spec.whatwg.org/#the-style-element",
    "attributes": {
      "media": "", 
      "blocking": ""
    }
  },
  {
    "element": "sub",
    "description": "phrases a subscript",
    "spec": "https://html.spec.whatwg.org/#the-sub-and-sup-elements",
  },
  {
    "element": "summary",
    "description": "blocks a details label",
    "spec": "https://html.spec.whatwg.org/#the-legend-element",
  },
  {
    "element": "sup",
    "description": "phrases a superscript",
    "spec": "https://html.spec.whatwg.org/#the-sub-and-sup-elements",
  },
  {
    "element": "svg",
    "description": "groups scalable vector graphics",
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
    "description": "groups multi-dimensional contents",
    "spec": "https://html.spec.whatwg.org/#the-table-element",
  },
  {
    "element": "tbody",
    "description": "group table rows of body contents",
    "spec": "https://html.spec.whatwg.org/#the-tbody-element",
  },
  {
    "element": "td",
    "description": "group table cell contents",
    "spec": "https://html.spec.whatwg.org/#the-td-element",
    "attributes": {
      "colspan": "", 
      "rowspan": "", 
      "headers": ""
    }
  },
  {
    "element": "template",
    "description": "represents clonable contents",
    "spec": "https://html.spec.whatwg.org/#the-template-element",
  },
  {
    "element": "textarea",
    "description": "specify field for multi-line text",
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
    "description": "group table rows of column summaries",
    "spec": "https://html.spec.whatwg.org/#the-tfoot-element",
  },
  {
    "element": "th",
    "description": "group table cell headers",
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
    "description": "group table rows of column headers",
    "spec": "https://html.spec.whatwg.org/#the-thead-element",
  },
  {
    "element": "time",
    "description": "phrases a time data",
    "spec": "https://html.spec.whatwg.org/#the-time-element",
    "attributes": {
      "datetime": ""
    }
  },
  {
    "element": "title",
    "description": "specify the document title",
    "spec": "https://html.spec.whatwg.org/#the-title-element",
  },
  {
    "element": "tr",
    "description": "groups a table row",
    "spec": "https://html.spec.whatwg.org/#the-tr-element",
  },
  {
    "element": "track",
    "description": "specify a media time-based text",
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
    "description": "phrases an unarticulated text",
    "spec": "https://html.spec.whatwg.org/#the-u-element",
  },
  {
    "element": "ul",
    "description": "groups unordered list items",
    "spec": "https://html.spec.whatwg.org/#the-ul-element",
  },
  {
    "element": "var",
    "description": "phrases a variable",
    "spec": "https://html.spec.whatwg.org/#the-var-element",
  },
  {
    "element": "video",
    "description": "specify a video media",
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
    "description": "specify a word break opportunity",
    "spec": "https://html.spec.whatwg.org/#the-wbr-element",
  },
  {
    "element": "-",
    "description": "Represents autonomous custom elements",
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
    "description": "Represents nothing or text node.",
    "spec": "https://html.spec.whatwg.org/#text-content",
  },
]

module.exports = { elements }

"use strict";
/**
 * @fonts
 * the font config
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontStyles = void 0;
var styled_components_1 = require("styled-components");
// Beige (variable 100 - 900)
var BeigeVF_woff_1 = __importDefault(require("../fonts/beige/BeigeVF.woff"));
var BeigeVF_woff2_1 = __importDefault(require("../fonts/beige/BeigeVF.woff2"));
var BeigeVF_ttf_1 = __importDefault(require("../fonts/beige/BeigeVF.ttf"));
// Coffee
var CoffeeVF_woff_1 = __importDefault(require("../fonts/coffee/CoffeeVF.woff"));
var CoffeeVF_woff2_1 = __importDefault(require("../fonts/coffee/CoffeeVF.woff2"));
var CoffeeVF_ttf_1 = __importDefault(require("../fonts/coffee/CoffeeVF.ttf"));
// Devo
var DevoVF_woff_1 = __importDefault(require("../fonts/devo/DevoVF.woff"));
var DevoVF_woff2_1 = __importDefault(require("../fonts/devo/DevoVF.woff2"));
var DevoVF_ttf_1 = __importDefault(require("../fonts/devo/DevoVF.ttf"));
// Ember
var EmberVF_woff_1 = __importDefault(require("../fonts/ember/EmberVF.woff"));
var EmberVF_woff2_1 = __importDefault(require("../fonts/ember/EmberVF.woff2"));
var EmberVF_ttf_1 = __importDefault(require("../fonts/ember/EmberVF.ttf"));
// Jade
var JadeVF_woff_1 = __importDefault(require("../fonts/jade/JadeVF.woff"));
var JadeVF_woff2_1 = __importDefault(require("../fonts/jade/JadeVF.woff2"));
var JadeVF_ttf_1 = __importDefault(require("../fonts/jade/JadeVF.ttf"));
// Madeline
var MadelineVF_woff_1 = __importDefault(require("../fonts/madeline/MadelineVF.woff"));
var MadelineVF_woff2_1 = __importDefault(require("../fonts/madeline/MadelineVF.woff2"));
var MadelineVF_ttf_1 = __importDefault(require("../fonts/madeline/MadelineVF.ttf"));
// Obtuse
var ObtuseVF_woff_1 = __importDefault(require("../fonts/obtuse/ObtuseVF.woff"));
var ObtuseVF_woff2_1 = __importDefault(require("../fonts/obtuse/ObtuseVF.woff2"));
var ObtuseVF_ttf_1 = __importDefault(require("../fonts/obtuse/ObtuseVF.ttf"));
// Snowy Sans
var SnowySansVF_woff_1 = __importDefault(require("../fonts/sans/SnowySansVF.woff"));
var SnowySansVF_woff2_1 = __importDefault(require("../fonts/sans/SnowySansVF.woff2"));
var SnowySansVF_ttf_1 = __importDefault(require("../fonts/sans/SnowySansVF.ttf"));
// Textie
var TextieVF_woff_1 = __importDefault(require("../fonts/textie/TextieVF.woff"));
var TextieVF_woff2_1 = __importDefault(require("../fonts/textie/TextieVF.woff2"));
var TextieVF_ttf_1 = __importDefault(require("../fonts/textie/TextieVF.ttf"));
// Veronica
var VeronicaVF_woff_1 = __importDefault(require("../fonts/veronica/VeronicaVF.woff"));
var VeronicaVF_woff2_1 = __importDefault(require("../fonts/veronica/VeronicaVF.woff2"));
var VeronicaVF_ttf_1 = __importDefault(require("../fonts/veronica/VeronicaVF.ttf"));
exports.fontStyles = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    /* variable weight fonts */\n    @font-face {\n    font-family: 'Beige';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Coffee';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Devo';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Ember';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Jade';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Madeline';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Obtuse';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Snowy Sans';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Textie';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Veronica';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n\n    /* variable font fallback */\n\n"], ["\n\n    /* variable weight fonts */\n    @font-face {\n    font-family: 'Beige';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Coffee';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Devo';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Ember';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Jade';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Madeline';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Obtuse';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Snowy Sans';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Textie';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n    @font-face {\n    font-family: 'Veronica';\n    font-style: normal;\n    font-weight: 100 900;\n    src: url(", ") format('woff2'), /* Super Modern Browsers */\n        url(", ") format('woff'), /* Modern Browsers */\n        url(", ") format('truetype')\n    }\n\n    /* variable font fallback */\n\n"])), BeigeVF_woff2_1.default, BeigeVF_woff_1.default, BeigeVF_ttf_1.default, CoffeeVF_woff2_1.default, CoffeeVF_woff_1.default, CoffeeVF_ttf_1.default, DevoVF_woff2_1.default, DevoVF_woff_1.default, DevoVF_ttf_1.default, EmberVF_woff2_1.default, EmberVF_woff_1.default, EmberVF_ttf_1.default, JadeVF_woff2_1.default, JadeVF_woff_1.default, JadeVF_ttf_1.default, MadelineVF_woff2_1.default, MadelineVF_woff_1.default, MadelineVF_ttf_1.default, ObtuseVF_woff2_1.default, ObtuseVF_woff_1.default, ObtuseVF_ttf_1.default, SnowySansVF_woff2_1.default, SnowySansVF_woff_1.default, SnowySansVF_ttf_1.default, TextieVF_woff2_1.default, TextieVF_woff_1.default, TextieVF_ttf_1.default, VeronicaVF_woff2_1.default, VeronicaVF_woff_1.default, VeronicaVF_ttf_1.default);
var templateObject_1;

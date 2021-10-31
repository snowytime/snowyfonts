/**
 * @fonts
 * the font config
 */

import { css } from 'styled-components';

// Beige (variable 100 - 900)
import Beige_VF_woff from '../fonts/beige/BeigeVF.woff';
import Beige_VF_woff2 from '../fonts/beige/BeigeVF.woff2';
import Beige_VF_ttf from '../fonts/beige/BeigeVF.ttf';

// Coffee
import Coffee_VF_woff from '../fonts/coffee/CoffeeVF.woff';
import Coffee_VF_woff2 from '../fonts/coffee/CoffeeVF.woff2';
import Coffee_VF_ttf from '../fonts/coffee/CoffeeVF.ttf';

// Devo
import Devo_VF_woff from '../fonts/devo/DevoVF.woff';
import Devo_VF_woff2 from '../fonts/devo/DevoVF.woff2';
import Devo_VF_ttf from '../fonts/devo/DevoVF.ttf';

// Ember
import Ember_VF_woff from '../fonts/ember/EmberVF.woff';
import Ember_VF_woff2 from '../fonts/ember/EmberVF.woff2';
import Ember_VF_ttf from '../fonts/ember/EmberVF.ttf';

// Jade
import Jade_VF_woff from '../fonts/jade/JadeVF.woff';
import Jade_VF_woff2 from '../fonts/jade/JadeVF.woff2';
import Jade_VF_ttf from '../fonts/jade/JadeVF.ttf';

// Madeline
import Madeline_VF_woff from '../fonts/madeline/MadelineVF.woff';
import Madeline_VF_woff2 from '../fonts/madeline/MadelineVF.woff2';
import Madeline_VF_ttf from '../fonts/madeline/MadelineVF.ttf';

// Obtuse
import Obtuse_VF_woff from '../fonts/obtuse/ObtuseVF.woff';
import Obtuse_VF_woff2 from '../fonts/obtuse/ObtuseVF.woff2';
import Obtuse_VF_ttf from '../fonts/obtuse/ObtuseVF.ttf';

// Snowy Sans
import Sans_VF_woff from '../fonts/sans/SnowySansVF.woff';
import Sans_VF_woff2 from '../fonts/sans/SnowySansVF.woff2';
import Sans_VF_ttf from '../fonts/sans/SnowySansVF.ttf';

// Textie
import Textie_VF_woff from '../fonts/textie/TextieVF.woff';
import Textie_VF_woff2 from '../fonts/textie/TextieVF.woff2';
import Textie_VF_ttf from '../fonts/textie/TextieVF.ttf';

// Veronica
import Veronica_VF_woff from '../fonts/veronica/VeronicaVF.woff';
import Veronica_VF_woff2 from '../fonts/veronica/VeronicaVF.woff2';
import Veronica_VF_ttf from '../fonts/veronica/VeronicaVF.ttf';

export const fontStyles = css`

    /* variable weight fonts */
    @font-face {
    font-family: 'Beige';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Beige_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Beige_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Beige_VF_ttf}) format('truetype')
    }
    @font-face {
    font-family: 'Coffee';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Coffee_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Coffee_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Coffee_VF_ttf}) format('truetype')
    }
    @font-face {
    font-family: 'Devo';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Devo_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Devo_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Devo_VF_ttf}) format('truetype')
    }
    @font-face {
    font-family: 'Ember';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Ember_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Ember_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Ember_VF_ttf}) format('truetype')
    }
    @font-face {
    font-family: 'Jade';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Jade_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Jade_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Jade_VF_ttf}) format('truetype')
    }
    @font-face {
    font-family: 'Madeline';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Madeline_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Madeline_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Madeline_VF_ttf}) format('truetype')
    }
    @font-face {
    font-family: 'Obtuse';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Obtuse_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Obtuse_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Obtuse_VF_ttf}) format('truetype')
    }
    @font-face {
    font-family: 'Snowy Sans';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Sans_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Sans_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Sans_VF_ttf}) format('truetype')
    }
    @font-face {
    font-family: 'Textie';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Textie_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Textie_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Textie_VF_ttf}) format('truetype')
    }
    @font-face {
    font-family: 'Veronica';
    font-style: normal;
    font-weight: 100 900;
    src: url(${Veronica_VF_woff2}) format('woff2'), /* Super Modern Browsers */
        url(${Veronica_VF_woff}) format('woff'), /* Modern Browsers */
        url(${Veronica_VF_ttf}) format('truetype')
    }

    /* variable font fallback */

`;
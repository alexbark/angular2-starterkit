import { bootstrap }    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import { FORM_PROVIDERS } from '@angular/common';

import { MainComponent } from './components/main/main.component';

bootstrap(MainComponent, [ROUTER_PROVIDERS, FORM_PROVIDERS]);
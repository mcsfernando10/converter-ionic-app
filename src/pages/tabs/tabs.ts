import { Component } from '@angular/core';

import { ConvertMeasurements } from '../convert_measurements/convertMeasurements';
import { ContactPage } from '../contact/contact';
import { NicToDob } from '../nic_to_dob/nicToDob';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = NicToDob;
    tab2Root = ConvertMeasurements;
    tab3Root = ContactPage;

    constructor() {

    }
}

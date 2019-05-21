import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree } from '@ionic-native/admob-free';
import * as AppConstants from '../../constants/app_constants';
import * as UIHelper from '../../common/UIHelper';

@Component({
  selector: 'page-convertMeasurements',
  templateUrl: 'convertMeasurements.html'
})
export class ConvertMeasurements {

    measurementTypes: Array<object>;
    selectedMeasurement;

    numberToConvert: number;
    numberAfterConvert: number;
    selectedFromMeasurement;
    selectedToMeasurement;
    addNo: number;

    constructor(public navCtrl: NavController, private admobFree: AdMobFree) {
        this.measurementTypes = AppConstants.MEASUREMENT_TYPES;
        this.selectedMeasurement = AppConstants.MEASUREMENT_TYPES[0];
        this.initalizeSelectedValue();
        this.addNo = 1;
    }

    changeMeasuremntType(e) {
        this.initalizeSelectedValue();
    }

    changeMeasuremnt(e) {
        this.convertMeasurements();
    }

    initalizeSelectedValue() {
        this.selectedFromMeasurement = this.selectedMeasurement.measurements[0];
        this.selectedToMeasurement = this.selectedMeasurement.measurements[0];
    }

    changeConvertNumber(e) {

        if (this.addNo >= 10) {
            this.addNo = 1;
            UIHelper.displayInterstitialAd(this.admobFree);
        } else if(this.addNo === 1) {
            this.addNo++;
            UIHelper.displayBannerAd(this.admobFree);
        } else {
            this.addNo++;
        }

        this.convertMeasurements();
    }

    convertMeasurements() {

        if (this.numberToConvert) {
            let converterValueFrom = this.selectedMeasurement.rules[this.selectedFromMeasurement.value].converterValue;
            let converterValueTo = this.selectedMeasurement.rules[this.selectedToMeasurement.value].converterValue;
            this.numberAfterConvert = UIHelper.toFixed((converterValueFrom * this.numberToConvert)/converterValueTo);
        }

    }

}

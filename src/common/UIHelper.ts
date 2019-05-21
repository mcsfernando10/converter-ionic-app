import { AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import * as AppConstants from '../constants/app_constants';

export function displayBannerAd(admobFree) {
    let bannerConfig: AdMobFreeBannerConfig = {
        autoShow: true,
        id: AppConstants.BANNER_AD_ID,
        isTesting: true
    };

    admobFree.banner.config(bannerConfig);

    admobFree.banner.prepare().then(() => {
        //this.admobFree.banner.show();
        // let toast = this.toastCtrl.create({
        //     message: "Showing Add",
        //     duration: 3000,
        //     position: 'top'
        // });
        // toast.present();
    }).catch(e => {
        // let toast = this.toastCtrl.create({
        //     message: "Add error" + e,
        //     duration: 3000,
        //     position: 'top'
        // });
        // toast.present();
    });
}

export function displayInterstitialAd(admobFree) {
    let interstitialConfig: AdMobFreeInterstitialConfig = {
        isTesting: true,
        autoShow: true,
        id: AppConstants.INTERSTITIAL_AD_ID
    };
    admobFree.interstitial.config(interstitialConfig);
    admobFree.interstitial.prepare().then(() => {
    }).catch(e => {
    });
}

export function toFixed(number) {
    let scientificNo = number.toExponential();
    let noArray = scientificNo.toString().split('e');

    let exponentVal = parseInt(noArray[1]);

    if (exponentVal === 0) {
        return noArray[0];
    } else if (exponentVal >= 1 && exponentVal < 6) {
        return noArray[0] * Math.pow(10, exponentVal);
    } else {
        return roundValue(noArray[0], 5) + ' X 10<sup>' + exponentVal + '</sup>';
    }

}

export function roundValue(value, decimalPlaces) {
    let num = Math.pow(10, decimalPlaces);
    return Math.round(value * num) / num;
}

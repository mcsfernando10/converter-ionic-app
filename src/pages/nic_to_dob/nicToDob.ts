import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AdMobFree } from '@ionic-native/admob-free';
import * as AppConstants from '../../constants/app_constants';
import * as UIHelper from '../../common/UIHelper';

@Component({
    selector: 'page-nicToDOB',
    templateUrl: 'nicToDob.html'
})

export class NicToDob {
    nicForm: FormGroup;
    nicNo: string;
    isUserStartTyping: boolean;
    isDataVisible: boolean;

    birthday: string;
    gender: string;
    gendarIcon: string;
    eligible: string;
    oldOrNewIdType: string;
    addNo: number;
    constructor(
        public navCtrl: NavController,
        public formBuilder: FormBuilder,
        private admobFree: AdMobFree,
        public toastCtrl: ToastController) {

        this.nicNo = "";
        this.isUserStartTyping = false;
        this.gendarIcon = "Man";
        this.oldOrNewIdType = "old";
        this.addNo = 1;

        this.nicForm = formBuilder.group({
            nicNo: new FormControl(
                { value: this.nicNo },
                Validators.compose([Validators.required, Validators.pattern('[1-9][0-9]{8}[v|V|x|X]')])
            ),
            oldOrNewIdType: new FormControl(
                { value: this.oldOrNewIdType },
                Validators.compose([Validators.required, Validators.pattern('[old|new]')])
            )
        });
    }

    onIdChange(e) {
        this.isUserStartTyping = true;

        if (this.nicForm.controls.nicNo.valid) {
            this.displayResults();
        } else {
            this.isDataVisible = false;
        }

    }

    oldNewIdTypeChange(e) {
        this.nicNo = "";
        this.isDataVisible = false;

        if (this.oldOrNewIdType === "old") {
            this.nicForm.controls['nicNo'].setValidators([
                Validators.required, Validators.pattern('[1-9][0-9]{8}[v|V|x|X]')
            ]);
        } else {
            this.nicForm.controls['nicNo'].setValidators([
                Validators.required, Validators.pattern('[1-9][0-9]{11}')
            ]);
        }

    }

    displayResults() {
        this.isDataVisible = true;
        var dataObj = this.getBirthdayFromNIC(this.nicNo);
        var isOldId = this.oldOrNewIdType === "old";

        var formattedBirthDay = dataObj.year + "-" + dataObj.month + "-" + dataObj.date;
        var day = AppConstants.DAYS[new Date(formattedBirthDay).getDay()];
        this.birthday = day + ', ' + dataObj.date + ' ' + dataObj.month + ' ' + dataObj.year;
        this.gender = dataObj.gendar;
        this.gendarIcon = dataObj.gendar === "Male" ? "man" : "woman";
        this.eligible = isOldId ? (dataObj.canVote ? "You are eligible" : "You are not eligible") : "";

        if (this.addNo >= 4) {
            this.addNo = 1;
            UIHelper.displayInterstitialAd(this.admobFree);
        } else if(this.addNo === 2) {
            this.addNo++;
            UIHelper.displayBannerAd(this.admobFree);
        } else {
            this.addNo++;
        }

    }

    getBirthdayFromNIC(nicNo) {
        var isOldId = this.oldOrNewIdType === "old";

        var year = isOldId ? parseInt("19" + nicNo.substr(0, 2)) : parseInt(nicNo.substr(0, 4));
        var noOfDays = isOldId ? parseInt(nicNo.substr(2, 3)) : parseInt(nicNo.substr(4, 3));
        var gendar = "Male";
        if (noOfDays > 500) {
            gendar = "Female";
            noOfDays -= 500;
        }

        if (noOfDays > 366) {
            this.isDataVisible = false;
            this.nicForm.controls['nicNo'].setErrors({'incorrect': true});
        }

        var febDayCount = 29;
        var month = "";
        var date = 0;
        var canVote = isOldId ? nicNo.substr(9, 1) === "V" || nicNo.substr(9, 1) === "v" : '';

        if (noOfDays <= 31) {
            month = "January";
            date = noOfDays;
        } else if (noOfDays <= (31 + febDayCount)) {
            month = "February";
            date = noOfDays - (31);
        } else if (noOfDays <= (31 + febDayCount + 31)) {
            month = "March";
            date = noOfDays - (31 + febDayCount);
        } else if (noOfDays <= (31 + febDayCount + 31 + 30)) {
            month = "April";
            date = noOfDays - (31 + febDayCount + 31);
        } else if (noOfDays <= (31 + febDayCount + 31 + 30 + 31)) {
            month = "May";
            date = noOfDays - (31 + febDayCount + 31 + 30);
        } else if (noOfDays <= (31 + febDayCount + 31 + 30 + 31 + 30)) {
            month = "June";
            date = noOfDays - (31 + febDayCount + 31 + 30 + 31);
        } else if (noOfDays <= (31 + febDayCount + 31 + 30 + 31 + 30 + 31)) {
            month = "July";
            date = noOfDays - (31 + febDayCount + 31 + 30 + 31 + 30);
        } else if (noOfDays <= (31 + febDayCount + 31 + 30 + 31 + 30 + 31 + 31)) {
            month = "August";
            date = noOfDays - (31 + febDayCount + 31 + 30 + 31 + 30 + 31);
        } else if (noOfDays <= (31 + febDayCount + 31 + 30 + 31 + 30 + 31 + 31 + 30)) {
            month = "September";
            date = noOfDays - (31 + febDayCount + 31 + 30 + 31 + 30 + 31 + 31);
        } else if (noOfDays <= (31 + febDayCount + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31)) {
            month = "October";
            date = noOfDays - (31 + febDayCount + 31 + 30 + 31 + 30 + 31 + 31 + 30);
        } else if (noOfDays <= (31 + febDayCount + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30)) {
            month = "November";
            date = noOfDays - (31 + febDayCount + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31);
        } else {
            month = "December";
            date = noOfDays - (31 + febDayCount + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30);
        }
        return {year, month, date, canVote, gendar};
    }

}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ConvertMeasurements } from '../pages/convert_measurements/convertMeasurements';
import { ContactPage } from '../pages/contact/contact';
import { NicToDob } from '../pages/nic_to_dob/nicToDob';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    MyApp,
    ConvertMeasurements,
    ContactPage,
    NicToDob,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConvertMeasurements,
    ContactPage,
    NicToDob,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

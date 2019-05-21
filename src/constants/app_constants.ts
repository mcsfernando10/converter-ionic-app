export const BANNER_AD_ID = '';
export const INTERSTITIAL_AD_ID = '';
export const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const MEASUREMENT_TYPES = [
    {
        value: 'area',
        displayText: 'Area',
        measurements: [
            {
                value: 'sqm',
                displayText: 'Square Metre'
            },
            {
                value: 'sqkm',
                displayText: 'Square Kilo Metre'
            },
            {
                value: 'sqmile',
                displayText: 'Square Mile'
            },
            {
                value: 'sqyard',
                displayText: 'Square Yard'
            },
            {
                value: 'sqfoot',
                displayText: 'Sqaure Foot'
            },
            {
                value: 'sqinch',
                displayText: 'Square Inch'
            },
            {
                value: 'hectare',
                displayText: 'Hectare'
            },
            {
                value: 'acre',
                displayText: 'Acre'
            }
        ],
        rules: {
            sqm: {converterValue: 1},
            sqkm: {converterValue: 1000*1000},
            sqmile: {converterValue: 2.59*1000*1000},
            sqyard: {converterValue: 0.836127},
            sqfoot: {converterValue: 0.092903},
            sqinch: {converterValue: 0.00064516},
            hectare: {converterValue: 10000},
            acre: {converterValue: 4046.86}
        }
    },
    {
        value: 'dataTransferRate',
        displayText: 'Data Transfer Rate',
        measurements: [
            {
                value: 'bitpersecond',
                displayText: 'Bit per second'
            },
            {
                value: 'kilobitpersecond',
                displayText: 'Kilobit per second'
            },
            {
                value: 'kilobytepersecond',
                displayText: 'Kilobyte per second'
            },
            {
                value: 'kibibitpersecond',
                displayText: 'Kibibit per second'
            },
            {
                value: 'megabitpersecond',
                displayText: 'Megabit per second'
            },
            {
                value: 'megabytepersecond',
                displayText: 'Megabyte per second'
            },
            {
                value: 'mebibitpersecond',
                displayText: 'Mebibit per second'
            },
            {
                value: 'gigabitpersecond',
                displayText: 'Gigabit per second'
            },
            {
                value: 'gigabytepersecond',
                displayText: 'Gigabyte per second'
            },
            {
                value: 'gibibitpersecond',
                displayText: 'Gibibit per second'
            },
            {
                value: 'terabitpersecond',
                displayText: 'Terabit per second'
            },
            {
                value: 'terabytepersecond',
                displayText: 'Terabyte per second'
            },
            {
                value: 'tebibitpersecond',
                displayText: 'Tebibit per second'
            }
        ],
        rules: {
            bitpersecond: {converterValue: 1},
            kilobitpersecond: {converterValue: 1000},
            kilobytepersecond: {converterValue: 8000},
            kibibitpersecond: {converterValue: 1024},
            megabitpersecond: {converterValue: 1000*1000},
            megabytepersecond: {converterValue: 8*1000*1000},
            mebibitpersecond: {converterValue: 1.049*1000*1000},
            gigabitpersecond: {converterValue: 1000*1000*1000},
            gigabytepersecond: {converterValue: 8*1000*1000*1000},
            gibibitpersecond: {converterValue: 1.074*1000*1000*1000},
            terabitpersecond: {converterValue: 1000*1000*1000*1000},
            terabytepersecond: {converterValue: 8*1000*1000*1000*1000},
            tebibitpersecond: {converterValue: 1.1*1000*1000*1000*1000}
        }
    },
    {
        value: 'digitalStorage',
        displayText: 'Digital Storage',
        measurements: [
            {
                value: 'bit',
                displayText: 'Bit'
            },
            {
                value: 'kilobit',
                displayText: 'Kilobit'
            },
            {
                value: 'kibibit',
                displayText: 'Kibibit'
            },
            {
                value: 'megabit',
                displayText: 'Megabit'
            },
            {
                value: 'mebibit',
                displayText: 'Mebibit'
            },
            {
                value: 'gigabit',
                displayText: 'Gigabit'
            },
            {
                value: 'gibibit',
                displayText: 'Gibibit'
            },
            {
                value: 'terabit',
                displayText: 'Terabit'
            },
            {
                value: 'tebibit',
                displayText: 'Tebibit'
            },
            {
                value: 'petabit',
                displayText: 'Petabit'
            },
            {
                value: 'pebibit',
                displayText: 'Pebibit'
            },
            {
                value: 'byte',
                displayText: 'Byte'
            },
            {
                value: 'kilobyte',
                displayText: 'Kilobyte'
            },
            {
                value: 'kibibyte',
                displayText: 'Kibibyte'
            },
            {
                value: 'megabyte',
                displayText: 'Megabyte'
            },
            {
                value: 'mebibyte',
                displayText: 'Mebibyte'
            },
            {
                value: 'gigabyte',
                displayText: 'Gigabyte'
            },
            {
                value: 'gibibyte',
                displayText: 'Gibibyte'
            },
            {
                value: 'terabyte',
                displayText: 'Terabyte'
            },
            {
                value: 'tebibyte',
                displayText: 'Tebibyte'
            },
            {
                value: 'petabyte',
                displayText: 'Petabyte'
            },
            {
                value: 'pebibyte',
                displayText: 'Pebibyte'
            }
        ],
        rules: {
            bit: {converterValue: 1},
            kilobit: {converterValue: 1000},
            kibibit: {converterValue: 1024},
            megabit: {converterValue: 1000*1000},
            mebibit: {converterValue: 1.049*1000*1000},
            gigabit: {converterValue: 1000*1000*1000},
            gibibit: {converterValue: 1.074*1000*1000*1000},
            terabit: {converterValue: 1000*1000*1000*1000},
            tebibit: {converterValue: 1.1*1000*1000*1000*1000},
            petabit: {converterValue: 1000*1000*1000*1000*1000},
            pebibit: {converterValue: 1.126*1000*1000*1000*1000*1000},
            byte: {converterValue: 8},
            kilobyte: {converterValue: 8000},
            kibibyte: {converterValue: 8192},
            megabyte: {converterValue: 8*1000*1000},
            mebibyte: {converterValue: 8.389*1000*1000},
            gigabyte: {converterValue: 8*1000*1000*1000},
            gibibyte: {converterValue: 8.59*1000*1000*1000},
            terabyte: {converterValue: 8*1000*1000*1000*1000},
            tebibyte: {converterValue: 8.796*1000*1000*1000*1000},
            petabyte: {converterValue: 8*1000*1000*1000*1000*1000},
            pebibyte: {converterValue: 9.007*1000*1000*1000*1000*1000}
        }
    },
    {
        value: 'energy',
        displayText: 'Energy',
        measurements: [
            {
                value: 'joule',
                displayText: 'Joule'
            },
            {
                value: 'kilojoule',
                displayText: 'Kilo Joule'
            },
            {
                value: 'gramcal',
                displayText: 'Gram Calorie'
            },
            {
                value: 'kilocal',
                displayText: 'Kilo Calorie'
            },
            {
                value: 'watthour',
                displayText: 'Watt hour'
            },
            {
                value: 'kilowatthour',
                displayText: 'Kilowatt hour'
            },
            {
                value: 'electronVolt',
                displayText: 'ElectronVolt'
            },
            {
                value: 'britishunit',
                displayText: 'British Thermal Unit'
            },
            {
                value: 'usunit',
                displayText: 'US Thermal Unit'
            },
            {
                value: 'footpound',
                displayText: 'Foot Pound'
            }
        ],
        rules: {
            joule: {converterValue: 6.242*Math.pow(10, 18)},
            kilojoule: {converterValue: 6.242*Math.pow(10, 21)},
            gramcal: {converterValue: 2.611*Math.pow(10, 19)},
            kilocal: {converterValue: 2.611*Math.pow(10, 22)},
            watthour: {converterValue: 2.247*Math.pow(10, 22)},
            kilowatthour: {converterValue: 2.247*Math.pow(10, 25)},
            electronVolt: {converterValue: 1},
            britishunit: {converterValue: 6.585*Math.pow(10, 21)},
            usunit: {converterValue: 6.584*Math.pow(10, 26)},
            footpound: {converterValue: 8.462*Math.pow(10, 18)}
        }
    },
    {
        value: 'frequency',
        displayText: 'Frequency',
        measurements: [
            {
                value: 'hertz',
                displayText: 'Hertz'
            },
            {
                value: 'kilohertz',
                displayText: 'Kilo Hertz'
            },
            {
                value: 'megahertz',
                displayText: 'Mega Hertz'
            },
            {
                value: 'gigahertz',
                displayText: 'Giga Hertz'
            }
        ],
        rules: {
            hertz: {converterValue: 1},
            kilohertz: {converterValue: 1000},
            megahertz: {converterValue: 1000*1000},
            gigahertz: {converterValue: 1000*1000*1000}
        }
    },
    {
        value: 'length',
        displayText: 'Length',
        measurements: [
            {
                value: 'km',
                displayText: 'Kilo Metre'
            },
            {
                value: 'm',
                displayText: 'Metre'
            },
            {
                value: 'cm',
                displayText: 'CentiMetre'
            },
            {
                value: 'mm',
                displayText: 'MilliMetre'
            },
            {
                value: 'microm',
                displayText: 'MicroMetre'
            },
            {
                value: 'nm',
                displayText: 'NanoMetre'
            },
            {
                value: 'mile',
                displayText: 'Mile'
            },
            {
                value: 'yard',
                displayText: 'Yard'
            },
            {
                value: 'foot',
                displayText: 'Foot'
            },
            {
                value: 'inch',
                displayText: 'Inch'
            }
        ],
        rules: {
            nm: {converterValue: 1},
            microm: {converterValue: 1000},
            mm: {converterValue: 1000*1000},
            cm: {converterValue: 1000*1000*10},
            m: {converterValue: 1000*1000*1000},
            km: {converterValue: 1000*1000*1000*1000},
            mile: {converterValue: 1.609*1000*1000*1000*1000},
            yard: {converterValue: 0.9144*1000*1000*1000},
            foot: {converterValue: 0.3048*1000*1000*1000},
            inch: {converterValue: 2.54*1000*1000*10}
        }
    },
    {
        value: 'mass',
        displayText: 'Mass',
        measurements: [
            {
                value: 'gram',
                displayText: 'Gram'
            },
            {
                value: 'tonne',
                displayText: 'Tonne'
            },
            {
                value: 'kilogram',
                displayText: 'Kilogram'
            },
            {
                value: 'milligram',
                displayText: 'Milligram'
            },
            {
                value: 'microgram',
                displayText: 'Microgram'
            },
            {
                value: 'imperialton',
                displayText: 'Imperial Ton'
            },
            {
                value: 'uston',
                displayText: 'US Ton'
            },
            {
                value: 'stone',
                displayText: 'Stone'
            },
            {
                value: 'pound',
                displayText: 'Pound'
            },
            {
                value: 'ounce',
                displayText: 'Ounce'
            }
        ],
        rules: {
            gram: {converterValue: Math.pow(10,6)},
            tonne: {converterValue: Math.pow(10,12)},
            kilogram: {converterValue: Math.pow(10,9)},
            milligram: {converterValue: Math.pow(10,3)},
            microgram: {converterValue: 1},
            imperialton: {converterValue: 1.016*Math.pow(10,12)},
            uston: {converterValue: 9.072*Math.pow(10,11)},
            stone: {converterValue: 6.35*Math.pow(10,9)},
            pound: {converterValue: 4.536*Math.pow(10,8)},
            ounce: {converterValue: 2.835*Math.pow(10,7)}
        }
    },
    {
        value: 'pressure',
        displayText: 'Pressure',
        measurements: [
            {
                value: 'pascal',
                displayText: 'Pascal'
            },
            {
                value: 'atomosphere',
                displayText: 'Atomosphere'
            },
            {
                value: 'bar',
                displayText: 'Bar'
            },
            {
                value: 'poundforce',
                displayText: 'Pound Force per square inch'
            },
            {
                value: 'torr',
                displayText: 'Torr'
            }
        ],
        rules: {
            pascal: {converterValue: 1},
            atomosphere: {converterValue: 101325},
            bar: {converterValue: 100000},
            poundforce: {converterValue: 6894.76},
            torr: {converterValue: 133.322}
        }
    },
    {
        value: 'speed',
        displayText: 'Speed',
        measurements: [
            {
                value: 'metrepersecond',
                displayText: 'Metre per second'
            },
            {
                value: 'milesperhour',
                displayText: 'Miles per hour'
            },
            {
                value: 'footperhour',
                displayText: 'Foot per hour'
            },
            {
                value: 'kmperhour',
                displayText: 'Kilometre per hour'
            },
            {
                value: 'knot',
                displayText: 'Knot'
            }
        ],
        rules: {
            metrepersecond: {converterValue: 1},
            milesperhour: {converterValue: 0.44704},
            footperhour: {converterValue: 0.3048},
            kmperhour: {converterValue: 1/3.6},
            knot: {converterValue: 1/1.944}
        }
    },
    {
        value: 'time',
        displayText: 'Time',
        measurements: [
            {
                value: 'nanosecond',
                displayText: 'Nano Second'
            },
            {
                value: 'microsecond',
                displayText: 'Micro Second'
            },
            {
                value: 'millisecond',
                displayText: 'Milli Second'
            },
            {
                value: 'second',
                displayText: 'Second'
            },
            {
                value: 'minute',
                displayText: 'Minute'
            },
            {
                value: 'day',
                displayText: 'Day'
            },
            {
                value: 'year',
                displayText: 'Year'
            },
            {
                value: 'decade',
                displayText: 'Decade'
            },
            {
                value: 'century',
                displayText: 'Century'
            }
        ],
        rules: {
            nanosecond: {converterValue: 1},
            microsecond: {converterValue: 1000},
            millisecond: {converterValue: 1000*1000},
            second: {converterValue: 1000*1000*1000},
            minute: {converterValue: 60*1000*1000*1000},
            hour: {converterValue: 60*60*1000*1000*1000},
            day: {converterValue: 24*60*60*1000*1000*1000},
            year: {converterValue: 365*24*60*60*1000*1000*1000},
            decade: {converterValue: 10*365*24*60*60*1000*1000*1000},
            century: {converterValue: 100*365*24*60*60*1000*1000*1000}
        }
    }
];

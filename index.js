var
    range = function (start, end) {
        var result = [];
        if (/[A-Z a-z]/.test(start) && /[A-Z a-z]/.test(end)) {
            for (var i = start.charCodeAt(0), j = end.charCodeAt(0); i <= j; ++i) {
                result.push(String.fromCharCode(i));
            }
        } else {
            for (var i = start, j = end; i <= j; ++i) {
                result.push(parseInt(i));
            }

        }

        return result;
    };

var None = 'ندارد',
    Na = "نا مشخص",
    SaderatImprove = "بانک توسعه صادرات ایران",
    Entrepreneur = 'بانک کارآفرین',
    Sepah = "بانک سپه",
    RefahWorkers = "بانک رفاه کارگران",
    Saderat = "بانک صادرات ایران",
    Agricultural = "بانک کشاورزی",
    Melli = "بانک ملّی",
    Mellat = "بانک ملّت",
    Saman = "بانک سامان",
    Parsian = "بانک پارسیان",
    Tejarat = "بانک تجارت",
    EgtesadNovin = "بانک اقتصاد نوین",
    PostBank = "پست بانک ایران",
    Industry = "بانک صنعت و معدن",
    Maskan = "بانک مسکن",
    ImproveCredential = "موسسه اعتباری توسعه",
    Central = "بانک مرکزی",
    Pasrgad = "بانک پاسارگاد",
    Capital = "بانک سرمایه",
    City = "بانک شهر",
    CooperationImprove = "بانک توسعه تعاون",
    Dey = "بانک دی",
    Travel = "بانک گردشگری",
    IranZamin = "بانک ایران زمین",
    Kosar = "موسسه اعتباری کوثر",
    MeherIran = "بانک  قرض الحسنه مهر ایران",
    Ansar = "بانک انصار",
    Tat = "بانک تات",
    Hekmat = "بانک حکمت ایرانیان",
    Sina = "بانک سینا",
    MehrEghtesad = "بانک مهر اقتصاد",
    Ghavamin = "بانک قوامین",
    Ayande = "بانک آینده",
    Resalat = "بانک رسالت";


function getBankNameByCardNumber(cardNumber) {
    if (typeof (cardNumber) != 'string')
        return Na;
    cardNumber = cardNumber.replace("-", "");
    if (cardNumber.length != 16)
        return Na;
    var cardFormat = cardNumber.substring(0, 6);
    return getBankNameByCardFormat(cardFormat);
}



function getBankNameByShebaNumber(shebaNumber) {
    if (typeof (shebaNumber) != 'string')
        return Na;
    shebaNumber = shebaNumber.replace("-", "");
    if (!isValidSheba(shebaNumber))
        return Na;
    var shebaFormat = shebaNumber.substring(4, 7);
    return getBankNameByShebaFormat(shebaFormat);
}


function isValidSheba(input) {
    var ibanReplaceValues = [],
        ibanReplaceChars = [],
        tmpIBAN;

    if (input) {

        input = input.replace(/[\W_]+/, '');

        if ((input.length < 4 || input.length > 34) || (!isNaN(input[0]) ||
            !isNaN(input[1])) || (isNaN(input[2]) || isNaN(input[3]))) {

            this.result = false;
        }

        ibanReplaceChars = range('A', 'Z');

        range(10, 35).forEach(function (tempvalue) {
            ibanReplaceValues.push(tempvalue.toString());
        });

        tmpIBAN = input.substr(4, input.length - 4) + input.substr(0, 4);

        ibanReplaceChars.forEach(function (value, index) {
            for (var i = 0; i < tmpIBAN.length; i++) {
                if (tmpIBAN[i] == value) {
                    tmpIBAN = tmpIBAN.replace(tmpIBAN[i], ibanReplaceValues[index]);
                }
            }
        });

        tmpValue = parseInt(tmpIBAN.substr(0, 1));

        for (var i = 1; i < tmpIBAN.length; i++) {
            tmpValue *= 10;
            tmpValue += parseInt(tmpIBAN.substr(i, 1));
            tmpValue %= 97;
        }

        if (tmpValue != 1) {
            return false;
        }
        return true;
    }
    return false;

}

function getShebaFormat(bank) {
    switch (bank) {
        case None:
            return ["0"]
        case Na:
            return ["0"]
        case SaderatImprove:
            return ["020"]
        case Entrepreneur:
            return ["053"]
        case Sepah:
            return ["015"]
        case RefahWorkers:
            return ["013"]
        case Saderat:
            return ["019"]
        case Agricultural:
            return ["016"]
        case Melli:
            return ["017"]
        case Mellat:
            return ["012"]
        case Saman:
            return ["056"]
        case Parsian:
            return ["054"]
        case Tejarat:
            return ["018"]
        case EgtesadNovin:
            return ["055"]
        case PostBank:
            return ["021"]
        case Industry:
            return ["011"]
        case Maskan:
            return ["014"]
        case ImproveCredential:
            return ["051"]
        case Central:
            return ["010"]
        case Pasrgad:
            return ["057"]
        case Capital:
            return ["058"]
        case City:
            return ["061"]
        case CooperationImprove:
            return ["022"]
        case Dey:
            return ["066"]
        case Travel:
            return ["064"]
        case IranZamin:
            return ["069"]
        case Kosar:
            return [""]
        case MeherIran:
            return ["060"]
        case Ansar:
            return ["063"]
        case Tat:
            return [""]
        case Hekmat:
            return ["065"]
        case Sina:
            return ["059"]
        case MehrEghtesad:
            return [""]
        case Ghavamin:
            return [""]
        case Ayande:
            return ["062"]
        case Resalat:
            return ["070"]
        default:
            return ["0"]
    }

}

function getBankNameByShebaFormat(cardFormat) {
    switch (cardFormat) {
        case "0":
            return Na;
        case "020":
            return SaderatImprove;
        case "053":
            return Entrepreneur;
        case "015":
            return Sepah;
        case "013":
            return RefahWorkers;
        case "019":
            return Saderat;
        case "016":
            return Agricultural;
        case "017":
            return Melli;
        case "012":
            return Mellat;
        case "056":
            return Saman;
        case "054":
            return Parsian;
        case "018":
            return Tejarat;
        case "055":
            return EgtesadNovin;
        case "021":
            return PostBank;
        case "011":
            return Industry;
        case "014":
            return Maskan;
        case "051":
            return ImproveCredential;
        case "010":
            return Central;
        case "057":
            return Pasrgad;
        case "058":
            return Capital;
        case "061":
            return City;
        case "022":
            return CooperationImprove;
        case "066":
            return Dey;
        case "064":
            return Travel;
        case "069":
            return IranZamin;
        case "060":
            return MeherIran;
        case "063":
            return Ansar;
        case "065":
            return Hekmat;
        case "059":
            return Sina;
        case "062":
            return Ayande;
        case "070":
            return Resalat;
        default:
            return Na;
    }
}


function getBankNameByCardFormat(cardFormat) {
    switch (cardFormat) {
        case "0":
            return Na;
        case "207177":
            return SaderatImprove;
        case "627648":
            return SaderatImprove;
        case "502910":
            return Entrepreneur;
        case "627488":
            return Entrepreneur;
        case "589210":
            return Sepah;
        case "589463":
            return RefahWorkers;
        case "603769":
            return Saderat;
        case "603770":
            return Agricultural;
        case "639217":
            return Agricultural;
        case "603799":
            return Melli;
        case "610433":
            return Mellat;
        case "991975":
            return Mellat;
        case "621986":
            return Saman;
        case "622106":
            return Parsian;
        case "627884":
            return Parsian;
        case "639194":
            return Parsian;
        case "627353":
            return Tejarat;
        case "627412":
            return EgtesadNovin;
        case "627760":
            return PostBank;
        case "627961":
            return Industry;
        case "628023":
            return Maskan;
        case "628157":
            return ImproveCredential;
        case "636795":
            return Central;
        case "502229":
            return Pasrgad;
        case "639347":
            return Pasrgad;
        case "639607":
            return Capital;
        case "502806":
            return City;
        case "504706":
            return City;
        case "502908":
            return CooperationImprove;
        case "502938":
            return Dey;
        case "505416":
            return Travel;
        case "505785":
            return IranZamin;
        case "505801":
            return Kosar;
        case "606373":
            return MeherIran;
        case "627381":
            return Ansar;
        case "636214":
            return Tat;
        case "636949":
            return Hekmat;
        case "639346":
            return Sina;
        case "639370":
            return MehrEghtesad;
        case "639599":
            return Ghavamin;
        default:
            return Na;
    }
}

module.exports = {
   getNameByCardNumber: getBankNameByCardNumber,
   getNameBySheba: getBankNameByShebaNumber,
   isValidSheba: isValidSheba 
}
app.addSubMenu({ cName: "HEDCO", cParent: "Help", nPos: 0 })

app.addMenuItem({ cName: "Color Comments", cParent: "HEDCO", cExec: "colorComments();"});

app.addMenuItem({ cName: "-", cParent: "HEDCO", cExec: " " });

app.addMenuItem({ cName: "Qeshm Pressure Vessel Spec", cParent: "HEDCO", cExec: 'app.openDoc({ cPath: "/192.168.0.110/Data/MD/Master Files/SAJADIAN/AcrobatMenu/Qeshm/2125-MD-00-ESS-203.pdf" })' });
app.addMenuItem({ cName: "Qeshm Pressure Vessel Spec", cParent: "HEDCO", cExec: 'app.openDoc({ cPath: "/192.168.0.110/Data/MD/Master Files/SAJADIAN/AcrobatMenu/Qeshm/2125-MD-00-ESS-201.pdf" })' });
app.addMenuItem({ cName: "Qeshm Default Nozzle Load", cParent: "HEDCO", cExec: 'app.openDoc({ cPath: "/192.168.0.110/Data/MD/Master Files/SAJADIAN/AcrobatMenu/Qeshm/2125-MD-00-ESS-212.pdf" })' });

app.addMenuItem({ cName: "-", cParent: "HEDCO", cExec: " " });

app.addMenuItem({ cName: "C2+ Standard Drawing", cParent: "HEDCO", cExec: 'app.openDoc({ cPath: "/192.168.0.110/Data/MD/Master Files/SAJADIAN/AcrobatMenu/C2/0-MD-00-ESS-203.pdf" })' });
app.addMenuItem({ cName: "C2+ Pressure Vessel Spec", cParent: "HEDCO", cExec: 'app.openDoc({ cPath: "/192.168.0.110/Data/MD/Master Files/SAJADIAN/AcrobatMenu/C2/0-MD-00-ESS-201.pdf" })' });
app.addMenuItem({ cName: "C2+ Default Nozzle Load", cParent: "HEDCO", cExec: 'app.openDoc({ cPath: "/192.168.0.110/Data/MD/Master Files/SAJADIAN/AcrobatMenu/C2/0-MD-00-ESS-208.pdf" })' });


function findDept(name) {
    for (var i = 0; i < MD_dept.length; i++) { if (name.toLocaleLowerCase() == MD_dept[i].toLocaleLowerCase()) return mdcolor; }
    for (var i = 0; i < PR_dept.length; i++) { if (name.toLocaleLowerCase() == PR_dept[i].toLocaleLowerCase()) return prcolor; }
    for (var i = 0; i < PI_dept.length; i++) { if (name.toLocaleLowerCase() == PI_dept[i].toLocaleLowerCase()) return picolor; }
    for (var i = 0; i < ST_dept.length; i++) { if (name.toLocaleLowerCase() == ST_dept[i].toLocaleLowerCase()) return stcolor; }
    for (var i = 0; i < QC_dept.length; i++) { if (name.toLocaleLowerCase() == QC_dept[i].toLocaleLowerCase()) return qccolor; }
    for (var i = 0; i < PN_dept.length; i++) { if (name.toLocaleLowerCase() == PN_dept[i].toLocaleLowerCase()) return pncolor; }
    for (var i = 0; i < IN_dept.length; i++) { if (name.toLocaleLowerCase() == IN_dept[i].toLocaleLowerCase()) return incolor; }
    for (var i = 0; i < EL_dept.length; i++) { if (name.toLocaleLowerCase() == EL_dept[i].toLocaleLowerCase()) return elcolor; }
    return false;
}


MD_dept = ["Abbasipour.Iman", "Afzali.Hossein", "Ahmadi.Mohammad", "Fakhari.Mohammadreza", "Ghorbanpour.Majid", "Heidary.Roohollah", "Izadi.Reza", "Liaghat.Mohammad", "Nemati.Hossein", "Obeydi.Maryam", "Sadeghian.Ali", "Sajadian.Ahmad", "Saraei.Ali", "Seraj.Mohammad", "Shahabirad.Hamed", "Shekoohi.Alireza", "Sohrabi.Navid", "Sokouti.Iman", "Yazdanpanah.ali"];
PR_dept = ["Abootalebi.Samira","Adloo.Hadi","dehghani.emad","Ebrahimi.mohammad","Eshrati.Hojjat","Esmaeilzadeh.Zahra","Farhangian.Hamed","Fooladivanda.Maryam","Fotouhnezhad.Alireza","Hashemi.Farshid","Hooshmand.Navid","Hozhabrbayan.Narsis","Inaloo.Mohsen","Jafari.Somayeh","Kamali.amin","Karami.Meysam","Keshmiri.Zahra","Kordi.Hadis","Mahasen.Mahmoud","Mahmoudi.Mahdi","Masoudi.Mehran","Mostamand.Ashkan","Rafiee.Teimoor","Razmavar.alireza","Riazirad.Zahra","Rouzmand.ali","Sadeghi.Mohammad","Sattar.Hamidreza","Shiri.Alimohammad","Tohidian.Tahere","Zare.Ali"];
PI_dept = ["Abbasi.Marjan", "Akbari.Amirhossein", "Arjangi.Behnaz", "Arjmandi.Javad", "Ashkabousi.Melody", "Dadkhah.Reza", "Ebrahiminejhad.Vahid", "Eslami.Mohsen", "Fayyazi.Ali", "Fazeli.Razieh", "Foroughan.Ali", "Ghalatian.Hossein", "Ghasemi.Mohammad", "Ghorashi.Kamal", "Golpich.Mohammad", "Haghighat.Parviz", "Haghnegahdar.Ali", "Hosseini.Negin", "Iranmahbob.Majid", "Jamshidi.Niloofar", "Karimi.Hadi", "Karimi.Iman", "Kashaei.Hossein", "Loghmani.Bahram", "Mansouri.Esmaeil", "Mansouri.Mojtaba", "Miri.Ahmadreza", "moeini.mahsa", "Moeini.Mehdi", "Mohammadi.Delaram", "Momeni.Vahidreza", "Moniri.Jalal", "Motevasel.Ali", "Mousavi.Mehdi", "Mousazadeh.Sara", "Nemati.Afshin", "Nematolahi.Sasan", "Nurmohamadian.Maryam", "Panahi.babak", "Parchami.Saeid", "Rahmati.Abbas", "Rashidi.Somayeh", "Roshanzadeh.ali", "Sabzezar.Nazanin", "Shenasa.Amir", "Soleimannia.Soheil", "Torabian.Saeid", "Zarei.Mansour"];
ST_dept = ["Akbari.Mona", "Amini.Navid", "Bayat.Samira", "Bitaab.Hesam", "bitaab.mojtaba", "Emami.Amin", "Enshaiean.Alireza", "Eslahi.Ali", "Farahani.Ahmad", "Farahani.Alireza", "Farahmand.Sara", "Fooladivanda.Mahsa", "Ganjvar.Mehrdad", "Gerist.Saleheh", "Haeri.Mohsen", "Haghjoo.farzaneh", "Hamidi.Ebrahim", "Hasheminasab.Hamid", "Iraji.Kambiz", "Jasemi.Ali", "Karimi.Mojtaba", "Kashkooli.Nabi", "Kashkouli.Ehsan", "Keshavarz.Mohammad", "Kholghi.Mohamad", "Masoumi.Mohammad", "Nikkhou.Amin", "Pourkarimi.Behnam", "Rahimi.Zahra", "Safaee.Ashkan", "Salimi.Mozhdeh", "Sedighi.Hassan", "Shaghaghian.Reza", "Shirafkan.Elham", "Tabeian.Reza", "Vahedi.Alireza", "Varzandian.Hadi", "Yazdanpanahi.Afsaneh", "Zandilak.Erfan", "Zare.Mohamad"];
QC_dept = ["Faqihi.Fardad", "Lalehparvar.mehdi", "Nahvizadeh.Yashar", "Omidi.rahmat", "Pardis.Nima", "Parsafar.Yousef", "Taghvaei.HamidReza"];
PN_dept = ["Dehdashtian.Sajjad", "Eftekhar.Mehdi", "Eftekhar.Saleheh", "Etemadi.Sheida", "Ghane.Mojtaba", "Mansourzadeh.Mehrzad", "Mostamand.Reza", "Sharifi.Ali"];
IN_dept = ["Abtahi.Zahra", "Akbarifard.Saeed", "Alavi.Jamal", "Barangizi.Hooman", "Deilami.Hossein", "Doosti.Mohamad", "Emami.Farzad", "Eskandari.Hamidreza", "Faghihi.Ebrahim", "Fattahzadeh.Mojtaba", "Hesamzadeh.Mehdi", "Izadi.Asieh", "Jeddi.Ali", "Kharmandar.negar", "Kiomarsi.Morteza", "Mandegar.Saeed", "Najafi.Mohamadhasan", "Paselari.hossein", "Rahimzadeh.Siamak", "Rasulzadeh.arsalan", "Sabzezar.Maryam", "Sadeghi.Behrooz", "Shahriary.Mohammad", "Tavakolipour.Abbas", "Tavoosi.Iman", "Vosoughi.Arman"];
EL_dept = ["Abunasri.Alireza", "Aghaie.Peyman", "Barani.Mostafa", "eshaghi.alireza", "Farhadi.sasan", "Hazrati.Mehran", "Jokar.Mehdi", "Mahmoudirad.Mohsen", "Mesforoush.Mohammad", "Nazarboland.Mohsen", "Parhamian.Hamed", "Pirpour.Samaneh", "Rahimi.Ahmad", "Raisi.Farzaneh", "Razavi.ehsan", "Rezaei.Javad", "Sedaghat.ehsan", "Shantiaee.Abdollah", "Shayegani.Amir", "Sobhanmanesh.Amineh", "Taheri.Mehdi", "Yousefi.Mohammad"];

var mdcolor = color.red;
var prcolor = ["RGB", 0, 0, .8];
var picolor = ["RGB", 0.6, 0.3, 0];
var stcolor = ["RGB", 0, 0.8, 0];
var incolor = ["RGB", 0.6, 0, 0.6];
var qccolor = ["RGB", 0, 0.6, 0.6];
var elcolor = ["RGB", 0.3, 0.3, 0.3];
var pncolor = ["RGB", 0, 0, 0];

function colorComments() {
    //Get a list of Comments
    var commentList = this.getAnnots();
    if (commentList == null) {
        console.println("Failed to get Comments");
    }
    else {
        console.println("Found " + commentList.length + " Comments, Iterating through comments");
    }

    //Iterate through the comment List and change the Colors
    for each(comment in commentList)
    {
        var _color = findDept(comment.author);
        var fillColorTransparent = false;
        if (comment.fillColor == "T") {
            fillColorTransparent = true;
        }

        var myProps = {};

        if (_color) {
            myProps.strokeColor = _color;
        }

        if (!fillColorTransparent) myProps.fillColor = color.white;

        // Assign the common properties to a previously created annot:
        comment.setProps(myProps);

        if (comment == null) {
            console.println("Found undefined annot!");
        }

        switch (comment.type) {
            case "FreeText":
                {
                    var spans = new Array;
                    for each(span in comment.richContents)
                    {
                        if(_color) span.textColor = _color;
                        spans[spans.length] = span;
                    }
                    comment.richContents = spans;
                    break;
                }
        }
    }
}

colorComments();
﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    //var descriptions = {};

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        //var parentElement = document.getElementById('deviceready');
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        //if (navigator.connection.type === Connection.NONE) {
        //    navigator.notification.alert('An internet connection is required to continue');
        //} else {
        //    window.location = "http://www.sikh.events";
        //}
        //var targetUrl = "http://www.sikh.events";
        //var bkpLink = document.getElementById("bkpLink");
        //bkpLink.setAttribute("href", targetUrl);  
        //bkpLink.text = targetUrl;
        //window.location.replace(targetUrl);
        //document.body.classList.add(cordova.platformId);

        $('#aboutBtn').click(showAbout);

        //load events from sikh.events
        getEvents("");
        //$.getJSON("http://www.sikh.events/getprograms.php", function (data) {
        //    console.log("Loading sikhevents");
        //    var items = [];
        //    $.each(data, function (key, val) {
        //        createEvents(val, items,"sikhevents");
        //    });

        //    $("<div/>", {
        //        "class": "my-new-list",
        //        html: items.join("")
        //    }).appendTo(".main-list");
        //    $(".sikhevents .infoBtn").on("click", showDescription);
        //    $$('.sikhevents .icalBtn').on('click', function () {

        //        var id = this.getAttribute("val");
        //        var url = images[id];
        //        var popupHTML = '<div class="popup">' +
        //            '<div class="content-block">' +
        //            '<p><a href="#" class="close-popup">Close</a></p>' +
        //            '<img src="'+url +'"  width="100%"/>' +
        //            '</div>' +
        //            '</div>';
        //        myApp.popup(popupHTML);
        //    });
        //    //$(".sikhevents .icalBtn").on('click', exporttocal);
        //});

          
            //only add margin between buttons if width is above a certain minimum, 
            //otherwise they go into 2 rows (iphones)
            var w = $(".sd").width();
            if (w > 80) {
                $(".infoBtn").css("margin-right", "15px");
            }

           // Open map links with InAppBrowser
           $('body').on('click', '.map-link', function(e) {
                systemLink($(this).attr('href'));
           });


        //load and add regions
           $.getJSON("http://www.sikh.events/getlocations.php?regions=current", function (data) {
               console.log("Loading Regions");
               var regions = {};
               //alert(data);
               $.each(data, function (key, val) {
                   regions[val["name"]] = val["regionid"];

                   $('#regions').append('<li class="navbtn" val="' + 
                            val["regionid"] +
                           '"><div class="item-content"><div class="item-inner"><div class="item-title">'+
                           val["name"]+  
                        '</div></div></div></li>');
               });

               //add click handler for region/source buttons
               $(".navbtn").on("click", showlist);
           });

        //add filter buttons
           $$('#filter').on('click', function () {
               var buttons = [
                   {
                       text: 'All Events',
                       onClick: function () {
                           getEvents("");
                           $('#filtericon').css('background-color', 'transparent');
                       }
                   },
                   {
                       text: 'Kirtan',
                       onClick: function () {
                           getEvents("?type=kirtan");
                           $('#filtericon').css('background-color', 'lightgrey');
                       }
                   },
                   {
                       text: 'Katha',
                       onClick: function () {
                           getEvents("?type=katha");
                       }
                   },
                    {
                        text: 'Camp',
                        onClick: function () {
                            getEvents("?type=camp");
                        }
                    },
                   {
                       text: 'Cancel'
                   }
               ];
               myApp.actions(buttons);
           });
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();

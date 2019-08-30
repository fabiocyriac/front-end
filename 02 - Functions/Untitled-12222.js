<!DOCTYPE html>
<html lang="en">

<head>
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .box:before {
            content: attr(id);
        }

        * {
            box-sizing: border-box;
        }
        /* Style the body */

        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
        }
        /* Header/logo Title */

        .header {
            padding: 80px;
            text-align: center;
            background-image: linear-gradient(255deg, #00c1bf, #53b700);
            color: white;
        }
        /* Increase the font size of the heading */

        .header h1 {
            font-size: 40px;
        }
        /* Sticky navbar - toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). The sticky value is not supported in IE or Edge 15 and earlier versions. However, for these versions the navbar will inherit default position */

        .navbar {
            overflow: hidden;
            background-color: #333;
            position: sticky;
            position: -webkit-sticky;
            top: 0;
        }
        /* Style the navigation bar links */

        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
        }
        /* Right-aligned link */

        .navbar a.right {
            float: right;
        }
        /* Change color on hover */

        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        /* Active/current link */

        .navbar a.active {
            background-color: #666;
            color: white;
        }
        /* Column container */

        .row {
            display: -ms-flexbox;
            /* IE10 */
            display: flex;
            -ms-flex-wrap: wrap;
            /* IE10 */
            flex-wrap: wrap;
        }
        /* Create two unequal columns that sits next to each other */
        /* Sidebar/left column */

        .side {
            -ms-flex: 30%;
            /* IE10 */
            flex: 30%;
            background-color: #f1f1f1;
            padding: 20px;
        }
        /* Main column */

        .main {
            -ms-flex: 70%;
            /* IE10 */
            flex: 70%;
            background-color: white;
            padding: 20px;
        }
        /* Fake image, just for this example */

        .fakeimg {
            background-color: white;
            width: 100%;
            padding: 20px;
        }
        /* Footer */

        .footer {
            padding: 20px;
            text-align: center;
            background: #ddd;
        }
        /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */

        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
            }
        }
        /* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */

        @media screen and (max-width: 400px) {
            .navbar a {
                float: none;
                width: 100%;
            }
        }
    </style>



    <div id="logged_in_state" class="header" style="display:none">
        <h1>&nbsp;</h1>
        <p>&nbsp;<b>&nbsp;</b> &nbsp;</p>
    </div>

    <div class="navbar">
        <a href="#" class="active">Home</a>

        <a href="#" id="loginbutton" class="right">Sign In</a>
    </div>


    <div class="main">
        <h2>HEADING</h2>
        <h5>description, Oct 3, 2018</h5>
        <div class="fakeimg" style="height:200px;">

            <div id="ius-sign-up-widget"></div>
            <div id="ius-sign-in-widget"></div>

            <div>
                <p id="one" style="color: green;" />
                <p id="userId" />
                <p id="ticket" />

                <p id="two" style="color: green;" />
                <p id="displayname" />
                <p id="email" />
                <p id="firstname" />
                <p id="lastname" />

                <p id="three" style="color: green;" />
                <p id="realm" />
                <p id="realmtype" />

                <p id="four" style="color: green;" />
                <p id="grant" />
                <p id="grantstatus" />
                <p id="qboa" />

                <br/>
                <br/>
                <br/>
                <br/>
                <p>&nbsp;</p>
                <div>



                </div>

            </div>
        </div>


        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script src="https://accounts.intuit.com/IUS-Plugins/v2/scripts/en_us/ius-core.js"></script>
        <script>
            function signIn() {
                if ($('#ius-sign-in-widget').children().length == 0) {
                    intuit.ius.signIn.setup({
                        offeringId: 'your offering id',
                        enableSelectAccount: true,
                        isLowSecurity: true,
                        signUpLink: function () {
                            $('#ius-sign-in-widget').hide();
                            signUp();
                        },
                        onSignInSuccess: function (user) {
                            location.reload()
                        },
                        onSignInFail: function () {
                            alert('sign in failed')
                        }
                    });
                } else {
                    $('#ius-sign-in-widget').show();
                }
            }

            function signUp() {
                if ($('#ius-sign-up-widget').children().length == 0) {
                    intuit.ius.signUp.setup({
                        offeringId: 'your offering id',
                        enableSelectAccount: true,
                        isLowSecurity: true,
                        enableMinimalFields: true,
                        signInLink: function () {
                            $('#ius-sign-up-widget').hide();
                            signIn()
                        },
                        onSignUpSuccess: function (user, realmID, iamtkt) {
                            debugger;
                            location.reload()
                        },
                        onSignUpFail: function () {
                            alert('sign up failed')
                        },
                        onEmailAccountExistsSuccess: function () {
                            alert('yo')
                        }
                    });
                } else {
                    $('#ius-sign-up-widget').show();
                }
            }

            intuit.ius.apis.verifyIAMTicket({
                offeringId: 'your offering id',
                async: true,
                done: function (iamticket) {

                    console.log(JSON.stringify(iamticket));
                    $('#userId').html("<b>Auth Id: <b>" + iamticket.userId);
                    $('#one').html("Ticket Info");
                    //$('#ticket').html("Ticket Id: "+iamticket.ticket);

                    intuit.ius.apis.getRealms({
                        offeringId: 'your offering id',
                        done: function (realms) {
                            console.log('realms:', realms);

                            if (realms != null) {

                                var realmdata = [];
                                var realmdataobj = {
                                };

                                for (var i = 0; i < realms.length; i++) {
                                    var obj = realms[i];
                                    realmdata.push(obj.realmId);
                                }
                                realmdataobj["realmIds"] = realmdata;

                                console.log("realmdata" + realmdata);
                                console.log("realmdataobj" + JSON.stringify(realmdataobj));


                                $.ajax({
                                    type: 'GET',
                                    url: 'https://sbgmpzn.api.intuit.com/v1/pznIpdRecommendation',
                                    cache: false,
                                    xhrFields: {
                                        withCredentials: true
                                    },

                                    crossDomain: true,
                                    contentType: 'application/json',
                                    beforeSend: function (request) {
                                        request.setRequestHeader('Authorization', 'Intuit_APIKey intuit_apikey=prdakyresoc2f2MO896tOv4t53Ful4gQSsFRajiR');
                                    },
                                    success: function (data, status) {
                                    },
                                    error: function (jqXhr, textStatus, errorThrown) {
                                        console.log('failure:', jqXhr, textStatus, errorThrown)
                                    }
                                });

                            }



                            if (realms != null) {
                                $('#three').html("Company Info");
                                $('#realm').html("<b>Realm Id: <b>" + realms[0].realmId)
                                $('#realmtype').html("Realm Type: " + realms[0].realmType)
                                $('#displayname').html("Realm Display Name: " + realms[0].displayName)
                            }
                        }
                    });

                    intuit.ius.apis.getUser({
                        offeringId: 'your offering id',
                        done: function (user) {
                            console.log('user:', user);

                            $('#email').html("<b>Email Id: <b>" + user.email.address)
                            if (user.fullName) {
                                $('#firstname').html("<b>First Name: <b>" + user.fullName[0].givenName)
                                $('#lastname').html("<b>Last  Name: <b>" + user.fullName[0].surName)
                            }
                            $('#two').html("User Info");

                            $('#loginbutton').html("Sign Out");
                            $('#logged_in_state').show();

                            console.log($('#line1').val());
                        }
                    });




                },
                fail: function (errorObj) {
                    $('#loginbutton').html("Sign In");
                    signIn();
                }
            });


            function signOutUser() {
                intuit.ius.apis.signOut({
                    offeringId: 'Intuit.cto.iam.ius',
                    async: false,
                    done: function () {
                        location.reload()
                    },
                    fail: function (errorObj) {
                    }
                });
            }

            $("#loginbutton").click(function () {
                signOutUser();
            });
        </script>

        </body>

</html>
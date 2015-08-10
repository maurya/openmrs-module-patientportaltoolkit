/**
 * Created by Maurya on 22/06/2015.
 */
jq = jQuery;
jq(document).ready(function(){
    jq(".gen-history-date").val(jq.datepicker.formatDate('mm/dd/yy', new Date(jq(".gen-history-date").val())));
    $('.dateFormatter').each(function() {
        var dateFormat = $(this).text();
        if(dateFormat == null || dateFormat==''){
            $(this).html(null);
        }
        //console.log(dateFormat);
        else {
            var dateFormat = $.datepicker.formatDate('mm/dd/yy', new Date(dateFormat));
            //alert(dateFormat);
            $(this).html(dateFormat);
        }
    });
    jq(".reformatText").each(function() {
        var str=$(this).text().toString();
        var newStr=str[0].toUpperCase()+str.slice(1).toLowerCase();
        $(this).text(newStr);
        //console.log("----"+newStr+"----");
       // var res = str.replace(/blue/g, "red");
       // document.getElementById("demo").innerHTML = res;
    });
    jq(function() {
        jq('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            localStorage.setItem('lastTab', jq(this).attr('href'));
        });
        var lastTab = localStorage.getItem('lastTab');
        if (lastTab) {
            jq('[href="' + lastTab + '"]').tab('show');
        }
    });

    jq(".journalComment").keydown(
        function (event) {

            if (event.which == 13) {
                var journalID=(this.id).split("commentbox")[1];
                console.log(journalID);
                jq.get("commentBox/saveComment.action", {commentContent: this.value, parentId:journalID}, function(){
                    location.reload();
                });
                return false;
            }


        });
    jq("#statusUpdaterButton").click(
        function () {
            jq.get("statusUpdater/savePost.action", {title: jq("#statusUpdaterTitle").val(), content:jq("#statusUpdaterContent").val()}, function(){
                location.reload();
            });
        });
    jq(".removeRelationCloseButton").click(
        function () {
            jq("#remove-relationId").val(this.id.split("removeRelation")[1]);
        });
    jq("#relation-delete-btn").click(
        function () {
            jq.get("removeRelationship/removeRelationship.action", {relationshipId:  jq("#remove-relationId").val()}, function(){
                location.reload();
            });
        });
    //jq("#searchPersonsInput").keydown(
    //    function () {
    //        if(jq("#searchPersonsInput").val().length>2)
    //        jq.get("searchPersons/getPersonsFromSearch.action", {searchQuery:  jq("#searchPersonsInput").val()}, function(data){
    //            alert(data);
    //        });
    //    });

    jq("#addrelationshipbutton").click(
        function () {
          jq.get("addRelationship/addRelationshipfromForm.action", {given:  jq("#givenpersonName").val(),family:  jq("#familypersonName").val(),gender:jq("#genderSelect").val(),personEmail:jq("#personEmail").val(),personRelationType:jq("#relationshipSelectaddRelation").val()}, function(){
            });
            setTimeout(function(){
                location.reload();
            }, 2000);
        });

    jq(".editGenHistButton").click(
        function () {
            jq("#genHistEncounterHolder").val(this.id);
        });
   var genHistdatePicker= jq( ".gen-history-date" ).datepicker({
        format: 'mm/dd/yyyy'
    }).on('changeDate', function() {
       genHistdatePicker.hide();
   }).data('datepicker');

    jq(".cancelModal").click(
        function () {
            location.reload();
        });
    //$('#edit-genHistory-modal').on('hidden.bs.modal', function () {
    //    location.reload();
    //})
    $('#saveGeneralHistorybutton').click(
        function () {
            jq.get("genHistoryModal/saveGenHistoryForm.action", {encounterId: jq("#genHistEncounterHolder").val(), cancerType:  jq("#genHistoryCancerTypeSelect").val(),cancerStage:  jq("#genHistoryCancerStageSelect").val(),cancerDate:jq("#genHistoryDate").val(),cancerAbnormalityBool:jq("#genHistoryCancerabnormalitySelect").val(),cancerAbnormalityType:jq("#genHistoryCancerabnormalityTypeSelect").val(),genHistoryCancerPcpName:jq("#genHistoryCancerPcpName").val(),genHistoryCancerPcpEmail:jq("#genHistoryCancerPcpEmail").val(),genHistoryCancerPcpPhone:jq("#genHistoryCancerPcpPhone").val()}, function(){
            });
            location.reload();
        });

    var surgerydatePicker= jq( "#surgeryDate" ).datepicker({
        format: 'mm/dd/yyyy'
    }).on('changeDate', function() {
        surgerydatePicker.hide();
    }).data('datepicker');
    $('.editSurgeryButton').click(
        function () {
          var encounterID=this.id;
            $("#surgeryEncounterHolder").val(encounterID);
            var surgeryTypeList=[];
            $('.'+encounterID+'surgeryType').each(function() {
               // console.log(($( this ).attr('id').split('surgeryType')[1]));
                surgeryTypeList.push(($( this ).attr('id').split('surgeryType')[1]));
            });
            $('.surgeryTypesInModal').each(function() {
                if ( $.inArray(($( this ).val()).split('split')[1], surgeryTypeList)>-1) {
                    $(this).prop('checked', true);
                }
            });

            if($('#'+encounterID+'surgeryComplications').text() != null || $('#'+encounterID+'surgeryComplications').text() != ''){
                $('#majorComplicationsBoolSelect').val('1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
                $('#majorComplicationsTypeAnswer').val($('#'+encounterID+'surgeryComplications').text());
            }
            else{
                $('#majorComplicationsBoolSelect').val('1066AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
            }
            $("#surgeryDate").val($.datepicker.formatDate('mm/dd/yy', new Date($('#'+encounterID+'surgeryDate').text())));
           // console.log($('#'+encounterID+'surgeryPCPName').text());
            $("#surgeonPcpName").val($('#'+encounterID+'surgeryPCPName').text());
            $("#surgeonPcpEmail").val($('#'+encounterID+'surgeryPCPEmail').text());
            $("#surgeonPcpPhone").val($('#'+encounterID+'surgeryPCPPhone').text());

            $("#surgeryInstitutionName").val($('#'+encounterID+'surgeryinstituteName').text());
            $("#surgeryInstitutionCity").val($('#'+encounterID+'surgeryCity').text());
            $("#surgeryInstitutionState").val($('#'+encounterID+'surgeryState').text());
        });

    $('#saveSurgeryButton').click(
        function () {
            var surgeryTypeList='';
            $('.surgeryTypesInModal').each(function() {
                if ( $(this).is(':checked')) {
                   // console.log($( this ).val().split('split')[0]);
                    surgeryTypeList=surgeryTypeList+($( this ).val().split('split')[0])+"split";
                }
            });
            //console.log(surgeryTypeList);
            jq.get("surgeriesModal/saveSurgeryForm.action", {encounterId: jq("#surgeryEncounterHolder").val(), surgeryTypes: surgeryTypeList,surgeryComplications:  jq("#majorComplicationsBoolSelect").val(),majorComplicationsTypeAnswer:jq("#majorComplicationsTypeAnswer").val(),surgeryDate:jq("#surgeryDate").val(),surgeonPcpName:jq("#surgeonPcpName").val(),surgeonPcpEmail:jq("#surgeonPcpEmail").val(),surgeonPcpPhone:jq("#surgeonPcpPhone").val(),surgeryInstitutionName:jq("#surgeryInstitutionName").val(),surgeryInstitutionCity:jq("#surgeryInstitutionCity").val(),surgeryInstitutionState:jq("#surgeryInstitutionState").val()}, function(){
           // jq.get("surgeriesModal/saveSurgeryForm.action", function(){
            });
            setTimeout(
                function()
                {
                    location.reload();
                }, 2000);
        });

    $('.editChemotherapyButton').click(
        function () {
            var encounterID=this.id;
            $("#chemotherapyEncounterHolder").val(encounterID);
            var chemotherapyMedList=[];
            $('.'+encounterID+'chemotherapymed').each(function() {
                // console.log(($( this ).attr('id').split('surgeryType')[1]));
                chemotherapyMedList.push(($( this ).attr('id').split('chemotherapymed')[1]));
            });
            $('.chemotherapyMedTypesInModal').each(function() {
                if ( $.inArray(($( this ).val()).split('split')[1], chemotherapyMedList)>-1) {
                    $(this).prop('checked', true);
                }
            });

            if($('#'+encounterID+'centralLine').text()=="Yes"){
                $('#centralLineBoolSelect').val('1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
            }
            else{
                $('#centralLineBoolSelect').val('1066AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
            }
            $('chemoStartDate').val($.datepicker.formatDate('mm/dd/yy', new Date($('#'+encounterID+'chemotherapyStartDate').text())));
            $('chemoEndDate').val($.datepicker.formatDate('mm/dd/yy', new Date($('#'+encounterID+'chemotherapyEndDate').text())));
            // console.log($('#'+encounterID+'surgeryPCPName').text());
            $("#oncologistPcpName").val($('#'+encounterID+'chemotherapyPCPName').text());
            $("#oncologistPcpEmail").val($('#'+encounterID+'chemotherapyPCPEmail').text());
            $("#oncologistPcpPhone").val($('#'+encounterID+'chemotherapyPCPPhone').text());

            $("#chemotherapyInstitutionName").val($('#'+encounterID+'chemotherapyinstituteName').text());
            $("#chemotherapyInstitutionCity").val($('#'+encounterID+'chemotherapyCity').text());
            $("#chemotherapyInstitutionState").val($('#'+encounterID+'chemotherapyState').text());
        });

});
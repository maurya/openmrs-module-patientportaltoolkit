${ ui.includeFragment("patientportaltoolkit", "headerForApp") }
<script type="text/javascript">
    \$(document).ready(function(){
        \$('#patientPortalJournals').addClass('active');
    });
</script>
<body>
<div class="container bgcontent col-sm-8 col-sm-offset-2">

    <% if(person.isPatient()) { %>
    ${ ui.includeFragment("patientportaltoolkit", "statusUpdater") }
    <br>
    <% } %>
    ${ ui.includeFragment("patientportaltoolkit", "feedItems") }
    </div>
</body>
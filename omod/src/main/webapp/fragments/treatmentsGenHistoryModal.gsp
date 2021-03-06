<script> jq = jQuery;
window.onload = function() {
    Formio.createForm(document.getElementById('generalHistoryForm'), {components: [
            {
                type: 'select',
                key: 'cancertype',
                label: 'Cancer Type',
                placeholder: 'Select a Cancer Type',
                dataSrc: "url",
                data:{
                    url:'http://localhost:8080/openmrs/ws/rest/v1/concept/cdf6d767-2aa3-40b6-ae78-0386eebe2411/answers'
                },
                input: true
            },
            {
                type: 'textfield',
                key: 'lastName',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                input: true
            },
            {
                type: 'button',
                action: 'submit',
                label: 'Submit',
                theme: 'primary'
            }
        ]});
}
</script>
<div class="modal fade modal-wide treatment_form_uniform_label_width"  id="edit-genHistory-modal" role="dialog" aria-labelledby="editGenHistoryLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close cancelModal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="editGenHistoryLabel">Edit General History</h4>
            </div>

            <div class="modal-body">
                <div id='generalHistoryForm'></div>
                <input id="genHistEncounterHolder" type="hidden" value="">
                <% if (latestTreatmentSummary) { %>
                <% if (latestTreatmentSummary.obs) { %>
                <% latestTreatmentSummary.obs.each { obs -> %>
                <% /* cancer Type*/ %>
                <% if (obs.concept.uuid=="cdf6d767-2aa3-40b6-ae78-0386eebe2411") { %>
                <form class="form-inline" role="form"> <label class="reformatText">${(obs.concept.getName())} </label>
                    <select class="form-control" id="genHistoryCancerTypeSelect">
                        <% obs.concept.getAnswers().each { answers -> %>
                        <% if (obs.getValueCoded().uuid==answers.answerConcept.uuid) { %>
                        <option selected value="${(answers.answerConcept.uuid)}" class="reformatText">${(answers.answerConcept.getName())}</option>
                        <% } else {%>
                        <option  value="${(answers.answerConcept.uuid)}" class="reformatText">${(answers.answerConcept.getName())}</option>
                        <% } %>
                        <% } %>
                    </select> </form>
                <% } %>
                <% } %>
                <% latestTreatmentSummary.obs.each { obs -> %>
                <% /* cancer Stage*/ %>
                <% if (obs.concept.uuid=="efa3f9eb-ade4-4ddb-92c9-0fc1119d112d") { %>
                <form class="form-inline" role="form"> <label class="reformatText">${(obs.concept.getName())} </label>
                    <select class="form-control" id="genHistoryCancerStageSelect">
                        <% obs.concept.getAnswers().each { answers -> %>
                        <% if (obs.getValueCoded().uuid==answers.answerConcept.uuid) { %>
                        <option selected  value="${(answers.answerConcept.uuid)}" class="reformatText">${(answers.answerConcept.getName())}</option>
                        <% } else {%>
                        <option  value="${(answers.answerConcept.uuid)}" class="reformatText">${(answers.answerConcept.getName())}</option>
                        <% } %>
                        <% } %>
                    </select> </form>
                <% } %>
                <% } %>

                <% latestTreatmentSummary.obs.each { obs -> %>
                <% /* cancer Date*/ %>
                <% if (obs.concept.uuid=="654e32f0-8b57-4d1f-845e-500922e800f6") { %>
                <form class="form-inline" role="form"> <label class="reformatText">${(obs.concept.getName())}  </label>
                    <input class="form-control gen-history-date" id="genHistoryDate" type="text" value="${pptutil.formatDate((obs.getValueDatetime()))}"/>
                </form>
                <% } %>
                <% } %>

                <% latestTreatmentSummary.obs.each { obs -> %>
                <% /* cancer abnormality*/ %>
                <% if (obs.concept.uuid=="395878ae-5108-4aad-8ad8-9b88e812d278") { %>
                <form class="form-inline" role="form"> <label class="reformatText">${(obs.concept.getName())}  </label>
                    <select class="form-control" id="genHistoryCancerabnormalitySelect">
                        <% obs.concept.getAnswers().each { answers -> %>
                        <% if (obs.getValueCoded().uuid==answers.answerConcept.uuid) { %>
                        <option selected  value="${(answers.answerConcept.uuid)}">${(answers.answerConcept.getName())}</option>
                        <% } else {%>
                        <option  value="${(answers.answerConcept.uuid)}">${(answers.answerConcept.getName())}</option>
                        <% } %>
                        <% } %>
                    </select> </form>
                <% } %>
                <% } %>

                <% latestTreatmentSummary.obs.each { obs -> %>
                <% /* cancer abnormality type*/ %>

                <form class="form-inline" id="cancerAbnormalitySelectForm" role="form" hidden> <label class="reformatText">${(cancerAbnormalityType.getName())}  </label>
                    <select class="form-control" id="genHistoryCancerabnormalityTypeSelect">
                        <% cancerAbnormalityType.getAnswers().each { answers -> %>
                        <% if (generalCancerAbnormality==answers.answerConcept.uuid) { %>
                        <option selected  value="${(answers.answerConcept.uuid)}" class="reformatText">${(answers.answerConcept.getName())}</option>
                        <% } else {%>
                        <option  value="${(answers.answerConcept.uuid)}" class="reformatText">${(answers.answerConcept.getName())}</option>
                        <% } %>
                        <% } %>
                    </select>
                </form>
                <% } %>

                <label>Primary Care Physician : </label>
                <br><br>
                <% latestTreatmentSummary.obs.each { obs -> %>
                <% /* pcp name*/ %>
                <% if (obs.concept.uuid=="c2cb2220-c07d-47c6-a4df-e5918aac3fc2") { %>
                <form class="form-inline" role="form"> <label>Name </label>
                    <input class="form-control" id="genHistoryCancerPcpName" type="text" value="${(obs.getValueText())}"/>
                </form>
                <% } %>
                <% } %>
                <% latestTreatmentSummary.obs.each { obs -> %>
                <% /* pcp email*/ %>
                <% if (obs.concept.uuid=="898a0028-8c65-4db9-a802-1577fce59864") { %>
                <form class="form-inline" role="form"> <label>Email </label>
                    <input class="form-control" id="genHistoryCancerPcpEmail" type="text" value="${(obs.getValueText())}"/>
                </form>
                <% } %>
                <% } %>

                <% latestTreatmentSummary.obs.each { obs -> %>
                <% /* pcp phone*/ %>
                <% if (obs.concept.uuid=="9285b227-4054-4830-ac32-5ea78462e8c4") { %>
                <form class="form-inline" role="form"> <label>Phone </label>
                    <input class="form-control" id="genHistoryCancerPcpPhone" type="text" value="${(obs.getValueText())}"/>
                </form>
                <% } %>
                <% } %>
                <% } %>
                <% } %>
            </div>
            <div class="modal-footer">
                <div class="button-div pull-right">
                    <button type="button" class="btn btn-default cancelModal">Cancel Changes</button>
                    <button type="button" class="btn btn-primary" id="saveGeneralHistorybutton">Save Changes</button>

                </div>
            </div>
        </div>
    </div>
</div>
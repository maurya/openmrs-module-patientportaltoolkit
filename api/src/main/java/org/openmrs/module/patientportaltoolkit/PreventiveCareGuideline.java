/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.patientportaltoolkit;

import org.openmrs.Concept;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by maurya on 2/1/17.
 */
public class PreventiveCareGuideline {
    private Integer id;
    private String name;
    private Concept followupProcedure;
    private Set<PreventiveCareGuidelineInterval> pcgguidelineIntervalSet = new HashSet<PreventiveCareGuidelineInterval>(0);
    private Integer cancerTypeId;
    private String followupTimeLine;
//    private Integer noOfInterval;
//    private Integer intervalLength;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Concept getFollowupProcedure() {
        return followupProcedure;
    }

    public void setFollowupProcedure(Concept followupProcedure) {
        this.followupProcedure = followupProcedure;
    }

    public Set<PreventiveCareGuidelineInterval> getPcgguidelineIntervalSet() {
        return pcgguidelineIntervalSet;
    }

    public void setPcgguidelineIntervalSet(Set<PreventiveCareGuidelineInterval> pcgguidelineIntervalSet) {
        this.pcgguidelineIntervalSet = pcgguidelineIntervalSet;
    }

    public Integer getCancerTypeId() {
        return cancerTypeId;
    }

    public void setCancerTypeId(Integer cancerTypeId) {
        this.cancerTypeId = cancerTypeId;
    }

    public String getfollowupTimeLine() {
        return followupTimeLine;
    }

    public void setfollowupTimeLine(String followUpTimeLine) {
        this.followupTimeLine = followUpTimeLine;
    }
//
//
//    public Integer getIntervalLength() {
//        return intervalLength;
//    }
//
//    public void setIntervalLength(Integer intervalLength) {
//        this.intervalLength = intervalLength;
//    }

}

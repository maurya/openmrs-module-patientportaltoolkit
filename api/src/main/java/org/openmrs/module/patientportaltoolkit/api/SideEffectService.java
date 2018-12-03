/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
package org.openmrs.module.patientportaltoolkit.api;

import org.openmrs.Concept;
import org.openmrs.Patient;
import org.openmrs.api.OpenmrsService;
import org.openmrs.module.patientportaltoolkit.SideEffect;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Maurya on 02/06/2015.
 */
public interface SideEffectService extends OpenmrsService {

    @Transactional(readOnly = true)
    List<SideEffect> getAllSideEffects();

    @Transactional(readOnly = true)
    List<Concept> getAllSideEffectsForPatient(Patient patient);

    @Transactional
    void saveSideEffect(SideEffect sideEffectObj);

    @Transactional
    SideEffect getSideEffect(int id);

    @Transactional
    void deleteSideEffect(SideEffect sideEffectObj);
}

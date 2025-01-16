/*
 * Copyright (c) 2025, WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package org.wso2.carbon.apimgt.rest.api.publisher.v1.common.mappings;

import org.wso2.carbon.apimgt.api.model.Label;
import org.wso2.carbon.apimgt.rest.api.publisher.v1.dto.LabelDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.v1.dto.LabelListDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * This class used for mapping utility to Label related operations
 */
public class LabelMappingUtil {

    /**
     * Convert list of Labels to list of LabelDTOs.
     *
     * @param labels List of labels
     * @return List<LabelDTO> list containing label data
     */
    public static List<LabelDTO> fromLabelListToLabelDTOList(List<Label> labels) {
        List<LabelDTO> labelDTOList = new ArrayList<>();
        if (labels == null) {
            return labelDTOList;
        }
        for (Label label : labels) {
            LabelDTO labelDTO = new LabelDTO();
            labelDTO.setId(label.getLabelId());
            labelDTO.setName(label.getName());
            labelDTO.setDescription(label.getDescription());
            labelDTOList.add(labelDTO);
        }
        return labelDTOList;
    }

    /**
     * Converts a LabelDTO list to Label list
     *
     * @param labelDTOs LabelDTO list
     * @param providerDomain tenant domain of the provider
     * @return List<Label> labels list
     */
    public static List<Label> fromLabelDTOListToLabelList(List<LabelDTO> labelDTOs, String providerDomain) {
        List<Label> labels = new ArrayList<>();
        for (LabelDTO labelDTO : labelDTOs) {
            Label label = new Label();
            label.setLabelId(labelDTO.getId());
            label.setName(labelDTO.getName());
            label.setType("API");
            label.setDescription(labelDTO.getDescription());
            label.setTenantDomain(providerDomain);
            labels.add(label);
        }
        return labels;
    }

    /**
     * Convert list of labels to LabelListDTO.
     *
     * @param labels List of labels
     * @return LabelListDTO list containing label data
     */
    public static LabelListDTO fromLabelListToLabelListDTO(List<Label> labels) {
        LabelListDTO labelListDTO = new LabelListDTO();
        labelListDTO.setCount(labels.size());
        labelListDTO.setList(fromLabelListToLabelDTOList(labels));
        return labelListDTO;
    }
}

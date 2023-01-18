package org.wso2.carbon.apimgt.internal.service.impl;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.cxf.jaxrs.ext.MessageContext;
import org.wso2.carbon.apimgt.api.APIAdmin;
import org.wso2.carbon.apimgt.api.APIManagementException;
import org.wso2.carbon.apimgt.api.dto.KeyManagerConfigurationDTO;
import org.wso2.carbon.apimgt.impl.APIAdminImpl;
import org.wso2.carbon.apimgt.impl.APIConstants;
import org.wso2.carbon.apimgt.internal.service.KeymanagersApiService;
import org.wso2.carbon.apimgt.internal.service.dto.KeyManagerDTO;
import org.wso2.carbon.apimgt.internal.service.utils.SubscriptionValidationDataUtil;
import org.wso2.carbon.apimgt.rest.api.util.utils.RestApiUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.ws.rs.core.Response;

/**
 * This Class contains KeyManagerInternal Data Service Implementations.
 */
public class KeymanagersApiServiceImpl implements KeymanagersApiService {

    Log log = LogFactory.getLog(KeymanagersApiServiceImpl.class);

    public static KeyManagerDTO toKeyManagerDTO(String tenantDomain,
                                                KeyManagerConfigurationDTO keyManagerConfigurationDTO) {

        KeyManagerDTO keyManagerDTO = new KeyManagerDTO();
        keyManagerDTO.setEnabled(keyManagerConfigurationDTO.isEnabled());
        keyManagerDTO.setName(keyManagerConfigurationDTO.getName());
        keyManagerDTO.setTenantDomain(tenantDomain);
        keyManagerDTO.setType(keyManagerConfigurationDTO.getType());
        keyManagerDTO.setTokenType(KeyManagerDTO.TokenTypeEnum.fromValue(keyManagerConfigurationDTO.getTokenType()));
        keyManagerDTO.setConfiguration(keyManagerConfigurationDTO.getAdditionalProperties());
        return keyManagerDTO;
    }

    public Response keymanagersGet(String xWSO2Tenant, MessageContext messageContext) {

        APIAdmin apiAdmin = new APIAdminImpl();
        List<KeyManagerConfigurationDTO> keyManagerConfigurations = new ArrayList<>();
        String organizationFromQueryParam = RestApiUtil.getOrganization(messageContext);
        try {
            if (StringUtils.isNotEmpty(organizationFromQueryParam) &&
                    organizationFromQueryParam.equalsIgnoreCase(APIConstants.ORG_ALL_QUERY_PARAM)) {
                Map<String, List<KeyManagerConfigurationDTO>> keyManagerConfigurationsPerOrg =
                        apiAdmin.getAllKeyManagerConfigurations();
                for (List<KeyManagerConfigurationDTO> configList: keyManagerConfigurationsPerOrg.values()) {
                    keyManagerConfigurations.addAll(configList);
                }
            } else {
                String organization = SubscriptionValidationDataUtil.validateTenantDomain(xWSO2Tenant, messageContext);
                keyManagerConfigurations = apiAdmin.getKeyManagerConfigurationsByOrganization(organization);
            }

            List<KeyManagerDTO> keyManagerDTOList = new ArrayList<>();
            for (KeyManagerConfigurationDTO keyManagerConfiguration : keyManagerConfigurations) {
                keyManagerDTOList.add(toKeyManagerDTO(xWSO2Tenant, keyManagerConfiguration));
            }
            return Response.ok(keyManagerDTOList).build();
        } catch (APIManagementException e) {
            RestApiUtil.handleInternalServerError("Error while retrieving key manager configurations", e, log);
        }
        return null;
    }
}

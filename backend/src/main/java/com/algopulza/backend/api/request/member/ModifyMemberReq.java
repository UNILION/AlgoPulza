package com.algopulza.backend.api.request.member;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@ApiModel("ModifyMemberReq")
@Data
public class ModifyMemberReq {
    @ApiModelProperty(value = "회원 아이디", required = true)
    private Long memberId;

    @ApiModelProperty(value = "그룹 이름", required = true)
    private String organizationName;

    @ApiModelProperty(value = "그룹 타입", required = true)
    private String organizationType;
}

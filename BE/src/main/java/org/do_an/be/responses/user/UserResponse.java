package org.do_an.be.responses.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.do_an.be.entity.Role;
import org.do_an.be.entity.User;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponse {
    @JsonProperty("id")
    private Integer id;

    private String telephone;

    @JsonProperty("address")
    private String address;

    @JsonProperty("profile_image")
    private String profileImage;

    @JsonProperty("is_active")
    private boolean active;

    @JsonProperty("role")
    private Role role;
    public static UserResponse fromUser(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .telephone(user.getTelephone())
                .profileImage(user.getProfileImage())
                .build();
    }
}

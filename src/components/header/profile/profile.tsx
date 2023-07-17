import React, { FunctionComponent } from "react";
import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ProfileImage, StyledView } from "./profile.styles";

interface ProfileProps {
  imageSource: ImageSourcePropType;
  imgStyle: StyleProp<ImageStyle>;
}

const Profile: FunctionComponent<ProfileProps> = ({
  imageSource,
  imgStyle,
}) => {
  const navigation = useNavigation();
  return (
    <StyledView onPress={() => navigation.navigate("LemonCardScreen")}>
      <ProfileImage source={imageSource} style={imgStyle} resizeMode="cover" />
    </StyledView>
  );
};

export default Profile;
